import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (existsSync(index)) {
        copyFileSync(index, resolve("dist/404.html"));
      }
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), githubPagesSpaFallback()],
  base: command === "build" || isPreview ? "/reactPlayGround/" : "/",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
}));
