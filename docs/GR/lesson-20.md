---
title: Lesson 20 黑洞熵
createTime: 2026/05/11 18:44:34
permalink: /GR/lesson-20-black-hole-entropy/
---
::: warning

这节课因为去兴隆观测站参加观测天文学的观测实习了所以没时间去，感谢 lzy 同学提供的笔记.

:::

量子场论本身不要求有空间关联，而相对论使得含有时间演化的场论一定有空间关联，这是非常巧妙的.

Unruh 效应的核心就是 Bogoliubov 变换，它混合了产生和湮灭算符：

> Bogoliubov 变换简单来说就是，对于 $\hat{a}$ 和 $\hat{a}^\dagger$ 以及一对常复数 $u,v$，引入新的一对算符
> $$
> \hat{b} = u\hat{a}+v\hat{a}^\dagger,\quad \hat{b}^\dagger = u^*\hat{a}^\dagger+v^*\hat{a}
> $$
> 为了使变换是正则的，可以算新的算符的对易子，
> $$
> \left[\hat{b},\hat{b}^\dagger\right] = \left[u\hat{a}+v\hat{a}^\dagger,u^*\hat{a}^\dagger+v^*\hat{a}\right] = \left(|u|^2-|v|^2\right)\left[\hat{a},\hat{a}^\dagger\right]
> $$
> 因此条件是 $|u|^2-|v|^2=1$，这个式子很方便和反双曲函数联系在一起，因此可以方便地参数化 $u,v$ 为
> $$
> u=e^{\mathrm{i}\theta_1}\cosh r,\quad v = e^{\mathrm{i}\theta_2}\sinh r
> $$

这件事情起源于加速运动引起的视界 (这使得积分不为零)；类似地，对于自由落体者，黑洞视界不可见，它们测得的真空在无穷远的观察处是不空的且有温度. 黑洞因此获得温度.

简单起见，首先讨论 $1+1$ 维 (对于 s 波，这是可行的，但是对于光子而言没有这一个分量，需要进一步讨论)：度规写成共形平坦的，
$$
\begin{aligned}
\mathrm{d}s^2 &=-\left(1-\frac{2GM}{r}\right)\mathrm{d}t^2+\frac{\mathrm{d}r^2}{\displaystyle{1-\frac{2GM}{r}}} \\\\
&= -\left(1-\frac{2GM}{r}\right)\left(\mathrm{d}r+\frac{\mathrm{d}r}{\displaystyle{1-\frac{2GM}{r}}}\right)\left(\mathrm{d}t-\frac{\mathrm{d}r}{\displaystyle{1-\frac{2GM}{r}}}\right)
\end{aligned}
$$
利用之前讲 Kruscal 坐标时所使用的同样记号，
$$
\begin{aligned}
r^* &= r-2GM+2GM\ln\left\vert\frac{r}{2GM}-1\right\vert,\quad \mathrm{d}r^*=\frac{\mathrm{d}r}{\displaystyle{1-\frac{2GM}{r}}}
\end{aligned}
$$
这里的变换保持真空，因为时间和空间不混合，产生湮灭算符也不混合. 从下面这个形式完成证明：
$$
\phi = \int\frac{\mathrm{d}k}{\sqrt{2\pi\cdot2\omega}}\left(a_ke^{\mathrm{i}kx-\mathrm{i}\omega t}+a_k^\dagger e^{-\mathrm{i}kx+\mathrm{i}\omega t}\right)
$$

> 课后思考.

---

对于 Schwarzschild 度规，变换为
$$
\tilde u = t-r^*,\quad \tilde v = t+r^*,\quad \mathrm{d}s^2 =- \left(1-\frac{2GM}{r(\tilde u,\tilde v)}\right)\mathrm{d}\tilde u\mathrm{d}\tilde v
$$
这个度规下类 Minkowski 时空的就是 Kruscal 坐标，
$$
u=-4GMe^{-\tilde u/4GM},\quad v=4GMe^{\tilde v/4GM}
$$
在黑洞内外都满足线元
$$
\mathrm{d}s^2 = \frac{2GM}{r(u,v)}e^{1-2GM/r(u,v)}\mathrm{d}u\mathrm{d}v
$$
注意到，当 $r=2GM$ 时，$\mathrm{d}s^2=\mathrm{d}u\mathrm{d}v$，这时候表面上坐标是平直的，视界附近的真空在这个坐标下描写. 由 Weyl 对称性，两个坐标下的作用量一致，有相同的量子化：
$$
S = \int\mathrm{d}x^2\cdot\sqrt{g}\left(g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi\right) = \tilde S
$$

$$
\begin{aligned}
&|0\rangle_K\quad\text{Kruskal:}\\\\
&|0\rangle_B\quad\text{Boulwave:}
\end{aligned}\,\left\{\begin{aligned}
&u = -4GMe^{-\tilde u/4GM}\\\\
&v = _4GMe^{\tilde v/4GM}
\end{aligned}\right.\xrightarrow{\text{Unruh}}\,\begin{aligned}
&|0\rangle_{\text{Minkowski}}\\\\
&|0\rangle_{\text{Kindler}}
\end{aligned}\,\left\{\begin{aligned}
&u = -\frac{1}{a}e^{-a\tilde u}\\\\
&v = +\frac{1}{a}e^{a\tilde v}
\end{aligned}\right.
$$

定义表面引力 $\kappa = 1/2r_g = (4GM)^{-1}$，对比知道 $\kappa\leftrightarrow a$.

在无穷远的观察者看来，黑洞的温度是
$$
T_H = \frac{\kappa}{2\pi} = \frac{1}{8\pi GM}
$$
对于 $3+1$ 维的情况，进一步地引入灰度因子修改谱的形状，这部分略.

---

考虑黑洞的熵：准静态下，$\mathrm{d}S=\mathrm{d}Q/T$，$\mathrm{d}U=\mathrm{d}Q=T\mathrm{d}S$. 而面积是
$$
A = 4\pi(2GM)^2 = 16\pi G^2M^2
$$
因此可以写出
$$
\mathrm{d}U = \mathrm{d}M = \frac{\mathrm{d}A}{32\pi G^2M} = \frac{1}{4G}\frac{\mathrm{d}A}{T_H}
$$
也就是熵正比于表面积，
$$
\boxed{S = \frac{A}{4G}}
$$
这被认为是非常 robust 的，所有的量子引力理论 (或者说给出黑洞的统计性质的理论) 都应该得到这一点. 一种理解这种熵的想法是，熵起源于黑洞内体系和黑洞外体系的一种「纠缠」.

回顾 Rindler Space：
$$
\rho = \int_{2GM}^r \sqrt{g_{rr}(r')}\mathrm{d}r' = \sqrt{r(r-2GM)} - 2GM\sinh^{-1}\sqrt{1-\frac{2GM}{r}}
$$
这个量在 $r\to 2GM$ 的时候近似于 $2\sqrt{GM(r-2GM)}$. 而线元表示为
$$
\mathrm{d}s^2 = \rho^2\left(\frac{\mathrm{d}t}{4GM}\right)^2-\mathrm{d}\rho^2-r^2(\rho)\mathrm{d}\Omega^2
$$
在黑洞的边缘，坐标是近平坦的，在这里建立量子场论，积分掉内部的态就会得到一个有温度的混态.