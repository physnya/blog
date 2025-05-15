---
title: lesson 8 Taylor 展开
createTime: 2025/05/15 09:51:38
permalink: /complex/lesson-8/
---
## 级数

### 级数相乘的方法

$$
\begin{aligned}
\left(\underset{k=0}{\overset{\infty}{\sum}}z^k\right)\cdot\left(\underset{l=0}{\overset{\infty}{\sum}}2^lz^l\right)&=\underset{k=0}{\overset{\infty}{\sum}}\underset{l=0}{\overset{\infty}{\sum}}2^lz^{k+l}\\
&=\underset{n=0}{\overset{\infty}{\sum}}\left(\underset{l=0}{\overset{n}{\sum}}2^l\right)z^n\,,\quad n=k+l\\
&=\underset{n=0}{\overset{\infty}{\sum}}(2^{n+1}-1)z^n
\end{aligned}
$$

就能计算收敛半径了.

注意替换指标的时候，一般换掉的是出现得少一些的那一个. 

级数相乘产生的新级数，收敛半径可以任意，必须要按照具体的例子来考虑.

/Example/

> 级数相乘法，求 $\sin z\cos z$ 在 $z=0$ 附近的 Taylor 展开.
>
> ---
>
> $$
> \begin{aligned}
> &\underset{k=0}{\overset{\infty}{\sum}}\frac{(-1)^kz^{2k+1}}{(2k+1)!}\cdot\underset{l=0}{\overset{\infty}{\sum}}\frac{(-1)^lz^{2l}}{(2l)!}\\
> &=\underset{k=0}{\overset{\infty}{\sum}}\underset{l=0}{\overset{\infty}{\sum}}\frac{(-1)^{k+l}z^{2k+2l+1}}{(2k+1)!(2l)!}\\
> &=\underset{n=0}{\overset{\infty}{\sum}}\left((-1)^nz^{2n+1}\underset{k=0}{\overset{n}{\sum}}\left(\frac{1}{(2k+1)!(2n-2k)!}\right)\right)
> \end{aligned}
> $$
>
> 如何化简最后一部分系数？
>
> 考虑到组合数，我们可以构造一个组合数出来：
> $$
> \begin{aligned}
> &=\underset{n=0}{\overset{\infty}{\sum}}\left(\frac{(-1)^nz^{2n+1}}{(2n+1)!}\underset{k=0}{\overset{n}{\sum}}\left(\frac{(2n+1)!}{(2k+1)!(2n-2k)!}\right)\right)\\
> &=\underset{n=0}{\overset{\infty}{\sum}}\left(\frac{(-1)^nz^{2n+1}}{(2n+1)!}\underset{k=0}{\overset{n}{\sum}}\begin{pmatrix}
> 2n+1\\2k+1
> \end{pmatrix}\right)
> \end{aligned}
> $$
> 这里用到一个技巧：
> $$
> \begin{aligned}
> 2^{2n+1}&=\underset{k=0}{\overset{2n+1}{\sum}}C_{2n+1}^k\cdot1^k\\
> 0^{2n+1}&=\underset{k=0}{\overset{2n+1}{\sum}}C_{2n+1}^k\cdot(-1)^k
> \end{aligned}
> $$
> 相加得到结果.
>
> 所以最后结果是 $\frac{1}{2}\sin2z$.
>
> ::: tip
>
> 这些基本功在理论物理的研究中是非常有必要的. 做理论物理，有时候需要计算一个式子算五年.
>
> :::

### 无穷级数的除法

理论上来说可以用待定系数法解决.

::: tip

做无穷级数作业时，可以用 mathematica 的 ``series`` 函数，验证自己做的对不对. 

:::

/Example/

> 计算 $\tan z=\sin z/\cos z$ 的 Taylor 展开.
>
> ---
>
> $$
> \begin{aligned}
> \tan z&=\frac{\sin z}{\cos z}=\frac{\underset{k=0}{\overset{\infty}{\sum}}\frac{(-1)^{k}z^{2k+1}}{(2k+1)!}}{\underset{l=0}{\overset{\infty}{\sum}}\frac{(-1)^{l}z^{2l}}{(2l)!}}
> \end{aligned}
> $$
>
> 总之，千万不能直接把分母挪上去. 那么怎么做呢？我们先来假设一个 Taylor 展开.
> $$
> \begin{aligned}
> \tan z=\underset{n=0}{\overset{\infty}{\sum}}a_{2n+1}z^{2n+1}
> \end{aligned}
> $$
> 这里利用了 $\tan z$ 是一个奇函数的性质. 现在来待定每一项的系数，可以转化为级数的乘法：
> $$
> \begin{aligned}
> \underset{k=0}{\overset{\infty}{\sum}}\frac{(-1)^{k}z^{2k+1}}{(2k+1)!}&=\underset{l=0}{\overset{\infty}{\sum}}\frac{(-1)^lz^{2l}}{(2l)!}\cdot\underset{n=0}{\overset{\infty}{\sum}}a_{2n+1}z^{2n+1}\\
> &=\sum_{k=0}^{\infty}\left(\sum_{l=0}^{k}a_{2k-2l+1}\cdot\frac{(-1)^l}{(2l)!}\right)z^{2k+1}\,,\quad k=l+n
> \end{aligned}
> $$
> 只需要一项一项地比对系数. 至此，有
> $$
> \tan z=z+\frac{1}{3}z^3+\frac{2}{15}z^5+\frac{17}{315}z^7+\cdots
> $$
> 收敛半径没办法用判别法，因为没有通项公式. 不过，找到最近的奇点就可以了，所以收敛半径就是 $\pi/2$.

尽量避免使用待定系数法！

### 多值函数的 Taylor 展开

/Example/

> 求多值函数 $(1+z)^\alpha$ 在 $z=0$ 的 Taylor 展开. 规定 $z=0$ 时 $(1+z)^\alpha=1$，辐角为 $0$.
>
> ---
>
> 只能尝试求导：
> $$
> [(1+z)^\alpha]^{(n)}=\left.\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)(1+z)^\alpha}{(1+z)^n}\right|_{z=0}=\begin{pmatrix}
> \alpha\\n
> \end{pmatrix}n!
> $$
> (这里引入了广义的二项式系数) 所以 Taylor 展开是
> $$
> (1+z)^\alpha=\sum_{n=0}^\infty\begin{pmatrix}
> \alpha\\n
> \end{pmatrix}z^n
> $$
> 收敛半径是多少？
>
> 1. 如果用 d'Alembert 判别法，可以计算出收敛半径为 $1$.
>
> 2. 如果找最近的奇点呢？
>
>    明显，这和割线有关系，如果割线分割了单位圆，那么收敛半径就变了，收敛的范围实际上不是一个圆，而是一个被分割的图形.
>
>    实际上，在不同分支内的展开实际上是相差 $e^{2\pi\text{i}\alpha}$ 的因子.

/Example/

> 多值函数 $\ln(1-z)$ 在 $z=0$ 附近的 Taylor 展开，规定 $\ln(1-z)|_{z=0}=0$.
>
> ---
>
> 可以表示为定积分，所以直接展开：
> $$
> \ln(1-z)=-\sum_{n=1}^\infty\frac{z^n}{n}
> $$
> 在不同单值分支上，表现出来的行为是加上一个 $2\pi\text{i}$ 的项.

### 在 infty 处的 Taylor 展开

就是做变换 $z=1/t$，之后在 $t=0$ 点 Taylor 展开.

/Example/

> 考虑
> $$
> w(z)=\frac{1}{\sqrt{(z-a)(z-b)}}
> $$
> 在 $z=0$ 和 $z=\infty$ 处的 Taylor 展开.
>
> ---
>
> (1) $z=0$ 处.
> $$
> w(z)=\frac{1}{\sqrt{ab}}\cdot\left(1-\frac{z}{a}\right)^{-1/2}\left(1-\frac{z}{b}\right)^{-1/2}
> $$
> $\sqrt{ab}$ 包含了多值性，只需要展开后面的级数.
>
> (2) $z=\infty$ 处. 为了避免讨论辐角，直接把 $z$ 写成 $1/z$.
> $$
> w(z)=\frac{1}{z}\cdot\left(1-\frac{a}{z}\right)^{-1/2}\left(1-\frac{b}{z}\right)^{-1/2}
> $$

更具体的例子：

/Example/

> 计算：
> $$
> \sqrt{\frac{1-z}{1+z}}
> $$
> 的展开.
>
> ---
>
> (1) $z=0$ 时，
> $$
> \sqrt{\frac{1-z}{1+z}}=\frac{1-z}{\sqrt{1-z^2}}
> $$
> 在主值分支展开.
>
> (2) $z=\infty$ 时，
> $$
> \sqrt{\frac{1-z}{1+z}}=-\text{i}\frac{1-1/z}{\sqrt{1-1/z^2}}
> $$
> 简而言之，先把辐角的位置讨论出来，剩下的工作在主值分支上进行，可以不用考虑多值性.

## 解析函数的零点

/Definition/ (解析函数的零点)

> 如果 $f(z)$ 在 $a$ 点及其邻域内解析，$f(a)=0$，则称 $z=a$ 为 $f(z)$ 的零点.

解析函数的零点附近，一定可以 Taylor 展开，因此可以定义 $m$ 阶零点，也就是 $f(a)=\cdots=f^{(m-1)}(a)=0$ 的点.

零点的阶数都是确定的正整数，在函数的解析区域内，不可能出现分数次的零点.

/Theorem/ (解析函数零点的孤立性)

> 若 $f(z)$ 不恒等于零，且在包含 $z=a$ 在内的区域内解析，则必能找到圆 $|z−a|=\rho$ ($\rho>0$)，使在圆内除了 $z=a$ 可能为零点外，$f(z)$ 再无其他零点.

/Corollary/ (1)

> 设 $f(z)$ 在 $G:|z-a|<R$ 内解析，若在 $G$ 内存在 $f(z)$ 的无穷多零点 $\{z_n\}$，且 $\underset{n\to\infty}{\lim}z_n=a$ 但是 $z_n\neq a$，则 $f(z)$ 在 $G$ 内恒为零.
>
> (可以把条件弱化为 $\{z_n\}$ 的其中一个极限点为 $a$.)

/Corollary/ (2)

> 设 $f(z)$ 在 $G:|z-a|<R$ 内解析，若在 $G$ 内存在过 $a$ 点的一段弧 $l$ 或含有 $a$ 点的一个子区域 $g$，在 $l$ 上或者 $g$ 内 $f(z)=0$，则在整个区域内 $f(z)=0$.

/Corollary/ (3)

> 设 $f(z)$ 在 $G$ 内解析，若在 $G$ 内存在一点 $z=a$ 及过 $a$ 点的一段弧 $l$ 或含有 $a$ 点的一个子区域 $g$，在 $l$ 上或 $g$ 内 $f(z)=0$，则在整个区域内 $f(z)=0$.

/Theorem/ (解析函数的唯一性定理)

> 设在区域 $G$ 内有两个解析函数 $f_1(z)$ 和 $f_2(z)$，且在 $G$ 内存在一个序列 $\{z_n\}$，$f_1(z_n)=f_2(z_n)$. 若 $\{z_n\}$ 的一个极限点 $z=a(=z_n)$ 也落在 $G$ 内，则在 $G$ 内有 $f_1(z)=f_2(z)$.

## 解析函数的 Laurent 展开

在奇点附近，我们称为环域，这时我们需要 Laurent 展开.

/Theorem/ (Laurent 级数)

> 设函数 $f(z)$ 在以 $b$ 为圆心的环形区域 $R_1\leq|z-b|\leq R_2$ 上单值解析，则对于环域内的任何 $z$ 点，$f(z)$ 可以用幂级数展开为
> $$
> f(z)=\sum_{n=-\infty}^\infty a_n(z-b)^n
> $$
> 其中系数满足
> $$
> a_n=\frac{1}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-b)^{n+1}}\text{d}\zeta
> $$
> $C$ 是环域内绕内圆一周的任意一条闭合曲线.