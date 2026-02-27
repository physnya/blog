---
title: Lesson 1 Lorentz 变换
createTime: 2026/02/27 15:12:34
permalink: /GR/lesson-1-lorentz-transformation/
---
第一节课先来复习一下狭义相对论.

我们面试常问到一个问题，为什么要有 Newton 第一定律？明明 Newton 第二定律 $F=ma$，那么我们 $F=0$ 的时候就直接得到了没有加速度.

> 原因是 Newton 第一定律告诉了我们什么是惯性系.

Newton 的时代仅仅了解了一种力，就是万有引力，Newton 的万有引力定律是
$$
\vec{F} = \frac{GMm}{r^3}\vec{r}
$$
Newton 实际上已经意识到了相对性原理，他知道定律的表述应该和参考系没有关系.

::: tip

题外话，参考系和坐标系的区别在于前者包含了时间.

:::

Newton 想到惯性系之间的变换是 $\vec{r}' = \vec{r}+\vec{v}t$. 如果是非惯性系，那么求两阶导数就会得到一项惯性力，inertial force，物理规律变成了
$$
\vec{F}''= m\ddot{\vec{r}}'' -m\vec{a}
$$
我们在定义上述的 $S\{\vec{r},t\}$，$S'\{\vec{r}',t\}$，$S''\{\vec{r}'',t\}$ 三个参考系时，实际上是在定义一个变换的方式. 假如某些定律在某一个相对性原理 (或者更深层次一点，说某种对称性变换) 下不变，就是满足这个相对性原理的定律，比如 Newton 定律在 Galileo 变换下不变.

在电磁学发展之后，Maxwell 发展了 Maxwell 方程组，
$$
\nabla\cdot\vec{E}=\rho,\quad \nabla\times\vec{E} = \frac{\partial\vec{B}}{\partial t},\quad \nabla\cdot\vec{B}=0,\quad \nabla\times\vec{B} = -\frac{\partial\vec{E}}{\partial t}+\vec{J}
$$
(用的是自然单位制，$k_B=\hbar=\varepsilon_0=\mu_0=c=1$.) 如果没有源，且只有某一种场，那么就没有传播项，因为上述方程都是一阶的；有两个场存在时，可以出现传播，
$$
\nabla\times(\nabla\times\vec{E}) = \nabla(\nabla\cdot\vec{E}) - \nabla^2\vec{E} = -\nabla^2\vec{E} = -\frac{\partial^2\vec{E}}{\partial t^2}
$$
我们并没有说明白 Maxwell 方程组在什么参考系下成立，而且推导出波速就是 $c=1$，也并没有说是在什么参考系下的速度. Newton 虽然提出了 Newton 环，但是仍然认为光是粒子性的，因此并没有想出光速有什么比较特殊的问题. 但是光速不变这件事情导致 Maxwell 方程组不满足 Galileo 变换所对应的那个相对性原理. 一开始 Lorentz 变换的目的正是修正 Maxwell 方程组.

有几种解决方案：第一种朴素的想法是，Maxwell 方程组只在某些特殊的参考系成立，光只能在某种介质 ether 中传播，方程组在介质系中成立. 后来的结果我们都知道，ether 学说并不成立，我们需要其他解决方案，也就是寻找一个变换，使得 Maxwell 方程组在变换下不变，换句话说就是找到电磁学理论的某种对称性.

电磁学理论内容很多，似乎最好下手的点是「光速不变」这个事实. 作为一个速度，光速特殊的点是 $|\text{d}\vec{x}| = \text{d}t$ (自然单位制，而且这是一个数值上的等式.) 要构造的变换需要维持这一特性. 坐标变换表示为 $x^\mu\to x'^\mu(x)$ ($\mu=0,1,2,3$)，对于一个无穷小的变换，有
$$
\text{d}x'^\mu = \frac{\partial x'^\mu}{\partial x^\nu}\text{d}x^\nu
$$
(已经用 Einstein 规则，后续不加解释.)

可以将微元变换写成一个矩阵，$\text{d}x'^\mu = \Lambda^\mu{}_\nu\text{d}x^\nu$. 当然我们先假设这个 $\Lambda^\mu{}_\nu$ 现在和 $x'^\mu$ 无关，后面我们再讨论其他的情况. 由于光速不变，因此要求
$$
0 \equiv\text{d}t^2-\text{d}x^2-\text{d}y^2-\text{d}z^2 \equiv \text{d}t'^2-\text{d}x'^2-\text{d}y'^2-\text{d}z'^2
$$
更广泛地，人们想到是不是可以定义两个事件之间的时空间隔，$\text{d}\tau^2 = \text{d}t^2-\text{d}x^2-\text{d}y^2-\text{d}z^2$，并定义度规 $\eta_{\mu\nu}$，使得
$$
\text{d}\tau^2 = -\eta_{\mu\nu}\text{d}x^\mu\text{d}x^\nu
$$
这里，$\eta$ 对角项为 $(-1,1,1,1)$ (也只有对角项). 对于光，我们要求 $\text{d}\tau^2 = -\eta_{\mu\nu}\text{d}x^\mu\text{d}x^\nu=0$，普通粒子则就是上式，而且我们假设 $\text{d}\tau^2$ 在不同系之间是守恒量，这是光速不变合理的推广. 在 $S'$ 坐标系中，有
$$
\text{d}\tau'^2 = -\eta_{\mu\nu}\text{d}x'^\mu\text{d}x'^\nu = -\eta_{\mu\nu}\Lambda^\mu{}_\alpha\text{d}x^\alpha\Lambda^\nu{}_\beta\text{d}x^\beta = -(\eta_{\mu\nu}\Lambda^\mu{}_\alpha\Lambda^\nu{}_\beta)\text{d}x^\alpha\text{d}x^\beta
$$
我们事先已经知道 $\text{d}\tau = \text{d}\tau'$，因此 $\eta_{\alpha\beta}=\eta_{\mu\nu}\Lambda^\mu{}_\alpha\Lambda^\nu{}_\beta$，任何满足此条件的变换都被称为 Lorentz 变换.

换个写法，
$$
\eta_{\mu\nu} = \eta_{\alpha\beta}\Lambda^\alpha{}_\mu\Lambda^\beta{}_\nu = (\Lambda^T)_\beta{}^\nu\eta_{\alpha\beta}\Lambda^\alpha{}_\mu
$$
取行列式，得到 $\det\eta = \det\eta\cdot(\det\Lambda)^2$，也就是 $\det\Lambda = \pm1$，这是一个重要的性质. 同时，现在的度规是已知的，有
$$
-1 = -(\Lambda^0{}_0)^2 + \sum_{i=1}^3(\Lambda^i{}_0)^2\Longrightarrow \Lambda^0{}_0\geqslant1\text{ or }\Lambda^0{}_0\leqslant-1
$$
考虑几种情况：

| $\det\Lambda$ | $\Lambda^0{}_0$ |                             变换                             |
| :-----------: | :-------------: | :----------------------------------------------------------: |
|      $+$      |       $+$       | $\Lambda^\mu{}_\nu = I\delta^\mu{}_\nu$ (Proper Lorentz Transformation) |
|      $+$      |       $-$       |                         PT 联合变换                          |
|      $-$      |       $+$       |                      P 变换 (对称变换)                       |
|      $-$      |       $-$       |                      T 变换 (时间反演)                       |

实际上只有第一种是真正好的对称性 (另外三种全部被弱相互作用破坏). 令 $\Lambda^\mu{}_\nu = \delta^\mu{}_\nu+\varepsilon^\mu{}_\nu$，代入 Lorentz 变换的性质，
$$
\begin{aligned}
\eta_{\mu\nu}(\delta^\mu{}_\alpha+\varepsilon^\mu{}_\alpha)(\delta^\nu{}_\beta+\varepsilon^\nu{}_\beta) &= \eta_{\alpha\beta}\\\\
\eta_{\mu\beta}\varepsilon^\mu{}_\alpha+\eta_{\alpha\nu}\varepsilon^\nu{}_\beta &= 0
\end{aligned}
$$
这个时候可以定义升降指标，$x_\mu = \eta_{\mu\nu}x^\nu$，$x^\nu = \eta^{\nu\mu}x_\mu$. 上式变为
$$
\boxed{\varepsilon_{\beta\alpha}+\varepsilon_{\alpha\beta}=0}
$$
这说明 Lorentz 变换只有 $6$ 个自由的分量，分别是 $3$ 个空间旋转和 $3$ 个 boosts (也就是「速度」).

为确定这些分量，我们要符合物理实际，也就是低速下应该回到 Newton 理论；另外就是是一个矢量的理论. 先构造一些动力学量，动量定义为
$$
P^\mu := m\frac{\text{d}x^\mu}{\text{d}\tau}\Longrightarrow m\begin{pmatrix}
\text{d}t/\text{d}\tau\\\text{d}\vec{x}/\text{d}\tau
\end{pmatrix} = \begin{pmatrix}
m\\\vec{p}
\end{pmatrix}
$$
下一步构造场 (因为我们很难以定义力，所以先构造场以便后面引入力). 简单来说，场就是空间的函数. 一个标量场应该不随着坐标变换而改变物理实际值，也就是 $\phi'(x')=\phi(x)$. 如果是矢量场，那么仅有矢量的投影发生变化，物理实际也不变，也就是 $V'^\mu(x') = \Lambda^\mu{}_\nu V^\nu(x)$. 有了矢量场，张量场的变换就很自然，只是多了几个指标，
$$
T'^{\mu_1\mu_2\cdots\mu_n}(x') = \Lambda^{\mu_1}{}_{\nu_1}\Lambda^{\mu_2}{}_{\nu_2}\cdots\Lambda^{\mu_n}{}_{\nu_n}T^{\nu_1\nu_2\cdots\nu_n}(x)
$$
说完了「指标在上面」的量 (逆变量)，来看「指标在下面」的量 (协变量)，只需要降指标，
$$
\begin{aligned}
\boxed{V'_\mu(x')} &= \eta_{\mu\nu}V'^\nu(x') = \eta_{\mu\nu}\Lambda^\nu{}_\rho V^\rho(x) = \Lambda_{\mu\rho}V^\rho(x)\\\\
&= \eta_{\mu\nu}\Lambda^\nu{}_\rho\eta^{\rho\sigma}\underset{V^\sigma(x)}{\underline{\eta_{\sigma\kappa} V^\kappa(x)}} = \boxed{\Lambda_\mu{}^\sigma V_\sigma(x)}
\end{aligned}
$$
对于一个一般的张量，举个例子，
$$
T^\mu{}_\rho{}^\nu(x) \longrightarrow T'^\mu{}_\rho{}^\nu(x') = \Lambda^\mu{}_{\tilde\mu}\Lambda_\rho{}^{\tilde\rho}\Lambda^\nu{}_{\tilde\nu}T^{\tilde\mu}{}_{\tilde\rho}{}^{\tilde\nu}(x)
$$
当然，Lorentz 变换并非一直如此简单，比如空间旋转和自旋，这些内容也是 Lorentz 变换所允许的结构.