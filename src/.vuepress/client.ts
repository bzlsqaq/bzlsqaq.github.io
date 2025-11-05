import { defineClientConfig } from "vuepress/client";
import MathQuote from './components/MathQuote.vue' // 路径相对 client.ts

export default defineClientConfig({
  enhance({ app }) {
    app.component('MathQuote', MathQuote)
  },
})