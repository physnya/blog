---
title: Riemann 几何与张量分析
draft: true
permalink: /self-learn-GR/chapter-2/
pageLayout: doc
feed: false
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


[^1]: [仿射空间 - 小时百科](https://wuli.wiki/online/AfSp.html)
[^2]: [仿射空间 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/仿射空间)
[^3]: [The Poor Man’s Introduction to Tensors](https://justincfeng.github.io/Tensors_Poor_Man.pdf)
[^4]: [张量分析傻瓜入门 翻译：三、指标记号 - 知乎](https://zhuanlan.zhihu.com/p/103366867)
