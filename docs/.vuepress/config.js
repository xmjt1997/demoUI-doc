module.exports = {
  title: "Demo-Ui开发文档",
  description: "一个神奇的ui库,希望你能喜欢!",
  head: [
    ["link", { rel: "icon", href: "./public/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // base: "/", // 这是部署到github相关的配置
  port: 8080, //端口
  dest: "dist", //打包路径
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  // 主题配置
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      {text: '文档',link:"/document/"},
      { text: "组件", link: "/view/" },
    ],
    sidebar: {
      // 文档侧边栏
      "/document/":[
        {
          title:'开发指南',
          collapsable: false,
          children:[
            {title:'安装',path:'guide/install'},
            {title:'快速上手',path:'guide/import'}
          ]
        }
      ],
      // 组件侧边栏
      "/view/":[
        {
          title:'基础组件',
          collapsable: false,
          children:[
            {title:'Button按钮',path:'base/button'},
            {title:'Link按钮',path:'base/link'}
          ]
        }
      ]
    }
  },
};



// {
      //   title: "开发指南", // 必要的
      //   path: "/document/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: false, // 可选的, 默认值是 true,
      //   sidebarDepth: 0, // 可选的, 默认值是 1
      //   children: [
      //       { title: "安装", path: "/document/install" },
      //       { title: "快速上手", path: "/document/import" },
      //   ],
      // },
      // {
      //   title: "基础组件", // 必要的
      //   path: "/view/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: false, // 可选的, 默认值是 true,
      //   sidebarDepth: 0, // 可选的, 默认值是 1
      //   children: [
      //       { title: "安装", path: "/view/base/install" },
      //       { title: "快速上手", path: "/view/base/import" },
      //   ],
      // },