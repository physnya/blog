---
title: Lesson 26 相对论中的能量和动量守恒
permalink: /electrodynamics/lesson-26/
createTime: 2025/12/16 11:26:07
---
四维力和四维速度有关系：
$$
F_\mu = \frac{\text{d}}{\text{d}\tau}(m_0U_\mu)
$$
这里 $\tau$ 是固有时间. 三维形式是，
$$
\gamma\vec{F} = \frac{\text{d}}{\text{d}\tau}(\gamma m_0\vec{v}),\quad \gamma P = \frac{\text{d}}{\text{d}\tau}(\gamma m_0c^2)
$$
从这里可以看出，无法通过动力学的方式使得某个有质量物体达到光速. 同时观察后面一个式子，我们应该可以把 $\gamma m_0c^2$ 这样一个量称为「能量」，物体的总能量正是
$$
E=\gamma m_0c^2 =mc^2
$$
物体的动能是其总能量减去静能量，为 $K=(\gamma-1)m_0c^2$；在低速近似下，动能表达式回归到 Newton 力学的表达式，也就是 $K\approx\displaystyle{\frac{1}{2}m_0v^2}$. 但是 $m_0c^2$ 这一部分能量的含义是什么？

> 如果我们能够在实验上看到质量变化导致的能量释放，那么我们才能说这一部分静能具有物理含义，否则只是一个叠加常数罢了.

质点的四维动量及其守恒：
$$
p_\mu = \left(\vec{p},\frac{\text{i}E}{c}\right)
$$
四维动量的模方是一个四维标量，也就是有守恒：
$$
p^2-\frac{E^2}{c^2} = \text{const.} = -m_0^2c^4\Longrightarrow E^2 = p^2c^2+m_0^2c^4
$$
(可以换到粒子的静止系中来导出后面的关系.)

对于二体衰变问题 $A\to B+C$，可以完全定解：
$$
\begin{aligned}
m_Ac^2 &= \sqrt{m_B^2c^4+p_B^2c^2}+\sqrt{m_C^2c^4+p_C^2c^2}\\\\
0&= p_B+p_C
\end{aligned}
$$
上述表达式是在 $A$ 静止系中讨论的. 只要是没有自旋的标量粒子 $A$，静止系中末态的动量分布是均匀的.

---

Compton 散射：$\gamma+e\to \gamma+e$.

能动量守恒写为
$$
m_ec^2+p_\gamma c = \sqrt{m_e^2c^4+p_e'^2c^2}+p_\gamma'c,\quad \vec{p}_\gamma = \vec{p}_e'+\vec{p}_\gamma'
$$
其中后面一个矢量式的分量方程为
$$
p_\gamma = p_\gamma'\cos\theta+p_e'\cos\phi,\quad p_\gamma'\sin\theta=p_e'\sin\phi
$$
实际上的未知量有 $\theta,\phi,p_\gamma'$ 和 $p_e'$ 4 个，没办法解出来，但是实验上可以测量 $\theta$ 角，所以这里把 $\theta$ 视为已知量，解得：
$$
\frac{p_\gamma'}{p_\gamma} = \frac{1}{\displaystyle{1+\frac{E_\gamma}{m_0c^2}(1-\cos\theta)}}
$$
这个量可以通过测量入射和出射光子的波长可以得到.