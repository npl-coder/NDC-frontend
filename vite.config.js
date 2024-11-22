import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.[tj]sx?$/
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        notfound: resolve(__dirname, "404.html"),
      },
    },
  },
})
