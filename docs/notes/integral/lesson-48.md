---
title: Lesson 48 隐函数定理的应用
permalink: /integral/lesson-48/
createTime: 2025/4/23 15:51:29
---
## 隐函数定理的应用

可以确定几何物体的切空间.

/Theorem/ (切空间)

> 设：
> $$
> M=\left\{(x_1,\cdots,x_n)\in\R^n\left|\begin{array}{}
>  g_1(x_1,\cdots,x_n)=0\\
>  \cdots\\
>  g_k(x_1,\cdots,x_n)=0
>  \end{array}\right.\right\}
> $$
> (是 $k$ 个方程的公共零点集)，其中 $k\leq n$.
>
> 设 $\vec{a}\in M$，且 $\vec{a}$ 是 $M$ 的光滑点 (即 $[\partial_jF_i(\vec{a})]_{1\leq i\leq k,1\leq j\leq n}$ 满秩 $\Longleftrightarrow$ $rk=k$ $\Longleftrightarrow$ $\exist k\times k$ 子阵可逆)
>
> 则 $M$ 在 $\vec{a}$ 处的切空间 (tangent space) 为：
> $$
> \text{T}_{\vec{a}}M=\left(\text{span}\{\nabla F_1(\vec{a}),\cdots,\nabla F_k(\vec{a})\}\right)^\perp
> $$
> 且满秩要求 $k$ 个行向量线性无关，因此上述 $\text{span}\{\nabla F_1(\vec{a}),\cdots,\nabla F_k(\vec{a})\}$ 的维数是 $k$，所以切空间维数为 $\dim\text{T}_{\vec{a}}M=n-k$.

/Definition/ (曲面的切平面)

> $M\subseteq\R^3$ 是曲面，对于 $\vec{a}\in M$，称 $\vec{a}$ 处的 $\text{T}_{\vec{a}}M$ 为 $M$ 在 $\vec{a}$ 处的切平面.
>
> /Remark/
>
> > 一般而言我们画切空间的时候会把这个切空间的几个基矢量画在原点处，但是画切平面的时候一般直接画在 $\vec{a}$ 点处. 这并没有实质的差别，只是相差一个平移而已.
>
> 由上述定理，我们知道切平面 $\text{T}_{\vec{a}}M=(\text{span}\{\nabla F(\vec{a})\})^\perp$.
>
> 切平面方程：(if $\vec{a}=(a_1,a_2,a_3)$)
>
> $(x,y,z)\in M$ 在 $\vec{a}$ 处的切平面 $\Longleftrightarrow$ $(x,y,z)\in\vec{a}+\text{T}_{\vec{a}}M$
>
> $\Longleftrightarrow$ $(x,y,z)-(a_1,a_2,a_3)\in\text{T}_{\vec{a}}M=(\text{span}\{\nabla F(\vec{a})\})^\perp$
>
> $\Longleftrightarrow$ $((x,y,z)-(a_1,a_2,a_3))\cdot\nabla F(\vec{a})=0$ 为切平面方程. 也可以写成偏导数形式：
> $$
> \sum_{k=1}^3\frac{\partial F}{\partial x_k}(x_k-a_k)=0
> $$

/Remark/

> 前述的切空间，在证明 Lagrange 乘子法的时候是一种重要的几何看法.

## 隐函数的求导

隐函数最难的部分不是进行计算，而是证明隐函数的存在性和光滑性 (因为和反函数存在性和光滑性相关). 但是若已经建立了隐函数的存在性和光滑性，那么计算求导就是容易的 $\Longrightarrow$ 恒等式求导.

/Example/

> $$
> \left\{\begin{array}{lr}
> F(x,y,z)=0\\\\
> G(x,y,z)=0
> \end{array}\right.
> $$
>
> 已知 $(x_0,y_0,z_0)$ 是公共解.
>
> 我们希望能够在 $(x_0,y_0,z_0)$ 附近，利用上面两个方程将一些变元表示为隐函数.
>
> 由隐函数定理，若：
> $$
> \det\begin{pmatrix}
> F_x(x_0,y_0,z_0)&F_z(x_0,y_0,z_0)\\
> G_x(x_0,y_0,z_0)&G_z(x_0,y_0,z_0)
> \end{pmatrix}\neq0
> $$
> 则在 $(x_0,y_0,z_0)$ 附近，可将 $x,z$ 表示为 $y$ 的隐函数 $x=x(y)$，$z=z(y)$. 求：
> $$
> x'(y)=\frac{\text{d}x}{\text{d}y}\,,\quad z'(y)=\frac{\text{d}z}{\text{d}y}
> $$
>
> ---
>
> 我们知道恒等式：
> $$
> \left\{\begin{array}{lr}
> F(x(y),y,z(y))=0\\\\
> G(x(y),y,z(y))=0
> \end{array}\right.
> $$
> 在 $\forall y\in y_0$ 的某个邻域中. 对 $y$ 进行恒等式求导，得到
> $$
> \left\{\begin{array}{lr}
> 0=F_x\cdot x'(y)+F_y\cdot1+F_z\cdot z'(y)\\\\
> 0=G_x\cdot x'(y)+G_y\cdot1+G_z\cdot z'(y)
> \end{array}\right.\Longrightarrow\begin{pmatrix}
> F_x&F_z\\G_x&G_z
> \end{pmatrix}\begin{pmatrix}
> x'(y)\\z'(y)
> \end{pmatrix}=\begin{pmatrix}
> -F_y\\-G_y
> \end{pmatrix}
> $$
> 这个方程只需要求矩阵的逆即可得到结果：
> $$
> \begin{pmatrix}
> x'(y)\\z'(y)
> \end{pmatrix}=\frac{1}{\det A}\begin{pmatrix}
> G_z&-F_z\\-G_x&F_x
> \end{pmatrix}\begin{pmatrix}
> -F_y\\-G_y
> \end{pmatrix}
> $$
> 其中 $\det A$ 是方程系数矩阵的行列式，也就是 $F_xG_z-F_zG_x$.

## 多元微分学的应用：最值问题

求解最值问题有两个部分：

1. 最值的存在性：用最值定理；
2. 用变分法去确定最值点.

联系一元微分学中的最值问题，我们学过 Fermat 定理：若 $x_0$ 是可导函数 $f$ 的极值点，则 $f'(x_0)=0$.

/Definition/ (极值点)

> “极值点 $\longleftrightarrow$ 局部最值点”
>
> 设 $f:D\to\R$，$D\subseteq\R^n$. 称 $x_0$ 是 $f$ 的极小值点，如果 $\exist x_0$ 的 (开球) 邻域 $U$ ($U\subseteq D$) 使得 $\forall x\in U$ 有 $f(x)\geq f(x_0)$ (即 $x_0$ 是 $f$ 在 $U$ 中的最小值点).

/Definition/ (临界点)

> 称 $x_0$ 是 $f$ 的临界点 (critical point)，如果：
> $$
> \frac{\partial f}{\partial x_1}(\vec{x}_0)=\cdots=\frac{\partial f}{\partial x_n}(\vec{x}_0)=0
> $$

/Theorem/ (Fermat 定理)

> 设 $f$ 在 $x_0$ 处有方向导数 / 偏导数，若 $x_0$ 是 $f$ 的极值点，则 $x_0$ 是 $f$ 的 critical point.

/Proof/

> /Method/ (1) (仿照一元情况)
>
> > $$
> > \begin{aligned}
> > \frac{\partial f}{\partial\vec{v}}(\vec{x}_0)&=\lim_{t\to0}\frac{f(\vec{x}_0+\vec{v}t)-f(\vec{x}_0)}{t}
> > \end{aligned}
> > $$
> >
> > 如果这个极限存在，则上下极限均存在，因此考虑 $t\to0+$，这时 $t$ 足够小，$\vec{x}_0+\vec{v}t\in U$，有 $f(\vec{x}_0+\vec{v}t)\geq f(\vec{x}_0)$，得到导数 $\geq0$.
> >
> > 同理，对于下极限，得到导数 $\leq0$. 故导数 $=0$.
> >
> > 取 $\vec{v}=\hat{e}_k$，得到任意方向的偏导数都是 $0$.
>
> /Method/ (2)
>
> > 将 $f$ 限制在 path 上：令 $g(t)=f(\vec{x}_0+\vec{v}t)=f\circ p(t)$，其中 $p(t):(-\varepsilon,\varepsilon)\to D$ (path)，$p(t)=\vec{x}_0+\vec{v}t$.
> >
> > 令 $V=p^{-1}[U]$，则 $V$ 是 $0$ 在 $\R$ 中的开邻域. 由条件知，$0$ 是 $g$ 在 $V$ 中的最小值点 $\Longrightarrow$ $0$ 是 $g$ 的极小值点 $\Longrightarrow$ (一元 Fermat 定理) 得到
> > $$
> > 0=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}g(t)=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(\vec{x}_0+\vec{v}t)=\frac{\partial f}{\partial\vec{v}}(\vec{x}_0)
> > $$
> > 证毕.

下面来看几个多元函数最值的例子.

/Example/

> 证明：$\Delta ABC$ 中，$\sin A\sin B\sin C\leq\left(\sin\frac{\pi}{3}\right)^3$.
>
> /Method/ (1) (用凸性 & Jensen 不等式)
>
> > 先取一个 $\ln$ 化为加法，然后要证明的等价形式：
> > $$
> > \frac{\ln\sin A+\ln\sin B+\ln\sin C}{3}\leq\ln\sin\frac{A+B+C}{3}
> > $$
> > 令 $f(x)=\ln\sin x$ ($0<x<\pi$).
> >
> > 而 $f$ 在 $(0,\pi)$ 上是上凸的 ($\Longleftrightarrow$ $f''(x)\leq0$，$\forall x\in(0,\pi)$). 这样可以用 Jenson 不等式，得到：
> > $$
> > \frac{f(A)+f(B)+f(C)}{3}\leq f\left(\frac{A+B+C}{3}\right)
> > $$
> > 证毕. 这个方法是我们上学期就会使用的.
>
> /Method/ (2)
>
> > $C=\pi-A-B$，来证明：
> > $$
> > \sin A\sin B\sin(\pi-A-B)\leq\left(\frac{\sqrt3}{2}\right)^3
> > $$
> > $\forall A,B\geq0$，$A+B\leq\pi$ (不等式条件保证了 $D$ 为闭集).
> >
> > 为此，令 $D=\{(x,y)|x,y\geq0,x+y\leq\pi\}$，显然 $D$ 是 $\R^2$ 的有界闭集，$f(x,y)=\sin x\sin y\sin(x+y)$.
> >
> > $\Longrightarrow$ (最值定理) $f$ 在 $D$ 上有最大值点 $(x_0,y_0)$. 我们现在来看 $(x_0,y_0)$ 的候选点：
> >
> > 1. 若 $(x_0,y_0)\in\partial D$ ($D$ 的边界). 考虑这种情况是为了在 $D$ 的内部应用 Fermat 定理，须排除在边界上的可能性.
> >
> >    补充定义：
> >
> >    /Definition/ (内部 & 边界)
> >
> >    > 内部：
> >    > $$
> >    > \overset{\circ}{D}=\{\vec{a}|\exist B_r(\vec{a})\subseteq D\}
> >    > $$
> >    > (也就是 $D$ 内点的集合)
> >    >
> >    > 边界：$\partial D=D-\overset{\circ}{D}$.
> >
> >    这时 $x_0=0$ or $y_0=0$ or $x_0+y_0=\pi$，这些值都不是最大的.
> >
> > 2. 若 $(x_0,y_0)\in\overset{\circ}{D}$.
> >
> >    由 Fermat 定理，得到 $(x_0,y_0)$ 应该是 critical point，所以有方程：
> >    $$
> >    \begin{aligned}
> >    0&=\frac{\partial f}{\partial x}=\sin y\sin(2x+y)\\
> >    0&=\frac{\partial f}{\partial y}=\sin x\sin(x+2y)
> >    \end{aligned}
> >    $$
> >    而 $x_0,y_0\neq0$，所以 $\sin(2x_0+y_0)=\sin(x_0+2y_0)=0$. 而：
> >    $$
> >    0<2x_0+y_0,x_0+2y_0<2(x_0+y_0)\leq2\pi
> >    $$
> >    于是只能有 $x_0=y_0=\pi/3$，找到了最大值点.
> >
> > 这一种证明方法更为朴素和冗长，但是好处是更加容易思考.

/Example/ (Gauss 的最小二乘法)

> 设 $x,y$ 两个变量，理论上我们已经知道 $y$ 对 $x$ 有依赖关系 $y=f(x;\alpha_1,\cdots,\alpha_m)$ ($\alpha_1$ 等是参数).
>
> 现在有实验数据：$(x_1,y_1),\cdots,(x_n,y_n)$ (当 $x=x_i$ 时测量 $y=y_i$). 不妨假设 $x_1\sim x_n$ 互异 (因为可以在同一个 $x_i$ 处测量几个不同的 $y$，然后取平均).
>
> 问：如何从数据中最佳拟合出 $\alpha_1\sim\alpha_m$？
>
> ::: tip
>
> 当年，意大利的天文学家观测到了一颗小行星，测量了大量的数据. 过了一段时间，小行星离开了视场，法兰西科学院设立了一个大奖赛，悬赏预测小行星再次出现的位置和时间. Gauss 凭借自己发明的最小二乘法得到了冠军.
>
> 这颗星体就是著名的谷神星.
>
> :::
>
> ---
>
> 最佳拟合 $\longleftrightarrow$ 理论公式与实际结果误差最小. 误差可以表示为：
> $$
> E(\alpha_1,\cdots,\alpha_m)=\sum_{i=1}^n(f(x_i;\alpha_1,\cdots,\alpha_m)-y_i)^2
> $$
> (不用绝对值的原因是绝对值函数的光滑性不好). 因此，整个问题转化为一个最值问题，也就是要求 $\min E$ 的条件.
>
> 因为对于一般的 $f$，计算量将非常庞大，因此我们在课堂上只了解“线性最小二乘法”，即 $y=f(x;\alpha,\beta)=\alpha x+\beta$. 这时，error 变为：
> $$
> E(\alpha,\beta)=\sum_{i=1}^n(\alpha x_i+\beta-y_i)^2
> $$
>
> 1. 第一步就比想象中复杂，因为 $\alpha,\beta$ 是完全自由的，而 $\R^2$ 并非紧致，所以我们无法直接应用最值定理.
>
>    (1) 我们之前用过这个方法，可以证明 $\underset{\alpha^2+\beta^2\to+\infty}{\lim}E(\alpha,\beta)=+\infty$，以此来剥夺最远处的点竞争最小值点的权利.
>
>    留作练习.
>
>    (2) 先求出极值点 $\underset{\text{Fermat}}{\subseteq}\text{Crit}E$ ($E$ 的临界点集). 临界点方程是：
>    $$
>    \left\{\begin{aligned}
>    0&=\frac{\partial E}{\partial\alpha}=\sum_{i=1}^n2(\alpha x_i+\beta-y_i)x_i\\
>    0&=\frac{\partial E}{\partial\beta}=\sum_{i=1}^n2(\alpha x_i+\beta-y_i)
>    \end{aligned}\right.
>    $$
>    也就是：
>    $$
>    \begin{pmatrix}
>    \sum x_i^2&\sum x_i\\\sum x_i&n
>    \end{pmatrix}\begin{pmatrix}
>    \alpha\\\beta
>    \end{pmatrix}=\begin{pmatrix}
>    \sum x_iy_i\\\sum y_i
>    \end{pmatrix}
>    $$
>    系数矩阵的行列式：
>    $$
>    \det=n\sum x_i^2-\left(\sum x_i\right)^2\geq0
>    $$
>    (Cauchy - Schwartz 不等式，仅在 $(x_1,\cdots,x_n)\parallel(1,\cdots,1)$ 时取等). 已经设 $\{x_i\}$ 互异，所以不会取等，于是系数矩阵可逆，$E$ 有唯一的 critical point.
>
> 2. 直接证明 $E(\alpha,\beta)\geq E(\alpha_0,\beta_0)$ (因为我们已经知道它是 critical point，再证明极值点存在并不简单，还不如从定义出发)
>
>    Taylor 展开：
>    $$
>    \begin{aligned}
>    E(\alpha,\beta)&=E(\alpha_0,\beta_0)+0+\frac{1}{2}\begin{pmatrix}
>    \alpha-\alpha_0&\beta-\beta_0
>    \end{pmatrix}H_E\begin{pmatrix}
>    \alpha-\alpha_0\\\beta-\beta_0
>    \end{pmatrix}\\\\
>    &=E(\alpha_0,\beta_0)+\frac{1}{2}\begin{pmatrix}
>    \alpha-\alpha_0&\beta-\beta_0
>    \end{pmatrix}\begin{pmatrix}
>    2\sum x_i^2&2\sum x_i\\
>    2\sum x_i&2n
>    \end{pmatrix}\begin{pmatrix}
>    \alpha-\alpha_0\\\beta-\beta_0
>    \end{pmatrix}\\\\
>    &\geq E(\alpha_0,\beta_0)
>    \end{aligned}
>    $$
>    (一次项为零，二次项可以用 Hessian 矩阵写成二次型，Hessian 矩阵是正定矩阵)
>
> 证毕.