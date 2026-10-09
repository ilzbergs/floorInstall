import { writeFile, readFile, rm } from 'node:fs/promises'
const html = await readFile('dist/index.html', 'utf8')
await writeFile('dist/index.html', html.replace('</head>', '<meta name="robots" content="noindex, nofollow" /></head>'))
await writeFile('dist/robots.txt', 'User-agent: *\nDisallow: /\n')
await writeFile('dist/.nojekyll', '')
await rm('dist/.htaccess', { force: true })
await rm('dist/sitemap.xml', { force: true })
