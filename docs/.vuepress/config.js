module.exports = {
  base: '/',
  title: 'UI组件库',
  description: '组件库',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  chainWebpack: config => {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  },
  plugins: ['demo-container'],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: 'Home', link: '/'},
      {text: '组件', link: '/ui/button'},
      {text: '关于我们', link: '/about/'},
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          {text: 'Chinese', link: '/language/chinese/'},
          {text: 'English', link: '/language/english/'}
        ]
      }
    ],
    sidebar: [
      ['install', '快速上手'],
      ['theme', '定制主题'],
      ['update', '更新日志'],
      ['qa', '常见问题'],
      ['about', '关于我们'],
      {
        title: 'Components',  //组名
        collapsable: false,
        children: [
          {
            title: 'General',  //组名
            collapsable: false,
            children: [
              ['/ui/button', 'Button 按钮'],
              ['/ui/icon', 'Icon 图标'],
            ]
          },
          {
            title: 'Layout',  //组名
            collapsable: false,
            children: [
              ['/ui/grid', 'Grid 栅格'],
              ['/ui/layout', 'Layout 布局'],
            ]
          },
        ]
      },
    ],
  },
  markdown: {
    lineNumbers: true
  }
}
