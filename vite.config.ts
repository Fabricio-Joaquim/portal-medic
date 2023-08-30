import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ]
  }
})
