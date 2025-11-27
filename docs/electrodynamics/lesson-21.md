---
title: Lesson 21 偶极辐射 (二)
permalink: /electrodynamics/lesson-21/
createTime: 2025/11/27 15:07:53
---
电偶极辐射：
$$
\vec{A}_0(\theta,\phi) = \frac{\mu_0}{4\pi}\int\vec{j}_0(\vec{x}')\text{d}\tau'
$$
我们知道利用 Gauss 定理有
$$
0=\int\nabla\cdot(\vec{j}_0(\vec{x}')\vec{x}')\text{d}\tau'=\int(\nabla\cdot\vec{j}_0(\vec{x}'))\vec{x}'\text{d}\tau' + \int\vec{j}_0(\vec{x}')\text{d}\tau'
$$
而在谐变的电磁场中，
$$
\nabla\cdot\vec{j}_0(\vec{x}') = -\frac{\partial\rho(\vec{x}')}{\partial t}=\text{i}\omega\rho(\vec{x}')
$$
也就有
$$
\vec{A}_0(\theta,\phi) = -\frac{\mu_0}{4\pi}\int(\nabla\cdot\vec{j}_0(\vec{x}'))\vec{x}'\text{d}\tau' = -\text{i}\omega\cdot\frac{\mu_0}{4\pi}\int\rho(\vec{x}')\vec{x}'\text{d}\tau'
$$
后面正是电偶极子的计算式，化为
$$
\vec{A}_0 = \frac{\mu_0e^{\text{i}kR}}{4\pi R}\dot{\vec{P}}
$$
在 $\vec{P} = \vec{P}_0 e^{-\text{i}\omega t}$ 的电偶极子振荡下，磁场是
$$
\vec{B}_0 =\text{i}\vec{k}\times\vec{A}_0 = \frac{\mu_0\omega^2}{4\pi c}P_0\sin\theta\hat{e}_\phi
$$
磁场的平方表征功率的角分布：
$$
\frac{\text{d}P}{\text{d}\Omega} \propto \sin^2\theta,\quad \frac{\text{d}P}{\text{d}\Omega} = \frac{\mu_0P_0^2\omega^4}{32\pi^2c}\sin^2\theta
$$

---

同理，我们可以算磁偶极辐射，
$$
\vec{A} = -\text{i}\frac{\mu_0}{4\pi}\int\vec{j}_0(\vec{x}')\vec{k}\cdot\vec{x}\text{d}\tau'
$$
这个并矢和矢量的点积能够化为 $\vec{k}\cdot\vec{x}'\vec{j}_0(\vec{x}')$，后一项拆成对称和反对称成分，
$$
\vec{x}'\vec{j}_0(\vec{x}') = \frac{\vec{x}'\vec{j}_0(\vec{x}')-\vec{j}_0(\vec{x}')\vec{x}'}{2}+\frac{\vec{x}'\vec{j}_0(\vec{x}')+\vec{j}_0(\vec{x}')\vec{x}'}{2}
$$
同时由双叉乘公式，
$$
\vec{k}\times(\vec{x}'\times\vec{j}_0(\vec{x}'))=\vec{k}\cdot\vec{j}_0(\vec{x}')\vec{x}'-\vec{k}\cdot\vec{x}'\vec{j}_0(\vec{x}')
$$
积分变为
$$
\vec{A} = \frac{\text{i}\mu_0}{4\pi}\int\vec{k}\times(\vec{x}'\times\vec{j}_0(\vec{x}'))\text{d}\tau'
$$
括号内的积分正是磁矩的定义式，最终
$$
\vec{A} = \frac{\text{i}\mu_0}{4\pi}\vec{k}\times\vec{m}_0
$$
磁偶极的时间变化是 $\vec{m} = \vec{m}_0e^{-\text{i}\omega t}$，磁偶极辐射的