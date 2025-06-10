---
title: Lesson 55 第一型曲线 & 曲面积分
permalink: /integral/lesson-55/
createTime: 2025/6/10 22:54:21
---
::: warning

于期末复习期间看网课补完.

:::

## 第一型曲线积分

我们从物理的观点来考虑，其实是算一个曲线的 “质量”. 我们前一节课提到了参数化，现在我们作出定义：

/Definition/

> 设 $L\subseteq\R^n$ 是曲线，
>
> ::: details 曲线定义
>
> > 我们还没有定义曲线！这里开个小差，定义一下曲线：
> >
> > /Definition/
> >
> > > (1) 第一个办法是从 topology 来定义：称拓扑空间 $L$ 是一条曲线，若 $\forall p\in L$，$\exist p$ 在 $L$ 中的一个开邻域 $U$，使得 $U$ 同胚于 $\R^1$.
> > >
> > > 我们之前说过同胚的概念：称 $f:X\to Y$ 是同胚，若 $f$ 是双射且 $f,f^{-1}$ 连续 (连续曲线).
> > >
> > > 当然如果 $f,f^{-1}$ 都是 $C^1$ 的，就会得到 $C^1$ 光滑曲线.
> > >
> > > (2) 另一个方式是几何上的：有同学会觉得隐函数定理没有用，那么作用就体现在这里.
> > >
> > > 称 $L\in\R^3$ 是一条 $C^1$ 光滑曲线，如果 $\forall p\in L$，$\exist p$ 在 $\R^3$ 中的开邻域 $V$ 以及 $C^1$ 函数 $F,G:V\to\R$，使得：
> > > $$
> > > \begin{aligned}
> > > &L\cap V\\\\
> > > &=\left\{(x,y,z)\left|\begin{array}{}
> > > F(x,y,z)\\
> > > G(x,y,z)
> > > \end{array}\right.\wedge\begin{pmatrix}
> > > F_x&F_y&F_z\\
> > > G_x&G_y&G_z
> > > \end{pmatrix}\text{ full rank}\right\}
> > > \end{aligned}
> > > $$
> > > 由隐函数定理，不妨设：
> > > $$
> > > \det\begin{pmatrix}
> > > F_x&F_y\\G_x&G_y
> > > \end{pmatrix}\neq0
> > > $$
> > > 则隐函数定理说 $p$ 附近可以将 $x,y$ 表示为 $z$ 的隐函数，也就是 $S\cap V$ 同胚于 $U$，也就是同胚于 $\R^1$.
> >
> > 上述定义并不简单，所以我们在课程中一般不严格写曲线定义，而是在看到一个曲线的时候，我们知道这是曲线.
>
> :::
>
> 所谓 $L$ 的一个 $C^1$ 光滑参数化是指 $C^1$ 光滑映射 $\gamma:[a,b]\to L$ 满足：
>
> 1. $\gamma$ 是满射；
> 2. $\gamma$ 几乎是单射，唯一不是单射的位置是 “转一圈回来的重合点”，也就是若 $\gamma(t_1)=\gamma(t_2)$，则或 $t_1=t_2$，或 $\{t_1,t_2\}=\{a,b\}$；
> 3. $\gamma'(t)\neq0$ (速度不为零)，$\forall t$.

/Definition/

> 设 $f:L\to\R$ (权重函数).
>
> > 物理中，路径 = (路程) $\times$ (时间)
>
> 定义 $f$ 在 $L$ 上的第一型曲线积分为：
>
> 选定一个 $L$ 的 $C^1$ 光滑参数化 $\gamma:[a,b]\to L$，积分：
> $$
> \int_Lf=\int_a^bf(\gamma(t))|\gamma'(t)|\text{d}t
> $$
> $f(\gamma(t))$ 是权重，$|\gamma'(t)|$ 是速度，$\text{d}t$ 是时间微元. 另一种写法是
> $$
> \int_Lf\text{d}l=\int_Lf\text{d}s=\int_a^bf(\gamma(t))|\gamma'(t)|\text{d}t
> $$
> 这里 $\text{d}l$ 一般表示长度微元，$\text{d}s$ 一般表示弧长微元.

到这里为止，我们得到的结果已经可以用 Riemann 积分来计算，所以第一型曲线积分实际上已经讲完了.

但是我们想知道，为什么这个结果和参数化是无关的？下面来验证不同参数化给出同样的结果，这保证了我们的定义是好的.

为此，对定义式进行改写：
$$
\begin{aligned}
\int_Lf\text{d}l&=\int_a^bf(\gamma(t))|(x'(t),y'(t),z'(t))|\text{d}t\\\\
&=\int_a^bf(\gamma(t))|J_\gamma(t)|\text{d}t
\end{aligned}
$$
这里的所谓 Jacobian 是一个 $1\times3$ 的矩阵，但是这不是一个好的描述，因为矩阵没有 “模长” 的概念，所以我们只是提到这一概念而已.

严格来说，这应该是速度矢量生成的平行体的 length：
$$
|\vec{v}|=\sqrt{\det(\text{Gram matrix})}=\sqrt{\det(\vec{v}^T\vec{v})}
$$
于是上面的定义式写成
$$
=\int_a^bf(\gamma(t))\sqrt{\det(J_\gamma^TJ_\gamma)}\text{d}t
$$
这时候有同学要嘲笑，为什么在这么简单的情况下还要这样写？实际上是因为这种写法可以拓展，甚至在计算高维子流形的积分时还是可以这样写.

现在要验证参数化不影响结果，所以考虑两种不同参数化 $\gamma$ 和 $\delta$，坐标分别是 $t$ 和 $s$，曲线分别被描述为 $\gamma(t)$ 和 $\delta(s)$. 为了追踪 $\gamma(t)$，我们将 $\delta(s)$ 写成 $\delta(\alpha(s))$. 于是这两种变换相差一个 map $\alpha$.

因此，总是存在 $C^1$ 的 $\alpha:[a,b]\to[c,d]$，使得 $\gamma=\delta\circ\alpha$ (任何两个参数化之间，相差一个时间区间上的转化关系).

当然，取方向不同，可能会导致符号差异，所以为了方便叙述，我们下面假设 $\alpha$ 是单调递增的映射，这保证了 $a\to c$，$b\to d$.

现在，原来的积分式化为
$$
\begin{aligned}
\int_a^bf(\gamma(t))\sqrt{\det(J_\gamma^TJ_\gamma)}\text{d}t&=\int_c^df(\delta(s))\sqrt{\det(J_\delta^TJ_\delta)}\text{d}s
\end{aligned}
$$
这是因为：
$$
J_\gamma=J_\delta J_\alpha=J_\delta\cdot\alpha'
$$
所以 $J_\gamma^TJ_\gamma=\alpha'^2J_\delta^TJ_\delta$，两个积分直接是一元换元公式，得证.

这里的验证本来在一维可以用列向量来做，但是我们使用了上面这种更复杂的方式，可以推广.

上述写法过于形式化，更加朴素的写法是针对一维的简单验证：
$$
\vec\gamma(t)=\vec\delta(\alpha(t))
$$
将两个参数化写为矢量值的函数，因此第一个参数化对应的第一型曲线积分是
$$
\begin{aligned}
\int_a^bf(\vec\gamma(t))|\vec\gamma'(t)|\text{d}t&=\int_a^bf(\vec\delta(\alpha(t)))|\vec\delta'(\alpha(t))|\cdot|\alpha'(t)|\text{d}t
\end{aligned}
$$
这和另一个参数化的积分相差一个一元 Riemann 积分的换元：
$$
\int_c^df(\vec{\delta}(s))|\vec\delta(s)|\text{d}s=\left\{\begin{array}{}
\int_a^bf(\vec{\delta}(\gamma(t))|\vec\delta'(\alpha(t))|\cdot\alpha'(t)\text{d}t&\alpha\uparrow\\\\
\int_b^af(\vec{\delta}(\gamma(t))|\vec\delta'(\alpha(t))|\cdot\alpha'(t)\text{d}t&\alpha\downarrow
\end{array}\right.
$$
(因为有绝对值).

因此我们得到第一型曲线积分的性质：

1. 关于 $f$ 线性；

2. 关于 $L$ 可积；

   若 $L=L_1\cup L_2$，则
   $$
   \int_Lf\text{d}l=\int_{L_1}f\text{d}l+\int_{L_2}f\text{d}l
   $$
   这是来源于 Riemann 积分的可加性.

实际上，这些性质都来源于 Riemann 积分的性质.

下面了解一些有关命题：

/Claim/ (第一型曲线积分的换元公式)

> 考虑这样的换元：
> $$
> (u,v,w)\overset{\Phi}{\longrightarrow}(x,y,z)
> $$
> 设 $\Phi:\R^3\to\R^3$ 是 $C^1$ 的正交变换，设 $L\subseteq\R^3$ 是一条曲线，记 $L'=\Phi^{-1}(L)$ 是一个 pull back，则对于 $f:L\to\R$ (权重) 有
> $$
> \int_Lf\text{d}l=\int_{L'}(f\circ\Phi)\text{d}l
> $$

/Proof/

> 为 $L'$ 选一个参数化 $\gamma:[a,b]\to L'$，所以 $\Phi\circ\gamma$ 是 $L$ 的参数化，可以计算：
> $$
> \begin{aligned}
> \int_{L}f\text{d}l&=\int_a^bf(\Phi\circ\gamma(t))\sqrt{\det(J_{\Phi\circ\gamma}^TJ_{\Phi\circ\gamma})}\text{d}t\\\\
> &=\int_a^bf(\Phi\circ\gamma(t))\sqrt{\det(J_\gamma^TJ_\Phi^TJ_\Phi J_\gamma)}\text{d}t
> \end{aligned}
> $$
> 显然对于一般的双射 $\Phi$，这一步无法化简，所以要求是正交变换：
> $$
> \begin{aligned}
> &=\int_a^bf(\Phi\circ\gamma(t))\sqrt{\det(J_\gamma^TJ_\gamma)}\text{d}t
> \end{aligned}
> $$
> 这正是 $\gamma$ 这一参数化所计算的第一型曲线积分，也就是
> $$
> =\int_{L'}(f\circ\Phi)\text{d}l
> $$
> 这就是换元公式.
>
> /Remark/
>
> > 对于一般的 $\Phi:\R^3\to\R^3$，不能写出简洁的式子.

下面来看几个例子：

/Example/ (线段最短)

> 证明命题：曲线长 $\geq$ 线段长.
>
> 先定义 length：
>
> /Definition/ (长度)
>
> > $$
> > \operatorname{Length}(L)=\int_L1\cdot\text{d}l
> > $$
>
> ---
>
> 证明上述命题：设 $L$ 的两端分别为 $A,B$，来证明 $\text{Length}(L)\geq|AB|$.
>
> 取 $L$ 的参数化 $\gamma:[a,b]\to L$，则等价于证明：
> $$
> \int_a^b|\vec{\gamma}'(t)|\text{d}t\geq|\vec{\gamma}(b)-\vec{\gamma}(a)|
> $$
> 这一证明可能一开始并没有思路，我们先写一个 draft：
>
> /Draft/
>
> > 何时取等？当且仅当 $L$ 本身就是直线段. 我们需要用 $\gamma$ 来描述这一事实：
> >
> > $\Longleftrightarrow$ $\gamma$ 不变方向，$\vec\gamma'(t)\propto(\vec{\gamma}(b)-\vec{\gamma}(a))$.
> >
> > 这一正比条件让人联想到 Cauchy - Schwartz 不等式的取等条件：
> > $$
> > \vec{u}\cdot\vec{v}\leq|\vec{u}||\vec{v}|
> > $$
> > 当且仅当 $\vec{u}\propto\vec{v}$ 时取等.
>
> 所以用 Cauchy - Schwartz 不等式，两边同时乘 $\overset{\longrightarrow}{AB}$：
> $$
> \begin{aligned}
> |AB|\cdot\text{Length}(L)&=\int_a^b|\vec{\gamma}'(t)|\cdot|AB|\text{d}t\\\\
> &\geq\int_a^b\vec{\gamma}'(t)\cdot(\vec{\gamma}(b)-\vec{\gamma}(a))\text{d}t\\\\
> &=\int_a^b(x'(t)(x(b)-x(a))+\text{etc.})\text{d}t\\\\
> &=|AB|^2
> \end{aligned}
> $$
> 得证.
>
> 因此我们可以说，Cauchy - Schwartz 不等式就是三角不等式，同时也是「两点之间，线段最短」.

一个更复杂的例子：

/Example/

> $$
> L=\left\{(x,y,z)\left|\,\,\begin{array}{ll}
> x^2+y^2+z^2=1\\
> x+y+z=1
> \end{array}
> \right.\right\}
> $$
>
> 求：
> $$
> \int_L(x^2+y+xz)\text{d}l
> $$
>
> ---
>
> 这个曲线相当于用一个斜平面去截单位球，得到的截面边界. 显然这一定是一个圆周.
>
> /Method/ (1) 找参数化
>
> > 如果完全不加思考，我们会想要直接找参数化，也就是用一个字母 $t$ 来表示 $x,y,z$，考虑直接消元.
> >
> > 我们会发现这甚至不能直接写出来.
>
> /Method/ (2) 正交变换 + 换元公式
>
> > 考虑找一个正交变换
> > $$
> > (u,v,w)\overset{\Phi}{\longrightarrow}(x,y,z)
> > $$
> >  同时使得 $L$ 的方程变成形式更好看的样子. 这里我们取：
> > $$
> > w=\frac{1}{\sqrt3}(x+y+z)
> > $$
> > 这可以使得某一坐标为常数. 接下来考虑其他坐标如何取：
> > $$
> > \begin{pmatrix}
> > u\\v\\w
> > \end{pmatrix}=\begin{pmatrix}
> > \\\\\frac{1}{\sqrt3}&\frac{1}{\sqrt3}&\frac{1}{\sqrt3}
> > \end{pmatrix}\begin{pmatrix}
> > x\\y\\z
> > \end{pmatrix}
> > $$
> > 要求：1, 3 两行正交，所以 $a+b+c=0$，可以取：
> > $$
> > \frac{1}{\sqrt2}\,,\quad-\frac{1}{\sqrt2}\,,\quad0
> > $$
> > 第 2 行和其他两行正交，可以取为
> > $$
> > \frac{1}{\sqrt6}\,,\quad\frac{1}{\sqrt6}\,,\quad-\frac{2}{\sqrt6}
> > $$
> > 考虑反过来的坐标变换 (找到 $\Phi^{-1}(L)$)，应该是
> > $$
> > \begin{cases}
> > u^2+v^2+w^2=1\\
> > w=\frac{\sqrt3}{3}
> > \end{cases}
> > $$
> > 于是 $(u,v,w)$ 空间中的积分曲线是一个纬线圈.
> >
> > ::: tip
> >
> > 不要忘记我们的想法：我们的目标是为 $L$ 选一个参数化，于是先找到一个 $L'$，它们由 $\Phi$ 来等同，这样取定 $L'$ 的一个参数化，就可以复合 $\Phi^{-1}$ 诱导出原来的 $L$ 的参数化.
> >
> > :::
> >
> > 这里的参数化是
> > $$
> > \begin{cases}
> > u=\frac{\sqrt3}{3}\cos t\\
> > v=\frac{\sqrt3}{3}\sin t\\
> > w=\frac{\sqrt3}{3}
> > \end{cases}
> > $$
> > 反过来，可以写出
> > $$
> > \begin{pmatrix}
> > x\\y\\z
> > \end{pmatrix}=Q^T\begin{pmatrix}
> > \frac{\sqrt3}{3}\cos t\\
> > \frac{\sqrt3}{3}\sin t\\
> > \frac{\sqrt3}{3}
> > \end{pmatrix}
> > $$
> > 代入权重，可以积分.
>
> /Method/ (3) 对称性 (同学提供的解法)
>
> > 注意到对称性，
> > $$
> > \begin{aligned}
> > &\int_Lx^2\text{d}l=\int_Ly^2\text{d}l=\int_Lz^2\text{d}l=\frac{1}{3}\int_L(x^2+y^2+z^2)\text{d}l\\\\
> > &\int_Ly\text{d}l=\frac{1}{3}\int_L(x+y+z)\text{d}l\\\\
> > &\int_Lxz\text{d}l=\frac{1}{3}\int_L(xy+yz+zx)\text{d}l\\\\
> > &\quad\quad\quad\,\,\,=\frac{1}{6}\int_L[(x+y+z)^2-(x^2+y^2+z^2)]\text{d}l
> > \end{aligned}
> > $$

## 第一型曲面积分

物理上来讲，就是曲面的带权重面积.

曲面 $S$ $\Longleftrightarrow$ (每点有对应 $\R^2$ 上的点，微分同胚) $\Longleftrightarrow$ $S=\{F(x,y,z)=0\}$，每一点处 $\nabla F\neq\vec{0}$.
$$
\iint_Sf\text{d}S=\lim_{S_i\to0}\left(\sum_if(\xi_i)\cdot\text{area}(S_i)\right)
$$
这时我们发现还没有定义什么是曲面的面积. 因此下面作出定义：

/Definition/

> 所谓曲面 $S$ 的一个 $C^1$ 参数化，是指 $C^1$ 映射 $\Phi:D\to S$ ($D\subseteq\R^2$，坐标 $(u,v)$)，
> $$
> \Phi(u,v)=(x(u,v),y(u,v),z(u,v))
> $$
> 要求：
>
> 1. $\Phi$ 满秩；
>
> 2. $\Phi$ 几乎是单的，$\Phi(\vec{p})=\Phi(\vec{q})$，则一定有 $\vec{p},\vec{q}\in\partial D$.
>
>    (想象一下用一个平面「制作」一个球，只可能有边界的部分位置是不单的).
>
> 3. $\vec{r}_u=(x_u,y_u,z_u)$，这就是速度分量. 同理，另一个分量是 $\vec{r}_v=(x_v,y_v,z_v)$.
>
>    要求在每点 $\Phi(u,v)$ 处，$\vec{r}_u$ 和 $\vec{r}_v$ 线性无关.
>
>    ::: tip
>
>    这和一维情况一脉相承，那时我们要求 $\vec{\gamma}'(t)$ 不为零，生成一个一维的线性空间；这里我们要求线性无关，也就是可以生成一个二维线性空间.
>
>    :::
>
> $D$ 的剖分 $\underset{i}{\bigcup}D_i$ 会诱导出 $S$ 的剖分 $\underset{i}{\bigcup}\Phi(D_i)$，则得到
> $$
> \text{area}\,\Phi(D_i)\approx\text{area}\,(\Box_{\vec{r}_u\Delta u\times\vec{r}_v\Delta v})=\Delta u\Delta v|\vec{r}_u\times\vec{r}_v|
> $$
> 或者写成 Gram 矩阵 (在微分几何中常用)：
> $$
> =\Delta u\Delta v\sqrt{\det\left(\begin{pmatrix}
> \vec{r}_u\\\vec{r}_v
> \end{pmatrix}\begin{pmatrix}
> \vec{r}_u&\vec{r}_v
> \end{pmatrix}\right)}
> $$
> 现在可以定义：
> $$
> \begin{aligned}
> \iint_Sf(x,y,z)\text{d}S&=\iint_D(f\circ\Phi)|\vec{r}_u\times\vec{r}_v|\text{d}u\text{d}v\\\\
> &=\iint_D(f\circ\Phi)\sqrt{\det(J_\Phi^TJ_\Phi)}\text{d}u\text{d}v
> \end{aligned}
> $$
> 和一维的形式几乎一致.

在实际应用中，我们常会看到下面的特例：$S$ 本身来自于函数图像 $\text{Graph}(g)$.

$g$ 是 $x,y$ 的函数，每一点的高度 ($z$ 分量) 是 $g$ 的值，构成一个曲面，也就是：
$$
S=\left\{(x,y,z)\left|\,\,\begin{array}{ll}
(x,y)\in D\\
z=g(x,y)
\end{array}\right.\right\}
$$
选择参数化可以直接 $x=x$，$y=y$，$z=g(x,y)$，这时两个 “速度” 矢量为
$$
\vec{r}_x=(1,0,g_x)\,,\quad\vec{r}_y=(0,1,g_y)
$$
所以原来的积分变为
$$
\begin{aligned}
\iint_Sf(x,y,z)\text{d}S&=\iint_Df(x,y,g(x,y))|\vec{r}_x\times\vec{r}_y|\text{d}x\text{d}y\\\\
&=\iint_Df(x,y,g(x,y))\sqrt{g_x^2+g_y^2+1}\cdot\text{d}x\text{d}y
\end{aligned}
$$

---

和一维情况一样，我们也要问不同参数化是否给出同样结果，考虑两个不同的参数化：$\Phi:D\to S$ 和 $\Phi\circ\Psi:D'\to S$. 之后用 Gram 矩阵来验证.
$$
\begin{aligned}
\text{I}&=\iint_D(f\circ\Phi)\sqrt{\det(J_\Phi^TJ_\Phi)}\text{d}u_1\text{d}u_2\\\\
\text{II}&=\iint_D(f\circ(\Phi\circ\Psi))\sqrt{\det(\underset{2\times2}{\underline{J_\Psi^T}}\cdot\underset{2\times3}{\underline{J_\Phi^T}}\cdot\underset{3\times2}{\underline{J_\Phi}}\cdot\underset{2\times2}{\underline{J_\Psi}})}\text{d}v_1\text{d}v_2
\end{aligned}
$$
可以把 $\Psi$ 的两个合起来：
$$
\begin{aligned}
&=\iint_D(f\circ\Phi\circ\Psi)\sqrt{\det(J_\Psi)^2\cdot\det(J_\Phi^TJ_\Phi)}\text{d}v_1\text{d}v_2\\\\
&=\iint_{D'}(f\circ\Phi)\sqrt{\det(J_\Phi^TJ_\Phi)}\text{d}u_1\text{d}u_2
\end{aligned}
$$
显然比叉乘的方式好证明.

同样地，可以写一个换元公式：

/Claim/

> 设 $Q:\R^3(x_1',x_2',x_3')\to\R^3(x_1,x_2,x_3)$ 是一个正交变换，则
> $$
> \iint_Sf\text{d}S=\iint_{S'}(f\circ Q)\text{d}S
> $$

/Proof/

> 证明非常直接，将 $Q\circ\Phi$ 作为 $S$ 的参数化，则
> $$
> \begin{aligned}
> \iint_Sf\text{d}S&=\iint_D(f\circ Q\circ\Phi)\sqrt{\det(J_\Phi^TJ_Q^TJ_QJ_\Phi)}\text{d}u_1\text{d}u_2\\\\
> &=\iint_D(f\circ Q\circ\Phi)\sqrt{\det(J_\Phi^TJ_\Phi)}\det(J_Q)\text{d}u_1\text{d}u_2\\\\
> &=\iint_{S'}(f\circ Q)\text{d}S'
> \end{aligned}
> $$

对于两个我们今天得到的换元公式，实际上有更加几何、更加直观的解释：正交变换是一种保距变换，也是一种保角变换.

将两个不同空间的曲线分割为小段，得到
$$
\begin{aligned}
\int_Lf\text{d}l&=\lim\sum f(Q(\xi_i))\text{Length}(Q(L_i))\\\\
&\approx\lim\sum f(Q(\xi_i))\text{Length}(L_i')=\int_{L'}(f\circ Q)\text{d}l
\end{aligned}
$$
当然这个理解并不好写出严格证明. 曲面的情况是同理的.

下面考察一些例子：

/Example/ (球面面积)

> 求
> $$
> S^2=\{(x,y,z)|x^2+y^2+z^2=R^2\}
> $$
> 的面积.
>
> 当然我们要先定义面积，如下：
> $$
> \text{area}(S)=\iint_S1\cdot\text{d}S
> $$
>
> ---
>
> /Method/ (1) graph 结论
>
> > 将南北半球分别视为 graph，是函数 $z=g(x,y)=\sqrt{R^2-x^2-y^2}$ 的 graph.
> >
> > 则面积为
> > $$
> > \begin{aligned}
> > &\text{area}(S^2_+)\\\\
> > &=\iint_{x^2+y^2\leq R^2}\sqrt{g_x^2+g_y^2+1}\,\text{d}x\text{d}y\\\\
> > &=\iint_{x^2+y^2\leq R^2}\sqrt{\left(\frac{-x}{\sqrt{x^2+y^2}}\right)^2+\left(\frac{-y}{\sqrt{x^2+y^2}}\right)^2+1}\cdot\text{d}x\text{d}y\\\\
> > &=\iint_{x^2+y^2\leq R^2}\sqrt\frac{R^2}{R^2-x^2-y^2}\cdot\text{d}x\text{d}y\\\\
> > &=\int_0^{2\pi}\text{d}\theta\int_0^Rr\text{d}r\cdot\frac{R}{\sqrt{R^2-r^2}}\\\\
> > &=2\pi R^2
> > \end{aligned}
> > $$
>
> /Method/ (2) 球坐标
>
> > 变换为
> > $$
> > \begin{cases}
> > x=r\sin\theta\cos\varphi\\
> > y=r\sin\theta\sin\varphi\\
> > z=r\cos\theta
> > \end{cases}\,,\quad r=R=\text{const}.
> > $$
> > 这里要计算 $|\vec{r}_\theta\times\vec{r}_\varphi|$ 的值，有
> > $$
> > \begin{aligned}
> > \vec{r}_\theta&=(r\cos\theta\cos\varphi,r\cos\theta\sin\varphi,-r\sin\theta)\\\\
> > \vec{r}_\varphi&=(-r\sin\theta\sin\varphi,r\sin\theta\cos\varphi,0)\\\\
> > \vec{r}_\theta\times\vec{r}_\varphi&=(r^2\sin^2\theta\cos\varphi,r^2\sin^2\theta\sin\varphi,r^2\cos\theta\sin\theta)\\\\
> > |\vec{r}_\theta\times\vec{r}_\varphi|&=r^2\sin\theta=R^2\sin\theta
> > \end{aligned}
> > $$
> > 于是之后很好计算.

/Example/ (均匀球面电荷)

> Gauss 曾经计算了这个例子.
>
> $S^2$ 上电荷均匀分布，考虑这个球面电荷对每一点 $(x,y,z)$ 产生的静电场.
>
> ::: tip
>
> Newton 曾经用纯几何的方式计算出来这个结果，似乎更加 remarkable.
>
> :::
>
> 因为整体计算非常困难，我们直接计算 $z$ 轴上一点 $P(0,0,a)$ 的静电场 (这是有代表性的)，为
> $$
> \begin{aligned}
> \vec{E}(0,0,a)&=\iint_S\frac{1}{x^2+y^2+(z-a)^2}\cdot\frac{(0,0,a)-(x,y,z)}{\sqrt{x^2+y^2+(z-a)^2}}\text{d}S\\\\
> &=\iint_S\frac{(-x,-y,a-z)}{[x^2+y^2+(z-a)^2]^{3/2}}\text{d}S
> \end{aligned}
> $$
> 注意到 $x,y$ 分量上的积分都是奇函数，所以积分均为零. 只需要算 $z$ 分量的积分，选用球坐标的参数化，用 $\theta,\varphi$ 来计算.
> $$
> \begin{aligned}
> E_z&=\iint_S\frac{a-z}{[x^2+y^2+(z-a)^2]^{3/2}}\text{d}S\\\\
> &=\iint_{\substack{0\leq\theta\leq\pi\\0\leq\varphi\leq2\pi}}\frac{a-R\cos\theta}{(R^2+a^2-2aR\cos\theta)^{3/2}}\cdot R\sin\theta\text{d}\theta\text{d}\varphi
> \end{aligned}
> $$
> 实际上这个积分我们之前在学习一元积分时计算过 ([此处](/integral/gx8v19r3/#换元公式))，若换元，可以得到
> $$
> \begin{aligned}
> &=2\pi R^2\int_1^{-1}\frac{(a-Ru)(-\text{d}u)}{(R^2+a^2-2aRu)^{3/2}}
> \end{aligned}
> $$
> 这一积分是简单的，留给同学们.
