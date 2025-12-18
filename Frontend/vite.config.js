import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    tailwindcss(),
  ],
  extend: {
    animation: {
      'bounce-slow': 'bounce 3s infinite',
    },
    colors: {
      customIndigo: '#5538F6',
    },
  }
})