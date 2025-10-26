import {sidebar} from "vuepress-theme-hope";

export default sidebar({

    "/articles/": [
        "",

        {
            text: "Articles",
            icon: "book",
            prefix: '',
            link: "/articles/",
            children: 'structure'
        },
    ],


});
