---
title: Lesson 1 Introduction
permalink: /biophysics/lesson-1-introduction/
createTime: 2025/09/16 20:57:09
---
成绩：课程参与 $30\%$，课后作业 $70\%$ (一共 7 次作业).

扩展作业带「$*$」号，比较有挑战；带「$**$」号的很有挑战；带「$\dagger\dagger$」号的需要较多生物学知识.

> 毕竟这门课程是一个「理综」课，而且是研究生课，请生物方向的学生尽量组队；大多数作业只需要会微积分.
>
> 可以使用 AI 工具，但是用起来大家会发现 DeepSeek 比较「笨」.
>
> 作业布置之后三周之内上传，晚交扣分；用 ``.pdf``，鼓励使用 $\LaTeX$！

10.14 的课程时间需要调整，到 10.12、10.18 or 10.19 晚上，大家晚点填写一下问卷.

课程的特点：

* A lot of hand-waving argument.

  > "Never make a calculation until you know the answer." by John Wheeler
  >
  > 《物理学夜航船》徐一鸿的书里面提到了.

* A lot of math, and always try to get some numbers.

  > 这或许是大家不想选另外的纯生物课的原因.

* A lot of details. (这毕竟是一个生物课)

  > “具体分析具体问题，从特殊性中抽提出普遍性；而不是从定义出发，以概念游戏代替艰苦的科学劳动.”，by 郝柏林.
  >
  > 不要觉得做理论是智力上更高贵的，实际上物理学的重点在于艰苦的劳动，长期的积累.

* Try to be skeptical, cautious and conservative physicist.

* No worry about biology.

参考书：

* *Physical Biology of the Cell*, R.Philips, J.Kondev, J.Theriot (第一版有中文翻译，第二版请大家自己找电子版吧)
* *Biological Physics: Energy, Information, Life*, P.Nelson (这本书是比较硬核的物理)
* 《生物物理学》施一公 (有生物学的知识可以到里面寻找)

## 学科历史

很久之前就有物理学家来试图用物理研究生物的效应，比如 Helmholtz，他研究过听觉，「分贝」这个单位就是他创造的，他最早发现了人们的听觉是指数增长的.

但是这种研究有点像把物理套用到生物身上，就和 X-ray 衍射 DNA 是一个性质，这是 physics for biology.

第一个作为生物物理开端的应该是 Schrödinger，他在二战的逃亡时期，在三一学院写了一本小册子《生命是什么》. 那时 Mendal 和 Morgan 的遗传学已经发展得较为完善，同时 Schrödinger 自己参与的量子力学已经开始应用到分子化学等领域. Schrödinger 的主要疑问是：遗传为什么在如此稳定的传递？毕竟统计力学告诉我们，平衡的状态应当是极为混沌、携带较少的信息的.

Schrödinger 在书里提出，研究生物物理，可能「involve "other laws of physics"」. 这样的表述把物理学的边界往一个未知的方向移动了一大步. 可能大家认为物理的前沿应该是宇宙学、凝聚态，但是在介观尺度物理学也在有序现象、涌现等等方面取得了长足的进展，而这些和课堂教学有很大的脱节.

1930s，有三个科学家发表了有关 X-ray 改变生物遗传性状的论文，这说明遗传信息可能承载于分子层面. Delbrück (是那三人之一) [+1] 和 Schrödinger 从这时开始认为，gene 是一个单分子，它以化学键连接，性质类似于固体，但是是一个非周期的排列方式 (用来编码)，这已经和 10 年后 Crick 和 Watson 发现的 DNA 非常接近.

[+1]:[Max Delbrück | 百度百科](https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%96%AF%C2%B7%E5%BE%B7%E5%B0%94%E5%B8%83%E5%90%95%E5%85%8B/3314705)

> 当然这不是没有 motivation 的，在这之前一些晶体化学家也提出过相似的看法，学术就是在不断交流中进步.

接下来就是我们熟知的 Crick 和 Watson 的故事.

---

另一条故事线也和 Delbrück 有些关系，这个故事有关我们熟悉的统计. 一开始是 Luria 正在用噬菌体研究变异是否随机：他用噬菌体作为「人工选择」方式来培养细菌，想了解是因为「加入了噬菌体」，细菌才被诱导变异，还是细菌随机变异，在选择中留下具有抗性的个体.

这个实验被称为 Luria-Delbrück fluctuation (涨落) test，两种可能的结果是：

1. 随机变异：方差符合 Poisson 分布；
2. 变异的性状被留下，所有的后代都遗传这个性状：方差非常大，没有光滑的曲线.

这些人获得了 1969 年的 Nobel Prize for Physiology or Medicine. 他们在 Cold Spring 办的暑期学校 (这个暑校至今仍然著名) 曾有一位学生是后来争议很大的 Watson.

---

第三条故事线有关 HIV 的治疗，这和动力学关系很大.

如果在感染之后测量患者体内的 HIV 病毒的含量，会在感染后几周之内急剧上升，后面急剧下降，之后有十年左右的潜伏期，最后在发病后的 $2\sim3$ 年之间再缓慢上升.

这是一个动力学问题：就像咖啡壶往纸漏斗里倒水，漏斗下面有一个杯子. 一开始漏斗里有很多咖啡，后来都被杯子 (免疫系统) 吞掉；但是杯子装满之后，漏斗里的咖啡就会越来越多了.

台湾的何大一医生和数学家合作，发明了「鸡尾酒疗法」，在病毒量下降的阶段用药，极速增加病毒减少的速度，实现病毒归零. 在治疗过程中病毒的变异曲线也可以用动力学来描述.

---

近 20 年来，生物物理化学的交叉领域获得了很多 Nobel Prize，这个领域是非常有活力的. 在我们的研究中，因为不能使用高能轰击等等破坏性方法，所以手段十分有限、也很有挑战性.

从哲学到物理到生物，从「涌现」到统计物理的远离平衡的非平衡态再到生物的大量自组织现象，生物物理给出了很多纳米层面的物理新结果新现象 (Order from order v.s. Order from disorder). P.W.Anderson 的凝聚态名作 *More is Different* 就是这样的观点.

更宏观地，鸟类和蚁群等等生物群体和分子、细胞层面的系统，在动力学上呈现出同样形式的方程，出现自组织的现象.

> 我们需要对这样的系统理解到什么程度？
>
> 首先我们要知道，生物群体是非常脆弱的，是相当差的实验系统，一旦「微扰」，整个系统就可能崩溃，这使得实验方法极为有限；另外，这个动力学方程必定极度复杂，所以我们只能定性地去理解.
>
> 在这个领域耕耘的物理学家，基本上都受过多年的凝聚态训练，他们有相应的物理直觉来抽象出这种难以描述的动力学方程.

## 我们的课程学什么？

1. What are the physics problems that organisms need to solve？

   一个细菌想要找一个小分子来吃，它在遇到第一个之后，怎么知道下一步该去往哪里找到更多的小分子呢？

   这是一个物理上的搜索算法的问题.

   拓宽一点：尝试理解鸟类的飞行等等问题，我们可以在空气动力学上找到更佳的结果.

2. How do living systems represent and process information？

   在胚胎的发育过程中，每个细胞到底是如何找到自己应该所处的位置、所要做的工作的？

   物理上，可能存在一个一开始的对称性破缺，在受精的瞬间就有极性的区分，使得后面不断地出现非对称的生长.

3. How do macroscopic functions of life emerge from interactions from many microscopic constituents？

   染色体在几微米的尺度上，承载了所有有关于你的遗传信息. 宏观的性状是如何受制于微观的分子，这也是一种物理的「涌现」问题.

4. How do living systems navigate parameter space？

   每个细胞在巨大的参数空间中，是如何分工合作的.

我们会在课程中以统计物理和化学反应 (重点放在化学势和反应) 为基础，然后进入细胞的动力学，之后是生物网络的动力学、自组织现象和空间模式 (turing 斑图等等).

> Syllabus:
>
> - ﻿﻿Statistical physics and chemical reactions
>
>   (1) Free energy, entropy, thermodynamics and kinetics of chemical reactions
>
>   ﻿﻿(2) Applications: two-state systems, and statistical physics of macromolecules
>
> - ﻿﻿Physics of motion in cells
>
>   (1) Diffusion in cells
>
>   ﻿﻿(2) Molecular motors
>
> - ﻿﻿Dynamics of biological networks
>
>   ﻿﻿(1) Sensing and signaling
>
>   ﻿﻿(2) Dynamics of biological networks
>
> - ﻿﻿Self-organization and spatial patterns
>
>   ﻿﻿(1) Collective behaviors in active systems
>
>   ﻿﻿(2) Spatial patterns

和生物专业那边的生物物理强调研究手段的多样性不同，我们的生物物理强调的是以「物理」为中心的简洁和物理思想.

生物物理到目前为止还呈现上升的趋势 (当然和凝聚态这种一骑绝尘的领域没法比)，很多 Sloan 奖的得主也是物理和神经科学、生物的交叉领域，当然说这件事情其实是想告诉大家学物理的我们可以到别的领域去探索，毕竟物理图像是后期很难学来的，但是其他的具体知识并没有那么难摄入.

这门课训练很多「建模」的能力.