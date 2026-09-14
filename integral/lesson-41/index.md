---
url: /integral/lesson-41/index.md
---
## 方向导数

$$
\frac{\partial f}{\partial\vec{v}}(\vec{x}*0)=\left.\frac{\text{d}}{\text{d}t}\right|*{t=0}f(\vec{x}*0+\vec{v}t)=\lim*{t\to0}\frac{f(x\_0+vt)-f(x\_0)}{t}
$$

反映了 $f$ 在 $x\_0$ 处沿 $\vec{v}$ 方向的变化率. 上节课我们证明了，
$$
\frac{\partial f}{\partial(\lambda\vec{v})}=\lambda\frac{\partial f}{\partial\vec{v}}
$$
$\lambda$ 出现在分母上，但是最后的效果是整体乘上一个 $\lambda$，这说明我们这种类似分数的记法并不十分贴切，在定义式中 $\vec{v}$ 更多地出现在分子中.

偏导数：
$$
\frac{\partial f}{\partial x\_k}(\vec{x}\_0)=\frac{\partial f}{\partial\hat{e}\_k}(\vec{x}\_0)
$$
是在坐标正方向的方向导数. 事实上，我们可以将它视为“冻结” else $x\_i$，视 $f$ 为 $x\_k$ 的一元函数再对 $x\_k$ 求导. 在这种意义下，多元函数求导 $\longrightarrow$ 一元函数的求导.

有些人乐意给偏导数一个几何意义：函数 $f$ 的图像在某个 $x\_k$ 轴对应的二维截面上的那条曲线的切线斜率，就是 $\partial\_kf(\vec{x}\_0)$. 但是这样看来这种几何解释并不是十分直观，也并不好应用.

::: tip

我这个“释”字写对了吗？—— 艾神

:::

上次我们有一个例子，指出即使一个函数有各方向的方向导数 (我们称这种性质为可导)，也不一定能证明其连续. (可导 $\neq$ 连续) 我们给出一种解释：

* 可导 $\longleftrightarrow$ $\vec{x}$ 沿直线方式靠近 $x\_0$ 时 $f$ 有变化率；
* $f$ 在 $x\_0$ 处连续 $\longleftrightarrow$ $\vec{x}$ 沿任意方式靠近 $x\_0$ 时都有变化率.

可以发现，高维情况下直线的趋近方式并不能刻画任意的趋近方式，但是对于一维这两种方式并无区别.

/Example/

> $$
> f(x\_1,\cdots,x\_n)=\begin{pmatrix}
> x\_1&\cdots\&x\_n
> \end{pmatrix}A\begin{pmatrix}
> x\_1\\\vdots\x\_n
> \end{pmatrix}=\sum\_i\sum\_ja\_{ij}x\_ix\_j
> $$
>
> 不妨假设 $A$ 对称.
>
> 上面的函数实际上是一个二次型，有
> $$
> f(x\_1,\cdots,x\_n)=\sum\_{i=1}^na\_{ii}x\_i^2+2\sum\_{i\<j}a\_{ij}x\_ix\_j
> $$
> 我们现在来计算其偏导数. 这时候我们要把它视为 $x\_i$ 的一元函数：
> $$
> \begin{aligned}
> f&=a\_{ii}x\_i^2+2\sum\_{k\<i}a\_{ki}x\_kx\_i+2\sum\_{i\<l}a\_{il}x\_ix\_l+\text{else}\\
> &\Longrightarrow\frac{\partial f}{\partial x\_i}=2\sum\_{j=1}^na\_{ij}x\_j
> \end{aligned}
> $$

以上是对上节课的复习.

## 可微 / 微分

在多元函数中求导并非一个好的概念，其局限性在于它并不对应连续，每次只能关注一个方向上的局部行为.

回忆一元情形，我们发现还有一个另外的概念“可微” $\Longleftrightarrow$ 可导 $\Longrightarrow$ 连续，对于多元函数，可微是更加基本的概念.

回忆一元函数中可微的定义：

/Definition/

> 对于一元函数 $f$，$f$ 在 $x\_0$ 处可微 $\Longleftrightarrow$ $\exist$ 线性映射 $L:\R\to\R$，满足 $f(x\_0+h)=f(x\_0)+L(h)+\alpha(h)$，$\forall h\in B\_r(0)$ ($\exist r\in\R\_+$)，且 $\underset{h\to0}{\lim}\frac{\alpha(h)}{h}=0$.

对于多元函数，几乎完全一致：

/Definition/

> 对于多元函数 $f$，$f$ 在 $x\_0$ 处可微 $\Longleftrightarrow$ $\exist$ 线性映射 $L:\R^n\to\R$，满足 $f(x\_0+h)=f(x\_0)+L(h)+\alpha(h)$，$\forall h\in B\_r(0)$ ($\exist r\in\R\_+$)，且 $\underset{h\to0}{\lim}\frac{\alpha(h)}{|h|}=0$.
>
> 并称满足上述条件的唯一的线性映射 $L$ 为 $f$ 在 $x\_0$ 处的微分，记为 $\text{d}f\_{x\_0}:\R^n\to\R$ (现在西方国家的一些教材里面更多地写作 $\text{D}f:\R^n\to\R$).

/Lemma/

> 满足条件的线性映射 $L$ 是唯一的.

/Proof/

> 若有两个线性映射 $L\_1$ 和 $L\_2$ 均满足条件，则 $L\_1(h)+\alpha\_1(h)=L\_2(h)+\alpha\_2(h)$，于是
> $$
> \lim\_{h\to0}\frac{L\_1(h)-L\_2(h)}{|h|}=\lim\_{h\to0}\frac{\alpha\_2(h)-\alpha\_1(h)}{|h|}=0
> $$
> 设 $L\_1(h)-L\_2(h)=\underset{i=1}{\overset{n}{\sum}}a\_ih\_i$，则取一个探测方向 $\hat{e}\_k$，路径为 $p(t)=\hat{e}\_kt$，这时候映射是复合映射：
> $$
> \R|{0}\overset{p}{\longrightarrow}\R^n|{0}\overset{q(h)=\frac{\sum\_ia\_ih\_i}{|h|}}{\longrightarrow}\R
> $$
> 由 $\underset{h\to0}{\lim}q(h)=0$，$\underset{t\to0}{\lim}p(t)=0$，满足复合极限定理的修正 $\text{I}$，因此每一个 $a\_k$ 都是零，两个线性映射是同一个映射.

\==微分是 $f$ 在 $x\_0$ 附近的线性近似==.

/Example/

> 线性映射的微分是自身.
>
> 设 $f:\R^n\to\R$ 为线性映射 $f(x)=\underset{i=1}{\overset{n}{\sum}}c\_ix\_i$，保加法和数乘. 从而 $f(x\_0+h)=f(x\_0)+f(h)+0$，就是自身.

1940 年代才开始使用映射的语言来描述微分，更早以前的表述是“函数”，如果混用这两种语言，我们在某方向的微分为 $\text{d}X\_i(\vec{h})=h\_i$，$\forall\vec{h}\in\R^n$.

我们一开始引入可微的概念是为了连续性，现在我们来看微分的一些效果：

/Theorem/

> 设 $f$ 在 $x\_0$ 处可微，则有：
>
> * $f$ 在 $x\_0$ 处连续；
> * $f$ 在 $x\_0$ 处有各个方向导数；
> * $\nabla\_{\vec{v}}f(x\_0)=\underset{n=1}{\overset{n}{\sum}}\frac{\partial f}{\partial x\_i}(\vec{x}\_0)v\_i$.

/Proof/

> 由可微的定义知，$f(x\_0+h)=f(x\_0)+L(h)+\alpha(h)$，$\underset{h\to0}{\lim}\frac{\alpha(h)}{|h|}=0$.
>
> * 验证 $\underset{x\to x\_0}{\lim}f(x)=f(x\_0)$ $\Longleftrightarrow$ 换元 $h=x-x\_0$ 之后有 $\underset{x\to x\_0}{\lim}f(x\_0+h)=f(x\_0)$.
>
>   后者成立的理由：
>   $$
>   \begin{aligned}
>   \lim\_{h\to0}f(x\_0+h)&=\lim\_{h\to0}(f(x\_0)+L(h)+\alpha(h))\\
>   &=f(x\_0)+\lim\_{h\to0}\sum a\_ih\_i+\lim\_{h\to0}\frac{\alpha(h)}{|h|}\cdot|h|\\
>   &=f(x\_0)+0+0\cdot0\\\\
>   &=f(x\_0)
>   \end{aligned}
>   $$
>
> * 算方向导数：
>   $$
>   \begin{aligned}
>   \nabla\_{\vec{v}}f(x\_0)&=\lim\_{t\to0}\frac{f(\vec{x}*0+\vec{v}t)-f(\vec{x}*0)}{t}\\
>   &=\lim*{t\to0}\frac{L(\vec{v}t)+\alpha(\vec{v}t)}{t}\\
>   &=L(\vec{v})+\lim*{t\to0}\frac{\alpha(\vec{v}t)}{|\vec{v}t|}\cdot\frac{|\vec{v}t|}{t}
>   \end{aligned}
>   $$
>   为计算第二项，考虑复合极限：
>   $$
>   \R|{0}\overset{p}{\longrightarrow}\R^n|{0}\overset{q(h)=\frac{\alpha(h)}{|h|}}{\longrightarrow}\R
>   $$
>   满足修正 $\text{I}$，所以上面的第二项是一个为零的极限乘以一个有界的量，得到最终极限值为零. 因此方向导数是：
>   $$
>   \nabla\_{\vec{v}}f(x\_0)=L(\vec{v})=\text{d}f\_{x\_0}(\vec{h})
>   $$
>   取 $\vec{v}=\hat{e}*k$，得到偏导数：
>   $$
>   \nabla*{\hat{e}*k}f(x\_0)=\text{d}f*{x\_0}(\hat{e}*k)
>   $$
>   任意方向上的方向导数是
>   $$
>   \nabla*{\vec{v}}f(x\_0)=\text{d}f\_{x\_0}(\sum\_iv\_i\hat{e}*i)=\sum*{i}v\_i\text{d}f\_{x\_0}(\hat{e}\_i)
>   $$

最后的一个式子利用了微分的线性性，这个式子的形式类似于一个内积，所以我们引入 gradient：

/Definition/ (gradient)

> $f$ 在 $\vec{x}\_0$ 处的梯度向量定义为
> $$
> \text{grad}f=\left(\frac{\partial f}{\partial x\_1}(\vec{x}\_0),\cdots,\frac{\partial f}{\partial x\_n}(\vec{x}\_0)\right)
> $$
> 也记为 $\nabla f(x\_0)$.
>
> 定义 gradient 之后，若 $f$ 在 $x\_0$ 处可微，则其方向导数为
> $$
> \nabla\_{\vec{v}}f(x\_0)=\braket{\text{grad}f,\vec{v}}=\braket{\nabla f,\vec{v}}
> $$
> 也就是说，方向导数是梯度与方向的内积.

有人误以为上面的式子永远成立，但是实际上有成立条件：

/Example/

> $$
> f(x,y)=\left{\begin{array}{lr}
> \frac{|y|\sqrt{x^2+y^2}}{x},,\quad x\neq0\\\\
> 0,,\quad x=0
> \end{array}\right.
> $$
>
> 之前计算过方向导数：
> $$
> \nabla\_{(\cos\theta,\sin\theta)}f(x,y)=\left{\begin{array}{lr}
> 0,,\quad\cos\theta=0\\\\
> \frac{|\sin\theta|}{\cos\theta},,\quad\cos\theta\neq0
> \end{array}\right.
> $$
> 这里的梯度和方向内积不能计算出方向导数.
>
> 上面式子的成立条件是**可微**.

由以上的定理，我们可以表述微分：
$$
\begin{aligned}
\text{d}f\_{x\_0}(\vec{h})&=\nabla\_{\vec{h}}f(\vec{x}*0)=\sum*{i=1}^n\frac{\partial f}{\partial x\_i}(x\_i)h\_i=\begin{pmatrix}
\frac{\partial f}{\partial x\_1}(x\_0)&\cdots&\frac{\partial f}{\partial x\_n}(x\_0)
\end{pmatrix}\begin{pmatrix}
h\_1\\\vdots\h\_n
\end{pmatrix}
\end{aligned}
$$
其中的那个行向量是 $\text{d}f\_{x\_0}:\R^n\to\R$ 的表示矩阵.

/Remark/

> 有人可能会有疑问：表示矩阵不是就是梯度吗？
>
> 事实上这是因为我们不太要求严谨性，如果我们坚持所有的向量都是列向量，那么原来的梯度应该写成列向量. 但是在微积分里面我们不至于分不清我们说的是什么，没必要这样强调.
>
> 作为线性映射的等式，我们可以写成
> $$
> \text{d}f\_{x\_0}=\sum\frac{\partial f}{\partial x\_i}(\vec{x}\_0)\text{d}x\_i
> $$
> 在 $f$ 的可微点皆成立.
>
> 省略 $x\_0$，有更抽象的写法：
> $$
> \text{d}f=\sum\_{i=1}^n\frac{\partial f}{\partial x\_i}\text{d}x\_i=\sum\_{i=1}^n\frac{\partial f}{\partial x\_i}\text{d}p\_i
> $$
> 后一个式子是将微分全部用映射语言写出.

由定理，我们知道表示矩阵至多有一种. 为判断是否可微，充要条件是：
$$
\lim\_{h\to0}\frac{f(x\_0+h)-f(x\_0)-\underset{i=1}{\overset{n}{\sum}}\frac{\partial f}{\partial x\_i}(x\_0)h\_i}{|h|}=0
$$
