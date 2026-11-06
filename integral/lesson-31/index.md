---
url: /integral/lesson-31/index.md
---
## 正项级数

重点在于比较定理.

/Theorem/ (比较定理)

> 设 $0\leq a\_n\leq b\_n$ ($\forall n\geq N\_0$)，则
>
> 1. 若 $\sum b\_n$ 收敛 $\Longrightarrow$ $\sum a\_n$ 收敛；
> 2. 若 $\sum a\_n$ 发散 $\Longrightarrow$ $\sum b\_n$ 发散.
>
> Cauchy 对前人的结果做了一个总结，得到所谓的 Cauchy Condensation Test (似乎没有标准的翻译，一般叫“柯西凝结 / 缩并 / 缩合定理”)：
>
> 设 ${a\_n}$ 是递减的非负数列，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛 $\Longleftrightarrow$ $\underset{t=0}{\overset{\infty}{\sum}}2^ta\_{2^t}$ 收敛.

/Example/

> $\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^s}$ 的收敛 / 发散性？($s>0$)
>
> > 若 $s\leq0$，显然有 $\underset{n\to\infty}{\lim}\frac{1}{n^s}=1$ or $+\infty$，一定发散.
>
> 显然上面的数列是非负且单调递减的. 由 Cauchy Condensation Test 得到
>
> $\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^s}$ 收敛 $\Longleftrightarrow$ $\underset{t=0}{\overset{\infty}{\sum}}\frac{2^t}{(2^t)^s}=\underset{t=0}{\overset{\infty}{\sum}}2^{t(1-s)}$ 收敛，后者是一个几何级数，公比是 $q=2^{1-s}$. 因此只需要 $s>1$ 则收敛.
>
> 数论上，上面的式子叫做 Riemann Zeta 函数：
> $$
> \zeta(s)=\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^s},,\quad\Re(s)>1
> $$
> 如果用上次课的看法，
> $$
> \begin{aligned}
> \zeta(s)&=\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^s}=\sum\_{\text{all}}\frac{1}{(p\_1^{\alpha\_1})^s\cdots(p\_k^{\alpha\_k})^s}\\
> &=\prod\_{p}(1+\frac{1}{p^s}+\frac{1}{p^{2s}}+\cdots)\\
> &=\prod\_p\frac{1}{1-\frac{1}{p^s}}
> \end{aligned}
> $$
> 这就是 Zeta 函数和素数的联系.

与几何级数相比较，可以得到几个收敛性的判别法. 几何级数的两个特性对应两种判别法：

1. $b\_{n+1}/b\_n=q\longrightarrow$ ratio test；
2. $\sqrt\[n]{b\_n}=q\longrightarrow$ root test.

/Theorem/ (ratio test，或称 d'Alembert 判别法)

> 设 $a\_n\geq0$ ($\forall n\geq N\_0$)，且 $\underset{n\to\infty}{\lim}\frac{a\_{n+1}}{a\_n}=q\in\R\_{\geq0}\cup{+\infty}$，则
>
> 1. 若 $q<1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛；
> 2. 若 $q>1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 发散；
> 3. 若 $q=1$，需要进一步的信息.

/Theorem/ (root test，或称 Cauchy 判别法)

> 设 $a\_n\geq0$ ($\forall n\geq N\_0$)，且 $\underset{n\to\infty}{\lim}\sqrt\[n]{a\_n}=q\in\R\_{\geq0}\cup{+\infty}$，则
>
> 1. 若 $q<1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛；
> 2. 若 $q>1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 发散；
> 3. 若 $q=1$，需要进一步的信息.

两个定理的证明差不多，但是因为我们后面要给出一个加强版本的 root test，所以我们这里简单证明 ratio test.

/Proof/ (ratio test)

> 若 $\underset{n\to\infty}{\lim}\frac{a\_{n+1}}{a\_n}=q<1$，取 $q\<r<1$，则 $\exist N$，使得 $\forall n\geq N$ 有 $\frac{a\_{n+1}}{a\_n}\<r$，得到
> $$
> \frac{a\_m}{a\_N}=\prod\_{n=N}^{n-1}\frac{a\_{n+1}}{a\_n}\<r^{m-N}(\forall m>N)
> $$
> 因此 $a\_m\leq a\_Nr^{m-N}=(\frac{a\_N}{r^N})r^m=b\_m$ 为几何级数，公比 $r<1$，比较定理知 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛.
>
> 当然 2. 的证明是同理的.

出于算幂级数的收敛半径的需求 (因为可能有很坏的级数，其极限不一定存在)，对 root test 给出一个一般的 version，$\underset{n\to\infty}{\lim}\sqrt\[n]{a\_n}$ 不一定存在的情况下，考虑总是存在的上极限 $\underset{n\to\infty}{\lim}\sup\sqrt\[n]{a\_n}$.

回忆 $\underset{n\to\infty}{\lim}\sup x\_n=\underset{n\to\infty}{\lim}(\sup{x\_n,x\_{n+1},\cdots})=\underset{n\to\infty}{\lim}y\_n$. (记 $y\_n=\sup{x\_n,x\_{x+1},\cdots}$，可知 ${y\_n}$ 单调递减). 于是新的 root test 是

/Theorem/ (root test)

> 设 $\underset{n\to\infty}{\lim}\sup\sqrt\[n]{a\_n}=q\in\R\_{\geq0}\cup{+\infty}$，则
>
> 1. 若 $q<1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛；
> 2. 若 $q>1$，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 发散；
> 3. 若 $q=1$，需要进一步的信息.

/Proof/

> 对于 1.，设 $q<1$，记 $y\_n=\sup{\sqrt\[n]{a\_n},\sqrt\[n+1]{a\_{n+1}},,,,,\cdots}$，由 $\underset{n\to\infty}{\lim}y\_n=q\<r<1$，可知 $\exist N$，使得 $\forall n\geq N$ 有 $y\_n\<r$，即
> $$
> \begin{aligned}
> &\sup{\sqrt\[n]{a\_n},\sqrt\[n+1]{a\_{n+1}},,,,\cdots}\<r\\\\
> &\Longrightarrow\sqrt\[m]{a\_m}\<r,,\quad\forall m\geq N\\\\
> &\Longrightarrow a\_m\<r^m
> \end{aligned}
> $$
> 右侧是一个几何级数，用比较定理可证.
>
> 对于 2.，设 $q>1$，则 $y\_n>1$，$\forall n\in\mathbb{Z}*+$，表明 $\sup{\sqrt\[n]{a\_n},\cdots}>1$，由 $\sup$ 的定义知道 $1$ 不是上界，从而 $\exist m\geq n$ 使得 $\sqrt\[m]{a*{m}}>1$. 因此 ${a\_m}$ 不以 $0$ 为极限，级数发散.
>
> /注记/
>
> > 回到我们证明 2. 时困惑的点：为什么 $q=1$ 时论断失效？因为这时 $1$ 可能是 $\sup$，之后就无法继续.
> >
> > 比如一个自身可能很小的 $a\_m=(1-\varepsilon)^m$ ($m$ 很大，$\varepsilon$ 很小)，但是开了 $m$ 次方根之后可能又变得非常靠近 $1$，所以这种数列可能是收敛的.
> >
> > 一个很好的“$q=1$”例子是调和级数.

下面我们来讲一些例子.

/Example/

> $\underset{n=1}{\overset{\infty}{\sum}}\frac{b^n}{n^\alpha}$ ($\alpha>0$，$b>0$)，分析收敛 / 发散性.
>
> 一般会用 ratio test，因为开根之后的极限并不好算.
>
> $\underset{n\to\infty}{\lim}\frac{a\_{n+1}}{a\_n}=\underset{n\to\infty}{\lim}\frac{bn^\alpha}{(n+1)^\alpha}=b$. 可知，当 $b<1$ 时收敛，$b>1$ 时发散，还剩下 $b=1$ 的 case，但是这种情况下就是 Zeta 函数.

其他例子请自己阅读讲义.

另外一种比较定理是与无穷积分比较，这种其实类似于 Cauchy Condensation Test.

/Theorem/

> 设 $f:\[1,+\infty)\to\R\_{\geq0}$ 是单调递减的，则 $\underset{n=1}{\overset{\infty}{\sum}}f(n)$ 收敛 $\Longleftrightarrow$ $\int\_1^{+\infty}f(x)\text{d}x$ 收敛.

/Proof/

> 记 $S\_n=f(1)+\cdots+f(n)$，$F(A)=\int\_1^Af(x)\text{d}x$. 由 $f$ 单调递减知
> $$
> f(k+1)\leq\int\_k^{k+1}f(x)\text{d}x\leq f(k)
> $$
> 从而考虑图像化的面积，得到
> $$
> S\_n\leq f(1)+\int\_1^2f(x)\text{d}x+\cdots+\int\_{n-1}^nf(x)\text{d}x=f(1)+F(n)\\
> S\_n\geq\int\_1^2f(x)\text{d}x+\cdots+\int\_{n}^{n+1}f(x)\text{d}x=F(n+1)
> $$
> 因此这两个数列相互控制，有 $F(n+1)\leq S\_n\leq f(1)+F(n)$. 可知
>
> $\underset{n=1}{\overset{\infty}{\sum}}f(n)$ 收敛 $\Longleftrightarrow$ ${S\_n}$ 有上界 $\Longleftrightarrow$ ${F(n)}$ 有上界 $\Longleftrightarrow$ ${F(A)}$ 有上界 $\Longleftrightarrow$ $\int\_1^{+\infty}f(x)\text{d}x$ 收敛.

事实上，算级数之和更难，算积分更容易 (因为有 Newton - Leibniz 公式).

::: tip -

一位印度数学家拉马努金的笔记本上常常有很多无穷级数求和的等式，而且一般非常复杂，经常第二项就出现六位数的系数. 很多数学家问他为什么会有这么多等式，他回答说是做梦时印度的神明告诉他的.

:::

/Example/

> 判定 Riemann Zeta 函数.
>
> $\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n^s}$ 收敛 $\Longleftrightarrow$ $\int\_1^{+\infty}\frac{1}{x^s}\text{d}x$ 收敛 $\Longleftrightarrow$ $s>1$.

/Example/

> $\underset{n=2}{\overset{\infty}{\sum}}\frac{1}{n(\ln n)^p}$.
>
> $p\leq0$ 时，级数为 $\underset{n=3}{\overset{\infty}{\sum}}\frac{(\ln n)^{-p}}{n}$ 每一项满足 $\frac{(\ln n)^{-p}}{n}\geq\frac{1}{n}$，用比较定理知道发散.
>
> $p>0$ 时，$f(x)=\frac{1}{x(\ln x)^p}$ 非负且单调递减，于是只需要计算积分：
> $$
> I=\int\_2^{+\infty}\frac{1}{x(\ln x)^p}\text{d}x
> $$
> 计算如下：
> $$
> \begin{aligned}
> I&=\int\_2^{+\infty}(\ln x)^{-p}\cdot\frac{1}{x}\text{d}x=\int\_{\ln2}^{+\infty}(\ln x)^{-p}\text{d}(\ln x)=\frac{(\ln x)^{-p+1}}{-p+1}|\_2^{+\infty}
> \end{aligned}
> $$
> 如果 $p>1$ 则收敛，$p<1$ 则发散. 但是 $p=1$ 时我们上面的计算都是非法的，这时的积分为 $\ln(\ln x)$，也是发散的.
>
> /注记/
>
> > 这个级数如果用 ratio / root test，都会失效；如果用 Cauchy Condensation Test，应该得到等价的结果.

## 交错级数

形如 $\underset{n=1}{\overset{\infty}{\sum}}(-1)^{n-1}a\_n$ ($a\_n\geq0$，$\forall n$) 的级数，即正负交替的级数.

/Claim/ (来自 Leibniz)

> 设 $\underset{i=1}{\overset{\infty}{\sum}}(-1)^{i-1}a\_i$ 是交错级数，且 ${a\_i}$ 非负、递减趋于零，则 $\underset{i=1}{\overset{\infty}{\sum}}(-1)^{i-1}a\_i$ 收敛.

/Proof/

> 考虑 $S\_{2n}$ 即可，两两配对，得到 ${S\_{2n}}$ 单调递增；同时
> $$
> S\_{2n}=a\_1-(a\_2-a\_3)-\cdots-(a\_{2n-2}-a\_{2n-1})-a\_{2n}
> $$
> 从而 $S\_{2n}\<a\_1$，有上界.
>
> 根据 MCT 得到存在 $\underset{n\to\infty}{\lim}S\_{2n}$，记为 $S$.
>
> 如果从奇数趋于正无穷，则加上一项 $\underset{n\to\infty}{\lim}a\_{2n+1}=0$，还是一样. 所以得证.

证毕.

/Example/

> $\underset{i=1}{\overset{\infty}{\sum}}(-1)^i\frac{1}{n^s}$ ($s\in\R$).
>
> * $s\leq0$ 时，$\frac{1}{n^s}$ 趋于 $1$ 或者 $+\infty$，级数不趋于零，级数发散.
> * $s>0$ 时，用上面的命题证得收敛.

## 一般级数

$\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛 $\Longleftrightarrow$ ${S\_n=a\_1+\cdots+a\_n}$ 收敛，由 Cauchy 准则就得到 ${S\_n}$ 是一个 Cauchy 列 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N\in\mathbb{Z}\_+$，使得 $\forall m>n\geq N$，有 $|S\_m-S\_n|<\varepsilon$.

$\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N\in\mathbb{Z}*+$，使得 $\forall m>n\geq N$ 有 $|a*{n+1}+\cdots+a\_m|<\varepsilon$.

也就是说，从远处开始加，不论加多少项，和式绝对值很小.

/Theorem/ (级数的 Cauchy 收敛准则)

> $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N\in\mathbb{Z}*+$，使得 $\forall m>n\geq N$ 有 $|a*{n+1}+\cdots+a\_m|<\varepsilon$.
>
> 推论：
>
> > 若 $\underset{n=1}{\overset{\infty}{\sum}}|a\_n|$ 收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛.
> >
> > 证明可以用两次 Cauchy 准则 & 三角不等式来做.

这里我们也可以为级数引入绝对 / 条件收敛的概念：

/Definition/

> 称 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 绝对收敛，如果 $\underset{n=1}{\overset{\infty}{\sum}}|a\_n|$ 收敛；
>
> $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 条件收敛，如果 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 收敛且 $\underset{n=1}{\overset{\infty}{\sum}}|a\_n|$ 发散.

判别 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 的收敛性时，有以下步骤：

1. 先看 $\underset{n=1}{\overset{\infty}{\sum}}|a\_n|$ 是否收敛 (绝对收敛)，这里可以使用正项级数的判别法.
2. 若 $\underset{n=1}{\overset{\infty}{\sum}}|a\_n|$ 发散，需要采取更加精细的手段，比如交错级数的 Leibniz 判别法，以及后面会讲到的 Dirichlet 判别法和 Abel 判别法.

/Example/

> $\underset{n=1}{\overset{\infty}{\sum}}(-1)^n\frac{1}{n^s}$ ($s>0$)
>
> 当 $s>1$ 时，绝对收敛；$0\<s\leq1$ 条件收敛.

很多同学会说绝对收敛和条件收敛似乎没什么区别，但是实际上这两种收敛在本质上的行为都是不同的.

/Theorem/ (Riemann 重排)

> 1. 若 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 绝对收敛，则任意的重排 $a\_{\sigma(1)}+a\_{\sigma(2)}+\cdots$ 皆收敛，而且和不变.
> 2. 若 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 条件收敛，则 $\forall x\in\R$，$\exist$ 重排 $\sigma$ 使得 $\underset{n=1}{\overset{\infty}{\sum}}a\_{\sigma(n)}=x$；也 $\exist$ 重排 $\sigma$ 使得 $\underset{n=1}{\overset{\infty}{\sum}}a\_{\sigma(n)}$ 发散.

我们不一定能够完全地证明这一定理，但是下面我们将给出一个 sketch.

/Proof/

> 分离正负项，定义 $a\_n^+$ 和 $a\_n^-$，其中，
> $$
> a\_n^+=\left{\begin{array}{lr}
> a\_n,,\quad a\_n\geq0\\
> 0,,\quad a\_n<0
> \end{array}\right.,,\quad a\_n^-=\left{\begin{array}{lr}
> 0,,\quad a\_n\geq0\\
> -a\_n,,\quad a\_n<0
> \end{array}\right.
> $$
> 则 ${a\_n^+}$ 和 ${a\_n^-}$ 都是正项级数，且 $a\_n=a\_n^+-a\_n^-$，$|a\_n|=a\_n^++a\_n^-$.
>
> /引理/ (1)
>
> > $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 绝对收敛 $\Longleftrightarrow$ $\underset{n=1}{\overset{\infty}{\sum}}a\_n^+$ 和 $\underset{n=1}{\overset{\infty}{\sum}}a\_n^-$ 均收敛.
> >
> > 证明显然，两边都用加减法不改变收敛性即可.
>
> 进而，如果 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 条件收敛，则也由加减法不改变发散性可以得到 $\underset{n=1}{\overset{\infty}{\sum}}a\_n^+$ 和 $\underset{n=1}{\overset{\infty}{\sum}}a\_n^-$ 均发散.
>
> ***
>
> 下面来证明重排定理的 1.
>
> /引理/ (2)
>
> > 正项级数重排后和不变.
>
> /Proof/ (引理 2)
>
> > 设 $\underset{n=1}{\overset{\infty}{\sum}}b\_n$ 为正项级数，重排之后是 $\underset{n=1}{\overset{\infty}{\sum}}b\_{\sigma(n)}=\underset{n=1}{\overset{\infty}{\sum}}c\_n$，记有限和分别为 $B\_n$ 和 $C\_n$.
> >
> > 则对于每个 $n$，$C\_n\leq B\_m$，$m=\max{\sigma(1),\cdots,\sigma(n)}$.
> >
> > 由 ${B\_m}$ 有上界知 ${C\_n}$ 有上界，表明 $\underset{n=1}{\overset{\infty}{\sum}}c\_n$ 收敛，进而得到 $C\_n\leq B\_{\text{some }m}\leq\underset{i=1}{\overset{\infty}{\sum}}b\_i$.
> >
> > 于是 $\underset{n\to\infty}{\lim}C\_n=\underset{i=1}{\overset{\infty}{\sum}}c\_i\leq\underset{i=1}{\overset{\infty}{\sum}}b\_i$. 对称的可以证明 $\underset{n=1}{\overset{\infty}{\sum}}b\_n\leq\underset{n=1}{\overset{\infty}{\sum}}c\_n$.
>
> 得到这一引理 2 之后，结合 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 绝对收敛，可知 $\underset{i=1}{\overset{n}{\sum}}a\_n^+$ 和 $\underset{i=1}{\overset{n}{\sum}}a\_n^-$ 收敛，于是
> $$
> \underset{i=1}{\overset{n}{\sum}}|a\_\sigma(n)|=a\_{\sigma(n)}^++a\_{\sigma(n)}^-=\left{\begin{array}{lr}
> \underset{i=1}{\overset{n}{\sum}}a\_{\sigma(n)}^+=\underset{i=1}{\overset{n}{\sum}}a\_n^+\\
> \underset{i=1}{\overset{n}{\sum}}a\_{\sigma(n)}^-=\underset{i=1}{\overset{n}{\sum}}a\_n^-
> \end{array}\right.
> $$
> 进而有
> $$
> \begin{aligned}
> \underset{i=1}{\overset{n}{\sum}}a\_{\sigma(n)}&=\underset{i=1}{\overset{n}{\sum}}(a\_{\sigma(n)}^+-a\_{\sigma(n)}^-)\\
> &=\underset{i=1}{\overset{n}{\sum}}a\_{\sigma(n)}^+-\underset{i=1}{\overset{n}{\sum}}a\_{\sigma(n)}^-\\
> &=\underset{i=1}{\overset{n}{\sum}}a\_n^+-\underset{i=1}{\overset{n}{\sum}}a\_n^-\\
> &=\underset{i=1}{\overset{n}{\sum}}(a\_n^+-a\_n^-)=\underset{i=1}{\overset{n}{\sum}}a\_n
> \end{aligned}
> $$
> 证毕.
>
> ***
>
> 下面给出重排定理 2. 的一个 sketch：
>
> 若 $\underset{n=1}{\overset{\infty}{\sum}}a\_n$ 条件收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}a\_n^+$ & $\underset{n=1}{\overset{\infty}{\sum}}a\_n^-$ 发散，对任意的 $x$，按顺序取若干 $a\_k^+$ 使得和 $S>x$，再顺次选择 $a\_l^-$ 使得和首次 $\leq x$. 之后重复操作，因为 $|a\_n|\to0$，所以原初的振幅 $\to0$，可得 $\underset{n\to\infty}{\lim}\text{Sum}=x$.

## Dirichlet & Abel 判别法

Abel 求和法 $\longleftrightarrow$ 离散版本的分部积分.

/Claim/

> 记 $B\_k=b\_1+\cdots+b\_k$，则
> $$
> \underset{i=1}{\overset{n}{\sum}}a\_ib\_i=a\_nB\_n+\underset{i=1}{\overset{n-1}{\sum}}(a\_i-a\_{i+1})B\_i
> $$

/Proof/

> 用 $b\_i=B\_i-B\_{i-1}$ 代入，得到
> $$
> \begin{aligned}
> \underset{i=1}{\overset{n}{\sum}}a\_ib\_i&=\underset{i=1}{\overset{n}{\sum}}a\_i(B\_i-B\_{i-1})\\
> &=\underset{i=1}{\overset{n}{\sum}}a\_iB\_i-\underset{i=2}{\overset{n}{\sum}}a\_iB\_{i-1}\\
> &=a\_nB\_n+\underset{i=1}{\overset{n-1}{\sum}}a\_iB\_i-\underset{j=1}{\overset{n-1}{\sum}}a\_{j+1}B\_j\\
> &=a\_nB\_n+\underset{i=1}{\overset{n-1}{\sum}}(a\_i-a\_{i+1})B\_i
> \end{aligned}
> $$
> 得证.
>
> /注记/
>
> > 类比 $B\_k\to G(k)$，$b\_k\to G'(k)$，$a\_k\to f(k)$，那么这里就是分部积分.
> >
> > 另外一种更加初等的看法是，不妨假设 ${a\_n}$ 单调递减，这里的 $\underset{i=1}{\overset{n}{\sum}}a\_ib\_i$ 就是 $n$ 个竖直的长条面积之和，可以换成 $n$ 个水平长条的面积之和，这就是 Abel 的等式.

证毕.

由上面的等式，可以得到一个我们会用到的 Abel 不等式：

设 ${a\_i}$ 单调，设 $|B\_k|\leq M$ ($\forall k$)，则
$$
|\underset{i=1}{\overset{n}{\sum}}a\_ib\_i|\leq|a\_n|M+M|a\_i-a\_n|=M(|a\_n|+|a\_1-a\_n|)
$$
/Proof/

> $$
> \begin{aligned}
> \text{LHS}&\overset{\text{Abel}}{=}|a\_nB\_n+\underset{i=1}{\overset{n+1}{\sum}}(a\_i-a\_{i+1})B\_i|\\
> &\leq|a\_n||B\_n|+\underset{i=1}{\overset{n-1}{\sum}}|a\_i-a\_{i+1}||B\_i|\\
> &\leq M(|a\_n|+\underset{i=1}{\overset{n-1}{\sum}}|a\_i-a\_{i+1}|)\\
> &=M(|a\_n|+|\underset{i=1}{\overset{n-1}{\sum}}(a\_i-a\_{i+1})|)\\
> &=\text{RHS}
> \end{aligned}
> $$
>
> 得证.

证毕.
