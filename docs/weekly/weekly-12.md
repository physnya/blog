---
changelog: false
title: 流水账 Week 12
createTime: 2024/12/01 23:56:11
tags:
  - Life
permalink: /posts/wq1j551x/
---

## Fragment 1 CloudFlare 和一个小插曲

起因是我在周一的 Feynman 课上想要打开自己的网站查看之前一次课做的笔记——至于为什么不直接看本地版本是因为本地的一些格式并没有网页端美观，有些 tag 样式没有渲染出来. 然后我惊奇的发现无法访问了（？）

一开始我以为是校园网的问题，可能我犯什么事或者在站里面提到了违禁词，导致被 DNS 污染了（因为用手机流量能够正常访问）. 结合之前 [朽丘秋雨](https://koxiuqiu.cn/) 的情况，这种可能性不是没有，上次他就是因为提到某些关键词，惨遭我校校园网的 DNS 污染. 当然，现在连接好像已经恢复.

不过我翻看自己之前的一些更新，并未发现自己在任何地方有不妥当的言论，毕竟我对讨论政治话题相当厌恶，也从未在站里面引入广告. 为了防止被恶意 JavaScript 劫持，我还把之前用过的 51.la 统计的代码删掉了，估计不会有违禁内容（话说确实有点可怕，我好像想起来有一次刷新网页时见到一闪而过的博彩网站画面，不知道是不是一些引入的 JavaScript 的原因，想想有点后怕……）

所以现在我得到的结果是，不太可能被 DNS 污染，我转而寻找其他的可能原因. 在某位大佬舍友（一名 iOS 开发者）的帮助下，我发现我的 SSL 证书已经过期 14 天，显然这是问题的根源所在，报错信息是`ERR_SSL_VERSION_OR_CIPHER_MISMATCH`.

我立刻来到雨云的控制台，试图再申请一张证书，但是 DNS 解析迟迟不生效，刚好周二那天晚上我有一个会要开，时间紧急，在十分烦躁的情况下，我突然想起来很多人给我推荐过 CloudFlare 的服务，要不干脆趁此机会将站点直接扔到 CloudFlare Pages 上面去，用上自动续签或者 15 年有效期的 SSL 证书呢？

说干就干，我立马开始学习如何将网站部署到 CloudFlare 上，并赶在会议正式内容开始之前做完了. 稍微测试一下，前面几次出现了`ERR_TOO_MANY_REDIRECTS`的报错，但是过一会新的 DNS 解析生效之后就完全恢复正常了. 其实一开始我想借这个机会把域名换成`blog.physnya.top`这个二级域的，但是后来一想，换了之后还要处理各种链接失效和 [⌈ 开往 ⌋](https://www.travellings.cn/)、[BlogsClub](https://www.blogsclub.org/)、[十年之约](https://www.foreverblog.cn/)各种地方的问题，还是不改算了，什么时候要做个人主页的时候用`www.physnya.top`算啦.

---

在我转到 CloudFlare Pages 之后的第二天，发生了一个小插曲. 我无聊翻看 CloudFlare 的后台记录，惊讶地发现当日 UV 数达到 93，之前从来没有这么高的访问量（或许这里太小众了吧……不过也不是为了高访问量才写这些东西的）. 一打开手机又接到 Google Analytics 的通知，也是说单日访问量异常，建议关注.

我倒是不记得做了什么引流的操作，之前访问量大幅增加一般都是高等微积分课上的同学不想去上课然后来我这里看笔记，但是这一周艾神去 CMO 改试卷，把所有的课都调到了下周周末，我发的文章好像只有一些奇怪的 Feynman III 课程笔记，估计没什么人会看. 而且看看访问者 IP，全是来自于奇奇怪怪的地方，什么 Bulgaria、Finland 之类，当然 America 和 China 还是占大多数，不过可以排除一些同学开着科学上网工具忘记关的情况.

仔细想了一下那天我到底干了什么，我只能得到一个非常离谱的结论. 前一天晚上快睡觉之前我在刷 X，好像给一个粉丝数很多的人写了一条回帖，而且是在一众日语回帖中清奇地使用蹩脚的英语，第二天早上看到收获了三个赞——这估计是访问量莫名其妙增长的原因，我 X 主页有自己站点的链接，或许那天晚上（可能世界的其他角落不是晚上？）各种地方的好奇者点进我的网站，试图看懂一串串奇怪的中文字符和数学公式，疑惑为什么我会在 X 上写下那一条回帖.

嗯，下次要是想引流，我就写一条很炸裂的回帖.

不得不说这事挺好笑的.

---

不过说起来，用上 CloudFlare 之后，访问速度还是变得有一点点慢，经过我的测试，主要是 LCP（Largest Contentful Paint）性能下降比较明显，之后再想办法优化一下吧. 如果有人看到这段话，欢迎用你的浏览器开发者工具测试一下我这里的访问性能，在评论区告诉我一声，谢谢啦.

## Fragment 2 物理系学生节

<s>其实我本来不想去的来着，毕竟还有一堆事（；´д ｀）ゞ</s>

一开始看到学长学姐们自己组建的乐队就觉得很有活力，要是什么时候我能像他们一样更加自信地站在属于自己的舞台上，我觉得这就是一种成长.

意想不到的是还有相声和魔术的环节. 但是影响比较深刻的是学生会做的那个老师的访谈，看到松神那一下真有点绷不住（<s>原谅我</s>）松神听到同学问：“您觉得哪一门课最难？”然后他说：“我觉得都挺简单的.”之后被问到“哪门课最简单？”，他回答“复变函数，我记得自己随便刷一些题就满分了.”

——松神太强了，真的.

一字班导员给毕业班的学长学姐拍了一个 DV 剧，讲的是他自己的故事，深有感触. “我们的选择就是在改变作用量而已，最后只能落到局域的极小值；但是当你勇于尝试、坚定前进，最终你可能走向全局的极小路径.” 我们不过是系综里面的一个小系统罢了，但是我们有权利决定我们的时间演化！

最后一个节目十一点整结束，我走出大礼堂，看到了漫天的繁星.

::: center
<img src="https://p.sda1.dev/20/20f58202d6c6c680398b1a555920f984/微信图片_20241201233542 _1_.jpg" style="zoom:15%;" />
:::

## Fragment 3 初雪

11.26，迎来了今年的初雪. 那天晚上刚好是开完会，一出来雪已经快要停了，先放几张图片在这里~

:::: details 图片
<CardGrid cols='3'>
<img src='https://p.sda1.dev/20/a6f119f593a8be6947d6286b898381d0/4b88af198732f3b9d67f787a2764bd5.png'>
<img src='https://p.sda1.dev/20/d2d2cbd0c10be92b9988a2e212bc37f1/a7e1556cb248e0be28adc60313d4352.png'>
<img src='https://p.sda1.dev/20/aff2c87acce357815fad189b725bf2e7/69f2270a3476526ecd3806caf20e03e.jpg'>
</CardGrid>
<CardGrid>
<img src='https://p.sda1.dev/20/9c59e016be8980919439ac87ca2c4604/7cd24e83919deb4523035214240503b.jpg'>
<img src='https://p.sda1.dev/20/6e94c919492f0b97265e31e7335818ac/ac11f94c7d6276a3c0301dc941e67c0.jpg'>
</CardGrid>
::::

看到一张笑脸啦~那天上午的体育课也在体育馆的墙壁上看到了一个粉笔画的笑脸，微笑的一天 hhh.

::: details 体育馆的笑脸

![](https://p.sda1.dev/20/028d514d31272d4627f536f7983240b6/7f3f2cc5352fdc84609f89a316cca76.jpg)

:::

## 结

这周过得很开心，想必是我 deadline 都还很遥远的缘故. 有的时候早点完成任务真是一件好事，我甚至有时间整理一些线性代数的知识. 下周继续加油，毕竟期末考试的脚步近了……
