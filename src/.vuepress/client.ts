// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";

declare global {
  interface Window {
    MathJax?: any;
  }
}

function waitForSelector(selector: string, timeout = 3000): Promise<boolean> {
  const start = Date.now();
  return new Promise((resolve) => {
    function check() {
      if (document.querySelector(selector)) {
        resolve(true);
        return;
      }
      if (Date.now() - start > timeout) {
        resolve(false);
        return;
      }
      requestAnimationFrame(check);
    }
    check();
  });
}

async function typesetIfReady(timeoutForElements = 2000) {
  // 等 MathJax 已加载并且 typesetPromise 可用
  if (!window.MathJax || !window.MathJax.typesetPromise) return;
  // 等待页面上可能包含公式的节点出现（VPCard 的描述类名）
  // 根据需要可以扩展 selector（例如 .vp-project-desc, .vp-project-card, .markdown）
  const have = await waitForSelector(".vp-project-desc, .vp-card, .markdown, .content", timeoutForElements);
  // 即便没有找到任何目标节点，也尝试 typeset（MathJax 内部会跳过）
  try {
    await window.MathJax.typesetPromise();
  } catch (e) {
    // 忍受错误但记录（构建/运行时不抛出）
    // console.warn("MathJax typeset failed", e);
  }
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window === "undefined") return;

    // 如果已经有 script，避免重复插入
    if (document.getElementById("mathjax-cdn-script")) {
      // 如果脚本已存在，确保在路由切换时仍触发 typeset
      router?.afterEach(() => {
        // 延迟一点，保证 Vue 更新 DOM
        setTimeout(() => typesetIfReady(), 120);
      });
      return;
    }

    // 1) 先设置 MathJax 配置（必须在加载脚本前或脚本执行时可见）
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
      },
      options: {
        // 防止 MathJax 在首次 typeset 时做过多 DOM 修改造成不必要的重绘
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
      },
      svg: { fontCache: "global" },
    };

    // 2) 注入 CDN 脚本（不会被 Vite/Rollup 打包）
    const script = document.createElement("script");
    script.id = "mathjax-cdn-script";
    script.type = "text/javascript";
    // 你可以改为其他源，但这个通常稳定
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;

    script.onload = () => {
      // 当脚本加载完后，MathJax 被安装到 window.MathJax
      // 使用延迟+等待节点的方式保证 VPCard DOM 已经挂载
      setTimeout(() => {
        typesetIfReady().catch(() => {});
      }, 120);

      // 每次路由切换后再 typeset（延迟一点以等待 DOM 更新）
      router?.afterEach(() => {
        setTimeout(() => {
          typesetIfReady().catch(() => {});
        }, 120);
      });
    };

    script.onerror = () => {
      // 如果 CDN 加载失败，可在这里降级处理（记录或回退）
      // console.error("MathJax script load failed");
    };

    document.head.appendChild(script);
  },
});
