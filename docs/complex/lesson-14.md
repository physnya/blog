---
title: Lesson 14 相关特殊函数
permalink: /complex/lesson-14/
createTime: 2025/6/5 11:21:43
---
## Γ 函数

基本性质：

(1) $\Gamma(1)=1$.

(2) 递推关系：$\Gamma(z+1)=z\Gamma(z)$.

/Proof/

> 用最简单的式子写出来：
> $$
> \begin{aligned}
> \Gamma(z+1)&=\int_0^\infty t^ze^{-t}\text{d}t\\
> &=-t^ze^{-t}|^\infty_0+z\int_0^\infty t^{z-1}e^{-t}\text{d}t\\
> &=z\int_0^\infty t^{z-1}e^{-t}\text{d}t=z\Gamma(z)
> \end{aligned}
> $$
> 得证.
>
> 这一证明是在右半平面做的，但是等式两边都能解析延拓，所以在全平面成立.

/Corollary/

> 由这一性质，阶乘可以用 $\Gamma$ 函数表达，$n!=\Gamma(n+1)$.
>
> ::: warning
>
> 一定要注意 $(7/2)!$ 这种符号的含义，有可能是连乘，也有可能指的是 $\Gamma(9/2)$. 这两种是有区别的，相差一个 $\sqrt{\pi}$，不同的书籍不同.
>
> :::

同时，我们能够解析延拓：
$$
\Gamma(z)=\frac{\Gamma(z+1)}{z}=\frac{\Gamma(z+2)}{z(z+1)}
$$
这个函数的定义域比右半平面宽一点，但是多了几个奇点. 按照这样的方式可以把定义域递归地往左推.

要记住的一个值：$\Gamma(1/2)=\sqrt{\pi}$.

(3) 互余宗量定理：
$$
\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin\pi z}\neq0
$$
由此可以发现，$\Gamma$ 函数在全平面无零点，这意味着其倒函数全平面无奇点.

(4) $\Gamma$ 函数的围道积分表示：

如图所示的围道：

::: center

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33feuwdd3w37er1DIYxAIFxDda1DGxPDwUzAa==.png)

:::

得到：
$$
I=(e^{2\pi\text{i}z}-1)\int_0^\infty t^{z-1}e^{-t}\text{d}t=2\text{i}e^{\pi\text{i}z}\sin\pi z\Gamma(z)
$$
也就是
$$
\Gamma(z)=-\frac{1}{2\text{i}\sin\pi z}\int_\infty^{(0+)}(-t)^{z-1}e^{-t}\text{d}t\,,\quad|\arg(-t)|<\pi
$$
这个公式在 $z\in\mathbb{Z}$ 处不成立，但是可以延拓到全平面.

如果用互余宗量定理，得到无限制的定义：
$$
\frac{1}{\Gamma(1-z)}=-\frac{1}{2\pi\text{i}}\int_\infty^{(0+)}(-t)^{z-1}e^{-t}\text{d}t\,,\quad|\arg(-t)|<\pi
$$
(5) 倍乘公式 (不用记忆，因为没什么必要)：
$$
\Gamma(2z)=2^{2z-1}\pi^{-1/2}\Gamma(z)\Gamma\left(z+\frac{1}{2}\right)
$$
(6) $\Gamma$ 函数的渐近展开，即 Stirling 公式：当 $|z|\to\infty$，$|\arg z|<\pi$ 时，有
$$
\begin{aligned}
\Gamma(z+1)&\sim\sqrt{2\pi z}\left(\frac{z}{e}\right)^z\left\{1+\frac{1}{12z}+\frac{1}{288z^2}+\cdots\right\}\\\\
\ln\Gamma(z+1)&\sim\left(z+\frac{1}{2}\right)\ln z-z+\frac{1}{2}\ln(2\pi)+\frac{1}{12z}+\cdots
\end{aligned}
$$
常用结果是：$\ln n!\approx n\ln n-n$.

/Proof/ (Stirling 公式)

> 令 $t=zx$，得到
> $$
> \begin{aligned}
> \Gamma(z+1)&=z\int_0^\infty e^{-z(x-\ln x)+z\ln z}\text{d}x\\
> &=z^{z+1}\int_0^\infty e^{-z(x-\ln x)}\text{d}x
> \end{aligned}
> $$
> 分析 $y(x)=x-\ln x$ 在 $x=1$ 附近的性质，得到
> $$
> y(x)=x-\ln x\sim1+\frac{(x-1)^2}{2}
> $$
> 所以得到证明：
> $$
> \int_0^\infty e^{-z(x-\ln x)}\text{d}x\sim e^{-z}\int_{-\infty}^\infty e^{-zx^2/2}\text{d}x=\sqrt{\frac{2\pi}{z}}e^{-z}
> $$
> 得到了渐近展开
> $$
> \Gamma(z+1)\sim\sqrt{2\pi z}\left(\frac{z}{e}\right)^z
> $$
> /Remark/
>
> > 这个代换的方法在渐近分析中常用.

(7) 外氏无穷乘积：
$$
\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod_{n=1}^\infty\left\{\left(1+\frac{z}{n}\right)e^{-z/n}\right\}
$$

## Beta 函数

::: tip

正体 $\Beta$ 是 $\beta$ 的大写.

:::

/Definition/ ($\Beta$ 函数)

> 由第一类 Euler 积分定义：
> $$
> \Beta(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\text{d}t\,,\quad\Re(p),\Re(q)>0
> $$
> 令 $t=\sin^2\theta$ 得到另一表达式：
> $$
> \Beta(p,q)=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\text{d}\theta
> $$
> 注意到关于 $p,q$ 是对称的.

$\Beta$ 函数能够用 $\Gamma$ 函数表示，
$$
\Beta(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}
$$
/Proof/

> 将 $\Gamma$ 函数写成：
> $$
> \Gamma(p)=\int_0^\infty e^{-t}t^{p-1}\text{d}t=2\int_0^\infty e^{-x^2}x^{2p-1}\text{d}x
> $$
> 同理 $\Gamma(q)=\gamma(y)$. 相乘：
> $$
> \Gamma(p)\Gamma(q)=4\int_0^\infty\int_0^\infty e^{-(x^2+y^2)}x^{2p-1}y^{2q-1}\text{d}x\text{d}y
> $$
> 转为极坐标，得证 $\Gamma(p)\Gamma(q)=\Gamma(p+q)\Beta(p,q)$.

可以利用此关系：

* 将 $\Beta$ 函数延拓到 $p,q$ 的全平面.
* 发现 $p,q$ 的对称性.
* 补充证明互余宗量定理和倍乘公式.

/Proof/ (互余宗量定理)

> 用到 $\Beta(z,1-z)=\Gamma(z)\Gamma(1-z)$，LHS 用留数定理，直接得证.

/Proof/ (倍乘公式)

> 公式中含有 $\Gamma(z+1/2)$，$\Gamma(z)$ 和 $\Gamma(2z)$，所以写：
> $$
> \frac{\Gamma(z)\Gamma(1/2)}{\Gamma(z+1/2)}=2z^{2z-1}\int_0^1(1-t)^{z-1}t^{z-1}\text{d}t
> $$
> 另外，
> $$
> \frac{\Gamma(z)\Gamma(z)}{\Gamma(z)}=\Beta(z,z)=\int_0^1(1-t)^{z-1}t^{z-1}\text{d}t
> $$
> 两者之间的联系是：$t=(1+x)/2$，得证：
> $$
> \frac{\Gamma(z)\Gamma(1/2)}{\Gamma(z+1/2)}=2^{2z-1}\frac{\Gamma(z)\Gamma(z)}{\Gamma(z)}
> $$

## Psi 函数

/Definition/

> $\psi$ 函数是 $\Gamma$ 函数的对数微商：
> $$
> \psi(z)=\frac{\text{d}\ln \Gamma(z)}{\text{d}z}=\frac{\Gamma'(z)}{\Gamma(z)}
> $$

性质：

(1) $z=0,-1,-2,\cdots$ 为函数的一阶极点，留数全部是 $-1$；除此之外函数全平面解析.

(2) 如下递推式：
$$
\psi(z+1)=\psi(z)+\frac{1}{z}\\
\psi(z+n)=\psi(z)+\frac{1}{z}+\frac{1}{z+1}+\cdots+\frac{1}{z+n-1}
$$
(3)
$$
\psi(1-z)=\psi(z)+\pi\cot\pi z
$$
(4)
$$
\lim_{n\to\infty}[\psi(z+n)-\ln n]=0
$$
(5)
$$
\psi(1)=-\gamma=-0.57721566\cdots
$$
(6)
$$
\psi(z)=-\gamma-\frac{1}{z}+\sum_{k=1}^\infty\left(\frac{1}{k}-\frac{1}{k+z}\right)
$$
::: danger

考试考到 $\psi$ 函数，但是不要求记住这些结论，考试一般考证明 $\psi$ 函数的这些性质，也就是考利用 $\Gamma$ 函数进行计算.

:::

接下来我们讲一些有意思的.

## Riemann Zeta 函数

/Definition/

> $$
> \zeta(s)=\sum_{n=1}^\infty\frac{1}{n^s}
> $$
>
> 要求 $\Re(s)=\sigma>1$.

这个函数揭开了解析数论的序幕，之后就是代数几何了.

推广的版本是
$$
\zeta(s,a)=\sum_{n=0}^\infty\frac{1}{(n+a)^s}
$$
由于
$$
(n+a)^{-s}\Gamma(s)=\int_0^\infty x^{s-1}e^{-(n+a)x}\text{d}x
$$
可以得到 $\zeta(s,a)$ 的解析延拓：
$$
\zeta(s,a)=-\frac{\Gamma(1-s)}{2\pi\text{i}}\int_\infty^{(0+)}\frac{(-z)^{s-1}e^{-az}}{1-e^{-z}}\text{d}z
$$
其中 $|\arg(-z)<\pi|$，围道内不含奇点 $z=2n\pi\text{i}$ ($n\in\mathbb{Z}$).

这个积分：

* 对 $s$ 单值解析，所以是一个解析延拓，$\Re(s)>1$ 不再要求. 同时 $a$ 可以是复数，只要 $\Re(a)>0$.
* $\zeta(s,a)$ 的奇点就是 $\Gamma(1-s)$ 的奇点，所以只有一个，就是 $s=1$，是一阶极点.

$s=1$ 处，留数是 $1$.

Hurwitz 证明了下述关系：
$$
\zeta(1-s)=2(2\pi)^{-s}\Gamma(s)\cos\frac{s\pi}{2}\zeta(s)
$$
所以所有的 $\zeta(-2m)$ ($m\in\mathbb{Z}_+$) 等于零. (？？)

得到：
$$
\begin{aligned}
&1+1+\cdots+1+\cdots=-\frac{1}{2}\\\\
&1+2+\cdots+n+\cdots=-\frac{1}{12}\\\\
&1^2+2^2+\cdots+n^2+\cdots=0\\\\
&1^3+2^3+\cdots+n^3+\cdots=\frac{1}{120}\\\\
&\quad\quad\quad\quad\quad\quad\vdots
\end{aligned}
$$
/Example/ (Casimir 效应)

> 真空的基态能量是一个每一个频率的谐振子基态不为零的那一个能量求和：
> $$
> \braket{E}=\frac{1}{2}\sum_\omega\hbar\omega
> $$
> 如果在全空间求和，这是无意义的，因为真空的能量是多少都没有意义.
>
> 但是如果用两个板限制这个真空，频率会受到两板的限制，求和会得到：
> $$
> \braket{E}=\frac{hc}{4L}\sum_{n=1}^\infty n
> $$
> 求和发散，但是如果用延拓的 $\zeta$ 函数，会得到
> $$
> \braket{E}=-\frac{hc}{48L}
> $$
> 当作一个势能，会有吸引力，当然这些现象在实验中还没有确切地观测到，但是至少 LIGO 做双镜修正的时候似乎考虑了这一点.
>
> ---
>
> 实际上，在理论物理中我们的计算是求和 $\sum ne^{-\varepsilon n}$ ($\varepsilon\to0$). 这个求和类似配分函数，是一个对 $\varepsilon$ 的求导.
>
> 当然求和的极限还是发散的，但是可以 Laurent 展开，第一项依赖于 $1/\varepsilon$，我们认为这是一个紫外发散，来自于我们计算方法的失误，鉴于板内外全部都有这一项，所以直接取第二项 $-1/12$ (常数项)，结果一致.

Riemann $\zeta$ 函数同时也和素数有关：
$$
\prod_p\left(1-\frac{1}{p^s}\right)=\frac{1}{\zeta(s)}
$$
其中，$p$ 是素数.

由此容易知道，$\zeta(s)$ 在 $\sigma=\Re(s)>1$ 的区域没有零点，前面已经证明 $s=-2m$ ($m=1,2,\cdots$) 为 $\zeta(s)$ 的零点，另外可以证明 $\sigma<0$ 时，除了 $s=-2m$ 无零点.

其他零点只可能出现在 $0\leq\sigma\leq1$ 的区域内，Riemann 提出的猜想就是：

::: tip

这些零点都在 $\sigma=1/2$ 的线上. —— Riemann 猜想

:::

## 考试说明

30 分多值函数和级数相关 + 30 分留数定理相关 + Riemann 积分相关的部分 + $\Gamma$ 函数相关.

祝大家期末顺利.
