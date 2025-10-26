import {defineUserConfig} from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";


export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "Bzls Blog",
    description: "Bzls Blog",
    bundler: viteBundler({
        viteOptions: {
            optimizeDeps: {
                include: ["mathjax-full"],
            },
            ssr: {
                noExternal: ["mathjax-full"],
            },
        },
    }),
    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
