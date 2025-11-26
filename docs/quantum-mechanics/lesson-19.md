---
title: Lesson 19 多粒子系统
permalink: /quantum-mechanics/lesson-19/
createTime: 2025/11/26 15:24:02
---
假设有 $m$ 个 fermion，那么波函数应该怎么写？

> 女科学家 Slater 想出一个行列式来描述这个波函数：
> $$
> \begin{vmatrix}
> \psi_1(\vec{r}_1)&\psi_2(\vec{r}_1)&\cdots&\psi_m(\vec{r}_1)\\
> \psi_1(\vec{r}_2)&\psi_2(\vec{r}_2)&\cdots&\psi_m(\vec{r}_2)\\
> \vdots&\vdots&\ddots&\vdots\\
> \psi_1(\vec{r}_m)&\psi_2(\vec{r}_m)&\cdots&\psi_m(\vec{r}_m)
> \end{vmatrix}
> $$
> 这个行列式巧妙地利用了一个性质：假如说第 $i$ 个粒子占据了第 $j$ 个轨道 —— $\psi_i(\vec{r}_j)$，那么和这一个乘在一起的那一项的其他所有粒子都不能占据这个轨道了，这正是 Pauli 不相容原理.

::: warning

老师开始夹带私货了，讲他在做的东西.

:::

考虑用「硬核 Boson」构成的一个系统，统计行为类似于 fermion，也就是把很多个自旋排列在一个圆环上，然后因为相邻的自旋不能在同一个态，所以它们是 $\uparrow\downarrow\uparrow\downarrow\cdots$ 或者是 $\downarrow\uparrow\downarrow\uparrow\cdots$ 这两个简并的基态，这叫做 Neel 态.

但是我们现在每隔一个自旋加一个不为零的磁场 (整体来看是一个锯齿状的磁场)，那么上面两个态就不是简并的了，有一个态的能量更低. 更高能量的态会在很多自由度上发生隧穿，掉到这个能量更低的态上面来.

---

两体系统的纠缠表现为
$$
\frac{1}{\sqrt{2}}(\ket\uparrow\ket\downarrow-\ket\downarrow\ket\uparrow)=\ket{0,0}=\Ket{\frac{1}{2},\frac{1}{2};0,0}=\frac{1}{\sqrt{2}}(\ket\rightarrow\ket\leftarrow-\ket\leftarrow\ket\rightarrow)
$$
