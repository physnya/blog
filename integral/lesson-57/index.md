---
url: /integral/lesson-57/index.md
---
## 第二型曲线积分

$$
\begin{aligned}
\int\_{\vec{L}}(P,Q,R)\cdot\text{d}\vec{r}&=\int\_{\vec{L}}(P\text{d}x+Q\text{d}y+R\text{d}z)\\
&=\int\_L((P,Q,R)\cdot\vec{e})\text{d}l\\
&=\int\_{a}^b(P(\vec{r}(t))x'(t)+Q(\vec{r}(t))y'(t)+R(\vec{r}(t))z'(t))\text{d}t
\end{aligned}
$$

/Example/

> 注：若 $L$ 为闭合曲线，则积分号可以加一个圈. 当然大多数情况下并没有必要特别写出.
>
> 计算积分：
> $$
> \oint\_L(xy\text{d}x+yz\text{d}y+zx\text{d}z)
> $$
> 其中，$L$ 为
> $$
> \left{\begin{array}{ll}
> x^2+y^2+z^2=1\\
> x+y+z=1
> \end{array}\right.
> $$
> 定向定义为：从 $z=\infty$ 看曲线，曲线为逆时针方向.
>
> ***
>
> 引入正交变换：
> $$
> \begin{pmatrix}
> u\v\w
> \end{pmatrix}=\begin{pmatrix}
> \cdots&\cdots&\cdots\\
> \cdots&\cdots&\cdots\\
> 1/\sqrt3&1/\sqrt3&1/\sqrt3
> \end{pmatrix}\begin{pmatrix}
> x\y\z
> \end{pmatrix}
> $$
> 上面两行可以通过正交性来导出. 新的 $L'$ 变为
> $$
> \left{\begin{array}{ll}
> u^2+v^2+w^2=1\\
> w=\sqrt3/3
> \end{array}\right.
> $$
> 这是新坐标系下的纬线圈. 现在我们需要判断曲线的诱导定向是什么方向. 回忆线性代数的内容：
>
> /Theorem/
>
> > $Q\in M\_{3\times3}$ 是特殊正交的 ($\det Q=1$ 的正交矩阵) $\Longleftrightarrow$ $Q$ 可以表示为旋转的复合.
> >
> > 简单地理解：特殊正交变换保持定向 / 保持时钟转向.
>
> ::: tip
>
> 艾神的奇妙比喻：你坐云霄飞车的时候并没有发现过自己的手表倒转.
>
> :::
>
> 到这里就能确定变换矩阵：
> $$
> Q=\begin{pmatrix}
> 1/\sqrt2&-1/\sqrt2&0\\
> 1/\sqrt6&1/\sqrt6&-2/\sqrt6\\
> 1/\sqrt3&1/\sqrt3&1/\sqrt3
> \end{pmatrix}
> $$
> 可以验证 $\det Q=1$. 同时也可以计算之前观察者所在的位置：
> $$
> \begin{pmatrix}
> u\v\w
> \end{pmatrix}=\begin{pmatrix}
> 1/\sqrt2&-1/\sqrt2&0\\
> 1/\sqrt6&1/\sqrt6&-2/\sqrt6\\
> 1/\sqrt3&1/\sqrt3&1/\sqrt3
> \end{pmatrix}\begin{pmatrix}
> 0\0\\\infty
> \end{pmatrix}=\begin{pmatrix}
> 0\\-\infty\\\infty
> \end{pmatrix}
> $$
> 这个位置看纬线圈，也是逆时针的.
>
> $L'$ 有和之前的 $L$ 一样的定向，可以取一个与定向相容的参数化：
> $$
> u=\frac{\sqrt{3}}{3}\cos t,,\quad v=\frac{\sqrt3}{3}\sin t,,\quad w=\frac{\sqrt3}{3}
> $$
> 之后用逆矩阵来写新坐标下的积分变量.

## 第二型曲面积分

这样的积分最开始来源于物理中流体的流量、磁场的通量等等.

/Example/ (三维流体)

> 三维流体，流场中每个点 $(x,y,z)$ 的流速是 $\vec{v}(x,y,z)=(P,Q,R)$. 问：单位时间内，流出 $S$ 的流量？
>
> ***
>
> 自从了解 Riemann 和之后，我们对连续求和的做法一直是取剖分、寻找代表点、近似求和、取极限.
>
> 这里取剖分 $S=\underset{i}{\bigcup}S\_i$，计算 $\Delta t$ 时间内流出 $S\_i$ 的液体体积. 因为是微元，可以认为内部的流速相等；同时这个小的 $S\_i$ 可以取一个斜六面体，得到体积为
> $$
> \mathcal{Vol}(S\_i)\approx\text{area}(A\_i)\cdot(\vec{v}\cdot\hat{n})\Delta t
> $$
> 其中，$\hat{n}$ 是点 $(x\_i,y\_i,z\_i)$ 处指向外侧的法向量. 同时，这个流量可以保留符号，因为这样可以判断是流入还是流出.
>
> 得到总的流量 (Riemann 和)：
> $$
> Q=\sum\text{area}(A\_i)(\vec{v}(x\_i,y\_i,z\_i)\Delta t\cdot\hat{n}(x\_i,y\_i,z\_i))
> $$
> 取极限：
> $$
> \begin{aligned}
> Q&=\lim\_{S\_i}\sum\text{area}(A\_i)(\vec{v}(x\_i,y\_i,z\_i)\cdot\hat{n}(x\_i,y\_i,z\_i))\Delta t\\
> &=\iint\_S(\vec{v}(x,y,z)\cdot\hat{n}(x,y,z))\text{d}S
> \end{aligned}
> $$
> 这样就定义好了一个第二型曲面积分.

/Definition/ (曲面的定向)

> 设 $S\subseteq\R^2$ 是曲面，
>
> (1) 点 $(x,y,z)\in S$ 处的法方向为与 $\text{T}\_{p}S$ 垂直的方向. 也就是，${P$ 处 $S$ 的法方向$}=(\text{T}\_pS)^\perp$.
>
> /Example/
>
> > 若 $S={F(x,y,z)=0}$，$\text{T}\_{(x,y,z)}S=(\text{span}{\nabla F(x,y,z)})^\perp$，所以法方向就是 ${\nabla F}$ 方向.
>
> (2) $S$ 有参数化 $\Phi:D\to S$ ($S\subseteq \R^3$)，$\phi(u,v)=(x(u,v),y(u,v),z(u,v))$.
>
> /Example/
>
> > 对于 $p(t)=(u\_0+t,v\_0)$ 这个 $D$ 上的运动，诱导 $S$ 上的运动，在 $t=0$ 处产生的速度为 $\vec{x}\_u$. 对于参数化的曲面，可以给出两个切向量：
> > $$
> > \vec{x}\_u=(x\_u,y\_u,z\_u)\in\text{T}\_pS\\
> > \vec{x}\_v=(x\_v,y\_v,z\_v)\in\text{T}\_pS
> > $$
> > 回忆参数化的定义中，两个向量线性无关，所以它们张成的空间就是切空间. 因此这可以确定法方向：${\vec{x}\_u\times\vec{x}\_v}$.
>
> 到此为止，我们可以对曲线的定向作出定义. 所谓曲面 $S(\subseteq\R^3)$ 的一个定向，是指如下的指定：
>
> 对于每点 $(x,y,z)\in S$，指定 $(x,y,z)$ 处 $S$ 的一个单位法向量 $\hat{n}(x,y,z)$. 要求 $\hat{n}$ 关于 $(x,y,z)$ 连续 (即 $\hat{n}:S\to\R^3$ 是连续的)，记 $\mathcal{O}={\hat{n}(x,y,z)}\_{(x,y,z)\in S}$ 为 $S$ 的一个定向.
>
> 对于曲面的定向，也可以有可定向曲面 / 定向曲面的说法.

但是曲面的定向比曲线的定向要复杂许多，存在不可定向的曲面，比如 Mobius 带，在这样的曲面上连续性和唯一性相互矛盾.

但是 Mobius 带毕竟是带边的曲面，有没有无边的例子？有：Klein 瓶.

Torus 环面指的是轮胎的表面，相当于将一根管子首尾相接；但是 Klein 瓶是将管子从外部穿进瓶身 (不可在 $\R^3$ 内实现)，首尾相接.

::: tip

艾神的奇妙理解：如果在 $\R^4$ 内部实现 Klein 瓶，你可以今天在瓶口的这个位置，明天换到另一位置，实现在时间轴上“穿过瓶身”.

:::

(？？？)

反定向：$\mathcal{O}$ 的反定向 $-\mathcal{O}$ 为 $-\hat{n}$ 构成的集合. 定向曲面 $S=(S,\mathcal{O})$ 的反定向曲面为 $-S=(S,-\mathcal{O})$.

/Theorem/

> $\R^3$ 中的封闭 $C^1$ 光滑曲面皆可定向.

这个定理的证明并不简单，需要证明 $S$ 将 $\R^3$ 分成内部和外部.

/Claim/

> 一个参数化 $\Phi:D\to S$ 诱导出 $S$ 的一个定向 $\mathcal{O}*\Phi$. 具体而言：
> $$
> \hat{n}*\Phi(\Phi(u,v))=\frac{\vec{x}\_u\times\vec{x}\_v}{|\vec{x}\_u\times\vec{x}\_v|}
> $$
> 如果 $S={x,y,g(x,y)|x,y\in D}$，有定向：
> $$
> \hat{n}=\frac{(1,0,g\_x)\times(0,1,g\_y)}{|(1,0,g\_x)\times(0,1,g\_y)|}=\frac{(-g\_x,-g\_y,1)}{\sqrt{g\_x^2+g\_y^2+1}}
> $$
> 其 $z$ 分量为正，我们之后将这种定向简称为指向图像上方.

/Definition/ (第二型曲面积分)

> 设 $S=(S,\mathcal{O}=\hat{n}(x,y,z))$ 为定向曲面，定义
> $$
> \iint\_S\vec{F}\cdot\text{d}\vec{S}=\iint\_S(\vec{F}\cdot\hat{n})\text{d}S
> $$
> 20 世纪以来，人们开始转向第二种写法：
> $$
> \iint\_S(P,Q,R)\cdot\text{d}\vec{S}=\iint\_S(P\text{d}y\text{d}z+Q\text{d}z\text{d}x+R\text{d}x\text{d}y)
> $$
> (这里的顺序不可以随便交换)
>
> 性质：
>
> (1) 反定向：
> $$
> \iint\_{-S}\vec{F}\cdot\text{d}\vec{S}=-\iint\_S\vec{F}\cdot\text{d}\vec{S}
> $$
> (2) 将 $S$ 切开为 $S\_1\cup S\_2$ ($S\_i$ 继承 $S$ 的定向)，则有
> $$
> \iint\_S\vec{F}\cdot\text{d}\vec{S}=\iint\_{S\_1}\vec{F}\cdot\text{d}\vec{S}+\iint\_{S\_2}\vec{F}\cdot\text{d}\vec{S}
> $$

如何计算？

取参数化 $\Phi:D\to S$ 和定向相容，则积分为
$$
\begin{aligned}
\iint\_S\vec{F}\cdot\text{d}\vec{S}&=\iint\_S(\vec{F}\cdot\hat{n})\text{d}S\\
&=\iint\_DF(x(u,v),\cdots)\cdot\hat{n}(x(u,v),\cdots)|\vec{x}\_u\times\vec{x}\_v|\text{d}u\text{d}v\\
&=\iint\_DF(\Phi(u,v))\cdot\frac{\vec{x}\_u\times\vec{x}\_v}{|\vec{x}\_u\times\vec{x}\_v|}\cdot|\vec{x}\_u\times\vec{x}\_v|\text{d}u\text{d}v\\
&=\iint\_D(F\circ\Phi)\cdot(\vec{x}\_u\times\vec{x}\_v)\text{d}u\text{d}v\\
&=\iint\_D\det\begin{pmatrix}
P\&Q\&R\x\_u\&y\_u\&z\_u\x\_v\&y\_v\&z\_v
\end{pmatrix}\text{d}u\text{d}v
\end{aligned}
$$
/Example/

> 指向 $S$ 上方的定向：
> $$
> \iint\_S(P,Q,R)\cdot\text{d}\vec{S}=\iint\_D(P,Q,R)\cdot(-g\_x,-g\_y,1)\text{d}x\text{d}y
> $$

/Example/ (Gauss 静电场)

> 静电场可以写成：
> $$
> \vec{E}(x,y,z)=\frac{1}{r^2}\frac{\vec{r}}{r}=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}
> $$
> Gauss 研究了很久这样一个通量：
> $$
> \iint\_S\vec{E}(x,y,z)\cdot\text{d}\vec{S}
> $$
>
> ***
>
> 取一个特例进行计算，考虑 $S$ 是半径为 $R$ 的球面，定向指向 $S$ 外部，则
> $$
> \begin{aligned}
> \iint\_{S\_R}\vec{E}\cdot\text{d}\vec{S}&=\iint\_{S\_R}\vec{E}\cdot\frac{(x,y,z)}{R}\text{d}S\\
> &=\iint\_{S\_R}\frac{(x,y,z)}{R^3}\frac{(x,y,z)}{R}\text{d}S\\
> &=\frac{1}{R^2}\cdot\text{area}(S)=4\pi
> \end{aligned}
> $$

/Example/

> $S=$ 上半球面 $={z=\sqrt{R^2-x^2-y^2}|x^2+y^2\leq R^2}$，取向上定向，得到
> $$
> I=\iint\_S(yz\text{d}z\text{d}x+zx\text{d}x\text{d}y)=\iint\_S(0,yz,zx)\cdot\text{d}\vec{S}
> $$
> ::: warning
>
> 艾神的奇妙眩晕：同学们，我忽然感到有点眩晕. 不是数学上的，而是物理上的. 我觉得教室在旋转.
>
> :::
>
> 直接用上面提到过的例子：
> $$
> I=\iint\_{x^2+y^2\leq R^2}\det\begin{pmatrix}
> 0\&yz\&zx\1&0\&g\_x\0&1\&g\_y
> \end{pmatrix}\text{d}x\text{d}y
> $$
> (其中 $z=g(x,y)=\sqrt{R^2-x^2-y^2}$)

## Green 公式

也就是 Newton - Leibniz 公式的高维推广.

Newton - Leibniz 公式是：
$$
\int\_{\[a,b]}F'=\int\_a^bF'(x)\text{d}x=F|^b\_a=\int\_{\partial\[a,b]}F
$$
($\partial\[a,b]$ 是 $\[a,b]$ 的边界，也就是两个点)

Green 问：能不能在高维的情况下，将边界上的积分化为内部的一个积分？

local model：设
$$
D=\left{(x,y)\left|\begin{array}{}
a\leq x\leq b\\
\phi\_1(x)\leq y\leq\phi\_2(x)
\end{array}\right.\right}
$$
在 $\partial D$ 上做一个积分，有
$$
\begin{aligned}
I&=\int\_{\partial D}P\text{d}x=\int\_{\partial D}(P,\mathcal{O})\cdot\text{d}\vec{r}\\
&=\int\_{C\_1}+\int\_{C\_2}+\int\_{C\_3}+\int\_{C\_4}\\
&=\int\_a^bP(x,\phi\_1(x))\text{d}x-\int\_a^bP(x,\phi\_2(x))\text{d}x\\
&=-\int\_a^b(P(x,\phi\_2(x))-P(x,\phi\_1(x)))\text{d}x\\
&=-\int\_a^b\left(\int\_{\phi\_1(x)}^{\phi\_2(x)}\frac{\partial P}{\partial y}(x,y)\text{d}y\right)\text{d}x\\
&\overset{\text{Fubini}}{=}-\iint\_{D}\frac{\partial P}{\partial y}\text{d}A
\end{aligned}
$$
总结得到：
$$
\int\_{\partial D}P\text{d}x=-\iint\_D\frac{\partial P}{\partial y}\text{d}A
$$
/Theorem/ (Green 公式)

> $$
> \int\_{\partial D}(P\text{d}x+Q\text{d}y)=\iint\_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\text{d}A
> $$
