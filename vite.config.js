// WSL USERS ON WINDOWS ONLY (NOT NECESSARY FOR LINUX/MACOS)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});