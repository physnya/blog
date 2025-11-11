---
title: Lesson 14 氢原子
permalink: /quantum-mechanics/lesson-14-hydrogen/
createTime: 2025/11/10 16:39:31
---
「最干净的三维量子力学问题」

任何一个算符跟 Hamiltonian 对易，原则上就是守恒的. 在氢原子中，角动量的 derivative 都是沿着切向定义的，因此在 Hamiltonian 仅仅和 $r$ 有关的情况下，角动量一定是守恒的.

径向的有效势能：
$$
V_{\text{eff}} = -\frac{e^2}{4\pi\varepsilon_0}\frac{1}{r}+\frac{\hbar^2}{2m}\frac{l(l+1)}{r^2}
$$
这里有很多可以改变的东西，比如说介电常数，或者将质量换成反质子质量 (变成奇异原子)，那么势能曲线就会发生变化，原本没有势阱的地方就会出现势阱等等.

用类似 Binet 方程的方式可以解出 Bohr 能级. 一般的氢原子波函数为
$$
\psi_{nlm}(r,\theta,\phi) = R_{nl}(r)Y^m_l(\theta,\phi)
$$
$n$ 为主量子数，$l$ 为角量子数，$m$ 为磁量子数. 这里有
$$
R_{nl}(r) = \frac{1}{r}\rho^{l+1}e^{-\rho}\nu(\rho),\quad\rho=\frac{r}{an},\quad a=\text{Bohr radius}
$$
其中，$\nu$ 是一个 Laguerre 多项式，
$$
\nu(\rho) = L^{2l}_{n-l-1}(2\rho)
$$
氢原子光谱规律是
$$
\frac{1}{\lambda} = R\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
$$

---

角动量的经典定义为
$$
L=rp\sin\theta
$$
但是和经典不同，量子力学中两个角动量算符有
$$
\vec{L}\times\vec{L}=\text{i}\hbar\vec{L}
$$
这是因为角动量算符虽然对易，但是其分量并不对易，有
$$
[L_x,L_y]=\text{i}\hbar L_z,\quad[L_y,L_z]=\text{i}\hbar L_x,\quad[L_z,L_x]=\text{i}\hbar L_y
$$
因此角动量分量不能被同时确定.