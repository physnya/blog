---
title: Lesson 14 磁场的多极展开
permalink: /electrodynamics/lesson-14/
createTime: 2025/11/04 13:16:02
---
继续来讲磁场的多极展开.

磁矩的定义：
$$
\vec{m}=\frac{1}{2}\int_V\vec{x}'\times\vec{j}(\vec{x}')\text{d}\tau'
$$
因为不存在磁单极，所以磁矩对应的是矢势的领头项，为
$$
\vec{A}^{(1)}(\vec{x})=\frac{\mu_0}{4\pi}\frac{\vec{m}\times\vec{r}}{r^3}
$$
而对应的标势表达，可以写成
$$
\varphi_m = \frac{\mu_0}{4\pi}\frac{\vec{m}\cdot\vec{r}}{r^3}
$$
下面考虑用虚功原理来计算磁矩在外磁场中的受力，第一步应该是计算磁矩在外磁场中的势能. 对于在磁场中的磁矩，考虑磁矩产生 $\vec{B}_1$ 和 $\vec{H}_1$，外磁场产生 $\vec{B}_2$ 和 $\vec{H}_2$，总的磁能应该是
$$
\frac{1}{2}\int(\vec{B}_1+\vec{B}_2)\cdot(\vec{H}_1+\vec{H}_2)\text{d}\tau
$$
其中相互作用能是
$$
\begin{aligned}
w &= \vec{B_1}\cdot\vec{H}_2+\vec{B}_2\cdot\vec{H}_1\\\\
&=(\nabla\times\vec{A}_1)\cdot\vec{H}_2+(\nabla\times\vec{A}_2)\cdot\vec{H}_1\\\\
&= \nabla\cdot(\vec{A}_1\times\vec{H}_2)+\vec{A}_1\cdot(\nabla\times\vec{H}_2)+\nabla\cdot(\vec{A}_2\times\vec{H}_1)+\vec{A}_2\cdot(\nabla\times\vec{H}_1)\\\\
&=\nabla\cdot(\vec{A}_1\times\vec{H}_2)+\nabla\cdot(\vec{A}_2\times\vec{H}_1)+\vec{A}_1\cdot\vec{j}_2+\vec{A}_2\cdot\vec{j}_1
\end{aligned}
$$
而前两项是小量，可以忽略；最后得到的相互作用能应该为
$$
\begin{aligned}
W&=\frac{1}{2}\int(\vec{j}_1\cdot\vec{A}_2+\vec{j}_2\cdot\vec{A}_1)\text{d}\tau=\frac{1}{2}\frac{\mu_0}{4\pi}\int\left[\int\frac{\vec{j}_1\cdot\vec{j}_2}{r^3}\text{d}r+\int\frac{\vec{j}_2\cdot\vec{j}_1}{r^3}\text{d}r\right]\\
&=\int\vec{j}_1\cdot\vec{A}_2\text{d}\tau
\end{aligned}
$$
如果用标势，那么应该得到 $W=I\varphi_m$. 用磁场表达，磁矩在外场中的势能是
$$
W=\vec{m}\cdot\vec{B}
$$
对比电偶极子，那里是 $-\vec{p}\cdot\vec{E}$，多了一个负号. 但是这并不意味着在外场中磁矩会向着磁场相反的方向转动，因为虚功原理要求磁矩大小不变，但是磁矩转动时磁通量会变化、电流也会随之变化，所以必须要外接电源；外接电源就会有电源做功，而我们考虑的是磁场的能量，这就差了一个负号. 当然，如果将电源的能量考虑进来，最后的总能量还应该是 $-\vec{m}\cdot\vec{B}$，力矩仍然使得磁矩向着磁场方向转动.

把电源做功也考虑进来，最终的磁矩受力为
$$
\vec{F}=-\nabla(-\vec{m}\cdot\vec{B})=(\vec{m}\cdot\nabla)\vec{B}
$$
