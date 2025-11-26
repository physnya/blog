---
title: Lesson 10 Molecular Motor (2)
permalink: /biophysics/lesson-10/
createTime: 2025/11/25 21:51:57
---
接着上节课的分子马达来说. 我们从物理的角度更加关心「马达」运转起来之后是什么样子，
$$
p(n,t+\Delta t) = k_+p(n-1,t)\Delta t+k_-p(n+1,t)\Delta t+[1-(k_-+k_+)\Delta t]p(n,t)\Delta t
$$
这里的 $k_+$ 和 $k_-$ 都是向前或向后跳的概率. 两边的跳变会和二态系统一样有一个关系：
$$
\frac{k_+}{k_-}=e^{-\beta(\Delta G_0+Fa)}
$$
这里的 $F$ 是马达所要克服的外力. 同时，我们知道这个跳变耦合了一个 ATP 反应，所以应该拓宽为一个广义的细致平衡条件：
$$
\frac{k_+}{k_-}=e^{-\beta(\Delta G_0-\Delta G_{\text{ATP}}+Fa)}
$$
::: warning

这个细致平衡实际上并不显然！马达在运动的过程中肯定已经远离了平衡态，但是我们还在用平衡态的结论. 简单理解，这是因为我们假设热库的反应速度远远大于马达的运动速度，也就是慢变量只有马达.

:::

每走过一步，就在已经走过的地方插上一个标记，这样就像 Feynman 棘轮一样使得马达只能朝一个方向运动.

如果我们假设一步反应，那么反应的等待时间应该满足 $f(T)\propto e^{-\alpha T}$；但是实验上我们观察到了一个峰，这意味着反应可能存在一个中间状态，也就是
$$
f(T)=\frac{1}{\tau}e^{-t/\tau}\Longrightarrow f(T)=\frac{1}{\tau_B-\tau_A}(e^{-t/\tau_B}-e^{-t/\tau_A})
$$
这个「内部步骤」很好理解，我们知道 ATP 水解驱动这个反应，那么中间一定有一个态 ATP 变成了 ADP，这就是中间态，下一步应该是把 ADP 扔掉换成一个 ATP. 这和之前讲的四态模型并没有很大差别，
$$
M\text{ - ATP}\stackrel{\text{hydrolysis}}{\underset{\text{exchange}}{\rightleftharpoons}}M\text{ - ADP}
$$
(甚至是一个二态系统，比四态更简单)

物理上的扩散是
$$
\partial_tP_c=\frac{\partial}{\partial x}\left[-V(c)P_c+D(c)\frac{\partial P_c}{\partial x}\right]
$$
化学上，有反应方程
$$
\partial_tP_c = \sum k_iP_c+\cdots
$$
两个部分结合在一起就是总的变化率.

---

我们并不想过多地涉及微分方程，下面来说一些代数的东西.

存在热力学不确定性关系：$\Delta G\geq2k_BT/r$. 其中 $r=2D/Va$ ($V$ 是马达的运动速度，$a$ 是距离，$D$ 是扩散系数)，原因是
$$
r = \frac{k_++k_-}{k_+-k_-}
$$
最终效率为
$$
\eta=\frac{Fa}{Fa+\Delta G}\leq\frac{1}{1+2k_BTVa/DF}
$$
物理上来讲，有偏的行走 (bias) 必须来源于一个自由能差异 $\Delta G=\Delta G_{\text{ATP}}-Fa$，当我们把所有化学能都用来做功，那么行走就会是无规的.

---

蓝藻的生物钟：让一个马达在一个定长的轨道上转圈，转一圈就会过 24 小时.

让每一步消耗同样个数的 ATP，那么这种钟就会越精确；同时步数越少钟越精确.

但是涨落还是会存在，唯一的解决方案是耦合很多个钟，将所有的钟同步起来，