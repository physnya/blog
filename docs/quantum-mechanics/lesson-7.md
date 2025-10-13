---
title: Lesson 7 自由粒子
permalink: /quantum-mechanics/lesson-7/
createTime: 2025/10/13 15:17:02
---
什么是波矢？是波动传播时，在波动方向上波的空间频率.

自由粒子的稳态 Schrödinger 方程是
$$
\frac{\text{d}^2\psi}{\text{d}x^2}=-k^2\psi\,,\quad k=\frac{\sqrt{2mE}}{\hbar}
$$
一般解是
$$
\psi(x)=Ae^{\text{i}kx}+Be^{-\text{i}kx}
$$
加入时间解，得到
$$
\varPsi(x,t)=Ae^{\text{i}(kx-\frac{\hbar k^2}{2m}t)}+Be^{-\text{i}(kx+\frac{\hbar k^2}{2m}t)}
$$
对于单一的一个 $k$，
$$
\varPsi_k(x,t)=Ae^{\text{i}(kx-\frac{\hbar k^2}{2m}t)}
$$
如果 $k>0$，这是一个向 $+x$ 方向传播的波动.

如果归一化，那么会得到 $|\varPsi|^2=|A|^2$ 积分为 $\infty$. 所以我们要取一个 $k$ 的范围，因为有正交归一性：
$$
\frac{1}{2\pi}\int_{-\infty}^\infty e^{-\text{i}kx}e^{\text{i}k'x}\text{d}x=\delta(k-k')
$$
为了将 $\varPsi$ 分解为本征态，我们考虑
$$
\varPsi(x,0)=\sum_n c_n\phi_n(x)\,,\quad \varPsi(x,t)=\sum_nc_n\phi_n(x)e^{-\text{i}E_nt/\hbar}
$$
则为了求出 $c_n$，对于初态两边同时乘以 $\phi_m^*(x)$，并积分，
$$
\int\phi_m^*(x)\varPsi(x,0)\text{d}x=\sum_nc_n\delta_{mn}=c_m
$$
于是波函数是
$$
\varPsi(x,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty\phi(k)e^{\text{i}(kx-\frac{\hbar k^2}{2m}t)}\text{d}k
$$
其中，
$$
\phi(k)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty\varPsi(x,0)e^{-\text{i}kx}\text{d}x
$$
也就是初态波函数对 $x$ 的 Fourier 变换 (到谱函数).

> 明天下午四点，一个 Italy 的科学家会来物理楼做报告，讲单光子源.

---

说到上节课的「电荷和相位形成共轭变量的问题」.

相干态就是不同粒子之间的叠加态，定义 $\alpha$ 的实部和虚部，$\alpha$ 在这个平面上是一个点，$\ket{\alpha}$ 对应的态就是以这个点为中心的一个 Gauss 波包. 如果有另外一个 $\alpha'$ 离这个点很远，我们能够区分这两个态.

于是 $|\alpha|$ 代表了叠加态波函数的振幅，$\arg\alpha$ 代表了叠加态波函数的相位. 我们如果去计算相干态的波函数，会知道这个 $|\alpha|\propto N$ (相干态的粒子数). 但是这个 $\alpha$ 点附近的「Gauss 波包」的大小是固定的，所以我们的相位不确定度 (也就是原点到这个波包的张角) 在 $N$ 越大、$|\alpha|$ 越大时，变小.

但是为什么 $\phi$ 在 $N$ 表象下能够写成 $\partial/\partial N$ 的形式，我们还需要量子场论或者量子光学的知识.