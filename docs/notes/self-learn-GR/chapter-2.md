---
title: Riemann 几何与张量分析
permalink: /self-learn-GR/chapter-2/
pageLayout: doc
createTime: 2025/09/02 02:36:17
---
::: danger

<s>本章内容很多，所以估计会多次更新.</s>

如果你在文章中看到了这样 [+0] 的符号，可以点击它，它是一个小小的注释，可能含有通往参考文献的链接.

[+0]:这只是一个示例.

---

2025/09/02 - 02:31，我已经更新完这篇笔记，为了重新提交一次 RSS 记录，我修改了 markdown 文件中自动生成的时间，从 2025/08/15 -14:09:31 改为 2025/09/02 - 02:36:17. 同时移除了 DRAFT 标记.

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
0&B_3&-B_2&-\frac{\text{i}}{c}E_1\\\\
-B_3&0&B_1&-\frac{\text{i}}{c}E_2\\\\
B_2&-B_1&0&-\frac{\text{i}}{c}E_3\\\\
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
> 并把 $V$ 的维数 $n$ 称为 $\mathbb{A}$ 的 **维数**，有时记成 $\mathbb{A}^n$. [+1]

[+1]:[仿射空间 - 小时百科](https://wuli.wiki/online/AfSp.html)

Wiki 上有一个帮助理解的非正式描述：

> 仿射空间像是没有原点的向量空间，其中的向量只有方向和大小.
>
> 若有甲、乙两人，甲认为空间的原点在 $o$ 点，乙则认为原点在点 $p$. 现在要求两个向量 $a$ 和 $b$ (用点来表示向量，这里的向量指的是点和原点之间的差向量) 的和，那么两个人得到的结果不会是一样的.
>
> 另外，若两人分别计算 $a$ 和 $b$ 的线性组合，要求系数和为 $1$，那么两人将得到相同的结果. (就像我们高中所学的向量末端共线)
>
> 仿射空间就是要以相同的线性组合来描述同样的点，所以仿射组合的系数构成了一个「重心坐标」. [+2]

[+2]:[仿射空间 - 维基百科](https://zh.wikipedia.org/wiki/仿射空间)

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

> 关于「上」和「下」标的问题，可见 [+3] [+4].
>
> [+3]:[The Poor Man’s Introduction to Tensors](https://justincfeng.github.io/Tensors_Poor_Man.pdf)
>
> [+4]:[张量分析傻瓜入门 翻译：三、指标记号 - 知乎](https://zhuanlan.zhihu.com/p/103366867)
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

P.S. 查了一下 Wiki 发现好像标准符号真的是这样，那没事了. [+5]

[+5]:[共变导数 - 维基百科](https://zh.wikipedia.org/wiki/协变微商)

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

也就是协变微商等于普通微商.

### 协变矢量场的协变微商

协变矢量场的普通微商：
$$
A_{\mu,\nu} \equiv \frac{\partial A_\mu}{\partial x^\nu} \equiv \lim_{Q\to P}\frac{A_\mu(Q)-A_\mu(P)}{\Delta x^\nu}
$$
但是空间中不同的两个点张量之差不一定是张量，所以普通微商不再具有张量性质.

而协变微商要用平移定义：
$$
A_{\mu;\nu} \equiv \lim_{Q\to P}\frac{A_\mu(Q)-A_\mu(P\to Q)}{\Delta x^\nu}
$$
由平移定义，得到
$$
A_{\mu;\nu} = A_{\mu,\nu} - \Gamma^\lambda_{\mu\nu}A_\lambda
$$

这是协变矢量的协变微商. 值得注意，RHS 两项单独拿出来都不是张量，只有它们的差是张量.

### 协变微商的 Leibniz 法则

这是规定：
$$
(A^{\cdots}{}_{\cdots}B^{\cdots}{}_{\cdots})_{;\lambda} = (A^{\cdots}{}_{\cdots}{}_{;\lambda})(B^{\cdots}{}_{\cdots})+(A^{\cdots}{}_{\cdots})(B^{\cdots}{}_{\cdots}{}_{;\lambda})
$$
协变微商和普通微商都服从 Leibniz 法则. 一个简单的例子是
$$
(A^{\mu\nu}{}_{\sigma}B_{\beta}{}^{\alpha}{}_{\gamma\varepsilon})_{;\lambda} = A^{\mu\nu}{}_{\sigma}{}_{;\lambda}B_{\beta}{}^{\alpha}{}_{\gamma\varepsilon}+A^{\mu\nu}{}_{\sigma}B_{\beta}{}^{\alpha}{}_{\gamma\varepsilon}{}_{;\lambda}
$$
::: warning

到这里还是觉得张量微商这个概念有点不具体. 实际上把符号理解成分量，再把「$;\lambda$」这里后面的指标理解为微商定义里面要除掉的微元坐标的指标，就能想象出是个什么意思. 大概是某种张量场随着很多坐标变化，然后这个张量场的某个分量 $\mu$ (得是 $;$ 号前面的那个指标) 随着 $x^\nu$ 的改变而变化，所产生的那个叫做「微商」的东西 (换言之，变化率).

:::

### 逆变矢量场的协变微商

逆变的指标在上面，直观地来讲，好像没有 $;$ 号前面的那个指标，所以我们想到要和协变矢量场配在一起写微商. $A^\mu(\bold{x})$ 和任意的一个协变矢量场 $B_\mu(\bold{x})$ 内积，得到标量场. 又知道标量场的协变微商就等于普通微商，那么
$$
(A^\mu B_\mu)_{;\lambda} = (A^\mu B_\mu)_{,\lambda}
$$
这时候用 Leibniz 法则 <s>这下知道为什么要在这一节之前讲 Leibniz 法则了</s>，可以得到

$$
A^\mu{}_{;\lambda}B_\mu+A^\mu B_{\mu}{}_{;\lambda} = A^\mu{}_{,\lambda}B_\mu+A^\mu B_{\mu}{}_{,\lambda}
$$
利用之前的协变矢量场协变微商公式，
$$
A^\mu{}_{;\lambda}B_\mu = A^\mu{}_{,\lambda}B_\mu + \Gamma^\nu_{\mu\lambda}A^\mu B_\nu
$$
换傀标，同时矢量场 $B_\mu$ 是任意的，可以得到
$$
A^\mu{}_{;\lambda} = A^\mu{}_{,\lambda} + \Gamma^\mu_{\nu\lambda}A^\nu
$$
::: danger

这里协变微商的含义没有协变矢量场那么直观，因为定义式不是通过极限来做的. 不过理解为「对应」的关系倒可能也很不错.

:::

### 高阶张量场的协变微商

类似地，对二阶张量：
$$
\begin{aligned}
T_{\mu\nu}{}_{;\lambda} &= T_{\mu\nu}{}_{,\lambda}-\Gamma^\rho_{\mu\lambda}T_{\rho\nu}-\Gamma^\rho
_{\nu\lambda}T_{\mu\rho}\\\\
T^{\mu\nu}{}_{;\lambda} &= T^{\mu\nu}{}_{,\lambda}+\Gamma^\mu_{\rho\lambda}T^{\rho\nu}+\Gamma^\nu_{\rho\lambda}T^{\mu\rho}\\\\
T^\mu{}_{\nu;\lambda} &= T^\mu{}_{\nu,\lambda}+\Gamma^\mu_{\rho\lambda}T^\rho{}_\nu-\Gamma^\rho_{\nu\lambda}T^\mu{}_\rho
\end{aligned}
$$
::: warning

可以看到，协变的指标对应一个「$-$」号，逆变的指标对应一个「$+$」号，额外项的求和都是对「被求导」的指标做的求和，这至少是一个记忆方法.

:::

/Example/ (Kronecker 符号的协变微商)

> Kronecker 符号是二阶混合张量，有
> $$
> \delta^\mu{}_{\nu;\lambda} = \delta^\mu{}_{\nu,\lambda} + \Gamma^\mu_{\rho\lambda}\delta^\rho{}_{\nu}-\Gamma^\rho_{\nu\lambda}\delta^\mu{}_\rho = \delta^\mu{}_{\nu,\lambda}
> $$
> 但是这个张量的分量完全是常数，所以直接得到协变微商为零.

## 测地线与仿射参量

在平直空间中，直线具有「自平行」性质，即线上的任意相邻两点的切矢量相互平行. 利用这一性质可以把直线概念推广到仿射空间，称为测地线.

四维空间中曲线的参数方程：
$$
x^\mu = x^\mu(\lambda)
$$
这里 $\lambda$ 只是一个标志性的参量. 任意一点的切矢量定义为
$$
A^\mu = \frac{\text{d}x^\mu}{\text{d}\lambda}
$$
这是一个逆变矢量. 刚刚说要比较相邻两点的切矢量是否平行，所以需要平移操作，平行要求：
$$
A^\mu(Q) = F(\lambda+\text{d}\lambda)A^\mu(P\to Q)
$$
这里 $F(\lambda+\text{d}\lambda)$ 只是一个系数，上面式子是在 $Q$ 点做比较. 因为 $P$ 点的切矢量肯定平行于 $P$ 点自己的，所以 $F(\lambda) = 1$，若定义
$$
f(\lambda) := \frac{\text{d}F}{\text{d}\lambda}
$$
则上面式子可以改写成
$$
A^\mu(Q) = [1+f(\lambda)\text{d}\lambda]\cdot A^\mu(P\to Q)
$$
满足这个式子的曲线称为 **测地线 / 自平行线**. 接下来的任务是求测地线方程. 利用平移矢量的关系，可得
$$
\begin{aligned}
A^\mu(P\to Q) &= A^\mu(P)-\Gamma^\mu_{\alpha\beta}(P)\cdot A^\alpha(P)\text{d}x^\beta\\\\
&= \frac{\text{d}x^\mu}{\text{d}\lambda} + \Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}\lambda}\frac{\text{d}x^\beta}{\text{d}\lambda}\text{d}\lambda
\end{aligned}
$$
另外，
$$
A^\mu(Q) = A^\mu(P) +\text{d}A^\mu(P) = \frac{\text{d}x^\mu}{\text{d}\lambda} +\frac{\text{d}^2x^\mu}{\text{d}\lambda^2}\text{d}\lambda
$$
所以测地线微分方程是
$$
\frac{\text{d}^2x^\mu}{\text{d}\lambda^2}+\Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}\lambda}\frac{\text{d}x^\beta}{\text{d}\lambda} = f(\lambda)\frac{\text{d}x^\mu}{\text{d}\lambda}
$$
::: details 简化

在参量选择比较好的情况下，测地线方程可以简化. 假设另一个标量参量 $\sigma$，有参量变换 $\lambda=\lambda(\sigma)$，我们知道
$$
\begin{aligned}
\frac{\text{d}x^\mu}{\text{d}\lambda} &= \frac{\text{d}x^\mu}{\text{d}\sigma}\cdot\frac{\text{d}\sigma}{\text{d}\lambda}\\\\
\frac{\text{d}^2x^\mu}{\text{d}\lambda^2} &= \frac{\text{d}^2x^\mu}{\text{d}\sigma^2}\cdot\left(\frac{\text{d}\sigma}{\text{d}\lambda}\right)^2+\frac{\text{d}x^\mu}{\text{d}\sigma}\cdot\frac{\text{d}^2\sigma}{\text{d}\lambda^2}
\end{aligned}
$$
于是
$$
\begin{aligned}
&\left[\frac{\text{d}^2x^\mu}{\text{d}\sigma^2}\cdot\left(\frac{\text{d}\sigma}{\text{d}\lambda}\right)^2+\frac{\text{d}x^\mu}{\text{d}\sigma}\cdot\frac{\text{d}^2\sigma}{\text{d}\lambda^2}\right]+\Gamma^\mu_{\alpha\beta}\left(\frac{\text{d}\sigma}{\text{d}\lambda}\right)^2\frac{\text{d}x^\alpha}{\text{d}\sigma}\frac{\text{d}x^\beta}{\text{d}\sigma} = f(\lambda)\frac{\text{d}x^\mu}{\text{d}\sigma}\frac{\text{d}\sigma}{\text{d}\lambda}\\\\
&\left(\frac{\text{d}^2x^\mu}{\text{d}\sigma^2}+\Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}\sigma}\frac{\text{d}x^\beta}{\text{d}\sigma}\right)\left(\frac{\text{d}\sigma}{\text{d}\lambda}\right)^2 = \left[f(\lambda)\frac{\text{d}\sigma}{\text{d}\lambda}-\frac{\text{d}^2\sigma}{\text{d}\lambda^2}\right]\cdot\frac{\text{d}x^\mu}{\text{d}\sigma}
\end{aligned}
$$

如果参量 $\sigma$ 满足

<a name="3"></a>
$$
f(\lambda)\frac{\text{d}\sigma}{\text{d}\lambda}-\frac{\text{d}^2\sigma}{\text{d}\lambda^2}= 0\tag{3}
$$
则上面式子简化为
$$
\frac{\text{d}^2x^\mu}{\text{d}\sigma^2}+\Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}\sigma}\frac{\text{d}x^\beta}{\text{d}\sigma}=0
$$
称满足 <a href="#3">(3)</a> 的参量 $\sigma$ 为仿射参量，采用这种参量时，$f(\sigma)=0$，平行条件是直接相等.

值得注意的是，仿射参量并不唯一，$\tau = a\sigma+b$ 都是仿射参量.

:::

## 曲率与挠率

我们已经知道联络的反称部分是挠率张量. 现在要引入一个新的由联络构造的张量 —— 曲率张量. 这两个量是决定空间几何性质最重要的量.

(1) 曲率张量的引入：对于给定的协变矢量场 $A_\lambda(\bold{x})$，求两次协变微商 $A_{\lambda;\mu;\nu}$ 可得

$$
\begin{aligned}
&A_{\lambda;\mu;\nu} \\\\
&= A_{\lambda;\mu,\nu}-\Gamma^\rho_{\lambda\nu}A_{\rho;\mu} - \Gamma^\rho_{\mu\nu}A_{\lambda;\rho}\\\\
&=A_{\lambda,\mu,\nu} - \Gamma^\rho_{\lambda\mu,\nu}A_\rho - \Gamma^\rho_{\lambda\mu}A_{\rho,\nu} - \Gamma^\rho_{\lambda\nu}A_{\rho,\mu}+\Gamma^\rho_{\lambda\nu}\Gamma^\sigma_{\rho\mu}A_\sigma-\Gamma^\rho_{\mu\nu}A_{\lambda;\rho}
\end{aligned}
$$
::: warning

可以很明显地看出「$A_{\mu;\lambda}$」这个符号的好处：这可以看作一个二阶的张量，然后得到第一个等号后面的结果.

对于第二个等号，过程应该是：
$$
\text{LHS}=(A_{\lambda,\mu}-\Gamma^\rho_{\lambda\mu}A_\rho)_{,\nu}-\Gamma^\rho_{\lambda\nu}A_{\rho;\mu}-\Gamma^\rho_{\mu\nu}A_{\lambda;\rho}
$$
然后分别展开得到上述结果. 上面没有展开最后一项的原因是后面并没有展开的必要性.

:::

交换协变微商的顺序，也就是求 $A_{\lambda;\nu;\nu}$，得到
$$
A_{\lambda;\nu;\mu} = A_{\lambda,\nu,\mu} - \Gamma^\rho_{\lambda\nu,\mu}A_\rho-\Gamma^\rho_{\lambda\nu}A_{\rho,\mu}-\Gamma^\rho_{\lambda\mu}A_{\rho,\nu}+\Gamma^\rho_{\lambda\mu}\Gamma^\sigma_{\rho\nu}A_\sigma-\Gamma^\rho_{\nu\mu}A_{\lambda;\rho}
$$
这两者相差：
$$
A_{\lambda;\mu;\nu}-A_{\lambda;\nu;\mu} = R^\rho_{\lambda\mu\nu}A_\rho-2\Gamma^\rho_{[\mu\nu]}A_{\lambda;\rho}
$$
其中
$$
R^\rho_{\lambda\mu\nu}\equiv\Gamma^\rho_{\lambda\nu,\mu}-\Gamma^\rho_{\lambda\mu,\nu}+\Gamma^\rho_{\sigma\mu}\Gamma^\sigma_{\lambda\nu} - \Gamma^\rho_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}
$$
而联络的反称部分 $\Gamma^\rho_{[\mu\nu]} = (\Gamma^\rho_{\mu\nu}-\Gamma^\rho_{\nu\mu})/2$ 是挠率张量，等式左右两边都得是张量，所以 $R^\rho_{\lambda\mu\nu}$ 必须要是一个张量，这被称为 **曲率张量**.

::: warning

张量的协变微商是个张量，因为在求协变微商的过程中，所有联络系数产生的非齐次项都被添加的那些项抵消了. 再者，从定义完全可以验证协变微商的变换规律.

:::

从上面可以看出，只有曲率和挠率都是零时 (或许可以理解为空间是平直的？)，协变矢量的二阶协变微商才可以交换顺序，当然这一结论对逆变矢量、更高阶张量的协变微商均成立.

(2) 挠率的几何意义：

如下图，空间中从 $O$ 点出来的两个无穷小位移，分别是 $\text{d}x^\mu\sim OQ'$ 和 $\delta x^\mu\sim OQ$，现在把 $\text{d}x^\mu$ 平移距离 $\delta x^\mu$ 到 $Q$ 点，得到 $QP$；再把 $\delta x^\mu$ 平移距离 $\text{d}x^\mu$ 到 $Q'$ 点，得到 $Q'P'$. 在 Euclidean 空间中，$P$ 和 $P'$ 肯定重合，但是空间如果是弯曲的，那么情况会不一样.

::: center

![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d7w33gcih9fisdqtraDIYxAIFxDda1DGxPDwUzAa==.png)

:::

我们知道，
$$
\begin{aligned}
QP &= \text{d}x^\mu-\Gamma^\mu_{\lambda\nu}\text{d}x^\lambda\delta x^\nu\\\\
Q'P' &=\delta x^\mu-\Gamma^\mu_{\lambda\nu}\delta x^\lambda\text{d}x^\nu
\end{aligned}
$$
可计算 $P$ 和 $P'$ 两点之差：
$$
\begin{aligned}
\Delta &= OQ+QP-(OQ'+Q'P')\\\\
&=\delta x^\mu+(\text{d}x^\mu-\Gamma^\mu_{\lambda\nu}\text{d}x^\lambda\delta x^\nu)-[\text{d}x^\mu+(\delta x^\mu-\Gamma^\mu_{\lambda\nu}\delta x^\lambda\text{d}x^\nu)]\\\\
&=(\Gamma^\mu_{\nu\lambda}-\Gamma^\mu_{\lambda\nu})\delta x^\nu\text{d}x^\lambda\\\\
&=2\Gamma^\mu_{[\nu\lambda]}\delta x^\nu\text{d}x^\lambda
\end{aligned}
$$
这是一个二阶的偏移，体现挠率的作用.

(3) 曲率的几何意义：讨论无挠率的情况. 这个时候原来的四边形是闭合的，再考虑另一个矢量 $A^\mu$，让它从 $O$ 点开始沿这个闭合路径平移，经历 $O\to Q\to P\to Q'\to O$.

::: center

![](https://vip.123pan.cn/1845440081/yk6baz03t0n000d7w33h5cr3xj8exqewDIYxAIFxDda1DGxPDwUzAa==.png)

:::

回到 $O$ 点后，$A^\mu$ 变为 $A'^\mu=A^\mu+\delta A^\mu$. 有
$$
\begin{aligned}
\delta A^\mu &= A'^\mu - A^\mu\\\\
&=A^\mu(O\to Q\to P\to Q'\to O)-A^\mu\\\\
&=A^\mu(O\to Q\to P) - A^\mu(O\to Q'\to P)
\end{aligned}
$$
分别计算这两项：
$$
\begin{aligned}
A^\mu(O\to Q)&= A^\mu - \Gamma^\mu_{\lambda\nu}A^\lambda\delta x^\nu\\\\
A^\mu(O\to Q\to P)&=(A^\mu-\Gamma^\mu_{\lambda\nu}A^\lambda\delta x^\nu)\\
&\quad-\Gamma^\mu_{\alpha\beta}(Q)(A^\alpha-\Gamma^\alpha_{\tau\sigma}A^\tau\delta x^\sigma)(\text{d}x^\beta-\Gamma^\beta_{\rho\gamma}\text{d}x^\rho\delta x^\gamma)\\\\
&=A^\mu-\Gamma^\mu_{\lambda\nu}A^\lambda\delta x^\nu-\Gamma^\mu_{\alpha\beta}(Q)A^\alpha\text{d}x^\beta\\
&\quad+\Gamma^\mu_{\alpha\beta}(Q)\Gamma^\alpha_{\tau\sigma}A^\tau\delta x^\sigma\text{d}x^\beta-\Gamma^\mu_{\alpha\beta}(Q)\Gamma^\beta_{\rho\gamma}\text{d}x^\rho\delta x^\gamma
\end{aligned}
$$
这里省略了本来应该有的「$(O)$」，因为大多数比较都是在 $O$ 点进行. 我们知道联络的微分是
$$
\Gamma^\mu_{\alpha\beta}(Q) = \Gamma^\mu_{\alpha\beta}(O)+\Gamma^\mu_{\alpha\beta}{}_{,\gamma}(O)\delta x^\gamma=\Gamma^\mu_{\alpha\beta}+\Gamma^\mu_{\alpha\beta}{}_{,\gamma}\delta x^\gamma
$$
代入，最终得到
$$
\begin{aligned}
A^\mu(O\to Q\to P) &= A^\mu-\Gamma^\mu_{\lambda\nu}A^\lambda(\delta x^\nu+\text{d}x^\nu)-\Gamma^\mu_{\lambda\nu}{}_{,\gamma}A^\lambda\text{d}x^\nu\delta x^\gamma\\
&\quad+\Gamma^\mu_{\lambda\nu}\Gamma^\nu_{\rho\gamma}A^\lambda\text{d}x^\rho\delta x^\gamma+\Gamma^\mu_{\lambda\nu}\Gamma^\lambda_{\rho\gamma}A^\rho\delta x^\gamma\text{d}x^\nu
\end{aligned}
$$
(这里利用了傀标的可替换性)

同理，
$$
\begin{aligned}
A^\mu(O\to Q'\to P)&=A^\mu-\Gamma^\mu_{\lambda\nu}A^\lambda(\text{d}x^\nu+\delta x^\nu)-\Gamma^\mu_{\lambda\nu}{}_{,\gamma}A^\lambda\delta x^\nu\text{d}x^\gamma\\
&\quad+\Gamma^\mu_{\lambda\nu}\Gamma^\nu_{\rho\gamma}A^\lambda\text{d}x^\gamma\delta x^\rho+\Gamma^\mu_{\lambda\nu}\Gamma^\lambda_{\rho\gamma}A^\rho\text{d}x^\gamma\delta x^\nu
\end{aligned}
$$
差值为
$$
\begin{aligned}
\delta A^\mu&=\Gamma^\mu_{\lambda\nu}{}_{,\gamma}(\delta x^\nu\text{d}x^\gamma-\text{d}x^\nu\delta x^\gamma)+\Gamma^\mu_{\lambda\nu}\Gamma^\nu_{\rho\gamma}A^\lambda(\text{d}x^\rho\delta x^\gamma-\text{d}x^\gamma\delta x^\rho)\\
&\quad+\Gamma^\mu_{\lambda\nu}\Gamma^\lambda_{\rho\gamma}A^\rho(\delta x^\gamma\text{d}x^\nu-\text{d}x^\gamma\delta x^\rho)
\end{aligned}
$$
因为挠率为零 (这是我们的假设，在开头说过了)，所以 RHS 第二项为零，有
$$
\begin{aligned}
\delta A^\mu&=(\Gamma^\mu_{\lambda\nu}{}_{,\gamma}A^\lambda-\Gamma^\mu_{\lambda\nu}\Gamma^\lambda_{\rho\gamma}A^\rho)(\delta x^\nu\text{d}x^\gamma-\text{d}x^\nu\delta x^\gamma)\\\\
&=(\Gamma^\mu_{\lambda\nu}{}_{,\gamma}-\Gamma^\mu_{\sigma\nu}\Gamma^\sigma_{\lambda\gamma})A^\lambda(\delta x^\nu\text{d}x^\gamma-\text{d}x^\nu\delta x^\gamma)\\\\
&=(\Gamma^\mu_{\lambda\nu}{}_{,\gamma}-\Gamma^\mu_{\sigma\nu}\Gamma^\sigma_{\lambda\gamma})A^\lambda\delta x^\nu\text{d}x^\gamma-(\Gamma^\mu_{\lambda\nu}{}_{,\gamma}-\Gamma^\mu_{\sigma\nu}\Gamma^\sigma_{\lambda\gamma})A^\lambda\delta x^\nu\text{d}x^\gamma\\\\
&=-R^\mu_{\lambda\nu\gamma}A^\lambda\delta x^\nu\text{d}x^\gamma
\end{aligned}
$$
这里就出现曲率了！

::: danger

这个曲率的定义式真有点难记，意义也不是很明显…

:::

<a name="a"></a>

由上面的计算，可见只有在曲率为零的空间，一个逆变矢量沿无穷小环路平移一周，才能不附加转动地与原矢量重合，这就是曲率产生的几何效应. ==对于曲率和挠率都是零的空间，一定可以找到一个坐标系，使得联络的所有分量在这个坐标系中都是零==.

(4) 空间的平直性：因为挠率和曲率都是张量，所以它们的作用和坐标系的选取没有关系，如果挠率和曲率在某个坐标系里所有分量都是零，那么换任何坐标系都是如此，因此它们是空间的内禀性质；反之，联络并不是张量，所以即使是在平直空间中，换坐标系也有可能出现非零的联络.

(5) 曲率的两个性质：

1. 曲率张量的后一对指标反称：
   $$
   R^\rho_{\lambda\mu\nu} = -R^\rho_{\lambda\nu\mu}
   $$

2. 曲率张量只有两种独立的缩并方式：

   1. 1、2 指标缩并
      $$
      A_{\mu\nu} = R^\lambda_{\lambda\mu\nu}
      $$

   2. 1、3 指标缩并
      $$
      R_{\mu\nu} = R^\lambda_{\mu\lambda\nu}
      $$

   1、4 缩并和 1、3 缩并只差一个负号 (正是因为第一个性质)，所以不是独立的.

我们把挠率不为零的空间称为扭曲的，曲率不为零的空间称为弯曲的. 在之后的讨论中，我们会很少提到挠率，一般默认挠率为零.

## 度规张量

引入联络之后还需要度量，也就是引入度规和距离. 引入度量的仿射空间称为 Riemann 空间，这里的几何就是 Riemann 几何.

### 距离与度规

用二次型
$$
\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu
$$
来定义空间中的距离 $\text{d}s$ (也可以叫「线元」). 我们想要让距离是一个标量，因此这里度规 $g_{\mu\nu}$ 必须要是一个二阶协变张量；另外，$\text{d}x^\mu$ 和 $\text{d}x^\nu$ 地位对等，所以 $g_{\mu\nu}$ 还要是对称张量.

下面是一些具体的度规例子.

/Example/ (三维 Euclidean 空间)

> 用直角坐标，线元是
> $$
> \text{d}s^2=\text{d}x^2+\text{d}y^2+\text{d}z^2
> $$
> 度规张量便是
> $$
> (g_{ij})=\begin{pmatrix}
> 1&0&0\\
> 0&1&0\\
> 0&0&1
> \end{pmatrix}\,,\quad i,j=1,2,3
> $$
> 如果使用球坐标，线元表达式是
> $$
> \text{d}s^2=\text{d}r^2+r^2\text{d}\theta^2+r^2\sin^2\theta\text{d}\varphi^2
> $$
> 度规张量
> $$
> (g_{ij})=\begin{pmatrix}
> 1&0&0\\
> 0&r^2&0\\
> 0&0&r^2\sin^2\theta
> \end{pmatrix}\,,\quad i,j=1,2,3
> $$
> ::: warning
>
> 怎么这里度规张量是 $3\times3$ 的？啊这是三维 Euclidean 空间.
>
> :::

/Example/ (四维 Minkowski 空间)

> 这里线元是
> $$
> \text{d}s^2=-(\text{d}x^0)^2+(\text{d}x^1)^2+(\text{d}x^2)^2+(\text{d}x^3)^2
> $$
> 度规张量
> $$
> (g_{\mu\nu})=(\eta_{\mu\nu})=\begin{pmatrix}
> -1&0&0&0\\
> 0&1&0&0\\
> 0&0&1&0\\
> 0&0&0&1
> \end{pmatrix}\,,\quad\mu,\nu=0,1,2,3
> $$

### 度规的正则形式与幺正基

一般来说，Riemann 空间中的度规分量 $g_{\mu\nu}$ 随着坐标的变化不是常数. 如果是常数，且 $\det|g_{\mu\nu}|\neq0$，则一定可以找到一个坐标变换，把二次型 $\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu$ 化成坐标微分的平方和 (或差) 的形式，使度规张量在新坐标系下的分量为

<a name="4"></a>
$$
g_{\mu\nu}=\begin{cases}
\pm1\quad\mu=\nu\\\\
0\quad\mu\neq\nu
\end{cases}\tag{4}
$$
::: warning

书中未证明这一定理. 实际上，证明并没有特别困难. 考虑一个新的坐标系，它和之前的坐标系之间相差一个线性变换，
$$
y^\alpha=L^\alpha{}_\mu x^\mu+c^\alpha\,,\quad\text{d}y^\alpha=L^\alpha{}_\mu\text{d}x^\mu
$$
定义 $L^\alpha{}_\mu$ 的逆矩阵是 $M^\mu{}_\beta$，有 $L^\alpha{}_\mu M^\mu{}_\beta=\delta^\alpha{}_\beta$ 和 $M^\alpha{}_\mu L^\mu{}_\beta=\delta^\alpha{}_\beta$. 这时，新的坐标系下，线元表示为
$$
\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu=(g_{\mu\nu}M^\mu{}_\alpha M^\nu{}_\beta)\text{d}y^\alpha\text{d}y^\beta
$$
新的度规就是 $g_{\mu\nu}M^\mu{}_\alpha M^\nu{}_\beta=g'_{\alpha\beta}$，这相当于对原来的度规矩阵进行合同变换 $M^TgM$.

> 合同变换本质上是改变二次型的基.

根据线性代数中的 Sylvester 惯性定律，存在可逆矩阵 $M$ 使得
$$
M^T gM=\eta
$$
其中 $\eta$ 是对角元素为 $\pm1$ 的对角阵，同时正负号的数量在合同变换下不变. [+6]

[+6]:[Sylvester 惯性定理 - 知乎](https://zhuanlan.zhihu.com/p/639316578) (Wiki 上这个定理写得实在是太简略了，只好看知乎)

通过选择 $M$ 为 Sylvester 惯性定律给出的那个矩阵，新的度规就是 $g'_{\alpha\beta}=\eta_{\alpha\beta}$，满足
$$
g'_{\alpha\beta}=\eta_{\alpha\beta}=\begin{cases}
\pm1&\alpha=\beta\\\\
0&\alpha\neq\beta
\end{cases}
$$
证毕.

:::

<a href="#4">(4)</a> 式叫做度规张量的正则形式，把 $g_{\mu\nu}$ 表为正则形式的坐标基叫正交归一基或者幺正基. 但是，当且仅当 Riemann 空间平直时度规才能在全空间变换为正则形式. 当然，在空间中某一点 $P$ 邻域，因为度规 $g_{\mu\nu}(P)$ 几乎是常数，所以可以局部地变为正则形式，这就说明 Riemann 空间可以看作是局域平直的.

### 时空与号差

在之前的例子中，三维 Euclidean 空间的度规张量非对角元都是零、对角元全为正，这是 **正定度规**. 而四维 Minkowski 空间中的度规张量非对角元是零，但是对角元不全是正的，这是 **不定度规**.

我们定义：正则形式下，度规分量对角元之和称为度规的号差. Minkowski 空间的号差为 $+2$，这是显而易见的. 但是这个概念推广到四维 Riemann 空间时，必须逐点把度规化为正则形式，计算号差. 由之前在 Minkowski 空间中得到的经验，三个「正对角元」对应的是空间，剩下的「负对角元」对应的是时间，这就区分了时空；号差为 $+2$ 的四维 Riemann 空间，就被称为 Riemann 时空.

::: warning

号差是人为定义的，当然可以定义 $-2$ 作为时空的号差. 但是这本教材定义的是 $+2$，所以之后统一用 $+2$.

:::

弯曲的 Riemann 时空可以逐点建立局域的 Minkowski 坐标系.

### 张量指标的升降

先定义逆变度规张量，以便之后用度规来升降张量的指标.

协变度规张量的行列式 $g\equiv\det|g_{\alpha\beta}|$，代数余子式写成 $\Delta^{\alpha\beta}$. 若 $g\neq0$，可以定义逆变度规张量：
$$
g^{\alpha\lambda} := \frac{\Delta^{\alpha\lambda}}{g}
$$
它满足
$$
g^{\alpha\lambda}g_{\lambda\beta}=\frac{\Delta^{\alpha\lambda}}{g}\cdot g_{\lambda\beta} = \delta^\alpha{}_\beta
$$

---

协变度规张量可以降低逆变指标：
$$
A_\alpha\equiv g_{\alpha\beta}A^\beta\,,\quad T_{\alpha\beta}\equiv g_{\alpha\lambda}T^\lambda{}_\beta
$$
逆变度规张量可以升高协变指标：
$$
A^\alpha\equiv g^{\alpha\beta}A_\beta\,,\quad T^{\alpha}{}_\beta\equiv g^{\alpha\lambda} T_{\lambda\beta}
$$
于是可以定义坐标微分的协变形式，
$$
\text{d}x_\alpha:=g_{\alpha\beta}\text{d}x^\beta
$$
所以之后写「距离 (线元)」就可以写成 $A_\alpha A^\alpha$ ($\text{d}x_\alpha\text{d}x^\alpha$) 了！同时我们还可以发现，Kronecker 符号其实是度规的混合形式：
$$
g^\alpha{}_\beta=\delta^\alpha{}_\beta
$$
因为：
$$
g_{\alpha\beta} = g_{\alpha\lambda}g^{\lambda}{}_{\beta}=\begin{cases}
g_{\alpha\lambda}&\lambda=\beta\\\\
0&\lambda\neq\beta
\end{cases}=g_{\alpha\lambda}\delta^\lambda{}_\beta
$$

## Christoffel 符号

几个问题：联络和度规之间有无联系？矢量平移在 Euclidean 空间中不会改变长度，如何在仿射空间中保持这一性质？

矢量平移有：
$$
A^\mu(P\to Q)=A^\mu(P)-\Gamma^\mu_{\nu\lambda}(P)A^\nu(P)\text{d}x^\lambda
$$
现在我们想要求平移不改变长度，所以要求
$$
g_{\mu\nu}(Q)A^\mu(P\to Q)A^\nu(P\to Q)\equiv g_{\mu\nu}(P)A^\mu(P)A^\nu(P)
$$
将平移公式和 $g_{\mu\nu}(Q)=g_{\mu\nu}(P)+g_{\mu\nu,\lambda}(P)\text{d}x^\lambda$ 代入，保留一阶：

::: warning

这里用普通微商而非协变微商是因为纯粹是在使用普通微商的定义罢了.

:::
$$
\begin{aligned}
\left[g_{\mu\nu}+g_{\mu\nu,\lambda}\text{d}x^\lambda\right](A^\mu-\Gamma^\mu_{\sigma\gamma}A^\sigma\text{d}x^\gamma)(A^\nu-\Gamma^\nu_{\alpha\beta}A^\alpha\text{d}x^\beta)&=g_{\mu\nu}A^\mu A^\nu\\\\
g_{\mu\nu,\lambda}A^\mu A^\nu\text{d}x^\lambda-g_{\mu\nu}\Gamma^\mu_{\sigma\gamma}A^\sigma A^\nu\text{d}x^\gamma-g_{\mu\nu}\Gamma^\nu_{\alpha\beta}A^\alpha A^\mu\text{d}x^\beta&=0\\\\
(g_{\mu\nu,\lambda}A^\mu A^\nu-g_{\mu\nu}\Gamma^\mu_{\sigma\lambda}A^\sigma A^\nu-g_{\mu\nu}\Gamma^\nu_{\alpha\lambda}A^\alpha A^\mu)\text{d}x^\lambda&=0\\\\
(g_{\mu\nu,\lambda}-g_{\alpha\nu}\Gamma^\alpha_{\mu\lambda}-g_{\mu\beta}\Gamma^\beta_{\nu\lambda})A^\mu A^\nu&=0\\\\
g_{\mu\nu,\lambda}-g_{\alpha\nu}\Gamma^\alpha_{\mu\lambda}-g_{\mu\beta}\Gamma^\beta_{\nu\lambda}&=0
\end{aligned}
$$
上述三个指标可以轮换，得
$$
\begin{aligned}
g_{\lambda\mu,\nu}-g_{\alpha\mu}\Gamma^\alpha_{\lambda\nu}-g_{\lambda\beta}\Gamma^\beta_{\mu\nu}&=0\\\\
g_{\nu\lambda,\mu}-g_{\alpha\lambda}\Gamma^\alpha_{\nu\mu}-g_{\nu\beta}\Gamma^\beta_{\lambda\mu}&=0
\end{aligned}
$$
前两式相加减去第三式：
$$
\begin{aligned}
\begin{array}{}
&(g_{\mu\nu,\lambda}+g_{\lambda\mu,\nu}-g_{\nu\lambda,\mu})-g_{\alpha\nu}\Gamma^\alpha_{\mu\lambda}-g_{\mu\beta}\Gamma^\beta_{\nu\lambda}\\
&-g_{\alpha\mu}\Gamma^\alpha_{\lambda\nu}-g_{\lambda\beta}\Gamma^\beta_{\mu\nu}
+g_{\alpha\lambda}\Gamma^\alpha_{\nu\mu}+g_{\nu\beta}\Gamma^\beta_{\lambda\mu}
\end{array}\quad&=0
\end{aligned}
$$
注意到度规张量是对称的，而其中后六项在交换度规张量指标后 (或者不交换时) 可以视为给联络降逆变指标：
$$
\begin{aligned}
\begin{array}{}
&(g_{\mu\nu,\lambda}+g_{\lambda\mu,\nu}-g_{\nu\lambda,\mu})-g_{\nu\alpha}\Gamma^\alpha_{\mu\lambda}-g_{\mu\beta}\Gamma^\beta_{\nu\lambda}\\
&-g_{\mu\alpha}\Gamma^\alpha_{\lambda\nu}-g_{\lambda\beta}\Gamma^\beta_{\mu\nu}
+g_{\lambda\alpha}\Gamma^\alpha_{\nu\mu}+g_{\nu\beta}\Gamma^\beta_{\lambda\mu}
\end{array}\quad&=0\\\\
\begin{array}{}
&(g_{\mu\nu,\lambda}+g_{\lambda\mu,\nu}-g_{\nu\lambda,\mu})-\Gamma_{\nu\mu\lambda}-\Gamma_{\mu\nu\lambda}\\
&-\Gamma_{\mu\lambda\nu}-\Gamma_{\lambda\mu\nu}
+\Gamma_{\lambda\nu\mu}+\Gamma_{\nu\lambda\mu}
\end{array}\quad&=0
\end{aligned}
$$
::: warning

到这里似乎已经走投无路了：我们怎么进一步化简？但是想到我们很久之前提到的，我们目前讨论的时空是没有挠率的，是弯曲的时空，而非扭曲的时空. 因此，多了一个极为重要的条件，那就是：联络关于下标对称.

有了这个条件，可以很轻松地进一步推导.

(虽然我在这里卡了半个晚上，最后感谢超理讨论环的学长「银龙 ~ iungrdvgtd」略加点拨. 不过要我说，书中直接讲「注意到联络的对称性」确实欠妥，毕竟毫无提示.)

:::

最终得到无挠 Riemann 空间中，在保持矢量长度平移不变性的条件下，对称联络与度规的泛函关系：
$$
\begin{aligned}
\Gamma_{\lambda\mu\nu}&\equiv\frac{1}{2}(g_{\mu\lambda,\nu}+g_{\nu\lambda,\mu}-g_{\mu\nu,\lambda})\\\\
\Gamma^\alpha_{\mu\nu}&=\frac{1}{2}g^{\alpha\lambda}(g_{\mu\lambda,\nu}+g_{\nu\lambda,\mu}-g_{\mu\nu,\lambda})
\end{aligned}
$$
满足此式的联络，称为 Christoffel 符号；这个式子在广义相对论中极为常见，因为广义相对论所用的时空就是无挠率的 Riemann 时空.

在推导的过程中，我们还可以发现一些额外的结果，比如：
$$
g_{\mu\nu,\lambda}-g_{\alpha\nu}\Gamma^\alpha_{\mu\lambda}-g_{\mu\beta}\Gamma^\beta_{\nu\lambda}=0
$$
其实意味着 $g_{\mu\nu;\lambda}=0$ (度规张量的协变微商为零)，所以逆变度规张量的协变微商也是零，混合度规张量也是. 这个可以作为 Riemann 空间中矢量长度具有平移不变性的一个条件.

到这里，我们终于可以回顾一下物理的内容：注意到可以证明如下的定理

/Theorem/

> 对无挠 Riemann 时空中的任何一点，都可以找到一个坐标变换，把那一点的 Christoffel 符号的所有分量都变到零.

::: warning

书中又略去了证明. 尝试证明如下：首先考虑到联络的变换规则是
$$
\Gamma'^\lambda_{\mu\nu} = \Gamma^\rho_{\alpha\sigma}\frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x^\sigma}{\partial x'^\gamma}\frac{\partial x'^\tau}{\partial x^\rho}+\frac{\partial^2x^\rho}{\partial x'^\mu\partial x'^\gamma}\frac{\partial x'^\tau}{\partial x^\rho}
$$
如果坐标变换是：
$$
x^\mu=x'^\mu-\frac{1}{2}\Gamma^\mu_{\alpha\beta}x'^\alpha x'^\beta
$$
先来计算各阶导数 (这里可以通过改变原点使得在该点 $x^\alpha\equiv0$)，
$$
\begin{aligned}
\frac{\partial x'^\mu}{\partial x^\alpha} &= \delta^\mu{}_\alpha\\\\
\frac{\partial x^\lambda}{\partial x'^\sigma} &= \delta^\lambda{}_\sigma\\\\
\frac{\partial^2x^\mu}{\partial x'^\alpha\partial x'^\beta} &= -\Gamma^\mu_{\alpha\beta}
\end{aligned}
$$
代入变换公式，发现可以做到 Christoffel 符号的所有分量为零.

:::

因为联络的所有分量为零 = 测地线方程是直线；而不全为零时测地线不是直线，所以联络相应于「引力场强 / 惯性场强」. 上面的定理在这样的理解下，就变成对于无挠 Riemann 时空中的任何一点，都可以找到一个局域的自由落体坐标系. 所以这个定理就是等效原理的数学基础.

而有挠率的空间找不到这样的变换，因为挠率是张量，不可能通过坐标变换把它的所有分量都变成零，因此我们的时空只能是无挠率的.

## 短程线

在 Euclidean 空间中，短程线是直线；现在利用变分求 Riemann 空间中两点间的短程线.

定义泛函
$$
S=\int_A^B\text{d}s
$$
作为连接 $A$ 和 $B$ 的曲线长度. 短程线满足变分为零，也就是
$$
\delta S=\delta\int_A^B\text{d}s=0
$$
而 $\text{d}s=(g_{\alpha\beta}\text{d}x^\alpha\text{d}x^\beta)^{1/2}$，若引入一个标量 $\lambda$ 来描述曲线 $x^\mu=x^\mu(\lambda)$，上式可以化为
$$
\text{d}s=\left(g_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}\lambda}\frac{\text{d}x^\beta}{\text{d}\lambda}\right)^{1/2}\text{d}\lambda=\left(g_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta\right)^{1/2}\text{d}\lambda=L\text{d}\lambda
$$
``\dot{}`` 是导数的简写，最后一个等号则定义了 Lagrange 函数.

变分的 Euler - Lagrange 方程为
$$
\frac{\partial L}{\partial x^\nu}-\frac{\text{d}}{\text{d}\lambda}\frac{\partial L}{\partial\dot{x}^\nu}=0
$$
代入 $L$ 得到
$$
\frac{1}{\sqrt{g_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta}}\frac{\partial g_{\alpha\beta}}{\partial x^\nu}\dot{x}^\alpha\dot{x}^\beta=\frac{\text{d}}{\text{d}\lambda}\left(\frac{g_{\alpha\nu}\dot{x}^\alpha+g_{\nu\beta}\dot{x}^\beta}{\sqrt{g_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta}}\right)=\frac{\text{d}}{\text{d}\lambda}\left(\frac{2\dot{x}_\nu}{\sqrt{g_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta}}\right)
$$
如果取 $\lambda$ 为曲线长度 $s$，那么
$$
g_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta=g_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}=1
$$
(因为曲线长度本身随着曲线长度的增长率就是 1) 这简化了方程，
$$
\begin{aligned}
\frac{1}{2}g_{\alpha\beta,\nu}\dot{x}^\alpha\dot{x}^\beta&=\frac{\text{d}}{\text{d}s}(g_{\alpha\nu}\dot{x}^\alpha)\\\\
\frac{1}{2}g_{\alpha\beta,\nu}\dot{x}^\alpha\dot{x}^\beta&=g_{\alpha\nu}\frac{\text{d}^2x^\alpha}{\text{d}s^2}+\frac{\text{d}g_{\alpha\nu}}{\text{d}x^\beta}\frac{\text{d}x^\beta}{\text{d}s}\frac{\text{d}x^\alpha}{\text{d}s}\\\\
g_{\alpha\nu}\frac{\text{d}^2x^\alpha}{\text{d}s^2}&=\left(\frac{1}{2}g_{\alpha\beta,\nu}-g_{\alpha\nu,\beta}\right)\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}
\end{aligned}
$$
注意到这里 RHS 的 $\alpha$ 和 $\beta$ 指标完全对称，有
$$
g_{\alpha\nu,\beta} = \frac{1}{2}(g_{\alpha\nu,\beta}+g_{\beta\nu,\alpha})
$$
于是
$$
\begin{aligned}
g_{\alpha\nu}\frac{\text{d}^2x^\alpha}{\text{d}s^2}+\frac{1}{2}(g_{\alpha\nu,\beta}+g_{\beta\nu,\alpha}-g_{\alpha\beta,\nu})\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}&=0\\\\
\frac{\text{d}^2x^\mu}{\text{d}s^2}+\frac{1}{2}g^{\mu\nu}(g_{\alpha\nu,\beta}+g_{\beta\nu,\alpha}-g_{\alpha\beta,\nu})\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}&=0
\end{aligned}
$$
和我们定义的 Christoffel 符号一致，最终得到
$$
\frac{\text{d}^2x^\mu}{\text{d}s^2}+\Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}=0
$$
这和我们之前定义的测地线方程完全一致，唯一的区别在于这里的联络多了 Christoffel 符号的限制，只能在无挠率的 Riemann 时空中成立，而且是关于下标对称的.

在无挠率 Riemann 时空，测地线就是短程线.

::: danger

上面推导给了我们一个启发：测地线可以用「长度」作为参数，这是仿射参量.

但是之后会遇到的描述光线的「零测地线」，因为其「长度」为零，所以 $\text{d}s=0$，不能作仿射参量.

:::

## Riemann 空间的曲率张量

仍然在无挠率的空间讨论.

### 曲率张量的对称性

在 <a href="#曲率与挠率">曲率与挠率</a> 中给出了曲率张量和联络的关系：

<a name="5"></a>
$$
R^\rho_{\lambda\mu\nu}=\Gamma^\rho_{\lambda\nu,\mu}-\Gamma^\rho_{\lambda\mu,\nu}+\Gamma^\rho_{\sigma\mu}\Gamma^\sigma_{\lambda\nu}-\Gamma^\rho_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}\tag{5}
$$
而且得到了反对称性，也就是 $R^\rho_{\lambda\mu\nu}=-R^\rho_{\lambda\nu\mu}$. 在无挠率的空间，曲率张量会有很多更好的性质，为方便讨论，引入 $(0,4)$ 型表示 (降逆变指标)：
$$
R_{\rho\lambda\mu\nu}\equiv g_{\rho\sigma}R^\sigma_{\lambda\nu\mu}
$$
可以证明这一表示有几个性质：

1. 后一对指标反对称；

2. 前一对指标反对称；

3. 前一对指标与后一对指标对称；

4. Ricci 恒等式：
   $$
   R^\rho_{\lambda\mu\nu}+R^\rho_{\mu\nu\lambda}+R^\rho_{\nu\lambda\nu}=0\,,\quad R_{\rho\lambda\mu\nu}+R_{\rho\mu\nu\lambda}+R_{\rho\nu\lambda\nu}=0
   $$

### 三个派生的重要张量

曲率张量缩并可以得到三个重要张量：

(1) Ricci 张量：我们已经知道曲率张量只有两种独立的缩并方式，但是在 Riemann 空间中，Christoffel 符号的对称性增加了曲率张量的对称性，有
$$
A_{\mu\nu}=R^\lambda_{\lambda\mu\nu}=0
$$
::: warning

<a name="b"></a>

书中没说理由，来直接用定义算一下：
$$
\begin{aligned}
R^\lambda_{\lambda\mu\nu}&=\Gamma^\lambda_{\lambda\nu,\mu}-\Gamma^\lambda_{\lambda\mu,\nu}+\Gamma^\lambda_{\sigma\mu}\Gamma^\sigma_{\lambda\nu}-\Gamma^\lambda_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}\\\\
&=\frac{\partial}{\partial x^\mu}\Gamma^\lambda_{\lambda\nu}-\frac{\partial}{\partial x^\nu}\Gamma^\lambda_{\lambda\mu}+\Gamma^\lambda_{\sigma\mu}\Gamma^\sigma_{\lambda\nu}-\Gamma^\lambda_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}
\end{aligned}
$$
现在先看后两项，第三项
$$
\Gamma^\lambda_{\sigma\mu}\Gamma^\sigma_{\lambda\nu}=\Gamma^\sigma_{\lambda\mu}\Gamma^\lambda_{\sigma\nu}=\Gamma^\lambda_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}
$$
==只是改变了傀标==，和第四项完全相同，所以原式化为
$$
R^\lambda_{\lambda\mu\nu}=\frac{\partial}{\partial x^\mu}\Gamma^\lambda_{\lambda\nu}-\frac{\partial}{\partial x^\nu}\Gamma^\lambda_{\lambda\mu}
$$

> 其实到这里可以发现，因为 $R^\lambda_{\lambda\mu\nu}$ 关于后一对协变指标对称，所以已经可以得到 $R^\lambda_{\lambda\mu\nu}=0$. 但是我一开始是问了 DeepSeek，它告诉我了一些别的计算，所以我还是写下来.

难点落在求 $\Gamma^\lambda_{\lambda\nu}$ 上. 这时考虑 Christoffel 符号的定义，
$$
\Gamma^\lambda_{\lambda\nu} = \frac{1}{2}g^{\lambda\sigma}(g_{\lambda\sigma,\nu}+g_{\nu\sigma,\lambda}-g_{\lambda\nu,\sigma})
$$
注意到后两项
$$
\begin{aligned}
g^{\lambda\sigma}g_{\nu\sigma,\lambda}-g^{\lambda\sigma}g_{\lambda\nu,\sigma}&=g^{\sigma\lambda}g_{\nu\lambda,\sigma}-g^{\lambda\sigma}g_{\lambda\nu,\sigma}\\\\
&=g^{\lambda\sigma}g_{\lambda\nu,\sigma}-g^{\lambda\sigma}g_{\lambda\nu,\sigma}=0
\end{aligned}
$$
(==第一个等号只是改变了第一项的傀标，第二个等号是利用度规张量的对称性==) 所以可以得到
$$
\Gamma^\lambda_{\lambda\nu} = \frac{1}{2}g^{\lambda\sigma}g_{\lambda\sigma,\nu}
$$
为了更好计算，我们引入 $g=\det|g_{\lambda\sigma}|$. 由线性代数的结论，
$$
\frac{\partial\det(A)}{\partial A_{ij}} = \det(A)(A^{-1})_{ji}
$$
于是
$$
\begin{aligned}
\frac{\partial g}{\partial g_{\lambda\sigma}} &= g\cdot g^{\lambda\sigma}\\\\
\frac{\partial g}{\partial x^\nu}&=\frac{\partial g}{\partial g_{\lambda\sigma}}g_{\lambda\sigma,\nu}=gg^{\lambda\sigma}g_{\lambda\sigma,\nu}\\\\
\Longrightarrow g^{\lambda\sigma}g_{\lambda\sigma,\nu}&=\frac{\partial}{\partial x^\nu}\ln|g|
\end{aligned}
$$
原来的曲率张量缩并变为
$$
R^\lambda_{\lambda\mu\nu}=\frac{1}{2}\left(\frac{\partial^2}{\partial x^\nu \partial x^\mu}-\frac{\partial^2}{\partial x^\mu\partial x^\nu}\right)\ln|g|=0
$$
证毕.

> 到这里为止我收获最大的就是换傀标名称这个操作，有时候有奇效，这就是对称性的魅力.

:::

上面证明了不能缩并逆变指标和第一个协变指标，因此我们只剩下一种缩并，这种缩并得到的张量称为 Ricci 张量：
$$
R_{\mu\nu} = R^\lambda_{\mu\lambda\nu}
$$
Ricci 张量对称：
$$
R_{\mu\nu}=g^{\lambda\rho}R_{\rho\mu\lambda\nu}=g^{\lambda\rho}R_{\lambda\nu\rho\mu}=g^{\rho\lambda}R_{\lambda\nu\rho\mu}=R^{\rho}_{\nu\rho\mu}=R_{\nu\mu}
$$
(又是利用对称性)

(2) 曲率标量：Ricci 张量的缩并称为曲率标量，
$$
R=g^{\mu\nu}R_{\mu\nu}=R^\mu{}_\mu
$$
(3) Einstein 张量：这是 Einstein 引入的一个对于广义相对论很有用的张量，
$$
G_{\mu\nu} \equiv R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R
$$

### 曲率张量的独立分量

讨论下面几种情况：(已经确认四个指标全部相同一定是 $0$)

1. 四个指标只有两个不同值：由反对称，
   $$
   R_{\mu\mu\mu\nu}=R_{\mu\mu\nu\nu}=0
   $$
   只有唯一的独立排列 $R_{\mu\nu\mu\nu}$. 这种情况下不为零的独立分量个数是
   $$
   1\times C_n^2=\frac{n!}{2!(n-2)!}
   $$
   (这里的 $n$ 是维数，第一个因子是排列的可能数，第二个因子是维度中选出 2 个不同值的可能数)

2. 四个指标中有三个不同值：从 $n$ (维度) 中取三个数作为指标，有 $C_n^3$ 种取法，剩下一个一定和这三个中的一个相同. 因为前后两对分别反对称，所以相同的两个指标不能同时在前也不能同时在后，于是是一前一后. 但是后一对和前一对对称，所以只有一种独立排列；但是第四个指标有三种选择，所以独立分量数是
   $$
   3\times1\times C_n^3 = \frac{n!}{2!(n-3)!}
   $$
   (第一个因子是第四个指标的可能选择数，第二个因子是排列的可能数，第三个因子是维度中选出 3 个不同值的可能数)

3. 四个指标全部不同：不考虑 Ricci 恒等式，$C_n^4$ 种取法中每一种组合都对应三种独立排列方式 (原本是 $A^4_4=24$ 种排列，后一对和前一对对称，减少一半排列数；前后两对分别反对称，独立排列数再减为原来的 $1/4$，最后剩了 $3$ 种独立排列)，再考虑 Ricci 恒等式，减少一个独立排列，最后剩下 $2$ 种.

   独立分量数：
   $$
   2\times C^4_n = \frac{2\times n!}{4!(n-4)!}
   $$
   (第一个因子是每一种取法对应的排列可能数，第二个因子是维度中选出 4 个不同值的可能数)

综上所述，独立分量个数有
$$
N=C_n^2+3C_n^3+2C_n^4=\frac{n^2(n^2-1)}{12}
$$
简单计算可知 $N(4)=20$，$N(3)=6$，$N(2)=1$.

另外，Ricci 张量和 Einstein 张量都是对称张量，独立分量个数是
$$
N=n+(n-1)+\cdots+1=\frac{n(n+1)}{2}
$$
(就是左下角的三角形种分量的个数) 在 4 维空间它有 $10$ 个独立分量.

曲率标量是不变量，只有一个独立分量.

### 空间的平坦性

因为已经有挠率为零了，如果这时候曲率张量所有分量全是零，那么一定能找到一个坐标，这里面 Christoffel 符号的所有分量为零 (见 <a href="#a">定理</a>)，

::: details <a href="#a">定理</a> 的证明

之前似乎没有证明这个定理，在这里简单说明一下 (避免之后我自己看不懂)：首先选择 $P$ 点的一组坐标基，因为没有曲率和挠率 (矢量的平行移动结果与路径无关)，可以通过矢量从 $P$ 点开始的平行移动来生成一个全空间的矢量场.

之后可利用线性代数中的结论证明这个坐标基和原来坐标系的基矢量对易，因此可以作为新坐标系的基矢量，在新坐标系联络为零.

:::

联络分量全部为零 $\Longleftrightarrow$ 度规张量普通微商 $g_{\mu\nu,\lambda}=0$，也就是说度规张量分量全是常数，这样的空间是 **平坦的**，度规可以化成 Minkowski 度规.

曲率张量分量全部为零是空间平坦性的判据.

### Bianchi 恒等式

从曲率张量的定义式 <a href="#5">(5)</a> 出发，可以得到所谓的 Bianchi 恒等式：
$$
R^\rho_{\lambda\mu\nu;\sigma}+R^\rho_{\lambda\nu\sigma;\mu}+R^\rho_{\lambda\sigma\mu;\nu}=0
$$
/Proof/

> 张量关系式不随坐标系而改变，为方便，选择 $P$ 点处联络为零的坐标系. 显然在 $P$ 点有
> $$
> R^\rho_{\lambda\mu\nu;\sigma}=R^\rho_{\lambda\mu\nu,\sigma}
> $$
> 也就是
> $$
> \begin{aligned}
> R^\sigma_{\lambda\mu\nu;\sigma}&=(\Gamma^\rho_{\lambda\nu,\mu}-\Gamma^\rho_{\lambda\mu,\nu})_{,\sigma}+(\Gamma^\rho_{\alpha\mu}\Gamma^\alpha_{\lambda\nu}-\Gamma^\rho_{\alpha\nu}\Gamma^\alpha_{\lambda\mu})_{,\sigma}\\\\
> &=(\Gamma^\rho_{\lambda\nu,\mu}-\Gamma^\rho_{\lambda\mu,\nu})_{,\sigma}\\\\
> &=\Gamma^\rho_{\lambda\nu,\mu,\sigma}-\Gamma^\rho_{\lambda\mu,\nu,\sigma}
> \end{aligned}
> $$
> 没挠率的话后面两项似乎一直是零，其实根本没必要写出来罢. 同理可以计算 Bianchi 恒等式里的另外两项，相加就证明了恒等式.

---

缩并 Bianchi 恒等式的指标 $\rho$ 和 $\sigma$，并利用 Ricci 张量的定义，得到
$$
\begin{aligned}
R^\sigma_{\lambda\mu\nu;\sigma}+R^{\sigma}_{\lambda\nu\sigma;\mu}+R^\sigma_{\lambda\sigma\mu;\nu}&=0\\\\
R^\sigma_{\lambda\mu\nu;\sigma}-R^{\sigma}_{\lambda\sigma\nu;\mu}+R^\sigma_{\lambda\sigma\mu;\nu}&=0\\\\
R^\sigma_{\lambda\mu\nu;\sigma}-R_{\lambda\nu;\mu}+R_{\lambda\mu;\nu}&=0
\end{aligned}
$$
两边同时乘以 $g^{\nu\lambda}$，因为 $g^{\nu\lambda}{}_{;\alpha}=0$ 所以可以很容易凑出全微分，得到
$$
R^\sigma_{\mu;\sigma}-R_{;\mu}+R^\nu_{\mu;\nu}=0\Longrightarrow2R^\nu_{\mu;\nu}-R_{;\mu}=0
$$
定睛一看，这和 Einstein 张量有类似的形式，所以有下面三种表述：
$$
\begin{aligned}
\left(R^\nu{}_\mu-\frac{1}{2}\delta^\nu{}_\mu R\right)_{;\nu}&=0\\\\
\left(R^{\mu\nu}-\frac{1}{2}g^{\mu\nu} R\right)_{;\nu}&=0\\\\
\left(R_{\mu\nu}-\frac{1}{2}g_{\mu\nu} R\right)^{;\nu}&=0
\end{aligned}
$$
这表明 Einstein 张量的协变散度为零.

## 几个重要的运算

::: tip

内心 OS：终于到这里，这章快要结束了.

:::

### 度规的微分

(欸这个我是不是之前已经用到了？<a href="#b">证明 Ricci 张量是曲率张量的唯一缩并</a> 的时候)

设 $g=\det|g_{\mu\nu}|$，$\Delta^{\mu\nu}$ 为 $g_{\mu\nu}$ 的代数余子式，有
$$
g\delta^\nu{}_\alpha=g_{\alpha\rho}\Delta^{\nu\rho}
$$
逆变度规张量的定义就是 $g^{\mu\nu} \equiv\Delta^{\mu\nu}/g$，所以这里可以得到
$$
\frac{\partial g}{\partial g_{\mu\nu}}=\Delta^{\mu\nu}=gg^{\mu\nu}
$$
于是
$$
\text{d}g=g\cdot g^{\mu\nu}\text{d}g_{\mu\nu}=g\cdot[\text{d}(g^{\mu\nu}g_{\mu\nu})-g_{\mu\nu}\text{d}g^{\mu\nu}]=-g\cdot g_{\mu\nu}\text{d}g^{\mu\nu}
$$
利用了一下 $g^{\mu\nu}g_{\mu\nu}$ 全微分为零.

::: warning

这时候有人要问了：之前不还是偏导数吗，怎么到这里不写 $\partial$ 开始写 $\text{d}$ 了？

A：要知道，这可是 Einstein 求和啊，当然写出来的是全微分.

:::

此外，还得到了我刚刚用到了的式子：
$$
\frac{\partial g}{\partial x^\sigma}=g\cdot g^{\mu\nu} g_{\mu\nu,\sigma}=-g\cdot g_{\mu\nu}g^{\mu\nu}{}_{,\sigma}
$$
这些运算和之前提到过的「度规张量协变微商为零」都是广义相对论中常用的计算.

### 一个特殊的 Christoffel 符号

$$
\Gamma^\mu_{\alpha\mu} = \frac{1}{2}g^{\mu\nu}g_{\mu\nu,\alpha}=-\frac{1}{2}g_{\mu\nu}g^{\mu\nu}{}_{,\alpha}=\frac{1}{2g}\frac{\partial g}{\partial x^\alpha}=\frac{\partial}{\partial x^\alpha}\ln\sqrt{|g|}
$$

这个也是和上面一样，在 <a href="#b">这里</a> 用到过了. 另外，因为我们规定好了号差，所以这里可以直接写 $|g|=-g$.

### 散度的运算

和 Euclidean 空间类似，但是用协变微商换掉普通微商 (毕竟要得到一个标量). 散度运算使张量降阶，而且要注意的是：==对协变指标求散度，定义为把指标升高之后再求散度.==

逆变矢量的散度：
$$
\operatorname{div}A^\mu=A^\mu{}_{;\mu}=A^\mu{}_{,\mu}+\Gamma^\mu_{\alpha\mu}A^\alpha=\frac{1}{\sqrt{-g}}\frac{\partial}{\partial x^\mu}(\sqrt{-g}\cdot A^\mu)
$$
d'Alembert 算子：
$$
\Box\Phi=\operatorname{div}(\operatorname{grad}\Phi)=\operatorname{div}\left(g^{\mu\nu}\frac{\partial\Phi}{\partial x^\nu}\right)=\frac{1}{\sqrt{-g}}\frac{\partial}{\partial x^\mu}\left(\sqrt{-g}\cdot g^{\mu\nu}\frac{\partial\Phi}{\partial x^\nu}\right)
$$
二阶逆变张量的散度：
$$
C^{\mu\nu}{}_{;\nu}=\frac{1}{\sqrt{-g}}\frac{\partial}{\partial x^\nu}(C^{\mu\nu}\sqrt{-g})+\Gamma^\mu_{\nu\sigma}C^{\nu\sigma}
$$
如果这个二阶逆变张量反称，那么后面一项显然为零，注意到这一点可以简化计算.

### 旋度的运算

和散度一样，也应该用协变微商代替普通微商. 但是可以证明，这里用哪一个都是一样的 (简单想一下，就是做差的时候多的一项被抵消掉了，比较显然). 所以旋度运算和 Euclidean 空间完全一致.

旋度运算使得协变矢量场变成二阶反称张量场，使二阶反称张量场变成三阶反称张量场.
$$
\begin{aligned}
\operatorname{curl}_{\mu\nu}A_\mu&\equiv A_{\mu;\nu}-A_{\nu;\mu} = A_{\mu,\nu}-A_{\nu,\mu}\\\\
\operatorname{curl}_{\mu\nu}A_{\mu\nu}&\equiv A_{\mu\nu;\tau}+A_{\nu\tau;\mu}+A_{\tau\mu;\nu}=A_{\mu\nu,\tau}+A_{\nu\tau,\mu}+A_{\tau\mu,\nu}
\end{aligned}
$$

### 体元的变换

赝张量定义为
$$
T^{\mu\nu}=\frac{\alpha}{|\alpha|}\frac{\partial x^\mu}{\partial x'^\rho}\frac{\partial x^\nu}{\partial x'^\sigma}T'^{\rho\sigma}
$$
式中，$\alpha$ 为坐标变换矩阵的行列式，$|\alpha|$ 为 $\alpha$ 的绝对值. 对于不含反射的坐标变换，$\alpha/|\alpha|=+1$，这时赝张量的变换和张量相同；有反射变换，系数就是 $-1$，赝张量的变换比张量变换多一个负号.

不加证明地指出，体元在坐标变换下的规律是：
$$
\sqrt{-g}\cdot\text{d}^4x=\frac{\alpha}{|\alpha|}\sqrt{-g'}\cdot\text{d}^4x'
$$
体元是赝标量.

---

2025/09/02 - 02:31，终于结束这一章的阅读笔记了. 之后来做习题. 由于我的 Typora 在将近 1.7w 字的重压下已经不堪重负，我决定单开一篇笔记来写习题. 这章 (或者说这整本书) 的习题并不多，如果之后都是单开一篇笔记来写习题，我想可以写得更详细些.
