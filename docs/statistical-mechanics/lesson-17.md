---
title: Lesson 17 光子气体
createTime: 2026/04/29 11:26:23
permalink: /statistical-mechanics/lesson-17/
---
## Bose - Einstein 凝聚

以液 $^4\text{He}$ 为例. 这是一种 boson，相变温度在 $2.17\text{ K}$ 左右，在 $T>T_c$ 时为正常液体 $\text{HeI}$，相变之后变为超流体 $\text{HeII}$. 超流态有很多独特的性质，比如喷泉效应和量子化的涡旋.

二流体模型：认为超流体是正常液体和超流体的混合，总的密度为 $\rho=\rho_n+\rho_s$.

$\lambda$ 相变 (超流相变) 和 BEC 是类似的，但是并不相同，BEC 的峰值只有有限高，而液 $\text{He}$ 的峰值无限高；同时，临界温度的数值不同，BEC 模型在液氦上给出的临界温度是 $3.13\text{ K}$.

## 光子气体

对于 $T,V$ 给定的系统，光子有
$$
\varepsilon=h\nu,\quad p=\frac{h\nu}{c},\quad \varepsilon=pc
$$
光子之间并没有可观的相互作用，自旋是 $1$，简并度为 $2$ (两个方向的偏振).

理想黑体定义为：能够完全吸收照射到它上面的各种波长的电磁波的物体. 一般来说在实践上是用一个内部铺满高吸收率材料的不规则空腔，空腔上开的一个小口可以视为一个足够理想的黑体. $V$ 足够大时，准连续能级，
$$
\frac{g_s\text{d}\omega}{h^3}\frac{1}{e^{\beta\varepsilon}-1}
$$
把态密度积分，得到频率分布
$$
g(\nu)\text{d}\nu = g_s\frac{4\pi V}{c^3}\nu^2\text{d}\nu\Longrightarrow n(\nu)\text{d}\nu=g_s\frac{4\pi V}{c^3}\frac{\nu^2\text{d}\nu}{e^{\beta h\nu}-1}
$$
而能量分布就是
$$
U(\nu)\text{d}\nu = n(\nu)h\nu\text{d}\nu = \frac{8\pi Vh\nu^3}{c^3}\frac{\text{d}\nu}{e^{\beta h\nu}-1}
$$
这就是 Planck 定律.

> 对于低频高温极限，$h\nu\ll k_BT$，这时能量分布化为
> $$
> U(\nu)\text{d}\nu = \frac{8\pi Vk_BT\nu^2}{c^3}\text{d}\nu
> $$
> 这是 Rayleigh - Jeans 定律；对于高频低温极限，$h\nu\gg k_BT$，
> $$
> U(\nu)\text{d}\nu = \frac{8\pi Vh\nu^3}{c^3}e^{-\beta h\nu}\text{d}\nu
> $$
> 这是 Wien 定律.

积分能量之后得到辐射通量密度为
$$
J = \sigma T^4,\quad \sigma = \frac{2\pi^5k^4_B}{15h^3c^2}
$$
如果对能量分布求极值，那么可以得到 Wein 位移定律，
$$
\lambda_mT = \frac{hc}{4.96k_B}
$$
可以测得 Planck 常数，这种方法的测量值与现代用量子 Hall 效应等高级手段测量得到的数值相差仅仅 $4\%$.

---

热力学上，光子气体的巨配分函数为
$$
\ln \Xi(\beta,V) = -\int_0^\infty g(\varepsilon)\text{d}\varepsilon\cdot\ln(1-e^{-\beta\varepsilon}) = \frac{8\pi V}{3(hc)^3\beta^3}\int_0^\infty\frac{x^3\text{d}x}{e^x-1}
$$
后面的积分是可以严格得到的，最终结果为
$$
\ln\Xi(\beta,V) = \frac{8\pi^5V}{45(hc)^3\beta^3}
$$
