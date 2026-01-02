---
title: Lesson 29 散射 (二)
permalink: /quantum-mechanics/lesson-29-scattering/
createTime: 2025/12/31 16:17:00
---
期末考试 $95\%$ 的内容：

* 全同粒子：fermion 和 boson 的无相互作用体系，波函数满足交换反对称和对称性；自由电子气和能带；变分法中全同粒子的相关内容.
* 氢原子：不考波函数，但是考很多重要概念 —— 角动量耦合 (CG 系数，考试会给出，但是会有冗余信息).
* 微扰论：Hamiltonian 有一个修正 $H'$，但是本身的 Hamiltonian 会是一个比较好解的 $H_0$. 微扰论中包括一阶微扰、简并微扰和含时微扰，要记住的是简并微扰和一阶微扰分别是计算什么东西的，这是要记忆的.
* 变分法：单参数的变分法.

---

瞄准距离 $b$.

一个入门的例子是硬球的散射，半径 $R$；散射粒子的大小忽略不计.

微分散射截面的定义：
$$
\text{d}\sigma = D(\theta)\text{d}\Omega\Longrightarrow D(\theta)=\frac{\text{d}\sigma}{\text{d}\Omega}=\frac{b}{\sin\theta}\left|\frac{\text{d}b}{\text{d}\theta}\right|
$$

---

散射的波函数
$$
\psi(r,\theta)\approx A\left(e^{\text{i}kz}+f(\theta)\frac{e^{\text{i}kr}}{r}\right)
$$
必须满足这个形式.

* 和 $\phi$ 无关，因为中心力场的对称性；
* 有透射和反射；
* $f(\theta)$ 称为散射振幅.

类似 Binet 方程，
$$
-\frac{\hbar^2}{2m}\frac{\text{d}^2u}{\text{d}r^2}+\left[V(r)+\frac{\hbar^2}{2m}\frac{l(l+1)}{r^2}\right]u=Eu
$$
对于硬球势，波函数可以被展开为球 Bessel 函数的求和.

