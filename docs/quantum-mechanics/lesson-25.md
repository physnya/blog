---
title: Lesson 25 变分法
permalink: /quantum-mechanics/lesson-25/
createTime: 2025/12/17 15:06:20
---
微扰论的方程：
$$
\dot{c}_a(t)=-\frac{\text{i}}{\hbar}H'_{ab}(t)e^{-\text{i}\omega_0t}c_b(t),\quad \dot{c}_b(t)=-\frac{\text{i}}{\hbar}H'_{ba}(t)e^{+\text{i}\omega_0t}c_a(t)
$$
这实际上是一种半经典的近似，因为对于量子态的描写是量子的，但是对于外界作用的描写使用 Hamiltonian，这是经典的描述.

假设驱动是共振的，$\omega_L=\omega_0$，$H'_{ab}\propto\cos(\omega_Lt)$. 这时候可以把 $\dot{c}_a(t)$ 写为
$$
\dot{c}_a(t)\equiv\text{i}\frac{\Omega}{2}c_b(t)
$$
($\Omega$ 称为 Rabi 频率.) 同理，
$$
\dot{c}_b(t) = -\text{i}\frac{\Omega}{2}c_a(t)
$$
当 $\omega_L-\omega_0\neq0$，出现失谐，
$$
\dot{c}_a(t)=\text{i}\frac{\Omega}{2}c_b(t)e^{\text{i}(\omega_L-\omega_0)t},\quad \dot{c}_b(t)=-\text{i}\frac{\Omega}{2}c_a(t)e^{-\text{i}(\omega_L-\omega_0)t}
$$
在完全共振时的解是
$$
\begin{aligned}
&c_a(t) = c_a(0)\cos\frac{|\Omega|t}{2}+\text{i}c_b(0)\sin\frac{|\Omega|t}{2}\\\\
&c_b(t) = c_b(0)\cos\frac{|\Omega|t}{2}-\text{i}c_a(0)\sin\frac{|\Omega|t}{2}
\end{aligned}
$$
表现为一种旋转.

---

变分法：将任意一个波函数按照正交完备基展开，
$$
\psi=\sum_nc_n\psi_n
$$
则 Hamiltonian 的期望值
$$
\langle H\rangle = \left\langle\sum_nc_n\psi_n\right|H\left|\sum_nc_n\psi_n\right\rangle = \sum_n\langle\psi_n|H|\psi_n\rangle
$$
变分考虑的是一个波函数的变化 $\psi+\delta\psi$，
$$
\langle\psi+\delta\psi|H|\psi+\delta\psi\rangle - \langle\psi|H|\psi\rangle
$$
如果变化不造成 Hamiltonian 期望值的变化，那么这就处于一个稳定值. 另外，$\psi+\delta\psi$ 必须要是归一的，这里可以通过 $\delta\psi$ 与 $\psi$ 正交来实现.

/Example/

> 对于一个 $\delta$ 形式的势能：
> $$
> H = -\frac{\hbar^2}{2m}\frac{\text{d}^2}{\text{d}x^2}-\alpha\delta(x)
> $$
> 用一个 Gauss 型的波函数作为试探波函数：
> $$
> \psi(x)=Ae^{-bx^2}
> $$
> 积分得到
> $$
> \langle H\rangle = \frac{\hbar^2b}{2m}-\alpha\sqrt{\frac{2b}{\pi}}
> $$
> 对 $b$ 这个参数求导，
> $$
> \frac{\text{d}\langle H\rangle}{\text{d}b} = \frac{\hbar^2}{2m}-\alpha\frac{1}{2}\sqrt{\frac{2}{\pi}}b^{-1/2}=0
> $$
> 解得取极值时，$b = \displaystyle{\frac{2m^2\alpha^2}{\pi\hbar^4}}$. 这时候最小的 Hamiltonian 期望值为
> $$
> \langle H\rangle_{\min} = -\frac{m\alpha^2}{\pi\hbar^2}
> $$
> 对比准确结果 $E=\displaystyle{-\frac{m\alpha^2}{2\hbar^2}}$，表现出这已经是一个比较精确的近似.