module.exports = [ // 导航栏配置
    { text: '首页', link: '/'},
    { text: '后端', link: '/admin/' },
    { text: '前端', link: '/web/' },
    { text: '随笔', link: '/other/' },
    { text: '关于我', link: '/about/' },
    {
        text: '工具箱',
        items: [
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩', link: 'https://tinypng.com/'}
                ]
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                ]
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: '简书', link: 'https://www.jianshu.com/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'},
                    {text: '博客园', link: 'https://www.cnblogs.com/'}
                ]
            }
        ]
    },
    { text: 'GitHub', link: 'https://github.com/Baijq/vuepressBlog' }
]

