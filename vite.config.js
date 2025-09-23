import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For user.github.io repos, base should be "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
