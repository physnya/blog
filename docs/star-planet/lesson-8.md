---
title: Lesson 8 Atmospheres
createTime: 2026/04/17 09:45:09
permalink: /star-planet/lesson-8-atmospheres/
---
先来讲一下 Bohr atomic model：
$$
F_c = \frac{Ze^2}{r^2} = \frac{mv^2}{r} \left(=m\omega^2r = \frac{L^2}{mr^3}\right)
$$
因此，$L^2=Ze^2rm_e$. Bohr 说，$L=n\hbar$，$n\in\mathbb{N}$，于是
$$
r_n = \frac{n^2\hbar^2}{Ze^2m_e} \equiv \frac{n^2}{Z}a_0,\qquad a_0\equiv\frac{\hbar^2}{e^2m_e}\quad(\text{Bohr radius})
$$
相应地，能级为
$$
E_n = -\frac{Ze^2}{2r_n} = -\frac{Z^2e^4m_e}{n^2\hbar^2} \equiv-E_0\frac{Z^2}{n^2},\qquad E_0=13.6\text{ eV}
$$
对于 $n=2,3$ 能级之间的吸收线，
$$
\lambda_{32} = \frac{hc}{E_{32}} = \frac{hc}{\displaystyle{E_0\left(\frac{1}{4}-\frac{1}{9}\right)}} \approx 656\text{ nm}
$$
这是著名的 $\text{H}\alpha$ 谱线，或者叫 $\text{HI}$ 谱线.

一些分子存在振动自由度的吸收谱线，以 $\text{CO}$ 为例，其振动能级为
$$
E_v = \left(\frac{1}{2}+v\right)\hbar\omega
$$
从量纲的角度来说，
$$
[a_0]=\text{L},\quad [e^2]=\text{E},\quad [m]= \text{E}\text{T}^2\text{L}^{-2}
$$
这里可以估算出 $\omega$ 的量级大约是 $\displaystyle{\sqrt{\frac{e^2}{ma_0^3}}}$，能级可以被估计为
$$
E\sim\hbar\omega\sim\hbar\sqrt{\frac{e^2}{m}\cdot\left(\frac{E_0}{e^2}\right)^3} = E_0\sqrt{\frac{m_e}{m}}
$$
因此这个能级大约是原子内部能级的百分之一，也就是红外波段.

类似地，还有转动能级，
$$
E = \frac{J(J+1)\hbar^2}{2I}\sim E_0\frac{m_e}{m}
$$
大约是万分之一原子内部能级，在毫米波段 (或者射电波段).

::: tip

分子天文学家不会去观测对称分子的谱线，因为它们受到选择定则的影响，不会有一些特定的转动或者振动模式，因此研究得比较多的是不对称的 $\text{CO}$ 而不是对称的 $\text{O}^2$ 或者 $\text{H}^2$.

:::

Boltzmann 分布：
$$
\frac{n_{i+1}}{n_i} = \frac{g_{i+1}}{g_i}e^{-(E_{i+1}-E_i)/k_BT}
$$
所以对于任意一个能级，
$$
\frac{n_i}{n} = \frac{g_i}{Z}e^{-E_i/k_BT},\qquad Z = \sum_ig_ie^{-E_i/k_BT}
$$
接下来考虑一个具体的电离过程 $\text{A}\longleftrightarrow \text{A}^+ + e^-$，
$$
\frac{n_{A^+,0}}{n_{A,0}} = \frac{g_{A^+,0}}{g_{A,0}}\exp\left[-\left.\left(E_{\text{ion}}+\frac{p^2}{2m_e}\right)\right/k_BT\right]\cdot g_{\text{free}}
$$
其中，
$$
g_{\text{free}} = 2\int\frac{\text{d}^3\vec{x}\text{d}^3\vec{p}}{h^3} = \frac{2}{n_eh^3}\int\text{d}^3\vec{p}
$$
因此
$$
\frac{n_{A^+,0}}{n_{A,0}} = \frac{g_{A^+,0}}{g_{A,0}} \frac{2}{n_eh^3}\int4\pi p^2\exp\left[-\left.\left(E_{\text{ion}}+\frac{p^2}{2m_e}\right)\right/k_BT\right]\text{d}^3\vec{p}
$$
对于 $\text{H}$，
$$
n_e\frac{n_{\text{II},0}}{n_{\text{I},0}} = \frac{g_{\text{II},0}g_e}{g_{\text{I},0}} \left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}e^{-E_{\text{ion}}/k_BT},\quad g_e =2
$$
这里讨论的都是最低能级，如果推广到所有的能级，那么有一个关系 $g_{\text{II},0}/g_{\text{I},0}=Z_{\text{II}}/Z_{\text{I}}$，也就是 $1/2$.

如果设 $x$ 为电离率，那么 $n_{\text{II}}=n_e=xn$，$n_{\text{I}}=(1-x)n$，得到 Saha 方程：
$$
\frac{x^2}{1-x}=\frac{1}{n}\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}e^{-13.6\text{ eV}/k_BT}
$$

> 在化学上，更 general 的形式应该是
> $$
> \frac{n_An_B}{n_{AB}} = \frac{Z_AZ_B}{Z_{AB}}\left(2\pi\frac{m_A+m_B}{m_{AB}}\frac{k_BT}{h^2}\right)^{3/2}e^{-\Delta E/k_BT}
> $$
> for $\text{A + B} \longleftrightarrow \text{AB}$.

---

大气层的热量平衡：
$$
T_{\text{eq}} = T_{\text{eff},\star}(1-a)^{1/4}\left(\frac{R_\star}{2d}\right)^{1/2}
$$
在温室效应下，表面温度会上升，原因是释放的能量被反射.