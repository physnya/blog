---
title: Riemann 几何与张量分析
permalink: /self-learn-GR/chapter-2/
pageLayout: doc
createTime: 2025/08/15 14:09:31
---
::: warning

本章内容很多，所以估计会多次更新.

:::

## 狭义相对论中的张量

狭义相对论研究四维 Minkowski 时空 (一种平直时空)，在这样的时空中，用张量的语言表示 Lorentz 变换：

$$
x'_\mu = a_{\mu\alpha}x_\alpha\,,\quad\mu,\alpha = 1,2,3,4;\quad x_4 = \text{i}ct
$$

或写成：

$$
\text{d}x'_\mu = a_{\mu\alpha}\text{d}x_\alpha
$$

「线性」体现在变换矩阵元 $a_{\mu\alpha}$ 不依赖于坐标. 上面的式子已经采用了 Einstein 求和惯例.

光速不变原理要求，时空间隔在 Lorentz 变换下保持不变：
$$
\text{d}s^2=\text{d}x'_\mu\text{d}x'_\mu=\text{d}x_\alpha\text{d}x_\alpha
$$
因此变换矩阵一定是正交矩阵，满足 $\tilde{\bold{a}}=\bold{a}^{-1}$. ($\bold{a}$ 的转置矩阵记为 $\tilde{\bold{a}}$).

张量的定义有两个要点：分量个数 & 在坐标变化下按照特定的规律变换.

狭义相对论中：

1. 零阶张量 (标量) 定义为 Lorentz 变换下的不变量，
   $$
   U'(\bold{x}')=U(\bold{x})
   $$
   (这里 ``\bold`` 表示数组 $x_\mu(')$，$\mu=1,2,3,4$). 标量只有一个分量.

2. 一阶张量 (矢量) 定义为由四个分量组成的一个量，它在 Lorentz 变换下像坐标微分一样变换：
   $$
   V'_\mu = a_{\mu\alpha}V_\alpha\,,\quad\mu,\alpha=1,2,3,4
   $$

3. 二阶张量用下式定义：
   $$
   T'_{\mu\nu} = a_{\mu\alpha}a_{\nu\beta}T_{\alpha\beta}
   $$

4. $n$ 阶张量的变换方式是：
   $$
   T'_{\mu\nu\cdots\lambda} = a_{\mu\alpha}a_{\nu\beta}\cdots a_{\lambda\sigma}T_{\alpha\beta\cdots\sigma}
   $$

几个具体的张量和 Lorentz 变换的形式：

(1) Lorentz 变换：
$$
\begin{pmatrix}
\text{d}x_1'\\\text{d}x_2'\\\text{d}x_3'\\\text{d}x_4'
\end{pmatrix} = \begin{pmatrix}
\gamma&0&0&\text{i}\beta\gamma\\
0&1&0&0\\
0&0&1&0\\
-\text{i}\beta\gamma&0&0&\gamma
\end{pmatrix}\begin{pmatrix}
\text{d}x_1\\\text{d}x_2\\\text{d}x_3\\\text{d}x_4
\end{pmatrix}
$$
(2) 电磁四矢：
$$
A_\mu = \begin{pmatrix}
A_1&A_2&A_3&A_4
\end{pmatrix}
$$
这是一个矢量，前三个分量是磁矢势的三个空间分量，最后一个分量
$$
A_4=\frac{\text{i}}{c}\Phi
$$
(3) 电磁场强：
$$
F_{\mu\nu} = \begin{pmatrix}
0&B_3&-B_2&-\frac{\text{i}}{c}E_1\\
-B_3&0&B_1&-\frac{\text{i}}{c}E_2\\
B_2&-B_1&0&-\frac{\text{i}}{c}E_3\\
\frac{\text{i}}{c}E_1&\frac{\text{i}}{c}E_2&\frac{\text{i}}{c}E_3&0
\end{pmatrix}\,,\quad\mu,\nu=1,2,3,4
$$
这是一个二阶反对称张量.

Lorentz 变换是正交线性变换，它的正交性保证了变换矩阵元满足：

<a id="1"></a>
$$
a_{\mu\alpha}a_{\mu\beta}=\delta_{\alpha\beta}\\
\tilde{a}_{\alpha\mu}\tilde{a}_{\alpha\nu}=a_{\mu\alpha}a_{\nu\alpha}=\delta_{\mu\nu}\tag{1}
$$
但是此式不意味着变换矩阵对称，Lorentz 变换矩阵只是线性复正交和 Hermite 的.

::: warning

说明：

这里用的是 Lorentz boost 的虚时间表示，这样的表示用的是 $x_4=\text{i}ct$，能够把 Minkowski 空间变成真正的 Euclidean 空间. 在这样的表示下，Lorentz boost (换句话说，坐标的平移) 是不对称的，而且复正交.

但是标准 Lorentz 变换是用如下的表示：
$$
\begin{pmatrix}
\text{d}x_1'\\\text{d}x_2'\\\text{d}x_3'\\\text{d}x_4'
\end{pmatrix} = \begin{pmatrix}
\gamma&-\beta\gamma&0&0\\
-\beta\gamma&\gamma&0&0\\
0&0&1&0\\
0&0&0&1
\end{pmatrix}\begin{pmatrix}
\text{d}x_1\\\text{d}x_2\\\text{d}x_3\\\text{d}x_4
\end{pmatrix}
$$
这里用的是
$$
\begin{pmatrix}
x_1\\x_2\\x_3\\x_4
\end{pmatrix}=\begin{pmatrix}
ct\\x\\y\\z
\end{pmatrix}
$$

是实坐标的，显然其变换矩阵 (boost 部分) 是对称的，而且不是复正交的，而是伪正交的.

同时，标准 Lorentz 变换的「伪正交」条件是要求变换矩阵满足：
$$
\Lambda^T\eta\Lambda = \eta
$$
其中 $\eta$ 是 Minkowski 度规，$\eta=\operatorname{diag}(1,-1,-1,-1)$.

另外，Lorentz 变换不只有 boost (沿某一条轴的坐标平移)，还有旋转的操作. 例如在标准 Lorentz 变换的表示中，一个绕 $y$ 轴的 $90\degree$ 旋转是：
$$
\Lambda=\begin{pmatrix}
1&0&0&0\\
0&0&0&1\\
0&0&1&0\\
0&-1&0&0
\end{pmatrix}
$$
这种变换矩阵不是对称的，但是是伪正交的.

:::

## 广义相对论中的张量

因为广义相对论讨论的不是平直的时空，所以这里的坐标变换通常是非线性的，一般也不是正交的. 但是目前可以先丢开空间的平直性，在「仿射空间」中讨论一般的坐标变换.

> 「仿射」指线性，如果矢量满足可加性，则这个空间就是仿射空间；但是仿射空间中没有定义零矢量、曲率和挠率，所以我们不能讨论这个空间是不是平直的.

::: warning

上面是书中的定义. 实际上严谨的仿射空间定义是：

/Definition/

> 设 $V$ 是域 $\mathbb{F}$ 上的矢量空间，且 $\mathbb{A}$ 是一个集合，其元素称作 **点**，并用 $\dot{p},\dot{q},\dot{r},\cdots$ 表示. 称 $\mathbb{A}$ (或 $(\mathbb{A},V)$) 是和 **$V$ 相伴 (连带) 的仿射空间**，若给定 Descartes 积 $\mathbb{A}\times V$ 到 $\mathbb{A}$ 的映射 (记该映射的像 $f(\dot{p},v)$ 为 $\dot{p}+v$)：
> $$
> f:(\dot{p},v)\mapsto\dot{p}+v
> $$
> 其具有性质：
>
> 1. $\forall\dot{p}\in\mathbb{A}$，$\forall u,v\in V$，有 $\dot{p}+0=\dot{p}$，$(\dot{p}+u)+v=\dot{p}+(u+v)$.
>
>    (存在零元，有结合律)
>
> 2. $\forall\dot{p},\dot{q}\in\mathbb{A}$，有且仅有一个矢量 $v\in V$ 使得 $\dot{p}+v=\dot{q}$. 通常用 $\overrightarrow{pq}$ 或者 $\dot{q}-\dot{p}$ 代表矢量 $v$.
>
> 并把 $V$ 的维数 $n$ 称为 $\mathbb{A}$ 的 **维数**，有时记成 $\mathbb{A}^n$.[^1]

Wiki 上有一个帮助理解的非正式描述：

> 仿射空间像是没有原点的向量空间，其中的向量只有方向和大小.
>
> 若有甲、乙两人，甲认为空间的原点在 $o$ 点，乙则认为原点在点 $p$. 现在要求两个向量 $a$ 和 $b$ (用点来表示向量，这里的向量指的是点和原点之间的差向量) 的和，那么两个人得到的结果不会是一样的.
>
> 另外，若两人分别计算 $a$ 和 $b$ 的线性组合，要求系数和为 $1$，那么两人将得到相同的结果. (就像我们高中所学的向量末端共线)
>
> 仿射空间就是要以相同的线性组合来描述同样的点，所以仿射组合的系数构成了一个「重心坐标」.[^2]

:::

设四维仿射空间中的广义坐标变换：
$$
x'^\mu=x'^\mu(x^\nu)\,,\quad\mu,\nu=1,2,3,4
$$
联系了两组广义坐标 $x'^\mu,x^\nu$，其中 $x^4=\text{i}ct$. 这个函数关系可能很复杂，但是可以写出坐标微分的变换公式：
$$
\text{d}x'^\mu=\frac{\partial x'^\mu}{\partial x^\alpha}\text{d}x^\alpha
$$
仍然是重复指标代表求和，这样的重复指标又称傀儡指标 / 傀标.

::: tip

在广义坐标变换中，傀标只能由一个上标和一个下标组成.

(在分母上的上标算下标，在分母上的下标算上标)

:::

如果变换矩阵行列式不为零：
$$
\det\left|\frac{\partial x'^\mu}{\partial x^\alpha}\right| \neq 0\text{ or }\infty
$$

则逆变换存在，
$$
\text{d}x^\alpha=\frac{\partial x^\alpha}{\partial x'^\mu}\text{d}x'^\mu
$$
变换系数满足
$$
\begin{aligned}
\frac{\partial x^\alpha}{\partial x'^\mu}\cdot\frac{\partial x'^\mu}{\partial x^\beta}=\frac{\partial x^\alpha}{\partial x^\beta}=\delta^\alpha{}_\beta\\\\
\frac{\partial x'^\mu}{\partial x^\alpha}\cdot\frac{\partial x^\alpha}{\partial x'^\nu}=\frac{\partial x'^\mu}{\partial x'^\nu}=\delta^\mu{}_\nu
\end{aligned}
$$

> 关于「上」和「下」标的问题，可见[^3][^4].
>
> 另外，上下标有先后顺序，这仅仅是来源于上标下标需要排成一行，不能有重合的.

在广义相对论中，Lorentz 变换 $a_{\mu\nu}$ 对应：
$$
a_{\mu\nu}\sim\frac{\partial x'^\mu}{\partial x^\nu}\,,\quad(\bold{a}^{-1})_{\nu\mu}\sim\frac{\partial x^\nu}{\partial x'^\mu}
$$
但是因为广义相对论中的广义变换矩阵不是正交矩阵，所以逆矩阵的形式更加复杂，也不一定满足 <a href="#1">(1)</a>.

总结和狭义相对论的区别：

1. 变换矩阵不一定是正交矩阵；

2. 变换矩阵的矩阵元不再是常数.

   (当然因为是逐点定义，所以微分形式的变换在某一个点处还是常数)

---

广义相对论中，零阶张量的定义仍然不变.

一阶逆变张 (矢) 量定义为「在广义坐标变换下像坐标微分一样变换的量」，
$$
V'^\mu=\frac{\partial x'^\mu}{\partial x^\alpha}V^\alpha
$$
==坐标微分才是矢量，坐标本身不一定！==

二阶逆变张量：「在广义坐标变换下按照下面规律变换的量」
$$
T'^{\mu\nu}=\frac{\partial x'^\mu}{\partial x^\alpha}\frac{\partial x'^\nu}{\partial x^\beta}T^{\alpha\beta}
$$

$n$ 阶逆变张量：
$$
T'^{\mu\nu\cdots\lambda} = \frac{\partial x'^\mu}{\partial x^\alpha}\frac{\partial x'^\nu}{\partial x^\beta}\cdots\frac{\partial x'^\lambda}{\partial x^\sigma}T^{\alpha\beta\cdots\sigma}
$$
相对应地，有协变张量的定义，零阶定义不变，其他阶数有：
$$
\begin{aligned}
V'_\mu &= \frac{\partial x^\alpha}{\partial x'^\mu}V_\alpha\\\\
T'_{\mu\nu} &= \frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x^\beta}{\partial x'^\nu}T_{\alpha\beta}\\\\
T'_{\mu\nu\cdots\lambda} &= \frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x^\beta}{\partial x'^\nu}\cdots\frac{\partial x^\sigma}{\partial x'^\lambda}T_{\alpha\beta\cdots\sigma}
\end{aligned}
$$

协变张量和逆变张量的变换矩阵互为逆矩阵.

另外，还有混合张量，既有逆变指标又有协变指标，比如：
$$
T'^{\mu_1\mu_2\cdots\mu_p}_{\nu_1\nu_2\cdots\nu_q}=\frac{\partial x'^{\nu_1}}{\partial x^{\alpha_1}}\cdots\frac{\partial x'^{\mu_p}}{\partial x^{\alpha_p}}\cdot\frac{\partial x^{\beta_1}}{\partial x'^{\nu_1}}\cdots\frac{\partial x^{\beta_q}}{\partial x'^{\nu_q}}T^{\alpha_1\alpha_2\cdots\alpha_p}_{\beta_1\beta_2\cdots\beta_q}
$$
(其实应该写成 $T'^{\mu_1\mu_2\cdots\mu_p}{}_{\nu_1\nu_2\cdots\nu_q}$ 来表示先后顺序的… 不过这样疑似太长了)

有 $p$ 个逆变指标 & $q$ 个协变指标的张量称为 $(p+q)$ 阶混合张量 / $(p,q)$ 阶张量. 很明显，Kronecker 符号 $\delta^\alpha{}_\beta$ 是 $(1,1)$ 阶混合张量. Kronecker 符号满足：在任何坐标系下均有
$$
\delta^\alpha{}_\beta=\begin{cases}
1&\alpha=\beta\\\\
0&\alpha\neq\beta
\end{cases}
$$
可以在一个坐标系中定义，之后用混合张量的变换式得到任何坐标系下的 Kronecker 符号定义：
$$
\delta'^\mu{}_\nu=\frac{\partial x'^\mu}{\partial x^\alpha}\cdot\frac{\partial x^\beta}{\partial x'^\nu}\delta^\alpha{}_\beta=\frac{\partial x'^\mu}{\partial x^\alpha}\cdot\frac{\partial x^\alpha}{\partial x'^\nu}=\frac{\partial x'^\mu}{\partial x'^\nu}=\begin{cases}
1&\mu=\nu\\\\
0&\mu\neq\nu
\end{cases}
$$
因为狭义相对论是在线性正交变换下的，所以只有一类张量；但是广义相对论中有两类.

## 张量代数

(1) 加减法：必须同阶才能相加减，定义为相应分量相加减.

(2) 乘法：指「外乘」，外乘运算使张量阶数升高：
$$
C^{\mu\nu}_{\alpha\beta\gamma}=A^\mu_{\alpha\beta}\cdot B^{\nu}_{\gamma}
$$

一个 $(p_1,q_1)$ 阶张量和一个 $(p_2,q_2)$ 阶张量相乘得到一个 $(p_1+p_2,q_1+q_2)$ 阶张量.

(3) 缩并：让混合张量的一对上下标成为傀标，作求和. 比如 $C^{\mu\nu}_{\rho\tau\lambda}$ 对 $\mu$ 和 $\tau$ 的缩并是
$$
C^\nu_{\rho\lambda}=C^{\mu\nu}_{\rho\mu\lambda}
$$
混合张量才能够缩并，缩并使张量的阶降低.

(4) 标积 (内积)：外乘后再缩并，也就是
$$
C=A^\mu B_\mu
$$
内积只能在逆变和协变之间进行.

(5) 对称性：关于一对上标 / 一对下标定义，若
$$
T^{\mu\nu\sigma}_{\alpha\beta\gamma\delta}=T^{\mu\nu\sigma}_{\delta\beta\gamma\alpha}
$$
则张量对下标 $\alpha$ 和 $\delta$ 对称. 若
$$
T^{\mu\nu\sigma}_{\alpha\beta\gamma\delta}=-T^{\mu\nu\sigma}_{\alpha\delta\gamma\beta}
$$
则张量对下标 $\beta$ 和 $\delta$ 反对称.

::: tip

若称一个张量是对称 / 反称的，意味着它任何一对上标和任何一对下标都是对称 / 反称的.

反称张量的特点：反称指标取同一值的分量为零. 比如二阶反称张量写成矩阵时，对角元一定是零.

另外，任意一个二阶逆变 (/ 协变) 张量 $T^{\mu\nu}$ (/ $T_{\alpha\beta}$) 都可以分解为一个对称张量 () 和一个反称张量 [] 的和：
$$
T^{\mu\nu} = T^{(\mu\nu)} + T^{[\mu\nu]}
$$
其中
$$
T^{(\mu\nu)}=\frac{T^{\mu\nu}+T^{\nu\mu}}{2}\,,\quad T^{[\mu\nu]} = \frac{T^{\mu\nu}-T^{\nu\mu}}{2}
$$
:::

::: danger

到这里我还有点没理解张量的物理实质是什么… 如果后面也没有理解，我可能需要在这个位置作补充.

:::

## 平移 & 联络

张量逐点定义，如果要计算不同点之间张量之差，得到的不再是张量，会失去张量的各种变换性质. 但是我们需要研究相邻点之间张量的微小差值来得到张量的微分. 因此要新定义「差」，引入「矢量平移」和「仿射联络」的概念.

(1) 先来探索协变矢量的平移：

矢量场 $A_\mu$ 在相邻 $P,Q$ 两点的值分别为 $A_\mu(P)$ 和 $A_\mu(Q)$，

/Definition/ (矢量平移)

> $P$ 点的矢量平移到 $Q$ 点后，写作 $A_\mu(P\to Q)$.

我们要求平移后的新矢量具有协变矢量的变换性质：

<a id="2"></a>
$$
A'_\mu(P\to Q) = \left(\frac{\partial x^\alpha}{\partial x'^\mu}\right)_QA_\alpha(P\to Q)\tag{2}
$$
虽然在 $P$ 点 $A_\mu(P)$ 是协变的，但是在 $Q$ 点 $A_\mu(P)$ 就不一定协变，因此 $A_\mu(P\to Q)$ 和 $A_\mu(P)$ 之间有一个增量.

矢量平移要求：

1. 平移后矢量 $A_\mu(P\to Q)$ 是 $Q$ 点的矢量；
2. 平移引起的微元改变量 $\delta A_\mu(P)$ 与位移 $\text{d}x^\mu$ 呈线性.

(这样的矢量平移称为 Levi - Civita 平移)

所以有要求：
$$
\delta A_\mu(P) \equiv A_\mu(P\to Q)-A_\mu(P) = \Gamma^\lambda_{\mu\nu}(P)\cdot A_\lambda(P)\cdot\text{d}x^\nu
$$
这里引入的比例系数 $\Gamma^\lambda_{\mu\nu}(P)$ 就是 $P$ 点的仿射联络，建成联络. 定义了仿射联络的仿射空间称仿射联络空间.

::: warning

说明一下：下面用到的 $\Gamma^\lambda_{\mu\nu}$ 注意先后顺序的写法应该是 $\Gamma^\lambda{}_{\mu\nu}$，但是目前不注意先后顺序也没什么影响，所以先这么写了.

:::

::: tip

一点理解：注意到这里有两次 Einstein 求和，对 $\lambda$ 和 $\nu$ 求和，所以新的矢量分量会受到原来矢量各个分量的影响.

:::

(2) 求联络在坐标变换下的变换性质，是要保证 <a href="#2">(2)</a> 式始终成立. 利用这个式子，有
$$
\begin{aligned}
\left(\frac{\partial x^\alpha}{\partial x'^\mu}\right)_Q &=\left(\frac{\partial x^\alpha}{\partial x'^\mu}\right)_P+\left(\frac{\partial^2x^\alpha}{\partial x'^\nu\partial x'^\mu}\right)_P\text{d}x'^\nu
\end{aligned}
$$

::: details 理解

这玩意卡了我两个小时，然后反应过来我想多了. 一开始想的是这是不是下面的公式：
$$
\begin{aligned}
\left(\frac{\partial A}{\partial B}\right)_C=\left(\frac{\partial A}{\partial B}\right)_D+\left(\frac{\partial A}{\partial D}\right)_B\left(\frac{\partial D}{\partial B}\right)_C
\end{aligned}
$$
但是并不是. 实际上这个公式来源于将 $\partial x^\alpha/\partial x'^\mu$ 看作一个随着 $x'^\nu$ 变化的函数，再求一个微分而已.

这实在是太蠢了.

:::

因此 <a href="#2">(2)</a> 式可以写作
$$
A'_\mu(P\to Q) = \left(\left(\frac{\partial x^\alpha}{\partial x'^\mu}\right)_+\left(\frac{\partial^2x^\alpha}{\partial x'^\mu\partial x'^\nu}\right)_P\text{d}x'^\nu\right)\cdot A_\alpha(P\to Q)
$$
若利用 $\Gamma'^\lambda_{\mu\nu}$ 定义，写成：
$$
\begin{aligned}
&A'_\mu+\Gamma'^\lambda_{\mu\nu}\cdot A'_\lambda\cdot\text{d}x'^\nu \\\\
&= \left(\left(\frac{\partial x^\alpha}{\partial x'^\mu}\right)_P+\left(\frac{\partial^2x^\alpha}{\partial x'^\mu\partial x'^\nu}\right)_P\text{d}x'^\nu\right)\cdot(A_\alpha+\Gamma^\beta_{\alpha\gamma}\cdot A_\beta\cdot\text{d}x^\gamma)\\\\
&=\left(\frac{\partial x^\alpha}{\partial x'^\mu}+\frac{\partial^2x^\alpha}{\partial x'^\mu\partial x'^\nu}\frac{\partial x'^\nu}{\partial x^\sigma}\text{d}x^\sigma\right)\cdot(A_\alpha+\Gamma^\beta_{\alpha\gamma}\cdot A_\beta\cdot\text{d}x^\gamma)
\end{aligned}
$$
(这里都是在 $P$ 点写的，所以把 $A'_\mu(P)$ 中标识位置的「$(P)$」去掉了，偏导数同理)

::: warning

为什么要在最后把 $\text{d}x'^\nu$ 换成 $\partial x'^\nu/\partial x^\sigma\cdot\text{d}x^\sigma$？

这是因为之后要换傀标，然后合并成同一项，如果不更换的话，两边一个是 $\text{d}x'^\nu$ 一个是 $\text{d}x^\gamma$，处在不同的坐标下，怎么变都合并不了.

:::

利用 $A'_\mu = \partial x^\rho/\partial x'^\mu\cdot A_\rho$ 和 $\text{d}x'^\nu=\partial x'^\nu/\partial x^\sigma\cdot\text{d}x^\sigma$ 得到：
$$
\begin{aligned}
&\Gamma'^\lambda_{\mu\nu}\cdot \frac{\partial x^\rho}{\partial x'^\lambda}A_\rho\cdot\frac{\partial x'^\nu}{\partial x^\sigma}\text{d}x^\sigma \\\\
&= \frac{\partial^2x^\alpha}{\partial x'^\mu\partial x'^\nu}\cdot A_\alpha\cdot\frac{\partial x'^\nu}{\partial x^\sigma}\text{d}x^\sigma + \frac{\partial x^\alpha}{\partial x'^\mu}\cdot\Gamma^\beta_{\alpha\gamma}\cdot A_\beta\cdot\text{d}x^\gamma
\end{aligned}
$$
这里已经将两边都有的 $A_\alpha$ 那一项去掉. 最后一项的傀标 $\gamma$ 也可以换成 $\sigma$，再更换每一项中对矢量分量求和的傀标，原式可以合并为
$$
\left(\Gamma'^\lambda_{\mu\nu}\frac{\partial x^\rho}{\partial x'^\lambda}\frac{\partial x'^\nu}{\partial x^\sigma}-\Gamma^\rho_{\alpha\sigma}\frac{\partial x^\alpha}{\partial x'^\mu}-\frac{\partial^2x^\rho}{\partial x'^\mu\partial x'^\nu}\frac{\partial x'^\nu}{\partial x^\sigma}\right)A_\rho\text{d}x^\sigma = 0
$$
LHS 是两次对四维指标求和，相当于 16 项这样的括号. 因为这个式子对任意的 $A_\rho\text{d}x^\sigma$ 都是零，所以要求括号内始终为零. 这样就得到了仿射联络在坐标变换下的公式：
$$
\Gamma'^\lambda_{\mu\nu} = \Gamma^\rho_{\alpha\sigma}\frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x^\sigma}{\partial x'^\gamma}\frac{\partial x'^\tau}{\partial x^\rho}+\frac{\partial^2x^\rho}{\partial x'^\mu\partial x'^\gamma}\frac{\partial x'^\tau}{\partial x^\rho}
$$
::: danger

这个公式实在是丑得可以… 注意求和的部分，下标太多容易搞混.

:::

这也表明联络不是一种张量.

(3) 逆变矢量在平移下的增量：

和协变矢量很像，但是相差一个符号，
$$
\delta A^\mu(P) \equiv A^\mu(P\to Q)-A^\mu(P) = -\Gamma^\mu_{\lambda\nu}\cdot A^\lambda(P)\cdot\text{d}x^\nu
$$

---

更高阶张量的平移我们兴趣不大.

总结一下联络的性质：

1. 在同一个仿射空间中引入两种联络，$_1\Gamma^\lambda_{\mu\nu}$ 和 $_2\Gamma^\lambda_{\mu\nu}$，虽然这两个都不是张量，但是它们的差 $\delta\Gamma^\lambda_{\mu\nu}$ 是 $(1,2)$ 阶张量：
   $$
   \delta\Gamma^\lambda_{\mu\nu} = {}_1\Gamma^\lambda_{\mu\nu}-{}_2\Gamma^\lambda_{\mu\nu}
   $$

2. 联络一般是非对称的，但是可以分为对称和反对称部分之和
   $$
   \Gamma^\lambda_{\mu\nu} = \Gamma^\lambda_{(\mu\nu)} + \Gamma^\lambda_{[\mu\nu]}
   $$
   对称部分和反对称部分分别是
   $$
   \Gamma^\lambda_{(\mu\nu)} = \frac{1}{2}(\Gamma^\lambda_{\mu\nu} + \Gamma^\lambda_{\nu\mu})\,,\quad\Gamma^\lambda_{[\mu\nu]} = \frac{1}{2}(\Gamma^\lambda_{\mu\nu} - \Gamma^\lambda_{\nu\mu})
   $$
   对称张量称为对称联络，不是张量；但是反对称部分是张量，称为挠率张量.

   联络一共有 $4\times4\times4$ 个分量，对称部分有 40 个独立分量，反对称部分 (挠率张量) 有 24 个独立分量.

## 协变微商

### 标量场的协变微商

标量场 $U(\bold{x})$ 的普通微商：
$$
U_{,\mu} \equiv \frac{\partial U(\bold{x})}{\partial x^\mu}
$$
::: warning

这个「$,$ 」作为一个微商符号属实有点诡异，不过既然是笔记，还是按照书本来罢.

P.S. 查了一下 Wiki 发现好像标准符号真的是这样，那没事了.[^5]

:::

上面的普通微商变换到新坐标系：
$$
U'_{,\mu} \equiv \frac{\partial U'(\bold{x}')}{\partial x'^\mu} = \frac{\partial U'}{\partial x^\alpha}\frac{\partial x^\alpha}{\partial x'^\mu} = \frac{\partial U}{\partial x^\alpha}\frac{\partial x^\alpha}{\partial x'^\mu} = U_{,\alpha}\frac{\partial x^\alpha}{\partial x'^\mu}
$$
(其中中间一个等号的来源是 $U'$ 和 $U$ 这两个函数形式是一样的)

因此可知，$U_{,\alpha}$ 是协变矢量，不是标量场；这个「普通微商」就被称为「协变微商」. 用「$;$ 」表示协变微商，对于标量场有
$$
U_{;\mu} = U_{,\mu}
$$


[^1]: [仿射空间 - 小时百科](https://wuli.wiki/online/AfSp.html)
[^2]: [仿射空间 - 维基百科](https://zh.wikipedia.org/wiki/仿射空间)
[^3]: [The Poor Man’s Introduction to Tensors](https://justincfeng.github.io/Tensors_Poor_Man.pdf)
[^4]: [张量分析傻瓜入门 翻译：三、指标记号 - 知乎](https://zhuanlan.zhihu.com/p/103366867)
[^5]: [共变导数 - 维基百科](https://zh.wikipedia.org/wiki/协变微商)
