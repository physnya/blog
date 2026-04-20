---
title: Lesson 16 引力波的功率
createTime: 2026/04/17 15:06:56
permalink: /GR/lesson-16-power-of-gravitational-waves/
---
继续说引力波.

仍然回忆电磁场的 lagrangian，
$$
\begin{aligned}
\mathcal{L} &= -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}+eA_\mu J^\mu\\\\
&= -\frac{1}{4}(\partial_\mu A_\nu-\partial_\nu A_\mu)(\partial^\mu A^\nu-\partial^\nu A^\mu)-eA_\mu J^\mu\\\\
&= -\frac{1}{2}(\partial_0A_i-\partial_iA_0)(\partial^0A^i-\partial^iA^0)-\frac{1}{4}(\partial_i A_j-\partial_j A_i)(\partial^i A^j-\partial^j A^i)+eA_iJ^i+eA_0J^0
\end{aligned}
$$
Langrange 方程是
$$
\partial_\mu\frac{\delta\mathcal{L}}{\delta\partial_\mu A_\nu} - \frac{\delta\mathcal{L}}{\delta A_\nu} = 0
$$
代入，两个方程 (规范条件和 Lagrange 方程) 分别是
$$
\begin{aligned}
&\partial_\mu\partial^\mu A^\nu+eJ^\nu=0\\\\
&\partial_\mu A^\mu=0
\end{aligned}
$$
于是解得
$$
A^\nu(x,t) = \int\text{d}^3x'\text{d}t'\cdot G(\vec{x}-\vec{x}',t-t')J^\nu(x',t')
$$
无源的情况下，$J=0$，$A^\nu=\varepsilon^\nu e^{\text{i}k_\mu x^\mu}+\varepsilon^{*\nu}e^{-\text{i}k_\mu x^\mu}$. 如果 $\varepsilon^\mu\to \varepsilon^\mu+k^\mu\alpha$，且 $k_\mu\varepsilon^\mu=0$，那么这时候变换 $\varepsilon^\mu\to \varepsilon^\mu+k^\mu\alpha$ 仍然维持 $k_\mu\varepsilon^\mu=0$ 的关系. 对一个 $k^\mu=(k,0,0,k)$ 来说，可以通过 $\varepsilon\to\varepsilon+1/k\cdot k$ 的变换，将 $\varepsilon$ 变换到只有 $1,2$ 空间分量的形式，这两个分量分别表示光子的两种偏振.

---

对于引力波，
$$
h_{ij}^{TT} = \begin{pmatrix}
h_+ & h_\times & 0\\
h_\times & -h_- & 0\\
0 & 0 & 0
\end{pmatrix}_{ij}\cos\omega(t-z)
$$
它产生的度规是
$$
\text{d}s^2=\text{d}t^2+\text{d}z^2+[1+h_+\cos\omega(t-z)]\text{d}x^2+[1-h_+\cos\omega(t-z)]\text{d}y^2+2h_\times\cos\omega(t-z)\text{d}x\text{d}y
$$
用 Green 函数的思路来看，
$$
h_{\mu\nu}(x,t)=4G\int\frac{\text{d}^3x}{|\vec{x}-\vec{x}'|}S_{\mu\nu}(t-|\vec{x}-\vec{x}'|,\vec{x}),\quad S_{\mu\nu} = T_{\mu\nu}-\frac{1}{2}g_{\mu\nu}T
$$
对于任意一个 source 产生的引力波，是将上述解投影到横向得到的，其中 $S$ 的第二项是一个纯 trace 的量，但是结果应该是无 trace 的，因此这一项的投影是零. 最终有
$$
h_{ij}^{TT}(x,t)=4G\int\frac{\text{d}^3x}{|\vec{x}-\vec{x}'|}\Lambda_{ijkl}T_{kl}(t-|\vec{x}-\vec{x}'|,\vec{x}')
$$
对于一个距离我们非常遥远的引力波源系统，$\vec{x}\gg\vec{x}'$，上式被化为
$$
h_{ij}^{TT}(x,t) = \frac{4G}{r}\Lambda_{ijkl}(\hat{n})\int\text{d}^3\vec{x}'\cdot T_{kl}(t-r+\vec{x}'\cdot\hat{n},\vec{x}')
$$
::: warning

这里不能把 $T$ 中间的 $x'$ 忽略掉，因为引力波由源的振荡产生，
$$
T_{kl}\sim e^{\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})} 
$$
这个项出现在相位上面，一点小变化会造成很大的影响，所以即使和 $r$ 同阶出现也不能忽略.

:::

做一次 Fourier，
$$
T_{kl}(t,\vec{x}) = \int\frac{\text{d}^4k}{(2\pi)^4}\tilde T_{kl}(\omega,\vec{k})e^{-\text{i}\omega k+\text{i}\vec{k}\cdot\vec{x}}
$$
变换回去，
$$
\begin{aligned}
&\int\frac{\text{d}\omega}{2\pi}\int\frac{\text{d}^3\vec{k}}{(2\pi)^3}\tilde T_{kl}(\omega ,k)\int\text{d}^3\vec{x}' e^{-\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})+\text{i}\vec{k}\cdot\vec{x}'}\\\\
&= \int\frac{\text{d}\omega}{2\pi}\tilde T_{kl}(\omega,\omega\hat{n})e^{-\text{i}\omega(t-r)}
\end{aligned}
$$
于是
$$
h_{ij}^{TT}(t,\vec{x}) = \frac{4G}{r}\Lambda_{ijkl}(\hat{n})\int_{-\infty}^\infty\frac{\text{d}\omega}{2\pi}\tilde T_{kl}(\omega,\omega\hat{n})e^{-\text{i}\omega(t-r)}
$$

---

回忆我们之前电磁学中的多极展开，我们有 $\alpha^2\sim1/137^2$ 作为每一级之间的量级差异，只有在这种时候才能做展开；在我们这里也可以实现某种多极展开.
$$
\begin{aligned}
&e^{-\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})} = e^{-\text{i}\omega(t-r)}[1-\text{i}\omega x'^in^i+\cdots]\\\\
&T_{kl}(t-r+\vec{x}'\cdot\hat{n},\vec{x}') = T_{kl}(t-r,\vec{x}')+(\vec{x}'\cdot\hat{n})\partial_0T_{kl}+\frac{1}{2}(\vec{x}'\cdot\hat{n})^2\partial_0^2T_{kl}+\cdots
\end{aligned}
$$
Moments (矩)：
$$
\begin{aligned}
&S^{ij}(t)=\int\text{d}^3x\cdot T^{ij}(t,x)\\\\
&S^{ij,k}(t) = \int\text{d}^3x\cdot T^{ij}(t,x)x^k\\\\
&S^{ij,kl}(t) = \int\text{d}^3x\cdot T^{ij}(t,x)x^kx^l
\end{aligned}
$$
利用矩改写引力波的表达式，
$$
h_{ij}^{TT}(t,\vec{x}) = \frac{4G}{r}\Lambda_{ijkl}(\hat{n})[S^{kl}+n_m\dot{S}^{kl,m}+\frac{1}{2}n_{mp}\ddot{S}^{kl,mp}+\cdots]
$$
对于上面定义的 $T_{kl}$ (动量流密度) 的矩，同理可以定义能量密度和动量密度的矩，形如
$$
M^{ij}=\int\text{d}^3x\cdot T^{00}(t,\vec{x})x^ix^j,\quad P^{i,jk}=\int\text{d}^3x\cdot T^{0i}(t,\vec{x})x^jx^k
$$
由 $\partial_\mu T^{\mu\nu}=0$，得到 $\partial_0T^{00}=-\partial_iT^{0i}$ 和 $\partial_0T^{0i}=-\partial_jT^{ij}$. 先算能量的矩，由守恒很容易知道 $\dot{M}=0$. 但是一阶矩的导数是
$$
\dot{M}^i = \int\text{d}^3x\cdot x^i\partial_0T^{00} = -\int\text{d}^3x\cdot x^i\partial_jT^{0j} = \int\text{d}^3x\delta^i{}_jT^{0j}=P^i
$$

> 其中，第三个等号来源于一个分部积分.

同理一直往下算，有
$$
\dot{M}^{ij} = P^{i,j}+P^{j,i},\quad \dot{P}^{i,j}=S^{ij},\quad\cdots
$$
最终得到比较重要的一个式子：
$$
S^{ij} = \frac{1}{2}\ddot{M}^{ij}
$$
因此，
$$
[h_{ij}^{TT}(t,\vec{x})]_{\text{quad}}=\frac{2G}{r}\Lambda_{ijkl}(\hat{n})\ddot{M}^{kl}(t-r)
$$
定义 $Q^{kl}\equiv M^{kl}-\delta^{kl}M^i{}_i/3$，那么
$$
[h_{ij}^{TT}(t,\vec{x})]_{\text{quad}}=\frac{2G}{r}\ddot{Q}^{TT}_{ij}(t-r)
$$

---

讨论引力波的能量问题. 对场方程展开到二阶，
$$
R^{(1)\mu\nu}-\frac{1}{2}\eta^{\mu\nu}R^{(1)}+h^{\mu\nu}R^{(1)}-\frac{1}{2}\eta_{\mu\nu}h^{\lambda\rho}R^{(1)}_{\lambda\rho}+R^{(2)}_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}\eta^{\lambda\rho}R^{(2)}_{\lambda\rho} = 8\pi GT^{\mu\nu}
$$
