---
title: Lesson 32 函数级数
createTime: 2025/2/26 15:17:28
permalink: /integral/lesson-32/
---
## Dirichlet & Abel 判别法

处理 $\underset{n=1}{\overset{\infty}{\sum}}a_nb_n$ 的收敛性.

**Abel 求和法**：记 $B_k=b_1+\cdots+b_k$，则
$$
\underset{n=1}{\overset{n}{\sum}}a_kb_k=a_nb_n+\underset{i=1}{\overset{n-1}{\sum}}(a_i-a_{i-1})B_i
$$
从几何意义的角度，就是面积和.

/推论/

> 设 $\{a_i\}$ 单调，$|B_k|\leq M$ (有界)，则
> $$
> |\underset{i=1}{\overset{n}{\sum}}a_ib_i|\leq M(|a_1|+|a_1-a_n|)
> $$

/Theorem/ (Dirichlet 判别法)

> 设 $\{a_n\}$ 单调且趋于零，$\{b_n\}$ 的部分和有界，则 $\underset{n=1}{\overset{\infty}{\sum}}a_nb_n$ 收敛.

/Proof/

> 由 Cauchy 准则，只需验证：$\forall\varepsilon>0$，$\exist N\in\mathbb{Z}_+$，使得 $\forall m>n\geq N$ 有
> $$
> |a_{n+1}b_{n+1}+\cdots+a_mb_m|<\varepsilon
> $$
> 对比推论里面的条件，$\{a_n\}$ 单调，$\{B_k\}$ 有界，设 $|B_k|\leq M$，从而
> $$
> |b_{n+1}+\cdots+b_{n+k}|=|B_{n+k}-B_n|\leq2M
> $$
> 由推论知，
> $$
> |a_{n+1}b_{n+1}+\cdots+a_mb_m|\leq2M(|a_{n+1}|+|a_{n+1}-a_m|)
> $$
> 再利用 $\underset{n\to\infty}{\lim}a_n=0$ 的条件，知道 $\forall\varepsilon>0$，$\exist N\in\mathbb{Z}_+$ 使得 $\forall n\geq N$ 有 $|a_n|<\frac{\varepsilon}{6M}$. 代回上面对于部分和的约束，知道 $\forall m>n\geq N$ 有
> $$
> \begin{aligned}
> \left|\underset{i=n+1}{\overset{\infty}{\sum}}a_ib_i\right|&\leq2M(|a_{n+1}|+|a_{n+1}|+|a_m|)\\
> &<2M\cdot3\frac{\varepsilon}{6M}=\varepsilon
> \end{aligned}
> $$
> 得证.

证毕.

/Theorem/ (Abel 判别法)

> 设 $\{a_n\}$ 单调且有界，$\underset{n=1}{\overset{\infty}{\sum}}b_n$ 收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}a_nb_n$ 收敛.

/Proof/

> 这里我们偷一个懒，将其约化到 Dirichlet 判别法的条件.
>
> 由 $\{a_n\}$ 单调有界 $\overset{\text{MCT}}{\Longrightarrow}$ $\underset{n\to\infty}{\lim}a_n$ 存在，记为 $a$. 则 $\{a_n-a\}$ 单调且趋于零.
>
> 同时由 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 收敛知道 $\{B_k\}$ 收敛，进而有界，因此由 Dirichlet 判别法得到下述级数收敛：
> $$
> \underset{n=1}{\overset{\infty}{\sum}}(a_n-a)b_n
> $$
> 因此我们要证明的级数 $\underset{n=1}{\overset{\infty}{\sum}}a_nb_n$ 收敛.

证毕.

实际使用的时候，要处理 $\underset{n=1}{\overset{\infty}{\sum}}x_n$ 的收敛性，我们能够分拆成 $x_n=a_nb_n$ 之后再进行计算，利用上述两个判别法.

/Example/

> 下列级数收敛：
> $$
> \underset{n=1}{\overset{\infty}{\sum}}a_n\cos n\theta
> $$
> 其中 $\{a_n\}$ 单调且趋于零，问 $\theta$ 应该满足何种条件？
>
> 此即为 Dirichlet 判别法，设 $b_n=\cos n\theta$. 我们需要 $\{b_n\}$ 部分和序列有界.
> $$
> B_n=\cos\theta+\cos2\theta+\cdots+\cos n\theta
> $$
> /引理/
>
> > $$
> > \begin{aligned}
> > &C=\cos\theta+\cdots+\cos n\theta=\frac{\sin\left[(n+\frac{1}{2})\theta\right]-\sin\frac{\theta}{2}}{2\sin\frac{\theta}{2}}\\
> > &S=\sin\theta+\cdots+\sin n\theta=\frac{\cos\frac{\theta}{2}-\cos\left[(n+\frac{1}{2})\theta\right]}{2\sin\frac{\theta}{2}}
> > \end{aligned}
> > $$
> >
> > 注：$\theta\neq\mathbb{Z}\pi$.
> >
> > 为了记住这个引理，我们可以记忆和差化积 / 积化和差公式：
> > $$
> > \begin{aligned}
> > &\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta\\\\
> > &\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta\\\\
> > &2\sin\alpha\cos\beta=\sin(\alpha+\beta)+\sin(\alpha-\beta)\\\\
> > &2\sin\alpha\sin\beta=\cos(\alpha-\beta)-\cos(\alpha+\beta)\\\\
> > &2\cos\alpha\sin\beta=\sin(\alpha+\beta)-\sin(\alpha-\beta)\\\\
> > &2\cos\alpha\cos\beta=\cos(\alpha-\beta)+\cos(\alpha+\beta)
> > \end{aligned}
> > $$
>
> 运用引理得到
> $$
> \begin{aligned}
> 2\sin\frac{\theta}{2}\cdot C&=\underset{i=1}{\overset{n}{\sum}}2\sin\frac{\theta}{2}\cos(i\theta)\\
> &=\underset{i=1}{\overset{n}{\sum}}\sin\left[(i+\frac{1}{2})\theta\right]-\sin\left[(i-\frac{1}{2})\theta\right]\\
> &=\sin\left[(n+\frac{1}{2})\theta\right]-\sin\frac{\theta}{2}
> \end{aligned}
> $$
> 类似地，
> $$
> 2\sin\frac{\theta}{2}\cdot S=\cos\frac{\theta}{2}-\cos\left[(n+\frac{1}{2})\theta\right]
> $$
> 已经可以证明 $\{B_k\}$ 有界.
>
> ==事实上这门课会经常用到上面的求和式子，因为研究三角函数级数绕不开这种话题.==
>
> 另外一种手段是用复数的 Euler 公式，则变为等比级数：
> $$
> e^{\text{i}\theta}+\cdots+e^{\text{i}n\theta}=\cdots
> $$
> 回到例子，当 $\theta\notin2\pi\mathbb{Z}$ 时，由引理知，$\{B_k\}$ 有上界：
> $$
> B_k=|\cos\theta+\cdots+\cos k\theta|=\left|\frac{\sin\left[(n+\frac{1}{2})\theta\right]-\sin\frac{\theta}{2}}{2\sin\frac{\theta}{2}}\right|\leq\frac{1}{|\sin\frac{\theta}{2}|}
> $$
> 由 Dirichlet 判别法可证明收敛.

/Example/

> 级数 $\underset{n=1}{\overset{\infty}{\sum}}\frac{\cos n\theta}{n^p}$ 收敛，当 $p>0$，$\theta\notin2\pi\mathbb{Z}$.
>
> 换成 $\sin\theta$ 的话，对 $\theta$ 就没有要求了.

/Example/

> 一个条件收敛的例子：
> $$
> \underset{n=1}{\overset{\infty}{\sum}}\frac{\sin n\theta}{\sqrt{n}}\,,\quad(\theta\notin\mathbb{Z}\pi)
> $$
> 是上例中的特殊情况，取 $p=\frac{1}{2}$，得到级数收敛.
>
> 下面来证明只是条件收敛，于是要证明 $\underset{n=1}{\overset{\infty}{\sum}}\left|\frac{\sin n\theta}{\sqrt{n}}\right|$ 发散.
>
> 其实我们发现要证明发散比证明收敛要难，因为只能从 Cauchy 准则等地方找到矛盾，推出漏洞. 下面反证.
>
> 假设上面的数列收敛，由于
> $$
> \frac{(\sin n\theta)^2}{\sqrt{n}}\leq\frac{|\sin n\theta|}{\sqrt{n}}
> $$
> 由比较定理知，$\underset{n=1}{\overset{\infty}{\sum}}\frac{\sin^2(n\theta)}{\sqrt{n}}$ 收敛，利用二倍角得到
> $$
> \underset{n=1}{\overset{\infty}{\sum}}\frac{1-\cos(2n\theta)}{2\sqrt{n}}
> $$
> 收敛. 结合 $\underset{n=1}{\overset{\infty}{\sum}}\frac{\cos(2n\theta)}{\sqrt{n}}$ 的收敛条件 ($2\theta\notin2\pi\mathbb{Z}$)，可得
> $$
> \underset{n=1}{\overset{\infty}{\sum}}\frac{1-\cos(2n\theta)}{2\sqrt{n}}+\underset{n=1}{\overset{\infty}{\sum}}\frac{\cos(2n\theta)}{2\sqrt{n}}
> $$
> 收敛 (因为两项都收敛). 但是和级数是 $\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{2\sqrt{n}}$，并不收敛，所以矛盾，原级数条件收敛.

## 函数级数

$$
\underset{n=1}{\overset{\infty}{\sum}}u_n(x)=\lim_{n\to\infty}\left(u_1(x)+\cdots+u_n(x)\right)
$$

$\{$ 级数理论 $\}\subseteq\{$ 极限理论 $\}$. 因此我们首先想到建立函数极限理论.

$f_n(x)=u_1(x)+\cdots+u_n(x)$，$\lim f_n(x)=$ ?

/Definition/

> 设有可数无穷多个函数 $f_n:D\to\R$，对每个点 $x_0\in D$，若极限 $\underset{n\to\infty}{\lim}f_n(x_0)$ 存在，称 $x_0$ 是该函数序列 $\{f_n\}$ 的收敛点 (否则称为发散点)，令集合 $X=\{$ 所有收敛点 $\}$，则称 $X$ 为收敛 (区) 域.
>
> 进而得到对应 $X\to\R$，$x_0\to\underset{n\to\infty}{\lim}f_n(x_0)$. 视此对应为一个函数 $f:X\to\R$，称 $f$ 为 $\{f_n\}$ 的极限函数，记 $f=\underset{n\to\infty}{\lim}f_n$.
>
> 即有，
> $$
> (\lim_{n\to\infty}f_n)(x)=\lim_{n\to\infty}f_n(x)
> $$
> 对 $Y\subseteq X$，称 $\{f_n\}$ 在 $Y$ 上点点 / 逐点收敛到 $f$，记为 $f_n\to f$ on $Y$，当且仅当 $f(y)=\underset{n\to\infty}{\lim}f_n(y)$，$\forall y\in Y$.

我们关心：

1. 如何算极限函数？

   逐点计算数值型极限 $\underset{n\to\infty}{\lim}f_n(x_0)$ 即可.

2. $\underset{n\to\infty}{\lim}f_n$ 是否连续？可导？导函数？可积？算积分？

   $\longrightarrow$ 都是“分析学性质”

/Example/

> $f_n(x)=x^n$，$n\in\mathbb{Z}_{\geq0}$，则
> $$
> (\lim_{n\to\infty}f_n)(x)=\left\{\begin{array}{lr}
> \text{do not exist}\,,\quad|x|>1\text{ or }x=-1\\
> 1\,,\quad x=1\\
> 0\,,\quad |x|<1
> \end{array}\right.
> $$
> 所以初始时 $f_n:\R\to\R$，但是收敛域 $X=(-1,1]$.
>
> 此例表明，连续函数的极限未必连续.

/Theorem/ (伪，来自 Cauchy 的著名错误)

> 设 $f_n\in C(D,\R)$，且 $f_n$ 在 $D$ 上点点收敛到 $f$，则 $f$ 在 $D$ 上连续.

::: danger -

$\Uparrow$ 错误！

:::

/Proof/ (我们来尝试证明上面那个错误的定理，当然我们会在某处卡住)

> $f$ 连续意味着 $\forall\varepsilon>0$，要找到 $\delta>0$ 使得 $\forall|x-x_0|<\delta$ 满足 $|f(x)-f(x_0)|<\varepsilon$.
>
> 则我们要想办法证明：
> $$
> \begin{aligned}
> |f(x)-f(x_0)|&=|f(x)-f_n(x)+f_n(x)-f_n(x_0)+f_n(x_0)-f(x_0)|\\\\
> &\leq|f(x)-f_n(x)|+|f_n(x)-f_n(x_0)|+|f_n(x_0)-f(x_0)|\\\\
> &<\varepsilon?
> \end{aligned}
> $$
> 我们要同时控制三项不同的部分，因此这里需要取一个 $N(x)$，使得 $\forall n\geq N(x)$ 有 $|f(x)-f_n(x)|<\cdots$，同时满足 $|f_n(x_0)-f(x_0)|<\cdots$，这些位置的 $N(x)$ 不一定是一样的，甚至不一定存在.
>
> 同时就算找到这样的 $N(x)$，中间那一项的估计会发现 $\delta$ 和 $n$ 会相互制约，不能先取其中某一个，结果就是都取不出来.

解决的方法是：若所有的 $N(x)$ 可以取为同一个 $N$，那么上面两个问题都化解了，首先是所有的 $N(x)$ 均取为 $\max N(x)$，其次可以先确定 $n\geq\max N(x)$ 再确定 $\delta$.

所以得到新的定义：

/Definition/

> 称 $\{f_n\}$ 在 $Y$ 上一致收敛到 $f$，如果 $\forall\varepsilon>0$，$\exist N\in\mathbb{Z}_+$ (与 $x$ 无关，只依赖于 $\varepsilon$)，使得 $\forall n\geq N$ 有 $|f_n(x)-f(x)|<\varepsilon$，$\forall x\in Y$.
>
> 记作 $f_n\Rightarrow f$ on $Y$.

/Theorem/ (一致收敛定理)

> 设 $\{f_n\in C(D,\R)\}$ 在 $D$ 上一致收敛到 $f$，则 $f\in C(D,\R)$.

/Proof/

> 由一致收敛的定义，$\forall\varepsilon>0$，$\exist N=N(\varepsilon)$ 使得 $\forall n\geq N$ 有 $|f_n(x)-f(x)|<\frac{\varepsilon}{3}$.
>
> 取定 $n=N$，由 $f_N$ 连续知道 $\forall|x-x_0|<\delta$ 有
> $$
> \begin{aligned}
> |f(x)-f(x_0)|&\leq|f(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_N(x_0)-f(x_0)|\\\\
> &<\frac{\varepsilon}{3}\cdot3=\varepsilon
> \end{aligned}
> $$
> 这说明 $f$ 在 $x_0$ 处连续.

证毕.