---
title: Lesson 17 波导
permalink: /electrodynamics/lesson-17-wave-guide/
createTime: 2025/11/13 15:06:30
---
一个平面波可以被 7 个独立的参数描述，分别是振幅的 $x,y$ 分量和对应的相位，以及波矢的三个分量.

能量表达式仍然不变，如果外接电源，则电池的能量会被带走进入电磁波的能量中.

直入射良导体的情况，
$$
\frac{E'_0}{E_0}=\frac{k''-k}{k+k''},\quad\frac{E_0''}{E_0}=\frac{2k}{k+k''}
$$
透射波的波矢为 $k''=k_{0,z}+\text{i}\tau$，良导体情况下 $\tau\sim k_{0,z}$，因此
$$
\frac{k''}{k}=\sqrt{2}\cdot\frac{k_{0,z}}{k}e^{\text{i}\pi/4} = \sqrt{2}\cdot\frac{\sqrt{\mu\sigma\omega /2}}{\sqrt{\varepsilon_0\mu_0}\omega}e^{\text{i}\pi/4}=\sqrt{\frac{\sigma}{\varepsilon_0\omega}}e^{\text{i}\pi/4}
$$
这里反射波带走了几乎所有的能量，透射波强度小、穿透深度小.

## 电磁波在波导中的传播

假设电磁波的解为
$$
\vec{E}(\vec{x},t)=\vec{E}_0(x,y)e^{\text{i}(k_zz-\omega t)}
$$
做这样猜解的原因是，波在 $x,y$ 方向都被限制了，因此只能沿着 $z$ 方向传播；方程为
$$
\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}+(k^2-k_z^2)u=0
$$
分离变量，假设 $U(x,y)=X(x)Y(y)$，得到两个简谐方程
$$
\frac{\text{d}^2X}{\text{d}x^2}+k_x^2X=0,\quad\frac{\text{d}^2Y}{\text{d}y^2}+k_y^2Y=0
$$
解得
$$
\begin{aligned}
&E_x=(A\sin k_xx+B\cos k_xx)(C\sin k_yy+D\cos k_yy)e^{\text{i}(k_zz-\omega t)}\\\\
&E_y=(A'\sin k_xx+B'\cos k_xx)(C'\sin k_yy+D'\cos k_yy)e^{\text{i}(k_zz-\omega t)}\\\\
&E_z=(A''\sin k_xx+B''\cos k_xx)(C''\sin k_yy+D''\cos k_yy)e^{\text{i}(k_zz-\omega t)}
\end{aligned}
$$
边界条件是 $E$ 在边界上的切向分量为零，$B$ 在边界上的法向分量为零 (波导管的边界是良导体)；同时有横波条件 $\partial E_n/\partial\hat{n}=0$. 能够出现的模式要求
$$
k_x = \frac{m\pi}{a},\quad k_y=\frac{n\pi}{b}
$$
同时如果模式太高，会造成 $k_z$ 变为虚数、也就是传播衰减的情况，这定出了一个截止模式.

对于磁场，应该有
$$
\nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t}=\text{i}\omega\vec{B}
$$
最终应该有两种波，横电波 (TE) 和横磁波 (TM)，两种波分别满足
$$
\frac{A_1}{A_2} = -\frac{k_y}{k_x},\quad \frac{A_1}{A_2}=\frac{k_x}{k_y}
$$
这两种偏振恰好是垂直的两种线偏振.

截止频率：
$$
\omega_{c,mn}=\frac{\pi}{\sqrt{\mu\varepsilon}}\sqrt{\left(\frac{m}{a}\right)^2+\left(\frac{n}{b}\right)^2}
$$
所有截止频率中最低的一个是 $10$ 模式的截止频率 (假设长边是 $a$)，获得截止波长
$$
\lambda_{c,10}=2a
$$
可以通过改变波导管的尺寸来限制能够传播的模式，简化可能传播的那些频率. 同时，波导管中的波前并不是垂直 $z$ 方向，而是一个侧着的平面，相速度允许超过光速；这样的超光速并不违背相对论，因为这是一个严格的单色波，没有调幅和调频，因此不能携带任何有效的信号.