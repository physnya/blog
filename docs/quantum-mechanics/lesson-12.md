---
title: Lesson 12 高维的 Schrödinger 方程
permalink: /quantum-mechanics/lesson-12/
createTime: 2025/10/29 15:06:18
---
如果某一个态是 $\ket{\psi}$，那么它可以被投影到不同的表象空间. 这样的态叫做纯态. 什么是混态？

> 混态是纯态加上一些其他的自由度，比如一个偷偷观测这个粒子的某一个自由度.
>
> 这样我们能够写出一个更大的纯态，包含这些其他自由度.

## 高维的 Schroödinger 方程

三维情况下，Hamiltonian 写成
$$
H=\frac{p_x^2+p_y^2+p_z^2}{2m}+V_x+V_y+V_z
$$
比较好的情况是能够分离变量，也就是 $\psi(x,y,z)=\phi_x(x)\phi_y(y)\phi_z(z)$，得到三个方向上的方程，这里的 $E$ 分为 $E_x,E_y,E_z$，Hamiltonian 分解为
$$
\hat{H}_i=\frac{\hat{p}_x^2}{2m_x}+\frac{1}{2}m_x\omega^2x^2
$$
三维的方程写成
$$
\text{i}\hbar\frac{\partial\Psi}{\partial t}=\left[-\frac{\hbar^2}{2m}\nabla^2+V\right]\Psi
$$
在球坐标下，
$$
\nabla^2=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
$$
像数理方程一样，分离变量. 对于方位角 $\phi$ 的本征方程，为
$$
\frac{1}{\Phi}\frac{\text{d}^2\Phi}{\text{d}\phi^2}=-m^2
$$
得到角向的波函数是 $\Phi=e^{\text{i}m\phi}$. 而 $\theta$ 的本征函数是 Legendre 多项式，得到
$$
\Theta(\theta)=AP_l^m(\cos\theta)
$$
其中，
$$
P_l(x)=\frac{1}{2^l\cdot l!}\left(\frac{\text{d}}{\text{d}x}\right)^l(x^2-1)^l
$$
