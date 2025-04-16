---
title: Lesson 45 Taylor 公式
permalink: /integral/lesson-45/
createTime: 2025/4/11 12:19:45
---
原定于明天的期中考试延期，具体延期到什么时间还在讨论.

## Taylor 公式

/Theorem/

> 设 $D$ 是 $\R^n$ 的开集，$\vec{x},\vec{y}\in D$ 且线段 $\overline{xy}\subseteq D$. 则对 $f\in C^{(m)}(D)$ 有
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\frac{1}{1!}\sum_{i=1}^m\partial_if(\vec{x})(y_i-x_i)+\cdots\\
> &\quad+\frac{1}{(m-1)!}\sum_{i_1}\cdots\sum_{i_{m-1}}\partial_{i_{m-1}}\cdots\partial_{i_1}f(\vec{x})(y_{i_1}-x_{i_1})\cdots(y_{i_{m-1}}-x_{i_{m-1}})\\
> &\quad+\frac{1}{m!}\sum_{i_1}\cdots\sum_{i_{m}}\partial_{i_{m}}\cdots\partial_{i_1}\textcolor{red}{f(\vec{x}+\theta(\vec{y}-\vec{x}))}(y_{i_1}-x_{i_1})\cdots(y_{i_{m}}-x_{i_{m}})
> \end{aligned}
> $$
> 其中最后一项为余项.

/Proof/

> 上节课我们已经开了一个头，实际上是转化为一元的 Taylor 展开.
>
> 令 $g(t)=f(x$ 到 $y$ 的直线 path$)=f(\vec{x}+t(\vec{y}-\vec{x}))$.
>
> 计算 $g$ 的高阶导数：
> $$
> \begin{aligned}
> g^{(1)}(t)&=\sum_{i}\partial_if(x+t(y-x))(y_i-x_i)\quad(\text{need }f\in C^1)\\
> g^{(2)}(t)&=\sum_{i}\sum_{j}\partial_j\partial_if(x+t(y-x))(y_j-x_j)(y_i-x_i)\quad(\text{need }f\in C^2)\\
> &\cdots\\
> g^{(k)}(t)&=\sum_{i_1=1}^n\cdots\sum_{i_k=1}^n\partial_{i_k}\cdots\partial_{i_1}f(x+t(y-x))(y_{i_k}-x_{i_k})\cdots(y_{i_1}-x_{i_1})
> \end{aligned}
> $$
> 最后要求 $C^k$ (这就是我们要求 $f\in C^{(m)}(D)$ 的原因).
>
> 对 $g$ 在 $(0,1)$ 上使用一元 Taylor 展开，$\exist0<\theta<1$ 使得
> $$
> g(1)=g(0)+\sum_{k=1}^{m-1}\frac{g^{(k)}(0)}{k!}(1-0)^k+\frac{g^{(m)}(\theta)}{m!}(1-0)^m
> $$
> 即有我们所写的多元 Taylor 公式：
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\frac{1}{1!}\sum_{i=1}^m\partial_if(\vec{x})(y_i-x_i)+\cdots\\
> &\quad+\frac{1}{(m-1)!}\sum_{i_1}\cdots\sum_{i_{m-1}}\partial_{i_{m-1}}\cdots\partial_{i_1}f(\vec{x})(y_{i_1}-x_{i_1})\cdots(y_{i_{m-1}}-x_{i_{m-1}})\\
> &\quad+\frac{1}{m!}\sum_{i_1}\cdots\sum_{i_{m}}\partial_{i_{m}}\cdots\partial_{i_1}\textcolor{red}{f(\vec{x}+\theta(\vec{y}-\vec{x}))}(y_{i_1}-x_{i_1})\cdots(y_{i_{m}}-x_{i_{m}})
> \end{aligned}
> $$
>
> > 实际上多元 Taylor 并没有带来任何新的东西，因此 Rudin 在自己的书的正文中甚至没有提到这一公式，而是作为一个练习题.

实际使用中，我们用到的版本可能是 $m=1$ 时的公式，也就是多元微分中值定理：

/Corollary/

> 设 $\overline{xy}\subseteq D$，$f\in C^{(1)}(D)$，则 $\exist0<\theta<1$ 使得
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\sum_{i=1}^n\partial_if(\vec{x}+\theta(\vec{y}-\vec{x}))(y_i-x_i)\\
> &=\underset{0\text{ - order}}{\underline{f(\vec{x})}}+\underset{1\text{ - order}}{\underline{\left.\begin{pmatrix}\partial_1f&\cdots&\partial_nf\end{pmatrix}\right|_{\vec{x}+\theta(\vec{y}-\vec{x})}\begin{pmatrix}y_1-x_1\\\vdots\\y_n-x_n\end{pmatrix}}}
> \end{aligned}
> $$
> 回忆 Jacobian：
> $$
> J_f(\vec{u})=\begin{pmatrix}
> \frac{\partial f}{\partial x_i}(\vec{u})&\cdots\frac{\partial f}{\partial x_n}(\vec{u})
> \end{pmatrix}_{1\times n}
> $$
> 因此喜欢线性代数的同学可以把微分中值写作
> $$
> f(\vec{y})=f(\vec{x})+J_f(\vec{x}+\theta(\vec{y}-\vec{x}))(\vec{y}-\vec{x})
> $$
> 与之前所说的 $f$ 线性近似项 $\longleftrightarrow$ $f$ 的微分 (其表示矩阵为 $J_f$) 相互呼应.
>
> > $f$ 可微：$f(y)=f(x)+J_f(x)(y-x)+o(\Vert y-x\Vert)$；
> >
> > 微分中值：$f(y)=f(x)+J_f(x+\theta(y-x))(y-x)$.
> >
> > 这和一元的结果非常相似.

对于 $m=2$ 的版本，展开至二阶的 Taylor 公式：

/Corollary/

> 设 $f\in C^2(D)$ 且 $\overline{xy}\subseteq D$，则 $\exist0<\theta<1$ 使得
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\sum_{i}\partial_if(\vec{x})(y_i-x_i)\\
> &\quad+\frac{1}{2}\sum_i\sum_j\partial_j\partial_if(\vec{x}+\theta(\vec{y}-\vec{x}))(y_j-x_j)(y_i-x_i)\\
> &=f(\vec{x})+J_f(\vec{x})(\vec{y}-\vec{x})\\
> &\quad+\frac{1}{2}\begin{pmatrix}
> y_1-x_1&\cdots&y_n-x_n
> \end{pmatrix}\begin{pmatrix}
> \partial_j\partial_if(\vec{x}+\theta(\vec{y}-\vec{x}))
> \end{pmatrix}\begin{pmatrix}
> y_1-x_1\\\vdots\\y_n-x_b
> \end{pmatrix}
> \end{aligned}
> $$
> 这时我们得到了一个二次型. 定义：
>
> /Definition/
>
> > $f:D\to\R$ ($D\subseteq\R^n$) 的 Hessian 为
> > $$
> > \begin{aligned}
> > H_f(\vec{x})&=\left(\frac{\partial^2f(\vec{x})}{\partial_i\partial_j}\right)_{1\leq i\leq n,1\leq j\leq n}=\begin{pmatrix}
> > \frac{\partial^2f}{\partial x_1^2}&\cdots&\frac{\partial^2f}{\partial x_1\partial x_n}\\
> > \vdots&\ddots&\vdots\\
> > \frac{\partial^2f}{\partial x_n\partial x_1}&\cdots&\frac{\partial^2f}{\partial x_n^2}
> > \end{pmatrix}
> > \end{aligned}
> > $$
> > 这是二阶导数的表示矩阵.
>
> /Remark/
>
> > 对于 $f\in C^2$，我们有 Schwartz - Clairaut 定理，所以我们不关心 Hessian 的行列指标到底是怎么安排的，实际上 Hessian 是一个对称方阵.

/Remark/

> 以上 Taylor 公式我们都是用“浓缩”的形式来写的，如果执意使用分量形式，整个公式将变得无比庞大.
>
> 在多元微积分理论的学习中，我们必须习惯更加简洁的写法.

我们尝试写分量形式，体验一下式子的复杂程度：($n=2$)

* 一阶 Taylor 公式：
  $$
  \begin{aligned}
  f(x_0+\Delta x,y_0+\Delta y)&=f(x_0,y_0)+f'_x(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta x\\\\
  &\quad+f'_y(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta y
  \end{aligned}
  $$

* 二阶 Taylor 公式：
  $$
  \begin{aligned}
  f(x_0+\Delta x,y_0+\Delta y)&=f(x_0,y_0)+f_x'(x_0,y_0)+f'_y(x_0,y_0)\\\\
  &\quad+\frac{1}{2}(f''_{xx}(x_0+\theta\Delta x,y_0+\theta\Delta y)(\Delta x)^2\\\\
  &\quad+2f_{xy}''(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta x\Delta y\\\\
  &\quad+f''_{yy}(x_0+\theta\Delta x,y_0+\theta\Delta y)(\Delta y)^2)
  \end{aligned}
  $$

可见浓缩形式的简介程度.

## Taylor 公式的应用

/Claim/

> 设 $f\in C^{(1)}(D)$，$\overline{xy}\subseteq D$，且 $|\frac{\partial f}{\partial x_i}(u)|\leq K$，则
> $$
> |f(\vec{x})-f(\vec{y})|\leq\sqrt{n}K|\vec{x}-\vec{y}|
> $$

/Proof/

> 用微分中值，有：
> $$
> \begin{aligned}
> |f(y)-f(x)|&=\left|\sum_{i=1}^n\frac{\partial f}{\partial x_i}(x+\theta(y-x))(y_i-x_i) \right|\\\\
> &=|\nabla f(x+\theta(y-x))(y-x)|\\\\
> &\leq|\nabla f(x+\theta(y-x))|\cdot|y-x|\leq \sqrt{n^2K}\cdot|y-x|
> \end{aligned}
> $$

回忆：对于一元的 $f$，若 $f'=0$ 恒成立，则 $f$ 在区间上是常值.

/Theorem/

> 设 $D$ 是 $\R^n$ 的道路连通的开集，设 $\partial_if$ 在 $D$ 上恒为零 ($\forall1\leq i\leq n$)，则 $f$ 在 $D$ 上为常值.

/Proof/

> 先来简单思考一下：由 $\partial_if=0$ 知 $\partial_if$ 存在且连续，因此 $f\in C^1(D)$. 这时可以用微分中值定理，
> $$
> f(y)-f(x)=\sum_{i=1}^n\underset{0}{\underline{\frac{\partial f}{\partial x_i}(x+\theta(y_i-x_i))}}(y_i-x_i)=0
> $$
> 接下来作更为严谨的证明：
>
> 由 $D$ 道路连通，知存在 $D$ 中道路 $p:[0,1]\to D$ 连接 $x$ 到 $y$，$\forall0\leq t\leq 1$，由于 $p(t)\in D$ 且 $D$ 为开集，存在开球邻域 $B_t\ni p(t)$，$B_t\subseteq D$.
>
> 这样，由 $B_t$ 中任意两点的连线段 $\subseteq B_t\subseteq D$，可用微分中值，得到 $f$ 在 $B_t$ 上为常值 (用之前的推理). 注意到 $\{B_t\}_{0\leq t\leq1}$ 是一族开球且覆盖了 $Y=\text{Im}(p)=p[[0,1]]$，由 $[0,1]$ 紧致，得到其像 $p[[0,1]]$ 也是紧致的，因此开覆盖 $\{B_t\}$ 有有限子覆盖，即 $\exist Y\subseteq B_{t_1}\cup\cdots\cup B_{t_{k}}$.
>
> 结合 $f$ 在 $B_{t_1},\cdots,B_{t_k}$ 中皆为常值可知，$f$ 在 $Y$ 上只有有限个值.
>
> 若 $f$ 有多于一个值，那么由介值定理，就会有第三个值，所以只能是一个值.

## 带 Peano 余项的 Taylor 公式

用 Lagrange 余项的 Taylor 公式来导出 Peano 余项.

/Theorem/

> 设 $f$ 在 $\vec{x}_0$ 的某个开球邻域中 $C^m$ 光滑，则
> $$
> f(\vec{x}_0+\vec{h})=f(\vec{x}_0)+\sum_{k=1}^m\frac{1}{k!}\sum_{i_1}\cdots\sum_{i_k}\partial_{i_k}\cdots\partial_{i_1}f(\vec{x}_0)h_{i_1}\cdots h_{i_k}+o(|\vec{h}|^m)
> $$
> as $\vec{h}\to\vec{0}$.

/Proof/

> 将多项式 (polynomial) 部分的第 $k$ 项记作 $P_k$.
>
> Lagrange 余项的公式为
> $$
> f(x_0+h)=f(x_0)+\sum_{k=1}^{m-1}P_k+\frac{1}{m!}\sum_{i_1}\cdots\sum_{i_k}\partial_{i_k}\cdots\partial_{i_1}f(x_0+\theta h)h_{i_1}\cdots h_{i_m}
> $$
> 因此，余项 $R$ 可由之前证明的命题得到
> $$
> \begin{aligned}
> &\frac{|R|}{|h|^m}\\
> &=\frac{1}{m!}\left|\sum_{i_1}\cdots\sum_{i_m}(\partial_{i_m}\cdots\partial_{i_1}f(x_0+\theta h)-\partial_{i_m}\cdots\partial_{i_1}f(x_0))h_{i_m}\cdots h_{i_1}\right|\frac{1}{|h|^m}\\
> &\leq\frac{1}{m!}\sum_{i_1}\cdots\sum_{i_m}|\partial_{i_m}\cdots\partial_{i_1}f(x_0+\theta h)-\partial_{i_m}\cdots\partial_{i_1}f(x_0)|\to0
> \end{aligned}
> $$
> as $h\to0$. 用夹逼定理知道，$\underset{h\to0}{\lim}\frac{|R|}{|h|^m}=0$. 得证.

具体地，可以写一些低阶的版本：

1. ($m=1$) 设 $f\in C^1$，则
   $$
   f(x_0+h)=f(x_0)+\sum_{i=1}^m\partial_if(x_0)h_i+o(|h|)
   $$
   恰好是微分 / 可微的定义.

2. ($m=2$) 设 $f\in C^2$，则
   $$
   f(x_0+h)=f(x_0)+J_f(x_0)h+\frac{1}{2}h^TH_f(x_0)h+o(|h|^2)
   $$

/Example/

> 求 $f(x,y)=\ln(2+x+y+xy)$ 在 $(0,0)$ 处的二阶带 Peano 余项的 Taylor 公式.
>
> 计算偏导数：
> $$
> \begin{aligned}
> f_x&=\frac{1}{2+x+y+xy}(1+y)\longrightarrow f_x(0,0)=\frac{1}{2}\\
> f_y&=\frac{1}{2+x+y+xy}(1+x)\longrightarrow f_y(0,0)=\frac{1}{2}\\
> f_{xx}&=(1+y)(-1)\frac{1}{(2+x+y+xy)^2}(1+y)\longrightarrow f_{xx}(0,0)=-\frac{1}{4}\\
> f_{xy}&=\frac{(2+x+y+xy)-(1+y)(1+x)}{(2+x+y+xy)^2}\longrightarrow f_{xy}(0,0)=\frac{1}{4}\\
> f_{yy}&=(1+x)(-1)\frac{1}{(2+x+y+xy)^2}(1+x)\longrightarrow f_{yy}(0,0)=-\frac{1}{4}
> \end{aligned}
> $$
> 写在一起即可.

## 反函数定理

这是这学期最难证明的结论之一.

我们关心：$f:D\to E$ 是否有逆？

不同语境下，有

|          集合 & 映射           | $f$ 有逆 $\Longleftrightarrow$ $\exist g:D\to E$ 使得 $g\circ f=\text{Id}_D$，$f\circ g=\text{Id}_E$ $\Longleftrightarrow$ $f$ 双射 |
|      拓扑空间 & 连续映射       | 称连续映射 $f$ 有逆 $\Longleftrightarrow$ $\exist$ 连续的 $g:D\to E$ 使得两个复合都是恒同 $\Longleftrightarrow$ $f$ 是同胚，$g$ 是 $f$ 的逆 |
| $\R^n$ 的子集 & $C^1$ 光滑映射 | 称 $C^1$ 映射 $f$ 有 $C^1$ 的逆 $\Longleftrightarrow$ $\exist C^1$ 光滑的 $g:D\to E$ 使得两个复合都是恒同 $\Longleftrightarrow$ $f$ 是 $C^1$ 的微分同胚，$g$ 是 $f$ 的逆 |

关心问题：

1. 从 $X$ 到 $Y$ 有无同胚？(topology 的中心问题)

   拓扑空间可变形，不可撕开，不可粘合.

2. 从 $X$ 到 $Y$ 有无微分同胚？(微分拓扑)

   这个问题是困难的，大范围 / 整体上 $f$ 的逆非常难以求出，微积分中只能在局部上找出 $f$ 的逆 (这就是所谓的反函数定理)

有 $C^1$ 逆的必要条件：

/Claim/

> 设 $D,E$ 分别是 $\R^n$ 与 $\R^m$ 的开集，设 $\exist f:D\to E$ 及 $g:E\to D$ 是 $C^1$ 的，且 $g\circ f=\text{Id}_D$，$f\circ g=\text{Id}_E$. 则：
>
> 1. $\dim D=\dim E$ (即 $n=m$)；
> 2. $\forall x\in D$，微分 $\text{d}f_x$ 可逆；
> 3. $\forall x\in D$，有 $\text{d}g_{f(x)}=(\text{d}f_x)^{-1}$；
> 4. $\forall x\in D$，有 $J_g(f(x))=(J_f(x))^{-1}$；
> 5. $\text{d}f_x$ 可逆，$\det J_f(x)\neq0$.

/Proof/

> 用 Chain Rule，得到：
> $$
> \text{d}(\text{Id}_D)_x=\text{d}(g\circ f)_x=\text{d}g_{f(x)}\circ\text{d}f_x
> $$
> 得到 $\text{Id}_{\R^m}=\text{d}f_x\circ\text{d}g_{f(x)}$.
>
> 先证明引理：
>
> /Corollary/
>
> > 设有线性映射 $A:\R^n\to\R^m$，$B:\R^m\to\R^n$，满足 $B\circ A=\text{Id}_{\R^n}$，$A\circ B=\text{Id}_{\R^m}$，则 $m=n$，$B=A^{-1}$.
>
> /Proof/
>
> > 由 $\text{Im}(B\circ A)\subseteq \text{Im}B$，得到：
> > $$
> > \begin{aligned}
> > \dim(\text{Im}(B\circ A))&\leq\dim \text{Im}(B)\\\\
> > \Longleftrightarrow\dim(\text{Im}(\text{Id}_{\R^n}))&\leq\dim\R^m-\dim\ker(B)\\\\
> > \Longleftrightarrow\dim\R^n&\leq\dim\R^m\\\\
> > \Longleftrightarrow n&\leq m
> > \end{aligned}
> > $$
> > 反之亦成立，所以 $m=n$，$B=A^{-1}$.
>
> 总结一下上述证明：有 $C^1$ 逆的必要条件是两边的维数相同.

/Theorem/ (反函数定理)

> 以上条件可以保证 $f$ 在局部上有 $C^1$ 逆，但是是否有整体的逆，完全是未知的.
>
> 具体而言：
>
> 设 $D$ 是 $\R^n$ 的开集，$f:D\to\R^n$ 是 $C^1$ 光滑的，若 $\text{d}f_{x_0}$ 可逆 (等价于说 $\det J_f(x_0)\neq0$)，则存在 $x_0$ 的开邻域 $U$，存在 $f(x_0)$ 的开邻域 $V$，使得 $f:U\to V$ 是双射，且 $f^{-1}:V\to U$ 也是 $C^1$ 光滑的.
>
> /Remark/
>
> > 只要附加一个 Jacobian 非奇异的条件，我们就能够局部地给出反函数，而且反函数是 $C^1$ 光滑的.

证明这个定理最简洁的书也用了两页.

证明的核心是所谓 **压缩映像定理**：

/Theorem/ (压缩映像定理)

> 设 $(X,d)$ 是完备度量空间 (“完备”是指 $X$ 中的任何 Cauchy 列皆有极限)，设 $T:X\to X$ 是压缩的 (即 $\exist0<c<1$ 使得 $\forall x,y\in X$ 有 $d(T(x),T(y))\leq c\cdot d(x,y)$)，则 $T$ 有唯一的不动点.

/Proof/ (反函数定理证明 Step 0)

> 约化到较简单的 case：
>
> 对 $D$ 中的 $x_0$ 作平移 $h_1$；对 $\R^n$ 中的 $f(x_0)$ 作平移 $h_2$，其中 $h_1(x)=x-x_0$，$h_2(y)=y-f(x_0)$，记 $J_f(x_0)=A_{n\times n}$，由条件，$A$ 可逆，令 $\tilde f=R^{-1}\circ h_2^{-1}\circ f\circ h_1^{-1}$，这时 $f$ 可以用 $\tilde f$ 表示，有
> $$
> f=h_2^{-1}\circ R^{-1}\circ \tilde f\circ h_1
> $$
> $\tilde f$ 满足 $\tilde f(0)=0$，$\text{d}\tilde f_{0}=\text{Id}$.

下节课再完成之后的几个 steps.