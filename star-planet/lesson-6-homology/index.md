---
url: /star-planet/lesson-6-homology/index.md
---
mass conservation (continuaty)：
$$
\frac{\text{d}m}{\text{d}r}=4\pi r^2\rho\Longrightarrow\frac{\text{d}r}{\text{d}m}=\frac{1}{4\pi r^2\rho}
$$
Hydro-static balance：
$$
\frac{\text{d}P}{\text{d}m} = -\frac{Gm}{4\pi r^4}
$$
Diffusion condition：
$$
\frac{\text{d}\log T}{\text{d}\log P} = -\frac{Gm}{4\pi r^4}\min(\nabla\_{\text{rad}},\nabla\_{\text{ad}})
$$
energy conservation：
$$
\text{d}L = \dot\epsilon\_{\text{nuc}}\text{d}m-\dot{q}\text{d}m
$$

> 其中，$\dot\epsilon\_{\text{nuc}}$ 是核反应率，$\dot{q}$ 是热量释放率.
> $$
> \text{d}q=\text{d}u+p\text{d}V-T\text{d}S\Longrightarrow \frac{\text{d}q}{\text{d}t}=\frac{\text{d}u}{\text{d}t}-\frac{p}{\rho^2}\frac{\text{d}S}{\text{d}t}
> $$
> 最终上面的能量守恒条件化为
> $$
> \frac{\text{d}L}{\text{d}m} = \dot\epsilon\_{\text{nuc}}-\frac{\text{d}u}{\text{d}t}+\frac{p}{\rho^2}\frac{\text{d}S}{\text{d}t}
> $$

上述一共四个方程，都是一阶，因此需要四个边界条件：

* 在 $m=0$ 处，
  $$
  \frac{\text{d}T}{\text{d}m}=0,\quad \frac{\text{d}L}{\text{d}m}=0
  $$

* 在 $m=M$ 处，认为边缘温度是 $T\_{\text{eff}}$，其中
  $$
  L \propto T\_{\text{eff}}^4
  $$

::: tip

为了精确地求出压强边界值，有
$$
\frac{1}{\kappa\rho}\frac{\text{d}p}{\text{d}r}=-\frac{GM}{R^2}\frac{\rho}{\kappa\rho}\Longrightarrow p(R)=p\_{\text{ph}} = \frac{2g}{\kappa\_R}
$$
:::

## homology

我们想要把上面的方程写成一个无量纲化的形式，方便数值求解.

第一个质量方程可以化为
$$
\tilde r=\frac{r}{R},\quad x=\frac{m}{M},\quad \frac{\text{d}\tilde r}{\text{d}x}=\frac{1}{4\pi\tilde r^2\rho}\frac{M}{R^3}\Longrightarrow\tilde r^2\frac{\text{d}\tilde r}{\text{d}x}=\frac{M}{4\pi R^3\rho}
$$
其中 RHS 的量和恒星无关，是一个近似常量.

对于压强方程，我们可以做同样的事情，
$$
\frac{\text{d}p}{\text{d}x} = -\frac{Gx}{4\pi\tilde r^4}\frac{M^2}{R^4}\Longrightarrow \frac{M^2}{R^4}=\text{const.},\quad \frac{p\_1}{p\_2}=\frac{M\_1^2/R\_1^4}{M\_2^2/R\_2^4}
$$
对于 EoS，可以得到
$$
\frac{T\_2}{T\_1} = \frac{M\_2/(\mu\_2R\_2)}{M\_1/(\mu\_1R\_1)}
$$
温度方程，
$$
\frac{\text{d}T}{\text{d}m}=\frac{-\kappa l}{256\pi\sigma r^4T^3}\Longrightarrow\frac{\text{d}T\_2}{\text{d}T\_1}=\frac{l\_2\kappa\_2M\_2/(T\_2^3R\_2^4)}{l\_1\kappa\_1M\_1/(T\_1^3R\_1^4)}
$$

> 这里可以用刚刚在 EoS 中算出的 $T\_2/T\_1$，最终有
> $$
> \frac{l\_2}{l\_1}=\frac{\mu\_2^4M\_2^3/\kappa\_2}{\mu\_1^4M\_1^3/\kappa\_1}\Longrightarrow L\propto\frac{M^3}{\kappa\mu^4}
> $$
> 也就是更大质量的星体明显更亮.

同理，
$$
p\_c\propto\frac{M^2}{R^4},\quad \rho\_c\propto\frac{M}{R^3}\Longrightarrow p\_c\propto\rho\_c^{4/3}M^{2/3}
$$
对于中心来说，
$$
\frac{4}{3}\frac{\text{d}\rho\_c}{\rho\_c}=\chi\_\rho\frac{\text{d}\rho}{\rho}+\chi\_T\frac{\text{d}T\_c}{T\_c}\Longrightarrow \frac{\text{d}T\_c}{T\_c}=\frac{1}{\chi\_T}\left(\frac{4}{3}-\chi\_\rho\right)\frac{\text{d}\rho\_c}{\rho\_c}
$$
可以画出一个 $\log T\_c$ - $\log \rho\_c$ 图像：

::: tip

首先，星体由理想气体构成，$\chi\_\rho=\chi\_T=1$. 因此一开始是一个斜率 $1/3$ 的直线，直到温度达到核反应温度，这时开始核反应，但是仍然还是继续坍缩，斜率也不会变化 —— 直到和斜率 $2/3$ 的另一条线 (代表着简并的 EoS，$p\_c=K\rho^{5/3}$，这里 $\chi\_T=0,\chi\_\rho=5/3$) 相交. 到这时曲线转向，开始减少，因为核反应减少了，电子简并压阻止引力继续坍缩.

简并的 EoS 曲线在更高温度的位置斜率变为 $1/3$，因为达到相对论性的条件. 因此如果恒星初始的温度足够高 (质量足够大)，就永远不会碰到简并的 EoS 曲线，一直以辐射形式抵抗引力坍缩.

:::
