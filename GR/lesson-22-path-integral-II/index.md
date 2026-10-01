---
url: /GR/lesson-22-path-integral-II/index.md
---
回顾一下：对于 Schwarzschild 黑洞，

$$
\mathrm{d}\tau^2 = \rho^2\frac{\mathrm{d}t^2}{(4GM)^2}-\mathrm{d}\rho^2-r^2\mathrm{d}\Omega^2
$$

之后定义

$$
x=2GM\theta\cos\phi,\quad y=2GM\theta\sin\phi,\quad \omega=\frac{t}{4GM}
$$

于是得到 $\mathrm{d}\tau^2=\rho^2\mathrm{d}\omega^2-\mathrm{d}\rho^2-\mathrm{d}x^2-\mathrm{d}y^2$. 现在还在黑洞外面，要跟踪一个自由落入的观测者，要使用下述变换后的坐标，

$$
T=\rho\sinh\omega,\quad Z=\rho\cosh\omega
$$

(Rindler Space) 这个观测者拥有 Minkowski 的固有时，$\mathrm{d}\tau^2=\mathrm{d}T^2-\mathrm{d}Z^2-\mathrm{d}x^2-\mathrm{d}y^2$. 它不应该看到任何奇异的事情发生，因此它看到的是真空态，我们要研究的是自由下落观测者的真空态在无穷远观测者看来是什么样的.

因此上节课我们说到要求这个基态. 现在要算下面这个路径积分：

$$
\langle q\_a|e^{-\mathrm{i}HT}|q\_b\rangle = \int\_{q(0)=q\_a}^{q(T)=q\_b}e^{\mathrm{i}S\[q]}
$$

这个东西并没有什么用. 不过我们发现插入一组 $|n\rangle\langle n|$，会获得

$$
\sum\_n\langle q\_a|n\rangle\langle n|e^{-\mathrm{i}HT}|q\_b\rangle = \sum\_n\langle q\_a|n\rangle\langle n|e^{-\mathrm{i}E\_nT}|q\_b\rangle
$$

如果把 $T$ 取成一个虚数，那么最后积分出来只会剩下那个基态.

$$
e^{-H\tau}=\prod\_k\int\mathrm{d}q\_i^k \cdot e^{-H\varepsilon}|q\_N\rangle\langle q\_N|e^{-H\varepsilon}|q\_{N-1}\rangle\langle q\_{N-1}|e^{-H\varepsilon}|q\_{N-1}\rangle\cdots\langle q\_{n+1}|e^{-H\varepsilon}|q\_n\rangle\cdots\langle q\_2|e^{-H\varepsilon}|q\_1\rangle
$$

单独算一个因子：

$$
\begin{aligned}
&\langle q\_{n+1}|f(q)|q\_n\rangle = f\left(\frac{q\_{n+1}+q\_n}{2}\right)\delta(q\_{n+1}-q\_n)\\\\
&\langle q\_{n+1}|f(p)|q\_n\rangle = \int\frac{\mathrm{d}p\_n}{2\pi}\langle q\_{n+1}|f(p)|p\_n\rangle\langle p\_n|q\_n\rangle = \int\frac{\mathrm{d}p\_n}{2\pi}\cdot e^{\mathrm{i}p\_n(q\_{n+1}-q\_n)}f(p\_n)
\end{aligned}
$$

把 $f(q)=e^{-\varepsilon H}$ 代进去，

$$
\begin{aligned}
\langle q\_{n+1}|e^{-\varepsilon H}|q\_n\rangle &= \int\frac{\mathrm{d}p\_n}{2\pi}\cdot e^{-\varepsilon H(q\_n,p\_n)+\mathrm{i}p\_n(q\_{n+1}-q\_n)}\\\\
&=\int\frac{\mathrm{d}p\_n}{2\pi}\cdot e^{-\varepsilon\[p\_n^2/2m+V(q\_n)+\mathrm{i}p\_n(q\_{n+1}-q\_n)]}\\\\
&=\sqrt{\frac{m}{2\pi\varepsilon}}\cdot e^{-\varepsilon\[mq\_n^2/2+V(q\_n)]}e^{-\varepsilon\[m\dot{q}^2/2+V(q)]}
\end{aligned}
$$

也就是

$$
\begin{aligned}
\langle q\_b|e^{-H\tau}|q\_a\rangle &= \int\mathrm{d}q\_1\cdots\mathrm{d}q\_N\cdot e^{\displaystyle{-\int\mathrm{d}t\cdot\left\[\frac{1}{2}m\dot{q}^2+V(q)\right]}}
\end{aligned}
$$

LHS 可以化为

$$
\sum\_{m,n}\langle q\_b|m\rangle\langle m|e^{-H\tau}|n\rangle\langle n|q\_a| = \sum\_{m,n}\langle q\_b|m\rangle\delta\_{mn}e^{-E\_n\tau}\langle n|q\_a\rangle = \langle q\_b|0\rangle\langle 0|q\_a\rangle e^{-E\_0\tau}
$$

如果 $q\_b$ 是 $x$，那么 $\langle q\_b|0\rangle$ 就是基态向 $x$ 的投影，也就是波函数. 基态波函数为

$$
\psi\_0(x)\psi^\**0(x) =\langle q\_b|0\rangle\langle 0|q\_a\rangle \propto\int*{q(0)=x\_i}^{q(\infty)=x}\mathrm{D}q\cdot e^{-S\_E\[q(t)]}
$$

下一步只用求作用量. 因为 Lagrangian 是 $\mathcal{L}=\displaystyle{\frac{1}{2}\partial\_\mu\phi\partial^\mu\phi}$，因此具体作用量形式为

$$
S\_E =\int\mathrm{d}^3x\mathrm{d}t\_E\cdot \frac{1}{2}\[\dot{\phi}^2+(\nabla\phi)^2]
$$

把 Rindler Space 按照黑洞内外分成两个区域 $\phi\_L$ 和 $\phi\_R$，那么波函数也分这两个区域. 写成

$$
\Psi(\phi\_L,\phi\_R) = \frac{1}{\sqrt{z}}\int\_{\phi\_L(T=0)=\phi\_L\\\phi\_R(T=0)=\phi\_R}\mathrm{D}\phi \cdot e^{-S\_E\[\phi]}
$$

其中 $z$ 是一个用来归一化的因子. 后面这个路径积分实际上是把每一个路径的权重算进去的一个加权均值.

我们之前做的事情是在 $T$ - $z$ 的平面上，把 $T$ 分成很多小份然后叠加在一起. 现在考虑用极坐标描述这个平面，

:::: tip

这是因为，==在数学上== 我们的 Minkowski 度规 (Rindler Space) 的基态波函数可以用一个 Euclidean (因为换成了 $\mathrm{i}T$) 的路径积分来算；而下面我们想换个算法，用极坐标来做这件事.

按照 Euclidean 来算，实际上就是把 $T$ - $z$ 平面的上半平面全部积分一遍，其初态是 $T=0$ (也就是 $z$ 坐标轴)，然后往 $T^+$ 方向积分；现在做极坐标，依然是积分上半平面，但是数学上是把 $\theta=0$ 视为初态，然后逆时针绕 $\pi$ 的角度到 $\theta=\pi$，积分区域没变但是算法变了. 如图：

::: window

![](https://vip.123pan.cn/1845440081/ymjew503t0n000ddw5om1s585ugmts8sDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

新的算法的时间与之前不同 (坐标整个换了)，

$$
\frac{1}{\sqrt{z}}\int\_{\phi\_L(T=0)=\phi\_L\\\phi\_R(T=0)=\phi\_R}\mathrm{D}\phi\cdot e^{S\_E\[\phi]} = \frac{1}{\sqrt{z}}\int\_{\phi(\theta=0)=\phi\_R}^{\phi(\theta=\pi)=\phi\_L}e^{-S\_E}
$$

一个 Euclidean Action 应该对应着一个 physical Hamiltonian，这两个地方的 Hamiltonian 对应的物理实际是一样的，但是其坐标不同，所以不是同一个 Hamiltonian 了，我们称前面 Euclidean 的 Hamiltonian 为 $H$，新的极坐标下的为 $H\_\omega$ (因为它对应的时间已经是那个 $\rho,x,y,\omega$ 的时间 $\omega$ 了). 也就有，

$$
e^{-H\tau}\longleftrightarrow e^{-S\_E}\longleftrightarrow e^{-\pi H\_\omega}
$$

> 这个 $\pi$ 是因为我们在上半平面转了半圈.

现在算密度矩阵 $\rho = \psi^\*(\phi\_L',\phi\_R')\psi(\phi\_L,\phi\_R)$，一个 reduced 版本是

$$
\begin{aligned}
\rho\_{\text{reduced}} &= \int\[\mathrm{D}\phi\_L]\psi^\*(\phi\_L,\phi\_R')\psi(\phi\_L,\phi\_R)\\\\
&= \frac{1}{Z}\int \mathrm{D}\phi\_L\cdot\langle\phi\_R'|e^{-\pi H\_\omega}|\phi\_L\rangle\langle\phi\_L|e^{-\pi H\_\omega}|\phi\_R\rangle\\\\
&= \frac{1}{Z}\langle\phi\_L'|e^{-2\pi H\_\omega}|\phi\_R\rangle
\end{aligned}
$$

而 $\omega = t/4GM$，因此 $H\_\omega =4GM H$，指数上的东西是 $8\pi GM H$. 对应温度正是 Hawking radiation 获得的那个

$$
\boxed{T\_H = \frac{1}{8\pi GM}}
$$

::: tip

上面的很多计算都是在数学上做的，比如把 Rindler Space 变成 Euclidean 来算基态波函数、再对应到极坐标去. 这并不是说物理上真的有个神秘的 Euclidean 时空对应着黑洞，一切操作都基于最后我们要求的那个密度矩阵，想要将这些量联系在一起.

:::

这里我们只算了一个真空的量子场，当然其他的场还会给出其他的纠缠熵.

::: warning

希望大家多练习在这门课的理论部分学到的 integral by part 以及其他的各种技巧，毕竟这种计算就和骑自行车没什么区别. 我们并不生活在那个世界，所以我们难以理解它 —— 正应如此需要多加练习，因为数学是感知的延伸.

:::

***

后面的课会集中于宇宙学的内容.

既然如此剩下的五分钟做一些小的引入. 宇宙的成分是下面这些：

* Radiation: relativistic particle, $v\sim c$
* Matter: non-relativistic particle, $v\ll c$
* Energy: dark energy (vacuum energy)

这个 radiation 的能量 $E\_\gamma$ 有下面几个估计，$n\_\gamma\sim a^{3}$，而 $h\nu\sim a^{-1}$，$E\_\gamma\sim a^{-4}a^3\sim a^{-1}$，也就是宇宙的辐射能量是一直变少的；matter 的能量来自于自身静能，因此几乎不会变化；vacuum energy $\propto a$，如果宇宙由真空能驱使膨胀，会加速膨胀，这正好符合当前的观测结果.
