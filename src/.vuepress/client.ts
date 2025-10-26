import { defineClientConfig } from "vuepress/client";

declare global {
  interface Window {
    MathJax?: any;
  }
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window !== "undefined") {
      window.MathJax = {
        tex: { inlineMath: [["$", "$"]], displayMath: [["$$", "$$"]] },
        svg: { fontCache: "global" },
      };

      import("mathjax-full/es5/tex-mml-chtml.js").then(() => {
        // 延迟 50ms 再渲染公式，确保 VPCard DOM 已挂载
        setTimeout(() => {
          window.MathJax.typesetPromise?.();
        }, 50);

        // 路由切换渲染公式
        router?.afterEach(() => {
          setTimeout(() => {
            window.MathJax.typesetPromise?.();
          }, 50);
        });
      });
    }
  },
});
