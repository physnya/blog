---
title: Lesson 13 球坐标的 Schrödinger 解
permalink: /quantum-mechanics/lesson-13/
createTime: 2025/11/05 20:11:25
---
$$
\nabla^2=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
$$

这就是球坐标系下的 Laplace 算子.

我们可能还会用到所谓的抛物坐标，也就是 $x-y,x+y,z$，这个坐标很适合处理氢原子的散射态问题.

对于球坐标，方程是
$$
-\frac{\hbar^2}{2m}\left[\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]+V(r)\psi=E\psi
$$
我们用 Separation Ansatz (分离变量猜解)，$\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)$，得到
$$
\begin{aligned}
&\frac{1}{R}\frac{\text{d}}{\text{d}r}\left(r^2\frac{\text{d}R}{\text{d}r}\right)-\frac{2mr^2}{\hbar^2}[V(r)-E]=l(l+1)\\\\
&\frac{1}{Y}\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2Y}{\partial\phi^2}\right]=-l(l+1)
\end{aligned}
$$
其中，我们称 $l$ 为角量子数. 对第二个方程再进行分离变量，最后会得到一个 Legendre 多项式.

轨道方程方面，可以换元 $R = u/r$，方程变为一维的合流超几何方程 (有点像 Binet 方程)，
$$
\left[-\frac{\hbar^2}{2m}\frac{\text{d}^2}{\text{d}r^2}+V_{\text{eff}}(r)\right]u(r)=Eu(r)
$$
其中，
$$
V_{\text{eff}}(r)=V(r)+\frac{\hbar^2}{2m}\frac{l(l+1)}{r^2}
$$
球 Bessel 函数：
$$
j_l(x)=(-x)^l\left(\frac{1}{x}\frac{\text{d}}{\text{d}x}\right)^l\left(\frac{\sin x}{x}\right),\quad n_l(x)=-(-x)^l\left(\frac{1}{x}\frac{\text{d}}{\text{d}x}\right)^l\left(\frac{\cos x}{x}\right)
$$
