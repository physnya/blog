---
title: Lesson 53 换元公式
permalink: /integral/lesson-53/
createTime: 2025/5/14 15:10:12
---
本周六上午本教室补课.

## k 维平行体的 k-1 维 volume

/Theorem/

> 设 $\vec{v}_1,\cdots,\vec{v}_k\in\R^n$，且线性无关 ($k\leq n$).
>
> 定义生成 / 张成平行 $k$ 维体：
> $$
> P=\{\vec{v}_1x_1+\cdots+\vec{v}_kx_k|x_i\in[0,1]\,,\forall i\}
> $$
> 则，$\mathcal{Vol}(P)=\sqrt{\det(\vec{v}_i\cdot\vec{v}_j)}=\sqrt{\det G}$. ($G$ 为 Gram 矩阵).

/Proof/

> 对 $k$ 归纳.
>
> 在 $k=1$，$P=\{x\vec{v};0\leq x\leq1\}$，就是一条有向线段，计算知 $\mathcal{Vol}(P)=|\vec{v}|$，这是熟知的结果.
>
> 设 $k$ 维成立，考虑 $k+1$ 维：令 $Q=$ 由 $\vec{v}_1,\cdots.\vec{v}_k$ 生成的 $k$ 维平行体，$P=$ 由 $\vec{v}_1,\cdots,\vec{v}_k,\vec{v}_{k+1}$ 生成的 $k+1$ 维平行体.
>
> 则，$P$ 以 $Q$ 为底，以 $\vec{v}_{k+1}$ 为斜棱，所以 $\mathcal{Vol}(P)=\mathcal{Vol}(Q)\cdot h$ (其中 $h$ 为高). 之后只需要计算 $h$ 的表达式.
>
> 设 $\vec{v}_{k+1}$ 向底面 $Q$ (所在的 $k$ 维子空间) 的垂足为 $\vec{w}=\lambda_1\vec{v}_1+\cdots+\lambda_k\vec{v}_k$. 则有 $h=|\vec{v}_{k+1}-\vec{w}|$，同时 $\vec{v}_{k+1}-\vec{w}\perp\vec{v}_i$ (垂直于整个底面).
>
> 现在的目标就是证明 $\det(G_{k+1})=\det(G_{k})\cdot|h|^2$.
>
> 为此：
> $$
> \det G_{k+1}=\begin{pmatrix}
> v_1\cdot v_1&\cdots&v_1\cdot v_{k+1}\\
> \vdots&\ddots&\vdots\\
> v_k\cdot v_1&\cdots& v_{k}\cdot v_{k+1}\\
> v_{k+1}\cdot v_1&\cdots&v_{k+1}\cdot v_{k+1}
> \end{pmatrix}
> $$
> 做初等行变换：第 $k+1$ 行 $-\lambda_1\cdot$ 第 1 行 $-\cdots-\lambda_k\cdot$ 第 k 行，得到
> $$
> \det G_{k+1}=\begin{pmatrix}
> v_1\cdot v_1&v_1\cdot v_2&\cdots&v_1\cdot v_{k+1}\\
> \vdots&\vdots&\ddots&\vdots\\
> v_k\cdot v_1&v_k\cdot v_2&\cdots& v_{k}\cdot v_{k+1}\\
> 0&0&\cdots&h\cdot v_{k+1}
> \end{pmatrix}
> $$
> 再做列变换：第 $k+1$ 列 $-\lambda_1\cdot$ 第 1 列 $-\cdots-\lambda_k\cdot$ 第 k 列，得到
> $$
> \det G_{k+1}=\begin{pmatrix}
> v_1\cdot v_1&v_1\cdot v_2&\cdots&0\\
> v_2\cdot v_1&v_2\cdot v_2&\cdots&0\\
> \vdots&\vdots&\ddots&\vdots\\
> v_k\cdot v_1&v_k\cdot v_2&\cdots&0\\
> 0&0&\cdots&h\cdot v_{k+1}
> \end{pmatrix}
> $$
> 已经分块对角化，所以 $\det G_{k+1}=(\det G_k)\cdot(\vec{h}\cdot\vec{v}_{k+1})=(\det G_k)\cdot h^2$，证毕.

/Corollary/

> $k=n$ 时，称顶维平行体.
>
> $\R^n$ 中的 $\vec{v}_1,\cdots,\vec{v}_n$ 生成的 $n$ 维平行体的 volume 为：
> $$
> \det\begin{bmatrix}
> \vec{v}_1&\vec{v}_2&\cdots&\vec{v}_n
> \end{bmatrix}
> $$
> (视为列向量)

/Proof/

> 令上述列向量构成的矩阵为 $V$，显然可以看出 Gram 矩阵就是 $G=V^TV$.
>
> 利用上述定理，知道
> $$
> \mathcal{Vol}=\sqrt{\det G}=\sqrt{\det(V^TV)}=\sqrt{(\det V)^2}=|\det V|
> $$

到目前为止我们已经做好了换元公式的铺垫.

## 多重积分的换元公式

对于观测者 1，其目标为积分 $\int_Df$，在空间 $D$ 上完成；观测者 2 对 $D$ 采取新的一套标记，记为 $D'$，这两者之间的坐标变换为 $\Phi$.

现在以 $n=2$ 为例，为了计算 $D$ 上的积分，还是要对 $D$ 作一个剖分，然后找到代表点进行求和：
$$
\int_Df=\lim\sum f(\xi_i)\cdot\text{area}(D_i)\,,\quad D=\bigcup_iD_i
$$
若 $D$ 的坐标为 $(x,y)$，那么进行变换 $\Phi(x(u,v),y(u,v))$ 之后，得到以 $(u,v)$ 为坐标的空间 $D'$. 观测者 2 对 $D'$ 取一种剖分，则 $D$ 获得一个“诱导剖分”和“诱导选点方案”：
$$
D=\Phi(D')=\Phi\left(\bigcup_iD'_i\right)=\bigcup_i\Phi(D_i')\,,\quad \Phi(\xi_i')\in D_i
$$
原来空间内的 Riemann 和变成了
$$
\int_Df=\lim\sum_if(\Phi(\xi_i'))\cdot\text{area}(\Phi(D'_i))
$$
唯一的难点变为计算 $\text{area}(\Phi(D_i'))$. 在 $\Phi$ 变换下，原来的平直剖分得到的一个矩形变为 $D$ 空间中的一个曲边四边形. 但是剖分取得非常小时，“畸变”会减少.

边向量可以近似为 $(\Delta u\cdot x_u(u_i,vI,v),\Delta u\cdot y_u(u_i,v_i))$ 等形式，上述的 $\Phi(D_i')$ 近似为一个平行四边形，由 $\Delta u$，$\Delta v$ 生成.

记 $\vec{x}_u=(x_u,y_u)$，$\vec{x}_v=(x_v,y_v)$，最终的面积为
$$
\text{area}(\Phi(D_i'))\approx\left|\det\begin{pmatrix}
\Delta u\cdot x_u&\Delta v\cdot x_v\\
\Delta u\cdot y_u&\Delta v\cdot y_v
\end{pmatrix}\right|=\Delta u\Delta v\cdot\left|\det\begin{pmatrix}
x_u&x_v\\y_u&y_v
\end{pmatrix}\right|
$$
到这里，原来的 Riemann 和写成：
$$
\begin{aligned}
\int_Df&\sim\lim\sum_{i}f(\Phi(u_1,v_i))\Delta u\Delta v\cdot\left|\det\begin{pmatrix}
x_u&x_v\\y_u&y_v
\end{pmatrix}\right|\\\\
&=\int_{D'}(f\circ \Phi)\left|\det\begin{pmatrix}
x_u&x_v\\y_u&y_v
\end{pmatrix}\right|\text{d}u\text{d}v
\end{aligned}
$$
/Theorem/ (换元公式)

> 设 $D,D'\subseteq\R^2$，$\Phi:D\to D'$ 是 $C^1$ 的双射，则对于 $D$ 上的可积函数 $f$，都有
> $$
> \begin{aligned}
> \iint_Df(x,y)\text{d}x\text{d}y&=\iint_{D'}(f\circ\Phi)\left|\det\begin{pmatrix}
> x_u&x_v\\y_u&y_v
> \end{pmatrix}\right|\text{d}u\text{d}v\\\\
> &=\iint_{D'}(f\circ\Phi)|\det J_{\Phi}(u,v)|\text{d}u\text{d}v
> \end{aligned}
> $$
> /Remark/
>
> > 1. 换元方式为引入 $J_\Phi$，来自于 $\Phi$ 引起的体积微元的放缩；
> > 2. 换元后，$f$ 变为 $f\circ\Phi$，称为 $f$ 沿着 $\Phi$ 的 pull back.

/Theorem/ ($n$ 维换元公式)

> 设 $D\subseteq\R^n$，坐标 $(x_1,\cdots,x_n)$；$D'\subseteq\R^n$，坐标 $(u_1,\cdots,u_n)$. 设 $\Phi:D'\to D$ 是 $C^1$ 的双射，则对于 $D$ 上的可积函数 $f$，有
> $$
> \int_Df\text{d}x_1\cdots\text{d}x_n=\int_{D'}(f\circ\Phi)|\det J_\Phi|\text{d}u_1\cdots\text{d}u_n
> $$
> /Remark/
>
> > 为什么一元换元的时候没有出现绝对值？
> >
> > 实际上，一元换元时
> > $$
> > \int_a^bf\text{d}x=\lim\sum f(\xi_i)(x_i-x_{i-1})
> > $$
> > 其中后面的差值是一个“有向”的长度，我们要求了这个长度是正的.

/Example/

> 求椭圆盘的面积：
> $$
> D=\left\{\frac{x^2}{a^2}+\frac{y^2}{b^2}\leq1\right\}
> $$
>
> ---
>
> 我们先来试试圆盘的面积：
> $$
> \begin{aligned}
> \iint_{x^2+y^2\leq1}\text{d}x\text{d}y&=\int_{-1}^1\text{d}x\int_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}}\text{d}y\\
> &=\int_{-1}^12\sqrt{1-x^2}\text{d}y\\
> &\overset{x=\cos\theta}{=}\int_\pi^02\sin\theta(-\sin\theta)\text{d}\theta\\
> &=2\int_0^\pi\sin^2\theta\text{d}\theta=\pi
> \end{aligned}
> $$
> 讲一点题外话：算 $n$ 维球体积.
> $$
> \overline{B_n}(R)=\{x_1^2+\cdots+x_n^2\leq R^2\}
> $$
> 得到
> $$
> \begin{aligned}
> \mathcal{Vol}(\overline{B_n}(R))&=\int\cdots\int_{x_1^2+\cdots+x_n^2\leq R^2}\text{d}x_1\cdots\text{d}x_n\\
> &=\int_{-R}^R\text{d}x_n\int\cdots\int_{x_1^2+\cdots+x_{n-1}^2\leq R^2-x_n^2}\text{d}x_1\cdots\text{d}x_{n-1}\\
> &=\int_{-R}^R\text{d}x_n\cdot C_{n-1}\left(\sqrt{R^2-x_n^2}\right)^{n-1}\\
> &=\int_{-R}^RC_{n-1}\left(R^2-x_n^2\right)^{(n-1)/2}\text{d}x_n\\\\
> &\overset{x_n=R\cos\theta}{=}\int_\pi^0C_{n-1}(R\sin\theta)^{n-1}(-R\sin\theta)\text{d}\theta\\\\
> &=C_{n-1}R^n\cdot2I_n
> \end{aligned}
> $$
> 其中，$I_n=\int_0^{\pi/2}\sin^n\theta\text{d}\theta$. 这个积分在上学期我们证明过，见 [此处](/integral/gpu4r2m9/#分部积分公式).
>
> ---
>
> 回到求椭圆面积这里来，换元 $x/a=u$，$y/b=v$，则 $\Phi(u,v)=(au,bv)$，$D'=\{u^2+v^2\leq1\}$. 这时可以计算：
> $$
> \begin{aligned}
> \text{area}(D)&=\iint_D\text{d}x\text{d}y=\iint_{D'}|\det J_\Phi|\text{d}u\text{d}v\\
> &=\iint_{u^2+v^2\leq1}|ab|\text{d}u\text{d}v\\\\
> &=\pi|ab|=\pi ab
> \end{aligned}
> $$
> 所以我们在中学时学到的“将 $x,y$ 轴伸缩”，实际上就是换元公式.

/Example/

> 平面极坐标换元：
>
> $\Phi(r,\theta)=(x=r\cos\theta,y=r\sin\theta)$，这里 $\Phi:[0,+\infty)\times[0,2\pi]\to\R^2$，但是 $\Phi$ 并非单射，我们似乎不能严格地应用换元公式.
>
> 好在 $\Phi$ 对单射的偏离很小，非单射的点不会影响面积的计算 (重合区域只是一条线)，而二元积分实际上是在求加权的面积，所以可以使用换元公式.
> $$
> \begin{aligned}
> \iint_Df(x,y)\text{d}x\text{d}y&=\iint_{\Phi^{-1}(D)}f(r\cos\theta,r\sin\theta)\left|\det\begin{pmatrix}
> \cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta
> \end{pmatrix}\right|\text{d}r\text{d}\theta\\
> &=\iint_{\Phi^{-1}(D)}f(r\cos\theta,r\sin\theta)r\text{d}r\text{d}\theta
> \end{aligned}
> $$

