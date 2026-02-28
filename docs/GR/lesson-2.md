---
title: Lesson 2 度规和联络
createTime: 2026/02/28 15:58:34
permalink: /GR/lesson-2-metric/
---
说一下考核方式：$40\%$ 作业，$60\%$ 考试，考试大概率是开卷考试.

---

现在我们有 $\text{d}x^\mu$ (vector) 和 $\text{d}\tau$ (scalar). 可以定义四维速度
$$
U^\mu = \frac{\text{d}x^\mu}{\text{d}\tau}
$$
同时还有 $m$ (scalar). 之前我们已经说过四维动量了，到这里为止我们可以开始推广 Newton 第二定律. 但是什么是四维力 $f^\mu$ 呢？这里就需要搞明白力的来源.

我们从来没有见过把压力浮力这些东西写成相对论协变形式的，这涉及到一个「有效理论」的问题. 考查压力浮力的能标，大约是 $10^0\text{ eV}$ 的程度，而相对论显著的能标应该和电子的静能可以比拟，比如 $0.5\text{ MeV}$ 的级别. 因此考虑用电磁场来产生这个四维力. 为此，引入一个反对称张量
$$
F_{\mu\nu} = \partial_\mu A_\nu-\partial_\nu A_\mu,\quad F = \begin{pmatrix}
0&E_x&E_y&E_z\\
-E_x&0&B_z&-B_y\\
-E_y&-B_z&0&B_x\\
-E_z&B_y&-B_x&0
\end{pmatrix}
$$
来描述电磁场. 力是一个矢量，我们上节课已经学过如何用一个张量构造一个矢量，也就是要找一个矢量和这个张量缩并，有
$$
\frac{\text{d}P^\mu}{\text{d}\tau} = f^\mu = QF^{\mu\nu}U_\nu
$$
现在来检查这个式子能否回到 Newton 理论. 对于 $\mu=0$，$\text{LHS}$ ($\text{d}m/\text{d}\tau$) 的 leading order 是 $0$ ($\text{d}\tau\approx\text{d}t$)，和 $\text{RHS}$ 相符合；第二阶是 $F^{0i}U_i=\vec{E}\cdot\vec{v}$，就是功率. 其他分量也是类似的.

下一步我们尝试定义电流，考虑一堆粒子，第 $n$ 个粒子带电 $Q_n$. 那么电荷密度就是
$$
\rho(\vec{x},t) = \sum_nQ_n\delta^3(\vec{x}-\vec{x}_n(t))
$$
对全空间积分就是总电荷 (验证了我们的定义没问题)，且 $\sum_nQ_n$ 是一个标量. 为了构造一个 4-电流密度 $J^\mu$，首先其 $0$ 分量应该就是电荷密度；$i$ 分量按照三维电流密度的定义，
$$
J^i(\vec{x},t) = \sum_nQ_n\cdot\frac{\text{d}\vec{x}_n(t)}{\text{d}\tau}\delta^3(\vec{x}-\vec{x}_n(t))
$$
由电荷守恒，流应该满足 $\partial_\mu J^\mu = 0$. 因为 $\partial_\mu$ 是一个协变矢量、右边是个标量，因此 $J^\mu$ 是一个四维矢量.

> 这里说一下「$\partial_\mu$ 是协变矢量」的证明.
>
> 考虑把它作用在一个 scalar 函数 $f$ 上，$f'(x')=f(x)$，有
> $$
> \partial'_\mu f=\frac{\partial f'(x')}{\partial x'^\mu} = \frac{\partial f'(x')}{\partial x^\nu}\frac{\partial x^\nu}{\partial x'^\mu}= \frac{\partial f(x)}{\partial x^\nu}\frac{\partial x^\nu}{\partial x'^\mu}= \Lambda_\mu{}^\nu\partial_\nu f
> $$
> 它的变换规则是乘一个 $\Lambda_\mu{}^\nu$，所以这个算符是一个协变矢量.

定义了电流之后，我们可以接下去同理定义 4-动量和 4-动量流，
$$
T^{\alpha\beta}\left\{\begin{aligned}
&T^{\alpha0}(\vec{x},t) = \sum_n P_n^\alpha(t)\delta^3(\vec{x}-\vec{x}_n(t))\\\\
&T^{\alpha i}(\vec{x},t) = \sum_n P_n^\alpha(t)\frac{\text{d}x^i}{\text{d}t}\delta^3(\vec{x}-\vec{x}_n(t))
\end{aligned}\right.
$$
这和起来是能动张量.

Einstein 到此为止遇到了新的两个大问题：我们怎么找惯性参考系？引力的 Newton 公式怎么变成协变的形式？

但是他突然意识到等效原理 —— 引力的荷竟然和惯性质量是一样的. 在物理学的历史上，很少有物理量可以做两件事情，既是 Newton 定律的惯性表征、又是引力定律的参数，这是非常特殊的.

为了弄清这里的细节，先不考虑任何力，在某个参考系中，
$$
\frac{\text{d}^2\xi^\mu}{\text{d}\tau^2}=0
$$
现在试图计算一个新的系 $x^\mu(\xi)$ 中，加速度是什么.
$$
\begin{aligned}
\frac{\text{d}^2x^\mu(\xi)}{\text{d}\tau^2}&=\frac{\text{d}}{\text{d}\tau}\left(\frac{\text{d}x^\mu}{\text{d}\tau}\right) = \frac{\text{d}}{\text{d}\tau}\left(\frac{\partial x^\mu}{\partial\xi^\alpha}\frac{\text{d}\xi^\alpha}{\text{d}\tau}\right)\\\\
&=\frac{\text{d}}{\text{d}\tau}\left(\frac{\partial x^\mu}{\partial\xi^\alpha}\right)\frac{\text{d}\xi^\alpha}{\text{d}\tau}+ \underset{0}{\underline{\frac{\partial x^\mu}{\partial\xi^\alpha}\frac{\text{d}^2\xi^\alpha}{\text{d}\tau^2}}}\\
&=\frac{\partial^2x^\mu}{\partial\xi^\beta\partial\xi^\alpha}\frac{\text{d}\xi^\beta}{\text{d}\tau}\frac{\text{d}\xi^\alpha}{\text{d}\tau}\\\\
&= \underset{\Gamma^\mu{}_{\rho\sigma}}{\underline{\frac{\partial^2x^\mu}{\partial\xi^\beta\partial\xi^\alpha}\frac{\partial\xi^\alpha}{\partial x^\rho}\frac{\partial\xi^\beta}{\partial x^\sigma}}}\frac{\text{d}x^\rho}{\text{d}\tau}\frac{\text{d}x^\sigma}{\text{d}\tau}
\end{aligned}
$$
Newton 第二定律就可以写成
$$
m\frac{\text{d}^2x^\mu}{\text{d}\tau^2} = m\Gamma^\mu{}_{\rho\sigma}\frac{\text{d}x^\rho}{\text{d}\tau}\frac{\text{d}x^\sigma}{\text{d}\tau}
$$

> 我们写成这样的目的是，当我们的公式中仅仅只有这个参考系的量时，那么公式本身和参考系的选取就已经无关了. 这是某种所谓的规范对称性.

$\text{RHS}$ 现在是某种 inertial force (也就是惯性力). 现在，右边的 $m$ 是力的 charge 而不是惯性质量了，因为它是换参考系之后产生力的原因，而左边 $m$ 仍然是惯性质量. 如果把引力写成右侧这种形式，引力荷的问题似乎就可以迎刃而解.

另一个重要的问题是如何去寻找惯性系. Newton 并没有非常仔细地思考这一问题；Mache 认为惯性系应该由远处的大质量天体共同定义. Einstein 认为 Mache 启发了他，他提出自由下落的电梯中的体验和所谓的惯性系几乎一致，也就是用局域的引力场定义了什么是「惯性」.

::: tip

这里可以看出，实际上 Einstein 的思路和 Mache 的几乎完全相反，前者用局域的引力场和自由落体定义惯性，而后者是用无穷远处的天体定义惯性系. 但是 Einstein 自己认为他受到了启发 ...

:::

Einstein 电梯需要 clarify 的一点是，我们仅仅只能在 ==局域上== 用惯性力 cancel 这个引力.

---

在细说等效原理之前，我们还是花时间来说一下任意参考系的度规. 之前在惯性系我们的理论一直建立在 $\eta_{\mu\nu}$ 这个度规上，对于任意参考系，我们有
$$
\text{d}\tau^2 = -\eta_{\alpha\beta}\text{d}\xi^\alpha\text{d}\xi^\beta = -\underset{g_{\mu\nu}}{\underline{\left[\eta_{\alpha\beta}\frac{\partial\xi^\alpha}{\partial x^\mu}\frac{\partial\xi^\beta}{\partial x^\nu}\right]}}\text{d}x^\mu\text{d}x^\nu
$$
这就定义出了任意参考系的度规 $g_{\mu\nu}$.

观察一下发现，似乎给 $g_{\mu\nu}$ 求个导能得到和 $\Gamma^\mu{}_{\rho\sigma}$ 有关系的某种式子. 现在来试着计算：考虑一个全局的参考系，
$$
\begin{aligned}
\frac{\partial g_{\mu\nu}}{\partial x^\lambda} &= \eta_{\alpha\beta}\left(\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu}\frac{\partial\xi^\beta}{\partial x^\nu}+\frac{\partial\xi^\alpha}{\partial x^\mu}\frac{\partial^2\xi^\beta}{\partial x^\lambda\partial x^\nu}\right)\\\\
\end{aligned}\tag{1}
$$
为接下去计算，下式对 $x^\lambda$ 求导：
$$
\frac{\partial\xi^\alpha}{\partial x^\mu}\cdot\frac{\partial x^\mu}{\partial\xi^\beta} = \delta^\alpha{}_\beta
$$
得到
$$
\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu} \frac{\partial x^\mu}{\partial\xi^\beta} + \frac{\partial\xi^\alpha}{\partial x^\mu} \frac{\partial}{\partial x^\lambda} \left( \frac{\partial x^\mu}{\partial\xi^\beta} \right) = 0
$$
这里要注意，第二项括号里的 $\displaystyle{\frac{\partial x^\mu}{\partial\xi^\beta}}$ 是 $\xi$ 的函数，所以对 $x^\lambda$ 求导时需要用链式法则展开：$\displaystyle{\frac{\partial}{\partial x^\lambda} = \frac{\partial\xi^\gamma}{\partial x^\lambda} \frac{\partial}{\partial\xi^\gamma}}$. 于是得到：
$$
\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu} \frac{\partial x^\mu}{\partial\xi^\beta} + \frac{\partial\xi^\alpha}{\partial x^\mu} \left( \frac{\partial^2 x^\mu}{\partial\xi^\gamma\partial\xi^\beta} \frac{\partial\xi^\gamma}{\partial x^\lambda} \right) = 0
$$
为了解出 $\displaystyle{\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu}}$，我们在等式两边同时乘以 $\displaystyle{\frac{\partial\xi^\beta}{\partial x^\sigma}}$，利用 $\displaystyle{\frac{\partial x^\mu}{\partial\xi^\beta} \frac{\partial\xi^\beta}{\partial x^\sigma} = \delta^\mu{}_\sigma}$ 进行缩并：
$$
\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu} \delta^\mu{}_\sigma = -\frac{\partial\xi^\alpha}{\partial x^\mu} \frac{\partial^2 x^\mu}{\partial\xi^\gamma\partial\xi^\beta} \frac{\partial\xi^\gamma}{\partial x^\lambda} \frac{\partial\xi^\beta}{\partial x^\sigma}
$$
整理一下指标 (把左边的 $\sigma$ 换回 $\mu$，右边的求和指标 $\mu$ 换成 $\rho$ 以免混淆)，得到二阶导数的关系式：
$$
\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu} = -\frac{\partial\xi^\alpha}{\partial x^\rho} \left( \frac{\partial^2 x^\rho}{\partial\xi^\gamma\partial\xi^\beta} \frac{\partial\xi^\gamma}{\partial x^\lambda} \frac{\partial\xi^\beta}{\partial x^\mu} \right)
$$
观察括号里的部分，这正是联络 $\Gamma^\rho{}_{\lambda\mu}$ 的定义. 所以有：
$$
\frac{\partial^2\xi^\alpha}{\partial x^\lambda\partial x^\mu} = -\Gamma^\rho{}_{\lambda\mu} \frac{\partial \xi^\alpha}{\partial x^\rho}
$$
现在把这个结果代回最初对度规 $g_{\mu\nu}$ 求导的式子 $(1)$ 得到
$$
\frac{\partial g_{\mu\nu}}{\partial x^\lambda} = \eta_{\alpha\beta} \left( -\Gamma^\rho{}_{\lambda\mu} \frac{\partial \xi^\alpha}{\partial x^\rho} \frac{\partial\xi^\beta}{\partial x^\nu} - \Gamma^\rho{}_{\lambda\nu} \frac{\partial \xi^\beta}{\partial x^\rho} \frac{\partial\xi^\alpha}{\partial x^\mu} \right)
$$
注意到 $\displaystyle{\eta_{\alpha\beta} \frac{\partial \xi^\alpha}{\partial x^\rho} \frac{\partial\xi^\beta}{\partial x^\nu} = g_{\rho\nu}}$ 以及 $\displaystyle{\eta_{\alpha\beta} \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{\partial\xi^\beta}{\partial x^\rho} = g_{\mu\rho}}$，代入后得到：
$$
\partial_\lambda g_{\mu\nu} = -\Gamma^\rho{}_{\lambda\mu} g_{\rho\nu} - \Gamma^\rho{}_{\lambda\nu} g_{\mu\rho} = -(\Gamma_{\nu\lambda\mu} + \Gamma_{\mu\lambda\nu})
$$
这就是度规求导与联络的基本关系. 为了彻底解出 $\Gamma$，利用指标循环置换：

1. $\partial_\lambda g_{\mu\nu} = -\Gamma_{\nu\lambda\mu} - \Gamma_{\mu\lambda\nu}$

2. $\partial_\mu g_{\nu\lambda} = -\Gamma_{\lambda\mu\nu} - \Gamma_{\nu\mu\lambda}$

3. $\partial_\nu g_{\lambda\mu} = -\Gamma_{\mu\nu\lambda} - \Gamma_{\lambda\nu\mu}$

   计算 $(1) - (2) - (3)$，并利用对称性 $\Gamma_{\lambda\mu\nu} = \Gamma_{\lambda\nu\mu}$，可以发现等式右边大部分项抵消了，只剩下：
   $$
   \partial_\lambda g_{\mu\nu} - \partial_\mu g_{\nu\lambda} - \partial_\nu g_{\lambda\mu} = 2\Gamma_{\lambda\mu\nu}
   $$

最后，两边乘以 $\displaystyle{\frac{1}{2}g^{\sigma\lambda}}$ 来抬升指标，就得到了最终的联络表达式：
$$
\Gamma^\sigma{}_{\mu\nu} = \frac{1}{2} g^{\sigma\lambda} ( \partial_\mu g_{\nu\lambda} + \partial_\nu g_{\lambda\mu} - \partial_\lambda g_{\mu\nu} )
$$
::: warning

实际上老师在课堂上推导的时候犯了一个正负号错误.

:::
