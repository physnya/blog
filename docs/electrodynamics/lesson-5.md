---
title: Lesson 5 介质中的电磁场
permalink: /electrodynamics/lesson-5-dielectric/
createTime: 2025/09/28 15:41:14
---
从本质上来说介质也是带电粒子的集合体，微观而言和真空中的电磁场没有区别. 但是电磁理论研究的是宏观的电磁场，因此对于介质有特别的理论来描述.

极化：

* 位移极化：无极性的分子在电场作用下正负电荷中心分离，产生宏观的偶极矩；

* 取向极化：有极性的分子在电场作用下偶极矩有序排列，产生宏观的偶极矩.

  (当然并不会所有的分子都取向相同，因为存在热运动)

取向极化比位移极化的效应更强一些.

引进极化强度：
$$
\vec{P}=\frac{\sum_i\vec{p}_i}{\Delta\tau}
$$
经验公式可以描述弱场近似下的一般介质中，极化强度随电场的变化：
$$
\vec{P}=\chi_e\varepsilon_0\vec{E}
$$
这里的电场是 ==已经计算了极化影响之后== 的电场. 当然如果是非线性的介质，就应该有张量形式的 $\chi_e$.

同理可以引入介质的磁化现象，磁化强度
$$
\vec{M}=\frac{\sum_i\vec{m}_i}{\Delta\tau}\,,\quad\vec{M}=\frac{\lambda_H}{\mu_0}\vec{B}
$$
(后一个经验公式也仅仅适用于一般介质)

> 关于磁场和磁矩的储能，只考虑磁场能量时，$U=\vec{m}\cdot\vec{B}$；但是我们要考虑「维持这个磁矩所需要的能量」，在考虑到这些能量之后，变成 $U=-\vec{m}\cdot\vec{B}$.

::: tip

电子具有轨道角动量 $\vec{J}$，那么轨道磁矩是 $\vec{m}$ (沿着 $-\vec{J}$ 方向)，若在空间中存在一个磁场 $\vec{B}$，则这个轨道磁矩受到一个力矩
$$
\vec{M}=\vec{m}\times\vec{B}=\frac{\text{d}\vec{J}}{\text{d}t}
$$
这就是电子轨道角动量的进动，轨道角动量绕着磁场旋转，被称为 Lamor 进动. 进动角动量沿着磁场 $\vec{B}$ 的方向，所以进动磁矩是沿着 $\vec{B}$ 的反方向，这意味着这种物质呈现出反磁性，即沿着磁场的反方向磁化.

---

如果这种物质一开始是无磁性的，分子中还有另一个电子沿着反方向旋转，计算还是会得到沿着 $\vec{B}$ 反方向的进动磁矩，进动磁矩永远是反磁性的. 当然，取向磁化的效应比这样的力学效应要强，所以可以压制这样的力学效果，体现出顺磁性.

如果考虑到量子效应、电子自旋磁矩等等，还有铁磁性的效果.

:::

因为历史上我们把磁化率定义为 $\vec{M}=\chi_m\vec{H}$ 中的 $\chi_m$，所以上面式子中的 $\lambda_H$ 并没有名字.

同时，在电磁波的情况下，不同的频率会对应不同的磁化率与极化率，甚至对于导体，可能会出现复极化率等等.

## 介质中的 Maxwell 方程组

Ohm 定律：$\vec{j}=\sigma\vec{E}$ ($\sigma$ 是电导率). 这个写法是微观的，和电工学上的 Ohm 定律本质上相同.

考虑一个闭合曲面 $S$，对于每一个面元 $\text{d}S$，有一部分偶极子的一半伸出这个面元，所以
$$
\text{d}Q=qn\vec{l}\cdot\text{d}\vec{S}=\vec{p}\cdot\text{d}\vec{S}\Longrightarrow Q=\iint_S\vec{P}\cdot\text{d}\vec{S}
$$
上式是外部的静电量，内部对应的有相反量的电荷，
$$
\iiint_V\rho_P\text{d}\tau=-\iint_S\vec{P}\cdot\text{d}\vec{S}=-\iiint_V(\nabla\cdot\vec{P})\text{d}\tau
$$
所以 $\nabla\cdot\vec{P}=-\rho_P$ ($\rho_P$ 是极化电荷的密度). 而 $\vec{P}=\chi_e\varepsilon_0\vec{E}$，所以有
$$
-\rho_P=\chi_e\varepsilon_0\cdot\frac{\rho_{\text{tot}}}{\varepsilon_0}=\chi_e\rho_{\text{tot}}
$$
总电荷密度、自由电荷密度和极化电荷密度都是正比关系. 再由电荷守恒，
$$
\nabla\cdot\vec{j}_P+\frac{\partial\rho_P}{\partial t}=0\Longrightarrow\nabla\cdot\vec{j}_P=-\frac{\partial\rho_P}{\partial t}=\nabla\cdot\frac{\partial\vec{P}}{\partial t}
$$
这个散度等式在任何地点都要成立，所以原函数相等，
$$
\vec{j}_P=\frac{\partial\vec{P}}{\partial t}
$$
这是极化电流，是介质中位移电流的一个部分.

对于介质的界面而言，可以用 Gauss 定理得到 $\sigma_P=-\hat{n}_{12}\cdot(\vec{P}_2-\vec{P}_1)$ ($\hat{n}_{12}$ 是介质 1 指向介质 2 的法向).

对于磁化，总磁化电流：
$$
\iint_{S}\vec{j}_m\cdot\text{d}\vec{S}=I_m=\oint_L in\vec{a}\cdot\text{d}\vec{l}=\oint_L\vec{M}\cdot\text{d}\vec{l}
$$
于是有
$$
\vec{j}_m=\nabla\times\vec{M}
$$
(磁化电流密度是磁化强度的旋度).



