---
title: Lesson 11 带电荷和旋转的黑洞
createTime: 2026/04/02 20:49:39
permalink: /GR/lesson-11-rn-and-kerr-black-holes/
---
再来说说我们研究黑洞的思路：实际上就是在研究视界，因此把视界附近的内容放大，为此定义
$$
\rho = \int_{2GM}^r\sqrt{g_{rr}(r')}\text{d}r'
$$
我们总能把度规写成
$$
\text{d}\tau^2=\rho^2\text{d}\omega^2-\text{d}\rho^2-\text{d}X^2-\text{d}Y^2
$$
的形式，从而得到 Kruskal 坐标，也就是
$$
\text{d}\tau^2 = \frac{32G^3M^3}{r}e^{-r/(2GM)}\text{d}U\text{d}V - r^2\text{d}\Omega^2
$$
如果正在研究视界附近的径向运动，那么后一项不重要，前面可以化为 $16G^2M^2\text{d}U\text{d}V$，由此，总可以把黑洞视界附近的时空分为四个区域，然后解释其物理意义.

上节课最后我们说到了带电的 RN 黑洞 (Reissner - Nordström 黑洞)，
$$
\text{d}\tau^2 = \left(1-\frac{2GM}{r}+\frac{Q^2}{r^2}\right)\text{d}t^2-\left(1-\frac{2GM}{r}+\frac{Q^2}{r^2}\right)^{-1}\text{d}r^2-r^2\text{d}\Omega^2
$$
令 $f(r)$ 为 $g_{tt}$，那么坐标奇点就是 $f(r)=0$ 对应的解，一共有两个，分别为
$$
r_{\pm}=GM\pm\sqrt{(GM)^2-Q^2}
$$
::: tip

当然这是一个很明显的 toy model，因为很难想象某一个巨大的天体会携带可观数量的电荷；带电是可能的，因为大天体本身就有辐射，但是很多电荷不可能.

:::

还是研究黑洞在坐标奇点附近的性质. 将 $f(r)$ 在奇点附近做一个展开，首先考虑 $r\approx r_+$ 时，
$$
f(r)=\frac{1}{r^2}(r-r_+)(r-r_-) \approx\left[\frac{1}{r_+^2}(r_+-r_-)\right](r-r_+)
$$
仍旧 play our trick，为了消除度规里面的坐标奇点，定义
$$
r_*=\int\frac{\text{d}r'}{f(r')}=\frac{1}{2\kappa_+}\ln|r_+(r-r_+)|,\quad \kappa_+=\frac{r_+-r_-}{2r_+^2}
$$
然后度规就变为
$$
\text{d}\tau^2=f(r)(\text{d}t^2-\text{d}r_*^2)-r^2\text{d}\Omega^2
$$
朴素的想法是直接定义 $u=t-r_*$，$v=t+r_*$，但是这样还是不好计算，所以做一次 rescale，定义为
$$
u_+=\mp e^{-\kappa_+u},\quad v_+=e^{\kappa_+v}
$$
度规变换为 (这里 $r\approx r_+$ 所以第二项也近似了)：
$$
\text{d}\tau^2=\frac{2}{\kappa_+^2}\text{d}u_+\text{d}v_+-r_+^2\text{d}\Omega^2
$$
类似之前 Schwarzschild 黑洞的情况，仍然是过了视界，类时的世界线就无法返回. 问题主要出现在 $r_-$ 的位置，过了这里 $f(r)$ 的符号再次变回正的. 定义
$$
f(r)=-\kappa_-(r-r_-)
$$
仍然有
$$
r_*=-\frac{1}{2\kappa_-}\ln|r_-(r-r_-)|,\quad u=t-r_*,\quad v=t+r_*
$$
定义新的
$$
u_-=\mp e^{\kappa_-u},\quad v_-=-e^{-\kappa_-v}
$$
和 Schwarzschild 时空的 Kruskal 坐标相比，那里的 $r=0$ 对应着 $uv=1$ 的双曲线；但是这里 $r=0$ 对应 $u_-v_-=-1$，因此进入的类时世界线不一定会碰到 $r=0$ 的本性奇点，而是可能回到 $r_+$ 所对应的那个坐标. 如果是在 $r_+$ 对应的坐标里，外部和 Schwarzschild 时空差不多，只是不存在本性奇点，只有一个虚拟的 boundary. 过了虚拟 boundary 就进入 $r_-$ 对应的坐标.

:::: tip

陈童老师在书里面画的图：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/ymjew503t0n000dcuht3u4km5qyrppc8DIYxAIFxDda1DGxPDwUzAa==.png)

![](https://vip.123pan.cn/1845440081/ymjew503t0l000dcuht7ijxm28yrq48hDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

简单来说就是在 $r_{\pm}$ 之间无法反向，只能沿着黑洞 (或者白洞) 走；在 $r_-$ 内部可以反向逃出黑洞，在外部可能落回来或者永久逃出.

::: warning

上述所有讨论建立在静态的体系下，如果是坍缩形成的带电黑洞，不会有无限延拓的 Penrose 图. 同时，即使存在这种黑洞，在逃出之后也不再是原来的宇宙，因为黑洞不可能同时作为黑洞与白洞存在，这个过程的时空结构一定发生了某种改变.

:::

---

旋转黑洞：Kerr - Neumann 黑洞，Kerr 度规为
$$
\begin{aligned}
-\text{d}\tau^2=\text{d}s^2&=-\left(1-\frac{2Mr}{\rho^2}\right)\text{d}t^2-\frac{4Mar\sin^2\theta}{\rho^2}\text{d}\phi\text{d}t+\frac{\rho^2}{\Delta}\text{d}r^2\\\\
&\quad +\rho^2\text{d}\theta^2+\left(r^2+a^2+\frac{2Mra^2\sin^2\theta}{\rho^2}\right)\sin^2\theta\text{d}\phi^2
\end{aligned}\quad G=1
$$
这里，
$$
\begin{aligned}
&a=\frac{J}{M}\text{ (angular momentum per weight)}\\\\
&\Delta=r^2-2Mr+a^2\\\\
&\rho^2=r^2+a^2\cos^2\theta
\end{aligned}
$$
::: warning

设定上我们还没有「角动量」，但是类似 [此处](https://zhuanlan.zhihu.com/p/611102483) 的定义，将能动张量与坐标做一个小的 trick 得到角动量场.

:::

为了分析 Kerr 黑洞附近物体的运动，想到之前我们说过的 Killing 矢量场，用来找守恒. 之前证明过，if $\mathcal{L}_\xi g_{\mu\nu}=0$，then $U_\mu\xi^\mu$ is conserved. 有
$$
\mathcal{L}_\xi g_{\mu\nu} = \xi^\lambda g_{\mu\nu,\lambda}-\xi^\lambda{}_{,\mu}g_{\lambda\nu}-\xi^\lambda{}_{,\nu}g_{\mu\lambda}=0
$$
找到的 Killing vectors 仍然是
$$
\delta^\mu{}_{\hat{\phi}},\quad \delta^\mu{}_{\hat{t}}
$$
于是得到守恒量，能量为
$$
E=-\xi_\mu U^\mu=-g_{\mu\nu}\xi^\mu U^\nu=-g_{tt}U^t-g_{t\phi}U^\phi
$$
角动量：
$$
L=-g_{\phi t}U^t-g_{\phi\phi}U^\phi
$$
一阶运动方程变化为 ($U^t=\text{d}t/\text{d}\tau$，$U^\phi=\text{d}\phi/\text{d}\tau$)
$$
\begin{aligned}
&\frac{\text{d}\phi}{\text{d}\tau} = \frac{1}{\Delta}\left[\left(r^2+a^2+\frac{2Ma^2}{r}\right)E-\frac{2Ma}{r}L\right]\\\\
&\frac{\text{d}t}{\text{d}\tau} = \frac{1}{\Delta}\left[\left(1-\frac{2M}{r}\right)L+\frac{2Ma}{r}E\right]
\end{aligned}
$$
下一步需要得到 $\text{d}r/\text{d}\tau$ 以便于求出轨道，利用测地线方程，
$$
\frac{E^2-1}{2}=\frac{1}{2}\left(\frac{\text{d}r}{\text{d}\tau}\right)^2+V_{\text{eff}}(r,E,L)
$$

> 其中，有效势能
> $$
> V_{\text{eff}}=-\frac{M}{r}+\frac{L^2-a^2(E^2-1)}{2r^2}-\frac{M(L-aE)^2}{r^2}
> $$

::: tip

我们发现一个很特别的事情：即使是在外界 $L=0$ 的一个粒子，也就是瞄准黑洞打过去的一个粒子，因为黑洞自身的旋转，也会发生轨道的偏折，这称为时空拖拽效应，也就是黑洞自身的旋转会拖动周围的时空. 因此 Kerr 解的真空部分也和黑洞本体相关，这区别于 Schwarzschild 解.

:::

---

下面说 Kerr 解作为黑洞的性质. 考虑 Kerr 解的 Riemann 标量完全缩并：
$$
R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = \frac{48M^2(r^2-a^2\cos^2\theta)(\rho^4-16a^2r^2\cos^2\theta)}{\rho^{12}}
$$
::: danger

这玩意和 Ricci 标量是独立的，因为缩并方式并不一样，因此包含的信息也多于 $R$.

:::

这里 $\rho=0$ 对应本性奇点，$\Delta=0$ 对应坐标奇点，可见：
$$
g_{tt}=\frac{\rho^2-2Mr}{\rho^2}=\frac{r^2+a^2\cos^2\theta-2Mr}{\rho^2}
$$
两个奇点并没有很大距离，在外侧的区域并不是真正的视界，进去之后理论还能出来，这一个外层的区域被称为 ergosphere (erg 就是我们常用的能量单位)，也就是能层，它包含着黑洞全部的旋转能量. Penrose 证明了能层里面的能量可以被提取出来，作为一个能量源.