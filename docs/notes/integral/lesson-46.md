---
title: Lesson 46 反函数定理
permalink: /integral/lesson-46/
createTime: 2025/4/16 15:08:32
---
## 反函数定理

简而言之，是 $J_f(x_0)$ 可逆 $\Longrightarrow$ $f$ 在 $x_0$ 附近有 $C^1$ 的逆.

严谨的叙述：

/Theorem/

> 设 $D$ 是 $\R^n$ 的开集，$f:D\to\R^n$ 是 $C^1$ 的，若 $\text{d}f_{x_0}$ 可逆 ($\Longleftrightarrow$ $J_f(x_0)$ 可逆，也就是 $\det J_f(x_0)\neq0$)，则 $\exist x_0$ 在 $D$ 中开邻域 $U$，$\exist f(x_0)$ 在 $\R^n$ 中的开邻域 $V$，使得 $f:U\to V$ 为双射，且 $f^{-1}:V\to U$ 也是 $C^1$ 的.

证明过程非常困难，因此我们先给出一个粗略的解释：

$f$ 可微，在 $x_0$ 附近，$f$ 近似为其微分：
$$
f(x_0+h)\approx f(x_0)+J_f(x_0)h
$$
在相差一个平移的意义下，$f$ 与 $h\to J_f(x_0)h$ 接近. 由于该线性映射可逆，所以我们相信 $f$ 在 $x_0$ 附近有逆.

具体的证明如下：

/Proof/ (Step 0)

> 适当平移及复合线性映射 (比如旋转) 后，不妨假设 $\vec{x}_0=\vec{0}$，$f(\vec{x}_0)=\vec{0}$，且 $J_f(x_0)=\text{Id}$.
>
> 这样，$f(\vec{0}+\vec{h})=f(\vec{0})+\vec{h}+\alpha(\vec{h})$，最后一项为误差项,
>
> 记 $f(x)=x+\alpha(x)$，满足 $J_f(\vec{0})=\text{Id}$ $\Longrightarrow$ $J_\alpha(\vec{0})=0$ (矩阵)，也即
> $$
> \frac{\partial\alpha_i}{\partial x_j}(\vec{0})=0\,,\quad \forall i,j
> $$
> 而因为 $\alpha\in C^1$，知道上述偏导数均连续，从而 $\exist B_{2R}(\vec{0})$ 使得
> $$
> \left|\frac{\partial\alpha_i}{\partial x_j}(\vec{x})\right|<\frac{1}{2n^2},\quad\forall\vec{x}\in B_{2R}(\vec{0})
> $$
> 当然具体小于什么不重要，但是为了 <a name="1">Step 3 的需求</a> 这里取了这一个值.

/Proof/ (Step 1)

> $f$ 在 $\vec{0}$ 附近的单射，用微分中值给出估计，$\forall\vec{x},\vec{y}\in B_{2R}(\vec{0})$，有
> $$
> \begin{aligned}
> \alpha_i(\vec{x})-\alpha(\vec{y})&=\left|\sum_{j=1}^n\frac{\partial\alpha_i}{\partial x_j}(\vec{x}+\theta(\vec{y}-\vec{x}))\cdots(y_j-x_j)\right|\\
> &\leq\sum_{j=1}^n\frac{1}{2n^2}|y_j-x_j|\\
> &\leq n\cdot\frac{1}{2n^2}\cdot|\vec{y}-\vec{x}|=\frac{|\vec{y}-\vec{x}|}{2n}
> \end{aligned}
> $$
> 进而，
> $$
> \begin{aligned}
> |\alpha(\vec{x})-\alpha(\vec{y})|&\leq\sum_{i=1}^n(\alpha_i(\vec{x})-\alpha(\vec{y}))\leq\frac{1}{2}|\vec{x}-\vec{y}|
> \end{aligned}
> $$
> 总结：$\exist R>0$ 使得 $\forall\vec{x},\vec{y}\in B_{2R}(0)$ 有上述式子.
>
> ---
>
> 验证 $f$ 在 $B_{2R}(0)$ 中是单的：
>
> 若 $f(\vec{x})=f(\vec{y})$，$\vec{x},\vec{y}\in B_{2R}(0)$，则 $x+\alpha(x)=y+\alpha(y)$，所以
> $$
> |x-y|=|\alpha(x)-\alpha(y)|\leq\frac{1}{2}|x-y|
> $$
> 因此 $x-y$ 只能为零，得证.

/Proof/ (Step 2)

> 这是最难证明的部分 —— 证明满射.
>
> /Draft/
>
> > 转化问题为 对于 $\vec{w}$，找一个 $f(\vec{x})=\vec{w}$. 困难在于有多个分量.
> >
> > 方法 (Key point)：
> > $$
> > \begin{aligned}
> > f(x)=w&\Longleftrightarrow x+\alpha(x)=w\Longleftrightarrow x=w-\alpha(x)\to T(x)
> > \end{aligned}
> > $$
> > 找到 $T$ 的不动点，用压缩映像定理，[上节课证明过](/integral/lesson-45/#反函数定理) (需要往下翻一翻).
> >
> > 来证明，$\forall\vec{w}\in B_{R/2}(0)$，则 $\exist x\in\overline{B_R(0)}$ 使得 $f(x)=w$.
> >
> > (回忆 $\overline{B_R(\vec{a})}=\{\vec{y}|\det(y,\vec{a})\leq R\}$，带边闭球).
>
> /Definition/
>
> > $T(\vec{x})=w-\alpha(\vec{x})$，$\forall\vec{x}\in\overline{B_R(0)}$，有
> > $$
> > T(\vec{x})\leq|w|+|\alpha(\vec{x})|\leq\frac{R}{2}+\frac{1}{2}|x|\leq R
> > $$
> > 其中后一个不等号仅在特例下成立.
>
> 可知，$T:\overline{B_R(0)}\to\overline{B_R(0)}$ (记为 $X$)，显然 $X$ 是完备度量空间，再验证 $T$ 压缩：
> $$
> |T(\vec{x})-T(\vec{y})|=|\alpha(y)-\alpha(x)|\leq\frac{1}{2}|x-y|
> $$
> 由压缩映像定理知道 $T$ 有不动点，$x\in\overline{B_R(0)}$，也即
> $$
> T(x)=x\Longrightarrow w-\alpha(x)=X\Longrightarrow w=f(x)
> $$
> 亦即找到 $x\in\overline{B_R(0)}$，使得 $f(x)=w$.
>
> ---
>
> 来取 $U,V$：取 $V=B_{R/2}(0)$，是开集；$U=f^{-1}[V]\cap B_{2R}(0)$ (由 $f$ 连续，知道 $f^{-1}[V]$ 是一个开集 $\Longrightarrow$ $f^{-1}[V]\cap B_{2R}(0)$ 是开集).
>
> 由 $f$ 在 $B_{2R}(0)$ 上是单射 $\Longrightarrow$ $f$ 在 $U$ 上为单射，又由 Step 2，知道 $\forall w\in B_{R/2}(0)=V$，$\exist x\in\overline{B_R(0)}$ 使得 $f(x)=w$.
>
> $\Longrightarrow$ $w$ 在 $B_{2R}(0)$ 中有原像 $\Longrightarrow$ $f:U\to V$ 满射.
>
> 至此我们证明了定理的前半句话 (“是双射”).

/Proof/ (Step 3)

> 我们现在来证明后一句话，也就是 $f^{-1}:V\to U$ 是 $C^1$ 的. 这一步是直接的，但是相当麻烦.
>
> (1) 先证明 $f^{-1}:V\to U$ 连续 (预先将 $V,U$ 缩小，也就是选取合适的 $R$)
>
> 回到我们在 [Step 0 的不等式](#1)，令 $g(x)=\det J_f(x)$，$g$ 连续且 $g(0)=\det J_f(0)\neq0$，从而只要 $R$ 足够小，有 $\forall x\in B_{2R}(0)$ 有 $g(x)\neq0$ $\Longrightarrow$ 在 $U\subseteq B_{2R}(0)$ 上处处有 $J_f(0)$ 可逆.
>
> /Corollary/
>
> > 设 $f:U\to V$ 在 $U$ 中每点处 $J_f(x)$ 可逆，且 $f:U\to V$ 是 $C^1$ 光滑的双射，则其逆 $f^{-1}:V\to U$ 连续.
>
> /Proof/
>
> > 来证明 $f^{-1}$ 在每点 $v_0=f(u_0)$ 处连续.
> >
> > 为此，对 $f^{-1}(v_0)=u_0$ 处的开球 $B_\delta(u_0)$，由于条件“在 $U$ 上 $J_f$ 处处可逆”，知道 $u_0$ 处 $J_f$ 可逆. 利用 Step 1 和 Step 2 的结论，$\exist B_{2R_1}(u_0)$ 使得 $f$ 在 $B_{2R_1}(u_0)$ 上是单射 (自动正确)；同时 Step 2 的结论表明 $\forall w\in B_{R_1/2}(f(u_0))$，$\exist x\in\overline{B_{R_1}(u_0)}$ 使得 $f(x)=w$.
> >
> > 这表明 $f^{-1}(w)=x\in\overline{B_{R_1}(u_0)}\subseteq\overline{B_{2R_1}(u_0)}$ (对 $\forall w\in B_{R_1/2}(f(u_0))$ 成立).
> >
> > 显然 $R_1$ 取得越小，上面的话越正确，因此我们不妨取 $2R_1<\delta$，这时得到
> > $$
> > f^{-1}[B_{R_1/2}(f(u_0))]\subseteq B_{2R_1}(u_0)\subseteq B_\delta(u_0)
> > $$
> > 取 $\varepsilon=R_1/2$，上式就给出：
> > $$
> > f^{-1}[B_\varepsilon(f(u_0))]\subseteq B_\delta(u_0)
> > $$
> > 证毕 $f^{-1}$ 在 $f(u_0)$ 处连续.
>
> (2) $f^{-1}:V\to U$ 处处可微.
>
> 来证明 $f^{-1}$ 在每点 $v_0=f(u_0)$ 处可微.
>
> 为简单起见，不妨设 $u_0=v_0=0$，$J_f(u_0)=\text{Id}$. 此时有
> $$
> f(u_0+h)=f(u_0)+h+\tilde\alpha(h)\,,\quad\lim_{h\to0}\frac{\tilde\alpha(h)}{|h|}=0
> $$
> 来证明 $f^{-1}$ 在 $v_0$ 处可微且微分为 $\text{Id}$. 记：
> $$
> f^{-1}(v_0+v)=f^{-1}(v_0)+v+\beta(v)
> $$
> 只需要证明：
> $$
> \lim_{v\to0}\frac{\beta(v)}{|v|}=0\Longleftrightarrow\lim_{v\to0}\frac{f^{-1}(v)-v}{|v|}=0
> $$
> 换元，$h=f^{-1}(v)$，由 $f^{-1}$ 连续，得到当 $v\to0$ 时 $h\to0$，满足复合极限定理的修正 $\text{I}$ (因为 $v\neq0\Longleftrightarrow h\neq0$). 利用复合极限定理，得到
> $$
> \lim_{v\to0}\frac{f^{-1}(v)-v}{|v|}=\lim_{h\to0}\frac{h-f(h)}{|f(h)|}=\lim_{h\to0}\frac{-\tilde\alpha(h)}{|h+\tilde\alpha(h)|}=0
> $$
> (3) $f^{-1}$ 是 $C^1$ 的.
>
> 现在这个结论变得比较容易证明，因为我们已经知道 $f^{-1}$ 是可微的. 用 chain rule 知，
> $$
> J_{f^{-1}}(y)=[J_f(f^{-1}(y))]^{-1}
> $$
> 回忆线性代数的结论，对于矩阵 $A=(a_{ij})$，其逆为 $A^{-1}=A^*/\det A$，其中 $A^*$ 是 $A$ 的伴随矩阵，它的矩阵元是 $A$ 的代数余子式.
>
> 因此，$A^{-1}$ 的矩阵元是 $A$ 的矩阵元的有理式，分母是 $\det A$，亦即 $[J_f(x)]^{-1}$ 的矩阵元是 $J_f(x)$ 的矩阵元的有理式，再由上面链式法则给出的结论，得到 $J_{f^{-1}}(y)$ 的矩阵元是 $[J_f(x)]^{-1}$ 的矩阵元再复合一个映射 $f^{-1}(y)$ (连续函数).
>
> $\Longrightarrow$ $J_{f^{-1}}(y)$ 的矩阵元全部是连续函数.
>
> $\Longrightarrow$ $f^{-1}$ 的各分量的偏导都是连续的，$f^{-1}\in C^1$，证毕.

一个简单的例子：

/Example/

> $n=2$ 时，
> $$
> J_f(x)=\begin{pmatrix}
> a&b\\c&d
> \end{pmatrix}\Longrightarrow[J_f(x)]^{-1}=\frac{1}{ad-bc}\begin{pmatrix}
> d&-b\\-c&a
> \end{pmatrix}
> $$
> 之后得到
> $$
> J_{f^{-1}}(y)=\left.\begin{pmatrix}
> \frac{d}{ad-bc}&-\frac{b}{ad-bc}\\
> -\frac{c}{ad-bc}&\frac{a}{ad-bc}
> \end{pmatrix}\right|_{f^{-1}(y)}
> $$

