---
title: Lesson 56 第二型曲线积分
permalink: /integral/lesson-56/
createTime: 2025/5/21
---
## 第二型曲线积分

第一型积分 $\longleftrightarrow$ 该曲线 / 曲面带权的 volume，是数值型函数的积分.

相对地，第二型积分是矢量值型函数的积分.

第二型的曲线积分来自于 Newton 力学：外力 $\vec{F}(\vec{r})=(P(\vec{r}),Q(\vec{r}),R(\vec{r}))$，Newton 第二定律给出
$$
\begin{cases}
mx''(t)=P(x(t),y(t),z(t))\quad(1)\\\\
my''(t)=Q(x(t),y(t),z(t))\quad(2)\\\\
mz''(t)=R(x(t),y(t),z(t))\quad(3)
\end{cases}
$$
这是二阶 ODE 组，求解的方法是求导的逆运算，也就是积分. 做如下操作：
$$
(1)\times x'(t)+(2)\times y'(t)+(3)\times z'(t)
$$
得到：
$$
m\vec{r}''(t)\cdot\vec{r}'(t)=\vec{F}(\vec{r}(t))\cdot\vec{r}'(t)
$$
两边积分，得到
$$
\frac{1}{2}m\vec{r}'^2(t_1)-\frac{1}{2}m\vec{r}'^2(t_0)=\int_{t_0}^{t_1}\vec{F}(\vec{r}(t))\cdot\vec{r}'(t)\text{d}t
$$
这实际上是对 Newton 方程进行一次积分. RHS 的 $\vec{r}'(t)\text{d}t$ 一般被称为位移微元，记作 $\text{d}\vec{r}$，所以 RHS 可以改写成
$$
\int_{\vec{r}(t_0)}^{\vec{r}(t_1)}\vec{F}\cdot\text{d}\vec{r}
$$
这被称为外力对该质点在此段运动轨迹中所做的功.

在数学中，我们可以将这样的物理实际抽象出来：

/Definition/

> 矢量场 $\vec{F}(\vec{r})$ 在参数曲线 $\gamma$ 上的积分为
> $$
> \int_\gamma\vec{F}\cdot\text{d}\vec{r}=\int_{t_0}^{t_1}\vec{F}(\vec{r})\cdot\vec{r}'(t)\text{d}t
> $$
> 其中 $t$ 是对曲线的一个参数化.
>
> 对于一个平面参数曲线 $\gamma(t)=(x(t),y(t))$，$t\in[t_0,t_1]$，亦可以相似定义.

这时有同学要问：我们在定义第一型积分时，并未要求选好一个参数化，按理来说输入任何一个参数化都可以输出同样的结果；但是这里我们要求输入一个具体的参数曲线. 那么在这里我们能不能证明这个积分与参数化的选择无关？

记 $\text{Im}(\gamma)=$ 曲线 $L$，是否可将积分视为 $L$ 上的积分而非 $\gamma$ 上的积分？

> 上述积分可以用一型的曲线积分表出.
> $$
> \begin{aligned}
> \int_{\gamma}\vec{F}\cdot\text{d}\vec{r}&=\int_{t_0}^{t_1}(Px'(t)+Qy'(t)+Rz'(t))\text{d}t\\
> &=\int_{t_0}^{t_1}(\vec{F}\cdot\gamma'(t))\text{d}t\\
> &=\int_{t_0}^{t_1}\left(\vec{F}\cdot\frac{\gamma'(t)}{|\gamma'(t)|}\right)\cdot|\gamma'(t)|\text{d}t\\
> &=\int_L(\vec{F}\cdot\vec{e})\text{d}l
> \end{aligned}
> $$
> 其中，$\vec{e}(\gamma(t))=\gamma'(t)/|\gamma'(t)|$.
>
> 回忆：切向量.
>
> > $M$ 在点 $P$ 处的切向量是 $M$ 上的运动在 $P$ 处产生的速度.
> >
> > 可知：
> > $$
> > \frac{\gamma'(t)}{|\gamma'(t)|}\in\text{T}_{\gamma(t)}L
> > $$
> > 且模长为 $1$.
> >
> > $\{\vec{e}(\gamma(t))\}$ 是在 $L$ 上每点处给出一个单位切向量，且连续依赖于 $t$，称 $\{\vec{r}(\gamma(t))\}$ 为 $L$ 的一个定向.
>
> ::: tip
>
> 中国数学家吴文骏说，他个人认为 19 世纪数学界的最大成就是定义了什么是定向.
>
> :::

/Definition/

> 设 $L$ 是一条曲线，所谓 $L$ 的一个定向，指如下数据：
>
> 在 $L$ 的每点 $(x,y,z)$ 处指出该点处 $L$ 的一个单位切向量 $\vec{e}(x,y,z)\in\text{T}_{(x,y,z)}L$，且 $\vec{e}$ 随着 $(x,y,z)$ 连续变化.
>
> (即 $\vec{e}:L\to\R^3$ 是连续的)
>
> 记为 $\mathcal{O}=\{\vec{e}(x,y,z)\}_{(x,y,z)\in L}$ (orientation, 定向)

/Definition/

> 称 $L$ 是可定向的，若 $L$ 有一个定向；
>
> 称 $L$ 是定向的，若 $L$ 上已经赋予了一个定向.
>
> (即，有一个 pair $(L,\mathcal{O})=\vec{L}$，称 $\vec{L}=(L,\mathcal{O})$ 为一个定向的曲线.

/Definition/

> 设 $\vec{L}=(L,\mathcal{O}=\{\vec{e}(x,y,z)\}_{(x,y,z)\in L})$ 是一条定向曲线，对于 $L$ 上的矢量值函数 $\vec{F}$，定义 $\vec{F}$ 在 $\vec{L}$ 上的第二型积分为
> $$
> \int_L(\vec{F}\cdot\vec{e})\text{d}l
> $$
> 还可以记为：
> $$
> \int_{\vec{L}}\vec{F}\cdot\text{d}\vec{r}\text{ or }\int_{\vec{L}}(P\text{d}x+Q\text{d}y+R\text{d}z)
> $$
> ($\vec{F}$ 与定向系统 $\vec{e}$ 内积，再做第 $\text{I}$ 型积分)

/Claim/

> 连通曲线 $L$ 上至多两个定向.

/Proof/

> 设 $\mathcal{O}_1=\{\vec{e}_1(x,y,z)\}$ 和 $\mathcal{O}_2=\{\vec{e}_2(x,y,z)\}$ 都是 $L$ 上的定向，由 $\text{T}_{(x,y,z)}L$ 是一维的，以及 $e_i(x,y,z)\in\text{T}_{x,y,z}L$ 是单位长度，知道：
> $$
> \vec{e}_2(x,y,z)=\pm\vec{e}_1(x,y,z)
> $$
> 也就是
> $$
> g(x,y,z)=|\vec{e}_2(x,y,z)-\vec{e}_1(x,y,z)|\in\{0,2\}
> $$
> 而 $g:L\to\{0,2\}$ 是连续的，由介值定理，$g$ 要么恒等于 $0$，要么恒等于 $2$. 所以只有两种可能的定向.

/Definition/

> 设 $\mathcal{O}=\{\vec{e}(x,y,z)\}$ 为 $L$ 的一个定向，则称 $\{-\vec{e}(x,y,z)\}$ 为 $\mathcal{O}$ 的反定向，记为 $-\mathcal{O}$.

到这里我们能再进一步说：

/Claim/

> 对于连通曲线 $L$，恰有两个定向.

证明这个命题，我们要先定义曲线，然后证明 $L$ 上有一个定向. 但是鉴于我们的课程并没有定义何为曲线，所以我们在这里不作证明. 一种 sketch 如下：

曲线的每一点 $P$ 有一个开邻域 $U$ 同胚于 $\R$，之后取一个参数化，我们知道一个参数化 $\gamma(t)$ 给出 $L$ 的一个定向，之后易证有两个定向.

/Claim/

> 若 $L$ 是 $n$ 个连通曲线的不交并，则 $L$ 有 $2^n$ 个定向.

显而易见.

举一个简单的例子，对于一个圆，我们可以定义顺时针定向、逆时针定向 (负顺时针).

具体如何计算第二型积分？

1. 选 $L$ 的一个参数化 $\gamma(t)$ ($a\leq t\leq b$).

   需要判断参数化与 $\vec{L}$ 的定向 $\mathcal{O}=\{\vec{e}(x,y,z)\}$ 是相容还是相反，这两者相差一个符号：
   $$
   \frac{\gamma'(t)}{|\gamma'(t)|}=\vec{e}(\gamma(t))\,,\quad\forall\gamma
   $$
   为相容的情况，反之则相反.

2. 选参数化 $\gamma(t)$ 与定向相容. 则
   $$
   \begin{aligned}
   \int_{\vec{L}}\vec{F}\cdot\text{d}\vec{r}&=\int_L(\vec{F}\cdot\vec{e})\text{d}l\\
   &=\int_a^b\vec{F}(\gamma(t))\cdot\vec{e}(\gamma(t))|\gamma'(t)|\text{d}t\\
   &=\int_a^b\vec{F}(\gamma(t))\cdot\frac{\gamma'(t)}{|\gamma'(t)|}\cdot|\gamma'(t)|\text{d}t\\
   &=\int_a^b\vec{F}(\gamma(t))\gamma'(t)\text{d}t\\
   &=\int_a^b(Px'+Qy'+Rz')\text{d}t
   \end{aligned}
   $$

总结：最好选择与定向相容的参数化. 公式为
$$
\int_{\vec{L}}\vec{F}\cdot\text{d}\vec{r}=\int_a^b(Px'+Qy'+Rz')\text{d}t
$$
如果一定要取另一种参数化 / 定向反转，则积分相差 $-1$ 倍.

更加形式化的记忆方式是
$$
\int_{\vec{L}}(P\text{d}x+Q\text{d}y+R\text{d}z)=\int_a^b(Px'+Qy'+Rz')\text{d}t
$$
下面看两个例子：

/Example/ (Gauss 积分)

> $$
> \vec{F}=\left(
> -\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}
> \right)
> $$
>
> 这其实是无限长电流的磁场. 求：
> $$
> \int_C\vec{F}\cdot\text{d}\vec{r}
> $$
> ($C$ 为逆时针)
>
> ---
>
> 参数化：$(x(t),y(t))=(R\cos t,R\sin t)$，得到
> $$
> I=\int_0^{2\pi}\frac{-R\sin t\text{d}(R\cos t)+R\cos t\text{d}(R\sin t)}{R^2}=2\pi
> $$
> ::: tip
>
> 这说明磁场绕一圈做功为 $2\pi$. (``确信.jpg``)
>
> 是做功吗？正确. —— 艾神
>
> :::
>
> 另一算法是取逆时针定向：
> $$
> I=\int_C\left(-\frac{y}{R^2},\frac{x}{R^2}\right)\left(-\frac{y}{R},\frac{x}{R}\right)\text{d}l=2\pi
> $$

