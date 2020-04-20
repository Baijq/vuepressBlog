module.exports = {
    title: 'Biubiu',
    description: '我的日常知识总结',
    // port: '8888',
    base: '/vuepressblog/',//部署到GitHub相关配置
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        //sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};