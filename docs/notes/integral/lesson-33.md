---
title: Lesson 33 函数级数 2
createTime: 2025/2/28 12:19:25
permalink: /integral/lesson-33/
---
## 一致收敛

这是一个技术化的条件，但是必不可少.

/Definition/

> 称 $f_n\Rightarrow f$ on $D$，如果 $\forall\varepsilon>0$，$\exist N=N(\varepsilon)\in\mathbb{Z}_+$ 使得 $\forall n\geq N$ 有 $|f_n(x)-f(x)|<\varepsilon$，$\forall x\in D$.
>
> /解释/
>
> > 作为对比，如果不是一致收敛，则 $f_n\to f$ on $D$，这时如果 $\forall x\in D$，$\forall\varepsilon>0$，$\exist N=N(x,\varepsilon)$ 使得 $\forall n\geq N$ 都有 $|f_n(x)-f(x)|<\varepsilon$.
> >
> > 显然，后者对于每一个不同的 $x$ 都有一个自己的 $N(x,\varepsilon)$.
> >
> > 每个 $x$ 经过步点 $f_1(x)$，$f_2(x)$，$\cdots$ 逐渐靠近自己的目的地 $f(x)$，那么这里的 $N(x,\varepsilon)$ 的含义是 $x$ 几乎到达目的地所需要的步数. 则，逐点收敛的意思是每个点都会接近目标，但是允许每个点的步调不同；而一致收敛则要求所有的点靠近目的地的步调相同，要在 $N(\varepsilon)$ 内接近目的地，对所有点的收敛速度有一个下界要求.

/Example/

> $f_n(x)=x^n:\R\to\R$，收敛域是 $X=(-1,1]$，极限为
> $$
> f(x)=\left\{\begin{array}{lr}
> 0\,,\quad\forall x\in(-1,1)\\
> 1\,,\quad x=1
> \end{array}\right.
> $$
> 这是否一致收敛于 $(-1,1]=D$ ？
>
> /粗略看法/
>
> > $\forall\varepsilon>0$，$\forall x\in(-1,1)$，考虑 $|f_n(x)-f(x)|<\varepsilon\Longleftrightarrow x^n<\varepsilon$，接着得到
> > $$
> > n>\frac{\ln\varepsilon}{\ln x}
> > $$
> > 如果不习惯，可以把 $\ln$ 中的变量换成大于 $1$ 的 $1/\varepsilon$ 和 $1/x$.
> > $$
> > N(x,\varepsilon)\approx\frac{\ln1/\varepsilon}{\ln1/x}
> > $$
> > 当 $x\to1-$ 时，$1/x\to1+$，$\ln1/x\to0+$，因此 $N(x,\varepsilon)\to+\infty$，这表明 $1$ 左侧附近的 $x$ 需要非常多步才能接近目的地，收敛的速度极慢 (接近无穷步)，因此这不会是一致收敛.
>
> 上面是一个粗略的理解，但是有人会说可能 $N$ 不一定是这种形式，我们下面严格证明这个想法是不可能的.
>
> /Proof/ (严格证明)
>
> > 反证，设一致收敛.
> >
> > 由定义，$\forall\varepsilon>0$，$\exist N$，使得 $\forall n\geq N$ 有 $|f_n(x)-f(x)|<\varepsilon$，$\forall|x|<1$.
> >
> > 从上面的不等式得到相当多的结论：$|x|^n<\varepsilon$，$\forall|x|<1$. 特别地，取 $n=N$，应该有 $|x|^N<\varepsilon$，$\forall x\in(-1,1)$.
> >
> > 上面的结论显然荒谬：只要取 $x\to1-$ 就能导出矛盾.

这些是我们上节课讲到的技术性条件，但是引入这个“一致收敛”之后我们能修正上节课 Cauchy 的错误理论.

/Theorem/ (Uniform Limit Theorem)

> 设 $\{f_n\in C(D,\R)\}_{n=1}^\infty$ 在 $D$ 上一致收敛到 $f$，则 $f$ 在 $D$ 上连续.

## 判断一致收敛

对比序列的极限和一致收敛两种概念：(省略 $N\in\mathbb{Z}_+$)

$\underset{n\to\infty}{\lim}a_n=L$：$\forall\varepsilon>0$，$\exist N$，$\forall n\geq N$，$|a_n-L|<\varepsilon$

  $f_n\Rightarrow f$ on $D$：$\forall\varepsilon>0$，$\exist N$，$\forall n\geq N$，$|f_n(x)-f(x)|<\varepsilon$，==$\forall x\in D$==

看起来，一致收敛就像序列的收敛一样，整齐划一，像单个点的收敛行为.

那么对于一致收敛，应该也有一个类似 Cauchy 准则的判别方式.

/Theorem/ (Cauchy 准则)

> $\forall\varepsilon>0$，$\exist N$，$\forall m,n\geq N$，$|a_m-a_n|<\varepsilon$.

对比上面的定义，我们认为只要把 Cauchy 准则抄过来，加上 $\forall x\in D$ 就行了.

/Theorem/ (一致收敛的 Cauchy 准则)

> $f_n\Rightarrow f$ on $D$，当且仅当 $\forall\varepsilon >0$，$\exist N$，$\forall m,n\geq N$ 有 $|f_m(x)-f_n(x)|<\varepsilon$，$\forall x\in D$.

/Proof/

> 当然如果不想证明就只要认定 Cauchy 准则和序列极限的准则一致就行.
>
> “$\Longrightarrow$”：由定义，可以取 $|f_n(x)-f(x)|<\frac{\varepsilon}{2}$，$\forall n,m\geq N$，有
> $$
> \begin{aligned}
> |f_m(x)-f_n(x)|&=|f_m(x)-f(x)+f(x)-f_n(x)|\\\\
> &\leq|f_m(x)-f(x)|+|f_n(x)-f(x)|\leq\varepsilon
> \end{aligned}
> $$
> 得证.
>
> “$\Longleftarrow$”：设 RHS 成立，此时表明 $\{f_n(x)\}$ 是 Cauchy 列，于是 $\underset{n\to\infty}{\lim}f_n(x)$ 存在，记为 $f(x)$. 再注意到条件要求 $\forall n,m\geq N$ 有
> $$
> |f_m(x)-f_n(x)|<\varepsilon\,,\quad\forall x\in D\\\\
> \Longrightarrow\lim_{m\to\infty}|f_m(x)-f_n(x)|\leq\varepsilon\,,\quad x\in D\\\\
> \Longrightarrow|f(x)-f_n(x)|\leq\varepsilon\,,\quad x\in D
> $$
> 得证.

证毕.

## 函数级数理论

这里我们先讲函数级数，因为如果先讲其他级数理论，在讲这里的时候就会重复讲两边某些定理.

级数理论 $\subseteq$ 极限理论
$$
\sum_{n=1}^\infty u_n(x)=\lim_{n\to\infty}S_n(x)
$$
其中 $S_n(x)=u_1(x)+\cdots+u_n(x)$，有限部分和序列.

/Definition/

> 函数项无穷级数 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 的和函数 $S(x)$ 就是 $\{S_n(x)\}$ 的极限函数.
>
> 称 $x_0$ 是收敛点
> $\Longleftrightarrow$ $\underset{n\to\infty}{\lim}S_n(x_0)$ 存在
> $\Longleftrightarrow$ $\underset{n\to\infty}{\lim}(u_1(x_0)+\cdots+u_n(x))$ 存在
> $\Longleftrightarrow$ 数值级数 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x_0)$ 收敛
>
> 反之，若 $x_0$ 是发散点，则等价于 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x_0)$ 发散.

因此知道和函数 $S(x)$ 就能逐点算出： $S(x_0)=\underset{n=1}{\overset{\infty}{\sum}}u_n(x_0)$.

但是我们还需要一致收敛的定义 (上面的定义是逐点收敛).

/Definition/

> 称函数级数 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛 $\Longleftrightarrow$ $S_n(x)\Rightarrow S(x)$ on $D$.
>
> 用 $\varepsilon$ - $\delta$ 语言，写成：$\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall n\geq N$ 有 $|S_n(x)-S(x)|<\varepsilon$，$\forall x\in D$.

但是一般而言，$S(x)$ 的样式很复杂，不好用来使用. 我们需要更好的判别方法.

/Theorem/ (函数级数一致收敛的 Cauchy 准则)

> $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall m>n\geq N$ 有 $|S_m(x)-S_n(x)|<\varepsilon$，$\forall x\in D$
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall m>n\geq N$ 有 $|u_{n+1}(x)+\cdots+u_m(x)|<\varepsilon$，$\forall x\in D$
> $\Longleftrightarrow$ ($m=n+p$ 换元) $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall n\geq N$，$\forall p\in\mathbb{Z}_+$，有 $|u_{n+1}(x)+\cdots+u_{n+p}(x)|<\varepsilon$，$\forall x\in D$.

一般我们用第二个版本.

/Claim/ (一致收敛的必要条件)

> 若 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛，则 $u_n(x)\Rightarrow0$ on $D$. 这可以类比 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛 $\Longrightarrow$ $\{a_n\}$ 趋于 $0$.

/Proof/

> 由一致收敛的 Cauchy 准则，知道 $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall m>n\geq N$ 有 $|u_{n+1}(x)+\cdots+u_m(x)|<\varepsilon$，只需取特例 $m=n+1$，即得到 $|u_{n+1}(x)|<\varepsilon$，$\forall x\in D$，证毕.

最常用的判断 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 一致收敛的办法应该是 $M$ - Test，又称 Weierstrass 强级数判别法.

/Theorem/ ($M$ - Test，Weierstrass 强级数判别法)

> 设 $|u_n(x)|\leq M_n$，$\forall x\in D$，若 $\underset{n=1}{\overset{\infty}{\sum}}M_n$ 是收敛的数值级数，则 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛.

大多数情况我们都是用 $M$ - Test 进行判定.

/Proof/ (两次使用 Cauchy 准则)

> 由 $\underset{n=1}{\overset{\infty}{\sum}}M_n$ 一致收敛，知道 $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，使得 $\forall m>n\geq N$ 有 $M_{n+1}+\cdots+M_m<\varepsilon$.
>
> 进而，
> $$
> \begin{aligned}
> |u_{n+1}(x)+\cdots+u_n(x)|&\leq|u_{n+1}(x)|+\cdots+|u_m(x)|\\\\
> &\leq M_{n+1}+\cdots+M_m<\varepsilon
> \end{aligned}
> $$
> 再用一次 Cauchy 准则知道 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛.

虽然已经有了 $M$ - Test，但是我们仍然不满足，因为在模糊的印象中，Dirichlet & Abel Test 应该也在函数级数理论中能够找到对应.

/Theorem/ (一致收敛的 Dirichlet Test)

> 设对每个 $x\in D$，$\{a_n(x)\}$ 关于 $n$ 单调，且 $\{a_n(x)\}$ 在 $D$ 上**一致**趋于 $0$；设 $\{b_n(x)\}$ 的部分和函数在 $D$ 上**一致**有界 (即 $\exist K>0$，$\forall n\in\mathbb{Z}_+$ 有 $|b_1(x)+\cdots+b_n(x)|\leq K$，$\forall x\in D$).
>
> ==函数的级数都要记得加上“一致”的条件==！
>
> 则 $\underset{n=1}{\overset{\infty}{\sum}}a_n(x)b_n(x)$ 在 $D$ 上一致收敛.

/Theorem/ (一致收敛的 Abel Test)

> 设对每个 $x\in D$，$\{a_n(x)\}$ 关于 $n$ 单调，且函数序列 $\{a_n(x)\}$ 在 $D$ 上**一致**有界 (即 $\exist K>0$，使得 $\forall n\in\mathbb{Z}_+$，$|a_n(x)|\leq K$，$\forall x\in D$).
>
> 设 $\underset{n=1}{\overset{\infty}{\sum}}b_n(x)$ 在 $D$ 上**一致**收敛.

上述两个定理的证明和数值级数版本一样，只要加上“一致”和 $x\in D$ 即可. 因此这里略去证明.

/Example/

> 回忆 $\{f_n(x)=x^n\}$ 在 $(-1,1)$ 上不一致收敛. 断言：$\forall 0<b<1$，$\{f_n(x)=x^n\}$ 在 $[-b,b]$ 上是一致收敛到 $0$ 函数的.
>
> 这也是该函数不一致收敛但是极限函数连续的原因.
>
> 注意到 $|f_n(x)-0|=|x|^n\leq b^n$，$\forall x\in D=[-b,b]$，由 $\underset{n\to\infty}{\lim}b^n=0$ 的定义知道 $\forall\varepsilon>0$，$\exist N$，$\forall n\geq N$ 有 $b^n<\varepsilon$. 进而 $|f_n(x)-0|\leq b^n<\varepsilon$，一致收敛！
>
> 因此，$f_n\Rightarrow0$ on $[-b,b]$.
>
> 由此证明 $\underset{n\to\infty}{\lim}f_n$ 在 $(-1,1)$ 上连续，$\forall x_0\in(-1,1)$，取 $|x_0|<b<1$，这样由 Uniform Limit Theorem 得到 $f$ 在 $[-b,b]$ 上连续.
>
> 特别地，$f$ 在 $x_0$ 处连续 $\Longrightarrow$ $f\in C((-1,1))$.

/Example/

> 已经证明过 $e^x=\underset{n=0}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ ($\forall x\in\R$)，表明 $\underset{n=0}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 在 $\R$ 上逐点收敛. 我们想要证明：
>
> 1. 这个级数在 $\R$ 上不一致收敛；
> 2. 对 $\forall b>0$，$\underset{n=1}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 在 $[-b,b]$ 上一致收敛.
>
> 先尝试证明 2.：用 $M$ - Test，已知
> $$
> |u_n(x)|=\left|\frac{x^n}{n!}\right|\leq\frac{b^n}{n!}=M_n\,,\quad \forall x\in[-b,b]
> $$
> 而 $\underset{n=0}{\overset{\infty}{\sum}}M_n=\underset{n=0}{\overset{\infty}{\sum}}\frac{b^n}{n!}=e^b$ 收敛，由 $M$ - Test 得到 $\underset{n=0}{\overset{\infty}{\sum}}\frac{x^n}{n!}$ 在 $[-b,b]$ 上一致收敛.
>
> 再来研究 1.：
>
> ==证明不一致收敛，一般是反证法，假设一致收敛，用 Cauchy 准则知道无数个不等式，从中寻找矛盾==.
>
> 假设在 $\R$ 上一致收敛，则 $\{u_n(x)=\frac{x^n}{n!}\}\Rightarrow0$ on $\R$，表明 $\varepsilon>0$，$\exist N$，$\forall n\geq N$，都有
> $$
> \left|\frac{x^n}{n!}\right|<\varepsilon\,,\quad\forall x\in\R
> $$
> 取定 $n$ 后，$x$ 可以随意变化，上面式子是荒谬的. 证毕.

## 分析学性质

关于连续性的 Uniform Limit Theorem 我们略去不写，之前已经讲过.

/Theorem/ (积分)

> 设 $\{f_n(x)\}$ 在 $D$ ($D$ 是区间) 上**一致**收敛到 $f$，则 $\forall a,b\in D$，有
> $$
> \int_a^bf(x)\text{d}x=\lim_{n\to\infty}\int_a^bf_n(x)\text{d}x
> $$
> ==有关函数级数一定要加上“一致”两字==.

/Proof/

> 由 Uniform Limit Theorem，知道 $f\in C(D)$，进而 $f$ 在 $[a,b]$ 上可积.
>
> 由一致收敛的定义，知道 $\forall\varepsilon>0$，$\exist N=N(\varepsilon)$，$\forall n\geq N$ 有 $|f_n(x)-f(x)|<\varepsilon$，$\forall x\in D$. 进而，
> $$
> \begin{aligned}
> \left|\int_a^bf_n(x)\text{d}x-\int_a^bf(x)\text{d}x\right|&=\left|\int_a^b(f_n(x)-f(x))\text{d}x\right|\\
> &\leq\int_a^b|f_n(x)-f(x)|\text{d}x\\
> &\leq\int_a^b\varepsilon\text{d}x=\varepsilon(b-a)
> \end{aligned}
> $$
> 表明，
> $$
> \lim_{n\to\infty}\int_a^bf_n(x)\text{d}x=\int_a^bf(x)\text{d}x
> $$

证毕.

【练习】若删去“一致”，则上述定理未必对，可以构造一个反例序列，$\int_0^1f_n(x)\text{d}x=1$，但是 $f_n(x)\to0$ on $[0,1]$.

/Theorem/ (求导)

> 设 $f_n(x)\in C^1(D)$，且 $\{f_n'\}$ 在 $D$ 上一致收敛，$\{f_n\}$ 在 $D$ 上逐点收敛 (记极限函数为 $f$)，进一步还有 $f$ 在 $D$ 上可导，
> $$
> f'(x)=\lim_{n\to\infty}f'_n(x)\,,\quad\forall x\in D
> $$

/Proof/ (用积分结果和 Newton - Leibniz 公式)

> 由 $f_n'\in C(D)$ 及条件 $f_n'\Rightarrow g$ on $D$，用积分 Theorem 和 Uniform Limit Theorem，可得 $g\in C(D)$，且
> $$
> \begin{aligned}
> \int_{x_0}^xg(t)\text{d}t&=\lim_{n\to\infty}\int_{x_0}^xf_n'(t)\text{d}t\\
> &=\lim_{n\to\infty}f_n(x)|^x_{x_0}\\
> &=\lim_{n\to\infty}(f_n(x)-f_n(x_0))
> \end{aligned}
> $$
> 表明，上述极限存在，条件是 $\underset{n\to]\infty}{\lim}f_n(x)=f(x)$ 存在.
>
> 极限的四则运算得到 $\underset{n\to\infty}{\lim}f_n(x)$ 存在，等于上述两极限的和，
> $$
> \lim_{n\to\infty}f_n(x)=f(x_0)+\int_{x_0}^xg(t)\text{d}t
> $$
> 所以逐点收敛得证. 同时，$f$ 被表示为连续函数 $g$ 的变上限积分，由微积分基本定理就能证明 $f$ 在 $D$ 上面可导且 $f'(x)=g(x)=\underset{n\to\infty}{\lim}f_n'(x)$.

证毕.

## 函数级数的分析学性质

经过上面的讨论，我们可以把数值级数的结论迁移到函数级数.

/Theorem/ (和函数的连续性)

> 设 $u_n(x)\in C(D)$，且 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛，则和函数 $S(x)=\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上连续.
>
> 形式化地写出：
>
> 1. 设 $f_n\Rightarrow f$ 且 $f_n$ 连续，则 $f$ 连续，
>    $$
>    f(\lim_{m\to\infty}x_m)=\lim_{m\to\infty}f(x_m)\\
>    \lim_{n\to\infty}f_n(\lim_{m\to\infty}x_m)=\lim_{m\to\infty}(\lim_{n\to\infty}f_n(x_m))
>    $$
>    上面的式子说明：在一致收敛的条件下，两极限可交换.
>
> 2. 级数版本：设 $u_n\in C(D)$，$\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 一致收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 连续.
>    $$
>    \underset{n=1}{\overset{\infty}{\sum}}u_n(\lim_{m\to\infty}x_m)=\lim_{m\to\infty}\underset{n=1}{\overset{\infty}{\sum}}u_n(x_m)
>    $$
>    说明：在一致收敛条件下，极限与无穷求和可交换.

/Theorem/ (逐项积分)

> 设 $u_n(x)\in C(D)$ 且 $\underset{n=1}{\overset{\infty}{\sum}}u_n(x)$ 在 $D$ 上一致收敛，则有
> $$
> \int_a^bS(x)\text{d}x=\lim_{n\to\infty}\int_a^bS_n(x)\text{d}x
> $$
> 也即
> $$
> \int_a^bS(x)\text{d}x=\underset{n=1}{\overset{\infty}{\sum}}\int_a^bu_n(x)\text{d}x
> $$
> 和函数的积分等于逐项积分之和.

/Proof/

> 由 $S_n(x)\Rightarrow S(x)$ 及 $S_n(x)\in C(D)$，用序列积分版本知
> $$
> \int_a^bS(x)\text{d}x=\lim_{n\to\infty}\int_a^bS_n(x)\text{d}x
> $$
> 所以
> $$
> \begin{aligned}
> \int_a^bS(x)\text{d}x&=\lim_{n\to\infty}\int_a^b(u_1(x)+\cdots+u_n(x))\text{d}x\\
> &=\lim_{n\to\infty}(\int_a^bu_1(x)\text{d}x+\cdots+\int_a^bu_n(x)\text{d}x)\\
> &=\underset{n=1}{\overset{\infty}{\sum}}\int_a^bu_n
> \end{aligned}
> $$
> 得证.

