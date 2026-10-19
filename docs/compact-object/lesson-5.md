---
title: 广义相对论的观测效应
permalink: /compact-object/lesson-5-general-relativity-effect/
createTime: 2026/10/20 01:04:34
---
## 广义相对论的可观测效应

我们的核心讨论是，什么时候必须用广义相对论.

### 狭义相对论效应回顾

- 光速不变原理. 这引入了 Lorentz 因子，
  $$
  \gamma = \frac{1}{\sqrt{1-v^2/c^2}}
  $$

- 时间延缓效应：$\Delta t=\gamma\Delta\tau$.

- 长度收缩效应：$L=L_0/\gamma$.

- 能量与动量的变换：$E=\gamma mc^2$，$p=\gamma mv$.

- 相对论集束：或者说前灯效应，在速度方向的发射粒子分布更多.

### 广义相对论简介

> 『等效原理』引力加速度 (引力质量) 和惯性加速度 (惯性质量) 无法被区分.

我们先从真空静态球对称解开始，Einstein 方程给出
$$
G_{\mu\nu}+\Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}
$$
对于真空静态情况，能动张量 $T_{\mu\nu}=0$，且 $\Lambda=0$ (不考虑暗能量的驱动)，则
$$
G_{\mu\nu} \equiv R_{\mu\nu}-\frac{1}{2}Rg_{\mu\nu}=0,\quad R = R_{\mu\nu}g^{\mu\nu}
$$
在球坐标下，解得静态球对称真空解 (Schwartzchild 度规)：
$$
\mathrm{d}s^2=-\left(1-\frac{2GM}{rc^2}\right)c^2\mathrm{d}t^2+\left(1-\frac{2GM}{rc^2}\right)^{-1}\mathrm{d}r^2+r^2(\mathrm{d}\theta^2+\sin^2\theta\mathrm{d}\phi^2)
$$
几个更加好记忆的结论是某些「等效」的量：定义视界半径为 $r_S=2GM/c^2$.

- 等效光速：$c'=\displaystyle{\frac{\mathrm{d}r}{\mathrm{d}t}=\left(1-\frac{r_S}{r}\right)c}$，这个量和位置关联，因此产生光线偏折效应.

- 等效 Lorentz factor：
  $$
  \gamma_g = \frac{1}{\sqrt{1-v^2/c^2}} = \frac{1}{\sqrt{1-r_S/r}}
  $$
  因此有所谓的引力红移.

这里的两个可观测效应就是引力场造成的时间延缓和引力红移.

---

光线偏折和引力透镜：偏折角为
$$
\frac{4GM}{c^2b}
$$
($b$ 为瞄准距离.) 这个结果是 Newton 光学给出的结果的两倍.

---

Schwartzchild 进动：定义伪引力势 (Paczynski-Wilta 势)
$$
\Phi_{gr}=-\frac{GM}{r-r_S}
$$
则单位周期内，轨道近日点将偏离
$$
\Delta\phi=\frac{3\pi r_S}{a(1-e^2)}
$$

---

另外的效应：引力波辐射/ISCO 和光子球/Shapiro 时延

- ISCO 和光子球：ISCO 指有质量粒子的最内侧稳定圆轨道，可以用上述伪引力势导出，对于 Schwartzchild 黑洞，其值为 $3r_S$；而光子球是无质量粒子的最内侧稳定圆轨道，对于 Schawartzchild 黑洞，其值为 $1.5r_S$.

- Shapiro 时延：光线传播经过引力场会发生时间延迟，因为光线偏折导致了路程变化. 但是这件事情基本只能在双星系统中观察到 (太阳的延时很弱)，在双星互相经过时，产生一个
  $$
  \Delta t = \frac{r_S}{c}\ln\left\{1-S\cos[2\pi(\phi-\phi_1)] \right\}
  $$
  时延的变化幅度 $r$ 由伴星质量决定，
  $$
  r = \frac{r_S}{c}=\frac{2GM_2}{c^3}
  $$
  时延的变化形状 (shape parameter $S$) 则由双星轨道倾角决定，
  $$
  S=\sin i
  $$

## Pre-1：IceCube

中微子探测主要是探测被中微子散射的 $\mu$ 子，再通过统计手段反推中微子的方向分布和能谱.

Nobel 奖的论文中主要报道了一个「耀变体」，即一个喷流指向地球的 AGN.

