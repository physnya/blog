---
title: Lesson 20 偶极辐射
permalink: /electrodynamics/lesson-20-dipole-radiation/
createTime: 2025/11/25 13:00:26
---
辐射研究中最重要的并不是球面波因子这些量，而是功率的角分布. 先来计算能流密度：
$$
\vec{S}=\frac{1}{\mu_0}\vec{E}\times\vec{B}
$$
但是我们之前已经用了复数写法，这里遇到了复数物理量的二次项，应该先取实部再求乘积，为
$$
\vec{S}=\frac{c}{\mu_0}(\Re\vec{B}\cdot\Re\vec{B})\hat{R},\quad \langle\vec{S}\rangle=\frac{c}{2\mu_0}|\vec{B}|^2\hat{R}=\frac{c}{2\mu_0}\frac{|\vec{B}_0|^2}{R^2}\hat{R}
$$
考虑在一个微元立体角上的功率：
$$
\text{d}P=\langle\vec{S}\rangle\cdot4\pi R^2\text{d}\Omega=\frac{c}{2\mu_0}|\vec{B}_0|^2\text{d}\Omega
$$
辐射功率的角分布实际上就是 $\vec{B}_0$ 的角分布，
$$
\frac{\text{d}P}{\text{d}\Omega}=\frac{c}{2\mu_0}|\vec{B}(\theta,\varphi)|^2
$$

---

下面来看一个具体的例子，考虑一个直天线，电流分布为
$$
\vec{j}_0=I(x')\delta(x')\delta(y')\hat{e}_z,\quad I(z')=I_0\sin\left[k\left(\frac{d}{2}-|z'|\right)\right]
$$
于是整个磁矢势分布为
$$
\vec{A}_0=\frac{\mu_0I_0}{4\pi}\int\sin k\left(\frac{d}{2}-|z'|\right)e^{-\text{i}kz'\cos\theta}\text{d}z'
$$
实际上这个积分的形式类似于单缝衍射，
$$
\vec{A}_0=\frac{\mu_0I_0}{\pi k}\frac{\displaystyle{\cos\left(\frac{kd}{2}\cos\theta\right)-\cos\frac{kd}{2}}}{\sin^2\theta}\hat{z}
$$
而 $|\vec{B}_0|=k|\vec{A}_0|\sin\theta$，可以确定辐射角分布正比于
$$
\frac{\text{d}P}{\text{d}\Omega}\propto\left[\frac{\displaystyle{\cos\left(\frac{kd}{2}\cos\theta\right)-\cos\frac{kd}{2}}}{\sin\theta}\right]^2
$$
在小天线近似下，
$$
\frac{\text{d}P}{\text{d}\Omega}=\frac{\mu_0I_0^2}{128\pi^2c^3}\omega^4d^4\sin^2\theta,\quad P=\frac{\mu_0I_0^2}{48\pi c^3}\omega^4d^4
$$
观察表达式，在 $d<\pi/k$ 之前，$d$ 越大波动的方向性越强.