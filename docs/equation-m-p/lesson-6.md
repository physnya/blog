---
title: Lesson 6 二阶线性常微分方程的幂级数解法 (二)
permalink: /equation-m-p/lesson-6/
createTime: 2025/10/31 12:16:15
---
## 方程常点邻域内的解

/Theorem/

> 如果 $p(z)$ 和 $q(z)$ 在圆 $|z-z_0|<R$ 内单值解析，则在此圆内常微分方程初值问题
> $$
> \begin{aligned}
> &\frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0\\\\
> &w(z_0)=c_0\,,\quad w'(z_0)=c_1
> \end{aligned}
> $$
> 有唯一的一个解 $w(z)$，并且 $w(z)$ 在这个圆内单值解析.

取 $u=\text{d}w/\text{d}z$，则化为一阶方程组：
$$
u'=-pu-qw\,,\quad w'=u
$$
转化为积分方程组：
$$
\begin{aligned}
&u=c_1-\int_{z_0}^z(pu+qw)\text{d}z\\\\
&w=c_0+\int_{z_0}^zu\text{d}z
\end{aligned}
$$
要求 $|z-z_0|<R$. 如果取 $u_0=c_1$ 和 $w_0=c_0$，迭代，得到
$$
\begin{aligned}
&u_{n+1}=c_1-\int_{z_0}^z(pu_n+qw_n)\text{d}z\\\\
&w_{n+1}=c_0+\int_{z_0}^zu_n\text{d}z
\end{aligned}
$$
每一阶都是解析函数，因为最开始的函数是解析的；因为解析性，所以积分与路径无关，取一个 $z_0$ 到 $z$ 的直线积分路径，令 $z-z_0=\rho e^{\text{i}\varphi}$，则
$$
\begin{aligned}
&u_1=c_1-\int_0^\rho(c_1p+c_1q)e^{\text{i}\varphi}\text{d}\rho\\\\
&w_1=c_0+\int_0^\rho c_1e^{\text{i}\varphi}\text{d}\rho
\end{aligned}
$$
必定存在 $M>0$ 满足 $|p|<M$ 且 $|q|<M$，取 $m=\max\{|c_0|,|c_1|\}$，则
$$
|u_1-u_0|<2mM\rho\,,\quad|w_1-w_0|<mM\rho<2mM\rho
$$
后面迭代的每一项都是满足上述条件的，有
$$
|u_n-u_{n-1}|<\frac{m(2M\rho)^n}{n!}\,,\quad|w_n-w_{n-1}|<\frac{m(2M\rho)^n}{n!}
$$
最终
$$
u-c_1=(u_1-u_0)+(u_2-u_1)+\cdots
$$
全部一致收敛. 解的存在性得证，唯一性可以反证法得到. 定理说明常点邻域的解可以表示为
$$
w(z)=\sum_{k=0}^\infty c_k(z-z_0)^k
$$
同时只需要 $c_0$ 和 $c_1$ 就能定出所有后面的系数，于是可以写出一个线性表示：
$$
w(z)=c_0w_1(z)+c_1w_2(z)
$$
/Example/ (Legendre 方程)

> 求 Legendre 方程
> $$
> (1-x^2)\frac{\text{d}^2y}{\text{d}x^2}-2x\frac{\text{d}y}{\text{d}x}+l(l+1)y=0
> $$
> 在 $x=0$ 点邻域的解，其中 $l$ 是一个参数.
>
> ---
>
> $x=0$ 是一个常点，可以令解为
> $$
> y=\sum_{k=0}^\infty c_kx^k
> $$
> 代入方程，得到
> $$
> (1-x^2)\sum_{k=0}^\infty c_kk(k-1)x^{k-2}-2x\sum_{k=0}^\infty c_kkx^{k-1}+l(l+1)\sum_{k=0}^\infty c_kx^k=0
> $$
> 为了合并成一个级数，第一项变换为 ``k+=2``，得到
> $$
> \sum_{k=0}^\infty\left\{c_{k+2}(k+2)(k+1)-c_kk(k-1)-2c_kk+c_kl(l+1)\right\}x^k=0
> $$
> 每一项系数都要为零，实际上得到了一个递推的关系
> $$
> c_{k+2}=\frac{k(k+1)-l(l+1)}{(k+2)(k+1)}c=\frac{(k-l)(k+l+1)}{(k+2)(k+1)}c_k
> $$
> 于是只要确定 $c_0$ 和 $c_1$，就能定出整个序列.
> $$
> \frac{c_{2n}}{c_0}=\frac{[(2n-l-2)(2n-l-4)\cdots(-l)][(2n+l-1)(2n+l-3)\cdots(l+1)]}{(2n)(2n-1)\cdots2\cdot1}
> $$
> 下面是一个阶乘，但是上面不好处理，考虑用 $\Gamma$ 函数来描述，因为有：
> $$
> \Gamma(x)=(x-1)\Gamma(x-1)\Longrightarrow x(x-1)(x-2)\cdots(x-n)=\frac{\Gamma(x+1)}{\Gamma(x-n)}
> $$
> 同时 $\Gamma(1)=1$，$\Gamma(1/2)=\sqrt{\pi}$，所以 $\Gamma(n)=(n-1)!$. 于是，
> $$
> c_{2n}=\frac{2^{2n}}{(2n)!}\frac{\Gamma(n-l/2)}{\Gamma(-l/2)}\frac{\Gamma(n+l/2+1/2)}{\Gamma(l/2+1/2)}c_0
> $$
> 我们还需要算 $c_{2n+1}$，原理是相同的，有
> $$
> c_{2n+1}=\frac{2^{2n}}{(2n+1)!}\frac{\Gamma(n-l/2+1/2)}{\Gamma(-l/2+1/2)}\frac{\Gamma(n+l/2+1)}{\Gamma(l/2+1)}c_1
> $$
> 最终的通解是，
> $$
> \begin{aligned}
> y(x)&=c_0\sum_{n=0}^\infty\frac{2^{2n}}{(2n)!}\frac{\Gamma(n-l/2)}{\Gamma(-l/2)}\frac{\Gamma(n+l/2+1/2)}{\Gamma(l/2+1/2)}x^{2n}\\\\
> &\quad+c_1\sum_{n=0}^\infty\frac{2^{2n}}{(2n+1)!}\frac{\Gamma(n-l/2+1/2)}{\Gamma(-l/2+1/2)}\frac{\Gamma(n+l/2+1)}{\Gamma(l/2+1)}x^{2n+1}
> \end{aligned}
> $$

上面 $y_1$ 只含有 $x$ 的偶数次幂、$y_2$ 只含有 $x$ 的奇数次幂，分别是偶函数和奇函数，这不是级数解的普遍性质，而是因为 Legendre 方程本身具有很好的对称性.

在常点邻域内求级数解的一般步骤：

1. 将 (方程常点邻域内的) 解展开为 Taylor 级数, 代入微分方程.
2. 比较系数, 得到系数之间的递推关系. 化简为有利于反复递推的形式，比如乘积的形式.
3. 反复利用递推关系，求出系数 $c_k$ 的普遍表达式 (用 $c_0$ 和 $c_1$ 表示)，化简从而最后得出级数解.

## 方程正则奇点邻域内的解

::: danger

这一节开始变得非常凶残.

:::

::: warning

对于方程的奇点，我们只讨论极点类型的奇点. 方程的极点类型的奇点，同时可能是解的奇点，可以是极点、本性奇点，也可以是支点.

:::

/Theorem/

> 如果 $z_0$ 是方程
> $$
> \frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0
> $$
> 的奇点，则在 $p(z)$ 和 $q(z)$ 都解析的环形区域 $0<|z-z_0|<R$ 内，方程的两个线性无关解为
> $$
> \begin{aligned}
> &w_1(z)=(z-z_0)^{\rho_1}\sum_{k=-\infty}^\infty c_k(z-z_0)^k\\\\
> &w_2(z)=gw_1(z)\ln(z-z_0)+(z-z_0)^{\rho_2}\sum_{k=-\infty}^\infty d_k(z-z_0)^k
> \end{aligned}
> $$
> 其中 $\rho_1$，$\rho_2$ 和 $g$ 都是常数.
>
> 如果把这样的解代入方程，会得到无穷多个正幂项和负幂项，没办法递推.

但是如果只有有限个负幂项，那么可以写出
$$
\begin{aligned}
&w_1(z)=(z-z_0)^{\rho_1}\sum_{k=0}^\infty c_k(z-z_0)^k\\\\
&w_2(z)=gw_1(z)\ln(z-z_0)+(z-z_0)^{\rho_2}\sum_{k=0}^\infty d_k(z-z_0)^k
\end{aligned}
$$
这种解称为正则解.

* 当 $g\neq0$，$w_2(z)$ 和 $w_1(z)$ 的形式不同，分别求解；
* 当 $g=0$，那么两个解形式相同.

/Theorem/

> 方程在奇点 $z_0$ 的邻域 $0<|z-z_0|<R$ 有两个正则解
> $$
> \begin{aligned}
> &w_1(z)=(z-z_0)^{\rho_1}\sum_{k=0}^\infty c_k(z-z_0)^k\\\\
> &w_2(z)=gw_1(z)\ln(z-z_0)+(z-z_0)^{\rho_2}\sum_{k=0}^\infty d_k(z-z_0)^k
> \end{aligned}
> $$
> 的充要条件：$z_0$ 是
>
> * $p(z)$ 的不超过一阶的极点；
> * $q(z)$ 的不超过二阶的极点.

证明方式是直接把级数解代入方程.

Wronsky 行列式的来源：考虑方程的两个解都满足
$$
w_i''+p(z)w_i'+q(z)w_i=0
$$
两式交叉相乘再相减，得到
$$
w_1w_2''-w_2w_1''+p(z)(w_1w_2'-w_2w_1')=0
$$
也就是
$$
[w_1w_2'-w_2w_1']'+p(z)[w_1w_2'-w_2w_1']=0\Longrightarrow\frac{\text{d}\Delta(z)}{\text{d}z}+p(z)\Delta(z)=0
$$
其中这个 $\Delta(z)$ 就是所谓的 Wronsky 行列式，
$$
\Delta(z)=\begin{vmatrix}
w_1(z)&w_2(z)\\
w_1'(z)&w_2'(z)
\end{vmatrix}
$$
最终得到
$$
\Delta(z)=\Delta(z_0)e^{\displaystyle{-\int_{z_0}^zp(z)\text{d}z}}\,,\quad w_2(z)=w_1(z)\int\frac{A}{w_1^2(z)}e^{\displaystyle{-\int_{z_0}^zp(z)\text{d}z}}\text{d}z
$$
理论上可以只求出 $w_1$ 然后代到 Wronsky 行列式的这个推论里面算出 $w_2$，但是这个方法并没有简化任何计算.

/Example/

> 求 Legendre 方程
> $$
> (1-x^2)\frac{\text{d}^2y}{\text{d}x^2}-2x\frac{\text{d}y}{\text{d}x}+l(l+1)y=0
> $$
> 在 $x=1$ 邻域内的有界解.
>
> ---
>
> 先代 $w_1$ 进去. (一般都是先代 $w_1$，因为更好算而且在 $g=0$ 的情况下可以直接算出两个解) 得到指标方程：
> $$
> \rho(\rho-1)+\rho=0
> $$
> 和递推关系：
> $$
> c_n=-\frac{n(n-1)-l(l+1)}{2n^2}c_{n-1}
> $$
> 同时指标方程的解为 $\rho_1=\rho_2=0$. 得到第一解：
> $$
> P_l(x)=\sum_{n=0}^\infty\frac{1}{(n!)^2}\frac{\Gamma(l+n+1)}{\Gamma(l-n+1)}\left(\frac{x-1}{2}\right)^n
> $$
> 当然第二解不用求，因为我们求的是有界的解，$\ln(x-1)$ 会在 $x\to1$ 时无界.

讨论：若方程正则奇点处的两个指标满足 $\Re(\rho_1)=\Re(\rho_2)$，则

* $\rho_1-\rho_2\neq$ 非负整数，第二解一定不含对数项
* $\rho_1-\rho_2=0$，第二解一定含有对数项
* $\rho_1-\rho_2=$ 正整数，第二解可能不含对数项

## Bessel 方程的解

Bessel 方程写作
$$
\frac{\text{d}^2w}{\text{d}z^2}+\frac{1}{z}\frac{\text{d}w}{\text{d}z}+\left(1-\frac{\nu^2}{z^2}\right)w=0
$$
其中 $\nu$ 是常数，$\Re(\nu)>0$；$z=0$ 是方程的正则奇点，$z=\infty$ 是方程的非正则奇点.

讨论在 $z=0$ 邻域内的解，有
$$
w(z)=z^\rho\sum_{k=0}^\infty c_kz^k\,,\quad c_0\neq0
$$
代入，指标方程是
$$
\rho^2-\nu^2=0
$$

---

下课了.