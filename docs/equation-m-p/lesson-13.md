---
title: Lesson 13 分离变量法总结
permalink: /equation-m-p/lesson-13/
createTime: 2025/12/19 16:18:07
---
## 内积空间与函数空间

/Definition/ (函数空间完备性)

> 如果由空间内函数组成的 Cauchy 序列的极限仍保持在该空间内，那么称为该空间是完备的.

平方可积函数空间是完备的.

把完备的内积空间称为 Hilbert 空间；物理上常用可数的 Hilbert 空间.

函数内积定义的推广：
$$
(f_1,f_2) = \int f_1(x)f_2(x)\rho(x)\text{d}x
$$
Hilbert 空间的任意函数可以按照相应正交完备基展开：
$$
f(x) = \sum_{i=1}^\infty c_if_i(x)
$$
展开系数是唯一的.

/Definition/ (广义函数)

> 确定在某些具体函数空间上的线性连续泛函为广义函数，这些具体的函数空间叫做基本空间.

基本空间有很多具体要求，例如如果是一个函数序列 $\{\varphi_n(x)\}$ 构成基本空间，要求 $\varphi_n(x)\in C^\infty$ 以及任意阶导数构成的序列趋于零等等.

/Definition/ ($\delta$ 函数)

> $\delta$ 函数 (Dirac $\delta$ 函数) 满足：对于任意 Hilbert 空间的连续函数 $f(x)$，均有
> $$
> \int_{-\infty}^\infty f(x)\delta(x)\text{d}x = f(0)
> $$
>
> * $\delta$ 函数是偶函数；
>
> * $\delta'$ 是奇函数；
>
> * $\displaystyle{\int_{-\infty}^\infty\delta(t)}\text{d}t=\theta(x)$ (阶跃函数)
>
> * 有关系：$g(x)\delta(0)=g(0)\delta(x)$.
>
>   > 原则上不应该取 $g(x)=0$ 这种，因为之后可能还要做一些操作或者其他计算，有 $g(x)=0$ 会产生一些影响.
>
> * $\displaystyle{\delta[g(x)] = \frac{\delta(x-x_0)}{|g'(x_0)|}}$，其中 $g(x_0)=0$ 且 $g'(x_0)\neq0$.
>
> 一个神必小技巧是，$\delta(x)$ 自身的变换非常像 $(\text{d}x)^{-1}$ 的变换.

$\delta$ 函数的一个重要形式：
$$
\delta(x)=\frac{1}{2\pi}\int_{-\infty}^\infty e^{\text{i}kx}\text{d}k
$$
这是一个 Fourier 变换. 一般用连续函数来取极限得到 $\delta$ 函数，要「后算极限」，也就是先做完别的计算之后，最后取极限；同理，用连续函数的积分来表达 $\delta$ 函数，应该要「后算积分」.

/Example/

> 求解方程：
> $$
> \frac{1}{x^2}\frac{\text{d}}{\text{d}x}\left(x^2\frac{\text{d}y}{\text{d}x}\right)-\frac{l(l+1)}{x^2}y = \delta(x-c)
> $$
> 边界 $y(a)=y(b)=0$，$0<a<c<b$.
>
> ---
>
> 化简：
> $$
> \frac{\text{d}}{\text{d}x}\left(x^2\frac{\text{d}y}{\text{d}x}\right)-l(l+1)y=x^2\delta(x-c)=c^2\delta(x-c)
> $$
> 当 $x\neq c$，方程是齐次的，解得通解：
> $$
> y = \left\{\begin{aligned}
> &c_1x^l+d_1x^{-l-1},&\quad x<c\\\\
> &c_2x^l+d_2x^{-l-1},&\quad x>c
> \end{aligned}\right.
> $$
> 在 $x=c$ 处，函数本身连续，导数满足：
> $$
> \int_{c^-}^{c^+}\frac{\text{d}}{\text{d}x}\left(x^2\frac{\text{d}y}{\text{d}x}\right)\text{d}x = c^2 =(x^2y')\big|^{c^+}_{c^-}
> $$
> 和边界条件一起得到四个方程，可解.

## 分离变量法总结

/Definition/ (伴算符)

> 设 $\bold{L}$ 和 $\bold{M}$ 为定义在一定函数空间内的 (微分) 算符，若对于任意两个在这个函数空间中的函数 $u,v$，恒有
> $$
> (v,\bold{L}u)=(\bold{M}v,u)
> $$
> 即
> $$
> \int_a^bv^*\bold{L}u\text{d}x=\int_a^b(\bold{M}v)^*u\text{d}x
> $$
> 则 $\bold{M}$ 是 $\bold{L}$ 的伴算符.
>
> **伴算符都是互伴的.**

自伴算符指的是伴算符是其自身的算符.

算符的自伴性一定是和某些函数空间联系在一起的. 通常，我们总是要求：

* 函数定义在给定区间；
* 函数具有一定连续性 (属于某一 Hilbert 空间)；
* 函数满足一定边界条件，即局限在 Hilbert 空间中的一定子空间 (流形) 内.

满足这些条件的函数称为允许函数类.

---

/Lemma/

> 自伴算符的本征值为实数.

/Proof/

> $$
> \bold{L}y=\lambda y\Longrightarrow(\bold{L}y)^*=\lambda^*y^*
> $$
>
> 由于 $\bold{L}$ 自伴，
> $$
> \int_a^b[y^*\bold{L}y-(\bold{L}y)^*y]\text{d}x=0\Longrightarrow(\lambda-\lambda^*)\int_a^byy^*\text{d}x=0
> $$
> 所以 $\lambda=\lambda^*$，为实数.

/Lemma/

> 自伴算符的本征函数具有正交性，也就是不同本征值的本征函数相互正交.

/Theorem/

> 自伴算符的本征值问题
> $$
> \bold{L}y(x) = \lambda y(x)
> $$
> 与如下泛函
> $$
> \lambda[y] = \frac{\displaystyle{\int_a^by^*(x)\bold{L}y(x)\text{d}x}}{\displaystyle{\int_a^by^*(x)y(x)\text{d}x}}
> $$
> 的变分极值问题 $\delta\lambda[y]=0$ 等价. 这里 $y(x)$ 属于允许函数类.

### 利用有限函数集逼近本征值问题

以 $\bold{L}=-\text{d}^2/\text{d}x^2$ 为例. 允许函数类是 $[0,1]$ 区间且满足第一类齐次边界条件的连续函数.

取有限函数集 $\{x^k;k=0,1,\cdots,n\}$，试探函数 $y(x)=\displaystyle{\sum_{k=0}^nc_kx^k}$，计算泛函值：
$$
\lambda[c_k]=-\left.\int_0^1y(x)y''(x)\text{d}x\right/\int_0^1y^2(x)\text{d}x
$$
因为函数集不完备，所以变分极值只能给出近似解，但是已经足够好.

### Sturm-Liouville 方程的本征值问题

我们讨论过三类常微分方程：
$$
\begin{aligned}
&X''+\lambda X=0\\\\
&\frac{\text{d}}{\text{d}x}\left[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\left(\lambda-\frac{m^2}{1-x^2}\right)y=0\\\\
&\frac{1}{r}\frac{\text{d}}{\text{d}r}\left(r\frac{\text{d}R}{\text{d}r}\right)+\left(\lambda-\frac{m^2}{r^2}\right)R=0
\end{aligned}
$$
统一写为
$$
\frac{\text{d}}{\text{d}x}\left[p(x)\frac{\text{d}y}{\text{d}x}\right]+[\lambda\rho(x)-q(x)]y=0
$$
称为 Sturm-Liouville 方程.

定义算符
$$
\bold{L}\equiv\frac{1}{\rho(x)}\left\{-\frac{\text{d}}{\text{d}x}\left[p(x)\frac{\text{d}}{\text{d}x}\right]+q(x)\right\}
$$
边界条件 (第三类)：
$$
p(x)\left.\left(y_1^*\frac{\text{d}y_2}{\text{d}x}-y_2\frac{\text{d}y_1^*}{\text{d}x}\right)\right|^b_a=0
$$
在这样的定义下，算符 $\bold{L}$ 自伴，自伴算符本征值的结论都能移植到 S-L 方程的本征值问题中.