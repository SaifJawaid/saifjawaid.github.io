import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// important: for username.github.io repos
export default defineConfig({
  plugins: [react()],
  base: "/",   // ✅ ensures correct asset paths
});
