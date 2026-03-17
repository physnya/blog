---
title: Lesson 7 Killing 矢量场和 Lie 导数
createTime: 2026/03/17 15:09:53
permalink: /GR/lesson-7-killing-vector-and-lie-derivative/
---
上节课导出了两个守恒量，我们现在来说说在广义相对论中怎样规范地构造这种时间平移对称、空间旋转对称等产生的守恒量.

考虑一个运动物体有 $x^\mu,P^\mu$，另一个观测者相对于当前参考系以 $\tilde U^\mu$ 运动，则他观测到的这个运动物体的能量是 $\tilde E =P_\mu \tilde U^\mu$. 考虑构建可观测量的过程中，都是以 $\xi^\mu(x)P_\mu$ 构造的，那么要求：
$$
\frac{\text{d}}{\text{d}\tau}\left(m\xi_\mu(x)\frac{\text{d}x^\mu}{\text{d}\tau}\right) \equiv 0
$$
计算 LHS，
$$
\begin{aligned}
\frac{\text{d}}{\text{d}\tau}\left(\xi_\mu(x)\frac{\text{d}x^\mu}{\text{d}\tau}\right) &= \frac{\partial\xi_\mu}{\partial x^\nu}\frac{\text{d}x^\nu}{\text{d}\tau}\frac{\text{d}x^\mu}{\text{d}\tau}+\xi_\mu(x)\frac{\text{d}^2x^\mu}{\text{d}\tau^2}\\\\
&= \frac{\partial\xi_\mu}{\partial x^\nu}\frac{\text{d}x^\nu}{\text{d}\tau}\frac{\text{d}x^\mu}{\text{d}\tau} - \Gamma^\mu{}_{\rho\sigma}\frac{\text{d}x^\rho}{\text{d}\tau}\frac{\text{d}x^\sigma}{\text{d}\tau}\\\\
&= \xi_{\mu;\nu}\frac{\text{d}x^\nu}{\text{d}\tau}\frac{\text{d}x^\mu}{\text{d}\tau}
\end{aligned}
$$
其中第二个等号利用了物体在不受力情况下的运动方程.

> 同时注意到，
> $$
> \xi_{\mu;\nu} = \frac{\partial\xi^\mu}{\partial x^\nu} - \Gamma^\rho{}_{\mu\nu}\xi_\rho
> $$

因此，
$$
\begin{aligned}
\frac{\text{d}}{\text{d}\tau}\left(\xi_\mu(x)\frac{\text{d}x^\mu}{\text{d}\tau}\right) &= \frac{1}{2}\left(\xi_{\mu;\nu}+\xi_{\nu;\mu}\right)U^\mu U^\nu = 0
\end{aligned}
$$
也就是，构造的量为守恒量的条件是 $\xi_{\mu;\nu}+\xi_{\nu;\mu}=0$. 这种场称为 **Killing 矢量场**. 由于我们知道 $g_{\mu\nu;\rho}=0$，所以可以做一个 trick，把这个量加到条件的左边，有
$$
g_{\mu\nu;\rho}\xi^\rho+\xi_{\mu;\nu}+\xi_{\nu;\mu} = 0
$$
这个东西可以展开算一下，$g_{\mu\nu;\rho}=g_{\mu\nu,\rho} - \Gamma^\lambda{}_{\nu\rho}g_{\mu\lambda}-\Gamma^\lambda{}_{\mu\rho}g_{\lambda\nu}$，且 $\xi_{\mu;\nu} = \xi_{\mu,\nu}-\Gamma^\rho{}_{\mu\nu}\xi_\rho$，代入发现所有的 $\Gamma$ 都 cancel 掉了，也就是可以把上式的所有分号改成逗号 (协变导数改成普通导数)，
$$
g_{\mu\nu,\rho}\xi^\rho + g_{\nu\rho}\xi^\rho{}_{,\mu} + g_{\rho\mu}\xi^\rho{}_{,\nu} = 0
$$

> 特别提一下，为了把 $\Gamma$ 都消掉，这里要升一下后两项的指标，因此变成现在这个样子.

上式意味着什么？相当于全时空每一个点都生成了一个很小的移动，每个点的移动由 Killing 矢量场给出. 对于标量场 $\phi(x)$，从 $P$ 移动到 $Q$，那么 $\phi_P\to\phi_{P\to Q}$，有 $\phi_{P\to Q} = \phi_P$. 这里可以定义 Lie derivative，为
$$
\mathcal{L}_{\xi}[\phi(x)] \equiv\frac{\phi_Q - \phi_{P\to Q}}{\varepsilon} = \frac{\phi(x+\varepsilon\xi) - \phi(x)}{\varepsilon} = \frac{\partial\phi(x)}{\partial x^\mu}\xi^\mu(x) = \phi_{,\mu}\xi^\mu
$$
对于矢量场，我们也想定义 Lie 导数. 最原始的矢量定义来源于点之间的差，我们考虑定义 $V^\mu = \text{d}x^\mu = P'-P$. 全空间由 Killing 矢量场平移之后，$P\to Q$，$P'\to Q'$，原来的矢量 $V^\mu\to V'^\mu$. 其中 $P\to Q$ 的移动由 $\xi_\mu(x)$  generate 出来的，而 $P'\to Q'$ 的移动由 $\xi_\mu(x+\text{d}x)$ generate 出来，也就是
$$
x_Q^\mu = x^\mu + \varepsilon\xi^\mu(x),\quad x_{Q'}^\mu = x^\mu + \text{d}x^\mu+\varepsilon\xi^\mu(x+\text{d}x)
$$
新的矢量为
$$
V^\mu_{P\to Q} = \delta x^\mu = \overline{QQ'} = x_Q^\mu-x_{Q'}^\mu = \text{d}x^\mu + \varepsilon\frac{\partial\xi^\mu}{\partial x^\nu}\text{d}x^\nu = V^\mu + \varepsilon\frac{\partial\xi^\mu}{\partial x^\nu}V^\nu
$$
Lie 导数定义为
$$
\mathcal{L}_\xi[V^\mu(x)] \equiv \frac{V_Q^\mu-V_{P\to Q}^\mu}{\varepsilon} = \frac{1}{\varepsilon}\left\{V^\mu[x+\varepsilon\xi(x)]-\left[V^\mu(x) +\varepsilon\frac{\partial\xi^\mu}{\partial x^\nu}V^\nu\right]	\right\} =  V^\mu{}_{,\nu}\xi^\nu - \xi^\mu{}_{,\nu}V^\nu
$$
也可以方便地写出逆变分量的 Lie 导数：
$$
\mathcal{L}_\xi(V_\mu V^\mu) = \mathcal{L}_\xi(h) = h_{\mu,\nu}\xi^\nu + h_\nu\xi^\nu{}_{,\mu}
$$
对于一个张量 $T^{\mu\nu}$，
$$
\mathcal{L}_\xi(T_{\mu\nu}) = T_{\mu\nu,\rho}\xi^\rho + T_{\mu\rho}\xi^\rho{}_{,\nu}+T_{\rho\mu}\xi^\rho{}_{,\nu}
$$
回到我们对 Killing 矢量场的定义 —— 这正是 $\mathcal{L}_{\xi}g_{\mu\nu} = 0$，也就是「Killing 矢量场是使得度规的 Lie 导数为零对应的矢量场.」

::: tip

任何对称性都是对系统的制约，我们已经不能容忍更多的对称性了，否则将不物理. 以散射实验为例，用尽所有对称性之后我们知道散射的分布函数只和 $\theta$ 有关，如果再有新的对称性，那么分布函数和 $\theta$ 的依赖都可能会出现不连续，这是违反观测结果的.

因此不可能通过一个张量场来构造某种变换，并由这种变换得到某种对称性.

:::

对于坐标变换，也可以用 Lie 导数来写，
$$
V'^\mu(x+\varepsilon\xi) = \frac{\partial(x^\mu+\varepsilon\xi^\mu)}{\partial x^\nu}V^\nu(x)
$$
两边同时展开，
$$
V'^\mu(x)+V'^\mu{}_{,\nu}\varepsilon\xi^\nu = V^\mu(x)+\varepsilon\xi^\mu{}_{,\nu}V^\nu(x)\Longrightarrow \frac{V'^\mu(x)-V^\mu(x)}{\varepsilon} = V^\mu{}_{,\nu}\xi^\nu-\xi^\mu{}_{,\nu}V^\nu(x)
$$
换句话来说，Lie 导数所对应的被动变换和主动的坐标变换在某种意义下等效.

---

回到我们开头的话题，要来寻找守恒量. 对于 Schwarzschild 度规，
$$
\text{d}\tau^2 = B\text{d}t^2 - A\text{d}r^2-r^2\text{d}\theta^2 - r^2\sin^2\theta\text{d}\phi^2
$$
这里的 $g_{\mu\nu}$ 和 $t$ 无关，Killing 矢量场定义为 $\xi^\rho_{(1)} = \delta^\rho{}_{\hat{t}}$ (也就是 $\delta$ 的 $t$ 列分量) 和 $\xi^\rho_{(2)} = \delta^\rho{}_{\hat{\phi}}$ (和前面同理)，分别对应时间平移对称性和空间旋转对称性.

下面利用这些守恒量来推导一下水星轨道.
$$
\frac{\text{d}\phi}{\text{d}\tau} = \frac{L}{r^2},\quad \frac{\text{d}t}{\text{d}\tau} = \frac{E}{1-2GM/r}
$$
度规里面 $\text{d}\theta$ 项没有作用，直接去掉，然后 $\text{d}t$ 不重要，所以换元消掉. 最后得到
$$
\left(\frac{\text{d}r}{\text{d}\tau}\right)^2 = E^2 - \left(1-\frac{2GM}{r}\right)\left(1+\frac{L^2}{r^2}\right) =  E^2 - \left(1-\frac{2GM}{r}+\frac{L^2}{r^2}-\frac{2GML^2}{r^3}\right)
$$
最后一项是广义相对论的修正.

> 如果定性地分析一下，会发现一个重要的差异是：在 Newton 力学中只有 $L = 0$ 严格成立时才会落入力心，但是在广义相对论中即使 $L$ 不严格为零，在中心质量显著大的时候还是会落入力心.

在 Newton 力学中求轨道方程的过程是，由
$$
\frac{\text{d}\phi}{\text{d}t} = \frac{L}{r^2},\quad \frac{1}{2}\left(\frac{\text{d}r}{\text{d}t}\right)^2 = E+\frac{GM}{r}-\frac{L^2}{2r^2}
$$
消掉 $t$. 具体来说，令 $u = 1/r$，
$$
\frac{1}{2}\left(\frac{\text{d}u}{\text{d}\phi}\right)^2 = \frac{E}{L}(GM)^2+\frac{(GM)^2}{L^2}u - \frac{1}{2}u^2
$$
同时对 $\phi$ 再求一次导，两边可以消去一个一阶导数，得到
$$
\frac{\text{d}^2u}{\text{d}\phi^2} + u = \left(\frac{GM}{L}\right)^2
$$
现在在广义相对论的情况下，我们会多一项修正，
$$
\frac{\text{d}^2u}{\text{d}\phi^2} + u = \left(\frac{GM}{L}\right)^2 + \frac{3GM}{c^2}u^2
$$

> 话说我们一直都在用 $m=1$ 来着...