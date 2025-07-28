// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://studiosoup.in',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'swiper': ['swiper'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['swiper'],
    },
  },
  experimental: {
    assets: true,
  },
});
