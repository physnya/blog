---
title: Lesson 7 宇宙学常数
permalink: /cosmos/lesson-7/
createTime: 2025/4/4 15:49:23
---
::: warning
==这节课和 Hall Effect 实验冲突，笔记完全由 yqq 同学贡献，深表感谢.==
:::

### 光源相对观测者在今天走过的距离

注意在今天就是指假设把今天当作共动坐标架来衡量光动轨迹的距离，如果我们把红移当作积分变量需要做一次变换. 
$$
\psi(z)=\int_t^{t_{0}}c\text{d}t'\frac{a_0}{a(t')}=\int_{\frac{a}{a_0}}^1 \frac{c\text{d}a'}{H_0a'^2E(a')}=\frac{c}{H_0}\int_0^z \frac{\text{d}z'}{E(z')}=D_H\int_0^z \frac{\text{d}z'}{E(z')}
$$
其中：
$$
D_H=3000\text{ Mpc/h}
$$

我们在观测的时候，使用标准尺子和标准烛光：
$$
d_A=a(t)r=\frac{a_0r}{1+z},d_L=(1+z)a_0r
$$
这两种方法进行测量就得到 $a_0r$ (这个 $a_0$ 怎么处理我们马上说)，我们又记得 $\psi$ 和 $r$ 的关系，同时我们已经可以通过刚刚的积分 + 给定的宇宙学模型 (这里 $\Omega_R$ 可以用宇宙微波背景辐射计算，只用给出 $\Omega_M$ 和 $\Omega_\Lambda$) 计算 $\psi$，那么我们就可以通过观测和计算的方式来验证宇宙构成. 

如何处理 $a_0$？在平直宇宙中它其实是 1，不平的情况：
$$
a_0=\frac{c}{H_0\sqrt{|\Omega_k|}}
$$
我们可以使用：
$$
\psi/a_0=\sqrt{|\Omega_k|}\int_0^z\frac{\text{d}z'}{E(z')}
$$
回忆一下我们之前的积分，可以推出 $r(z)$ 与 $\Omega_M$ 和 $\Omega_\Lambda$ 有关，与 $H_0$ 无关. 

### 区分不同的宇宙模型

Alcock - Paczynski Test：

来考虑一个真空中的球形鸡 (固定物理尺寸的球体，直径为 $D$)，出现在了红移为 $z$ 的地方. 

如果我们在今天去观测它，观测时的张角为 $\Delta \theta$，如果球体足够大，记红移宽度 为$\Delta z$，代表远端和近端的光被我们接收的时候有着不同的宇宙学时间. 
$$
\Delta \theta=\frac{D}{d_A}=\frac{D(1+z)}{a_0r}=\frac{D(1+z)\sqrt{|\Omega_k|}}{D_HS_k(\frac{\psi}{a_0})}
$$
在径向有：
$$
\psi(z)=D_H\int_0^z\frac{\text{d}z'}{E(z')}\to D=\Delta\psi(z)\frac a {a_0}=D_H\frac{\Delta z}{E(z)}\frac{1}{1+z}
$$
这样我们就可以写 出$\Delta z$ 和 $D$ 的关系，同时我们用角度这一可观测量来处理 (注意我们这里要求了球形的物体，因为我们观测物体是不同的两个方向)：
$$
\begin{aligned}
\Delta z&=\frac{DE(z)(1+z)}{D_H}\\\\
\frac{\Delta \theta}{\Delta z}=\frac{\sqrt{|\Omega_k|}}{E(z)S_k(\frac{\psi}{a_0})}&=\frac{\sqrt{|\Omega_k|}}{E(z)}\left[S_k\left(\sqrt{\Omega_k}\int_0^z \frac{\text{d}z'}{E(z')}\right)\right]^{-1}
\end{aligned}
$$
对 $k=0$ 的情形：
$$
\frac{\Delta \theta}{\Delta z}=\left[E(z)\int_0^z \frac{\text{d}z'}{E(z')}\right]
$$
结合 $\Omega_M,\Omega_\Lambda$ 得到 $\frac{\Delta \theta}{\Delta z}$ 与 $z$ 的理论关系，观测又得到 $\Delta \theta,\Delta z\to \frac{\Delta \theta}{\Delta z} \text{ of } z$ 可以得到 $\Omega_M,\Omega_\Lambda$.

一些例子：

对于 $\Lambda\text{CDM}$，$\Omega_M=0.3$，$\Omega_\Lambda=0.7$，$K=0$ 在红移为 1 的地方：
$$
\frac{\Delta \theta}{\Delta z}=\left[\sqrt{0.3(1+z)^3+0.7}\int_0^1 \frac{\text{d}z'}{\sqrt{0.3(1+z')^3+0.7}}\right]=0.736
$$
例举这些比较极端的例子是为了让大家明白宇宙的物质如何被观测所理论预言，来排除区分不同宇宙模型. 

## 宇宙学常数与真空能

(1) 真空能视角：
$$
P=-\rho
$$
在相对论中描述能量动量使用所谓能动量张量：
$$
T^{\mu}_{\ \ \nu}=\begin{pmatrix}-\rho&0&0&0\\&P&0&0\\0&0&P&0\\0&0&0&P\end{pmatrix}=-\rho \delta^{\mu}_{\,\,\nu}
$$
而真空能：
$$
{T^{\mu}_{\,\,\nu}}^{(\Lambda)}=-\rho_{\Lambda}g_{\mu\nu}
$$
在爱因斯坦的场方程中又有：
$$
R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=-8\pi GT_{\mu\nu}
$$

$$
T_{\mu\nu}=T_{\mu\nu}^{(M)}+T_{\mu\nu}^{(\Lambda)}=T_{\mu\nu}^{(M)}-\rho_{\Lambda}g_{\mu\nu}
$$

(2) 宇宙学常数视角：

在 GR 中，作用量有：
$$
S=\int \text{d}^4 x\sqrt{-g}\mathscr L
$$
在拉氏量的左边是四维体积元，通过对作用量变分得到场方程. 

这里要求了拉氏量对于坐标变换是协变的，并且包含度规的 2 阶导数. 这样推出：
$$
\mathscr L=R+\Lambda
$$
其中 $\Lambda$ 是一个常数，如果这个常数是0：

若：
$$
\mathscr L=R\to R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=-8\pi GT_{\mu\nu}^{(M)}
$$
但是如果引入常数：
$$
\mathscr L=R+\Lambda\to R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R-\Lambda g_{\mu\nu}=-8\pi GT_{\mu\nu}^{(M)}
$$
把 $\Lambda$ 记作 $8\pi G\rho_{\Lambda}$，就可以得到刚刚的在前面的方程. 

下面来谈一下宇宙常数到底对于爱因斯坦而言发生了什么，毕竟，他曾想要引入它来使宇宙静态，但最后他又说这是他一生最大的错误：
$$
\dot a^2+K=\frac{8}3 \pi G\rho a^2\\\\
\frac{\ddot a}{a}=-\frac{4}{3}\pi G(\rho+3P)
$$
在爱因斯坦当时的假设里，他认为宇宙是静态的，这样导致宇宙是正曲率的，因为：
$$
\dot a=\ddot a=0\,,\quad a=\text{const}\,,\quad K=\frac{8}3 \pi G\rho a^2
$$
由能量守恒：
$$
3P+\rho=0\to P=-\frac{1}{3}\rho
$$
对于物质主导的宇宙显然无法满足这样的条件. 所以爱因斯坦引入了宇宙学常数：
$$
\rho=\rho_M+\rho_{\Lambda}\\\\
P=P_\Lambda=-\Rho_\Lambda
$$
这样可以得到：
$$
\rho_M=2\rho_{\Lambda}
$$
由于宇宙正曲率，所以 $K=+1$，那么计算后刚好可以发现：
$$
a=a_E=\frac{1}{\sqrt{\Lambda}}
$$
这样的宇宙是静态的. 

看起来没什么问题，但为什么爱因斯坦会认为引入宇宙学常数是他一生中最大的错误？

我们可以来考虑这样的静态宇宙的稳定性，做一个微扰：
$$
a=a_E+\delta a
$$
那么物质的密度变成了：
$$
\rho_M=2\rho_{\Lambda}+\delta \rho
$$
代入 Friedman 方程的第一个：

假设 $\dot a=0$ 满足，也就是说 $K=\frac{8}3 \pi G\rho a^2$ 仍旧满足. 

但是我们来考察二阶导数呢？有：
$$
\frac{3\ddot a}{a}=-4\pi G(3P+\rho)=-4\pi G(-3\rho_{\Lambda}+2\rho_{\Lambda}+\delta \rho+\rho_{\Lambda})=-4\pi G\delta \rho
$$
如果 $\delta a<0$，这样想 $\delta \rho$ 是变大的. 但是这样会造成 $a$ 进一步变小.  因此这样宇宙不稳定，也因此，爱因斯坦犯了一个愚蠢的理论错误. 在意识到了宇宙学常数对宇宙的静态毫无意义之后，他在后来摒弃了宇宙学常数. 

但是，后人发现量子力学中存在真空能，因此宇宙学常数被后人重新捡起. 也正因如此，它才能解释今天的宇宙加速膨胀. 但现在它的解释还在一个唯象的阶段，似乎他只是广相中的某种数学形式，有理论物理学家也认为这样的能量还完全是不确定的. 