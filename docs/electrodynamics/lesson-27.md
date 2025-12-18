---
title: Lesson 27 带电粒子和电磁场的相互作用
permalink: /electrodynamics/lesson-27/
createTime: 2025/12/18 15:11:45
---
需要提前说明的是，这些理论仍然是「经典」的 (相对于量子力学而言)，在这些理论中带电粒子服从的是质点运动的相关运动学和动力学，不表现出任何波动性；电磁场 (光波) 服从的是经典的波动力学，不表现出任何粒子性. 因此这是在经典近似下成立的理论.

近似的条件：粒子必须做宏观的运动，比如加速器中的电子运动，而不能是原子中的电子这样小的尺度.

一个任意运动的带电粒子产生的电磁场：
$$
\varphi(\vec{x},t)=\frac{1}{4\pi\varepsilon_0}\int_V\frac{\displaystyle{\rho\left(\vec{x}',t-\frac{r}{c}\right)}}{r}\text{d}\tau',\quad\vec{A}(\vec{x},t)=\frac{\mu_0}{4\pi}\int_V\frac{\displaystyle{\vec{j}\left(\vec{x}
',t-\frac{r}{c}\right)}}{r}\text{d}\tau'
$$
实验室系中做变换，得到
$$
\vec{A} = \frac{\mu_0e\vec{v}}{\displaystyle{4\pi\left(r-\frac{\vec{v}}{c}\cdot\vec{r}\right)}},\quad \varphi = \frac{e}{4\pi\varepsilon_0\displaystyle{\left(r-\frac{\vec{v}}{c}\cdot\vec{r}\right)}}
$$
这是运动带电粒子的 Lienard - Wiechert 势.

两个变换引起的导数：
$$
\frac{\partial t'}{\partial t}=\frac{1}{\displaystyle{1-\frac{\vec{v}\cdot\vec{r}}{cr}}},\quad \nabla t' = -\frac{\hat{n}}{\displaystyle{c\left(1-\frac{\vec{v}\cdot\hat{n}}{c}\right)}}
$$
(其中 $\hat{n}=\vec{r}/r$.) 低速近似下 (近似到最低阶)，在本征系中，
$$
\begin{aligned}
\vec{B} &= \frac{e\vec{v}\times\vec{r}}{4\pi\varepsilon_0c^2r^3}+\frac{e\dot{\vec{v}}\times\vec{r}}{4\pi\varepsilon_0c^2r^2}\\\\
\vec{E} &= \frac{e\vec{r}}{4\pi\varepsilon_0r^3}+\frac{e}{4\pi\varepsilon_0c^2r^3}\vec{r}\times(\vec{r}\times\dot{\vec{v}})
\end{aligned}
$$
其中前面一项是电磁场项，后面一项是辐射项.

换系之后，辐射场为：
$$
\vec{E} = \frac{e}{4\pi\varepsilon_0r}\frac{\hat{n}\times[(\hat{n}-\vec{v}/c)\times\dot{\vec{v}}]}{(1-\vec{v}\cdot\hat{n}/c)^3},\quad\vec{B}=\frac{\hat{n}}{c}\times\vec{E}
$$

---

轫致辐射 ($\vec{v}\parallel\dot{\vec{v}}$)：「轫」实际上是刹车的意思.
$$
\begin{aligned}
\vec{E} &= \frac{e}{4\pi\varepsilon_0c^2r}\frac{\hat{n}\times(\hat{n}\cdot\dot{\vec{v}})}{(1-\vec{v}\cdot\hat{n}/c)^3},\quad \vec{B} = -\frac{e}{4\pi\varepsilon_0c^2r}\frac{\hat{n}\times\dot{\vec{v}}}{(1-\vec{v}\cdot\hat{n}/c)^3}\\\\
\vec{s} &= \frac{e^2|\dot{\vec{v}}|^2}{16\pi^2\varepsilon_0c^3r^2}\frac{\sin\theta\cdot\hat{n}}{(1-v\cos\theta/c)^6}
\end{aligned}
$$
辐射的角功率分布是：
$$
\frac{\text{d}P(t')}{\text{d}\Omega} = r^2\vec{s}\cdot\hat{n}\frac{\text{d}t}{\text{d}t'} = \frac{e^2|\dot{\vec{v}}|^2\sin^2\theta}{16\pi^2\varepsilon_0c^3(1-v\cos\theta/c)^5}
$$
也就是速度越大，减速时轫致辐射的方向性更强、沿着运动方向发射辐射；反之速度很小时这个辐射的极大几乎垂直于运动方向.

同步辐射 ($\vec{v}\perp\dot{\vec{v}}$)：同步加速器中电子圆周运动产生这种辐射.