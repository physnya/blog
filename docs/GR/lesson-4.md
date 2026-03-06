---
title: Lesson 4 协变的物理定律
createTime: 2026/03/06 15:13:34
permalink: /GR/lesson-4-covariance/
---
下面研究一下张量的性质. 关键是张量的导数的变换，上节课我们说过 $U^\mu$ 的导数变换为
$$
\frac{\partial U'^\mu}{\partial x'^\nu} = \frac{\partial}{\partial x'^\nu}\left(\frac{\partial x'^\mu}{\partial x^\rho}U^\rho\right) = \frac{\partial x'^\mu}{\partial x^\rho}\frac{\partial x^\sigma}{\partial x'^\nu}\frac{\partial U^\rho}{\partial x^\sigma}+\frac{\partial x^\sigma}{\partial x'^\nu}\frac{\partial x'^\mu}{\partial x^\sigma\partial x^\rho}U^\rho
$$
我们从引力的角度就知道上面这个量一定不能是张量，因为如果是那么它在任意系中都可以变成零，引力的作用无法体现. 具有这样性质的东西只有联络，联络的变换上节课我们已经推出来了，是
$$
\Gamma'^\lambda{}_{\mu\nu} = \frac{\partial x'^\lambda}{\partial x^\rho}\frac{\partial x^\sigma}{\partial x'^\mu}\frac{\partial x^\kappa}{\partial x'^\nu}\Gamma^\rho{}_{\sigma\kappa}+\frac{\partial x'^\lambda}{\partial x^\rho}\frac{\partial^2 x^\rho}{\partial x'^\mu\partial x'^\nu}
$$
为了找出其间的关系，考虑：
$$
\frac{\partial x'^\mu}{\partial x^\nu}\frac{\partial x^\nu}{\partial x'^\rho} = \frac{\partial x'^\mu}{\partial x'^\rho} = \delta^\mu{}_\rho
$$
这个式子两边同时求导是 $0$，也就有
$$
\begin{aligned}
&\frac{\partial}{\partial x'^\sigma}\left(\frac{\partial x'^\mu}{\partial x^\nu}\frac{\partial x^\nu}{\partial x'^\rho}\right) = 0\\\\
\Longrightarrow&\frac{\partial^2x'^{\textcolor{red}{\mu}}}{\partial x^\kappa\partial x^\nu}\frac{\partial x^\kappa}{\partial x'^{\textcolor{red}{\sigma}}}\frac{\partial x^\nu}{\partial x'^{\textcolor{red}{\rho}}} + \frac{\partial x'^{\textcolor{red}{\mu}}}{\partial x^\nu}\frac{\partial^2x^\nu}{\partial x'^{\textcolor{red}{\sigma}}\partial x'^{\textcolor{red}{\rho}}} = 0
\end{aligned}
$$
(标红色的是自由的指标) 可以引入一个新的导数，
$$
D_\nu U^\mu \equiv \partial_\nu U^\mu + \Gamma^\mu{}_{\nu\sigma}U^\sigma
$$
这叫作 **协变导数**，可以记作 $U^\mu{}_{;\nu}$ (如果是逗号就是普通导数). 若原来是一个张量，那么其协变导数定义为
$$
T^{\mu\nu}{}_{;\rho} = T^{\mu\nu}{}_{,\rho}+\Gamma^\mu{}_{\rho\sigma}T^{\sigma\nu}+\Gamma^\nu{}_{\rho\sigma}T^{\mu\sigma}
$$
如果是逆变的指标，那么联络前的系数应该是 $-1$.

::: warning

现在你发现你已经会了最基本的计算，后面的计算也就这个难度. 所以我们说只要学了微积分就能学广义相对论，技术上的广义相对论是非常简单的一门课程. 钱学森先生说过，14 岁就能够学会微积分，那么理论上 15 岁你应该能够学广义相对论.

:::

下面我们需要说一些抽象的内容. 现在我们已经有这些量：
$$
x^\mu,\quad\text{d}x^\mu,\quad g_{\mu\nu},\quad \text{d}\tau^2=-g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu
$$
这些都是几何上的内容，原则上我们已经可以定义所谓的切空间，也就是在一个时空点上计算几个切矢量，建立出一个 **平直的** 切空间 (针对时空，这个空间应当是四维的)，同时在这个切空间中定义各种矢量场；对于下一个点，我们仍旧可以定义新的切空间和新的矢量场. 问题在于这里不存在全空间的基矢量场，因此难以做两个不同点切空间中矢量的计算，比如下面的计算无法进行：
$$
\partial_\nu U^\mu \equiv\left.\frac{U^\mu(y)-U^\mu(x)}{y^\nu-x^\nu}\right|_{y\to x}
$$
而我们有「联络」，因此可以定义一套协变微商的方法，进而可以计算上式. 在数学上，只要满足上面联络的变换式的量都可以作为联络，然后导出一种变换法则，但是物理上并不是所有的联络都可用，物理上可用的 $\Gamma$ 被称为 Christoffel 符号：
$$
\Gamma^\mu{}_{\rho\sigma} \equiv \frac{1}{2}g^{\mu\nu}(g_{\nu\rho,\sigma}+g_{\nu\sigma,\rho}-g_{\rho\sigma,\nu})
$$
这是我们 [前几节课](GR/lesson-2-metric/) 利用「等效原理」推出的条件，是符合物理的. 这里可以看出一个性质就是 $\rho,\sigma$ 两个指标对称，这是 Riemann 空间的重要性质，广义相对论研究的 Riemann 空间仅仅是微分几何中的一个小部分而已.

::: tip

这里说一下 taste 的问题：有些人想要研究有挠的时空，这时候我们知道 $\rho,\sigma$ 并不对称，然后问题会变得很复杂. 但是这并不是一个好的研究 —— 好的研究应该是下面两种：

1. 解释一个实验现象
2. 统一解释两个不相容的实验现象

但是没有任何现象说时空有挠率，也没有现象需要用时空有挠来解释，因此我们不应该做这种纯粹的数学游戏.  正所谓：

```:no-line-numbers
Pluralitas non est ponenda sine necessitate.
```

:::

一些计算规则：

*  $(\alpha A^\mu{}_{;\nu}+\beta B^\mu{}_{;\nu}) = (\alpha A^\mu+\beta B^\mu)_{;\nu}$

* $(A^\mu{}_\nu B^\lambda)_{;\rho} = A^\mu{}_{\nu;\rho}B^\lambda+A^\mu{}_\nu B^\lambda{}_{;\rho}$

* $(T^{\mu\lambda}{}_\lambda)_{;\rho} = T^{\mu\lambda}{}_{\lambda,\rho}+\Gamma^\mu{}_{\rho\nu}T^{\nu\lambda}{}_\lambda$

  > 我没懂他板书写个缩并的是何意味

一个很重要的内容是 $g_{\mu\nu;\lambda}=0$.

另外，协变散度：
$$
V^\mu{}_{;\mu} = V^\mu{}_{,\mu}+\Gamma^\mu{}_{\mu\lambda}V^\lambda
$$
其中，
$$
\begin{aligned}
\Gamma^\mu{}_{\mu\lambda} &= \frac{1}{2}g^{\mu\rho}(g_{\rho\mu,\lambda}+g_{\rho\lambda,\mu}-g_{\mu\lambda,\rho}) = \frac{1}{2}g^{\mu\rho}g_{\rho\mu,\lambda} \\\\
&= \frac{1}{\sqrt{g}}\frac{\partial\sqrt{g}}{\partial x^\lambda} =\boxed{\frac{\partial}{\partial x^\lambda}\ln\sqrt{g}},\quad g = -\det(g_{\mu\nu})
\end{aligned}
$$
代入协变散度表达式，得到
$$
V^\mu{}_{;\mu} = \frac{1}{\sqrt{g}}\left(\sqrt{g}\frac{\partial V^\mu}{\partial x^\mu}+\frac{\partial\sqrt{g}}{\partial x^\mu}V^\mu\right) =\frac{1}{\sqrt{g}}\frac{\partial(\sqrt{g}\cdot V^\mu)}{\partial x^\mu}
$$
::: tip

这里要说明一个事情，$g = -\det(g_{\mu\nu})$ 虽然看起来是一个 scalar，但是实际上这被称为 tensor density，因为在变换时它进行下面的变化：
$$
g' = \left\Vert\frac{\partial x'}{\partial x}\right\Vert^{-2}g
$$
权重为 $-2$. 另一个重要的 tensor density 是体积元，
$$
\text{d}^4x' = \left\Vert\frac{\partial x'}{\partial x}\right\Vert^1\text{d}^4x
$$
它的权重是 $1$. 对于 tensor density，我们可以根据权重乘上相应的 $g$ 幂次，就构造出了一个 scalar，比如 $g^{1/2}\text{d}^4x$ 就是一个标量. 从量纲分析的角度，有量纲的量就不是标量，因此我们要乘上 $g$ 的幂次 (对，对吗？)

:::

引入 tensor density 和其标量化之后，我们可以写 Gauss 定理了，比如：
$$
\int\left(g^{1/2}\text{d}^4x\right)\cdot\left(V^\mu\cdot g^{1/2}\right)_{,\mu} \cdot g^{-1/2} = \oint\text{d}S_\mu V^\mu
$$
左边的两个 $g^{\pm1/2}$ 刚好可以 cancel，这是个好事.

之前的 Newton 定律：
$$
\frac{\text{d}U^\mu}{\text{d}\tau} = \frac{\partial U^\mu}{\partial x^\nu}\frac{\partial x^\nu}{\partial\tau}=0
$$
改写成：
$$
\frac{\text{D}U^\mu}{\text{D}\tau} = \frac{\text{d}U^\mu}{\text{d}\tau}+\Gamma^\mu{}_{\nu\rho}U^\nu U^\rho = 0
$$
下面我们把电磁定律改写成协变形式. 对于 Maxwell 方程组，只用把导数改成协变的即可，
$$
F^{\mu\nu}{}_{;\mu} = \frac{1}{\sqrt{g}}\frac{\partial}{\partial x^\mu}\left(\sqrt{g} F^{\mu\nu}\right) = -\rho J^\nu
$$
电磁力为
$$
f^\alpha = eF^{\alpha}{}_{\beta}\frac{\text{d}x^\beta}{\text{d}\tau}
$$
流为
$$
J^\nu = \sum_nQ_n\frac{\text{d}x^\alpha}{\text{d}\tau}\delta^3(x-x_n(t)) = \sum_nQ_n\int g^{-1/2}\delta^4(x-x_n)\text{d}^4x^\alpha_n
$$
势为
$$
F_{\mu\nu} = \partial_\mu A_\nu-\partial_\nu A_\mu = A_{\nu;\mu}-A_{\mu;\nu} = A_{\nu,\mu}-A_{\mu,\nu}
$$

> 这里最后一步用了协变导数和 Christoffel 符号的协变指标对称性.

---

现在我们唯一一个不会算的东西是引力场本身 —— 而且这是困难的. Newton 的引力定律是
$$
\nabla^2\phi = -4\pi G\rho
$$
这里我们需要把所有量都变成协变的. 首先能量密度 ($c=1$，就是质量密度) 为
$$
\rho = T^{00}(x) = \sum_np_n^0\delta^3(\vec{x}-\vec{x}_n(t))
$$
考虑把 Newton 引力定律中 RHS 的那个密度换成能动张量，现在要考虑 LHS 放什么东西. 要求是在 weak field 近似为 Newton 理论. 因为局域惯性系中 $g_{\mu\nu}$ 的一阶导数为零，所以我们 start from 它的二阶导数 —— 这等价于联络的一阶导数.

::: tip

想象你是没学过微分几何的 Einstein，而且 Hilbert 还未加入你的工作... 我们手头能用的工具仅仅只有一个 chain rule.

:::

Christoffel 符号的变换：
$$
\Gamma'^\nu{}_{\lambda\kappa}= \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial x^\sigma}{\partial x'^\lambda}\frac{\partial x^\rho}{\partial x'^\kappa}\Gamma^\mu{}_{\sigma\rho} + \frac{\partial x'^\nu}{\partial x^\mu}\frac{\partial^2x^\sigma}{\partial x'^\kappa\partial x'^\lambda}\frac{\partial x^\mu}{\partial x^\sigma}
$$
考虑导数，
$$
\begin{aligned}
\frac{\partial\Gamma'^\lambda{}_{\mu\nu}}{\partial x'^\kappa} &= \frac{\partial x'^\lambda}{\partial x^\rho}\frac{\partial x^\tau}{\partial x'^\mu}\frac{\partial x^\sigma}{\partial x'^\nu}\frac{\partial x^\xi}{\partial x'^\kappa}\frac{\partial\Gamma^\rho{}_{\tau\sigma}}{\partial x^\xi}+\left[\frac{\partial^2}{\partial x'\partial x'}\cdots\right]\Gamma^\rho{}_{\tau\sigma}\\\\
&\quad-\left[\frac{\partial^2x^\nu}{\partial x'\partial x'}\frac{\partial^2x'}{\partial x\partial x}\cdots \right] - \frac{\partial x^\rho}{\partial x'^\nu}\frac{\partial x^\sigma}{\partial x'^\mu}\frac{\partial x^\xi}{\partial x'^\kappa}\frac{\partial^3x'^\lambda}{\partial x^\rho\partial x^\sigma\partial x^\xi}
\end{aligned}
$$
这坨东西有些对称性，所以我们可以通过补齐的方式 cancel 掉其中的几个复杂的项，
$$
\frac{\partial\Gamma^\lambda{}_{\mu\nu}}{\partial x^\kappa} - \frac{\partial\Gamma^\lambda{}_{\mu\kappa}}{\partial x^\nu} + \Gamma^\eta{}_{\mu\nu}\Gamma^\lambda{}_{\eta\kappa}-\Gamma^\eta{}_{\mu\kappa}\Gamma^\lambda{}_{\eta\nu}
$$
it turns out 这是唯一一个可以构造出来的张量.

