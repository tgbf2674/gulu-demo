module.exports = {
    base: '/gulu-demo/',
    title: 'Gulu UI',
    description: '一个好用的UI框架',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
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
