---
title: Lesson 18 辐射
permalink: /electrodynamics/lesson-18-radiation/
createTime: 2025/11/18 11:27:17
---
在波导中的电磁波：
$$
\begin{aligned}
&E_x=A_1\cos k_xx\sin k_yy\cdot e^{\text{i}(k_zz-\omega t)}\\\\
&E_y=A_2\cos k_yy\sin k_xx\cdot e^{\text{i}(k_zz-\omega t)}\\\\
&E_z=A_3\sin k_xx\sin k_yy\cdot e^{\text{i}(k_zz-\omega t)}
\end{aligned}
$$

$$
\begin{aligned}
&B_x=-\frac{1}{\omega}[A_2k_z+\text{i}A_3k_y]\sin k_xx\cos k_yy\cdot e^{\text{i}(k_zz-\omega t)}\\\\
&B_y=-\frac{1}{\omega}[A_1k_z+\text{i}A_3k_x]\cos k_xx\sin k_yy\cdot e^{\text{i}(k_zz-\omega t)}\\\\
&B_z=-\frac{1}{\omega}[A_2k_x-A_1k_y]\cos k_xx\cos k_yy\cdot e^{\text{i}(k_zz-\omega t)}
\end{aligned}
$$

可以定出横电波和横磁波的条件.

在波导管中选择尽量简单的模式，可以保证在我们开孔检测内部电磁场的情况下不影响波的传播 (不会阻断其中的电流，因为电流只会沿着某个方向传递).

## 辐射

把 Faraday 定律改写成
$$
\nabla\times\vec{E} = -\nabla\times\frac{\partial\vec{A}}{\partial t}
$$
移项，发现可以构造一个矢量 $\vec{E}+\partial\vec{A}/\partial t$，为一个无旋场. 这意味着这个矢量能够被表达为某个标量场的梯度，我们说这个标量场也叫做 $\varphi$，那么
$$
\vec{E}=-\nabla\varphi-\frac{\partial\vec{A}}{\partial t}
$$
注意，这里的 $\varphi$ 不能和原来静电场中的那个电势等同，这是用来做电磁波辐射计算时引入的「电势」.

规范变换：
$$
\left\{\begin{aligned}
&\vec{A}\to\vec{A}'=\vec{A}+\nabla\psi\\\\
&\psi\to\psi'=\psi-\frac{\partial\psi}{\partial t}
\end{aligned}\right.
$$
因此，物理上可测量的量是在规范变换下不变的，但是为了保证我们能够唯一地确定两个数学辅助量电势、磁矢势的值，必须要引入规范条件.

* Coulomb 规范：
  $$
  \nabla\cdot\vec{A}=0
  $$

* Lorentz 规范：
  $$
  \nabla\cdot\vec{A}+\frac{1}{c^2}\frac{\partial\varphi}{\partial t}=0
  $$
  这个规范能够把方程化为对称形式.

在 Lorentz 规范下，势和源的依赖关系是
$$
\nabla^2\varphi-\frac{1}{c^2}\frac{\partial^2\varphi}{\partial t^2}=-\frac{\rho}{\varepsilon_0},\quad \nabla^2\vec{A}-\frac{1}{c^2}\frac{\partial^2\vec{A}}{\partial t^2}=-\mu_0\vec{j}
$$
LHS 均为 d'Alembert 算符作用，所以势也存在波动解.

考虑一个随时间变化的点电荷 $Q(t)$，那么方程为
$$
\nabla^2\varphi-\frac{1}{c^2}\frac{\partial^2\varphi}{\partial t^2}=-\frac{1}{\varepsilon_0}Q(t)\delta(\vec{x})
$$
在非 $\vec{x}=0$ 的位置就是波动方程.