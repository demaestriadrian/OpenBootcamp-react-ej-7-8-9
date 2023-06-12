import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 5500,
  },
  base: '/OpenBootcamp-react-ej-7-8-9/',
})
