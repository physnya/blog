---
title: Lesson 22 微扰论
permalink: /quantum-mechanics/lesson-22-perturbation/
createTime: 2025/12/08 15:07:58
---
接着上节课来说非简并微扰. 实际上非简并是一种非常特殊的情况，在实际的固体中大多数系统都是简并的，能级的分布反映出这个系统的很多内禀力学 (或者电磁学) 特性.

一阶波函数
$$
|n\rangle \approx |n^{(0)}\rangle+\lambda\sum_{m\neq n}\frac{\langle m^{(0)}|H'|n^{(0)}\rangle}{E_n^0-E_m^0}|m^{(0)}\rangle
$$
波函数只有一阶准确的时候，可观测量的准确程度可以达到二阶，因为要取模方. 上述波函数修正中，只有相邻的几个能级才有可观的效应，否则分母太大，效果变得微弱.

/Example/

> 加入一个微弱电场的谐振子.
>
> ---
>
> 我们知道微扰 Hamiltonian 为
> $$
> \langle m|H'|n\rangle = -qE\langle m|x|n\rangle
> $$
> 直接用上面的一阶微扰修正就可以了，波函数整体向电场方向平移，并且产生一点形变.

## 简并微扰

简并会导致：
$$
\frac{\langle m^{(0)}|H'|n^{(0)}\rangle}{E_n^0-E_m^0}|m^{(0)}\rangle
$$
的分母变成零，这一项极端重要，因此需要额外处理. 因为简并的态是相互平等的，所以它们的波函数地位相同，有
$$
(H_0+H')(\psi^{(0)}+\psi^{(1)}+\cdots)=(E_0+E^{(1)}+\cdots)(\psi^{(0)}+\psi^{(1)}+\cdots)
$$
定义矩阵元 $W_{ij}\equiv\langle\psi_i^{(0)}|H'|\psi_j^{(1)}\rangle$，久期方程：
$$
\det(W-E^{(1)}I)=0
$$
得到不同的那些本征值 $E_1^{(1)},E_2^{(2)},\cdots$，也就是 $H_0$ 无法区分的那些能级可以被 $H'$ 区分开来.

/Example/

> 考虑一个三维盒子
> $$
> V(x,y,z)=\left\{\begin{aligned}
> &0,\quad 0<x<a,\quad 0<y<a,\quad 0<z<a\\\\
> &\infty,\quad\text{otherwise}
> \end{aligned}\right.
> $$
> 现在把 $0<x<a/2$，$0<y<a/2$ 的区域的势能换成 $V_0$，做微扰. 三重简并：
> $$
> E_{211}=E_{121}=E_{112}
> $$
> 矩阵为
> $$
> W=\frac{V_0}{4}\begin{pmatrix}
> 1&0&0\\0&1&\kappa\\0&\kappa&1
> \end{pmatrix},\quad \kappa=\left(\frac{8}{3\pi}\right)^2
> $$

## 精细结构

氢原子的相对论效应，
$$
\Delta E = -\frac{p^4}{8m^3c^2}=H'
$$
因为 $p^2$ 是 Hermitian 算符，可以拆开前面后面分别作用一个：
$$
E^{(1)} = \left\langle-\frac{p^2}{8m^3c^2}\right\rangle=-\frac{1}{8m^3c^2}\langle p^2\psi|p^2\psi\rangle
$$
而 $p^2\psi=2m(E-V)\psi$.