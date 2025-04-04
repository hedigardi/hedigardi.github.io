import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  server: {
    middleware: (req, res, next) => {
      if (req.url.endsWith('.jsx')) {
        res.setHeader('Content-Type', 'text/javascript');
      }
      next();
    }
  }
})
