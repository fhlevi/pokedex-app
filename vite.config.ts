import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  plugins: [
    react(),
    Pages({
      // This will look for files in the app folder
      dirs: 'app',
    }),
  ],
})
