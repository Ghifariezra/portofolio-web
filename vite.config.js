import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@config': resolve(__dirname, 'src/config'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/components/pages'),
      '@section': resolve(__dirname, 'src/components/section'),
      '@shared': resolve(__dirname, 'src/components/shared'),
      '@form': resolve(__dirname, 'src/components/form'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@app': resolve(__dirname, 'src/app'),
      '@services': resolve(__dirname, 'src/services'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '~': resolve(__dirname, 'node_modules'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react(), tailwindcss(),],
})
