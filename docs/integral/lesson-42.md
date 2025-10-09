---
title: Lesson 42 映射的微分
createTime: 2025/3/28 12:17:35
permalink: /integral/lesson-42/
---
## 可微的充分条件

回顾定义：称 $f$ 在 $x_0$ 处可微，若 $\exist$ 线性 $L:\R^n\to\R$ 使得
$$
\left\{\begin{array}{lr}
f(x_0+h)=f(x_0)+L(h)+\alpha(h)\,,\quad h\in B_r(\vec{0})\\\\
\underset{h\to0}{\lim}\frac{\alpha(h)}{|h|}=0
\end{array}\right.
$$
/Definition/ (偏导函数)

> 设 $f$ 在 $D$ 内每点 $x_0$ 处皆有偏导数 $\frac{\partial f}{\partial x_k}(\vec{x}_0)$，得到映射 $D\to\R$ ($x_0\to\frac{\partial f}{\partial x_k}(x_0)$)，称之为 $f$ 在 $D$ 上的第 $k$ 个偏导函数，记为：
> $$
> \frac{\partial f}{\partial x_k}\,,\quad\partial_{x_k}f\,,\quad\partial_kf\,,\quad f_k'
> $$

/Example/

> 二元函数 $f$：$\R^2$ 坐标 $(x,y)$ (或者 $(x_1,x_2)$) 下，偏导函数写成：
> $$
> \partial_xf=f'_x\,,\quad\partial_yf=f'_y\,,\quad\partial_1f=f'_1\,,\quad\partial_2f=f_2'
> $$
> ::: warning
>
> 不管怎么样，写 $f'_1$ 时一定要打 prime，否则很容易和映射的分量函数混淆.
>
> :::
>
> 三元函数也是类似的写法.

/Theorem/ (可微的充分条件)

> 设 $f$ 在 $\vec{a}$ 的某邻域中有定义，若 $f$ 在 $\vec{a}$ 的某邻域中有各个偏导函数，且各个偏导函数在 $\vec{a}$ 处都连续，则 $f$ 在 $\vec{a}$ 处可微.

/Proof/

> ::: tip
>
> 我们对证明思路的选择似乎是直接的：已知偏导函数 $\partial_kf$，这是沿 $k$ 坐标方向 $f$ 的变化率；而目标是 $f$ 可微，这是要证明 $f(\vec{a}+\vec{h})-f(\vec{a})\approx L(\vec{h})$，因此我们考虑将任何位移写成坐标方向的叠加.
>
> :::
>
> 设 $\vec{a}=(a_1,\cdots,a_n)$，$\vec{h}=(h_1,\cdots,h_n)$，因此：
> $$
> \begin{aligned}
> &f(\vec{a}+\vec{h})-f(\vec{a})\\\\
> &=[f(a_1+h_1,a_2,\cdots,a_n)-f(a_1,\cdots,a_n)]\\\\
> &\quad+[f(a_1+h_1,a_2+h_2,a_3,\cdots,a_n)-f(a_1+h_1,a_2,\cdots,a_n)]\\\\
> &\quad+\cdots
> \end{aligned}
> $$
> ::: tip
>
> 多元函数最麻烦的就是分量特别多.——艾神
>
> :::
>
> 这里我们定义 $g(x)=f(a_1+h_1,\cdots,a_{k-1}+h_{k-1},x,a_{k+1},\cdots,a_n)$，对 $g$ 用一元微分中值定理，得到
>
> $$
> g(a_k+h_k)-g(a_k)=h_kg'(\xi)=h_kg'(a_k+\theta h_k)
> $$
>
> 由定义，$g'(x)=\partial_kf(a_1+h_1,\cdots,a_{k-1}+h_{k-1},x,a_{k+1},\cdots,a_n)$，所以代入原来的 $\Delta f$ 的式子，得到：
> $$
> \Delta f=\sum_{k=1}^nh_k\partial_kf(a_1+h_1,\cdots,a_{k-1}+h_{k-1},a_k+\theta_kh_k,a_{k+1},\cdots,a_n)
> $$
> 其中 $\theta_k\in(0,1)$. 现在来验证 $f$ 在 $\vec{a}$ 处可微. 回忆若 $f$ 可微，则微分表示矩阵至多一个候选，也就是：
> $$
> L(\vec{h})=\begin{pmatrix}
> \partial_1f(\vec{a})&\cdots&\partial_nf(\vec{a})
> \end{pmatrix}\begin{pmatrix}
> h_1\\\vdots\\h_n
> \end{pmatrix}
> $$
> 只需证明：
> $$
> f(\vec{a}+\vec{h})-f(\vec{a})-\sum_{k=1}^n\partial_kf(\vec{a})h_k=O(|\vec{h}|)
> $$
> 而对于 LHS，有
> $$
> \begin{aligned}
> &|\sum_{k=1}^nh_k(\partial_kf(a_1+h_1,\cdots,a_{k-1}+h_{k-1},a_k+\theta_kh_k,a_{k+1},\cdots,a_n)\\\\
> &\quad-\partial_kf(a_1,\cdots,a_n))|\\\\
> &\leq\sum_{k=1}^n|h|\cdot|\partial_kf(a_1+h_1,\cdots,a_k+\theta_kh_k,\cdots,a_n)-\partial_kf(a_1,\cdots,a_n)|
> \end{aligned}
> $$
> 由 $\partial_kf$ 在 $\vec{a}$ 处连续，$\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall d(\vec{y},\vec{a})<\delta$ 有 $|\partial_kf(y)-\partial_kf(a)|<\varepsilon$，$\forall k=1,\cdots,n$. 这样，$\forall|h|<\delta$，有
> $$
> \begin{aligned}
> &d((a_1+h_1,\cdots,a_k+\theta_kh_k,\cdots,a_n),(a_1,\cdots,a_k,\cdots,a_n))\\\\
> &=\sqrt{h_1^2+\cdots+h_{k-1}^2+\theta_k^2h_k^2}\,,\quad(0<\theta_k<1)\\\\
> &\leq\sqrt{h_1^2+\cdots+h_k^2}\leq|h|<\delta
> \end{aligned}
> $$
> 得到 $|\text{LHS}|\leq\underset{k=1}{\overset{n}{\sum}}|h|\varepsilon=n\varepsilon|h|$.
>
> 总结一下：证明了 $\forall\varepsilon>0$，$\exist\delta>0$ 使得 $\forall0<|h|<\delta$ 有
> $$
> \frac{|f(\vec{a}+\vec{h})-f(\vec{a})-\sum\partial_kf(\vec{a})h_k|}{|h|}<n\varepsilon
> $$
> 表明上述极限为零. 整体的版本是：
>
> ---
>
> /Definition/
>
> > 设 $D$ 是 $\R^n$ 的开集，称 $f:D\to\R$ 是 $C^1$ 光滑函数 (记为 $f\in C^1(D,\R)$)，若 $f$ 在 $D$ 上各个偏导函数存在且连续.

因此上述定理甚至能够改写为 $C^1$ 光滑表述的形式：

/Theorem/ ($C^1\Longrightarrow$ 可微)

> 设 $f\in C^1(D,\R)$，则 $f$ 在 $D$ 上处处可微，且
> $$
> \text{d}f_{\vec{x}_0}(\vec{h})=\sum_{k=1}^n\partial_kf(\vec{x}_0)h_k
> $$

从直观的角度理解，$f$ 的微分 $\text{D}f$ 事实上是一族线性映射，也就是说 $\text{D}f=\{\text{d}f_{x_0}:\R^n\to\R\}_{x_0\in D}$.

更加富有几何意义的理解是定义切空间，切丛 $\text{TD}=\{x_0$ 处切空间 $\text{T}_{x_0}\text{D}\}\overset{\text{D}f}{\longrightarrow}\text{T}\R=\{f(x_0)$ 处切空间 $\text{T}_{f(x_0)}\R\}$.

(<s>你怎么开始讲微分几何了😨😰😵</s>)

/Corollary/

> 设 $f\in C^1(D,\R)$，则 $\nabla_{\vec{v}}f(x_0)=\nabla f(x_0)\cdot\vec{v}$.
>
> 这来源于 $f\in C^1\longrightarrow f$ 可微 $\longrightarrow\nabla_{\vec{v}}f(x_0)=\text{d}f_{x_0}(\vec{v})=\nabla f(x_0)\cdot\vec{v}$，前者是之前的定理证明的，后者早就证明过.

以后我们对 $f$ 加限制条件的时候写成 $C^{\Box}(D,\R)$，而不说它可微，因为这种写法较强，保证了可微性，同时也比较好验证，只需要算偏导函数并验证连续性即可.

## 映射微分

$f:D\to\R^m$ data $\Longleftrightarrow$ 分量函数 $f=(f_1,\cdots,f_m)$.

/Definition/

> 设 $\vec{x}_0$ 是 $D$ 的内点，$f:D\to\R^m$，称 $f$ 在 $x_0$ 处可微，若 $\exist$ 线性映射 $L:\R^n\to\R^m$ 使得
> $$
> f(x_0+h)=f(x_0)+L(h)+\alpha(h)\,,\quad\lim_{h\to0}\frac{\alpha(h)}{|h|}=\vec{0}\in\R^m
> $$
> 并称上述唯一的线性映射 $L$ 为 $f$ 在 $x_0$ 处的微分，记为 $\text{D}f_{x_0}=\text{d}f_{x_0}:\R^n\to\R^m$.

/Claim/

> 设 $f=(f_1,\cdots,f_m):D\to\R^m$，则 $f$ 在 $x_0$ 处可微 $\Longleftrightarrow$ $f_k$ 在 $x_0$ 处可微 $\forall1\leq k\leq m$，进一步，$f$ 的微分为：
> $$
> \text{d}f_{x_0}(\vec{h})=\begin{pmatrix}
> \ddots
> \end{pmatrix}\begin{pmatrix}
> h_1\\\vdots\\h_n
> \end{pmatrix}
> $$

/Proof/

> $f$ 在 $x_0$ 处可微
>
> $\Longleftrightarrow$ $\exist$ 线性映射 $L=(L_1,\cdots,L_m):\R^n\to\R^m$ 使得 $f_k(x_0+h)=f_k(x_0)+L_k(h)+\alpha_k(h)$，且 $\underset{h\to0}{\lim}\alpha_k(\vec{h})/|\vec{h}|=0$，$\forall k$.
>
> $\Longleftrightarrow$ $f_k$ 在 $x_0$ 处可微.
>
> 从以上推导知道，$\text{d}f_{x_0}=L=(L_1,\cdots,L_m)=((\text{d}f_1)_{x_0},\cdots,(\text{d}f_m)_{x_0})$，具体而言，
> $$
> \begin{aligned}
> \text{d}f_{x_0}(\vec{h})&=((\text{d}f_1)_{x_0}(\vec{h}),\cdots,(\text{d}f_m)_{x_0}(\vec{h}))\\\\
> &=\left(\sum_{j=1}^n\frac{\partial f_1}{\partial x_j}(\vec{x}_0)h_j,\cdots,\sum_{j=1}^n\frac{\partial f_m}{\partial x_j}(\vec{x}_0)h_j \right)\\\\
> &=\begin{pmatrix}
> \frac{\partial f_1}{\partial x_1}(\vec{x}_0)&\cdots&\frac{\partial f_1}{\partial x_n}(\vec{x}_0)\\
> \vdots&\ddots&\vdots\\
> \frac{\partial f_m}{\partial x_1}(\vec{x}_0)&\cdots&\frac{\partial f_m}{\partial x_n}(\vec{x}_0)
> \end{pmatrix}\begin{pmatrix}
> h_1\\\vdots\\h_n
> \end{pmatrix}
> \end{aligned}
> $$
> 是线性映射 $\text{d}f_{x_0}:\R^n\to\R^m$ 在标准基下的表示矩阵.
>
> 每次写这一个矩阵非常麻烦，所以我们有定义：
>
> ---
>
> /Definition/
>
> > $f$ 的 Jacobian (Jacobi 矩阵) 为
> > $$
> > J_f(\vec{x})=\begin{pmatrix}
> > \frac{\partial f_1}{\partial x_1}(\vec{x})&\cdots&\frac{\partial f_1}{\partial x_n}(\vec{x})\\
> > \vdots&\ddots&\vdots\\
> > \frac{\partial f_m}{\partial x_1}(\vec{x})&\cdots&\frac{\partial f_m}{\partial x_n}(\vec{x})
> > \end{pmatrix}_{m\times n}=\left(\frac{\partial f_i}{\partial x_j}\right)_{1\leq i\leq m\,,1\leq j\leq n}
> > $$
> > 或者很多人将其写作
> > $$
> > J_f(\vec{x})=\left.\frac{\partial(f_1,\cdots,f_m)}{\partial(x_1,\cdots,x_n)}\right|_{\vec{x}}
> > $$
>
> 这样，$\text{d}f_{x_0}(\vec{h})=J_f(x_0)\vec{h}$，这里视 $\vec{h}$ 为列向量.

事实上我们的一元函数导数也是一个 $1\times1$ 的 Jacobian，但是这和一个数字没有区别.

/Example/

> $f:\R^n\to\R$，则 $J_f(x)=\begin{pmatrix}\frac{\partial f}{\partial x_1}&\cdots&\frac{\partial f}{\partial x_n}\end{pmatrix}_{1\times n}$. 因此 $\nabla$ 算子实际上是一个列向量：
> $$
> \nabla f(x)=\begin{pmatrix}
> \frac{\partial f}{\partial x_1}\\\vdots\\\frac{\partial f}{\partial x_n}
> \end{pmatrix}_{n\times1}=J_f(x)^T
> $$

/Example/

> $f$ 是 $\R^n$ 中的曲线 (path) $f(t)=(p_1(t),\cdots,p_n(t))$. 这时的 Jacobian 是 $f$ 的速度矢量.

/Example/

> 复变函数中，常遇到 $f:\mathbb{C}\to\mathbb{C}$，这实际上等价于 $\R^2\to\R^2$. 这时，
> $$
> f(x+\sqrt{-1}\cdot y)=u(x,y)+\sqrt{-1}\cdot v(x,y)
> $$
> $f$ 对应于 $F:\R^2\to\R^2$，$F(x,y)=(u(x,y),v(x,y))$，于是 $F$ 的 Jacobian 是
> $$
> J_F(x,y)=\begin{pmatrix}
> \frac{\partial u}{\partial x}&\frac{\partial u}{\partial y}\\
> \frac{\partial v}{\partial x}&\frac{\partial v}{\partial y}
> \end{pmatrix}
> $$
>
> ---
>
> /Claim/
>
> > $f$ 在 $z_0=x_0+\sqrt{-1}\cdot y_0$ 处复可导 $\Longleftrightarrow$ $F$ 在 $(x_0,y_0)$ 处可微且 $\text{d}F_{(x_0,y_0)}$ 反对称.
>
> ::: tip
>
> 既然我们讲到这个了，就来尝试证明一下.——艾神
>
> :::
>
> /Proof/
>
> > $f$ 在 $z_0$ 处复可导.
> >
> > $\Longleftrightarrow$ 极限 $\underset{h=s+t\text{i}\to0}{\lim}\frac{f(z_0+h)-f(z_0)}{h}$ 存在 (记为 $a+b\text{i}$).
> >
> > $\Longleftrightarrow$ $\underset{h=s+t\text{i}\to0}{\lim}\frac{f(z_0+h)-f(z_0)-h\cdot(a+b\text{i})}{h}=0\in\mathbb{C}$.
> >
> > ::: tip
> >
> > 写到这里我们证完了吗？这几乎是显然的.——艾神
> >
> > :::
> >
> > > 事实：对于 $g:\mathbb{C}\to\mathbb{C}$，有 $\lim g(h)=0\in\mathbb{C}$ $\Longleftrightarrow$ $\lim|g(h)|=0$.
> > >
> > > 进而，$\lim\frac{p(h)}{q(h)}=0$ $\Longleftrightarrow$ $\lim\left|\frac{p(h)}{q(h)}\right|=0$ $\Longleftrightarrow$ $\lim\frac{p(h)}{|q(h)|}=0$.
> >
> > $$
> > \begin{aligned}
> > &\Longleftrightarrow\underset{h=s+t\text{i}\to0}{\lim}\frac{f(z_0+h)-f(z_0)-h\cdot(a+b\text{i})}{|h|}=0\in\mathbb{C}\\\\
> > &\Longleftrightarrow\underset{(s,t)\to(0,0)}{\lim}\frac{f(z_0+h)-f(z_0)-(s+t\text{i})(a+b\text{i})}{\sqrt{s^2+t^2}}=0\in\mathbb{C}\\\\
> > &\Longleftrightarrow\underset{(s,t)\to(0,0)}{\lim}\frac{F(x_0+s,y_0+t)-F(x_0,y_0)-(as-bt,bs+at)}{\sqrt{s^2+t^2}}\\
> > &\quad\quad\quad=(0,0)\\\\
> > &\Longleftrightarrow\frac{F(x_0+s,y_0+t)-F(x_0,y_0)-\begin{pmatrix}a&-b\\b&a\end{pmatrix}\begin{pmatrix}s\\t\end{pmatrix}}{\sqrt{s^2+t^2}}\\
> > &\quad\quad\quad=o(\sqrt{s^2+t^2})\text{ as }(s,t)\to(0,0)
> > \end{aligned}
> > $$
> >
> > $\Longleftrightarrow$ $F$ 在 $(x_0,y_0)$ 处可微且：
> > $$
> > \text{d}F_{(x_0,y_0)}\begin{pmatrix}
> > s\\t
> > \end{pmatrix}=\begin{pmatrix}
> > a&-b\\b&a
> > \end{pmatrix}\begin{pmatrix}
> > s\\t
> > \end{pmatrix}
> > $$
> > 证毕.
>
> 事实上有 Cauchy - Riemann 条件：
>
> /Theorem/ (Cauchy - Riemann 条件)
>
> > $f:\mathbb{C}\to\mathbb{C}$ 在 $z_0=x_0+\sqrt{-1}\cdot y_0$ 处复可导，当且仅当 $F$ 在 $(x_0,y_0)$ 处可微，且：
> > $$
> > \left\{\begin{array}{lr}
> > \frac{\partial u}{\partial x}(x_0,y_0)=\frac{\partial v}{\partial y}(x_0,y_0)\\\\
> > \frac{\partial u}{\partial y}(x_0,y_0)=-\frac{\partial v}{\partial x}(x_0,y_0)
> > \end{array}\right.
> > $$
>
> 这个定理的证明就是上面证明过程中的那个矩阵.
>
> /Corollary/
>
> > 若 $f$ 复可导，则 $\det J_f\geq0$.

## 复合映射的微分

上学期我们几乎全部证明过了，只需要把变量改成高维变量而已.
$$
x_0\overset{f}{\longrightarrow}f(x_0)\overset{g}{\longrightarrow}g\circ f(x_0)
$$
::: center

$\downarrow$ 现实世界到“微分照相”，微分 $\longleftrightarrow$ 线性近似

:::
$$
\R^n\overset{\text{d}f_{x_0}}{\longrightarrow}\R^m\overset{\text{d}g_{f(x_0)}}{\longrightarrow}\R^l
$$
/Theorem/

> 复合映射的微分等于微分的复合.
>
> 设 $f:X\to Y$ 在 $x_0$ 处可微，$g:Y\to Z$ 在 $f(x_0)$ 处可微，则 $g\circ f$ 在 $x_0$ 处可微，且 $\text{d}(g\circ f)_{x_0}=\text{d}g_{f(x_0)}\circ\text{d}f_{x_0}$.

证明略去，上学期几乎全部证明好了.

上述式子是线性映射层面的等式，但是我们在多元函数领域一旦确定了线性映射的等式就会获得一个表示矩阵之间的等式，所以有推论：

/Corollary/

> 若 $f$ 在 $x_0$ 处可微，$g$ 在 $f(x_0)$ 处可微，则
> $$
> J_{g\circ f}(x_0)=J_g(f(x_0))J_f(x_0)
> $$

/Proof/

> $\forall\vec{h}\in\R^n$，我们有：
> $$
> J_{g\circ f}(\vec{x}_0)\vec{h}=\text{d}(g\circ f)_{x_0}(\vec{h})=\text{d}g_{f(x_0)}(\text{d}f_{x_0}(\vec{h}))=J_g(f(x_0))J_f(x_0)\vec{h}
> $$
> 得证.

/Theorem/ (Chain Rule)

> 1. 设 $f,g$ 可微，则 $J_{g\circ f}(x)=J_g(f(x))J_f(x)$；
> 2. (可微性很难验证，所以写一个更强的版本) 设 $f,g\in C^1$，则上式成立.
>
> ::: tip
>
> 你这样写链式法则，显然是 过 于 抽象了.——艾神
>
> :::
>
> 用 Jacobian 的矩阵元写出链式法则，设 $f:\R^n\to\R^m$，$g:\R^m\to\R^l$，其中 $\R^n$ 的坐标是 $(x_1,\cdots,x_n)$，$\R^m$ 的坐标是 $(y_1,\cdots,y_m)$，分量函数有
> $$
> g\circ f=(g_1(f_1,\cdots,f_m),\cdots,g_l(f_1,\cdots,f_m))
> $$
> 于是分量形式的链式法则是：
> $$
> \begin{aligned}
> &\left(\frac{\partial g_i(f_1,\cdots,f_m)}{\partial x_j}\right)=\left(\frac{\partial g_i}{\partial y_k}(f(x))\right)\left(\frac{\partial f_k}{\partial x_j}\right)\\\\
> &\Longrightarrow\frac{\partial g_i(f_1(x_1,\cdots,x_n),\cdots,f_m(x_1,\cdots,x_n))}{\partial x_j}=\sum_{k=1}^m\frac{\partial g_i(f(x))}{\partial y_k}\cdot\frac{\partial f_k}{\partial x_j}
> \end{aligned}
> $$
> 这个形式虽然可以使用，但是意义没有那么直观简洁了.

实际使用链式法则时，有这样一种解读：$g(f_1,\cdots,f_m)$ 对 $x_j$ 的偏导数 $=\underset{k=1}{\overset{m}{\sum}}(g$ 对其第 $k$ 个输入的偏导数$)_{f(x)}(g$ 的第 $k$ 个实际输入对 $x_j$ 的偏导数$)_{\vec{x}}$.

/Example/

> 设 $f:\R^n\to\R$ 是可微的，$p:\R\to\R^n$ 是可微的 path，$p(t)=(p_1(t),\cdots,p_n(t))$.
>
> 可以用链式法则，
> $$
> \begin{aligned}
> \frac{\text{d}}{\text{d}t}(f\circ p)(t)&=\frac{\text{d}}{\text{d}t}f(p_1(t),\cdots,p_n(t))\\\\
> &=\sum_{k=1}^n\frac{\partial f}{\partial x_k}(p(t))\cdot\frac{\text{d}p_k(t)}{\text{d}t}\\\\
> &=\nabla f(p(t))p'(t)
> \end{aligned}
> $$
> 也就是 $f$ 的梯度与速度的内积，其特例就是 $p=x_0+vt$.

有了上面的结论，我们有疑问：$f$ 在 $x_0$ 处沿哪个方向增加最快 / 最慢？

当然这个问题比较模糊，因为方向导数的大小和速度矢量的模长有关. 因此我们采用归一化的方法. 具体而言，求 $\frac{\nabla_vf(x_0)}{|v|}$ 的最值.

/Claim/

> $f$ 在 $x_0$ 处沿梯度方向增加最快，沿负梯度方向增加最慢 (减少最快).

/Proof/

> 回忆 Cauchy - Schwartz 不等式，$-|\vec{a}||\vec{b}|\leq\vec{a}\cdot\vec{b}\leq|\vec{a}||\vec{b}|$，右边取等条件是 $\vec{a}$ 和 $\vec{b}$ 成正比，左边取等条件是成负的正比. 这样，对 $|\vec{v}|=1$ 有：
> $$
> -|\nabla f(x_0)|\leq\nabla_vf(x_0)=\nabla f(x_0)\cdot\vec{v}\leq|\nabla f(x_0)|
> $$
> 得证.