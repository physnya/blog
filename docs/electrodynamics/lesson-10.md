---
title: Lesson 10 多极展开
createTime: 2025/10/21 13:30:57
permalink: /electrodynamics/lesson-10/
---
对于 Coulomb 特解做展开：
$$
\varphi(x)=\int_C\frac{\rho(x')}{4\pi\varepsilon|x'-x|}\text{d}^3x'
$$
展开考虑的是 $|x'|/|x|$ 为小量. 令 $r'=|\vec{x}-\vec{x}'|$，固定 $x$ (场点) 不变，把 $x'$ 在原点附近展开，则
$$
\begin{aligned}
\frac{1}{r}&=\left.\frac{1}{r}\right|_{\vec{x}'=0}+\left[x'\left.\frac{\partial}{\partial x'}\left(\frac{1}{r}\right)\right|_{\vec{x}'=0}+y'\left.\frac{\partial}{\partial y'}\left(\frac{1}{r}\right)\right|_{\vec{x}'=0}+z'\left.\frac{\partial}{\partial z'}\left(\frac{1}{r}\right)\right|_{\vec{z}'=0}\right]+\cdots\\\\
&\overset{r_{\vec{x}'=0}=R}{=}\frac{1}{R}+(\vec{x}'\cdot\nabla)\frac{1}{R}+\frac{1}{2}\vec{x}'\vec{x}':\nabla\nabla\frac{1}{R}+\cdots
\end{aligned}
$$
偶极项：
$$
\varphi = \frac{1}{4\pi\varepsilon}\frac{\vec{p}\cdot\vec{x}}{R^3}
$$
四极项：
$$
\varphi=\frac{q}{4\pi\varepsilon}\frac{(\vec{x}_0'\vec{x}_1'+\vec{x}_1'\vec{x}_0')(3\vec{x}\vec{x}-R^2\bold{I})}{2R^5}
$$

> 这是双偶极子共线对顶的这种情况的领头阶，实际上也可以用四电荷方框的电荷分布来计算领头阶.

如果定义四极矩 $D = \sum_{m,n}q_{n}\vec{x}_n\vec{x}_m$，可以改写四极项.

对于连续电荷分布，有
$$
\varphi=\frac{1}{4\pi\varepsilon}\int_{V'}\rho(\vec{x}')\left[\frac{1}{R}-\vec{x}'\cdot\nabla\frac{1}{R}+\frac{1}{2!}\vec{x}\vec{x}:\nabla\nabla\frac{1}{R}+\cdots\right]\text{d}\tau'
$$
令：
$$
Q=\int_{V'}\rho(\vec{x}')\text{d}\tau'\,,\quad\vec{p}=\int_{V'}\rho(\vec{x}')\vec{x}'\text{d}\tau'\,,\quad\bold{D}=\int_{V'}3\vec{x}'\vec{x}'\rho(\vec{x}')\text{d}\tau'
$$
上式改写为
$$
\varphi=\frac{1}{4\pi\varepsilon}\int\left[\frac{Q}{R}-\vec{p}\cdot\nabla\frac{1}{R}+\frac{1}{6}\bold{D}:\nabla\nabla\frac{1}{R}+\cdots\right]\text{d}\tau'
$$
一个小区域内连续分布的电荷在远处激发的电场等于一系列多极子在远处激发的场的叠加.

