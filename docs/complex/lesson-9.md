---
title: Lesson 9 Laurent 展开
permalink: /complex/lesson-9/
createTime: 2025/5/20 09:52:32
---
## 解析函数的 Laurent 展开

/Proof/

> 将环域的内外边界分别记为 $C_1$ 和 $C_2$，在复连通区域内应用 Cauchy 积分公式，有
> $$
> f(z)=\frac{1}{2\pi\text{i}}\oint_{C_2}\frac{f(\zeta)}{\zeta-z}\text{d}\zeta-\frac{1}{2\pi\text{i}}\oint_{C_1}\frac{f(\zeta)}{\zeta-z}\text{d}\zeta
> $$
> 对于 $C_2$ 上的积分，可以直接求出：
> $$
> a_n=\frac{1}{2\pi\text{i}}\oint_{C_2}\frac{f(\zeta)}{(\zeta-b)^{n+1}}\text{d}\zeta
> $$
> 这里 $n$ 一定是自然数，就是我们直接使用 Taylor 定理得到的结果.
>
> 但是我们对于 $C_1$ 上的积分无法使用 Taylor 定理，因为我们的区域不在 $C_1$ 内，所以只能凑成：
> $$
> \begin{aligned}
> -\frac{1}{2\pi\text{i}}\oint_{C_1}\frac{f(\zeta)}{\zeta-z}\text{d}\zeta&=\frac{1}{2\pi\text{i}}\oint_{C_1}\frac{f(\zeta)}{(z-b)-(\zeta-b)}\text{d}(\zeta-b)\\
> &=\frac{1}{2\pi\text{i}}\oint_{C_1}\frac{f(\zeta)}{z-b}\sum_{k=0}^\infty\left(\frac{\zeta-b}{z-b}\right)^k\text{d}\zeta\\
> &=\sum_{k=0}^\infty(z-b)^{-k-1}\cdot\frac{1}{2\pi\text{i}}\oint_{C_1}f(\zeta)(\zeta-b)^k\text{d}\zeta
> \end{aligned}
> $$
> 现在看来上述两个结果加起来是和定理一样. 但是定理的区域是 $C_1$ 和 $C_2$ 之间的任意区域，我们发现积分的奇点只有 $b$，所以根据 Cauchy 定理，中间的路径是任意取的.
>
> 因此：
> $$
> f(z)=\sum_{n=-\infty}^\infty a_n(z-b)^n\,,\quad R_1<|z-b|<R_2\\
> a_n=\frac{1}{2\pi\text{i}}\oint_{C}\frac{f(\zeta)}{(\zeta-b)^{n+1}}\text{d}\zeta
> $$

几点说明：

* 条件可以放宽为 $f(z)$ 在区域内单值解析.
* 系数不是 Taylor 级数，既有正幂项，也有负幂项.
* 一般而言，$f(z)$ 在内圆 $C_1$ 中不解析；至于 $b$ 点，可以是解析点也可以是奇点. 若 $b$ 恰好是 $C_1$ 中的唯一奇点，则 $C_1$ 可以无限缩小，就是在 $b$ 邻域内的 Laurent 展开.
* Laurent 展开是唯一的.

唯一性的证明和 Taylor 展开类似. 因此只要找到一个区间中收敛到 $f(z)$ 的一个幂级数，就能够说这一定是 Laurent 级数.

求 Laurent 展开没有什么好方法，就是计算围道积分.

/Example/

> 求
> $$
> \frac{1}{z(z-1)}
> $$
> 在 $0<|z|<1$ 内和 $|z|>1$ 的展开.
>
> ---
>
> (1) $0<|z|<1$，
> $$
> -\frac{1}{z}\frac{1}{1-z}=-\frac{1}{z}\sum_{n=0}^\infty z^n=\sum_{n=0}^\infty(-1)z^{n-1}
> $$
> 同时要记住中心在哪里，比如这里如果在 $z=1$ 为中心展开就要提出 $1/(1-z)$.
>
> (2) $|z|>1$，实际上就是 $\infty$ 的邻域，对 $1/z$ 展开！
> $$
> \frac{1}{z^2}\frac{1}{1-\frac{1}{z}}=\frac{1}{z^2}\sum_{n=0}^\infty\left(\frac{1}{z}\right)^n=\sum_{n=-2}^{-\infty}z^n
> $$

/Example/

> 求 $\cot z$ 在 $z=0$ 邻域内的 Laurent 展开.
>
> ---
>
> 明显，下一个奇点是 $z=\pi$. 所以我们的环域是 $0\sim\pi$.
>
> 这里使用待定系数法 (注意：待定系数法就要求一定不能是 $-\infty\to\infty$ 的求和，因为这样的话完全无法定出任意一个系数)
>
> 那么 $\cot z$ 展开的“头”在哪里？因为 $\cos z$ 的 Laurent 展开就是 Taylor 展开，第一项再除以 $\sin z$ 的首项，最小是 $-1$ 次. 同时，$\cot z$ 是一个奇函数.
> $$
> \begin{aligned}
> \cot z&=\sum_{n=0}^\infty b_{2n-1}z^{2n-1}\\
> \cos z&=\sin z\sum_{n=0}^\infty b_{2n-1}z^{2n-1}
> \end{aligned}
> $$
> 有：
> $$
> \begin{aligned}
> \sum_{n=0}^\infty\frac{(-)^n}{(2n)!}z^{2n}&=\sum_{k=0}^\infty\sum_{l=0}^\infty\frac{(-)^k}{(2k+1)!}b_{2l-1}z^{2(k+l)}\\
> &=\sum_{n=0}^\infty\left[\sum_{k=0}^n\frac{(-)^k}{(2k+1)!}b_{2(n-k)-1}\right]z^{2n}
> \end{aligned}
> $$
> 对比系数，可以一项一项地写出来. 考试的时候一般会要求求前几项.
>
> ---
>
> 如果是在 $\pi<|z|<2\pi$ 区域内，怎么展开？
>
> 没有很好的办法了，只能使用系数公式.
>
> ---
>
> 更简便的方法？级数除法.
> $$
> \begin{aligned}
> \cot z&=\frac{1}{\tan z}=\frac{1}{z+\frac{1}{3}z^3+\frac{2}{15}z^5+\cdots}\\
> &=\frac{1}{z}\frac{1}{1+\frac{1}{3}z^2+\frac{2}{15}z^4+\cdots}\\
> &=\frac{1}{z}\Big[1-\left(\frac{1}{3}z^2+\frac{2}{15}z^4+\cdots\right)+\left(\frac{1}{3}z^2+\frac{2}{15}z^4+\cdots\right)^2\\
> &\quad-\left(\frac{1}{3}z^2+\frac{2}{15}z^4+\cdots\right)^3+\left(\frac{1}{3}z^2+\frac{2}{15}z^4+\cdots\right)^4\,\Big]\\
> &=\frac{1}{z}-\frac{1}{3}z-\frac{1}{45}z^3-\cdots
> \end{aligned}
> $$
> (其实 $\tan z$ 也可以这么算，就是这样展开 $1/\cos z$，再每一项乘上 $\sin z$ 的每一项就可以了)
>
> 注意：展开的“块”中绝对不能出现常数项，这样会导致中间的每一个系数都是无穷级数.

/Example/

> 求
> $$
> \exp\left\{\frac{z}{2}\left(t-\frac{1}{t}\right)\right\}
> $$
> 在 $0<|t|<\infty$ 内的 Laurent 展开.
>
> ---
>
> $$
> \begin{aligned}
> e^{zt/2}&=\sum_{k=0}^\infty\left(\frac{z}{2}\right)^k\frac{t^k}{k!}\,,\quad|t|<\infty\\
> e^{-zt/2}&=\sum_{l=0}^\infty\left(\frac{z}{2}\right)^l\frac{(-)^l}{l!}\left(\frac{1}{t}\right)^l\,,\quad\left|\frac{1}{t}\right|<\infty
> \end{aligned}
> $$
>
> 相乘，得到
> $$
> \exp\left\{\frac{z}{2}\left(t-\frac{1}{t}\right)\right\}=\sum_{n=-\infty}^\infty J_n(z)t^n
> $$
> 其中 $J_n(z)$ 是 $n$ 阶 Bessel 函数. (中间过程讲义上有懒得写了)

/Example/

> 求
> $$
> \ln\frac{z-2}{z-1}
> $$
> 在 $1<|z|<2$ 及 $2<|z|<\infty$ 内的幂级数展开.
>
> ---
>
> (1) 注意到 $z=1,2$ 是俩支点，所以中间有一条割线，这个环域内一定不可以解析.
>
> 那如果我强行展开呢？
> $$
> \begin{aligned}
> &\ln\frac{-2(1-\frac{z}{2})}{z(1-\frac{1}{z})}\\
> &=\ln(-2)+\ln\left(1-\frac{z}{2}\right)-\ln\left(1-\frac{1}{z}\right)-\ln z
> \end{aligned}
> $$
> $\ln z$ 肯定展开不了.
>
> (2) $2<|z|<\infty$ 时，单值解析，但是要规定单值分支. 规定割线上岸 $\arg(z-2)-\arg(z-1)=\pi$，则相当于规定 $\infty$ 处辐角为 $0$.
>
> 展开过程就是利用公式，在 $\infty$ 邻域展开：
> $$
> \ln\frac{z-2}{z-1}=\ln\left(1-\frac{2}{z}\right)-\ln\left(1-\frac{1}{z}\right)
> $$
> 用公式.
>
> 另一个方法是逐项积分，从 $\infty$ 积分到 $z$.
>
> /Remark/
>
> > 这样的多值函数更加复杂：
> > $$
> > \ln^{-1}\frac{1-z}{1+z}
> > $$
> > 这里的 "$-1$" 是取倒数. 这里规定辐角时，$\infty$ 的辐角应该是 $-\pi$，所以展开后应该是：
> > $$
> > \frac{1}{-\pi\text{i}+\ln(1-1/z)-\ln(1+1/z)}
> > $$
> > 再展开. 前面的辐角一定不能错，因为是否多出常数极大影响了后面级数的形式.

几个要点：

* 在 $\infty$ 展开就是展开 $1/z$.
* 除非 $z=0$ 邻域和 $z=\infty$ 邻域之间可以连续扩展，否则两个地方的展开一般是不相同的.

## 单值函数的孤立奇点

/Definition/

> $z=b$ 邻域内，$f(z)$ 处处可导，只有在 $z=b$ 点处为奇点.

三种级数展开可能出现的奇点情况：

* 不含负幂项，可去奇点 (可以取极限规定这个值)：比如 $\sin z/z$ 在 $z=0$ 处.
* 有限负幂项，极点.
* 无穷多个负幂项，本性奇点.

/Theorem/ (可去奇点)

> $z=b$ 是孤立奇点，同时函数 $f(z)$ 在 $z=b$ 邻域内有界.

/Proof/

> 只要证明负幂项为零即可.
> $$
> |a_n|=\left|\frac{1}{2\pi\text{i}}\oint_C\frac{f(z)}{(z-b)^{n+1}}\text{d}z\right|\leq\frac{M}{\rho^n}
> $$
> ($|z-b|=\rho$)，令 $\rho\to0$，知道负幂项全部为零.

极点：有限负幂项，展开为 $f(z)=(z-b)^{-m}\varphi(z)$，为 $m$ 阶极点.

可以发现，倒函数的 $m$ 阶零点对应 $m$ 阶极点. 这使得我们讨论的方式变得比较简单.

/Theorem/ (极点)

> 函数在极点的极限是 $\infty$. 反之，若 $\underset{z\to b}{\lim}f(z)=\infty$，则此点为极点.

相对应地，本性奇点的极限完全不存在，也就是不同的趋近方式，可以得到任何复数值.

/Theorem/

> 对于本性奇点 $z=b$，对于任何给定的复数 $A$ (有限或者 $\infty$)，总可以找到一个序列使得极限趋于 $A$.