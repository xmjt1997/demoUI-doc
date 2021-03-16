module.exports = {
    title: 'Demo-Ui开发文档',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/docs/public/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    port:8080, //端口
    dest:'dist', //打包路径
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    // 主题配置
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '组件', link: '/view/base'},  
      ],
      sidebar: {
        '/view/':[
          {
            title:'开发指南',
            collapsable: false, 
            children:[
              {title:'快速上手',path:'/view/quick'}
            ]
          }
        ]
      }, // 侧边栏配置
      sidebarDepth: 1, // 侧边栏显示2级
    }
  }