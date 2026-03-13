---
title: Lesson 6 Schwarzschild 解
createTime: 2026/03/13 15:11:35
permalink: /GR/lesson-6-schwarzschild/
---
上节课说到 $g_{\mu\nu}$ 的 10 个分量中，由几何可以消掉 4 个. 但是引力波我们都知道只有两种偏振，所以还要去掉 4 个自由度. 类比一下 M 方程组，
$$
\partial_\mu F^{\mu\nu} = J^\nu,\quad F_{\mu\nu} = \partial_\mu A_\nu-\partial_\nu A_\mu
$$
::: tip

所以为什么光子只有两个自由度？

首先对于任意一个谐振子系统 $\ddot{x}+\omega^2 x=f$，或者写成 Hamiltonian 形式 $\dot{p}=f-\omega^2x$，Lagrnage Equation 为
$$
\frac{\text{d}}{\text{d}t}\left(\frac{\partial\mathcal{L}}{\partial \dot{x}}\right)-\frac{\partial\mathcal{L}}{\partial x}=0
$$
如果 $\mathcal{L}$ 里面不含有 $\dot{x}$，那么系统就有一个约束 $\partial\mathcal{L}/\partial x$，后果就是运动方程中没有 $\ddot{x}$. 对于 M 方程，把 $F$ 拆成 $F^{0i}$ 和 $F^{ij}$，得到
$$
\partial_\mu F^{\mu\nu} = \partial_0F^{0\nu}+\partial_iF^{i\nu} = \partial_0(\partial^0A^\nu-\partial^\nu A^0)+\partial_i(\partial^iA^\nu-\partial^\nu A^i)
$$
讨论 $\nu=0,j$ 的两种情况，得到
$$
\begin{aligned}
&\partial_i(\partial^iA^0-\partial^0A^i) = J^0\\\\
&\partial_0(\partial^0A^i-\partial^iA^0)+\partial_j(\partial^jA^i-\partial^iA^j) = J^i
\end{aligned}
$$
这个体系的 Lagrangian 是 $\mathcal{L}=-\displaystyle{\frac{1}{4}F_{\mu\nu}F^{\mu\nu}}$，这个量里面不含 $A^0$，约束是 $\delta\mathcal{L}/\delta A^0=0$，和 gauge invariance 一同减少自由度.

:::

引力波方面也是一样，同样存在一个 $g^{0\mu}$ 为一个 Langrange multiplier.

## Schwarzschild 解

考虑一些非常好的情景以便解 Einstein 方程. 我们假设 $g_{\mu\nu}$ 是静态的，那么在空间旋转下不变的量有 $\text{d}t^2$，$\text{d}\vec{x}^2$，$\vec{x}\cdot\text{d}\vec{x}$ 以及 $|\vec{x}|^2$. 因此最 general 的线元形式是
$$
\text{d}\tau^2 = F(r)\text{d}t^2-2E(r)\text{d}t(\vec{x}\cdot\text{d}\vec{x})-D(r)(\vec{x}\cdot\text{d}\vec{x})^2-C(r)\text{d}\vec{x}^2
$$
::: warning

为什么 general 的形式是这个？因为我们需要写出所有的球对称的内容，然后有可能的球对称量只有上面列出来那四个，所以原则上要把这些项全部写下来，刚好对应我们假设的线元的那四项.

:::

换到求坐标，
$$
\text{d}\tau^2 = F(r)\text{d}t^2-2rE(r)\text{d}r\text{d}t-r^2D(r)\text{d}r^2-C(r)(\text{d}r^2+r^2\text{d}\Omega^2)
$$
如果要求 $t' \equiv t+\Phi(r)$，那么 $\text{d}t = \text{d}t'-\Phi'(r)\text{d}r$，也就是
$$
\frac{\text{d}\Phi(r)}{\text{d}r} = -\frac{rE(r)}{F(r)}
$$
原先的线元化为
$$
\begin{aligned}
\text{d}\tau^2 &= F(r)\text{d}t^2 - G(r)\text{d}r^2 - C(r)(\text{d}r^2+r^2\text{d}\Omega^2)\\\\
&= B(r)\text{d}t^2-A(r)\text{d}r^2-r^2\text{d}\Omega^2
\end{aligned}
$$
这里用到 $C(r)\text{d}r^2\to \text{d}r^2$.

---

下面我们在太阳系里面求解一下. 因为是在太阳外面求解，因此能动张量为零，真空 Einstein 方程为
$$
R_{\mu\nu} = 0
$$
解的过程上课时就略去了，留作作业，一些分量的方程为
$$
\begin{aligned}
R_{rr} &= \frac{B''}{2B}-\frac{1}{4}\frac{B'}{B}\left(\frac{A'}{A}+\frac{B'}{B}\right)-\frac{1}{r}\frac{A'}{A}=0\\\\
R_{\theta\theta} &= -1+\frac{r}{2A}\left(-\frac{A'}{A}+\frac{B'}{B}\right)+\frac{1}{A}=0\\\\
R_{\phi\phi} &= \sin^2\theta\cdot R_{\theta\theta} = 0\\\\
R_{tt} &= -\frac{B''}{2A}+\frac{1}{4}\frac{B'}{A}\left(\frac{A'}{A}+\frac{B'}{B}\right)-\frac{1}{r}\frac{B'}{A} = 0
\end{aligned}
$$
观察发现第一个方程和第四个很像，我们做
$$
\frac{R_{rr}}{A}+\frac{R_{tt}}{B} = -\frac{1}{rA}\left(\frac{A'}{A}+\frac{B'}{B}\right) = 0\Longrightarrow AB=\text{const.}
$$
由于边界是在无穷远处趋于 Minkowski 时空，因此 $AB = 1$. 利用这个代入第二个方程和第一个方程，
$$
R_{\theta\theta} = -1+B'r+B=0,\quad R_{rr} = \frac{B''}{2B}+\frac{B'}{rB}=0
$$
这导出 $\text{d}(Br)/\text{d}r=1$ ($Br = r+\text{const.}$) 而已知弱场下回归到 Newton 理论，$B(r)$ 作为 $g_{00}$，满足
$$
B = g_{00} = 1-\frac{2GM}{r}
$$
所以 $\text{const.} = -2GM$，得到 Einstein 方程的 Schwarzschild 解：
$$
\boxed{\text{d}\tau^2 = \left(1-\frac{2GM}{r}\right)\text{d}t^2-\left(1-\frac{2GM}{r}\right)^{-1}\text{d}r^2-r^2\text{d}\Omega^2}
$$

---

为了验证理论的正确性，计算这个度规的联络，并尝试验证某些现实的结果. 联络的不为零分量为
$$
\begin{aligned}
\Gamma^t_{tr} &= \Gamma^t_{rt} = \frac{B'}{2B} ,\quad \Gamma^r_{tt} = \frac{B'}{2A} \\\\

\Gamma^r_{rr} &= \frac{A'}{2A},\quad\Gamma^r_{\theta\theta} = -\frac{r}{A} \\\\

\Gamma^r_{\phi\phi} &= -\frac{r}{A}\sin^2\theta,\quad \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \frac{1}{r},\quad \Gamma^\phi_{r\phi} = \Gamma^\phi_{\phi r} = \frac{1}{r} \\\\

\Gamma^\theta_{\phi\phi} &= -\sin\theta\cos\theta,\quad \Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \cot\theta
\end{aligned}
$$
运动方程为
$$
\frac{\text{d}^2x^\mu}{\text{d}\tau^2}+\Gamma^\mu{}_{\rho\lambda}\frac{\text{d}x^\rho}{\text{d}\tau}\frac{\text{d}x^\lambda}{\text{d}\tau} = 0
$$
这里的 $\tau$ 是固有时，但是我们想问是不是时钟不准也可以得到同样的结果，考虑某种不准的时钟 $p(\tau)$，那么化为
$$
\frac{\text{d}^2x^\mu}{\text{d}\tau^2} = \frac{\text{d}}{\text{d}\tau}\left(\frac{\text{d}x^\mu}{\text{d}p}\frac{\text{d}p}{\text{d}\tau}\right) = \frac{\text{d}^2x^\mu}{\text{d}p^2}\left(\frac{\text{d}p}{\text{d}\tau}\right)^2+\frac{\text{d}x^\mu}{\text{d}p}\frac{\text{d}^2p}{\text{d}\tau^2}
$$
原来的运动方程变成了
$$
\frac{\text{d}^2x^\mu}{\text{d}p^2}\left(\frac{\text{d}p}{\text{d}\tau}\right)^2+\frac{\text{d}x^\mu}{\text{d}p}\frac{\text{d}^2p}{\text{d}\tau^2} + \Gamma^\mu{}_{\rho\lambda}\frac{\text{d}x^\rho}{\text{d}p}\frac{\text{d}x^\lambda}{\text{d}p}\left(\frac{\text{d}p}{\text{d}\tau}\right)^2=0
$$
发现 LHS 第二项是某一种多出来的东西，这一项表征了你的钟是不是问题大到已经有非线性效应了. 当然如果还是线性的，那么我们的方程并不会变，这种不会产生方程变化的参数 $p$ 称为**仿射参量**.

::: tip

他在这里才引入仿射参量，我之前学的时候是在几何里讲到测地线时引入的仿射参量，虽然并没有什么数学上的差别但是物理意义毕竟多了一层.

:::

我们下面的计算考虑的都是 $p$ 为仿射参量的情形. 而且因为初条件只有 $\vec{v}_0$ 和 $\vec{r}_0$ 两个，它们定了一个平面，设定为 $\theta=\pi/2$，这件事情大大简化了计算. 现在我们有
$$
\begin{aligned}
&\frac{\text{d}^2\phi}{\text{d}p^2}+\frac{2}{r}\frac{\text{d}\phi}{\text{d}p}\frac{\text{d}r}{\text{d}p}=0\\\\
\Longrightarrow\quad&\frac{\text{d}}{\text{d}p}\left(\frac{\text{d}\phi}{\text{d}p}\right)+\frac{\text{d}\phi}{\text{d}p}\cdot\frac{\text{d}(\ln r^2)}{\text{d}p} = 0\\\\
\Longrightarrow\quad&\frac{\text{d}}{\text{d}p}\left(\ln\frac{\text{d}\phi}{\text{d}p}+\ln r^2\right) = 0\\\\
\Longrightarrow\quad& r^2\frac{\text{d}\phi}{\text{d}p} = \text{const.} = J
\end{aligned}
$$
这是某一个首次积分，其实从这里也可以看出这和 Newton 力学的首次积分求解差异没那么大. 另一个首次积分的求解为
$$
\begin{aligned}
&\frac{\text{d}^2t}{\text{d}p^2}+\frac{B'}{B}\frac{\text{d}t}{\text{d}p}\frac{\text{d}r}{\text{d}p} = 0\\\\
\Longrightarrow\quad &\frac{\text{d}}{\text{d}p}\left(\frac{\text{d}t}{\text{d}p}\right) + \frac{\text{d}t}{\text{d}p}\cdot\frac{\text{d}(\ln B)}{\text{d}p} = 0\\\\
\Longrightarrow\quad &\frac{\text{d}}{\text{d}p}\left(\ln\frac{\text{d}t}{\text{d}p}+\ln B\right) = 0\\\\
\Longrightarrow\quad &\left(1-\frac{2GM}{r}\right)\frac{\text{d}t}{\text{d}p} = \text{const.}
\end{aligned}
$$
也就是 fix 了坐标时和固有时的联系 ($\text{d}p$ 是仿射参量，所以直接连接了固有时)，可以看出一个结论：坐标时和固有时的联系随着空间而改变. 当然上面这个对于求解轨道没有任何帮助，我们写下一个关于 $r$ 的方程.
$$
\begin{aligned}
&\frac{\text{d}^2r}{\text{d}p^2}+\frac{A'}{2A}\left(\frac{\text{d}r}{\text{d}p}\right)^2-\frac{J^2}{r^3A} + \frac{B'}{2AB}=0,\quad J = r^2\frac{\text{d}\phi}{\text{d}p}\\\\ 
\Longrightarrow\quad& \frac{\text{d}}{\text{d}p}\left[A\left(\frac{\text{d}r}{\text{d}p}\right)^2+\frac{J^2}{r^2}-\frac{1}{B}\right]=0
\end{aligned}
$$
这个守恒量被记为 $E$ (某种意义上，这是能量)，上面的方程对应着 Newton 力学中的 Binet 方程. 现在定义
$$
\frac{\text{d}t}{\text{d}p}B\equiv 1
$$

> 反正是 constant 可以随便取，这里就是给定了一个特殊的仿射参量罢了.

现在的轨道方程是
$$
\begin{aligned}
&r^2\frac{\text{d}\phi}{\text{d}\tau} = JB(r)\\\\
&\frac{A}{B^2}\left(\frac{\text{d}r}{\text{d}\tau}\right)^2+\frac{J^2}{r^2}-\frac{1}{B} = -E
\end{aligned},\quad A = -\left(1-\frac{2GM}{r^2}\right)^{-1},\quad B=-\left(1-\frac{2GM}{r^2}\right)
$$
::: warning

预告一下下节课要讲什么：「我」作为观测者，以 $U^\mu$ 运动，有一个粒子以 $V^\mu$ 运动，那么「我」观测到的它的是 $P_\mu U^\mu = mV_\mu U^\mu$，原则上来讲所有「可观测量」都是「标量」……

> 嗯？我还是没懂他要讲什么玩意……

:::