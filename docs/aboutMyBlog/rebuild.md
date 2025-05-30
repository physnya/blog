---
changelog: false
title: 重构笔记
permalink: /post/rebulid/
createTime: 2025/2/23 08:08:17
tags:
  - blog
---

最近站点整体经历了一次完全的重构，系统从 Hexo 切换到 VuePress，所以写一些在重构过程中踩到的坑作为记录.

(顺便就当是流水账，作为每周例行的更新了)

## 笔记目录配置

之前应该也在 [流水账 Week 16](/posts/fz8kwh0a/#fragment-2-vuepress-初体验) 里面提到过这件事情. 当时想做的其实是一个单纯的笔记页面，但是后来一想觉得既然笔记页面已经用上了 VuePress，干脆把所有的页面全部重构一次，否则只有一个页面进行过改造显得有点不统一；再者，因为笔记页面分离，造成的 RSS 变化、字数统计处理等等都会和以前不一样，要改还不如全部推倒重来.

这里笔记目录的配置问题简而言之是插件生成 `permalink` 的时间应该晚于配置文件 (`config.ts` 等) 的配置时间，否则目录中生成的链接会出现错误，进而导致目录直接不显示.

VuePress 主题 Plume 自带永久链接生成插件，在运行 `npm run docs:dev` 或者 `npm run docs:build` 时，会为还没有生成链接的文章生成一个八位乱码的链接，比如 [资源收集（持续更新）](/posts/bnw31l0t/)对应的链接是 `/posts/bnw31l0t/`.

> 事实上我一开始以为是生成和文件名有一定关系的链接，但是后续已经生成之后我不好再改动，因为 twikoo 评论和链接有比较大的关系，如果要改动就要备份数据再来改动 `twikoo-comment.json`，又是一个体力活.

与目录有关联的配置文件应该在 `.vuepress/notes/*` 路径下，再统一引入到 `notes/*` 目录下的 `index.ts`，最后引入到总的配置文件 `config.ts` 中. 笔记的配置文件内部要求编写目录的顺序等，在这里可以使用文件的相对路径或是链接，但是一旦生成链接，缓存中已经生成过一次的目录就可能不再适用，导致问题出现.

## RSS 生成

因为在 [follow](https://follow.is) 上有一些关注者，所以还是希望保留原有的 RSS 链接 (`atom.xml`).

(实际上我也不知道为什么在 follow 上会有这么多人看我的灌水文章，比如下面这个 [流水账 Week 15](/post/a8n8h73w/) 的阅读量就挺吓人的，至少我认识的网友里面没见过这么高阅读量)

::: center

<img src='https://vip.123pan.cn/1845440081/ymjew503t0n000d7w32y4yo8gtw0a8cqDIYxAIFxDda1DGxPDwUzAa==.png' style='zoom:80%'>

:::

看了一下 [VuePress 生态系统](https://ecosystem.vuejs.press/zh/)，似乎有一个 feed 插件，但是下载之后想把设置放在 `config.ts` 的尝试一直失败，VScode 里面的红色波浪线不见消散的迹象. 后来找到原因，是 theme-plume 的配置文件中有如下写法：

```typescript
export default defineUserConfig({
    theme: plumeTheme({
        plugins: {
            /*plume 主题内置插件配置*/
        }
    })
    plugins: [
    	pluginName({
    		/*VuePress 其他插件的配置*/
		})
    ]
})
```

这两个位置不一样……

好罢，这个错误疑似有点太蠢了，或许写在这里也只能提醒提醒我自己.

不过即使已经正确生成了 `atom.xml`，follow 那边依然显示订阅源失效，而且两条报错信息来回换：

```bash
update or delete on table "entries" violates foreign key constraint "transactions_to_entry_id_entries_id_fk" on table "transactions"

cannot read properties of undefined
```

后面那条应该是说我的 `xml` 文件格式有点问题，但是第一条是完全看不懂，在 follow 官方的 discord 群里面提问也一直没人回应 (这也不能全怪他们，我看群里面报错的太多了 ╯︿╰) 在 inoreader 等地测试的结果是正确的，所以我现在也合理怀疑缓存原因，毕竟 follow 那边使用服务器定时获取源的信息.

等找到原因我再花一点时间修复这个问题吧.

## twikoo 评论迁移

可能是最麻烦的一件事，没有之一. 因为我的文件结构变化，所有链接都有改动，导出的评论数据不能直接导入，要先在本地把链接全部修改之后再导入云端 —— 而且要把原先的数据删掉.

因为我不会给 MongoDB 直接发指令，所以还是手动删除数据库里面的数据，想起来还是很累……

## Umami 配置 —— 免费手段

前几天看了一下 Google Analytics，觉得如果每次看统计数据都要科学上网还是很难受. 心心念念 Umami 半年多了，可惜自己一直没钱买服务器，就处于忍受 GA 的状态.

有幸这回找到一种不使用自己的服务器部署 Umami 的方式，后端数据库使用 [supabase](https://supabase.com/)，目前用下来体验不差. 只是 Vercel 在国内即使配置自己的二级域名还是访问比较慢.

因为 VuePress 插件 [@vuepress/plugin-active-header-links@next](https://ecosystem.vuejs.press/zh/plugins/development/active-header-links.html) 的原因，我站点的所有 h2 标题都被改写成链接，同时启动了滚动事件监听，当页面滚动至某个 _标题锚点_ 后，如果存在对应的 _标题链接_ ，那么该插件会将路由 Hash 更改为该 _标题锚点_. 这导致我站 View 数大量偏高，在部署完成的一周之内，View 数达到了惊人的 3k：

::: demo-wrapper img

<img src='https://vip.123pan.cn/1845440081/ymjew503t0n000d7w32y4yobcmw0gdzsDIYxAIFxDda1DGxPDwUzAa==.png' style='zoom:60%'>

:::

但是相对于 GA 而言，Umami 的 js 在国内访问时至少保证能加载出来，避免 GA 大量遗漏计数的情况.
