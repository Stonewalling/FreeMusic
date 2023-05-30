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
    port: 3000,
    proxy: {
      "/bilApi": {
        target: "https://api.bilibili.com",
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: false,
        rewrite: (path) => path.replace(/^\/myflag/, ""),
      },
    },
  },
})
