---
title: Lesson 24 狭义相对论的速度变换
permalink: /electrodynamics/lesson-24/
createTime: 2025/12/09 13:20:31
---
之前的推导中，「时钟」只是测量时间间隔的一种工具，实际上所有物理过程的时间尺度都会发生变化. 同时在狭义相对论的语境下，「速度」不能够很好地描述运动，取而代之的是 $\gamma$ 因子.

/Example/

> 实验室中产生的 $\pi$ 介子寿命是 $2.56\times10^{-8}\text{ s}$ (自己的固有系中)，$\gamma=71$.
>
> 在实验室系中飞行 $6\text{ m}$ 之后，剩下来的粒子数是
> $$
> \frac{N}{N_0}=\exp\left(-\frac{t}{\gamma\tau}\right)\approx99\%
> $$
> 相较于没有 $\gamma$ (非相对论理论) 的 $\approx40\%$ 的结果，可以验证相对论的正确性.
>
> ---
>
> 在 $\pi$ 介子静止系看来，探测器的这 $6\text{ m}$ 长度缩短到 $0.084\text{ m}$，相对运动的时间也远小于粒子的固有寿命.

在生活中，我们的 GPS 定位也是要做相对论效应的修正. 如果相对论不成立，我们只需要三颗卫星来求解地球上某一点的坐标；但是现在时间也是相对的，所以必须考虑第四颗卫星做时间修正.

因果律的限制：假设地面上两件事件 $(x_p,t_p)$ 和 $(x_q,t_q)$，其中 $t_p<t_q$. 飞船系观测到的时间间隔为
$$
t_q'-t_p' =\gamma(t_q-t_p) - \frac{\gamma v}{c^2}(x_q-x_p)
$$
时间顺序可能发生颠倒. 但是这样是否会影响因果律？答案是不会，因为如果这两件事没有关联，那么时序颠倒并不产生任何后果；而如果之间有关联，那么关联必须以低于电磁波的速度来传递，也就是：
$$
t_q-t_p\geqslant\frac{x_q-x_p}{c}>\frac{v}{c^2}(x_q-x_p)
$$
所以因果律不会被破坏.

---

相对论的速度合成：
$$
\text{d}x'=\frac{\text{d}x-v\text{d}t}{\sqrt{1-v^2/c^2}}=\frac{u_x-v}{\sqrt{1-v^2/c^2}}\text{d}t,\quad\text{d}t'=\frac{\text{d}t-v\text{d}x/c^2}{\sqrt{1-v^2/c^2}}=\frac{1-vu_x/c^2}{\sqrt{1-v^2/c^2}}\text{d}t
$$
其中 $u_x=\text{d}x/\text{d}t$ (地面系中的速度). 所以相对运动系中的速度是
$$
u_x'=\frac{\text{d}x'}{\text{d}t'}=\frac{u_x-v}{1-vu_x/c^2},\quad u_y'=\frac{u_y}{\gamma(1-vu_x/c^2)},\quad u_z'=\frac{u_z}{\gamma(1-vu_x/c^2)}
$$
这是三维速度的变换式，而三维速度并不是四维矢量，所以变换法则和时空坐标的变换不同. 为了更好地描述四维的速度变换，在之后我们要引入四维动量的变换.

---

相对论原理的四维表述：定义线元
$$
\text{d}x^2+\text{d}y^2+\text{d}z^2-c^2\text{d}t^2=\text{d}s^2
$$
线元在四维的变换下保持不变. 如果用 $\text{i}ct$ 规则，那么 Lorentz 矩阵为
$$
\mathbf{L}=\begin{pmatrix}
\gamma&0&0&\text{i}\gamma v/c\\
0&1&0&0\\
0&0&1&0\\
-\text{i}\gamma v/c&0&0&\gamma
\end{pmatrix}
$$


