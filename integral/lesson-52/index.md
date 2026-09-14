---
url: /integral/lesson-52/index.md
---
期末考试是 6.14，所以 5.17 要补一次很长时间的课.

## Fubini 定理

/Theorem/

> 设 $f$ 在 $\[a,b]\times\[c,d]$ 上可积，且
> $$
> F(x)=\int\_c^df(x,y)\text{d}y
> $$
> 有定义 ($\forall x\in\[a,b]$)，则 $F$ 在 $\[a,b]$ 上可积，且
> $$
> \iint\_{\[a,b]\times\[c,d]}f\text{d}x\text{d}y=\int\_a^bF(x)\text{d}x
> $$

/Proof/

> 我们需要操作一下 Darboux 上下和. 对于 $\[a,b]$ 剖分 $P\_1:\[a,b]=\bigcup\_iS\_i$，估计 $U(P\_1,F)$，$L(P\_1,F)$，下面以上和为例.
> $$
> \begin{aligned}
> U(P\_1,F)=\sum|S\_i|\sup\_{x\in S\_i}F(x)
> \end{aligned}
> $$
>
> > 再对 $\[c,d]$ 取一个剖分 $P\_2:\[c,d]=\bigcup\_j T\_j$，则由条件有
> > $$
> > F(x)\leq U(P\_2,f(x,y))
> > $$
>
> 所以：
> $$
> \begin{aligned}
> U(P\_1,F)&=\sum\_i|S\_i|\sup\_{x\in S\_i}F(x)\\
> &\leq\sum\_i|S\_i|\sup\_{x\in S\_i}\left(\sum\_j|T\_j|\sup\_{y\in T\_j}f(x,y)\right)\\
> &\leq\sum\_i|S\_i|\left(\sum\_j|T\_j|\sup\_{S\_i\times T\_j}f(x,y)\right)\\
> &\leq U(P\_1\times P\_2,f)
> \end{aligned}
> $$
> 同理，$L(P\_1,F)\geq L(P\_1\times P\_2,f)$.
>
> 从而，我们得到一个双侧的估计. 再利用 $f(x,y)$ 可积这一条件，可证：
> $$
> \iint\_{\[a,b]\times\[c,d]}f(x,y)\text{d}x\text{d}y=\int\_a^bF(x)\text{d}x
> $$
> 进一步写出：
> $$
> \iint\_If(x,y)\text{d}x\text{d}y=\int\_a^b\left(\int\_c^df(x,y)\text{d}y\right)\text{d}x
> $$
> 为方便引用，称这个式子为“累次积分”. 由于证明过程中的对称性，当然也可以写成对称形式：
> $$
> \iint\_If(x,y)\text{d}x\text{d}y=\int\_c^d\left(\int\_a^bf(x,y)\text{d}x\right)\text{d}y
> $$
> 更简便的写法是：
> $$
> \iint\_If(x,y)\text{d}x\text{d}y=\int\_a^b\text{d}x\int\_c^df(x,y)\text{d}y
> $$

有人说，这个定理固然很好，但是不是每一次积分都在一个矩体上. 因此我们对这个定理做一次推广：

/Theorem/

> 对一般的 $D$，设 $D\subseteq\R^2$ 有界，且 $f$ 在 $D$ 上可积，则有
> $$
> \iint\_Df=\iint\_If\chi\_D\overset{\text{Fubini}}{=}\int\_a^b\text{d}x\int\_c^df(x,y)\chi\_D(x,y)\text{d}y
> $$

这几乎是显然的. 但是实际上很多地方 $\chi\_D$ 为 $0$，所以很多时候没有必要全部算在积分之中. 设 $\forall x\in\[a,b]$，${x}\times\[c,d]$ 与 $D$ 的交线是有限个线段，则
$$
\int\_c^df(x,y)\chi\_D(x,y)\text{d}y=\sum\_{j}\int\_{s\_j}^{t\_j}f(x,y)\text{d}y
$$
但是写求和号会使得记号变得臃肿，我们简记为
$$
\=\int\_{{x}\times\R\cap D}f(x,y)\text{d}y
$$
当然这并不是一个 Riemann 积分的标准写法，但是一般不至于引起混淆.

有下面的几个特例：

(1) $D$ 为 $y=\phi\_1(x)$，$y=\phi\_2(x)$ 和 $x=a,b$ 围成的曲边四边形.

/Theorem/ (Fubini 定理的特例 1)

> 区域：
> $$
> D=\left{(x,y)\left|\begin{array}{}a\leq x\leq b\\
> \phi\_1(x)\leq y\leq\phi\_2(x)\end{array}\right.\right}
> $$
> 则积分为
> $$
> \iint\_Df=\int\_a^b\text{d}x\int\_{\phi\_1(x)}^{\phi\_2(x)}f(x,y)\text{d}y
> $$

(2) $D$ 为 $x=\psi\_1(y)$，$x=\psi\_2(y)$ 和 $y=c,d$ 围成的曲边四边形.

/Theorem/

> 区域：
> $$
> D=\left{(x,y)\left|\begin{array}{}c\leq y\leq d\\
> \psi\_1(y)\leq x\leq\psi\_2(y)\end{array}\right.\right}
> $$
> 则积分为
> $$
> \iint\_Df=\int\_c^d\text{d}y\int\_{\psi\_1(y)}^{\psi\_2(y)}f(x,y)\text{d}x
> $$

Fubini 定理保证了换序积分可以成立，同时对高维情况这个结论也是成立的.

以 3 维情况为例：

* 先积分 $1$ 维再积分 $2$ 维；
  $$
  \iiint\_\Omega f\text{d}x\text{d}y\text{d}z=\iint\_{\Omega\_{xy}}\text{d}x\text{d}y\int\_{({(x,y)}\times\R)\cap\Omega}f(x,y,z)\text{d}z
  $$

* 先积分 $2$ 维再积分 $1$ 维.
  $$
  \iiint\_\Omega f\text{d}x\text{d}y\text{d}z=\int\_{z\_1}^{z\_2}\text{d}z\iint\_{({z}\times\R^2)\cap\Omega}f(x,y,z)\text{d}x\text{d}y
  $$

对于 $n$ 维情况，先积分 $1$ 维再积分 $n-1$ 维，等价于先积分 $n-1$ 维再积分 $1$ 维.

/Example/

> $$
> \Omega=\left{(x,y,z)\left|\begin{array}{}x^2+y^2\leq1\x^2+z^2\leq1\y^2+z^2\leq1\end{array}\right.\right}
> $$
>
> (三个圆柱之交)
>
> 求：$\mathcal{Vol}(\Omega)$.
>
> ***
>
> 积分，
> $$
> \begin{aligned}
> \mathcal{Vol}(\Omega)&=\iiint\_\Omega\text{d}x\text{d}y\text{d}z\\
> &=\iint\_{x^2+y^2\leq1}\text{d}x\text{d}y\int\_{z^2\leq\max{1-x^2,1-y^2}}\text{d}z\\
> &=\iint\_{x^2+y^2\leq1}\text{d}x\text{d}y\cdot2\sqrt{\max{1-x^2,1-y^2}}
> \end{aligned}
> $$
> 讨论 $\max{1-x^2,1-y^2}$ 取值，可以分为两个区域再求积分.
> $$
> V\_1=\iint\_A\text{d}x\text{d}y\cdot2\sqrt{1-x^2}=\cdots
> $$
> 最后 $\mathcal{Vol}(\Omega)=V\_1+V\_2$.

/Example/ (Feynman 参数化 & Schwinger trick)

> ::: tip
>
> 这个等式由两人同时发现，他们因此争论是谁先发现的.
>
> :::
>
> 令区域如下：
> $$
> V=\left{(x\_0,\cdots,x\_n)\left|\begin{array}{}x\_i\geq0,,\quad\forall i\\
> x\_0+\cdots+x\_n\leq1\end{array}\right.\right}
> $$
> 在量子场论中常用积分：
> $$
> \begin{aligned}
> \&F\_n(a\_0,\cdots,a\_n)\\
> &=\int\cdots\int\_V\frac{\text{d}x\_1\cdots\text{d}x\_n}{(a\_1x\_1+\cdots+a\_nx\_n+a\_0(1-x\_1-\cdots-x\_n))^{n+1}}
> \end{aligned}
> $$
> 只能使用 Fubini 定理，积分最后一个维度，得到
> $$
> \begin{aligned}
> &*n(a\_0,\cdots,a\_n)\\&=\frac{1}{-n(a\_n-a\_0)}(F*{n-1}(a\_n;a\_0,\cdots,a\_{n-1})-F\_{n-1}(a\_0,\cdots,a\_{n-1}))
> \end{aligned}
> $$
> 只需要从低维结果猜出：
> $$
> F\_n(a\_0,\cdots,a\_n)=\frac{1}{n!a\_0a\_1\cdots a\_n}
> $$

## 换元公式

$\R^n$ 中两个向量 $\vec{a},\vec{b}$，张成一个平行四边形，得到 $S\_\Box=|\vec{a}\times\vec{b}|$.

多重积分可以理解为加权的 volume，所以我们考虑用线性变换，换一个基底之后重新计算这一体积.

回忆线性代数中的余弦定理：
$$
\cos\theta=\frac{\braket{\vec{a},\vec{b}}}{|\vec{a}|\cdot|\vec{b}|}
$$
因此平行四边形面积公式是
$$
S\_\Box=\sqrt{|\vec{a}|^2|\vec{b}|^2-\braket{\vec{a},\vec{b}}^2}
$$
换一组基底，应该仍然可以用 Gram 矩阵表示 $S\_\Box$，
$$
S\_\Box=\left|\det\begin{pmatrix}
a\_1\&a\_2\b\_1\&b\_2
\end{pmatrix}\right|
$$
如果推广到三维，有
$$
\begin{aligned}
S\_\Box&=\sqrt{(a\_1^2+a\_2^2+a\_3^2)(b\_1^2+b\_2^2+b\_3^2)-(a\_1b\_1+a\_2b\_2+a\_3b\_3)^2}\\\\
&=\sqrt{(a\_1b\_3-a\_3b\_1)^2+(a\_2b\_3-a\_3b\_2)^2+(a\_1b\_2-a\_2b\_1)^2}\\\\
&=|(a\_2b\_3-a\_3b\_2,a\_3b\_1-a\_1b\_3,a\_1b\_2-a\_2b\_1)|
\end{aligned}
$$
这就定义了 $\vec{a}\times\vec{b}$，为了记忆这一公式，写成行列式：
$$
\det\begin{pmatrix}
\hat{i}&\hat{j}&\hat{k}\\
a\_1\&a\_2\&a\_3\\
b\_1\&b\_2\&b\_3
\end{pmatrix}=\vec{a}\times\vec{b}
$$
叉乘的方向？考虑 $\vec{a}\cdot(\vec{a}\times\vec{b})$：显然为 $0$；同样，$\vec{b}\cdot(\vec{a}\times\vec{b})=0$，所以叉乘的方向垂直于 $\vec{a},\vec{b}$ 张成的平面. 但是还是有两种选择，我们选择右手系.

对于一个三维空间 $V$，要和 $\R^3$ 建立联系，需要一种同构，这里的映射就是将 $\R^3$ 中的基底放到 $V$ 中. 叉乘是在 $\R^3$ 中定义的，因此我们需要建立这样的一种关系：

/Claim/

> 若 $\hat{e}\_x,\hat{e}\_y,\hat{e}\_z$ 构成右手系，则对于 $\vec{a},\vec{b},\vec{c}\in\R^3$，有 $\Phi(a),\Phi(b),\Phi(c)$ 构成右手系 $\Longleftrightarrow$
> $$
> \det\begin{pmatrix}
> a\_1\&a\_2\&a\_3\b\_1\&b\_2\&b\_3\c\_1\&c\_2\&c\_3
> \end{pmatrix}>0
> $$
> (讲义上有证明)

/Theorem/

> $P$ 的 $k$ 维 volume $=\sqrt{\det G}$.
