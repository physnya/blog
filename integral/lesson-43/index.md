---
url: /integral/lesson-43/index.md
---
## Chain Rule

设 $f=(f\_1,\cdots,f\_m):\R^n\to\R^m$ 是可微的 (当然是 $C^1$ 的也可以)，$g:\R^m\to\R$ 是可微的 (也可以是 $C^1$ 的)，则：
$$
\frac{\partial}{\partial x\_i}g(f\_1(x\_1,\cdots,x\_n),\cdots,f\_m(x\_1,\cdots,x\_n))=\sum\_{k=1}^m\frac{\partial g}{\partial y\_k}(f(\vec{x}))\frac{\partial f\_k}{\partial x\_i}
$$
上面是使用映射语言做出的表述. 更早的语言，也就是变量语言，做出的表述是：

有初始变量 $x\_1,\cdots,x\_n$，中间变量 $y\_1,\cdots,y\_m$ 且对 $x\_1,\cdots,x\_n$ 有依赖关系 (为 $y\_i=f\_i(x\_1,\cdots,x\_n)$)，最终变量 $z$，依赖于 $y\_1,\cdots,y\_m$ (关系为 $z=g(y\_1,\cdots,y\_m)$). 因此，$z$ 能够视为依赖于 $x\_1,\cdots,x\_n$ 的.

这时候的链式法则写成：
$$
\frac{\partial z}{\partial x\_i}=\sum\_{k=1}^m\frac{\partial z}{\partial y\_k}\frac{\partial y\_k}{\partial x\_i}
$$
::: tip

这解释了名字的来源，因为这里的分子分母长得像链条环环相扣. ——艾神

:::

但是实际上这种写法有缺陷：

(1) 分子分母中出现的 $\partial y\_k$ 意义并不一样，我们甚至会问一个非常幼稚的问题——为什么不约掉呢？分母中出现的 $\partial y\_k$ 可以解释为 $z$ 对 $y\_k$ 的偏导数，但是再映射语言中第一个分数等价于 $\nabla\_{\hat{e}\_k}g$，因此仅仅指示求导的方向；分子中出现的 $\partial y\_k$ 则是指示对 $g$ 的实际上的第 $k$ 个输入进行求导.

(2) 实际使用中无法区分初始 / 中间变量. 比如以下这个恶意的例子：
$$
z=g(x,x^2,y,x^2,x^3)
$$
初始变量 $x,y$，中间变量为 $x,x^2,y,x^2,x^3$，这时出现既是初始又是中间的变量，甚至 $x^2$ 作为中间变量出现了两次.

这会导致我们写下这样的式子：
$$
\frac{\partial z}{\partial x}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial x}+\frac{\partial z}{\partial (x^2)}\frac{\partial (x^2)}{\partial x}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial x}+\frac{\partial z}{\partial (x^2)}\frac{\partial (x^2)}{\partial x}+\frac{\partial z}{\partial (x^3)}\frac{\partial (x^3)}{\partial x}
$$
::: tip

我在北大物理系读书的时候就学的是这一套不知所云的语言. ——艾神

:::

但是用映射的语言写下来的式子有 $z=g(f\_1,\cdots,f\_5)$，$f=(f\_1,\cdots,f\_5):\R^2\to\R^5$，$g:\R^5\to\R$，其中 $\R^2$ 坐标是 $x,y$，$\R^5$ 坐标是 $u\_1,\cdots,u\_5$，因此写作：
$$
\frac{\partial z}{\partial x}=\sum\_{k=1}^5\frac{\partial g}{\partial u\_k}\frac{\partial u\_k}{\partial x}
$$
不会产生歧义.

(3) 映射语言中处处标明点：
$$
\left.\frac{\partial g(f\_1,\cdots,f\_n)}{\partial x\_i}\right|*{(x\_1,\cdots,x\_n)}=\sum*{k=1}^m\left.\frac{\partial g}{\partial f\_k}\right|*{f(\vec{x})}\left.\frac{\partial f\_k}{\partial x\_i}\right|*{\vec{x}}
$$
/Example/

> 设 $f\in C^1$，$p$ 是 $C^1$ 的 path，则：
> $$
> \frac{\text{d}}{\text{d}t}f(p(t))=\nabla f(p(t))\cdot p'(t)
> $$

因此有：

/Claim/

> $f$ 沿梯度方向增加最快，沿负梯度方向减少最快. 上节课已经使用 Chain Rule 和 Cauchy - Schwartz 不等式证明过.

接下来我们可以引入一种算法：Gradient Method / Gradient Descent (梯度下降法)

> 目标：求 $f$ 的最小值 (最大值 $\max f=-\min(-f)$).
>
> 算法：从当前点沿 $-\nabla f$ 前进，$\vec{x}\_{m+1}=\vec{x}\_m+(-\nabla f(\vec{x}\_m))\lambda$，其中 $\lambda$ 是一个固定正实数，作为步长.
>
> 当 $|\nabla f(\vec{x}\_m)|<\varepsilon$ 时，视为潜在的极小值点.

/Claim/ (Fermat)

> 若 $\vec{a}$ 是 $f$ 的极小值点，则 $\nabla f(\vec{a})=0$.

/Proof/

> 上学期我们几乎证明过这一结论. 现在只需要找一个 path 再进行复合就好.
>
> 任取过 $\vec{a}$ 的直线 path $p(t)=\vec{a}+\vec{v}t$，要证明 $t=0$ 是 $f(p(t))$ 的极小值点，用一元 Fermat 的结论得到：
> $$
> 0=\frac{\text{d}}{\text{d}t}f(p(t))=\nabla f(\vec{a})\cdot\vec{v}
> $$
> 而现在 $\vec{v}$ 是任意的一个矢量，所以 $\nabla f(\vec{a})=0$.

在算法设计中，为了消除初始点的影响，我们随机取很多 $\vec{x}\_0$ 用 gradient descent 求极小值.

下面讨论 Hadamard 公式.

/Claim/ (Hadamard 公式)

> 设 $f\in C^1$，则 $\exist$ 连续的函数 $g\_1,\cdots,g\_n$ 使得
> $$
> f(x\_1,\cdots,x\_n)=f(\vec{0})+x\_1g\_1(x\_1,\cdots,x\_n)+\cdots+x\_ng\_n(x\_1,\cdots,x\_n)
> $$
> 且 $g\_k(\vec{0})=\partial\_kf(\vec{0})$.

/Proof/

> 联系 $f(\vec{0})$ & $f(x\_1,\cdots,x\_n)$.
>
> 考虑 $h(t)=f(p(t))=f(tx\_1,\cdots,tx\_n)$，则
> $$
> \begin{aligned}
> &\left{\begin{array}{lr}
> h(0)=f(\vec{0})\\\\
> h(1)=f(\vec{x})
> \end{array}\right.\\\\
> \&h'(t)\overset{\text{Chain Rule}}{=}\sum\_{k=1}^m\partial\_kf(t\vec{x})x\_k
> \end{aligned}
> $$
> 用 Newton - Leibniz 公式得到：
> $$
> h(1)-h(0)=\int\_0^1h'(t)\text{d}t=\int\_0^1\sum\_{k=1}^n\partial\_kf(t\vec{x})\cdot x\_k\text{d}t
> $$
> 于是
> $$
> f(x\_1,\cdots,x\_n)=f(0,\cdots,0)+\sum\_{k=1}^nx\_k\int\_0^1\partial\_kf(tx\_1,\cdots,tx\_n)\text{d}t
> $$
> 令 $g\_k(x\_1,\cdots,x\_n)=\int\_0^1\partial\_kf(tx\_1,\cdots,tx\_n)\text{d}t$ 即证 (含参积分).

另一个结果来自 Euler (更久以前)：

/Claim/ (Euler)

> 设 $f(x\_1,\cdots,x\_n)$ 是 $c^1$ 且是 $k$ 次齐次的 (即，$f(\lambda x\_1,\cdots,\lambda x\_n)=\lambda^kf(x\_1,\cdots,x\_n)$)，则有
> $$
> \sum\_{i=1}^nx\_i\partial\_if(x\_1,\cdots,x\_n)=kf(x\_1,\cdots,x\_n)
> $$
> ::: tip
>
> 一般而言我们求导会损失一些信息，因此这个结果还颇令人惊讶. ——艾神
>
> :::

/Proof/

> 直接对 $k$ 次齐次的定义式两边求导：
> $$
> \frac{\text{d}}{\text{d}\lambda}f(\lambda x\_1,\cdots,\lambda x\_n)=k\lambda^{k-1}f(x\_1,\cdots,x\_n)
> $$
> LHS 使用 Chain Rule 得到
> $$
> \=\sum\_{i=1}^n\partial\_if(\lambda x\_1,\cdots,\lambda x\_n)x\_i
> $$
> 取 $\lambda=1$ 即得到 Euler 的结果.
>
> 现在我们证明了充分性，作业中我们将会证明这是必要条件.

***

一个换元的手法：极坐标和直角坐标.

用映射的语言讲，极坐标是 $\[0,+\infty)\times\[0,2\pi]\overset{\Phi}{\longrightarrow}\R^2\overset{f}{\longrightarrow}\R$. 函数 $z=f(x,y)$ 能够视为 $r,\theta$ 的函数，即函数 $f\circ\Phi$. 求导：
$$
\begin{aligned}
\frac{\partial z}{\partial r}&=\frac{\partial}{\partial r}f(r\cos\theta,r\sin\theta)\\\\
&=f\_1'(r\cos\theta,r\sin\theta)\cos\theta+f\_2'(r\cos\theta,r\sin\theta)\sin\theta\\\\
\frac{\partial z}{\partial\theta}&=\frac{\partial}{\partial\theta}f(r\cos\theta,r\sin\theta)\\\\
&=-r\sin\theta\cdot f\_1'+r\cos\theta\cdot f\_2'
\end{aligned}
$$
另一方面，反过来用直角坐标表示极坐标的导数，有 $\R^2\longrightarrow\R\_+\times\[0,2\pi]\longrightarrow\R$，因此
$$
\begin{aligned}
\frac{\partial z}{\partial x}&=\frac{\partial}{\partial x}g(r=\sqrt{x^2+y^2},\theta=\arctan\frac{y}{x})\\\\
&=\frac{\partial z}{\partial r}\frac{\partial r}{\partial x}+\frac{\partial z}{\partial \theta}\frac{\partial\theta}{\partial x}\\\\
\frac{\partial r}{\partial x}&=\frac{x}{\sqrt{x^2+y^2}},,\quad\frac{\partial r}{\partial y}=\frac{y}{\sqrt{x^2+y^2}}\\\\
\frac{\partial\theta}{\partial x}&=\frac{-y}{x^2+y^2},,\quad\frac{\partial\theta}{\partial y}=\frac{x}{x^2+y^2}\\
\cdots
\end{aligned}
$$
/Example/

> $\phi(x,y)=f(x,y,g(x,y))$，求 $\phi$ 对 $x,y$ 的偏导数.
> $$
> \begin{aligned}
> \frac{\partial\phi}{\partial x}&=f\_1'\cdot1+f\_2'\cdot0+f\_3'\cdot\frac{\partial g}{\partial x}\\\\
> \frac{\partial\phi}{\partial y}&=f\_1'\cdot0+f\_2'\cdot1+f\_3'\cdot\frac{\partial g}{\partial y}
> \end{aligned}
> $$
> 为了区分坐标，用下标标序号更好.

我们在学习一元函数时曾经讨论过反函数的导数问题，现在我们来看看多元映射是否具有一样的性质.

/Claim/

> 设 $f:\R^n\to\R^n$ 有逆 $g:\R^n\to\R^n$，且 $f,g$ 皆可微. 则逆映射的微分等于微分之逆，即有：
> $$
> \text{d}g\_{f(x\_0)}=(\text{d}f\_{x\_0})^{-1},,\quad J\_g(f(x\_0))=(J\_f(x\_0))^{-1}
> $$

/Proof/

> 利用链式法则，$x\_0\overset{f}{\longrightarrow}f(x\_0)\overset{g}{\longrightarrow}x\_0$，$g\circ f=\text{Id}$ (恒同映射).
>
> 于是 $\text{d}(\text{Id})*{x\_0}=\text{d}(g\circ f)*{x\_0}=\text{d}g\_{f(x\_0)}\circ\text{d}f\_{x\_0}=\text{Id}$. 同理，$\text{d}(\text{Id})*{x\_0}=\text{d}(f\circ g)*{x\_0}=\text{d}f\_{x\_0}\circ\text{d}g\_{f(x\_0)}=\text{Id}$.
>
> 所以这两个微分互逆，$\text{d}g\_{f(x\_0)}=(\text{d}f\_{x\_0})^{-1}$，Jacobian 等式随之成立.
>
> /Remark/
>
> > 命题需要 $f,g\in C^1$ 的条件，我们自然有疑问：能不能通过 $f\in C^1$ 导出 $g\in C^1$？这一点我们在以后的反函数定理中可以证明.
> >
> > 更困难的问题是，如何保证 $f$ 存在一个 $C^1$ 的逆？

/Example/ (三维球坐标)

> 用 $(r,\theta,\phi)$ 描述坐标，与直角坐标的转化关系是：
> $$
> \left{\begin{array}{lr}
> x=r\sin\theta\cos\phi\\
> y=r\sin\theta\sin\phi\\
> z=r\cos\theta
> \end{array}\right.
> $$
> 得到映射 $\Psi:\R\_{\geq0}\times\[0,\pi]\times\[0,2\pi]\longrightarrow\R^3$，求各个偏导数.
>
> /Method/ (1)
>
> > 反函数微分命题.
> > $$
> > \begin{aligned}
> > J\_{\Psi^{-1}}(x,y,z)&=(J\_\Psi(r,\theta,\phi))^{-1}\\\\
> > &=\begin{pmatrix}
> > \frac{\partial r}{\partial x}&\frac{\partial r}{\partial y}&\frac{\partial r}{\partial z}\\
> > \frac{\partial \theta}{\partial x}&\frac{\partial \theta}{\partial y}&\frac{\partial \theta}{\partial z}\\
> > \frac{\partial \phi}{\partial x}&\frac{\partial \phi}{\partial y}&\frac{\partial \phi}{\partial z}
> > \end{pmatrix}=\begin{pmatrix}
> > \frac{\partial x}{\partial r}&\frac{\partial x}{\partial \theta}&\frac{\partial x}{\partial \phi}\\
> > \frac{\partial y}{\partial r}&\frac{\partial \theta}{\partial y}&\frac{\partial y}{\partial \phi}\\
> > \frac{\partial z}{\partial r}&\frac{\partial z}{\partial \theta}&\frac{\partial z}{\partial \phi}
> > \end{pmatrix}^{-1}
> > \end{aligned}
> > $$
> > 这相当复杂.
>
> /Method/ (2)
>
> > 写出 $\Psi^{-1}$ 表达式：
> > $$
> > \left{\begin{array}{lr}
> > r=\sqrt{x^2+y^2+z^2}\\
> > \theta=\arctan\frac{z}{\sqrt{x^2+y^2+z^2}}\\
> > \phi=\arctan\frac{y}{x}
> > \end{array}\right.
> > $$
>
> ……
