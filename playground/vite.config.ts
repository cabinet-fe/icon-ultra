import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
  },
  base: '/icon-ultra/',
  server: {
    host: true,
  },
})
