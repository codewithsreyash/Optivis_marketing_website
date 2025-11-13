import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // Correct base path for GitHub Pages
  base: process.env.NODE_ENV === 'production'
    ? '/Optivis_marketing_website/'   // your actual repo name
    : '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',   // REQUIRED for GitHub + Vercel
  },

  server: {
    port: 3000,
    open: true,
  },
});
