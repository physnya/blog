---
title: Lesson 3 等效原理 & 广义协变性原理
createTime: 2026/03/03 15:45:28
permalink: /GR/lesson-3/
---
At every spacetime point in an arbitrary gravitational field, it is possible to choose a local inertial coordinate system, such that, within a sufficient small region of the point in question, the lows of the nature takes the same form as in un-accelerated cartesian coordinate in the absence if gravitation.

::: right

—— Weinberg 书中的等效原理表述

:::

有了等效原理之后，定义一个在 $X$ 时空点的局域参考系 $\xi^\alpha_X$，没有引力时，在其中的固有时应该就是
$$
\text{d}\tau^2 = -\eta_{\alpha\beta}\text{d}\xi^\alpha_X\text{d}\xi^\beta_X
$$
在另一个全局的参考系中，$X$ 这一点的坐标是 $x^\mu(\xi^\alpha_X)$. 把上面的固有时用 chain rule 重写，得到
$$
\text{d}\tau^2 = -\underset{g_{\mu\nu}}{\boxed{\eta_{\alpha\beta}\frac{\partial\xi^\alpha_X}{\partial x^\mu}\frac{\partial\xi^\beta_X}{\partial x^\nu}}}\text{d}x^\mu\text{d}x^\nu = -g_{\mu\nu}(X)\text{d}x^\mu\text{d}x^\nu
$$
前面的部分定义为 $g_{\mu\nu}$，即为度规. 我们还可以计算在这个新的系统中，运动物体的方程的变化. 新的参考系里我们依然有
$$
\begin{aligned}
\frac{\text{d}^2\xi^\alpha_X}{\text{d}\tau^2} &= 0 = \frac{\text{d}}{\text{d}\tau}\left(\frac{\text{d}\xi^\alpha_X}{\text{d}\tau} \right) = \frac{\text{d}}{\text{d}\tau}\left(\frac{\partial\xi^\alpha_X}{\partial x^\mu}\frac{\text{d}x^\mu}{\text{d}\tau} \right)\\\\
&= \frac{\partial\xi_X^\alpha}{\partial x^\mu}\frac{\text{d}^2x^\mu}{\text{d}\tau^2}+\frac{\partial^2\xi_X^\alpha}{\partial x^\mu\partial x^\nu}\frac{\partial x^\mu}{\partial\tau}\frac{\partial x^\nu}{\partial\tau}\\\\
\Longrightarrow&\frac{\text{d}^2x^\lambda}{\text{d}\tau^2} + \frac{\partial x^\lambda}{\partial\xi^\alpha}\frac{\partial^2\xi^\alpha}{\partial x^\mu\partial x^\nu}\frac{\partial x^\mu}{\partial\tau}\frac{\partial x^\nu}{\partial\tau} = 0
\end{aligned}
$$
::: warning

其中跳过了一步：
$$
\frac{\text{d}}{\text{d}\tau}\left(\frac{\partial^2\xi_X^\alpha}{\partial x^\mu} \right) = \underset{0}{\underline{\left.\frac{\partial\xi^\alpha}{\partial X\partial x}\right|_{X = x}\frac{\text{d}X}{\text{d}\tau}}}+\frac{\partial^2\xi^\alpha_X}{\partial x^\mu\partial x^\nu}\frac{\partial x^\mu}{\partial\tau}
$$
因为前面一项中的 $\partial\xi^\alpha/\partial X$ 可以在局域上通过取曲线的切线作为坐标系的方式使得它等于零.

原来的等效原理可以说成：

At every spacetime point $\textcolor{red}{X}$ in an arbitrary gravitational field $\textcolor{red}{x^\mu}$, it is possible to choose a local inertial coordinate system $\textcolor{red}{\xi_X^\alpha}$, such that, within a *sufficient small region* of the point in question, the lows of the nature takes the same form as in un-accelerated cartesian coordinate in the absence if gravitation, $\textcolor{red}{\displaystyle{\left.\frac{\partial\xi^\alpha_X(x)}{\partial X}\right|_{x=X}=0}}$.

:::

下面再来算上节课算的东西：
$$
\begin{aligned}
\frac{\partial g_{\mu\nu}}{\partial x^\rho} &= \frac{\partial}{\partial x^\rho}\left(\eta_{\alpha\beta}\frac{\partial\xi^\alpha_X(x)}{\partial x^\mu}\frac{\partial\xi^\beta_X(x)}{\partial x^\nu} \right)
\end{aligned}
$$
因为我们的假设 $\displaystyle{\left.\frac{\partial\xi^\alpha_X(x)}{\partial X}\right|_{x=X}=0}$，所以这个式子和上节课推出来的结果并无差异，
$$
\Gamma^\mu{}_{\rho\sigma} = \frac{1}{2}g^{\mu\lambda}\left(g_{\rho\lambda,\sigma}+g_{\sigma\lambda,\rho}-g_{\rho\sigma,\lambda} \right)
$$
同时我们可以知道在局域参考系中，$g_{\mu\nu}=\eta_{\mu\nu}$ (平直时空)，$\Gamma^\mu{}_{\lambda\nu} = 0$，$g_{\mu\nu,\lambda}=0$.

---

为了更明确地理解度规的意义，我们来算一些熟悉的概念. 首先明确，$\Gamma$ 实际上是「力」的概念，引力包含在 $\Gamma$ 里面，而 $\Gamma$ 是 $g$ 的导数，所以合理的想法是 $g$ 对应着 potential. 考虑低速近似 $v\ll c=1$，弱场近似 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ 且 $|h_{\mu\nu}|\ll1$，并且场不随时间改变.

Newton 定律
$$
\frac{\text{d}^2x^\lambda}{\text{d}\tau^2}+\Gamma^\lambda{}_{\rho\sigma}\frac{\text{d}x^\rho}{\text{d}\tau}\frac{\text{d}x^\sigma}{\text{d}\tau}=0
$$
因为 $\text{d}x^\rho/\text{d}\tau\to1$，$\text{d}\tau\to\text{d}t$，变为
$$
\begin{aligned}
&\frac{\text{d}^2x^\lambda}{\text{d}t^2}+\Gamma^\lambda{}_{00}=0\\\\
\Longrightarrow&\frac{\text{d}^2x^\lambda}{\text{d}t^2}+\frac{1}{2}g^{\lambda\mu}(g_{0\mu,0}+g_{\mu0,0}-g_{00,\mu})=\frac{\text{d}^2x^\lambda}{\text{d}t^2}-\frac{1}{2}g^{\lambda\mu}g_{00,\mu}=0
\end{aligned}
$$
最终得到
$$
\frac{\text{d}^2x^\lambda}{\text{d}t^2}-\frac{1}{2}\eta^{\lambda\mu}h_{00,\mu}=0
$$
一共四个方程，其中，$\lambda=0$ 的方程是 trivial，只用考虑 $\lambda=i$ 的情况，为
$$
\frac{\text{d}^2x^i}{\text{d}t^2}-\frac{1}{2}h_{00,i}=0\Longleftrightarrow \frac{\text{d}^2x^i}{\text{d}t^2}+\nabla\phi = 0
$$
这就得到 $h_{00}=-2\phi+\text{const.}$，求出 (令常数为零)
$$
g_{00} = -\left(1-\frac{2GM}{r}\right)
$$

---

广义协变性原理：

1. The equation holds in the absence of gravitation. That is, is agrees with laws of special relativity when the metric tensor $g_{\alpha\beta}$ equals the Minkowski tensor $\eta_{\alpha\beta}$ and when the affine connection $\Gamma^\alpha{}_{\beta\gamma}$ vanishes.
2. The equation is generally covariant; that is, it preserves its form under a general coordinate transformation.

我们需要把各个几何量和物理量变成协变的形式. 简单的例子：
$$
\text{d}x'^\mu = \left(\frac{\partial x'^\mu}{\partial x^\alpha} \right)\text{d}x^\alpha
$$
对于度规，
$$
g'_{\rho\sigma} = g_{\mu\nu}\frac{\partial x^\mu}{\partial x'^\rho}\frac{\partial x^\nu}{\partial x'^\sigma}
$$
对于加速度：
$$
\begin{aligned}
\frac{\text{d}U'^\mu}{\text{d}\tau}&=\frac{\text{d}}{\text{d}\tau}\left(\frac{\text{d}x'^\mu}{\text{d}\tau} \right) = \frac{\text{d}}{\text{d}\tau}\left(\frac{\partial x'^\mu}{\partial x^\nu}\frac{\text{d}x^\nu}{\text{d}\tau}\right)\\\\
&=\frac{\partial x'^\mu}{\partial x^\nu}\frac{\text{d}^2x^\nu}{\text{d}\tau^2}+\frac{\text{d}x^\nu}{\text{d}\tau}\frac{\partial^2x'^\mu}{\partial x^\nu\partial x^\rho}\frac{\text{d}x^\rho}{\text{d}\tau}\\\\
&= \frac{\partial x'^\mu}{\partial x^\nu}\frac{\text{d} U^\nu}{\text{d}\tau}+\frac{\partial^2x'^\mu}{\partial x^\nu\partial x^\rho}U^\rho U^\nu
\end{aligned}
$$
这不是一个张量. 下面看联络的坐标变换.

::: tip

题外话：为什么联络一定不是一个张量？因为我们之前说过了，联络在取某些特定坐标系的时候，可以变成零，但是如果一个张量变成零之后就无法变成除了零之外的东西，因为张量的变换是乘一个矩阵.

:::
$$
\begin{aligned}
\Gamma^\mu{}_{\rho\sigma} &= \frac{\partial x^\mu}{\partial\xi^\alpha}\frac{\partial^2\xi^\alpha}{\partial x^\rho\partial x^\sigma}\\\\
\Longrightarrow \Gamma'^\nu{}_{\kappa\lambda}&= \frac{\partial x'^\nu}{\partial\xi^\alpha}\frac{\partial^2\xi^\alpha}{\partial x'^\kappa\partial x'^\lambda} = \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial x^\mu}{\partial\xi^\alpha}\frac{\partial}{\partial x'^\kappa}\left(\frac{\partial\xi^\alpha}{\partial x^\sigma}\frac{\partial x^\sigma}{\partial x'^\lambda}	\right)\\\\
&= \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial x^\mu}{\partial\xi^\alpha}\left(\frac{\partial^2x^\sigma}{\partial x'^\kappa\partial x'^\lambda}\frac{\partial\xi^\alpha}{\partial x^\sigma}+\frac{\partial x^\sigma}{\partial x'^\lambda}\frac{\partial^2\xi^\alpha}{\partial x^\sigma \partial x^\rho}\frac{\partial x^\rho}{\partial x'^\kappa} \right)\\\\
&= \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial x^\sigma}{\partial x'^\lambda}\frac{\partial x^\rho}{\partial x'^\kappa}\Gamma^\mu{}_{\sigma\rho} + \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial^2x^\sigma}{\partial x'^\kappa\partial x'^\lambda}\frac{\partial x^\mu}{\partial x^\sigma}
\end{aligned}
$$
