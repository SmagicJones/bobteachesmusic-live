import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import netlify from "@netlify/vite-plugin";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    netlifyReactRouter(),
    netlify(),
    sitemap({
      hostname: "https://bobteachesmusic.com",
      outDir: "build/client",
      dynamicRoutes: [
        "/",
        "/lessons",
        "/lessons/guitar",
        "/lessons/bass",
        "/signup",
        "/contact",
      ],
    }),
  ],
});
