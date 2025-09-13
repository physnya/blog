import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { notes } from './notes/index.ts'
import { feedPlugin } from '@vuepress/plugin-feed'
import Font from 'vite-plugin-font'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '菲兹克斯喵',
  description: "This is physnya's personal blog & notebook.",

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/jpg', href: 'images/Physics_nya.jpg' }],
    ['link', { rel: 'stylesheet', type:'text/css', href: 'https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkaibright/dist/LXGWBright-Regular/result.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css', integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X', crossorigin: 'anonymous' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js', integrity: 'sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4', crossorigin: 'anonymous' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js', integrity: 'sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa', crossorigin: 'anonymous' }],
    ['script', { src: 'https://umami.physnya.top/script.js', 'data-website-id': 'c412eaae-10f9-4820-99bf-a6410154a744' }],
    ['script', { src: 'https://app.rybbit.io/api/script.js', 'data-site-id': '1153' }, 'defer'],
    ['link', { rel: 'prefetch', as: 'image', href: 'https://www.blogsclub.org/badge/physnya.top' }],
    ['link', { rel: 'me', href: 'https://mastodon.social/@physnya' }],
    ['meta', { name: 'fediverse:creator', content: '@physnya@mastodon.social' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdown: {
      //   chartjs: true,
      //   echarts: true,
        mermaid: true,
      //   flowchart: true,
        annotation: true,
      },
    
    notes,
    copyright: 'CC-BY-NC-SA-4.0',
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://physnya.top',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    changelog: true,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    blog: {
      postList: true, // 是否启用文章列表页
      tags: true, // 是否启用标签页
      archives: true, // 是否启用归档页
      categories: true, // 是否启用分类页
      postCover: 'right', // 文章封面位置
      pagination: 10, // 每页显示文章数量
    },

    /* 博客文章页面链接前缀 */
    article: '/posts/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    search: {
      provider: "local",
      locales: {
        '/': {
          placeholder: 'Search',
          noResultsText: '没有找到',
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            selectKeyAriaLabel: '',
            navigateUpKeyAriaLabel: '',
            navigateDownKeyAriaLabel: '',
            closeKeyAriaLabel: '',
          }
        }
      }
    },

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        langs: ['shell', 'bash', 'typescript', 'javascript', 'css', 'html', 'json', 'yaml', 'vue'],
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
        lineNumbers: true, // 启用行号
      },

      /* 本地搜索, 默认启用 */
      // search: false,

      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: 'K7HPXA6J0Z',
      //   apiKey: '79817c5dd89d18906f89a095abea2f84',
      //   indexName: 'physnya',
      // },

      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  :[icon-name]:
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
        imageSize: 'all', // 启用 自动填充 图片宽高属性，避免页面抖动
      },

      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,

      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      markdownMath: {
        type: 'katex',
      },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Twikoo', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        envId: 'https://twikoo.physnya.top/.netlify/functions/twikoo',
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      },
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    encrypt: {
      rules: {}
    },
  }),
  plugins: [
    feedPlugin({
      hostname: 'https://physnya.top',
      atom: true,
      count: 100,
      icon: 'images/Physics_nya.jpg',
      image: 'images/Physics_nya.jpg',
      devServer: true,
      devHostname: 'http://localhost:8080',
      atomOutputFilename: 'atom.xml',
    }),
  ]
})