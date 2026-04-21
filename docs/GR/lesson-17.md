---
title: Lesson 17 引力波的功率 (2)
createTime: 2026/04/21 15:07:56
permalink: /GR/lesson-17-power-of-gravitational-waves-2/
---
$$
R^{(1)\mu\nu}-\frac{1}{2}\eta^{\mu\nu}R^{(1)} = 8\pi G(T^{\mu\nu}+t^{\mu\nu})
$$

其中后面的 $t^{\mu\nu}$ 仅仅是二阶部分，因为其包含的是 $\mathcal{O}(h^2)$ 的内容. 下面来看一下引力波的能量，也就是研究 $t^{(2)\mu\nu}$ 的性质.
$$
t^{(2)\mu\nu} = \frac{1}{8\pi G}\left(-h_{\mu\nu}\eta^{\lambda\rho}R^{(1)}_{\lambda\rho}+\frac{1}{2}\eta^{\mu\nu}h^{\lambda\rho}R^{(1)}_{\lambda\rho}+R^{(2)\mu\nu}-\frac{1}{2}\eta^{\mu\nu}\eta^{\lambda\rho}R^{(2)}_{\lambda\rho}\right)
$$
对于真空情况，$R^{(1)\mu\nu}=0$ (因为能动张量的零阶是零)，只有二阶项：
$$
t^{(2)\mu\nu} = \frac{1}{8\pi G}\left(R^{(2)\mu\nu}-\frac{1}{2}\eta^{\mu\nu}\eta^{\lambda\rho}R^{(2)}_{\lambda\rho}\right)
$$
我们之前解得的引力波振动是 $h^{\mu\nu}=e^{\mu\nu}e^{+\text{i}k_\rho x^\rho}+e^{*\mu\nu}e^{-\text{i}k_\rho x^\rho}$.

> 回忆对于电磁波的讨论，我们取的是一段时间的平均值作为能量密度，也就是
> $$
> \rho=\left\langle\frac{1}{2}\vec{E}^2+\frac{1}{2}\vec{B}^2\right\rangle
> $$
> 这时候电场和磁场都不能再用复数形式，我们需要取实部. 有：
> $$
> \begin{aligned}
> \langle\vec{E}\cdot\vec{E}\rangle &= \vec{E}_0\cdot\vec{E}_0\left\langle e^{2\text{i}k_\mu x^\mu}+1+1+e^{-2\text{i}k_\mu x^\mu}\right\rangle = 2|\vec{E}_0|^2
> \end{aligned}
> $$

类似地，对于 $R\sim\partial\Gamma\sim\partial^2h$ 这种东西 (当然这里是二阶，也就是类似 $h\partial^2h$ 和 $\partial h\partial h$ 这类的项)，分部积分之后会得到类似 $\partial(h\partial h)$ 的项. 对其取时间均值，其中的相因子会因为平均而被抹除，最终只剩下形如 $\partial h\partial h$ 的项.
$$
\langle t^{\mu\nu}\rangle = \frac{k^\mu k^\nu}{8\pi G}(|e_{11}|^2+|e_{12}|^2) = \frac{k^\mu k^\nu}{16\pi G}(|e_+|^2+|e_\times|^2)
$$
化为 $h$ 的表达式，
$$
\langle t^{\mu\nu}\rangle = \frac{k^\mu k^\nu}{32\pi G}\langle\partial_\mu h_{\rho\lambda}\partial_\nu h^{\rho\lambda}\rangle
$$
这是一个对度规的导数，也就是说，这个量一定不是一个张量，因为它和 Christoffel 符号都是度规导数，可以找一个参考系使得它们为零，如果是张量就会在任何参考系下都为零. 能量密度是 $t^{00}$，
$$
\rho_{GW} = t^{00} = \frac{1}{32\pi G}\langle\dot{h}_{ij}^{TT}\dot{h}_{ij}^{TT}\rangle
$$
有能量守恒条件 $\partial_\mu t^{\mu\nu} =0$，也就是
$$
\int_V\text{d}^3x(\partial_0t^{00}+\partial_it^{i0}) = 0
$$
能流为
$$
\frac{\text{d}E_V}{\text{d}t} = -\int_V\text{d}^3x\cdot\partial_i t^{0i} = -\int_S\text{d}A\cdot n_it^{0i}
$$
以 $t^{0r}$ 为例，要把 $\partial$ 作用在 $h_{ij}^{TT}(t-r)$ 上，其中 $h_{ij}^{TT}(t-r)=f_{ij}(t-r)/r$. $r$ 是一个非常巨大的尺度，而 $f\sim e^{\text{i}k(t-r)}$，$k$ 是波长倒数，波长大约是双星距离尺度，因此 $k\gg1/r$，只把 $\partial$ 作用在 $f$ 上即可.

Fourier 分解：
$$
h = \int\frac{\text{d}\omega}{2\pi}e^{-\text{i}\omega(t-r)}\tilde h(\omega)
$$
得到时间导数的平方为
$$
\begin{aligned}
\dot{h}^2 &= \int\text{d}f\text{d}f'(-2\text{i}\pi f)(-2\text{i}\pi f')e^{-\text{i}[2\pi(f+f')](t-r)}\tilde{h}(t)\tilde{h}(t')\\\\
\int\langle\dot{h}^2\rangle\text{d}t &= \int\text{d}f\text{d}f'(2\pi)^2f^2\delta(t+t')|\tilde{h}(t)|^2 = (2\pi)^2\int\text{d}f\cdot f^2|\tilde{h}(f)|^2
\end{aligned}
$$
由此，可知谱函数
$$
\frac{\text{d}F}{\text{d}A\text{d}f} = \frac{\pi}{2G}f^2(|\tilde{h}_+|^2+|\tilde{h}_\times|^2)
$$
这里的 $h\sim10^{-21}$，是一个非常小的量. 对于一个体系，引力波的横向分量为
$$
h_{ij}^{TT} = \frac{2G}{r}\Lambda_{ijkl}(\hat{n})\ddot{Q}_{kl}(t-r)
$$
因此功率为
$$
P_{\text{quad}} = \frac{G}{8\pi}\int\text{d}\Omega\cdot\Lambda_{ijkl}\left\langle\dddot{Q}_{ij}\dddot{Q}_{kl}\right\rangle
$$

> 回忆一下投影算符的定义，是
> $$
> P_{ij}\equiv\delta_{ij}-\hat{n}_i\hat{n}_j,\quad \Lambda_{ijkl}\equiv P_{ik}P_{jl}-P_{ij}P_{kl}
> $$
> 实际上对 $\text{d}\Omega$ 积分就是在变化各个 $\hat{n}$ 的方向.
>
> 以 $\displaystyle{\int\text{d}\Omega(\hat{n}_i\hat{n}_j\hat{n}_k\hat{n}_l)}$ 为例，待定系数 —— 这是一个轮换式，最后的结果一定是两两相同的形式，也就是
> $$
> \int\text{d}\Omega(\hat{n}_i\hat{n}_j\hat{n}_k\hat{n}_l) = a(\delta_{ij}\delta_{kl}+\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk})
> $$
> 而 $\displaystyle{\int\text{d}\Omega\cdot\cos^4\theta}=3a$ (把 $i,j,k,l$ 全部取同一个方向). 因此解得 $a = 4\pi/15$.

上面那个 quadropole (非相对论四极子) 的功率为
$$
P_{\text{quad}} = \frac{G}{5}\left\langle\dddot{Q}_{ij}\dddot{Q}_{kl}\right\rangle
$$

---

For $(m_1,\vec{x}_1),(m_2,\vec{x}_2)$，引入总质量 $m$ 和约化质量 $\mu$，质心坐标 $\vec{x}_{cm}$ 和相对坐标 $\vec{x}_0$. 其二阶矩为
$$
M^{ij} = m_1x_1^ix_1^j+m_2x_2^ix_2^j = mx_{cm}^ix_{cm}^j+\mu x_0^ix_0^j
$$
只有相对运动项才有三阶导数 (质心没有动). 定义一个四极子
$$
\Theta^{ij} = \mu x_0^ix_0^j-\frac{1}{3}\mu x_0^2\delta^{ij}
$$
假设是圆周运动的 (后面说明此假设合理)，那么 (在 $x$ - $y$ 平面上运动)
$$
x_0(t) = R\cos\left(\omega_st+\frac{\pi}{2}\right),\quad y_0(t) = R\sin\left(\omega_st+\frac{\pi}{2}\right)
$$
算得
$$
M_{11}=\mu R^2\frac{1-\cos2\omega_st}{2},\quad M_{22}=\mu R^2\frac{1+\cos2\omega_st}{2},\quad M_{12}=-\frac{1}{2}\mu R^2\sin2\omega_st
$$
引力波的角频率是 $2\omega_s$ 而不是一倍.

::: danger

老师说计算太复杂就不在课上计算了，课后会发文献.

:::

功率的角分布结果为
$$
\frac{\text{d}P}{\text{d}\Omega} =\frac{2G\mu^2R^4\omega_s^6}{\pi}g(\theta),\quad g(\theta) = \left(\frac{1+\cos^2\theta}{2}\right)^2+\cos^2\theta
$$
四极子总功率
$$
P_{\text{quad}}^{\text{tot}} = \frac{32}{5}G\mu^2R^4\omega_s^6 = \frac{1}{10}G\mu^2R^4(2\omega_s)^6 
$$

> 利用 Keppler's law III，$\omega_s = Gm/R^3$，可以把 $\ddot{M}_0$ 写成
> $$
> \ddot{M}_0 = 2G^{2/3}\left[(\mu^3m^2)^{1/5}\right]^{5/3}\omega_s^{2/3}
> $$
> 定义 $(\mu^3m^2)^{1/5}$ 为啁啾质量 (chirp mass) $M_c$，也就是把所有质量因子放在一起，那么最后的总功率可以写成
> $$
> P_{\text{quad}}^{\text{tot}} = \frac{32}{5G}\left(\frac{GM_c\omega_{GW}}{2}\right)^{10/3},\quad \omega_{GW} = 2\omega_s
> $$
> 这是一个概念上的小巧思.

系统总能量
$$
E_{\text{orbit}} =-\frac{Gm_1m_2}{2R},\quad \dot{E} = -P_{\text{quad}}^{\text{tot}}
$$
得到关于引力波角频率升高的微分方程：
$$
\dot{\omega}_{GW} = \frac{12}{5}\cdot 2^{1/3}(GM_c)^{5/3}\omega_{GW}^{11/3}
$$
这也是 'chirp' 这个名字的来源，「啁啾」就是变频的意思. 另外，
$$
\ddot{M}_{11} = 2\mu R^2\omega_s^2\cos2\omega_st = -\ddot{M}_{22},\quad \ddot{M}_{12}=2\mu R^2\omega_s^2\sin2\omega_st
$$
这里的矩都是 $\ddot{M}\sim R^2\omega_s^2\sim R^{-1}$，因此并和过程中随着黑洞之间距离的缩小，振幅会越来越大，也就是 merge 过程中引力波图像振幅上升阶段的原理. 当然，非相对论理论不能 numerically 解释并和事件之后的 ring down 过程 (振幅衰减).

---

如果双星轨道为椭圆：那么结果是
$$
\begin{aligned}
\frac{\text{d}a}{\text{d}t} &= \frac{64}{5}\frac{G^3\mu m^2}{a^3}\frac{1}{(1-e^2)^{7/2}}\left(1+\frac{73}{24}e^2+\frac{37}{96}e^4\right)\\\\
\frac{\text{d}e}{\text{d}t} &= -\frac{304}{15}\frac{G^3\mu m^2}{a^4}\frac{e}{(1-e^2)^{5/2}}\left(1+\frac{121}{304}e^2\right)
\end{aligned}
$$
也就是偏心率会很快地减小到零，引力波辐射会使得轨道变圆 —— 当我们能观测到引力波时，一般这个体系的轨道已经变圆了.

下节课我们说引力波的探测. 我们知道这件事情由 Michaelson 干涉仪来完成，在这个系中，只要是所谓「自由落体」的，那么镜子的坐标就可以说完全不改变，只要考虑光程的变化即可.