import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Use '/' in dev and '/about-me/' in production builds (e.g., GitHub Pages)
var isProd = process.env.NODE_ENV === 'production';
var base = process.env.BASE || (isProd ? '/about-me/' : '/');
export default defineConfig({
    plugins: [react()],
    base: base,
});
