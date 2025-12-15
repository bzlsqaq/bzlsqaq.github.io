import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://bzlsqaq.github.io",
    // pure: true,
    author: {
        name: "半枕凉书",
        url: "https://bzlsqaq.github.io",
    },
    print: false,
    logo: "/assets/logo.jpg",

    repo: "bzlsqaq/bzlsqaq.github.io",

    docsDir: "src",

    // navbar
    navbar,

    // sidebar
    sidebar,

    footer: "Default footer",

    displayFooter: true,

    encrypt: {
        config: {
            "/articles/test.html": {
                hint: "Password: 1234",
                password: "1234",
            },
        },
    },

    blog: {
        description: "2395913652@qq.com",
        name: "半枕凉书",
        articlePerPage: 10,
        intro: "/intro.html",
        articleInfo: ["Author", "Date", "Category", "Tag"],
    },

    metaLocales: {
        editLink: "Edit this page on GitHub",
    },

    // enable it to preview all changes in time
    // hotReload: true,

    // These features are enabled for demo, only preserve features you need here
    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        component: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        mermaid: true,
        preview: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,

        // uncomment these if you need TeX support
        math: {
            // install katex before enabling it
            // type: "katex",
            // or install mathjax-full before enabling it
            type: "mathjax",
            tex: {
                tags: "all",
                // 启用 AMS 编号风格

            },
        },

        // install chart.js before enabling it
        // chartjs: true,

        // install echarts before enabling it
        // echarts: true,

        // install flowchart.ts before enabling it
        // flowchart: true,

        // install mermaid before enabling it
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // install @vue/repl before enabling it
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,

        // install @vuepress/plugin-revealjs and uncomment these if you need slides
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
    },

    plugins: {
        blog: {
            excerpt: false,
        },
        // Install @waline/client before enabling it
        // Note: This is for testing ONLY!
        // You MUST generate and use your own comment service in production.
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },
        catalog: {
            // 关键设置：
            // level: 1  -> 只显示一级子目录（或当前目录下的文件），不递归展开
            // level: 2  -> 会显示子目录以及子目录下的内容（这就是你截图中现在的样子）
            level: 1,
        },
        components: {
            components: ["Badge", "VPCard",],
        },

        icon: {
            prefix: "fa6-solid:",
            assets: "fontawesome",
        },

        // install @vuepress/plugin-pwa and uncomment these if you want a PWA
        // pwa: {
        //   favicon: "",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
