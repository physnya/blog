---
title: Lesson 8 Diffusion
permalink: /biophysics/lesson-8-diffusion/
createTime: 2025/11/11 20:57:00
---
之前讲的内容比较静态，之后我们需要了解分子的动力学. 从扩散开始，到最重要的分子马达.

## 随机行走：Brown 运动

我们认为 Brown 粒子本身和水分子处于热平衡的状态，取时间尺度为 $\Delta t$，在这么短的时间内只有一个水分子和粒子发生碰撞. 那么考虑 $N$ 个时间段之后，首先可以确认的是，平均值 $\braket{x_N}$ 应该等于零.
$$
\braket{x_N^2} =\Braket{\left(\sum_i\Delta x_i\right)\left(\sum_j\Delta x_j\right)} = \sum_i\braket{\Delta x_i^2}+\sum_{i\neq j}\braket{\Delta x_i\Delta x_j}
$$
认为任意两次之间是相互独立的，所以上式化为
$$
\braket{x_N^2}=\sum_i\braket{\Delta x_i^2} \propto t\Longrightarrow\braket{x_N^2}=2Dt
$$
如果是很多个 Brown 粒子，那么考虑这些粒子的浓度，首先是守恒方程
$$
\frac{\partial c}{\partial t}+\nabla\cdot\vec{j}=0
$$
对于 $x\to x+\text{d}x$ 之间的一段，在一维情况下，
$$
\vec{j}=\frac{1}{A\Delta t}\left(-\frac{N(x+\text{d}x)}{2}+\frac{N(x)}{2}\right)\hat{x} = -\frac{\partial N(x)}{\partial x}\cdot\frac{(\Delta x)^2}{A\Delta x\Delta t} = -\frac{\partial N(x)}{\partial x}\cdot D\cdot\frac{1}{A\Delta x}
$$

> 那个 $1/2$ 来源于粒子可以往两边跑.

也就是 $\vec{j}=-D\nabla c$ (Fick 扩散定律)，最终联立有
$$
\frac{\partial c}{\partial t}= D\nabla^2 c
$$
解得粒子浓度应该是
$$
c(x,t)=\frac{N}{\sqrt{4\pi Dt}}e^{-x^2/(4Dt)}
$$
明显看出这里的方差正是 $2Dt$. 同时从量纲可以看出，存在一个特征时间 $\tau(L)=L^2/D$，这代表着平均到达 $L$ 处的首次到达时间. 简单估计 Brown 运动的效率：

* $\text{K}^+$ 扩散系数为 $10^3\,\mu\text{m}^2/\text{s}$，在细胞内部的到达时间大概是 $0.1\text{ s}$，非常有效.
* 但是如果考虑最长的神经细胞 (和身体尺度相当)，到达时间就是 $10^9\text{ s}$ 量级 (31 年！).

一个重要应用是所谓的 FRAP 方法：用荧光蛋白结合要标记的物质，然后杀灭某个范围 (比如细胞膜) 内部的该物质，发现荧光按照某种曲线恢复. 这个过程实际上就是一个偏微分方程，用偶函数的级数解代进去就可以做，最终的曲线应该和扩散系数有联系，是一种测量扩散系数的方案.

吸收球问题：假设存在一个球状细胞，外部有很多小分子，小分子碰到细胞膜就会被吸收进去. 如果无穷远处有一个粒子库，保证无穷远边界上的浓度是恒定的，要求解细胞最终能够吸收多少小分子进入细胞内部.

> 在这个问题里，我们不知道细胞里面发生了什么，只是取细胞膜上面的边界条件为 $c(R)=0$，无穷远处 $c(\infty)=c_0$，产生一个往细胞内部吸收的浓度差. 方程为
> $$
> \nabla^2c=0
> $$
> 只需要考虑径向，也就是
> $$
> \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial c}{\partial r}\right)=0
> $$
> 最终解得，
> $$
> c=B-\frac{A}{r},\quad c(\infty)=c_0,\quad c(R)=0\Longrightarrow c(r)=c_0\left(1-\frac{R}{r}\right)
> $$
> 向细胞内部的流和流量为
> $$
> j = -D\left.\frac{\partial c}{\partial r}\right|_{r=R}=\frac{Dc_0}{R},\quad 4\pi R^2j = 4\pi Dc_0R\propto R
> $$
> 因此，细胞的吸收效率是正比于 $R^1$ 而不是 $R^2$！以氧气为例，氧气的消耗率应该正比于 $R^{2\sim3}$，所以一个细胞不可能长得太大，因为氧气供不应求.
>
> ::: warning
>
> 当然，如果细胞是柱状的，那么就会是 $r\ln r$ 的形式，还是无法达到 $r^{2\sim3}$，只能说这是一种优化.
>
> :::

我们已经知道了对于一个小的细胞而言，它的吸收效率并不低. 那么为什么 *E.coli* 这样的细胞还需要运动能力呢？

如果不动，那么吸收一个分子的时间是 $t_w =L^2/D$；如果以速度 $v$ 追击，那么吸收一个分子的时间是 $t_r=L/v$. (当然，我们这里没有考虑主动追击所消耗的能量是多少) 两个时间相等的临界点是
$$
t_r=t_w\Longrightarrow\frac{Lv}{D}=1
$$
对于 *E.coli* 来说，速度最快大概是 $30\,\mu\text{m}/\text{s}$；同时扩散系数大约是 $1000\,\mu\text{m}^2/\text{s}$. 可以算出，$L\sim30\,\mu\text{m}$. *E.coli* 的运动策略是，直线跑一段，然后在原地打转，之后再选择一个方向直线行动，这个直线跑的距离就是 $L$ 的量级，比这个量级低的话跑动就是没有收益的. $vL/D\equiv\text{Pe}$ 这个量被称为 Peclet number，决定了细胞是否需要跑动，$\text{Pe}>1$ 时跑动就是有收益的.

其实 $30\,\mu\text{m}/\text{s}$ 是非常快的，需要特殊的分子马达，对于真核细胞来说跑动并没有收益，因为这些细胞的运动速度基本上是 $1\mu\text{m}/\text{min}$ 的量级.

## Duffusion in External Fields

在一个外部的势能场 $U(x)$ 中，同时存在一个摩擦 $f=\xi v$，得到
$$
D\nabla c+\frac{c\nabla U}{\xi}=0
$$
解得 Einstein 关系
$$
D\xi=k_BT
$$
(又称，**涨落 - 耗散定理**) 其中 $D$ 表征着涨落、$\xi$ 表征着耗散.

推论：
$$
x=vt=\frac{f}{\xi}\cdot t=ft\cdot\frac{D}{k_BT}=\frac{f}{k_BT}\cdot\frac{\sigma_x^2}{2}
$$
也就是 $x$ 和其方差 $\sigma_x^2$ 有关系. 这意味着涨落和响应是耦合的.

---

一维粒子跳跃问题：考虑一个数轴上的粒子，在每一个点向左 / 向右的概率分别是 $k_-\Delta t$ 和 $k_+\Delta t$ (有概率留下来). 那么
$$
\begin{aligned}
P(x,t+\Delta t)&=[1-(k_++k_-)\Delta t]P(x,t)\\\\
&\quad+(k_+\Delta t)P(x-\Delta x,t)+(k_-\Delta t)P(x+\Delta x,t)
\end{aligned}
$$
展开，应该给 $x$ 展开到二阶，$t$ 展开到一阶，得到 Fokker-Planck 方程
$$
\frac{\partial P(x,t)}{\partial t}=-\frac{\partial}{\partial x}\left(vp-D\frac{\partial P}{\partial x}\right)
$$
其中，
$$
v=a(k_+-k_-),\quad D=\frac{1}{2}a^2(k_++k_-)
$$
