---
title: Lesson 20 多电子原子 & 固体
permalink: /quantum-mechanics/lesson-20/
createTime: 2025/12/01 23:32:31
---
我们来讲原子.

原子中有很多电子，所以波函数应该满足交换任意两个电子都改变一个符号，
$$
\begin{aligned}
&\Psi_{\text{total}}(\vec{r}_1,\cdots,\vec{r}_Z;s_1,\cdots,s_Z)=\psi(\vec{r}_1,\cdots,\vec{r}_Z)\chi(s_1,\cdots,s_Z)\\\\
&\Psi_{\text{total}}(\cdots i\leftrightarrow j\cdots) = -\Psi_{\text{total}}
\end{aligned}
$$
Hamiltonian：(这是做了近似，认为核是一个没有自旋、质量无限大的正点电荷)
$$
H=\sum_{j=1}^Z\left[-\frac{\hbar^2}{2m}\nabla_j^2-\left(\frac{1}{4\pi\varepsilon_0}\right)\frac{Ze^2}{r_j}\right]+\frac{1}{2}\left(\frac{1}{4\pi\varepsilon_0}\right)\sum_{j<k}\frac{e^2}{|\vec{r}_j-\vec{r}_k|}
$$
后面有交叉项，表征电子之间的相互排斥. 实际上只要 $Z=2$ 以上，就没办法得到严格解，换句话说这是一个原子核和两个电子的三体问题. 为了能够得到一个近似的解，我们强行拆开最后那一项，做平均场近似.

以 Helium 为例，在两体相互作用前面加上一个系数 $\alpha\in(0,1)$，考察 $\alpha\to0$ 的渐近行为 —— 这实际上就是求一个 $Z=2$ 的氢原子. 在这种近似下，
$$
\psi_0(\vec{r}_1,\vec{r}_2)=\psi_{100}^{(Z=2)}(\vec{r}_1)\psi_{100}^{(Z=2)}(\vec{r}_2)=\frac{Z^3}{\pi a^3}e^{-Z(r_1+r_2)/a}
$$
这种「类氢原子基态」近似，得到的能量是 $-109\text{ eV}$，误差大概是 $20\%$，实际上还是挺接近真实值的. 继续做激发态，考虑某一个电子到了 $nlm$ 的激发态，有两种不同的波函数.

如果两个电子是 singlet (自旋单态)，则波函数是反对称的，
$$
\psi_{\text{para}} = \frac{1}{2}(\uparrow\downarrow-\downarrow\uparrow)
$$
称为 parallel Helium；反之为对称波函数，orthonogonal Helium.

---

Helium 是最简单的多电子原子，对于更多电子的原子，我们也可以做类氢的近似，这也是所谓 $s$ 轨道 $p$ 轨道等等的来源. 但是多电子原子会出现屏蔽，实际上的轨道分布、形状等和氢原子还是不太一样，有所谓的 Aufbau Rule.

光谱学记号：实际上就是高中化学学过的那些，$(1s)^2(2s)^2(2p)^6$ 等等.

---

来说固体 (solids).

::: warning

说实话我也不知道他怎么今天讲这么快.

:::

Sommerfield 提出了自由电子气模型，虽然近似不够精确，但是给出了很多符合实验结果的内容，这意味着这种非常粗略的模型抓住了固体的一些本质. 实际上这种近似同时忽略了电子之间的排斥和电子与原子之间的吸引力.

Bloch 改进了上述固体模型，提出能带理论.

因为近似所有电子之间没有相互作用，那么我们只需要研究一个巡游电子在整个固体中的运动. 然后就是 Fermi 统计和我们所熟知的固体热容理论等等. 认为一个原子贡献 $q$ 个电子，总态数
$$
Nq = 2N_{\text{states}} = \frac{2V}{3\pi^2}k_F^2
$$
(认为温度很低的时候，能级从最低能级开始填，到 Fermi 能为止.) 可以算出电子简并压：
$$
P = -\frac{\text{d}E_{\text{tot}}}{\text{d}V} = (3\pi^2)^{2/3}\frac{\hbar^2}{5m}\rho^{5/2}
$$
