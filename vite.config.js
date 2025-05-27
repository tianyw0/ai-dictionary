import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-dictionary/', // 设置正确的子路径
  plugins: [react()],
})
