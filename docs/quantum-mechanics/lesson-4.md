---
title: Lesson 4 谐振子入门
permalink: /quantum-mechanics/lesson-4-oscillator/
createTime: 2025/09/24 15:20:53
---
上节课讲的是 Schrödinger 方程的一些基本的概念，说到 2-state superposition：

> $$
> |\varPsi(x,t)|^2=c_1^2\psi_1^2+c_2^2\psi_2^2+2c_1c_2\psi_1\psi_2\cos\left(\frac{E_2-E_1}{\hbar}t\right)
> $$

/Theorem/ (Energy is real)

> 可以证明能量没有虚部.

/Theorem/ ($\psi(x)$ can always be chosen real)

> 可以把 $\psi$ 的解取为
> $$
> \frac{1}{2}(\psi+\psi^*)\,,\quad\frac{1}{2\text{i}}(\psi-\psi^*)
> $$
> 这就是全实数的波函数.

/Theorem/ (if $V(x)$ is even, eigenfunctions can be chosen even or odd)

> 如果给定的势能 $V(x)=V(-x)$，那么得到的波函数只能是奇函数或者偶函数.
>
> 这来源于 Hamiltonian 的对称性，因为动能无论如何是偶的，这时势能又是对称的，于是我们的解应当具有一定的对称性.

我们讲下面的这一个经典的例子，无限深方势阱：

> 势能分布是
> $$
> V(x)=\begin{cases}
> 0&0\leq x\leq a\\\\
> \infty&\text{otherwise}
> \end{cases}
> $$
> ::: tip
>
> 「我一直觉得这里应该把原点放在中间，刚好可以体现对称性的好处.」—— yuri (原谅我使用这样的一个名字).
>
> :::
>
> 这个问题是分阶段的，在三个不同区域可以分别解出一个解来，问题在于我们要把这些解连在一起. 一个二阶的微分方程，它的边界应当是零阶连续的、一阶光滑的.
>
> 对于中间的区域，
> $$
> -\frac{\hbar^2}{2m}\frac{\text{d}\psi^2}{\text{d}x^2}=E\psi
> $$
> 解得
> $$
> \psi(x)=A\sin(kx)+B\cos(kx)\,,\quad k =\sqrt{\frac{2mE}{\hbar}}
> $$
> 在 $x=0,a$，$\psi=0$，所以 $B=0$，且 $k=n\pi/a$ ($n=1,2,\cdots$). (我们求的一定是 untrivial 的解，所以至少不能让 $n=0$). 这样能量被量子化，有
> $$
> E=\frac{n^2\pi^2\hbar^2}{2ma^2}=\frac{n^2\hbar^2}{8ma^2}
> $$
> 这个能级差是越来越大的.
>
> 有没有能级差越来越小的？
>
> > 当然有，吸引型的势能会让能级差越来越小，比如氢原子；如果是量子谐振子，能级差就是恒定值.
>
> 上面这个 $a$ 的尺度体现了量子效应在不同尺度下的强弱.
>
> 再应用归一化条件，最终的本征态是
> $$
> \psi_n(x)=\sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)
> $$
>
> ---
>
> 上面波函数的一些性质：基态在范围内没有零点 (如果之后大家学到的知识更多，会知道多体量子系统基态也是没有零点的)；另外有正交性：
> $$
> \int_0^a\psi_m^*(x)\psi_n(x)\text{d}x=0\,,\quad(m\neq n)
> $$
> 归一性：
> $$
> \int_0^a|\psi_n(x)|^2\text{d}x=1
> $$
> 原则上任何函数都可以在这一组基上展开，
> $$
> f(x)=\sum_{n=1}^\infty c_n\psi_n(x)\,,\quad\text{Fourier expansion}
> $$
> 这是一定意义上的 completeness. 当然真正的完备性应该是
> $$
> \sum_{n=0}^\infty\psi_m^*(x)\psi_n(x')=\delta(x-x')
> $$
> 如果已经知道初态的波函数 $\varPsi(x,0)$，那么
> $$
> \begin{aligned}
> \varPsi(x,0)&=\sum_{n=1}^\infty c_n\psi_n(x)\\\\
> \varPsi(x,t)&=\sum_{n=1}^\infty c_n\psi_n(x)e^{-\text{i}E_nt/\hbar}\,,\quad c_n=\sqrt{\frac{2}{a}}\int_0^a\sin\left(\frac{n\pi x}{a}\right)\varPsi(x,0)\text{d}x
> \end{aligned}
> $$
> 能量平均值：
> $$
> \braket{H}=\int_0^a\varPsi^*(x,t)\hat{H}\varPsi(x,t)\text{d}x=\sum_{n=1}^\infty |c_n|^2E_n
> $$

一个简单的例子是 $\varPsi(x,0)=Ax(a-x)$，那么
$$
A=\sqrt{\frac{30}{a^5}}\,,\quad c_n=\begin{cases}
\frac{8\sqrt{15}}{(n\pi)^3}&n\text{ is odd}\\\\
0&n\text{ is even}
\end{cases}
$$
::: tip

这里要说一下数值计算的重要性. 我们知道氢原子波函数已经能完全解出来，但是还是有人为了氢原子光谱写两大本专著. 实际上数值计算的精度是非常重要的，对于一个任意的原子我们算波函数的精度甚至不一定能达到 $5\%$ 的精度.

:::

## 谐振子

谐振子的 Schrödinger 方程是
$$
-\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}+\frac{1}{2}m\omega^2x^2\psi = E\psi
$$
::: tip

世界上本没有谐振子，因为近似产生了谐振子.

:::

它的 Hamiltonian 是
$$
\hat{H} = \frac{1}{2m}\left[p^2+(m\omega x)^2\right]
$$
因为 $u^2+v^2=(\text{i}u+v)(-\text{i}u+v)$，定义算符
$$
\hat{a}^\pm=\frac{1}{\sqrt{2\hbar m\omega}}(\mp\text{i}p+m\omega x)
$$
所以
$$
\hat{a}^-\hat{a}^+=\frac{1}{2\hbar m\omega}[p^2+(m\omega x)^2-\text{i}m\omega(xp-px)]
$$
::: warning

我们说到把 $x$ 表象中的其他物理量变成算符，这就是所谓的一次量子化；二次量子化指的是把波函数再进行一次量子化，将波函数视为一个场，表征很多同样粒子的产生和湮灭.

:::

由上述式子，得到产生湮灭算符的乘积：
$$
\hat{a}^-\hat{a}^+=\frac{\hat{H}}{\hbar\omega}-\frac{\text{i}}{2\hbar}[x,p]\Longrightarrow\hat{H}=\hbar\omega\left(\hat{a}^-\hat{a}^+-\frac{1}{2}\right)=\hbar\omega\left(\hat{a}^+\hat{a}^-+\frac{1}{2}\right)
$$
其中 $[\hat{a}^-,\hat{a}^+]=1$.

这样的 Schrödinger 方程的物理意义是，某个 $\psi$ 作为一个「声子」，$\hat{a}^+\psi$ 是在上面再产生一个声子，$\hat{a}^-\psi$ 是在上面湮灭一个声子. 假设 $\psi$ 是一个能量本征态，则
$$
\hat{H}\psi=E\psi\Longrightarrow\hat{H}(\hat{a}^+\psi)=(E+\hbar\omega)(\hat{a}^+\psi)\,,\quad\hat{H}(\hat{a}^-\psi)=(E-\hbar\omega)(\hat{a}^-\psi)
$$
这是数学上的结构. 边界条件就是最小的基态能量.