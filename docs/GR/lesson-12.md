---
title: Lesson 12 Penrose 过程与 Hawking 辐射
createTime: 2026/04/03 15:45:53
permalink: /GR/lesson-12-penrose-process-hawking-radiation/
---
## Penrose 过程

上节课说到 Kerr 黑洞，
$$
\begin{aligned}
\text{d}s^2 &= g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu\\\\
&= -\left(1-\frac{2Mr}{\rho^2}\right)\text{d}t^2-\frac{4Mar\sin^2\theta}{\rho^2}\text{d}\phi\text{d}t
+\frac{\rho^2}{\Delta}\text{d}r^2\\\\
&\quad +\rho^2\text{d}\theta^2+\left(r^2+a^2+\frac{2Mra^2\sin^2\theta}{\rho^2}\right)\sin^2\theta\text{d}\phi^2
\end{aligned}
$$
其中，
$$
\Delta=r^2-2Mr+a^2,\quad \rho^2=r^2+a^2\cos^2\theta
$$
仍然有两个 Killing vector，$\xi^M=\delta^\mu{}_{\hat{t}}$ 和 $\eta^\mu=\delta^\mu{}_{\hat{\phi}}$. 如果用第一个，就是 $U^\mu=(1,0,0,0)$，因此
$$
U_\mu U^\mu>0
$$
而我们知道，当 $g_{tt}>0$ 时，对于类时的世界线，满足 $U_\mu U^\mu=-1$，因此不存在一个可能的类时世界线，也就是没有可能的观测者存在. $g_{tt}>0$ 等价于
$$
r^2+a^2\cos^2\theta-2Mr<0\Longrightarrow M-\sqrt{M^2-a^2\cos^2\theta}<r<M+\sqrt{M^2-a^2\cos^2\theta}
$$
变化 $\theta$，直观地来说，就是黑洞在赤道上时，这个界限比较大；在南北极则刚好就是 $r_{\pm}$ 的值. 所以 Kerr 黑洞比正常的黑洞多了一圈「能层 (ergosphere)」，它在视界之外，但是在能层之中满足 $g_{tt}>0$.

对于一个粒子，在这个度规里面的能量是
$$
E = P_\mu\xi^\mu = P_\mu\delta^\mu{}_{\hat{t}} = g_{00}P^0+g_{30}P^0
$$

> 为什么呢？因为在 $\infty$，$g_{30}\propto \rho^{-2}\to0$，$g_{00}\to1$，就是四维动量的 $0$ 分量，也就是无穷远处的能量.

但是在能层里面，这个粒子的世界线是类空的，所以上面的 $P_\mu\xi^\mu$ 并不代表能量，而是对应着动量 (这里是因为类空的世界线是反着的... 动量变能量，能量变动量)，可正可负. 换一个角度理解，观测者在能层不存在，所以看到的所谓「能量」自然不受非负限制.

这时候 Penrose 出来说，如果一个粒子衰变了，$P_1^\mu=P_2^\mu+P_3^\mu$. 外界的一个观测者看来，它们的能量为
$$
E_i=U_\mu P_i^\mu
$$
这里得有 $E_1\geqslant E_2,E_3$，$E_1=E_2+E_3$. 但是要是这个过程发生在能层内部，四维动量守恒当然还是成立的，粒子 1 从外面进去，它的 $E_1$ 在里面和外面是守恒的. 2 粒子飞出来的时候，它的 $E_2$ 也得 $>0$，因为里外的 $E_2$ 守恒，而外面能量必须是正的. 假如 3 粒子永远出不来，那么 $E_3$ 完全有可能 $<0$，因为本来就没人去观测它.

这意味着，$E_1<E_2$ 是可能出现的 —— 外界从能层中凭空获得了能量. 这被称为 Penrose 过程.

下一个问题是，我们能拿到多大的能量？为了得到尽可能多的能量，就要使 $E_3$ 尽可能小，为此必须找一个东西去观测它. 在能层中，只有可能存在这样的观测者：它绕着黑洞旋转，但是 $r$ 不变，只有 $\phi$ 变化. 为方便计算，利用两个 Killing vector 来构造它的速度：
$$
U_{\text{obs}}^\mu = U_{\text{obs}}^t(\xi^\mu+\Omega_{\text{obs}}\eta^\mu)
$$
轨道的能量条件、存在条件和稳定条件为
$$
\begin{aligned}
&\frac{E^2-1}{2} = V_{\text{eff}}(R,E,L)\quad \text{for }r=R\\\\
&\left.\frac{\partial V_{\text{eff}}}{\partial r}\right|_{r=R}=0,\quad \left.\frac{\partial^2 V_{\text{eff}}}{\partial r^2}\right|_{r=R}>0
\end{aligned}
$$
对于这个观测者来说，它看到的 3 号粒子能量为 $-U^\mu (P_3)_\mu\geqslant0$ (观测者看到的能量必须大于零)，也就是
$$
E_3-\Omega_{\text{obs}}L_3\geqslant0\Longrightarrow-\Omega_{\text{obs}}L_3\geqslant-E_3\geqslant0
$$
要找到最负的 $E_3$，就是要找到最小的 $\Omega_{\text{obs}}$，用几个轨道条件算出来是 $\Omega_H=\displaystyle{\frac{a}{2\pi r_+}}$.

> 本质上就是在 Kerr 度规里面解一个轨道方程.

另一方面，$L_3$ 最后会到黑洞里面去，黑洞角动量会变化一个 $L_3$.

::: tip

先说个别的，用度规积分 $\sqrt{-g}\text{d}\theta\text{d}\phi$ 可以求出黑洞的表面积，这是 Bekenstein 做的工作. 对 Kerr 黑洞，计算结果是
$$
A_K =8\pi Mr_+ = 8\pi M(M+\sqrt{M^2-a^2})
$$
粒子进去之后造成的面积变化是
$$
\begin{aligned}
\delta A_K &= 8\pi\left[\delta M(M+\sqrt{M^2-a^2})+M\left(\delta M+\frac{M\delta M}{\sqrt{M^2-a^2}}\right)-\frac{aM\delta a}{\sqrt{M^2-a^2}}\right]\\\\
&= \frac{8\pi}{K}(\delta M-\Omega_H\delta J)
\end{aligned}
$$
这里的 $K$ 是一个由一堆东西写成的参数，在我们考虑的问题里面不太重要. 同时这里的 $M$ 是在无穷远处观察的质量.

因为 3 号粒子进去之后，在无穷远看来其能量是 $E_3$，所以 $\delta M=E_3$，$\delta J=L_3$. 之前已经说过，
$$
E_3\geqslant \Omega_HL_3
$$
所以 $\delta A_K\geqslant0$ 恒成立，也就是 **黑洞的面积在这个过程中永不减少**.

:::

因为 Kerr 黑洞是个椭球，其表面积小于相对应的球 (也就是 Schwarzschild 黑洞)，因此当不断提取能量、质量不断变少、黑洞面积不断增大，最终会演化为一个 Schwarzschild 黑洞，这时候能量就无法再被提取.

## Kerr 黑洞的奇性

我们之前就讲了，Kerr 黑洞的本性奇点是 $\rho^2=0$. 但是 $\rho^2$ 是一个平方和，必须两项同时为零才可以得零，解得
$$
r=0,\quad \theta=\frac{\pi}{2}
$$
而对于 $r=0,t=0$ 的位置，其度规
$$
\text{d}s^2 =a^2\cos^2\theta\text{d}\theta^2+a^2\sin^2\theta\text{d}\phi^2
$$
这意味着本来应该作为奇点的 $r=0$ 并没有坍缩到一个点，而是一个具有有限大小的近似球面；同时球面上只有 $\theta=\pi/2$ 的环形是具有奇异性的，理论上存在穿过 $r=0$ 的可能性.

## Hawking Radiation

仍然回来看 Penrose 过程. 一个很经典的说法是，一个进入能层的火箭可以抛射自己的二级火箭来获得更大的动能来逃逸. 但如果是粒子呢？

真空中的量子场存在量子涨落，

::: warning

我们在之前学过，量子涨落几乎是无法观测的，因为时间平移的对称性和空间平移的对称性，量子场在无穷的时间和空间中演化，原则上观测的概率太低. 除非在极短的时间内，或者破坏空间的对称性 (比如 Casimir 效应) 时，才能产生足够显著的效果.

:::

Hawking 考虑的是 Schwarzschild 黑洞. 它没有 ergosphere. 我们看 ergosphere 的条件只有两个，$r>r_+$ 和 $g_{tt}>0$. 其中前者是为了让第二个粒子能够出来，后者是能够提取能量的条件. 现在我们失去了前一个条件，所以寄希望于量子效应 —— 让真空中凭空产生一对粒子，一个进入黑洞、一个在视界外面，它们没有穿过视界两次，但是仍然造成了黑洞能量的变化，这就是 Hawking 辐射.

理论上达到一个稳态之后，可以定义所谓的黑洞温度.

## 作用量原理

作用量定义为 Lagrangian 对时间的积分，
$$
S = \int_{t_1}^{t_2}\mathcal{L}(q,\dot{q})\text{d}t
$$
做一个变分之后，
$$
\delta S = \int_{t_1}^{t_2}\left(\frac{\delta\mathcal{L}}{\delta q}\delta q+\frac{\delta\mathcal{L}}{\delta\dot{q}}\delta\dot{q}\right)\text{d}t\Longrightarrow \frac{\partial\mathcal{L}}{\partial q}+\frac{\text{d}}{\text{d}t}\frac{\partial\mathcal{L}}{\partial\dot{q}} = 0
$$
当然如果是多个粒子，直接写一个对 $i$ 求和即可.

如果不存在非导数形式写出的相互作用 (也就是，所有相互作用都表达成导数和导数相乘的样子，而且是同坐标.)，那么这是一个 local 的 Lagrangian. 这时候可以引入 Langrangian 密度，
$$
\mathcal{L}=\int\mathscr{L}\text{d}^3x
$$
对于电磁场，
$$
\mathscr{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}=-\frac{1}{4}(\partial_\mu A_\nu-\partial_\nu A_\mu)(\partial^\mu A^\nu-\partial^\nu A^\mu)
$$
