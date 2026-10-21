---
url: /integral/dmn3yy4l/index.md
---
# 高等微积分 Lesson 6

## Cauchy收敛准则

/Definition/

> 称${x\_n}$是Cauchy序列，若$\forall\varepsilon>0$，$\exist N\in\Z\_+$，$\forall m,n\geq N$有$|x\_m-x\_n|<\varepsilon$.

/Theorem/

> $\R$中任何Cauchy列都有极限. 即${x\_n}$收敛 $\Longleftrightarrow$ ${x\_n}$是Cauchy列.

/Proof/

> 上节课已经证明完充分性，现在证必要性，也就是从右至左证明. 显然只能使用夹逼定理.
>
> 令$a\_n=\inf{x\_n,x\_{n+1},\cdots}$，$b\_n=\sup{x\_n,x\_{n+1},\cdots}$. 则有如下几个结论：
>
> 1. $a\_n\leq x\_n\leq b\_n$.
> 2. $a\_1\leq a\_2\leq\cdots\leq a\_n\leq b\_n\leq\cdots\leq b\_2\leq b\_1$.
>
> ${a\_n}$和${b\_n}$是单调且有界的，故由MCT可知，均有极限. $\underset{n\to\infty}{\lim}a\_n=A$，$\underset{n\to\infty}{\lim}b\_n=B$.
>
> 接下来证明$A=B$. 首先，$A\leq B$是显然的.
>
> 对于$A\geq B$的证明，我们只能应用Cauchy列的定义，
>
> > 草稿：关心$B-A$，$\approx b\_n-a\_n$，$\approx\sup-\inf$，$\approx\sup{x\_k-x\_l}$（$k,l\geq n$）.
>
> 定义$\forall n\geq N$，令$X={x\_n,x\_{n+1},\cdots}$.
>
> > 引理：$\sup(X-Y)=\sup X-\inf Y$.
> >
> > /Proof/
> >
> > > $\forall x\in X$，$\forall y\in Y$有$x-y\leq\sup X-\inf Y$，说明是上界.
> > >
> > > 接下来说明是最小上界：$\forall\varepsilon>0$，$\forall c=\sup X-\inf Y-\varepsilon$不是上界.
> > >
> > > 由$\sup X$定义，$\sup X-\varepsilon/2\<x$，同理，$\exist y$，$y<\inf Y+\varepsilon/2$. 从而存在$x-y>(\sup X-\varepsilon/2)-(\inf Y+\varepsilon/2)=\sup X-\inf Y-\varepsilon$.
> > >
> > > 是最小上界.
> >
> > 证毕.
>
> 考虑$\sup(X-X)$，则有$\sup(X-X)=\sup X-\inf X=b\_n-a\_n$. 由定义知道，$X$中任意两项之差$<\varepsilon$，表明$\varepsilon$是$(X-X)$的上界.
>
> 从而$\sup(X-X)\leq\varepsilon$，进而$b\_n-a\_n<\varepsilon$（$\forall n\geq N$）. 用极限不等式，
> $$
> B-A=\underset{n\to\infty}{\lim}(b\_n-a\_n)\leq\varepsilon,,\quad\forall\varepsilon>0
> $$
> 而$B-A\geq0$，所以$B-A=0$.
>
> 由夹逼定理，${x\_n}$的极限$\underset{n\to\infty}{\lim}x\_n=A=B$. 必要性得证.

证毕.

注意，Cauchy收敛准则是**充分必要条件**，而MCT是**充分不必要条件**.

/Example/

> $x\_n=\frac{\cos\theta}{1^2}+\cdots+\frac{\cos n\theta}{n^2}$，证明收敛.

/Proof/

> 用Cauchy准则，只需证${x\_n}$是Cauchy列.
>
> 为此$\forall\varepsilon>0$，取定$N$.
>
> > 草稿：$\forall m>n\geq N$，
> > $$
> > \begin{aligned}
> > |x\_m-x\_n|&=|\sum\_{k=n+1}^m\frac{\cos k\theta}{k^2}|\\\\
> > &\leq\sum\_{k=n+1}^m\frac{1}{k^2}<\sum\_{k=n+1}^m\frac{1}{k(k-1)}\\\\
> > &=\frac{1}{n}-\frac{1}{m}<\frac{1}{n}\leq\frac{1}{N}<\varepsilon
> > \end{aligned}
> > $$
>
> 把$N$取为$\lfloor1/\varepsilon\rfloor+1$即可.

证毕.

接下来看一个untrivial的例子：

在一般度量空间也可定义点列极限\&Cauchy列.

/Definition/

> 所谓一个度量空间，是指集合$X$和度量$d:X\times X\to\R\_{>0}$，度量指的是$X$中$x,y$两点间的距离.
>
> 满足如下度量公理：
>
> 1. 对称性：$d(x,y)=d(y,x)$，$\forall x,y\in X$.
> 2. 正定性：$d(x,y)=0$ $\Longleftrightarrow$ $x=y$.
> 3. 三角不等式：$d(x,y)+d(y,z)\geq d(x,z)$. （两边之和大于第三边）
>
> 其中三角不等式是核心内容.
>
> 记上述度量空间为$(X,d)$，上下文明确时，简记为$X$.
>
> /Example/
>
> > Euclidian空间，度量定义为$d(\bold{x},\bold{y})=\sqrt{\sum\_{k=1}^n(x\_k-y\_k)^2}$.
>
> /Example/
>
> > 二维球面，度量定义为连接两点之间的大圆弧的劣弧长度.

/Definition/

> 设${x\_n}*{n=1}^\infty$是度量空间$(X,l)$中的一个无穷点列，称${x\_n}$收敛于$L\in X$，若$\forall\varepsilon>0$，$\exist N\in\Z*+$，$\forall n\geq N$，有$d(x\_n,L)<\varepsilon$.

有了上面的定义，我们就可以定义Cauchy列：

/Definition/

> $d(x\_n,x\_m)<\varepsilon$，对于$\forall\varepsilon>0$，$\exist N\in\Z\_+$，$\forall n,m\geq N$.

由此知，${x\_n}$收敛 $\Longrightarrow$ ${x\_n}$是Cauchy列.

/Proof/ 同上节课证明.

\==注意：一般$(X,d)$中Cauchy列未必收敛！==

/Example/

> $X=\mathbb{Q}$，$d(x,y)=|x-y|$，在$\R$中的数列收敛于$\sqrt2$，那么其在$\R$中是Cauchy列，于是在$\mathbb{Q}$中也是Cauchy列，但是它在$\mathbb{Q}$中显然不收敛.

\==称一个度量空间是完备的，当且仅当其中的Cauchy列收敛.==

接下来要讲**压缩映像定理**. 这个定理在本课程中将用到两次：

1. 多元函数的反函数Theorem
2. ODE（一元常微分方程）的初值问题有唯一短期解

目标：证明自映射$T:X\to X$有不动点（不动点$T(x)=x$）.

/Theorem/ （压缩映像）

> 设$(X,d)$是完备的度量空间，$T:X\to X$是一个压缩映射（即$\exist$常数$0\<c<1$，使得对$\forall x,y\in X$有$d(T(x),T(y))\leq c\cdot d(x,y)$），则$T$有唯一不动点.

怎么找这个不动点呢？我们不断地去对一个点$x\_1$做$T$映射，则每一次的结果$x\_n$都与上一次的结果越来越近，我们越来越有理由说我们找到不动点了. 我们猜测$\underset{n\to\infty}{\lim}x\_n$是不动点.

/Proof/

> 任取$x\_0\in X$，
>
> /Definition/
>
> > ${x\_n}*{n=0}^\infty$为$x*{n+1}=T(x\_n)$，$\forall n\geq0$.
>
> 因为度量空间是完备的，所以只需证明是Cauchy列就能证明存在极限$u$.
>
> 我们的证明需要3步：
>
> 1. 证明${x\_n}$是Cauchy列
> 2. 证明$T(u)=u$
> 3. 证明不动点的唯一性
>
> 我们先来证第2步：
>
> > $d(T(x\_n),T(u))\leq c\cdot d(x\_n,u)$  $(\*)$
> >
> > > 引理：$\underset{n\to\infty}{\lim}x\_n=u$ $\Longleftrightarrow$ $\underset{n\to\infty}{\lim}d(x\_n,u)=0$
> > >
> > > /Proof/
> > >
> > > > $$
> > > > \begin{aligned}
> > > > \text{RHS}&\Longleftrightarrow|d(x\_n,u)-0|<\varepsilon\\\\
> > > > &\Longleftrightarrow d(x\_n,u)<\varepsilon\\\\
> > > > &\Longleftrightarrow\underset{n\to\infty}{\lim}x\_n=u
> > > > \end{aligned}
> > > > $$
> > > >
> > > > 即为$\text{LHS}$.
> > >
> > > 证毕.
> >
> > 由$\underset{n\to\infty}{\lim}x\_n=u$，得到$\underset{n\to\infty}{\lim}d(x\_n,u)=0$.
> >
> > 对$(\*)$式使用夹逼定理，得到$\underset{n\to\infty}{\lim}d(T(x\_n),T(u))=0$.
> >
> > 所以$\underset{n\to\infty}{\lim}T(x\_n)=T(x\_n)$，即$\underset{n\to\infty}{\lim}T(u)=T(u)=\underset{n\to\infty}{\lim}x\_n=u$.
>
> 证毕.
>
> 第3步：
>
> > 反证法，假设有$u,v$两个不动点，则
> > $$
> > d(T(u),T(v))=d(u,v)\leq c\cdot d(u,v)
> > $$
> > 只能有$u=v$.
>
> 证毕.
>
> 最后来证第1步：
>
> > 对$\forall m>n$有：$d(T^{(n)}(x\_{m-n}),T^{(n)}(x\_0))\leq c^n\cdot d(x\_{m-n},x\_0)$  $(*)$
> > $$
> > \begin{aligned}
> > d(x\_0,x\_k)&\leq d(x\_0,x\_1)+d(x\_1,x\_2)+\cdots+d(x\_{k-1},x\_k)\\\\
> > &\leq d(x\_0,x\_1)+c\cdot d(x\_0,x\_1)+\cdots+c^{k-1}\cdot d(x\_0,x\_1)\\\\
> > &=(1+c+\cdots+c^{k-1})d(x\_0,x\_1)\\\\
> > &\leq\frac{1}{1-c}d(x\_0,x\_1)
> > \end{aligned}
> > $$
> > 进而由$(*)$式得，
> > $$
> > d(x\_m,x\_n)\leq c^n\cdot d(x\_0,x\_{m-n})\leq\frac{c^n}{1-c}d(x\_0,x\_1),,\quad\forall m>n
> > $$
> > 这个式子称为$(\*\*)$式.
> >
> > 上面这个式子表明${x\_n}$是Cauchy列，因为
> >
> > $\forall\varepsilon>0$，由$\underset{n\to\infty}{\lim}\frac{c^n}{1-c}d(x\_0,x\_1)=0<\varepsilon$，知$\exist N\in\Z\_+$，$\forall n\geq N$有
> > $$
> > \frac{c^n}{1-c}d(x\_0,x\_1)<\varepsilon
> > $$
> > 进而应用$(\*\*)$得$\forall m>n\geq N$有：
> > $$
> > d(x\_m,x\_n)\leq\frac{c^n}{1-c}d(x\_0,x\_1)<\varepsilon
> > $$
> > 完成验证.
>
> 证毕.

证毕.

## 上、下极限

回忆在Cauchy准则的证明中，使用如下方法：

对${x\_n}$，定义$a\_n=\inf{x\_n,x\_{n+1},\cdots}$，且$a\_n$单调递增、有上界，则存在$\underset{n\to\infty}{\lim}a\_n=A$，这称为${x\_n}$的下极限.

/Definition/

> 对任何实数数列${x\_n}$，定义
> $$
> a\_n=\left{\begin{array}{lr}
> \inf{x\_n,\cdots},,\quad\text{if},\exist\inf{x\_n,\cdots}\\
> -\infty,,\quad\text{else}
> \end{array}\right.
> $$
> （严格定义下极限，虽然我个人认为这个太严格了没必要）
> （不行，后面可能要用）
>
> 注记：若$\exist n\in\Z\_+$，$a\_n\in\R$，则${x\_n,\cdots}$有下界，对于$\forall m\geq n$，${x\_m,\cdots}$当然有下界；而对于$\forall m\<n$，只要是增加有限项，仍然存在下界.
>
> 可知，${a\_n}$只有两种可能，1.是每一项均为$-\infty$，2.是每一项均$\in\R$.
>
> 对于第2.种情况，也要分类讨论，若${a\_n}$无上界，则下极限为$+\infty$，若有上界，下极限是$\underset{n\to\infty}{\lim}a\_n$.
>
> 统一形式化为：
>
> 下极限
> $$
> \begin{aligned}
> \underset{n\to\infty}{\lim\inf}x\_n&=\underset{n\to\infty}{\lim}(\inf{x\_n,x\_{n+1},\cdots})\\\\
> &=\left{\begin{array}{lr}
> -\infty,,\quad\nexists\inf{x\_n,x\_{n+1},\cdots}\\
> +\infty,,\quad\exist\inf{x\_n,x\_{n+1},\cdots},,,\nexists\sup{a\_n}\\
> \lim a\_n,,\quad\exist\inf{x\_n,x\_{n+1},\cdots},,,\exist\sup{a\_n}
> \end{array}\right.
> \end{aligned}
> $$
> 上极限（同理）
> $$
> \begin{aligned}
> \underset{n\to\infty}{\lim\sup}x\_n&=\underset{n\to\infty}{\lim}(\sup{x\_n,x\_{n+1},\cdots})\\\\
> &=\left{\begin{array}{lr}
> +\infty,,\quad\nexists\sup{x\_n,x\_{n+1},\cdots}\\
> -\infty,,\quad\exist\sup{x\_n,x\_{n+1},\cdots},,,\nexists\inf{b\_n}\\
> \lim b\_n,,\quad\exist\sup{x\_n,x\_{n+1},\cdots},,,\exist\inf{b\_n}
> \end{array}\right.
> \end{aligned}
> $$

注记：与极限不同，任何数列${x\_n}$皆可定义上/下极限，而极限未必存在.

之后讲幂级数收敛半径的Cauchy-Hadamard公式需要上极限：$\sum a\_nx^n$的收敛半径为
$$
\frac{1}{\underset{n\to\infty}{\lim\sup}(\sqrt\[n]{|a\_n|})}
$$
/Claim/

> ${x\_n}$收敛 $\Longleftrightarrow$ $\underset{n\to\infty}{\lim\sup}x\_n=\underset{n\to\infty}{\lim\inf}x\_n\in\R$

/Proof/

> 证明“$\Longleftarrow$”
>
> > 由上，下极限定义，再用夹逼定理，即证.
>
> 证毕.
>
> 证明“$\Longrightarrow$”
>
> > 设${x\_n}$收敛，记$\underset{n\to\infty}{\lim}x\_n=L$. 由定义，$\forall\varepsilon>0$，$\exist N\in\Z\_+$，$\forall x\geq N$有$L-\varepsilon\<x\_n\<L+\varepsilon$.
> >
> > 表明$\forall x\geq N$有$b\_n=\sup{x\_n,x\_{n+1},\cdots}\leq L+\varepsilon$，下界同理，取极限：
> >
> > $\underset{n\to\infty}{\lim}b\_n\leq L+\varepsilon$，这说明：
> > $$
> > \begin{aligned}
> > L-\varepsilon\leq\underset{n\to\infty}{\lim}a\_n&\leq\underset{n\to\infty}{\lim}b\_n\leq L+\varepsilon\\\\
> > \underset{n\to\infty}{\lim}a\_n&=\underset{n\to\infty}{\lim}b\_n=L
> > \end{aligned}
> > $$
>
> 证毕.

证毕.

## 计算极限的其他方法——Stolz定理

这个定理实际上是$\text{L'H}\hat{\text{o}}\text{pital}$法则的离散版本.

先来说一说$\text{L'H}\hat{\text{o}}\text{pital}$法则：

/Theorem/

> 有两种情形：
>
> 1. $\lim f=0$，$\lim g=0$，称为$0/0$型，此时有
>    $$
>    \lim\frac{f}{g}=\lim\frac{f'}{g'}
>    $$
>
> 2. $\lim g=\infty$，称为$?/\infty$型，此时有
>    $$
>    \lim\frac{f}{g}=\lim\frac{f'}{g'}
>    $$

类比上述定理，可以写出Stolz定理：

/Theorem/

> 1. $0/0$型：设${a\_n}$和${b\_n}$收敛于$0$，则
>    $$
>    \underset{n\to\infty}{\lim}\frac{a\_n}{b\_n}=\underset{n\to\infty}{\lim}\frac{a\_{n+1}-a\_n}{b\_{n+1}-b\_n}
>    $$
>
> 2. $?/\infty$型：设${b\_n}$单调递增且无上界，则
>    $$
>    \underset{n\to\infty}{\lim}\frac{a\_n}{b\_n}=\underset{n\to\infty}{\lim}\frac{a\_{n+1}-a\_n}{b\_{n+1}-b\_n}
>    $$
