---
title: Lesson 25 电磁场变换
permalink: /electrodynamics/lesson-25/
createTime: 2025/12/11 15:08:35
---
固有时间：
$$
\text{d}\tau = -\frac{1}{c^2}\text{d}x_\mu\text{d}x^\mu
$$
四维微商算符：
$$
\partial_\mu\equiv\left(\nabla,\frac{1}{\text{i}c}\frac{\partial}{\partial t}\right)
$$
四维速度定义为
$$
U_\mu\equiv\gamma\left(\vec{v},\text{i}c\right)
$$
由四维的微商算符，可以定义 d'Alembert 算符，
$$
\Box^2\equiv\partial_\mu\partial^\mu = \nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}
$$
引入四维电流和四维磁矢势，
$$
j_\mu\equiv(\vec{j},\text{i}c\rho),\quad A_\mu\equiv\left(\vec{A},\frac{\text{i}\varphi}{c}\right)
$$
则电荷守恒和 Lorentz 规范分别写为
$$
\partial^\mu j_\mu=0,\quad\partial^\mu A_\mu=0
$$
电磁学基本规律可以合并：
$$
\nabla^2\varphi-\frac{1}{c^2}\frac{\partial^2\varphi}{\partial t^2}=-\frac{\rho}{\varepsilon_0},\quad\nabla^2\vec{A}-\frac{1}{c^2}\frac{\partial^2\vec{A}}{\partial t^2}=-\mu_0\vec{j}\Longrightarrow \Box^2A_\mu = -\mu_0j_\mu
$$
因为电磁场场量和势之间满足关系
$$
\vec{E} = -\nabla\varphi-\frac{\partial\vec{A}}{\partial t},\quad \vec{B}=\nabla\times\vec{A}
$$
引入一个反对称二阶张量 $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$，可以很好地描述电磁场场量：
$$
F_{\mu\nu}=\begin{pmatrix}
0&B_z&-B_y&-\text{i}E_x/c\\
-B_z&0&B_x&-\text{i}E_y/c\\
B_y&-B_x&0&-\text{i}E_z/c\\
\text{i}E_x/c&\text{i}E_y/c&\text{i}E_z/c&0
\end{pmatrix}
$$
电磁场张量的变换为
$$
F'_{\alpha\beta} = L^{\mu}_{\,\,\alpha}L^{\nu}_{\,\,\beta}F_{\mu\nu}
$$
在三维形式下，我们可以写成：
$$
\left\{\begin{aligned}
&E_x'=E_x\\\\
&E_y'=\gamma(E_y-vB_z)\\\\
&E_z'=\gamma(E_z+vB_y)
\end{aligned}\right.,\quad \left\{\begin{aligned}
&B_x'=B_x\\\\
&B_y'=\gamma\left(B_y+\frac{v}{c^2}E_z\right)\\\\
&B_z'=\gamma\left(B_z-\frac{v}{c^2}E_y\right)
\end{aligned}\right.
$$
矢量形式写成
$$
\begin{aligned}
&\vec{E}' = \gamma(\vec{E}+\vec{v}\times\vec{B})-\frac{\gamma^2}{\gamma+1}\frac{\vec{v}}{c}\left(\frac{\vec{v}}{c}\cdot\vec{E}\right)\\\\
&\vec{B}' = \gamma\left(\vec{B}-\frac{\vec{v}\times\vec{E}}{c^2}\right)-\frac{\gamma^2}{\gamma+1}\frac{\vec{v}}{c}\left(\frac{\vec{v}}{c}\cdot\vec{B}\right)
\end{aligned}
$$
由此，利用 Lorentz 公式可以引入四维力密度：
$$
f_\mu = \left(\rho\vec{E}+\vec{j}\times\vec{B},\frac{\text{i}}{c}W\right)
$$
