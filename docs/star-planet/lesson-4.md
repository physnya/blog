---
title: Lesson 4 Ignition of the Sun
createTime: 2026/03/19 21:52:34
permalink: /star-planet/lesson-4-ignition-of-sun/
---
我们上节课说了，在 $E_* \approx 50\text{ keV}$ 的能量下，$r$ - $E$ 图像上的 de Broglie 波长线与点火距离线相交. 具体的表达式是
$$
E_* = \frac{8\pi^2(Z_1Z_2e^2)^2}{h^2}m_\mu,\quad m_\mu = \frac{m_1m_2}{m_1+m_2}
$$
但是太阳的能量仍然比这个 $E_*$ 要小，隧穿概率
$$
P \propto \exp\left[-\pi\sqrt{\frac{E_*}{E}}\right]
$$
仍然是一个很小的值. 但是我们知道粒子并不是都处在平均值附近，而是具有一个很宽的分布，因此从微观上试图解释，我们算反应率. 这需要先计算碰撞概率，假设两种粒子的碰撞截面为 $\sigma_{12}$，得到微元的碰撞概率为
$$
P = n_1n_2\sigma_{12}\Delta v
$$
其中 $\Delta v$ 为两粒子相对速度. 碰撞概率
$$
\Gamma_{12} = n_1n_2\int P(E)\Delta v(E)\sigma_{12}(E)\text{d}E
$$
这里的 $P(E)$ 是按照能量的粒子分布函数，用 Maxwell 分布律即可，$P(E)\propto e^{-E/(k_BT)}$，相对速度写为 $\sqrt{2E/m_\mu}$，然后用 de Broglie 波长来估算相对碰撞截面大小，
$$
\sigma_{12}\sim \pi\lambda_{\text{dB}}^2P_{\text{tunnelling}} \sim\frac{\hbar^2}{2m_\mu E}e^{-\pi\sqrt{E_*/E}} = \frac{S(E)}{E}e^{-\pi\sqrt{E_*/E}}
$$
最终的反应概率
$$
\Gamma_{12} = n_1n_2(k_BT)^{-3/2}\sqrt{\frac{8}{\pi m_\mu}}\int S(E)\exp\left[-\frac{E}{k_BT}-\pi\sqrt{\frac{E_*}{E}}\right]\text{d}E
$$
因此对于点火能量来说，我们需要找到的不是最高的能量，而是一个比较中间的值，这也解释了为什么太阳能够实现聚变点火. 这个结论被称为 Gamov Peak.

---

开始讲第二次作业了，不过我还没写所以不记录了.

第一次作业讲解：平均分 92

> ？？？怎么做到的，我拼尽全力 83

好吧我翻了一下发现我所有扣分都是非学术的内容...

---

开始进入 module 3，有关星系演化的部分.

在一个电磁波场中，一个单电子的运动方程写为
$$
F = eE = E_0\cos\omega t = m_e\ddot{x}
$$
这样的运动会造成电磁辐射，在 cgs 制下的辐射 Larmor 公式写作
$$
P_L = \frac{2\ddot{x}^2q^2}{3c^3}\left[\frac{\text{E}}{\text{T}}\right]
$$
能流为
$$
S = \frac{c}{8\pi}E_0^2\left[\frac{\text{E}}{\text{L}^2\text{T}}\right]
$$
我们将辐射功率和能流的比例记为 $\sigma_T$ (某种意义上来说这也是一个「截面」)，那么
$$
\sigma_T =\frac{P_e}{S} = \frac{2 e^2}{3c^3}\frac{\langle \ddot{x}^2\rangle}{cE_0^0}\cdot 8\pi = \frac{8\pi}{3}\frac{e^4}{m_e^2c^4}
$$

> 估算一个简单的二维问题，考虑校园是 $1\text{ km}$ 大的二维圆平面，碰撞「截面」大约是 $\sigma=1\text{ m}$，人的密度可以估计为 $N/\pi R^2$.
>
> 最后的结果大约是每 $30\text{ m}$ 遇到一个人，$l_{\text{mfp}}\approx 30\text{ m}$. (mean free path)
>
> ---
>
> 如果每遇到一个人改变一次方向，随机行走运动轨迹的均值：$\langle\overline{r}\rangle = 0$，
> $$
> \left\langle\overline{r^2}\right\rangle = \left\langle\overline{r}\cdot\overline{r}\right\rangle = Nl_{\text{mfp}}^2
> $$
> 如果要走出校园，那么必须要 $\left\langle\overline{r^2}\right\rangle = R^2$，这里需要的步骤数大约是 $10^3$，也可以计算时间，如果是正常走路速度，那么需要 $10\text{ h}$ 走出校园.

对于一个想要从太阳内部逃出来的粒子，也需要经历类似的过程，我们需要 $R_{\odot}$ 就能计算平均逃逸时间. 有
$$
l_{\text{mfp}} = \frac{1}{n_e\sigma_T} \approx 2\text{ cm},\quad t_{\text{esc}} \approx 3000\text{ yr.}
$$
