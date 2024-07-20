import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    port: 3000, // Change the default port to 3000
    proxy: {
      "/api/v1": {
        target: "http://127.0.0.1:5000", // Use the Docker service name
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, ""), // Optional: adjust path if needed
        secure: false,
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
