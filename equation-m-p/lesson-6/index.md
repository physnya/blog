---
url: /equation-m-p/lesson-6/index.md
---
## 方程常点邻域内的解

/Theorem/

> 如果 $p(z)$ 和 $q(z)$ 在圆 $|z-z\_0|\<R$ 内单值解析，则在此圆内常微分方程初值问题
> $$
> \begin{aligned}
> &\frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0\\\\
> \&w(z\_0)=c\_0,,\quad w'(z\_0)=c\_1
> \end{aligned}
> $$
> 有唯一的一个解 $w(z)$，并且 $w(z)$ 在这个圆内单值解析.

取 $u=\text{d}w/\text{d}z$，则化为一阶方程组：
$$
u'=-pu-qw,,\quad w'=u
$$
转化为积分方程组：
$$
\begin{aligned}
\&u=c\_1-\int\_{z\_0}^z(pu+qw)\text{d}z\\\\
\&w=c\_0+\int\_{z\_0}^zu\text{d}z
\end{aligned}
$$
要求 $|z-z\_0|\<R$. 如果取 $u\_0=c\_1$ 和 $w\_0=c\_0$，迭代，得到
$$
\begin{aligned}
\&u\_{n+1}=c\_1-\int\_{z\_0}^z(pu\_n+qw\_n)\text{d}z\\\\
\&w\_{n+1}=c\_0+\int\_{z\_0}^zu\_n\text{d}z
\end{aligned}
$$
每一阶都是解析函数，因为最开始的函数是解析的；因为解析性，所以积分与路径无关，取一个 $z\_0$ 到 $z$ 的直线积分路径，令 $z-z\_0=\rho e^{\text{i}\varphi}$，则
$$
\begin{aligned}
\&u\_1=c\_1-\int\_0^\rho(c\_1p+c\_1q)e^{\text{i}\varphi}\text{d}\rho\\\\
\&w\_1=c\_0+\int\_0^\rho c\_1e^{\text{i}\varphi}\text{d}\rho
\end{aligned}
$$
必定存在 $M>0$ 满足 $|p|\<M$ 且 $|q|\<M$，取 $m=\max{|c\_0|,|c\_1|}$，则
$$
|u\_1-u\_0|<2mM\rho,,\quad|w\_1-w\_0|\<mM\rho<2mM\rho
$$
后面迭代的每一项都是满足上述条件的，有
$$
|u\_n-u\_{n-1}|<\frac{m(2M\rho)^n}{n!},,\quad|w\_n-w\_{n-1}|<\frac{m(2M\rho)^n}{n!}
$$
最终
$$
u-c\_1=(u\_1-u\_0)+(u\_2-u\_1)+\cdots
$$
全部一致收敛. 解的存在性得证，唯一性可以反证法得到. 定理说明常点邻域的解可以表示为
$$
w(z)=\sum\_{k=0}^\infty c\_k(z-z\_0)^k
$$
同时只需要 $c\_0$ 和 $c\_1$ 就能定出所有后面的系数，于是可以写出一个线性表示：
$$
w(z)=c\_0w\_1(z)+c\_1w\_2(z)
$$
/Example/ (Legendre 方程)

> 求 Legendre 方程
> $$
> (1-x^2)\frac{\text{d}^2y}{\text{d}x^2}-2x\frac{\text{d}y}{\text{d}x}+l(l+1)y=0
> $$
> 在 $x=0$ 点邻域的解，其中 $l$ 是一个参数.
>
> ***
>
> $x=0$ 是一个常点，可以令解为
> $$
> y=\sum\_{k=0}^\infty c\_kx^k
> $$
> 代入方程，得到
> $$
> (1-x^2)\sum\_{k=0}^\infty c\_kk(k-1)x^{k-2}-2x\sum\_{k=0}^\infty c\_kkx^{k-1}+l(l+1)\sum\_{k=0}^\infty c\_kx^k=0
> $$
> 为了合并成一个级数，第一项变换为 `k+=2`，得到
> $$
> \sum\_{k=0}^\infty\left{c\_{k+2}(k+2)(k+1)-c\_kk(k-1)-2c\_kk+c\_kl(l+1)\right}x^k=0
> $$
> 每一项系数都要为零，实际上得到了一个递推的关系
> $$
> c\_{k+2}=\frac{k(k+1)-l(l+1)}{(k+2)(k+1)}c=\frac{(k-l)(k+l+1)}{(k+2)(k+1)}c\_k
> $$
> 于是只要确定 $c\_0$ 和 $c\_1$，就能定出整个序列.
> $$
> \frac{c\_{2n}}{c\_0}=\frac{\[(2n-l-2)(2n-l-4)\cdots(-l)]\[(2n+l-1)(2n+l-3)\cdots(l+1)]}{(2n)(2n-1)\cdots2\cdot1}
> $$
> 下面是一个阶乘，但是上面不好处理，考虑用 $\Gamma$ 函数来描述，因为有：
> $$
> \Gamma(x)=(x-1)\Gamma(x-1)\Longrightarrow x(x-1)(x-2)\cdots(x-n)=\frac{\Gamma(x+1)}{\Gamma(x-n)}
> $$
> 同时 $\Gamma(1)=1$，$\Gamma(1/2)=\sqrt{\pi}$，所以 $\Gamma(n)=(n-1)!$. 于是，
> $$
> c\_{2n}=\frac{2^{2n}}{(2n)!}\frac{\Gamma(n-l/2)}{\Gamma(-l/2)}\frac{\Gamma(n+l/2+1/2)}{\Gamma(l/2+1/2)}c\_0
> $$
> 我们还需要算 $c\_{2n+1}$，原理是相同的，有
> $$
> c\_{2n+1}=\frac{2^{2n}}{(2n+1)!}\frac{\Gamma(n-l/2+1/2)}{\Gamma(-l/2+1/2)}\frac{\Gamma(n+l/2+1)}{\Gamma(l/2+1)}c\_1
> $$
> 最终的通解是，
> $$
> \begin{aligned}
> y(x)&=c\_0\sum\_{n=0}^\infty\frac{2^{2n}}{(2n)!}\frac{\Gamma(n-l/2)}{\Gamma(-l/2)}\frac{\Gamma(n+l/2+1/2)}{\Gamma(l/2+1/2)}x^{2n}\\\\
> &\quad+c\_1\sum\_{n=0}^\infty\frac{2^{2n}}{(2n+1)!}\frac{\Gamma(n-l/2+1/2)}{\Gamma(-l/2+1/2)}\frac{\Gamma(n+l/2+1)}{\Gamma(l/2+1)}x^{2n+1}
> \end{aligned}
> $$

上面 $y\_1$ 只含有 $x$ 的偶数次幂、$y\_2$ 只含有 $x$ 的奇数次幂，分别是偶函数和奇函数，这不是级数解的普遍性质，而是因为 Legendre 方程本身具有很好的对称性.

在常点邻域内求级数解的一般步骤：

1. 将 (方程常点邻域内的) 解展开为 Taylor 级数, 代入微分方程.
2. 比较系数, 得到系数之间的递推关系. 化简为有利于反复递推的形式，比如乘积的形式.
3. 反复利用递推关系，求出系数 $c\_k$ 的普遍表达式 (用 $c\_0$ 和 $c\_1$ 表示)，化简从而最后得出级数解.

## 方程正则奇点邻域内的解

::: danger

这一节开始变得非常凶残.

:::

::: warning

对于方程的奇点，我们只讨论极点类型的奇点. 方程的极点类型的奇点，同时可能是解的奇点，可以是极点、本性奇点，也可以是支点.

:::

/Theorem/

> 如果 $z\_0$ 是方程
> $$
> \frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0
> $$
> 的奇点，则在 $p(z)$ 和 $q(z)$ 都解析的环形区域 $0<|z-z\_0|\<R$ 内，方程的两个线性无关解为
> $$
> \begin{aligned}
> \&w\_1(z)=(z-z\_0)^{\rho\_1}\sum\_{k=-\infty}^\infty c\_k(z-z\_0)^k\\\\
> \&w\_2(z)=gw\_1(z)\ln(z-z\_0)+(z-z\_0)^{\rho\_2}\sum\_{k=-\infty}^\infty d\_k(z-z\_0)^k
> \end{aligned}
> $$
> 其中 $\rho\_1$，$\rho\_2$ 和 $g$ 都是常数.
>
> 如果把这样的解代入方程，会得到无穷多个正幂项和负幂项，没办法递推.

但是如果只有有限个负幂项，那么可以写出
$$
\begin{aligned}
\&w\_1(z)=(z-z\_0)^{\rho\_1}\sum\_{k=0}^\infty c\_k(z-z\_0)^k\\\\
\&w\_2(z)=gw\_1(z)\ln(z-z\_0)+(z-z\_0)^{\rho\_2}\sum\_{k=0}^\infty d\_k(z-z\_0)^k
\end{aligned}
$$
这种解称为正则解.

* 当 $g\neq0$，$w\_2(z)$ 和 $w\_1(z)$ 的形式不同，分别求解；
* 当 $g=0$，那么两个解形式相同.

/Theorem/

> 方程在奇点 $z\_0$ 的邻域 $0<|z-z\_0|\<R$ 有两个正则解
> $$
> \begin{aligned}
> \&w\_1(z)=(z-z\_0)^{\rho\_1}\sum\_{k=0}^\infty c\_k(z-z\_0)^k\\\\
> \&w\_2(z)=gw\_1(z)\ln(z-z\_0)+(z-z\_0)^{\rho\_2}\sum\_{k=0}^\infty d\_k(z-z\_0)^k
> \end{aligned}
> $$
> 的充要条件：$z\_0$ 是
>
> * $p(z)$ 的不超过一阶的极点；
> * $q(z)$ 的不超过二阶的极点.

证明方式是直接把级数解代入方程.

Wronsky 行列式的来源：考虑方程的两个解都满足
$$
w\_i''+p(z)w\_i'+q(z)w\_i=0
$$
两式交叉相乘再相减，得到
$$
w\_1w\_2''-w\_2w\_1''+p(z)(w\_1w\_2'-w\_2w\_1')=0
$$
也就是
$$
\[w\_1w\_2'-w\_2w\_1']'+p(z)\[w\_1w\_2'-w\_2w\_1']=0\Longrightarrow\frac{\text{d}\Delta(z)}{\text{d}z}+p(z)\Delta(z)=0
$$
其中这个 $\Delta(z)$ 就是所谓的 Wronsky 行列式，
$$
\Delta(z)=\begin{vmatrix}
w\_1(z)\&w\_2(z)\\
w\_1'(z)\&w\_2'(z)
\end{vmatrix}
$$
最终得到
$$
\Delta(z)=\Delta(z\_0)e^{\displaystyle{-\int\_{z\_0}^zp(z)\text{d}z}},,\quad w\_2(z)=w\_1(z)\int\frac{A}{w\_1^2(z)}e^{\displaystyle{-\int\_{z\_0}^zp(z)\text{d}z}}\text{d}z
$$
理论上可以只求出 $w\_1$ 然后代到 Wronsky 行列式的这个推论里面算出 $w\_2$，但是这个方法并没有简化任何计算.

/Example/

> 求 Legendre 方程
> $$
> (1-x^2)\frac{\text{d}^2y}{\text{d}x^2}-2x\frac{\text{d}y}{\text{d}x}+l(l+1)y=0
> $$
> 在 $x=1$ 邻域内的有界解.
>
> ***
>
> 先代 $w\_1$ 进去. (一般都是先代 $w\_1$，因为更好算而且在 $g=0$ 的情况下可以直接算出两个解) 得到指标方程：
> $$
> \rho(\rho-1)+\rho=0
> $$
> 和递推关系：
> $$
> c\_n=-\frac{n(n-1)-l(l+1)}{2n^2}c\_{n-1}
> $$
> 同时指标方程的解为 $\rho\_1=\rho\_2=0$. 得到第一解：
> $$
> P\_l(x)=\sum\_{n=0}^\infty\frac{1}{(n!)^2}\frac{\Gamma(l+n+1)}{\Gamma(l-n+1)}\left(\frac{x-1}{2}\right)^n
> $$
> 当然第二解不用求，因为我们求的是有界的解，$\ln(x-1)$ 会在 $x\to1$ 时无界.

讨论：若方程正则奇点处的两个指标满足 $\Re(\rho\_1)=\Re(\rho\_2)$，则

* $\rho\_1-\rho\_2\neq$ 非负整数，第二解一定不含对数项
* $\rho\_1-\rho\_2=0$，第二解一定含有对数项
* $\rho\_1-\rho\_2=$ 正整数，第二解可能不含对数项

## Bessel 方程的解

Bessel 方程写作
$$
\frac{\text{d}^2w}{\text{d}z^2}+\frac{1}{z}\frac{\text{d}w}{\text{d}z}+\left(1-\frac{\nu^2}{z^2}\right)w=0
$$
其中 $\nu$ 是常数，$\Re(\nu)>0$；$z=0$ 是方程的正则奇点，$z=\infty$ 是方程的非正则奇点.

讨论在 $z=0$ 邻域内的解，有
$$
w(z)=z^\rho\sum\_{k=0}^\infty c\_kz^k,,\quad c\_0\neq0
$$
代入，指标方程是
$$
\rho^2-\nu^2=0
$$

***

下课了.
