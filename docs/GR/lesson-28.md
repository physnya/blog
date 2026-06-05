---
title: Lesson 28 暴涨前的涨落信息
createTime: 2026/06/05 21:04:43
permalink: /GR/lesson-28-inflation-information/
---
一个标量场，分为一个各向同性的项和一个涨落，
$$
\phi(t,\vec{x}) = \bar\phi(t)+\delta\phi(t,\vec{x})
$$
度规也是一样，可以分成
$$
g_{\mu\nu}(t,\vec{x}) = \bar g_{\mu\nu}(t)+\delta g_{\mu\nu}(t,\vec{x})
$$
在宇宙尺度上，时间并不是一个很好的对称性，所以我们从空间旋转的角度思考，而不是应用 Lorentz 表示. 这时候的线元是
$$
\begin{aligned}
\mathrm{d}s^2&=g_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu\\\\
&=-(1+2\Phi)\mathrm{d}t^2+2aB_i\mathrm{d}x^i\mathrm{d}t+a^2[(1-2\psi)\delta_{ij}+E_{ij}]\mathrm{d}x^i\mathrm{d}x^j
\end{aligned}
$$
任何一个 $B_i$ 都可以分成一个散度和剩下的无散度部分，$B_i\equiv\partial_iB-S_i$，$\partial^iS_i=0$. 同理，
$$
E_{ij} = 2\partial_i\partial_jE+2\partial_iF_j+h_{ij}
$$
可以看到 $h_{ij}$ 是一个横向无迹分量 ($\partial_ih^{ij}=0$, $h^i{}_i=0$)，因此它就是引力波.

实际上可以涨落的只有某些项，现在考虑
$$
x^\mu\to x'^\mu(x)=x^\mu+\delta x^\mu(x)
$$
这是个矢量，和上面一样，它们的涨落都可以化为标量的涨落.

---

对于一个能动张量，
$$
T^{\mu\nu} = (\rho+p)U^\mu U^\nu+pg^{\mu\nu}
$$
这里 $\rho=\bar\rho$，$p=\bar p$，$U^\mu=(\bar U^0,0,0,0)$. 分量用涨落写，得到
$$
\begin{aligned}
&T^0{}_0=-(\bar\rho+\delta\rho)\quad \cdots
\end{aligned}
$$
代入变化
$$
\begin{aligned}
\Phi &\to \phi-\dot\alpha,\quad B\to B+a^{-1}\alpha-\alpha\dot\beta,\quad E\to E-\beta\\\\
\Psi &\to \Psi+H\alpha,\quad \delta\rho\to\delta\rho-\dot{\bar\rho}\alpha,\quad-\zeta\equiv\Psi+\frac{H}{\dot{\bar\rho}}\delta\rho\quad \cdots
\end{aligned}
$$
只需要在 Einstein 方程里面代入然后算演化就行.

但是我们更想知道这些东西是怎么来的. 首先很容易知道，
$$
\delta\rho = V^1\delta\phi,\quad \dot\rho=V^1\phi
$$
因此前面提到的 $\zeta$ 就是
$$
-\zeta = -\Psi+\frac{H}{\dot{\bar\phi}}\delta\phi\xrightarrow{\Psi=0\text{ gauge}} -\zeta=\frac{H}{\dot{\bar\phi}}\delta\phi
$$
原因是 $\zeta$ 是一个 gauge environment quantity，无论宇宙是什么状态，在 inflation 结束前后都是不变的. 因此它可以携带 inflation 前的信息带到 inflation 后，我们想要计算宇宙后期演化中受到前面演化的影响，只要算 $\delta\phi$. 实际的研究上，我们通过算 $\delta\phi$ 来推导 $\delta\rho$，然后对应到 $\delta T$，再与 CMB 的观测结果相比较，验证正确性.

当然 CMB 是一个二维的观测而不是三维的，只能算角分布. 引入一个两方向关联
$$
\langle\delta T(\hat{n})\delta T(\hat{n}')\rangle
$$
固定 $\hat{n}$ 和 $\hat{n}'$ 的夹角然后全天平均，得到一个夹角对应的一个值. 对这个函数进行球谐展开，$\sim C_{lm}Y_{lm}(\Omega)$，并假设 isotropic (也就是假设 $C_{lm}=C_{lm'}$)，那么对于每一个 $l$，我们能够获得 $2l+1$ 个 independent observables.

---

现在来算 perturbation.
$$
\mathrm{d}s^2=a^2\eta_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu,\quad \sqrt{g}=a,\quad g^{\mu\nu}=a^{-2}\eta^{\mu\nu}
$$
这个标量场 $\phi$ 的作用量为
$$
S = \frac{1}{2}\int\mathrm{d}^3x\mathrm{d}\tau\cdot a^2\left(\phi'^2-\nabla\phi\cdot\nabla\phi-m^2a^2\phi\right)
$$
令 $\chi=a\phi$，
$$
S=\frac{1}{2}\int\mathrm{d}^3x\mathrm{d}\tau\cdot\left[(\chi'^2-(\nabla\chi)^2-\left(m^2a^2-\frac{a''}{a}\right)\chi^2\right]
$$
做 Fourier 展开，
$$
\chi(\vec{x},\tau) = \int\frac{\mathrm{d}^3k}{(2\pi)^{3/2}}\chi_{\vec{k}}(\tau)e^{\mathrm{i}\vec{k}\cdot\vec{x}}
$$
得到
$$
\chi''_{\vec{k}}(\tau)+\omega_k^2(\tau)\chi_{\vec{k}}(\tau)=0\Longrightarrow\omega_{\vec{k}}^2(\tau)=k^2+m^2a^2-\frac{a''}{a}
$$
再做一步是
$$
\omega_k^2(\tau)=k^2+\frac{m^2}{H^2\tau^2}-\frac{2}{\tau^2}
$$
考虑下面的量，
$$
\frac{\mathrm{d}\omega_k^2}{\omega_k^2\mathrm{d}\tau} = \frac{\displaystyle{\frac{2m^2}{H^2\tau^2}+\frac{4}{\tau^3}}}{\displaystyle{\left(k^2+\frac{m^2}{H^2\tau^2}-\frac{2}{\tau^2}\right)^{3/2}}}
$$
对于 $m\to0$ (因为我们所讨论的问题中都满足 $m\ll H$ 的条件)，
$$
\sim\frac{4}{(k^2\tau^2-2)^{3/2}}
$$
因此能够激发出来的 mode 大约是 $|k\tau|\sim\sqrt{2}$.
$$
\chi_k(\tau)=\frac{1}{\sqrt{2}}\left[a_kv_k^\star(\tau)+a_k^\dagger v_k(\tau)\right]
$$
代回那个 Fourier 展开，
$$
\chi(\vec{x},\tau) = \frac{1}{\sqrt{2}}\int\frac{\mathrm{d}^3k}{(2\pi)^{3/2}}\left[a_kv_k^\star(\tau)e^{\mathrm{i}\vec{k}\cdot\vec{x}}+a_k^\dagger v_k(\tau)e^{-\mathrm{i}\vec{k}\cdot\vec{x}}\right]
$$
现在 $v_k$ 的选择有很大的任意性 —— 之前定义的真空态是让所有湮灭算符都为零的那个态，但是现在 $\omega$ 已经和时间相关，因此可以随意取值，每个时刻都会得到一个真空态. 这些真空态之间由 Bogliubov 变换联系. 下面求 $v_k$.
$$
v_k''+\left[k^2-\left(2-\frac{m^2}{H^2}\right)\frac{1}{\tau^2}\right]v_k=0
$$
这就是一个 Bessel 方程. 解得
$$
v_k=\sqrt{k\tau}\left[A_kJ_n(|k\tau|)+B_kY_n(|k\tau|)\right]
$$
$J_n, Y_n$ 分别是第一类第二类 Bessel 函数. 那么怎么定义真空态？有一种取法是所谓 Bunch-Davies vacuum，也就是
$$
v_k\to\frac{1}{\sqrt{k}}e^{\mathrm{i}k\tau}
$$
这时候 $v_k$ 只能取第二类 Bessel 函数，
$$
v_k=\mathrm{i}\sqrt{\frac{\pi}{k}}H_n^{(2)}(|k\tau|),\quad n=\left(\frac{9}{4}-\frac{m^2}{H^2}\right)^{1/2}
$$
仍然是 $m\ll H$ 情况，$3/2$ 的 Hankel 函数刚好是初等的，因此简单地化为
$$
v_k=\frac{1}{\sqrt{k}}e^{\mathrm{i}k\tau}\left(1-\frac{\mathrm{i}}{k\tau}\right)
$$
计算一个真空态：
$$
\begin{aligned}
\langle0|\chi(\tau,\vec{x})\chi'(\tau,\vec{y})|0\rangle &= \int\frac{\mathrm{d}^3k}{(2\pi)^3}\cdot\frac{1}{2}|v_k(\tau)|^2e^{\mathrm{i}\vec{k}\cdot(\vec{x}-\vec{y})}\\\\
&= \frac{1}{4\pi^2}\int_0^\infty k^2\mathrm{d}k\cdot|v_k(\tau)|^2\frac{\sin kL}{kL}\quad L\sim k^{-1}
\end{aligned}
$$
最后可以导出 $\delta\phi = H$ 的结论...