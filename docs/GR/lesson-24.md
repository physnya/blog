---
title: Lesson 24 原初核合成
createTime: 2026/05/22 15:07:23
permalink: /GR/lesson-24-bbn/
---
广义相对论的最开始实验验证的尺度大约是 $\text{AU}$ 量级，也就是星系内的尺度；但是后面宇宙学至少需要银河系的尺度，也就是 $20\text{ kpc}$ 左右，前者是 $10^8\text{ km}$ 左右，后者达到了 $10^{18}\text{ km}$ 量级. 整个宇宙的尺度，我们按照我们距离 CMB 的距离来估算，是 $3000\text{ Mpc}$ 的尺度，也就是 $10^{33}\text{ km}$ 量级. 也就是说，我们要把一个在小尺度成立的理论，应用到比它大 25 个尺度的一个实体上去，这需要很大的勇气. 因此首先我们肯定需要一些理论预言.

最开始这件事情是 Gamov 做的. 他认为可以通过元素的结合能来计算整个宇宙中元素的丰度，一层一层算下来可以算出所有元素的含量是多少. 当然在那时候 (快一百年以前)，没有计算器，很难算出正确的答案；但是非常幸运的是，元素的结合能中 $^4\text{He}$ 的结合能远远大于其他的，因此原初合成到这里就停止了，让这种计算变得可行. 这节课我们来算 $^4\text{He}$ 的元素丰度，作为一个宇宙学的练习.

首先做一些量纲分析：我们知道从量纲上来说，可以算出一个引力的能标，planck mass，
$$
M_{\text{pl}}=\sqrt{\frac{1}{8\pi G}}\approx 1.22\times10^{19}\text{ GeV}
$$
为了理解这个能标大约是多大，我们看下面几个质量：
$$
\begin{aligned}
&m_p\approx m_n\approx 1\text{ GeV},\quad m_{\text{top}}=173\text{ GeV}\,\,(\text{most massive quark})
\end{aligned}
$$
因此这个能标非常大，虽然超过能标之后引力理论必须被修改，但是这个量已经大到仅有宇宙早期能够达到.

用量纲分析的角度来考虑一个辐射主导的宇宙，
$$
H = \frac{\dot{a}}{a}\sim\frac{\rho^{1/2}}{M_{\text{pl}}}\sim\frac{T^{1/2}}{M_{\text{pl}}}\ll T
$$
而任何一个反应的 rate 都是 $T$ 的量级，因此我们可以认为，所有反应在 Hubble expansion 的时间尺度上已经平衡了，下面我们研究的宇宙都是热平衡的.

热力学第一定律：
$$
\mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V
$$
而 $U=\rho(T)V$，代入之后我们得到
$$
\mathrm{d}U = V\frac{\mathrm{d}\rho}{\mathrm{d}T}\mathrm{d}T+\rho\mathrm{d}V\Longrightarrow \mathrm{d}S = \left(\frac{1}{T}\frac{\mathrm{d}\rho}{\mathrm{d}T}V\right)\mathrm{d}T+\left(\frac{\rho+p}{T}\right)\mathrm{d}V
$$
这定义了一个偏微分，
$$
s \equiv\left(\frac{\partial S}{\partial V}\right)_T=\frac{\rho+p}{T}
$$
经过一些热力学的计算我们得到 $\rho$ 的具体形式，
$$
\rho = \left\{\begin{aligned}
&\frac{\pi^2}{30}gT^4,\quad\text{boson}\\\\
&\frac{7}{8}\frac{\pi^2}{30}gT^4,\quad\text{fermion}
\end{aligned}\right.
$$
这里 $g$ 是某种简并度. 但是很多人认为，暗物质自己会形成 section，和我们之间是 decouple 的，就比如和我们之间只有弱相互作用的中微子，它们早在宇宙温度为 $1\text{ MeV}$ 的时候就已经和我们 decouple 了. 所以我们定义一种 $g_*$，写成
$$
g_* = \sum_{\text{boson}}g_i\left(\frac{T_i}{T}\right)^4+\frac{7}{8}\sum_{\text{fermion}}g_i\left(\frac{T_i}{T}\right)^4,\quad \rho =\frac{\pi^2}{30} g_*T^4
$$
现在看具体的 $g_i$：首先对于 6 种 quark，都要乘 $2$；然后对于 3 种中微子，乘 $2$；对于 $e,\mu,\tau$ 要乘 $4$；还有胶子 (gluon)，它有 $8$ 个自由度. 最后加起来大概是 $g_*\approx 110$. 宇宙的熵密度：
$$
s=\frac{\rho+p}{T} = \frac{2\pi^2}{45}g_{*s}T^3,\quad g_{*s}=g_* = \sum_{\text{boson}}g_i\left(\frac{T_i}{T}\right)^3+\frac{7}{8}\sum_{\text{fermion}}g_i\left(\frac{T_i}{T}\right)^3
$$
一开始 $\nu$，$\gamma$ 和 matter 是平衡的，最早是 $\nu$ 与其他两者 decouple，在这个时间段，同时也在发生 $e^++e^-\longleftrightarrow\gamma+\gamma$ 的反应，而温度再降低一点之后 $e$ 开始变成非相对论性，反应平衡大幅右移，产生一次再加热，这时候 $(e,\gamma)$ 体系和中微子体系的温度就产生了比较大的差异.

> 这不是我们星系与宇宙吗，详见：[Lesson 12 中微子脱耦 & 暴涨](cosmos/lesson-12/).

对于没有相互作用的粒子，
$$
\frac{\mathrm{d}(na^3)}{\mathrm{d}t}=0\Longrightarrow \frac{\mathrm{d}n}{\mathrm{d}t}+3Hn=0
$$
大多数粒子是有量子相互作用的，散射的概率一定正比于 $|\langle\psi_f|H|\psi_i\rangle|^2$ 这样的东西. 考虑 $1+2\to 3+4$，它们的分布分别是 $f_i$，那么类似 Boltzmann 积分微分方程，
$$
\begin{aligned}
&\frac{\mathrm{d}n_1}{\mathrm{d}t}+3Hn_1 = A[f_3f_4(1\pm f_1)(1\pm f_2)-f_1f_2(1\pm f_3)(1\pm f_4)]\\\\
&A=\int\frac{\mathrm{d}^3p}{(2\pi)^3(2E_1)}\int\frac{\mathrm{d}^3p}{(2\pi)^3(2E_2)}\int\frac{\mathrm{d}^3p}{(2\pi)^3(2E_3)}\int\frac{\mathrm{d}^3p}{(2\pi)^3(2E_4)}|M(12\to34)|^2(2\pi)^4\delta^4(p_1+p_2-p_3-p_4)
\end{aligned}
$$

> 其实不应该分两行来写，但是实在写不下了，我的 Typora 已经是调整过 max-width 的也写不下.

其中 $f_i$ 那些项是 collision terms，在平衡时它们就是零，这也就是那些平衡分布的来源.

进行近似，认为我们的 Fermi-Dirac 分布能够近似为 Boltzmann 分布，同时把相空间的那些积分写成一个碰撞频率的形式，也就是 $\langle\sigma v\rangle$，最终得到
$$
\frac{\mathrm{d}n_1}{\mathrm{d}t}+3Hn_1=n_1^{(0)}n_2^{(0)}\left[\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}\right]\langle\sigma v\rangle
$$
考虑温度 $T\gg m_n-m_p$ 的时候，这时候宇宙年龄还不到 $1\text{ s}$，因此可以忽略 neutron 的衰变问题. 在这个时间点算核合成，条件有：baryon 和 $\gamma$ 的数密度比
$$
\eta = \frac{n_b}{n_\gamma}=6.2\times10^{-10}
$$
然后结合能 (binding energy)
$$
B=Zm_p+(A-Z)m_n-m
$$
发生下述反应：
$$
\begin{aligned}
&p+\overline{\nu}\longleftrightarrow n+e^+\\\\
&p+e^-\longleftrightarrow n+\nu\\\\
&n\longleftrightarrow p+e^-+\overline{\nu}\\\\
&p+n\longleftrightarrow D+\gamma\\\\
&D+D\longleftrightarrow n+{}^3\text{He}\\\\
&^3\text{He}+D\longleftrightarrow p+{}^4\text{He}
\end{aligned}
$$
$^4\text{He}$ 在结合能曲线上刚好是一个很高的峰，因此元素形成就 stuck 在这个位置，直到原初恒星形成，才逐渐生成其他的元素.