---
title: Lesson 36 解析函数
permalink: /integral/lesson-36/
createTime: 2025/3/12 15:09:32
---
## 解析函数

分为实解析函数、复解析函数 (全纯函数).

回忆：幂级数函数的行为很好 (是 $C^\infty$ 光滑的，可以逐项求导、逐项积分). 自然我们要问：某个 $C^\infty$ 的 $f$ 在 $x_0$ 附近能否被表示为幂级数？
$$
f(x)=\underset{n=0}{\overset{\infty}{\sum}}a_n(x-x_0)^n\,,\quad\forall x\in(x_0-\delta,x_0+\delta)\tag{*}
$$
/Claim/

> 若 $(*)$ 成立，则 $a_n=\frac{f^{(n)}(x_0)}{n!}$，$\forall n$，$f$ 在 $x_0$ 附近的幂级数表示至多唯一，是
> $$
> f(x)=\underset{n=0}{\overset{\infty}{\sum}}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
> $$
> (称为 $f$ 在 $x_0$ 附近的 Taylor 级数)

/Definition/

> 称 $f$ 在 $x_0$ 处解析，若 $\exist\delta>0$，使得
> $$
> f(x)=\underset{n=0}{\overset{\infty}{\sum}}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\,,\quad\forall x\in(x_0-\delta,x_0+\delta)
> $$
> 对开区间 $I$，称 $f$ 是 $I$ 上的解析函数，记为 $f\in C^\infty(I)$，若 $f$ 在 $\forall x_0\in I$ 处均解析.

/Theorem/

> 设 $f\in C^\infty(I)$，则 $f$ 在 $I$ 上解析，当且仅当 $\forall x_0\in I$，$\exist(x_0-\delta,x_0+\delta)\subseteq I$ ($\delta>0$)，以及正常数 $C,R$ 使得
> $$
> |f^{(n)}(x)|\leq\frac{n!}{R^n}C\,,\quad\forall x\in(x_0-\delta,x_0+\delta)\,,\quad\forall n\in\mathbb{Z}_{\geq0}
> $$

/Proof/

> 对我们来说，充分性 (“$\Longleftarrow$”) 是更好证明的：只需证 $f$ 在 $x_0$ 处解析. 为此，要取一个 $|x-x_0|$ 的上限，我们先写出 $f$ 与其 Taylor 公式的差：
> $$
> \left|f(x)-\underset{k=0}{\overset{n-1}{\sum}}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right|\overset{\text{Taylor}}{=}\left|\frac{f^{(n)}(\xi_{x,n})}{n!}(x-x_0)^n\right|
> $$
> 由我们的条件，上式应该满足：
> $$
> \leq\frac{\frac{n!}{R^n}C}{n!}|x-x_0|^n=\left(\frac{|x-x_0|}{R}\right)^nC
> $$
> 只要取底数小于 $1$，最终的余项会趋于 $0$，所以我们取 $\forall|x-x_0|<\min(\delta,R)$，可知这时有
> $$
> \lim_{n\to\infty}\left(f(x)-\underset{k=0}{\overset{n-1}{\sum}}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right)=0
> $$
> 即，$\forall|x-x_0|<\min(\delta,R)$，$f(x)$ 在 $x_0$ 处解析.
>
> ---
>
> 对于必要性 (“$\Longrightarrow$”)，我们尝试证明：已知 $f$ 在 $x_0$ 处解析，设在 $(x_0-\delta,x_0+\delta)$ 中有
> $$
> f(x)=\underset{k=0}{\overset{\infty}{\sum}}a_k(x-x_0)^k\,,\quad\forall x\in(x_0-\delta,x_0+\delta)
> $$
> 逐项求导 $n$ 次，得到
> $$
> \begin{aligned}
> |f^{(n)}(x)|&=\left|\underset{k=n}{\overset{\infty}{\sum}}a_kk(k-1)\cdots(k-n+1)(x-x_0)^{k-n}\right|\\
> &\leq\underset{k=n}{\overset{\infty}{\sum}}|a_k|k(k-1)\cdots(k-n+1)\delta^{k-n}\\\\
> &\text{We need }\sup|a_k|
> \end{aligned}
> \tag{**}
> $$
> /Lemma/
>
> > $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 半径 $\geq\rho$ $\Longleftrightarrow$ $\forall0<R<\rho$，$\exist$ 常数 $C$ 使得 $|a_n|\leq\frac{C}{R^n}$，$\forall n\in\mathbb{Z}_{\geq0}$.
> >
> > 这个引理的证明放在[后面](#1).
>
> 由于 $\underset{k=0}{\overset{\infty}{\sum}}a_k(x-x_0)^k$ 的收敛半径 $\geq\delta'>\delta$  (==这里特意取小了一个 $\delta$，为了保证收敛==)，用引理知道对于 $\forall0<R<\delta'$，$\exist C$ 使得 $|a_n|\leq\frac{C}{R^n}$，$\forall n\geq0$. 代回 $(**)$，知道
> $$
> \begin{aligned}
> |f^{(n)}(x)|&\leq\underset{k=n}{\overset{\infty}{\sum}}\frac{C}{R^k}k(k-1)\cdots(k-n+1)\delta^{k-n}\\
> &=\frac{n!}{R^n}\underset{k=n}{\overset{\infty}{\sum}}C\cdot\frac{k(k-1)\cdots(k-n+1)}{n!}\left(\frac{\delta}{R}\right)^{k-n}\\
> &=\frac{n!}{R^n}C\underset{k=n}{\overset{\infty}{\sum}}C_k^{k-n}\left(\frac{\delta}{R}\right)^{k-n}\\
> &\overset{k-n=l}{=}\frac{n!}{R^n}C\underset{l=0}{\overset{\infty}{\sum}}C_{n+l}^l\left(\frac{\delta}{R}\right)^l\\
> &=\frac{n!}{R^n}C(1-\frac{\delta}{R})^{-n-1}
> \end{aligned}
> $$
>
> > 其中，最后一步用到之前的结论：
> > $$
> > (1-x)^{-n-1}=\underset{l=0}{\overset{\infty}{\sum}}C_{n+l}^lx^l\,,\quad|x|<1
> > $$
>
> 这样，$\forall|x-x_0|<\delta<\delta'$，有
> $$
> \begin{aligned}
> |f^{(n)}(x)|&\leq\frac{n!R}{R^{n+1}}C\frac{1}{(1-\frac{\delta}{R})^{n+1}}=\frac{CR}{R-\delta}\frac{n!}{D^n}
> \end{aligned}
> $$
> 其中，$D=R-\delta>0$. 恰好是定理中的 RHS，证毕.
>
> > <a name="1">引理证明</a>
> >
> > “$\Longrightarrow$”：由 Cauchy - Hadamard 公式，得到 $\underset{n\to\infty}{\lim}\sup\sqrt[n]{a_n}<\frac{1}{R}$.
> >
> > 令 $y_n=\sup\{\sqrt[n]{a_n}\,,\sqrt[n+1]{a_{n+1}}\,\,\,\,,\cdots\}$，则 $y_n$ 单调递减，趋于我们要求的 $\lim\sup$. 所以 $\exist y_N<\frac{1}{R}$，$\forall n\geq N$ 有 $\sqrt[n]{|a_n|}<\frac{1}{R}$，$|a_n|<\frac{1}{R^n}$.
> >
> > 表明 $|a_n|R^n$ 有上界 ($n\geq N$) 时，而且前面只有有限项，所以 $\{|a_n|R^n\}$ 有上界 $C$，得到 $|a_n|\leq\frac{C}{R^n}$，$\forall n$.
> >
> > ---
> >
> > 虽然这里我们不需要用到“$\Longleftarrow$”，但是我们还是来证明一下：
> >
> > 要证明收敛半径 $\geq\rho$，为此，取 $\forall|x|<R<\rho$，从而
> > $$
> > |a_nx^n|\leq\frac{C}{R^n}|x|^n=C\left(\frac{|x|}{R}\right)^n
> > $$
> > 这里只需要公比 $|x|/R$ 小于 $1$，比较定理知道绝对收敛，$\forall|x|<\rho$. 而收敛半径应当为 $\sup\{x\geq0:x$ 处绝对收敛$\}\geq\rho$，得证.

证毕.

一般而言，我们用这个定理来验证 $f\in C^\infty$ 是否解析.

/Corollary/

> 幂级数在收敛半径内是解析函数.
>
> 设 $f(x)=\underset{n=0}{\overset{\infty}{\sum}}a_n(x-x_0)^n$ 半径为 $\delta$，则 $f$ 在 $(x_0-\delta,x_0+\delta)$ 中解析.

一种解释是，我们相信 $f$ 可以以 $x_0$ 为中心展为幂级数，那么也可以以 $x_1\in(x_0-\delta,x_0+\delta)$ 为中心展开，每一项 $(x-x_0)^n$ 在 $x_1$ 处再展开成无穷项.

$\longrightarrow$ 但是这里并不严格，因为原来的每一项都会展开成大量的不同阶数的项，导致混乱.

/Proof/ (严格证明)

> 用定理的证明过程，重新概括地写一遍：
>
> $\forall\delta<\delta'$，取定 $\delta<R<\delta'$，可得 $\forall x\in(x_0-\delta',x_0+\delta')$ 有
> $$
> |f^{(n)}(x)|\leq CR\frac{n!}{(R-\delta)^{n+1}}\,,\quad\forall n\geq0
> $$
> 这样，$\forall x_1\in(x_0-\delta',x_0+\delta')$，取 $|x_1-x_0|<\delta<\delta'$，可得 $\forall x_0-\delta<x<x_0+\delta$ 有
> $$
> |f^{(n)}(x)|\leq k\frac{n!}{D^n}\,,\quad\forall n\geq0
> $$
> 特别地，在 $B_{|\delta-x_1|}(x_1)$ 中亦如此，所以由定理知 $f$ 在 $(x_0-\delta',x_0+\delta')$ 中解析.

### 实解析函数的例子

/Example/

> 多项式函数是 $\R$ 上的实解析函数. 因为它直接是一个 Taylor 公式的有限和.
>
> $e^x$，$\sin x$，$\cos x$ 在 $\R$ 上是实解析函数.
>
> (实际上包含了上面几个例子) 幂级数在收敛半径内是实解析函数.
>
> 上学期证明过，
> $$
> (1+x)^\alpha=\underset{k=0}{\overset{\infty}{\sum}}C_\alpha^kx^k\,,\quad|x|<1
> $$
> 右边幂级数的半径为 $1$，$(1+x)^\alpha$ 在 $(-1,1)$ 上实解析.
>
> $\ln(1+x)$ 在 $(-1,1)$ 中实解析.

艾神突然想到的一个问题：$(1+x)^\alpha$ 和 $\ln(1+x)$ 在 $(-1,+\infty)$ 上是否实解析？

回答：是的，因为对于 $(1,+\infty)$，换元即可，取为
$$
\begin{aligned}
f(x)&=(1+x)^\alpha=(1+x_0)^\alpha(1+\frac{x-x_0}{1+x_0})^\alpha=(1+x_0)^\alpha\underset{n=0}{\overset{\infty}{\sum}}C_\alpha^n(\frac{x-x_0}{1+x_0})^n\\
g(x)&=\ln(1+x)=\ln(1+x_0)+\underset{n=1}{\overset{\infty}{\sum}}\frac{(-1)^{n-1}}{n}(\frac{x-x_0}{1+x_0})^n
\end{aligned}
$$

## 多元微分学

终于进入我们课程的下一个部分——多元微分学.

这里的内容有：多元函数、极限、连续性、求导 & 微分、Taylor 公式.

$\R^n=\R\times\cdots\times\R$，为 $n$ 重 Descartes 积，得到 $n$ 维 Euclidean 空间. 其元素称为 $\R^n$ 的点，可以写成行 / 列向量形式：
$$
\vec{x}=\begin{pmatrix}
x_1\\\vdots\\x_n
\end{pmatrix}=\begin{pmatrix}
x_1&\cdots&x_n
\end{pmatrix}
$$
称 $x_i$ 为 $\vec{x}$ 的第 $i$ 个分量.

/Definition/

> 一个多元函数 $f:D\to\R$ 是指从 $\R^n$ 的子集 $D$ 到 $\R$ 的映射；
>
> 一个多元映射指 $f:D\to\R^n$.
>
> 注意 $\R^n$ 有 $m$ 个投影映射 $P_i:\R^m\to\R$ (向第 $i$ 个坐标投影)，$P(x_1,\cdots,x_m)=x_i$，$f:D\to\R^m$ $\Longleftrightarrow$ $m$ 个分量函数 $f_i:D\overset{f}{\to}\R^m\overset{P_i}{\to}\R$ ($1\leq i\leq m$). 具体而言，$\forall\vec{x}\in D$，$f(\vec{x})\in\R^m$ 的第 $i$ 个分量为 $P_i(f(x))=f_i(\vec{x})$.
> $$
> f(\vec{x})=(f_1(\vec{x}),f_2(\vec{x}),\cdots,f_m(\vec{x}))\,,\quad\forall \vec{x}\in D
> $$

