---
title: Lesson 52 Fubini 定理
permalink: /integral/lesson-52/
createTime: 2025/5/9 12:20:32
---
期末考试是 6.14，所以 5.17 要补一次很长时间的课.

## Fubini 定理

/Theorem/

> 设 $f$ 在 $[a,b]\times[c,d]$ 上可积，且
> $$
> F(x)=\int_c^df(x,y)\text{d}y
> $$
> 有定义 ($\forall x\in[a,b]$)，则 $F$ 在 $[a,b]$ 上可积，且
> $$
> \iint_{[a,b]\times[c,d]}f\text{d}x\text{d}y=\int_a^bF(x)\text{d}x
> $$

/Proof/

> 我们需要操作一下 Darboux 上下和. 对于 $[a,b]$ 剖分 $P_1:[a,b]=\bigcup_iS_i$，估计 $U(P_1,F)$，$L(P_1,F)$，下面以上和为例.
> $$
> \begin{aligned}
> U(P_1,F)=\sum|S_i|\sup_{x\in S_i}F(x)
> \end{aligned}
> $$
>
> > 再对 $[c,d]$ 取一个剖分 $P_2:[c,d]=\bigcup_j T_j$，则由条件有
> > $$
> > F(x)\leq U(P_2,f(x,y))
> > $$
>
> 所以：
> $$
> \begin{aligned}
> U(P_1,F)&=\sum_i|S_i|\sup_{x\in S_i}F(x)\\
> &\leq\sum_i|S_i|\sup_{x\in S_i}\left(\sum_j|T_j|\sup_{y\in T_j}f(x,y)\right)\\
> &\leq\sum_i|S_i|\left(\sum_j|T_j|\sup_{S_i\times T_j}f(x,y)\right)\\
> &\leq U(P_1\times P_2,f)
> \end{aligned}
> $$
> 同理，$L(P_1,F)\geq L(P_1\times P_2,f)$.
>
> 从而，我们得到一个双侧的估计. 再利用 $f(x,y)$ 可积这一条件，可证：
> $$
> \iint_{[a,b]\times[c,d]}f(x,y)\text{d}x\text{d}y=\int_a^bF(x)\text{d}x
> $$
> 进一步写出：
> $$
> \iint_If(x,y)\text{d}x\text{d}y=\int_a^b\left(\int_c^df(x,y)\text{d}y\right)\text{d}x
> $$
> 为方便引用，称这个式子为“累次积分”. 由于证明过程中的对称性，当然也可以写成对称形式：
> $$
> \iint_If(x,y)\text{d}x\text{d}y=\int_c^d\left(\int_a^bf(x,y)\text{d}x\right)\text{d}y
> $$
> 更简便的写法是：
> $$
> \iint_If(x,y)\text{d}x\text{d}y=\int_a^b\text{d}x\int_c^df(x,y)\text{d}y
> $$

有人说，这个定理固然很好，但是不是每一次积分都在一个矩体上. 因此我们对这个定理做一次推广：

/Theorem/

> 对一般的 $D$，设 $D\subseteq\R^2$ 有界，且 $f$ 在 $D$ 上可积，则有
> $$
> \iint_Df=\iint_If\chi_D\overset{\text{Fubini}}{=}\int_a^b\text{d}x\int_c^df(x,y)\chi_D(x,y)\text{d}y
> $$

这几乎是显然的. 但是实际上很多地方 $\chi_D$ 为 $0$，所以很多时候没有必要全部算在积分之中. 设 $\forall x\in[a,b]$，$\{x\}\times[c,d]$ 与 $D$ 的交线是有限个线段，则
$$
\int_c^df(x,y)\chi_D(x,y)\text{d}y=\sum_{j}\int_{s_j}^{t_j}f(x,y)\text{d}y
$$
但是写求和号会使得记号变得臃肿，我们简记为
$$
=\int_{\{x\}\times\R\cap D}f(x,y)\text{d}y
$$
当然这并不是一个 Riemann 积分的标准写法，但是一般不至于引起混淆.

有下面的几个特例：

(1) $D$ 为 $y=\phi_1(x)$，$y=\phi_2(x)$ 和 $x=a,b$ 围成的曲边四边形.

/Theorem/ (Fubini 定理的特例 1)

> 区域：
> $$
> D=\left\{(x,y)\left|\begin{array}{}a\leq x\leq b\\
> \phi_1(x)\leq y\leq\phi_2(x)\end{array}\right.\right\}
> $$
> 则积分为
> $$
> \iint_Df=\int_a^b\text{d}x\int_{\phi_1(x)}^{\phi_2(x)}f(x,y)\text{d}y
> $$

(2) $D$ 为 $x=\psi_1(y)$，$x=\psi_2(y)$ 和 $y=c,d$ 围成的曲边四边形.

/Theorem/

> 区域：
> $$
> D=\left\{(x,y)\left|\begin{array}{}c\leq y\leq d\\
> \psi_1(y)\leq x\leq\psi_2(y)\end{array}\right.\right\}
> $$
> 则积分为
> $$
> \iint_Df=\int_c^d\text{d}y\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\text{d}x
> $$

Fubini 定理保证了换序积分可以成立，同时对高维情况这个结论也是成立的.

以 3 维情况为例：

* 先积分 $1$ 维再积分 $2$ 维；
  $$
  \iiint_\Omega f\text{d}x\text{d}y\text{d}z=\iint_{\Omega_{xy}}\text{d}x\text{d}y\int_{(\{(x,y)\}\times\R)\cap\Omega}f(x,y,z)\text{d}z
  $$

* 先积分 $2$ 维再积分 $1$ 维.
  $$
  \iiint_\Omega f\text{d}x\text{d}y\text{d}z=\int_{z_1}^{z_2}\text{d}z\iint_{(\{z\}\times\R^2)\cap\Omega}f(x,y,z)\text{d}x\text{d}y
  $$

对于 $n$ 维情况，先积分 $1$ 维再积分 $n-1$ 维，等价于先积分 $n-1$ 维再积分 $1$ 维.

/Example/

> $$
> \Omega=\left\{(x,y,z)\left|\begin{array}{}x^2+y^2\leq1\\x^2+z^2\leq1\\y^2+z^2\leq1\end{array}\right.\right\}
> $$
>
> (三个圆柱之交)
>
> 求：$\mathcal{Vol}(\Omega)$.
>
> ---
>
> 积分，
> $$
> \begin{aligned}
> \mathcal{Vol}(\Omega)&=\iiint_\Omega\text{d}x\text{d}y\text{d}z\\
> &=\iint_{x^2+y^2\leq1}\text{d}x\text{d}y\int_{z^2\leq\max\{1-x^2,1-y^2\}}\text{d}z\\
> &=\iint_{x^2+y^2\leq1}\text{d}x\text{d}y\cdot2\sqrt{\max\{1-x^2,1-y^2\}}
> \end{aligned}
> $$
> 讨论 $\max\{1-x^2,1-y^2\}$ 取值，可以分为两个区域再求积分.
> $$
> V_1=\iint_A\text{d}x\text{d}y\cdot2\sqrt{1-x^2}=\cdots
> $$
> 最后 $\mathcal{Vol}(\Omega)=V_1+V_2$.

/Example/ (Feynman 参数化 & Schwinger trick)

> ::: tip
>
> 这个等式由两人同时发现，他们因此争论是谁先发现的.
>
> :::
>
> 令区域如下：
> $$
> V=\left\{(x_0,\cdots,x_n)\left|\begin{array}{}x_i\geq0\,,\quad\forall i\\
> x_0+\cdots+x_n\leq1\end{array}\right.\right\}
> $$
> 在量子场论中常用积分：
> $$
> \begin{aligned}
> &F_n(a_0,\cdots,a_n)\\
> &=\int\cdots\int_V\frac{\text{d}x_1\cdots\text{d}x_n}{(a_1x_1+\cdots+a_nx_n+a_0(1-x_1-\cdots-x_n))^{n+1}}
> \end{aligned}
> $$
> 只能使用 Fubini 定理，积分最后一个维度，得到
> $$
> \begin{aligned}
> &_n(a_0,\cdots,a_n)\\&=\frac{1}{-n(a_n-a_0)}(F_{n-1}(a_n;a_0,\cdots,a_{n-1})-F_{n-1}(a_0,\cdots,a_{n-1}))
> \end{aligned}
> $$
> 只需要从低维结果猜出：
> $$
> F_n(a_0,\cdots,a_n)=\frac{1}{n!a_0a_1\cdots a_n}
> $$

## 换元公式

$\R^n$ 中两个向量 $\vec{a},\vec{b}$，张成一个平行四边形，得到 $S_\Box=|\vec{a}\times\vec{b}|$.

多重积分可以理解为加权的 volume，所以我们考虑用线性变换，换一个基底之后重新计算这一体积.

回忆线性代数中的余弦定理：
$$
\cos\theta=\frac{\braket{\vec{a},\vec{b}}}{|\vec{a}|\cdot|\vec{b}|}
$$
因此平行四边形面积公式是
$$
S_\Box=\sqrt{|\vec{a}|^2|\vec{b}|^2-\braket{\vec{a},\vec{b}}^2}
$$
换一组基底，应该仍然可以用 Gram 矩阵表示 $S_\Box$，
$$
S_\Box=\left|\det\begin{pmatrix}
a_1&a_2\\b_1&b_2
\end{pmatrix}\right|
$$
如果推广到三维，有
$$
\begin{aligned}
S_\Box&=\sqrt{(a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2)-(a_1b_1+a_2b_2+a_3b_3)^2}\\\\
&=\sqrt{(a_1b_3-a_3b_1)^2+(a_2b_3-a_3b_2)^2+(a_1b_2-a_2b_1)^2}\\\\
&=|(a_2b_3-a_3b_2,a_3b_1-a_1b_3,a_1b_2-a_2b_1)|
\end{aligned}
$$
这就定义了 $\vec{a}\times\vec{b}$，为了记忆这一公式，写成行列式：
$$
\det\begin{pmatrix}
\hat{i}&\hat{j}&\hat{k}\\
a_1&a_2&a_3\\
b_1&b_2&b_3
\end{pmatrix}=\vec{a}\times\vec{b}
$$
叉乘的方向？考虑 $\vec{a}\cdot(\vec{a}\times\vec{b})$：显然为 $0$；同样，$\vec{b}\cdot(\vec{a}\times\vec{b})=0$，所以叉乘的方向垂直于 $\vec{a},\vec{b}$ 张成的平面. 但是还是有两种选择，我们选择右手系.

对于一个三维空间 $V$，要和 $\R^3$ 建立联系，需要一种同构，这里的映射就是将 $\R^3$ 中的基底放到 $V$ 中. 叉乘是在 $\R^3$ 中定义的，因此我们需要建立这样的一种关系：

/Claim/

> 若 $\hat{e}_x,\hat{e}_y,\hat{e}_z$ 构成右手系，则对于 $\vec{a},\vec{b},\vec{c}\in\R^3$，有 $\Phi(a),\Phi(b),\Phi(c)$ 构成右手系 $\Longleftrightarrow$ 
> $$
> \det\begin{pmatrix}
> a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3
> \end{pmatrix}>0
> $$
> (讲义上有证明)

/Theorem/

> $P$ 的 $k$ 维 volume $=\sqrt{\det G}$.
