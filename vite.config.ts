import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import fs from 'node:fs';
import { robots, sitemap, siteOrigin } from './seo.ts';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => {
  const origin = siteOrigin(loadEnv(mode, process.cwd(), '').VITE_SITE_URL);
  return {
    plugins: [react(), tailwindcss(), {
      name: 'site-seo',
      closeBundle() {
        fs.writeFileSync('dist/robots.txt', robots(origin));
        fs.writeFileSync('dist/sitemap.xml', sitemap(origin));
      },
    }],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
