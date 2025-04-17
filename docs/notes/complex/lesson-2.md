---
title: Lesson 2 解析函数
permalink: /complex/lesson-2/
createTime: 2025/4/17 11:28:32
---
上节课讲完了复数的定义.

/Theorem/

> Euler 公式：
> $$
> e^{\text{i}\theta}=\cos\theta+\text{i}\sin\theta
> $$

事实上，LHS 还并没有定义，我们这里的写法是根据导数来定义 $e^{\text{i}\theta}$ 的. 我们已经知道，
$$
e^x=\sum_{k=0}^\infty\frac{x^k}{k!}
$$
Euler 认为这个式子在自变量为纯虚数时也成立，也就得到
$$
e^{\text{i}\theta}=\sum_{n=0}^\infty\frac{(-1)^{n}\theta^{2n}}{(2n)!}+\text{i}\sum_{n=0}^\infty\frac{(-1)^n\theta^{2n+1}}{(2n+1)!}
$$
Euler 还有很多有意思的成果，比如我们知道 $\sin x$ 的零点是 $n\pi$，因此他写出
$$
\sin x=x\prod_{n=1}^\infty\left[1-\left(\frac{x}{n\pi}\right)^2\right]
$$
如果我们用这个方法计算 $x$ 的三次项，就会得到著名的那个 $\pi^2/6$ 的公式 (虽然这显然不严谨，但是那个时代数学并没有这么严谨的体系).

我们也可以写 $e^A$，其中 $A$ 为矩阵，那么此式也等于所谓的展开式：
$$
e^A=\sum_{k=0}^\infty\frac{A^k}{k!}
$$
若 $A$ 可以对角化，整个式子就变得非常简单，$e^A=Pe^DP^{-1}$.

---

回到我们的复数，Euler 公式能够让我们化简乘法和除法：
$$
\alpha_1\cdot\alpha_2=r_1r_2e^{\text{i}(\theta_1+\theta_2)}\,,\quad\frac{\alpha_1}{\alpha_2}=\frac{r_1}{r_2}e^{\text{i}(\theta_1-\theta_2)}
$$
还有，比如我们的 $n$ 倍角公式，有
$$
e^{\text{i}n\theta}=(\cos\theta+\text{i}\sin\theta)^n
$$
最后是一个二项式展开；反过来，如果要计算 $\cos^n\theta$，也可以写作
$$
\cos^n\theta=\left(\frac{e^{\text{i}\theta}+e^{-\text{i}\theta}}{2}\right)^n
$$
仍然是二项式展开.

## 复数序列

/Definition/

> 按照一定顺序排列的复数 $\{z_n=x_n+\text{i}y_n\}$ 为复数序列. (实际上相当于两个实数序列……)

/Definition/ (聚点)

> 给定序列 $\{z_n\}$，若存在复数 $z$，对于任意给定的 $\varepsilon>0$，都有 无穷多个 $z_n$ 满足 $|z_n-z|<\varepsilon$，则 $z$ 为这个序列的聚点.
>
> 实变中的定义完全相同，只是“模长”改为“绝对值”.

一个序列可以有不止一个聚点 (比如交错级数)，实数序列的最大聚点为上极限、最小为下极限，但是复数序列没有这个概念 (不能比较大小).

/Definition/ (有界序列和无界序列)

> 如果存在 $M>0$，使得对于所有 $n$，都有 $|z_n|<M$，则序列称为有界的.

/Theorem/ (Bolzano - Weierstrass 定理)

> 一个有界的无穷序列至少有一个聚点.
>
> 1. 无界序列不排除在有限远处有聚点；
>
> 2. **无穷远点** 可以认为是无界序列的一个聚点
>
>    这个说法是有上下文背景的，我们扩充了聚点的意义. 对于无界序列，我们总有无穷多个 $|z_n|>M$，因此所谓的 $\infty$ 点处有无穷多个点. 当然这不符合正常的定义.
>
>    /Definition/ (无穷远点)
>
>    > 无穷远点的辐角不定，模大于任何正数，在复平面上，以任意方式远离原点，即可以到达无穷远点，包括无穷远点的复平面又称为扩充了的复平面 (实际上是 $S^2$，不再与之前的复平面同胚).
>    >
>    > 为了描述扩充复平面，可以引入一个半径任意的球，复平面切该球面于南极点 $\text{N}$，复平面上的一点与球面的北极点 $\text{P}$ 相连，与球面的交点就是复平面上该点的像——但是球面上多了一个北极点，因此和之前的复平面不同了.

/Definition/ (极限)

> 给定序列 $\{z_n\}$，如果存在 $z$，使得 $\forall\varepsilon>0$，$\exist N(\varepsilon)\in\N$，使得当 $n>N(\varepsilon)$ 时，恒有 $|z_n-z|<\varepsilon$，则称 $z$ 是这个序列的极限.

/Theorem/ (Cauchy 充要条件)

> 存在极限 $\Longleftrightarrow$ $|z_{N+p}-z_N|<\varepsilon$ ($\varepsilon$ 任意小)

至此我们能够开始定义邻域：

/Definition/

> **邻域**：$|z_0-z|<\rho$ 定义为复平面上的一点 $z_0$ 的一个邻域 (圆域)，其中 $\rho>0$ 为任意常数. 有时会用去心邻域，这时要求 $0<|z-z_0|<\rho$，但一般不会特别说明.
>
> **点集的内点**：该点的一个邻域包含在点集当中.
>
> **区域** (具有道路连通性的开集)：满足如下两个条件的点集.
>
> 1. 所有的点都是内点；
> 2. 有道路连通性.
>
> 简单的区域可以用不等式表示.
>
> **区域的边界点和边界**：边界点不属于区域，但是其任意邻域中均有属于区域的点. 边界点的全体称为边界.
>
> **闭区域**：区域 $\cup$ 边界.
>
> **区域的边界方向**：==沿着边界走，区域保持在左方，则走向称为边界的正向==.
>
> ::: tip
>
> 不一定是逆时针，因为有时候边界在里面.
>
> :::

/Definition/ (复变函数的一个 **不确切** 定义)

> 复平面上一个区域 $G$，如果对于每一个 $G$ 中的 $z$ 值，都有一个或多个复数值 $w$ 与之对应，则称 $w$ 为 $z$ 的函数 —— 复变函数，记为 $w=f(z)$，定义域为 $G$.

暂时我们接受这个定义. 但是显然这个定义有点问题，对应多个复数值显然不能叫做“函数”.

显然，$w=f(z)=u(x,y)+\text{i}v(x,y)$. 所以一个复变函数只不过是两个二元实变函数的有序组合.

/Definition/ (复变函数的极限)

> 函数在 $z_0$ 的去心邻域内有定义，若存在复数 $A$，$\forall\varepsilon>0$，$\exist\delta(\varepsilon)>0$ 使得当 $|z-z_0|<\delta$ 时，恒有 $|f(z)-A|<\varepsilon$ 成立，则称 $z\to z_0$ 时 $f(z)$ 的极限存在，且表示为
> $$
> \lim_{z\to z_0}f(z)=A
> $$

这个要求实际上非常高，因为根本没有指明趋于 $z_0$ 的方式.

/Theorem/

> 函数在趋区域 $G$ 中的每一点都连续，称为在 $G$ 内部连续. 在闭区域 $\bar{G}$ 中连续的函数有两个重要性质：
>
> 1. $|f(z)|$ 在 $\bar{G}$ 中有界，并达到它的上下界；
> 2. $f(z)$ 在 $\bar{G}$ 中一致连续，也即 $\delta(\varepsilon)$ 与 $z$ 无关，只要 $|z_1-z_2|<\delta(\varepsilon)$，就有 $|f(z_1)-f(z_2)|<\varepsilon$.

/Definition/

> 设 $w=f(z)$ 是区域 $G$ 内的单值函数，如果在 $G$ 内部某点 $z$ 有
> $$
> \lim_{\Delta z\to0}\frac{f(z+\Delta z)-f(z)}{\Delta z}
> $$
> 存在，这个就是导数.
>
> 导数记为 $\frac{\text{d}w}{\text{d}z}$，或者 $f'(z)$，和实变函数中一样，可以照搬.
>
> ::: tip
>
> 导数存在，意味着 $\Delta w/\Delta z$ 在 $z$ 以不同方式趋近某个值的时候，这个导数值必须相同，这是必要条件.
>
> 一个例子是：$f(z)=f(x+\text{i}y)=\sqrt{x^2+y^2}$. 在 $z=1$ 点处有
> $$
> x\text{ - axis: }f'(z)=1\,,\quad y\text{ - axis: }f'(z)=0
> $$
> 两者不相等. 事实上这个函数处处不可导.
>
> :::

我们现在来研究可导的必要条件.

考虑 $w=u(x,y)+\text{i}v(x,y)$，考虑 $\Delta y=0$、$\Delta x=0$ 两种趋近方式：
$$
\begin{aligned}
\frac{\Delta w}{\Delta z}&=\frac{\Delta u+\text{i}\Delta v}{\Delta x}=\frac{\partial u}{\partial x}+\text{i}\frac{\partial v}{\partial x}\\
\frac{\Delta w}{\Delta z}&=\frac{\Delta u+\text{i}\Delta v}{\text{i}\Delta y}=\frac{\partial v}{\partial y}-\text{i}\frac{\partial u}{\partial y}
\end{aligned}
$$
因此：

/Theorem/ (Cauchy - Riemann 条件)

> $$
> \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\,,\quad\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
> $$

上面是必要条件.

处处连续、处处不可导的函数 (Weierstrass 函数)：
$$
f(x)=\sum_{n=0}^\infty a^n\cos(b^n\pi x)
$$
在 $b$ 为正奇数、$0<a<1$、$ab>1+\frac{3}{2}\pi$ 时，上述函数是一个分形曲线.

/Claim/

> 我们可以把 $x,y$ 用 $z,z^*$ 表示 (认为 $z,z^*$ 互相独立，这在量子场论中非常常用，比如认为某一个场和自己的共轭互相独立，然后计算偏导数)，则 Cauchy - Riemann 条件能够写成：
> $$
> \frac{\partial w}{\partial z^*}=0
> $$
> 也就是说，$w$ 中不含有 $z^*$ 的成分，这也是我们在解析函数中能够照搬实变函数的大量概念的原因，因为“复数”的独有性质没有在这里体现出来.

/Proof/

> 简单利用偏导数的性质：
> $$
> \frac{\partial w}{\partial z^*}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial x^*}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial z^*}=\cdots
> $$
> 就能证明.

这个命题可以帮我们找到很多连续不可导的函数，还可以简单判断一些函数是否解析.

/Definition/

> 在区域 $G$ 内每一点可导的函数，称为解析函数.
>
> ::: warning
>
> 这个定义和高等微积分中“每一点都有无穷阶导数”的定义是等价的！这就是复变函数优秀的性质的一种体现.
>
> :::

因为 Cauchy - Riemann 方程的限制，解析函数的实部和虚部不是相互独立的. 比如从一个 $u(x,y)$ (实部) 确定虚部：
$$
\int^{(x,y)}\left[-\frac{\partial u}{\partial y}\text{d}x+\frac{\partial u}{\partial x}\text{d}y\right]
$$
/Example/

> 已知 $u(x,y)=x^2-y^2$，求 $f(z)$.
> $$
> \begin{aligned}
> \text{d}v=-\frac{\partial u}{\partial y}\text{d}x+\frac{\partial u}{\partial x}\text{d}y=2y\text{d}x+2x\text{d}y
> \end{aligned}
> $$
> 其实早就已经能够看出积分结果是 $2xy+C$. 但是如果无法看出，就要沿着路径进行积分 (因为全微分是与路径无关的，因此可以选一个好的路径进行积分).
>
> 最后得结果：
> $$
> f(z)=(x^2-y^2)+\text{i}(2xy+C)=z^2+\text{i}C
> $$
>
> ---
>
> 实际上还有第二种方法 —— 不使用微积分.
>
> 我们知道 $u=(w+w^*)/2$，因此
> $$
> \frac{w+w^*}{2}=u=x^2-y^2=\left(\frac{z+z^*}{2}\right)^2-\left(\frac{z-z^*}{2\text{i}}\right)^2=\frac{z^2}{2}
> $$
> 而解析函数中不含有 $w^*$，所以直接得到 $z^2$，但是要记住加上常数.

/Claim/

> 如果我们在平面上作曲线族 $u(x,y)=\text{const}$ 和 $v(x,y)=\text{const}$，则它们处处正交.

/Proof/

> 两个切矢量分别是：
> $$
> \left(\frac{\partial u}{\partial y},-\frac{\partial u}{\partial x}\right)\,,\quad\left(-\frac{\partial v}{\partial y},-\frac{\partial v}{\partial x}\right)
> $$
> 两者正交.

相应地，我们可以利用这个性质，用复变函数来描述电场 & 等势面、流场等等. 例如：二维的点电荷电场就是 $w=\ln z$.

---

任意二元函数都可以作解析函数的实部和虚部？

> 调和函数！我们下节课讲这些内容.