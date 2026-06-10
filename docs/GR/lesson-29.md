---
title: Lesson 29 量子场论 & 广义相对论
createTime: 2026/06/09 15:06:23
permalink: /GR/lesson-29/
---
说暴涨时期怎么给宇宙提供 initial condition. 上节课我们研究了一个标量场 $\phi\to \phi_0+\delta\phi$ 的量子涨落，首先是写下作用量：
$$
S = \int\mathrm{d}^4x\cdot\sqrt{g}\cdot\frac{1}{2}(-g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi-m^2\phi^2)
$$
度规用的是 co-moving 的版本，$\mathrm{d}s^2=a^2(\tau)\eta_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu$. 因此上式化为
$$
S = \frac{1}{2}\int\mathrm{d}^3x\mathrm{d}\tau\cdot a^2(\phi'^2-\nabla\phi\cdot\nabla\phi-m^2a^2\phi^2)
$$
令 $\chi=a\phi$，得到
$$
S = \frac{1}{2}\int\mathrm{d}^3x\mathrm{d}\tau\left[\chi'^2-(\nabla\chi)^2-\left(m^2a^2-\frac{a''}{a}\right)\chi^2\right]
$$
这里我们将 $\delta\phi\to\chi$，这个 $\chi$ 是一个 Heisenberg 表象下的算符，它满足
$$
\hat{\chi}_{\vec{k}}''+\omega_{\vec{k}}^2\hat{\chi}_{\vec{k}}=0
$$
但是这里的 $\omega$ 是一个随时间变化的量，为了在传统的量子力学下研究它，我们思考它的缓慢变化条件，
$$
\frac{\mathrm{d}\omega_k^2}{\omega_k^2\mathrm{d}\tau}\ll\omega_k
$$
这是 adiabatic 条件. 这对应 $k^2\tau^2\gg 1$. 当 $\tau\to-\infty$ 时，$\omega_k^2\to k^2$，由算符的方程定义出的那个 $\chi_k$ 是 $k$ 对应的湮灭算符，我们定义的真空态就是被所有 $\chi_k$ 所湮灭的那个态 $|\mathcal{O}\rangle_{\text{BD}}$.

比较 $k_{\text{phys}} = \displaystyle{\frac{k}{a}}=kH\tau$ (也就是物理动量) 和 $H$ 的大小，前者标定了真空态一个 mode 的空间周期，后者标定了 horizon 的尺度. 在 inflation 阶段，$H$ 几乎是不变的，而 $k_{\text{phys}}$ 是按照 $-1$ 次幂衰减，是一个简单的膨胀导致的红移. 那么到 $H$ 和 $k_{\text{phys}}$ 相等时，达到 horizon，这时候的 fluctuation 被「冻结」.

> inflation 结束之后 $H$ 以 $-2$ 次幂衰减，它们再一次相遇时就产生 re-enter，冻结的 fluctuation 再次开始演化.

我们实际上要计算的只能是冻结的那一个部分，因为观测条件仅仅允许我们确认这些部分.
$$
\chi_{\vec{k}}(\tau)=\frac{1}{\sqrt{2}}\left[a_{\vec{k}}v_{\vec{k}}^\star(\tau)+a_{\vec{k}}^\dagger v_{\vec{k}}(\tau)\right]
$$
边界条件：
$$
v_k\xrightarrow{\tau\to-\infty}\frac{1}{\sqrt{k}}e^{\mathrm{i}k\tau}
$$
推出 $v_k$ 应该是一个 Hankel function，
$$
v_k=\mathrm{i}\sqrt{\frac{\pi}{2k}}H_n^{(2)}(|k\tau|),\quad n=\sqrt{\frac{9}{4}-\frac{m^2}{H^2}}
$$
在 $m\ll H$ 时，$n=3/2$，这时候的 Hankel function turns out to be 一个简单函数，
$$
v_k\to\frac{1}{\sqrt{k}}e^{\mathrm{i}k\tau}\left(1-\frac{\mathrm{i}}{k\tau}\right)
$$
算两点关联，
$$
\begin{aligned}
_{\text{BD}}\langle\mathcal{O}|\hat\chi(\vec{x},\tau)\hat\chi(\vec{y},\tau)|\mathcal{O}\rangle_{\text{BD}} &= \int\frac{\mathrm{d}^3k}{(2\pi)^3}\cdot\frac{1}{2}|v_k|^2e^{\mathrm{i}k(\vec{x}-\vec{y})}\\\\
&= \frac{1}{4\pi^2}\int_0^\infty k^2\mathrm{d}k|v_k(\tau)|^2\frac{\sin kL}{kL}
\end{aligned}
$$
观测的时候还要做一次 Fourier 变换，因此大尺度巡天测量星系数密度 / CMB 温度涨落测到的实际上是
$$
k^3\mathrm{d}\log k\cdot|v_k(\tau)|^2
$$
这么一个东西. Fluctuation 是
$$
\delta\phi_k(\tau\to0) = k^{3/2}|v_k(\tau)|(-H\tau) = H
$$

> 其中用到之前那个 $v_k$，
> $$
> \lim_{\tau\to0}|v_k|=\frac{1}{\sqrt{k}}\cdot 1\cdot\frac{1}{k\tau} = k^{-3/2}\tau^{-1}
> $$

[上节课](/GR/lesson-28-inflation-information/) 提到 $\zeta$，定义是
$$
-\zeta = \Psi+\frac{H}{\dot{\bar\phi}}\delta\phi\Longrightarrow\zeta_k\sim\frac{H^2}{\dot{\bar\phi}}
$$
这个说法是，根据 slow-roll 理论，宇宙中不同地方「滚」下来的时间不同，因此有些部分先 re-heating，这部分地方先进入后期演化，因此红移更多、更冷，这造成温度涨落. 这部分涨落携带了上面 $\zeta$ 这个因子.

而如果用引力波来进行观测，我们直接观测到的是 $H$ 的那个 fluctuation，因此我们一共可以观测到两种不同的 fluctuation.

---

在课程的最后，我们讲如何从量子场论 re-produce 广义协变性原理.

上帝说，要有光. 一个 massless particle 出现，原先的 Lorentz 对称性就破缺成一个 SO(3). 我们知道 SO(3) 的表示是自旋，也就是 $J_{x,y,z}$；而 massive particles 对应 SO(2)，只有一个生成元 $J_z$.

::: tip

ahp 说：「积懒成笨」. 多思考才能变得 sharp. 但是不思考可能会变得快乐.

:::

这似乎很不公平：massive particles 只有一个生成元. 所以我们仔细 consider 一下，发现还有两个生成元：

```mermaid
flowchart LR
	A["boost in x (变斜，被拉伸)"] --> B["rotate in y (回到原方向，但是长度变化)"]
	B --> C["boost in -z (变回原来长度)"]
```

这是所谓的 $D_x$. 将前面两步交换方向，得到 $D_y$，这被称为 ISO(2).
$$
A^\mu(x) = \int\frac{\mathrm{d}^3k}{(2\pi)^3\cdot 3k^0}\left[\epsilon_r^\mu(k)a_r(k)e^{-\mathrm{i}k^0t+\mathrm{i}\vec{k}\cdot\vec{x}}+(\epsilon_r^\mu)^\star(k)(a_r^\dagger)^\star(k)e^{\mathrm{i}k^0t-\mathrm{i}\vec{k}\cdot\vec{x}}\right]
$$
它的变换已经不是简单的 Lorentz 变换，因为有粒子，所以只能按照 little group (不变子群) 变换. 举个例子，沿着 $z$ 的转动的 Lorentz 变换就是
$$
R(\theta) = \begin{pmatrix}
1&0&0&0\\
0&\cos\theta&-\sin\theta&0\\
0&\sin\theta&\cos\theta&0\\
0&0&0&1
\end{pmatrix}
$$
而用 $D_x$ 生成的变换是
$$
S(\alpha,\beta) = \begin{pmatrix}
1+\gamma&\alpha&\beta&-\gamma\\
\alpha&1&0&-\alpha\\
\beta&0&1&-\beta\\
\gamma&\alpha&\beta&1-\gamma
\end{pmatrix},\quad \gamma=\frac{1}{2}\sqrt{\alpha^2+\beta^2}
$$
可以验证这个变换也是一个 Lorentz 变换 (保持 Minkowski 度规不变). 对于一个正常的旋转，
$$
R(\theta)^\mu{}_\nu\varepsilon_r^\nu(k) = e^{-\mathrm{i}r\theta}\varepsilon_r^\mu(k),\quad \varepsilon_r^\mu(k)=\frac{1}{\sqrt{2}}\begin{pmatrix}
0\\1\\\pm\mathrm{i}\\0
\end{pmatrix}
$$
但是对于 $S(\alpha,\beta)$，
$$
S^\mu{}_\nu\varepsilon_r^\nu(k) = \varepsilon_r^\mu(k)+\frac{\alpha+\mathrm{i}\beta}{\sqrt{2}}\frac{k^\mu}{k}
$$
已经不是一个矢量. 为此，我们想要构造这个相互作用使得我们不管怎么测量都只能看出矢量的性质，看不出来「不是矢量」，这是对理论本身的限制.
$$
M = \epsilon_\mu(k)M^\mu(k)\to \epsilon_\mu'(k')M'^\mu(k')+\underset{=0}{\underline{\alpha k'_\mu M^\mu(k')}}
$$
也就是 $k_\mu\langle f|J^\mu|i\rangle=0$. 所谓：messless helicity (螺旋度) $=1$ particles have to couple to conserved current，这种粒子必须耦合到守恒流上.