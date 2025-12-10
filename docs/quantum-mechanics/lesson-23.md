---
title: Lesson 23 Zeeman Effect
permalink: /quantum-mechanics/lesson-23-Zeeman-effect/
createTime: 2025/12/10 15:05:33
---
> 「二十年前我认识了一个在 Coca Cola 公司做光谱的化学家，他们做质量检测的方式就是用光谱来做，这样能够不消耗样品.」

加一个均匀的磁场，造成一个额外的 Hamiltonian $H'_Z=-(\vec{\mu}_1+\vec{\mu}_2)\cdot\vec{B}_{\text{ext}}$ (分别是轨道角动量和自旋角动量产生的磁矩).
$$
H_Z'=\frac{e}{2m}(\vec{L}+2\vec{S})\cdot\vec{B}_{\text{ext}}
$$
轨道角动量和自旋角动量的旋磁比相差两倍，$e/2m$ 记为 $\mu_B$ (Bohr 磁子). 对于 $\vec{B}_{\text{ext}}$ 沿着 $z$ 方向的情况，写成 $H_Z'=\mu_B(L_z+2S_z)B_{\text{ext}}$.
$$
E_Z' = \langle nljm_j|(L+2S)\cdot B_{\text{ext}}|nljm_j\rangle
$$
总角动量 $J=L+S$，用 $J$ 和 $S$ 表示 $L$ 为
$$
L^2=J^2+S^2-2J\cdot S\Longrightarrow (L+2S)_z=\left(1+\frac{S\cdot J}{J^2}\right)J
$$
这个系数 $1+S\cdot J/J^2\equiv g_J$ 称为 Landé $g$-factor，
$$
g_J=1+\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}
$$

---

氢原子的超精细结构：其中一种是同位素效应，氘和氚都谱线和氢有一定的差异；另一种来源于四极矩. 这些都是比较难算的效应，但是磁偶极相互作用的效应是我们今天必须要讲的.

势能
$$
V(\vec{r}_1-\vec{r}_2)=\frac{1}{4\pi\varepsilon_0}\cdot\frac{\vec{d}_1\cdot\vec{d}_2-3(\hat{r}\cdot\vec{d}_1)(\hat{r}\cdot\vec{d}_2)}{r^3}
$$
电子和质子的磁偶极有如上的相互作用. 相互作用的 Hamiltonian 写成 $A\mathbf{I}\cdot\mathbf{S}$ (质子和电子自旋的积)，这个写法和上面的势能不一样.

---

含时微扰：$H(t)=H_0+H'(t)$.