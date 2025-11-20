---
title: Lesson 17 CG 系数
permalink: /quantum-mechanics/lesson-17-CG-coefficient/
createTime: 2025/11/19 16:08:56
---
自旋是一个矢量算符，作用在自旋空间.

$S_y$ 的期望值：
$$
\braket{S_y}=\chi^\dagger(t)S_y\chi(t)=-\frac{\hbar}{2}\sin\alpha\sin(\gamma B_0t)
$$
在磁场中自旋会进动.

如果考虑非均匀的磁场：
$$
\vec{B}=-\alpha x\hat{i}+(B_0+\alpha z)\hat{k}
$$
自旋磁矩的受力为 $\vec{F}=\nabla(\vec\mu\cdot\vec{B})$，利用旋磁比，$\vec{F}=\gamma\nabla(\vec{S}\cdot\vec{B})$. 受力为
$$
F_z=\gamma\alpha S_z,\quad F_x=-\gamma\alpha S_x
$$
但是自旋本身在绕着 $z$ 轴旋转，$S_x$ 的时间平均是 $0$，最后的运动取决于 $S_z$ 的正负，向上自旋就会向上漂移，向下自旋就会向下漂移，这就是 Stern - Gerlach 效应.

经典的结论认为，因为没有量子化，所以在整个屏幕上观察到的不应该是两点，而应该是一个均匀的角分布.

---

轨道角动量量子数为 $l$，自旋角动量量子数为 $s$，总角动量 $\vec{j}=\vec{L}+\vec{S}$，这个可加性并不是显然的.

考虑两个粒子的 Hilbert 空间 $\mathcal{H}_{\text{total}}=\mathcal{H}_1\otimes\mathcal{H}_2$，原来的上、下两种自旋会产生四种可能性，这四个态都是 $S^2$ 的本征态.

对于 $\ket{\uparrow\uparrow}$ 态，两个 $z$ 分量都朝上，这一定是一个激发态. 进一步地，有三重态：
$$
\ket{1,1}=\ket{\uparrow\uparrow},\quad\ket{1,0}=\frac{1}{\sqrt{2}}(\ket{\uparrow\downarrow}+\ket{\downarrow\uparrow}),\quad\ket{1,-1}=\ket{\downarrow\downarrow}
$$
合成的角动量在 $j=j_1+j_2,j_1+j_2-1,\cdots,|j_1-j_2|$ 之间，
$$
\ket{j,m}=\sum_{j_1,m_1;j_2,m_2}C^{j,m}_{j_1,m_1;j_2,m_2}\ket{j_1,m_1;j_2,m_2}
$$
这里的 $C$ 是 Clebsch - Gordan 系数，考试的时候会给一个表格.