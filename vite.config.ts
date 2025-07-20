import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Add any necessary plugins
  build: {
    outDir: 'dist', // Output directory for production build
  },
  server: {
    port: 3000, // Development server port
  },
})
