---
url: /integral/lesson-60/index.md
---
## Stokes 公式

/Theorem/

> 设 $S$ 为定向曲面，$\partial S$ 赋予了边界正定向 (右手螺旋法则)，则：
> $$
> \int\_{\partial S}P\text{d}x+Q\text{d}y+R\text{d}z=\iint\_S\det\begin{pmatrix}
> \text{d}y\text{d}z&\text{d}z\text{d}x&\text{d}x\text{d}y\\
> \frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\
> P\&Q\&R
> \end{pmatrix}
> $$
> 这里要求 $P,Q,R\in C^1(S)$.
>
> ***
>
> special case：$S$ 为定向封闭曲面，$\partial S=\varnothing$. 则积分值为零.

/Example/

> $$
> L=\left{\begin{array}{ll}
> x^2+y^2+z^2=1\\\\
> x+y+z=1
> \end{array}\right.
> $$
>
> 从 $(0,0,+\infty)$ 方向来看，曲线逆时针旋转. 求积分：
> $$
> I=\int\_Lxy\text{d}x+yz\text{d}y+zx\text{d}z
> $$
>
> ***
>
> ::: tip
>
> 我发现我 22 年讲微积分的时候手写的笔记，到现在来看依然很好，大家可以看看. —— 艾神
>
> :::
>
> 我们可以用 Stokes 公式来简化这个问题 (虽然我们之前强行求解过). 曲面为
> $$
> S={x+y+z=1,;,x^2+y^2+z^2\leq1}
> $$
> 边界 $\partial S=L$，$L$ 的定向 $\to$ $\partial S$ 作为 $S$ 边界的正定向.
>
> 只需要取 $S$ 的定向为 $\hat{n}=(1,1,1)/\sqrt3$，可以使用 Stokes 公式：
> $$
> \begin{aligned}
> I&=\int\_L=\int\_{\partial S}xy\text{d}x+yz\text{d}y+zx\text{d}x\\\\
> &=\iint\_S\det\begin{pmatrix}
> \text{d}y\text{d}z&\text{d}z\text{d}x&\text{d}x\text{d}y\\
> \frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\
> xy\&yz\&zx
> \end{pmatrix}\\\\
> &=\iint\_S(-y\text{d}y\text{d}z-z\text{d}z\text{d}x-x\text{d}x\text{d}y)\\\\
> &=\iint\_S(-y,-z,-x)\cdot\text{d}\vec{S}\\\\
> &=\iint\_S\frac{-(x+y+z)}{\sqrt{3}}\text{d}S=\iint\_S\frac{-1}{\sqrt3}\text{d}S\\\\
> &=-\frac{1}{\sqrt3}\cdot\pi r^2=-\frac{2\sqrt3}{9}\pi
> \end{aligned}
> $$

## Stokes 定理

::: tip

在数学史上很多成就都很重要，但是 Stokes 定理有被评选为最重要的定理的潜质. —— 艾神

:::

(1) 微分形式：$\R^n$ 中坐标 $(x\_1,\cdots,x\_n)$，引入 $n$ 个符号 $\text{d}x\_1,\cdots,\text{d}x\_n$，它们之间的 wedge (外积) 乘法：
$$
\text{d}x\_i\wedge\text{d}x\_j
$$
简写为 $\text{d}x\_i\text{d}x\_j$.

给定 wedge 是反交换的，$\text{d}x\_i\text{d}x\_j=-\text{d}x\_j\text{d}x\_i$.

/Definition/ (微分形式)

> $\R^n$ 上的一个 $k$ - 形式，指的是
> $$
> \omega=\sum\_{i\_1\cdots i\_k}f(x\_{i\_1},\cdots,x\_{i\_k})\text{d}x\_{i\_1}\cdots\text{d}x\_{i\_k}
> $$
> 一个 $k$ - 形式有 $C\_n^k$ 个系数，$\omega$ 是 $C^m$ 光滑的 $\Longleftrightarrow$ 所有系数 $f\_{i\_1,\cdots,i\_k}\in C^m$.
>
> ***
>
> $\R^3$ 中：
>
> * $0$ - 形式 $\Longleftrightarrow$ $f\in C^m(\R^3)$；
> * $1$ - 形式 $\Longleftrightarrow$ $f\_1\text{d}x\_1+f\_2\text{d}x\_2+f\_3\text{d}x\_3$；
> * $2$ - 形式 $\Longleftrightarrow$ $f\_1\text{d}x\_2\text{d}x\_3+\text{etc.}$；
> * $3$ - 形式 $\Longleftrightarrow$ $g\text{d}x\_1\text{d}x\_2\text{d}x\_3+\text{etc.}$.
> * $\cdots$
>
> 我们做第二型曲线积分的时候，被积分的内容就是一个 $1$ - 形式，曲面积分则是 $2$ - 形式.
>
> 还可以定义一个 $\Omega^k(\R^n)={\R^n$ 上所有 $k$ - 形式$}$.

(2) 外微分算子：$\text{d}:\Omega^k(\R^n)\to\Omega^{k+1}(\R^n)$.

一个简单的例子是
$$
\Omega^0(\R^n)\overset{\text{d}}{\longrightarrow}\Omega^1(\R^n)\\
f\longrightarrow\text{d}f=\sum\_{i=1}^n\frac{\partial f}{\partial x\_i}\text{d}x\_i
$$
/Definition/

> 对于 $\text{d}:\Omega^k(\R^n)\to\Omega^{k+1}(\R^n)$，定义为
> $$
> \text{d}(f\_{i\_1\cdots i\_k}\text{d}x\_{i\_1}\cdots\text{d}x\_{i\_k})=\sum\_{j=1}^n\frac{\partial f\_{i\_1\cdots i\_k}}{\partial x\_j}\text{d}x\_j\text{d}x\_{i\_1}\cdots\text{d}x\_{i\_k}
> $$
> 是线性的.

/Example/

> $\R^3$ 中，一个 $1$ - 形式 $P\text{d}x+Q\text{d}y+R\text{d}z$ 的外微分是
> $$
> P\_y\text{d}y\text{d}x+P\_z\text{d}z\text{d}x+Q\_x\text{d}x\text{d}y+Q\_z\text{d}z\text{d}y+R\_x\text{d}x\text{d}z+R\_y\text{d}y\text{d}z
> $$
> 类比，$2$ - 形式 $P\text{d}y\text{d}z+Q\text{d}z\text{d}x+R\text{d}x\text{d}y$ 的外微分是
> $$
> P\_x\text{d}x\text{d}y\text{d}z+Q\_y\text{d}y\text{d}z\text{d}x+R\_z\text{d}z\text{d}x\text{d}y
> $$

(3) pull-back (拉回)：
$$
\underset{(u\_1,\cdots,u\_k)}{\R^k}\overset{\Phi}{\longrightarrow}\underset{(x\_1,\cdots,x\_n)}{\R^n}
$$
这里的 $\Phi$ 作为变换的映射，其 “拉回” 可以定义为 $\Phi^*:\Omega^m(\R^n)\to\Omega^m(\R^k)$. 也就是
$$
\Phi^*(\text{d}x\_i)=\text{d}\varphi\_i
$$

$$
\Phi^\*(f\text{d}x\_{i\_1}\cdots\text{d}x\_{i\_k})=(f\circ\Phi)\text{d}\varphi\_{i\_1}\cdots\text{d}\varphi\_{i\_k}
$$

再线性扩充.

(4) $k$ - 形式可在 $k$ 为=维定向开流形上积分.

对于 $\forall\omega\in\Omega^k(\R^n)$，$\omega$ 可以在 $M$ 上积分. 定义如下：

/Definition/

> (1) 第一步，为 $M$ 选择一个参数化，与 $M$ 定向相容，$\Phi:D\to M$，$D\subseteq\R^k$ (坐标 $u\_i$).
>
> (2) 用 $\Phi$ 把 $\omega$ 拉回到 $D$ 上：
> $$
> \Phi^\*\omega=g(u\_1,\cdots,u\_k)\text{d}u\_1\cdots\text{d}u\_k
> $$
> $k$ - 形式在拉回后恰好用光所有的指标，用到所有的 $\text{d}u\_1\sim\text{d}u\_k$.
>
> (3) 直接定义 $\omega$ 在参数空间的积分：
> $$
> \int\_M\omega=\underset{k}{\underbrace{\int\cdots\int\_D}}g(u\_1,\cdots,u\_k)\text{d}u\_1\cdots\text{d}u\_k
> $$
> ($M$ 上 $k$ - 形式 $\omega$ 的积分)
>
> /Remark/
>
> > 之前定义第二型曲线和曲面积分的时候都是这样的定义方法，我们的课程是一脉相承的.

到此为止我们可以叙述 Stokes 定理：

/Theorem/ (Stokes)

> 设 $M$ 是紧致的、定向的、带边的 $k$ 维流形. 则对于任何 $(k-1)$ - 形式 $\omega$，有
> $$
> \int\_{\partial M}\omega=\int\_M\text{d}\omega
> $$

这个公式非常优美和对偶. 它统一了之前的 Green 公式、Gauss 公式和 Stokes 公式，并推广到任意的维度.

* $k=1$ 时，这就是 Newton - Leibniz 公式：
  $$
  F(b)-F(a)=\int\_{\partial\[a,b]}F=\int\_{\[a,b]}\text{d}F=\int\_a^bF'(x)\text{d}x
  $$

* $k=2$ 时，得到 Green 公式和 Stokes 公式.

* $k=3$ 时，得到 Gauss 公式.

* $k=n$ 时，$M\subseteq\R^n$，$M$ 是 $n$ 维带边的流形，得到
  $$
  \int\_{\partial M}f\text{d}x\_2\cdots\text{d}x\_n=\int\_M\frac{\partial f}{\partial x\_1}\text{d}x\_1\text{d}x\_2\cdots\text{d}x\_n
  $$

应用：多元分部积分法. 令 $f=gh$，
$$
\int\_{\partial M}gh\text{d}x\_2\cdots\text{d}x\_n=\int\_M\frac{\partial}{\partial x\_1}(gh)\text{d}x\_1\cdots\text{d}x\_n
$$
经常用于 $g$ (或 $h$) 在 $\partial M$ 上恒为零的情况，得到
$$
0=\int\_M\frac{\partial g}{\partial x\_1}h+\int\_Mg\frac{\partial h}{\partial x\_1}
$$
以上就是 Stokes 定理的内容.

## 场论初步

场：($V\subseteq\R^3$，$V$ 为开集)

* 标量场 $\longleftrightarrow$ $f:V\to\R$ ($C^\infty$ 映射)
* 矢量场 $\longleftrightarrow$ $\vec{F}:V\to\R^3$ ($C^\infty$ 的矢量值函数)

(1) 标量场：标量场对应一个梯度场
$$
\nabla f=\operatorname{grad}f=\left(
\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}
\right)
$$

1. 梯度与 $f$ 的等高面垂直，$\text{T}\_{(x,y,z)}M\_e=(\text{span}{\nabla f})^\perp$.

2. 有势场作的功等于势能的改变，与路径无关.
   $$
   \int\_{\vec{L}}\nabla\varphi\cdot\text{d}\vec{r}=\Delta\varphi
   $$
   这其实就是 Newton - Leibniz 公式，也就是一维情况下的 Stokes 定理.

(2) 矢量场：

Gauss 公式：
$$
\iint\_{\partial\Omega}(P,Q,R)\cdot\hat{n}\text{d}S=\iiint\_\Omega\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\text{d}V
$$
/Definition/ (散度)

> $\vec{F}=(P,Q,R)$ 的散度 (divergence)：
> $$
> \operatorname{div}\vec{F}=\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)=\nabla\cdot\vec{F}
> $$
>
> ***
>
> 有了这一定义，Gauss 公式可以写成：
> $$
> \iint\_{\partial\Omega}\vec{F}\cdot\text{d}\vec{S}=\iiint\_\Omega\text{div}\vec{F}\cdot\text{d}\mathcal{Vol}
> $$
> 物理含义？
>
> 设想 $\vec{F}$ 是水流的流速场，则
> $$
> \frac{1}{\mathcal{Vol}(\Omega\_r)}\iint\_{S\_r(\vec{r})}\vec{F}\cdot\text{d}\vec{S}=\frac{1}{\mathcal{Vol}(\Omega\_r)}\iiint\_{\Omega\_r}\text{div}\vec{F}\cdot\text{d}\mathcal{Vol}
> $$
> 由积分中值，上式可以等于某一处的 $\text{div}$. 如果取体积 $\to0$ 的极限，则可以看出 $\text{div}\vec{F}$ 描述了每一点处单位体积流体对闭合小面积产生的流量.
>
> 若 $\text{div}\vec{F}>0$，则该点为 “源 (source)”；若 $\text{div}\vec{F}<0$，则该点为 “汇 (sink)”.

Stokes 公式：

/Definition/ (旋度)

> $\vec{F}=(P,Q,R)$ 的旋度：
> $$
> \text{curl}\vec{F}=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)=\nabla\times\vec{F}
> $$
>
> ***
>
> Stokes 公式可以改写为：
> $$
> \int\_{\partial S}\vec{F}\cdot\text{d}\vec{r}=\iint\_S\text{curl}\vec{F}\cdot\text{d}\vec{S}=\iint\_S(\nabla\times\vec{F})\cdot\text{d}\vec{S}
> $$
