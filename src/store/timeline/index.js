export default {
  namespaced: true,
  state: {
    activities: [
      {
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
        img: require('@/assets/logo.png'),
      },
      {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
        img: require('@/assets/logo.png'),
      },
      {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        img: require('@/assets/logo.png'),
      },
      {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46',
        img: require('@/assets/logo.png'),
      },
    ],
  },
  mutations: {},
  actions: {},
}
