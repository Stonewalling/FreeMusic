import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import AutoImport from "unplugin-auto-import/vite"

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["react", "react-router-dom"],
    }),
    ,
    react(),
  ],
  // 配置路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    port: 3002,
    proxy: {
      "/baseAPi": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: true,
        rewrite: (path) => path.replace(/^\/baseAPi/, ""),
      },
    },
  },
})
