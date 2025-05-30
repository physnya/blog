---
changelog: false
title: 流水帐 Week 21
createTime: 2025/5/12 01:22:19
tags:
  - Life
oermalink: null
permalink: /posts/0vd8hhcp/
---

过了不知道多久才开始写新的一期流水帐. 最近实在是很忙，《星系与宇宙》课程的强度开始加大了 (主要是小组作业开始上强度)，再加上后半学期加入的《复变函数》课，还有本来预订本学期最大任务量的《写作与沟通》，再加上几次难度不小的实验报告，看来我这个期末注定不会过得很轻松.

不过也有一些好事，比如昨天晚上我们小组的三位成员本来以为 11 日是星系与宇宙小组和老师面对面谈话的时间，然后疯狂做了一整天 PPT、看了好几篇论文，结果发现只不过是我们出现了记忆错乱 ---- 老师 11 号要听一天的答辩，12 号还有事出差，实际上 deadline 还有至少一周才到.

因为这个，我现在算是有一点点时间来梳理一下这几周做了什么事情. 总的来说我还是尽量抽出不少时间在尝试折腾各种小玩意，不过也不知道这是不是一件好事罢了. 最近的目标毕竟还是早点睡觉，从周四开始写同轴光子晶体实验报告开始，我就没有正常作息过了，至少在没有课的今天还是洗个热水澡睡一觉比较好罢. (嘴上这么说，实际上还有两个仅剩 3 天的 deadline，我真是…)

## Rime 初见

久闻大名的输入法 ---- Rime. 自定义性极高，选择丰富，确实是提高效率的神器. 虽然我短时间内完全没有要开始练习双拼的想法，但是作为高强度打字玩家 (用 markdown 记笔记还是太吃操作了)，尝试新的效率工具绝对不是什么坏事. 抱着这样的想法，我开始尝试配置.

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fdawvv9twstoiDIYxAIFxDda1DGxPDwUzAa==.gif)

目前我做出来的 UI 和使用感觉差不多就是这样，感觉黑白高对比度配色 + 霞鹜文楷简直比微软自带的输入法爽太多. 虽然词库现在还没有完全适合我的输入习惯，但是现在看来，这个算法的记忆速度还算快，至少很快地让我投入了上专业课记笔记的使用. 不过也可以看出，没有微软那么多的用户数据训练，一开始打出来的东西可能连词语都不是，对按错键的容错率也比较低，好在这并不会很大影响我的使用.

放一下我的配色方案：

```yaml
patch:
  "style/font_face": "霞鹜文楷"
  "style/font_point": 15
  "menu/page_size": 6
  app_options/cmd.exe:
    ascii_mode: true
  "style/label_font_face": "Cosolas Code"
  "style/label_font_point": 14
  "style/inline_preedit": true
  "style/horizontal": true
  "style/display_tray_icon": false
  "style/layout/border": 10
  "style/layout/border_width": 10
  "style/layout/candidate_spacing": 28
  "style/layout/hilite_padding": 8
  "style/layout/hilite_spacing": 3
  "style/layout/margin_x": 10
  "style/layout/margin_y": 10
  "style/layout/round_corner": 10
  "style/layout/spacing": 10
  "preset_color_schemes/myCustomColor":
    name: myCustomColor
    author: physnya
    back_color: 0x000000
    border_color: 0x000000
    text_color: 0xFFFFFF
    hilited_text_color: 0x000000
    hilited_back_color: 0xFFFFFF
    hilited_candidate_text_color: 0x000000
    hilited_candidate_back_color: 0xFFFFFF
    candidate_text_color: 0xFFFFFF
    comment_text_color: 0x8C8C8C
  "style/color_scheme": myCustomColor
```

(<s>你根本就是在用黑色和白色为什么要贴出来献丑.</s>)

## 重子声学振荡 & Typst

Typst 确实是老朋友，毕竟我也算是 $\LaTeX$ 老玩家了，同类竞品必然是不得不品的一环.

::: tip

/题外话/ 关于我为什么开始自称 $\LaTeX$ 老玩家了，难道我和 $\LaTeX$ 很熟吗？可以看看 AI 对我的 GitHub 小号作的锐评：

![](https://vip.123pan.cn/1845440081/ymjew503t0l000d7w32x7n0yk8tgsqvjDIYxAIFxDda1DGxPDwUzAa==.png)

既然已经开始在 $\LaTeX$ 里面雕花了应该算玩家了罢 (？

(虽然这个 AI 对我大号的锐评成功让我认识到我一直在恬不知耻地产出低质量水文而且对开源社区毫无贡献，导致我很破防)

:::

星系与宇宙课程要求我们每个小组选择一个研究的课题，然后看论文，做一个小的 presentation. 我们组拿到的选题是“暗能量理论模型综述” (老师特意为物理系本科的同学分配了更难的主题，适合物理系宝宝体质). 于是在第一次和老师当面交流之后，我拿到了研究近年的观测结果对理论作出的修正和发展这一部分任务. 然后开始看 DESI 观测结果和 BAO (重子声学振荡) 理论.

(当然后来我发现 [Lesson 13](/cosmos/lesson-13) 把我想讲的全讲了，所以现在还得换一点要讲的内容) 但是这里要写的重点肯定不是理论性这么强的内容，而是 Typst：我的合作者非常不习惯 $\LaTeX$，决定使用 Typst 来制作 PPT.

说实话，对比 $\LaTeX$，Typst 在 PPT 制作方面实在是强大至极，竟然可以做到即时预览，而且模板相比 $\LaTeX$ 也要更好理解，可惜的是和 $\LaTeX$ 实在是差异太大，用起来相当不习惯：在我目前的使用来看，Typst 就像内置了 css 的 markdown (markdown 好像也支持 html，我在讲什么)，首先标题和加粗什么的语法简直如出一辙，而且可以即时预览；同时 `#set` 和 `#show` 之类的规则可以在文档的最开始对某些显示效果作出设定.

但是要我做出选择，我还是会回归 $\LaTeX$ 的怀抱：不管 Typst 目前的前景多好、支持多丰富，至少到目前为止其能力还是明显不如我们伟大的 $\LaTeX$，而且我已经习惯了 $\LaTeX$ 的数学公式了…

(上次实验报告，我 `.tex` 代码写了 24000 多行，看到自己的成果还是非常有成就感的. 如果硬要说在写文档时有什么用 Typst 的优势，我想只能是写太多了导致 $\LaTeX$ 的速度变得像 VuePress 的编译速度一样感人罢)

---

但是单单讨论 PPT，我们不是早就有更好的方案了吗？html 才是兼具交互性与功能全面性的超级选择罢！(暴论

## 一个小小的公告

接着上面来讲：我最近有点太忙了，写这些“流水帐”式的产出似乎也没多大意义，所以我决定暂停，而同样的时间改为更新我自己总结的 markdown 记笔记方法 —— 这个思路来源于那位用 $\LaTeX$ 记课堂笔记的 KU Leuven 小哥 [Gilles Castel](https://castel.dev/).

怎么说呢，周六晚上调休上星系与宇宙的时候，我突然在畅快的打字过程中意识到，从上学期第一次高等微积分课开始到现在，我的 markdown 记笔记已经形成了一种我自己的风格 —— 而这样的记笔记习惯确实是相当少见的 (唯一看见用 markdown 记笔记的只有和我合作写星系与宇宙笔记的 yqq 同学，但是他并不是所有课一定会用 markdown，也不是每次都用；隔壁宿舍一位同学似乎使用 obsidian，但是公式之类主要还是手写；而高等微积分课上见过一次另一位同学使用 markdown 记笔记，可惜他也只坚持了两三回).

有段时间我其实想过建立物理系共有的 markdown 笔记库，毕竟有些专业课并不是所有人都会去上，但是交叉的思维恰恰是科研中所需要的稀缺资源；而 `.pdf` 格式的笔记实在是难以传播，体量太大. 如果能够像 wiki 一样，建立一个巨大的 VuePress 或者 VitePress 知识库，想来会是一件很好的事. 但是问题在于，每当我和同学们讲起用 markdown 完全覆盖所有课程的笔记时，几乎所有人都会说：“‘史官’只要有一个就够了” / “速度不可能想你那样快的，就算能记下知识点，课堂细节根本没法记全，更别说想你那样的格式了”

可是我就只是使用最原始的 Typora 作为编辑器 (而不是强大的 neovim / Emacs)，也没有配置任何 snippets 啊？

这些事让我认识到，我自己记笔记的过程中，一定有一些可以分享出来的好的经验，不仅仅是为了推广我的方法，而且是为了更加深入地认识我到底是如何记笔记的，提升我自己的速度，我决定像 [Gilles Castel](https://castel.dev/) 的 [How I manage my LaTeX lecture notes](https://castel.dev/post/lecture-notes-3/) 一样，尝试总结自己的 markdown 笔记方法.

希望能给大家提供一点帮助；如果愿意的话，欢迎监督我每周更新一点，防止我哪天又摆烂了.
