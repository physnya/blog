---
title: Galaxy Formation in Supercomputers
permalink: /astro-front/lesson-6-Galaxy-Formation-in-Supercomputers/
createTime: 2025/10/28 15:38:21
---
::: right

—— Hui Li

:::

这个领域的「望远镜」不是真正的望远镜，而是超级计算机.

不同的星系有很多不同的特征，比如银河系是一个有旋臂的螺旋星系，还有很多巨型星系、暗红色的矮星系、绕着更大星系旋转的水母状星系等等. 我们的核心问题是什么样的物理机制决定了这些星系的形态.

另一个问题是，这些星系的空间分布并不呈现非常随机的分布，而是有一定的空间关联，它们的分布有一定的拓扑结构，从 1977 的 CfA 巡天到现在的 DESI 暗能量光谱巡天，都能找到一定的结构特征.

目前我们已经知道了这些问题的初始条件 (宇宙大爆炸和 CMB 的早期微小涨落) 和末态条件 (当前的观测结果). 现在的很多不均匀性应该来自于早期宇宙的那些微小涨落，它们能够成长成为现在的大尺度结构，比如一个高密度区域能够吸引更多物质，长成更大的星系团.

The first N-body simulation with light bulbs：

> Development of a「BAR-TYPE」Density Wave in the Central Layer of Galaxy.
>
> ::: right
>
> —— Per Olaf Lindblad, Stockholm Observatory, April 1961
>
> :::

这是最早的一个模拟，他们在初态设置了很多灯泡，用接收器来测量收到的光强 (这和引力一样，也是 $1/r^2$ 律)，然后用光强大小来判断某个位置受到的引力大小，之后按照这样的「引力」来移动灯泡，「演化」这个系统，最后能够得到一个类似于螺旋星系的结构.

当然，现在我们在超算上用 billion 量级的引力单元来模拟宇宙的结构.

## Gravity-Only N-Body Simulations

每个单元的运动方程是<a name="1"></a>
$$
\ddot{\vec{x}}_i=-\nabla_i\varPhi(\vec{x}_i)\,,\quad\varPhi(\vec{x})=-G\sum_{j=1}^N\frac{m_j}{[(\vec{x}-\vec{x}_j)^2+\varepsilon^2]^{1/2}}\tag{1}
$$
简单的想法是直接求和，得到全空间的引力势，但是这个方法的复杂度是 $\mathcal{O}(N^2)$，因为求和的难度是 $N(N+1)$. 到 1 million 量级的粒子数量时，我们还能够计算，但是已经非常吃力.

人们想出了很多更有效率的算法，比如 Tree Algorithm，考虑把粒子放在一个树状分组中，找到每一个分组的中心质量，然后计算远场的某处引力势：

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fsp6116kjx1ueDIYxAIFxDda1DGxPDwUzAa==.png)

最后只用对最近的一些粒子做引力的直接求和，更远的区域可以先做质量求和再求引力，这样的算法得到的复杂度是 $\mathcal{O}(N\log N)$.

(当然还有很多别的算法，但是复杂度都差不多)

下面我们来看看模拟到底得到了什么：

* 大尺度结构成长于早期的均匀密度之中，逐渐变得非线性
* 暗物质晕的存在
* 暗物质晕有内部结构

暗物质晕的空间分布：

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fsp6822kk5fuhDIYxAIFxDda1DGxPDwUzAa==.png)

这个理论结果和目前已经得到的大量巡天结果相吻合，这很令人自豪，因为我们输入的不过是 CMB 的结构，但是我们得到了和观测吻合的结果.

暗物质晕周围会出现很多小尺度的暗物质晕，这是因为暗物质晕的形成是「bottom-up」的过程，大尺度结构来源于小尺度结构的涌现；小型的暗物质晕叫做 satellite 暗物质晕 (这刚好和丹丹老师讲到的东西类似).

## Cosmological Hydrodynamical Simulations

「Putting Everything Together」

我们不能只算暗物质的引力作用，这还不够，我们需要研究重子物质如何在暗物质晕中分布.

(Dandan Xu 提到过的星系质量曲线和理论模拟出的暗物质晕质量曲线之间存在一个压低)

![](https://vip.123pan.cn/1845440081/yk6baz03t0n000d7w33hedn2bjftrracDIYxAIFxDda1DGxPDwUzAa==.png)

这样非线性的效应需要我们考虑很多 dirty 细节，比如气体的压强、Boltzmann 积分微分方程、流体力学、…… 这时候我们的任务变得非常 chaotic.

在模拟中，这样的系统和之前的 gravitation-only 系统不一样了，星系的中心出现了超新星爆炸、黑洞等等，气体被爆炸和喷流抛射出去，磁场和电场产生了很大的作用，星系也呈现了更多有趣的形态.

Missing satellite problem：我们的模拟中得到，我们周围应该有更多的卫星星系，但是我们并没有观测到那么多. 一个可能的解释是，这些小型的暗物质晕并不能形成星系，它们是 dizzy 的，所以我们无法观测到；另外，更加轻的暗物质晕的势阱非常浅，更容易被一场超新星爆炸破坏掉.

## New Frontiers

### Galaxy Formation in the Cosmic Dawn (Epoch of Reionization)

我们考虑远处的星系的吸收谱线，有些吸收谱线只有电离之后的氢才能吸收，我们的观测结果发现 Lyman 谱线被吸收，这些吸收谱被红移之后在光谱上形成了梳齿状的结构，被称为 Lyman Alpha Forest.

我们的问题是，为什么之前的原子化宇宙到现在被「再电离 (reionization)」了.

再电离之前的宇宙，能量较低的光子会被原子所吸收，而光子能够穿过电离后的气体. 到 $z=6$ 的时期，宇宙突然变得非常「透明」，但是我们还不知道什么样的源导致了这样的现象.

> 为什么是「再电离」？
>
> 很显然啊，宇宙大爆炸的高温下没有什么东西不是电离的，只是冷却后变得原子化了.

### Evolution of Galaxies in Their Ecosystem

上节课 Zhijie Qu 讲的就是这个，星系周围的气体和星系自己组成了一种生态系统，在这样的系统中研究星系的演化是当前的一个前沿话题.

星系不仅和周围的气体相互作用，星系之间也存在气体的交换.

missing Baryon problem (Zhijie Qu 讲过这个，崔老师也是做这个的).

## 课后问题

为什么方程 <a href="#1">(1)</a> 里面有一个 $\varepsilon$？

> 这被称为 soften.
>
> 因为我们用一个粒子来模拟成千上万个暗物质粒子，如果只有两个粒子，它们相互作用时可能出现相互绕转的现象，但是我们知道对于两团物质而言这是完全不可能的，它们应该相互穿过、受到一点点引力作用.
>
> $\varepsilon$ 就体现的是这样的作用.

计算更高阶关联函数的意义？

> 两点关联函数已经和当前的宇宙结构符合得很好了，三点、四点等等的关联函数一般被用来验证 Newton 引力的正确性.