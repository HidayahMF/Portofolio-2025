import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // biar bisa import '@/components/...' dll
    },
  },
  server: {
    port: 5173, // kamu bisa ubah port kalau perlu
    open: true, // otomatis buka di browser
  },
  define: {
    'process.env': process.env, // agar bisa pakai import.meta.env
  },
})
