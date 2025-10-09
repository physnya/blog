---
title: Lesson 30 数值级数
createTime: 2025/02/19 13:14:03
permalink: /integral/txomcres/
---
好久不见.

## 安排

期中考试：第八周周六 (4 月 12 日上午).

其他安排和上学期差不多，已经发在网络学堂. 上学期级数还没有讲完，所以第一周会讲一点点级数，然后在第三周周末再补一节课.

## 级数理论

分为两种：数值级数、函数项级数.

/Definition/ (无穷级数)

> 将可数无穷个数依次相加.

/Example/ (数值级数)

> 小数 $\overline{0.a_1a_2a_3\cdots}$ 就是一种无穷级数：
> $$
> =a_1\times10^{-1}+a_2\times10^{-2}+\cdots
> $$

/Example/ (函数项级数)

> Taylor 公式也是一种级数：
> $$
> f(x)\sim\sum_{i=0}^n\frac{f^{(i)}(x_0)}{i!}(x-x_0)^i
> $$
> 这里有误差，所以自然地我们会思考有没有严格的式子，严格的式子是一个无穷级数：
> $$
> f(x)=\sum_{i=0}^\infty\frac{f^{(i)}(x_0)}{i!}(x-x_0)^i\,,\quad\forall x\in I
> $$
> 这就将 $f$ 表示为 $\infty$ 个函数依次相加.

后面我们分别讲一讲数值级数和函数项级数.

## 数值型级数

想要定义一个无穷求和
$$
a_1+a_2+\cdots=\sum_{i=1}^\infty a_i
$$
就像我们做积分一样，我们要在某一个点处做一个截断，才能得到我们已经熟悉的、有限的求和. 回忆 Riemann 积分
$$
\int_a^{+\infty}f=\lim_{b\to+\infty}\int_a^bf
$$
类似地得到无穷求和的定义

/Definition/

> 设 $\{a_n\}_{n=1}^\infty$ 是无穷数列，部分和 $S_n=a_1+\cdots+a_n$. 若 $\underset{n\to\infty}{\lim}S_n$ 存在，则称无穷级数 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛，并称 $\underset{n\to\infty}{\lim}S_n$ 为无穷级数的和，写作
> $$
> \sum_{n=1}^\infty a_n=\lim_{n\to\infty}S_n=\lim_{n\to\infty}(a_1+\cdots+a_n)
> $$
> 若 $\underset{n\to\infty}{\lim}S_n$ 不存在，则称级数 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 发散，或者说和 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 无意义 / 无定义.

实际上，数值级数理论 $\subseteq$ $\{$ 级数理论 $\}$.

问题：如何计算无穷级数？(这里的方法实际上并不多)

> 一般就是计算 $S_n$ 再取极限. 此外，还可以通过 Taylor 公式的结果得到恒等式.

上个学期我们已经证明过一些恒等式，比如：

/Example/

> $\forall|x|<1$，有
> $$
> (1+x)^\alpha=\sum_{n=0}^\infty C_\alpha^n\,x^n=\sum_{n=0}^\infty\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n
> $$
> 上个学期我们用 Cauchy 余项的 Taylor 公式证明了这一结论.
>
> 为了应用这个结论，我们可以推而广之，得到
> $$
> \begin{aligned}
> (1+x)^{-1}&=\frac{1}{1+x}=1-x+x^2-x^3+\cdots\\
> (1+x)^{-m}&=\sum_{k=0}^\infty C_{-m}^kx^k=\sum_{k=0}^\infty\frac{-m(-m-1)\cdots(-m-k+1)}{k!}x^k\\
> (1-x)^{-m}&=\sum_{k=0}^\infty\frac{m(m+1)\cdots(m+k-1)}{k!}x^k=\sum_{k=0}^\infty C_{m+k-1}^kx^k\\\\
> (1-4x)^{1/2}&=\sum_{k=0}^\infty C_{1/2}^k(-4x)^{k}=1+\sum_{k=1}^\infty(-1)x^k\frac{\frac{1}{2}\cdot\frac{1}{2}\cdot\frac{3}{2}\cdots\frac{2k-3}{2}}{k!}\cdot4^k\\
> &=1-\sum_{k=1}^\infty x^k\frac{(2k-3)!!}{k!}\cdot2^k\\
> &=1-\sum_{k=1}^\infty x^k\frac{(2k-2)!}{(k-1)!k!}\cdot2^k
> \\
> (1-4x)^{-1/2}&=\cdots=1+\sum_{k=1}^\infty C_{-1/2}^kx^k=\cdots
> \end{aligned}
> $$
> 可以看出方法并不多，只能从已有的结果慢慢对比.

问题：若级数非常复杂，无法计算出具体的和，我们应该如何判断这一级数是否收敛？

在谈论这一问题之前，我们先讲一些级数的性质：

/Claim/

> 1. 若 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 和 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 均收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}(a_n+b_n)$ 和 $\underset{n=1}{\overset{\infty}{\sum}}(a_n-b_n)$ 也收敛，且
>    $$
>    \sum_n(a_n\pm b_n)=(\sum_{n}a_n)\pm(\sum_n b_n)
>    $$
>
> 2. 级数 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 的收敛 / 发散性与前面有限项无关. 也就是说，即使修改有限项，也不影响收敛 / 发散性.

这两个命题**几乎是显然的**. 我们下面稍微证明一下，可以发现这些证明基本上只要几行.

/Proof/ 1.

> $$
> \begin{aligned}
> \underset{n=1}{\overset{\infty}{\sum}}(a_n\pm b_n)&=\lim_{n\to\infty}(\underset{n=1}{\overset{\infty}{\sum}}(a_n\pm b_n))=\lim_{n\to\infty}(\underset{n=1}{\overset{\infty}{\sum}}a_n\pm\underset{n=1}{\overset{\infty}{\sum}}b_n)\\
> &=\lim_{n\to\infty}\underset{n=1}{\overset{\infty}{\sum}}a_n\pm\lim_{n\to\infty}\underset{n=1}{\overset{\infty}{\sum}}b_n\\
> &=\underset{n=1}{\overset{\infty}{\sum}}a_n\pm\underset{n=1}{\overset{\infty}{\sum}}b_n
> \end{aligned}
> $$
>
> 得证.

证毕.

/Proof/ 2.

> $$
> \begin{aligned}
> \underset{n=1}{\overset{\infty}{\sum}}a_n&=\lim_{N\to\infty}(\underline{a_1+\cdots+a_n}+a_{n+1}+\cdots+a_N)\\
> &=(a_1+\cdots+a_n)+\lim_{N\to\infty}(a_{n+1}+\cdots+a_N)\\
> &=S_n+\underset{i=n+1}{\overset{\infty}{\sum}}a_i
> \end{aligned}
> $$
>
> 可知，$\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛 $\Longleftrightarrow$ $\underset{i=n+1}{\overset{\infty}{\sum}}a_i$ 收敛，即可扔去前面有限项，谈论收敛性.
>
> 得证.

证毕.

有了上面两条性质，我们找出几个判别方法.

/Claim/ (级数收敛的必要性)

> 若 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛，则 $\underset{n\to\infty}{\lim}a_n=0$.

/Proof/

> 若 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛，则 $\underset{n\to\infty}{\lim}S_n$ 存在，从而
> $$
> \lim_{n\to\infty}a_n=\lim_{n\to\infty}(S_{n}-S_{n-1})=S-S=0
> $$
> 得证.

证毕.

## 判断收敛性

与无穷积分的收敛性判断几乎完全一致. 我们分为正项级数和一般级数来讨论.

### 正项级数

/Definition/

> 称 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 为正项级数，如果 $\exist N_0$，使得 $\forall n\geq N_0$ 有 $a_n\geq0$.

直接把正项无穷积分的收敛性判断方法照搬过来.

/Claim/

> 正项级数收敛 $\Longleftrightarrow$ 部分和序列 $\{S_n\}$ 有上界.

/Proof/

> “$\Longrightarrow$”：若 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛，则 $\underset{n\to\infty}{\lim}S_n$ 存在，直接推出 $\{S_n\}$ 有界.
>
> “$\Longleftarrow$”：此时 $\{S_n\}$ 有上界，由 $a_n$ 为正项级数可知，$\{S_n\}$ 单调递增. 使用 Weierstrass 定理知道 $\underset{n\to\infty}{\lim}S_n$ 存在.
>
> 得证.

证毕.

有了上面的命题，相应地我们可以仿照无穷积分的比较定理写出无穷级数的比较定理.

/Theorem/ (比较定理)

> 设 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 与 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 是正项级数，且 $a_n\leq b_n$ ($\forall n\geq N$).
>
> 1. 若 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 收敛，则 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛；
> 2. (与 1. 互为逆否命题) 若 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 发散，则 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 发散.

/Proof/

> 两点互为逆否命题，只需证明其中一个. 我们下面尝试证明第一点.
>
> 由 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 收敛，可知 $\{T_n=b_1+\cdots+b_n\}$ 有上界 $K$. 进而 $a_n$ 部分和
> $$
> S_n=a_i+\cdots+a_n\leq b_i+\cdots+b_n\leq K
> $$
> (这里已经删去两个序列的前面有限项，保证了 $a_i\leq b_i$，从一开始就具有大小关系) 上式表明 $\{S_n\}$ 有上界，$\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛得证.

证毕.

比较定理还可以写成极限形式：

/Theorem/ (比较定理的极限形式)

> 设 $\underset{n=1}{\overset{\infty}{\sum}}a_n$，$\underset{n=1}{\overset{\infty}{\sum}}b_n$ 为正项级数，且 $\underset{n\to\infty}{\lim}\frac{a_n}{b_n}=L\in\R_{\geq0}\cup\{$符号$+\infty\}$.
>
> 1. 若 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 收敛，且 $L\neq+\infty$，则 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛；
> 2. 若 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ 发散，且 $L\neq0$，则 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 发散；
> 3. 若 $L\in\R_+$，则两者收敛 / 发散性一致.

问题：我们常常使用哪些基本的例子来进行比较？

/Example/ (几何级数)

> $$
> \sum_{n=0}^\infty q^n=\left\{\begin{array}{lr}
> \frac{1}{1-q}\,,\quad|q|<1\\
> \text{divergent}\,,\quad\text{other situation}
> \end{array}\right.
> $$
>
> 可以验证 $q=\pm1$ 情形. 这是我们最熟悉的结果.

/Example/ (调和级数)

> $\underset{n=1}{\overset{\infty}{\sum}}\frac{1}{n}$. 这是一个发散的级数. 关于它的证明要归功于 Cauchy，而最早研究调和级数的人是 Euler.
>
> /Proof/ (Cauchy 的方法)
>
> > 记 $S_n=1+\frac{1}{2}+\cdots+\frac{1}{n}$. Cauchy 将这个求和进行分组：
> > $$
> > \begin{aligned}
> > S_{2^n}&=\frac{1}{1}+\frac{1}{2}+(\frac{1}{3}+\frac{1}{4})+\cdots+(\frac{1}{2^{n-1}+1}+\cdots+\frac{1}{2^n})\\
> > &\geq\frac{1}{1}+\frac{1}{2}+(\frac{1}{4}+\frac{1}{4})+\cdots+(2^{n-1}\cdot\frac{1}{2^n})\\
> > &=1+\frac{n}{2}\longrightarrow\text{divergent}
> > \end{aligned}
> > $$
> > Cauchy 还对这个方法做了更深的推理，显然上面的式子可以抽象成一个 $\{a_n\}$ 非负且单调递减，那么
> > $$
> > \begin{aligned}
> > S_{2^n}&=a_1+\cdots+a_{2^n}\\
> > &\geq a_1+a_2+2a_4+4a_8+\cdots+2^{n-1}a_{2^n}\\\\
> > S_{2^n-1}&=a_1+\cdots+a_{2^n-1}\\
> > &\leq a_1+2a_2+4a_4+\cdots+2^{n-1}a_{2^{n-1}}
> > \end{aligned}
> > $$
> > 也就是两个数列的相互控制：$\underset{n=1}{\overset{\infty}{\sum}}a_n$ 收敛 $\Longleftrightarrow$ $\underset{n=1}{\overset{\infty}{\sum}}2^na_{2^n}$ 收敛.
> >
> > 更加严格地写出，应该是
> > $$
> > \underset{k=1}{\overset{n}{\sum}}2^ka_{2^k}\leq2S_{2^n}\leq2K\,,\quad S_{2^n-1}\leq a_1+M
> > $$
> > 其中 $K$ 是 $\{S_n\}$ 上界，$\{\underset{k=1}{\overset{n}{\sum}}2^ka_{2^k}\}$ 的上界是 $M$.
>
> /Proof/ (另一种证法)
>
> > 上学期证明过：
> > $$
> > \lim_{n\to\infty}(\frac{1}{1}+\frac{1}{2}+\cdots+\frac{1}{n}-\ln n)=\gamma\,(\text{Euler Constant})
> > $$
> > 所以证明 $\{1/n\}$ 没有上界.
>
> /Proof/ (第三种证法)
>
> > 利用 $1/x$ 单调递减 (在 $\R_+$ 上)，则
> > $$
> > \frac{1}{a+1}=\int_a^{a+1}\frac{1}{a+1}\text{d}x\leq\int_a^{a+1}\frac{1}{x}\text{d}x\leq\int_a^{a+1}\frac{1}{a}\text{d}x=\frac{1}{a}
> > $$
> > 从而：
> > $$
> > \frac{1}{1}+\frac{1}{2}+\cdots+\frac{1}{n}\leq1+\int_1^2\frac{1}{x}\text{d}x+\cdots\leq1+\ln n
> > $$
> > 也可以证明.

如果大家愿意娱乐一下自己，可以发现上面的命题有一个推论：素数有无穷多个. (Cauchy 在证明完毕之后立即发现了这一点)

/Proof/ (反证法)

> 设全体素数为 $p_1\leq p_2\leq\cdots\leq p_m$. 熟知每个正整数 $n\overset{\text{marked as}}{=}p_1^{\alpha_1}\cdots p_m^{\alpha_m}$ ($\alpha_i\in\mathbb{Z}_{\geq0}$).
>
> 进而：
> $$
> \begin{aligned}
> \frac{1}{1}+\frac{1}{2}+\cdots+\frac{1}{n}&\leq(\frac{1}{p_1^0}+\cdots+\frac{1}{p_1^t})\cdots(\frac{1}{p_m^0}+\cdots+\frac{1}{p_m^t})\\
> &<\frac{1}{1-\frac{1}{p_1}}\cdots\frac{1}{1-\frac{1}{p_m}}=K
> \end{aligned}
> $$
> 这表明调和级数有上界，这是不可能的. 得证.

证毕.

通过与几何级数做比较，可以得到两种正项级数的收敛判别法：

* Ratio Test (d'Alembert 判别法)
* Root Test (Cauchy 判别法)

几何级数的特征：

* $\frac{b_{n+1}}{b_n}=$ 公比 $q$
* $b_n=q^n\Longrightarrow\sqrt[n]{b_n}=q$.

---

将 $\underset{n=1}{\overset{\infty}{\sum}}a_n$ 与几何级数 $\underset{n=1}{\overset{\infty}{\sum}}b_n$ ($b_n=q^n$) 比较，得到定

::: tip -

好，同学们，我们下课. —— 艾神

:::

$\uparrow$ 没有讲完.