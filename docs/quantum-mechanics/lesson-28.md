---
title: Lesson 28 散射 (一)
permalink: /quantum-mechanics/lesson-28-scattering/
createTime: 2025/12/29 16:43:11
---
绝热近似：我们思考的是能级随着时间 (或者某个广义参数) 的变化，在广义参数的缓慢变化下，粒子会留在绝热能级上. 这时候粒子会多两个相位 —— 动力学相位 & 几何相位.

对于一个在磁场中运动的粒子，有 Berry 相位
$$
\oint_C\vec{A}\cdot\text{d}\vec{R}\propto\Omega
$$
这是由粒子的运动轨迹决定的. 对于 Lamor 进动的模型，波函数为
$$
\chi_+(t)=\begin{pmatrix}
\cos\theta/2\\e^{\text{i}\phi}\sin\theta/2
\end{pmatrix}
$$
这里的相位是 Berry 项.

---

AB 效应：Hamiltonian 可以写成
$$
H = \frac{1}{2m}\left(\frac{\hbar}{\text{i}}\nabla-q\vec{A}\right)^2+q\phi
$$
对于一个理想通电螺线管，$\vec{A}=\Phi/(2\pi r)\hat{\phi}$. Schrödinger 方程：
$$
\frac{1}{2m}\left[-\frac{\hbar^2}{b^2}\frac{\text{d}^2}{\text{d}\phi^2}+\frac{q^2\Phi^2}{(2\pi b)^2}+\text{i}\frac{\hbar q\Phi}{\pi b^2}\frac{\text{d}}{\text{d}\phi}\right]\psi(\phi) = E\psi(\phi)
$$
取的 ansatz 为 $Ae^{\text{i}\lambda\phi}$，代入可以得到 $\lambda$ 满足的条件，最终得到能量受到磁通量的影响：
$$
E_n(\Phi) = \frac{\hbar^2}{2mb^2}\left(n-\frac{q\Phi}{2\pi\hbar}\right)^2
$$
波函数也多了一个相位
$$
\Delta\gamma(\phi) = -\frac{q\Phi}{2\pi\hbar}\phi
$$
这个体系中粒子运动的区域并没有磁场，但是相位有个整体的 shift，来源于几何效应，这就是 Berry 相的一个例子. 实践中，就是在电子干涉实验的光路中，引入一个通电螺线管，会发现条纹的整体位移，这就是 AB 效应.

---

散射：实际上是中心势场，类似 Binet 方程，可以换元 $rR(r)\equiv u(r)$.
$$
-\frac{\hbar^2}{2m}\frac{\text{d}^2}{\text{d}r^2}u(r)+\left[V(r)+\frac{l(l+1)\hbar^2}{2mr^2}\right]u(r)=Eu(r)
$$
不同的 $E$ 会有不同的散射角和运动情况.