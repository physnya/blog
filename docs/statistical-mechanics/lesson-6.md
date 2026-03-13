---
title: Lesson 6 Landau 相变理论 (二)
createTime: 2026/03/13 09:43:23
permalink: /statistical-mechanics/lesson-6-landau-phase-transition-2/
---
## 相变分类和临界现象

我们可以按照相变中「奇异点」的特性来分类相变. 相变的时候 $\mu$ 必须相等，但是对其导数
$$
y = -\left(\frac{\partial G}{\partial Y}\right)_{T,\{n_i\}},\quad S = -\left(\frac{\partial G}{\partial T}\right)_{Y,\{n_i\}}
$$
没有要求. 因此分成两类：

* 一阶微分在相变点不连续，为一级相变
* 高阶微分不连续，为二级相变

> 只分成两类的原因是，高级的相变性质上差异不大. 这是 Ehrenfest 对相变的分类.

一级相变的体积和熵都有突变，熵突变意味着相变潜热的存在；二级相变的特征从图像上看不明显，但是具有很多奇异的性质，我们称为临界现象. 临界点 $T_c$ 附近，物质的热力学量都以幂律的形式变化，并且这个幂律的幂次 (被称为临界指数) 具有一定的普适性.

临界指数：

* 磁化率：
  $$
  \chi_T\sim-\left(\frac{\partial^2G}{\partial H^2}\right)_T \overset{T=T_c}{=} \left\{\begin{aligned}
  &C\left(\frac{T}{T_c}-1\right)^{-\gamma},&\quad T>T_c\\\\
  &C\left(1-\frac{T}{T_c}\right)^{-\gamma'},&\quad T<T_c
  \end{aligned}\right.
  $$

* 比热：类似上面，指数为 $\alpha$，临界振幅为 $A$.

* 磁化强度：类似上面，指数为 $\beta$，临界振幅为 $B$.
  $$
  M_S \overset{T\to T_c}{=}B\left(1-\frac{T}{T_c}\right)^\beta
  $$

* 状态方程：
  $$
  M = DH^{1/\delta}
  $$

* ……

另外的临界指数隐藏在系统的空间关联中：做一个粗粒平均，考虑序参量密度 $m(\vec{r})$，那么平均的序参量为
$$
M = \left\langle\int m(\vec{r})\text{d}\vec{r}\right\rangle
$$
关联长度定义为
$$
\Gamma(\vec{r}) = \langle m(\vec{r})m(0)\rangle-\langle m(\vec{r})\rangle\langle m(0)\rangle
$$
这描述序参量的空间关联性，一般来说符合下面的 Ornstein - Zernike 形式
$$
\Gamma\sim\frac{e^{-r/\xi}}{r}
$$

> 真没想到在这种地方也可以看见 Zernike... 不过此式形式确实和 Zernike 的光学理论有不少联系.

一般而言，$\Gamma\sim r^{-p}e^{-r/\xi}$，其中 $p = d-2+\eta$ ($d$ 为空间维度，$\eta$ 是第五个临界指数)，关联长度 $\xi$ 同样由一个临界指数控制，为 $\nu$. 因此一共有六个临界指数，分别为 $\gamma,\alpha,\beta,\delta,\eta,\nu$. 重整化群理论表明它们并不相互独立，而是符合一些标度律：
$$
\begin{aligned}
\text{Fisher: }&\gamma=\nu(2-\eta)\\\\
\text{Rushbrooke: }&\alpha+2\beta+\gamma=2\\\\
\text{Widom: }&\gamma = \beta(\delta-1)\\\\
\text{Josephson: }&\nu d = 2-\alpha
\end{aligned}
$$
只有两个独立变量.

## Landau 二级相变理论

唯像地来看，临界点处把自由能用序参量展开，
$$
F(m) = F_0(T) + \frac{1}{2}a(T)m^2+\frac{1}{4}b(T)m^4+\cdots
$$

> 仅有偶次项是因为系统对于 $m\to -m$ 对称.

但是理论的致命缺陷在于，二级相变是涨落无穷大的现象，而 Landau 的理论是热力学理论，因此是一个平均场理论，无法将涨落考虑进去. 但是把这个理论推广到一级相变等领域，可能会得到更精确的结果.

从统计的角度理解，定义粗粒平均，对于 $d$ 维的空间，序参量密度为
$$
m(x) = \sum_{i\in L^d}\frac{m_i}{L^d}
$$
忽略涨落，得到稳定的平衡状态，要求自由能 $F$ 取极小值，也就是做一个四次函数的极值问题. 下面三个解：

* $m=0$，无序态，相当于 $T>T_c$.
* $m=\pm\sqrt{-a/b}$，对应有序态，相当于 $T<T_c$.

极小值要求二阶导数大于零，
$$
\frac{\partial^2F}{\partial m^2}=a+3bm^2>0\Longrightarrow\left\{\begin{aligned}
&a>0,\quad T>T_c\\\\
&a<0,\quad T<T_c
\end{aligned}\right.
$$
也就是温度降低时，极小值点从只有一个 $m=0$ 分裂为两个 $m=\pm\sqrt{-a/b}$. 在临界点附近，设
$$
a = a_0\frac{T-T_c}{T_c} \equiv a_0t,\quad a_0>0;\quad b(T)=b=\text{const.}
$$
代入 $T<T_c$ 的 $m$ 极值点表达式，
$$
m=0,\quad t>0;\quad m = \pm\sqrt{\frac{a_0}{b}}(-t)^{1/2},\quad t<0
$$
这就是临界指数 $\beta$，算出 $\beta=1/2$. 对于比热，由自由能来计算，首先确定临界点上下的自由能分别为
$$
F=F_0,\quad t>0;\quad F = F_0-\frac{a^2}{4b},\quad t<0
$$
比热的突变为
$$
C=-T\frac{\partial^2F}{\partial T^2}\Longrightarrow C(t\to-0)-C(t\to +0) = \frac{a_0^2}{2bT_c}\cdot t^0
$$
对应的临界指数 $\alpha=0$. 加入外场 $B$，自由能加上一项，变成
$$
F = F_0+\frac{1}{2}am^2+\frac{1}{4}bm^4-Bm
$$
在 $B$ 很小的情况下，
$$
\frac{\partial F}{\partial m} = am+bm^3-B = 0\Longrightarrow\text{ when } T=T_c,\quad a=0\Longrightarrow B=bm^3
$$
因此得到临界指数 $\delta=3$. 最后算磁化率：
$$
\chi = \mu_0\left(\frac{\partial m}{\partial B}\right)_T = \frac{\mu_0}{a+3bm^2} = \left\{\begin{aligned}
&\frac{\mu_0}{a_0}t^{-1},\quad t>0\\\\
&-\frac{\mu_0}{2a_0}t^{-1},\quad t<0
\end{aligned}\right.
$$
临界指数 $\gamma=1$.

当然这四个临界指数 $\beta=1/2$，$\alpha=0$，$\delta=3$，$\gamma=1$ 和实验结果不完全符合，但是可以预期越高的维度 Landau 的理论越好，因为维度越高，近邻数越多，平均场近似越优越.

## 统计力学

单粒子的力学规律都是决定论式的，不管是 Newton 力学还是 Schrödinger 方程，都给出确定的结果. 这就是著名的 Laplace's Demon 的想法.

(怎么唐突下课了)

