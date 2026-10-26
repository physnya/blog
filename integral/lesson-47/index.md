---
url: /integral/lesson-47/index.md
---
## 反函数定理

总结一下上节课证明反函数定理时用到的几个步骤的作用.

设 $\vec{x}=f(\vec{x})=\vec{0}$，$J\_f(\vec{0})=\text{Id}$.

1. $f(x)=x+\alpha(x)$，$J\_\alpha(0)=0$ $\Longrightarrow$ (微分中值定理) $|\alpha(x)-\alpha(y)|\leq\frac{1}{2}|x-y|$ (至少压缩为原来的一半) $\Longrightarrow$ $f$ 在 $B\_{2R}(0)$ 中为单射.

2. 对于 $T(x)=w-\alpha(x)$，用压缩映像 ($|w|\<R/2$) $\Longrightarrow$ 任何 $|w|\<R/2$，$w$ 在 $\overline{B\_{R}(0)}$ 中有原像点 $\Longrightarrow$ 取 $V=B\_{R/2}(0)$，$U=f^{-1}\[V]\cap B\_{2R}(0)$，得到 $f:U\to V$ 为双射.

3. 要证明 $f^{-1}:V\to U$ 是 $C^1$ 的. 为此有三个步骤：

   a. 证明 $f^{-1}:V\to U$ 是连续的 (为证明 3.b)；

   b. 证明 $f^{-1}:V\to U$ 是可微的. 证明 $\longleftrightarrow$ 计算极限式，用复合极限定理 $\Longrightarrow$ 不妨 $J\_f(x)=\text{Id}$，验证 $f^{-1}$ 在 $f(x)$ 处微分为 $\text{Id}$
   $$
   \Longrightarrow\lim\_{v\to0}\frac{f^{-1}(f(x)+v)-x-v}{|v|}=0
   $$
   不好直接计算，于是换元 $h=f^{-1}(f(x)+v)-x$ ($v=f(x+h)-f(x)$) $\Longrightarrow$ 由 $J\_f(x)=\text{Id}$ 可设 $f(x+h)=f(x)+h+\alpha(h)$，$\underset{h\to0}{\lim}\alpha(h)/|h|=0$
   $$
   \Longrightarrow\lim\_{h\to0}\frac{-\alpha(h)}{|h+\alpha(h)|}=0
   $$
   Need：当 $v\to0$ 时，$h\to$ ? 用到 3.a 证明过的 $f^{-1}$ 连续 $\Longrightarrow$ $h\to0$.

   c. 证明 $f^{-1}:V\to U$ 是 $C^1$ 的 $\Longleftarrow$ 算 $f^{-1}$ 的偏导数 $\Longleftarrow$ $J\_{f^{-1}}$ $\Longleftarrow$ 用 chain rule，需要已知 $f\in C^1$，$f^{-1}$ 可微，$f\circ f^{-1}=\text{Id}$，$f^{-1}\circ f=\text{Id}$. 其中 $f^{-1}$ 可微由 3.b 证明

   $\Longrightarrow$ $J\_{f^{-1}}(y)=J\_{f^{-1}}(f(x))\circ f^{-1}(y)=\[J\_f(x)]^{-1}\circ f^{-1}(y)$，$J\_f^{-1}$ 的矩阵元均是 $J\_f$ 的有理式，而 $f\in C^1$ 故 $J\_f$ 的矩阵元均是连续函数，于是 $J\_f^{-1}$ 矩阵元均连续，再复合连续函数 $f^{-1}(y)$ (已经在 3.a 中证明过连续性)，仍然连续

   $\Longrightarrow$ $J\_{f^{-1}}$ 的矩阵元均连续，证明了 $f^{-1}\in C^1$.

以上是我们对上节课证明过程的回忆与总结.

下面看几个例子：

/Example/

> $n=1$，$f:\R\to\R$ 是 $C^1$ 的，这时反函数定理为 (上学期学过)
>
> /Theorem/
>
> > 若 $J\_f(x\_0)$ 可逆 ($\Longleftrightarrow$ $f'(x\_0)\neq0$ $\Longleftrightarrow$ $J\_f(x\_0)=\[f'(x\_0)]\_{|x|}$)，则 $f$ 在 $x\_0$ 附近有 $C^1$ 的逆.
>
> 这学期我们知道了一些新的内容：$n=2$，$f:\R^2\to\R^2$，$f(x,y)=(u(x,y),v(x.y))$. 反函数定理：
>
> /Theorem/
>
> > 若 $J\_f(x\_0,y\_0)$ 可逆，也就是：
> > $$
> > \det\begin{pmatrix}
> > \frac{\partial u}{\partial x}&\frac{\partial u}{\partial y}\\
> > \frac{\partial v}{\partial x}&\frac{\partial v}{\partial y}
> > \end{pmatrix}\_{(x\_0,y\_0)}\neq0
> > $$
> > 则在 $(x\_0,y\_0)$ 附近 $f$ 有 $C^1$ 的逆 $f^{-1}$.
> >
> > 结论也可以表述为 (在物理中常用)：在 $x\_0,y\_0$ 附近，$x,y$ 可以表示为 $u,v$ 的 $C^1$ 函数 $x=x(u,v);y=y(u,v)$. 物理学中经常还要求 $x(u,v),y(u,v)$ 的偏导数：
> >
> > /Method/ (1)
> >
> > > $$
> > > \begin{aligned}
> > > J\_{f^{-1}}(u,v)&=\[J\_f(x,y)]^{-1}\\\\
> > > \begin{pmatrix}
> > > \partial\_ux&\partial\_vx\\
> > > \partial\_uy&\partial\_vy
> > > \end{pmatrix}&=\begin{pmatrix}
> > > \partial\_xu&\partial\_yu\\
> > > \partial\_xv&\partial\_yv
> > > \end{pmatrix}=\frac{1}{u\_xv\_y-u\_yv\_x}\begin{pmatrix}
> > > v\_y&-u\_y\\
> > > -v\_x\&u\_x
> > > \end{pmatrix}
> > > \end{aligned}
> > > $$
> >
> > /Method/ (2)
> >
> > > 更加老套的微积分书中会说，直接对恒等式两边求导. 不过这种语言更加难以理解，所以略去.

## 隐函数定理

隐函数一般有两个来源：

* 物理中，我们常说“每加入一个方程进入系统，就会少一个自由度”，这句话的精确含义是什么？

* 数学 / 几何中，几何空间大都来自于方程的解集：

  $S^{n-1}={(x\_1,\cdots,x\_n)|x\_1^2+\cdots+x\_n^2-1=0}={f(x\_1,\cdots,x\_n)=0}$

  一般地，

  $$
  S=\left{(x\_1,\cdots,x\_n)\left|\begin{array}{}
  g\_1(x\_1,\cdots,x\_n)=0\\
  \cdots\\
  g\_k(x\_1,\cdots,x\_n)=0
  \end{array}\right.\right}
  $$

  问：$S$ 的维数是多少？(猜测是 $\dim S=n-k$)，$S$ 在每个点附近的形状怎么样？

最简单的情形是 $n=2$，$k=1$，$S={F(x,y)=0}$. 问：$S$ 在 $(x\_0,y\_0)$ 附近的形状？

$\longleftrightarrow$ $(x\_0,y\_0)$ 附近，$S$ 有哪些点？

$\longleftrightarrow$ 找更多的解 $x=x\_0+\Delta x,y=y\_0+\Delta y$ (==微分学最重要的是近似==)，$0=F(x\_0+\Delta x,y\_0+\Delta y)$ (微分学近似).

Taylor 展开到一阶：
$$
\begin{aligned}
F(x\_0,y\_0)+\Delta xF\_x(x\_0,y\_0)+\Delta yF\_y(x\_0,y\_0)\\\\\Longrightarrow\Delta xF\_x(x\_0,y\_0)+\Delta yF\_y(x\_0,y\_0)=0
\end{aligned}
$$
若 $F\_y(x\_0,y\_0)\neq0$，$\Delta y\approx-F\_x(x\_0,y\_0)/F\_y(x\_0,y\_0)\cdot\Delta x$，因此对于每一个 $\Delta x$，都能唯一地给出一个近似解. 于是我们就能获得 $(x\_0,y\_0)$ 附近的一族近似解，形如一条直线 (因为 $\Delta x/\Delta y$ 是固定的).

我们相信，这一族近似解可以被我们变为一族精确解，这种“相信 / 猜想”就是隐函数定理.

/Theorem/

> 设 $f\in C^1(\R^2)$ (主要是为了能够做 Taylor 展开)，$(x\_0,y\_0)\in S={(x,y)|F(x,y)=0}$.
>
> 1. 若 $F\_y(x\_0,y\_0)\neq0$，则 $\exist x\_0$ 附近的在 $\R$ 中的开区间 $U$ 以及 $C^1$ 映射 $g:U\to\R$ 使得 ${(x,g(x))|\forall x\in U}\subseteq S$ (即 $F(x,g(x))=0,\forall x\in U$).
>
>    称 $g:U\to\R$ 为由方程 $F(x,y)=0$ 所确定的、$y$ 关于 $x$ 的隐函数. 进一步，有
>    $$
>    g'(x)=-\frac{F\_x(x,g(x))}{F\_y(x,g(x))},,\quad\forall x\in U
>    $$
>
> 2. 若 $F\_x(x\_0,y\_0)\neq0$，则类似上面，可定义 $x=h(y)$. 这时有
>    $$
>    h'(y)=-\frac{F\_y(h(x),y)}{F\_x(h(x),y)},,\quad\forall y\in V
>    $$

/Proof/ (要用到反函数定理)

> 构造 $f:\R^2\to\R^2$ 为 $f(x,y)=(x,F(x,y))$，则 $f(x\_0,y\_0)=(x\_0,0)$，Jacobian 的行列式为
> $$
> \det J\_f(x\_0,y\_0)=\det\begin{pmatrix}
> 1&0\\
> \frac{\partial F(x\_0,y\_0)}{\partial x}&\frac{\partial F(x\_0,y\_0)}{\partial y}
> \end{pmatrix}=F\_y(x\_0,y\_0)\neq0
> $$
> 可用反函数定理，$\exist(x\_0,y\_0)$ 的邻域 $N$，$\exist (x,0)$ 的邻域 $W$，使得 $f:N\to W$ 为双射，且 $f^{-1}:W\to N$ 是 $C^1$ 的，由此可在 $N$ 中求出 $F(x,y)=0$ 的全部解.
>
> $(x,y)\in N$ 且 $F(x,y)=0$
>
> $\Longleftrightarrow$ $(x,y)\in N$ 且 $f(x,y)=(x,0)$
>
> $\Longleftrightarrow$ (利用双射条件) $(x,0)\in W$ 且 $(x,y)=f^{-1}(x,0)$
>
> $\Longleftrightarrow$ $(x,0)\in W$ 且 $y=(f^{-1}(x,0)$ 的第二坐标分量$)$
>
> $\Longleftrightarrow$ $(x,0)\in W$ 且 $y=p\_2(f^{-1}(x,0))=p\_2\circ f^{-1}(x,0)$.
>
> 令 $g(x)=p\_2\circ f^{-1}(x,0)$，由 $f^{-1}\in C^1$，$p\_2\in C^1$ 知道 $g\in C^1$，得证.
>
> 同时由上面的证明过程，我们还可以知道 $N$ 中 $F(x,y)=0$ 的全部解 $(x,y)$ 形如 $(x,0)\in W$ 且 $y=g(x)$.
>
> 最后，取 $x\_0$ 在 $\R$ 中开区间邻域 $U$ 使得 $U\times{0}\subseteq W$，则 $\forall x\in U$，$(x,g(x))\in S$.

求隐函数的偏导是简单的，困难的部分就是上面证明的 $\exist C^1$ 的隐函数.

若已经存在 $C^1$ 的隐函数，则有恒等式：$F(x,g(x))=0$，$\forall x\in U$. 求导：
$$
0=\frac{\text{d}}{\text{d}x}F(x,g(x))\overset{\text{chain rule}}{=}F\_x(x,g(x))+F\_y(x,g(x))g'(x)
$$
所以得到上面写过的 $g'(x)$ 表达式.

/Remark/

> 实际上，我们的证明过程中给出的比我们最开始想要得到的结果更强.
>
> 定理中只说了 $(x,g(x))$ 是 $F=0$ 的解，但是证明中我们发现 $N$ 中 $F=0$ 全部的解均形如 $(x,g(x))$.
>
> ***
>
> $F(x,y)=0$ 时，有两种情形：
>
> * $F\_y(x\_0,y\_0)\neq0$ $\Longrightarrow$ $y$ 是 $x$ 的隐函数；
> * $F\_x(x\_0,y\_0)\neq0$ $\Longrightarrow$ $x$ 是 $y$ 的隐函数.
>
> 这两种情形说明 $S$ 在 $(x\_0,y\_0)$ 附近是“规则”的，在第一种情况下，$S$ 在 $(x\_0,y\_0)$ 附近 $\cong$ $U$ (开区间)：$P:U\to S\cap N$，$Q:S\cap N\to U$，它们互逆，给出了一个 $C^1$ 的 ==微分同胚==.
>
> (`怎么开始说这个了.jpg`)
>
> 总结一下：若两个偏导数有一个不为零，则 $S$ 在 $(x\_0,y\_0)$ 附近的解集形如一个 $\R^1$.
>
> /Remark/
>
> > 若两个偏导数全部为零，那么这个解集会很坏吗？
> >
> > 那很坏了.
> >
> > $S$ 在 $(x\_0,y\_0)$ 附近形状不规则.
> >
> > /Example/
> >
> > > $F(x,y)=xy$，在 $(0,0)$ 附近会出现分叉；
> > >
> > > 更有甚者，$F(x,y)=xy(x+y)$，会出现三分叉，而且这些奇异的点无法具体分类，因为可能性太多.
>
> /Definition/
>
> > 称 $(x\_0,y\_0)$ 是 $S={F(x,y)=0}$ 的光滑点，若 $(F\_x,F\_y)\neq(0,0)$；否则称奇异点 (singular point).
>
> 一般我们在微积分中遇到的都是光滑点，遇到奇异点会特殊说明，并且需要非常小心地处理.

出于推广的精神，我们写出一般的隐函数定理：

/Theorem/ (一般的隐函数定理)

> 设 $F\in C^1(\R^n)$，$\vec{a}=(a\_1,\cdots,a\_n)\in S={F(x\_1,\cdots,x\_n)=0}$，且 $F\_{x\_n}(\vec{a})\neq0$.
>
> /Draft/
>
> > $$
> > \begin{aligned}
> > 0&=F(a\_1+\Delta x\_1,\cdots,a\_n+\Delta x\_n)\\\\
> > &\approx F\_{x\_1}(a)\Delta x\_1+\cdots+F\_{x\_n}(a)\Delta x\_n
> > \end{aligned}
> > $$
> >
> > 若 $F\_{x\_n}(a)\neq0$，则可以把 $\Delta x\_n$ 用其他的量表示，因此 $(\Delta x\_1,\cdots,\Delta x\_{n-1})\rightsquigarrow$ 确定了一个近似解.
>
> 则存在 $(a\_1,\cdots,a\_{n-1})$ 在 $\R^{n-1}$ 中的开邻域 $U$ 以及 $C^1$ 隐函数 $g:U\to\R$ 使得：
> $$
> F(x\_1,\cdots,x\_{n-1},g(x\_1,\cdots,x\_{n-1}))=0,,\quad\forall(x\_1,\cdots,x\_{n-1})\in U
> $$

更一般地，考虑有 $k$ 个方程的情形：

/Theorem/ (终极进化版)

> 设 $F\_1,\cdots,F\_k\in C^1(\R^n)$，记 $S$ 为：
> $$
> S:={(x\_1,\cdots,x\_{n})|F\_1(x\_1,\cdots,x\_n)=\cdots=F\_k(x\_1,\cdots,x\_n)=0}
> $$
> (上面的下标表示第几个函数，而不是偏导数的意思)
>
> 设 $\vec{a}=(a\_1,\cdots,a\_n)\in S$.
>
> /Draft/
>
> > $$
> > \left{\begin{array}{lr}
> > 0\approx\frac{\partial F\_1}{\partial x\_1}\Delta x\_1+\cdots+\frac{\partial F\_1}{\partial x\_n}\Delta x\_n\\
> > \cdots\\
> > 0\approx\frac{\partial F\_k}{\partial x\_1}\Delta x\_1+\cdots+\frac{\partial F\_k}{\partial x\_n}\Delta x\_n
> > \end{array}\right.
> > $$
> >
> > $n$ 个未知元、$k$ 个线性方程，因此有 $k$ 个主元 (need $k\times k$ 系数矩阵可逆)、$n-k$ 个自由元.
>
> 若有：
> $$
> \det\begin{pmatrix}
> \frac{\partial F\_1(\vec{a})}{\partial x\_{n-k+1}}&\cdots&\frac{\partial F\_1(\vec{a})}{\partial x\_n}\\
> \vdots&\ddots&\vdots\\
> \frac{\partial F\_k(\vec{a})}{\partial x\_{n-k+1}}&\cdots&\frac{\partial F\_k(\vec{a})}{\partial x\_n}
> \end{pmatrix}\neq0
> $$
> 则 $x\_{n-k+1},\cdots,x\_n$ 可表示为 $x\_1,\cdots,x\_{n-k}$ 的 $C^1$ 隐函数，具体而言，$\exist(a\_1,\cdots,a\_{n-k})$ 在 $\R^{n-k}$ 中的开邻域 $U$ 以及 $k$ 个 $C^1$ 映射 $g\_{n-k+1},\cdots,g\_{n}:U\to\R$ 使得 $\forall(x\_1,\cdots,x\_{n-k})\in U$，则：
> $$
> (x\_1,\cdots,x\_{n-k},g\_{n-k+1}(x\_1,\cdots,x\_{n-k}),\cdots,g\_n(x\_1,\cdots,x\_{n-k}))\in S
> $$
> /Definition/
>
> > 称 $\vec{a}\in S$ 是 $S$ 的光滑点，若至少一个 version 的隐函数定理条件成立，也就是说：
> > $$
> > \left.\frac{\partial(F\_1,\cdots,F\_k)}{\partial(x\_1,\cdots,x\_n)}\right|*{\vec{a}}=\begin{pmatrix}
> > \frac{\partial F\_1(\vec{a})}{\partial x\_1}&\cdots&\frac{\partial F\_1(\vec{a})}{\partial x\_n}\\
> > \vdots&\ddots&\vdots\\
> > \frac{\partial F\_k(\vec{a})}{\partial x\_1}&\cdots&\frac{\partial F\_k(\vec{a})}{\partial x\_n}
> > \end{pmatrix}*{k\times n}
> > $$
> > 满秩 $(rk=k)$.
> >
> > 若不满秩，则为奇异点.

## 隐函数定理的应用

### 切空间

回忆我们中学时学到的“切向量”、“切平面”定义，考虑一个质点被限制在在某个区域上运动所产生的速度矢量：

/Definition/ (切向量和切空间)

> 设 $M\subseteq\R^n$，$p\_0\in M$，所谓 $M$ 在 $p\_0$ 处的一个切向量 $\vec{v}$，是指 $\exist C^1$ path $p:(-\varepsilon,\varepsilon)\to M$ ($M$ 上的运动路径) 使得 $p(0)=\vec{p}\_0$，$p'(0)=\vec{v}$.
>
> 进一步，可以定义 $M$ 在 $p\_0$ 处的切空间为 $\text{T}\_{p\_0}M={M$ 在 $p\_0$ 处所有切向量$}$.

我们想要写出这个切空间的具体表达式，也就是：已知 $M={F\_1=\cdots=F\_k=0}$ 以及 $M$ 的光滑点 $\vec{a}$，确定 $\text{T}\_{\vec{a}}M$.

/Theorem/

> $\text{T}\_{\vec{a}}M=(\text{span}{\nabla F\_1(\vec{a}),\cdots,\nabla F\_k(\vec{a})})^\perp$ (法向量所张成空间的正交补).

/Proof/

> (1) 证明 $\text{LHS}\subseteq\text{RHS}$.
>
> 设 $\vec{v}$ 是 $M$ 在 $\vec{a}$ 处的切向量，由定义知存在一个 $C^1$ 的路径 $p(t)=(p\_1(t),\cdots,p\_n(t))$ 使得 $p(0)=\vec{a}$，$p'(0)=\vec{v}$.
>
> 由 $p(t)\in M$ 知，$F\_i(p\_1(t),\cdots,p\_n(t))=0$，$\forall t\in(-\varepsilon,\varepsilon)$.
>
> 求导：
> $$
> 0=\left.\frac{\text{d}}{\text{d}t}F\_i(p\_1(t),\cdots,p\_n(t))\right|\_{t=0}=\nabla F\_i(\vec{a})\cdot p'(0)=\nabla F\_i(\vec{a})\cdot\vec{v}
> $$
> 因此 $\vec{v}\perp\nabla F\_i(\vec{a})$，因此 $\vec{v}\perp\text{span}{\nabla F\_i(\vec{a})}$，也就是 $\text{LHS}\subseteq\text{RHS}$.
>
> (2) 证明 $\text{RHS}\subseteq\text{LHS}$ (这个稍微难一点，要用到隐函数定理)
>
> 设 $\vec{w}\in\text{RHS}$，则 $\vec{w}\perp\nabla F\_i(\vec{a})$ ($\forall1\leq i\leq k$).
>
> 来证明 $\vec{w}\in\text{T}\_{\vec{a}}M$ $\Longleftrightarrow$ 构造 $M$ 上的一种运动，为 $p:(-\varepsilon,\varepsilon)\to M$，使得 $p'(0)=\vec{w}$.
>
> 由于 $\vec{a}$ 是 $M$ 的光滑点，所以 $\[\frac{\partial F\_i(\vec{a})}{\partial x\_j}]*{i,j}$ 满秩，也就是 $\exist k\times k$ 子式可逆，不妨取：
> $$
> \left\[\frac{\partial F\_i(\vec{a})}{\partial x\_j}\right]*{1\leq i\leq k,n-k+1\leq j\leq n}
> $$
> 可逆.
>
> *回忆以隐函数为分量的点 $\in M$，容易构造 $M$ 上的 path*.
>
> 这时 $x\_{n-k+1},\cdots,x\_n$ 可表示为 $x\_1,\cdots,x\_{n-k}$ 的隐函数 $g\_{n-k+1},\cdots,g\_n$，即 $\forall(x\_1,\cdots,x\_{n-k})\in U$，有
> $$
> (x\_1,\cdots,x\_{n-k},g\_{n-k+1}(x\_1,\cdots,x\_{n-k}),\cdots,g\_n(x\_1,\cdots,x\_{n-k}))\in M
> $$
> 构造这样的 path：$p:(-\varepsilon,\varepsilon)\to M$ 为 (我们希望 $p'(0)=\vec{w}$，但是先不管后 $k$ 个分量)
> $$
> p=(a\_1+tw\_1,\cdots,g\_{n-k+1}(a\_1+tw\_1,\cdots),\cdots)\in M
> $$
> 且 $p(0)=\vec{a}$，因此 $p'(0)\in\text{T}*{\vec{a}}M=\text{LHS}$，记 $p'(0)=(w\_1.\cdots,w*{n-k},v\_{n-k+1},\cdots,v\_n)$，我们要证明 $p'(0)=\vec{w}$.
>
> 因为 $p'(0)\in\text{T}\_{\vec{a}}M\subseteq\text{RHS}$，因此 $p'(0)\perp\nabla F\_i(\vec{a})$，由 $\vec{w}\perp(\text{span})^\perp$ 知：$\vec{w}\perp\nabla F\_i(\vec{a})$.
>
> $\Longrightarrow$ $p'(0)-\vec{w}\perp$ any $\nabla F\_i(\vec{a})$，其中：
> $$
> p'(0)-\vec{w}=(0,\cdots,0,v\_{n-k+1}-w\_{n-k+1},\cdots.v\_n-w\_n)
> $$
> 所以：
> $$
> \begin{pmatrix}
> \partial\_1F\_1(a)&\cdots&\partial\_nF\_1(a)\\
> \partial\_1F\_2(a)&\cdots&\partial\_nF\_2(a)\\
> \vdots&\ddots&\vdots\\
> \vdots&\ddots&\vdots\\
> \partial\_1F\_{k-1}(a)&\cdots&\partial\_nF\_{k-1}(a)\\
> \partial\_1F\_k(a)&\cdots&\partial\_nF\_k(a)
> \end{pmatrix}\begin{pmatrix}
> 0\\\vdots\0\v\_{n-k+1}-w\_{n-k+1}\\\vdots\v\_n-w\_n
> \end{pmatrix}=\begin{pmatrix}
> 0\\\vdots\0
> \end{pmatrix}
> $$
> 可证 $\vec{v}*\*=\vec{w}*\*$ (非零部分相等)，于是 $\vec{w}=\vec{v}=p'(0)\in\text{T}\_{\vec{a}}M$，得证.
