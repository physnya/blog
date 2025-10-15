---
title: Lesson 8 势阱
permalink: /quantum-mechanics/lesson-8-potential-well/
createTime: 2025/10/15 15:05:56
---
今天主要是做几个题目.

先把上节课没讲完的说一下，自由粒子的波函数可能出现色散，具体而言是
$$
\omega(k) \approx \omega_0 + \omega_0'(k-k_0)
$$
则得到波函数
$$
\psi(x,t)\approx\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty\phi(k_0+s)e^{\text{i}(k_0+s)(x-\omega_0't)}\text{d}s
$$

## delta 势阱

势能的区分：「能到无穷远去、或者从无穷远来」称为散射态；如果是在某个势阱里做周期性的运动，是束缚态. 但是要注意的是，量子力学可能出现隧穿，有些时候会走到经典力学不允许的状态上去.

考虑一个 $\delta$ 吸引势，$V(x)=-\alpha\delta(x)$ ($\alpha>0$)，先来求束缚态：我们知道这个势能最大值为零，那么束缚态一定要求 $E<0$，反之为 $E>0$ 的散射态.
$$
-\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}-\alpha\delta(x)\psi(x)=E\psi(x)
$$

* $E<0$，则
  $$
  \kappa=\sqrt{\frac{-2mE}{\hbar^2}}\,,\quad\kappa>0
  $$
  对于 $x<0$，我们只能取 $\psi(x)=Be^{\kappa x}$ 的解 (否则若有 $e^{-\kappa x}$ 项会在无穷远发散)；反之 $x>0$ 区域只能取 $\psi(x)=Fe^{-\kappa x}$ 的解.

  在原点处，波函数连续，得到 $B=F$；但是一阶导数不连续，因为存在一个势能. 我们考虑通过归一化的方式求出 $B$，最终的解为
  $$
  \psi(x)=\sqrt{\frac{m\alpha}{\hbar^2}}e^{-\frac{m\alpha}{\hbar^2}|x|}
  $$
  求能量：如果对于整个 Schrödinger 方程两边在一个 $0$ 邻域的极小区间内积分，则
  $$
  -\int_{-\varepsilon}^\varepsilon\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}\text{d}x-\int_{-\varepsilon}^\varepsilon\alpha\delta(x)\psi(x)\text{d}x=\int_{-\varepsilon}^\varepsilon E\psi(x)\text{d}x
  $$
  得到
  $$
  \Delta\left(\frac{\text{d}\psi}{\text{d}x}\right)=-\frac{2m\alpha}{\hbar^2}\psi(0)\Longrightarrow -2\kappa B = -\frac{2m\alpha}{\hbar^2}B\Longrightarrow E=-\frac{m\alpha^2}{2\hbar^2}
  $$

* $E>0$，为散射态，则对于 $x<0$，有
  $$
  \psi(x)=Ae^{\text{i}kx}+Be^{-\text{i}kx}\,,\quad k=\sqrt{\frac{2mE}{\hbar^2}}>0
  $$
  在 $x>0$ 区间是
  $$
  \psi(x)=Fe^{\text{i}kx}+Ge^{-\text{i}kx}
  $$
  边界条件是两边波函数连续，导数满足一个跳变：
  $$
  \begin{aligned}
  A+B&=F+G\\\\
  \Delta\left(\frac{\text{d}\psi}{\text{d}x}\right)=\text{i}k(F-G)-&\text{i}k(A-B)=-\frac{2m\alpha}{\hbar^2}\psi(0)=-\frac{2m\alpha}{\hbar^2}(A+B)
  \end{aligned}
  $$
  只有两个方程.

  首先我们可以假设一个初始条件，波从左边来，所以右边没有往左的波动，直接就得到 $G=0$. 剩下的可以做比例，我们能够求反射和透射系数：
  $$
  \beta=\frac{m\alpha}{\hbar^2k}\,,\quad\frac{B}{A}=\frac{\text{i}\beta}{1-\text{i}\beta}\,,\quad\frac{F}{A}=\frac{1}{1-\text{i}\beta}
  $$
  能量的反射率和透射率为模平方：
  $$
  R = \left|\frac{B}{A}\right|^2=\frac{1}{1+\displaystyle{\frac{2\hbar^2E}{m\alpha^2}}}\,,\quad T=\left|\frac{F}{A}\right|^2=\frac{1}{1+\displaystyle{\frac{m\alpha^2}{2\hbar^2E}}}
  $$

## 有限方势阱

有限方势阱的分布是
$$
V(x)=\begin{cases}
-V_0 &-a<x<a\\\\
0 &|x|>a
\end{cases}
$$
先来算束缚态，
$$
-\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}=E\psi\,,\quad|x|>a
$$
两边的解是 $\psi(x)=Be^{\kappa x}$ ($x<-a$) 和 $\psi(x)=Fe^{-\kappa x}$ ($x>a$). 而中间的解是
$$
\psi(x)=C\sin(lx)+D\cos(lx)\,,\quad l =\sqrt{\frac{2m(E+V_0)}{\hbar^2}}
$$
方程的解应该是奇函数或者偶函数，这样我们的边界条件只用算一边，先来算偶函数的解. 那么 $\psi$ 的连续性和导数连续性可以合起来得到
$$
\kappa = l\tan(la)
$$
令
$$
z=la\,,\quad z_0=\frac{a}{\hbar}\sqrt{2mE}
$$
方程变为
$$
\tan z=\sqrt{\left(\frac{z_0}{z}\right)^2-1}
$$
奇函数的方程是 $\kappa=-l\cot(la)$.

---

散射态难解很多，我们还是和之前一样来算反射和透射率.

::: warning

噢这不是我们 CPhO-S 的考题吗，竞赛的时候算过好多遍.

:::