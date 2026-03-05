---
title: Lesson 3 热力学关系
createTime: 2026/03/05 21:47:27
permalink: /statistical-mechanics/lesson-3-relations/
---
可逆 Carnot 机效率只与热源温度有关，与工作物质无关. 为此要证明：
$$
\eta = 1- \frac{Q_2}{Q_1},\quad \frac{Q_2}{Q_1} = F(\theta_1,\theta_2)
$$
引入两个辅助可逆 Carnot 机，其中一个用 $\theta_2$ 作为高温热源，$\theta_3$ 作为低温热源，输出 $W_B$；第三个热机是反向运行，输入功为 $W_A+W_B$，两热源为 $\theta_1,\theta_3$. 因此
$$
F(\theta_1,\theta_2)=\frac{Q_2}{Q_1}=\frac{Q_2/Q_3}{Q_1/Q_3} = \frac{Q_3/Q_1}{Q_3/Q_2} = \frac{F(\theta_1,\theta_3)}{F(\theta_2,\theta_3)}
$$
这个系统和 $\theta_3$ 应该没关系，所以函数应该是正比例的形式，由此可以定义绝对温标.

Clausius 不等式：
$$
\sum_{i\text{ in a circle}}\frac{Q_i}{T_i}\leqslant 0,\text{ or continuous version }\oint\frac{\text{d}Q}{T} \leqslant 0
$$
其中 $Q_i$ 全部代表的是吸热 (吸热为正). 上式取等，当且仅当过程可逆.

/Proof/

> 利用 Carnot 定理，
> $$
> \eta = 1-\frac{Q_2}{Q_1} \leqslant 1-\frac{T_2}{T_1}
> $$
> 注意这里的 $Q_2$ 应该改写为 $-Q_2$ (吸热为正)，得到
> $$
> \frac{Q_1}{T_1}+\frac{Q_2}{T_2}\leqslant0
> $$
> 之后推广到多个热源的情况就行了.

在 Clausius 不等式之后，自然可以引入熵的概念. 考虑一个可逆过程，有两种不同的路径 $R_1$ 和 $R_2$，有
$$
\underset{(R_1)}{\int_i^f}\frac{\text{d}Q}{T} = \underset{(R_2)}{\int_i^f}\frac{\text{d}Q}{T}
$$
某个量 $\text{d}Q/T = \text{d}S$ 的积分和路径无关，因此它必须是某个态函数的微分，就有
$$
S_f-S_i = \int_i^f\frac{\text{d}Q}{T}
$$
::: tip

「熵」这个字是胡刚复教授之前在 Planck 教授来中国访问，为他做翻译时临场造出来的字.

:::

到此为止，我们可以对可逆、准静态的过程写出一个 **热力学基本关系**：
$$
\text{d}U = T\text{d}S + \sum_iY_i\text{d}y_i
$$
对于一个可逆过程 $R_1$ 和一个不可逆过程 $R_2$，
$$
\underset{(R_1)}{\int_i^f}\frac{\text{d}Q}{T} \leqslant \underset{(R_2)}{\int_i^f}\frac{\text{d}Q}{T}
$$
它们构成的循环是一个不可逆过程，这个过程造成了熵增 (也就是上式两边移项一下)，如果是绝热的过程，那么直接可以得到 $\text{d}S\geqslant0$，这就是熵增原理. 一般我们表述时，会针对孤立系统来说，因为孤立系统都是绝热的过程 —— 在这个意义上可以说 **孤立系统的熵不减**，这是热力学第二定律的第三种表述 (Kelvin 表述).

/Example/

> 质量相同、温度分别为 $T_1,T_2$ 的两杯水等压绝热混合，求末态熵变.
>
> ---
>
> 末态温度为 $(T_1+T_2)/2$. 用 $T,p$ 作为变量，
> $$
> \text{d}S = \frac{\text{d}U+p\text{d}V}{T} = \frac{\text{d}H}{T} = \frac{C_p\text{d}T}{T}
> $$
> 积分之后得到两杯水分别的熵变，相加
> $$
> \Delta S = C_p\left(\ln\frac{T_1+T_2}{2T_1}+\ln\frac{T_1+T_2}{2T_2}\right)
> $$

对于非绝热过程进行的方向判断，引入两个量，Helmholtz 自由能 $F=U-TS$ 和 Gibbs 自由能 $G=U-TS+pV$.

由熵增原理，可证对于等 $T$ 等 $V$ 过程，$\Delta F\leqslant0$；对于等 $T$ 等 $p$ 过程，$\Delta G\leqslant0$.

特性函数：适当选取自变量，只需一个热力学量就可决定均匀系统的全部热力学性质，这样的函数称为特性函数. 其中最常用的四个是

* $U=U(S,V)$
* $H=H(S,p)$
* $F=F(T,V)$
* $G=G(T,p)$

很多时候会通过 Legendre 变换 $y\text{d}x=\text{d}(xy)-x\text{d}y$ 的方式来切换自变量，使得我们能够做比较方便的计算. 同时利用上述四个热力学基本关系的变体，可以推导出 Maxwell 关系，
$$
\begin{aligned}
\left(\frac{\partial T}{\partial V}\right)_S=-\left(\frac{\partial p}{\partial S}\right)_V,&\quad \left(\frac{\partial S}{\partial V}\right)_T=\left(\frac{\partial p}{\partial T}\right)_V,\\\\
\quad\left(\frac{\partial T}{\partial p}\right)_S=\left(\frac{\partial V}{\partial S}\right)_p,&\quad\left(\frac{\partial S}{\partial p}\right)_T=-\left(\frac{\partial V}{\partial T}\right)_p
\end{aligned}
$$
因为推导时用到了二阶偏导数交换顺序，所以有个要求是二阶导数连续，否则数学上不成立 —— 换成物理来说，就是不能出现相变.

熵的标准全微分 (直接用可观测量表示的熵)，以 $T,V$ 为例，
$$
\text{d}S =\left(\frac{\partial S}{\partial T}\right)_V\text{d}T+\left(\frac{\partial S}{\partial V}\right)_T\text{d}V = \frac{C_V}{T}\text{d}T+\left(\frac{\partial p}{\partial T}\right)_V\text{d}V
$$
对于内能，类似地有能态方程，
$$
\text{d}U = C_V\text{d}T + \left[\left(\frac{\partial p}{\partial T}\right)_VT-p \right]\text{d}V
$$
其中第二项还可以化简，有
$$
C_p-C_V = -T\left(\frac{\partial p}{\partial T}\right)_V^2\left(\frac{\partial V}{\partial p}\right)_T
$$
