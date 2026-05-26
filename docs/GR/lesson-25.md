---
title: Lesson 25 原初核合成 & CMB
createTime: 2026/05/26 16:34:39
permalink: /GR/lesson-24-bbn-and-cmb/
---
核反应 $1+2\longleftrightarrow 3+4$，对于 $n_1$ 有时间变化：
$$
\frac{\mathrm{d}n_1}{\mathrm{d}t}+3Hn_1 = n_1^{(0)}n_2^{(0)}\langle\sigma v\rangle\left\{\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}\right\}
$$
(这里的 $(0)$ 代表初态.) 我们上节课说是从 $1\text{ GeV}$ 开始演化，但是这并不是很合理，比较合理的取值是从 $10\text{ MeV}$ 开始演化，这是因为实际上从高能标开始演化，会存在不少 $\pi^{\pm}$、$K^{\pm}$ 等高能量的粒子，但是选低能标就会有压低 $e^{-m/T}$，我们只需要考虑 $p$ 和 $n$.

> 关于为什么 $p,n$ 要考虑但是同静能量量级的其他粒子不用考虑：因为重子数守恒，低能下也会存在大量 $p,n$.

Gamov 幸运的点在于 $^4\text{He}$ 结合能很高，很稳定. 这里再思考一步：因为中子不稳定、会衰变，因此所有中子最后都会跑到 $\text{D}$ 里面，我们只需要计算前四步的反应中留下多少中子.
$$
\begin{aligned}
&p+\overline{\nu}\longleftrightarrow n+e^+\\\\
&p+e^-\longleftrightarrow n+\nu\\\\
&n\longleftrightarrow p+e^-+\overline{\nu}\\\\
&p+n\longleftrightarrow \mathrm{D}+\gamma
\end{aligned}
$$

> 为什么中子到氘核里之后不衰变：因为氘核结合能使得中子能量变低，甚至低于质子能量，所以中子已经没有能量进行产生质子的衰变了.

我们想知道什么时候氘核大量形成. 虽然看起来热平衡时上面几种粒子的相对数量不太会变化，但是在爆炸之后不久，光子数很多，我们之前引入的量 $\eta_B=n_B/n_\gamma\sim 10^{-10}$ 量级，因此短时间内还不会大量形成氘核. (额外说明：$\eta_B$ 随着 $T$ 几乎是守恒的，这一点可以通过计算分子分母随着 $T$ 的依赖来得到.)

对于最后一个反应：(光子数几乎守恒，因为温度没有大幅度变化)
$$
\frac{n_{\text{D}}n_\gamma}{n_{\text{D}}^{(0)}n_\gamma^{(0)}} = \frac{n_nn_p}{n_n^{(0)}n_p^{(0)}}\Longrightarrow\frac{n_{\text{D}}}{n_pn_n} = \frac{n_{\text{D}}^{(0)}}{n_p^{(0)}n_n^{(0)}}
$$
其中，RHS：
$$
g\int\frac{\mathrm{d}^3p}{(2\pi)^3}\cdot e^{-(m+p^2/2m)/T} = \frac{3}{4}\left(\frac{4\pi}{m_pT}\right)^{3/2}e^{B_{\text{D}}/T}
$$

> 氘核自旋 $1$，简并度 $g=3$.

得到
$$
\frac{n_{\text{D}}}{n_n} = \frac{3}{4}n_p\left(\frac{4\pi}{m_pT}\right)^{3/2}e^{B_{\text{D}}/T}
$$
这里的质子数密度 $n_p\sim n_B\sim\eta_Bn_\gamma\sim \eta_BT^3$. 核合成开始的标志就是上述这个量从很小开始趋于 $\mathcal{O}(1)$，也就是中子开始跑到氘核内部. 微调这里的 $T$ (这是一个唯一的参数)，最后得到的 $T$ 差不多在 $\text{MeV}$ 量级. 到此核合成开始.

> 额外提一下，最开始的反应 $p+\overline{\nu}\longleftrightarrow n+e^+$，这个反应也不能一直处于热平衡. 但是巧合在于这是弱相互作用，区别于氘核形成的电磁相互作用，在低能下弱相互作用极其微弱 (当然高能时它甚至强于电磁).
>
> 另外，所有的核反应都必须和 Hubble expansion 抗争，质子首先要找到一个中微子发生反应，这件事情也是不容易的. 因此第一个反应没那么容易发生，导致了现在的宇宙.
>
> 不过如果最开始选择的是第一个反应而不是氘核合成，我们的宇宙可能会是完全另一幅景象.

简单用轻子 ($\ell$) 来描述反应：$p+\ell\longleftrightarrow n+\ell$.
$$
\frac{\mathrm{d}n_n}{\mathrm{d}t}+3Hn_n=n_n^{(0)}n_\ell^{(0)}\langle\sigma v\rangle\left\{\frac{n_pn_\ell}{n_p^{(0)}n_\ell^{(0)}}-\frac{n_nn_\ell}{n_n^{(0)}n_\ell^{(0)}}\right\} = n_\ell^{(0)}\langle\sigma v\rangle\left\{\frac{n_pn_n^{(0)}}{n_p^{(0)}}-n_n\right\}
$$
这里假设 $n_e=n_\nu=n_e^{(0)}=n_\nu^{(0)}=n_\ell^{(0)}$. 重子数守恒：
$$
\frac{\mathrm{d}(n_n+n_p)}{\mathrm{d}t}+3H(n_n+n_p)=0
$$
定义 $X_n=n_n/(n_n+n_p)$，把反应率简写为 $\Gamma_{np}=n_\ell^{(0)}\langle\sigma v\rangle$，那么上述两方程化为
$$
\frac{\mathrm{d}X_n}{\mathrm{d}t}=\Gamma_{np}\left[(1-X_n)e^{-Q/T}-X_n\right],\quad Q=m_n-m_p
$$
这里的时间实际上并没有很多实际含义，只是标定演化的一个物理量罢了. 为了把它消掉，我们用
$$
\frac{\mathrm{d}T}{T\mathrm{d}t}=-H
$$

> 这来源于 $s\sim T^3\sim a^{-3}$，宇宙的熵密度.
>
> 同时，
> $$
> H=\left(\frac{8\pi G\rho}{3}\right)^{1/2}\sim T^2\sim a^{-2}
> $$
> 用下面的 $x$，$H\sim x^{-2}$.

定义 $x=Q/T$，那么原来的微分方程变成了 $X_n$ 和 $x$ 的微分方程，
$$
\frac{\mathrm{d}X_n}{\mathrm{d}x}=\frac{x\Gamma}{H(x=1)}\left[e^{-x}-X_n(1+e^{-x})\right]
$$
初始条件为 $x\simeq 1$，$X_n=1/2$. 利用弱相互作用的结论可以算出
$$
\Gamma = \frac{255}{\tau_nx^5}(12+6x+x^2)
$$
这里的 $\tau_n$ 是中子衰变的一个时间参数，$\tau_n\simeq 900\text{ sec}$. 而
$$
H(x=1)\simeq\sqrt{\frac{8\pi GQ^4}{3}}\simeq 1.13\text{ sec}^{-1}
$$
这也导致 $\Gamma(x)/H(x=1)$ 差不多是 $1$ 量级，这保证了当前宇宙能够留下这么多的中子，这完全是一个巧合，因为一旦上面这个量趋于零的速度再快一点或者慢一点，最后平衡时留下的中子数就不是当前这个值；这个过程叫作 freeze out 机制，也就是宇宙降温留下了中子，否则如果一直热平衡，中子会被全部消耗.

---

上面说完了 BBN (Big Bang nucleosynthesis)，下面说 CMB (Cosmic Microwave Background).

CMB 发生在大约 $10\text{ eV}$ 的能标，这时候质子和电子结合，$p+e\to \text{H}+\gamma$. 依旧用 Boltzmann 方程 (Saha 方程)，
$$
\frac{X_e^2}{1-X_e}=\frac{1}{n_e+n_H}\left[\left(\frac{m_eT}{2\pi}\right)^{3/2}e^{-(m_e+m_p-m_n)/T}\right]
$$
仍然用 $\eta_B$，$n_e+n_{\text{H}}\sim\eta_Bn_\gamma\sim\eta_BT^3$，得到
$$
\frac{X_e^2}{1-X_e}=\eta_B^{-1}\left(\frac{m_e}{T}\right)^{3/2}e^{-E_b/T}
$$
用 $T=10\text{ eV}$ 代入，算出大约发生在 $z=1100$ 位置，以及 CMB 温度 $2.73\text{ K}$.

---

一个 bug：如果宇宙正在膨胀，且早期是 radiation dominated，我们可以先写出来一个度规，
$$
\mathrm{d}s^2=-\mathrm{d}t^2+a^2(t)\mathrm{d}\vec{x}^2 = a^2(\tau)(-\mathrm{d}\tau^2+\mathrm{d}\vec{x}^2),\quad a^{-1}\mathrm{d}t=\mathrm{d}\tau
$$
这里的 $a(t)$ 关于 $t$ 的依赖关系是 $t^p$，对于不同的 domination，有
$$
\begin{cases}
p=1/2&\text{RD}\\\\
p=2/3&\text{MD}\\\\
p=\infty&\text{vacuum energy}
\end{cases}
$$
现在的 bug 是，CMB 的 $\delta T\sim10^{-5}T$，所以一开始整个宇宙一定有极强的整体关联，也就是把 radiation 反推回去到 CMB 的时间，所有的光在这时候都应该有相互关联. 用光锥的语言就是，从现在往回看光锥，回到 CMB 时期的两个最远的点，它们再往回推，两个过去光锥应该相交.

::: window img no-padding

![(图源 [Horizon problem](https://en.wikipedia.org/wiki/Horizon_problem))](https://vip.123pan.cn/1845440081/ymjew503t0n000ddxk5nf0t22u9a39meDIYxAIFxDda1DGxPDwUzAa==.png)

:::

而 $\mathrm{d}\tau=a^{-1}\mathrm{d}t\sim t^{-1/2}\mathrm{d}t\sim\mathrm{d}t^{1/2}$，也就是 $\tau\sim t^{1/2}\sim a$，因此光锥边界在图上是大致线性的，所以它们按照这个理论并不能产生相互关联. 到此人们决定提出暴涨.