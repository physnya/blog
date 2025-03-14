---
title: Lesson 37 多元映射的极限
permalink: /integral/lesson-37/
createTime: 2025/3/14 12:16:28
---
## 多元映射 & 多元函数

$n$ 元函数指 $f:D\to\R$ ($D\subseteq\R^n$).

写 $\R^n$ 中的点时，我们有几种写法：
$$
\vec{x}=(x_1,\cdots,x_n)=\bold{x}=x
$$
其中最后一种写法是为了简便.

$n$ 元映射指 $f:D\to\R^m$ (矢量值函数)，对应着 $m$ 个分量函数 $f_i:D\overset{f}{\to}\R^m\overset{P_i}{\to}\R$.

多元映射写作 $f(\vec{x})=(f_1(\vec{x}),\cdots,f_m(\vec{x}))$.

/Example/ (线性函数 & 映射)

> $L:\R^n\to\R$，有
> $$
> L(x_1,\cdots,x_n)=\sum_nL_ix_i=\begin{pmatrix}
> L_1&\cdots&L_n
> \end{pmatrix}\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}
> $$
> 如果是线性映射 $L:\R^n\to\R^m$，则为矩阵
> $$
> L(x_1,\cdots,x_n)=\begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&\ddots&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}
> $$
> 微分 $\longleftrightarrow$ $f$ 在某点附近的线性函数.

/Example/ (二次型)

> $$
> \begin{aligned}
> Q(x_1\cdots,x_n)&=\begin{pmatrix}
> x_1&\cdots&x_n
> \end{pmatrix}\begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&\ddots&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}\\
> &=\sum_{i=1}^na_{ii}x_i^2+2\sum_{i<j}a_{ij}x_ix_j
> \end{aligned}
> $$
>
> 显然 $Q(\vec{0})=0$.
>
> 称二次型 $Q$ (相应地对称矩阵 $A$) 是正定的，
>
> $\Longleftrightarrow$ $\forall\vec{x}\neq\vec{0}$ 有 $Q(\vec{x})=\vec{x}^TA\vec{x}>0$，
>
> $\Longleftrightarrow$ $A$ 的顺序主子式全正，即，
> $$
> \det\begin{pmatrix}
> a_{11}&\cdots&a_{1k}\\
> \vdots&\ddots&\vdots\\
> a_{k1}&\cdots&a_{kk}
> \end{pmatrix}>0\,,\quad\forall1\leq k\leq n
> $$
> (也就是 $A$ 的前 $k$ 行 & 前 $k$ 列交叉处的子矩阵)

## 度量

回忆上个学期定义了映射之后，我们首先定义了度量. 这里也是一样.

极限理论和连续性的中心概念是：**附近** $\longleftrightarrow$ 距离近的点

/Definition/

> 所谓 $X$ 上的一个度量 $d$，是指映射 $d:X\times X\to\R_{\geq0}$，满足：
>
> 1. 对称新：$d(x,y)=d(y,x)$；
> 2. 正定性：$d(x,y)=0\Longleftrightarrow x=y$；
> 3. 三角不等式：$d(x,y)+d(y,z)\geq d(x,z)$.

$\R^n$ 上有 Euclid 度量，是我们中学时就熟知的勾股定理所定义：
$$
d(\vec{x},\vec{y})=\sqrt{\sum_i(x_i-y_i)^2}
$$
这个度量显然满足前两个条件，只需要验证三角不等式：
$$
\sqrt{\sum_i(y_i-x_i)^2}+\sqrt{\sum_i(z_i-y_i)^2}\geq\sqrt{\sum_i(z_i-x_i)^2}
$$
/Proof/ (验证 Euclid 度量满足三角不等式)

> 记 $y_i-x_i=a_i$，$z_i-y_i=b_i$，则上式化为
> $$
> \sqrt{\sum_ia_i^2}+\sqrt{\sum_ib_i^2}\geq\sqrt{\sum_i(a_i+b_i)^2}
> $$
> 平方之后就是 Cauchy - Schwartz 不等式.

/Theorem/ (Cauchy - Schwartz 不等式)

> 对于 $\vec{a},\vec{b}\in\R^n$，定义内积 $\braket{\vec{a},\vec{b}}=\vec{a}\cdot\vec{b}=\sum_ia_ib_i$，模长 $|\vec{a}|=d(\vec{a},0)=\sqrt{\sum_ia_i^2}$.
>
> 则有不等式：
> $$
> -|\vec{a}||\vec{b}|\leq\vec{a}\cdot\vec{b}\leq|\vec{a}||\vec{b}|
> $$

以后证明“曲线长度 $\geq$ 线段长度”时需要使用这一定理.

/Proof/

> 定义 $g(t)=\braket{\vec{a}+t\vec{b},\vec{a}+t\vec{b}}\geq0$. 则可以具体写出
> $$
> g(t)=|\vec{b}|^2t^2+2\vec{a}\cdot\vec{b}t+|\vec{a}|^2\geq0
> $$
>
> 1. 若 $|\vec{b}|=0$，则定理是平凡的；
>
> 2. 若 $|\vec{b}|^2>0$，则为一个关于 $t$ 的抛物线，为使得恒正，判别式要非正，得到
>    $$
>    \Delta=4(\vec{a}\cdot\vec{b})^2-4|\vec{a}|^2|\vec{b}|^2\leq0
>    $$
>    得证.

此后我们将使用 Euclid 度量建立微分学.

## 拓扑

拓扑结构 $\longleftrightarrow$ 指定所有各种程度的“附近”

度量 $\Longrightarrow$ 度量拓扑

/Definition/

> 设 $d$ 是 $X$ 上的度量，开球 $B_r(x)=\{y\,|\,d(y,x)<r\}$ (以 $x$ 为中心，$r$ 为半径，不含边界的开球) 代表了 $x$ 的一个“附近”.

/Definition/

> $\mathscr{T}_d=\{U=$ 若干个开球之并$\}$，其中可以是无穷个开集之并.
>
> 称 $\mathscr{T}_d$ 成员 $U$ 为 $X$ 的开集，$U$ 为开集 $\Longleftrightarrow$ $U=\underset{\alpha\in I}{\bigcup}B_{r_\alpha}(x_i)$.
>
> 容易验证：
>
> * $\varnothing$ 和 $X$ 都是开集 (空集与全集)；
> * 有限个开集之交是开集；
> * 任意多个开集之并是开集.
>
> 称 $\mathscr{T}_d$ 给出了 $X$ 的度量拓扑.

上面“容易验证”的第一点和最后一点是显然的，只需验证第二点.

/Proof/

> 转化这个问题，我们发现只要两个开集之交为开集即可. 因此设 $U=\underset{\alpha}{\bigcup}B_\alpha$，$V=\underset{\beta}{\bigcup}B_\beta$ 皆是开球之并.
>
> 则 $U\cap V=\underset{\alpha}{\bigcup}\underset{\beta}{\bigcup}(B_\alpha\cap B_\beta)$. 只需证明开球之并为开球.
>
> 为此，设 $B_\alpha=B_{r_1}(x_1)$，$B_\beta=B_{r_2}(x_2)$. 对于 $\forall y\in B_{r_1}(x_1)\cap B_{r_2}(x_2)$，我们取一个 $0<r_y<\min(r_1-d(y,x_1),r_2-d(y,x_2))$，显然 $d(y,x_1)<r_1$ 且 $d(y,x_2)<r_2$. 从而 $\forall z\in B_{r_y}(y)$，
> $$
> \begin{aligned}
> d(z,x_1)&\leq d(z,y)+d(y,x_1)
> <r_y+d(y,x_1)<r_1
> \end{aligned}
> $$
> 因此，$B_{r_y}(y)\subseteq B_{r_1}(x_1)$，同理 $B_{r_y}(y)\subseteq B_{r_2}(x_2)$，所以
> $$
> B_{r_y}(y)\subseteq B_{r_1}(x_1)\cap B_{r_2}(x_2)=B_\alpha\cap B_\beta
> $$
> 这样，
> $$
> \bigcup_y\{y\}\subseteq\bigcup_{y\in B_\alpha\cap B_\beta}B_{r_y}(y)\subseteq B_\alpha\cap B_\beta
> $$
> 于是
> $$
> B_\alpha\cap B_\beta=\bigcup_{y\in B_\alpha\cap B_\beta}B_{r_y}(y)
> $$
> 为一族开球之并.

::: warning

无限个开集之交未必是开集！

一个例子是 $U_n=B_{1/n}(\vec{0})$ 是开集，但是 $\underset{n=1}{\overset{\infty}{\bigcap}}U_n=$ 单点集 $\{\vec{0}\}$ 不是开集.

:::

从定义来寻找开集显然效率极低，因为要找到开集之并. 所以我们需要一个判据：

/Claim/ (判断开集)

> $A$ 是开集 $\Longleftrightarrow$ $\forall a\in A$，$\exist r>0$，使得 $B_r(a)\subseteq A$ (能在开集中画一个小球).

/Proof/

> “$\Longrightarrow$”证明：设 $A$ 是开集 $=\underset{\alpha\in I}{\bigcup}B_{r_\alpha}(x_\alpha)$，则 $\forall a\in A$，$\exist\alpha$ 使得 $a\in B_{r_\alpha}(x_\alpha)$，取一个 $0<r<r_\alpha-d(a,x_a)$，用三角不等式得到 $B_r(a)\subseteq B_{r_\alpha}(x_\alpha)\subseteq A$，得证.
>
> “$\Longleftarrow$”证明：设命题的 RHS 成立，$\forall a\in A$，$\exist B_{r_a}(a)\subseteq A$，从而
> $$
> A=\bigcup_{a\in A}\{a\}\subseteq\bigcup_{a\in A}B_{r_a}(a)\subseteq A
> $$
> 因此 $A=\underset{a\in A}{\bigcup}B_{r_a}(a)$，因而是开集. 得证.

我们现在要来分析某一个点与集合的关系，因此要引入一些定义：

/Definition/

> 称 $a$ 是 $A$ 的内点，同时称 $A$ 是 $a$ 的一个邻域，如果 $\exist B_r(a)\subseteq A$.

至此我们定义完了度量拓扑. 但是接下来我们想问：如果 $X$ 上没有一个好的度量，我们应该如何定义“附近”？

> 回答是，我们能找到一个“耍赖”的办法，强行指定各种程度、各种方向的“附近”，这样我们会得到一个更广泛的定义.

/Definition/

> 所谓集合 $X$ 上的一个拓扑结构，是指指定出 $X$ 的一个子集族 $\mathscr{T}$，要求满足如下三条拓扑公理：
>
> * $\varnothing,X\in\mathscr{T}$；
> * $\mathscr{T}$ 中有限个成员之交仍属于 $\mathscr{T}$；
> * $\mathscr{T}$ 中任意多个成员之并仍属于 $\mathscr{T}$.
>
> 称 $\mathscr{T}$ 中的成员为这个拓扑下的开集.

我们微积分学中的拓扑，都可以认为是来自于度量拓扑. 当然还存在很多其他的拓扑：

* $\mathscr{T}_0=\{\varnothing,X\}$，为凝聚拓扑；
* $\mathscr{T}_1=\{X$ 的所有子集$\}$，为离散拓扑，在这个意义下所有映射全部连续，失去意义；

所以我们一般更关心度量拓扑，$\R^n$ 总是赋予由 Euclid 度量所定义的拓扑

::: tip

上面的度量拓扑，实际上就是梁灿彬书中写的 **通常拓扑**. 下面我们的讨论都基于通常拓扑.

:::

/Definition/

> 称 $B$ 为 $X$ 的闭集，如果 $B^C$ 是开集 $\Longleftrightarrow$ $\forall y\notin B$，都 $\exist B_r(y)\subseteq B^C$.

/Example/

> 单点集是闭集，因为 $\forall y\notin \{x\}$ 有 $B_{d(x,y)/2}(y)\subseteq\{x\}^C$.
>
> $\R^{n-1}$ 是 $\R^n$ 的闭集，想象一个球，不与某一平面相交即可.

有时候，我们只关心 $\R^n$ 的子集 $X$，如何定义 $X$ 的拓扑？

> **诱导拓扑**！

/Definition/ (诱导拓扑)

> $X$ 从 $\R^n$ 获得的诱导拓扑 (子空间拓扑) 为 $\mathscr{T}_X=\{U\cap X\,|\,U$ 是 $\R^n$ 的开集$\}$.
>
> $A$ 是 $X$ 的开集 $\Longleftrightarrow$ $\exist\R^n$ 的开集 $U$ 使得 $A=U\cap X$.

到此足以开始建立极限理论.

## 极限理论

一元情况下，$\underset{x\to a}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<|x-a|<\delta$ 有 $|f(x)-L|<\varepsilon$.

推广到多元情况：

/Definition/

> 设 $f:D\to\R$ ($D\subseteq\R^n$)，称 $\underset{\vec{x}\to\vec{a}}{\lim}f(\vec{x})=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(\vec{a},\vec{x})<\delta$ 有 $|f(\vec{x})-L|<\varepsilon$.

这学期，同学们要习惯写不带分量式的命题. 以下我们就来做一个比较：

* 不带分量：

  $\underset{\vec{x}\to\vec{a}}{\lim}f(\vec{x})=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(\vec{a},\vec{x})<\delta$ 有 $|f(\vec{x})-L|<\varepsilon$.

* 带分量：

  $\underset{(x_1,\cdots,x_n)\to(a_1,\cdots,a_n)}{\lim}f(x_1,\cdots,x_n)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<\sqrt{\sum(x_i-a_i)^2}<\delta$ 有 $|f(x_1,\cdots,x_n)-L|<\varepsilon$.

显然前者要强得多. 我们之后可能还会省略矢量符号.

有人要问：既然已经定义了多元函数极限，何不定义多元映射的极限，使得这个定义更加宽广？我们正要做这件事情.

/Definition/

> 设 $f:D\to\R^m$ ($D\subseteq\R^n$)，称 $\underset{x\to a}{\lim}f(x)=L\in\R^m$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(x,a)<\delta$ 有 $d(f(x),L)<\varepsilon$.

当然也可以使用多元函数极限作为分量式进行重述，下面做出尝试.

/Claim/

> 设 $f=(f_1,\cdots,f_m)$，$L=(L_1,\cdots,L_m)$，则 $\underset{x\to a}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall i$ 有 $\underset{x\to a}{\lim}f_i(x)=L_i$.

/Proof/

> “$\Longrightarrow$”证明：
>
> LHS $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(x,a)<\delta$ 有 $d(f(x),L)<\varepsilon$.
>
> $\Longrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(x,a)<\delta$ 有 $|f_i(x)-L|<\varepsilon$ (因为 $|f_i(x)-L_i|\leq d(f(x),L)$).
>
> $\Longrightarrow$ RHS
>
> “$\Longleftarrow$”证明：
>
> RHS $\Longrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(x,a)<\delta$ 有 $|f_i(x)-L_i|<\varepsilon$.
>
> $\Longrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(x,a)<\delta$ 有 $d(f(x),L)\leq\sum_i|f_i(x)-L_i|<n\varepsilon$.
>
> $\Longrightarrow$ LHS

所以可以逐分量计算多元映射的极限.

计算多元函数极限的方法：

/Theorem/ (四则运算)

> 设 $\underset{x\to a}{\lim}f(x)=A$，$\underset{x\to a}{\lim}g(x)=B$，则
> $$
> \begin{aligned}
> \lim_{x\to a}(f(x)\pm g(x))&=A\pm B\\
> \lim_{x\to a}f(x)g(x)&=AB\\
> \lim_{x\to a}\frac{f(x)}{g(x)}&=\frac{A}{B}\,,\quad B\neq0
> \end{aligned}
> $$

/Theorem/ (夹逼定理)

> 设 $f(x)\leq g(x)\leq h(x)$ ($\forall x\in B_r(a)|\{a\}$)，若 $\underset{x\to a}{\lim}f(x)=\underset{x\to a}{\lim}h(x)=L$，则
> $$
> \lim_{x\to a}g(x)=L
> $$

/Theorem/ (复合极限)

> 设 $f:D\to E$，$g:E\to F$ ($D,E,F\subseteq\R^n$). 设 $\underset{x\to a}{\lim}f(x)=b$，$\underset{y\to b}{\lim}g(y)=c$.
>
> 1. 若在 $a$ 的某个去心邻域中总有 $f(x)\neq b$，则 $\underset{x\to a}{\lim}(g\circ f)(x)=c$.
>
>    (以防止 $f(x)$ 经常等于 $b$，则 $g(f(x))=g(b)$ 与 $\underset{y\to b}{\lim}g(y)$ 无关)
>
> 2. 若 $g(b)=c$，则直接有 $\underset{x\to a}{\lim}(g\circ f)(x)=c$.

/Example/

> $\underset{x\to0}{\lim}|x|=0$，$\underset{x\to0}{\lim}|x|^\alpha=0$ ($\forall\alpha>0$)，第一个是显然的.
>
> 对于第二个，复合即可，符合复合极限定理的修正 $\text{I}$.

/Example/

> 一个不那么平凡的例子是，
> $$
> f(x,y)=\frac{P(x,y)}{(\sqrt{x^2+y^2})^\alpha}
> $$
> 其中 $P(x,y)$ 是一个 $n$ 次齐次多项式：
> $$
> P(x,y)=a_nx^n+a_{n-1}x^{n-1}y+\cdots+a_0y^n
> $$
> 求：
> $$
> \lim_{(x,y)\to(0,0)}f(x,y)\,,\quad\alpha>0
> $$
> 这个极限依赖于次数的比较，记 $r=\sqrt{x^2+y^2}$.
>
> 1. 若 $n>\alpha$，则：
>    $$
>    \begin{aligned}
>    |P(x,y)|&\leq\sum_i|a_i||x|^{n-i}|y|^i\\
>    &\leq\left(\sum_{i=0}^n|a_i|\right)r^n\,,\quad(|x|,|y|<r)\\\\
>    &=K\cdot r^n
>    \end{aligned}
>    $$
>    所以 $0\leq|f(x,y)|\leq K\cdot r^{n-\alpha}$，夹逼定理得到极限为零：
>    $$
>    \lim_{(x,y)\to(0,0)}f(x,y)=0
>    $$
>
> 2. 若 $n=\alpha$，设在某种特殊情况下极限 $L$ 存在，则当 $(x,y)$ 以任意方式趋于 $(0,0)$ 时，都应该有 $f(x,y)\to L$，所以我们用一个较好的趋近方式对这一极限进行“探测”，也就是让 $f(x,y)$ 沿直线趋于 $(0,0)$. 现在得到复合极限：
>    $$
>    \R|\{0\}\overset{\Delta_k}{\longrightarrow}\R^2|\{(0,0)\}\overset{f}{\longrightarrow}\R
>    $$
>    其中 $\Delta_k(t)=(t,kt)$ ($k$ 是一个给定的斜率)，所以 $\forall t\neq0$ 有 $\Delta_k(t)\neq\vec{0}$，满足复合极限定理的修正 $\text{I}$，于是：
>    $$
>    L=\lim_{t\to0}(f\circ\Delta_k)(t)=\lim_{t\to0}\frac{t^n\sum_ia_ik^{n-i}}{(\sqrt{1+k^2}|t|)^n}=\lim_{t\to0+}\frac{\sum_ia_ik^{n-i}}{(\sqrt{1+k^2})^n}
>    $$
>    最后已经没有变量，所以
>    $$
>    \sum_ia_ik^{n-i}=L(\sqrt{1+k^2})^n
>    $$
>    发现这里必须要求 $n$ 为偶数，且 $\sum_ia_ik^{n-i}=L(1+k^2)^{n/2}$ (记为 $(*)$)，此时要求：
>    $$
>    \begin{aligned}
>    P(x,y)&=\sum_ia_ix^iy^{n-i}=x^n\sum_{i}a_i\left(\frac{y}{x}\right)^{n-i}\\
>    &\overset{(*)}{=}x^nL\left(1+\frac{y^2}{x^2}\right)^\frac{n}{2}=L(x^2+y^2)^\frac{n}{2}
>    \end{aligned}
>    $$
>    也就是说，这个特殊情况要求分子恰好是分母的倍数，且 $n$ 为偶数，其他情况这个极限均不存在.
>
> 3. 若 $n<\alpha$，仍然假设某种特殊情况下极限存在且等于 $L$，则
>    $$
>    L=\lim_{t\to0+}(f\circ\Delta_k)(t)=\lim_{t\to0+}\frac{t^n\sum_ia_ik^{n-i}}{t^\alpha(\sqrt{1+k^2})^\alpha}=\lim_{t\to0+}t^{n-\alpha}\frac{\sum_ia_ik^{n-i}}{(\sqrt{1+k^2})^\alpha}
>    $$
>    此时只有在分子为零的情况下极限存在.

/Example/

> 求：
> $$
> \lim_{(x,y)\to(0,0)}\frac{P(x,y)}{Q(x,y)}=?
> $$
> 其中 $P(x,y)$ 是 $n$ 次齐次多项式，$Q(x,y)$ 是 $m$ 次齐次多项式，$Q$ 在 $B_r(\vec{0})|\{\vec{0}\}$ 处处非零，且 $n>m$.

时间关系，我们到此为止.