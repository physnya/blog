---
title: Lesson 3 Lane - Emden Equation
createTime: 2026/03/12 21:53:24
permalink: /star-planet/lesson-3-lane-emden-equ/
---
上节课讲的是 EoS. 我们知道下面这些 EoS：

* $P = \displaystyle{\frac{\rho k_BT}{\mu m}}$，这是 ideal gas EoS

* 对于非相对论和相对论的电子气，有
  $$
  P = K_{\text{NR}}\rho^{5/3},\quad P = K_{\text{R}}\rho^{4/3}
  $$
  这些又被称为 Polymeric EoS.

为了导出具体的 EoS，考虑平衡条件，也就是引力等于压力. 对于 $z\to z+\text{d}z$ 的一个小气团，有
$$
F_g = g_zA\rho\text{d}z = A\text{d}P\Longrightarrow \frac{\text{d}P}{\text{d}z} = -\rho g
$$
现在把 $P = K\rho^{1+1/n}$ 代入进去，同时把 $z$ 改写成 $r$ (因为考虑的是恒星)，另外把 $g$ 改写成引力势 $Gm_r/r^2$，得到恒星的力学平衡方程
$$
\frac{K}{\rho}\frac{\text{d}}{\text{d}r}\rho^{1+1/n} = -\frac{Gm_r}{r^2}
$$

> 这里 RHS 写 $m_r$ 是因为这个质量是 $r$ 的函数，$r$ 以内的全部质量和.

两边同时乘 $r^2$ 后对 $r$ 求一阶导数，
$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(\frac{r^2}{\rho}\frac{\text{d}}{\text{d}r}\rho^{1+1/n}\right) = -\frac{4\pi G}{K}\rho
$$
令 $\rho = \rho_c\psi^n$ (c = center)，代入，得到
$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(r^2\frac{1}{\psi^n}\frac{\text{d}}{\text{d}r}\psi^{n+1}\right) = -\frac{4\pi G}{K}\rho_c^{1-1/n}\psi^n
$$
化简，最终形式是
$$
\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(r^2\frac{\text{d}\psi}{\text{d}r}\right) = -\frac{4\pi G}{K(1+n)}\rho_c^{1-1/n}\psi^n
$$
因为 $\psi$ 无量纲，因此 LHS 量纲为 $\text{L}^{-2}$，可以定义下面的 $\lambda_n$：
$$
\lambda_n^2 =\frac{K(1+n)}{4\pi G}\rho_c^{1/n-1}
$$
为某个长度量纲的辅助量. 这时候可以把变量改写为 $r = \lambda_n\xi$，这样整个方程都无量纲化，
$$
\frac{1}{\xi^2}\frac{\text{d}}{\text{d}\xi}\left(\xi^2\frac{\text{d}\psi}{\text{d}\xi}\right) = -\psi^n
$$
这就是 **Lane - Emden 方程**！它只有一个参数 $n$，描述了所有的物态方程为 $P = K\rho^{1+1/n}$ 的恒星. 它是二阶常微分方程，我们知道它会拥有两个边界条件.

质量：
$$
M = 4\pi\rho_c\lambda_n^2\int\frac{\rho}{\rho_c}\frac{r^2\text{d}r}{\lambda_n^3} = 4\pi\rho_c\lambda_n^3\int\psi^n\xi^2\text{d}\xi
$$
惊讶地发现利用 L-E 方程可以直接 remove the integral，获得
$$
M = -4\pi\rho_c\lambda_n^3\int_0^{\xi_R}\frac{\text{d}}{\text{d}\xi}\left(\xi^2\frac{\text{d}\psi}{\text{d}\xi}\right)\text{d}\xi = -4\pi\rho_c\lambda_n^3\left[\xi^2\psi'\right]^{\xi_R}_0 = -4\pi\rho_c\lambda_n^3\xi_R^2\psi'(\xi_R)
$$
平均密度
$$
\bar{\rho} = \frac{M}{V} = -\frac{3\psi'(\xi_R)}{\xi_R}\cdot\rho_c\equiv\frac{\rho_c}{\Gamma_n}
$$
这里的 $\Gamma_n$ 是一个由 $n$ 确定的量，和其他物理实际都无关. 因此只要我们知道 L-E 方程的解就能确定这个值.

也可以从这里推导出 $K$，有
$$
K\propto G\lambda_n^2\rho_c^{1-1/n}\propto GR^2\left(\frac{M}{R}\right)^{1-1/n}\Longrightarrow K = N_nGM^{1-1/n}R^{3/n-1}
$$
这也是由 $n$ 完全决定的，可以查表获得.

同理计算中心压强：
$$
\begin{aligned}
P_c &= K\rho_c^{1+1/n}\propto\left(\frac{M}{R^3}\right)^{1+1/n}GM^{1-1/n}R^{3/n-1}\propto \rho_c^{4/3}M^{2/3}\\\\
\Longrightarrow &P_c = W_n\frac{GM^2}{R^4}=C_nG\rho_c^{4/3}M^{2/3}
\end{aligned}
$$
系数都是由 $n$ 决定.

中心温度并不能简单通过 L-E 方程定出，为简化计算，可以用理想气体近似一下，
$$
P_c = \frac{\rho_ck_BT_c}{m_u\mu}
$$

---

代入极端相对论性的条件，$n=3$，得到
$$
K_{\text{R}} = N_3GM^{1/3} \Longrightarrow M_{\text{chandra}} = \left(\frac{K_\text{R}}{GN_3}\right)^2 \approx 1.45M_{\odot}
$$
这是 Chandrasekhar 极限.

---

太阳的化学能可以简单估计一下，我们认为化学反应的能标是 $1\text{ eV}$，因此
$$
E_{\text{chem}} = \frac{M_{\odot}}{\mu m_u} \sim\frac{10^{33}}{10^{-24}}\cdot 10^{-12}\text{ erg}\sim10^{45}\text{ erg}
$$
这个看起来很大，但是，
$$
t_{\text{chem}} = \frac{E_{\text{chem}}}{L_{\odot}} = \frac{10^{45}}{10^{34}}\sim 10^{11}\text{ sec}\sim 10^{3\sim4}\text{ yr.}
$$
这个明显不能支撑太阳的燃烧.  如果用引力势能，那么
$$
E_{\text{grav}} \sim\frac{GM_{\odot}^2}{R_{\odot}}\sim\frac{10^{-7}(10^{33})^2}{10^{11}}\sim10^{48}\text{ erg}
$$
这个也不够.

现在来计算太阳能否点火核聚变 —— 需要足够热来突破 Coulomb 势的势垒，但是这一般要 $10^{10}\text{ K}$，而太阳的温度在 $10^7\text{ K}$ 量级. 唯一的解释是 quantum tunneling. 我们不需要把质子之间的距离降低到 $\text{fm}$ 的量级，只要可能隧穿即可，
$$
\lambda_{\text{dB}} = \frac{\hbar}{\sqrt{2m_pE}}\Longrightarrow E \propto \frac{1}{\lambda_{\text{dB}}^2}
$$

> 这里要说一下，dB 指的是 de Broglie... 虽然我觉得这个下标也太抽象了.

虽然这个 $\lambda_{\text{dB}}$ 仍然 $\ll$ 平均质子间距，但是已经可以实现点火. 隧穿概率：
$$
\ln P_{\text{tunnel}} \sim\frac{4\pi}{h}\int_{r_s}^{r_E}|p(r)|\text{d}r \sim-\frac{p_Er_E}{h}\sim\frac{\sqrt{m_uE}}{h}\frac{Z_1Z_2e^2}{E}
$$
严格地计算表明，
$$
E = \frac{8\pi^2Z_1^2Z_2^2e^4m_u}{h^2}
$$
当然我们只需要了解其中的物理即可.

:::: tip

老师上课画的图：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0n000dck5xyplekr21ablwcDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::