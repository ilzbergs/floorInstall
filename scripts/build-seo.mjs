import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createServer } from 'vite'

const projects = JSON.parse(await readFile('public/gallery-seed.json', 'utf8')).filter(p => p.published)
const template = await readFile('dist/index.html', 'utf8')
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const server = await createServer({ mode: 'production', server: { middlewareMode: true }, appType: 'custom' })
try {
  const entry = await server.ssrLoadModule('/src/entry-seo.ts')
  const paths = entry.paths(projects)
  for (const path of [...paths, '/404']) {
    const { html, seo } = await entry.render(path, projects)
    let page = template
      .replace(/<title>[\s\S]*?<\/title>/, '<title>' + escape(seo.title) + '</title>')
      .replace(/<link rel="canonical"[^>]*>/, '<link rel="canonical" href="' + escape(seo.url) + '" />')
    const values = {
      description: seo.description, 'og:title': seo.title, 'og:description': seo.description,
      'og:url': seo.url, 'og:image': seo.image, 'og:image:alt': seo.title,
      'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:image': seo.image,
    }
    for (const [key, value] of Object.entries(values)) {
      const pattern = new RegExp('<meta (?:name|property)="' + key + '"[^>]*>', 'g')
      const property = key.startsWith('og:') ? 'property' : 'name'
      page = page.replace(pattern, '<meta ' + property + '="' + key + '" content="' + escape(value) + '" />')
    }
    const robots = seo.found ? 'index, follow, max-image-preview:large' : 'noindex, follow'
    page = page.replace('</head>', '<meta name="robots" content="' + robots + '" />\n<script id="seo-schema" type="application/ld+json">' + JSON.stringify(seo.structuredData).replaceAll('<', '\\u003c') + '</script>\n<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>\n</head>')
      .replace('<div id="app"></div>', () => '<script id="gallery-state" type="application/json">' + JSON.stringify(projects).replaceAll('<', '\\u003c') + '</script><div id="app">' + html + '</div>')
    const dir = path === '/' || path === '/404' ? 'dist' : 'dist' + path
    await mkdir(dir, { recursive: true })
    await writeFile(dir + (path === '/404' ? '/404.html' : '/index.html'), page)
  }
  await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + paths.map(path => '  <url><loc>https://floorinstall.lv' + escape(path) + '</loc></url>').join('\n') + '\n</urlset>\n')
  await writeFile('dist/.htaccess', `# Production: generated pages and genuine HTTP 404 responses.
DirectorySlash Off
ErrorDocument 404 /404.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  # Normalize the public domain before any internal page rewrites.
  RewriteCond %{HTTP_HOST} ^(?:www\\.)?floorinstall\\.lv(?::[0-9]+)?$ [NC]
  RewriteCond %{HTTPS} !=on [OR]
  RewriteCond %{HTTP_HOST} ^www\\.floorinstall\\.lv(?::[0-9]+)?$ [NC]
  RewriteRule ^ https://floorinstall.lv%{REQUEST_URI} [R=301,L,NE]
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.+?)/?$ $1/index.html [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ - [R=404,L]
</IfModule>
`)
  console.log('SEO: rendered ' + paths.length + ' pages, sitemap and 404.')
} finally {
  await server.close()
}
