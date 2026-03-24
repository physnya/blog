---
title: Lesson 9 Schwarzschild 黑洞 (2)
createTime: 2026/03/24 15:28:34
permalink: /GR/lesson-9-schwarzschild-black-hole/
---
::: warning
设定上本次课需要很多光锥的图，但是我没时间在 mathematica 上画了...
:::
这节课讲黑洞. 第一个是 Schwarzschild 黑洞：
$$
\text{d}\tau^2 = \left(1-\frac{2GM}{r}\right)\text{d}t^2 - \left(1-\frac{2GM}{r}\right)^{-1}\text{d}r^2-r^2\text{d}\theta^2-r^2\sin^2\theta\text{d}\phi^2
$$
光锥对应 $\text{d}\tau=0$，因此
$$
\pm\text{d}t = \frac{\text{d}r}{\displaystyle{1-\frac{2GM}{r}}}\Longrightarrow C\pm t = r+2GM\ln\left\vert1-\frac{r}{2GM}\right\vert
$$
其中远离 $2GM$ 的一段可以看作一个直线，而靠近 $2GM$ 会得到一条以 $r=2GM$ 为渐近线的曲线；在 $2GM$ 以内，$r=0$ 是一个本性奇点 (而 $r=2GM$ 是坐标奇点，不是发散的)，因此随着时间演化，视界内的东西会落入奇点.

> 同学们课下可以算一下如果是白洞，在时间无限长的演化下某个物体能否逃出视界.

Freely Falling Particle starts to fall at $r=r_0$：
$$
\left(\frac{\text{d}r}{\text{d}\tau}\right)^2 = E^2-\left(1-\frac{2GM}{r}\right) = 2GM\left(\frac{1}{r}-\frac{1}{r_0}\right)
$$
可以解出一个参数方程，
$$
r=\frac{r_0}{2}(1+\cos\eta),\quad \tau=\frac{r_0}{2}\left(\frac{r_0}{2GM}\right)^{1/2}(\eta+\sin\eta)
$$
这意味着在粒子自己看来，可以在有限的时间内穿过视界. 但是视界在我们之前取的坐标中是一个坐标奇点，考虑换一个坐标消除这样的影响. 之前的奇点来源于坐标时间发散了，所以朴素的想法是减掉发散的项，这就是 Edington 坐标：
$$
\begin{aligned}
t' &= t+2GM\ln\left|\frac{r}{2GM}-1\right|,\quad r' = r
\end{aligned}
$$
坐标变换得到
$$
\text{d}\tau^2 = \left(1-\frac{2GM}{r}\right)\text{d}t^2-\left(1+\frac{2GM}{r}\right)\text{d}r^2 - \frac{4GM}{r}\text{d}r\text{d}t-r^2\text{d}\Omega^2
$$
下一步还是找 $\text{d}\tau=0$，也就是光锥.
$$
\frac{\text{d}r}{\text{d}t}  = \frac{\displaystyle{-\frac{2GM}{r}\pm1}}{\displaystyle{1+\frac{2GM}{r}}}\Longrightarrow t+r = \text{const.}\text{ or } t-r=4GM\ln\left|1-\frac{r}{4GM}\right|
$$
Edington 坐标只能描述往里落的物体所满足的光锥. 反过来，如果要描述一个白洞，那么就要加上一个量把过去发散的坐标时补回来，也就是类似地
$$
t' = t - 2GM\ln\left|\frac{r}{2GM}-1\right|,\quad r'=r
$$
得到度规表达式为
$$
\text{d}\tau^2 = \left(1-\frac{2GM}{r}\right)\text{d}t^2-\left(1+\frac{2GM}{r}\right)\text{d}r^2 + \frac{4GM}{r}\text{d}r\text{d}t-r^2\text{d}\Omega^2
$$
大家回去可以自己算一下这个坐标的光锥.

为了同时描述黑洞和白洞，引入 Kruskal 坐标：
$$
\left\{\begin{aligned}
&r>2GM\left\{\begin{aligned}
&u = \pm\left(\frac{r}{2GM}-1\right)^{1/2}e^{r/(4GM)}\cosh\frac{t}{4GM}\\\\
&v = \pm\left(\frac{r}{2GM}-1\right)^{1/2}e^{r/(4GM)}\sinh\frac{t}{4GM}
\end{aligned}\right.\\\\
&r<2GM\left\{\begin{aligned}
&u = \pm\left(1-\frac{r}{2GM}\right)^{1/2}e^{r/(4GM)}\sinh\frac{t}{4GM}\\\\
&v = \pm\left(1-\frac{r}{2GM}\right)^{1/2}e^{r/(4GM)}\cosh\frac{t}{4GM}
\end{aligned}\right.
\end{aligned}\right.
$$
它的度规写成
$$
\text{d}\tau^2 = \frac{32G^3M^3}{r}e^{-r/(2GM)}(\text{d}v^2-\text{d}u^2)-r^2\text{d}\Omega^2
$$
$r$ 为定值给出的是双曲线，当 $r>2GM$ 对应半长轴在 $u$ 轴上的双曲线、$r<2GM$ 对应半长轴在 $v$ 轴上的双曲线，而本性奇点 $r=0$ 对应两支特殊的双曲线 ($u^2-v^2=-1$). 等时线由 $u/v$ 给出，两条渐近线分别代表 $t\to\pm\infty$.

光锥结构和 Minkowski 时空相似，是直线；但是过了视界对应的那两条直线就无法回头.

::: tip

关于「Kruskal 坐标是怎么想到的」：我们想要仔细研究视界，因此考虑放大视界周围的坐标，建立一个局域的坐标系. 这个坐标系叫作 Rindler Space，以视界处为原点来思考问题. 定义真实距离 $\rho$，
$$
\begin{aligned}
\rho &= \int_{2GM}^r g_{rr}^{1/2}(r')\text{d}r' = \int_{2GM}^r\left(1-\frac{2GM}{r'}\right)^{1/2}\text{d}r' \\\\
&= \sqrt{r(r-2GM)}+2GM\sinh^{-1}\left(\frac{r}{2GM}-1\right)^{1/2}\\\\
&\approx 2\sqrt{2GM(1-2GM)}
\end{aligned}
$$
最后一步近似是在 $r\to2GM$ 处做的. 利用这个「真实距离」可以把度规改写成
$$
\text{d}\tau^2 = \rho^2\left(\frac{\text{d}t}{4GM}\right)^2-\text{d}\rho^2-(2GM)^2\text{d}\Omega^2
$$
这个形式可以被 reparameterize 为一个直角坐标，在 $\theta=0$ 附近，有
$$
x=2GM\theta\cos\phi,\quad y=2GM\theta\sin\phi,\quad\omega=\frac{t}{4GM}
$$
度规改写为
$$
\text{d}\tau^2 = \rho^2\text{d}\omega^2-\text{d}\rho^2-\text{d}x^2-\text{d}y^2
$$
再改写，令 $T=\rho\sinh\omega$，$Z=\rho\cosh\omega$，$X=x$，$Y=y$，则变为和 Minkowski 一样的形式，
$$
\text{d}\tau^2 = \text{d}T^2-\text{d}X^2-\text{d}Y^2-\text{d}Z^2
$$
但是问题在于这里的 $\rho$ 一直是在视界外面的，也就是大于零的，有一部分没办法计算；所以要尝试推广到全空间. 上面推导给我们一个启示，就是如果出现 $-\text{d}\rho^2+\rho^2\text{d}t^2$ 的形式，就能够通过某种双曲函数的坐标变换变成 Minkowski 时空.

---

Back to Kruskal Coordinates：现在目标是 $\text{d}\tau^2=F(R)(R^2\text{d}\omega^2-\text{d}R^2)-r^2\text{d}\Omega^2$，也就是构造 Rindler Space. 对比 Schwarzschild 度规，
$$
F(R)\text{d}R^2 = \frac{1}{\displaystyle{1-\frac{2GM}{r}}}\text{d}r^2,\quad R^2F(R) = 16G^2M^2\left(1-\frac{2GM}{r}\right)
$$

> 其中第二个式子来源于度规第一项的对比.

求解
$$
\frac{\text{d}R^2}{R^2} = \frac{\text{d}r^2}{16G^2M^2}\frac{1}{(1-2GM/r)^2}\Longrightarrow R=GMe^{r^\star/(4GM)},\quad\omega=\frac{t}{4GM}
$$
定义
$$
U=-Re^{-\omega},\quad V=Re^\omega
$$
就已经可以通过 $\text{d}U\text{d}V$ 得到我们需要的 Rindler Space 的形式，$\text{d}R^2-R^2\text{d}\omega^2$. 如果考虑 $U+V$，$U-V$，就会获得 $\sinh$ 和 $\cosh$，得到我们最开始说的 Kruskal 坐标.

:::

接下来说说 Kruskal 坐标的更进一步 —— 复变函数上我们知道全纯变换一定是保角的，也就是 $U'(U)$ 和 $V$ 无关 (且反之亦然)，那么变换就保角. 考虑变换
$$
U'=\arctan\frac{U}{GM},\quad V'=\arctan\frac{V}{GM}
$$
在这个变换下无穷远点被拉近到 $\pi/2$ 位置.