import {sidebar} from "vuepress-theme-hope";

export default sidebar({

    "/articles/physics/": [{
        text: "物理",
        icon: "book",

        prefix: "",
        link: "",
        children: "structure"
    }], "/articles/program/": [{
        text: "程序及算法",
        icon: "book",

        prefix: "",
        link: "",
        children: "structure"
    }],


});
