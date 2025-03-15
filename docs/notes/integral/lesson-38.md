---
title: Lesson 38 多元映射的连续性
permalink: /integral/lesson-38/
createTime: 2025/3/15 11:42:26
---
周六补一节课，三个学时.

## 极限

/Example/

> 求：
> $$
> \lim_{(x,y)\to(0,0)}\frac{P(x,y)}{Q(x,y)}=?
> $$
> 其中 $P(x,y),Q(x,y)$ 齐次，$\deg P=n>\deg Q=m$，保证分母不为零，要求在 $B_r(\vec{0})|\{\vec{0}\}$ 中 $Q(x,y)$ 处处非 $0$.
>
> ---
>
> 分析：
> $$
> \frac{P}{Q}\sim\frac{r^n(x,y)}{r^m(x,y)}=r(x,y)^{n-m}\to0\text{ as }r(x,y)\to0
> $$
> 我们考虑来证明极限为零，利用 $P,Q$ 的齐次性. 为此，先转化为极坐标，$(x,y)$ 趋于零等价于 $r\to0$. 则，
> $$
> Q(x,y)=Q(r\cos\theta,r\sin\theta)=r^mg(\cos\theta,\sin\theta)
> $$
> $P$ 同理，$P(x,y)=r^nf(\cos\theta,\sin\theta)$，因此，
> $$
> \frac{P(x,y)}{Q(x,y)}=\frac{f(\theta)}{g(\theta)}\cdot r^{n-m}
> $$
> 由 $f,g$ 连续，再由 $Q$ 在 $B_r(\vec{0})|\{\vec{0}\}$ 中处处非零知，$g$ 处处非零，所以 $\left|\frac{f(\theta)}{g(\theta)}\right|$ 在 $[0,2\pi]$ 上连续. 根据最值定理，得到这个函数在 $[0,2\pi]$ 上有最大值，也就是说有上界 $K$. 从而，
> $$
> 0\leq\left|\frac{P(x,y)}{Q(x,y)}\right|\leq r^{n-m}K\to0\text{ as }r\to0
> $$
> 由夹逼定理，原极限为零.

上面是一个常见的例子. 下面看一个我们熟悉的例子：

/Example/

> $$
> \lim_{(x,y)\to(0,0)}(1+x^2+y^2)^{\frac{1}{x^2+y^2}}
> $$
>
> 我们相当熟悉这一结构，所以考虑视为复合极限，有
> $$
> \R^2|\{\vec{0}\}\overset{f}{\longrightarrow}\R|\{0\}\overset{g}{\longrightarrow}\R
> $$
> 其中 $f(x,y)=x^2+y^2$，$g(t)=(1+t)^{1/t}$，原来的函数是 $g\circ f$. 但是 ==一定要验证复合极限定理的修正条件==，有
> $$
> \lim_{(x,y)\to(0,0)}f=0\,,\quad\lim_{t\to0}g(t)=e
> $$
> 修正 $\text{I}$ 成立 ($\forall(x,y)\in\R^2|\{\vec{0}\}$ 有 $f(x,y)\neq0$). 由复合极限定理得到极限值为 $e$.

接下来是一个“负面”的例子，即用复合极限定理证明极限不存在.

/Example/

> 回忆[上节课证明的极限](/integral/lesson-37/#极限理论)：
> $$
> \lim_{(x,y)\to(0,0)}\frac{P(x,y)}{(x^2+y^2)^{n/2}}
> $$
> 其中，$\deg P=n$ 且 $P$ 齐次. 这个极限“几乎”不存在，除非 $n$ 为偶数且 $P(x,y)=L\cdot(x^2+y^2)^{n/2}$.
>
> 我们上节课的证明方法是反证，假设极限存在，则应该不论 $(x,y)$ 以何种方式靠近 $\vec{0}$，都有 $f(x,y)$ 靠近 $L$. 只要选择一个特殊方式 (沿着 $y=kx$) 靠近，证明没有 $f\to L$ 即可.
>
> 了解到复合极限定理之后，严格的写法应当是把这条“直线”写成复合的形式：
> $$
> \R|\{0\}\overset{\Delta_k}{\longrightarrow}\R^2|\{\vec{0}\}\overset{f}{\longrightarrow}\R
> $$
> 其中 $\Delta_k(t)=(t,kt)$ (斜率为 $k$ 的直线)，复合极限 $\underset{t\to0}{\lim}(f\circ\Delta_k)(t)=L$.
>
> 总结：==复合极限定理用于证明极限不存在时的“探测曲线”==.

一个同类的例子：

/Example/

> $$
> \lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}
> $$
>
> 实际上是上面例子的一个特例，不满足条件，直接可证不存在. 当然如果啰嗦一点，我们能写成：
> $$
> L=\lim_{t\to0}(f\circ\Delta_k)(t)=\lim_{t\to0}\frac{t\cdot kt}{t^2+(kt)^2}=\frac{k}{1+k^2}\,,\quad(\forall k\in\R)
> $$
> 显然荒谬.

至此我们建立好了所需的工具，下面我们来讨论连续性.

## 连续性

本来这一部分纯粹是一元理论的直接推广，但是我们将用拓扑语言来写，特意不使用 $\varepsilon$ - $\delta$ 语言来写.

为了定义连续映射，我们需要定义“附近”. 上节课我们了解到，给出拓扑结构 $\longleftrightarrow$ 指出各种程度的“附近”. 所以我们有定义：

/Definition/

> 所谓 $X$ 上的一个拓扑结构，是指指定一个 $X$ 的子集族 $\mathscr{T}$，称 $\mathscr{T}$ 的成员为此拓扑下 $X$ 的开集.
>
> 要求满足三条拓扑公理：
>
> * $\varnothing,X\in\mathscr{T}$；
> * 有限个开集之交是开集；
> * 任意多个开集之并是开集.
>
> 大部分拓扑是无趣的，在微积分中我们更关心所谓的度量拓扑 (通常拓扑)：设 $(X,d)$ 是度量空间，度量拓扑 $\mathscr{T}_d=\{U=$ 若干开球之并$\}$.

上面的定义或许显得重复了，但是在刚开始使用拓扑语言时理应多重复来习惯它.

如果现在有两个拓扑空间 $(X,\mathscr{T}_X)$ 和 $(Y,\mathscr{T}_Y)$，现在存在一个映射 $f:X\to Y$，我们如何定义 $f$ 在 $x_0$ 处的连续性？

回忆一元情况，$f$ 在 $x_0$ 处连续 $\Longleftrightarrow$ $\forall f(x_0)$ 的开球邻域 $B_\varepsilon(f(x_0))$，都 $\exist x_0$ 的开球邻域 $B_\delta(x_0)$ 使得 $f(B_\delta(x_0))\subseteq B_\varepsilon(f(x_0))$.

对比起来，我们只需要把“开球”换成“开集”就行了.

/Definition/

> 称 $f:X\to Y$ 在 $x_0$ 处连续，如果对于包含 $y=f(x_0)$ 的 ($Y$ 的) 开集 $V$，都 $\exist$ 包含 $x_0$ 的 ($X$ 的) 开集 $U$，使得 $f[U]\subseteq V$.
>
> 可能大家觉得这个定义很“绕”，我们回忆“邻域”的概念：称 $x$ 的 $A$ 的内点，$A$ 是 $x$ 的邻域，当且仅当 $\exist$ 开集 $U$ 使得 $x\in U\subseteq A$；称 $A$ 为 $x$ 的开邻域，若 $A$ 是开集且包含 $x$.
>
> 因此上面定义等价于：对于 $f(x_0)$ 的任何开邻域 $V$，都 $\exist x_0$ 的开邻域 $U$ 使得 $f[U]\subseteq V$.

由此，可定义连续：

/Definition/

> 称 $f:X\to Y$ 是连续映射，记为 $f\in C(X,Y)$，若 $f$ 在 $X$ 中每点处连续.
>
> $C(X,Y)=\{$所有连续映射 $f:X\to Y\}$

我们想知道这种定义方式和极限的写法是否等价，于是：

/Claim/

> 设 $f:D\to\R$，$\vec{a}$ 是 $D$ 的内点，则 $f$ 在 $\vec{a}$ 处是连续的 $\Longleftrightarrow$ $\underset{\vec{x}\to\vec{a}}{\lim}f(\vec{x})=f(\vec{a})$.

/Proof/

> 将极限用 $\varepsilon$ - $\delta$ 语言写出，转化待证命题：
>
> $\underset{\vec{x}\to\vec{a}}{\lim}f(\vec{x})=f(\vec{a})$
>
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<d(\vec{x},\vec{a})<\delta$ 有 $|f(\vec{x})-f(\vec{a})|<\varepsilon$.
>
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall d(\vec{x},\vec{a})<\delta$ 有 $|f(\vec{x})-f(\vec{a})|<\varepsilon$.
>
> $\Longleftrightarrow$ $\forall B_\varepsilon(f(\vec{a}))$，$\exist B_\delta(\vec{a})$ 使得 $f[B_\varepsilon(\vec{a})]\subseteq B_\varepsilon(f(\vec{a}))$.
>
> “$\Longrightarrow$”的证明：设 $f$ 在 $\vec{a}$ 处连续，由连续定义知对于 $f(\vec{a})$ 的开邻域 $V=B_\varepsilon(f(\vec{a}))$，$\exist\vec{a}$ 的开邻域 $U$，使得 $f[U]\subseteq V$；由 $U$ 为开集且 $U\ni\vec{a}$ 知道 $\exist B_\delta(\vec{a})\subseteq U$，从而
> $$
> f[B_\delta(\vec{a})]\subseteq f[U]\subseteq V=B_\varepsilon(f(\vec{a}))
> $$
> 从而成立.
>
> “$\Longleftarrow$”的证明：来证明 $f$ 在 $\vec{a}$ 处连续. 为此，$\forall f(\vec{a})$ 的开邻域 $V$，由开集定义，$\exist$ 开球，$B_\varepsilon(f(\vec{a}))\subseteq V$，所以 $\exist B_\delta(\vec{a})$ 使得 $f[B_\delta(\vec{a})]\subseteq B_\varepsilon(f(\vec{a}))$. 令 $U=B_\delta(\vec{a})$ 是 $\vec{a}$ 的开邻域，且 $f[U]\subseteq B_\varepsilon(f(\vec{a}))\subseteq V$，证毕.

下面我们叙述一个有关整体连续性的定理：

/Theorem/

> $f:X\to Y$ 连续
>
> $\Longleftrightarrow$ $f$ 下开集的原像集是开集 ($\Longleftrightarrow$ $f$ 下闭集的原像集是闭集)

回忆原像集的定义：$\forall V\subseteq Y$，定义 $f$ 下 $V$ 的原像集是 $f^{-1}[V]=\{x\in X\,|\,f(x)\in V\}$.

/Proof/ (定理证明)

> “$\Longrightarrow$”的证明：来证明 $\forall Y$ 的开集 $V$，有 $f^{-1}[V]$ 是开集.
>
> 先证明如下命题：
>
> ---
>
> /Claim/
>
> > $A$ 是开集 $\Longleftrightarrow$ $A$ 的每一点都是 $A$ 的内点.
>
> ---
>
> /Proof/
>
> > “$\Longrightarrow$”显然；证明“$\Longleftarrow$”. 设 $A$ 的每点 $x$ 都是 $A$ 的内点，则 $\exist$ 开集 $U_x\ni x$ 且 $U_x\subseteq A$，从而：
> > $$
> > A=\bigcup_{x\in A}\{x\}\subseteq\bigcup_{x\in A}U_x\subseteq A
> > $$
> > 所以 $A$ 为一组开集之并，是开集.
>
> ---
>
> 只需要证明每点 $x\in f^{-1}[V]$ 都是其内点. 由 $x\in f^{-1}[V]$ 有 $f(x)\in V$，$V$ 是 $f(x)$ 的开邻域，同时 $f$ 连续，因此 $\exist x$ 的邻域 $U$ 使得 $f[U]\subseteq V$，即 $U\subseteq f^{-1}[V]$，表明 $x$ 是 $f^{-1}[V]$ 的内点，得证.
>
> “$\Longleftarrow$”的证明：已知开集的原像集是开集，来证明 $f$ 在每点 $x_0$ 处连续. 为此，$\forall f(x_0)$ 的开邻域 $V$，则 $f^{-1}[V]$ 是开集，取 $U=f^{-1}[V]$ 是 $x$ 的开邻域，则 $\exist x$ 的开邻域 $U$ 使得 $f[U]\subseteq V$，连续性得证.
>
> ---
>
> 原则上已经证明完毕，再多说一点：由闭集是开集之补，$\forall$ 闭集 $B$，$f^{-1}[B]$ 闭 $\Longleftrightarrow$ $f^{-1}[B]^C$ 开 $\Longleftrightarrow$ $f^{-1}[B^C]$ 开，因此开集的原像集是开集等价于闭集的原像集是闭集.

一些例子：

/Example/

> $f:\R^n\to\R$ 连续，等高面 (level set) $f^{-1}(c)=f^{-1}[\{c\}]=\{\vec{x}\in\R^n|f(x)=c\}$.
>
> ---
>
> /Claim/
>
> > 连续映射的等高面是闭集.
>
> ---
>
> /Proof/
>
> > 因为 $\{c\}$ 是 $\R$ 的闭子集，所以 $f^{-1}[\{c\}]$ 是 $\R^n$ 的闭集.

/Example/

> 利用上面的例子，有一些案例，比如 $f=x_1^2+\cdots+x_n^2:\R^n\to\R$ 连续，从而
> $$
> f^{-1}[\{c\}]=\{(x_1,\cdots,x_n)|x_1^2+\cdots+x_n^2=c\}
> $$
> 是 $\R^n$ 的闭集.
>
> (比如 $c<0$ 时是空集，$c=0$ 时为单点集，$c>0$ 时是一个 $n-1$ 维球面)

## 连续映射的局部性质

/Theorem/

> 连续映射的复合连续. (<a name="1">逐点版本</a>)

/Proof/

> 设 $f:X\to Y$，$g:Y\to Z$，来证明 $g\circ f:X\to Z$ 连续. 为此 $\forall Z$ 的开集 $W$，由 $g$ 连续，得到 $g^{-1}[W]$ 为开集；再由 $f$ 连续得到 $f^{-1}[g^{-1}[W]]$ 为开集，所以：$(g\circ f)^{-1}[W]$ 为开集.
>
> 上面的证明使用整体的连续性，但是我们也能写出[逐点的版本](#1)：设 $f:X\to Y$ 在 $x_0$ 处连续，$g:Y\to Z$ 在 $f(x_0)$ 处连续，则 $(g\circ f)$ 在 $x_0$ 处连续.
>
> 这时的证明是：$\forall g(f(x_0))$ 的开邻域 $W$，由 $g$ 在 $f(x_0)$ 处连续的定义知 $\exist f(x_0)$ 的开邻域 $V$ 使得 $g[V]\subseteq W$，再由 $f$ 在 $x_0$ 处连续的定义知，$\exist x_0$ 的开邻域 $U$ 使得 $f[U]\subseteq V$.
>
> 从而我们找到了 $x_0$ 的开邻域 $U$，使得：
> $$
> (g\circ f)[U]=g[f[U]]\subseteq g[V]\subseteq W
> $$
> 得证.

/Theorem/ (四则运算保持连续性)

> 设 $f:D\to\R$，$g:D\to\R$，$D\subseteq\R^n$. 设 $x_0$ 是 $D$ 的内点，且 $f,g$ 在 $x_0$ 处连续.
>
> 则 $f\pm g$，$f\cdot g$ 在 $x_0$ 处连续. 进一步，若 $g(x_0)\neq0$，则 $f/g$ 在 $x_0$ 处连续.

/Proof/

> /Method/ (用极限)
>
> > 由 $f,g$ 连续知，$\underset{x\to x_0}{\lim}f(x)=f(x_0)$，$\underset{x\to x_0}{\lim}g(x)=g(x_0)$，用极限的四则运算可以直接得到结果.
>
> ---
>
> /Method/
>
> > 这种证法初听可能觉得奇怪. 以除法为例，利用复合映射：
> > $$
> > D\overset{h}{\longrightarrow}\R\times(\R|\{0\})\overset{\text{divide}}{\underset{q}{\longrightarrow}}\R
> > $$
> > 其中 $h(x)=(f(x),g(x))$，$q$ 是除法运算. 上面的复合其实就是一个简单的除法.
> >
> > 要证明 $f/g$ 在 $x_0$ 处连续，只需证明 $h$ & $q$ 分别连续.
> >
> > ---
> >
> > /Claim/
> >
> > > $f(f_1,\cdots,f_m):D\to\R^m$ 连续 $\Longleftrightarrow$ 每个分量函数 $f_i$ 连续.
> >
> > ---
> >
> > /Proof/
> >
> > > $f$ 在 $x_0$ 处连续 $\Longleftrightarrow$ $\underset{x\to x_0}{\lim}f(x)=f(x_0)$，再由多元映射的极限可以逐分量计算，知道 $\forall i$，$\underset{x\to x_0}{\lim}f_i(x)=f_i(x_0)$，因此可以逐分量要求连续.
> >
> > 对于除法计算 $q$ 的连续性证明，留作练习. (这要证明吗？)

::: tip

因为我们的课程进度追上来了不少，所以我们今天就到此为止. 大家周三再见.

——艾神

:::