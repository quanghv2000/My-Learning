import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"),
      // "@assets": path.resolve(__dirname, "src/assets"),
      assets: path.resolve(__dirname, "src/assets"),
      layouts: path.resolve(__dirname, "src/layouts"),
      scss: path.resolve(__dirname, "src/scss"),
    },
  },
});
