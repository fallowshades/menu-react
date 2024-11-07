import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    server: {
      hmr: true,
      proxy: {
        '/api': {
          target: 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy) => {
            // Set custom headers
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('x-zocom', process.env.PIZZA_API_KEY)
            })
          },
        },
      },
    },
  },
})
