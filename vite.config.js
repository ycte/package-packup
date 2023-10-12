import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   include: /\.[jt]sx?$/,
  //   loader: { '.js': '.jsx' }
  // },
  // build: {
  //   minify: false,
  // },
  resolve: {
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  
})