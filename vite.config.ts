import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      name: "NewLogger",
      fileName: "index",
      formats: ["iife"],
    },
  },
});
