---
title: Lesson 5 复变积分
permalink: /complex/lesson-5/
createTime: 2025/5/6 09:55:21
---
## 复变积分

/Theorem/ (单连通区域的 Cauchy 定理)

> 如果函数 $f(z)$ 在单连通区域 $\overline{G}$ 中解析，则沿 $\overline{G}$ 中任何一个分段光滑的闭合围道 $C$ 有
> $$
> \oint_Cf(z)\text{d}z=0
> $$
> 这里的 $C$ 也可以是 $\overline{G}$ 的边界.
>
> /Remark/
>
> > 要求 $G$ 是一个闭区域 ($\overline{G}$)，是因为强调有界性.

/Proof/

> 在更强的条件下证明这个定理：要求 $f'(z)$ 在 $\overline{G}$ 中连续. 在这个条件下应用 Green 公式：
> $$
> \oint_C[P(x,y)\text{d}x+Q(x,y)\text{d}y]=\iint_S\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\text{d}x\text{d}y
> $$
> 在复变函数中，可以把复变积分拆开，得到：
> $$
> \begin{aligned}
> \oint_C(u+\text{i}v)\text{d}(x+\text{i}y)&=\oint_C(u\text{d}x-v\text{d}y)+\text{i}\oint_C(u\text{d}y+v\text{d}x)\\
> &=-\iint_S\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)\text{d}x\text{d}y+\iint_S\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)\text{d}x\text{d}y
> \end{aligned}
> $$
> 证毕.
>
> /Remark/
>
> > 后面发现导数连续的条件是不必要的. Green 函数的适配条件就是中间不能出现间断点，因为 Green 函数相当于人为引入了一个“洞”.
>
> ---
>
> Goursat 提出了一个更好的证明：取三角形围道，令
> $$
> I=\oint_\Delta f(z)\text{d}z
> $$
> 大三角形可以划分为四个全等的小三角形 (取三条中位线)，且有
> $$
> I=\oint_{\Delta_1}f(z)\text{d}z+\oint_{\Delta_2}f(z)\text{d}z+\oint_{\Delta_3}f(z)\text{d}z+\oint_{\Delta_4}f(z)\text{d}z
> $$
> 这四个围道积分一定有一个最大的，记为 $M_{\Delta^{(1)}}$，同时记大三角形积分为 $M=|I|$，有
> $$
> M_{\Delta^{(1)}}\geq\frac{M}{4}
> $$
> 无限细分，得到
> $$
> M_{\Delta^{(n)}}\geq\frac{M}{4^n}
> $$
> 接下来估算 $M_{\Delta^{(n)}}$：由区间套，必然存在一点 $z_0$ 为所有 $\Delta\to\Delta^{(n)}$ 内部的公共点，这一点在区域内，所以可导，因此 $\forall\varepsilon>0$，$\exist\delta(\varepsilon)$，使得当 $|z-z_0|<\delta$ 时满足
> $$
> \left|\frac{f(z)-f(z_0)}{z-z_0}-f'(z_0)\right|<\varepsilon\\
> |f(z)-f(z_0)-f'(z_0)(z-z_0)|<\varepsilon|z-z_0|
> $$
> 所以原来的小三角形积分为
> $$
> \begin{aligned}
> \oint_{\Delta^{(n)}}f(z)\text{d}z&=|\oint_{\Delta^{(n)}}f(z)-f(z_0)-f'(z_0)(z-z_0)|\\
> &\leq\varepsilon\oint|z-z_0||\text{d}z|\\
> &\leq\varepsilon (L^{(n)})^2
> \end{aligned}
> $$

Cauchy 定理的几个推论：

/Theorem/ (不定积分)

> 如果函数 $f(z)$ 在单连通区域内解析，则
> $$
> F(z)=\int_{z_0}^zf(\zeta)\text{d}\zeta
> $$
> 也在 $G$ 上解析.

/Proof/

> 设 $z$ 是 $G$ 中的一个点，有
> $$
> \frac{\Delta F}{\Delta z}=\frac{F(z+\Delta z)-F(z)}{\Delta z}=\frac{1}{\Delta z}\int_{z}^{z+\Delta z}f(\zeta)\text{d}\zeta
> $$
> 所以：
> $$
> \begin{aligned}
> |\frac{\Delta F}{\Delta z}-f(z)|&=|\frac{1}{\Delta z}\int_z^{z+\Delta z}[f(\zeta)-f(z)]\text{d}\zeta|\\
> &\leq\frac{1}{|\Delta z|}\int_{z}^{z+\Delta z}|f(\zeta)-f(z)|\cdot|\text{d}\zeta|
> \end{aligned}
> $$
> 得证. 注意到这里必须要求路径是一条直线.

不定积分就由上面的定理来定义.

/Example/

> 计算积分：
> $$
> \int_a^bz^n\text{d}z\,,\quad n\in\mathbb{Z}
> $$
>
> ---
>
> $n\geq0$ 时，很简单，直接取原函数 $z^{n+1}/(n+1)$.
>
> $n<-1$ 时也很简单，取单连通区域的时候绕开 $z=0$ 点就可以，这样我们发现，复连通区域中围道积分似乎也能为 $0$ (取一个挖掉 $z=0$ 点的区域，还是能作出不定积分)
>
> $n=-1$，原函数是 $\ln$，看起来似乎具有多值性，但是实际上这并不是多值的，因为一旦取定了单连通区域，就已经确定了辐角的绕向，而结果只与辐角的差有关系，所以取定了单连通区域，结果就已经确定了.

/Theorem/ (复连通区域的 Cauchy 定理)

> 如果 $f(z)$ 是复连通区域 $\overline{G}$ 中的单值解析函数，则
> $$
> \oint_{C_0}f(z)\text{d}z=\sum_{i=1}^n\oint_{C_i}f(z)\text{d}z
> $$
> 其中，$C_0$ 包含 $C_i(i\neq0)$，$C_i$ 是区域边界，走向全部取逆时针为正.
>
> /Remark/
>
> > 相当于取很多割线，将复连通区域变成单连通的区域：
> >
> > ![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xp4sxy975nsh9DIYxAIFxDda1DGxPDwUzAa==.png)

/Example/

> 计算积分：
> $$
> \oint_Cz^n\text{d}z\,,\quad n\in\mathbb{Z}
> $$
> $C$ 走向为逆时针方向.
>
> ==这是一个重要的积分==.
>
> ---
>
> $$
> \begin{aligned}
> &\oint_Cz^n\text{d}z\\\\
> &=\left\{\begin{array}{lr}
> 0\,,\quad n\geq0\text{ or }z=0\notin C\\\\
> \oint_{|z|=\varepsilon}z^n\text{d}z+0=\int_0^{2\pi} \varepsilon^{n+1}\text{i}e^{\text{i}(n+1)\theta}\text{d}\theta=\left\{\begin{array}{ll}
> 0\,,\quad n<-1\\\\
> 2\pi\varepsilon^{n+1}\text{i}\,,\quad n=-1
> \end{array}\right.
> \end{array}\right.
> \end{aligned}
> $$

/Corollary/ (小圆弧引理)

> 如果函数 $f(z)$ 在 $z=a$ 点的邻域内部连续，并且当 $\theta_1\leq\arg(z-a)\leq\theta_2$，$|z-a|\to0$ 时，$(z-a)f(z)$ 一致地趋近于 $k$，则
> $$
> \lim_{\delta\to0}\int_{C_\delta}f(z)\text{d}z=\text{i}k(\theta_2-\theta_1)
> $$
> 其中 $C_\delta$ 是以 $z=a$ 为圆心，$\delta$ 为半径，夹角为 $\theta_2-\theta_1$ 的圆弧，$|z-a|=\delta$，$\theta_1\leq\arg(z-a)\leq\theta_2$.

/Proof/

> ![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d7w33g6v4ktj7lf68xDIYxAIFxDda1DGxPDwUzAa==.png)
>
> 因为：
> $$
> \int_{C_\delta}\frac{\text{d}z}{z-a}=\text{i}(\theta_2-\theta_1)
> $$
> (这其实就是我们上面 $n=-1$ 的积分)
>
> 于是得到：
> $$
> \left|\int_{C_\delta}f(z)\text{d}z-\text{i}k(\theta_2-\theta_1)\right|\leq\varepsilon(\theta_2-\theta_1)
> $$

/Corollary/ (大圆弧引理)

> ![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d7w33g6v4nj47li51mDIYxAIFxDda1DGxPDwUzAa==.png)
>
> 设 $f(z)$ 在 $\infty$ 点的邻域内连续，当 $\theta_1\leq\arg z\leq\theta_2$，$z\to\infty$ 时，$zf(z)$ 一致趋向 $K$.
> $$
> \lim_{R\to0}\int_{C_R}f(z)\text{d}z=\text{i}K(\theta_2-\theta_1)
> $$
> $C_R$ 是以原点为中心，$R$ 为半径，夹角为 $\theta_2-\theta_1$ 的圆弧.

证明过程和小圆弧引理类似.

/Theorem/ (Cauchy 积分公式)

> $f(z)$ 是有界区域 $\overline{G}$ 中的单值解析函数，$\overline{G}$ 的边界 $C$ 是分段光滑曲线，$a$ 为 $G$ 内一点，则
> $$
> f(a)=\frac{1}{2\pi\text{i}}\oint_C\frac{f(z)}{z-a}\text{d}z
> $$
> 其中积分路径沿着 $C$ 正向.

::: tip

这意味着，复变函数携带的信息并不是二维的，而是一维的，边界和内部的函数值能够产生对应. 最近理论物理和宇宙学中的“共形场”就是基于这个简单的思想.

:::

/Proof/

> 在 $G$ 内部做圆周 $|z-a|<r$，保持圆周在 $G$ 内部，根据复连通区域的 Cauchy 定理，有
> $$
> \oint_C\frac{f(z)}{z-a}\text{d}z=\oint_{|z-a|=r}\frac{f(z)}{z-a}\text{d}z
> $$
> 但是这个结果不应该与 $r$ 的取值有关系，因此可以令 $r\to0$，就证明了上述公式.
>
> 对于 $a$ 在 $G$ 外，需要假设 $f(z)$ 在简单闭合围道 $C$ 上及 $C$ 外单值解析，这时可以用大圆弧引理，令 $R\to\infty$，得到无界的 Cauchy 积分公式：
> $$
> \frac{1}{2\pi\text{i}}\oint_C\frac{f(z)}{z-a}\text{d}z+K=f(a)
> $$
> 其中 $K=f(\infty)$.

/Theorem/ (解析函数的高阶导数)

> 如果 $f(z)$ 在 $\overline{G}$ 中解析，则任意阶高阶导数都存在，而且：
> $$
> f^{(n)}(z)=\frac{n!}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-z)^{n+1}}\text{d}\zeta
> $$
> 其中 $C$ 是 $\overline{G}$ 的正向边界.

/Proof/

> 首先求 $f'(z)$：
> $$
> \begin{aligned}
> \frac{f(z+h)-f(z)}{h}&=\frac{1}{2\pi\text{i}}\frac{1}{h}\oint_C\left[
> \frac{f(\zeta)}{\zeta-z-h}-\frac{f(\zeta)}{\zeta-z}
> \right]\text{d}\zeta\\
> &=\frac{1}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-z-h)(\zeta-z)}\text{d}\zeta
> \end{aligned}
> $$
> 令 $h\to0$，证明了一阶情况.
>
> 但是我们交换了取极限和做积分的次序，所以要验证这是合法的操作，在这里有：
> $$
> \oint_C\frac{f(\zeta)}{(\zeta-z-h)(\zeta-z)}\text{d}\zeta-\oint_C\frac{f(\zeta)}{(\zeta-z)^2}\text{d}\zeta=h\oint_C\frac{f(\zeta)}{(\zeta-z-h)(\zeta-z)}\text{d}\zeta
> $$
> 设 $z$ 到 $C$ 的最短距离为 $\delta$，同时因为 $f(\zeta)$ 有界，令最大值为 $M$，我们得到：
> $$
> \oint_C\frac{f(\zeta)}{(\zeta-z-h)(\zeta-z)}\text{d}\zeta-\oint_C\frac{f(\zeta)}{(\zeta-z)^2}\text{d}\zeta\leq\frac{M|h|}{\delta^2(\delta-|h|)}
> $$
> 再令 $h\to0$，发现这个交换极限和积分的操作是合法的.

/Example/ (Poisson 公式)

> 设 $f(z)$ 在一个包含圆域 $|z|\leq R$ 的区域中解析，$\zeta=re^{\text{i}\theta}$ 为圆内一点，$0\leq r<R$，证明下式成立：
> $$
> f(\zeta)=\frac{1}{2\pi}\int_0^{2\pi}\frac{R^2-r^2}{R^2-2Rr\cos(\theta-\varphi)+r^2}f(Re^{\text{i}\varphi})\text{d}\varphi
> $$
> (课后习题)

/Definition/ (Cauchy 型积分)

> 在分段光滑曲线 $C$ 上连续的函数 $\phi(\zeta)$ 构成的积分：
> $$
> f(z)=\frac{1}{2\pi\text{i}}\int_C\frac{\phi(z)}{\zeta-z}\text{d}\zeta
> $$
> 导数和 Cauchy 积分公式的高阶导数类似.

/Example/

> 计算积分
> $$
> f(z)=\frac{1}{2\pi\text{i}}\oint_{|\zeta|=1}\frac{\zeta^*}{\zeta-z}\text{d}\zeta\,,\quad |z|\neq1
> $$
>
> ---
>
> 因为 $|\zeta|=1$，所以 $\zeta^*=1/\zeta$！
>
> 但是不能直接用 Cauchy 积分公式，因为 $z$ 不一定在单位圆内部，而且 $1/z$ 这个函数在单位圆内部有奇点.
>
> 当 $|z|>1$，可以直接用积分公式，得到 $-1/z$；$0<|z|<1$ 的时候，用无界的 Cauchy 积分公式，得到 $0$. $|z|=0$ 时，就是上面说到的一个“重要的积分”，最终结果还是 $0$.

/Theorem/ (含参量积分的解析性)

> 设：
>
> 1. $f(t,z)$ 是 $t,z$ 的连续函数，$t\in[a,b]$，$z\in\overline{G}$；
> 2. 对于 $[a,b]$ 上的任何 $t$，$f(t,z)$ 是 $\overline{G}$ 上的单值解析函数.
>
> 则：
> $$
> F(z)=\int_a^bf(t,z)\text{d}t
> $$
> 在 $G$ 内部解析，且
> $$
> F'(z)=\int_a^b\frac{\partial f(t,z)}{\partial z}\text{d}t
> $$

::: warning

感觉好多没听懂，PPT 上课还是太可怕了，要多练习一下 Inkscape，而且速度也不太跟得上来，还是 rime 的使用习惯没养成.

:::