import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Use environment variable for base path
  base: process.env.VITE_BASE_PATH || "/ieee-sb-ukfcet/",

  server: {
    host: true,
    port: 8080,
  },
});