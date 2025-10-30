---
title: Lesson 13 磁标势
permalink: /electrodynamics/lesson-13/
createTime: 2025/10/30 17:23:51
---
在定义磁标势的情况下，磁场的问题能够和电场的问题对应起来，有
$$
\nabla^2\varphi_m=-\frac{\rho_m}{\mu_0}\,,\quad\nabla\cdot\vec{H}=\frac{\rho_m}{\mu_0}
$$
对于有磁介质存在的情况，$\vec{H}$ 和 $\vec{B}$ 存在边界条件，
$$
\hat{n}_{12}\cdot(\vec{B}_2-\vec{B}_1)=0\,,\quad\hat{n}_{12}\times(\vec{H}_2-\vec{H}_1)=\vec{\alpha}_m
$$
边界上存在面电流时，按理来说不应该转化为磁荷法来计算，但是有时边界能够分割出两个部分，两个空间部分分别能够用磁荷法，两边用边界条件进行连接，比如：一个面密度为 $\sigma$ 的均匀球面，绕着某一条直径以速度 $\omega$ 旋转.

磁荷法的边界条件写成：
$$
\frac{\partial\varphi_{m1}}{\partial\theta}+\frac{\partial\varphi_{m2}}{\partial\theta}=\alpha_m
$$
上面讲到的那个例子和在均匀电场中被均匀极化的小球非常相似，都是外场为严格偶极场、内场为严格均匀场.


磁标势更多地运用于讨论铁磁体产生的磁场 (全空间没有传导电流)，但是铁磁体的磁化强度 $\vec{M}$ 和磁场强度 $\vec{H}$ 的依赖关系比较复杂，$\vec{M}$ 和磁化过程有关系 (磁滞回线). 一般考虑已知 $\vec{M}$ 的永磁体 (硬铁磁质) 或者磁导率很大的软铁磁质 (一般用作引导磁场的材料，比如变压器).

如果电流分布集中于一个小区域，那么和电场类似，也可以展开为多极：
$$
\vec{A}(\vec{x})=\frac{\mu_0}{4\pi}\int_V\frac{\vec{j}(\vec{x}')}{r}\text{d}\tau'=\frac{\mu_0}{4\pi}\int_V\vec{j}(\vec{x}')\left[\frac{1}{R}-\vec{x}'\cdot\nabla\frac{1}{R}+\frac{1}{2!}\vec{x}\vec{x}:\nabla\nabla\frac{1}{R}+\cdots\right]
$$
展开式的第二项为
$$
\vec{A}^{(1)}(\vec{x})=-\frac{\mu_0}{4\pi}\nabla_j\frac{1}{R}\int_V\vec{j}(\vec{x}')x_j'\text{d}\tau'
$$
这是因为，并矢 $\vec{j}(\vec{x}')x_l$ 能够写成对称部分和反对称部分，一个矢量点乘反对称并矢可以化为一组矢量双叉乘，进行化简.

