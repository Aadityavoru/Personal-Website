import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  // For user pages (username.github.io), use base: '/'
  // For project pages (username.github.io/repo-name), use base: '/repo-name/'
  base: process.env.NODE_ENV === 'production' ? '/Personal-Website/' : '/',
})

