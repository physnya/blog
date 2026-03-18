---
title: Lesson 7 统计力学绪论
createTime: 2026/03/18 11:26:34
permalink: /statistical-mechanics/lesson-7-statistical-mechanics-intro/
---
## 统计的基本概念

宏观量分为两种，一种是像内能一样，有微观对应的量，它们是微观对应量的统计平均值；而有一些是像温度、压强或者熵一样，没有微观对应的，只能通过热力学与另一类热力学宏观量来产生联系.

我们在统计力学中用的是古典概率论中的几率概念，也就是所谓的古典概型. 互斥事件有所谓的加法定理，独立事件有乘法定理：
$$
P_{A+B} = \lim_{N\to\infty}\frac{N_A+N_B}{N} = P_A+P_B,\quad P_{A\cdot B} = \lim_{N\to\infty}\frac{N_A}{N}\cdot\frac{N_B}{N} = P_A\cdot P_B
$$

> 这里必须要和 [天体物理统计方法](/astro-statistic/) 里的 Bayes 统计相区分，这里讲的是以频率为核心的概率论. (虽然我也不知道为什么一定要在统计力学里用这样的观点)

同时还有涨落的概念，一般定义为二阶矩 $\sqrt{\overline{x^2}-\overline{x}^2}$.

二项分布：
$$
P_N(n) = \frac{N!}{n!(N-n)!}p^nq^{N-n}
$$
二项分布来自于一维的固定步长随机行走. 当 $N\gg1, p\ll1$ 时，二项分布趋向于 Poisson 分布，有
$$
P_N(n) = \frac{N!}{n!(N-n)!}p^nq^{N-n} \approx \frac{N^n}{n!}p^nq^{N-n}
$$
对 $q^{N-n}$ 取对数，
$$
\ln q^{N-n} = (N-n)\ln(1-p) \approx-Np\Longrightarrow q^{N-n} \approx e^{-Np} =e^{-\overline{n}}
$$
因此 Poisson 分布为
$$
P_N(n) =\frac{\overline{n}^n}{n!}e^{-\overline{n}}
$$
当 $p\approx q, N\gg1$ 时趋向于 Gauss 分布，仍然是两边取对数，这一次用到 Stirling 公式，
$$
\ln p_N(n) \approx N(\ln N-1) - n(\ln n-1) - (N-n)[\ln(N-n)-1] +n\ln p + (N-n)\ln q
$$
对 $\ln p_N(n)$ 求关于 $n$ 的极值，并在这附近展开到二阶项，得到分布
$$
p_N(n)\approx\frac{1}{\sqrt{2\pi\sigma^2}}e^{-(n-\overline{n})^2/2\sigma^2},\quad \sigma^2=Npq
$$
::: tip

既然说到 Gauss 分布，这里也简介一下 Gauss 积分，令
$$
I = \int_{-\infty}^\infty e^{-ax^2/2}\text{d}x
$$
扩展到二维才能简洁地求出，由直角坐标换为极坐标，有
$$
\begin{aligned}
I^2 &= \int_{-\infty}^\infty\int_{-\infty}^\infty e^{-a(x^2+y^2)/2}\text{d}x\text{d}y = \int_0^{2\pi}\int_0^\infty e^{-ar^2/2}\cdot r\text{d}r\text{d}\theta\\\\
&= 2\pi\cdot \int_0^\infty e^{-ar^2/2}\text{d}\left(\frac{r^2}{2}\right) = \boxed{\sqrt{\frac{2\pi}{a}}}
\end{aligned}
$$
有时候也把结果写成指数的形式方便下一步再做其他运算，$\sqrt{2\pi}e^{-(\log a)/2}$.

:::

## 近独立粒子体系

::: tip

解读：

这个「近」字实际上没有必要提，因为我们就是做了完全独立的近似，这里要求粒子间作用能 $\ll$ 单个粒子本身的能量.

这里的「粒子」：

* 可以是分子、原子、原子核和电子等等，只要更底层的自由度未被激发，就能作为一个整体视为粒子
* 为了研究相互作用体系，提出了很多「准粒子」的概念，比如声子、旋子等等，在引入这些概念之后我们可以用近独立粒子体系的结论来进行研究.

「独立」指的是单粒子态有明确的含义，如系统能量 $\displaystyle{E = \sum_ia_i\varepsilon_i}$.

:::