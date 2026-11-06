---
url: /statistical-mechanics/lesson-13/index.md
---
## 晶体振动的 Einstein 模型

$N$ 个晶格原子，一般认为没有内部的平动自由度，因此内部自由度为 $3N$ (全部来自于振动)，外部的宏观运动有 $3+3$ 个自由度.

这个体系的相互关联是比较强的，因此要采用一些方法得到近独立粒子近似.

> 简谐近似：当温度较小、晶格之间强耦合时，振幅小，在平衡位置可以做展开，
> $$
> \Phi(x\_1,\cdots,x\_N) = \phi|*{x\_i=0}+\sum\_i\left.\frac{\partial\phi}{\partial x\_i}\right|*{x\_i=0}x\_i+\frac{1}{2}\sum\_i\sum\_j\left.\frac{\partial^2\phi}{\partial x\_j\partial x\_i}\right|*{x*{i,j}=0}x\_ix\_j+\cdots
> $$
> 一般来说还要求二阶项系数矩阵正定 (也就是平衡取到极小值). 简谐近似只保留到二阶项，同时对角化二阶项系数矩阵，就可以实现近独立粒子近似，
> $$
> \Phi = \phi\_0+\sum\frac{1}{2}m\dot{x}*i^2+\sum\frac{1}{2}C*{ii}x\_i^2
> $$

正交变换之后，晶格振动约化为 $3N$ 个独立的简正模式.

Einstein 做了一个非常大的近似，认为所有模式振动频率相同，均为 $\nu$. 那么现在有 $3N$ 个相同的振子，配分函数为
$$
Z(\beta) = \sum\_{n=0}^\infty e^{-\beta(n+1/2)h\nu} = \frac{e^{-\beta h\nu/2}}{1-e^{-\beta h\nu}}
$$
能量：
$$
E =-3N\frac{\partial\ln Z(\beta)}{\partial\beta} = 3Nh\nu\left(\frac{1}{2}+\frac{1}{e^{\beta h\nu}-1}\right)+\phi\_0
$$

> 这里，第一项称为振动零点能，后一项是激发态能，最后一个常数是零点能量.

比热为能量的一阶导数，
$$
C\_V = 3Nk\_B\varepsilon\left(\frac{\theta\_E}{T}\right),\quad \varepsilon(x)=\frac{x^2e^x}{(1-e^x)^2},\quad\theta\_E = \frac{h\nu}{k\_B}\approx100\sim300\text{ K}
$$
$\theta\_E$ 是 Einstein 温度，为振动的特征温度.

* 高温极限：$T\gg\theta\_E$，$C\_V\to 3Nk\_B$；

* 低温极限：$T\ll\theta\_E$，
  $$
  C\_V \to 3Nk\_B\left(\frac{\theta\_E}{T}\right)^2e^{-\theta\_E/T}
  $$

*

最终的结果符合 Nernst 定律 (热力学第三定律)，但是趋于零的行为与实验并不相符. 这是因为近似太粗糙，实际上存在低频的模式，能够在很低温度的时候仍然被激发，从而对 $C\_V$ 有贡献.

## 顺磁物质的磁性

顺磁物质的磁化定律为
$$
m = \chi H,\quad\chi=\frac{m}{H}=\frac{\mu\_0m}{B\_0}
$$
下面我们从理论上尝试证明 Curie 定律 $\chi\propto T^{-1}$.

对于顺磁体，其分子 (或者离子 / 原子) 具有恒定的磁矩 $\mu$. 单个粒子能级为
$$
\varepsilon = -\vec\mu\cdot\vec{B} = -\mu\_Bg\vec{J}\cdot\vec{B} = -\mu\_0\mu\_Bgm\_iH = -\frac{a}{\beta}m\_i
$$
其中 $g$ 是 Lande 因子，$\mu\_B$ 为 Bohr 磁子. 配分函数
$$
Z(\beta,H) = \sum\_{m\_i=-j}^je^{-\beta\varepsilon\_i} = \frac{e^{-aj}\[1-e^{(2j+1)a}]}{1-e^a} = \frac{\sinh a(j+1/2)}{\sinh a/2}
$$
总粒子数：
$$
N = e^{-\alpha}Z(\beta,H)
$$
磁化强度：
$$
M = \sum\_{m\_i=-j}^j\mu\_Bgm\_i\cdot\frac{N}{Z}e^{-\beta\varepsilon\_i} = \frac{N}{\beta}\frac{\partial\ln Z}{\partial(\mu\_0H)}
$$
