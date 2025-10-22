import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base path for GitHub Pages
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/about-me/' : '/',
}))
