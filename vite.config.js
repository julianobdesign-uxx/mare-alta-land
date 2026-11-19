import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" gera caminhos relativos: funciona no Vercel e no GitHub Pages (inclusive em subpasta).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
