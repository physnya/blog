---
title: Lesson 9 Birth (I)
createTime: 2026/04/23 21:57:39
permalink: /star-planet/lesson-9-birth-i/
---
我们之前在第一次作业里说过，核反应能量 $\varepsilon_{\text{nuc}}\propto T^\nu$，这里的 $\nu$ 是一个正常大小的数量，也就是核反应会以正向循环的方式指数级地放大，最后产生某种爆炸.

但是这真的现实吗？如果认为所有的能量都由引力提供，那么
$$
\int4\pi r^3\frac{\text{d}P}{\text{d}r} = \int-\rho g\cdot4\pi r^2\text{d}r = W_{G}
$$
平衡要求
$$
W_G+\int\frac{3P}{\rho}\text{d}m = 0,\quad W_G = -\frac{3GM^2}{5R}
$$
对于一个理想单原子气体，$W_G+2U_{\text{int}}=0$；极端相对论性气体则有 $W_G+U_{\text{int}}=0$. 利用理想气体公式，得到
$$
M = \left(\frac{3}{4\pi\rho}\right)^{1/2}\left(\frac{5k_BT}{G\overline{m}}\right)^{3/2}\propto \rho^{-1/2}T^{3/2}
$$
这是所谓的 Jeans mass. 如果一团气体的质量大于 Jeans mass，那么引力势能将占据主导，它不再处于平衡态，而是进入坍缩过程. 类似地，还有一个物理量是自由落入时间 (free fall)，为气体分子从云边缘落入中心所需要的时间，
$$
t_{\text{ff}} \sim\frac{1}{\sqrt{G\rho}} \approx 10^5\text{ yr.}
$$
当密度增加时，Jeans mass 变小，对于一个很大的气体团来说，很有可能出现 $M\gg m_J$，这导致气团中间形成很多小的 collapse，这个过程称为 fragmentation. 而如果密度升高到一定程度，气团从 isothermal 过程 (等温过程) 变为 adiabatic 过程 (绝热过程)，这是因为密度太高，optical depth 变小了，辐射无法逃出气团.

---

Derive Jeans mass again in a completely different way —— fluid equation：
$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\vec{v}) = 0
$$
这是质量守恒，或者说连续性条件. 另一个方程是 Navier - Stokes 方程的简单形式，
$$
\frac{\partial\overline{v}}{\partial t} + (\overline{v}\cdot\nabla)\overline{v} = -\frac{\nabla P}{\rho}-\nabla\Phi
$$
(Euler equation) 还有 Poisson 方程 $\nabla^2\Phi=4\pi G\rho$. 除此之外，这个过程我们认为是 isothermal 的，因此 $P = \displaystyle{\frac{k_BT}{m}}\rho = c_s^2\rho$ ($c_s$ 为声速，但是是等温过程的声速).

在平衡态下，$\overline{v}=\overline{v}_0$，$\rho=\rho_0$，$\Phi=\Phi_0$. 现在加上一个微扰 $\rho=\rho_0+\rho_1$，其中 $|\rho_1|\ll\rho_0$. 认为扰动是周期性的，
$$
\rho_1 = \tilde\rho_1e^{\text{i}(kx-\omega t)}
$$
我们的目标是找到 dispersion relation (色散关系). 将扰动代入前面的四个方程，
$$
\left.\begin{aligned}
&\frac{\partial\rho_1}{\partial t} + \rho_0\frac{\partial v_1}{\partial x} = 0\Longrightarrow \rho_1(-\text{i}\omega)+\rho_0(\text{i}k)v_1 = 0\\\\
&v_1(-\text{i}\omega) = -\frac{c_s^2\nabla\rho_1}{\rho_0}-\nabla\Phi_1 = -\frac{c_s^2(\text{i}k)\rho_1}{\rho_0}-(\text{i}k)\Phi_1\\\\
&(\text{i}k)^2\Phi_1 = 4\pi G\rho_1
\end{aligned}\right\}\longrightarrow\begin{pmatrix}
-\text{i}\omega&\text{i}\rho_0k&0\\
c_s^2(\text{i}k)/\rho_0&-\text{i}\omega&\text{i}k\\
4\pi G&0&k^2
\end{pmatrix}\begin{pmatrix}
\rho_1\\v_1\\\Phi_1
\end{pmatrix}=0
$$
因此系数矩阵的 $\det = 0$. 于是，
$$
\omega^2=c_s^2k^2-4\pi G\rho_0
$$
而 $\omega^2>0$ 是稳定条件，因此当尺度比较小时，$k\sim\lambda^{-1}$ 比较大，整个系统稳定；反之，系统在尺度很大时不稳定. 临界条件为，
$$
k_c^2 = \frac{4\pi G\rho_0}{c_s^2}\Longrightarrow\lambda_c^2\sim\frac{c_s^2}{G\rho_0}\Longrightarrow m_c\sim\rho_0\lambda_c^3\sim\frac{c_s^3}{G^{3/2}\rho_0^{1/2}}\propto\left(\frac{k_BT}{G\overline{m}}\right)^{3/2}\rho_0^{-1/2}
$$
相当于重新得到了 Jeans mass.

如果考虑的不是球形气体团，而是一个 disk，那么：
$$
\omega^2 = c_s^2k^2-2\pi G\Sigma|k|+\kappa^2
$$
这里 $\Sigma$ 是面密度，$\kappa^2 = \displaystyle{4\Omega^2-2\Omega r\frac{\text{d}\Omega}{\text{d}r}}$. 对于 Keplerian disk，$\kappa^2=\Omega^2$ (因为第三定律).

这时候 $\omega^2$ 仍然是一个 $k$ 的二次函数，但是在 $k$ 趋于零的状态，有一段额外的稳定区域 —— 这是因为圆盘有离心力，圆盘在大尺度下更倾向于解离而不是坍缩. 我们来找这两个临界点：

首先最小的 $\omega^2$ 出现在 $k_c = \displaystyle{\frac{6\pi\Sigma}{c_s^2}}$. 当 $\displaystyle{\frac{c_s\Omega}{6\pi\Sigma}>1}$ 时，整个系统一直都是稳定的.

Question: 为什么我们后面推导的时候没有压强梯度？那么怎么和重力平衡？

> 某种意义上这是一个被称为 Jeans window 的近似，将这个压强看作一个平均值即可.