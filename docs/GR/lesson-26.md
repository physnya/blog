---
title: Lesson 26 暴涨
createTime: 2026/05/29 16:38:32
permalink: /GR/lesson-26-inflation/
---
上节课最后说到一个问题，就是 CMB 的结果表明宇宙间各处存在相关性. 研究 co-moving time，
$$
\mathrm{d}s^2=a^2(-\mathrm{d}\tau^2+\mathrm{d}\vec{x}^2)
$$
有 $\tau\sim t^{1/2}\sim a$ ($0<\tau<\infty$). 我们看到的光子来自 $T\simeq0.3\text{ eV}$ 的时代，所以我们可观测宇宙的边界就在此处，这被称为 last scattering surface (最后散射面). 在此之前，两个最远端的光子再往前画光锥，应该能够相交，否则它们之间没有任何关系. 当前观测到的 CMB 能量是 $2.73\text{ K}$，对应 $3\times 10^{-4}\text{ eV}$，与最后散射面之间的红移刚好是 $1100$，可以用三角相似的关系推出过去光锥应该无法相交，这是减速膨胀宇宙的固有问题.

如果宇宙加速膨胀呢？尝试一下，假设 $a\sim t^p$，那么 $\mathrm{d}\tau=a^{-1}\mathrm{d}t=t^{-p}\mathrm{d}t$，于是 $\tau=-(p-1)^{-1}t^{-p+1}$，当然我们已经设定了 $p>1$. 现在 $\tau$ 是负的，也就是说最后散射面之前的光锥现在可以无限延长了，可以相交，这就能够解决所谓的 horizon problem.

所以那时 Guth 等几个科学家分别提出了暴涨的理论.

现在我们考虑一下怎么实现一个加速膨胀的宇宙. 这并不是一个很困难的事情，那时候人们已经知道由能量主导的宇宙会加速膨胀，
$$
H_0^2=\frac{8\pi G\rho}{3}=\text{const.}\Longrightarrow\frac{\dot{a}}{a}=H_0^2\Longrightarrow a=a_0e^{H(t-t_0)}
$$
人们现在想要构造一个真空能出来. Guth 构造了下面的场：
$$
\mathcal{L} = \frac{1}{2}\partial_\mu\partial^\mu\phi-V(\phi)
$$
本来对于一些平常的粒子，这里的 $V$ 本来应该写类似于动能加势能的东西，但是现在这个场有相互作用，因此写一个一般的形式. 这个真空场的能量曲线上有两个低谷，其中更高的稳定平衡被认为是暴涨，但是之后会 tunneling 回到更低的态，也就是结束暴涨. 但是 Guth 的想法最大的问题是，这个状态如果要存在足够久，那么一级相变的反应率就要远远低于 $H$，这会导致无法落回更低的态.

Linde 提出一个更简单也更好的模型. 考虑作用量
$$
S=\int\mathrm{d}^4x\sqrt{g}\left[-\frac{1}{2}g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi-V(\phi)\right]
$$
我们仔细算一下作为练习.
$$
\begin{aligned}
S &= \int\mathrm{d}t\mathrm{d}^3x\cdot a^3\left\{\frac{1}{2}\dot{\phi}^2-\frac{1}{2}a^{-2}\left[\sum_i\left(\frac{\partial\phi}{\partial x^i}\right)^2\right]-V(\phi)\right\}\\\\
&= \int\mathrm{d}t\mathrm{d}^3x\cdot\underset{\mathcal{L}(\phi)}{\underline{\left[\frac{1}{2}a^3\dot{\phi}^2-\frac{1}{2}a\sum_i\left(\frac{\partial\phi}{\partial x^i}\right)^2-a^3V(\phi)\right]}}
\end{aligned}
$$
带着积分做变分 (为了更好地算偏导数那一项)，
$$
\begin{aligned}
&\int\mathrm{d}^3x\left[\frac{\partial}{\partial t}(a^3\dot{\phi})+a^3\frac{\partial V}{\partial\phi}+a\frac{\partial\phi}{\partial x^i}\frac{\partial}{\partial x^i}\delta^3(x-y)\right]\\\\
\Longrightarrow \quad&\frac{\partial}{\partial t}(a^3\dot{\phi})+a^3\frac{\partial V}{\partial\phi}-a\nabla^2\phi=0\\\\
\Longrightarrow \quad&a^3\ddot{\phi}+3a^2\dot{a}\dot{\phi}+a^3\frac{\partial V}{\partial\phi}-a\nabla^2\phi=0\\\\
\Longrightarrow\quad&\ddot{\phi}+3H\dot{\phi}+\frac{\partial V}{\partial\phi}=0
\end{aligned}
$$
这是一个 $\phi$ 的阻尼振荡，我们取第三项为 $m^2\phi$. 当 $H\ll m$ 时，这是一个衰减振幅的振荡 (但是是低阻尼)，可以振荡很多个周期，$\phi\sim e^{-Ht}\cos\omega t$；反之，是过阻尼，这时候近似解为 $\phi\sim e^{-m^2t/3H}$. 那么这时候 $\phi$ 缓慢演化，给了暴涨足够的时间，然后突然下降到很低的值使得宇宙进入正常的膨胀阶段.

> 也就是随着 $m$ 变化，$\phi$ 先缓慢衰减，然后到 $m\gg H$ 的时候迅速下降.

当然只要势能足够平坦，就能实现上面这种过程. 实际上就是把过阻尼应用到整个宇宙上面.

---

暴涨开始的时候很早，不应该是在 CMB 时发生，因为 CMB 的温度还是比较低；我们从 BBN 开始算，$T_{\text{BBN}}\sim 1\text{ MeV}$. 在暴涨阶段是能量主导，这里对应的 co-moving time $\tau$ 相比 $0.3\text{ eV}$ 时的 $\tau=10^{-3}$ 要更早几个量级，应该至少是 $10^{-10}$ 量级.

认为现在的各个量是 $H_0,t_0,\tau_0$. 那么
$$
\left(\frac{a_0}{a}\right)^{-2}=\frac{H_0}{H} = \left(\frac{t_0}{t}\right)^{-1}=\left(\frac{\tau_0}{\tau}\right)^{-2} = \left(\frac{1}{\tau}\right)^{-2}
$$
(这里设定了当前的 $\tau_0=1$.) 同时，有条件
$$
\frac{\dot{a}}{a}=\frac{1}{2t}=H
$$
我们下一步的目标是算出 $a$ 和 $\tau$ 之间的比例系数.

::: warning

ahp 在课上放弃推导了...

:::

总之结论是「$\tau=-1$ 和 $\tau_\star'$ 之间的 ratio」与「$\tau=1$ 和 $\tau_\star$ 之间的 ratio」是相同的 (这个 $\tau_\star$ 和 $\tau_\star'$ 分别是暴涨结束后的瞬间和暴涨结束前的瞬间的两个 co-moving 时刻)，也就是暴涨膨胀的倍数应该和热大爆炸宇宙学膨胀的倍数至少一样，这样计算出来暴涨需要膨胀 $10^{30}$ 倍.

另一个限制条件是，重子的形成问题 (Baryogenesis)，这一点会限制出更高的倍数.

暴涨试图解决的第三个问题也会做出限制，这就是磁单极子的存在性问题. 它的 motivation 比较强，因为 Dirac 证明了只要存在磁单极子，那么电荷就必须是量子化的. 这一点给出类似的限制倍数.