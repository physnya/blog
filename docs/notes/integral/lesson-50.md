---
title: Lesson 50 积分学
permalink: /integral/lesson-50/
createTime: 2025/4/29 12:21:15
---
平均分 87.2 (好高)

## Karush - Kuhn - Tucker 定理

我们知道 Lagrange 乘子法是在等式约束下优化 $f$，我们现在要解决的问题是如何在不等式约束 $g\geq0$ 下优化 $f$.

/Theorem/ (KKT)

> (1944 年提出) 设 $D=\{(x,y)|g(x,y)\geq0\}$，设 $(x_0,y_0)\in\partial D=D-\overset{\circ}{D}=\{(x,y)|g=0\}$，并且是光滑点 ($\nabla g(x_0,y_0)\neq(0,0)$)，且 $(x_0,y_0)$ 是 $f$ 在 $D$ 上的最大值点，则 $\exist\lambda\leq0$ 使得
> $$
> \nabla f(x_0,y_0)=\lambda\nabla g(x_0,y_0)
> $$
> /Remark/
>
> > 条件中如果改成 $(x_0,y_0)$ 是在 $\partial D$ 上面的最大值点，$\partial D=\{g=0\}$，那么就可以用 Lagrange 乘子法.
> >
> > 上述定理比 Lagrange 乘子法改进的地方在于给出了 $\lambda$ 的符号.

/Proof/ (探测 path)

> (这是那一年期中考试之后有同学想出来的方法.)
>
> 从 $P_0(x_0,y_0)$ 进入 $D$ 内部 ($g>0$)，沿着梯度方向 $g$ 增加最快，考虑路径 $p(t)=(x_0,y_0)+t\nabla g(x_0,y_0)$，则：
> $$
> \lim_{t\to0+}\frac{g(p(t))-g(p(0))}{t}=p'(0)\nabla g(x_0,y_0)=\nabla g(x_0,y_0)>0
> $$
> 所以 $\exist r>0$，$\forall0<t<r$ 有：$g(p(t))>0$，表明 $p(t)\in D$.
>
> 用 $f(P_0)$ 在 $D$ 上是最大值的条件，得到
> $$
> \lim_{t\to0+}\frac{f(p(t))-f(p(0))}{t}=p'(0)\nabla f(x_0,y_0)=\nabla f(x_0,y_0)\leq0
> $$
> 所以 $\nabla f(x_0,y_0)\nabla g(x_0,y_0)\leq0$. 由前述，在 $\partial D$ 上用 Lagrange 乘子法，$\exist\lambda$ 使得 $\nabla f(x_0,y_0)=\lambda\nabla g(x_0,y_0)$，因为两边符号相反，所以 $\lambda\leq0$ 得证.

KKT 的应用：

/Example/ (均值不等式)

> 对于 $x_1,\cdots,x_n\geq0$ 有：
> $$
> \frac{x_1+\cdots+x_n}{n}\geq\sqrt[n]{x_1\cdots x_n}
> $$
>
> ---
>
> 固定 $x_1+\cdots+x_n=A$，来证明 $x_1\cdots x_n\leq(A/n)^n$. 这个问题变为约束最值：
> $$
> D=\left\{(x_1,\cdots, x_n)\left|\begin{array}{}g(x_1,\cdots,x_n)=x_1+\cdots+x_n-A=0\\
> x_i\geq0\,,\quad\forall i
> \end{array}\right.\right\}
> $$
> 其中后面一个约束是不等式约束.
>
> 令 $f=x_1\cdots x_n$，$h_i(x_1,\cdots,x_n)=x_i$.
>
> (1) 最值的存在性：
> $$
> D=g^{-1}[\{0\}]\cap h_1^{-1}[[0,+\infty)]\cap\cdots\cap h_n^{-1}[[0,+\infty)]
> $$
> 其中 $\{0\}$ 和 $[0,+\infty)$ 皆是 $\R$ 的闭子集，所以原像集也是闭的，得到 $D$ 为闭集. 同时，
> $$
> D\subseteq[0,A]\times\cdots[0,A]
> $$
> 有界，所以 $D$ compact，最值存在.
>
> (2) 求最值：设 $\vec{a}=(a_1,\cdots,a_n)$ 是 $f$ 在 $D$ 上面的最大值点，而我们容易发现，$D$ 的图形包含边界，边界 $\partial D=\{\cup$ 有一个不等式取等号$\}$. 因此 $D$ 内部就是 $h_i>0$，$\forall i$ 严格成立的区域.
>
> 要分析 $\vec{a}$ 点的位置来判断方法 (若 $\vec{a}\in\partial D$ 则不可使用 Lagrange 乘子法)
>
> 1. $\vec{a}\in\partial D$，此时 $f(\vec{a})=0$，随意找一个内点都比这个值要大，因此不可能在边界上.
>
> 2. $\vec{a}\in\overset{\circ}{D}$，可以用 Lagrange 乘子法：$\exist\lambda\in\R$ 使得 $(a_1,\cdots,a_n,\lambda)$ 满足：
>    $$
>    \mathcal{L}=f-\lambda g
>    $$
>    的临界点方程.
>
> $$
> 0=\frac{\partial\mathcal{L}}{\partial x_i}(\vec{a})=\frac{a_1\cdots a_n}{a_i}-\lambda
> $$
>
> 可见，$a_i$ 全同，有 $a_i=A/n$，$\forall i$，得到最大值点的位置.

下面的例子来源于中国数学家樊畿 (Ky Fan).

::: tip

这个字在这个位置居然还有一个点……好，正确.——艾神

他的父亲叫樊绮，这使得他们的英文名几乎完全一样.

:::

/Example/

> 回忆：对称矩阵 $A$，求 $\underset{|\vec{v}|=1}{\max}(\vec{v}^TA\vec{v})$ 的问题.
>
> Ky Fan 提问：给定实对称矩阵 $A_{n\times n}$，对于 $\vec{q}_1,\cdots,\vec{q}_m\in\R^m$，要求它们是单位向量并且相互正交，求 $f=\vec{q}_1^TA\vec{q}_1+\cdots+\vec{q}_m^TA\vec{q}_m$ 的最大值. (这个问题的结果被称为 Ky Fan 不等式)
>
> ---
>
> 我们先来用线性代数的语言来改述一下这个问题：令 $Q=\begin{bmatrix}\vec{q}_1&\cdots&\vec{q}_m\end{bmatrix}_{n\times m}$ (将 $\vec{q}_i$ 作为列向量). 约束改写为：
> $$
> Q^TQ=I_{m\times m}
> $$
> ($Q$ 是正交矩阵) 在这种约束下，我们的优化函数可以写成 $f=\text{Tr}(Q^TAQ)$. 因此新版本的问题表述是：
>
> 约束 $Q^TQ=I_m$，求 $f=\text{Tr}(Q^TAQ)$ 的最大值.
>
> ---
>
> 约束是 $\braket{\vec{q}_i,\vec{q}_j}=\delta_{ij}$，一共有 $m(m+1)/2$ 个约束. 变元是 $\vec{q}_i$ 的所有分量，共 $mn$ 个. 设 $Q=\begin{bmatrix}\vec{q}_1&\cdots&\vec{q}_m\end{bmatrix}_{n\times m}$ 是条件极值点，由 Lagrange 乘子法，$\exist\lambda_{ij}$ ($1\leq i\leq j\leq m$)，使得 $(\vec{q}_i,\lambda_{ij})$ 满足：
> $$
> \mathcal{L}=\sum_{i=1}^m\vec{q}_i^TA\vec{q}_i-\sum_{i<j}\lambda_{ij}(2\braket{\vec{q}_i,\vec{q}_j}-2\delta_{ij})-\sum_{i=1}^m\lambda_{ii}(\braket{\vec{q}_i,\vec{q}_i}-1)
> $$
> 的临界点方程 (其中有一部分约束 $\times2$ 的原因是为了使得对称的形式更好计算，反正没有影响). ($\vec{q}_j$ 的分量是 $q_{ij}$，同时为了方便，要求 $\lambda_{ij}=\lambda_{ji}$，这么做的原因是内积对称)
> $$
> \begin{aligned}
> 0&=\frac{\partial\mathcal{L}}{\partial q_{ij}}\\
> &=\frac{\partial}{\partial q_{ij}}\left(\vec{q}_j^TA\vec{q}_j-\sum_{s<j}\lambda_{sj}\cdot2\braket{\vec{q}_s,\vec{q}_j}-\sum_{j<t}\lambda_{jt}\cdot2\braket{\vec{q}_{j},\vec{q}_t}-\lambda_{jj}\braket{\vec{q}_j,\vec{q}_j} \right)\\
> &=2\sum_{l}A_{il}q_{lj}-\sum_{s<j}\lambda_{sj}\cdot2q_{is}-\sum_{j<t}\lambda_{jt}\cdot2q_{it}-\lambda_{jj}\cdot2q_{ij}\\
> &=2\sum_{l}A_{il}q_{lj}-\sum_{s=1}^n2q_{is}\lambda_{sj}\\\\
> &=2(AQ)_{ij}-2(QK)_{ij}
> \end{aligned}
> $$
> (记 $K=(\lambda_{ij})_{1\leq i,j\leq m}$).
>
> 总结：若 $Q$ 是 $f$ 的条件极值点，则 $\exist$ 对称矩阵 $K_{m\times m}$ 使得 $AQ=QK$. 由 $Q^TQ=I_{m\times m}$，可知：
> $$
> Q^TAQ=Q^TQK=I_mK=K
> $$
> 在此之下，$f(Q)=\text{Tr}(Q^TAQ)=\text{Tr}K$.
>
> 将 $Q$ 任意扩充为 $\R^n$ 的单位正交基 $\vec{q}_1,\cdots,\vec{q}_m,\vec{q}_{m+1},\cdots,\vec{q}_n$，写成 $\tilde Q$，仿照 $f=\text{Tr}(Q^TAQ)$，来计算 $\tilde{Q}^TA\tilde{Q}=(\braket{\vec{q}_i,A\vec{q}_j})_{i,j}$.
>
> 由 $AQ=QK_{m\times m}$：
> $$
> \begin{aligned}
> A\begin{bmatrix}
> \vec{q}_1&\cdots&\vec{q}_m
> \end{bmatrix}&=\begin{bmatrix}
> \vec{q}_1&\cdots&\vec{q}_m
> \end{bmatrix}\begin{bmatrix}
> \lambda_{11}&\cdots&\lambda_{1m}\\
> \vdots&\ddots&\vdots\\
> \lambda_{m1}&\cdots&\lambda_{mm}
> \end{bmatrix}\\\\
> \Longrightarrow\begin{bmatrix}
> A\vec{q}_1&\cdots&A\vec{q}_n
> \end{bmatrix}&=\begin{pmatrix}
> \underset{i=1}{\overset{n}{\sum}}\lambda_{i1}\vec{q}_i&\cdots
> \end{pmatrix}\\\\
> \Longrightarrow A\vec{q}_1,\cdots,A\vec{q}_m&\in\text{span}\{\vec{q}_1,\cdots,\vec{q}_m\}\\\\
> \Longrightarrow\braket{\vec{q}_i,A\vec{q}_j}&=0\,,\quad1\leq j\leq m<i
> \end{aligned}
> $$
> 所以得到 $\tilde{Q}^TA\tilde{Q}$ 正交相似于 $A$，且有：
> $$
> \tilde{Q}^TA\tilde{Q}=\left(\begin{array}{c|c}
> Q^TAQ&0\\\hline
> 0&\star
> \end{array}\right)=\left(\begin{array}{c|c}
> K&0\\\hline
> 0&\star
> \end{array}\right)=B
> $$
> 分块对角化. 因此 $A,B$ 正交相似，由 $B$ 分块对角化，可知 $\{K$ 的特征值$\}\subseteq\{B$ 的特征值$\}=\{A$ 的特征值$\}$. 进而：$f(Q)=\text{Tr}K=K$ 的 $m$ 个特征值之和 $=A$ 的某 $m$ 个特征值之和 $\leq A$ 的最大 $m$ 个特征值之和.

最终得到定理：

/Theorem/ (Ky Fan)

> 设 $Q_{n\times m}$ 满足 $Q^TQ=I_m$，则 $f=\text{Tr}(Q^TAQ)$ 的最大值为 $A$ 的最大 $m$ 个特征值之和.

## 积分学

有很多种积分：$\R^n$ 上的积分 (Riemann 积分的推广)、在几何对象上的积分 (曲线 / 曲面积分)……

对于 $\R^n$ 上的积分 (多重积分)，回忆 Riemann 积分：
$$
\int_a^bf(x)\text{d}x=\lim_P\left(\sum_i f(\xi_i)\Delta x_i\right)
$$
($P$ 是全体剖分)

可以将上述积分式解读为 $f$ 下面图形的面积 ($f(x)$ 解读为 height)，亦可以解读为 $[a,b]$ 的带权长度 ($f(x)$ 解读为权重).

推广至 $n$ ($n=2$) 维：$\Omega=\{(x,y,z)|(x,y)\in D,0\leq z\leq f(x,y)\}$. 则整个积分可以视作一个体积：

$\text{Vol}(\Omega)=?$

* 剖分 $D=\cup D_i$；
* 选代表点 $\vec{\xi}_i\in D_i$；
* $\sum f(\vec{\xi}_i)\cdot\text{area}(D_i)$；
* $\lim\sum f(\vec{\xi}_i)\text{area}(D_i)=\iint_Df$.

但是这样的直接推广会遇到问题：$\text{area}(D_i)$ 如何定义？同时很多平面区域 $E$ 无法定义面积.

更严格地定义多重积分：选择矩形面积来作为分割单元.

(1) 对 $D$ 为矩形 (更高维的情况下是 $n$ 维矩体) 定义 $D$ 上函数的积分.

$D=[a,b]\times[c,d]$，选择 $[a,b]$ 的剖分为 $\bigcup_iS_i$，$[c,d]$ 剖分为 $\bigcup_jT_j$，则 $D=\bigcup_{i,j}S_i\times T_j$. 现在就得到了两种等价的方法：

1. $$
   \lim_{S,T}\sum_{i=1}^n\sum_{j=1}^mf(\vec{\xi}_{ij})|S_i||T_j|
   $$

   ($|I|$ 表示区间长度) 若上述极限存在，则称 $f$ 在 $D$ 上可积分，记这个极限为：
   $$
   \iint_Df(x,y)\text{d}A=\iint_Df(x,y)\text{d}x\text{d}y=\iint_Df(x,y)|\text{d}x\text{d}y|=\iint_Df=\int_Df
   $$
   (有时为了强调“面积”是正的而加上绝对值，而后面的两种属于是简写)

   /bug/

   > 上面完全套用 Riemann 的方法需要剖分 & 选点，变得比较麻烦.

2. Darboux 上和和 Darboux 下和：(对于剖分 $P$)
   $$
   \begin{aligned}
   \text{upper sum: }U(P,f)&:=\sum_{i,j}|S_i|\cdot|T_j|\sup_{S_i\times T_j}f\\\\
   \text{lower sum: }L(P,f)&:=\sum_{i,j}|S_i|\cdot|T_j|\inf_{S_i\times T_j}f
   \end{aligned}
   $$
   和一维积分几乎一样.

   注意：要取 $\sup$ 和 $\inf$，意味着 $f$ 必须有界.

/Definition/

> 称有界函数 $f$ 在矩形 $D$ 上可积分，如果对于所有剖分 $P$：
> $$
> \inf_P(U(P,f))=\sup_{P}(L(P,f))
> $$
> 成立. 我们把上式的公共值称为 $\iint_Df$.

/Claim/

> $f$ 在矩形 $D$ 上可积 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist$ 一个剖分 $P$ 使得 $U(P,f)-L(P,f)<\varepsilon$.

/Theorem/ (Riemann - Lebesgue 积分)

> 设 $D$ 是 $n$ 维矩体 $D=[a_1,b_1]\times\cdots\times[a_n,b_n]$，则 $f$ 在 $D$ 上可积 $\Longleftrightarrow$ $f$ 在 $D$ 上有界 / $f$ 在 $D$ 上的间断点集的 $n$ 维 volume 是零.

/Definition/

> 称 $E\subseteq\R^n$ 的 $n$ 维 volume 为零，如果 $\forall\varepsilon>0$，$\exist$ 可数个矩体 $I_1,I_2,\cdots$，使得：
> $$
> \bigcup_{m=1}^\infty I_m\supseteq E\,,\quad \sum_{m=1}^\infty\text{vol}(I_m)<\varepsilon
> $$

/Corollary/

> 连续函数在矩体上均可积.

因此 $n$ 维矩体 $I$ 上 $f$ 的积分为：
$$
\underset{n}{\underline{\int\cdots\int_I}}f(x_1,\cdots,x_n)\text{d}V
$$
当然也有很多简写.

(2) 对于一般的有界区域 $E$，以 $2$ 维为例，取矩形 $I\supseteq E$，对于 $E$ 上的 $f$，将 $f$ 扩充至 $I$ 上：
$$
\tilde f(\vec{x})=\left\{\begin{array}{ll}
f(x)&x\in E\\
0&x\notin E
\end{array}\right.
$$
/Definition/

> $$
> \iint_Ef=\iint_I\tilde f
> $$
>
> (这样的定义是严格的，但是复杂程度全部集中在 $\tilde f$ 上)

沿用 Riemann - Lebesgue 定理：$f$ 在 $E$ 上可积 $\Longleftrightarrow$ $\tilde f$ 在 $I$ 上可积 $\Longleftrightarrow$ $\tilde f$ 在 $I$ 上有界，$\text{disc}(\tilde f)$ (间断点集，因为英文是 discontinuous) 是零面积集.

前半句话比较好判断，因为 $I$ 上有界就是 $E$ 上有界. 但是如何判断间断点集是零面积集？我们引入所谓的示性函数：

/Definition/ (示性函数)

> 设 $f$ 在 $I$ 上有定义，$\tilde f(\vec{x})=f(\vec{x})\chi_E(\vec{x})$.
>
> 对于集合 $E\subseteq\R^2$，示性函数 $\chi_E:\R^2\to\R$，有
> $$
> \chi_E(\vec{x})=\left\{\begin{array}{ll}
> 1&\vec{x}\in E\\
> 0&\vec{x}\notin E
> \end{array}\right.
> $$

回忆：$\text{disc}(fg)\subseteq\text{disc}(f)\cup\text{disc}(g)$，因为若 $f,g$ 在 $x_0$ 处连续，则 $fg$ 在 $x_0$ 处连续.

从而，若 $x_0\in C(f)\cap C(g)\subseteq C(fg)$. 取补集：
$$
\text{disc}(fg)=(C(fg))^C\subseteq(C(f)\cap C(g))^C=\text{disc}(f)\cup\text{disc}(g)
$$