---
title: Lesson 30 复习
createTime: 2026/06/12 15:25:48
permalink: /GR/lesson-30-review/
---
Minkowski 度规：$\mathrm{d}s^2=\eta_{\alpha\beta}\mathrm{d}x^\alpha\mathrm{d}x^\beta$. Lorentz 变换做的是
$$
\mathrm{d}x^\alpha\longrightarrow\Lambda^\alpha{}_\beta\mathrm{d}x'^\beta
$$
原先的度规变成 $\mathrm{d}s^2=\eta_{\alpha\beta}\Lambda^\alpha{}_\gamma\Lambda^\beta{}_\delta\mathrm{d}x^\gamma\mathrm{d}x^\delta$. Lorentz 变换的要求是度规不变，也就是
$$
\eta_{\alpha\beta}\Lambda^\alpha{}_\gamma\Lambda^\beta{}_\delta = \eta_{\gamma\delta}
$$
这要求 $(\det\Lambda)^2=1$，而 $|\Lambda^0{}_0|\geqslant 1$ 是唯一被实验验证的那种变换.

之后我们想要构造 Lorentz 变换的不变量，它称为 tensor. 并且 tensor 乘 tensor，其结果还是 tensor. 当然，有些东西是难以实现的，比如光子场就并不是一个 vector，为了构造出一个 tensor，那么要把光子场 $A^\mu$ 耦合到一个守恒流 $J_\mu$ 上，得到 scalar $A^\mu J_\mu$.

> 人们总是想把物理量写成 vector $\cdot$ vector 的形式，如果其中一个因子做不到，那么对另一个因子就要有相应的要求.

构造出来的 Newton's Law II：
$$
m\frac{\mathrm{d}U^\mu}{\mathrm{d}\tau}=eF^{\mu\nu}U_\nu
$$
这基本上就是狭义相对论和场无关的那些部分. 现在的问题是绝对惯性系和引力无法包含进当前理论.

关于局域惯性系到底有多「局域」，我们用 Taylor 展开来作为判据，要求 $\Gamma^\rho{}_{\mu\nu}=0$ 时算作局域惯性系.

测地线方程：
$$
\frac{\mathrm{d}^2x^\mu}{\mathrm{d}\tau^2}+\Gamma^\mu{}_{\rho\sigma}\frac{\mathrm{d}x^\rho}{\mathrm{d}\tau}\frac{\mathrm{d}x^\sigma}{\mathrm{d}\tau}=0
$$
分开来看时间和空间，并认为 $\mathrm{d}t/\mathrm{d}\tau\sim1$. 那么
$$
\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}+\Gamma^i{}_{00}=0
$$
和 Newton 引力定律对比，得到 $g_{00}=-(1+2\phi)$.

---

构造和求解场方程：首先不能构造出一个只含有 $g_{\mu\nu,\sigma}$ 的张量，因为一定可以选择一个坐标，使得 $g_{\mu\nu,\sigma}=0$. 如果它是一个 tensor，那么它在任何一个坐标下都应该为零，这是不合理的. 所以只能构造含有度规二阶导数的 tensor，也就是联络的一阶导数.
$$
\Gamma^\lambda{}_{\mu\nu,\rho}\to\Gamma' = \frac{\partial x'}{\partial x}\frac{\partial x}{\partial x'}\frac{\partial x}{\partial x'}\frac{\partial x}{\partial x'}\Gamma+\cdots\frac{\partial x'}{\partial x}\frac{\partial^3x}{\partial x'\partial x'\partial x'}
$$
为了 cancel 后面那个项，需要交换一下指标，最后构造的结果是
$$
R^\lambda{}_{\mu\nu,\kappa} = \Gamma^\lambda{}_{\mu\nu,\kappa}-\Gamma^\lambda{}_{\mu\kappa,\nu}+\Gamma^\eta{}_{\mu\nu}\Gamma^\lambda{}_{\eta\kappa}-\Gamma^\eta{}_{\mu\kappa}\Gamma^\lambda{}_{\eta\nu}
$$
这就是 Riemann tensor. 其缩并分别是 Ricci tensor $R_{\mu\nu}=R^\lambda{}_{\mu\nu,\lambda}$，Ricci scalar $R=g^{\mu\nu}R_{\mu\nu}$.

Ricci 曲率有一个 Bianchi 恒等式，
$$
\left(R^{\mu\nu}-\frac{1}{2}g^{\mu\nu}R\right)_{;\nu}=0
$$
由此可以构造场方程. 我们已经从 Newton 理论知道，
$$
g_{00}=-(1+2\phi),\quad \nabla^2\phi=4\pi G\rho,\quad T_{00}=\rho
$$
因此写成协变形式应该是 $G_{\mu\nu}=-8\pi GT_{\mu\nu}$. 而 $G_{\mu\nu}$ 应当是一个度规二阶导数，因此必须由 $R_{\mu\nu}$ 和 $g_{\mu\nu}R$ 来构造；而 $T_{\mu\nu;\lambda}=0$，代入特殊条件直接解得
$$
G_{\mu\nu}=R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R\Longrightarrow \boxed{R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=-8\pi GT_{\mu\nu}}
$$
其球对称的一个解为，
$$
\mathrm{d}\tau^2=B(r)\mathrm{d}r^2-A(r)\mathrm{d}t^2-r^2\mathrm{d}\Omega^2
$$
令 $R_{\mu\nu}=0$，真空解为
$$
\mathrm{d}\tau^2=\left(1-\frac{2GM}{r}\right)\mathrm{d}t^2-\left(1-\frac{2GM}{r}\right)^{-1}\mathrm{d}r^2-r^2\mathrm{d}\Omega^2
$$
构造守恒量：Killing vector，
$$
\frac{\mathrm{d}}{\mathrm{d}\tau}(\xi_\mu P^\mu)=0\Longrightarrow\xi_{\mu;\nu}+\xi_{\nu;\mu}=0
$$
也就是
$$
g_{\mu\nu,\rho}\xi^\rho+g_{\rho\nu}\xi^\rho{}_{,\mu}+g_{\rho\mu}\xi^\rho{}_{,\nu}=0\Longrightarrow \mathcal{L}_\xi g_{\mu\nu}=0
$$
比如求轨道方程时，有 $P_\mu\delta^\mu{}_{\hat{t}}\Longrightarrow P_0$，$P_\mu\delta^\mu{}_{\hat\phi}\Longrightarrow P_\phi$.

---

研究极端情况. 对于黑洞，我们有 Kruskal 坐标.

::: warning

一堆 Penrose 图，力竭了. 见 [Lesson 8](/GR/lesson-8-schwarzschild-black-hole/), [Lesson 9](/GR/lesson-9-schwarzschild-black-hole/), [Lesson 10](/GR/lesson-10-penrose-figure/), [Lesson 11](/GR/lesson-11-rn-and-kerr-black-holes/), [Lesson 12](/GR/lesson-12-penrose-process-hawking-radiation/).

:::

---

广义相对论除了 Hawking 辐射以外，另一种辐射是引力波. 做法是把场方程线性化，
$$
g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}\Longrightarrow\Box h_{\mu\nu}=-16\pi GS_{\mu\nu},\quad S_{\mu\nu}=T_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}T
$$
要算的是 $h_{ij}^{TT}$ (Traceless Transverse, 横向无迹分量). 得到
$$
h_{ij}^{TT}(\vec{x},t)=4G\int\mathrm{d}^3\vec{x}\cdot\frac{T_{ij}^{TT}(\vec{x}',t-|\vec{x}'-\vec{x}|)}{|\vec{x}'-\vec{x}|}=\begin{pmatrix}
h_+&h_\times&\\
h_\times&-h_+&\\
&&
\end{pmatrix}
$$
只有两种偏振.

Chirp：
$$
\dot{\omega}_{\text{gw}}=\frac{12}{5}\cdot 2^{1/3}\left(\frac{GM_c}{c^3}\right)^{5/3}\omega_{\text{gw}}^{1/3}
$$
其中 chirp mass $M_c=(\mu^3m^2)^{1/5}$.

---

Hawking radiation：
$$
b_\Omega=\int_0^\infty\mathrm{d}\omega\left(\alpha_{\Omega\omega}a_\omega-\beta_{\Omega\omega}a_\omega^\dagger\right)
$$
这是所谓 Bogliubov 变换，它是一个比较广泛应用的变换. 我们要算的是 Minkowski 时空下的一个粒子数算符，
$$
_M\langle0|b_\Omega^\dagger b_\Omega|0\rangle_M=\int\mathrm{d}\omega|\beta_{\omega\Omega}|^2=\frac{\delta(0)}{e^{2\pi\Omega/a}-1}
$$
这表现为一个温度. 这件事情就是所谓 Unruh Effect. 接下来我们可以利用在 Unruh Effect 这里积累的经验来研究 Hawking radiation.

Kruskal 坐标下，Schwarzschild 度规变成
$$
\mathrm{d}s^2=\frac{2M}{r(u,v)}\exp\left(1-\frac{r(u,v)}{2M}\right)\mathrm{d}u\mathrm{d}v
$$

> ... 宇宙学刚讲完，就不复习了.