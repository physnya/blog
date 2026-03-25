---
title: Lesson 9 微观量与宏观量的联系
createTime: 2026/03/25 11:26:23
permalink: /statistical-mechanics/lesson-9/
---
半经典的分布：取基态能量为零，对于一个比较高的能级，$e^{\beta\varepsilon_i}\gg1$ 且 $e^\alpha\gg1$，取极限之后得到类似 Boltzmann 分布的半经典分布，
$$
a_i = \omega_i e^{-\alpha-\beta\varepsilon_i}
$$
这种近似意味着 $a_i/\omega_i\ll1$，也就是所谓的非简并条件，相当于波函数的作用不明显，适用于稀薄气体等体系. 半经典分布的热力学几率为
$$
\ln\Omega_S\{a_i\} = \sum_i\ln\frac{\omega_i^{a_i}}{a_i!}
$$
最可几分布方法，是在最可能出现的分布附近 Taylor 展开 $\ln\Omega$，判断偏差：
$$
\ln\frac{\Omega(\{a_i\})}{\Omega(\{a_i\}_m)} \approx-\frac{1}{2}\sum(a_i)_m\left[\frac{\delta a_i}{(a_i)_m}\right]^2,\quad \delta a_i=(a_i)_m-a_i
$$
以 $1\text{ mol}$ 物质为例，这里的 RHS 大约是 $10^{15}$，而 LHS 还仅仅是对数. 所以基本上不会出现最可几分布之外的分布.

---

下面讨论 $\alpha,\beta$ 的物理意义. 考虑两个近独立粒子系统组成一个复合系统，并达到了总的平衡. 那么总的分布的热力学几率为
$$
\ln\Omega_s\{a_i',a_j''\} = \prod_i\frac{(\omega_i')^{a_i'}}{a_i'!}\prod_j\frac{(\omega_j'')^{a_j''}}{a_j''!}
$$
同时要求无粒子交换，但是有热量交换，也就有三个约束条件：
$$
N'=\sum_ia_i',\quad N''=\sum_ja_j'',\quad E=\sum_ia_i'\varepsilon_i'+\sum_ja_j''\varepsilon_j''
$$
把三个条件并入 Lagrange 函数，用 Lagrange 乘子法，得到
$$
\begin{aligned}
&\frac{\partial\ln\Omega}{\partial a_{i_1}'}+\alpha'\frac{\partial\displaystyle{\left(N'-\sum_ia_i'\right)}}{\partial a_{i_1}'}+\alpha''\frac{\partial\displaystyle{\left(N''-\sum_ja_j''\right)}}{\partial a_{i_1}'}\\\\
&\quad +\beta\frac{\partial\displaystyle{\left(E-\sum_ia_i'\varepsilon_i'-\sum_ja_j''\varepsilon_j''\right)}}{\partial a'_{i_1}} = 0
\end{aligned}
$$
另一个系统类似，得到 $a_i'=\omega_i'e^{-\alpha'-\beta\varepsilon'_i}$ 和 $a_j''=\omega_j''e^{-\alpha''-\beta\varepsilon_j''}$，这两个分布中的 $\beta$ 相同，因此 $\beta$ 应该是和温度有关的一个函数，也就是 $\beta=\beta(T)$. 同理，可以令两个系统之间有粒子数交换和能量交换，得到 $\alpha = \alpha(\mu,T)$.

> 为什么不能只有粒子数交换，没有能量交换？
>
> 这是不物理的，交换粒子就必定交换能量.

---

可分辨粒子体系的 Boltzmann 分布：对于定域系统适用，这时可以对粒子做标记来区分，条件仍然是粒子数和能量守恒. 微观状态数：
$$
\Omega\{a_i\} = (C_N^{a_1}\cdot\omega_1^{a_1})(C_{N-a_1}^{a_2}\cdot\omega_2^{a_2})\cdots = \frac{N!}{\displaystyle{\prod_ia_i!}}\prod_i\omega_i^{a_i} = N!\prod_i\frac{\omega_i^{a_i}}{a_i!}
$$
和半经典分布的微观状态数实际上就只相差一个 $N!$，宏观量会有差别，但是最可几分布不会有变化. 为了计算宏观量，先计算配分函数
$$
Z(\beta,y) \equiv \sum_i\omega_ie^{-\beta\varepsilon_i}
$$
各个宏观量分别为：

* $\alpha$：粒子数
  $$
  N = \sum_ia_i = e^{-\alpha}\sum\omega_ie^{-\beta\varepsilon_i} = e^{-\alpha}Z\Longrightarrow\boxed{\alpha = \ln\frac{Z}{N}}
  $$

* 内能 $U$：
  $$
  U = \sum_ia_i\varepsilon_i = -N\frac{\partial\ln Z}{\partial\beta}
  $$

  > 这里用到经典的求和技巧...

* 物态方程与熵：考虑微分上面内能的微观表达式，
  $$
  \text{d}U = \sum_ia_i\text{d}\varepsilon_i+\sum_i\varepsilon_i\text{d}a_i
  $$
  也就是内能的改变包含能级的改变与占据数的改变. 改变能级必须通过做功的方式，而不通过做功改变能量只能通过传热. 因此我们有做功
  $$
  \mathrm{d}\kern{-4.3pt}\bar{\small\phantom{q}}W = \sum_kY_k\text{d}y_k = \sum_ia_i\text{d}\varepsilon_i = \sum_ia_i\left(\sum_k\frac{\partial\varepsilon_i}{\partial y_k}\text{d}y_k\right)
  $$
  得到广义力的表达式
  $$
  Y_k = -\frac{N}{\beta}\frac{\partial\ln Z}{\partial y_k}
  $$
  以及传热
  $$
  \mathrm{d}\kern{-4.3pt}\bar{\small\phantom{q}}Q =T\text{d}S=\sum_i\varepsilon_i\text{d}a_i = \text{d}U-\sum_ia_i\text{d}\varepsilon_i = -N\text{d}\left(\frac{\partial\ln Z}{\partial\beta}\right)+\frac{N}{\beta}\sum_k\frac{\partial\ln Z}{\partial y_k}\text{d}y_k
  $$
  利用 $\ln Z=\ln Z(\beta,y_k)$ 的全微分得到
  $$
  \text{d}S = \frac{N}{\beta T}\text{d}\left(\ln Z-\beta\frac{\partial\ln Z}{\partial\beta}\right)
  $$
  为了能够积分出 $S$，RHS 必须是一个全微分，因此定义 $\beta=1/(k_BT)$，得到熵
  $$
  S-S_0 = Nk_B\left(\ln Z-\beta\frac{\partial\ln Z}{\partial\beta}\right)
  $$

Boltzmann 关系：
$$
S = k_B\ln\Omega(\{a_i\})
$$
