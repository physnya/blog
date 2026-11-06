---
url: /equation-m-p/lesson-11-bessel-function/index.md
---
Bessel 函数的递推关系满足
$$
J\_{\nu-1}+J\_{\nu+1}=\frac{2\nu}{x}J\_\nu
$$
计算积分：
$$
\int x^mJ\_n\text{d}x = x^mJ\_m,\quad m\in\mathbb{Z}
$$
仅仅在 $m-n\in$ 正奇数时整个定积分才可做，所以说之后齐次化方程的边界条件时，构造的函数要注意是不是可积.

> 原理在于，每一次做分部积分的时候，出来的第一项必须要是零，不然一直往下递推出现无穷求和就无法计算了.

/Example/

> 计算定积分：
> $$
> \int\_0^1(1-x^2)J\_0(\mu x)x\text{d}x
> $$
> 其中 $J\_0(\mu)=0$.
>
> ***
>
> 递推关系是
> $$
> \frac{1}{\mu}\frac{\text{d}}{\text{d}x}\[x^\nu J\_\nu(\mu x)]=x^\nu J\_{\nu-1}(\mu x)
> $$
> 积分为
> $$
> \begin{aligned}
> &\int\_0^1(1-x^2)J\_0(\mu x)x\text{d}x \\\\
> &= \frac{1}{\mu}\int\_0^1(1-x^2)\frac{\text{d}}{\text{d}x}\[xJ\_1(\mu x)]\text{d}x\\\\
> &=\left.\frac{1}{\mu}(1-x^2)xJ\_1(\mu x)\right|^1\_0+\frac{2}{\mu}\int\_0^1x^2J\_1(\mu x)\text{d}x\\\\
> &= \left.\frac{2}{\mu^2}x^2J\_2(\mu x)\right|^1\_0 = \boxed{\frac{2}{\mu^2}J\_2(\mu)}
> \end{aligned}
> $$
> 到这里还没做完，因为我们课程要求尽量把 Bessel 函数的阶数降到最低，同时不增加额外的项数，因此还要再算一步 (2 分)：
> $$
> J\_0(\mu)+J\_2(\mu)=\frac{2}{\mu}J\_(\mu),\quad J\_0(\mu)=0
> $$
> 所以答案为
> $$
> \int\_0^1(1-x^2)J\_0(\mu x)x\text{d}x=\boxed{\frac{4}{\mu^3}J\_1(\mu)}
> $$

## 渐近展开

Bessel 函数的展开有两种类型 (不证明，但是要背)：
$$
\begin{aligned}
\&z\to0,\quad J\_\nu(z)=\frac{1}{\Gamma(\nu+1)}\left(\frac{z}{2}\right)^\nu+\mathcal{O}(z^{\nu+2})\\\\
\&z\to\infty,\quad J\_\nu(z)\sim\sqrt{\frac{2}{\pi z}}\cos\left(z-\frac{\nu\pi}{2}-\frac{\pi}{4}\right),\quad |\arg z|<\pi
\end{aligned}
$$
Neumann 函数渐近展开：
$$
\begin{aligned}
\&z\to0,\quad N\_\nu(z)\sim-\frac{\Gamma(\nu)}{\pi}\left(\frac{z}{2}\right)^{-\nu}\\\\
\&z\to\infty,\quad N\_\nu(z)=\sqrt{\frac{2}{\pi z}}\sin\left(z-\frac{\nu\pi}{2}-\frac{\pi}{4}\right),\quad |\arg z|<\pi
\end{aligned}
$$

***

讲一个积分：
$$
\int J\_0(x)\cos x\text{d}x
$$
做法是对 “$1$” 分部积分，
$$
\begin{aligned}
&\int J\_0(x)\cos x\text{d}x\\
&=x\cos xJ\_0(x)-\int x\[J\_0(x)\cos x]'\text{d}x\\
&=x\cos xJ\_0(x)-\int x\[-J\_1(x)\cos x-J\_0(x)\sin x]\text{d}x\\
&=x\cos xJ\_0(x)+\int \left\[\frac{\text{d}\[xJ\_1(x)]}{\text{d}x} \sin x+xJ\_1(x)\cos x\right]\text{d}x\\\\
&=\boxed{x\cos xJ\_0(x)+x\sin xJ\_1(x)}
\end{aligned}
$$
同理，可以积分：

$$
\int x^nJ\_n(x)\cos x\text{d}x
$$
实际上是对 $x^{2n}$ 的分部积分.

## 生成函数

生成函数为
$$
\exp\left\[\frac{z}{2}\left(t-\frac{1}{t}\right)\right]=\sum\_{n=-\infty}^\infty J\_n(z)t^n
$$
如果令 $t=\text{i}e^{\text{i}\theta}$，那么
$$
e^{\text{i}z\cos\theta}=\sum\_{n=-\infty}^\infty J\_n(z)\text{i}^ne^{\text{i}n\theta} = J\_0(z)+2\sum\_{n=1}^\infty\text{i}^nJ\_n(z)\cos n\theta
$$
为了看到其物理意义，令 $z=kr$，则 LHS 明显是一个平面波，RHS 则是展开的一系列柱面波，这就是「平面波按照柱面波展开」，是一种分波近似.

如果令 $t=e^{\text{i}\theta}$，那么
$$
e^{\text{i}z\sin\theta}=\sum\_{n=-\infty}^\infty J\_n(z)e^{\text{i}n\theta}
$$
这是函数 $f(z)=e^{\text{i}z\sin\theta}$ 的 Fourier 展开，由展开的系数表达式，我们得到了 Bessel 函数的积分表达式：
$$
\begin{aligned}
J\_n(z)&=\frac{1}{2\pi}\int\_{-\pi}^\pi e^{\text{i}z\sin\theta}(e^{\text{i}n\theta})^\*\text{d}\theta\\\\
&=\frac{1}{2\pi}\int\_{-\pi}^\pi\[\cos(z\sin\theta-n\theta)+\text{i}\sin(z\sin\theta-n\theta)]\text{d}\theta
\end{aligned}
$$
RHS 的虚部是奇函数，积分为零，积分表达式是
$$
J\_n(z)=\frac{1}{\pi}\int\_0^\pi\cos(z\sin\theta-n\theta)\text{d}\theta
$$
/Example/

> 重新计算定积分：
> $$
> \int\_0^\infty e^{-ax}J\_0(bx)\text{d}x,\quad \Re(a)>0
> $$
>
> ***
>
> $$
> \begin{aligned}
> &\int\_0^\infty e^{-ax}J\_0(bx)\text{d}x\\\\
> &=\int\_0^\infty e^{-ax}\left\[\frac{1}{2\pi}\int\_{-\pi}^\pi e^{\text{i}bx\sin\theta}\text{d}\theta\right]\text{d}x\\\\
> &=\frac{1}{\pi}\int\_{-\pi}^\pi\frac{\text{d}\theta}{a-\text{i}b\sin\theta}
> \end{aligned}
> $$
>
> 用留数定理，得到答案 $(a^2+b^2)^{-1/2}$.

下面我们说一说圆孔的 Fraunhofer 衍射，既然讲到这里了就物理一点. 由 Huygens-Fresnel 原理，波振幅为
$$
A\propto\int\_{\Sigma'}e^{-\text{i}\vec{k}\cdot\vec{r}'}\text{d}\Sigma'
$$
假设入射光沿 $z$ 方向，圆孔上的点取极坐标 $(\rho,\varphi)$. 衍射光与 $z$ 轴夹角 $\theta$，在 $x$ - $y$ 平面和 $x$ 轴夹角 $\psi$. 得到
$$
\vec{k}\cdot\vec{r}'=\frac{2\pi\rho\sin\theta}{\lambda}\cos(\varphi-\psi)
$$
所以积分变为
$$
A\propto\int\_0^a\int\_0^{2\pi}e^{-\text{i}k\rho\sin\theta\cos(\varphi-\psi)}\rho\text{d}\rho\text{d}\varphi
$$
($a$ 是圆孔半径.) 由 Bessel 函数的积分表示，立刻知道
$$
\int\_0^{2\pi}e^{-\text{i}k\rho\sin\theta\cos(\varphi-\psi)}\text{d}\varphi=2\pi J\_0(k\rho\sin\theta)
$$
积分化为
$$
A\propto\int\_0^aJ\_0(k\rho\sin\theta)\rho\text{d}\rho
$$
直接用递推关系，得到
$$
A\propto\frac{J\_1(x)}{x},\quad x=ka\sin\theta=\frac{2\pi a\sin\theta}{\lambda}
$$
波强为
$$
I\propto\left\[\frac{J\_1(x)}{x}\right]^2
$$
取中心 $\theta=0$ 的光强为 $I\_0$ 就能确定整个光强函数.

## 柱函数

满足递推关系
$$
\frac{\text{d}}{\text{d}z}\[z^\nu C\_\nu(z)]=z^\nu C\_{\nu-1}(z),\quad \frac{\text{d}}{\text{d}z}\[z^{-\nu}C\_\nu(z)]=-z^{-\nu}C\_{\nu+1}(z)
$$
的函数统称为柱函数.

我们知道 $J\_\nu(z)$ 和 $N\_\nu(z)$ 在 $z\to\infty$ 的渐近展开描写柱面波，但是它们各自都含有发散和会聚的成分，需要相加和相减来构造出仅有会聚或者仅有发散成分的函数，这就是 Hankel 函数，
$$
H\_\nu^{(1)}(z)\equiv J\_\nu(z)+\text{i}N\_\nu(z),\quad H\_\nu^{(2)}(z)\equiv J\_\nu(z)-\text{i}N\_\nu(z)
$$

## Bessel 函数的应用

> 先来做一个积分：
> $$
> \int\frac{\text{d}x}{xJ\_\nu^2(x)}
> $$
>
> ***
>
> 注意到 Bessel 函数的 Wronsky 行列式正好是 $1/x$，
> $$
> \frac{1}{x}=J\_\nu(z)\frac{\text{d}N\_\nu(z)}{\text{d}z}-N\_\nu(z)\frac{\text{d}J\_\nu(z)}{\text{d}z}
> $$
> 然后就可做了.

/Example/

> 求四周固定的圆形薄膜的固有频率.
>
> ***
>
> 这不是一个定解问题 —— 只需要求本征值问题的本征值 (甚至不用求本征函数).
>
> 在平面极坐标系中，
> $$
> \frac{\partial^2u}{\partial t^2}-c^2\left\[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2u}{\partial\phi^2}\right]=0
> $$
> 代入 $u(r,\phi,t)=v(r,\phi)e^{\text{i}\omega t}$. 则
> $$
> \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2v}{\partial\phi^2}+\frac{\omega^2}{c^2}v=0
> $$
> 这里 $c$ 待定. 然后按步骤分离变量，
> $$
> \frac{1}{r}\frac{\text{d}}{\text{d}r}\left\[r\frac{\text{d}R(r)}{\text{d}r}\right]+\left(k^2-\frac{m^2}{r^2}\right)R(r)=0
> $$
> 首先可以确定 $k=\omega/c\neq0$，否则是平凡的频率. 通解为
> $$
> R(r)=CJ\_m(kr)+DN\_m(kr)
> $$
> 边界条件要求 $k^2\_{mi}=\[\mu\_i^{(m)}/a]^2$，其中 $\mu$ 是零点，$\mu\_i^{(m)}$ 是 $m$ 阶 Bessel 函数 $J\_m(x)$ 的第 $i$ 个正零点.
>
> ***
>
> 下面研究本征函数的正交关系. 假设有一个本征函数 $J\_m(k\_{mi}r)$，另有一个函数 $J\_m(kr)$，分别满足各自的 Bessel 方程.
>
> 分别用 $rJ\_m(kr)$ 和 $rJ\_m(k\_{mi}r)$ 交叉相乘再相减，并积分：
> $$
> \begin{aligned}
> &(k\_{mi}^2-k^2)\int\_0^aJ\_m(k\_{mi}r)J\_m(kr)r\text{d}r\\\\
> &=r\left\[J\_m(k\_{mi}r)\frac{\text{d}J\_m(kr)}{\text{d}r}-J\_m(kr)\frac{\text{d}J\_m(k\_{mi}r)}{\text{d}r}\right]^{r=a}\_{r=0}
> \end{aligned}
> $$
> ::: warning
>
> 正交性是在 $r$ 权重下的正交性！
>
> :::
>
> 仅仅考虑某些特殊情形，首先考虑 $k\_{mi}\neq k=k\_{mj}$ ($i\neq j$)，得到 $0$ (正交). 再考虑 $k=k\_{mi}$，得到
> $$
> \begin{aligned}
> \int\_0^aJ\_m^2(k\_{mi}r)r\text{d}r&=-\lim\_{k\to k\_{mi}}\frac{k\_{mi}a}{k\_{mi}^2-k^2}J\_m(ka)J'*m(k*{mi}a)\\\\
> &=\frac{a^2}{2}\[J'*m(k*{mi}a)]^2 = \boxed{\frac{a^2}{2}\left\[J'\_m\left(\mu\_i^{(m)}\right)\right]^2}
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
> \int\_0^aJ\_m^2(k\_{mi}r)r\text{d}r=\left(1-\frac{m^2}{\left(\mu\_i^{(m)}\right)^2}\right)\frac{a^2J\_m^2\left(\mu\_i^{(m)}\right)}{2}
> $$
> 第三类边界条件：
> $$
> \frac{a^2}{2}\left\[J'^2\_m\left(\mu\_i^{(m)}\right)+\left(1-\frac{m^2}{\left(\mu\_i^{(m)}\right)^2}\right)J\_m^2\left(\mu\_i^{(m)}\right)\right]
> $$

直接利用 Bessel 方程交叉相乘再相减，可得到一个结论：
$$
\int\_0^x\frac{J\_m(x)J\_n(x)}{x}\text{d}x=\frac{x}{m^2-n^2}\[J\_m'(x)J\_n(x)-J\_n'(x)J\_m(x)]
$$
这个式子可以用来计算下面的积分：
$$
\int\_0^\infty\frac{J\_1^2(x)}{x^2}\text{d}x
$$
先使用一个递推关系
$$
J\_0+J\_2=\frac{2J\_1}{x}
$$
换掉其中一个 $J\_1$，然后就是上面的结论式.

/Example/

> 将定义在 $\[0,1]$ 上的函数 $1-x^2$ 按照 $J\_0(\mu\_ix)$ 展开，其中 $\mu\_i$ 是 $J\_0(x)$ 的正零点.
>
> ***
>
> $$
> 1-x^2=\sum\_{i=1}^\infty c\_iJ\_0(\mu\_i x)
> $$
>
> 则系数为
> $$
> c\_i=\frac{2}{J\_1^2(\mu\_i)}\int\_0^1(1-x^2)J\_0(\mu\_ix)x\text{d}x
> $$
> 根据上一节的结果，得到 $c\_i=8/\mu\_i^3J\_1(\mu\_i)$.
>
> 如果令 $x=1$，可以发现一个结论
> $$
> \sum\_{i=1}^\infty\frac{1}{\mu\_i^2}=\frac{1}{4}
> $$

::: danger

其实设定上最后还讲了一个圆柱体冷却问题，但是我的速度太慢记不下来，幸好讲义上有.

:::

讲一个需要注意的点：下面这个方程是 $0$ 阶的 Bessel 方程，千万不要乱解：
$$
\frac{1}{r}\frac{\text{d}}{\text{d}r}\left\[r\frac{\text{d}R(r)}{\text{d}r}\right]+R(r)=0
$$
