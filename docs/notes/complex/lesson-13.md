---
title: Lesson 13 辐角原理 & Γ 函数
permalink: /complex/lesson-13/
createTime: 2025/6/3 09:47:24
---
## 留数定理 - 杂例

/Example/

> Kepler 问题中的行星轨道：
> $$
> \frac{\text{d}r}{\text{d}t}=\sqrt{2E+\frac{2k}{r}-\frac{l^2}{r^2}}
> $$
> 其中，$E<0$ 为总机械能. 求行星运动周期.
>
> ---
>
> 在 Newton 力学中我们会配方，得到一个反三角函数；分析力学中则会代入轨道方程进行求解. 这里给出复变积分的方法：
> $$
> T=\int\frac{\text{d}r}{\sqrt{2E+\frac{2k}{r}-\frac{l^2}{r^2}}}
> $$
> 在复变积分中，很有意思的是积分本身就沿着割线 (近日点 - 远日点连线)，而且是顺时针的积分. 进一步处理：
> $$
> \begin{aligned}
> 2E+\frac{2k}{r}-\frac{l^2}{r^2}=\frac{2E}{r^2}(r-r_{\min})(r-r_{\max})
> \end{aligned}
> $$
> 其中，轨道半长轴满足 $r_{\min}+r_{\max}=2a=-k/E$.
>
> 为积分，只需要计算 $\infty$ 的留数. 先讨论 $\infty$ 的辐角：割线上岸为 $0$，$\infty$ 处路径绕着远日点转了 $-\pi$，所以 $\arg\infty=-\pi$. 于是这一点为：
> $$
> \begin{aligned}
> &\frac{\text{i}}{\sqrt{-2E}}\cdot\frac{1}{(1-\frac{r_{\max}}{r})(1-\frac{r_{\min}}{r})}\\\\
> &=\frac{\text{i}}{\sqrt{-2E}}\left[1+\frac{1}{2}(r_{\max}+r_{\min})\cdot\frac{1}{r}+\cdots\right]
> \end{aligned}
> $$
> 所以留数是：
> $$
> \frac{\text{i}}{\sqrt{-2E}}\cdot\frac{k}{E}\cdot\frac{1}{2}
> $$
> 得到结果.

/Example/

> 计算积分：
> $$
> \oint_{|z|=2}\frac{\text{d}z}{(z+3)(z^5-1)}
> $$
>
> ---
>
> 这个积分如果算 $|z|=2$ 内部的积分，要算 5 个奇点的留数；但是如果把圆外视作 “内部”，则：
>
> * 围道方向相反；
> * 无穷远点是特殊点；
> * 只需要计算 $z=3$ 和 $z=\infty$ 两点的留数.

/Example/

> 计算积分：
> $$
> \int_{-\infty}^\infty\frac{e^{ax}}{1+e^x}\text{d}x\,,\quad0<a<1
> $$
>
> ---
>
> 半圆形围道不好，取高为 $y\text{i}=2\pi\text{i}$、宽为 $2R$ 的矩形围道：
> $$
> \begin{aligned}
> \oint_Cf(z)\text{d}z&=\int_{-R}^R\frac{e^{ax}}{1+e^x}\text{d}x-\int_{-R}^R\frac{e^{2a\pi\text{i}}e^{ax}}{1+e^x}\text{d}x\\\\
> &\quad+\int_0^{2\pi}\frac{\text{i}e^{aR+ay\text{i}}}{1+e^{R+y\text{i}}}\text{d}y-\int_0^{2\pi}\frac{\text{i}e^{-aR+ay\text{i}}}{1+e^{-R+y\text{i}}}\text{d}y\\\\
> &=(1-e^{2a\pi\text{i}})\int_{-R}^R\frac{e^{ax}}{1+e^x}\text{d}x
> \end{aligned}
> $$
> 这里，竖直边的两个积分之和恰好为零，所以得到结果：
> $$
> \int_{-\infty}^\infty\frac{e^{ax}}{1+e^x}\text{d}x=\frac{-2\pi\text{i}e^{a\pi\text{i}}}{1-e^{2a\pi\text{i}}}=\frac{\pi}{\sin\pi a}
> $$
> /Remark/
>
> > 实际上，做换元 $e^x=t$，上述积分就能化为根式函数的积分，积分围道也会变化为根式函数的积分围道.
> >
> > 此类积分在统计物理中常用.

/Example/

> 计算 Fermi 电子气模型的常用积分：
> $$
> I=\int_{-\infty}^\infty\frac{x^2e^x\text{d}x}{(e^x+1)^2}
> $$
>
> ---
>
> 如果做变换 $e^x=t$，被积函数中会出现 $\ln t$，所以我们积分原来的积分时，要将被积函数改成：
> $$
> w(z)=\frac{z^3e^z}{(e^z+1)^2}
> $$
> 仿照上例的围道来求解.

/Example/

> 一个有趣的积分：
> $$
> \oint_{\substack{|z|=(m+1/2)\pi\\\\m\in\mathbb{Z},\,\,m\to\infty}}\frac{\text{d}z}{z^n\tan z}\,,\quad n\geq2\,,\quad n\in\mathbb{Z}
> $$
>
> ---
>
> 根据大圆弧引理，围道积分为零. 但是这样会导致我们得到一个求和：
> $$
> 0=\left.\sum_{k\in\mathbb{Z}}\text{Res}\frac{1}{z^n\tan z}\right|_{z=k\pi}
> $$
> 而 $k\neq0$ 时，所有极点都是一阶极点，可以计算出
> $$
> \left.\text{Res}\frac{1}{z^n\tan z}\right|_{z=k\pi,\,\,k\neq0}=\frac{1}{(k\pi)^n}
> $$
> 所以
> $$
> \sum_{k=1}^\infty\frac{1}{(k\pi)^n}((-1)^n+1)=-\left.\text{Res}\frac{1}{z^n\tan z}\right|_{k=0}
> $$
> 当 $n$ 为偶数，就可以得到重要的求和式.

/Example/

> 证明固体物理中的如下等式：
> $$
> \sum_{k=0}^{n-1}\frac{1}{\sin^2(\frac{2k+1}{2n}\pi)}=n^2
> $$
>
> ---
>
> 构造函数：
> $$
> w(z)=\frac{1}{(z-1)^2}\frac{1}{z^n+1}
> $$
> $zw(z)\to0$ when $z\to\infty$，大圆弧引理得到围道积分为零. 所以留数和为零.
>
> 围道内有二阶极点 $z=1$ 和 $n$ 个一阶极点 $z_k=e^{\text{i}(2k+1)\pi/n}$.
> $$
> \begin{aligned}
> \left.\text{Res}[w(z)]\right|_{z=1}&=\left.\frac{\text{d}}{\text{d}z}\frac{1}{z^n+1}\right|_{z=1}=-\frac{n}{4}\\\\
> \text{Res}[w(z)]|_{z=z_k}&=-\frac{z_k}{n(z_k-1)^2}=\frac{1}{4n\sin^2(\frac{2k+1}{2n}\pi)}
> \end{aligned}
> $$
> 简单整理即证.

/Example/

> 计算积分：
> $$
> \int_{-\pi/2}^{\pi/2}\frac{\cos^{2n}\theta}{1+\varepsilon\sin\theta}\text{d}\theta\,,\quad|\varepsilon|<1
> $$
>
> ---
>
> 当然可以用三角函数有理式积分方法，但是可以变成根式情形：
> $$
> \sin\theta=x\Longrightarrow\int_{-1}^1\frac{(1-x^2)^{(2n-1)/2}}{1+\varepsilon x}\text{d}x
> $$

/Example/

> 著名的 Gauss 积分：
> $$
> \int_{-\infty}^\infty e^{-x^2}\text{d}x
> $$
> ::: tip
>
> 这个积分并不要求掌握，毕竟太难以想到.
>
> :::
>
> 我们已经知道积分会产生一个 $\sqrt{\pi}$，但是复变积分难以得到这一类系数，所以我们考虑这样的构造：
> $$
> \oint_Cf(z)\text{d}z=\oint_C\frac{e^{\text{i}\pi z^2+2\pi z}}{e^{2\pi z}+1}\text{d}z
> $$
> 围道是如下非常恐怖的形式：
>
> ::: center
>
> ![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33feh6bfrl9wrg2DIYxAIFxDda1DGxPDwUzAa==.png)
>
> :::
>
> 可以得到结果.

## 辐角原理

这是留数定理和 topology 结合的重要部分.

/Corollary/ (解析函数在零点和极点的对数留数)

> 设 $z=a$ 为解析函数 $w(z)$ 的 $m$ 阶零点，则 $z=a$ 为函数 $w'(z)/w(z)$ 的一阶极点，且
> $$
> \left.\text{Res}\frac{w'(z)}{w(z)}\right|_{z=a}=m
> $$
> 设 $z=b$ 为解析函数 $w(z)$ 的 $n$ 阶极点，则 $z=b$ 为函数 $w'(z)/w(z)$ 的一阶极点，且
> $$
> \left.\text{Res}\frac{w'(z)}{w(z)}\right|_{z=b}=-n
> $$

此引理证明不难. 由这一引理，立即得到所谓辐角原理：

/Theorem/ (辐角原理)

> 如果 $w(z)$ 满足：
>
> 1. 在简单闭合曲线 $C$ 内除极点外解析；
> 2. 在 $C$ 上解析且不为零.
>
> 则：
> $$
> \frac{1}{2\pi\text{i}}\oint_C\frac{w'(z)}{w(z)}\text{d}z=N(w,C)-P(w,C)
> $$
> 其中 $N$ 和 $P$ 分别表示 $w(z)$ 在 $C$ 内零点与极点的个数 (一个 $m$ 阶零点算 $m$ 个；一个 $n$ 阶极点算 $n$ 个).
>
> 定理也可以用辐角来表达：
> $$
> N(w,C)-P(w,C)=\frac{\Delta_C\arg w(z)}{2\pi}
> $$

接下来可以得到：

/Theorem/ (Rouche 定理)

> 如果函数 $w(z)$ 和 $\varphi(z)$ 在简单闭合曲线 $C$ 内以及 $C$ 上解析，且在 $C$ 上恒满足 $|w(z)|>|\varphi(z)|$，则函数 $w(z)$ 与 $w(z)+\varphi(z)$ 在 $C$ 内部有同样多的零点 (几阶算几个).

/Proof/

> 引入辅助函数 $\psi(z)=1+\varphi(z)/w(z)$.
>
> 可以有辐角原理知：
> $$
> \frac{1}{2\pi\text{i}}\oint_C\frac{\psi'}{\psi}\text{d}z=0
> $$
> 得证.

Rouche 定理可以用来判断多项式根的分布，多项式在任意半径 $R$ 圆内根的分布，相当于系数 $a_kR^{n-k}$ 多项式在单位圆内的情形.

$R\to\infty$ 可以证明代数学基本定理.

/Theorem/ (Weierstrass 定理)

> 设整函数 (复平面上无奇点) $f(z)$ 只有不为零的一阶零点 $a_1,\cdots,a_n$，且 $\underset{n\to\infty}{\lim}a_n=\infty$.
>
> 且存在围道序列 $\{C_m\}$ (围道内包含 $m$ 个零点 $a_1\sim a_m$)，在其上满足 $|f'(z)/f(z)|<M$，$M$ 为与 $m$ 无关的正数，则 $f(z)$ 可以展为无穷乘积：
> $$
> f(z)=f(0)e^{\frac{f'(0)}{f(0)}z}\prod_{n=1}^\infty\left\{\left(1-\frac{z}{a_n}\right)e^{z/a_n}\right\}
> $$

/Proof/

> 关键在于证明：
> $$
> F(z)=\frac{f'(z)}{f(z)}=\frac{f'(0)}{f(0)}+\sum_{n=1}^\infty\left\{\frac{1}{z-a_n}+\frac{1}{a_n}\right\}
> $$
> 只需要考虑围道积分：
> $$
> \frac{1}{2\pi\text{i}}\oint_C\frac{F(\zeta)\text{d}\zeta}{\zeta(\zeta-z)}
> $$

上述定理可以得到很多重要的无穷乘积，比如：
$$
\frac{\sin z}{z}=\prod_{n=1}^\infty\left(1-\frac{z^2}{n^2\pi^2}\right)
$$

## Gamma 函数

/Definition/

> 最常用定义是：
> $$
> \Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\text{d}z\,,\quad\Re(z)>0
> $$
> 这个积分称为第二类 Euler 积分，其中的变量 $t$ 理解为 $\arg t=0$.

很多积分都能化为 $\Gamma$ 函数，比如：
$$
\int_0^\infty e^{-t^2}t^p\text{d}t=\left.\Gamma\left(\frac{p+1}{2}\right)\right/2
$$
(Maxwell 速率分布率，极为常用)

下面要证明：积分在右半平面表示一个解析函数.

/Proof/

> 是瑕积分 ($t=0$ 端)，又是无穷积分，拆成两部分讨论：
> $$
> \int_0^\infty t^{z-1}e^{-t}\text{d}z=\int_0^1t^{z-1}e^{-t}\text{d}z+\int_1^\infty t^{z-1}e^{-t}\text{d}z
> $$
>
> ---
>
> (1) $t>1$ 时，被积函数全平面解析，只需要证明积分一致收敛.
>
> 我们知道
> $$
> e^t=\sum_{n=0}^\infty\frac{t^n}{n!}
> $$
> 所以对于任意正整数 $N$，有
> $$
> e^{-t}<\frac{N!}{t^N}
> $$
> 这样似乎并不能得到证明，于是我们强行取一个内闭区域，得到：只要选择足够大的 $N$，积分就收敛.
>
> (2) $t<1$ 时，也还是证明积分收敛，考虑到：
> $$
> |e^{-t}t^{z-1}|\leq t^{\delta-1}
> $$
> 后者收敛.
>
> 综上所述，得证.

### 积分路径修改

在上面的积分定义中，我们可以发现改变 $t$ 的积分路径，函数值不会变化：取一条不平行于虚轴的射线，积分值不变.

原理是：如下围道的大圆弧和小圆弧积分均是 $0$，但是大圆弧为零的条件是 $e^{-t}$ 在 $\infty$ 收敛，所以射线不能平行于虚轴.

::: center

![](https://vip.123pan.cn/1845440081/ymjew503t0l000d7w32x86dktjkr3nkeDIYxAIFxDda1DGxPDwUzAa==.png)

:::

这并不是一种变量代换，而纯粹是积分路径的改变.

进一步，积分路径 $L$ 可以是 $t$ 平面上从 $t=0$ 出发的任意分段光滑曲线，只需要最后以 $\Re(t)\to+\infty$ 的方式趋于 $\infty$ 点即可.

### 解析延拓

我们想要把 $\Gamma$ 函数延拓到左半平面. 所以我们要做一件非常流氓的方式 —— 交换求和和积分的次序.

将指数函数做 Taylor 展开，得到
$$
\int_0^1t^{z-1}e^{-t}\text{d}t=\sum_{n=0}^\infty\frac{(-)^n}{n!}\int_0^1t^{n+z-1}\text{d}t=\sum_{n=0}^\infty\frac{(-)^n}{n!}\frac{1}{n+z}
$$
奇点为 $-n$ ($n\in\mathbb{Z}_+$)，全部是一阶极点. 全平面版本的 $\Gamma$ 函数是
$$
\Gamma(z)=\int_1^\infty t^{z-1}e^{-t}\text{d}t+\sum_{n=0}^\infty\frac{(-)^n}{n!}\frac{1}{n+z}
$$
留数是：
$$
\left.\text{Res}[\Gamma(z)]\right|_{z=-n}=\frac{(-1)^n}{n!}
$$
所以奇点留数之和实际上就是 $e^{-1}$，非常巧妙.