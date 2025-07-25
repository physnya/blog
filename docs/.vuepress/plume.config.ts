import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'images/Physics_nya.jpg',

  appearance: true,  // 配置 深色模式

  // social: [],
  navbarSocialInclude: [''], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3
  sidebarScrollbar: false,

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: 'CC-BY-NC-SA-4.0',

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: 'Copyright © 2024 - present by physnya',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'images/Physics_nya.jpg',
    name: '菲兹克斯喵',
    description: 'This is physnya\'s personal <br/> blog \& notebook.',
    // circle: true,
    location: 'Beijing, China',
    organization: 'SOS 団',
  },

  social: [
    { icon: 'github', link: 'https://github.com/physnya' },
    { icon: 'mastodon', link: 'https://scg.owu.one/@physnya' },
  ],

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'center',
  //   contentType: 'markdown',
  //   title: '公告',
  //   content: '最近事情有点太多，本来预定周三之前更新高等微积分的补课笔记可能要再等一段时间才能上传，非常抱歉！',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'skew-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
})
