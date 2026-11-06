---
url: /star-planet/lesson-3-lane-emden-equ/index.md
---
上节课讲的是 EoS. 我们知道下面这些 EoS：
xx

* $P = \displaystyle{\frac{\rho k\_BT}{\mu m}}$，这是 ideal gas EoS

* 对于非相对论和相对论的电子气，有
  $$
  P = K\_{\text{NR}}\rho^{5/3},\quad P = K\_{\text{R}}\rho^{4/3}
  $$
  这些又被称为 Polymeric EoS.

为了导出具体的 EoS，考虑平衡条件，也就是引力等于压力. 对于 $z\to z+\text{d}z$ 的一个小气团，有

$$
F\_g = g\_zA\rho\text{d}z = A\text{d}P\Longrightarrow \frac{\text{d}P}{\text{d}z} = -\rho g
$$

现在把 $P = K\rho^{1+1/n}$ 代入进去，同时把 $z$ 改写成 $r$ (因为考虑的是恒星)，另外把 $g$ 改写成引力势 $Gm\_r/r^2$，得到恒星的力学平衡方程

$$
\frac{K}{\rho}\frac{\text{d}}{\text{d}r}\rho^{1+1/n} = -\frac{Gm\_r}{r^2}
$$

> 这里 RHS 写 $m\_r$ 是因为这个质量是 $r$ 的函数，$r$ 以内的全部质量和.

两边同时乘 $r^2$ 后对 $r$ 求一阶导数，

$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(\frac{r^2}{\rho}\frac{\text{d}}{\text{d}r}\rho^{1+1/n}\right) = -\frac{4\pi G}{K}\rho
$$

令 $\rho = \rho\_c\psi^n$ (c = center)，代入，得到

$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(r^2\frac{1}{\psi^n}\frac{\text{d}}{\text{d}r}\psi^{n+1}\right) = -\frac{4\pi G}{K}\rho\_c^{1-1/n}\psi^n
$$

化简，最终形式是

$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(r^2\frac{\text{d}\psi}{\text{d}r}\right) = -\frac{4\pi G}{K(1+n)}\rho\_c^{1-1/n}\psi^n
$$

因为 $\psi$ 无量纲，因此 LHS 量纲为 $\text{L}^{-2}$，可以定义下面的 $\lambda\_n$：

$$
\lambda\_n^2 =\frac{K(1+n)}{4\pi G}\rho\_c^{1/n-1}
$$

为某个长度量纲的辅助量. 这时候可以把变量改写为 $r = \lambda\_n\xi$，这样整个方程都无量纲化，

$$
\frac{1}{\xi^2}\frac{\text{d}}{\text{d}\xi}\left(\xi^2\frac{\text{d}\psi}{\text{d}\xi}\right) = -\psi^n
$$

这就是 **Lane - Emden 方程**！它只有一个参数 $n$，描述了所有的物态方程为 $P = K\rho^{1+1/n}$ 的恒星. 它是二阶常微分方程，我们知道它会拥有两个边界条件.

质量：

$$
M = 4\pi\rho\_c\lambda\_n^2\int\frac{\rho}{\rho\_c}\frac{r^2\text{d}r}{\lambda\_n^3} = 4\pi\rho\_c\lambda\_n^3\int\psi^n\xi^2\text{d}\xi
$$

惊讶地发现利用 L-E 方程可以直接 remove the integral，获得

$$
M = -4\pi\rho\_c\lambda\_n^3\int\_0^{\xi\_R}\frac{\text{d}}{\text{d}\xi}\left(\xi^2\frac{\text{d}\psi}{\text{d}\xi}\right)\text{d}\xi = -4\pi\rho\_c\lambda\_n^3\left\[\xi^2\psi'\right]^{\xi\_R}\_0 = -4\pi\rho\_c\lambda\_n^3\xi\_R^2\psi'(\xi\_R)
$$

平均密度

$$
\bar{\rho} = \frac{M}{V} = -\frac{3\psi'(\xi\_R)}{\xi\_R}\cdot\rho\_c\equiv\frac{\rho\_c}{\Gamma\_n}
$$

这里的 $\Gamma\_n$ 是一个由 $n$ 确定的量，和其他物理实际都无关. 因此只要我们知道 L-E 方程的解就能确定这个值.

也可以从这里推导出 $K$，有

$$
K\propto G\lambda\_n^2\rho\_c^{1-1/n}\propto GR^2\left(\frac{M}{R}\right)^{1-1/n}\Longrightarrow K = N\_nGM^{1-1/n}R^{3/n-1}
$$

这也是由 $n$ 完全决定的，可以查表获得.

同理计算中心压强：

$$
\begin{aligned}
P\_c &= K\rho\_c^{1+1/n}\propto\left(\frac{M}{R^3}\right)^{1+1/n}GM^{1-1/n}R^{3/n-1}\propto \rho\_c^{4/3}M^{2/3}\\\\
\Longrightarrow \&P\_c = W\_n\frac{GM^2}{R^4}=C\_nG\rho\_c^{4/3}M^{2/3}
\end{aligned}
$$

系数都是由 $n$ 决定.

中心温度并不能简单通过 L-E 方程定出，为简化计算，可以用理想气体近似一下，

$$
P\_c = \frac{\rho\_ck\_BT\_c}{m\_u\mu}
$$

***

代入极端相对论性的条件，$n=3$，得到

$$
K\_{\text{R}} = N\_3GM^{1/3} \Longrightarrow M\_{\text{chandra}} = \left(\frac{K\_\text{R}}{GN\_3}\right)^2 \approx 1.45M\_{\odot}
$$

这是 Chandrasekhar 极限.

***

太阳的化学能可以简单估计一下，我们认为化学反应的能标是 $1\text{ eV}$，因此

$$
E\_{\text{chem}} = \frac{M\_{\odot}}{\mu m\_u} \sim\frac{10^{33}}{10^{-24}}\cdot 10^{-12}\text{ erg}\sim10^{45}\text{ erg}
$$

这个看起来很大，但是，

$$
t\_{\text{chem}} = \frac{E\_{\text{chem}}}{L\_{\odot}} = \frac{10^{45}}{10^{34}}\sim 10^{11}\text{ sec}\sim 10^{3\sim4}\text{ yr.}
$$

这个明显不能支撑太阳的燃烧. 如果用引力势能，那么

$$
E\_{\text{grav}} \sim\frac{GM\_{\odot}^2}{R\_{\odot}}\sim\frac{10^{-7}(10^{33})^2}{10^{11}}\sim10^{48}\text{ erg}
$$

这个也不够.

现在来计算太阳能否点火核聚变 —— 需要足够热来突破 Coulomb 势的势垒，但是这一般要 $10^{10}\text{ K}$，而太阳的温度在 $10^7\text{ K}$ 量级. 唯一的解释是 quantum tunneling. 我们不需要把质子之间的距离降低到 $\text{fm}$ 的量级，只要可能隧穿即可，

$$
\lambda\_{\text{dB}} = \frac{\hbar}{\sqrt{2m\_pE}}\Longrightarrow E \propto \frac{1}{\lambda\_{\text{dB}}^2}
$$

> 这里要说一下，dB 指的是 de Broglie... 虽然我觉得这个下标也太抽象了.

虽然这个 $\lambda\_{\text{dB}}$ 仍然 $\ll$ 平均质子间距，但是已经可以实现点火. 隧穿概率：

$$
\ln P\_{\text{tunnel}} \sim\frac{4\pi}{h}\int\_{r\_s}^{r\_E}|p(r)|\text{d}r \sim-\frac{p\_Er\_E}{h}\sim\frac{\sqrt{m\_uE}}{h}\frac{Z\_1Z\_2e^2}{E}
$$

严格地计算表明，

$$
E = \frac{8\pi^2Z\_1^2Z\_2^2e^4m\_u}{h^2}
$$

当然我们只需要了解其中的物理即可.

:::: tip

老师上课画的图：

::: window

![](https://vip.123pan.cn/1845440081/yk6baz03t0n000dck5xyplekr21ablwcDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::
