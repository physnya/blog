---
title: Chapter 3 习题
permalink: /self-learn-GR/chapter-3-exercise/
pageLayout: doc
createTime: 2025/09/16 01:40:41
---
## 习题 1

> 说明固有时与坐标时的关系与差别；证明在相对于观测者静止的坐标系中，有
> $$
> \text{d}\tau=\sqrt{-g_{00}}\cdot\text{d}t
> $$

相对于观者静止的坐标系，线元表达为

$$
\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu=-c^2\text{d}\tau^2
$$

观者在这个坐标系中并没有相对速度，所以在一阶下没有空间位移，有

$$
\text{d}s^2=g_{00}\text{d}x^0\text{d}x^0=c^2g_{00}(\text{d}t)^2
$$

这就证明了

$$
\text{d}\tau=\sqrt{-g_{00}}\cdot\text{d}t
$$

## 习题 2

> 在相对论中并不存在真实的标准尺. 固有距离是在约定光速的基础上，通过测量时间得到的. 证明固有距离的公式：
> $$
> \text{d}l^2=\gamma_{ik}\text{d}x^i\text{d}x^k
> $$

考虑两个相邻的空间点 $A,B$，在 $^{(1)}x^0_A$ 时刻 $A$ 点发出光信号，在 $x^0_B$ 时刻到达 $B$ 点，在 $^{(2)}x^0_A$ 时刻回到 $A$ 点. (均为坐标时)

在坐标系下，光速为 $c$，两段时间差应该都满足方程：

$$
\text{d}s^2=g_{00}(\underline{\text{d}x^0})^2+2g_{0i}\underline{\text{d}x^0}\text{d}x^i+g_{ik}\text{d}x^i\text{d}x^k
$$

我们现在发现不知道 $\text{d}s^2$ 是多少，但是学完狭义相对论，想起光传播的路径应当是满足 $\text{d}s^2\equiv0$ 的. 因此可以解这个二次方程，得到

$$
\text{d}x^0=\frac{-g_{0i}\text{d}x^i\pm\sqrt{(g_{0i}g_{0k}-g_{00}g_{ik})\text{d}x^i\text{d}x^k}}{-g_{00}}
$$

同时，$\text{d}x^0=x^0_B-{}^{(1)}x^0_A=x^0_B-{}^{(2)}x^0_A$，因此

$$
\Delta x^0 = \frac{2\sqrt{(g_{0i}g_{0k}-g_{00}g_{ik})\text{d}x^i\text{d}x^k}}{-g_{00}}
$$

但是这是坐标时，不能用来测定固有距离. 在 $B$ 点的瞬时静止系中，应该有

$$
\text{d}\tau = \sqrt{-g_{00}}\cdot\Delta x^0\,,\quad\text{d}l = \frac{1}{2}c\text{d}\tau
$$

所以固有距离应该是

$$
\text{d}l^2=\left(\frac{g_{0i}g_{0k}}{g_{00}}-g_{ik}\right)\text{d}x^i\text{d}x^k=\gamma_{ik}\text{d}x^i\text{d}x^k
$$

证毕.

## 习题 3

> 证明在时空中存在同时面的条件为下面的式子：
> $$
> \oint\Delta x^0=\oint\left(-\frac{g_{0i}}{g_{00}}\right)\text{d}x^i=0\,,\quad g_{0i}=0
> $$

时空中存在同时面，要求用光信号来同步各点的坐标钟. 和上一题的模型一样，但是定义几个时间段和时刻：

$$
\text{d}x^0{}_{(1)}={}^{(1)}x^0_A-x^0_B\,,\quad\text{d}x^0{}_{(2)}={}^{(2)}x^0_A-x^0_B\,,\quad x^0_A=\frac{^{(1)}x^0_A+{}^{(2)}x^0_A}{2}
$$

按理来说在坐标系中两段传播时间应当相同，所以同时性意味着 $x^0_A=x^0_B$，但是因为时空的弯曲，有

$$
x^0_A-x^0_B=\frac{\text{d}x^0{}_{(1)}+\text{d}x^0{}_{(2)}}{2}
$$

要使得存在同时面，应当有 $\text{d}x^0{}_{(1)}+\text{d}x^0{}_{(2)}=0$，化为积分式：

$$
\oint\Delta x^0=\oint\left(-\frac{g_{0i}}{g_{00}}\right)\text{d}x^i=0
$$

简单的一个充分条件是 $g_{0i}=0$，这保证了同时的传递性 (上面仅仅是两个点的同时性得到保证).

## 习题 4

> 证明场方程
> $$
> R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=\kappa T_{\mu\nu}
> $$
> 可以写成
> $$
> R_{\mu\nu}=\kappa\left(T_{\mu\nu}-\frac{1}{2}g_{\mu\nu}T\right)
> $$

两边升一个指标，并缩并：

$$
R^\mu{}_\nu-\frac{1}{2}g^\mu{}_\nu R=\kappa T^\mu{}_\nu\Longrightarrow R-2R=\kappa T\Longrightarrow R=-\kappa T
$$

代入原式，得到

$$
R_{\mu\nu}=\kappa\left(T_{\mu\nu}-\frac{1}{2}g_{\mu\nu}T\right)
$$

## 习题 5

> 质点的四速度为
> $$
> u^\mu=\frac{\text{d}x^\mu}{\text{d}\tau}
> $$
> 试证明 $u^\mu u_\mu=-1$.

因为要证明的量是一个标量，所以和坐标系选取没关系，选择与质点相对静止的一个参考系，得到

$$
\begin{aligned}
u^\mu&=\frac{1}{\sqrt{-g_{00}}}(c,0,0,0)\\\\
u^\mu u_\mu&=g_{\mu\nu}u^\mu u^{\nu} = -c^2
\end{aligned}
$$

选择自然单位制，就是 $u^\mu u_\mu=-1$.

## 习题 6

> 试证真空中的 Einstein 场方程可以写成 $R_{\mu\nu}=0$，Ricci 张量为零的时空一定平直吗？

真空中没能动张量，所以按照习题 4 得到的场方程形式可以写出 $R_{\mu\nu}=0$.

我并不知道 $R_{\mu\nu}=0$ 的时空是否是平直的... 下面是我查找资料后的一些内容：

:::: warning

::: details DeepSeek 的回答 - 问题是「Ricci 张量为零的时空一定是平直的吗？」

不，**Ricci 张量为零的时空不一定是平直的**.

这是一个在广义相对论学习中非常重要且容易产生误解的概念. 我们可以从以下几个方面来理解：

1. 核心原因：黎曼曲率张量与 Ricci 张量的关系

   * **黎曼曲率张量 (Riemann curvature tensor) ** $R^\rho{}_{\sigma\mu\nu}$：这是一个**四阶张量**，它完整地描述了时空的**所有弯曲信息**，包括潮汐力、测地线偏离等所有弯曲效应. 它总共有 20 个独立分量.
   * **Ricci 张量 (Ricci tensor)** $R_{\mu\nu}$ ：这是一个**二阶张量**，它由黎曼曲率张量**收缩**而来： $R_{\mu\nu} = R^\rho{}_{\mu\rho\nu}$ . 它只描述了黎曼曲率张量的一部分信息，具体来说是**物质源引起的时空弯曲** (由爱因斯坦场方程 $G_{\mu\nu} = \kappa T_{\mu\nu}$ 决定) . 它在四维时空中有 10 个独立分量.

   **关键点在于**：Ricci 张量为零 ( $R_{\mu\nu} = 0$ ) 只意味着黎曼曲率张量的那 10 个 "Ricci" 部分为零. 而黎曼曲率张量还有另外 10 个独立分量 (由 **Weyl 张量** 描述) 仍然可以是非零的.

2. Weyl 张量：真空中的纯粹引力

   剩下的这 10 个独立分量由 **Weyl 张量 (Weyl tensor)** $C_{\rho\sigma\mu\nu}$ 描述. Weyl 张量代表了 **真空中的时空弯曲**，即不受局部物质能量影响的引力场部分. 它的性质包括：

   * 它的一切收缩都为零 (例如 $C^\rho{}_{\mu\rho\nu} = 0$ )，所以 Ricci 张量为零不会对它产生影响.
   * 它描述了引力波的传播和宇宙中“纯粹”的引力场 (如黑洞周围的时空弯曲) .

   因此，一个时空的 Ricci 张量为零，只意味着在时空中**没有物质的局部存在** (即 $T_{\mu\nu} = 0$)，但这**并不排除**由远处物质或引力本身产生的弯曲. 这种弯曲完全由 Weyl 张量描述.

3. 一个生动的反例：史瓦西黑洞 (Schwarzschild Black Hole)

   史瓦西解描述了真空中一个静态、球对称黑洞外部的时空. 在这个时空 ($r > 0$ 的区域) 中：

   * **Ricci 张量**: $R_{\mu\nu} = 0$ (因为它是真空解， $T_{\mu\nu} = 0$ ) .
   * **黎曼曲率张量**: $R^\rho{}_{\sigma\mu\nu} \neq 0$ . 例如，潮汐力会使自由落体的物体在径向被拉伸、横向被压缩.
   * **时空弯曲**: 显然不是平直的. 它的度规与闵可夫斯基平直度规完全不同，并且具有事件视界等奇特结构.

**结论**：史瓦西时空是 Ricci 平坦 ( $R_{\mu\nu} = 0$ ) 但**不平直**的完美例子. 它的弯曲完全由 Weyl 张量表征.

**总结与类比**

| 性质                                       |   平直时空 (Minkowski)    | Ricci 平坦但弯曲的时空 (如史瓦西时空) |
| :----------------------------------------: | :-----------------------: | :-----------------------------------: |
| **黎曼曲率张量** $R^\rho{}_{\sigma\mu\nu}$ | $=0$ (所有分量均为零) | $\neq 0$                               |
| **Ricci 张量** $R_{\mu\nu}$                |           $=0$            | $=0$                              |
| **Weyl 张量** $C_{\rho\sigma\mu\nu}$       |           $=0$            | $\neq 0$                               |
| **物质分布** $T_{\mu\nu}$                  |           $=0$            | $=0$ (真空)                           |
| **时空性质**                               |        无任何弯曲         | 存在由 Weyl 张量描述的真空引力场      |

**一个简单的类比**：想象一下橡皮膜的表面.

- **平直时空**：就像一张完全拉平、没有任何起伏的橡皮膜.
- **Ricci 平坦但弯曲的时空**：就像一张被一个重物 (如球) 压弯的橡皮膜，但**我们只看重物不接触的区域**. 在这个区域，没有直接的压力 (相当于 $T_{\mu\nu} = 0, R_{\mu\nu} = 0$ )，但膜的表面仍然是弯曲的 (相当于 $R^\rho{}_{\sigma\mu\nu} \neq 0$ )，这个弯曲是由远处 (重物所在位置) 的“源”造成的.

因此，**Ricci 平坦 ( $R_{\mu\nu} = 0$ ) 是时空平直 ( $R^\rho{}_{\sigma\mu\nu} = 0$ ) 的必要但不充分条件**. 要判断时空是否平直，必须检查完整的黎曼曲率张量是否为零.

:::

另外，[triint](https://chaoli.club/index.php/member/13668) 在 [这个帖子](https://chaoli.club/index.php/11308) 里说这个和 Calabi - Yau 流形有些关系，于是我简单去看了看有关的内容 (感觉数学还是比较多，所以没细看). 粗浅的理解是，Calabi - Yau manifold 本身就是 Yau 证明了 Calabi 的猜想「**第一陈类为 R 的紧致的凯勒流形上，是否存在唯一个凯勒度规使得其里奇形式恰好是 R？**」，换言之，这个流形的定义中就包含所谓的 $R_{\mu\nu} = 0$.

参考文献： [+1]

[+1]:[长篇科普：卡拉比 — 丘成桐定理，及其物理意义（上）| 知乎](https://zhuanlan.zhihu.com/p/380529964)

我先收藏了不少有关的综述到 Zotero 里，之后再细品一番.

::::

## 习题 7

> 从运动方程
> $$
> \frac{\text{d}}{\text{d}\tau}(mu^\mu)+m\Gamma^\mu{}_{\alpha\beta}u^\alpha u^\beta=0
> $$
> 出发，用 Newton 近似说明在广义相对论中引力质量就是惯性质量.

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Newton 近似要求 $g_{\mu\nu}\to\eta_{\mu\nu}$，这时
$$
\Gamma^\lambda{}_{\alpha\beta}=\frac{1}{2}\eta^{\lambda\rho}(h_{\alpha\rho,\beta}+h_{\rho\beta,\alpha}-h_{\alpha\beta,\rho})
$$
这里的 $h_{\alpha\beta}=g_{\alpha\beta}-\eta_{\alpha\beta}$，$|h_{\alpha\beta}|\ll1$. 上述方程的空间分量化为
$$
\frac{\text{d}}{\text{d}\tau}\left(m\frac{\text{d}x^i}{\text{d}\tau}\right)+m\Gamma^i{}_{00}\left(\frac{\text{d}x^i}{\text{d}\tau}\right)^2=0
$$
这里的两项，分别代表了动量对时间的导数，以及引力产生的时空弯曲效应，里面的「$m$」分别是惯性质量和引力质量，这就说明了两者是同样的物理量.

## 习题 8

> 证明在弯曲时空中，电磁场方程为
> $$
> \Box A_\mu-R_{\mu\alpha}A^\alpha=-\frac{4\pi}{c}J_\mu
> $$
> 其中描述曲率的 Ricci 张量也出现了.

我们已经知道如下的式子：
$$
\begin{aligned}
F^{\mu\nu}{}_{;\nu} &= \frac{1}{\sqrt{-g}}\frac{\partial}{\partial x^\nu}(F^{\mu\nu}\sqrt{-g})=\frac{4\pi}{c}J^\mu\\\\
F_{\mu\nu} &= A_{\nu;\mu}-A_{\mu;\nu}
\end{aligned}
$$
后者代入前者，得到
$$
A_{\nu;\mu}{}^{;\nu}-A_{\mu;\nu}{}^{;\nu}=\frac{4\pi}{c}J_\mu
$$
而已知
$$
A_{\lambda;\mu;\nu}-A_{\lambda;\nu;\mu}=R^\rho{}_{\lambda\mu\nu}A_\rho-2\Gamma^\rho{}_{[\mu\nu]}A_{\lambda;\rho}
$$
对后面这个等式两边升 $\nu$ 指标，利用挠率为零并移项，得到
$$
A_{\lambda;\mu}{}^{;\nu}=A_{\lambda}{}^{;\nu}{}_{;\mu}+R^\rho{}_{\lambda\mu}{}^\nu A_\rho
$$
代回，于是
$$
A_\nu{}^{;\nu}{}_{;\mu}+R^\rho{}_{\nu\mu}{}^\nu A_\rho-A_{\mu;\nu}{}^{;\nu}=\frac{4\pi}{c}J_\mu
$$
因为使用了 Lorentz 规范，所以 $A_\nu{}^{;\nu}=0$，第一项可以扔掉；剩下的工作就是处理指标：
$$
\begin{aligned}
A_{\mu;\nu}{}^{;\nu}-R^\rho{}_{\nu\mu}{}^\nu A_\rho &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\rho\sigma}g^{\nu\gamma}R_{\sigma\nu\mu\gamma}\cdot g_{\rho\alpha}A^\alpha &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\nu\gamma}R_{\sigma\nu\mu\gamma}\cdot A^\alpha\cdot(g^{\rho\sigma}g_{\rho\alpha}) &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\nu\gamma}R_{\sigma\nu\mu\gamma}\cdot A^\alpha\cdot\delta^\sigma{}_{\alpha} &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\nu\gamma}R_{\sigma\nu\mu\gamma}\cdot A^\sigma &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\nu\gamma}R_{\mu\gamma\sigma\nu}\cdot A^\sigma &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-g^{\nu\gamma}R_{\gamma\mu\nu\sigma}\cdot A^\sigma &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-R^\nu{}_{\mu\nu\sigma}\cdot A^\sigma &= -\frac{4\pi}{c}J_\mu\\\\
\Box A_\mu-R_{\mu\sigma}\cdot A^\sigma &= -\frac{4\pi}{c}J_\mu\\\\
\end{aligned}
$$
证毕.

## 习题 9

> 在弱引力场的线性近似情况下，我们把度规表示成
> $$
> g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}
> $$
> 其中 $|h_{\mu\nu}|\ll1$，线性近似理论中只保留 $h_{\mu\nu}$ 中的线性项. 为了表达引力场方程的方便，我们定义
> $$
> \bar{h}_{\mu\nu}\equiv h_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}h
> $$
> 试证明，它的逆变换是
> $$
> \bar{\bar{h}}_{\mu\nu}\equiv\bar{h}_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}\bar{h}=h_{\mu\nu}
> $$

感觉好像算一下就可以了？直接计算：
$$
\begin{aligned}
\bar{\bar{h}}_{\mu\nu}&=h_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}h-\frac{1}{2}\eta_{\mu\nu}\left(h^\mu{}_\mu-\frac{1}{2}\eta^\mu{}_\mu h\right)\\\\
&=h_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}h-\frac{1}{2}\eta_{\mu\nu}h+\frac{1}{4}\cdot4\eta_{\mu\nu}h\\\\
&=h_{\mu\nu}
\end{aligned}
$$
证毕.

## 习题 10

> 线性近似理论只保留 $h_{\mu\nu}$ 中的线性项，于是有
> $$
> \begin{aligned}
> \Gamma^\mu{}_{\alpha\beta}&=\frac{1}{2}\eta^{\mu\nu}(h_{\alpha\nu,\beta}+h_{\beta\nu,\alpha}-h_{\alpha\beta,\nu})\\\\
> &=\frac{1}{2}(h_\alpha{}^\mu{}_{,\beta}+h_\beta{}^\mu{}_{,\alpha}-h_{\alpha\beta}{}^{,\mu})
> \end{aligned}
> $$
> 线性近似理论中张量指标的升降是借助 Minkowski 度规实现的. 线性化之后的 Ricci 张量也很简单：
> $$
> \begin{aligned}
> R_{\mu\nu}&=\Gamma^\lambda{}_{\mu\nu,\lambda}-\Gamma^\lambda{}_{\mu\lambda,\nu}\\\\
> &=-\frac{1}{2}(h_{\mu\nu}{}^{,\alpha}{}_{,\alpha}+h^\alpha{}_{\alpha,\mu,\nu}-h^\alpha{}_{\mu,\nu,\alpha}-h^\alpha{}_{\nu,\mu,\alpha})
> \end{aligned}
> $$
> 试证明
> $$
> \bar{R}_{\mu\nu}\equiv R_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}R=8\pi GT_{\mu\nu}
> $$
> 具体化为
> $$
> \bar{h}_{\mu\nu}{}^{,\alpha}{}_{,\alpha}+\eta_{\mu\nu}\bar{h}_{\alpha\beta}{}^{,\alpha,\beta}-\bar{h}_{\mu\alpha}{}^{,\alpha}{}_{,\nu}-\bar{h}_{\nu\alpha}{}^{,\alpha}{}_{,\mu}=-16\pi GT_{\mu\nu}
> $$

::: danger

实际上有
$$
R_{\mu\nu}=\frac{1}{2}\Box\bar{h}_{\mu\nu}
$$
:::

有：
$$
\begin{aligned}
R&=-\frac{1}{2}\eta^{\mu\nu}(h_{\mu\nu}{}^{,\alpha}{}_{,\alpha}+h^\alpha{}_{\alpha,\mu,\nu}-h^\alpha{}_{\mu,\nu,\alpha}-h^\alpha{}_{\nu,\mu,\alpha})\\\\
&=-\frac{1}{2}(\partial^\alpha\partial_\alpha h+\eta^{\mu\nu}\partial_\mu\partial_\nu h-\eta^{\mu\nu}\partial_\nu\partial_\alpha h^\alpha{}_\mu-\eta^{\mu\nu}\partial_\mu\partial_\alpha h^\alpha{}_\nu)\\\\
&=-\frac{1}{2}(2\Box h-2h_{\mu\nu}{}^{,\mu,\nu})\\\\
&=h_{\mu\nu}{}^{,\mu,\nu}-\Box h
\end{aligned}
$$
直接算：
$$
\begin{aligned}
&-2R_{\mu\nu}+\eta_{\mu\nu}R = -16\pi GT_{\mu\nu}\\\\
&(h_{\mu\nu}{}^{,\alpha}{}_{,\alpha}+h^\alpha{}_{\alpha,\mu,\nu}-h^\alpha{}_{\mu,\nu,\alpha}-h^\alpha{}_{\nu,\mu,\alpha})+\eta_{\mu\nu}\Box h-\eta_{\mu\nu}h_{\mu\nu}{}^{,\mu,\nu}=-16\pi GT_{\mu\nu}
\end{aligned}
$$
最终化简结果是要证明的式子.

## 习题 11

> 证明对于静态时空，
> $$
> \begin{aligned}
> R_{\mu\nu}&=\Gamma^\lambda{}_{\mu\nu,\lambda}-\Gamma^\lambda{}_{\mu\lambda,\nu}\\\\
> &=-\frac{1}{2}(h_{\mu\nu}{}^{,\alpha}{}_{,\alpha}+h^\alpha{}_{\alpha,\mu,\nu}-h^\alpha{}_{\mu,\nu,\alpha}-h^\alpha{}_{\nu,\mu,\alpha})
> \end{aligned}
> $$
> 可以化为
> $$
> R_{00}=-\frac{1}{2}h_{00,i,i}\,,\quad R_{0i}=\frac{1}{2}(h_{k0,i,k}-h_{0i,k,k})\\
> R_{ij}=-\frac{1}{2}(-h_{00,i,j}+h_{kk,i,j}-h_{ki,j,k}-h_{kj,i,k}+h_{ij,k,k})
> $$

因为是静态，所以那些「$,0$」的项全部为零，就得到上面只有空间分量的表达式.
