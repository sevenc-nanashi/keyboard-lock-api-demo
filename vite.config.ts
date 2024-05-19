import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/keyboard-lock-api-demo/" : "/",
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: ["M PLUS 1p"],
      },
    }),
  ],
});
