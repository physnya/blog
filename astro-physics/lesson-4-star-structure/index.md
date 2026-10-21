---
url: /astro-physics/lesson-4-star-structure/index.md
---
恒星形成的 Jeans 判据：根据前面所讨论，常密度的球形气体云的引力势能为
$$
\Omega=-\frac{3}{5}\frac{GM^2}{R}
$$
如果进一步近似为等温的气体云，其内能为 $U=\displaystyle{\frac{3}{2}\frac{Mk\_BT}{\mu m\_H}}$. 根据 Virial 定理，当 $-\Omega>2U$ 时，气体云会塌缩，这时候才能形成恒星. 可以由此算出质量条件：
$$
M>\left(\frac{5k\_BT}{\mu m\_HG}\right)^{3/2}\left(\frac{3}{4\pi\rho}\right)^{1/2}=M\_J
$$
$M\_J$ 称为 Jeans 质量.

> 在这个式子中有一个值得注意的点：温度越低，更容易形成恒星.

***

另一个 Virial 定理的应用是计算恒星的平均温度，
$$
-\Omega = 3\int\_0^{M\_s}\frac{P}{\rho}\mathrm{d}M>\frac{GM}{2r\_s^2}
$$
(恒星引力势能用来做功加热气体.) 代入太阳的参数，可以算出太阳的温度足够将其中所有物质电离.

现在回来考虑之前被忽略的辐射压强，
$$
\frac{P\_r}{P\_g}=\left.\frac{aT^4}{3}\right/\frac{k\_BT\rho}{m} = \frac{maT^3}{3k\_B\rho}
$$
::: tip

其实这又是 [黑洞与致密天体](/compact-object/lesson-2-star-structure-and-evolution/) 课上讲过的.

:::

由此看来辐射压强仅仅在大质量恒星中起到比较大的贡献.

## 恒星结构方程

定义能量产率 $\varepsilon(r)$，那么其 **光度方程** 为
$$
\frac{\mathrm{d}L(r)}{\mathrm{d}r}=4\pi r^2\rho(r)\varepsilon(r)
$$
除此之外还有静力学平衡方程和质量守恒 —— 我们仍然有五个未知量，分别是 $L(r)$, $\varepsilon(r)$, $P(r)$, $\rho(r)$ 和 $T(r)$. 因此考虑第四个方程，也就是能量的传输.

能量传输方式有对流、辐射和传导，显然在恒星中只用考虑前两者.

产生对流的条件为 $\rho-\delta\rho<\rho-\Delta\rho$，也就是上升气体元的密度减小使得自己的密度低于周围的环境密度，可以继续上升. 整理得到
$$
\left(\frac{P}{\rho}\right)\frac{\mathrm{d}\rho}{\mathrm{d}P}<\frac{1}{\gamma}
$$
可以给出发生对流的条件为
$$
\frac{\mathrm{d}\log T}{\mathrm{d}\log P}>\frac{\gamma-1}{\gamma}\equiv \nabla\_{\text{adj}}
$$
需要大的温度梯度才能产生对流.

::: warning

当然我们现在考虑的是最简单的对流模型. 但是如果考虑更复杂的元素分布问题，以及对流具体带走了多少能量，那么这就是一个当今仍未解决的难题了.

:::

上述不等式取等号，很容易变为所谓「对流平衡方程」，
$$
\frac{\mathrm{d}T}{\mathrm{d}r}=-\frac{\gamma-1}{\gamma}\frac{\rho gT}{P}
$$
如果代入辐射的温度梯度，可以得到对流发生的 Schwartzchild 判据，
$$
\nabla\_{\text{rad}}=\frac{3\kappa\_R\rho}{64\pi r^2\sigma T^3}>\nabla\_{\text{adj}}=\frac{\gamma-1}{\gamma}
$$
如果实际的温度梯度大于绝热梯度, 那么一个气体元就处于对流不稳定状态. 恒星气体中大规模的上升和下降将能量向外传递. 史瓦西判据说明不透明度或者辐射流量大的区域容易产生对流.

由此可以给出两个能量传输方程，
$$
\frac{\mathrm{d}T}{\mathrm{d}r} = -\frac{3}{4ac}\frac{\bar\kappa\rho}{T^3}\frac{L\_{\bar r}}{4\pi r^2} = -\frac{\gamma-1}{\gamma}\frac{\mu m\_H}{k\_B}\frac{GM(r)}{r^2}
$$
这里的变量太多，因此如果要推导结构方程，那么需要引入一些辅助方程，比如物态方程. 另外，为了用更加稳定的变量描述恒星结构，我们把变量换成不太随时间变化的 $M$，有
$$
\begin{aligned}
&\frac{\mathrm{d}r}{\mathrm{d}M} = \frac{1}{4\pi r^2\rho}\\\\
&\frac{\mathrm{d}L}{\mathrm{d}M} = \varepsilon\\\\
&\frac{\mathrm{d}P}{\mathrm{d}M} = -\frac{GM}{4\pi r^4}\\\\
&\frac{\mathrm{d}T}{\mathrm{d}M} = -\frac{3\kappa\_RL}{64\pi^2r^4acT^3}
\end{aligned}
$$

## 核反应

恒星的核反应一般只到 Fe 元素，因为后面元素的结合能都没有 Fe 这么高.

* H 的燃烧：主要过程是 pp-chain 以及 CNO 循环.

* He 的燃烧：$3\alpha$ 反应.

* C/O 的燃烧：产生 Mg、Na、Ne、S、Si、P 等等.

  其实这些在 [ICESUN 暑校](/ss-yunnan/lecture-2-agb-stars/#s-processes-nucleosynthesis-yields) 记录了不少.
