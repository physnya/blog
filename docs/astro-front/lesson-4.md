---
title: lesson-4
createTime: 2025/10/14 15:06:31
permalink: /astro-front/astro-front/x2c0rokb/
---
Through Cosmic Lens Into Deep Universe —— Strong Gravitational Lesing

::: right

—— Dandan Xu

:::

从菊石和细胞骨架出发，我们发现相似的结构出现在差距很大的两个尺度上：中心有百万倍太阳质量的超大质量黑洞的那些漩涡星系，和菊石的结构很类似；但是「细胞骨架」呢？

* 对 Coma Cluster (后发星系团，最近的一个星系团) 的观测：1933 年 Zwicky 认为后发星系团需要稳定存在，我们需要 400 倍于能用光学方法探测到的质量.
* 1974，Ostriker & Einasto 计算了 M31 和银河系的旋转曲线，也发现我们需要引入一个 unseen matter 来维持这样的旋转曲线.
* 1973 - 1980，Roberts & Rots; Rubin _et al_：测量 $\text{H}$ 的 $21\text{ cm}$ 谱线，也证明存在 dark matter.

测量 Dark matter 的激波阵面，得到的图像像一种细胞骨架，这是宇宙的细胞骨架.

我们如何探测暗物质？引力透镜！
$$
R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=\frac{8\pi G}{c^4}T_{\mu\nu}
$$
这里有很多 tensor，这是因为我们需要协变的物理量，所以张量会用得很多. 因为光沿着测地线运动，所以上述方程也能够描述光的运动.

当我们说起光学棱镜，我们会考虑棱镜材料的色散 $n(\lambda)$；而广义相对论的偏转效应不存在色散，但是有关系：
$$
n=1-\frac{2}{c^2}|\varPhi|
$$
当然，这个偏转效应非常微小，太阳产生的偏折约是 $1.7''$，比月亮的角宽度 $30'$ 小了好几个数量级. 瞄准距离为 $b$、光入射方向建立的坐标轴，坐标为 $z$ 时：
$$
\varPhi(b,z)=-\frac{GM}{(b^2+z^2)^{1/2}}\Longrightarrow\nabla_\bot\varPhi(b,z)=\frac{GM\vec{b}}{(b^2+z^2)^{3/2}}
$$
积分角度，得到
$$
\alpha = \frac{2}{c^2}\int\nabla_\bot\varPhi\text{d}z=\frac{4GM}{c^2b}
$$
太阳产生的偏角 $1.7''$ 最早在 1919 年由 Einstein 计算得到，并在 1920 年的一次日蚀中被 Eddington 验证.

我们在考虑引力透镜效应时，源的距离一般是 $100\text{ kpc}$ 量级 (对于单星体的折射) 或者是 $1\text{ Gpc}$ 量级 (对于星系和星系团造成的折射)，而光被强烈偏折的区域是单星体的直径 $10^6\text{ km}$ 量级或者 $1\text{ Mpc}$ 量级，因此这个效应其实并不算很强.

在旋转对称性很好的情况下，我们可以得到
$$
\theta_E=\left[\frac{4GM(\theta_E)}{c^2}\frac{D_{ds}}{D_dD_s} \right]^{1/2}
$$
这是所谓的 Einstein 圆环对应的角宽方程.

Zwicky 在 1930s 就提出，星系质量应该比当时认为的 $10^9M_{\odot}$ 要大一百倍以上，也就是用 gravitational lensing 测量得到的 $10^{11}M_\odot$ 量级. 这在 1950s 第一次观测到的类星体透镜事件中被验证.

下面我们讲三种引力透镜：

* Microlensing

微引力透镜，这一般是一个点质量 (单个星体) 造成的，在像移动时，我们能够观测到背景图像中的一个光度变化曲线.

微引力透镜只能通过这个光度变化曲线来探测.

* Galaxy Strong Lensing

强引力透镜，比如星系的暗物质晕产生的引力透镜效应.

:::: demo-wrapper img no-padding

::: flex center

![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xwyjtepeq4f7jDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

考虑不同位置的光到达观者的时间延迟，最长距离的光线反而速度最快，因为它绕开了强引力透镜中心的大势场，而经过引力透镜中心的那一条光线虽然路程更短，但是并不是最快的.

这种效应被称为时间延迟透镜.

* Weak Lensing

弱引力透镜，这个我们不细说，但是这种透镜会造成相干的图像形状扭曲，这样的效果可以用来反推引力场分布.

## 标准宇宙学模型

每一个星系中都存在暗物质晕，它们是星系的底层结构. 但是我们遇到的困难是 (小尺度上的)，如果仅考虑冷暗物质 (CDM)，星系将会变得比现在更大，观测到的矮星系不符合这个预测结果；卫星的数量也会更多.

可能的解决方案是重子物质也参与了星系的主要构建过程，并以某种机制限制了星系的增长；另外，我们可以考虑 Warm DM / Self Interacting DM / Fussy or Wave DM；最后的方案是建立超出 GR 的引力理论，比如 MOND、$f(R)$ 或者 Emergent Gravity.

目前的模型达到的效果是：

:::: demo-wrapper img no-padding

::: flex center

![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xwyk4nreqpy90DIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

---

Q：为什么冷暗物质在卫星星系级别的尺度上会出问题？我们是怎样探测卫星尺度的数据的？

> 首先，冷暗物质因为「冷」，所以在极其微小的尺度上很容易聚集，这造成 $10^6M_\odot$ 量级的卫星星系应该有更多，而不是现在所观测到的那样.
>
> 我们观测的水平已经达到了观测卫星星系的水平了.