import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    assetsInlineLimit: 0,
    sourcemap: true,
  },
  base: '/HotsTools/',
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
