---
title: Lesson 49 Lagrange 乘子法
permalink: /integral/lesson-49/
createTime: 2025/4/25 12:19:45
---
## 最值问题

$\{f$ 的极值点$\}\subseteq\text{crit}f$. 问：对于 $f$ 的临界点，我们如何判断是否是极值点？

回忆一元的情形，我们可以设 $x_0\in\text{crit}f$，有：

* 若 $f''(x_0)>0$ $\Longrightarrow$ $x_0$ 极小；
* 若 $f''(x_0)<0$ $\Longrightarrow$ $x_0$ 极大；
* 若 $f''(x_0)=0$ $\Longrightarrow$ Need more information.

推广至多元的情况，我们使用 Taylor 展开，比较 $f(x_0)$ & $f(x_0+h)$：
$$
f(x_0+h)=f(x_0)+J_f(x_0)h+\frac{1}{2}h^TH_f(x_0)h+o(|h|^2)
$$
在临界点处，Taylor 公式的一次项消失，因为 $\partial f(\vec{x}_0)=0$. 所以我们判断的主体就是一个二次型，也就是判断：
$$
f(x_0+h)-f(x_0)=\frac{1}{2}h^TH_f(x_0)h+o(|h|^2)
$$
的正负.

回忆线性代数中的知识，对于对称方阵 $A=[a_{ij}]_{i,j\leq n}$，对应一个二次型：
$$
\begin{aligned}
Q(x_1,\cdots,x_n)&=\begin{pmatrix}
x_1&\cdots&x_n
\end{pmatrix}A\begin{pmatrix}
x_1\\\vdots\\x_n
\end{pmatrix}\\\\
&=\sum_i\sum_ja_{ij}x_ix_j=\sum_ia_ix_i^2+2\sum_{i<j}a_ia_jx_ix_j
\end{aligned}
$$
/Definition/

> 称 $Q$ (或者 $A$) 是正定的，若 $\forall\vec{x}\neq\vec{0}$ 有 $Q(\vec{x})>0$；若 $\forall\vec{x}\neq\vec{0}$ 有 $Q(\vec{x})<0$ 则是负定的；若 $Q\geq 0$ 是半正定的；若 $Q\leq 0$ 是半负定的.
>
> 若上述几种情况均不满足，则是不定的.

/Theorem/

> $A$ 正定 $\Longleftrightarrow$ $A$ 的所有特征值全正 $\Longleftrightarrow$ $A$ 的所有顺序主子式全正，也即：
> $$
> \det(a_{ij})_{1\leq i\leq k,1\leq j\leq k}>0\,,\quad\forall1\leq k\leq n
> $$
> $A$ 半正定 $\Longleftrightarrow$ $A$ 的所有特征值全非负
>
> $A$ 负定 $\Longleftrightarrow$ $-A$ 正定，也即：
> $$
> (-1)^k\det(a_{ij})_{1\leq i\leq k,1\leq j\leq k}>0\,,\quad\forall1\leq k\leq n
> $$
> ==不一定是全为负，而是要区分 $k$ 的奇偶==.

/Claim/

> 正定矩阵在小扰动下保持正定；负定矩阵在小扰动下保持负定，而半正 / 负定、不定的矩阵未必如此.

/Proof/

> 考虑参数空间 $P$，可以在其上定义一族矩阵，其间的对应映射为 $A:P\to M_{n\times n}$，满足 $A(\vec{y})$ 是对称方阵. 设 $A$ (映射) 连续，$A(\vec{y}_0)$ 正定.
>
> 考虑 $f_k(\vec{y})=\det[A(\vec{y})$ 的第 $k$ 个顺序主子式$]$，显然 $f_k$ 连续，且 $1\leq k\leq n$. 由 $A(\vec{y}_0)$ 正定，知 $f_k(\vec{y}_0)>0$，$\forall k$.
>
> 取 $f_k(\vec{y}_0)$ 在 $\R_+$ 中的开邻域 $I_k\subseteq\R_+$，则 $f_k^{-1}[I_k]$ 是 $\vec{y}_0$ 在 $P$ 中的开邻域.
>
> 令 $U=\underset{k=1}{\overset{n}{\bigcap}}f_k^{-1}[I_k]$ 是 $\vec{y}_0$ 的开邻域，且 $\forall\vec{y}\in U$ 有 $f_k(\vec{y})\in I_k$，所以 $f_k(\vec{y})>0$，$\forall k$，这就证明了 $A(\vec{y})$ 正定.
>
> ---
>
> 上面的证明太过于形式化，实际上更朴素的表达可以写成：
> $$
> \begin{aligned}
> \vec{y}&\longrightarrow\begin{pmatrix}
> \det A(\vec{y})_1&\cdots&\det A(\vec{y})_n
> \end{pmatrix}\\
> \vec{y}_0&\longrightarrow\begin{pmatrix}
> +&\cdots&+
> \end{pmatrix}
> \end{aligned}
> $$
> 而 $+$ 值的附近都是正值，于是得到周围的 $A(\vec{y})$ 也正定.

“开条件”：若一个对象 $P_0$ 满足此条件，则 $P_0$ 中某个开邻域中的对象也皆如此.

/Theorem/

> 设 $f\in C^2$，$\vec{x}_0\in\text{crit}f$，则
>
> 1. 若 $H_f(\vec{x}_0)$ 正定，则 $\vec{x}_0$ 是 $f$ 的极小值点；
> 2. 若 $H_f(\vec{x}_0)$ 负定，则 $\vec{x}_0$ 是 $f$ 的极大值点；
> 3. 若 $H_f(\vec{x}_0)$ 不定，则 $\vec{x}_0$ 不是 $f$ 的极值点.

/Proof/

> 前两句相互等价，也比较好证明，最后一句有一点微妙.
>
> 我们先来证明 1.，等价于同时证明了 2.. 这里没办法用 Peano 余项，因为不确定余项的正负，用 Lagrange 余项：
>
> 由 $H_f(\vec{x}_0)$ 正定，$H_f(\vec{x}_0)$ 关于 $\vec{x}$ 连续 ($f\in C^2$ 导致的)，得到 $\exist B_r(\vec{x}_0)$ 使得 $\forall \vec{x}\in B_r(\vec{x}_0)$ 都有 $H_f(\vec{x})$ 正定 (上面的命题导致的).
>
> 进而，$\forall\vec{x}\in B_r(\vec{x}_0)$，带 Lagrange 余项的 Taylor 公式是
> $$
> f(\vec{x})=f(\vec{x}_0)+\frac{1}{2}(\vec{x}-\vec{x}_0)^TH_f(\vec{y})(\vec{x}-\vec{x}_0)
> $$
> 但是 $H_f(\vec{y})$ 在 $H_f(\vec{x}_0)$ 附近，因此正定，所以上式 $f(\vec{x})-f(\vec{x}_0)>0$，得证.
>
> 对于 3. 的证明：$H_f(\vec{x}_0)$ 不定，知道：
>
> * $\exist \vec{v}\in\R^n$ 使得 $\vec{v}^TH_f(\vec{x}_0)\vec{v}>0$；
> * $\exist\vec{w}\in\R^n$ 使得 $\vec{w}^TH_f(\vec{x}_0)\vec{w}<0$.
>
> 因此，考虑一个 $\vec{v}$ 决定的 path 上面 $f$ 的改变：
> $$
> \begin{aligned}
> \lim_{t\to0}\frac{f(\vec{x}_0+\vec{v}t)-f(\vec{x}_0)}{t^2}&=\lim_{t\to0}\frac{\frac{1}{2}(\vec{v}t)^TH_f(\vec{x}_0)(\vec{v}t)+o(|\vec{v}|^2t^2)}{t^2}\\\\
> &=\frac{1}{2}\vec{v}^TH_f(\vec{x}_0)\vec{v}>0
> \end{aligned}
> $$
> 可知，$\exist r_1$ 使得 $\forall t\in(-r_1,r_1)|\{0\}$ 有 $[f(\vec{x}_0+\vec{v}t)-f(\vec{x}_0)]/t^2>0$.
>
> 同理可以计算 $\vec{w}$ 决定的 path，在这条 path 附近的 $f(\vec{x})<f(\vec{x}_0)$. 两个角度结合，就证明了 $\vec{x}_0$ 不是 $f$ 的极值点.

/Theorem/ (极值点的必要条件)

> (这个定理在讲义里面忘记写了)
>
> 设 $\vec{x}_0$ 是 $C^2$ 函数 $f$ 的极小值点，则 $H_f(\vec{x}_0)$ 半正定；若为极大值点，则 $H_f(\vec{x}_0)$ 半负定.

充分条件和必要条件总结起来就是：

* $\vec{x}_0$ 极小 $\Longrightarrow$ $H_f(\vec{x}_0)$ 半正定；
* $\vec{x}_0$ 极小 $\Longleftarrow$ $H_f(\vec{x}_0)$ 正定.

/Proof/ (必要条件的证明)

> 实际上上面已经证明过一遍.
> $$
> \lim_{t\to0}\frac{f(\vec{x}_0+\vec{v}t)-f(\vec{x}_0)}{t^2}=\frac{1}{2}\vec{v}^TH_f(\vec{x}_0)\vec{v}
> $$
> 因为极限式中的分子和分母均 $\geq0$，因此极限非负，得证.

/Corollary/

> 若 $\vec{x}_0$ 是 $C^2$ 函数 $f$ 的极小值点，则：
> $$
> \frac{\partial^2f}{\partial x_i^2}(\vec{x}_0)\geq 0\,,\quad\forall i
> $$

/Proof/

> $\vec{v}=\hat{e}_i$，由上述定理，$\hat{e}_i^TH_f(\vec{x}_0)\hat{e}_i\geq0$，直接写成分量就是：
> $$
> \frac{\partial^2f}{\partial x_i^2}(\vec{x}_0)\geq 0\,,\quad\forall i
> $$

具体地，我们回到二元情况，设 $f(x,y)\in C^2$，Hessian 的形式是
$$
H_f(x_0,y_0)=\begin{pmatrix}
f_{xx}(x_0,y_0)&f_{xy}(x_0,y_0)\\
f_{yx}(x_0,y_0)&f_{yy}(x_0,y_0)
\end{pmatrix}=\begin{pmatrix}
A&B\\B&C
\end{pmatrix}
$$
我们来仔细地刻画这个矩阵什么时候是正定的 / 负定的 / 不定的.

配方法：
$$
\begin{aligned}
Q&=Ax^2+2Bxy+Cy^2=A\left(x+\frac{B}{A}y\right)^2+\left(C-\frac{B^2}{A}\right)y^2
\end{aligned}
$$
将 $AC-B^2$ 记作 $\Delta$，得到
$$
\begin{aligned}
&=A\left(x+\frac{B}{A}y \right)^2+\frac{\Delta}{A}y^2=C\left(y+\frac{B}{C}x \right)^2+\frac{\Delta}{C}x^2
\end{aligned}
$$
这两式是对偶的. 讨论结果如下：

| $\Delta>0$ ($A,C$ 同号) |         $\Delta=0$ ($AC=B^2\geq0$)          |              $\Delta<0$               |
| :---------------------: | :-----------------------------------------: | :-----------------------------------: |
|     $A>0$，$Q$ 正定     |                $A>0$，半正定                |              $A>0$，不定              |
|     $A<0$，$Q$ 负定     |                $A<0$，半负定                |              $A<0$，不定              |
|            /            | $C>0$，半正定；$C<0$，半负定；$C=0$，恒为零 | $C>0$，不定；$C<0$，不定；$C=0$，不定 |

总结起来，$\Delta>0$ 则定；$\Delta=0$ 则半定；$\Delta<0$ 则不定.

/Corollary/

> 设 $(x_0,y_0)\in\text{crit}f$，$A,B,C$ 定义如上，有：
>
> 1. 若 $A>0$ 且 $\Delta>0$，则为极小值；
> 2. 若 $A<0$ 且 $\Delta>0$，则为极大值；
> 3. 若 $\Delta<0$，则不是极值点.
>
> 虽然这个判断方式更加具体，但是概念上变得模糊了.

## 条件极值 / 最值

(带约束的最值问题)

问：要求 $(x_1,\cdots,x_n)$ 满足
$$
\left\{\begin{array}{lr}
g_1(x_1,\cdots,x_n)=0\\
\cdots\\
g_k(x_1,\cdots,x_n)=0
\end{array}\right.
$$
在此基础上，求 $f$ 的最大值 (最小值).

因为我们之前刚刚讲过切空间的概念，因此这里先使用几何语言来处理. 记：
$$
S=\left\{(x_1,\cdots,x_n)\left|\begin{array}{}
 g_1(x_1,\cdots,x_n)=0\\
 \cdots\\
 g_k(x_1,\cdots,x_n)=0
 \end{array}\right.\right\}=(g_1)^{-1}(0)\cap\cdots\cap(g_k)^{-1}(0)
$$
(闭集 $=($开集之补$)$，任意多个闭集之交是闭集，有限个闭集之并是闭集) 可以证明，$S$ 是 $\R^n$ 的闭集.

我们的目的是求 $f$ 在 $S$ 上的最值：

1. 最值存在性？

   若 $S$ 有界 (需要具体验证) $\Longrightarrow$ $S$ 紧致 $\Longrightarrow$ (最值定理) 存在最值.

2. “变分”：已知 $f(\vec{a})\geq f(\vec{x}\in S)$，提醒我们若 $\vec{y}\notin S$，则无法比较 $f(\vec{a})$ & $f(\vec{y})$.

   $\forall S$ 上过点 $\vec{a}$ 的 path，$P:(-\varepsilon,\varepsilon)\to S$，$P(0)=\vec{a}$，有
   $$
   f(\vec{a})\geq f(p(t))\,,\quad\forall t\in(-\varepsilon,\varepsilon)
   $$
   即 $t=0$ 是 $f(p(t))$ 的极大值点. 由一元函数的 Fermat 定理，得到
   $$
   0=\left.\frac{\text{d}}{\text{d}t}\right|_{t=0}f(p(t))=\nabla f(\vec{a})\cdot p'(0)
   $$

/Claim/

> 若 $a$ 是 $f$ 在 $S$ 上的最值点 (极值点)，则有 $\nabla f(a)\perp\text{T}_{\vec{a}}S$.

/Definition/

> 称 $a\in S$ 是 $f$ 的极大值点，若 $\exist B_r(a)$ 使得 $\forall x\in B_r(a)\cap S$ 有 $f(x)\leq f(a)$ ($f(a)$ 只需要比 $S$ 上附近的 $f(x)$ 要大就可以了).

/Theorem/ (Lagrange 乘子法)

> 若 $\vec{a}$ 是 $f$ 在 $S=\{g_1=\cdots=g_k=0\}$ 上的极值点，且 $\vec{a}$ 是 $S$ 的光滑点，则：
> $$
> \nabla f(\vec{a})\in\text{span}\{\nabla g_1(\vec{a}),\cdots,\nabla g_k(\vec{a})\}
> $$
> 亦即 $\exist \lambda_1,\cdots,\lambda_k\in\R$ 使得
> $$
> \nabla f(\vec{a})=\sum_{i=1}^k\lambda_i\nabla g_i(\vec{a})
> $$

/Proof/

> 由命题，$\nabla f(\vec{a})\in(\text{T}_{\vec{a}}S)^\perp$.
>
> 回忆若 $\vec{a}$ 是 $S$ 的光滑点，则
> $$
> \text{T}_{\vec{a}}S=(\text{span}\{\nabla g_1(\vec{a}),\cdots,\nabla g_k(\vec{a})\})^\perp
> $$
> 所以取两次正交补，还原为原来的 $\text{span}$.
>
> /Remark/
>
> > 这个证明的好处在于把所有的困难都放在中间的 $\text{T}_{\vec{a}}S$，避免了大量的技术细节.
>
> 写出这些 $\lambda$：
> $$
> \left\{\begin{array}{lr}
> \frac{\partial f}{\partial x_1}(\vec{a})-\lambda_1\frac{\partial g_1}{\partial x_1}(\vec{a})-\cdots-\lambda_k\frac{\partial g_k}{\partial x_k}(\vec{a})=0\\
> \cdots\\
> \frac{\partial f}{\partial x_n}(\vec{a})-\lambda_1\frac{\partial g_1}{\partial x_n}(\vec{a})-\cdots-\lambda_k\frac{\partial g_k}{\partial x_n}(\vec{a})=0\\
> -g_1(\vec{a})=0\\
> \cdots\\
> -g_k(\vec{a})=0
> \end{array}\right.
> $$
> 我们发现这些方程可以更简单地写出，只需要引入 Lagrange 辅助函数：
> $$
> \mathcal{L}(x_1,\cdots,x_n,\lambda_1,\cdots,\lambda_k)=f(x_1,\cdots,x_n)-\sum_{i=1}^k\lambda_ig_i(x_1,\cdots,x_n)
> $$
> 则上述方程就是 $\mathcal{L}$ 的临界点方程.

/Theorem/

> 设有约束 $g_1(x_1,\cdots,x_n)=\cdots=g_k(x_1,\cdots,x_n)=0$，设 $\vec{a}$ 是 $f$ 在上述约束下的条件极值点 (即 $\vec{a}$ 是 $f$ 在 $S$ 上的极值点).
>
> 设 $[\partial_jg_i(\vec{a})]_{1\leq i\leq k,1\leq j\leq n}$ 的秩为 $k$ (满秩)，则 $\exist\lambda_1,\cdots,\lambda_k\in\R$，使得 $(a_1,\cdots,a_n,\lambda_1,\cdots,\lambda_k)$ 是 Lagrange 辅助函数 $\mathcal{L}=f-\sum\lambda_ig_i$ 的临界点.
>
> /Remark/
>
> > 满秩条件是必不可少的，但是微积分教材默认自动成立.

/Proof/ (另外的证明方法，隐函数定理)

> 只考虑 $n=2,k=1$ 的情况，因为这个方法在一般情况下太难以计算. 这里 $S=\{g(x,y)=0\}$.
>
> 设 $a=(a_1,a_2)$ 是 $f$ 在 $S$ 上的条件极值点 (不妨假设是极大值). 由假设，$(\partial_1g(a),\partial_2g(a))\neq(0,0)$，不妨假设 $\partial_2g(a)\neq0$.
>
> 由隐函数定理，根据 $g=0$ 可将 $y$ 表示为隐函数 $h(x)$，即 $(x,h(x))\in S$，$\forall x\in x_0$ 的某个邻域 $U$.
>
> $\Longrightarrow$ $f(x,h(x))\leq f(x_0,h(x_0))$，$\forall x\in U$. 这表明 $x=a_1$ 是一元函数 $f(x,h(x))$ 的极大值点 (用隐函数将有约束换成无约束).
>
> 所以转化为一元问题，用 Fermat 定理：
> $$
> 0=\left.\frac{\text{d}}{\text{d}t}\right|_{a_1}f(x,h(x))=f_x(a)-f_y(a)\frac{g_x(a)}{g_y(a)}
> $$
> 令 $\lambda=f_y(a)/g_y(a)$，化为之前的形式，得证.

/Theorem/

> 实对称矩阵皆有特征根 (可正交对角化).

/Proof/

> $A=[a_{ij}]$，考虑 $Q(x)=x^TAx$ 在 $S^{n-1}$ 上的最值.
>
> 用最值定理知必有最值点 $\vec{v}=(v_1,\cdots,v_n)$，$\vec{v}$ 为 $Q$ 在约束 $g(x_1,\cdots,x_n)=x_1^2+\cdots+x_n^2-1=0$ 下的条件极值点. 可以计算 $\nabla g=(2x_1,\cdots,2x_n)$，由 Lagrange 乘子法，引入 $\lambda$ 和 Lagrange 辅助函数：
> $$
> \mathcal{L}=x^TAx-\lambda(x_1^2+\cdots+x_n^2-1)
> $$
> 而临界点方程就是：
> $$
> A\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}-\lambda\begin{pmatrix}
> x_1\\\vdots\\x_n
> \end{pmatrix}=0
> $$
> 可知 $\vec{v}$ 正是 $A$ 的特征向量. 同时可以知道 $\underset{||\vec{x}||=1}\max(x^TAx)$ 是最大特征值，$\min$ 是最小特征值.

下面来看一些例子.

/Example/

> 约束为
> $$
> \left\{\begin{array}{lr}
> x+y+z=0\\
> x^2+y^2+z^2=1
> \end{array}\right.
> $$
> 求 $x^3+y^3+z^3=f(x,y,z)$ 的最值.
>
> ---
>
> $S$ 是一个圆周，显然 compact，$f$ 在其上有最值点 $\vec{a}$，Lagrange 辅助函数是：
> $$
> \mathcal{L}=x^3+y^3+z^3-\lambda(x+y+z)-\mu(x^2+y^2+z^2-1)
> $$
> 所以方程有：
> $$
> \left\{\begin{array}{lr}
> 0=\frac{\partial\mathcal{L}}{\partial x}=3x^2-\lambda-2\mu x\\
> 0=\frac{\partial\mathcal{L}}{\partial y}=3y^2-\lambda-2\mu y\\
> 0=\frac{\partial\mathcal{L}}{\partial z}=3z^2-\lambda-2\mu z\\
> \end{array}\right.
> $$
> 剩下的是约束方程，一般在实际应用中不写，因为已经在条件里面给出了.
>
> 可以看出，$a_1,a_2,a_3$ 是同一个二次方程的两根，一定有两个相等，不妨设 $a_1=a_2$，直接用两个约束条件解得答案.

1944 年，Karush，Kuhn 和 Tucker 问：如果约束是不等式，那么怎么求条件极值？

/Theorem/ (KKT 定理)

> 设 $D=\{g(x,y)\geq0\}$，已知 $(x_0,y_0)\in D$ 是 $f$ 在 $D$ 上的极大值点，且 $(x_0,y_0)\in\partial D=\{g(x,y)=0\}$.
>
> > 这个条件给出 $(x_0,y_0)$ 在整个半空间中都是最大，因此强于 Lagrange 乘子法所要求的条件.
>
> 则 $\exist\lambda\leq0$ 使得 $\nabla f(x_0,y_0)=\lambda\nabla g(x_0,y_0)$. (给出了 $\lambda$ 的符号)
>
> ::: tip
>
> 这是多年前的一道期中考试最后一题，但是当时应该没多少人做出来.——艾神
>
> :::

/Proof/

> 留作练习.
>
> ::: tip
>
> 因为我还有一分钟就要下课了，但是我还需要一点时间确定到底是 $\geq0$ 还是 $\leq0$.——艾神
>
> :::