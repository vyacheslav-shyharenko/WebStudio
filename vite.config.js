// vite.config.js
import { defineConfig } from "vite";
import path from "path";
import FullReload from "vite-plugin-full-reload";
import viteImagemin from "vite-plugin-imagemin";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig(({ command }) => ({
  root: "src",
  base: "./",
  publicDir: "../public",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: command === "serve",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },

  plugins: [
    FullReload(["src/**/*.html", "src/**/*.scss", "src/**/*.js"]),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "cleanupIDs", active: false },
        ],
      },
    }),
    purgeCss({
      content: ["./src/**/*.{html,js,ts}", "./src/index.html"],
      safelist: [/^observer-delay-/, "visible"],
    }),
  ],
}));
