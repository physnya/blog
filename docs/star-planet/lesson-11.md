---
title: Lesson 11 Dynamics
createTime: 2026/05/14 21:48:09
permalink: /star-planet/lesson-11-dynamics/
---
继续来说 exoplanet 的探测方法. 我们说到 microlensing，也就是微引力透镜效应. 考虑一个行星穿过我们和恒星之间的连线，我们与行星和恒星之间的距离分别是 $d_l$ 和 $d_s$，同时，造成透镜效应的两个光线偏角设为 $\psi_1$ 和 $\psi_2$、我们观测到的两个时刻的两个不同像点距离我们和恒星连线的偏角分别是 $\theta_1$ 和 $\theta_2$，假设 $d_l$ 与 $d_s$ 夹角 $\beta$.

于是
$$
A = (\theta-\beta)d_s=(d_s-d_l)\psi\Longrightarrow\beta = \theta-\frac{d_s-d_l}{d_s}\psi = \theta-\frac{\theta_E^2}{\theta}
$$
同时 Einstein 的理论给出光线偏角为
$$
\theta_E =\sqrt{\frac{4GM_L}{c^2}\frac{d_s-d_l}{d_sd_l}}
$$
分辨率为
$$
M = \frac{\delta\theta}{\delta\beta} = \frac{\theta}{\beta}\left(\frac{\mathrm{d}\beta}{\mathrm{d}\theta}\right)^{-1}=\frac{\theta^4}{\theta^4-\theta_E^4}
$$
最后一个方法是 direct imaging，但是这个方法要求行星比较亮、比较近.

## Dynamics

进入 module 7，讲动力学. 首先考虑一个二体问题，
$$
\ddot{\vec{r}}_2 = \frac{Gm_1}{r^3}(\vec{r}_1-\vec{r}_2),\quad\ddot{\vec{r}}_1=\frac{Gm_2}{r^3}(\vec{r}_2-\vec{r}_1)
$$
可以引入引力系统的约化质量，把方程写成
$$
\ddot{\vec{r}} = -\frac{Gm}{r^3}\vec{r},\quad m = m_1+m_2
$$
我们叫这个方程 E.O.M (equation of motion). 两边和 $\vec{v}$ 做一个点积，
$$
\begin{aligned}
\dot{\vec{r}}\cdot\ddot{\vec{r}} = -\frac{Gm}{r^3}\vec{r}\cdot\dot{\vec{r}}
\end{aligned}
$$
其中 LHS 是我们非常熟悉的 $\mathrm{d}(\dot{\vec{r}}^2/2)/\mathrm{d}t$，同时，
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{r}\right) = \frac{\vec{r}\cdot\dot{\vec{r}}}{r^3}
$$
于是我们的方程变为
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{2}\dot{r}^2-\frac{Gm}{r}\right)=0
$$
这就获得了一个守恒量，我们称之为 $E$ (能量). 另外，构造第二个守恒量，计算一个叉积
$$
\frac{\mathrm{d}}{\mathrm{d}t}(\vec{r}\times\dot{\vec{r}}) = \dot{\vec{r}}\times\dot{\vec{r}}+\vec{r}\times\ddot{\vec{r}} = 0+0=0
$$
这是角动量 $\vec{l}=\vec{r}\times\dot{\vec{r}}$. 现在考虑计算下面这个量：
$$
\begin{aligned}
\ddot{\vec{r}}\times\vec{l} &= -\frac{Gm}{r^3}\cdot\vec{r}\times(\vec{r}\times\dot{\vec{r}}) \\\\
&= -Gm\left[\frac{(\vec{r}\cdot\dot{\vec{r}})\vec{r}}{r^2}-\frac{\dot{\vec{r}}}{r}\right]\\\\
&= Gm\left[\vec{r}\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{r}\right)+\frac{\dot{\vec{r}}}{r}\right] = Gm\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\vec{r}}{r}\right)
\end{aligned}
$$
而 LHS 可以写成 $\dot{\vec{r}}\times\vec{l}$ 的时间导数，因此凑出第三个守恒量，也就是 Laplace-Runge-Lenz Vector，这里我们叫它 eccentricity vector，
$$
\vec{e} = \frac{\dot{\vec{r}}\times\vec{l}}{Gm}-\frac{\vec{r}}{r}
$$
下面对它做一些简单的操作：首先用 $\vec{r}$ 点积，
$$
\vec{r}\cdot\vec{e}=re\cos\nu = \frac{\vec{r}\cdot(\dot{\vec{r}}\times\vec{l})}{Gm}-r = \frac{l^2}{Gm}-r
$$
解得轨道方程，
$$
r = \frac{l^2/Gm}{1+e\cos\nu}
$$
利用半长轴和偏心率，可以解出一个角动量表达式，$l = \sqrt{Gm(1-e^2)a}$.

---

后面在讲 Kepler 的轨道几何... 我记得之前竞赛的时候做过一个博智汇的题是出的这个 (当然也可能是别的机构)，总之我觉得这种纯几何的手法相当莫名其妙.

大概是这样：[轨道动力学 (3) - 开普勒时间方程 - 知乎](https://zhuanlan.zhihu.com/p/525987405).

最终得到 Kepler 时间方程
$$
M=E-e\sin E
$$
其中 $M$ 称为平近点角，$E$ 称为偏近地角 (当然这都是比较工科的术语)，$M$ 联系着时间、$E$ 联系着扫过的角度和面积.

Orbital Resonances：木星卫星的周期遵循一个比例率，
$$
\frac{P_2}{P_1} = \frac{j+o}{j}
$$
