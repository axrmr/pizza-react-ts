import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/pizza-react-ts/',
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '~': '/src/',
      API: '/src/API',
      components: '/src/components',
      scss: '/src/scss',
      pages: '/src/pages',
      consts: '/src/consts',
      store: '/src/store',
      hooks: '/src/hooks',
      img: '/src/img',
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
