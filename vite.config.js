import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', 'three-globe']
  },
  build: {
    target: 'esnext'
  },
  assetsInclude: ['**/*.glb']  // ✅ Add this to allow importing .glb files
})
