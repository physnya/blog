---
title: Lecture 5 Spectroscopic Observations, Abundance Analysis and Large-Scale Surveys
createTime: 2026/08/01 20:53:34
permalink: /ss-yunnan/lecture-5-spectroscopic-observations-abundance-analysis-and-large-scale-surveys/
---
从光谱我们可以直接得到的东西：

* 物理参数，比如 $T_{\text{eff}}$, $\log g$, [Fe/H] 等
* 元素组成和丰度
* Line-of-sight motion of a star (也就是「视线方向」的速度，径向速度)
* 旋转
* 恒星演化活动
* 磁场

分辨本领：$R=\lambda/\Delta\lambda$，高分辨本领意味着更细致的细节，低分辨本领意味着能够看到更昏暗的目标.

大尺度光谱学项目：Large Sky Area Multi-Object Fiber Spectroscopic Telescope (LAMOST)

- 它是一个主动反射型 Schmidt 望远镜.
- 能够连续更改其镜面形态.

焦面上有 4000 根光线，每根末端 8 个 guiding camera，1 个波前探测装置.

一个很好的结果是，第一次在 thin-disk 中发现了之前只能在 halo 中发现的 r-process enhanced 恒星；另一个发现是，发现大多数 Li-rich 恒星是 red clump 恒星，而非原先认为的 RGB.

---

关于光谱如何调整.

- 连续归一化
- 修正径向速度
- 去除坏点和 tellurics (地球的影响)

调整光谱的最佳拟合参数：基本思路是，建立一个拟合模型，然后算 $\chi^2$，根据它调整下一步计算，然后建立新模型重复这个过程.

---

Metal-poor stars：非常稀有，但是质量很小、有很长的年龄，它们能够作为某种「化石」体现银河系早期的历史.

第一个峰值所包含的那些重元素很有可能记录了多个 enrichment channel.

::: tip

Take-home messages

- ﻿﻿Metal-poor stars are fossil records of the Milky Way, but they are rare and their metallic lines are weak.
- ﻿﻿Individual stars trace individual enrichment events; stellar populations reconstruct the histories of their progenitor systems.
- ﻿﻿The strongest conclusions combine chemistry, dynamics, homogeneous analysis, and well-defined samples.
- ﻿﻿A scientific result rests on an evidence chain, not on a single plot.
- ﻿﻿Surveys like LAMOST and Gaia are crucial because they turn rare-object hunting into systematic population studies.

:::

References：

- Metal-poor stars and first stars

  Frebel & Norris 2015, ARA&A, 53, 631

  Klessen & Glover 2023, ARA&A, 61, 65

  Bonifacio et al. 2025, A&ARv, 33, 2

- ﻿﻿Milky Way assembly and dwarf systems

  Bland-Hawthorn & Gerhard 2016, ARA&A, 54, 529

  Simon 2019, ARA&A, 57, 375

  Helmi 2020, ARA&A, 58, 205

- ﻿﻿Heavy elements and rare events

  Frebel 2018, Annu. Rev. Nucl. Part. Sci., 68, 237

  Cowan et al. 2021, Rev. Mod. Phys., 93, 015002

  Frebel & Ji 2023, Handbook of Nuclear Physics, 3941 - 4004

## Practical Exercise

一个 fotran 程序包 `ferre`，用作光谱拟合.