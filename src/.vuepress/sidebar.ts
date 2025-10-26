import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    exclude:["**/README.md"],
    "/articles/physics/": [{
        text: "物理",
        icon: "book",

        prefix: "",
        link: "",
        children: "structure"
    }], "/articles/program/": [{
        text: "程序",
        icon: "book",

        prefix: "",
        link: "",
        children: "structure"
    }],"/articles/algorithm/": [{
        text: "算法",
        icon: "book",

        prefix: "",
        link: "README.md",
        children: "structure"
    }],


});
