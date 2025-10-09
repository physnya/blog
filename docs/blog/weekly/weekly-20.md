---
changelog: false
title: 流水账 Week 20
createTime: 2025/4/13 23:42:12
tags:
  - Life
permalink: /posts/lctmnkeh/
---

怎么这么快就到第 20 期了？(虽然在这么说，但是其实站点早就已经过完一周年生日，时间真的是越来越快了)

## Fragment 1 大风

这周北京发布了大风橙色预警，说是从周五晚上开始到周六晚上，市区最大风力会达到 11 - 13 级，是致灾性比较强的风力级别. 因为这个原因，本来定在这周六的高等微积分期中考试推迟，周五晚上的实验课也要求大家早点做完回宿舍.

这确实是一个神奇的喘息一口气的机会：上周本来充斥着 Hall 效应实验报告、高等微积分题目、星系与宇宙题目、SRT 项目，还要复习 CTMR 课的考试和高等微积分考试. 但是风来了，于是周末的任务量一下减轻了不少.

但是风真的来了吗？

周六窝在宿舍里一整天，时不时看看窗外，却感觉风确乎不是很大，也没有听见呼呼的风声 —— 看来我们又被“狼来了”的故事骗了一次.

> 并不是说这风不大，而是没大到需要这样戒备的程度……毕竟冬天的时候来过不少这么大的风. 当然，北京的天气比起南方的城市来说还是太恶劣了一点，这是不用多说的.

但是一场风波什么也改变不了，该来的期中考试还是要来，而且考试范围会变大；该写的小组作业还是要写，而且时间会变得更紧. 只是窝在宿舍里想东想西的这段时间没办法替代而已. 也许偶尔有这样的时间也不错？

但是我该开始写高等微积分试卷了.

## Fragment 2 Zotero

鼎鼎大名的知识库管理软件，开源、有还算比较丰富的社区生态，可惜学校的讲座集中在付费软件 EndNote 的使用方面 (或许是因为买下了正版的缘故)，大家基本上都是从 EndNote 开始入门. 不过这两天尝试了 Zotero 之后深感其使用体验远优于 EndNote，遂果断入坑.

首先从 UI 角度来说，Zotero 在我心中就远胜于 EndNote，依然是基础的侧边栏设计和右侧的文献元信息，但是自定义程度比 EndNote 高得多；再者，结合浏览器插件，可以做到一键生成网页快照，立即添加文献附件，速度比 EndNote 快很多. 同时对 `.epub` 的支持也很方便，比分屏开着 Readest[^1] 看 `.epub` 强多了.

放两张现在使用 Zotero 的截图：

<CardGrid>
  <ImageCard
    image="https://vip.123pan.cn/1845440081/yk6baz03t0n000d7w33gzfyitwazs21dDIYxAIFxDda1DGxPDwUzAa==.png"
    title="亮色模式"
    href="/"
    author="physnya"
    date="2025/04/13"
  />
  <ImageCard
    image="https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fcpcvawfr16onDIYxAIFxDda1DGxPDwUzAa==.png"
    title="暗色模式"
    href="/"
    author="physnya"
    date="2025/04/13"
  />
</CardGrid>

顺便结合我正在使用的网页批注插件 [`hypothes.is`](https://hypothes.is)，阅读论文的体验相当不错. 至少在短时间内，做 SRT 项目和写作课论文的心情都有一定程度的提升.

## Fragment 3 PWA

我最近才发现自己的 VuePress 居然装了一个 PWA 插件，遂决定来试用一下，也欢迎各位尝试使用本站的 PWA 功能~

PWA 全称是 Progressive Web Application，也就是渐进式 Web 应用[^2]，简单理解：把某一个网站当作一个 APP 下载到本地，然后想要使用的时候随时打开. 这听起来和保存一个标签页并没有什么区别，但是实际上有很大的不同：

- PWA 可以在后台运行，还可以离线操作；
- PWA 可以与设备集成，注册为共享目标和来源，并访问设备特性；
- PWA 甚至可以在应用商店发布……

当然这些看起来和我没什么关系，不过作为我的私人笔记本，如果我拥有一个单独的桌面图标、任务栏图标，可以占用整个屏幕而不是包裹在浏览器的框架中，对我来说是相当不错的浏览体验，就像有一个小小的笔记本.

可惜的是，写作业的时候没办法在浏览器中直接切屏看笔记……

> 附注：PWA 的下载方法
>
> 在浏览器中点击右上角的三个点，选择“应用”，然后“将此站点作为应用安装”即可.

[^1]: 这也是一个很好的阅读器，对 `.epub` 的适配比较舒适，官网：<a href='https://readest.com/'>https://readest.com/</a>，源代码仓库：<a href='https://github.com/readest/readest'>https://github.com/readest/readest</a>
[^2]: [渐进式 Web 应用 (PWA) | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)，有意思的是当你打开这个网页的时候你的 Edge 会提示你下载 MDN Docs 应用
