---
url: /integral/lesson-44/index.md
---
## 高阶导数 / 偏导数

设 $f$ 在 $D\subseteq\R^n$ 上处处有偏导数，得到偏导函数 $\frac{\partial f}{\partial x\_i}:D\to\R$，再考虑其偏导，得到定义：

/Definition/

> 若 $\frac{\partial f}{\partial x\_i}$ 在 $\vec{x}\_0$ 处有第 $j$ 个偏导数，称之为 $f$ 在 $\vec{x}*0$ 处的二阶偏导.
> $$
> \left.\frac{\partial}{\partial x\_j}\left(\frac{\partial f}{\partial x\_i} \right)\right|*{x=\vec{x}*0}
> $$
> 当然和偏导数一样，二阶偏导有很多记号：
> $$
> \begin{aligned}
> &\left.\frac{\partial}{\partial x\_j}\frac{\partial f}{\partial x\_i} \right|*{x=\vec{x}*0}=\left.\frac{\partial^2f}{\partial x\_j\partial x\_i} \right|*{x=\vec{x}\_0}=\frac{\partial^2f}{\partial x\_j\partial x\_i}(\vec{x}\_0)=\frac{\partial^2f(\vec{x}*0)}{\partial x\_j\partial x\_i}\\\\
> &=\partial\_j(\partial\_if)(\vec{x}*0)=\partial\_j\partial\_if(\vec{x}*0)=\partial*{x\_j}\partial*{x\_i}f(\vec{x}*0)=(f*{x\_i})*{x\_j}(\vec{x}*0)\\\\
> &=f*{x\_ix\_j}(\vec{x}\_0)=(f'\_i)''\_j(\vec{x}*0)=f''*{ij}(\vec{x}\_0)
> \end{aligned}
> $$
> 注意：规则是离 $f$ 更近的先求导.
>
> 二阶偏导共有 $n^2$ 个，其中 $i=j$ 时有
> $$
> \partial\_i\partial\_if=(\partial\_i)^2f=f''\_{ii}=\frac{\partial^2f}{\partial x\_i\partial x\_i}=\frac{\partial^2f}{\partial x\_i^2}
> $$

接下来可以递归地定义高阶偏导：

/Definition/ (递归定义)

> 设 $D$ 上处处有 $k-1$ 阶偏导：
> $$
> \partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f:D\to\R
> $$
> 定义
> $$
> \partial\_{i\_k}(\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f)(\vec{x}*0)=\partial*{i\_k}\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f(\vec{x}\_0)
> $$
> 称为 $f$ 的 (一个) $k$ 阶偏导.

从而我们能够计算任意高阶导数.

/Example/

> Laplace 算子：
> $$
> \nabla^2=\sum\_{i=1}^n\frac{\partial^2}{\partial x\_i^2}=\sum\_{i=1}^n\partial\_i^2
> $$
> 若 $f$ 有二阶偏导，定义
> $$
> \nabla^2f=\sum\_{i=1}^n\frac{\partial^2f}{\partial x\_i^2}=\sum\_{i=1}^nf''\_{ii}
> $$

/Example/

> 接着上面一个例子，我们考虑 $n\geq3$ 时，$f(\vec{x})=r^{2-n}:\R^n|0\to\R$，其中 $r$ 为场点到原点的距离，也就是 $(\sum x\_i^2)^{1/2}$.
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
> > \frac{\partial r}{\partial x\_i}&=\frac{x\_i}{r}
> > \end{aligned}
> > $$
> > 得到：
> > $$
> > \begin{aligned}
> > \frac{\partial}{\partial x\_i}(r^{2-n})&=(2-n)r^{1-n}\frac{\partial r}{\partial x\_i}=(2-n)r^{-n}x\_i\\\\
> > \frac{\partial}{\partial x\_j}\left(\frac{\partial}{\partial x\_i}r^{2-n} \right)&=\frac{\partial}{\partial x\_j}((2-n)r^{-n}x\_i)\\\\
> > &=(2-n)(-n)r^{-n-2}x\_jx\_i+(2-n)r^{-n}\\\\
> > \nabla^2(r^{2-n})&=\sum\_{i}\left((2-n)(-n)r^{-n-2}x\_i^2+(2-n)r^{-n} \right)\\\\
> > &=(2-n)\sum\_i(-nr^{-n}+nr^{-n})=0
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
> \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},,\quad
> \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
> $$
> 进而，
> $$
> \begin{aligned}
> \nabla^2u&=\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=\frac{\partial}{\partial x}\left(\frac{\partial v}{\partial y} \right)+\frac{\partial}{\partial y}\left(-\frac{\partial v}{\partial x} \right)\\\\
> &=\partial\_x\partial\_yv-\partial\_y\partial\_xv
> \end{aligned}
> $$
> 到这一步为止我们已经无法往下证明了.

我们需要的是二阶偏导可交换这一条件，这里有定理：

/Theorem/ (Schwartz - Clairaut)

> 若 $f\in C^2$，则 $\partial\_i\partial\_jf=\partial\_j\partial\_if$.

在复变函数中，我们会由 $f$ 全纯 $\longrightarrow$ Cauchy 积分公式，再证明 $f\in C^\infty$，之后利用上述定理证明命题. 我们的课程还无法覆盖这些内容.

但是这可以引出一些例子：

/Example/

> 对未必 $C^2$ 的 $f$，$f''*{xy}$ 不一定等于 $f''*{yx}$. 看如下函数：
> $$
> f(x,y)=\left{\begin{array}{lr}
> \frac{xy(x^2-y^2)}{x^2+y^2},,\quad(x,y)\neq(0,0)\\\\
> 0,,\quad(x,y)=(0,0)
> \end{array}\right.
> $$
> 验证：$f''*{xy}(0,0)\neq f''*{yx}(0,0)$.
>
> 计算：
> $$
> f\_{xy}''(0,0)=\partial\_yf\_x(0,0)=\lim\_{y\to0}\frac{f\_x(0,y)-f\_x(0,0)}{y}
> $$
> 先要计算一阶导数，得到 $f\_x(0,y)=-y$，$f\_x(0,0)=0$，代入得到上式为 $f''\_{xy}(0,0)=-1$.
>
> 另一个方向为
> $$
> f''*{yx}(0,0)=\partial\_xf\_y(0,0)=\lim*{x\to0}\frac{f\_y(x,0)-f\_y(0,0)}{x}
> $$
> 这里，有
> $$
> \begin{aligned}
> f\_y(x,0)&=\lim\_{y\to0}\frac{f(x,y)-f(x,0)}{y}=\lim\_{y\to0}\frac{\frac{xy(x^2-y^2)}{x^2+y^2}-0}{y}=x
> \end{aligned}
> $$
> 所以上式结果是 $f\_{yx}''(0,0)=1$，两者不相等.

接下来我们逐点地叙述 Schwartz - Clairaut 定理：

/Theorem/ (Schwartz - Clairaut)

> 设 $f(x,y)$ 在点 $(a,b)$ 某邻域中处处有二阶偏导数 $\partial\_x\partial\_yf,\partial\_y\partial\_xf$，且两者在 $(a,b)$ 处均连续，则有 $\partial\_x\partial\_yf(a,b)=\partial\_y\partial\_xf(a,b)$.

/Proof/

> /Draft/
>
> > $$
> > \begin{aligned}
> > &\partial\_x(\partial\_yf)(a,b)\\\\
> > &\sim\frac{f\_y(a+s,b)-f\_y(a,b)}{s}\\\\
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
> F&=\lim\_{(s,t)\to(0,0)}\frac{f(a+s,b+t)-f(a+s,b)-f(a,b+t)+f(a,b)}{st}\\\\
> &=\lim\_{(s,t)\to(0,0)}A(s,t)
> \end{aligned}
> $$
> 用两种方法计算 $F$. 首先写成：
> $$
> A(s,t)=\frac{1}{st}((f(a+s,b+t)-f(a+s,b))-(f(a,b+t)-f(a,b)))
> $$
> 如果记 $h(x)=f(x,b+t)-f(x,b)$，则上式化为
> $$
> A(s,t)=\frac{1}{st}(h(a+s)-h(a))=\frac{1}{t}\cdot h'(a+s\alpha),,\quad(0<\alpha<1)
> $$
> (其中用到一元微分中值定理). 于是，
> $$
> A(s,t)=\frac{1}{t}\cdot(f\_x(a+\alpha s,b+t)-f\_x(a+\alpha s,b))
> $$
> 如果记 $g(y)=f\_x(a+\alpha s,y)$，则上式化为
> $$
> A(s,t)=\frac{1}{t}\cdot(g(b+t)-g(b))=g'(b+t\beta),,\quad(0<\beta<1)
> $$
> (再用了一次一元微分中值定理). 于是，上式变成了 $A(s,t)=f\_{xy}(a+\alpha s,b+\beta t)$，由于 $f\_{xy}$ 在 $(a,b)$ 连续，且 $0<\alpha,\beta<1$，可知当 $(s,t)\to(0,0)$ 时，$(a+\alpha s,b+\beta t)\to(a,b)$，同时 $f\_{xy}(a+\alpha s,b+\beta t)\to f\_{xy}(a,b)$.
>
> 即有：$F=f\_{xy}(a,b)$.
>
> ***
>
> 换一种分组方式：
> $$
> A(s,t)=\frac{1}{st}((f(a+s,b+t)-f(a,b+t))-(f(a+s,b)-f(a,b)))
> $$
> 和上面完全一致，但是计算得到 $F=f\_{yx}(a,b)$，得证.

/Definition/

> 称 $f$ 在 $D\subseteq\R^n$ 中是 $C^k$ 光滑的，记为 $f\in C^k(D)$，如果 $f$ 在 $D$ 从 $1$ 阶到 $k$ 阶的各个高阶偏导都存在且连续(1) $\Longleftrightarrow$ $f$ 在 $D$ 上的各个 $k$ 阶偏导都存在且连续(2).

验证充分必要条件：

> (1) $\Longrightarrow$ (2) 显然成立.
>
> (2) $\Longrightarrow$ (1)：有 $\forall j$，$\partial\_j(\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f)$ 连续，也就是 $\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f$ 的任意阶偏导连续. 由 $C^1$ 定义，得到 $\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f\in C^1$，于是 $\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f$ 连续.
>
> 这样可以一直往上一阶递推.

整体形式的 Schwartz - Clairaut 定理：

/Theorem/

> 设 $f\in C^2(D)$，则 $\forall i,j$ 有
> $$
> \frac{\partial^2f}{\partial x\_i\partial x\_j}=\frac{\partial^2f}{\partial x\_j\partial x\_i}
> $$

/Proof/

> 冻结其他的所有分量，只留下 $x\_i,x\_j$ 分量，原来的 $f$ 就变成二元函数，和之前的证明是一致的.

更一般地，若 $f\in C^k(D)$，则 $f$ 的 $k$ 阶偏导不依赖于求导顺序：
$$
\partial\_{i\_k}\partial\_{i\_{k-1}}\cdots\partial\_{i\_1}f=\partial\_{j\_k}\partial\_{j\_{k-1}}\cdots\partial\_{j\_1}f
$$
只要 ${j\_1,\cdots,j\_k}$ 是 ${i\_1,\cdots,i\_k}$ 的重排. 这个证明只需要一次换位两个偏导，然后用上面的定理即可.

## 多元 Taylor 公式

多元 Taylor 公式本质上没有给出新的内容，就是将多元的函数限制在一个直线上，然后给出一元的 Taylor 公式：
$$
g(t)=f(x\_0+vt)\longleftrightarrow f
$$
/Theorem/

> 设 $D$ 是 $\R^n$ 的开集，$\vec{x},\vec{y}\in D$，且线段 $\overline{xy}\subseteq D$，则对于 $f\in C^m(D)$ 有：
>
> $$
> \begin{aligned}
> f(\vec{y})&=f(\vec{x})+\frac{1}{1!}\sum\_{i=1}^m\partial\_if(\vec{x})(y\_i-x\_i)+\cdots\\
> &\quad+\frac{1}{(m-1)!}\sum\_{i\_1}\cdots\sum\_{i\_{m-1}}\partial\_{i\_{m-1}}\cdots\partial\_{i\_1}f(\vec{x})(y\_{i\_1}-x\_{i\_1})\cdots(y\_{i\_{m-1}}-x\_{i\_{m-1}})\\
> &\quad+\frac{1}{m!}\sum\_{i\_1}\cdots\sum\_{i\_{m}}\partial\_{i\_{m}}\cdots\partial\_{i\_1}f(\vec{x}+\theta(\vec{y}-\vec{x}))(y\_{i\_1}-x\_{i\_1})\cdots(y\_{i\_{m}}-x\_{i\_{m}})
> \end{aligned}
> $$

/Proof/

> 设 $g(t)=f(x+t(y-x))$，$g(0)=f(x)$，$g(1)=f(y)$.
>
> 对 $g$ 用一元 Taylor 公式，得到
> $$
> g(1)=g(0)+\sum\_{k=1}^{m-1}\frac{g^{(k)}(0)}{k!}+\frac{g^{(n)}(\theta)}{(m-1)!},,\quad(0<\theta<1)
> $$
> 只需要计算 $g^{(k)}(0)$：用链式法则得到
> $$
> \begin{aligned}
> g'(t)&=\sum\_i\partial\_if(x+t(y-x))(y\_i-x\_i)\\\\
> g''(t)&=\sum\_i\sum\_j\partial\_j\partial\_if(x+t(y-x))(y\_j-x\_j)(y\_i-x\_i)\\
> \cdots
> \end{aligned}
> $$
