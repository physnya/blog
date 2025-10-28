---
title: Lesson 12 静磁场
permalink: /electrodynamics/lesson-12-magnetic-field/
createTime: 2025/10/28 11:28:19
---
这节课讲静磁场.

静磁场满足的方程类似静电场的 Poisson 方程，但是是矢量形式：
$$
\nabla^2\vec{A}=\mu\vec{j}
$$
/Example/

> 求半径 $a$ 的导线圆环载电流为 $I$，求空间矢势和磁感应强度.
>
> ---
>
> 首先求矢势 $\vec{A}$：空间中有轴对称性，
> $$
> \vec{A}=\frac{\mu_0}{4\pi}\oint\frac{I\text{d}\vec{l}'}{r}
> $$
> $\vec{A}$ 应该只有 $\phi$ 方向的分量，于是
> $$
> \vec{A}=\hat{\varphi}\cdot\frac{\mu_0Ia}{4\pi}\int_{0}^{2\pi}\frac{\hat{\varphi}'\cdot\hat{\varphi}}{|\vec{x}-\vec{x}'|}\text{d}\varphi'
> $$
> 这个积分不能表达为初等函数，实际上是一种椭圆积分，为
> $$
> A_{\varphi} = \frac{\mu_0Ia}{4\pi}\int_0^{2\pi}\frac{\cos\varphi'\text{d}\varphi'}{(a^2+R^2-2Ra\sin\theta\cos\varphi')^{1/2}}
> $$
> 但是我们可以做一些近似，比如近轴近似，
> $$
> \begin{aligned}
> A_\varphi&\approx\frac{\mu_0Ia}{4\pi}\int_0^{2\pi}\frac{\cos\varphi'}{(a^2+R^2)^{1/2}}\left[1+\frac{1}{2}\frac{2aR}{a^2+R^2}\sin\theta\cos\varphi'\right]\text{d}\varphi'\\\\
> &=\frac{\mu_0Ia^2R}{4\sqrt{a^2+R^2}}\sin\theta
> \end{aligned}
> $$
> 如果用远场近似，则得到的是磁矩的远场磁矢势：
> $$
> A_\varphi\approx\frac{\mu_0I}{4\pi}\frac{\pi a^2\sin\theta}{R^2}=\frac{\mu_0}{4\pi}\frac{|\vec{m}\times\vec{R}|}{R^3}
> $$

在某些特殊情况下，可以定义磁标势，这要求：

* 所考虑的空间区域没有传导电流；
* 空间应该为单连通区域.

简单地理解就是空间中的磁场都是由永磁体产生的，那么就能够引入磁标势，有
$$
\vec{H}=-\nabla\varphi_m
$$
