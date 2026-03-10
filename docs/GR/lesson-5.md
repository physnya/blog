---
title: Lesson 5 Einstein 场方程
createTime: 2026/03/10 15:10:23
permalink: /GR/lesson-5-einstein-equation/
---
## Einstein 场方程

现在我们需要构建场方程. 根据 Newton 的引力定律，场应该是下面的形式：
$$
\nabla^2\phi = -4\pi G\rho
$$
RHS 是 $T^{00}$，为了变成协变的形式，我们需要用 $T^{\mu\nu}$，因此 LHS 也需要协变，也就是需要一个度规的二阶导数这样的张量. 而联络等效于度规的一阶导数级别，因此考虑构造联络的一阶导数. 上节课说到，联络的一阶导数项中会得到下面形式的项：
$$
\frac{\partial\Gamma'^\lambda{}_{\mu\nu}}{\partial x^\kappa}\sim\cdots+\frac{\partial^3x'}{\partial x\partial x\partial x}
$$
像在作业里面提到的一样，我们考虑引入下面的量：
$$
R^\lambda{}_{\mu\nu\kappa} = \frac{\partial\Gamma^\lambda{}_{\mu\nu}}{\partial x^\kappa} - \frac{\partial\Gamma^\lambda{}_{\mu\kappa}}{\partial x^\nu}+\Gamma^\eta{}_{\mu\nu}\Gamma^\lambda{}_{\eta\kappa} - \Gamma^\eta{}_{\mu\kappa}\Gamma^\lambda{}_{\eta\nu}
$$
如果广义相对论是对的，那么应该在局域惯性系 / 没有引力的情况下，都回到狭义相对论的结果. 原先的狭义相对论动力学方程是
$$
\frac{\text{D}U^\lambda}{\text{D}\tau} = 0
$$
现在我们可以加上一项作为广义相对论效应的体现，并加入一些平衡指标的量，得到
$$
\frac{\text{D}U^\lambda}{\text{D}\tau}+fR^\lambda{}_{\mu\nu\kappa}U^\mu U^\nu S^\kappa = 0
$$
其中 $f$ 是一个系数，$S^\kappa$ 是某种自旋 —— 会想到用自旋是因为我们考查粒子的运动，然后需要三个矢量来平衡指标，粒子的有关矢量除了速度之外就剩下自旋.

> 真的有后面一项吗？按照有效理论的观点，在我们研究的能标下引力一直是弱场，大致做一下量纲分析，
> $$
> [R] \sim \text{L}^2,\quad [f] \sim\text{L}^1\Longrightarrow f\sim\frac{1}{m_{\text{planck}}}
> $$
> 这是一个非常小的量，因此我们生活中很难看到这种项.

把 Riemann 曲率张量的指标降下来，并利用 Christoffel 符号的定义，可以得到 $R_{\lambda\mu\nu\kappa}$ 的一些性质，

* 首先是两组指标对称：$R_{\lambda\mu\nu\kappa} = R_{\nu\kappa\lambda\mu}$
* 然后前后每对指标反对称：$R_{\lambda\mu\nu\kappa}=-R_{\lambda\mu\kappa\nu}=-R_{\mu\lambda\nu\kappa}=R_{\mu\lambda\kappa\nu}$
* 旋转对称：$R_{\lambda\mu\nu\kappa}+R_{\lambda\nu\kappa\mu}+R_{\lambda\kappa\mu\nu}=0$

根据这几个条件可以看看它有几个自由度，根据第二条就知道是一个反对称矩阵，第一条又限制为一个 $6\times6$ 方阵，剩下 $21$ 个自由度；第三个条件给出全反对称张量的一个关系：
$$
\varepsilon^{\lambda\mu\nu\kappa}R_{\lambda\mu\nu\kappa} = 0
$$
其中全反对称张量 $\varepsilon$ 定义为顺序指标为 $1$、逆序指标为 $-1$、重复指标为 $0$.

在 local inertial (局域惯性系) 里，我们求导数，
$$
\begin{aligned}
T^\mu{}_{;\nu;\lambda} - T^\mu{}_{;\lambda;\nu} &= \Gamma^\nu{}_{\nu\rho,\lambda}T^\rho-\Gamma^\rho{}_{\lambda\rho,\nu}T^\rho\\\\
&= (\Gamma^\mu{}_{\nu\rho,\lambda}-\Gamma^\mu{}_{\lambda\rho,\nu})T^\rho
\end{aligned}
$$
这是局域惯性系，在别的参考系中只要用 Riemann 张量乘上去即可.

但是场方程中并不直接用 Riemann 张量，因为阶数不对，我们构造 Ricci 张量和曲率标量：
$$
R_{\mu\nu} = g^{\lambda\nu}R_{\lambda\mu\nu\kappa},\quad R = g^{\mu\kappa}R_{\mu\kappa}
$$
其中 Ricci 张量有 $10$ 个自由度，是一个对称张量；$R$ 仅有一个自由度.

Bianchi Identity：
$$
R_{\lambda\mu\nu\kappa;\eta}+R_{\lambda\mu\eta\nu;\kappa} + R_{\lambda\mu\kappa\eta;\nu} = 0
$$
两边对 $\lambda,\nu$ 收缩，也就是乘上 $g^{\lambda\nu}$，得到
$$
R_{\mu\kappa;\eta} - R_{\mu\eta;\kappa} + R^\nu{}_{\mu\kappa\eta;\nu} = 0
$$
再缩并 $g^{\mu\kappa}$，得到
$$
R_{;\eta} - R^\kappa{}_{\eta;\kappa}-R^\nu{}_{\eta;\nu} = 0\Longrightarrow \frac{1}{2}R_{;\eta} - R^\nu{}_{\eta;\nu} = 0
$$
为了 combine 成一项，在第一项上面做一个 $\delta^\nu{}_\eta$，得到最终我们需要的工具
$$
\left(\frac{1}{2}R\delta^\nu{}_\eta-R^\nu{}_\eta\right)_{;\nu} = 0
$$
因为一阶近似下，$g_{00}=-(1+2\phi)$，我们要做到 $\nabla^2g_{00} = -8\pi GT_{00}$，于是左边的量需要是一个二阶张量，之前我们说了 $g_{\mu\nu}$ 二阶导数能够构造的张量只有 Riemann 张量，Riemann 张量给出的二阶张量也只有 $R_{\mu\nu}$ 和 $Rg_{\mu\nu}$ 两种，考虑 LHS 是这俩的组合，为
$$
\text{LHS} = G_{\mu\nu} = C_1R_{\mu\nu} + C_2g_{\mu\nu}R
$$
另外还有一个条件，因为能动张量流守恒，所以 $G^\mu{}_{\nu;\mu}=0$，这恰好对应上了我们前面获得的公式，
$$
G_{\mu\nu} = C_1\left(R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R \right) = -8\pi GT_{\mu\nu}
$$
最后还差一个系数 $8\pi G$，这一点可以在弱场下近似得到，依然是去 local inertial，
$$
R_{\lambda\mu\nu\kappa} = \frac{1}{2}\left[\frac{\partial^2g_{\lambda\nu}}{\partial x^\mu\partial x^\kappa}-\frac{\partial^2g_{\lambda\kappa}}{\partial x^\mu\partial x^\nu} - \frac{\partial^2g_{\mu\nu}}{\partial x^\lambda\partial x^\kappa}+\frac{\partial^2g_{\mu\kappa}}{\partial x^\lambda\partial x^\nu} \right]
$$
然后缩并两次，==过程略==，得到 $G_{00} = 2C_1\nabla^2g_{00}$，至此得到 $C_1=1$，我们获得了 Einstein 方程：

/Theorem/ (==Einstein 场方程==)

> $\mathscr{Einstein}\quad\mathscr{Equation}$ :
> $$
> R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R = -8\pi GT_{\mu\nu}
> $$
> 另一个形式是 (很多时候我们知道物质分布，来求度规) 首先两边 trace 一次，得到
> $$
> R -2R = -8\pi GT
> $$
> 代入回去得到
> $$
> R_{\mu\nu} = -8\pi G\left(T_{\mu\nu}-\frac{1}{2}g_{\mu\nu}T\right)
> $$

::: tip

一些解读：我们来看不同维度空间里的 Riemann 张量和 Ricci 张量的自由度，发现只有在 4 维空间中才开始有 Riemann 张量的自由度高于 Ricci 张量 —— 前者代表引力，后者则是依赖于能动张量的. 这说明只有在 4 维的世界里，引力才能够脱离物质存在，其他维度的引力都是附着在物质本身上的.

:::

## 解 Einstien 场方程

我们知道它是非线性的 —— 正因如此它非常难解，也因此有人以这个方程的求解为生 (Yau？)，而不会有人以求解 Maxwell 方程为生.

直接来看似乎有 10 个独立方程，但是因为流守恒，实际上只有 6 个. 而且这些条件还不足以求解出度规本身，因为和 Maxwell 方程一样，还需要一些 gauge condition. 这里我们用所谓的 harmonic coordinate condition，要求
$$
\Gamma^\lambda \equiv g^{\mu\nu}\Gamma^\lambda{}_{\mu\nu} = 0
$$
::: tip

为什么用这个？之前我们接触过 d'Alembert operator，它是对时空求二阶导数，如果我们定义一个协变的版本
$$
g^{\mu\nu}\phi_{;\nu;\mu} = \Box\phi
$$
然后做坐标变换：
$$
\Box\phi = \left(g^{\lambda\kappa}\phi_{;\lambda}\right)_{;\kappa} = g^{\lambda\kappa}\frac{\partial^2\phi}{\partial x^\lambda\partial x^\kappa} - \Gamma^\lambda\frac{\partial\phi}{\partial x^\lambda}
$$
如果 $\phi$ 本身是坐标，$\phi = x^\mu$，那么 harmonic coordinate condition 给出 $\Box x^\mu = 0$.

:::

下一步需要求解 Einstein 方程的初值问题，先来研究它的每个分量方程是否 dynamical，也就是找方程中有没有 $g_{\mu\nu}$ 关于时间的二阶导数，是动力学还是运动学的. count 下面的等式中的时间导数：
$$
\frac{\partial G^{\mu0}}{\partial t} =-\frac{\partial G^{\mu i}}{\partial x^i} - \Gamma^{\mu}{}_{\nu\lambda}G^{\lambda\nu} - \Gamma^\nu{}_{\nu\lambda} G^{\mu\lambda} = 0
$$
这里没有提供真正的动力学内容，仅提供运动学约束.