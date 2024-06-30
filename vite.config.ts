import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@src': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src', 'shared', 'styles'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@features': path.resolve(__dirname, 'src', 'features'),
      '@widgets': path.resolve(__dirname, 'src', 'widgets'),
    }
  }
})
