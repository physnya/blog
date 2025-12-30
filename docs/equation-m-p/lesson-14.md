---
title: Lesson 14 积分变换
permalink: /equation-m-p/lesson-14-integral-transformation/
createTime: 2025/12/26 11:16:51
---
上节课讲的「分离变量法的总结」并不是复习的重点.

今天我们说积分变换.

## Laplace 变换

$$
F(p) = \mathscr{L}[f(t)] = \int_0^\infty e^{-pt}f(t)\text{d}t
$$
/Example/

> $1$ 的 Laplace 变换：
> $$
> 1\fallingdotseq\int_0^\infty e^{-pt}\text{d}t = \frac{1}{p}
> $$
>
> ---
>
> $e^{\alpha t}$ 的变换：
> $$
> e^{\alpha t}\fallingdotseq\int_0^\infty e^{(\alpha-p)t}\text{d}t = \frac{1}{p-\alpha},\quad \Re(p)>\Re(\alpha)
> $$

Laplace 变换存在的充分条件：

* $f(t)$ 在区间 $0\leqslant t<\infty$ 中除了有限的第一类间断点外连续，而且有连续导数；

* $f(t)$ 增长不超过指数函数. 即，存在正数 $M>0$ 以及 $s'>0$，对于任何 $t$ 有
  $$
  |f(t)|<Me^{s't}
  $$

换句话说，一般的函数都可以做 Laplace 变换；但是这也导致 Laplace 变换仅适合做初值问题.

容易算 $\sin\omega t$ 和 $\cos\omega t$ 的 Laplace 变换：
$$
\begin{aligned}
\sin\omega t&=\frac{e^{\text{i}\omega t}-e^{-\text{i}\omega t}}{2}\fallingdotseq\frac{1}{2\text{i}}\left(\frac{1}{p-\text{i}\omega}-\frac{1}{p+\text{i}\omega}\right)=\frac{\omega}{p^2+\omega^2}\\\\
\cos\omega t&=\frac{e^{\text{i}\omega t}+e^{-\text{i}\omega t}}{2}\fallingdotseq\frac{1}{2}\left(\frac{1}{p-\text{i}\omega}+\frac{1}{p+\text{i}\omega}\right)=\frac{p}{p^2+\omega^2}
\end{aligned}
$$
变换的性质：
$$
F(p)\to0,\quad \text{when }\Re(p)=s\to+\infty
$$
解析性质：若 $f(t)\fallingdotseq F(p)$，则 $F(p)$ 在半平面 $\Re(p)\geqslant s_1>s_0$ 上解析.

---

做题所需要的几个重要性质：

/Lemma/ (导数的 Laplace 变换)

> 导数的 Laplace 变换：
> $$
> f'(t)\fallingdotseq pF(p)-f(0)
> $$
> (条件是 $f(t)\fallingdotseq F(p)$.)
>
> ::: tip
>
> 原来的求导变换转换为函数的乘法，大幅简化计算，因此可以用来解数理方程.
>
> :::

/Lemma/ (初值定理和终值定理)

> $$
> \lim_{p\to+\infty}pF(p)=f(0),\quad \lim_{p\to0}pF(p)=f(\infty)
> $$
>
> 前一个式子是一直成立的，但是后一个式子在有奇点的情况下有概率不成立.

/Lemma/ (积分的 Laplace 变换)

> 积分的 Laplace 变换：
> $$
> \int_0^tf(\tau)\text{d}\tau \fallingdotseq\frac{F(p)}{p}
> $$
> ::: tip
>
> 这对我们求解方程并没有很大意义，但是在求某些变换时，如果看到分母上有一个 $p$，那么意味着这个原函数可能是某个更简单函数的积分.
>
> :::

/Lemma/ (像函数导数的反演)

> 若 $f(t)\fallingdotseq F(p)$，则
> $$
> F^{(n)}(p)\risingdotseq(-t)^nf(t)
> $$
> ::: tip
>
> 这个性质可用来求原函数. 一个例子：
> $$
> \frac{1}{p^2}=\frac{\text{d}}{\text{d}p}\left(-\frac{1}{p}\right)\risingdotseq (-1)\cdot(-t) = t
> $$
> :::

/Lemma/ (像函数积分的反演)

> 如果 $\displaystyle{\int_p^\infty F(q)\text{d}q}$ 存在，且当 $t\to0$ 时，$|f(t)/t|$ 有界，那么
> $$
> \int_p^\infty F(q)\text{d}q \risingdotseq\frac{f(t)}{t}
> $$
> 证明过程是直接算积分：
> $$
> \begin{aligned}
> \int_p^\infty\left[\int_0^\infty f(t)e^{-qt}\text{d}t\right]\text{d}q &= \int_0^\infty\left[\int_p^\infty f(t)e^{-qt}\text{d}q\right]\text{d}t=\cdots
> \end{aligned}
> $$
> ::: tip
>
> 一个例子是求解 $\sin\omega t/t$ 的变换，
> $$
> \frac{\sin\omega t}{t}\fallingdotseq\int_p^\infty\frac{\omega}{q^2+\omega^2}\text{d}q = \frac{\pi}{2}-\arctan\frac{p}{\omega}
> $$
> :::

/Theorem/ (卷积定理)

> 设 $F_1(p)\risingdotseq f_1(t)$，$F_2(p)\risingdotseq f_2(t)$，则
> $$
> F_1(p)F_2(p)\risingdotseq\int_0^tf_1(\tau)f_2(t-\tau)\text{d}\tau
> $$
>
> ---
>
> 这里定义了函数 $f_1(t)$ 和函数 $f_2(t)$ 在区间 $[a,b]$ 上的卷积：
> $$
> \int_a^bf_1(\tau)f_2(t-\tau)\text{d}\tau
> $$

/Proof/

> 对卷积做 Laplace 变换：
> $$
> \begin{aligned}
> &\int_0^\infty\left[\int_0^tf_1(\tau)f_2(t-\tau)\text{d}\tau\right]e^{-pt}\text{d}t\\\\
> &=\int_0^\infty\left[\int_\tau^\infty f_1(\tau)f_2(t-\tau)e^{-pt}\text{d}t\right]\text{d}\tau
> \end{aligned}
> $$
> (这里的交换积分次序需要在 $t$ - $\tau$ 平面上画出积分限来确定.) 接下去计算：
> $$
> \begin{aligned}
> &=\int_0^\infty f_1(\tau)\left[\int_\tau^\infty f_2(t-\tau)e^{-pt}\text{d}t\right]\text{d}\tau\\\\
> &= F_1(p)F_2(p)
> \end{aligned}
> $$

普遍反演公式：

::: warning

实际上普遍反演公式并不普遍.

:::

若 $F(p)$，$p=s+\text{i}\sigma$ 满足：

* $F(p)$ 在 $\Re(p)>s_0$ 解析；

* 在区域 $\Re(p)>s_0$ 上，$|p|\to\infty$ 时 $F(p)$ 一致趋于 $0$；

* 对于所有的 $\Re(p)=s>s_0$，沿直线 $L:\Re(p)=s$ 的无穷积分收敛
  $$
  \int_{s-\text{i}\infty}^{s+\text{i}\infty}|F(p)|\text{d}p\quad (s>s_0)
  $$

则对于 $\Re(p)=s>s_0$，
$$
F(p)\risingdotseq f(t)=\frac{1}{2\pi\text{i}}\int_{s-\text{i}\infty}^{s+\text{i}\infty}F(p)e^{pt}\text{d}p
$$

---

用 Laplace 变换求解微分方程.

/Example/

> 求解定解问题：
> $$
> \left\{\begin{aligned}
> &y''(t)+\omega^2y(t) = g(t)\\\\
> &y(0)=0,\quad y'(0)=0
> \end{aligned}\right.
> $$
>
> ---
>
> 做 Laplace 变换 $y(t)\fallingdotseq Y(p)$，$y''(t)\fallingdotseq p^2Y(p)$，$g(t)\fallingdotseq G(p)$，则直接变为
> $$
> p^2Y(p)+\omega^2Y(p)=G(p)
> $$
> 解得
> $$
> Y(p)=\frac{G(p)}{p^2+\omega^2}
> $$
> 我们已经知道 $\sin\omega t\fallingdotseq\omega/(p^2+\omega^2)$. 利用卷积定理，得到
> $$
> y(t)=\frac{1}{\omega}\int_0^t\sin[\omega(t-\tau)]g(\tau)\text{d}\tau
> $$

明显看出 Laplace 变换非常适合解常微分方程.

/Example/

> 求解无界杆的热传导.
> $$
> \left\{\begin{aligned}
> &\frac{\partial u}{\partial t}-\kappa\frac{\partial^2u}{\partial x^2}=f(x,t)&\quad -\infty<x<\infty,\quad t>0\\\\
> &u\big|_{t=0}=0&\quad -\infty<x<\infty
> \end{aligned}\right.
> $$
>
> ---
>
> 边界还有条件 $u\big|_{x\to\pm\infty}=0$.
>
> 做变换，
> $$
> u(x,t)\fallingdotseq U(x,p)=\int_0^\infty u(x,t)e^{-pt}\text{d}t
> $$
> 利用初始条件，有
> $$
> \frac{\partial u}{\partial t} \fallingdotseq pU(x,p)
> $$
> 变换后的像函数可以看作仅仅是 $x$ 的一元函数，$p$ 作为一个参数. 因此：
> $$
> \frac{\partial^2u}{\partial x^2}\fallingdotseq\frac{\text{d}^2U(x,p)}{\text{d}x^2}
> $$
> 对应方程
> $$
> \frac{\text{d}^2U(x,p)}{\text{d}x^2}-\frac{p}{\kappa}U(x,p) = -\frac{F(x,p)}{\kappa}
> $$
> 对应齐次方程通解为 $c_1e^{\sqrt{p/\kappa}x}+c_2e^{-\sqrt{p/\kappa}x}$.
>
> 常数变易法：
> $$
> \begin{aligned}
> &C_1'(x)e^{\sqrt{p/\kappa}x}+C_2'(x)e^{-\sqrt{p/\kappa}x}=0\\\\
> &C_1'(x)e^{\sqrt{p/\kappa}x}-C_2'(x)e^{-\sqrt{p/\kappa}x} = -\frac{F(x,p)}{\sqrt{\kappa p}}
> \end{aligned}
> $$
> 最后通解为
> $$
> \frac{1}{2\sqrt{\kappa p}}\left[\int F(x',p)e^{\sqrt{p/\kappa}(x'-x)}\text{d}x'-\int F(x',p)e^{\sqrt{p/\kappa}(x-x')}\text{d}x'\right]
> $$
> 考虑到无穷远还有边界条件 $\to0$，应该取：
> $$
> \frac{1}{2\sqrt{\kappa p}}\left[\int_{-\infty}^x F(x',p)e^{\sqrt{p/\kappa}(x'-x)}\text{d}x'-\int_\infty^x F(x',p)e^{\sqrt{p/\kappa}(x-x')}\text{d}x'\right]
> $$
> 最后写在一起：
> $$
> U(x,p)=\frac{1}{2\sqrt{\kappa p}}\int_{-\infty}^\infty F(x',p)\exp\left[-\sqrt{\frac{p}{\kappa}}|x-x'|\right]\text{d}x'
> $$

/Example/

> 无界弦波动问题：
> $$
> \begin{aligned}
> &\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0\\\\
> &u\big|_{t=0}=\phi(x),\quad \left.\frac{\partial u}{\partial t}\right|_{t=0}=\psi(x)
> \end{aligned}
> $$
>
> ---
>
> 和上题一样做变换，得到相似的常微分方程：
> $$
> p^2U(x,p)-a^2\frac{\text{d}^2U(x,p)}{\text{d}x^2}=p\phi(x)+\psi(x)
> $$
> 解为
> $$
> U(x,p)=\frac{1}{2a}\int_{-\infty}^\infty\left[\phi(x')+\frac{\psi(x')}{p}\right]\exp\left[-\frac{p}{a}|x-x'|\right]\text{d}x'
> $$
> 因为下列两个变换：
> $$
> e^{-\alpha p}\risingdotseq\delta(t-\alpha),\quad \frac{1}{p}e^{-\alpha p}\risingdotseq\eta(t-\alpha)
> $$
> 原方程解化为
> $$
> \begin{aligned}
> u(x,t)&=\frac{1}{2}\int_{-\infty}^\infty\phi(x')\delta(at-|x-x'|)\text{d}x'+\frac{1}{2a}\int_{x-at}^{x+at}\psi(x')\text{d}x'\\\\
> &=\frac{1}{2}[\phi(x-at)+\phi(x+at)]+\frac{1}{2a}\int_{x-at}^{x+at}\psi(x')\text{d}x'
> \end{aligned}
> $$

## Fourier 变换

下面来讲 Fourier 变换：定义为
$$
F(k)=\mathscr{F}[f(x)]\equiv\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-\text{i}kx}\text{d}x
$$
逆变换为
$$
f(x)=\mathscr{F}^{-1}[F(k)] \equiv\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty F(k)e^{\text{i}kx}\text{d}k
$$
::: warning

这是物理学上常用的形式，和数学上的形式有一定差别.

在 Mathematica 中，Fourier 变换的函数是 `FourierTransform` 而不是 `Fourier`，后者是快速 Fourier 变换函数 (FFT).

:::

/Example/

> 重新解无界杆热传导.
>
> ---
>
> 这里有
> $$
> U(k,t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty u(x,t)e^{-\text{i}kx}\text{d}x,\quad F(k,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x,t)e^{-\text{i}kx}\text{d}x
> $$
> 定解问题化为常微分方程，常数变易法解得
> $$
> U(k,t)=e^{-\kappa k^2t}\int_0^t F(k,\tau)e^{\kappa k^2\tau}\text{d}\tau
> $$
> 求反演：
> $$
> u(x,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty U(k,t)e^{\text{i}kx}\text{d}k
> $$
> 利用积分公式
> $$
> \int_{-\infty}^\infty e^{-\alpha x^2+\text{i}\beta x}\text{d}x = \sqrt{\frac{\pi}{\alpha}}e^{-\beta^2/4\alpha}
> $$
> 解得
> $$
> u(x,t)=\frac{1}{2\sqrt{\kappa\pi}}\int_0^t\left\{\int_0^tf(\xi,\tau)\exp\left[-\frac{(x-\xi)^2}{4\kappa(t-\tau)}\right]\text{d}\xi\right\}\frac{\text{d}\tau}{\sqrt{t-\tau}}
> $$

积分变换方法同时适用于三维的无界问题，三维 Fourier 变换为
$$
F(\vec{k}) = \frac{1}{(2\pi)^{3/2}}\iiint f(\vec{r})e^{-\text{i}\vec{k}\cdot\vec{r}}\text{d}^3\vec{r}
$$
特别地，如果 $f(\vec{r})$ 仅仅是 $r$ 的函数 (与角度无关)，则可以用球坐标，并把 $\vec{k}\cdot\vec{r}$ 写成 $kr\cos\theta$，
$$
F(k) = \frac{1}{k}\sqrt{\frac{2}{\pi}}\int_0^\infty f(r)r\sin kr\text{d}r
$$
反演遵循同样规则.

/Example/

> 求解二维平面上的自由振动问题：
> $$
> \begin{aligned}
> &\frac{\partial^2u}{\partial t^2}-a^2\left[\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}\right] = 0\\\\
> &u\big|_{t=0}=\phi(x,y),\quad\left.\frac{\partial u}{\partial t}\right|_{t=0}=\psi(x,y)
> \end{aligned}
> $$
>
> ----
>
> 不能直接二维变换，因为求逆时会遇到问题.
>
> ::: warning
>
> 实际上偶数维都有相似的问题，会遇到 Bessel 函数的积分表示，把积分化成关于 Bessel 函数的积分.
>
> :::
>
> 引入一个 $z$ 维度，看成柱面波，然后三维 Fourier 变换解得
> $$
> U(t,k_x,k_y) = \frac{\Psi(\vec{k})\sin(akt)}{ak}+\Phi(\vec{k})\cos(akt)
> $$
> 下面需要先求出 $\sin(akt)/(ak)$ 和 $\cos(akt)$ 的逆变换，然后卷积定理求出方程的最终解.
>
> 引入球坐标，取 $\vec{r}$ 沿着 $z$ 轴，积分出 $\phi,\theta$，得到
> $$
> \begin{aligned}
> &\frac{1}{(2\pi)^{3/2}}\iiint\frac{\sin(akt)e^{\text{i}\vec{k}\cdot\vec{r}}}{ak}k^2\sin\theta\text{d}\phi\text{d}\theta\text{d}k\\\\
> &= \frac{1}{2ar\sqrt{2\pi}}\int_{-\infty}^\infty[e^{\text{i}k(r-at)}-e^{\text{i}k(r+at)}]\text{d}k
> \end{aligned}
> $$
> 上式结果是 $\delta$ 函数 $\sqrt{2\pi}\delta(r-at)/(2ar)$. 由卷积定理，
> $$
> \begin{aligned}
> &\frac{\Psi(k)\sin(akt)}{ak}\\\\
> &\risingdotseq\frac{1}{4\pi a}\iiint\frac{\psi(x',y')\delta[\sqrt{(x-x')^2+(y-y')^2+z'^2}-at]}{\sqrt{(x-x')^2+(y-y')^2+z'^2}}\text{d}x'\text{d}y'\text{d}z'
> \end{aligned}
> $$
> 不依赖于 $z$，可以直接取 $z=0$ 并去掉 $z'$ 的积分.
>
> $\Phi(k)$ 的逆变换是类似的，最终解为
> $$
> \begin{aligned}
> u(x,y)&=\frac{1}{2\pi a}\Big[\iint\frac{\psi(x',y')}{\sqrt{a^2t^2-(x-x')^2-(y-y')^2}}\text{d}x'\text{d}y'\\
> &\quad+\frac{\partial}{\partial t}\iint\frac{\phi(x',y')}{\sqrt{a^2t^2-(x-x')^2-(y-y')^2}}\text{d}x'\text{d}y'\Big]
> \end{aligned}
> $$

## Green 函数法

我们做电动力学的时候，遇到一个复杂的电荷分布，求其空间电势分布的方法是用点电荷的电势叠加 —— 这就是 Green 函数法.

对于有界的问题，我们应该如何通过适当边界条件下的点电荷电势的叠加，而给出任意电荷分布和任意边界条件时的电势？也就是用定解问题
$$
\nabla^2G(\vec{r};\vec{r}')=-\frac{1}{\varepsilon_0}\delta(\vec{r}-\vec{r}'),\quad \vec{r},\vec{r}'\in V\text{ and proper boundary conditions}
$$
的解 $G$ 叠加出
$$
\nabla^2u(\vec{r})=-\frac{1}{\varepsilon_0}\rho(\vec{r}),\quad u\big|_{\Sigma} = f(\Sigma)
$$
