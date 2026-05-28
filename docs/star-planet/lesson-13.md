---
title: Lesson 13 Tides
createTime: 2026/05/28 21:47:24
permalink: /star-planet/lesson-13-tides/
---
沿用之前的符号命名，但是我们这节课要开始做近似. 考虑 $r_2/d\ll 1$，同时利用下面的单位制：
$$
d=1,\quad m_1+m_2=1,\quad \omega=1,\quad G=1
$$
这样，有效势能变为
$$
\phi_{\text{eff}} = -\frac{m_1}{r_1}-\frac{m_2}{r_2}-\frac{1}{2}r^2
$$
用余弦定理得到
$$
r_1^2=1+r_2^2+2r_2\cos\theta,\quad r^2=m_1^2+r_2^2+2m_1r_2\cos\theta
$$
取倒数，得到
$$
\frac{1}{r_1}=\frac{1}{\sqrt{1+x}}\approx 1-r_2\cos\theta+\frac{3\cos^2\theta}{3}r_2^2
$$
代入有效势能，
$$
\phi_{\text{eff}} = -m_1+m_1\cos\theta\cdot r_2-\frac{3\cos^2\theta-1}{2}m_1r_2^2-\frac{1}{2}m_1^2-m_1\cos\theta\cdot r_2-\frac{1}{2}r_2^2-\frac{m_2}{r_2}
$$
把常数项撇掉，
$$
\phi_{\text{eff}} = -\frac{m_2}{r_2}-\frac{3\cos^2\theta-1}{2}m_1r_2^2-\frac{1}{2}r_2^2
$$
第二个近似是考虑 $m_2\ll m_1\simeq 1$. 这时候，
$$
\phi_{\text{eff},x}=0\Longrightarrow x=\left(\frac{m_2}{3}\right)^{1/3}
$$
恢复量纲之后是 $(m_2/3m_1)^{1/3}d$，这被称为 Hill radius. 对于日地系统，Hill 半径大约是 $0.01$ AU，这被当作判断是归属于谁的引力范围的判据，也就是在地球附近 $0.01$ AU 的天体被视为处于地球引力范围之内，反之则属于太阳的引力范围.

如果地球太靠近太阳，那么很有可能出现 $R_{\text{Hill}}<R_E$ 的情况，也就是 Hill 半径比地球半径还要小，这时候地球上的所有东西都会脱离地球的掌控，这给出的日地距离限制被称为 Roche limit. 计算可知：
$$
R_2 = R_{\text{Hill}}\Longrightarrow d=\left(\frac{3\rho_1}{\rho_2}\right)^{1/3}R_1
$$
更精确的计算表明系数是 $2.4$ 左右.

---

回到原先的势能，计算一阶展开可以得到受力，
$$
\vec{F} = -\nabla\phi_{\text{eff}} = 
\begin{pmatrix}
2x\\-y
\end{pmatrix}\frac{Gm_1}{d^3}
$$
这是针对微扰而言的一阶力，这个力会产生潮汐，可以计算出 $x$ 方向的潮汐高度，
$$
h_{\text{tides}}\sim\frac{|\phi|}{g}\sim\frac{R_2^2\cdot Gm_1/d^3}{Gm_2/R_2^2}\sim\frac{m_1}{m_2}\frac{R_2^4}{d^3}
$$
可以简单算一下潮汐升起来带来的那一坨质量是多少：
$$
m_{\text{balge}}\sim \rho R_2^2h_{\text{tides}}\sim m_2\left(\frac{R_2}{d}\right)^3
$$
这造成了一个摩擦效应，也就是所谓的潮汐摩擦. 这件事情在地月系统中会拖慢地球的自转速度，同时月球会获得角动量、升到更高轨道，也就是说在遥远的未来一个月会更短、一天会更长.

> 其实应该是有某种可能，某个星系中的类似系统在达到潮汐锁定之前，卫星轨道就已经高于 Hill radius，脱离行星的掌控了... 不过地月系统显然没有这个问题.

潮汐力造成的椭球的半长轴与地月连线之间的夹角 (锐角) $\varepsilon$ 称为 lag angle. 这产生一个四极势，
$$
\phi_{\text{quad}}\sim K_L\frac{Gm_s}{R}\left(\frac{R}{d}\right)^3\left(\frac{R}{r}\right)^3\frac{3\cos^2\theta-1}{2}
$$
我们称 $K_L$ 为 love number，虽然我并不知道为什么. 力矩：
$$
\Gamma_T = -\left.\frac{\partial\phi_{\text{quad}}}{\partial\theta}\right|_{r=d\\\theta=-\varepsilon}m_sd = K_L\frac{Gm_s^2}{R}\left(\frac{R}{d}\right)^6\cdot 3\cos\varepsilon\sin\varepsilon=\frac{3K_L}{2}\frac{Gm_s^2}{R}\left(\frac{R}{d}\right)^6\frac{1}{Q}
$$
这里的 $Q \equiv 1/\sin2\varepsilon$. 角动量变化
$$
\frac{\mathrm{d}L_s}{\mathrm{d}t} = -\Gamma_T\Longrightarrow C_Im_pR^2\dot{\Omega}_p = -\Gamma_T
$$
可以解得 $t_{\text{do-spin}}=\Omega_p/\dot{\Omega}_p=\cdots$.

当然也可以算能量的衰减，
$$
\frac{\mathrm{d}E}{\mathrm{d}t}=\Gamma_T(n_s-\Omega_p)<0
$$
