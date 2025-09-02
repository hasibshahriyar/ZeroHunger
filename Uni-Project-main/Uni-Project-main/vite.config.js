import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 3000,      // Custom port
    strictPort: true, // Exit if port is already in use
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  }
})
