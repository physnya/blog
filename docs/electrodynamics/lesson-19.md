---
title: Lesson 19 辐射 (二)
permalink: /electrodynamics/lesson-19-radiation-2/
createTime: 2025/11/20 15:07:29
---
球面波方程
$$
\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\varphi}{\partial r}\right)-\frac{1}{c^2}\frac{\partial^2\varphi}{\partial t^2}=0
$$
它的通解为
$$
\varphi(r,t)=\frac{1}{r}\left[f\left(t-\frac{r}{c}\right)+g\left(t+\frac{r}{c}\right)\right]
$$
这里的 $g$ 表现为汇聚的波形，不符合物理实际，我们只考虑 $f$ 的部分. 对于场源 $Q(t-r/c)$ 来说，我们猜测
$$
\varphi(r,t)=\frac{1}{4\pi\varepsilon_0r}Q\left(t-\frac{r}{c}\right)
$$
因为现在没有唯一性定理了 (电磁场是动态的)，所以要来验证这个解确实是 d'Alembert 方程的特解：
$$
\begin{aligned}
\nabla^2\varphi&=f\nabla^2\frac{1}{r}+2\nabla\frac{1}{r}\cdot\nabla f+\frac{1}{r}\nabla^2f\\\\
\frac{1}{c^2}\frac{\partial^2\varphi}{\partial t^2}&=\frac{1}{c^2}\frac{1}{r}\frac{\partial^2f}{\partial t^2}
\end{aligned}
$$
在 $\vec{x}'$ 处的电荷在场点 $\vec{x}$ 的势是
$$
\varphi(\vec{x},t)=\frac{\displaystyle{Q\left(\vec{x}',t-\frac{r}{c}\right)}}{4\pi\varepsilon_0r}
$$
这就是所谓推迟势. 利用叠加原理推广，
$$
\varphi(\vec{x},t)=\frac{1}{4\pi\varepsilon_0}\int_{V'}\frac{\displaystyle{\rho\left(\vec{x}',t-\frac{r}{c}\right)}}{r}\text{d}\tau'
$$
同理，磁矢势
$$
\vec{A}(\vec{x},t)=\frac{\mu_0}{4\pi}\int_{V'}\frac{\displaystyle{\vec{j}\left(\vec{x}',t-\frac{r}{c}\right)}}{r}\text{d}\tau'
$$
这两者恰好是符合 Lorentz 规范条件.

下面考虑简谐的电流变化，取 $\vec{j}(\vec{x}',t')=\vec{j}(\vec{x}')e^{-\text{i}\omega t'}$，$\rho(\vec{x}',t')=\rho(\vec{x}')e^{-\text{i}\omega t'}$，其中 $t'=t-r/c$. 有：
$$
\vec{A}=\frac{\mu_0}{4\pi}\int_{V'}\frac{\vec{j}(\vec{x}')e^{-\text{i}(kr-\omega t)}}{r}\text{d}\tau'
$$
之后我们开始近似：有三个区域，

* 近区 (似稳区)：$r\ll\lambda$，但是满足 $r\gg l$ (线度)，有 $kr\ll1$，推迟因子 $\ll1$，几乎是即时响应.
* 过渡区：$r\gg\lambda$，这里没办法具体做近似.
* 远区 (辐射区)：$r\gg l^2/\lambda$，有显著的推迟效应.

远区可以展开整个推迟势，
$$
\vec{A}(\vec{x}) = \frac{\mu_0e^{\text{i}kR}}{4\pi R}\int_{V'}\vec{j}(\vec{x}')\left[1-\text{i}k\hat{n}\cdot\vec{x}'+\frac{1}{2}(\text{i}k\hat{n}\cdot\vec{x}')^2+\cdots\right]\text{d}\tau'
$$
远场下，也存在关系 $\nabla\to\text{i}\vec{k}$，和平面波的情况类似.