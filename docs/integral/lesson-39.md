---
title: Lesson 39 整体性质
permalink: /integral/lesson-39/
createTime: 2025/3/19 15:08:17
---
上节课还没有讲完的一个例子：

/Example/

> 设 $\{a_n\}$ 正项，$\underset{n=0}{\overset{\infty}{\sum}}a_n$ 发散，判断
> $$
> \underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{na_n+1}
> $$
> 的收敛发散性.
>
> ---
>
> 首先化简处理，得到
> $$
> \underset{n=0}{\overset{\infty}{\sum}}\frac{1}{n+\frac{1}{a_n}}
> $$
> 取 $\frac{1}{a_n}=1$ ($\forall n$) 满足 $\underset{n=0}{\overset{\infty}{\sum}}a_n$ 发散，且 $\underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{na_n+1}=\underset{n=0}{\overset{\infty}{\sum}}\frac{1}{n+1}$ 发散.
>
> ---
>
> 判断：
> $$
> \underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{n^2a_n+1}
> $$
> 显然小于 $\underset{n=0}{\overset{\infty}{\sum}}\frac{1}{n^2}$，收敛.
>
> ---
>
> 但是有例子让 $\underset{n=0}{\overset{\infty}{\sum}}\frac{a_n}{na_n+1}$ 收敛，比如尝试取 $a_n=\frac{1}{n^2}$，但是这样不满足 $\underset{n=0}{\overset{\infty}{\sum}}a_n$ 发散. 为了调整 $\underset{n=0}{\overset{\infty}{\sum}}a_n$，我们考虑在其中引入一些调和级数的成分，使得它存在一点发散的 part. 改为：
> $$
> a_n=\left\{\begin{array}{lr}
> \frac{1}{n^2}\,,\quad\forall \sqrt{n}\notin\mathbb{Z}\\\\
> \frac{1}{\sqrt{n}}\,,\quad\forall\sqrt{n}\in\mathbb{Z}
> \end{array}\right.
> $$
> 从而，
> $$
> \underset{n=0}{\overset{\infty}{\sum}}a_n=\frac{1}{\sqrt1}+\frac{1}{2^2}+\frac{1}{3^2}+\frac{1}{\sqrt4}+\frac{1}{5^2}+\cdots
> $$
> 有一个子序列是调和级数，于是 $\underset{n=0}{\overset{\infty}{\sum}}a_n$ 发散. 另一方面，考虑
> $$
> x_n=\frac{1}{n+\frac{1}{a_n}}=\left\{\begin{array}{lr}
> \frac{1}{n+n^2}\,,\quad\forall\sqrt{n}\notin\mathbb{Z}\\\\
> \frac{1}{n+\sqrt{n}}\,,\quad\forall\sqrt{n}\in\mathbb{Z}
> \end{array}\right.
> $$
> 可以拆成两个部分：
> $$
> y_n=\left\{\begin{array}{lr}
> \frac{1}{n+n^2}\,,\quad\forall\sqrt{n}\notin\mathbb{Z}\\\\
> 0\,,\quad\forall\sqrt{n}\in\mathbb{Z}
> \end{array}\right.\,,\quad z_n=\left\{\begin{array}{lr}
> 0\,,\quad\forall\sqrt{n}\notin\mathbb{Z}\\\\
> \frac{1}{n+\sqrt{n}}\,,\quad\forall\sqrt{n}\in\mathbb{Z}
> \end{array}\right.
> $$
> 其中两项都是 $\frac{1}{m+m^2}$ ($m\in\mathbb{Z}$) 扔掉部分项，所以总和一定是收敛的.

## 连续映射的局部性质

/Theorem/

> 四则运算保持连续性. 特别地，作除法时要求分母非 $0$.
>
> 数学语言 (以除法为例)：设 $f,g:D\to\R$ 在 $x_0$ 处连续，且 $g(x_0)\neq0$，则 $\frac{f}{g}$ 在 $x_0$ 处连续.

证明方法可以使用极限的四则运算，也可以更形式化地使用“复合映射”的方式.

/Proof/

> /Method/ (1)
>
> > $$
> > \lim_{x\to x_0}\frac{f(x)}{g(x)}=\frac{\underset{x\to x_0}{\lim}f(x)}{\underset{x\to x_0}{\lim}g(x)}=\frac{f(x_0)}{g(x_0)}
> > $$
> >
> > 证毕.
>
> ---
>
> /Method/ (2) (更加形式化)
>
> > $$
> > D\overset{h=(f,g)}{\longrightarrow}\R\times(\R|\{0\})\overset{q}{\longrightarrow}\R
> > $$
> >
> > $q$ 是除法函数，得证.
>
> 上节课已经[证明](/integral/lesson-38/#连续映射的局部性质)过一遍.
>
> 当然证法二上节课用的是极限再次证明，但是如果觉得和方法一重复，可以用 $\varepsilon$ - $\delta$ 语言来证明. 为此，$\forall\varepsilon>0$ 取 $\delta$，使得对 $\forall d((a,b),(a_0,b_0))<\delta$，来证明 $|q(a,b)-q(a_0,b_0)|<\varepsilon$.
>
> 则：
> $$
> \begin{aligned}
> \text{LHS}&=\left|\frac{a}{b}-\frac{a_0}{b_0}\right|\\\\
> &=\frac{|ab_0-a_0b_0+a_0b_0-a_0b|}{|b_0b|}\\\\
> &\leq\frac{|a-a_0||b_0|+|a_0||b-b_0|}{|b_0b|}
> \end{aligned}
> $$
> 由于 $|b-b_0|<\delta$，得到 $|b|\geq|b_0|-\delta\geq\frac{1}{2}|b_0|$ (取 $\delta<\frac{1}{2}|b_0|$). 代入得到：
> $$
> \text{LHS}<\delta\cdot\frac{|a_0|+|b_0|}{|b_0|\cdot\frac{1}{2}|b_0|}<\varepsilon
> $$
> 最终得到是取
> $$
> 0<\delta<\min\left(\frac{|b_0|}{2},\frac{\varepsilon\cdot\frac{1}{2}|b_0|^2}{|a_0|+|b_0|} \right)
> $$

利用 $\varepsilon$ - $\delta$ 语言，我们可证更多例子：

/Example/

> 设 $d$ 是 $X$ 上的度量 (metric)，求证：$d(x,a)$ 关于 $x$ 连续.
>
> ---
>
> /Proof/
>
> > 来证明 $f(x)=d(x,a)$ 在每点 $x_0$ 处连续，为此 $\forall\varepsilon>0$，取 $\delta=\varepsilon$，从而有
> > $$
> > |f(x)-f(x_0)|=|d(x,a)-d(x_0,a)|\leq d(x,x_0)<\delta=\varepsilon
> > $$
> > 得证.

/Example/

> 判断连续性：
> $$
> f(x,y)=\left\{\begin{array}{lr}
> \frac{x^2+y^2}{|x|+|y|}\,,\quad\forall(x,y)\neq(0,0)\\\\
> 0\,,\quad(x,y)=(0,0)
> \end{array}\right.
> $$
> 为了上述例子，我们需要补充一个定理：
>
> ---
>
> /Theorem/
>
> >设 $f,g\in C(D,\R)$，则 $f\pm g,f\cdot g\in C(D,\R)$，$\frac{f}{g}\in C(D|g^{-1}(0),\R)$.
>
> ---
>
> 在 $\R^2|\vec{0}$ 上，$f$ 来自两个连续函数，可以得到处处连续.
>
> 但是在 $\vec{0}$ 点处，我们知道
> $$
> \lim_{(x,y)\to(0,0)}f(x,y)=0=f(0,0)
> $$
> 因此连续.
>
> 具体验证上述极限，可以通过不等式夹逼：
> $$
> \frac{x^2+y^2}{|x|+|y|}\leq |x|+|y|
> $$
>
> ---
>
> 这里经常会用到的一些不等式：
>
> * A - G (算数 - 几何) 均值不等式：对于 $x_1,\cdots,x_n\geq0$ 有
>   $$
>   \frac{x_1+\cdots+x_n}{n}\geq\sqrt[n]{x_1\cdots x_n}
>   $$
>
> * Cauchy - Schwartz 不等式：
>   $$
>   (a_1^2+\cdots+a_n^2)(b_1^2+\cdots+b_n^2)\geq\left(\underset{i=1}{\overset{n}{\sum}}a_ib_i\right)^2\\
>   (a_1^2+\cdots+a_n^2)n\geq\left(\underset{i=1}{\overset{n}{\sum}}a_i\right)^2
>   $$
>
> * $(a+b)^2\geq a^2+b^2$ 若 $a,b$ 同号.

证毕.

## 整体性质

(==点集拓扑的核心内容==)

介值定理 (依赖于定义域的道路连通性，$f$ 连续而且能取到中间值)、有界性 / 最值定理 (依赖于定义域的紧致性)

### 介值定理

/Definition/

> 所谓 $D$ 上的一条道路，
>
> > 直观想象，有一条时间轴 $t\in[0,1]$，在时间 $t$ 时走到 $D$ 中的点 $p(t)$.
>
> 是指连续映射 $p:[0,1]\to D$，称 $p(0)$ 为起点，$p(1)$ 为终点，称 $p$ 是连接 $p(0)$ 到 $p(1)$ 的道路 (path).
>
> 若 $p(0)=p(1)$，则称 $p$ 为一个闭道路.

/Example/

> 直线通路：$p(t)=\vec{x}_0+\vec{v}t$ ($\vec{v}$ 为速度矢量)，若终点为 $\vec{y}$，则速度矢量可以写成 $(\vec{y}-\vec{x})$；同时，更加数学地，可以用权重的方式写出道路：$p(t)=(1-t)\vec{x}+t\vec{y}$.

/Definition/

> 称 $D$ 是道路连通的，如果 $D$ 中任何两点都可以由 $D$ 中的道路相连.

/Definition/

> 称 $D$ 是 $\R^n$ 的**凸子集**，若 $\forall\vec{x},\vec{y}\in D$，有线段 $\overline{xy}\subseteq D$.
>
> 立即发现，$\R^n$ 的凸子集都是道路连通的，因为任何 $\vec{x},\vec{y}$ 之间都有直线道路连通.

有人觉得凸子集作为道路连通的例子过于平庸，我们来看一个更加复杂的例子：

/Example/

> $n-1$ 维球面 (sphere) $S^{n-1}=\{(x_1,\cdots,x_n)|\underset{i=1}{\overset{n}{\sum}}x_i^2=1\}$.
>
> 首先，$S^0=\{\pm1\}$，为两点集合，显然不是道路连通的.
>
> 对于更高维的球面，均为道路连通的：
>
> ---
>
> /Claim/
>
> > $S^{n-1}$ ($n\geq2$) 均道路连通.
>
> ---
>
> /Proof/
>
> > 现在看来，我们想要写一个道路出来并不容易，但是我们能够直接用直线先连接两点，这个路径在球内部. 如果想象一个光源在球中心，照射这个线段路径，则能够在球面上产生一个投影路径.
> >
> > 直线道路为 $\vec{x}+t(\vec{y}-\vec{x})$，在照射之后，每处都存在一个伸缩比 $q/|q|$，得到道路：
> > $$
> > p(t)=\frac{\vec{x}+t(\vec{y}-\vec{x})}{|\vec{x}+t(\vec{y}-\vec{x})|}\,,\quad\forall0\leq t\leq1
> > $$
> > 但是当线段道路经过球心时，有一个点通过光源，无法被投影，因此我们要特别研究对径点的行为.
> >
> > 假若 $\vec{x},\vec{y}$ 分别是南、北极点，我们可以引入另外一个点 $\vec{z}$，则能够先走 $\vec{x}\to\vec{z}$，再走 $\vec{z}\to\vec{y}$，得到一条道路.

/Definition/

> 道路的乘积 $p_1\times p_2:[0,1]\to D$ (设 $p_1,p_2:[0,1]\to D$ 是 $D$ 中的 path)，为：
> $$
> (p_1\times p_2)(t)=\left\{\begin{array}{lr}
> p_1(2t)\,,\quad0\leq t\leq\frac{1}{2}\\\\
> p_2(2(t-\frac{1}{2}))\,,\quad\frac{1}{2}\leq t\leq1
> \end{array}\right.
> $$
> 显然，有要求
> $$
> \lim_{t\to\frac{1}{2}-}p_1\times p_2=\lim_{t\to\frac{1}{2}-}p_1(2t)=p_1(1)\\
> \lim_{t\to\frac{1}{2}+}p_1\times p_2=\lim_{t\to\frac{1}{2}+}p_2(2t-1)=p_2(0)
> $$
> 也就是 $p_1(1)=p_2(0)$.

上面球面例子中的对径点道路就可以用道路乘积构造，$S^0$ 不道路连通的原因也就是没有第三个点存在.

/Theorem/ (介值定理)

> 设 $D$ 道路连通，$f:D\to\R^1$ 连续，则 $f$ 可取到一切介值 / 中间值.
>
> 对于任何 $v$ 介于 $f(x),f(y)$，则 $\exist z\in D$ 使得 $f(z)=v$.

::: danger

只有多元函数有介值定理，多元映射没有介值定理！

:::

/Proof/

> 由 $D$ 是 path connected 知，$\exist$ path $p:[0,1]\to D$ 连接 $x$ 到 $y$，即 $p(0)=x$，$p(1)=y$，令 $g(t)=(f\circ p)(t):[0,1]\to D\to\R$，而 $f,p$ 均连续，所以 $g(t)$ 是一个连续的一元函数，有 $g(0)=f(x)$，$f(1)=f(y)$，$v$ 介于 $g(0)$ 和 $g(1)$ 之间.
>
> 用一元函数的介值定理得到 $\exist g(t)=v$，即 $f(p(t))=v$.

::: tip

总结：我们发现多元函数的研究方法实际上很简单，只要找一条道路，直接利用一元微分学的结果即可.

因此事实上我们再讲 20 分钟就能讲完多元 Taylor 公式. —— 艾神

:::

### 最值定理

只有最值定理本质地和维度有关，因此不能直接纳入上面的“一元微分学”框架.

/Definition/ (紧致拓扑空间)

> 设 $(X,\mathscr{T})$ 是一个拓扑空间，
>
> ---
>
> /Definition/
>
> > 1. 称 $\mathscr{U}=\{U_\alpha,\alpha\in I\}$ 是 $X$ 的一个覆盖，如果 $\underset{\alpha\in I}{\bigcup}U_\alpha=X$.
> >
> >    称 $\mathscr{U}$ 是开覆盖，如果 $\mathscr{U}$ 覆盖 $X$ 且每个 $U_\alpha$ 都是 $X$ 的开集.
> >
> > 2. 称 $\mathscr{V}\subseteq\mathscr{U}$ 是 $\mathscr{U}$ 的一个子覆盖，若 $\underset{U_\alpha\in\mathscr{V}}{\bigcup}U_\alpha=X$.
> >
> >    称 $\mathscr{V}$ 是一个有限子覆盖，若 $\mathscr{V}$ 是一个子覆盖且 $|\mathscr{V}|<+\infty$.
>
> ---
>
> 称 $X$ 是紧致的 (compact)，如果 $X$ 的任何开覆盖都有有限子覆盖.

/Example/

> Euclidean 度量拓扑 $(\R^n,\mathscr{T})$，不紧致.
>
> 因为 $\mathscr{U}=\{U_n=B_n(\vec{0})\}_{n=1}^\infty$，为一个开覆盖，但是其没有有限子覆盖.