---
title: Lesson 14 Noether 定理
createTime: 2026/04/10 18:08:32
permalink: /GR/lesson-14-noether-theorem/
---
Hamiltonian 定义为
$$
H(p,q) \equiv\frac{\delta L}{\delta\dot{q}}\dot{q}-L(q,\dot{q})
$$
作用量表达为
$$
S = \int_{t_1}^{t_2}\text{d}t\cdot\left[\frac{1}{2}\dot{q}^2-V(q)\right]
$$
在广义相对论中，如果假设 $\text{d}\tau^2=e^2\text{d}t^2$，那么
$$
S=\int_{t_1}^{t_2}e\text{d}t\cdot\left[\frac{1}{2}\left(\frac{\text{d}q}{\text{d}t}\right)^2e^{-2}-V(q)\right]
$$
做变分变的就是度规，因此是对 $e$ 做变分.

---

对于一个标量场，其作用量为
$$
\begin{aligned}
S &= \int\text{d}^4x\cdot\frac{1}{2}(-\partial_\mu\phi\partial^\mu\phi-m^2\phi^2)\\\\
&= \int\text{d}t\int\text{d}^3x\cdot\frac{1}{2}(\dot{\phi}_x^2-\nabla\phi\cdot\nabla\phi-m^2\phi^2)
\end{aligned}
$$
::: warning

为了方便计算，后面利用简单的平直时空，之后再一步一步把弯曲时空加进来.

:::

两个可变分的条件：

* $\delta\phi_{\vec{x}}(t_1)=\delta\phi_{\vec{x}}(t_2)=0$.
* $\phi_{\vec{x}}|_{|\vec{x}|\to\infty}\to0$

现在可以变分，得到
$$
\delta S = 0 =\int\text{d}t\text{d}^3x(\eta_{\mu\nu}\partial^\mu\partial^\nu\phi-m^2\phi)\delta\phi
$$
求此运动方程的第一步就是对角化，为此做 Fourier 变换，
$$
\varphi(x,t) = \int\frac{\text{d}t}{(2\pi)^3}\phi_{\vec{r}}(t)e^{\text{i}\vec{k}\cdot\vec{r}}
$$
解得 $\varphi=a_k^*e^{\text{i}\omega t}+b_k^*e^{-\text{i}\omega t}$. 如果除以一个 $2\omega k$，那么整个式子变成一个 Lorentz 变换下的标量. 代回去，算得
$$
\phi = \int\frac{\text{d}\phi}{(2\pi)^3\cdot 2u_k}\left(b_k^*e^{-\text{i}\omega t+\text{i}\vec{k}\cdot\vec{y}}+a_k^*e^{\text{i}\omega t-\text{i}\vec{k}\cdot\vec{y}} \right)
$$
如果 $\phi$ 想要变为实数，那么必须要求 $b_k=a_k$. General 的运动方程为
$$
\begin{aligned}
S &= \int\text{d}^4x\cdot\mathcal{L}(\phi,\partial_\mu\phi)\\\\
\delta S &= \int\text{d}^4x\cdot\left(\frac{\delta\mathcal{L}}{\partial\phi}+\frac{\delta q}{\delta\partial_\mu\phi}\delta\partial_\mu\phi\right)\Longrightarrow\frac{\delta\mathcal{L}}{\delta\phi} - \partial_\mu\left(\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\right)=0
\end{aligned}
$$
对于 $S$ 来说，在 $\phi$ 变化时 $S$ 不变，也就是 $S$ 和时空本身无关 (因为标量场的变化是 $\phi\to\phi+\text{d}\phi$). 因此
$$
0=\delta S=\int\text{d}^4x\left(\frac{\delta\mathcal{L}}{\delta\phi}-\partial_\mu\frac{\partial\mathcal{L}}{\delta\partial_\mu\phi}\right)\delta\phi + \int\text{d}^4x\partial_\mu\left(\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\delta\phi\right)
$$
也就是存在一个守恒流，定义为 $J^\mu = \displaystyle{\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\Delta\phi}$. 这便是 Noether 定理.

> 一个例子，考虑 complex scalar，
> $$
> \mathcal{L} = -\partial_\mu\phi\partial^\mu\phi^*-m^2\phi^*\phi
> $$
> 它们的变换分别是 $\phi\to\phi e^{\text{i}\alpha}$，$\phi^* \to\phi^*e^{-\text{i}\alpha}$，变分分别是 $\delta\phi=\text{i}\alpha\phi$，$\phi^*=-\text{i}\alpha\phi^*$，所以守恒流就是
> $$
> J^\mu = -\partial^\mu\phi^*\text{i}\phi+\partial^\mu\phi\text{i}\phi^*
> $$
> 验证发现 $\partial_\mu J^\mu$ 确实为零，上式守恒.

来看这种对称性意味着什么. Spacetime Related Symmetry：在某个平移中，
$$
\phi'(x')=\phi(x)
$$
因此，$\delta\phi(x) = \partial_\mu\phi(x)\delta x^\mu$ (同时我们默认有 $x'=x+\delta x$，因为这是一个空间平移)，
$$
\begin{aligned}
S &= \int\text{d}^4x\cdot\mathcal{L}(\phi,\partial_\mu\phi)
\end{aligned}
$$
对于空间的平移，一个巨大的面积 $S^\mu$ 变化，会导致边缘上有一个 Lagrangian 的变化；同时面内部会有另一个变化. 总的 $\delta S$ 受到两部分贡献，得到
$$
\begin{aligned}
\delta S &= \int\text{d}S_\mu\delta x^\mu\mathcal{L}+\int\text{d}^4x\left(\frac{\delta\mathcal{L}}{\delta\phi(x)}\delta\phi(x)+\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi(x)}\delta\partial_\mu\phi(x)\right)\\\\
&= \int\text{d}S_\mu\delta x^\mu\mathcal{L} + \int\text{d}^4x\left[\underset{0}{\underline{\left(\frac{\delta\mathcal{L}}{\delta\phi(x)}-\partial_\mu\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi(x)}\right)}}\delta x\right] + \int\text{d}^4x\cdot\partial_\mu\left[\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\delta\phi(x)\right]
\end{aligned}
$$
最后一项和第一项 combine 为一个守恒，
$$
\partial_\mu\left[\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi(x)}\delta\phi(x)+\mathcal{L}\delta x^\mu\right]=0\Longrightarrow\partial_\mu\left[\left(-\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi(x)}\partial_\nu\phi(x)+\mathcal{L}\delta^\mu{}_\nu\right)\delta x^\nu\right]=0
$$
这是空间变换.

---

对于一个一般的时空平移变换 (Lorentz 变换)，应该由 $x'^\mu=\Lambda^\mu{}_\nu x^\nu\approx x^\mu+\varepsilon^\mu x^\nu$，也就是
$$
\delta x^\mu = \varepsilon^\mu{}_\nu x^\nu
$$
我们得到
$$
\begin{aligned}
\mathcal{L}\delta x^\mu - \frac{\delta \mathcal{L}}{\delta\partial_\mu\phi}\partial_\mu\phi\delta x^\mu&= \mathcal{L}\varepsilon^\mu{}_\lambda x^\lambda-\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\partial_\nu\phi\varepsilon^\nu{}_\lambda x^\lambda\\\\
&= \left(\mathcal{L}\varepsilon^\mu{}_\lambda-\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\partial_\nu\phi\varepsilon^\nu{}_\lambda\right)x^\lambda\\\\
&= \left(\mathcal{L}\delta^\mu{}_\lambda-\frac{\delta\mathcal{L}}{\delta\partial_\mu\phi}\partial_\lambda\phi\right)\varepsilon^\lambda{}_\nu x^\nu = -T^\mu{}_\lambda\varepsilon^\lambda{}_\nu x^\nu = -T^\mu{}_\lambda\varepsilon^{\lambda\nu}x_\nu
\end{aligned}
$$
因此得到一个守恒量
$$
\partial_\mu(T^{\mu}{}_\lambda x_\nu)\varepsilon^{\lambda\nu} = 0\Longrightarrow\partial_\mu(T^\mu{}_\lambda x_\nu-T^\mu{}_\nu x_\lambda)=0
$$
把这个守恒量叫作 $M^\mu{}_{\lambda\nu}$，那么守恒流可以在三维下积分一次，
$$
J_{ij} = \int\text{d}^3x\cdot M^0{}_{ij} = \int\text{d}^3x(T^0{}_ix_j-T^0{}_jx_i)
$$
这是一个角动量！但是它仅仅是一个轨道角动量，也就是说，**标量场没有自旋角动量**.

自旋来自于下面的情况：generally，
$$
\phi_r(x)\to \phi'_r(x')+\frac{1}{2}\varepsilon^{\mu\nu}S_{\mu\nu}\phi_s(x)
$$
后面这一项是变化造成的场「内部」的变化，由 $S_{\mu\nu}$ 来描述.

::: tip

这个 $1/2$ 仅仅来源于定义，为了方便计算.

:::

自旋项带来的影响为
$$
M^{(s)\mu}{}_{\lambda\kappa} = \frac{\delta\mathcal{L}}{\delta\partial_\mu\phi_r}S_{rs,\lambda\kappa}\varphi_s(x)
$$
以有自旋的光子场为例，来计算这里的 $S$.
$$
\begin{aligned}
A'_\mu(x') &= \frac{\partial x^\nu}{\partial x'^\mu}A_\nu(x)\\\\
&= A_\mu(x)-\varepsilon^\nu{}_\mu A_\nu(x)\\\\
&= A_\mu(x)-\varepsilon^{\nu\lambda}\eta_{\lambda\mu}A_\nu(x)\\\\
&= A_\mu(x)-\frac{1}{2}\varepsilon^{\nu\lambda}(\eta_{\lambda\mu}A_\nu(x)-\eta_{\lambda\nu}A_\mu(x))\\\\
&= A_\mu(x)-\frac{1}{2}\varepsilon^{\nu\lambda}(\eta_{\mu\lambda}\delta^\kappa{}_\nu-\eta_{\mu\nu}\delta^\kappa{}_\lambda)A_\mu(x)
\end{aligned}
$$
因此这里 $S$ 是
$$
(S_{\nu\lambda})_\mu{}^\kappa = -\frac{1}{2}(\eta_{\mu\lambda}\delta_\nu{}^\kappa-\eta_{\mu\nu}\delta_\lambda{}^\kappa)
$$

---

下面用 Noether 流计算电磁场能动张量：依然是 $\mathcal{L} = -\displaystyle{\frac{1}{4}F_{\mu\nu}F^{\mu\nu}}$，
$$
T^{\mu\nu} = -\frac{\delta\mathcal{L}_{EM}}{\delta\partial_\mu A_\rho}\partial^\mu A_\rho + \eta^{\mu\nu}\mathcal{L}_{EM} = F^{\mu\rho}\partial^\nu A_\rho - \frac{1}{4}\eta^{\mu\nu}F^2
$$
规范变换存在一个自由度，$A_\rho\to A_\rho+\partial_\rho\varphi$，因此观测量不能含有这种内容.
$$
\begin{aligned}
T^{\mu\nu} &= F^{\mu\rho}(\partial^\nu A_\rho-\partial_\rho A^\nu+\partial_\nu A^\rho)-\frac{1}{4}\eta^{\mu\nu}F^2\\\\
&= F^{\mu\rho}F^\nu{}_\rho - \frac{1}{4}\eta^{\mu\nu}F^2+F^{\mu\rho}\partial_\rho A^\nu
\end{aligned}
$$