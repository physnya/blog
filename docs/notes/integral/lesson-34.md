---
title: Lesson 34 幂级数
permalink: /integral/lesson-34/
createTime: 2025/3/5 15:08:33
---
## 分析学性质

回顾一下上节课的内容.

/Theorem/ (Uniform Limit Theorem)

> 设 $f_n\in C^1(D)$，且 $f_n\Rightarrow f$ on $D$，则 $f\in C(D)$.
>
> 进而，$\forall a,b\in D$ 有
> $$
> \int_a^bf(x)\text{d}x=\lim_{n\to\infty}\int_a^bf_n(x)\text{d}x
> $$

/Theorem/ (求导定理)

> 设 $f_n\in C^1(D)$，$f_n\to f$ on $D$ (实际上只需要在某一点 $\{f_n(x_0)\}$ 收敛即可)，设 $\{f'_n\}$ 在 $D$ 上一致收敛.
>
> 则 $f$ 在 $D$ 上可导，且 $f'(x)=\underset{n\to\infty}{\lim}f_n'(x)$，$\forall x\in D$.

翻译到函数级数的版本 ($f_n$ 取为 $S_n(x)=u_1(x)+\cdots+u_n(x)$)：

/Theorem/

> 设 $u_n(x)\in C(D)$，且 $\sum u_n(x)$ 在 $D$ 上一致收敛. 则和函数 $S(x)=\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上连续，进一步 $\forall a,b\in D$ 有
> $$
> \int_a^bS(x)\text{d}x=\sum_{n=1}^\infty\int_a^bu_n(x)\text{d}x
> $$
>  作一种形式化的改述，得到
> $$
> \sum_{n=1}^\infty u_n(\lim_{m\to\infty}x_m)=\lim_{m\to\infty}\sum_{n=1}^\infty u_n(x_m)\\
> \int_a^b\sum_{n=1}^\infty u_n(x)\text{d}x=\sum_{n=1}^\infty\int_a^bu_n(x)\text{d}x
> $$
> 即，在一致收敛条件下有：
>
> 1. 点列极限与无穷和可交换；
> 2. 积分与无穷和可交换

/Theorem/ (逐项求导定理)

> 设 $u_n\in C^1(D)$，$\sum u_n(x)$ 在 $D$ 上点点收敛，设 $\sum u'_n(x)$ 在 $D$ 上一致收敛，则和函数 $S(x)=\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上可导，且
> $$
> S'(x)=\underset{n=1}{\overset{\infty}{\sum}}u'_n(x)\,,\quad\forall x\in D
> $$

/Proof/

> 证明是简单的. 记 $S_n=u_1+\cdots+u_n$，由条件知，$S_n\in C^1(D)$、$S_n\to S$ on $D$、$\{S_n'(x)\}$ 在 $D$ 上一致收敛.
>
> 由函数序列求导定理，得到 $S$ 在 $D$ 上可导且
> $$
> \begin{aligned}
> S'(x)&=\lim_{n\to\infty}S_n'(x)=\lim_{n\to\infty}(u'_1(x)+\cdots+u_n'(x))=\underset{n=1}{\overset{\infty}{\sum}}u_n'(x)
> \end{aligned}
> $$
> 还能改述成：
> $$
> (\sum_{n=1}^\infty u_n(x))'=\underset{n=1}{\overset{\infty}{\sum}}u_n'(x)
> $$

下面找一些例子做说明.

/Example/

> 证明 $\underset{n=1}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 在 $\R$ 上连续.
>
> 上次课我们证明过上述级数在 $\R$ 上不一致收敛，这可能会让人感到困惑：但是实际上连续性时一个逐点的概念，所以我们只需要逐点验证即可.
>
> 为此，$\forall x_0\in \R$，取 $b>|x_0|$，在 $[-b,b]$ 上 $\underset{n=1}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 一致收敛 (上次课用 $M$ - test 验证过)，于是 $\underset{n=1}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 在 $[-b,b]$ 上连续。所以在 $x_0$ 处级数连续，和函数在 $\R$ 上都连续.

/Example/

> $$
> \int_0^x\frac{\sin t}{t}\text{d}t
> $$
>
> 可以证明，$\frac{\sin t}{t}$ 的原函数没有解析表达式.
>
> $f(t)=\frac{\sin t}{t}$ ($t\neq0$) 在 $\R|\{0\}$ 上处处连续，同时 $\underset{t\to0}{\lim}\frac{\sin t}{t}=1$，是一个可去间断点，为此补充定义 $f(0)=1$.
>
> 在 $\R$ 上连续 $\Longrightarrow$ 有原函数 $F(x)=\int_0^x\frac{\sin t}{t}\text{d}t$，但没有解析表达式.
>
> Dirichlet 积分为
> $$
> \int_0^\infty\frac{\sin t}{t}\text{d}t=\frac{\pi}{2}
> $$
> 这一点我们在之后学含参积分时还会再计算一次.
>
> 视 $f(t)$ 为级数的和函数，回忆 Taylor 展开
> $$
> \sin t=t-\frac{t^3}{3!}+\cdots
> $$
> 所以
> $$
> f(t)=\frac{\sin t}{t}=\underset{k=0}{\overset{\infty}{\sum}}(-1)^k\frac{t^{2k}}{(2k+1)!}
> $$
> 为计算积分，必须验证一致收敛，$\forall b>0$，有
>
> /Claim/
>
> > $\underset{k=0}{\overset{\infty}{\sum}}(-1)^k\frac{t^{2k}}{(2k+1)!}$ 在 $[-b,b]$ 上一致收敛.
>
> /Proof/
>
> > $$
> > \left|(-1)^k\frac{t^{2k}}{(2k+1)!}\right|\leq\frac{b^{2k}}{(2k+1)!}=M_k\,,\quad\forall t\in[-b,b]
> > $$
> >
> > 而级数 $\underset{k=0}{\overset{\infty}{\sum}}M_k$ 的收敛性可以判断：
> > $$
> > \begin{aligned}
> > \lim_{k\to\infty}\frac{M_{k+1}}{M_k}&=\lim_{k\to\infty}\frac{b^{2(k+1)}/(2k+3)!}{b^{2k}/(2k+1)!}\\
> > &=\lim_{k\to\infty}\frac{b^2}{(2k+2)(2k+3)}=0
> > \end{aligned}
> > $$
> > 所以 ratio test 表明 $\underset{k=0}{\overset{\infty}{\sum}}M_k$ 收敛，再用 $M$ - Test 得到原来数列一致收敛.
>
> 逐项积分为
> $$
> \begin{aligned}
> \int_0^bf(t)\text{d}t&=\int_0^b\underset{k=0}{\overset{\infty}{\sum}}(-1)^k\frac{t^{2k}}{(2k+1)!}\text{d}t\\
> &=\underset{k=0}{\overset{\infty}{\sum}}\int_0^b(-1)^k\frac{t^{2k}}{(2k+1)!}\text{d}t\\
> &=\underset{k=0}{\overset{\infty}{\sum}}(-1)^k\frac{b^{2k+1}}{(2k+1)!(2k+1)}
> \end{aligned}
> $$
> 因此得到一个上面积分的级数表达式：
> $$
> \int_0^x\frac{\sin t}{t}\text{d}t=\underset{k=0}{\overset{\infty}{\sum}}(-1)^k\frac{x^{2k+1}}{(2k+1)!(2k+1)}\,,\quad\forall x\in\R
> $$

上面是一个积分的例子，之后我们来看一个求导的例子：

/Example/

> Riemann Zeta 函数 (之前已经定义过)
> $$
> \zeta(x)=\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^x}\,,\quad(x>1)
> $$
> 证明 $\zeta(x)$ 在 $(1,+\infty)$ 上处处可导.<hr>
>
> /Proof/
>
> > 记 $u_n(x)=\frac{1}{n^x}\in C^1(D)$，$D=(1,+\infty)$，则 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上逐点收敛，我们需要
> > $$
> > \underset{n=1}{\overset{\infty}{\sum}}u_n'(x)=\underset{n=1}{\overset{\infty}{\sum}}(e^{-x\ln n})'=\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^x}(-\ln n)
> > $$
> > 的一致收敛性.
> >
> > > 事实上去年有一个练习 (可能是考试题) 是证明 $\underset{n=1}{\overset{\infty}{\sum}}\frac{-\ln n}{n^x}$ 在 $(1,+\infty)$ 上不一致收敛. [解答](#1)
> >
> > /Claim/
> >
> > > $\forall b>1$，$\underset{n=1}{\overset{\infty}{\sum}}\frac{-\ln n}{n^x}$ 在 $[b,+\infty)$ 上一致收敛.
> >
> > /Proof/
> >
> > > 注意到
> > > $$
> > > \left|\frac{-\ln n}{n^x}\right|\leq\frac{\ln n}{n^b}=M_n
> > > $$
> > > 而 $\underset{n=1}{\overset{\infty}{\sum}}M_n$ 是收敛的 (因为 $\ln n$ 小于 $n$ 的任意正数次方)，所以原来的级数一致收敛，得证.
> >
> > 用逐项求导定理，得到 $\zeta(x)$ 在 $[b,+\infty)$ 上可导，
> > $$
> > \zeta'(x)=\underset{n=1}{\overset{\infty}{\sum}}(\frac{1}{n^x})'=\underset{n=1}{\overset{\infty}{\sum}}\frac{-\ln n}{n^x}\,,\quad\forall x\geq b
> > $$
> > 对于任何 $x_0>1$，取 $1<b<x_0$，由上述式子知 $\zeta(x)$ 在每一点 $x_0$ 处可导.
>
> 证毕.<hr>
>
> 对上面这个<a name="1">练习题</a>的证明：反证，设在 $(1,+\infty)$ 上一致收敛，由 Cauchy 准则，$\forall\varepsilon>0$，$\exist N$ 使得 $\forall m>n\geq N$ 有
>
> $$
> \left|\underset{i=n+1}{\overset{m}{\sum}}\frac{-\ln i}{i^x}\right|<\varepsilon\,,\quad\forall x\in(1,+\infty)
> $$
>
> 对固定的 $m,n$，上式中 $x\to1+$ 取极限，得到
> $$
> \varepsilon\geq\lim_{x\to1+}\left|\underset{i=n+1}{\overset{m}{\sum}}\frac{-\ln i}{i^x}\right|=\underset{i=n+1}{\overset{m}{\sum}}\frac{\ln i}{i}>\frac{1}{i}
> $$
> 荒谬！因此不是一致收敛.

## 幂级数概念

函数级数可以非常复杂，但是我们主要关注的函数级数是幂级数.

形如 $a_0+a_1(x-c)+a_2(x-c)^2+\cdots$ 的级数，如果平移坐标 $y=x-c$ 可以得到标准幂级数 $\underset{n=0}{\overset{\infty}{\sum}}a_ny^n$.

我们要问什么问题？

> 收敛域、分析学性质.

## 幂级数的收敛域

/Theorem/ (Abel)

> 设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处收敛，则 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $(-|x_0|,|x_0|)$ 中处处绝对收敛.<hr>
>
> /推论/
>
> > 若 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处发散，则 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $(-\infty,-|x_0|)\cup(|x_0|,+\infty)$ 上处处发散.
>
> /Proof/ (推论)
>
> > 反证 (因为几乎是逆否命题)，设 $\exist|x_1|>|x_0|$ 使得 $\underset{n=0}{\overset{\infty}{\sum}}a_nx_1^n$ 收敛，则根据 Abel 的定理得到在 $(-|x_1|,|x_1|)$ 中处处收敛，与题设矛盾，因此得证.

/Proof/ (Abel)

> 证明方法是用 $x_0$ 的信息表达内部的某个 $x$ 处级数值.
>
> 来证明若 $|x|<|x_0|$，则 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 绝对收敛，即 $\underset{n=0}{\overset{\infty}{\sum}}|a_nx^n|$ 收敛.
>
> 为此，计算：
> $$
> \underset{n=0}{\overset{\infty}{\sum}}|a_nx^n|=\underset{n=0}{\overset{\infty}{\sum}}|a_nx_0^n|\left(\frac{|x|}{|x_0|}\right)^n
> $$
> 由于 $\underset{n=0}{\overset{\infty}{\sum}}a_nx_0^n$ 收敛，可知 $\{a_nx_0^n\}\to0$，特别地 $\{a_nx_0^n\}$ 有界，设 $|a_nx_0^n|\leq M$，$\forall n\in\mathbb{Z}_{\geq0}$. 这样，
> $$
> |a_nx^n|=|a_nx_0^n|\left(\frac{|x|}{|x_0|}\right)^n\leq M\left(\frac{|x|}{|x_0|}\right)^n
> $$
> 这是一个几何级数，公比小于 $1$，因此收敛，所以 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 绝对收敛，得证.

简单来说，上面的定理可以表达为：

* 若幂级数在一点处收敛 $\Longrightarrow$ 近处 (更) 收敛
* 若幂级数在一点处发散 $\Longrightarrow$ 远处 (更) 发散

/Theorem/

> 对任何幂级数 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$，存在唯一的一个 $R\in\R_{\geq0}\cup\{$符号$+\infty\}$，使得：
>
> 1. $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $(-R,R)$ 上处处收敛；
> 2. $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $(-\infty,-R)\cup(R,+\infty)$ 上处处发散.
>
> 称这个 $R$ 为这个幂级数的收敛半径.

/Proof/

> 令 $A=\{x_0\geq0:\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处绝对收敛$\}$，则 $0\in A$，知 $A$ 非空，讨论如下两种情况：
>
> 1. $A$ 有上界：$\sup A$ 存在，$R=\sup A$.
> 2. $A$ 无上界：(约定 $\sup A=+\infty$) 记 $R=+\infty$.
>
> 验证 $R$ 满足定理的两个要求 (照理来讲应该分别验证上面两种情况，但是为了简便我们只验证第 1 种情况)：
>
> 1. $\forall|x_0|<R$，由 $|x_0|<R=\sup A$，于是 $|x_0|$ 不是 $A$ 的上界，即 $\exist a\in A$ 使得 $a>|x_0|$. 而 $a\in A$，所以 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $a$ 处绝对收敛，所以 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处也绝对收敛.
> 2. $\forall|x_1|>R$，反证，假设 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_1$ 处绝对收敛，取 $|x_1|>x_2>R$，则 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_2$ 处绝对收敛，因此 $R$ 不是 $\sup A$，矛盾！所以验证成功.

总结：收敛半径 $R=\sup\{x_0\geq0:\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 在 $x_0$ 处绝对收敛$\}$.

推论：幂级数 $\underset{n=0}{\overset{\infty}{\sum}}a_nx^n$ 的收敛域几乎已经定死，收敛域 $X$ 满足 $(-R,R)\subseteq X\subseteq[-R,R]$，只剩下 $\pm R$ 处待定，从而 $X$ 只有四种可能.

一般而言，$\pm R$ 处需要单独地判断，没有特别好的判断方法.

问：如何求 $R$？

> 我们说，用 ratio test，Cauchy test 等.