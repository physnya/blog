---
title: Lesson 2 条件概率
createTime: 2026/03/03 15:35:42
permalink: /probability/lesson-2/
---
事件之间的关系实际上和集合论的运算法则是一致的.

以交换律为例，$A\cup B \subseteq B\cup A$ 等价于「$\omega\in A\cup B$，若 $\omega\in A$ 或 $\omega \in B$，则 $A\cup B\subseteq B\cup A$」. 另一边同理.

/Example/

> 袋子中有 $\alpha$ 个白球和 $\beta$ 个黑球，取出 $k+1$ 个球，求各种情况的概率和最后一个取出来的球是白球的概率.
>
> ---
>
> 不管白球和黑球在什么位置，分子和分母实际上没有区别，总概率为
> $$
> p_1 = \frac{C_\alpha^aC_\beta^b}{C_{\alpha+\beta}^{a+b}}
> $$
> 最后一个球是白球的概率实际上是把球排成一排，第 $k+1$ 个是白球的概率，这就是
> $$
> p_2 = \frac{\alpha}{\alpha+\beta}
> $$

第一个小问其实就是超几何分布，用古典概型其实已经是局限的. 下个例子我们会看到更加局限的场景.

/Example/

> 约会问题：两人在 7 点到 8 点之间相约会面，每个人在任意时间点都可能来，等 20 分钟之后离开，问两人见面的概率.
>
> ---
>
> 这时候随机试验的可能结果是无限的，并且每个基本结果是等概率的.
>
> 以两个人的到达时间作为横纵轴，建立坐标系画图，实际上问题是一个面积比. 最终算出概率为 $5/9$. 这是几何概型的经典想法.

几何概型的核心思想为，每个事件发生的概率只与构成该事件区域的长度 / 面积 / 体积成比例，最经典的一个问题就是投针问题.

/Definition/

> 事件族 ($\Omega$ 的子集族) $\mathscr{F}$ 称为 $\sigma$ - 域 (也称为 $\sigma$ - 代数或者事件体)，如果它满足下列条件：
>
> * $\Omega\in\mathscr{F}$
> * 若 $A\in\mathscr{F}$，则 $A^C\in\mathscr{F}$
> * 若 $A_1,A_2,\cdots\in\mathscr{F}$，则 $\underset{i=1}{\overset{\infty}{\bigcup}}A_i\in\mathscr{F}$.

举一个丢色子的例子，$\Omega=\{1,2,3,4,5,6\}$，那么下面几个都是 $\sigma$ - 域：

* 最小的 $\sigma$ - 域：$\mathscr{F}_1=\{\varnothing,\Omega\}$；
* 最大的 $\sigma$ - 域：包含所有事件.
* ……

/Definition/ (Kolmogorov 概率公理化定义)

> $P$ 是 $\mathscr{F}$ 上的非负值函数，即对每个事件 $A\in\mathscr{F}$，都可以定义一个数 $P(A)$，满足下列条件：
>
> * 非负性：$P(A)\geq0$
> * 规范性：$P(\Omega)=1$
> * 可数可加性
>
> ::: warning
>
> 和 Euclid 几何第五公设一样，这里的第三点被改变之后可以得到新的数学，比如模糊数学和不确定数学.
>
> :::

一个不符合古典概型的情况：

/Example/

> 一个均匀硬币连续投掷，令 $\omega^{(i)}$ 为首次出现正面在第 $i$ 次的事件，则可能的事件空间是无穷的.

引入了这个公理化的概率定义之后，我们能做什么？最直接的一个就是我们能够推导出概率的加法公式了，
$$
P\left(\bigcup_{i=1}^nA_i \right) = \sum_{i=1}^nP(A_i)
$$

## 条件概率

/Example/

> 一个二胎家庭，已知有一个男孩，则有两个男孩的概率更高了.

条件概率将原有的空间 $\Omega$ 缩小为新的空间.

/Definition/

> 设 $(\Omega,\mathscr{F},P)$ 为概率空间，$B\in\mathscr{F}$，且 $P(B)>0$，则对任何 $A\in\mathscr{F}$，定义
> $$
> P(A|B)=\frac{P(AB)}{P(B)}
> $$
> 为条件概率.