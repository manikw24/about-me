import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base when deploying to GitHub Pages under a repo name, e.g., '/about-me/'
// You can override via BASE env var in deploy script.
const base = process.env.BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
})


