---
title: Lesson 35 幂级数 2
permalink: /integral/lesson-35/
createTime: 2025/3/7 12:18:32
---
## 上节课承诺的一个例子

/Example/

> 要求：$f_n\to f$ 但是 $\int_a^bf\neq\underset{n\to\infty}{\lim}\int_a^bf_n$.
>
> 构造一个这样的例子：
> $$
> f_n(x)=\left\{\begin{array}{lr}
> n^2x\,,\quad x\in[0,\frac{1}{n}]\\\\
> -n^2(x-\frac{2}{n})\,,\quad x\in[\frac{1}{n},\frac{2}{n}]\\\\
> 0\,,\quad x\in[\frac{2}{n},1]
> \end{array}\right.
> $$
> 可知，这是一组底边变短、高变长的三角形. 那么有 $\forall f_n\in C([0,1])$，
> $$
> \int_0^1f_n(x)\text{d}x=\text{area}(\Delta)=1
> $$
> 但是 $\underset{n\to\infty}{\lim}f_n=f$ 是一条线段，所以积分值为 $0$，满足要求. 接下来仔细分析：
>
> 首先，$f_n(0)=0$，所以 $f(0)=0$ (点点收敛)；其次 $\forall0<x\leq1$，对于充分大的 $n$，有 $x\in(\frac{2}{n},1]$，$f_n(x)=0$，故 $f(x)=0$.

## 幂级数的收敛域

$\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 的收敛半径是 $R$，则 $R=\sup\{x_0\geq0:\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处绝对收敛$\}$，所以收敛域 $X$ 满足 $(-R,R)\subseteq X\subseteq[-R,R]$.

因此我们求幂级数的收敛域时，最重要的一步是计算收敛半径.

用 ratio & root test 可以确定 $R$：

/Theorem/ (ratio test)

> 若 $\underset{n\to\infty}{\lim}\frac{|a_{n+1}|}{|a_n|}=l\in\R_{\geq0}\cup\{+\infty\}$ 存在，则 $R=\frac{1}{l}$.

/Theorem/ (root test)

> 若 $\underset{n\to\infty}{\lim}\sqrt[n]{|a_{n}|}=l$ 存在，则 $R=\frac{1}{l}$.

上述两个版本是弱化的版本，因为条件中要求极限存在. 作为练手，我们先尝试证明其中一个，因为 root test 将在之后给出一个强化版本，所以我们来证明 ratio test.

/Proof/ (ratio test)

> 设 $\underset{n\to\infty}{\lim}\frac{|a_{n+1}|}{|a_n|}=l$，考虑 $x_0$ 处是否绝对收敛，即 $\underset{n=0}{\overset{\infty}{\sum}}|a_nx^n_0|$ 的收敛性.
> $$
> \lim_{n\to\infty}\frac{|a_{n+1}x_0^{n+1}|}{|a_nx_0^n|}=l\cdot|x_0|
> $$
> 由 ratio test，
>
> * 若 $l|x_0|<1$ $\Longrightarrow$ 绝对收敛
> * 若 $l|x_0|>1$ $\Longrightarrow$ 不 (绝对收敛)
>
> ::: tip -
>
> 我们要断一个句……不 (绝对收敛) 不能说成 不绝对 (收敛)…… anyway，正确.—— 艾神
>
> :::
>
> 从而，$[0,\frac{1}{l})\subseteq A=\{x_0\geq0|$绝对收敛$\}\subseteq[0,\frac{1}{l}]$. 因此 $\sup A=\frac{1}{l}$，也就是 $R=\frac{1}{l}$.

但是以上两个定理的作用范围都很有限，因为要求极限存在. 不过我们有如下无条件的 version：

/Theorem/ (Cauchy - Hadamard 公式)

> ::: tip -
>
> 上面公式里面的 H 不发音. —— 艾神
>
> :::
> $$
> R=\frac{1}{\underset{n\to\infty}{\lim\sup}\sqrt[n]{|a_n|}}
> $$
> 回忆我们的 root test：设 $\underset{n=0}{\overset{\infty}{\sum}}x_n$ 为正项级数，记 $\underset{n\to\infty}{\lim\sup}\sqrt[n]{x_n}=q\in\R_{\geq0}\cup\{+\infty\}$，判定 $q$ 与 $1$ 的关系.
>
> 这里的 $\lim\sup$ 是上极限，一定存在，避免了出现有条件的情况.

/Proof/ (Cauchy - Hadamard)

> 实际上就是 root test. 考虑 $\underset{n=0}{\overset{\infty}{\sum}}|a_nx_0^n|$ 的收敛性，记每一项为 $y_n$：
> $$
> \begin{aligned}
> \lim_{n\to\infty}\sup(\sqrt[n]{y_n})&=\lim_{n\to\infty}\sup(|x_0|\sqrt[n]{|a_n|})\\
> &=\lim_{n\to\infty}\sup\{|x_0|\sqrt[n]{|a_n|},|x_0|\sqrt[n+1]{|a_{n+1}|}\,\,\,,\,\cdots\}\\
> &=|x_0|\lim_{n\to\infty}\sup\sqrt[n]{|a_n|}\\
> &=|x_0|\cdot l
> \end{aligned}
> $$
> 由 root test 得到结果，得证.

/Example/

> 求 $\underset{n=0}{\overset{\infty}{\sum}}\frac{x^n}{n^p}$ 的收敛域 ($\forall p\in\R$).
>
> 先求收敛半径，得到为 $R=1$. 单独考察 $\pm1$ 处：
>
> * $x=1$ 处是我们经常研究的数值级数，$p>1$ 收敛，反之发散.
> * $x=-1$ 处为交错级数，由 Leibniz test，在 $p>0$ 时收敛.
>
> 综上所述，
> $$
> X=\left\{\begin{array}{lr}
> [-1,1]\,,\quad p>1\\
> [-1,1)\,,\quad 0<p\leq1\\
> (-1,1)\,,\quad p\leq0
> \end{array}\right.
> $$

/Claim/

> 设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 半径 $r\in\R_+$，则 $\underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{n!}x^n$ 的半径为 $+\infty$.
>
> /草稿/
>
> > 考虑 $a_n=1$ 的特例，则前者为 $\underset{n=0}{\overset{\infty}{\sum}}x^n=\frac{1}{1-x}$，半径为 $r=1$；后者则是 $e^x$，显然半径 $+\infty$.

/Proof/

> 证法 1：Cauchy - Hadamard 公式
>
> > $$
> > \frac{1}{r}=\lim_{n\to\infty}\sup\sqrt[n]{|a_n|}
> > $$
> >
> > 来计算 $\underset{n\to\infty}{\lim\sup}\sqrt[n]{\frac{|a_n|}{n!}}$ 是否等于 $0$ 即可.
> >
> > 上个学期的作业中曾有一个证明，熟知 ([一个简短的证明](#1))：
> > $$
> > \frac{(n+1)^n}{e^n}\leq n!\leq\frac{(n+1)^{n+1}}{e^n}
> > $$
> > 所以，
> > $$
> > \begin{aligned}
> > \lim_{n\to\infty}\sup\sqrt[n]{\frac{|a_n|}{n!}}&=\lim_{n\to\infty}\left(\sup\{\sqrt[n]{\frac{|a_n|}{n!}},\sqrt[n+1]{\frac{|a_{n+1}|}{(n+1)!}}\,\,\,\,,\cdots\}\right)\\
> > &\leq\lim_{n\to\infty}\sup\left\{\frac{\sqrt[n]{|a_n|}}{(n+1)/e}\,,\frac{\sqrt[n+1]{|a_{n+1}|}}{(n+2)/e}\,\,\,,\cdots\right\}\\
> > &\leq\lim_{n\to\infty}\frac{e}{n+1}\sup(\sqrt[n]{a_n})\\
> > &=0\cdot\frac{1}{r}=0
> > \end{aligned}
> > $$
> > 但是上式应该大于等于 $0$，所以上式等于 $0$，这里的收敛半径 $R=+\infty$.
> >
> > ><a name="1">上学期作业结论的简短证明</a>：这个估计来自于
> > >$$
> > >(1+\frac{1}{k})^k<e<(1+\frac{1}{k})^{k+1}
> > >$$
> > >进行连乘，得到
> > >$$
> > >\prod_{k=1}^n(1+\frac{1}{k})^k<e^n<\prod_{k=1}^n(1+\frac{1}{k})^{k+1}
> > >$$
> > >所以得到作业的结论：
> > >$$
> > >\frac{(n+1)^n}{e^n}<n!<\frac{(n+1)^{n+1}}{e^n}
> > >$$
> > >得证.
> >
> > 如果想不到作业中的那种放缩，可以用弱版的估计：
> > $$
> > (n!)^2=(1\cdot n)(2\cdot(n-1))\cdots(n\cdot1)\geq n^n
> > $$
> > 所以上面的极限放缩成
> > $$
> > \lim_{n\to\infty}\sup\frac{\sqrt[n]{|a_n|}}{\sqrt{n}}=\lim_{n\to\infty}\left(\frac{1}{\sqrt{n}}\sup(\sqrt[n]{a_n})\right)
> > $$
> > 一样结果.
>
> 证法 2：
>
> > ::: tip -
> >
> > 我们来看一下另外一个证法……找找我正确的讲义……这几乎是显然的……哦，我恰好忘记带我正确的讲义了……我来看看我的手机，就是前几天发的那个讲义，大家帮我看看……哦，我恰好忘记带我的手机了.
> >
> > anyway，那么，留作练习，留作练习.
> >
> > —— 艾神
> >
> > :::

## 幂级数的分析学性质

有三点：连续性、可导、可积.

我们还是需要 **一致收敛性**，回忆上面刚刚讲过的 $\underset{n=0}{\overset{\infty}{\sum}}\frac{x^n}{n!}$，其半径 $R=+\infty$，但是我们已经证明过这个级数在 $(-\infty,+\infty)$ 上不一致收敛. 因此我们只能有弱化的一个定理：

/Theorem/ (内闭一致收敛)

> 在收敛半径内的闭集上一致收敛.
>
> 设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 半径为 $R$，对任何 $0\leq b<R$，则 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $[-b,b]$ 上一致收敛.

/Proof/

> 证明一致收敛性的首选是 $M$ - Test，有
> $$
> |a_nx^n|\leq|a_n|b^n=M_n\,,\quad\forall x\in[-b,b]
> $$
> 由 $b\in(-R,R)$ 知，在点 $b$ 处绝对收敛. 从而原来的级数一致收敛，得到内闭一致收敛.

/Theorem/

> 1. 幂级数在收敛半径内连续；
>
> 2. 在收敛半径内可逐项积分，$\forall-R<a<b<R$，有
>    $$
>    \int_a^b\underset{n=0}{\overset{\infty}{\sum}}a_nx^n\text{d}x=\underset{n=0}{\overset{\infty}{\sum}}a_n\frac{b^{n+1}-a^{n+1}}{n+1}
>    $$

/proof/

> 1. 逐点证明连续性，$\forall x_0\in(-R,R)$，取 $|x_0|<b<R$，由前述定理得到在 $[-b,b]$ 上一致收敛，所以和函数在这个区间上连续，所以在 $x_0$ 处和函数连续.
> 2. 和上面的证明相似，逐点证明即可.

我们已经证明了和函数 $S(x)$ 在 $(-R,R)$ 上连续，自然要问：在 $\pm R$ 上是否有单侧连续性质？

有关证明归功于 Abel：

/Theorem/ (Abel 定理)

> wiki 上面称这个定理为 Abel 定理，但是 Zorich 的书上写的是 Abel 第二定理.
>
> 设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 半径为 $R$，且在 $x=R$ 处收敛，则和函数 $S(x)$ 在 $R$ 处左连续，即
> $$
> S(R)=\lim_{x\to R-}S(x)\\
> \underset{n=0}{\overset{\infty}{\sum}}a_nR^n=\lim_{x\to R-}\underset{n=0}{\overset{\infty}{\sum}}a_nx^n
> $$

/Proof/

> 只需证明 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $[0,R]$ 上是一致收敛的. 但是这里要用到 Dirichlet & Abel Test，有
> $$
> \underset{n=0}{\overset{\infty}{\sum}}a_nx^n=\underset{n=0}{\overset{\infty}{\sum}}(a_nR^n)\left(\frac{x}{R}\right)^n=\underset{n=0}{\overset{\infty}{\sum}}a_n(x)b_n(x)
> $$
> 回忆一致收敛的 Abel Test：
>
> > 设 $\{a_n(x)\}$ 关于 $n$ 单调且在 $D$ 上一致有界，$\{b_n(x)\}$ 在 $D$ 上一致收敛，则 $\underset{n=0}{\overset{\infty}{\sum}}a_n(x)b_n(x)$ 在 $D$ 上一致收敛.
>
> 逐一验证条件，$D=[0,R]$.
>
> 1. $a_n(x)=\left(\frac{x}{R}\right)^n$，关于 $n$ 单调，同时 $|a_n(x)|=\left|\frac{x}{R}\right|^n\leq1$，满足条件.
> 2. $b_n(x)$ 与 $x$ 根本无关，一致收敛.
>
> 由 Abel Test 得到整个级数在 $[0,R]$ 一致收敛.

---

关于积分，多说一句：取特例 $a=0$，$b=x\in(-R,R)$，可得
$$
\int_0^xS(t)\text{d}t=\underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{n+1}x^{n+1}
$$
所以我们可以说，积分之后会得到一个新的幂级数，在 $(-R,R)$ 上处处收敛.

/推论/

> 新的幂级数半径 $\geq R$，也就是幂级数积分之后收敛半径不减少.

事实上，收敛半径不变，我们稍后证明.

---

来看求导：

/Theorem/ (求导定理)

> 幂级数在收敛半径内部可逐项求导. 设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 半径 $R$，则 $\forall x\in(-R,R)$，有
> $$
> S(x)'=\underset{n=0}{\overset{\infty}{\sum}}a_nnx^{n-1}
> $$

/Proof/

> 来证明 $\forall0\leq b<R$. $\underset{n=0}{\overset{\infty}{\sum}}a_nnx^{n-1}$ 在 $[-b,b]$ 上一致收敛，为此，
> $$
> |a_nnx^{n-1}|\leq|a_n|nb^{n-1}=M_n\,,\quad \forall x\in[-b,b]
> $$
> 取 $b<x_0<R$，则
> $$
> M_n=|a_nx_0^n|\frac{n}{b}\frac{b^n}{|x_0|}\leq K\frac{n}{b}\left(\frac{b}{|x_0|}\right)^n=y_n
> $$
> 其中 $K$ 为 $|a_nx_0^n|$ 之上界.
>
> 对 $\underset{n=0}{\overset{\infty}{\sum}}y_n$ 用 ratio test，得到
> $$
> \begin{aligned}
> \lim_{n\to\infty}\frac{y_{n+1}}{y_n}=\lim_{n\to\infty}\left(\frac{b}{|x_0|}\frac{n+1}{n}\right)=\frac{b}{|x_0|}<1
> \end{aligned}
> $$
> 因此 $\underset{n=0}{\overset{\infty}{\sum}}y_n$ 收敛. 所以 $\underset{n=0}{\overset{\infty}{\sum}}M_n$ 收敛，求导后的级数在 $[-b,b]$ 上一致收敛.
>
> ---
>
> 总结：==想要清除掉 $|a_n|$ 的影响，就要想办法在 $R$ 左侧取 $x_0$==.
>
> ---
> 
> /推论/
>
> > 幂级数求导后收敛半径不减.

上面的推论和之前证明的“幂级数积分后收敛半径不减”结合起来，就能得到最终的推论：

==幂级数求导与积分后收敛半径均不变==.

/练习/

> 可以尝试用 Cauchy - Hadamard 公式计算具体的收敛半径，看看是否真的不变.

/Claim/ (幂级数的高阶导数)

> 幂级数在收敛半径内可以任意次求导：
> $$
> S^{(k)}(x)=\underset{n=0}{\overset{\infty}{\sum}}a_nn(n-1)\cdots(n-k+1)x^{n-k}
> $$
> /推论/
>
> > 幂级数在收敛半径内是 $C^\infty$ 光滑的.

## 实解析函数

幂级数在收敛半径内的行为是相当好的，连续、可逐项积分、可任意次求导.

我们不禁要问：给定的 $f$ 在区域 $D$ 上是否可以表示成幂级数？

必要性显然是 $C^\infty$ 光滑.

/Definition/ (实解析函数)

> 称 $f$ 是区间 $D$ 上的 (实) 解析函数，若 $\forall x_0\in D$，$\exist r>0$，使得在 $(x_0-r,x_0+r)$ 中 $f(x)$ 可表示为
> $$
> f(x)=\underset{n=0}{\overset{\infty}{\sum}}a_n(x-x_0)^n
> $$
> 即 $(x_0-r,x_0+r)$ 中有一个幂级数点点收敛到 $f(x)$.

/Claim/ (系数唯一)

> 若 $(x_0-r,x_0+r)$ 中有一个 $f(x)$ 的表示，那么这些系数 $a_n$ 显然为
> $$
> a_n=\frac{f^{(n)}(x)}{n!}\,,\quad\forall n
> $$

/Proof/

> 用幂级数的高阶导数求法，知
> $$
> f^{(k)}(x)=\underset{n=0}{\overset{\infty}{\sum}}a_n\underset{k}{\underline{n(n-1)\cdots(n-k+1)}}(x-x_0)^{n-k}
> $$
> 对比得到系数. 幂级数表示至多有一个候选的级数：
> $$
> \underset{n=0}{\overset{\infty}{\sum}}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
> $$
> 称之为 $f$ 的 Taylor 级数，记为：
> $$
> f\sim\underset{n=0}{\overset{\infty}{\sum}}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
> $$
> ::: danger 注意！
>
> 这里只说了 RHS 的系数来自于 $f$ 的高阶导数，没有提及 RHS 是否收敛，更没有说明 RHS 是否收敛到 $f$.
>
> :::

/Example/

> 上学期证明过，
> $$
> \begin{aligned}
> e^x\sim&\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{1}{2}x^2+···\\
> \sin(x)\sim&\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}=x-\frac{1}{6}x^3+···\\
> \sinh(x)\sim&\sum_{n=0}^{\infty}\frac{x^{2n+1}}{(2n+1)!}x+\frac{1}{6}x^3+···\\
> \cos(x)\sim&\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}=1-\frac{1}{2}x^2+···\\
> \cosh(x)\sim&\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}=1+\frac{1}{2}x^2+···\\
> \frac{1}{1-x}\sim&\sum_{n=0}^{\infty}x^n=1+x+···\\
> \ln(1+x)\sim&\sum_{n=0}^{\infty}\frac{(-1)^{n-1}x^n}{n}=x-\frac{1}{2}x^2+···\\
> \end{aligned}
> $$
> 当然余项可以用 Lagrange 余项或者 Cauchy 余项.

有了这么多证明的结果，我们其实还有负面的结果：

/Example/ (反面结果)

> Taylor 级数不体现原函数的任何具体信息.
>
> 上学期的习题课中证明过，
> $$
> f(x)=\left\{\begin{array}{lr}
> e^{-\frac{1}{x^2}}\,,\quad\forall x>0\\\\
> 0\,,\quad\forall x\leq0
> \end{array}\right.
> $$
> 其中会有 $f^{(n)}(0)=0$，因此 Taylor 级数为
> $$
> f\sim\underset{n=0}{\overset{\infty}{\sum}}\frac{f^{(n)}(0)}{n!}x^n=0
> $$
> 级数虽然收敛，但是与 $f(x)$ 的值毫无关系.

问：如何判断 Taylor 级数收敛到 $f$ ？

/Theorem/

> $f$ 在区间 $D$ 上是解析的，当且仅当 $\forall x_0\in D$，$\exist r>0$，$\exist$ 常数 $C$，使得
> $$
> |f^{(k)}(x)|\leq C^{k+1}k!\,,\quad\forall k\in\mathbb{Z}_{\geq0}\,,\quad\forall[x_0-r,x_0+r]
> $$

下节课我们再证明这一定理.