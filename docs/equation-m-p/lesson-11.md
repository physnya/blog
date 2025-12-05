---
title: Lesson 11 Bessel 函数
permalink: /equation-m-p/lesson-11-bessel-function/
createTime: 2025/12/05 12:08:31
---
Bessel 函数的递推关系满足
$$
J_{\nu-1}+J_{\nu+1}=\frac{2\nu}{x}J_\nu
$$
计算积分：
$$
\int x^mJ_n\text{d}x = x^mJ_m,\quad m\in\mathbb{Z}
$$
仅仅在 $m-n\in$ 正奇数时整个定积分才可做，所以说之后齐次化方程的边界条件时，构造的函数要注意是不是可积.

> 原理在于，每一次做分部积分的时候，出来的第一项必须要是零，不然一直往下递推出现无穷求和就无法计算了.

/Example/

> 计算定积分：
> $$
> \int_0^1(1-x^2)J_0(\mu x)x\text{d}x
> $$
> 其中 $J_0(\mu)=0$.
>
> ---
>
> 递推关系是
> $$
> \frac{1}{\mu}\frac{\text{d}}{\text{d}x}[x^\nu J_\nu(\mu x)]=x^\nu J_{\nu-1}(\mu x)
> $$
> 积分为
> $$
> \begin{aligned}
> &\int_0^1(1-x^2)J_0(\mu x)x\text{d}x \\\\
> &= \frac{1}{\mu}\int_0^1(1-x^2)\frac{\text{d}}{\text{d}x}[xJ_1(\mu x)]\text{d}x\\\\
> &=\left.\frac{1}{\mu}(1-x^2)xJ_1(\mu x)\right|^1_0+\frac{2}{\mu}\int_0^1x^2J_1(\mu x)\text{d}x\\\\
> &= \left.\frac{2}{\mu^2}x^2J_2(\mu x)\right|^1_0 = \boxed{\frac{2}{\mu^2}J_2(\mu)}
> \end{aligned}
> $$
> 到这里还没做完，因为我们课程要求尽量把 Bessel 函数的阶数降到最低，同时不增加额外的项数，因此还要再算一步 (2 分)：
> $$
> J_0(\mu)+J_2(\mu)=\frac{2}{\mu}J_(\mu),\quad J_0(\mu)=0
> $$
> 所以答案为
> $$
> \int_0^1(1-x^2)J_0(\mu x)x\text{d}x=\boxed{\frac{4}{\mu^3}J_1(\mu)}
> $$

## 渐近展开

Bessel 函数的展开有两种类型 (不证明，但是要背)：
$$
\begin{aligned}
&z\to0,\quad J_\nu(z)=\frac{1}{\Gamma(\nu+1)}\left(\frac{z}{2}\right)^\nu+\mathcal{O}(z^{\nu+2})\\\\
&z\to\infty,\quad J_\nu(z)\sim\sqrt{\frac{2}{\pi z}}\cos\left(z-\frac{\nu\pi}{2}-\frac{\pi}{4}\right),\quad |\arg z|<\pi
\end{aligned}
$$
Neumann 函数渐近展开：
$$
\begin{aligned}
&z\to0,\quad N_\nu(z)\sim-\frac{\Gamma(\nu)}{\pi}\left(\frac{z}{2}\right)^{-\nu}\\\\
&z\to\infty,\quad N_\nu(z)=\sqrt{\frac{2}{\pi z}}\sin\left(z-\frac{\nu\pi}{2}-\frac{\pi}{4}\right),\quad |\arg z|<\pi
\end{aligned}
$$

---

讲一个积分：
$$
\int J_0(x)\cos x\text{d}x
$$
做法是对 “$1$” 分部积分，
$$
\begin{aligned}
&\int J_0(x)\cos x\text{d}x\\
&=x\cos xJ_0(x)-\int x[J_0(x)\cos x]'\text{d}x\\
&=x\cos xJ_0(x)-\int x[-J_1(x)\cos x-J_0(x)\sin x]\text{d}x\\
&=x\cos xJ_0(x)+\int x\left[\frac{\text{d}J_0(x)}{\text{d}x} \sin x+J_1(x)\cos x\right]\text{d}x\\\\
&=\boxed{x\cos xJ_0(x)+x\sin xJ_1(x)}
\end{aligned}
$$
同理，可以积分：

$$
\int x^nJ_n(x)\cos x\text{d}x
$$
实际上是对 $x^{2n}$ 的分部积分.

## 生成函数

生成函数为
$$
\exp\left[\frac{z}{2}\left(t-\frac{1}{t}\right)\right]=\sum_{n=-\infty}^\infty J_n(z)t^n
$$
如果令 $t=\text{i}e^{\text{i}\theta}$，那么
$$
e^{\text{i}z\cos\theta}=\sum_{n=-\infty}^\infty J_n(z)\text{i}^ne^{\text{i}n\theta} = J_0(z)+2\sum_{n=1}^\infty\text{i}^nJ_n(z)\cos n\theta
$$
为了看到其物理意义，令 $z=kr$，则 LHS 明显是一个平面波，RHS 则是展开的一系列柱面波，这就是「平面波按照柱面波展开」，是一种分波近似.

如果令 $t=e^{\text{i}\theta}$，那么
$$
e^{\text{i}z\sin\theta}=\sum_{n=-\infty}^\infty J_n(z)e^{\text{i}n\theta}
$$
这是函数 $f(z)=e^{\text{i}z\sin\theta}$ 的 Fourier 展开，由展开的系数表达式，我们得到了 Bessel 函数的积分表达式：
$$
\begin{aligned}
J_n(z)&=\frac{1}{2\pi}\int_{-\pi}^\pi e^{\text{i}z\sin\theta}(e^{\text{i}n\theta})^*\text{d}\theta\\\\
&=\frac{1}{2\pi}\int_{-\pi}^\pi[\cos(z\sin\theta-n\theta)+\text{i}\sin(z\sin\theta-n\theta)]\text{d}\theta
\end{aligned}
$$
RHS 的虚部是奇函数，积分为零，积分表达式是
$$
J_n(z)=\frac{1}{\pi}\int_0^\pi\cos(z\sin\theta-n\theta)\text{d}\theta
$$
/Example/

> 重新计算定积分：
> $$
> \int_0^\infty e^{-ax}J_0(bx)\text{d}x,\quad \Re(a)>0
> $$
>
> ---
>
> $$
> \begin{aligned}
> &\int_0^\infty e^{-ax}J_0(bx)\text{d}x\\\\
> &=\int_0^\infty e^{-ax}\left[\frac{1}{2\pi}\int_{-\pi}^\pi e^{\text{i}bx\sin\theta}\text{d}\theta\right]\text{d}x\\\\
> &=\frac{1}{\pi}\int_{-\pi}^\pi\frac{\text{d}\theta}{a-\text{i}b\sin\theta}
> \end{aligned}
> $$
>
> 用留数定理，得到答案 $(a^2+b^2)^{-1/2}$.

下面我们说一说圆孔的 Fraunhofer 衍射，既然讲到这里了就物理一点. 由 Huygens-Fresnel 原理，波振幅为
$$
A\propto\int_{\Sigma'}e^{-\text{i}\vec{k}\cdot\vec{r}'}\text{d}\Sigma'
$$
假设入射光沿 $z$ 方向，圆孔上的点取极坐标 $(\rho,\varphi)$. 衍射光与 $z$ 轴夹角 $\theta$，在 $x$ - $y$ 平面和 $x$ 轴夹角 $\psi$. 得到
$$
\vec{k}\cdot\vec{r}'=\frac{2\pi\rho\sin\theta}{\lambda}\cos(\varphi-\psi)
$$
所以积分变为
$$
A\propto\int_0^a\int_0^{2\pi}e^{-\text{i}k\rho\sin\theta\cos(\varphi-\psi)}\rho\text{d}\rho\text{d}\varphi
$$
($a$ 是圆孔半径.) 由 Bessel 函数的积分表示，立刻知道
$$
\int_0^{2\pi}e^{-\text{i}k\rho\sin\theta\cos(\varphi-\psi)}\text{d}\varphi=2\pi J_0(k\rho\sin\theta)
$$
积分化为
$$
A\propto\int_0^aJ_0(k\rho\sin\theta)\rho\text{d}\rho
$$
直接用递推关系，得到
$$
A\propto\frac{J_1(x)}{x},\quad x=ka\sin\theta=\frac{2\pi a\sin\theta}{\lambda}
$$
波强为
$$
I\propto\left[\frac{J_1(x)}{x}\right]^2
$$
取中心 $\theta=0$ 的光强为 $I_0$ 就能确定整个光强函数.

## 柱函数

满足递推关系
$$
\frac{\text{d}}{\text{d}z}[z^\nu C_\nu(z)]=z^\nu C_{\nu-1}(z),\quad \frac{\text{d}}{\text{d}z}[z^{-\nu}C_\nu(z)]=-z^{-\nu}C_{\nu+1}(z)
$$
的函数统称为柱函数.

我们知道 $J_\nu(z)$ 和 $N_\nu(z)$ 在 $z\to\infty$ 的渐近展开描写柱面波，但是它们各自都含有发散和会聚的成分，需要相加和相减来构造出仅有会聚或者仅有发散成分的函数，这就是 Hankel 函数，
$$
H_\nu^{(1)}(z)\equiv J_\nu(z)+\text{i}N_\nu(z),\quad H_\nu^{(2)}(z)\equiv J_\nu(z)-\text{i}N_\nu(z)
$$

## Bessel 函数的应用

> 先来做一个积分：
> $$
> \int\frac{\text{d}x}{xJ_\nu^2(x)}
> $$
>
> ---
>
> 注意到 Bessel 函数的 Wronsky 行列式正好是 $1/x$，
> $$
> \frac{1}{x}=J_\nu(z)\frac{\text{d}N_\nu(z)}{\text{d}z}-N_\nu(z)\frac{\text{d}J_\nu(z)}{\text{d}z}
> $$
> 然后就可做了.

/Example/

> 求四周固定的圆形薄膜的固有频率.
>
> ---
>
> 这不是一个定解问题 —— 只需要求本征值问题的本征值 (甚至不用求本征函数).
>
> 在平面极坐标系中，
> $$
> \frac{\partial^2u}{\partial t^2}-c^2\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2u}{\partial\phi^2}\right]=0
> $$
> 代入 $u(r,\phi,t)=v(r,\phi)e^{\text{i}\omega t}$. 则
> $$
> \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2v}{\partial\phi^2}+\frac{\omega^2}{c^2}v=0
> $$
> 这里 $c$ 待定. 然后按步骤分离变量，
> $$
> \frac{1}{r}\frac{\text{d}}{\text{d}r}\left[r\frac{\text{d}R(r)}{\text{d}r}\right]+\left(k^2-\frac{m^2}{r^2}\right)R(r)=0
> $$
> 首先可以确定 $k=\omega/c\neq0$，否则是平凡的频率. 通解为
> $$
> R(r)=CJ_m(kr)+DN_m(kr)
> $$
> 边界条件要求 $k^2_{mi}=[\mu_i^{(m)}/a]^2$，其中 $\mu$ 是零点，$\mu_i^{(m)}$ 是 $m$ 阶 Bessel 函数 $J_m(x)$ 的第 $i$ 个正零点.
>
> ---
>
> 下面研究本征函数的正交关系. 假设有一个本征函数 $J_m(k_{mi}r)$，另有一个函数 $J_m(kr)$，分别满足各自的 Bessel 方程.
>
> 分别用 $rJ_m(kr)$ 和 $rJ_m(k_{mi}r)$ 交叉相乘再相减，并积分：
> $$
> \begin{aligned}
> &(k_{mi}^2-k^2)\int_0^aJ_m(k_{mi}r)J_m(kr)r\text{d}r\\\\
> &=r\left[J_m(k_{mi}r)\frac{\text{d}J_m(kr)}{\text{d}r}-J_m(kr)\frac{\text{d}J_m(k_{mi}r)}{\text{d}r}\right]^{r=a}_{r=0}
> \end{aligned}
> $$
> ::: warning
>
> 正交性是在 $r$ 权重下的正交性！
>
> :::
>
> 仅仅考虑某些特殊情形，首先考虑 $k_{mi}\neq k=k_{mj}$ ($i\neq j$)，得到 $0$ (正交). 再考虑 $k=k_{mi}$，得到
> $$
> \begin{aligned}
> \int_0^aJ_m^2(k_{mi}r)r\text{d}r&=-\lim_{k\to k_{mi}}\frac{k_{mi}a}{k_{mi}^2-k^2}J_m(ka)J'_m(k_{mi}a)\\\\
> &=\frac{a^2}{2}[J'_m(k_{mi}a)]^2 = \boxed{\frac{a^2}{2}\left[J'_m\left(\mu_i^{(m)}\right)\right]^2}
> \end{aligned}
> $$
> 这个结果和边界条件有关，三类边界条件统一写成 ($\alpha R'(a)+\beta R(a)=0$)：
>
> * $\alpha=0$ 第一类
> * $\beta=0$ 第二类
> * $\alpha,\beta\neq0$ 第三类
>
> 上面是第一类边界条件的结果. 对于第二类边界条件，归一化系数是
> $$
> \int_0^aJ_m^2(k_{mi}r)r\text{d}r=\left(1-\frac{m^2}{\left(\mu_i^{(m)}\right)^2}\right)\frac{a^2J_m^2\left(\mu_i^{(m)}\right)}{2}
> $$
> 第三类边界条件：
> $$
> \frac{a^2}{2}\left[J'^2_m\left(\mu_i^{(m)}\right)+\left(1-\frac{m^2}{\left(\mu_i^{(m)}\right)^2}\right)J_m^2\left(\mu_i^{(m)}\right)\right]
> $$

直接利用 Bessel 方程交叉相乘再相减，可得到一个结论：
$$
\int_0^x\frac{J_m(x)J_n(x)}{x}\text{d}x=\frac{x}{m^2-n^2}[J_m'(x)J_n(x)-J_n'(x)J_m(x)]
$$
这个式子可以用来计算下面的积分：
$$
\int_0^\infty\frac{J_1^2(x)}{x^2}\text{d}x
$$
先使用一个递推关系
$$
J_0+J_2=\frac{2J_1}{x}
$$
换掉其中一个 $J_1$，然后就是上面的结论式.

/Example/

> 将定义在 $[0,1]$ 上的函数 $1-x^2$ 按照 $J_0(\mu_ix)$ 展开，其中 $\mu_i$ 是 $J_0(x)$ 的正零点.
>
> ---
>
> $$
> 1-x^2=\sum_{i=1}^\infty c_iJ_0(\mu_i x)
> $$
>
> 则系数为
> $$
> c_i=\frac{2}{J_1^2(\mu_i)}\int_0^1(1-x^2)J_0(\mu_ix)x\text{d}x
> $$
> 根据上一节的结果，得到 $c_i=8/\mu_i^3J_1(\mu_i)$.
>
> 如果令 $x=1$，可以发现一个结论
> $$
> \sum_{i=1}^\infty\frac{1}{\mu_i^2}=\frac{1}{4}
> $$

::: danger

其实设定上最后还讲了一个圆柱体冷却问题，但是我的速度太慢记不下来，幸好讲义上有.

:::

讲一个需要注意的点：下面这个方程是 $0$ 阶的 Bessel 方程，千万不要乱解：
$$
\frac{1}{r}\frac{\text{d}}{\text{d}r}\left[r\frac{\text{d}R(r)}{\text{d}r}\right]+R(r)=0
$$
