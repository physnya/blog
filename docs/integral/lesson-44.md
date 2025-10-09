---
title: Lesson 44 多元高阶导数
permalink: /integral/lesson-44/
createTime: 2025/04/09 15:09:58
---
## 高阶导数 / 偏导数

设 $f$ 在 $D\subseteq\R^n$ 上处处有偏导数，得到偏导函数 $\frac{\partial f}{\partial x_i}:D\to\R$，再考虑其偏导，得到定义：

/Definition/

> 若 $\frac{\partial f}{\partial x_i}$ 在 $\vec{x}_0$ 处有第 $j$ 个偏导数，称之为 $f$ 在 $\vec{x}_0$ 处的二阶偏导.
> $$
> \left.\frac{\partial}{\partial x_j}\left(\frac{\partial f}{\partial x_i} \right)\right|_{x=\vec{x}_0}
> $$
> 当然和偏导数一样，二阶偏导有很多记号：
> $$
> \begin{aligned}
> &\left.\frac{\partial}{\partial x_j}\frac{\partial f}{\partial x_i} \right|_{x=\vec{x}_0}=\left.\frac{\partial^2f}{\partial x_j\partial x_i} \right|_{x=\vec{x}_0}=\frac{\partial^2f}{\partial x_j\partial x_i}(\vec{x}_0)=\frac{\partial^2f(\vec{x}_0)}{\partial x_j\partial x_i}\\\\
> &=\partial_j(\partial_if)(\vec{x}_0)=\partial_j\partial_if(\vec{x}_0)=\partial_{x_j}\partial_{x_i}f(\vec{x}_0)=(f_{x_i})_{x_j}(\vec{x}_0)\\\\
> &=f_{x_ix_j}(\vec{x}_0)=(f'_i)''_j(\vec{x}_0)=f''_{ij}(\vec{x}_0)
> \end{aligned}
> $$
> 注意：规则是离 $f$ 更近的先求导.
>
> 二阶偏导共有 $n^2$ 个，其中 $i=j$ 时有
> $$
> \partial_i\partial_if=(\partial_i)^2f=f''_{ii}=\frac{\partial^2f}{\partial x_i\partial x_i}=\frac{\partial^2f}{\partial x_i^2}
> $$

接下来可以递归地定义高阶偏导：

/Definition/ (递归定义)

> 设 $D$ 上处处有 $k-1$ 阶偏导：
> $$
> \partial_{i_{k-1}}\cdots\partial_{i_1}f:D\to\R
> $$
> 定义
> $$
> \partial_{i_k}(\partial_{i_{k-1}}\cdots\partial_{i_1}f)(\vec{x}_0)=\partial_{i_k}\partial_{i_{k-1}}\cdots\partial_{i_1}f(\vec{x}_0)
> $$
> 称为 $f$ 的 (一个) $k$ 阶偏导.

从而我们能够计算任意高阶导数.

/Example/

> Laplace 算子：
> $$
> \nabla^2=\sum_{i=1}^n\frac{\partial^2}{\partial x_i^2}=\sum_{i=1}^n\partial_i^2
> $$
> 若 $f$ 有二阶偏导，定义
> $$
> \nabla^2f=\sum_{i=1}^n\frac{\partial^2f}{\partial x_i^2}=\sum_{i=1}^nf''_{ii}
> $$

/Example/

> 接着上面一个例子，我们考虑 $n\geq3$ 时，$f(\vec{x})=r^{2-n}:\R^n|0\to\R$，其中 $r$ 为场点到原点的距离，也就是 $(\sum x_i^2)^{1/2}$.
>
> /Claim/
>
> > $\nabla^2(r^{2-n})=0$.
>
> /Proof/
>
> > 以下常用的结论 (需要记下来)：
> > $$
> > \begin{aligned}
> > \frac{\partial r}{\partial x_i}&=\frac{x_i}{r}
> > \end{aligned}
> > $$
> > 得到：
> > $$
> > \begin{aligned}
> > \frac{\partial}{\partial x_i}(r^{2-n})&=(2-n)r^{1-n}\frac{\partial r}{\partial x_i}=(2-n)r^{-n}x_i\\\\
> > \frac{\partial}{\partial x_j}\left(\frac{\partial}{\partial x_i}r^{2-n} \right)&=\frac{\partial}{\partial x_j}((2-n)r^{-n}x_i)\\\\
> > &=(2-n)(-n)r^{-n-2}x_jx_i+(2-n)r^{-n}\\\\
> > \nabla^2(r^{2-n})&=\sum_{i}\left((2-n)(-n)r^{-n-2}x_i^2+(2-n)r^{-n} \right)\\\\
> > &=(2-n)\sum_i(-nr^{-n}+nr^{-n})=0
> > \end{aligned}
> > $$
> > 证毕.

由此我们可以定义：

/Definition/

> 称 $f$ 是 $D$ 上的调和函数 (harmonic)，若 $\nabla^2f=0$ on $D$.

由上面的例子，可以知道 $n\geq3$ 维中，$r^{2-n}$ 调和.

/Claim/

> 复可导 (全纯) 函数的实部和虚部均为调和函数.

/Proof/

> 设 $f:D (\subseteq\mathbb{C})\to\mathbb{C}$ 是全纯的，$f(x+y\text{i})=u(x,y)+v(x,y)\text{i}$. 称 $u,v$ 分别为 $f$ 的实部和虚部.
>
> 定义一个映射 $F(x,y)=(u(x,y),v(x,y))$，已经证明过 $f$ 全纯 $\Longleftrightarrow$ $F$ 可微且 Cauchy - Riemann 条件成立，也就是：
> $$
> 
> \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\,,\quad
> \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
> $$
> 进而，
> $$
> \begin{aligned}
> \nabla^2u&=\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=\frac{\partial}{\partial x}\left(\frac{\partial v}{\partial y} \right)+\frac{\partial}{\partial y}\left(-\frac{\partial v}{\partial x} \right)\\\\
> &=\partial_x\partial_yv-\partial_y\partial_xv
> \end{aligned}
> $$
> 到这一步为止我们已经无法往下证明了.

我们需要的是二阶偏导可交换这一条件，这里有定理：

/Theorem/ (Schwartz - Clairaut)

> 若 $f\in C^2$，则 $\partial_i\partial_jf=\partial_j\partial_if$.

在复变函数中，我们会由 $f$ 全纯 $\longrightarrow$ Cauchy 积分公式，再证明 $f\in C^\infty$，之后利用上述定理证明命题. 我们的课程还无法覆盖这些内容.

但是这可以引出一些例子：

/Example/

> 对未必 $C^2$ 的 $f$，$f''_{xy}$ 不一定等于 $f''_{yx}$. 看如下函数：
> $$
> f(x,y)=\left\{\begin{array}{lr}
> \frac{xy(x^2-y^2)}{x^2+y^2}\,,\quad(x,y)\neq(0,0)\\\\
> 0\,,\quad(x,y)=(0,0)
> \end{array}\right.
> $$
> 验证：$f''_{xy}(0,0)\neq f''_{yx}(0,0)$.
>
> 计算：
> $$
> f_{xy}''(0,0)=\partial_yf_x(0,0)=\lim_{y\to0}\frac{f_x(0,y)-f_x(0,0)}{y}
> $$
> 先要计算一阶导数，得到 $f_x(0,y)=-y$，$f_x(0,0)=0$，代入得到上式为 $f''_{xy}(0,0)=-1$.
>
> 另一个方向为
> $$
> f''_{yx}(0,0)=\partial_xf_y(0,0)=\lim_{x\to0}\frac{f_y(x,0)-f_y(0,0)}{x}
> $$
> 这里，有
> $$
> \begin{aligned}
> f_y(x,0)&=\lim_{y\to0}\frac{f(x,y)-f(x,0)}{y}=\lim_{y\to0}\frac{\frac{xy(x^2-y^2)}{x^2+y^2}-0}{y}=x
> \end{aligned}
> $$
> 所以上式结果是 $f_{yx}''(0,0)=1$，两者不相等.

接下来我们逐点地叙述 Schwartz - Clairaut 定理：

/Theorem/ (Schwartz - Clairaut)

> 设 $f(x,y)$ 在点 $(a,b)$ 某邻域中处处有二阶偏导数 $\partial_x\partial_yf,\partial_y\partial_xf$，且两者在 $(a,b)$ 处均连续，则有 $\partial_x\partial_yf(a,b)=\partial_y\partial_xf(a,b)$.

/Proof/

> /Draft/
>
> > $$
> > \begin{aligned}
> > &\partial_x(\partial_yf)(a,b)\\\\
> > &\sim\frac{f_y(a+s,b)-f_y(a,b)}{s}\\\\
> > &\sim\frac{\frac{f(a+s,b+t)-f(a+s,b)}{t}-\frac{f(a,b+t)-f(a,b)}{t}}{s}\\\\
> > &\sim\frac{f(a+s,b+t)-f(a+s,b)-f(a,b+t)+f(a,b)}{st}
> > \end{aligned}
> > $$
> >
> > 看起来是对称的.
>
> 引入“二元极限”：($s\neq0,t\neq0$)
> $$
> \begin{aligned}
> F&=\lim_{(s,t)\to(0,0)}\frac{f(a+s,b+t)-f(a+s,b)-f(a,b+t)+f(a,b)}{st}\\\\
> &=\lim_{(s,t)\to(0,0)}A(s,t)
> \end{aligned}
> $$
> 用两种方法计算 $F$. 首先写成：
> $$
> A(s,t)=\frac{1}{st}((f(a+s,b+t)-f(a+s,b))-(f(a,b+t)-f(a,b)))
> $$
> 如果记 $h(x)=f(x,b+t)-f(x,b)$，则上式化为
> $$
> A(s,t)=\frac{1}{st}(h(a+s)-h(a))=\frac{1}{t}\cdot h'(a+s\alpha)\,,\quad(0<\alpha<1)
> $$
> (其中用到一元微分中值定理). 于是，
> $$
> A(s,t)=\frac{1}{t}\cdot(f_x(a+\alpha s,b+t)-f_x(a+\alpha s,b))
> $$
> 如果记 $g(y)=f_x(a+\alpha s,y)$，则上式化为
> $$
> A(s,t)=\frac{1}{t}\cdot(g(b+t)-g(b))=g'(b+t\beta)\,,\quad(0<\beta<1)
> $$
> (再用了一次一元微分中值定理). 于是，上式变成了 $A(s,t)=f_{xy}(a+\alpha s,b+\beta t)$，由于 $f_{xy}$ 在 $(a,b)$ 连续，且 $0<\alpha,\beta<1$，可知当 $(s,t)\to(0,0)$ 时，$(a+\alpha s,b+\beta t)\to(a,b)$，同时 $f_{xy}(a+\alpha s,b+\beta t)\to f_{xy}(a,b)$.
>
> 即有：$F=f_{xy}(a,b)$.
>
> ---
>
> 换一种分组方式：
> $$
> A(s,t)=\frac{1}{st}((f(a+s,b+t)-f(a,b+t))-(f(a+s,b)-f(a,b)))
> $$
> 和上面完全一致，但是计算得到 $F=f_{yx}(a,b)$，得证.

/Definition/

> 称 $f$ 在 $D\subseteq\R^n$ 中是 $C^k$ 光滑的，记为 $f\in C^k(D)$，如果 $f$ 在 $D$ 从 $1$ 阶到 $k$ 阶的各个高阶偏导都存在且连续(1) $\Longleftrightarrow$ $f$ 在 $D$ 上的各个 $k$ 阶偏导都存在且连续(2).

验证充分必要条件：

> (1) $\Longrightarrow$ (2) 显然成立.
>
> (2) $\Longrightarrow$ (1)：有 $\forall j$，$\partial_j(\partial_{i_{k-1}}\cdots\partial_{i_1}f)$ 连续，也就是 $\partial_{i_{k-1}}\cdots\partial_{i_1}f$ 的任意阶偏导连续. 由 $C^1$ 定义，得到 $\partial_{i_{k-1}}\cdots\partial_{i_1}f\in C^1$，于是 $\partial_{i_{k-1}}\cdots\partial_{i_1}f$ 连续.
>
> 这样可以一直往上一阶递推.

整体形式的 Schwartz - Clairaut 定理：

/Theorem/

> 设 $f\in C^2(D)$，则 $\forall i,j$ 有
> $$
> \frac{\partial^2f}{\partial x_i\partial x_j}=\frac{\partial^2f}{\partial x_j\partial x_i}
> $$

/Proof/

> 冻结其他的所有分量，只留下 $x_i,x_j$ 分量，原来的 $f$ 就变成二元函数，和之前的证明是一致的.

更一般地，若 $f\in C^k(D)$，则 $f$ 的 $k$ 阶偏导不依赖于求导顺序：
$$
\partial_{i_k}\partial_{i_{k-1}}\cdots\partial_{i_1}f=\partial_{j_k}\partial_{j_{k-1}}\cdots\partial_{j_1}f
$$
只要 $\{j_1,\cdots,j_k\}$ 是 $\{i_1,\cdots,i_k\}$ 的重排. 这个证明只需要一次换位两个偏导，然后用上面的定理即可.

## 多元 Taylor 公式

多元 Taylor 公式本质上没有给出新的内容，就是将多元的函数限制在一个直线上，然后给出一元的 Taylor 公式：
$$
g(t)=f(x_0+vt)\longleftrightarrow f
$$
/Theorem/

> 设 $D$ 是 $\R^n$ 的开集，$\vec{x},\vec{y}\in D$，且线段 $\overline{xy}\subseteq D$，则对于 $f\in C^m(D)$ 有：
>
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\frac{1}{1!}\sum_{i=1}^m\partial_if(\vec{x})(y_i-x_i)+\cdots\\
> &\quad+\frac{1}{(m-1)!}\sum_{i_1}\cdots\sum_{i_{m-1}}\partial_{i_{m-1}}\cdots\partial_{i_1}f(\vec{x})(y_{i_1}-x_{i_1})\cdots(y_{i_{m-1}}-x_{i_{m-1}})\\
> &\quad+\frac{1}{m!}\sum_{i_1}\cdots\sum_{i_{m}}\partial_{i_{m}}\cdots\partial_{i_1}f(\vec{x}+\theta(\vec{y}-\vec{x}))(y_{i_1}-x_{i_1})\cdots(y_{i_{m}}-x_{i_{m}})
> \end{aligned}
> $$

/Proof/

> 设 $g(t)=f(x+t(y-x))$，$g(0)=f(x)$，$g(1)=f(y)$.
>
> 对 $g$ 用一元 Taylor 公式，得到
> $$
> g(1)=g(0)+\sum_{k=1}^{m-1}\frac{g^{(k)}(0)}{k!}+\frac{g^{(n)}(\theta)}{(m-1)!}\,,\quad(0<\theta<1)
> $$
> 只需要计算 $g^{(k)}(0)$：用链式法则得到
> $$
> \begin{aligned}
> g'(t)&=\sum_i\partial_if(x+t(y-x))(y_i-x_i)\\\\
> g''(t)&=\sum_i\sum_j\partial_j\partial_if(x+t(y-x))(y_j-x_j)(y_i-x_i)\\
> \cdots
> \end{aligned}
> $$