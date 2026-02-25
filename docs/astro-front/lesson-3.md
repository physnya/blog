---
title: Light, Sound and Gravitational Waves of Black Holes and Neutron Stars
permalink: /astro-front/lesson-3-gravitational-waves/
createTime: 2025/09/30 15:07:18
---

::: right

—— Huan Yang

:::

人类第一次观测到引力波距今已经 10 年，所以我们这个领域已经有 10 年的历史. 到目前为止，我们已经观测到很多不同的引力波现象.

## A Brief History of Development

我们都知道广义相对论是 1915 年由 Einstein 提出的，它描述质量影响时空. 当然可以想象，如果一团质量在空间中移动、两团质量相互绕转，都会造成引力波的释放，引力波是运动质量产生的时空涟漪.

我们测量引力波是通过度规相对当前度规的偏移得到的，$h_{jk}$. 广义相对论给出这个关系：

$$
h_{jk}\sim\frac{\ddot{I}_{jk}}{r}
$$

也就是引力源动能和引力源相对场点的距离之比. 引力波有两种偏振模式，plus mode & cross mode.

引力波的理论预测并不是在广义相对论提出之后就有的，而是历经了很长的时间才确认可能存在这样的一种波动.

::: timeline placement="between"

- 广义相对论提出
  time=1915 placement="right"

- 引力波存在吗？
  time=1956 / 1957

  "Sticky Bead Argument" —— Richard Feynman

  Feynman 的引力波探测器：它是两个珠子在刚性杆上自由滑动 (但摩擦很小). 当引力波经过杆时，原子力使杆的长度固定，但两个珠子之间的适当距离会振荡. 因此，珠子摩擦杆子，产生热.

- Weber 望远镜
  time=1979 placement="right"

- Hulse-Taylor binary pulsar
  time=2002-2010

  这是一对射电双星，它们为引力波的发现提供了间接证据.

- LIGO 探测到引力波
  time=2015 placement="right"

  用一个极度精密的 Michelson 干涉仪来测量引力波造成的臂长变化，臂长达到 $4\text{ km}$，要测量 $10^{-22}$ 量级的误差，所以精度应该要到 $10^{-19}\text{ m}$ 级别.

:::

## Black Hole Mergers

到现在，全世界有很多引力波探测器，美国的 LIGO、印度的 INDIGO (LIGO 的一个 copy)、日本的 KAGRA 等等.

下面是我们今年测得的一次引力波事件的数据：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/ymjew503t0n000d7w32ybxrlk7a53knsDIYxAIFxDda1DGxPDwUzAa==.png)

:::

这比十年前第一次探测得到的数据要好得多，因为设备变得先进了.

对于 LIGO 观测到的所有引力波事件，可以分解出一个质量谱，比较有意思的结果是在 10 倍太阳质量和 35 倍太阳质量处，这个质量谱各有一个峰值，很多理论现在正在试图解释这样的一个特殊现象.

对于已经观测到的现象，我们能够做出一些更加细致的解释. 比如事件 GW230529_181500，是一个 1.4 倍太阳质量的中子星和一个 3.6 倍太阳质量的天体融合的事件，我们认为 3.6 倍太阳质量对于一个中子星来说太重，所以这可能是一个黑洞.

之前的质量谱峰值问题，我们认为这里有一个 mass gap，但是在上面说的这个事件中，如果另一个天体是黑洞，那么这一事件很有可能能够弥补 10 倍太阳质量到 35 倍太阳质量之间的那一个 gap.

当然，在更高的质量下也观测到一些事件，比如 GW190521 观测到 $85M_{\odot}$ 和 $66M_\odot$ 合并.

另外一个观测带来的知识是黑洞的自旋，双黑洞合并事件放出的引力波可以体现这个系统的轨道角动量以及两个黑洞本身的自旋. 如果这个系统是 field binary，那么它们的自旋是平行的；若是 dynamical binary，那么自旋取向没有特定规则. 从引力波的结果能够判断这两种系统.

对于引力波的观测也是广义相对论的绝佳验证手段：

- Inspiral test: constraining the Post-Newtonian parameters
- Ringdown-inspiral test: comparing mass and spin predictions

## Neutron Star Mergers

利用引力波来探测中子星的合并事件.

中子星合并过程之前，在绕转的过程中星体会出现 distortion (变形)，这造成这种系统释放的引力波有独特的结构.

一次碰撞过程会释放垂直平面的喷流 (afterglow，余晖)，有 radio (weeks - years) 和 optical (hours - days) 波段的光学信号，同时释放大量物质以 $0.1\sim0.3c$ 速度往外喷射，还会释放秒量级的引力波. 综合这些观测数据，我们能够更精确地描述一次中子星碰撞合并的事件.

通过测量碰撞事件的 ejecta (喷出物) 状况，在一定程度上能够得到 Hubble 常数的有关信息，因此这是非常重要的观测.

## Where Are We Heading？

下一代探测器已经在建设过程之中，它们的 Strain Noise 处理能力和 Frequency 都得到了更大幅度的提升，目前的探测器能够测量的红移不到 $1$，下一代探测器能够提升到 $z=10$ 以上的遥远宇宙，我们或许在更下一代的探测器出现时已经能够看到宇宙中所有的黑洞和中子星.

> 为什么这个探测器的灵敏度曲线图会有在特定频率出现的 Strain Noise 处理能力峰值？(如图)
>
> ::: window img no-padding
>
> ![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xwlinvwumwluwDIYxAIFxDda1DGxPDwUzAa==.png)
>
> :::
>
> 这是因为仪器可能有共振频率，实际上这些峰值全部都是误差，我们反而不想要这些峰值.

另外，在超大质量 ($10^5\sim10^7$ 倍太阳质量) 级别的黑洞或者超级射电源附近绕行的小星体的轨道，因为强大的广义相对论作用以及相对其他系统更加低速的绕行运动，会出现非常特殊的轨道形状. 给一个小的微扰之后，引力波可能会辐射走这个轨道的能量，释放出一些信息. 这种 EMRI (极端质量比例旋) 系统，为各种广义相对论验证和稳定的引力波频率需求提供了一个非常良好的样本.
