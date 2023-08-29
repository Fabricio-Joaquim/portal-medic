import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve:{
    alias:[
      {find: "@", replacement: path.resolve(__dirname, "src") },
    ]
  }
})
