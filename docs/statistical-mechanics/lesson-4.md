---
title: Lesson 4 热力学第三定律
createTime: 2026/03/06 10:02:02
permalink: /statistical-mechanics/lesson-4-law-3/
---
我们引入一些可以观测的量：体膨胀系数、压强系数和等温压缩系数，
$$
\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_p,\quad\beta = \frac{1}{p}\left(\frac{\partial p}{\partial T}\right)_V,\quad \kappa_T=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_T
$$
小结一下利用热力学定律研究均匀系统性质的一般方法：

* 选自变量 (直接观测量)
* $\text{d}U=T\text{d}S-p\text{d}V$
* 引出其他特性函数的全微分，并得到 Maxwell 关系
* 如果仅仅涉及 $S$ 的偏导数，利用 Maxwell 关系和偏导法则即可
* 如果涉及特性函数的偏导，先换到 $S$ 的偏导数，再回到上面一步

平衡态的特性函数：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0m000dc7v17s9n39ml0tu26DIYxAIFxDda1DGxPDwUzAa==.png)

:::

## 热力学第三定律

从 Nernst 定理 (1906) 开始，Nernst 定理指的是等温过程中熵的改变在 $T\to0$ 下趋于零，即
$$
\lim_{T\to0}(\Delta S)_T = 0
$$
1912 年，Nernst 提出 Nernst 原理，表述为：**不可能使一个物体冷却到绝对温度的零度**.

如果考虑热容
$$
C_y = T\left(\frac{\partial S}{\partial T}\right)_y
$$
在没有受力的情况下，能够从初始值开始计算熵的具体值，
$$
S(T,y) = S(0,y)+\int_0^yC_y\frac{\text{d}T}{T}
$$
我们可以把 $S(0,y)$ 设为 $0$，这是 Planck 的做法. 同时根据 Nernst 原理可以证明，在 $T\to0$ 时比热必须趋于零，否则和 Nernst 原理 (或者说热力学第三定律) 矛盾.

## 复相系统的热力学性质

现在要考虑粒子数可变系统，设均匀系有 $k$ 个组元，以 $T,p,\{N_i\}$ 为自变量，对于 $G$ 这种广延量，有
$$
G = \sum_{i=1}^k N_i\left(\frac{\partial G}{\partial N_i}\right)_{T,p,N_j\neq N_i} = \sum_iN_i\mu_i
$$

> 这里用到所谓 Euler 定理：如果齐次函数
> $$
> f(\lambda x_1,\cdots,\lambda x_n) =\lambda^mf(x_1,\cdots,x_n)
> $$
> 则
> $$
> \sum_Ix_i\frac{\partial f}{\partial x_i} = mf
> $$

这里定义了第 $i$ 组元的化学势 $\mu_i$. 新的热力学方程是
$$
\text{d}G = \left(\frac{\partial G}{\partial T}\right)_{p,N_i}\text{d}T+\left(\frac{\partial G}{\partial p}\right)_{T,N_i}\text{d}p+\sum_i\left(\frac{\partial G}{\partial N_i}\right)_{T,p,N_j\neq N_i}\text{d}N_i
$$
和封闭系统比较，上式可以用特性函数表示为
$$
\text{d}G = -S\text{d}T+V\text{d}p+\sum_i\mu_i\text{d}N_i
$$
可以定义 mol Gibbs 函数：
$$
G(T,p,n) = nG_m(T,p),\quad G_m=\left(\frac{\partial G}{\partial n}\right)_{T,p}\equiv\mu_m \equiv N_A\mu
$$

## 单元复相系的平衡条件

用孤立系统来讨论，考虑两相 $\alpha,\beta$. 要求能量、体积、粒子数都恒定，也就有
$$
U^\alpha+U^\beta=\text{const.},\quad V^\alpha+V^\beta=\text{const.},\quad N^\alpha+N^\beta=\text{const.}
$$
平衡时，$S$ 取极值，$\delta S=\delta S^\alpha+\delta S^\beta=0$. 也就是：
$$
\begin{aligned}
&\frac{\delta U^\alpha+p^\alpha\delta V^\alpha-\mu^\alpha\delta N^\alpha}{T^\alpha} + \frac{\delta U^\beta+p^\beta\delta V^\beta-\mu^\beta\delta N^\beta}{T^\beta}=0\\\\
\Longrightarrow&\left(\frac{1}{T^\alpha}-\frac{1}{T^\beta}\right)\delta U^\alpha+\left(\frac{p^\alpha}{T^\alpha}-\frac{p^\beta}{T^\beta}\right)\delta V^\alpha+\left(\frac{\mu^\alpha}{T^\alpha}-\frac{\mu^\beta}{T^\beta}\right)\delta N^\alpha=0
\end{aligned}
$$
有三个平衡条件，热平衡条件 $T^\alpha=T^\beta$、力学平衡条件 $p^\alpha=p^\beta$、相平衡条件 $\mu^\alpha=\mu^\beta$.

对于多元复相系，平衡条件也是上面这些. 如果存在化学反应则更复杂：以 $2\text{H}_2+\text{O}_2\longleftrightarrow2\text{H}_2\text{O}$ 为例，热力学习惯于写成
$$
2\text{H}_2\text{O}-2\text{H}_2-\text{O}_2=0
$$
一般地，写为
$$
\sum_{i=1}^k\nu_iA_i = 0
$$
等温等压条件下，Gibbs 自由能极小，$\delta G=0$. 化学平衡条件和化学反应的系数有关，
$$
\sum_i\nu_i\mu_i=0
$$

## 相变热力学

用宏观量来描写相变，首先是 Gibbs 相律，描述相的并存：
$$
\mu^{\text{I}}(T,Y) = \mu^{\text{II}}(T,Y)\Longrightarrow Y=Y(T)
$$
这个 $Y(T)$ 称为两相共存曲线. 如果是三相共存，则可以解出一个点，这个点三相共存，称为三相点. 同理可以知道四相一般不能共存.