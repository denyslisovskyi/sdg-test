import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
});
