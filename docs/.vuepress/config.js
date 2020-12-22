module.exports = {
    base: '/gulu-demo/',
    title: 'Gulu UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: '/http://google.com'},
        ],
        sidebar: [
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/toast',
                    '/components/grid',
                    '/components/layout',
                    '/components/collapse',
                ]
            },
        ]
    }
}
