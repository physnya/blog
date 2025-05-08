---
title: Lesson 6 级数
permalink: /complex/lesson-6/
createTime: 2025/5/8 11:28:27
---
## Cauchy 积分公式

回忆：
$$
f^{(k)}(a)=\frac{n!}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-a)^{n+1}}\text{d}\zeta
$$
我们来估计有界单连通区域上解析函数各阶导数的模：
$$
|f^{(n)}(z)|\leq\frac{n!}{2\pi}\oint_C\frac{|f(\zeta)|}{|\zeta-z|^{n+1}}|\text{d}\zeta|\leq\frac{n!M}{R^n}
$$
有下面的结论：

- 当 $n=0$ 时，$|f(z)|\leq M$.

  最大模定理：模的最大值一定出现在边界上. (最大模定理适用于所有的调和函数，但是整体的证明在数理方程课程中，这里我们只能了解 2 维的情况)

- 当 $n=1$ 时，$|f'(z)|\leq M/R$.

  Liouville 定理：在全平面上解析且有界的函数为常函数.

  > 利用 Liouville 定理可以证明代数基本定理 (有很多种不同的证明，但是不同领域都能证明这个定理，使得它成为了联系数学不同分支的桥梁).
  >
  > 对于方程式 $f(x)=0$，假设没有根，定义函数 $w(x)=1/f(x)$，因为没有根，所以这函数一定解析、有界，所以是常函数，假设不成立. 由此可以证有 $n$ 个根.

## 无穷级数

无穷级数，特别是幂级数，是解析函数最重要的表达形式之一. 许多初等函数和特殊函数都是用幂级数定义的. 复变函数级数理论最大的优势是“求导能够换成积分”. 利用级数理论可以得到近似解，广泛应用于各种实际问题的求解.

/Definition/ (复数级数 & 级数的收敛)

> $$
> \sum_{n=0}^\infty z_n=\sum_{n=0}^\infty\alpha_n+\text{i}\sum_{n=0}^\infty\beta_n
> $$
>
> 若级数的部分和序列收敛，则称级数收敛，反之为发散.

/Theorem/ (Cauchy 充要条件)

> 给定 $\varepsilon>0$，存在 $n\in\mathbb{Z}$，使得对于任意正整数 $p$，有
> $$
> |u_{n+1}+\cdots+u_{n+p}|<\varepsilon
> $$
> 特别是，令 $p=1$，就得到级数收敛的 ==必要== 条件：
> $$
> \lim_{n\to\infty}u_n=0
> $$

在不改变求和次序的前提下，可以将收敛级数并项 (可以添括号). 但是，不能随意拆括号，要拆只能对有限项进行操作；同时，发散级数不能添也不能拆.

/Definition/ (绝对收敛)

> 如果级数 $\underset{n=0}{\overset{\infty}{\sum}}|u_n|$ 收敛，则称级数 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 绝对收敛. (这里的“$||$”符号是取模，而不是绝对值)

/Proof/ (证明绝对收敛一定收敛)

> $$
> |u_{n+1}+\cdots+u_{n+p}|\leq|u_{n+1}|+\cdots+|u_{n+p}|
> $$
>
> 得证. 但是一个收敛的级数不一定是绝对收敛的.

### 判别法

/Theorem/ (比较判别法)

> 若 $|u_n|<v_n$，而 $\underset{n=0}{\overset{\infty}{\sum}}v_n$ 收敛，则 $\underset{n=0}{\overset{\infty}{\sum}}|u_n|$ 收敛，也就是 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 绝对收敛.
>
> 若 $|u_n|>v_n$，而 $\underset{n=0}{\overset{\infty}{\sum}}v_n$ 发散，则 $\underset{n=0}{\overset{\infty}{\sum}}|u_n|$ 发散，也就是 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 不绝对收敛.

/Theorem/ (比值判别法)

> 存在与 $n$ 无关的常数 $\rho$.
>
> 若 $|u_{n+1}/u_n|\leq\rho<1$，级数 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 绝对收敛；
>
> 若 $|u_{n+1}/u_n|\geq\rho>1$，级数 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 发散.

上面的证明就是转化为等比级数的比较判别法.

/Theorem/ (d'Alembert 判别法)

> 将比值判别法转换为极限的语言：
>
> 如果上极限 $\overline{\underset{n\to\infty}{\lim}}|u_{n+1}/u_n|=l<1$，则 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 绝对收敛；
>
> 如果下极限 $\underset{n\to\infty}{\underline{\lim}}=l>1$，则 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 发散.

上述判别法的缺陷是要使用两种不同的极限，因此引入：

/Theorem/ (Cauchy 判别法)

> 如果上极限 $\overline{\underset{n\to\infty}{\lim}}\sqrt[n]{|u_n|}<1$，则级数 $\underset{n=0}{\overset{\infty}{\sum}}|u_n|$ 收敛；
>
> 如果上极限 $\overline{\underset{n\to\infty}{\lim}}\sqrt[n]{|u_n|}>1$，则级数 $\underset{n=0}{\overset{\infty}{\sum}}u_n$ 发散.

绝对收敛级数的性质：

* 可以改变求和次序；
* 可以拆成几个子级数，每个子级数绝对收敛；
* 绝对收敛级数之积仍然绝对收敛.

对于非绝对收敛的级数：

/Theorem/ (Dirichlet 判别法)

> 部分和级数 $\left\{S_n=\underset{k=0}{\overset{n}{\sum}}u_k\right\}$ 有界，$\{v_k\}$ 是正项递减序列，且 $\underset{n\to\infty}{\lim}v_n=0$，则 $\underset{n=0}{\overset{\infty}{\sum}}u_nv_n$ 收敛.

一个著名的发散级数是 $\zeta(1)$. 摆砖的问题就是如此：假设有无穷多砖块，最上面的一个砖比下面一块伸出 $1/2$，再下面是 $1/3$，…，最后从桌边能够摆出的长度是 $\infty$.

/Proof/

> 引入 Abel 变换：记 $S_n=\underset{k=0}{\overset{n}{\sum}}u_k$，则
> $$
> \underset{k=0}{\overset{m}{\sum}}u_kv_k=\underset{k=0}{\overset{m-1}{\sum}}(v_k-v_{k+1})S_k+v_mS_m
> $$
> 用了变换之后，可以使用绝对值不等式进行缩放，然后利用 Cauchy 充要条件证明.

### 函数级数

/Theorem/ (函数级数的收敛性)

> 设 $u_k(z)$ 在区域 $G$ 中有定义.
>
> 若级数 $\underset{k=0}{\overset{\infty}{\sum}}u_k(z_0)$ 收敛，称为函数级数在 $z_0$ 处收敛；…

/Definition/ (函数级数的一致收敛性)

> 对于任意给定的 $\varepsilon>0$，存在一个与 $z$ 无关的 $N(\varepsilon)$，使得当 $n>N(\varepsilon)$ 时：
> $$
> \left|S(z)-\underset{k=0}{\overset{n}{\sum}}u_k(z)\right|<\varepsilon
> $$
> 成立，则级数在 $G$ 中一致收敛.

判别法只有 Weierstrass $M$ - Test 和定义.

一致收敛函数级数的性质：

* 连续性.

  若 $u_k(z)$ 在 $G$ 内连续，级数 $\underset{k=0}{\overset{\infty}{\sum}}u_k(z)$ 在 $G$ 内一致收敛，则其和函数 $S(z)=\underset{k=0}{\overset{\infty}{\sum}}u_k(z)$ 也在 $G$ 内连续.

  (换言之，求极限 & 求和两种运算可以交换顺序)

* 逐项求积分.

  积分 & 求和可交换顺序：
  $$
  \int_C\sum_{k=0}^\infty u_k(z)\text{d}z=\underset{k=0}{\overset{\infty}{\sum}}\int_Cu_k(z)\text{d}z
  $$

* 逐项求导数 (Weierstrass 定理)

  要求一致收敛函数级数每一项在闭区域 $\overline{G}$ 单值解析，且不在边界，这时求导 & 求和可交换顺序：
  $$
  f^{(p)}(z)=\sum_{k=0}^\infty u_k^{(p)}(z)
  $$
  这里比实变好证很多，因为复变求导可以转化为积分；而要求在闭区域内是因为利用逐项求积分时，函数变成了 $u_k^{(p)}(\zeta)/(\zeta-z)^{p+1}$，分母不能为零.

## 渐近级数

渐近级数 (asymptotic series) 是一类特殊的发散级数,它在物理学当中具有重要的地位，是了解函数在奇点附近奇异行为的有效手段.

/Definition/ (高阶小 & 渐近)

> 在 $z_0$ 的一个邻域内且限制 $\arg(z-z_0)$ 在一定的辐角范围，$u(z)$ 和 $v(z)$ 为连续函数.
>
> 如果 $\underset{z\to z_0}{\lim}u(z)/v(z)=0$，则在该辐角范围内当 $z\to z_0$ 时 $u(z)$ 为 $v(z)$ 的高阶小量，记为 $u(z)=\omicron(v(z))$；
>
> > 这个“$\omicron$”是 omicron.
>
> 如果 $\underset{z\to z_0}{\lim}u(z)/v(z)=1$，则在该辐角范围内当 $z\to z_0$ 时 $u(z)$ 渐近于 $v(z)$，记为 $u(z)\sim v(z)$.

值得揣摩的点：渐近级数没有要求收敛！

/Example/

> 试计算当 $x$ 很大的时候，
> $$
> \int_0^\infty\frac{e^{-xt}}{1+t}\text{d}t
> $$
> 的值.
>
> ---
>
> 利用：
> $$
> \frac{1}{1+t}=\sum_{k=0}^{n-1}(-t)^k+\frac{(-t)^n}{1+t}
> $$
> 得到
> $$
> \begin{aligned}
> \int_0^\infty\frac{e^{-xt}}{1+t}\text{d}t&=\sum_{k=0}^{n-1}\int_0^\infty(-t)^ke^{-xt}\text{d}t+R_n(x)\\
> &=\sum_{k=0}^{n-1}\frac{(-1)^kk!}{x^{k+1}}+R_n(x)
> \end{aligned}
> $$
> 这里用到 $\Gamma(x)$，同时其中的 $R_n(x)$ 为
> $$
> R_n(x)=\int_0^\infty\frac{(-t)^ne^{-xt}}{1+t}\text{d}t
> $$
> 因此得到一个渐近：
> $$
> \int_0^\infty\frac{e^{-xt}}{1+t}\text{d}t\sim\sum_{k=0}^\infty\frac{(-1)^kk!}{x^{k+1}}
> $$
> 这是一个典型的发散级数. 当我们近似计算一个量时，并不是取的项数越多越好 (因为越多很有可能越发散)，我们需要通过估算这个余项来考虑渐近级数取哪一项.
>
> 例如，$x=10$，则取 $n=10$ 比较好，此时：
> $$
> |R_n(x)|=\left|\int_0^\infty\frac{(-t)^ne^{-xt}}{1+t}\text{d}t\right|<\int_0^\infty t^ne^{-xt}\text{d}t=\frac{n!}{x^{n+1}}\\
> |R_{10}(10)|<\frac{10!}{10^{11}}=0.000036288
> $$

渐近分析方法在求解微分方程和计算积分时非常有用，求解微分方程的 WKB 近似, 求解积分的驻相法、Laplace 近似、最速下降法等, 以及摄动方法 (微扰论) 在物理学当中都有很重要的应用. 渐近分析方法是物理学理论研究工作的重要数学工具. 相关内容可以查阅渐近分析类书籍，如瞿崇垲《应用数学方法》等书籍.

## 幂级数

/Theorem/ (Abel (第一) 定理)

> 如果级数 $\underset{n=0}{\overset{\infty}{\sum}}c_n(z-a)^n$ 在某点 $z_0$ 收敛，则在以 $a$ 点为圆心，$|z_0-a|$ 为半径的圆内绝对收敛，而在 $|z-a|\leq r$ ($r<|z_0-a|$，也就是内闭区域) 中一致收敛.

/Corollary/

> 若级数 $\underset{n=0}{\overset{\infty}{\sum}}c_n(z-a)^n$ 在某点 $z_1$ 发散，则在圆 $|z-a|=|z_1-a|$ 外处处发散.

/Definition/ (收敛圆和收敛半径)

> 一个级数在 $z$ 平面上的任意一点，总是要么收敛，要么发散. 这些收敛点与发散点之间存在一个分界线. 根据 Abel 定理, 这个分界线一定是圆. 这个圆就称为幂级数的收敛圆.
>
> 收敛圆的圆心是 $z=a$，半径为收敛半径.