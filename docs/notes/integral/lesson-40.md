---
title: Lesson 40 最值定理 & 导数
permalink: /integral/lesson-40/
createTime: 2025/3/21 12:23:27
---
## 紧致性

/Definition/

> 称拓扑空间 $(X,\mathscr{T})$ 是紧致的 (compact)，如果 $X$ 的任何开覆盖皆有有限子覆盖.
>
> 即，$\forall X$ 的覆盖 $\mathscr{U}=\{U_\alpha,\alpha\in I\}$，$U_\alpha\in\mathscr{T}$，都可以从 $\mathscr{U}$ 中选择有限个成员覆盖 $X$.

上节课的一个例子是 $\R^n$ 的通常拓扑空间不是紧致的，因为这样的开覆盖 $\mathscr{U}=\{B_n(\vec{0})|n\in\mathbb{Z}_+\}$ 没有有限子覆盖.

这件事情导致我们在处理 $\R^n$ 上的最值存在性问题时遇到一些麻烦.

接下来我们考虑 $X\subseteq\R^n$ 的紧致性：如何定义 $X$ 的紧致性？显然我们只能选择 $X$ 因为 $\R^n$ 而来的诱导拓扑，这是比较普遍的方案. 即，$X$ 的开集 $=(\R^n$ 的开集 $U)\cap X$.

/Definition/

> 称 $X$ 是 $\R^n$ 的紧致子集，如果 $X$ 在 $\R^n$ 通常拓扑的诱导拓扑下是紧致的.
>
> 具体而言，$X$ 的任何开覆盖 $\mathscr{V}=\{V_\alpha=U_\alpha\cap X:U_\alpha$ 是 $\R^n$ 的开集$\}$.
>
> $\mathscr{V}$ 是 $X$ 的开覆盖 $\Longleftrightarrow$ $\underset{\alpha}{\bigcup}V_\alpha=X$ $\Longleftrightarrow$ $\underset{\alpha}{\bigcup}(U_\alpha\cap X)=X$ $\Longleftrightarrow$ $\underset{\alpha}{\bigcup}U_\alpha\supseteq X$.
>
> 因此我们可以说，$X$ 紧致等价于存在 $\underset{\alpha}{\bigcup}U_\alpha\supseteq X$.

/Claim/

> 设 $X\subseteq\R^n$，则 $X$ 紧致 $\Longleftrightarrow$ 若 $\mathscr{U}=\{U_\alpha\}\subseteq\mathscr{T}_{\R^n}$，$\exist\bigcup U_\alpha\supseteq X$.

证明其实在定义中讲到，这就是同义转换罢了.

但是即使我们做了这样的同义转换，我们还是要问：如何判断 $X$ 紧致？

/Theorem/ (Borel)

> 设 $X\subseteq\R^n$，则 $X$ 紧致 $\Longleftrightarrow$ $X$ 是有界的闭集 ($\exist B_R(\vec{0})\subseteq X$).

/Proof/

> 我们可以认为这是上学期[证明](/integral/eovrwwsw/#有界性、最值定理)过的 Borel 定理之推广，当然也可以看下面的证明.
>
> “$\Longrightarrow$”的证明：设 $X$ 紧致，$\mathscr{U}=\{B_m(\vec{0}):m\in\mathbb{Z}_+\}$ 是一个 $\R^n$ 的开覆盖，理应可以在其中找到一个有限子覆盖：
> $$
> B_{m_t}(\vec{0})=B_{m_1}(\vec{0})\cup\cdots\cup B_{m_t}(\vec{0})\supseteq X\,,\quad(m_1<\cdots<m_t)
> $$
> 这表明 $X$ 有界.
>
> 接下来证明 $X$ 是闭集，也就是证明 $X^C$ 是开集，等价于验证 $X^C$ 的每个点 $\vec{y}$ 是 $X^C$ 的内点. 为此，约定“带边球” $\overline{B_R(x)}=\{y:d(y,x)\leq R\}$，显然带边球是 $\R^n$ 的闭集.
>
> 考虑
> $$
> \mathscr{V}=\left\{V_m=\left(\overline{B_{1/m}(\vec{y})}\right)^C\right\}
> $$
> 可知 $V_m$ 是 $\R^n$ 的开集，“一个包含一个”，大指标的 $V_m$ 包含在小指标的 $V_m$ 中.
> $$
> \bigcup_m V_m=\bigcup_m\left(\overline{B_{1/m}(\vec{y})}\right)^C=\left(\bigcap^\infty_{m=1}\overline{B_{1/m}(\vec{y})}\right)^C=\{\vec{y}\}^C\supseteq X
> $$
> 因为 $X$ 紧致，所以 $\exist$ 一个有限子覆盖包含 $X$，因此最大的指标 $m_t$ 对应的带边球包含 $X$，所以 $X^C\supseteq \overline{B_{1/m_t}(\vec{y})}\supset B_{1/m}(\vec{y})$，所有 $\vec{y}$ 均是 $X^C$ 内点，得证.
>
> ---
>
> “$\Longleftarrow$”的证明：这一个证明和上面制备开覆盖的证明过程相比，是非平凡的.
>
> 1. 特例：$I=$ 矩体 $=[a_1,b_1]\times[a_2,b_2]\times\cdots\times[a_n,b_n]$. 来证明 $I$ 紧致，为此，设 $\mathscr{U}=\{U_\alpha\}\subseteq\mathscr{T}_{\R^n}$，反证：设 $\mathscr{U}$ 无 $I$ 的有限子覆盖.
>
>    **和上学期类似，用“区间套分割”的方法**.
>
>    将 $I$ 每个坐标轴方向的 $[a_i,b_i]$ 均分成两份，得到 $2^n$ 个小矩体，由 $I$ 无 $\mathscr{U}$ 的有限子覆盖，得到这 $2^n$ 个小矩体中一定也有一个 $I_1$ 也没有 $\mathscr{U}$ 的有限子覆盖，……
>
>    依次，得到矩体下降链 $I\supseteq I_1\supseteq I_2\supseteq\cdots I_m\supseteq\cdots$，每一个均具有相同性质 (无 $\mathscr{U}$ 的有限子覆盖). 这相当于一种高维的区间套 (因为每个坐标上都是一个一维的区间套)，得到 $\bigcap I_m=\{\vec{z}\}$ 为单点集.
>
>    这样，$\vec{z}\in I\subset\underset{\alpha}{\bigcup}U_\alpha$，知道 $\vec{z}\in$ 某个 $U_\alpha$，由 $U_\alpha\in\mathscr{T}_{\R^n}$ 知 $\exist B_r(\vec{z})\subseteq U_\alpha$，所以对于充分大的 $m$ 会有 $I_m\subseteq U_\alpha$，矛盾！
>
> 2. 对于一般的有界闭集 $X$，设 $\mathscr{V}=\{V_\alpha\}$ 是 $X$ 在 $\R^n$ 中的开覆盖. 因为 $X$ 有界，所以取矩体 $I$ 使得 $I\supseteq X$.
>
>    由 $X$ 闭 $\Longrightarrow$ $X^C$ 开，令 $\mathscr{U}=\mathscr{V}\cup\{$开集 $X^C\}$，则：
>    $$
>    (\bigcup_\alpha V_\alpha)\cup X^C\supseteq X\cup X^C=\R^n\supseteq I
>    $$
>    表明 $\mathscr{U}$ 是 $I$ 在 $\R^n$ 中的开覆盖，有 $\mathscr{U}$ 的有限子覆盖，即可以从 $\mathscr{U}=\mathscr{V}\cup X^C$ 中选取有限个成员 cover $I$，特别地，这有限个成员同时 cover $X$.
>
>    由 $X\cap X^C=\varnothing$，得到上述选出 $\mathscr{V}$ 的有限个成员 cover $X$，这就验证了 $X$ 紧致.
>
> 完全证毕.

::: center
|$X$ 的开覆盖| $X$ 在 $\R^n$ 中的开覆盖                   |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| $\mathscr{V}=\{V_\alpha\}$，$V_\alpha$ 是 $X$ 的开集，$\underset{\alpha}{\bigcup}V_\alpha=X$. | $\mathscr{U}=\{U_\alpha\}$，$U_\alpha$ 是 $\R^n$ 的开集，$\underset{\alpha}{\bigcup}U_\alpha\supseteq X$. |

:::

所以有命题：

/Claim/

> $X$ 紧致 $\Longleftrightarrow$ $X$ 的任何开覆盖都有有限子覆盖 $\Longleftrightarrow$ $X$ 在 $\R^n$ 中任何开覆盖皆有有限子覆盖.

下面进一步探究：

/Theorem/

> 设 $X$ 是 $\R^n$ 的紧致子集，则 $X$ 上的任何连续函数 $f$ 都有最值，特别地，$f$ 有界.

$X$ 的紧致性 $\Longleftrightarrow$ $X$ 的任何开覆盖都有有限子覆盖，这就是说 $X$ 在开覆盖的意义下具有某种“**有限性**”.

$f:X\to Y$ 连续 $\Longleftrightarrow$ $f$ 没有被“撕开”，这样，若 $X$ 紧致，则 $f:X\to Y$ 连续，$f[X]$ 紧致.

因此我们先来看下面的定理和证明：

/Theorem/

> 若 $X$ 紧致，则 $f:X\to Y$ 连续，$f[X]$ 紧致.

/Proof/

> 来证明 $f[X]$ 紧致，只需验证 $f[X]$ 在 $Y$ 中任何开覆盖 $\mathscr{V}=\{V_\alpha\}$ 有有限子覆盖.
>
> 由 $f$ 连续知，$U_\alpha=f^{-1}[V_\alpha]$ 是 $X$ 的开集，显然 $\underset{\alpha}{\bigcup}U_\alpha=X$. 原因：
> $$
> X=f^{-1}[f[X]]\subseteq f^{-1}\left[\bigcup V_\alpha\right]=\bigcup f^{-1}[V_\alpha]
> $$
> 由 $X$ 紧致，$\{U_\alpha\}$ 是 $X$ 的开覆盖，得到存在一个有限子覆盖包含 $X$，于是
> $$
> \begin{aligned}
> f[X]&=f[U_{\alpha_1}\cup\cdots\cup U_{\alpha_t}]\\\\
> &=f[U_{\alpha_1}]\cup\cdots\cup f[U_{\alpha_t}]\\\\
> &\subseteq V_{\alpha_1}\cup\cdots\cup V_{\alpha_t}
> \end{aligned}
> $$
> (其中用到 $U_{\alpha}=f^{-1}[V_\alpha]$，所以 $f[U_\alpha]\subseteq V_\alpha$.)
>
> 这表明 $f[X]$ 可以被有限个 $V_{\alpha_t}$ 覆盖，证明完毕.

/Proof/ (最值定理)

> 已知 $X$ 紧致，$f:X\to\R$ 连续 $\Longrightarrow$ $f[X]$ 紧致 $\overset{\text{Borel}}{\Longrightarrow}$ $f[X]$ 是 $\R$ 的有界闭集.
>
> 这就得到 $f[X]$ 有界 (证明了有界性 / 最值定理)
>
> 由 $f[X]$ 非空且有界，知道 $\sup f[X]$ 存在 (记为 $M$)，有命题：
>
> ---
>
> /Claim/
>
> > $\sup f[X]=M\in f[X]$ (表明 $M$ 是 $f[X]$ 的最大元素).
>
> ---
>
> /Proof/
>
> > 反证：设 $M\notin f[X]$ $\Longrightarrow$ $M\in f[X]^C$，由 $f[X]$ 是闭集得到 $f[X]^C$ 是开集，从而 $M$ 是 $f[X]^C$ 的内点，$\exist B_r(M)\subseteq f[X]^C$，这样，$(M-r,M]$ 中没有 $f$ 的像点，且我们同时知道 $f$ 的所有像点都小于 $M$，得到
> > $$
> > f[X]\subseteq(-\infty,M-r]\Longrightarrow\sup f[X]\leq M-r
> > $$
> > 与 $\sup f[X]=M$ 矛盾.
>
> 因此最值定理得证.

### 最值定理的应用

最著名的例子是线性代数中的：

/Theorem/

> 实对称方阵皆可正交对角化 (实对称方阵由实的特征值)

/Proof/

> 可以用微积分给出证明. 设 $A=(a_{ij})_{1\leq i,j\leq n}$，$a_{ij}=a_{ji}\in\R$.
>
> 考虑：
> $$
> Q(x_1,\cdots,x_n)=\begin{pmatrix}
> x_1&\cdots&x_n
> \end{pmatrix}A\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}=\sum_i\sum_ja_{ij}x_ix_j
> $$
> 这是连续的. 我们来求 $Q$ 在 $S^{n-1}=\{(x_1,\cdots,x_n)|\sum x_i^2=1\}$ 的最值.
>
> 1. 最值的存在性？
>
>    $S^{n-1}$ 紧致 $\overset{\text{Borel}}{\Longleftrightarrow}$ $S^{n-1}$ 有界，闭集. 由最值定理，$Q$ 在 $S^{n-1}$ 上有最大值.
>
>    设 $Q$ 在 $S^{n-1}$ 上有最大值点 $\vec{a}$.
>
> 2. Lagrange 乘子法
>
>    可以证明，$A\vec{a}=\lambda\vec{a}$.
>
> ::: tip
>
> 因为他还没有讲偏导数，所以这里扯到 Lagrange 乘子法实属无聊，也只能提到“可以证明”了.
>
> :::

问题：我们经常讨论 $f:\R^n\to\R$ 是否有最小值？

这里没办法使用最值定理，因为 $\R^n$ 并非紧致. 因此我们需要“剥夺”远处的点竞争最值点的权利.

/Claim/

> 设 $f:\R^n\to\R$ 连续，且 $\underset{|x|\to\infty}{\lim}f(\vec{x})=+\infty$，则 $f$ 在 $\R^n$ 上有最小值.

先引入一个定义：

/Definition/

> $\underset{|x|\to+\infty}{\lim}f(\vec{x})=+\infty$，当且仅当 $\forall k$，$\exist M$，$\forall|x|>M$ 有 $f(\vec{x})>k$.

/Proof/ (命题证明)

> 取 $k=f(\vec{0})$，则由定义知道 $\exist M$ 使得 $\forall|x|>M$ 有 $f(x)>k$. 令 $D=\overline{B_M(0)}$ 是有界闭球，用最值定理得到 $f:D\to\R$ 存在最小值 $f(\vec{x}_0)$ ($\vec{x}_0\in D$).
>
> 这样 $\forall|x|>M$，$f(x)>f(0)\geq f(x_0)$，还有 $\forall y\in D$，$f(y)\geq f(x_0)$，表明 $f(x_0)=\min f$.

## 微分 & 求导

用之前“道路”的概念，研究 $g(t)=f(p(t))$.

$\R^n$ 中最简单的 path 是直线段，$p(t)=\vec{x}_0+\vec{v}t$，$p:\R\to\R^n$. 我们允许 $|\vec{v}|\neq1$.

/Definition/ (多元函数的导数)

> 设 $f:D\to\R$，$D\subseteq\R^n$. 设 $x_0$ 是 $D$ 的内点，令 $g(0)=f(x_0)$，$g(t)=f(p(t))=f(x_0+vt)$.
>
> 则
> $$
> \left.\frac{\text{d}}{\text{d}t}\right|_{t=0}g(t)=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(\vec{x}_0+\vec{v}t)=\lim_{t\to0}\frac{f(\vec{x}_0+\vec{v}t)-f(\vec{x}_0)}{t}
> $$
> 称为 $f$ 在 $x_0$ 处沿方向 $\vec{v}$ 的方向导数，记为：
> $$
> \frac{\partial f}{\partial\vec{v}}(x_0)=\frac{\partial f(x_0)}{\partial\vec{v}}=\left.\frac{\partial f}{\partial v}\right|_{x_0}=\nabla_vf(x_0)=D_vf(x_0)=\partial_vf(x_0)
> $$
> (D 来源于导数的英文单词 derivative) 其中前三种在排版时有可能不太好看，现在大家更多使用后面几种了；当然在大量的中文教材中还是喜欢用前三种.

线性代数中，对于 $\R^n$ 空间 (线性空间) 有一组约定俗成的基底 $\hat{e}_1,\cdots,\hat{e}_n$，对于基底方向的导数：

/Definition/

> 称 $\nabla_{\hat{e}_k}f(\vec{x}_0)$ 为 $f$ 在 $x_0$ 处的第 $k$ 个偏导数.
>
> 等价写法：
> $$
> \frac{\partial f}{\partial x_k}(\vec{x}_0)=\partial f(\vec{x}_0)=\partial_k f(\vec{x}_0)=\cdots
> $$
> 最后一种最常用 (Levi - Civita 算符作用时一直用的是最后一种)
>
> 以分量写出，$\vec{x}_0=(x_1,\cdots,x_n)$，则
> $$
> \begin{aligned}
> &\nabla_{\hat{e}_k}f(x_1,\cdots,x_n)\\\\
> &=\lim_{t\to0}\frac{f((x_1,\cdots,x_k,\cdots,x_n)+t(0,\cdots,1,\cdots,0))-f(x_1,\cdots,x_n)}{t}
> \end{aligned}
> $$
> 解读为：冻结其他分量，视为关于 $x_k$ 的一元函数，再求导.

/Remark/

> 方向导数 / 偏导数的计算方式，实际上和一元函数情形没有区别：
> $$
> \nabla_vf(\vec{x}_0)=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(\vec{x}_0+\vec{v}t)\text{ or }\partial_kf(x_k)
> $$

/Claim/

> 1. $\nabla_{\vec{0}}f(\vec{x}_0)=0$；
>
> 2. $\nabla_{\lambda\vec{v}}f(\vec{x}_0)=\lambda\nabla_{\vec{v}}f(\vec{x}_0)$；
>
> 3. Leibniz 法则：
>    $$
>    \nabla_{\vec{v}}(fg)(\vec{x}_0)=(\nabla_{\vec{v}}f(\vec{x}_0))g(\vec{x}_0)+f(\vec{x}_0)(\nabla_{\vec{v}}g(\vec{x}_0))
>    $$
>
> 4. $\partial_k(fg)=(\partial_kf)g+f(\partial_kg)$.

/Proof/

> 显然 1. 是 2. 的特例，4. 是 3. 的特例. 我们只证明 2. 和 3.
>
> ---
>
> 2.证明：
> $$
> \begin{aligned}
> \nabla_{\lambda v}f(x_0)&=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(x_0+\lambda vt)\\\\
> &=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}g(\lambda t)\overset{\text{Chain Rule}}{=}g'(\lambda t)|_{t=0}\cdot\lambda=\lambda g'(0)\\\\
> &=\lambda \left.\frac{\text{d}}{\text{d}s}\right|_{s=0}f(x_0+vs)
> \end{aligned}
> $$
> 得证.
>
> ---
>
> 3.证明：
> $$
> \begin{aligned}
> \nabla_v(fg)(x_0)&=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(x_0+vt)g(x_0+vt)\\\\
> &\overset{\text{Leibniz}}{=}\left(\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(x_0+vt)\right)g(x_0)+\text{etc.}\\\\
> &=(\nabla_vf(x_0))g(x_0)+f(x_0)(\nabla_vg(x_0))
> \end{aligned}
> $$
> 得证.

我们之前在一元函数中有一个命题，说：可导一定连续. 但是多元函数中这个命题并不一定成立，一个反例：

/Example/

> $$
> f(x,y)=\left\{\begin{array}{lr}
> \frac{|y|\sqrt{x^2+y^2}}{x}\,,\quad x\neq0\\\\
> 0\,,\quad x=0
> \end{array}\right.
> $$
>
> 来证明：
>
> 1. $f$ 在 $(0,0)$ 处有各个方向导数；
> 2. $f$ 在 $(0,0)$ 处不连续.
>
> 对于 1.，$\vec{v}=r(\cos\theta,\sin\theta)$，由 $\nabla_{\lambda v}f=\lambda\nabla_vf$，只需要计算 $r=1$ 情况. 那么有：
> $$
> \begin{aligned}
> \nabla_{(\cos\theta,\sin\theta)}f(\vec{0})&=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(t\cos\theta,t\sin\theta)\\\\
> &=\left\{\begin{array}{lr}
> \left.\frac{\text{d}}{\text{d}t}\right|_{t=0}0=0\,,\quad\cos\theta=0\\\\
> \left.\frac{\text{d}}{\text{d}t}\right|_{t=0}\frac{|t\sin\theta|\cdot|t|}{t\cos\theta}=\frac{|\sin\theta|}{\cos\theta}\,,\quad\cos\theta\neq0
> \end{array}\right.
> \end{aligned}
> $$
>
> ---
>
> 对于 2.，反证：假设 $f(x,y)$ 在 $(0,0)$ 处连续，则 $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall|(x,y)|<\delta$ 有 $|f(x,y)-f(0,0)|<\varepsilon$.
>
> 特别地，对于 $(x,y)=\frac{\delta}{2}(\cos\theta,\sin\theta)$，会得到不等式：$\frac{\delta}{2}|\tan\theta|<\varepsilon$，$\forall\theta$. 但是 $|\tan\theta|$ 无界，所以矛盾.