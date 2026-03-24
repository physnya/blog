---
title: Lesson 8 近独立子体系分布
createTime: 2026/03/20 09:44:30
permalink: /statistical-mechanics/lesson-8-independent-particle-distribution/
---
单粒子的量子态用波函数来描述，定态满足 Schrödinger 方程，
$$
\hat{H}\psi(\vec{x}) = \varepsilon\psi(\vec{x})
$$
复习一下简单的量子力学. 一维无限深势阱的能级是
$$
\varepsilon_n = \frac{n^2h^2}{8mL^2},\quad n=1,2,3,\cdots
$$
这里的简并度 $\omega_n=1$. 这个问题实际上并不需要解方程，只从边界条件和 Fourier 变换就能知道结果. 从数值上讨论一下这个能级差的大小，我们取典型量 $L\sim10^{-2}\text{ m}$，$m_p = 1.67\times10^{-27}\text{ kg}$ (质子质量)，计算出 $\Delta\varepsilon_n\sim10^{-36}\text{ J}$，这个能量远远小于热运动能量 $k_BT\sim10^{-21}\text{ J}$，因此我们不需要在求解气体的时候解 Schrödinger 方程. 当然，全同粒子的假设还在，而且 Pauli 不相容原理仍然需要考虑，并不意味着我们像 Boltzmann 积分微分方程一样完全进入经典统计.

另一个例子是谐振子，
$$
\frac{\text{d}^2x}{\text{d}t^2} = -\frac{K}{m}x,\quad \omega^2=\frac{K}{m}
$$
它的解法我们略去，简并度仍然是 $\omega_n=1$，能级是 $\hbar\omega(n+1/2)$.

转子：
$$
H = -\frac{\hbar^2}{2I}\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]
$$
能级为 $\hbar^2/2I\cdot l(l+1)$，简并度 $\omega_l=2l+1$.

---

粒子按量子态的一个分配方式，称为系统的一个微观状态；粒子按能级的一个分布称为系统的一个宏观状态. 分布与微观态不同，每一组分布对应大量不同的微观状态.

已一个自旋系统为例，三个原子，核自旋可以朝上或者朝下且外加一个磁场 $H$. 这里一共有 $8$ 种可能的微观态，但是只有 $4$ 种可能的能量，例如固定宏观态为能量 $-\mu H$ 的态，那么对应着 $3$ 种不同的微观态.

Boltzmann 等几率假设：处平衡态的孤立系统，各可能微观状态出现的几率相等.

现在对于一个全同的近独立粒子体系，$(N,V,E)$ 确定，来计算分布 $\{a_i\}$ 所包含的微观状态数 $\Omega\{a_i\}$.
$$
\Omega\{a_i\} = \prod_i\Omega_i
$$
其中 $\Omega_i$ 是 $a_i$ 粒子占据 $\varepsilon_i$ 上 $\omega_i$ 个态的方式数. 当然这里的计算要区分 Boltzmann 统计、Bose 统计和 Fermi 统计.

Bose 统计：将 $a_i$ 个粒子放在一排，然后把 $\omega_i$ 个量子态作为「隔板」放在中间，第一个量子态必须放在第一个位置 (在量子态右边的粒子视为处在这个量子态，这只是方便理解的「隔板法」)，剩下的量子态是任意放置的. 因此就是在 $a_i$ 个空位上放 $\omega_i-1$ 个「隔板」，也就得到微观状态数
$$
\Omega_i = C_{a_i}^{\omega_i-1} = \frac{(a_i+\omega_i-1)!}{a_i!(\omega_i-1)!},\quad \Omega_B(\{a_i\}) = \prod_i\frac{(a_i+\omega_i-1)!}{a_i!(\omega_i-1)!}
$$
Fermi 统计：从 $\omega_i$ 个量子态中挑选 $a_i$ 个来让粒子占据，也就是
$$
\Omega_i = C_{\omega_i}^{a_i} = \frac{\omega_i!}{a_i!(\omega_i-a_i)!},\quad \Omega_F(\{a_i\}) =\prod_i\frac{\omega_i!}{a_i!(\omega_i-a_i)!}
$$
定义平衡态分布为出现几率最大的那一种分布，同时利用等几率假设，也就是 $\{a_i\}$ 这个分布出现的几率 $\propto\Omega(\{a_i\})$，这种对平衡态分布的估计称为最可几分布. 对于 Bose 统计，
$$
\begin{aligned}
\ln\Omega_B(\{a_i\}) &\approx \sum_i[(a_i+\omega_i-1)\ln(a_i+\omega_i-1)-a_i\ln a_i-(\omega_i-1)\ln(\omega_i-1)]\\\\
&\approx\sum_i\left[a_i\ln\left(1+\frac{\omega_i}{a_i}\right)+\omega_i\ln\left(1+\frac{a_i}{\omega_i}\right)\right]
\end{aligned}
$$
利用 Lagrange 乘子法，约束是 $N=\sum_ia_i$ 和 $E=\sum_ia_i\varepsilon_i$.
$$
\frac{\partial\ln\Omega_B}{\partial a_i}+\alpha\cdot\frac{\partial\displaystyle{\left[N-\sum_ia_i\right]}}{\partial a_i} + \beta\cdot\frac{\partial\displaystyle{\left[E-\sum_ia_i\varepsilon_i\right]}}{\partial a_i} = 0
$$
解得
$$
a_i = \frac{\omega_i}{e^{\alpha+\beta\varepsilon_i}-1}
$$
这正是 Bose-Einstein distribution.

对于 Fermi 分布也是一样，用 Stirling 公式近似后得到
$$
\ln\Omega_F(\{a_i\})\approx\sum_i\left[a_i\ln\left(\frac{\omega_i}{a_i}-1\right)-\omega_i\ln\left(1-\frac{a_i}{\omega_i}\right)\right]
$$
也用 Lagrange 乘子法，最终解得
$$
a_i = \frac{\omega_i}{e^{\alpha+\beta\varepsilon_i}+1}
$$
这是 Fermi-Dirac distribution.