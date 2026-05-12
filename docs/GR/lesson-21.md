---
title: Lesson 21 路径积分
createTime: 2026/05/12 15:23:35
permalink: /GR/lesson-21-path-integral/
---
上节课我们推导了 Hawking temperature，$\displaystyle{T_H=\frac{1}{8\pi GM}}$；还有 BH 熵 $S_{BH}=A/4$. 下一步我们要搞清楚这两个量的解释.

黑洞有一个视界，但是外面的观测者能够看到黑洞内部的熵，这是因为量子场是无视视界的，在任何一个点都可以被定义. 这个量子场会随着时间演化，因此其 Lagrangian 中一定有这些 terms：
$$
\mathcal{L} = \mathcal{L}(\dot\phi(x,t),\phi(x,t),\nabla\phi(x,t))
$$

> 最后的空间导数是因为类时和类空在视界上发生变化，有时间导数就一定有空间导数.

Lagrangian 中的空间导数应该表现为 $[\nabla\phi(x,t)]^2$ 的形式 (因为是标量)，也就是
$$
(\partial_x\phi)^2=\lim_{\Delta x\to0}\left[\frac{\phi(x+\Delta x)-\phi(x)}{\Delta x}\right]^2\sim\phi(x+\Delta x)\phi(x)
$$
有交叉项 —— 也就是说任意两个点之间就存在量子的关联. 但是外面还是看不到里面，所以就只能预测内部的体系具有所有的可能状态，这种信息的不对称产生了熵.

具体来说，在黑洞视界附近建立一个坐标系，我们称为 Rindler space. 平常的 Schwarzschild 度规是
$$
\mathrm{d}s^2 = -\left(1-\frac{2GM}{r}\right)\mathrm{d}t^2+\left(1-\frac{2GM}{r}\right)^{-1}\mathrm{d}r^2+r^2\mathrm{d}\Omega^2
$$
Rindler space 是考虑算出距离视界 $r=2GM$ 的距离作为新的坐标，
$$
\rho=\int_{2GM}^r\sqrt{g_{rr}(r')}\mathrm{d}r' = \sqrt{r(r-2GM)}+2GM\sinh^{-1}\sqrt{\frac{r}{2GM}-1}
$$
在视界边上，有 $\rho\approx2\sqrt{2GM(r-2GM)}$. 用这个量重写视界附近的度规，
$$
\mathrm{d}s^2 =-\rho^2\left(\frac{\mathrm{d}t}{4GM}\right)^2+\mathrm{d}\rho^2+(2GM)^2\mathrm{d}\Omega^2
$$
定义下述参变量
$$
x=2GM\theta\cos\phi,\quad y=2GM\theta\sin\phi,\quad \omega = \frac{t}{4GM}
$$
度规进一步写为
$$
\mathrm{d}s^2 = -\rho^2\mathrm{d}\omega^2+\mathrm{d}\rho^2+\mathrm{d}x^2+\mathrm{d}y^2
$$
从解释的角度，$\omega$ 实际上是无穷远观察者所测量的时间，而 $\rho$ 是距离. 这个度规已经很接近 Minkowski 时空的形式，但是前两项本质上还是和平直时空不同. 因此我们需要再做一个变换，
$$
T = \rho\sinh\omega,\quad Z = \rho\cosh\omega
$$
度规变为 $\mathrm{d}s^2 = -\mathrm{d}T^2+\mathrm{d}Z^2+\mathrm{d}x^2+\mathrm{d}y^2$. 如果有一个观测者以 $T$ 作为自己的固有时，那么它可以看到整个 Schwarzschild 时空. 但是和之前以 $\omega$ 作为固有时的观测者相比，后者只能看到视界外的时空，因此后面这个变换相当于拓宽了观测者的视野.

之前说过，一个自由下落的无穷小观测者，应该在进入黑洞过程中看不到任何奇异的现象；这样的观测者看到的真空才是真的真空. 结合上面的推导，我们可以说这个观测者应该就是用 $T,Z$ 定义的坐标，也就是以 $T$ 作为固有时的观测者.

---

先不说关联，说一个相近的概念「涨落」. 对于一个量子态 $|\varphi\rangle$，在算符 $\hat{O}$ 上的涨落应该这样计算：
$$
\langle\varphi|\hat{O}^2|\varphi\rangle = \langle\varphi|\hat{O}|\varphi\rangle^2
$$
更进一步还可以写 $\langle\varphi|\hat{O}_1\hat{O}|_2\varphi\rangle = \langle\varphi|\hat{O}_1|\varphi\rangle\langle\varphi|\hat{O}_2|\varphi\rangle$. 现在说要计算一个真空在量子场 $\phi(t,\vec{x}),\phi(t,\vec{y})$ 的关联，就是算 $|0\rangle$ 态在它们联合下的涨落，
$$
\langle0|\phi(t,\vec{x})\phi(t,\vec{y})|0\rangle = \langle0|\phi(t,\vec{x})|0\rangle\langle0|\phi(t,\vec{y})|0\rangle
$$
且量子场写成
$$
\phi(t,\vec{x}) = \int\frac{\mathrm{d}^3k}{(2\pi)^{3/2}(2\omega_k)^{1/2}}\left(a_ke^{-\mathrm{i}\omega t+\mathrm{i}\vec{k}\cdot\vec{x}}+a_k^\dagger e^{\mathrm{i}\omega t-\mathrm{i}\vec{k}\cdot\vec{x}}\right)
$$
直接代入，不为零的情况仅有 $\phi(t,\vec{x})$ 和 $\phi(t,\vec{y})$ 分别取 $\hat{a}$ 和 $\hat{a}^\dagger$. 因此关联 $\langle0|\phi(t,\vec{x})\phi(t,\vec{y})|0\rangle$ 为
$$
\begin{aligned}
&= \int\frac{\mathrm{d}^3k}{(2\pi)^{3/2}(2\omega_k)^{1/2}}\int\frac{\mathrm{d}^3k'}{(2\pi)^{3/2}(2\omega_{k'})^{1/2}} e^{-\mathrm{i}\omega t+\mathrm{i}\vec{k}\cdot\vec{x}}e^{\mathrm{i}\omega t-\mathrm{i}\vec{k}'\cdot\vec{y}}\delta^3(\vec{k}-\vec{k}')\\\\
&= \int\frac{\mathrm{d}^3k}{(2\pi)^{3}\sqrt{k^2+m^2}} e^{\mathrm{i}k|\vec{x}-\vec{y}|\cos\theta}\\\\
&= \int_{-\infty}^\infty\frac{k\mathrm{d}k(-\mathrm{i})}{8\pi^2\sqrt{k^2+m^2}}e^{\mathrm{i}k|\vec{x}-\vec{y}|}
\end{aligned}
$$
最后这个积分利用了一下被积函数是偶函数的性质. 用复变函数积分，其极点在 $\pm\mathrm{i}m$ 处，实轴上没有极点. 积分曲线是从 $\infty$ 沿实轴到 $-\infty$，然后在上半平面绕大圆弧，但是绕开 $+\mathrm{i}m$ 点. 得到
$$
=\int_m^\infty\frac{\mathrm{d}\rho}{4\pi^2r}\frac{\rho e^{-\rho r}}{(\rho^2-m^2)^{1/2}}\xrightarrow{r=|\vec{x}-\vec{y}|}\frac{1}{4\pi^2r^2}(mr)\text{Bessel K}(1,mr)\sim\frac{m}{r}e^{-mr}
$$
(修正 Bessel 函数). 另外，Lagrangian 表示为 $\mathcal{L}=\displaystyle{\frac{1}{2}\dot\phi^2-\frac{1}{2}(\nabla\phi)^2-\frac{1}{2}m^2\phi^2}$.

接下来说这个关联和熵的关系. 首先我们知道，用密度矩阵来描述纯态和混态，密度矩阵定义为 $\hat\rho=|\psi\rangle\langle\psi|$，比较 trivial 的特性是，对于一个纯态，$\langle\psi|\psi\rangle=1$，因此这时候
$$
\mathrm{Tr}(\hat\rho)=1,\quad \mathrm{Tr}(\hat\rho^2)=1
$$

> 以纯态
> $$
> |\varphi\rangle = \frac{1}{\sqrt{2}}|\uparrow\rangle+\frac{1}{\sqrt{2}}|\downarrow\rangle
> $$
> 为例来验证密度矩阵的这一性质，
> $$
> \begin{aligned}
> |\varphi\rangle\langle\varphi| &= \left(\frac{1}{\sqrt{2}}|\uparrow\rangle+\frac{1}{\sqrt{2}}|\downarrow\rangle\right)\left(\frac{1}{\sqrt{2}}\langle\uparrow|+\frac{1}{\sqrt{2}}\langle\downarrow|\right)\\\\
> &= \frac{1}{2}|\uparrow\rangle\langle\uparrow|+\frac{1}{2}|\downarrow\rangle\langle\uparrow|+\frac{1}{2}|\uparrow\rangle\langle\downarrow|+\frac{1}{2}|\downarrow\rangle\langle\downarrow|
> \end{aligned}
> $$
> 也就是说，
> $$
> \rho_\varphi = \begin{pmatrix}
> 1/2&1/2\\1/2&1/2
> \end{pmatrix}\Longrightarrow\mathrm{Tr}(\rho_\varphi) = 1,\quad \mathrm{Tr}(\rho_\varphi^2)=1
> $$

什么是混态？看下面这种密度矩阵：
$$
\rho_2 = \frac{1}{2}|\uparrow\rangle\langle\uparrow|+\frac{1}{2}|\downarrow\rangle\langle\downarrow|
$$
它的 trace 是 $1$，但是其平方的 trace 是 $1/2$.

我们要研究的问题变成了，用 $T$ 作为固有时的观测者看到的纯态，为什么在用 $t$ (或者 $\omega$) 作为固有时的观测者眼中看到的是一个混态？

> 不考虑研究的是基本粒子的情况，仅仅思考一个双自旋叠加 $(\uparrow+\uparrow)$. 我们都知道 $2\times2=1+3$，这里的 $1$ 是单态 $\displaystyle{\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt{2}}}$，$3$ 是三重态
> $$
> |\uparrow\uparrow\rangle,\quad |\downarrow\downarrow\rangle,\quad \frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt{2}}
> $$
> 前两个三重态的密度矩阵仍然是纯态，但是第三个为
> $$
> \rho = \begin{pmatrix}
> 0&0&0&0\\
> 0&1/2&1/2&0\\
> 0&1/2&1/2&0\\
> 0&0&0&0
> \end{pmatrix}
> $$
> 这个态是混态的原因是，自旋之间产生了关联. 作为验证，可以计算 $\langle s_1s_2\rangle=\langle s_1\rangle\langle s_2\rangle$，发现为 $-1/2\neq0$.

上面仍然是一个简单的例子. 回到黑洞的话题，考虑一个热分布的密度矩阵. 回想上面我们做了什么：首先知道了态具体是什么，再算出密度矩阵. 在黑洞这里我们不能简单地用 $|0\rangle$，因为现在什么都不知道所以没法积分. 所以考虑找一个和时空相关联的「基态」，而计算基态的方法就是 **路径积分**.

鉴于大家都没学过路径积分，现在我们作为前置准备，讲解一下路径积分的相关知识. 对于一个时间演化，
$$
\mathrm{i}\frac{\partial}{\partial t}\psi(t) = H\psi(t)
$$
可以写成 $\psi(t)=e^{-\mathrm{i}Ht}\psi(0)$. 这说起来很简单，但是我们并不知道该怎么算. 现在的问题就是，从 $q_a$ 态 ($t=0$) 演化到 $q_b$ 态 ($t=T$) 是怎么实现的，也就是考虑
$$
U(q_a,q_b;T) = \langle q_b|e^{-\mathrm{i}HT}|q_a\rangle
$$
Feynman 说，把时间切割成很小的块，我们可以实现这个计算，也就是
$$
e^{-\mathrm{i}HT} = e^{-\mathrm{i}H\varepsilon}e^{-\mathrm{i}H\varepsilon}\cdots e^{-\mathrm{i}H\varepsilon}
$$
认为 $k$ 是切的第 $k$ 份，对于每一个自由度 $i$ 都插入一个
$$
1 = \left(\prod_i\int\mathrm{d}q_k^i\right)|q_k^i\rangle\langle q_k^i|
$$
实际上就是要计算每一份小的单元
$$
\langle q_{k+1}|e^{-\mathrm{i}H\varepsilon}|q_k\rangle\approx\langle q_{k+1}|(1-\mathrm{i}\varepsilon H)|q_k\rangle
$$
这个地方我们已经把 $i$ 给省略掉了，因为每个自由度都是一样的. 现在碰到的问题是，$H=H(p,q)$，我们没有办法做 $p$ 的计算. 因此考虑
$$
\langle q_{k+1}|f(q)|q_k\rangle = f(q_k)\delta(q_k-q_{k+1}) = f\left(\frac{q_k+q_{k+1}}{2}\right)\int\frac{\mathrm{d}p_k}{2\pi}e^{\mathrm{i}p_k(q_k-q_{k+1})}
$$
最后一个等号这里，因为 $q_k=q_{k+1}$ ($\delta$ function 的要求)，所以写得对称了一点；同时利用 $\delta$ 的 Fourier 表示把 $p_k$ 给引进来. 所以
$$
\langle q_{k+1}|f(q)|q_k\rangle = \int\frac{\mathrm{d}p_k}{2\pi}f(p_k) e^{\mathrm{i}p_k(q_k-q_{k+1})}
$$
把 $f(q)$ 代换成 $H(p,q)$，有
$$
\langle q_{k+1}|H(p,q)|q_k\rangle = \int\frac{\mathrm{d}p_k}{2\pi}\cdot H\left(p_k,\frac{q_k+q_{k+1}}{2}\right)e^{\mathrm{i}p_k(q_k-q_{k+1})}
$$
甚至不用做上面 $e^{-\mathrm{i}\varepsilon H}\approx 1-\mathrm{i}\varepsilon H$ 的近似了，可以直接在指数上计算，
$$
\langle q_{k+1}|e^{-\mathrm{i}\varepsilon H}|q_k\rangle = \int\frac{\mathrm{d}p_k}{2\pi}\cdot\exp\left[-\mathrm{i}\varepsilon H\left(p_k,\frac{q_k+q_{k+1}}{2}\right)+\mathrm{i}p_k(q_k-q_{k+1})\right]
$$
演化 (也就是路径积分) 表示为
$$
\begin{aligned}
&U(q_0=q_a,q_N=q_b;T) \\\\
&= \left(\prod_b\int\mathrm{d}q_k\int\frac{\mathrm{d}p_k}{2\pi}\right)\exp\left[\mathrm{i}\sum_k\varepsilon p_k\frac{q_k-q_{k+1}}{\varepsilon} - \varepsilon H\left(p_k,\frac{q_k+q_{k+1}}{2}\right)\right]\\\\
&= \int \mathrm{d}q(t)\mathrm{d}p(t)\cdot\exp\left[\mathrm{i}\int_0^T\mathrm{d}t\left[p(t)\dot q(t)-H(p(t),q(t))\right]\right]
\end{aligned}
$$
这是 Langrangian 形式的路径积分.

更加细节地，
$$
\begin{aligned}
&U(q_a,q_b;T) \\\\
&= \frac{1}{C(\varepsilon)}\prod_k\int\frac{\mathrm{d}q_k}{C(k)}\cdot\exp\left[\mathrm{i}\sum_k\left(\varepsilon\cdot\frac{m}{2\varepsilon^2}(q_{k+1}-q_k)^2-\varepsilon V\left(\frac{q_k+q_{k+1}}{2}\right)\right)\right]\\\\
&= \int\mathrm{D}q\cdot\exp\left\{\mathrm{i}\int\mathrm{d}t\left[\frac{m}{2}\dot{q}^2(t)-V(q(t))\right]\right\}
\end{aligned}
$$
其中指数上的那个东西正是作用量 $S(t)$，是我们更常见到的 Langrangian 形式的路径积分.

但是原则上，路径积分包含了所有可能的能量本征态，所以并不能直接得到基态波函数. 但是基态的特点就是能量最低，因此如果我们把时间变成虚的，那么无穷长时间的演化之后，最后留下来的就只有基态 ($e^{-E_nT}$). 所以下节课我们讲通过虚时间路径积分得到基态波函数.

::: tip

我不是来上广义相对论的吗？你们要干什么！

:::