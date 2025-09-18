---
title: Lesson 2 数学准备
permalink: /electrodynamics/lesson-2-math-prepare/
createTime: 2025/09/18 13:49:17
---
## 数学准备

上节课讲到旋度和散度所具有的性质，那么任意一个无旋场可以表达为一个标量场的梯度
$$
\nabla\times\vec{g}=0\Longrightarrow\exist\varphi\,,\,\nabla\varphi=\vec{g}
$$
任意一个无散场可以表示为一个矢量场的旋度：
$$
\nabla\cdot\vec{g}=0\Longrightarrow\exist\vec{f}\,,\,\nabla\times\vec{f}=\vec{g}
$$
应用到电磁场上，可以把电场定义为一个标势的散度，这个标势就是「电势」；可以把磁场定义为一个矢势的旋度，这个矢势就是「磁矢势」. 另外，我们把类似电场的这一类场称为「纵场」，类似磁场的这一类场称为「横场」.

若对标量场的梯度求散度，则
$$
\nabla\cdot(\nabla\varphi)=\nabla^2\varphi\,,\quad\nabla^2=\frac{\partial^2}{\partial (x^i)^2}
$$
若对矢量场的旋度求旋度，则
$$
\nabla\times(\nabla\times\vec{g})=\nabla(\nabla\cdot\vec{g})-\nabla^2\vec{g}
$$
这个式子可以用 Levi-Civita 符号证明. 上面这两式若对势函数操作，就得到 Maxwell 方程的其中两个，也就是电场的散度和磁场的旋度. 另外，从后面的式子来看，对于矢势的约束实际上不完整，因此需要一些规范条件，比如 Coulomb 规范要求 $\nabla\cdot\vec{A}=0$，这被称为横场规范，这样的 Maxwell 方程形式看起来是对称的；当然研究电磁波时，可能需要用其他的规范，让方程更加对称.

讨论一些常用的公式：
$$
\begin{aligned}
\nabla\frac{1}{r}&=-\frac{\vec{r}}{r^3}=-\frac{\hat{r}}{r^2}\\\\
\nabla\cdot\frac{\vec{r}}{r^3}&=-\nabla^2\frac{1}{r}=4\pi\delta^3(0)\\\\
\nabla\times\frac{\vec{r}}{r^3}&=\nabla\times\nabla\frac{1}{r}=0\\\\
\nabla\times\vec{r}&=0
\end{aligned}
$$
这里的 $\vec{r}=\vec{x}'-\vec{x}$，理解为场点到场源的距离.

/Proof/ (第二个式子的证明)

> 考虑在源点周围画一个闭合球面，在之中体积分：
> $$
> \iiint_{\text{in}}\nabla\cdot\frac{\vec{r}}{r^3}\text{d}V=\iint_S\frac{\vec{r}}{r^3}\cdot\text{d}\vec{S}=\iint_S\frac{r}{r^3}\cdot r^2\text{d}\Omega=4\pi
> $$
> 但是如果这个球面没有包围这个源点，积分就是零：
> $$
> \iiint_{\text{out}}\nabla\cdot\frac{\vec{r}}{r^3}\text{d}V=0
> $$
> 将球面无限缩小，得到结果是 Dirac $\delta$ 函数.

讲义上还有一些另外的计算，留给大家证明：
$$
\begin{aligned}
(\vec{a}\cdot\nabla)\vec{r}&=\vec{a}\\\\
\nabla(\vec{a}\cdot\vec{r})&=\vec{a}
\end{aligned}
$$
$\nabla$ 作用于乘积函数：
$$
\begin{aligned}
\nabla(\varphi\psi)&=\varphi\nabla\psi+\psi\nabla\varphi\\\\
\nabla\cdot(\varphi\vec{A})&=\vec{A}\cdot\nabla\varphi+(\nabla\cdot\vec{A})\varphi\\\\
\nabla\times(\varphi\vec{A})&=(\nabla\varphi)\times\vec{A}+\varphi(\nabla\times\vec{A})\\\\
\nabla\cdot(\vec{A}\times\vec{B})&=\vec{B}\cdot(\nabla\times\vec{A})-\vec{A}\cdot(\nabla\times\vec{B})\\\\
\nabla\times(\vec{A}\times\vec{B})&=-\vec{B}(\nabla\cdot\vec{A})-(\vec{A}\cdot\nabla)\vec{B}+\vec{A}(\nabla\cdot\vec{B})+(\vec{B}\cdot\nabla)\vec{A}
\end{aligned}
$$

## 电磁规律的基本方程

Coulomb 定律：
$$
\vec{F}=\frac{q_1q_2}{4\pi\varepsilon_0}\frac{\vec{r}_1-\vec{r}_2}{|\vec{r}_1-\vec{r}_2|^3}
$$
只对 **点电荷** 适用，满足叠加原理. 因为 Coulomb 力具有叠加原理，所以它们产生的电场也符合叠加原理，电场就写成
$$
\vec{E}(\vec{r})=\frac{1}{4\pi\varepsilon_0}\iiint_V\frac{\rho(\vec{r}')(\vec{r}-\vec{r}')}{|\vec{r}-\vec{r}'|^3}\text{d}\tau'
$$
这也是 Poisson 方程的特解.

> 另外，要理解的是「场」并非超距作用，源点的某种变化要经过光速的传递才能把改变的效果传递到场点.

如果是点电荷分布，则密度函数写成 $\rho(\vec{r}')=q_i\delta^3(x^i)$，也就是用 $\delta$ 函数来描述点电荷的分布. 有真空中的 Gauss 定理
$$
\iiint_\text{in}(\nabla\cdot\vec{E})\text{d}\tau=\iint_S\vec{E}\cdot\text{d}\vec{S}=\iiint_{\text{in}}\frac{\rho}{\varepsilon_0}\text{d}\tau
$$
因为这个积分式不管取任何的闭合曲面都成立，所以被积函数相等，有 Maxwell 方程的第一个式子成立
$$
\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}
$$
当然，上述公式的基础是反平方率成立. 目前的精度能测量到的相对反平方率的最大可能偏移也在 $10^{-15}$ 量级，因此我们可以说这些方程基本是正确的.

现在可以计算电场的旋度，
$$
\iint_S(\nabla\times\vec{E})\cdot\text{d}\vec{\sigma}=\oint_L\vec{E}\cdot\text{d}\vec{l}=0\Longrightarrow\nabla\times\vec{E}=0
$$
这个性质和平方反比是无关的，只和电场的径向性有关.

---

磁场的相关定律要比静电场复杂.