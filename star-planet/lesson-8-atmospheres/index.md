---
url: /star-planet/lesson-8-atmospheres/index.md
---
先来讲一下 Bohr atomic model：
$$
F\_c = \frac{Ze^2}{r^2} = \frac{mv^2}{r} \left(=m\omega^2r = \frac{L^2}{mr^3}\right)
$$
因此，$L^2=Ze^2rm\_e$. Bohr 说，$L=n\hbar$，$n\in\mathbb{N}$，于是
$$
r\_n = \frac{n^2\hbar^2}{Ze^2m\_e} \equiv \frac{n^2}{Z}a\_0,\qquad a\_0\equiv\frac{\hbar^2}{e^2m\_e}\quad(\text{Bohr radius})
$$
相应地，能级为
$$
E\_n = -\frac{Ze^2}{2r\_n} = -\frac{Z^2e^4m\_e}{n^2\hbar^2} \equiv-E\_0\frac{Z^2}{n^2},\qquad E\_0=13.6\text{ eV}
$$
对于 $n=2,3$ 能级之间的吸收线，
$$
\lambda\_{32} = \frac{hc}{E\_{32}} = \frac{hc}{\displaystyle{E\_0\left(\frac{1}{4}-\frac{1}{9}\right)}} \approx 656\text{ nm}
$$
这是著名的 $\text{H}\alpha$ 谱线，或者叫 $\text{HI}$ 谱线.

一些分子存在振动自由度的吸收谱线，以 $\text{CO}$ 为例，其振动能级为
$$
E\_v = \left(\frac{1}{2}+v\right)\hbar\omega
$$
从量纲的角度来说，
$$
\[a\_0]=\text{L},\quad \[e^2]=\text{E},\quad \[m]= \text{E}\text{T}^2\text{L}^{-2}
$$
这里可以估算出 $\omega$ 的量级大约是 $\displaystyle{\sqrt{\frac{e^2}{ma\_0^3}}}$，能级可以被估计为
$$
E\sim\hbar\omega\sim\hbar\sqrt{\frac{e^2}{m}\cdot\left(\frac{E\_0}{e^2}\right)^3} = E\_0\sqrt{\frac{m\_e}{m}}
$$
因此这个能级大约是原子内部能级的百分之一，也就是红外波段.

类似地，还有转动能级，
$$
E = \frac{J(J+1)\hbar^2}{2I}\sim E\_0\frac{m\_e}{m}
$$
大约是万分之一原子内部能级，在毫米波段 (或者射电波段).

::: tip

分子天文学家不会去观测对称分子的谱线，因为它们受到选择定则的影响，不会有一些特定的转动或者振动模式，因此研究得比较多的是不对称的 $\text{CO}$ 而不是对称的 $\text{O}^2$ 或者 $\text{H}^2$.

:::

Boltzmann 分布：
$$
\frac{n\_{i+1}}{n\_i} = \frac{g\_{i+1}}{g\_i}e^{-(E\_{i+1}-E\_i)/k\_BT}
$$
所以对于任意一个能级，
$$
\frac{n\_i}{n} = \frac{g\_i}{Z}e^{-E\_i/k\_BT},\qquad Z = \sum\_ig\_ie^{-E\_i/k\_BT}
$$
接下来考虑一个具体的电离过程 $\text{A}\longleftrightarrow \text{A}^+ + e^-$，
$$
\frac{n\_{A^+,0}}{n\_{A,0}} = \frac{g\_{A^+,0}}{g\_{A,0}}\exp\left\[-\left.\left(E\_{\text{ion}}+\frac{p^2}{2m\_e}\right)\right/k\_BT\right]\cdot g\_{\text{free}}
$$
其中，
$$
g\_{\text{free}} = 2\int\frac{\text{d}^3\vec{x}\text{d}^3\vec{p}}{h^3} = \frac{2}{n\_eh^3}\int\text{d}^3\vec{p}
$$
因此
$$
\frac{n\_{A^+,0}}{n\_{A,0}} = \frac{g\_{A^+,0}}{g\_{A,0}} \frac{2}{n\_eh^3}\int4\pi p^2\exp\left\[-\left.\left(E\_{\text{ion}}+\frac{p^2}{2m\_e}\right)\right/k\_BT\right]\text{d}^3\vec{p}
$$
对于 $\text{H}$，
$$
n\_e\frac{n\_{\text{II},0}}{n\_{\text{I},0}} = \frac{g\_{\text{II},0}g\_e}{g\_{\text{I},0}} \left(\frac{2\pi m\_ek\_BT}{h^2}\right)^{3/2}e^{-E\_{\text{ion}}/k\_BT},\quad g\_e =2
$$
这里讨论的都是最低能级，如果推广到所有的能级，那么有一个关系 $g\_{\text{II},0}/g\_{\text{I},0}=Z\_{\text{II}}/Z\_{\text{I}}$，也就是 $1/2$.

如果设 $x$ 为电离率，那么 $n\_{\text{II}}=n\_e=xn$，$n\_{\text{I}}=(1-x)n$，得到 Saha 方程：
$$
\frac{x^2}{1-x}=\frac{1}{n}\left(\frac{2\pi m\_ek\_BT}{h^2}\right)^{3/2}e^{-13.6\text{ eV}/k\_BT}
$$

> 在化学上，更 general 的形式应该是
> $$
> \frac{n\_An\_B}{n\_{AB}} = \frac{Z\_AZ\_B}{Z\_{AB}}\left(2\pi\frac{m\_A+m\_B}{m\_{AB}}\frac{k\_BT}{h^2}\right)^{3/2}e^{-\Delta E/k\_BT}
> $$
> for $\text{A + B} \longleftrightarrow \text{AB}$.

***

大气层的热量平衡：
$$
T\_{\text{eq}} = T\_{\text{eff},\star}(1-a)^{1/4}\left(\frac{R\_\star}{2d}\right)^{1/2}
$$
在温室效应下，表面温度会上升，原因是释放的能量被反射.
