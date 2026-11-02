import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/floorInstall/' : '/',
  plugins: [
    vue(),
    {
      name: 'noindex-non-production',
      transformIndexHtml(html) {
        return mode === 'github' || mode === 'maintenance'
          ? html.replace('</head>', '<meta name="robots" content="noindex, nofollow" /></head>')
          : html
      },
    },

    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))
