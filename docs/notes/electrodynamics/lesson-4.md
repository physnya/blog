---
title: Lesson 4 Maxwell 方程组
permalink: /electrodynamics/lesson-4-maxwell/
createTime: 2025/09/25 15:14:40
---
我们到目前为止已经得到了静电场和静磁场的基本方程. 但是这两组方程都是特殊的，前者只在电荷分布守恒的情况下成立，后者要求电流分布稳恒.

而电磁感应中产生的电场不是由电荷产生的，所以这被称为感生电场.

感生电场方向的判定：感生电动势产生的电流产生的磁场，应该抵抗磁通量的变化.
$$
\oint\vec{E}\cdot\text{d}\vec{l}=-\iint\frac{\partial\vec{B}}{\partial t}\cdot\text{d}\vec{S}
$$
利用 Stokes 定理，得到
$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}
$$
这个方程和之前的散度方程能够联立吗？

> 这两者恰好是电场的纵场部分和横场部分，而且我们没有电场的其他来源了，所以这两者可以作为电场的普遍规律而存在.

现在从实验规律能够写出的方程有：
$$
\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}\,,\quad\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\,,\quad\nabla\cdot\vec{B}=0\,,\quad\nabla\times\vec{B}=\mu_0\vec{j}
$$
但是，若对 ④ 式求散度，会得到
$$
\nabla\cdot(\nabla\times\vec{B})=\mu_0\nabla\cdot\vec{j}=-\mu_0\frac{\partial\rho}{\partial t}=0
$$
这意味着电荷分布不变，也就是稳恒电流情况，这个方程无法适配电流不稳恒的情况. 所以我们需要加一项来适配电流分布变化的情况，有
$$
\nabla\times\vec{B}=\mu_0(\vec{j}+\vec{j}_{\text{d}})\,,\quad\nabla\cdot\vec{j}_{\text{d}}=-\nabla\cdot\vec{j}=\frac{\partial\rho}{\partial t}=\varepsilon_0\nabla\cdot\left(\frac{\partial\vec{E}}{\partial t}\right)
$$
可以合理猜测位移电流 $\vec{j}_{\text{d}}$ 就等于 $\varepsilon_0$ 倍电场对时间的偏导. 我们直接把位移电流定义为这个量，后来在实验中这个方程的正确性被验证了.
$$
\text{Maxwell Equation}\left\{\begin{aligned}
&\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}\\\\
&\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\\\\
&\nabla\cdot\vec{B}=0\\\\
&\nabla\times\vec{B}=\mu_0\vec{j}+\mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}\right.
$$
波动方程导出 (真空中)：
$$
\nabla\times(\nabla\times\vec{E})=-\frac{\partial}{\partial t}(\nabla\times\vec{B})=-\mu_0\varepsilon_0\frac{\partial^2\vec{E}}{\partial t^2}\Longrightarrow\frac{\partial^2\vec{E}}{\partial t^2}+\frac{1}{\mu_0\varepsilon_0}\nabla^2\vec{E}=0
$$
磁场也是对称的.

另外还有 Lorentz 力公式 $\vec{f}=\rho\vec{E}+\vec{j}\times\vec{B}$ (力密度) 和电荷守恒方程.

---

能量守恒定律：要在数学上找出一个能量，能用 $\vec{E}$ 和 $\vec{B}$ 来描述.

取一个体积元，电磁场的功率密度积分应该是
$$
\iiint_V W\text{d}\tau=-\frac{\text{d}}{\text{d}t}\iiint_V w\text{d}\tau-\iint\vec{S}\cdot\text{d}\vec{\sigma}
$$
这里 $w$ 是电磁场的能量密度、$\vec{S}$ 是来自于电磁场的流动性，描述单位时间流入的能量 (能流密度). 上式可以写出微分形式
$$
W=-\frac{\partial w}{\partial t}-\nabla\cdot\vec{S}
$$
下面导出这两个能量有关的量与 $\vec{E}$ 和 $\vec{B}$ 的关系，由 Lorentz 力公式知道磁场不作功，应该有
$$
W=\vec{E}\cdot\vec{j}=\vec{E}\cdot\left(\frac{1}{\mu_0}\nabla\times\vec{B}-\varepsilon_0\frac{\partial\vec{E}}{\partial t}\right)=\frac{1}{\mu_0}\vec{E}\cdot\nabla\times\vec{B}-\frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon_0|\vec{E}|^2\right)
$$
而有矢量分析公式：
$$
\nabla\cdot(\vec{A}\times\vec{B})=\vec{B}\cdot\nabla\times\vec{A}-\vec{A}\cdot\nabla\times\vec{B}
$$
代入，得到
$$
\begin{aligned}
W&=-\frac{1}{\mu_0}\nabla\cdot(\vec{E}\times\vec{B})+\frac{1}{\mu_0}\vec{B}\cdot\nabla\times\vec{E}-\frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon_0|\vec{E}|^2\right)\\\\
&=-\frac{1}{\mu_0}\nabla\cdot(\vec{E}\times\vec{B})-\frac{1}{\mu_0}\vec{B}\cdot\frac{\partial\vec{B}}{\partial t}-\frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon_0|\vec{E}|^2\right)\\\\
&=-\nabla\cdot\left(\frac{1}{\mu_0}\vec{E}\times\vec{B}\right)-\frac{\partial}{\partial t}\left(\frac{1}{2\mu_0}|\vec{B}|^2+\frac{1}{2}\varepsilon_0|\vec{E}|^2\right)
\end{aligned}
$$
所以能量密度和能流密度分别是
$$
w=\frac{1}{2\mu_0}|\vec{B}|^2+\frac{1}{2}\varepsilon_0|\vec{E}|^2\,,\quad\vec{S}=\frac{1}{\mu_0}\vec{E}\times\vec{B}
$$
这里也可以看出电磁波的传播方向，也就是 Poynting 矢量 (能流密度) 的方向. 另外，电磁波的能量方程也就只和动量方程差一个系数，简单理解就是相对论中无质量的粒子的能量 $E=pc$. 电磁作用下的动量守恒是
$$
\begin{aligned}
\iiint_V\vec{f}\cdot\text{d}\tau=-\frac{\text{d}}{\text{d}t}\iiint\vec{g}\cdot\text{d}\tau-\iint\boldsymbol{T}\cdot\text{d}\vec{S}
\end{aligned}
$$
(其中 $\vec{f}$ 为力密度，$\vec{g}$ 为电磁场动量密度，$\boldsymbol{T}$ 为电磁场动量流密度，是一个张量) 微分式：
$$
\vec{f}=-\frac{\partial\vec{g}}{\partial t}-\nabla\cdot\boldsymbol{T}
$$
利用 Lorentz 力公式和 Maxwell 方程，
$$
\begin{aligned}
\vec{f}&=\rho\vec{E}+\vec{j}\times\vec{B}\\\\
&=\rho(\varepsilon_0\nabla\cdot\vec{E})\vec{E}+\frac{1}{\mu_0}(\nabla\times\vec{B})\times\vec{B}-\varepsilon_0\frac{\partial\vec{E}}{\partial t}\times\vec{B}
\end{aligned}
$$
为了对称，加上三项 (这三项加起来是零，不影响等式)：
$$
\begin{aligned}
\vec{f}&=\rho(\varepsilon_0\nabla\cdot\vec{E})\vec{E}+\frac{1}{\mu_0}(\nabla\times\vec{B})\times\vec{B}-\varepsilon_0\frac{\partial\vec{E}}{\partial t}\times\vec{B}\\
&\quad+\frac{1}{\mu_0}\rho(\nabla\cdot\vec{B})\vec{B}+\varepsilon_0(\nabla\times\vec{E})\times\vec{E}+\varepsilon_0\frac{\partial\vec{B}}{\partial t}\times\vec{E}\\\\
&=-\frac{\partial}{\partial t}(\varepsilon_0\vec{E}\times\vec{B})-\nabla\cdot\left(\frac{1}{2}\left(\varepsilon_0|\vec{E}|^2+\frac{1}{2}\mu_0|\vec{B}|^2\right)\boldsymbol{I}-\varepsilon_0\vec{E}\vec{E}-\frac{1}{\mu_0}\vec{B}\vec{B}\right)
\end{aligned}
$$
于是分别有
$$
\vec{g}=\varepsilon_0\vec{E}\times\vec{B}\,,\quad\boldsymbol{T}=\frac{1}{2}\left(\varepsilon_0|\vec{E}|^2+\frac{1}{2}\mu_0|\vec{B}|^2\right)\boldsymbol{I}-\varepsilon_0\vec{E}\vec{E}-\frac{1}{\mu_0}\vec{B}\vec{B}
$$
/Example/

> 一个简单的例子是无限大带电平板，电荷密度 $\sigma$，向右移动.
>
> 可以算出空间中存在电场和磁场，也有能流密度和动量密度. 这里的电磁场是跟着带电体做匀速运动的.
>
> 但是在相对带电体静止的参考系，就没有磁场，也不存在电磁场的能流密度和动量密度.