---
title: Lesson 10 留数定理
permalink: /complex/lesson-10/
createTime: 2025/5/22 12:58:43
---
本性奇点的极限任意. 来证明这个结论：

/Proof/

> 这意味着 $f(z)-A$ 恒不为零，考虑：
> $$
> \frac{1}{f(z)-A}
> $$
> 如果这个点还是个本性奇点，那么它就不可能是常数也不可能是 $\infty$.

/Theorem/ (Picard 大定理)

> 在本性奇点的任意一个小邻域内，函数 $f(z)$ 可以取 (并且取无穷多次) 任意的有限数值，顶多可能有一个例外.

我们不证明这个，因为需要很多额外的知识. 但是可以得到一个推论：

/Corollary/

> 除非 $f(z)$ 的本性奇点 $z$ 不可以取 $0$，$1/f(z)$ 在 $z$ 点是非孤立奇点. 如果不可以取 $0$，那么倒函数在这点也是本性奇点.

下面的概念仅仅是一提，后续看文献可能有用：

/Definition/

> 在复平面上处处解析的函数称为整函数.
>
> > 由Liouville 定理, 对于非常函数的整函数, 无穷远点必为函数的孤立奇 点(极点或本性奇点).
>
>  在复平面上除极点外处处解析的函数称为亚纯函数.

## 解析延拓

以 $\sum z^n$ 为例.

显然这个级数在 $|z|<1$ 时收敛，令 $f_1=\sum z^n$，在圆外，这个幂级数是发散的，但是我们可以求各阶导数，得到一个 $f_2(z)$：
$$
f_2(z)=\sum_{n=0}^\infty\frac{1}{n!}f^{(n)}_1\left(\frac{\text{i}}{2}\right)\cdot\left(z-\frac{\text{i}}{2}\right)^n
$$
这个函数在公共区域内和 $f_1$ 相等，但是收敛区域变成了 $|z-\text{i}/2|<r$.

/Definition/

> 函数 $f_1(z)$ 在区域 $G_1$ 内解析，函数 $f_2(z)$ 在 $G_2$ 内解析，而在 $G_1$ 与 $G_2$ 的公共区域 $G_1\cap G_2$ 内，$f_1(z)=f_2(z)$，则称 $f_2(z)$ 为 $f_1(z)$ 在 $G_2$ 内的解析延拓；反之互为解析延拓.

很多应用：维度重整化 (4 维的某种规律发散，但是延拓到复数维再取趋于 4 的极限可以得到结果)、$1+2+\cdots=-1/12$ 也是解析延拓.

解析延拓能否实现，取决于：函数的奇点分布. 如果边界上全是稠密的奇点，肯定无法延拓.

路径是否影响解析延拓结果？原函数可能就是多值的，路径当然可能会影响解析延拓的结果.

## 留数定理

==The most important==. 它教会我们算一类定积分.

### 留数的引入

Laurent 展开可以用系数来求积分：
$$
\oint_C\frac{f(\zeta)}{(\zeta-b)^{n+1}}\text{d}\zeta=2\pi\text{i}a_n
$$
特别地，$n=-1$ 是非常有用的：
$$
\oint_Cf(\zeta)\text{d}\zeta=2\pi\text{i}a_{-1}
$$
这是留数定理的基本思想.

### 留数定理

/Theorem/ (留数 (residue) 定理)

> 区域 $G$ 的边界 $C$ 分为一分段光滑的简单闭合曲线. 若除了有限个孤立奇点 $b_k$，$k=1,2,\cdots,n$ 外，函数 $f(z)$ 在 $G$ 内单值解析，在 $\overline{G}$ 中连续，且在 $C$ 上没有 $f(z)$ 的奇点，则
> $$
> \oint_Cf(z)\text{d}z=2\pi\text{i}\sum_{k=1}^n\text{Res} f(b_k)
> $$
> $\text{Res}f(b_k)$ 称为 $f(z)$ 在 $b_k$ 处的留数，它等于 $f(z)$ 在 $b_k$ 邻域内 Laurent 展开中，$(z-b_k)^{-1}$ 的系数 $a_{-1}^{(k)}$.
>
> /Remark/
>
> > 如果是场点，留数是 $0$；但是例外是 $\infty$，不一定是零！

==在极点处，留数非常好求==！

判断极点，只需要确定倒函数的零点阶数，对应就是几阶极点.

对于一阶极点，留数：
$$
\text{Res}f(b)=\lim_{z\to b}(z-b)f(z)
$$
常见的情况是，$f(z)=P(z)/Q(z)$，$b$ 是 $Q(z)$ 的一阶零点，则
$$
\text{Res}f(b)=\frac{P(b)}{Q'(b)}
$$
/Example/

> 求 $1/(z^2+1)$ 在奇点的留数.
>
> ---
>
> $z=\pm\text{i}$. 分母求导，得到 $\text{Res}f(\pm\text{i})=\mp\text{i}/2$.

/Example/

> 求
> $$
> \frac{e^{\text{i}az}-e^{\text{i}bz}}{z^2}
> $$
> 在奇点的留数.
>
> ---
>
> 最好不要分母求导，反而直接取极限比较合适：
> $$
> \lim_{z\to0}\frac{e^{\text{i}az}-e^{\text{i}bz}}{z}=\text{i}(a-b)
> $$

高阶极点的情况？

可以理论上写出：
$$
a_{-1}=\frac{1}{(m-1)!}\left.\frac{\text{d}^{m-1}}{\text{d}z^{m-1}}[(z-b)^mf(z)]\right|_{z=b}
$$
但是不一定要求导！因为只要 $-1$ 阶系数，所以可以直接展开一下.

/Example/

> $1/(z^2+1)^3$ 的奇点处留数.
>
> ---
>
> 强行计算，$\text{Res}f(\pm\text{i})=\mp3\text{i}/16$.

如果是本性奇点，只能 Laurent 展开.

/Definition/ (函数在无穷远点的留数)

> 定义为
> $$
> \text{Res}f(\infty)=\frac{1}{2\pi\text{i}}\oint_{C'}f(z)\text{d}z
> $$
> /Remark/
>
> > 首先，我们没说这里 $\infty$ 是不是奇点.
> >
> > ---
> >
> > 同时，这并不是 $f(z)$ 在 $\infty$ 邻域 Laurent 展开的 $z^1$ 系数，而是 $z^{-1}$ 系数的相反数！
> >
> > 这是因为：
> > $$
> > \text{Res}f(\infty)=\frac{1}{2\pi\text{i}}\oint_{C'}f(z)\text{d}z=-\frac{1}{2\pi\text{i}}\oint_Cf\left(\frac{1}{t}\right)\frac{\text{d}t}{t^2}
> > $$
> > 这里 "$-$" 号来源于正常求导出来的，因为换围道方向时，本来就有一个负号、取倒数也有一个负号，抵消掉了.

### 留数定理的应用

/Example/ (求部分分式)

> $$
> f(z)=\frac{1}{(z-1)(z-2)(z-3)}
> $$
>
> 化为部分分式.
>
> ---
>
> $$
> \frac{1}{(z-1)(z-2)(z-3)}=\frac{A}{z-1}+\frac{B}{z-2}+\frac{C}{z-3}
> $$
>
> 三个待定常数就是留数.
> $$
> A=\text{Res}f(1)=\frac{1}{2}\\
> B=\text{Res}f(2)=-1\\
> C=\text{Res}f(3)=\frac{1}{2}
> $$
>
> ---
>
> 如果把 $(z-1)$ 变成 $(z-1)^2$，就有 4 项，要求一次二阶极点的留数.

最重要的应用还是求定积分.

注意：理论上复变函数能做的积分，实变必能做；反之亦然，实变不能做，复变一定不可以做.

/Example/ (有理三角函数的积分)

> 万能积分.
> $$
> \begin{aligned}
> I&=\int_0^{2\pi}R(\sin\theta,\cos\theta)\text{d}\theta\\
> &=\oint_{|z|=1}R\left(\frac{z^1-1}{2\text{i}z},\frac{z^2+1}{2z}\right)\frac{\text{d}z}{\text{i}z}\\
> &=2\pi\sum_{|z|<1}\text{Res}\left\{\frac{1}{z}R\left(\frac{z^1-1}{2\text{i}z},\frac{z^2+1}{2z}\right)\right\}
> \end{aligned}
> $$
>
> ---
>
> 计算积分：
> $$
> I=\int_0^{2\pi}\frac{1}{1+\varepsilon\cos\theta}\text{d}\theta\,,\quad|\varepsilon|<1
> $$
>
> ---
>
> 理论上可以用万能公式直接积分. 但是用留数定理可以加速：
> $$
> \begin{aligned}
> \text{LHS}&=\oint_{|z|=1}\frac{1}{\text{i}z(1+\varepsilon\frac{z^2+1}{2z})}\text{d}z\\
> &=\frac{1}{\text{i}}\oint_{|z|=1}\frac{\text{d}z}{\varepsilon z^2+2z+\varepsilon}
> \end{aligned}
> $$
> 奇点是求根公式的根，但是要注意，两个根只有一个在单位圆内：
> $$
> \begin{aligned}
> &=2\pi\text{i}\text{Res}f\left(\frac{-1+\sqrt{1-\varepsilon^2}}{\varepsilon}\right)=\frac{2\pi}{\sqrt{1-\varepsilon^2}}
> \end{aligned}
> $$
>
> ---
>
> 计算积分：
> $$
> I=\int_0^{2\pi}\cos^{2n}\theta\text{d}\theta\,,\quad n\in\mathbb{Z}_+
> $$
>
> ---
>
> $$
> \begin{aligned}
> &=\oint_{|z|=1}\frac{1}{\text{i}z}\left(\frac{z^2+1}{2z}\right)^{2n}\text{d}z\\
> &=2\pi\cdot\text{Res}\left(\frac{(z^2+1)^{n}}{2^{2n}\cdot z^{2n+1}}\right)
> \end{aligned}
> $$
>
> 所以答案是 $2\pi C_{2n}^n/2^{2n}$.

/Example/ (无穷积分)

> 定义为
> $$
> \int_{-\infty}^\infty f(x)\text{d}x
> $$
> 上下限趋于 $\infty$ 的方式可能不同. 这种积分不一定存在，但是主值存在：
> $$
> \text{v.p.}\int_{-\infty}^\infty f(x)\text{d}x=\lim_{R\to+\infty}\int_{-R}^Rf(x)\text{d}x
> $$
>
> ---
>
> 可以延拓至上半平面或下半平面，得到
> $$
> \oint_Cf(z)\text{d}z=\int_{-R}^Rf(z)\text{d}z+\int_{C_R}f(z)\text{d}z=2\pi\text{i}\sum_{\text{upper}}\text{Res}f(z)
> $$
> 根据大圆弧引理，又保证了第二项为零 (因为实变积分收敛本来就要求无穷处 $xf(x)$ 趋于零).
>
> $\uparrow$ 写这句话有步骤分.
>
> ---
>
> 计算：
> $$
> I=\int_{-\infty}^\infty\frac{\text{d}x}{(1+x^2)^3}=2\pi\text{i}\cdot\left(-\frac{3\text{i}}{16}\right)=\frac{3}{8}\pi
> $$
>
> ---
>
> 计算：
> $$
> I=\int_0^\infty\frac{\text{d}x}{1+x^4}
> $$
> 偶函数，可以用半圆围道.