import { defineClientConfig } from "vuepress/client";

declare global {
  interface Window {
    MathJax?: any;
  }
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window === "undefined") return;

    // 加载 MathJax CDN
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;

    script.onload = () => {
      window.MathJax = {
        tex: { inlineMath: [["$", "$"]], displayMath: [["$$", "$$"]] },
        svg: { fontCache: "global" },
      };

      // 首次渲染
      setTimeout(() => window.MathJax?.typesetPromise?.(), 100);

      // 页面切换时渲染
      router?.afterEach(() => {
        setTimeout(() => window.MathJax?.typesetPromise?.(), 100);
      });
    };

    document.head.appendChild(script);
  },
});
