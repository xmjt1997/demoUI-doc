module.exports = {
  title: "Demo-Ui开发文档",
  description: "我的个人网站",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/docs/public/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
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
      { text: "组件", link: "/view/" },
    ],
    sidebar: [
      {
        title: "快速上手", // 必要的
        path: "/view/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
            { title: "安装", path: "/view/base/install" },
            { title: "项目导入", path: "/view/base/import" },
        ],
      },
    ],
  },
};
