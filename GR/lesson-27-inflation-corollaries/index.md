---
url: /GR/lesson-27-inflation-corollaries/index.md
---
::: warning

进行一个抱歉，因为之前写 `permalink` 字段的时候失误了一下，因此现在最近三节课的网页链接要重新修改一次.

:::

先说一下上节课没有推导出来的那个东西. 我们知道在 inflation 和 radiation dominated 的两个阶段，$\tau$ 的定义并不相同，但是我们可以要求 $x$ 的定义是相同的. 然后有边界条件：
$$
a\_{\text{RD}}(\tau\_{\text{RH}}) = a\_{\text{inf}}(\tau\_{\text{RH}}),\quad H\_{\text{RD}}(\tau\_{\text{RH}})=H\_{\text{inf}}
$$
(RH 指的是 re-heating，也就是 inflation 和 RD 的转变时刻.) 接下来得到几个比例关系：
$$
\begin{aligned}
\&H^2=\frac{8\pi G}{3}\rho,\quad \frac{\mathrm{d}a}{a\mathrm{d}t}=H = \left(\frac{8\pi G}{3}\right)^{1/2}\rho\_0^{1/2}\frac{a\_0^2}{a^2}\\\\
&\frac{\mathrm{d}a}{\mathrm{d}\tau}=\frac{\mathrm{d}a}{a^{-1}\mathrm{d}t} = \left(\frac{8\pi G}{3}\right)^{1/2}\rho\_0^{1/2}a\_0^2\Longrightarrow a = \left(\frac{8\pi G}{3}\right)^{1/2}\rho\_0^{1/2}a\_0^2\tau
\end{aligned}
$$
于是
$$
a\_{\text{RH}} = a\_0\tau\_{\text{RH}}\Longrightarrow a\_{\text{RH}} = -\frac{1}{H\_{\text{RH}}\tau\_{\text{RH}}^{\text{inf}}} = -\frac{a\_{\text{RH}}^2}{a\_0\tau\_{\text{RH}}^{\text{inf}}}\Longrightarrow \tau\_{\text{RH}}^{\text{inf}} = -\frac{a\_{\text{RH}}}{a\_0}
$$
这就是上节课我们需要用到的内容：在暴涨时期膨胀的倍数需要和暴涨之后到今天膨胀的倍数至少同量级.

***

回到那个场的演化问题. 我们的方程是
$$
\ddot{\phi}+3H\dot{\phi}+V'(\phi)=0
$$
这个方程比较像一个从上往下的子弹落入一个阻尼介质，如果初始条件很快，那么一开始起主导作用的是前面两项，减速到一定的值之后才会由后一项来主导整个过程.

Baryon number 问题：我们很久之前就讲过 $n\_B/n\_\gamma\simeq 6\times 10^{-10}$，如果两者是同时演化的，那么这个数字应该是比较 fix 的. 但是宇宙一开始是存在暴涨的 phase 的，这会导致任何的 initial condition 都会被稀释掉，因此我们现在的重子应当都是宇宙演化的后期形成的，而不是宇宙早期的那些. 这件事情说起来比较容易，但是我们会抱有这样的疑问：光子的部分也一样经历暴涨，为什么我们只认为重子的 initial condition 不重要了？

考查 re-heating 到 CMB 之间的演化过程. 这一段演化中至少 $\eta=n\_B/n\_\gamma$ 是守恒的，因此
$$
n\_B=\eta T\_{\text{CMB}}^3,\quad n\_B^{\text{RH}} = \eta T\_{\text{RH}}^3
$$
如果 inflation 最晚发生的时刻是 $\text{inf}^0$ 时刻，那么
$$
n\_B^{\text{inf}^0} = \eta\frac{T\_{\text{RH}}^6}{T\_{\text{CMB}}^3} = \left(\eta^{1/3}\frac{T\_{\text{RH}}^2}{T\_{\text{CMB}}}\right)^3
$$
re-heating 能标大约是 $1\text{ TeV}$，CMB 能标大约是 $3\text{ keV}$，最后的结果大约是 $3\times 10^{15}\text{ GeV}$. 这个结果被解释为，如果当前的重子数确实是由 initial condition 决定的，那么在暴涨开始发生的时刻，重子数应该是多少；而至少这个能量仍然远小于 Planck 能标.

但是，暴涨时期宇宙的能量密度 $\rho\sim T\_{\text{RH}}^4$，typical 能标就是 re-heating 温度，为 $10^3\text{ GeV}$. 这个体系不太可能容纳上面算出来那个巨大的能标，也就是说 inflation 开始之前，宇宙没有办法容纳这么大的 baryon number 作为 initial condition.

***

回到作用量.
$$
S=\int\mathrm{d}^4x\cdot\sqrt{g}\left\[-\frac{1}{2}g^{\mu\nu}\partial\_\mu\phi\partial\_\nu\phi-V(\phi)\right],\quad T\_{\mu\nu}^{(0)}=-\frac{2}{\sqrt{g}}\frac{\delta S}{\delta g^{\mu\nu}}
$$
算出
$$
\rho\_\phi = \frac{1}{2}\dot{\phi}^2+V(\phi),\quad p\_\phi=\frac{1}{2}\dot{\phi}^2-V(\phi),\quad p\simeq -\rho
$$
定义一个 slow-roll parameter，描述宇宙「缓慢滚动」的条件，
$$
\varepsilon = \frac{\dot{\phi}^2}{2M\_{\text{pl}}^2H^2}
$$
($M\_{\text{pl}}$ 是 planck 能标.) 这里 $\varepsilon\ll 1$ 等价于 $\dot{\phi}^2/2\ll V$.

另一个角度来看，可以考查 Hubble 常数变化的速率，
$$
H^2=\frac{8\pi G}{3}V\Longrightarrow 2H\dot{H}=\frac{8\pi G}{3}\frac{\partial V}{\partial\phi}\dot{\phi} = -\frac{H\dot{\phi}^2}{M\_{\text{pl}}^2}\Longrightarrow \frac{\dot{H}}{H^2}=\frac{\dot{\phi}^2}{2M\_{\text{pl}}^2H^2} = \varepsilon
$$
还可以定义第二个 slow-roll parameter $\eta$ (不要和前面的重子光子数比混淆)：
$$
\eta = -\frac{\ddot{\phi}}{H\dot{\phi}}
$$
总的 slow-roll condition 为
$$
\eta\ll1,\quad \varepsilon\ll1
$$
膨胀倍数
$$
N = \ln\frac{a\_{\text{end}}}{a\_{\text{inf}}^{(0)}}=\int\_t^{t\_{\text{end}}}H\mathrm{d}t=\int\_\phi^{\phi\_{\text{end}}}H\frac{\mathrm{d}\phi}{\dot{\phi}} = \int\_\phi^{\phi\_{\text{end}}}\frac{\mathrm{d}\phi}{\sqrt{2\varepsilon}M\_{\text{pl}}}
$$

> 由前面的
> $$
> \frac{\partial V}{\partial\phi}\simeq -3H\dot{\phi},\quad V=3M\_{\text{pl}}^2H^2
> $$
> 得到
> $$
> \frac{V'}{V} = \frac{\dot{\phi}}{HM\_{\text{pl}}^2}=\frac{\sqrt{2\varepsilon}}{M\_{\text{pl}}}
> $$

代入得到
$$
N = \int\_\phi^{\phi\_{\text{end}}}\frac{\mathrm{d}\phi}{M\_{\text{pl}}^2(V'/V)}
$$
以 $V=m^2\phi^2/2$ 的形式为例，算出来
$$
N = \frac{\phi\_{\text{end}}^2}{M\_{\text{pl}}^2}
$$
我们之前说 $N$ 是 $40\sim60$，也就是场应该大于 planck scale，这个场太大了，这个问题叫作 trans-planckion problem. 人们想出来的一个解决方案是，用两个场卷起来构造这个势能，也就是在 $\phi\_1,\phi\_2,V$ 的空间里面，势能曲线是一条螺旋线，这样 $\phi\_{1,2}$ 的尺度都不超过 planck scale，但是总长度足够了.

***

Inflation 的一些 side effect：提供了 fluctuation (波动，或者解释为宇宙大尺度结构上的不均匀性) 的信息.

前面我们说守恒的量 (比如重子数) 都会被 dilute (稀释)，因此我们要找一些不被 dilute 的量 (比如真空能，作为一个场的势能，它随着宇宙膨胀而增大)，看看它如何提供信息. 考虑真空场的一个涨落：
$$
\phi=\phi\_0+\delta\phi
$$
因此
$$
\delta\ddot\phi+3H\delta\phi=a^{-2}\nabla^2\phi+m^2\phi,\quad\phi(x)=\int\frac{\mathrm{d}^3k}{(2\pi)^3}\phi\_ke^{\mathrm{i}\vec{k}\cdot\vec{x}}
$$
得到
$$
\ddot\phi\_k+3H\dot\phi\_k+(a^{-2}k^2+m^2)\delta\phi\_k=0
$$
在 $m\ll H$ 的假设下讨论，忽略 $m^2$ 项；在演化过程中，总有一天 $a$ 会很大，最后一项变得很小，$\phi\_k$ 不会被 dilute.
$$
\ddot\phi\_k = \frac{\mathrm{d}^2\phi\_k}{\mathrm{d}t^2}=\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\mathrm{d}\phi\_k}{\mathrm{d}\tau}\frac{\mathrm{d}\tau}{\mathrm{d}t}\right) = \frac{\partial^2\phi\_k}{\partial\tau^2}\left(\frac{\mathrm{d}\tau}{\mathrm{d}t}\right)^2+\frac{\mathrm{d}\phi\_k}{\mathrm{d}\tau}\frac{\mathrm{d}^2\tau}{\mathrm{d}t^2}
$$
而 $\displaystyle{a(\tau)=-\frac{1}{H\tau}=e^{Ht}}$. 因此
$$
\phi\_k''+2H\left(-\frac{1}{H\tau}\right)\phi\_k'+k^2\phi\_k=0\Longrightarrow\phi\_k''-\frac{2}{\tau}\phi\_k'+k^2\phi\_k=0
$$
这是 co-moving system 中用 $\tau$ 作为变量写出的方程. 简单来讲这就是一个阻尼随着时间演化变大的阻尼振动，在 $\tau$ 演化到 $\tau=0$ (一个视界) 时，整个体系被 frozen 到这个状态. 如果用物理时间 $t$ 来看，那么就是一个周期不断变长、振幅不断变小的振荡过程，最后 frozen 到一条直线.

在膨胀过程中，会出现第二次开始振荡，也就是 re-enter the horizon，这是当前宇宙大尺度结构出现的原理.

> 下课之后问了一下老师这是为什么：首先在暴涨过程中 $H$ 是一直不变的，而物理波数 $k$ 以 $a^{-1}$ 变化. 因此到某一个时候 $k$ 到了 $H$ 的量级，这时候停止振荡；但是暴涨结束之后 $H$ 以一个更快的幂次 $a^{-2}$ 衰减，最后追上 $k$ 的衰减，产生第二次振荡.

关于最早是怎么开始振荡的，这由 inflation 之前的量子涨落决定，其能标大约是视界附近的 Hubble 常数给出的那个量级.
