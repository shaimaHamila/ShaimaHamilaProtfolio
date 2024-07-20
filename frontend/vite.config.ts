import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://shaimahmila.pages.dev",
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
