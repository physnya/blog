---
title: Lesson 5 Landau 相变理论
createTime: 2026/03/11 11:27:45
permalink: /statistical-mechanics/lesson-5-landau-phase-transition/
---
/Theorem/ (Gibbs 相律)

> 有 $k$ 种组元、$\varphi$ 个共存相时，独立变量数为
> $$
> f = (k+1)\varphi - (k+2)(\varphi-1)
> $$
> 其中前一项是变量数，后一项是方程数，最终得到的相律为
> $$
> f=k+2-\varphi
> $$
> 一般而言我们用 $f\geqslant 0$ 的条件，所以可以表述为 $\varphi\leqslant k+2$.

## Clausius - Clapeyron 方程

平衡条件是化学势相等，$\mu^{\text{I}} = \mu^{\text{II}}$. 为了方便实验，考虑把这个方程变为观测量的方程，用 $T,p$ 来描述.

在 $T,p$ 图像上，$\mu^{\text{I}}=\mu^{\text{II}}$ 表示一条相平衡曲线，微分一次可得
$$
\text{d}\mu_m^{\text{I}} = -S_m^{\text{I}}\text{d}T+V_m^{\text{I}}\text{d}P
$$
(下标 $m$ 表示 mol 量.) 对于 $\text{II}$ 同理，两个方程相减，化简得
$$
\frac{\text{d}P}{\text{d}T} = \frac{\Delta S_m}{\Delta V_m}
$$
这就是 Clausius - Clapeyron 方程.

## 气液两相的转变和临界点

为了描述这种相变，肯定不能用理想气体方程，改用 Van der Waals 方程，也就是
$$
\left(p+\frac{n^2a}{V^2}\right)(V-nb) = nRT
$$
其等温线为
$$
p = \frac{RT}{v-b}-\frac{a}{v^2}
$$
(这里用的是 mol 版本的方程，$v=V/n$.) 在可能出现气液两相共存的温度下，VdW 方程等温线有一段上升的曲线，这个在现实中不存在. 三种相平衡条件给出现实的修正：首先等温，肯定满足；等压要求这段曲线被修正为一个平行于 $p$ 轴的直线段. 剩下的要求就是化学势平衡.

从微分方程来看，等温线上的化学势变化为
$$
\Delta\mu_m = \int v\text{d}p
$$
RHS 对应 $T$ - $p$ 图上等温线下的面积，因此构造的直线是使得上升段两个分开的部分面积相等的直线段.

气液相变的临界点要求
$$
\left(\frac{\partial p}{\partial v}\right)_T = 0,\quad \left(\frac{\partial^2 p}{\partial v^2}\right)_T = 0
$$
两个方程和 VdW 方程联立，解得
$$
T_c = \frac{8a}{27Rb},\quad p_c = \frac{a}{27b^2},\quad v_c = 3b
$$
这几个量可以在实验上用来确定 $a,b$ 两个参数. 同时如果定义 $t^* = T/T_c$ (其他量同理)，可以获得无量纲化的对应态定律
$$
\left(p^*+\frac{3}{v^*}\right)\left(v^*+\frac{1}{3}\right) = \frac{8}{3}t^*
$$

## Landau 相变理论

引入序参量的概念：区别不同相的热力学量为 $\phi$；对应的存在序场 $H$，两个量共轭，也就是
$$
\phi = -\left(\frac{\partial G}{\partial H}\right)_T
$$
一般来说，序参量是某种广义坐标.

|    系统    |              相变               |                           序参量                            |             例子              |   $T_c(\text{K})$   |
| :--------: | :-----------------------------: | :---------------------------------------------------------: | :---------------------------: | :-----------------: |
|    磁性    | 铁磁 / 反铁磁<br> 反铁磁 / 顺磁 |             自发磁化 $M$<br>子格自发磁化 $M_s$              | $\text{Fe}$<br>$\text{FeF}_2$ | $1044.0$<br>$78.26$ |
|  液 - 气   |           凝聚 / 蒸发           |              密度差 $\Delta\rho=\rho_l-\rho_g$              |     $\text{H}_2\text{O}$      |      $647.05$       |
| 向列型液晶 |         取向有序 / 无序         |  $\displaystyle{\frac{1}{2}\langle3\cos^2\theta-1\rangle}$  | 4.4'-dimethylaxyazoxybenzene  |      $408.47$       |
|  量子液体  |   正常 / 超流<br>正常 / 超导    | $\langle\psi\rangle=\sqrt{\rho}e^{-\text{i}\phi}$<br>波函数 | $^4\text{He}$<br>$\text{Pb}$  |   $2.2$<br>$7.19$   |
|  液 - 固   |           熔化 / 晶化           |                   $\rho_G$，$G$ 为倒格矢                    |     $\text{H}_2\text{O}$      |      $273.16$       |
|    合金    |          子晶格有序化           |     $\psi=(\Delta c^{\text{II}}-\Delta c^{\text{I}})/2$     |         $\text{CuZn}$         |        $739$        |
|   介电性   |         铁电<br>反铁电          |                极化 $P$<br>子晶格极化 $P_s$                 |       $\text{BaTiO}_3$        |        $393$        |

