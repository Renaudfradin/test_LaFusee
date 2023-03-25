import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@style': path.resolve(__dirname,'./src/style')
    }
  },
  plugins: [react()]
})
