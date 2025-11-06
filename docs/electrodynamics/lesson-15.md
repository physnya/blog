---
title: Lesson 15 电磁波
permalink: /electrodynamics/lesson-15-wave/
createTime: 2025/11/06 19:20:38
---
电磁波的方程可以由 Maxwell 方程得到.

但是实际上不同的波长会造成不同的 $\varepsilon$，存在色散关系 $\varepsilon(\omega)$. 因此先来看没有色散关系的真空：
$$
\mu_0\varepsilon_0\frac{\partial^2\vec{E}}{\partial t^2}=\nabla\times\frac{\partial\vec{B}}{\partial t}=-\nabla\times(\nabla\times\vec{E})=-\nabla(\nabla\cdot\vec{E})+\nabla^2\vec{E}=\nabla^2\vec{E}
$$
当在介质中时，
$$
\vec{D}=\vec{D}(\omega)=\varepsilon(\omega)\vec{E}(\omega)\,,\quad\vec{B}=\vec{B}(\omega)=\mu(\omega)\vec{H}(\omega)
$$
真空中的平面波解为
$$
\vec{E}=\vec{E}_0e^{\text{i}(\vec{k}\cdot\vec{x}-\omega t)}
$$
其中 $\vec{k}$ 是波矢，表达了波传播的方向；$\vec{k}\cdot\vec{x}=\text{const.}$ 表征了一个平面，这个平面就是所谓平面波的等相面. 同时为了满足条件 $\nabla\cdot\vec{E}=0$，得到
$$
\vec{k}\cdot\vec{E}_0e^{\text{i}(\vec{k}\cdot\vec{x}-\omega t)}=0
$$
也就是 $\vec{E}_0$ 只能在垂直 $\vec{k}$ (也就是波传播方向)，是为横波. 磁场的波动和电场的波动是相关的，可以得到
$$
\frac{\partial\vec{B}}{\partial t}=-\nabla\times\vec{E}=-\text{i}\vec{k}\times\vec{E}\Longrightarrow\vec{B}=\frac{-\text{i}\vec{k}}{-\text{i}\omega}\times\vec{E}+\vec{B}_1(x,y,z)
$$
其中常数项是某一个全空间存在的静磁场，和电磁波并无关系，所以磁场的波动也能够写成
$$
\vec{B}=\vec{B}_0e^{\text{i}(\vec{k}\cdot\vec{x}-\omega t)}
$$

---

我们无法测量光的相位，只能测量光强，得到能流密度和能量密度为
$$
\braket{w}=\frac{\varepsilon}{2}\vec{E}_0\cdot\vec{E}_0^*\,,\quad \braket{\vec{S}}=\frac{\varepsilon v}{2}(\vec{E}_0\cdot\vec{E}_0^*)\hat{n}
$$
