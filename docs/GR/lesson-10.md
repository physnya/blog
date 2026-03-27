---
title: Lesson 10 Penrose 图
createTime: 2026/03/27 23:12:23
permalink: /GR/lesson-10-penrose-figure/
---
上节课说到凑出 Kruskal 坐标，
$$
\text{d}\tau^2 = \frac{32(GM)^3}{r}e^{-r/(2GM)}\text{d}U\text{d}V-r^2\text{d}\Omega^2
$$
考虑做一个拉回 (保角的)，将无穷远拉近到研究范围内，变换为
$$
U'=\arctan U,\quad V'=\arctan V
$$
当然也可以用 $\tanh^{-1}$，区别只是 $(-\infty,\infty)$ 拉回到 $(-\pi/2,\pi/2)$ 还是 $(-1,1)$ 而已. 新的图称为 Penrose 图，在新的图中所有的双曲线都变成直线，之前的奇点 $r=0$ 对应的双曲线也变为直线. 原来的类时未来和类时过去分别集中于两个点，

::: window img no-padding

![](https://tikz.net/wp-content/uploads/2021/10/relativity_penrose_diagram-008.png)

:::

回头来看 Minkowski 时空，
$$
\text{d}\tau^2=\text{d}t^2-\text{d}r^2-\cdots=(\text{d}t+\text{d}r)(\text{d}t-\text{d}r)-\cdots=\text{d}U\text{d}V-\cdots
$$
也可以得到所有类时无穷远分别集中在几点，无穷的未来称为 $i^+$，无穷的过去称为 $i^-$；类光的无穷远集中在两条线段上，分别为 $\mathscr{I}^{\pm}$；类空的无穷远集中在 $i^0$ 一点. $\text{I}$ 区域和 $\text{III}$ 区域没有因果的连接，只能通过奇点相互连接，所以理论上我们可以说黑洞和白洞连接着两个本来无法相交的世界. 但是现实中的黑洞都是塌缩形成的，而不是一个原生的结构，因此不应该存在 $\text{III}$ 这个区域 (因为一开始就没有这个区域).

为了研究坍缩中的黑洞，考虑一个动态的解. 仍然有球对称的性质，但是现在度规和 $t$ 有关系，
$$
\text{d}\tau^2=C(r,t)\text{d}t^2-D(r,t)\text{d}r^2-2E(r,t)\text{d}r\text{d}t-F(r,t)r^2(\text{d}\theta^2+\sin^2\theta\text{d}\phi^2)
$$
重新定义 $r'$ 就可以把 $F(r,t)$ 包含进去，然后再更新 $E$ 和 $D$ 的定义即可，所以可以不去解 $F$ 的具体形式，直接把最后一项写成 $-r^2\text{d}\Omega^2$，这时候用完了 $r$ 的自由度；之后用 $t$ 的自由度，写成
$$
\text{d}t' \equiv\eta(r,t)[C(r,t)\text{d}t-E(r,t)\text{d}r]
$$
最后重新定义 $C,D,E$，得到
$$
\text{d}\tau^2=B(r,t)\text{d}t^2-A(r,t)\text{d}r^2-r^2\text{d}\Omega^2
$$

> 也就是说即使度规和 $t$ 有关，还是可以写成球对称的这个形式.

下一步还是算联络，
$$
\Gamma^r{}_{rt}=\Gamma^r{}_{tr}=\frac{\dot{A}}{2A},\quad \Gamma^t{}_{rt}=\Gamma^t{}_{tr}=\frac{\dot{B}}{2B}
$$
然后 Ricci 张量分量
$$
\begin{aligned}
&R_{rr} = R_{rr}^{\text{static}}-\frac{\ddot{A}}{2B}+\frac{\dot{A}\dot{B}}{4B^2}+\frac{\dot{A}^2}{4AB}\\\\
&R_{\theta\theta} = R_{\theta\theta}^{\text{static}}\\\\
&R_{\phi\phi}=R_{\theta\theta}\sin^2\theta\\\\
&R_{tt} = R_{tt}^{\text{static}} + \frac{\ddot{A}}{2A}-\frac{\dot{A}^2}{4A^2}-\frac{\dot{B}\dot{A}}{4AB}
\end{aligned}
$$

> 其中 static 结果见：[Lesson 6](GR/lesson-6-schwarzschild/#schwarzschild-%E8%A7%A3).

这些直接解并不容易，但是考虑到一个分量
$$
R_{tr} = -\frac{\dot{A}}{Ar}=0\Longrightarrow \dot{A}=0
$$
这极大简化了过程，解得
$$
\text{d}\tau^2=f(t)\left(1-\frac{2GM}{r}\right)\text{d}t^2-\left(1-\frac{2GM}{r}\right)^{-1}\text{d}r^2-r^2\text{d}\Omega^2
$$
重新标度一下时间又得到 Schwarzschild 解，也就是说在真空区域还是静态的时空.

/Theorem/ (Birkhoff's Theorem)

> 球对称真空解必静态.

观测者在 outside 看到的是这个 Schwarzschild 时空，但是在 inside 看到的是 Minkowski 时空，因此必须把两半 Penrose 图拼在一起. 现在我们假设的是 shell 以光速坍缩，因此两个图都是按照 $45\degree$ 剪开，然后拼接，如图：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/ymjew503t0l000dcn2jd20xi74tooh11DIYxAIFxDda1DGxPDwUzAa==.webp)

:::

---

下面尝试推导带电的 RN 黑洞. 在此之前，我们需要先把电磁场的能动张量写出来. 在不知道作用量原理的情况下，我们只能通过写出分量的形式来确定最终的能动张量.

::: tip

如果知道作用量原理，可以写出作用量再对坐标微分得到能动张量. 当然我们默认是不知道这个事情的，因为还没有学用 Hamilton 力学推导 Einstein 方程.

:::

首先看能量密度，正比于 $\vec{E}\cdot\vec{E}+\vec{B}\cdot\vec{B}$；然后能流密度矢量是 $\vec{E}\times\vec{B}$ 的倍数…… 观察下来发现它们都是电磁场的二次项，因此用电磁场张量构造能动张量：
$$
T^{\mu\nu} = \alpha F^{\mu\rho}F_\rho{}^\nu+\beta\eta^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}
$$

> 实际上 $F_{\rho\sigma}F^{\rho\sigma}$ 就是作用量了.

然后对每个分量求一下系数 $\alpha,\beta$ 等等即可. 最终得到
$$
T^{\mu\nu} = F^{\mu\rho}F_\rho{}^\nu-\frac{1}{4}g^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}
$$
度规
$$
\text{d}\tau^2=e^{2\psi(r)}f(r)\text{d}t^2-f^{-1}(r)\text{d}r^2-r^2\text{d}\Omega^2
$$
假设坍缩之后电荷集中在 $r=0$ 的点. 为了代入 Einstein 方程，考虑
$$
F^{\mu\nu}{}_{;\mu}=\frac{1}{\sqrt{g}}\frac{\partial(\sqrt{g} F^{\mu\nu})}{\partial x^\mu} = 0\Longrightarrow\frac{\text{d}}{\text{d}r}(e^\psi r^2F^{\text{tr}}) = 0\Longrightarrow F^{\text{tr}} = e^{-\psi}\frac{Q}{4\pi r^2}
$$
能动张量
$$
T^\mu{}_\nu=\frac{Q^2}{8\pi r^2}\begin{pmatrix}
-1&&&\\
&-1&&\\
&&1&\\
&&&1
\end{pmatrix}
$$
解得度规
$$
\text{d}\tau^2=\left(1-\frac{2GM}{r}+\frac{Q^2}{r^2}\right)\text{d}t^2-\left(1-\frac{2GM}{r}+\frac{Q^2}{r^2}\right)^{-1}\text{d}r^2-r^2\text{d}\Omega^2
$$
这意味着电荷也构成黑洞能量的一部分，而且电荷过大会无法形成黑洞. 但是比较难理解的点是 $\text{d}r^2$ 前的系数 $\to\infty$ 对应着两个解，也就是两个「视界」，我们需要理解这件事. 这两个解分别是
$$
r_{\pm}=GM\pm\sqrt{(GM)^2-Q^2}
$$
::: window img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0n000dcn2pi9u9vwozjq2j6DIYxAIFxDda1DGxPDwUzAa==.webp)

:::