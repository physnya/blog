---
title: Lesson 10 Birth (II)
createTime: 2026/05/08 21:48:34
permalink: /star-planet/lesson-10-birth-ii/
---
Star Formation：最开始是一团气体，然后 collapse，整个气团拥有一个整体的能量和角动量，在坍缩的过程中，因为角动量守恒，整个气团的转动速度会越来越大；这个时间尺度为 $10^5\text{ yr.}$ 我们称这个阶段为 class 0. 接下来是 class 1，也就是星体已经初步形成的阶段，这时候气体开始聚集到一个盘面上. Class 2 阶段，星体已经完全形成，加速过程和向外抛射物质的过程也逐渐减弱. Class 3 标志着星体清理周围的气体、轨道上的小星体等等.

接着上节课的内容，对于一个 disk，
$$
\omega^2 = k^2c_s^2-2\pi G\Sigma |k|+\Omega_k^2
$$
求极值，解得在 $k_c = \pi G\Sigma/c_s^2$ 的时候，扰动的角频率取最大值，这个值为
$$
\omega^2 = \left(\frac{\pi G\Sigma}{c_s}\right)^2-2\left(\frac{\pi G\Sigma}{c_s}\right)^2 + \Omega^2
$$
稳定条件仍旧是 $\omega^2>0$，也就是
$$
\frac{1}{Q_T^2} = \left(\frac{\pi G\Sigma}{c_s\Omega}\right)^2 <1,\quad Q_T \equiv\frac{c_s\Omega}{\pi G\Sigma}\Longrightarrow Q_T>1
$$
下面以 Jupiter 为例 —— 首先估计 $m_J$. 但是现在是在二维研究问题，因此应该考虑
$$
m_J\sim\Sigma\lambda^2\sim\Sigma\left(\frac{c_s^2}{G\Sigma}\right)^2\sim\frac{c_s^3}{G\Omega}\cdot Q_T
$$

> 这里的 $\lambda$ 用 $k$ 的倒数来估计，也就是
> $$
> \lambda\sim\frac{1}{k}\sim\frac{c_s^2}{\pi G\Sigma}\sim\frac{c_s^2}{G\Sigma}
> $$

现在 $Q_T$ 比较接近于 $1$，因为我们处在临界值的边缘. 同时，有等式 $\displaystyle{\frac{Gm_*}{r^3}=\Omega_k^2}$，算得
$$
m_J\sim\frac{1}{r^3}\left(\frac{c_s}{\Omega}\right)^3m_*
$$
在 Problem Sheet 4 的第二题中，我们了解到一个量叫作 pressure scaleheight $H_0$，定义为
$$
H_0 \equiv -\frac{P}{\text{d}P/\text{d}r} = \frac{k_BT}{\mu mg} = \frac{c_s}{\Omega}
$$
所以这个地方的 Jupiter 质量可以被估计为 $(H_0/r)^3m_*$，取 $H_0/r\approx 0.1$ 为例，算得 Jupiter 质量是气团的千分之一.

---

For solids / particles：这时候我们想让扰动发散，不形成星体. 而且此时 $\omega^2$ 没有第一项代表气体分子碰撞的内容，因为这时候都是固体的尘埃粒子，它们非弹性碰撞并黏合在一起.
$$
\omega^2 = -2\pi G\Sigma|k| + \Omega^2<0\Longrightarrow k\sim\frac{\Omega^2}{2\pi G\Sigma},\quad \lambda\sim\frac{G\Sigma}{\Omega^2}
$$
估计的质量：
$$
m\sim\lambda^2\Sigma\sim\left(\frac{G\Sigma}{\Omega^2}\right)^2\Sigma\sim\left(\frac{Gm_*}{\Omega^2}\right)^2\frac{\Sigma^2}{m_*^2}\sim\frac{r^6\Sigma^3}{m_*^2}\sim\left(\frac{\Sigma r^2}{m_*}\right)^3m_*
$$
这个量大约是 $10^{-12}m_*$，非常小，尺度仅有 $100\text{ km}$ 左右. 这种天体被称为 planetesimals (星子).

后面的一些复杂的行星形成理论本课程跳过.

## Exoplanets

讲 module 6：地外行星. 截至 2026 (的这个时刻)，已经发现了 6299 颗地外行星.

行星的条件：

* 绕着一颗恒星旋转
* 呈现出球形 (也就是有足够大的质量实现力学平衡)
* 能够清除其运行轨道上的小型障碍

在太阳系中有几种分类：

* Giant Planets：比如 Jupiter
* Terrestrial Planets：比如 Earth
* Ice Planets：比如 Uranus

为了探测地外行星，我们有很多方法. 首先从 astrometry 讲起：考虑一颗恒星在天空中的运行轨迹，有三个运动成分，分别是

* (proper) motion
* parallax
* "reflex" / barycentre

其中第三个运动是由于大质量行星的存在导致恒星的运动受到的影响.

另一种方法是利用 radial velocity，也就是利用行星自己反光的红移来探测. 但是这种方法有两个弊端，首先是不能探测小质量的行星，因为它们对恒星的光谱影响太小，与噪声混杂在一起；同时无法探测长周期的行星，因为单纯做一个周期就需要很多年才能完成，所以只能探测极为靠近恒星且质量极大的行星.

之后就是大名鼎鼎的 transit. 通过探测恒星在发生掩星的时候的光度变化来测量行星的存在，这种方法找到的地外行星是最多的.