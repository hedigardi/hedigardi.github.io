// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    define: {
      'process.env': config().parsed
    },
    server: {
      host: true
    }
  }
})
