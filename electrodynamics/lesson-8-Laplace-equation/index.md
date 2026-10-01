---
url: /electrodynamics/lesson-8-Laplace-equation/index.md
---
上节课我们说了静电唯一性定理，静电唯一性定理需要什么条件？

> 两类边界条件：
>
> * 边界上的电势；
> * 边界上电势的法向导数 / 边界上电场的法向分量.
>
> 如果对于导体边界，我们也有两种边界条件：
>
> * 导体上的电势 (导体等势)；
> * 导体上的电荷分布 (导体的法向电场).

## Laplace 方程与分离变量法

在空间中存在电荷的时候，我们得到的是 Poisson 方程而不是 Laplace 方程：
$$
\nabla^2\varphi = -\frac{\rho}{\varepsilon}
$$
为了应用 Laplace 方程和分离变量法，我们要把这个方程化为 Laplace 方程. 考虑将电势分为两个部分，$\varphi=\varphi'+\varphi\_a$，其中 $\varphi\_a$ 是一个 Poisson 方程的特解 (不一定满足边界条件)，于是关于 $\varphi'$ 的方程变成 Laplace 方程、边界条件是 $\varphi\_a$ 去掉后的边界条件.

::: tip

其实就是数理方程里面讲到的「非齐次稳定方程化为齐次方程」的方法.

:::

一般我们研究的问题，边界都是人为可控制的，所以能够保证齐次.

我们以球坐标系为主要的研究对象，通解为
$$
\begin{aligned}
&\varphi(r,\theta,\phi)= \\\\
& \sum\_{n,m}\left(A\_{nm}r^n+\frac{B\_{nm}}{r^{n+1}}\right)P\_n^m(\cos\theta)\cos(m\phi)+\sum\_{n,m}\left(C\_{nm}r^n+\frac{D\_{nm}}{r^{n+1}}\right)P\_n^m(\cos\theta)\sin(m\phi)
\end{aligned}
$$
如果电荷分布绕着 $z$ 轴球对称，那么函数将和 $\phi$ 无关，磁量子数 $m=0$. 这时我们的解变成了
$$
\varphi(r,\theta)=\sum\_{n=0}\left(A\_nr^n+\frac{B\_n}{r^{n+1}}\right)P\_n(\cos\theta)
$$
Legendre 函数的前面几个需要记住：
$$
\begin{aligned}
\&n=0\quad P\_0=1\\\\
\&n=1\quad P\_1=\cos\theta\\\\
\&n=2\quad P\_2=\frac{1}{2}(3\cos^2\theta-1)\\\\
\&n=3\quad P\_3=\frac{1}{2}(5\cos^3\theta-3\cos\theta)
\end{aligned}
$$
它们是正交的，归一性可以用修改待定系数的方式达到.

/Example/

> 一个介电常数 $\varepsilon$ 的均匀线性介质球放入均匀外场 $\vec{E}\_0$ 中，球外为真空，求电势分布.
>
> ***
>
> 具有轴对称性，外场电势为 $\varphi\_0 = -\vec{E}\cdot\vec{z}$.
>
> 解为
> $$
> \begin{aligned}
> \varphi\_1&=-E\_0r\cos\theta +\frac{\varepsilon-\varepsilon\_0}{2\varepsilon\_0+\varepsilon}R^3E\_0\frac{1}{r^2}\cos\theta & r\geq R\\\\
> \varphi\_2&=-\frac{3\varepsilon\_0}{2\varepsilon\_0+\varepsilon}E\_0r\cos\theta \&r\<R
> \end{aligned}
> $$
> 在外场体现为一个偶极势叠加一个均匀场，内场体现为一个均匀场.
>
> 介质球的偶极矩：
> $$
> \vec{p}=\frac{4}{3}\pi R^3\vec{P}=\frac{\varepsilon-\varepsilon\_0}{2\varepsilon\_0+\varepsilon}\cdot4\pi\varepsilon\_0R^3\vec{E}\_0
> $$
