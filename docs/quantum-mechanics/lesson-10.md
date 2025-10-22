---
title: Lesson 10 隧穿
permalink: /quantum-mechanics/lesson-10/
createTime: 2025/10/22 15:03:46
---
11-03 期中考试.

对于势垒的 tunnelling，我们考虑入射波为 $e^{\text{i}kx}$，反射为 $re^{-\text{i}kx}$、透射为 $te^{\text{i}kx}$，在势垒中间的波函数是 $e^{\pm\kappa x}$. 一维 Schrödinger 方程：
$$
\left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V_0\right)\psi=\frac{\hbar^2k^2}{2m}\psi
$$
令
$$
\frac{\hbar^2\kappa^2}{2m}=V_0-\frac{\hbar^2k^2}{2m}
$$
则得到势垒中间的波函数满足
$$
\frac{\partial^2}{\partial x^2}\psi=\kappa^2\psi
$$
不过我们认为，粒子在进入经典不允许的区域之后，其波函数振幅应该越来越小，所以要求在势垒中的解必须是 $\propto e^{-\kappa x}$ 的.

我们可能会问：为什么一个势阱的散射态的透射率会有波动性的变化？

> 这是因为，势阱有点像 Fabry - Perot 干涉仪，在透射时其实是在内部不断相互反射，形成驻波时才能实现很好的透射或者反射，这像光学一样.

Hamiltonian 的本征态可以表示所有的波函数：
$$
\psi(x)=\int\psi_ke^{\text{i}kx}\text{d}k
$$
散射态 + 势阱里面的一些束缚态，是完备的；而平面波叠加得到的这些态是超完备的，含有很多没有必要了解的态，比如更多的平面波态.