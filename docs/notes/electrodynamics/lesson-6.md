---
title: Lesson 6 介质中的 Maxwell 方程组
createTime: 2025/09/30 13:10:22
permalink: /electrodynamics/lesson-6/
---
接着上节课来说，磁介质中有
$$
\nabla\times\vec{M}=\vec{j}_m
$$
$\vec{j}_m$ 是磁化电流. 上面是微分形式，对于介质不连续的位置，还是要用积分形式，得到界面处的磁化面电流为
$$
\vec{\alpha}_m=\hat{n}_{12}\times(\vec{M}_2-\vec{M}_1)
$$
结合之前的极化电流，Maxwell 方程组中的电流项修改为
$$
\vec{j}=\vec{j}_f+\vec{j}_P+\vec{j}_m=\vec{j}_f+\frac{\partial \vec{P}}{\partial t}+\nabla\times\vec{M}
$$
于是真空中的 Maxwell 方程组变为
$$
\left\{\begin{aligned}
&\nabla\cdot\vec{E} = \frac{1}{\varepsilon_0}(\rho_f-\nabla\cdot\vec{P})\\\\
&\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\\\\
&\nabla\cdot\vec{B}=0\\\\
&\nabla\times\vec{B}=\mu_0\left(\vec{j}_f+\frac{\partial \vec{P}}{\partial t}+\nabla\times\vec{M}\right)+\mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}\right.
$$
这个方程并不完备，因为要求的场量不止 $\vec{E}$ 和 $\vec{B}$，还有 $\vec{P}$ 和 $\vec{M}$. 因此还要把介质的性质算进方程，得到完备的方程组.

我们发现，对于 $\vec{E}$ 和 $\vec{P}$ 的数学操作是一样的，同样，对于 $\vec{B}$ 和 $\vec{M}$ 的数学操作也是一样，因此引入数学上的辅助量：
$$
\vec{D}=\varepsilon_0\vec{E}+\vec{P}\,,\quad\vec{H}=\frac{\vec{B}}{\mu_0}-\vec{M}
$$
得到仅仅含有自由电荷分布、自由电流的 Maxwell 方程：
$$
\left\{\begin{aligned}
&\nabla\cdot\vec{D}=\rho_f\\\\
&\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\\\\
&\nabla\cdot\vec{B}=0\\\\
&\nabla\times\vec{H}=\vec{j}_f+\frac{\partial\vec{D}}{\partial t}
\end{aligned}\right.
$$
可以发现位移电流项变为 $\vec{D}$ 的时间导数，这也是「电位移矢量」得名的原因. 这个方程仍然不完备，只是形式变得对称. 对于线性介质，可以要求：
$$
\vec{P}=\chi_e\varepsilon_0\vec{E}\Longrightarrow\vec{D}=\varepsilon_0\vec{E}+\vec{P}=(1+\chi_e)\varepsilon_0\vec{E}
$$
把 $1+\chi_e$ 定义为相对介电常数 $\varepsilon_r$，则 $\vec{D}=\varepsilon_r\varepsilon_0\vec{E}=\varepsilon \vec{E}$，这里我们能看出相对介电常数一般大于 $1$，也就是在同样的自由电荷分布下，介质中的电场会更小. 同理，
$$
\vec{M}=\frac{\lambda_m}{\mu_0}\vec{B}\Longrightarrow\vec{H}=\frac{\vec{B}}{\mu_0}-\vec{M}=\frac{1-\lambda_m}{\mu_0}\vec{B}
$$
定义 $1/(1-\lambda_m)$ 为相对磁导率 $\mu_r$，和电场的情况类似.

> $\lambda_m$ 没有名字，因为历史上把 $\vec{M}$ 和 $\vec{H}$ 的正比关系的系数称为磁化率.

仅和自由电荷有关的 Maxwell 方程不意味着电场和磁场仅仅由自由电荷决定，而是在线性介质中，自由电荷和总电荷成比例.

利用 $\vec{D}$ 和 $\vec{H}$ 可以重新写界面上的电荷和电流分布，
$$
\sigma_f=\hat{n}_{12}\cdot(\vec{D}_2-\vec{D}_1)\,,\quad\vec{\alpha}_f=\hat{n}_{12}\times(\vec{H}_2-\vec{H}_1)
$$
另外还有边值关系：
$$
\hat{n}_{12}\times(\vec{E}_2-\vec{E}_1)=0\,,\quad\hat{n}_{12}\cdot(\vec{B}_2-\vec{B}_1)=0
$$
