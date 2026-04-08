---
title: Lesson 13 作用量原理
createTime: 2026/04/08 22:47:42
permalink: /GR/lesson-13-action/
---
作用量原理：我们的目的是测地线方程，
$$
\frac{\text{d}^2x^\mu}{\text{d}\tau^2}+\Gamma^\mu{}_{\nu\lambda}\frac{\text{d}x^\nu}{\text{d}\tau}\frac{\text{d}x^\lambda}{\text{d}\tau} = 0
$$
粒子的作用量表达为
$$
I_M = -\sum_nm_n\int_{-\infty}^\infty\text{d}p\left[-g_{\mu\nu}(x_n)\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\right]^{1/2}
$$
我们想通过其变分得到测地线方程，有
$$
\begin{aligned}
\delta I_M &=-\sum_nm_n\int_{-\infty}^\infty\text{d}p\cdot\frac{1}{2}\left[-g_{\mu\nu}(x_n)\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\right]^{-1/2}\Big\{-\frac{\partial g_{\mu\nu}}{\partial x_n^\lambda}\delta x_n^\lambda\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\\\\
&\quad -g_{\mu\nu}(x_n)\left(\frac{\text{d}}{\text{d}p}\delta x_n^\mu\frac{\text{d}}{\text{d}p}x_n^\nu+\frac{\text{d}}{\text{d}p}x_n^\mu\frac{\text{d}}{\text{d}p}\delta x_n^\nu\right) \Big\}\\\\
&= -\sum_nm_n\int_{-\infty}^\infty\text{d}\tau\cdot\frac{1}{2}\Big\{-\frac{\partial g_{\mu\nu}}{\partial x_n^\lambda}\delta x_n^\lambda\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}-g_{\mu\nu}(x_n)\left(\frac{\text{d}}{\text{d}p}\delta x_n^\mu\frac{\text{d}}{\text{d}p}x_n^\nu+\frac{\text{d}}{\text{d}p}x_n^\mu\frac{\text{d}}{\text{d}p}\delta x_n^\nu\right) \Big\}\\\\
&= \cdots\cdots
\end{aligned}
$$
后面过程略，但是最后会得到 Christoffel 符号的定义式.

对于一个带电的体系，上面的作用量加一项场的部分和一项电荷之间相互作用的部分. 其中场的部分是
$$
-\frac{1}{4}\int\text{d}^4x\cdot g^{1/2}(x)F_{\mu\nu}(x)F^{\mu\nu}(x)
$$

> 这里的 $g^{1/2}$ 来源于张量密度，$\text{d}^4x$ 不是普通标量.

为求电荷相互作用的项，首先写出狭义相对论下的流：
$$
J^\mu(x) = \sum_ne_n\frac{\text{d}x_n^\mu}{\text{d}t}\delta^3(x-x_n(t)) = \sum_ne_n\frac{\text{d}x_n^\mu}{\text{d}\tau}\frac{\text{d}\tau}{\text{d}t}\delta^3(x-x_n(t))
$$
简单地把 $3$ 改成 $4$ 就是四维形式，但是并不广义相对论协变，因为 $\delta^4$ 并不是标量，还需要乘一个张量密度的系数，
$$
J^\mu(x) = \sum_ne_n\int\text{d}\tau\cdot g^{1/2}(x_n(\tau))\frac{\text{d}x_n^\mu}{\text{d}\tau}\delta^4(x-x_n(\tau))
$$
由流，得到粒子之间的电磁相互作用，
$$
\begin{aligned}
&\int\text{d}^4x\cdot g^{1/2}(x)A_\mu(x)J^\mu(x)\\\\
=&\int\text{d}\tau\int\text{d}^4x\sum_n\delta^4(x-x_n(\tau))A_\mu(x)e_n\frac{\text{d}x_n^\mu}{\text{d}\tau}\\\\
=&\sum_ne_n\int_{-\infty}^\infty\text{d}p\frac{\text{d}x_n^\mu(p)}{\text{d}p}A_\mu(x_n(p))
\end{aligned}
$$
相对于之前无电荷的作用量，这里多了两项：
$$
\begin{aligned}
I_M &=-\sum_nm_n\int_{-\infty}^\infty\text{d}p\left[-g_{\mu\nu}(x_n)\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\right]^{1/2}-\frac{1}{4}\int\text{d}^4x\cdot g^{1/2}(x)F_{\mu\nu}(x)F^{\mu\nu}(x)\\\\
&\quad -\sum_ne_n\int_{-\infty}^\infty\text{d}p\frac{\text{d}x_n^\mu(p)}{\text{d}p}A_\mu(x_n(p))
\end{aligned}
$$
变分后，第一项和第三项都有 $x_n^\mu$，对于第一项变分之后得到测地线方程，下面考虑对第三项变分，
$$
\begin{aligned}
\delta I_3 &= \sum_n\int_{-\infty}^\infty\text{d}p\cdot\left[\frac{\text{d}\delta x_n^\mu}{\text{d}p} A_\mu(x_n(p))+\frac{\text{d}x_n^\mu}{\text{d}p}\left.\frac{\partial A_\mu}{\partial x^\nu}\right|_{x=x_n(p)}\delta x_n^\mu(p)\right]\\\\
&= \sum_ne_n\int_{-\infty}^\infty\text{d}p\left(-F_{\mu\nu}\frac{\text{d}x_n^\mu}{\text{d}p}\right)\delta x^\nu+\text{boundary terms}
\end{aligned}
$$

> 这里的第一项可以通过 integral by part，
> $$
> \frac{\text{d}\delta x_n^\mu}{\text{d}p}A_\mu(x_n(p))\longrightarrow -\delta x_n^\mu\left.\frac{\partial A_\mu}{\partial x^\nu}\right|_{x=x_n(p)}\frac{\text{d}x_n^\nu(p)}{\text{d}p}
> $$

电磁场部分，
$$
\begin{aligned}
\delta I_A &= \int\text{d}^4x\sqrt{g}\left(-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}\right)
\end{aligned}
$$
其中后面 $F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu$，是反对称的，所以可以写成 $2\partial^\mu A^\nu$. 之后对这个 $A^\nu$ 做变分，
$$
\delta I_A = \int\text{d}^4x\sqrt{g}(-1)(\partial_\mu A_\nu-\partial_\nu A_\mu)\partial^\mu\delta A^\nu = \int\text{d}^4x\sqrt{g} F_{\mu\nu}{}^{;\nu}
$$

---

下面用作用量原理推导场方程.

场的相互作用是 local 的，因为没有长程关联，也就没有双重的积分. 取一个标量的作用量，
$$
I_G = -\frac{1}{16\pi G}\int\text{d}^4x\cdot g^{1/2} R
$$
变分，
$$
\begin{aligned}
\delta\left(g^{1/2}R\right) &= \delta\left(g^{1/2}g^{\mu\nu}R_{\mu\nu}\right)\\\\
&= \delta g^{\mu\nu}g^{1/2}R_{\mu\nu}+\delta g^{1/2}R+g^{1/2}g^{\mu\nu}\delta R_{\mu\nu}
\end{aligned}
$$
最难处理的是最后这一项，因为根本不知道 $R$ 是什么. 但是我们知道 $R_{\mu\nu}$ 没缩并之前是由 $\Gamma$ 构成的，而且 $\delta\Gamma$ 是 tensor (因为使得 $\Gamma$ 不是 tensor 的那一项变分的时候没有了). 因此
$$
\delta R_{\mu\nu} = \text{something's derivative}
$$
这一项的贡献是
$$
\int\text{d}^4x\sqrt{g}\cdot D_\mu \tilde J^\mu
$$
由 Stokes 可以化为面积分，将面积趋于无穷大，此式得零. 因此这一项对运动方程没有贡献.

接下来处理第一项，
$$
g_{\nu\rho}g^{\rho\sigma} = \delta_\mu{}^\sigma \Longrightarrow \delta g_{\mu\rho}g^{\rho\sigma}+g_{\mu\rho}\delta g^{\rho\sigma} = 0
$$
所以 $\delta g^{\rho\sigma}=-g^{\rho\mu}\delta g_{\mu\nu}g^{\nu\sigma}$. 第二项是 $\delta g^{1/2}=\displaystyle{\frac{1}{2}}g^{1/2}g^{\mu\nu}\delta g_{\mu\nu}$. 最终得到
$$
\delta I_G = -\frac{1}{16\pi G}\int\text{d}^4x\left(-R^{\rho\sigma}+\frac{1}{2}g^{\rho\sigma}R\right)g^{1/2}\delta g_{\rho\sigma}
$$
这个变分要和物质场的变分合在一起等于零. 如果场方程要正确，那么物质场对 $g_{\rho\sigma}$ 变分必须得是能动张量. 这听起来很奇怪，不过这件事是正确的. 我们以一群粒子为例，
$$
I_M = -\sum_n m_n\int_{-\infty}^\infty\text{d}p\left(-g_{\mu\nu}\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\right)^{1/2}
$$
对 $g_{\mu\nu}$ 变分，
$$
\begin{aligned}
\delta I_M &= -\sum_nm_n\int_{-\infty}^\infty\text{d}p\cdot\frac{1}{2}\left(-g_{\mu\nu}\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\right)^{-1/2}\left(-\frac{\text{d}x_n^\mu}{\text{d}p}\frac{\text{d}x_n^\nu}{\text{d}p}\delta g_{\mu\nu}(x_n)\right)\\\\
&=\sum_nm_n\int_{-\infty}^\infty\text{d}p\cdot\frac{1}{2}\frac{\text{d}x_n^\mu}{\text{d}\tau}\frac{\text{d}x_n^\nu}{\text{d}\tau}\delta g_{\mu\nu}(x_n)\\\\
&= \int\text{d}^4x\sqrt{g(x)}\sum_nm_n\int_{-\infty}^\infty\text{d}\tau\cdot\frac{1}{2}\frac{\text{d}x_n^\mu}{\text{d}\tau}\frac{\text{d}x_n^\nu}{\text{d}\tau}\cdot\sqrt{g(x)}\delta^4(x-x_n(\tau))\delta g_{\mu\nu}(x)
\end{aligned}
$$
而这个体系的能动张量是
$$
T^{\mu\nu}(x) = \int\text{d}\tau\sum_nm_n\frac{\text{d}x_n^\mu}{\text{d}\tau}\frac{\text{d}x_n^\nu}{\text{d}\tau} g^{1/2}(x)\delta^4(x-x_n(\tau))
$$
验证了结果.

::: tip

现在来思考一下为什么这件事情是对的.
$$
S = \int\text{d}t\cdot L(q,\dot{q})
$$
的变分是
$$
\begin{aligned}
\delta S &= \int_{t_1}^{t_2}\left(\frac{\delta L}{\delta q}\delta q+\frac{\delta L}{\delta \dot{q}}\delta\dot{q}\right)\text{d}t +\underset{\delta S_2}{\underline{L(q(t_2),\dot{q}(t_2))\Delta t-L(q(t_1),\dot{q}(t_1))}}\\\\
&= \int_{t_1}^{t_2}\left[\underset{0}{\underline{\left(\frac{\delta L}{\delta q}\delta q - \frac{\text{d}}{\text{d}t}\frac{\delta L}{\delta \dot{q}}\right)}}-\frac{\text{d}}{\text{d}t}\left(\frac{\delta L}{\delta \dot{q}}\delta q\right)\right]+\delta S_2\\\\
&= \left.\frac{\delta L}{\delta\dot{q}}\delta q\right|^{t_2}_{t_1}+\delta S_2\\\\
&= \left[-\frac{\delta L}{\delta \dot{q}}\dot{q}+L(q(t),\dot{q}(t))\right]^{t_2}_{t_1} = 0
\end{aligned}
$$
:::
