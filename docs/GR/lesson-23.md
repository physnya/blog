---
title: Lesson 23 宇宙学入门
createTime: 2026/05/19 15:08:23
permalink: /GR/lesson-23-cosmology/
---
从这节课开始我们谈论宇宙学. 我们知道人类很喜欢把自己找到的理论用在整个宇宙上，比如从领悟得来的佛教，或者是 Newton 在太阳系中找到的引力理论.

Einstein 方程：
$$
R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R = T_{\mu\nu}
$$
其中 LHS 是宇宙的几何，RHS 是所有正常物质的能动张量. 这看起来很简单，我们已经完全把几何和物质分开了. 由于宇宙是均匀而各向同性的 (更严格地说，是宇宙的「背景」是均匀各向同性的)，宇宙的度规应该能写成
$$
\mathrm{d}s^2 =-\mathrm{d}t^2+a^2\left[\frac{\mathrm{d}r^2}{1-kr^2}+r^2\mathrm{d}\theta^2+r^2\sin^2\theta\mathrm{d}\phi^2\right]
$$
这个 $k$ 是一个可以调整的参数，
$$
k = \left\{\begin{aligned}
&1,\quad \text{closed}\\\\
&0,\quad \text{flat}\\\\
&-1,\quad \text{open}
\end{aligned}\right.
$$
而 $a$ 是一个随时间演化、描述宇宙膨胀的量，简单来说就是距离 $l$ 随时间变化为 $l = a(t)|\vec{r}_2-\vec{r}_1|$.

直接说三维弯曲空间，显然无法想象；但是我们可以先从二维入手：对于一个 closed 的二维弯曲空间，且各个位置的曲率相同 (因为我们有各向同性)，那么它会弯曲成一个球面. 在三维下，我们用 $x_1^2+x_2^2+x_3^2=R^2$ 来描述这样一个二维弯曲空间. 为了在二维上描述这个度规，考虑把三维的坐标 confine 到二维上，三维的度规是
$$
\mathrm{d}l^2 = \mathrm{d}x_1^2+\mathrm{d}x_2^2+\mathrm{d}x_3^2
$$
如果投影的小面元正好垂直于 $x_3$ 轴，那么可以尝试消掉 $\mathrm{d}x_3$，由上式得到
$$
\mathrm{d}x_3 = -\frac{x_1\mathrm{d}x_1+x_2\mathrm{d}x_2}{x_3} = -\frac{x_1\mathrm{d}x_1+x_2\mathrm{d}x_2}{\sqrt{R^2-x_1^2-x_2^2}}
$$
再取一个极坐标 $x_1=r\cos\theta$，$x_2=r\sin\theta$，那么
$$
\mathrm{d}x_3^2=\frac{(x_1\mathrm{d}x_1+x_2\mathrm{d}x_2)^2}{R^2-x_1^2-x_2^2} =\frac{r^2\mathrm{d}r^2}{R^2-r^2}\Longrightarrow \mathrm{d}l^2 =\frac{R^2\mathrm{d}r^2}{R^2-r^2}+r^2\mathrm{d}\theta^2
$$
上面这个式子已经很接近我们刚刚写出来的宇宙度规了. 重新定义 $r/R\to r$，那么
$$
\mathrm{d}l^2=R^2\left(\frac{\mathrm{d}r^2}{1-r^2}+r^2\mathrm{d}\theta^2\right)
$$
这就得到了一个三维空间的二维球面. 而我们一开始要描述的是四维空间的三维球面，再加入那个随时间变化的 scale 因子 $a$，同理可以得到那个宇宙度规表达式.

更加困难的部分是所谓 open 的宇宙. 首先考虑一个三维中的双曲面，$x_3^2-x_1^2-x_2^2=R^2$，其度规是
$$
\mathrm{d}s^2=\mathrm{d}x_1^2+\mathrm{d}x_2^2-\mathrm{d}x_3^2
$$
仍旧做类似操作，
$$
\mathrm{d}x_3^2 = \frac{(x_1\mathrm{d}x_1+x_2\mathrm{d}x_2)^2}{R^2+x_1^2+x_2^2} = \frac{r^2\mathrm{d}r^2}{R^2+r^2}\Longrightarrow\mathrm{d}l^2 =\frac{R^2\mathrm{d}r^2}{R^2+r^2}+r^2\mathrm{d}\theta^2
$$
然后 rescaling 得到开放的宇宙度规. 理解上，它是四维空间中一个 space-like 的双曲面.

---

原先度规有十个独立的分量，但是我们做了各向同性的假设之后只剩下 $a(t)$ 这个变量，所以所有的问题都在求解一个关于 $a$ 的微分方程上.
$$
R_{00}=-\frac{3\ddot{a}}{a},\quad R=-6\left[\frac{\ddot{a}}{a}+\left(\frac{\dot{a}}{a}\right)^2+\frac{k}{a^2}\right]
$$
将宇宙中的物质视为流体，我们能够使用 $U^\mu,\rho,p$ 这些物理量. 但是这样直接写出来的能动张量并不协变，协变形式只能是
$$
T^{\mu\nu} = ag^{\mu\nu}+bU^\mu U^\nu
$$
这种线性组合. 而边界是 $T^{00}=\rho$，$T^{ij}=p\delta^{ij}$. 解得最终的形式只能是
$$
T^{\mu\nu} = (\rho+p)U^\mu U^\nu+pg^{\mu\nu}
$$

> 这里的 $\rho,p$ 定义的是没有引力的情况下，观测者感受到的能量密度和压强.

几种不同的东西对应不同的状态方程，比如非相对论性物质粒子 $p\ll\rho$，$p\approx 0$；能量 $p=\rho/3$ ... 还有所谓的宇宙常数 / 真空能 / 暗能量：
$$
T^\Lambda_{\mu\nu} = 8\pi G\Lambda g_{\mu\nu}
$$
这种东西对应的状态方程为 $p_\Lambda=-\rho_\Lambda$. 其能量密度在宇宙演化过程中一直是常数 $-8\pi G\Lambda$，这意味着能量并不守恒 —— 但是既然宇宙是演化的，我们也无从建立起全局的 Killing vector，也就无法讨论能量的概念.

在宇宙学上，我们通常用一个协变逆变混合的能动张量 $T^\mu{}_\nu = T^{\mu\rho}g_{\rho\nu}$，也就是
$$
T^\mu{}_\nu = (\rho+p)U^\mu U_\nu+p\delta^\mu{}_\nu
$$
我们有 $T^{\mu\nu}{}_{;\nu}=0$，这可以推出 $\mathrm{d}(\rho a^3)=a^3\mathrm{d}p$. 对于 matter，$p=0$，
$$
\frac{\partial\rho}{\partial t}+\frac{3\dot{a}}{a}\rho=0\Longrightarrow\rho\propto a^{-3}
$$
对于 radiation，$p=\rho/3$，同理得到 $\rho\propto a^{-4}$.

::: tip

但是我们想问，非相对论性粒子也有波粒二象性，为什么不是 $\rho\propto a^{-4}$？这个问题留作课后思考. 经过计算我们会发现，一个有质量的粒子在宇宙膨胀的过程中，即使一开始有速度，最后会很快地静止.

:::

对于真空能，$p=-\rho$，得到 $\rho\propto a^0$.

Hubble 发现了 Hubble's law，宇宙以 $H = \dot{a}/a$ 的比率膨胀. 按照朴素的想法，所有的物质都有引力，因此宇宙的膨胀似乎应该是减速膨胀的；下面我们尝试计算 matter dominated 的宇宙：
$$
H^2 \equiv \left(\frac{\dot{a}}{a}\right)^2=\frac{8\pi G}{3}\rho,\quad \dot{\rho}=\rho_0\left(\frac{a}{a_0}\right)^{-3}
$$
解得，
$$
a(t) \propto t^{2/3},\quad a(t)=\left(\frac{3}{2}H_0t\right)^{2/3}a_0
$$
确实符合减速膨胀的预期.

对于 radiation dominated 的情况，解得 $a\propto t^{1/2}$，仍然是减速膨胀.

::: tip

这有个很奇怪的事，radiation 膨胀得比 matter 慢，但是从 Newton 的角度来讲，radiation 膨胀之后能量会变小、引力也变小，应该膨胀得更快才对.

实际上这都是常识造成的误区，Newton 理论根本无法处理这种问题，因此也不要在这种问题上被常识所迷惑.

:::

对于 energy dominated 的情况，解得 $a\propto e^{H_0(t-t_0)}$，加速膨胀.

总结起来是
$$
a(t) = \left\{\begin{aligned}
&a_0(2H_0t)^{1/2},\quad \text{radiation}\\\\
&a_0(3H_0t/2)^{2/3},\quad \text{matter}\\\\
&a_0e^{H_0(t-t_0)},\quad \text{cosmologic constant}
\end{aligned}\right.
$$

> 老师刚刚发现它所有的讨论都忘记 curvature 了，因此现在我们把它捡回来.
>
> 之前说的是
> $$
> \left(\frac{\dot{a}}{a}\right)^2+\frac{k}{a^2}=\frac{8\pi G}{3}\rho
> $$
> 那么可以把 LHS 的第二项单独拎出来，写一个等效的 $\rho_{\text{curvature}}$.

我们唯一能够测量的是 Hubble constant，因此写出：
$$
H^2 = \frac{8\pi G}{3}\left[\rho_{\text{R}}\left(\frac{a}{a_0}\right)^{-4}+\rho_{\text{M}}\left(\frac{a}{a_0}\right)^{-3}+\rho_\Lambda+\rho_{\text{curvature}}\left(\frac{a}{a_0}\right)^{-2}+\cdots\right]
$$
(省略号表示可以引入新的内容对 Hubble constant 产生的影响，比如弦.)

如果把前面三项合在一起称为 $\rho_{\text{crit}}$ (Critical 的能量密度，不算 curvature 产生的等效能量密度)，而全部四项加起来为 $\rho_{\text{tot}}$，那么考虑这个量：
$$
\frac{\rho_{\text{crit}}}{\rho_{\text{tot}}}
$$
如果是等于 $1$，那么宇宙 flat；大于 $1$，宇宙 closed；小于 $1$，宇宙 open. 当前测量的结果是极其接近 $1$ 的，由幂律往前推，这意味着早期宇宙的曲率会更加小，也就是平直到了不正常的程度，这被称为宇宙平直性问题.