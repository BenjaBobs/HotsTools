import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    assetsInlineLimit: 0,
    sourcemap: true,
  },
  base: '/HotsTools/',
  plugins: [react()],
});
