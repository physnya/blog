---
url: /GR/lesson-16-power-of-gravitational-waves/index.md
---
继续说引力波.

仍然回忆电磁场的 lagrangian，
$$
\begin{aligned}
\mathcal{L} &= -\frac{1}{4}F\_{\mu\nu}F^{\mu\nu}+eA\_\mu J^\mu\\\\
&= -\frac{1}{4}(\partial\_\mu A\_\nu-\partial\_\nu A\_\mu)(\partial^\mu A^\nu-\partial^\nu A^\mu)-eA\_\mu J^\mu\\\\
&= -\frac{1}{2}(\partial\_0A\_i-\partial\_iA\_0)(\partial^0A^i-\partial^iA^0)-\frac{1}{4}(\partial\_i A\_j-\partial\_j A\_i)(\partial^i A^j-\partial^j A^i)+eA\_iJ^i+eA\_0J^0
\end{aligned}
$$
Langrange 方程是
$$
\partial\_\mu\frac{\delta\mathcal{L}}{\delta\partial\_\mu A\_\nu} - \frac{\delta\mathcal{L}}{\delta A\_\nu} = 0
$$
代入，两个方程 (规范条件和 Lagrange 方程) 分别是
$$
\begin{aligned}
&\partial\_\mu\partial^\mu A^\nu+eJ^\nu=0\\\\
&\partial\_\mu A^\mu=0
\end{aligned}
$$
于是解得
$$
A^\nu(x,t) = \int\text{d}^3x'\text{d}t'\cdot G(\vec{x}-\vec{x}',t-t')J^\nu(x',t')
$$
无源的情况下，$J=0$，$A^\nu=\varepsilon^\nu e^{\text{i}k\_\mu x^\mu}+\varepsilon^{\*\nu}e^{-\text{i}k\_\mu x^\mu}$. 如果 $\varepsilon^\mu\to \varepsilon^\mu+k^\mu\alpha$，且 $k\_\mu\varepsilon^\mu=0$，那么这时候变换 $\varepsilon^\mu\to \varepsilon^\mu+k^\mu\alpha$ 仍然维持 $k\_\mu\varepsilon^\mu=0$ 的关系. 对一个 $k^\mu=(k,0,0,k)$ 来说，可以通过 $\varepsilon\to\varepsilon+1/k\cdot k$ 的变换，将 $\varepsilon$ 变换到只有 $1,2$ 空间分量的形式，这两个分量分别表示光子的两种偏振.

***

对于引力波，
$$
h\_{ij}^{TT} = \begin{pmatrix}
h\_+ & h\_\times & 0\\
h\_\times & -h\_- & 0\\
0 & 0 & 0
\end{pmatrix}*{ij}\cos\omega(t-z)
$$
它产生的度规是
$$
\text{d}s^2=\text{d}t^2+\text{d}z^2+\[1+h*+\cos\omega(t-z)]\text{d}x^2+\[1-h\_+\cos\omega(t-z)]\text{d}y^2+2h\_\times\cos\omega(t-z)\text{d}x\text{d}y
$$
用 Green 函数的思路来看，
$$
h\_{\mu\nu}(x,t)=4G\int\frac{\text{d}^3x}{|\vec{x}-\vec{x}'|}S\_{\mu\nu}(t-|\vec{x}-\vec{x}'|,\vec{x}),\quad S\_{\mu\nu} = T\_{\mu\nu}-\frac{1}{2}g\_{\mu\nu}T
$$
对于任意一个 source 产生的引力波，是将上述解投影到横向得到的，其中 $S$ 的第二项是一个纯 trace 的量，但是结果应该是无 trace 的，因此这一项的投影是零. 最终有
$$
h\_{ij}^{TT}(x,t)=4G\int\frac{\text{d}^3x}{|\vec{x}-\vec{x}'|}\Lambda\_{ijkl}T\_{kl}(t-|\vec{x}-\vec{x}'|,\vec{x}')
$$
对于一个距离我们非常遥远的引力波源系统，$\vec{x}\gg\vec{x}'$，上式被化为
$$
h\_{ij}^{TT}(x,t) = \frac{4G}{r}\Lambda\_{ijkl}(\hat{n})\int\text{d}^3\vec{x}'\cdot T\_{kl}(t-r+\vec{x}'\cdot\hat{n},\vec{x}')
$$
::: warning

这里不能把 $T$ 中间的 $x'$ 忽略掉，因为引力波由源的振荡产生，
$$
T\_{kl}\sim e^{\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})}
$$
这个项出现在相位上面，一点小变化会造成很大的影响，所以即使和 $r$ 同阶出现也不能忽略.

:::

做一次 Fourier，
$$
T\_{kl}(t,\vec{x}) = \int\frac{\text{d}^4k}{(2\pi)^4}\tilde T\_{kl}(\omega,\vec{k})e^{-\text{i}\omega k+\text{i}\vec{k}\cdot\vec{x}}
$$
变换回去，
$$
\begin{aligned}
&\int\frac{\text{d}\omega}{2\pi}\int\frac{\text{d}^3\vec{k}}{(2\pi)^3}\tilde T\_{kl}(\omega ,k)\int\text{d}^3\vec{x}' e^{-\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})+\text{i}\vec{k}\cdot\vec{x}'}\\\\
&= \int\frac{\text{d}\omega}{2\pi}\tilde T\_{kl}(\omega,\omega\hat{n})e^{-\text{i}\omega(t-r)}
\end{aligned}
$$
于是
$$
h\_{ij}^{TT}(t,\vec{x}) = \frac{4G}{r}\Lambda\_{ijkl}(\hat{n})\int\_{-\infty}^\infty\frac{\text{d}\omega}{2\pi}\tilde T\_{kl}(\omega,\omega\hat{n})e^{-\text{i}\omega(t-r)}
$$

***

回忆我们之前电磁学中的多极展开，我们有 $\alpha^2\sim1/137^2$ 作为每一级之间的量级差异，只有在这种时候才能做展开；在我们这里也可以实现某种多极展开.
$$
\begin{aligned}
\&e^{-\text{i}\omega(t-r+\vec{x}'\cdot\hat{n})} = e^{-\text{i}\omega(t-r)}\[1-\text{i}\omega x'^in^i+\cdots]\\\\
\&T\_{kl}(t-r+\vec{x}'\cdot\hat{n},\vec{x}') = T\_{kl}(t-r,\vec{x}')+(\vec{x}'\cdot\hat{n})\partial\_0T\_{kl}+\frac{1}{2}(\vec{x}'\cdot\hat{n})^2\partial\_0^2T\_{kl}+\cdots
\end{aligned}
$$
Moments (矩)：
$$
\begin{aligned}
\&S^{ij}(t)=\int\text{d}^3x\cdot T^{ij}(t,x)\\\\
\&S^{ij,k}(t) = \int\text{d}^3x\cdot T^{ij}(t,x)x^k\\\\
\&S^{ij,kl}(t) = \int\text{d}^3x\cdot T^{ij}(t,x)x^kx^l
\end{aligned}
$$
利用矩改写引力波的表达式，
$$
h\_{ij}^{TT}(t,\vec{x}) = \frac{4G}{r}\Lambda\_{ijkl}(\hat{n})\[S^{kl}+n\_m\dot{S}^{kl,m}+\frac{1}{2}n\_{mp}\ddot{S}^{kl,mp}+\cdots]
$$
对于上面定义的 $T\_{kl}$ (动量流密度) 的矩，同理可以定义能量密度和动量密度的矩，形如
$$
M^{ij}=\int\text{d}^3x\cdot T^{00}(t,\vec{x})x^ix^j,\quad P^{i,jk}=\int\text{d}^3x\cdot T^{0i}(t,\vec{x})x^jx^k
$$
由 $\partial\_\mu T^{\mu\nu}=0$，得到 $\partial\_0T^{00}=-\partial\_iT^{0i}$ 和 $\partial\_0T^{0i}=-\partial\_jT^{ij}$. 先算能量的矩，由守恒很容易知道 $\dot{M}=0$. 但是一阶矩的导数是
$$
\dot{M}^i = \int\text{d}^3x\cdot x^i\partial\_0T^{00} = -\int\text{d}^3x\cdot x^i\partial\_jT^{0j} = \int\text{d}^3x\delta^i{}\_jT^{0j}=P^i
$$

> 其中，第三个等号来源于一个分部积分.

同理一直往下算，有
$$
\dot{M}^{ij} = P^{i,j}+P^{j,i},\quad \dot{P}^{i,j}=S^{ij},\quad\cdots
$$
最终得到比较重要的一个式子：
$$
S^{ij} = \frac{1}{2}\ddot{M}^{ij}
$$
因此，
$$
\[h\_{ij}^{TT}(t,\vec{x})]*{\text{quad}}=\frac{2G}{r}\Lambda*{ijkl}(\hat{n})\ddot{M}^{kl}(t-r)
$$
定义 $Q^{kl}\equiv M^{kl}-\delta^{kl}M^i{}*i/3$，那么
$$
\[h*{ij}^{TT}(t,\vec{x})]*{\text{quad}}=\frac{2G}{r}\ddot{Q}^{TT}*{ij}(t-r)
$$

***

讨论引力波的能量问题. 对场方程展开到二阶，
$$
R^{(1)\mu\nu}-\frac{1}{2}\eta^{\mu\nu}R^{(1)}+h^{\mu\nu}R^{(1)}-\frac{1}{2}\eta\_{\mu\nu}h^{\lambda\rho}R^{(1)}*{\lambda\rho}+R^{(2)}*{\mu\nu}-\frac{1}{2}\eta\_{\mu\nu}\eta^{\lambda\rho}R^{(2)}\_{\lambda\rho} = 8\pi GT^{\mu\nu}
$$
