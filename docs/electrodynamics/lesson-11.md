---
title: Lesson 11 静磁场
permalink: /electrodynamics/lesson-11-magnetics/
createTime: 2025/10/23 15:24:30
---
$$
\varphi(x) = \frac{1}{4\pi\varepsilon}\frac{Q}{R}+\frac{1}{4\pi\varepsilon}\frac{\vec{p}\cdot\vec{x}}{R^3}+\frac{1}{4\pi\varepsilon}\frac{\overset\twoheadrightarrow{D}:\vec{x}\vec{x}}{2R^5}+\cdots
$$

电荷体系在外场中的能量：能量为
$$
W=\int_V\rho(\vec{x})\varphi_e(\vec{x})\text{d}\tau
$$
如果电荷体系 $\rho$ 仅仅分布在外场中的一个小区域，那么这里的 $\varphi_e$ 也可以利用多极展开，得到
$$
\varphi_e(\vec{x})=\varphi_e(0)+(\vec{x}\cdot\nabla)\varphi_e(0)+\frac{1}{2!}(\vec{x}\vec{x}:\nabla\nabla)\varphi_e(0)+\cdots
$$
能量展开为
$$
W = W^{(0)}+W^{(1)}+W^{(2)}+\cdots
$$
展开式的第三项：
$$
W^{(2)} = \int_V\rho(\vec{x})\cdot\frac{1}{2!}(\vec{x}\vec{x}:\nabla\nabla)\varphi_e(0)\text{d}\tau=\frac{1}{6}\overset{\twoheadrightarrow}{D}:\nabla\nabla\varphi_e(0)=-\frac{1}{6}\overset{\twoheadrightarrow}{D}:\nabla\vec{E}_e(0)
$$
而我们已经熟知第二项是 $-\vec{p}\cdot\vec{E}$ 的势能.

用虚功原理求电偶极子在外场中的受力：
$$
\frac{\Delta(-\vec{p}\cdot\vec{E})}{\Delta x}=-(\vec{p}\cdot\nabla)\vec{E}
$$
这里的含义是，在均匀场中电偶极子不会受到合力，在不均匀的场中才可能有受力. 如果虚功原理做的是微小的角位移，则得到力矩为
$$
\frac{\Delta(-\vec{p}\cdot\vec{E})}{\Delta \theta}=\vec{M}\Longrightarrow\vec{M}\cdot\delta\hat{\theta}=(\delta\hat{\theta}\times\vec{p})\cdot\vec{E} = (\vec{p}\times\vec{E})\cdot\delta\hat{\theta}\Longrightarrow\vec{M}=\vec{p}\times\vec{E}
$$

## 静磁场

我们的要求是，电流的分布永远不随时间发生变化，也就是
$$
\nabla\cdot\vec{j}=-\frac{\partial\rho}{\partial t}=0
$$
可以用矢势来确定磁场的分布
$$
\vec{B}=\nabla\times\vec{A}
$$
矢势具有很大的任意性，可以相差任意一个标量函数的梯度. 所以我们需要取特定规范条件来制约 $A$，这里我们先取 Coulomb 规范：
$$
\nabla\cdot\vec{A}=0
$$
来证明一定能够找到这样的 $A$：

> 如果存在一个 $A$ 使得 $\vec{B}=\nabla\times\vec{A}$ 但是不满足 Coulomb 规范，则应该有
> $$
> \nabla\cdot\vec{A}=u\neq0
> $$
> 我们可取另一个解为
> $$
> \vec{A}'=\vec{A}+\nabla\psi
> $$
> 其中 $\psi$ 为 Poisson 方程 $\nabla^2\psi=u$ 的某个解，这时 $\vec{A}'$ 就满足规范条件.