---
title: Lesson 9 CMB 的特性
permalink: /cosmos/lesson-9/
createTime: 2025/4/21 23:09:32
---
::: warning
==这节课和 Hall Effect 实验冲突，笔记完全由 yqq 同学贡献，深表感谢.==
:::

## 宇宙微波背景辐射

(Cosmic Microwave Background Radiation)

早期宇宙的复合反应：
$$
p+e\overset{\text{combination}}{\underset{\text{ionization}}\longleftrightarrow} H+\gamma\quad(13.6\text{ eV})
$$
如果是能量很高，那么主要反应会向电离进行. 但是能量比较低的话，反应主要会向复合进行，因此是以原子态形式存在. 

如果我们简单的估计，将温度用电子伏特来表示. 那么，我们好奇什么样的温度下是以向右反应为主？

显然这样的条件下要以不能反应的（能量低于 $13.6\text{ eV}$ 的）光子为主，我们知道它服从BE统计，即Plank分布，我们需要在这个分布下低于 $13.6\text{ eV}$ 的光子占比很小. 同时，宇宙除了上述复合反应意外，还存在着如正负电子湮灭产生光子的这类反应，其实：
$$
\frac{n_\gamma}{n_B}=2.4\times10^9
$$
这说明光子的数目其实远远多于重子，光子的基数非常大. 

综上可以计算出合理的温度大概是 $0.3\text{ eV}$，在这时反应几乎向复合进行. 

下面讨论一个问题：随着宇宙温度的降低，那么上述反应有没有可能几乎所有的质子和电子？事实上，左侧都是费米子，右侧都是玻色子，右侧会 BEC，左侧由于泡利不相容原理只能填充低能级的态，所以粒子会变得越来越少. 

但是宇宙低温会处于化学平衡吗？如果粒子的特征反应速率比粒子的碰撞频率快得多，那么反应处于平衡态. 然而反之同理，在这个反应中光子被电子散射速率是反应中最重要的量，即表征为反应速率：

散射速率：
$$
\Lambda_\gamma=\sigma_T n_e c
$$
即正比于散射截面、电子数密度、光速呈正比. 但是我们记得电子的数密度随着宇宙的尺度因子有三次反比关系，它在迅速下降. 

考虑宇宙尺度的时间作为碰撞的弛豫时间：
$$
\Lambda_{\gamma}t_{\text{age}}<1
$$
就称上述反应无法保持化学平衡. 即：
$$
t_{\text{age}}=\frac{1}{H}\,,\quad\Lambda_{\gamma}<H
$$
我们注意到对物质为主导的宇宙：
$$
a\propto t^{2/3}\,,\quad H\propto t^{-1}\propto a^{-3/2}
$$
注意到:
$$
\Lambda_{\gamma}\propto a^{-3}
$$
这说明 $H$ 减小会比 $\Lambda_\gamma$ 慢，这样的话肯定存在这样一个时刻，宇宙开始无法保持化学平衡. 这被称为光子与电子的退耦：当非平衡条件出现后，光子与宇宙其它重子“脱离”，从而失去交换能量的机会. 粗略的想就是宇宙的膨胀会使得光子和重子远离. 

在退耦之前，光子则是这样的：

1. 光子被重子快速散射

2. 宇宙对于光子不透明

在退耦之后，光子可以自由传播，宇宙对光子透明. 

那么，在刚刚好退耦的时候，我们就会发现，此时的光都向开始四面八方发出. 在退耦的时刻，宇宙所有的位置都会向各个方向发光，对于观测者来说，我们的位置上只能看到向我们发光且刚好传播到我们的位置上的光，这是一个二维球面，我们称之为最后散射面，在此之前的宇宙并不透明，所以我们把这个散射面上的光子称为宇宙微波背景辐射. . 

这样，我们可以给出宇宙微波背景辐射的特征：

1. 各向同性

2. 黑体辐射谱：最有决断性的是 COBE 卫星的 FIRAS 探测器，确定了 CMB 非常接近黑体辐射谱. 

3. 能量大概是 $0.3\text{ eV}$，结合今天的温度大概是 $1\text{ K}$ 量级

4. 偶极温度涨落

5. 去除偶极温度张落后的小涨落，代表了早期宇宙的温度不均匀. 根据 COBE 卫星的测量有起伏为：$\delta T/T=10^{-5}$ ，但是这个涨落测得比较粗糙，因此后来有诸多卫星重新测量这一涨落. 

### CMB 的黑体谱特性

光子场已经和重子退耦，无法与其它物质相互作用交换能量，为什么他会是表征热平衡的黑体谱？毕竟，我们已经知道了热平衡可以导出物体黑体谱，但是微波背景辐射的光谱为何是黑体谱？

答案就是光子在最后散射面之前是不透明的，但在此之后光子可以发出光子，在不透明宇宙时，宇宙处在热平衡，光子的辐射满足黑体谱. 但在散射之后，光子自由传播，它在各地保留下来了它本身的性质，因此仍是黑体谱. 

宇宙热平衡的时候，光子数密度有：
$$
n(\nu,\nu+\text{d}\nu)\text{d}\nu=\frac{8\pi \nu^2\text{d}\nu}{\exp(\frac{h\nu}{k_BT})-1}
$$
记在最后散射面的时候光子的频率为 $\nu_l$.

当光子自由传播后，光子的数密度为 (这里 $n$ 乘上单位频率后才是真正的数密度)：
$$
n\nu \propto a^{-3}
$$

$$
\nu\propto a^{-1}\to a(t)\,,\quad\nu=\frac{\nu_l a(t_l)}{a(t)}
$$

因此数密度为：
$$
n(\nu,t)d\nu=\left(\frac{a(t_l)}{a(t)}\right)^3 n_{(t_l)}\text{d}\nu_l
$$
考虑到：
$$
\frac{h\nu_l}{k_B T_{(t_l)}}=\frac{h\nu}{k_B\left(\frac{a(t_l)}{a(t)}T(t)\right)}
$$
并且温度为：
$$
T(t)=T(t_l)\left(\frac{a(t_l)}{a(t)}\right)
$$
这样改变. 

这时今天的数密度关系为：
$$
n(\nu,t)\text{d} \nu=\frac{8\pi \nu^2 \text{d}\nu}{\exp(\frac{h\nu}{k_BT})-1}
$$
依旧是一个黑体谱. 很有意思的就是，宇宙中最接近黑体谱的辐射反而是非平衡的！

我们称如今不是平衡态的光子的所谓温度，其实就是在黑体谱中找到的温度. 在推导这个分布的时候，我们其实隐含了一个假设，即光子的散射是一个弹性散射，散射后能量不会变化.  (Thomson 散射)

我们一般怎么区分康普顿散射和汤姆孙散射，一般是以能量决定的. 由于电子的静质量在 $0.5\text{ MeV}$，而光子在 $0.3\text{ eV}$，所以光子的能量远远小于电子静质量，此时是无法体现光子的粒子性，光子的频率也是不改变的 —— 所以我们的假设合理. 

### 利用 CMB 估算 $\Omega_R$

现在我们暂且先接受宇宙微波背景辐射是光子. 

先计算能量密度：
$$
\rho_{\gamma}=\int_0^\infty h\nu n(\nu)\text{d}\nu=a_BT^4
$$
写出所谓的质量密度就有：
$$
\rho_{\gamma_0}=\frac{a_B T^4}{c^2}=4.64\times 10^{-34}\text{ g/cm}^2
$$
因此：
$$
\Omega_{\gamma}=\frac{\rho_{\gamma_0}}{\rho_{cr}}=2.47\times 10^{-5}h^{-2}
$$
今天的辐射，还要考虑到中微子：
$$
\begin{aligned}
&\rho_{R,0}=\rho_{\gamma,0}+\rho_{\nu,0}\\\\
&=\frac{1}{2}a_Ba_BT^4\cdot[2(\text{polarization})+3(3\text{ kinds of nuclears})\times2\times1(1\text{ kind of spin})\times\\
&\quad\,\,\frac{7}{8}(\text{difference of boson \& fermion})\times(\frac{4}{11})^\frac{4}{3}(\text{difference of temperature}))]\\\\
&=7.80\times10^{-34}
\end{aligned}
$$
那么光子密度则是：
$$
n_{\gamma,0}=\int_0^\infty n(\nu)\text{d}\nu=\frac{30\zeta(3)}{\pi^4}\frac{a_B T^3}{k_B}=410 \text{ photons/cm}^2
$$
来估算核子数密度：
$$
n_{B,0}=\frac{\rho_{B,0}}{m_N}=\frac{\Omega_B \rho_{cr}}{m_N}=\frac{3\Omega_BH_0^2}{8\pi Gm_N}=1.03\times10^{-5}\Omega_B h^2 \text{ nuclears/cm}^3
$$
这里，核子主要是质子和中子，可见它是非常少的. 

为什么要计算质子和中子的数密度？这是因为在宇宙的膨胀过程中光子和核子都是遵从于$a^{-3}$变化的，因此两者之比是个常数：
$$
\frac{n_\gamma}{n_B}=\frac{n_{\gamma,0}}{n_{B,0}}=3.65\times 10^7(\Omega_Bh^2)^{-1}
$$
把 $\Omega_B$ 用 $\Omega_M$ 估计，会发现这个数非常小. 

之前对于光子，我们知道温度是随着 $a^{-1}$ 变化的，在这里重子温度 $T$ 则满足正比于 $a^{-2}$ 的变化 (这里是用绝热方程估计).

对于重子，我们如果使用 Boltzmann 分布来估计之：
$$
n(p)\text{d}p\propto e^{-\frac{p^2}{2mk_BT}}
$$
可以得到：
$$
p\propto a^{-1}
$$
（这个证明我们略去）
$$
T\propto a^{-2}
$$
现在我们想问，在退耦之前，光子和重子处于热平衡，谁会占主导呢？答案是光子，在这里光子的数量是极端多的，并且重子的质量主要来自于它的静质量，因此就变化而言，还是光子占主导. 

### 估算退耦温度

下面我们都是用估计的方式.

光子被电子散射的速率：
$$
\Lambda_{\gamma}=\sigma_T n_e c
$$
这里 $\sigma_T$ 是汤姆逊散射截面，用化学的角度估算：
$$
\begin{aligned}
n_{e}&=0.88 n_{B}=0.88n_{B,0}\left(\frac{a}{a_0}\right)^{-3}=0.88n_{B,0}\left(\frac{T}{T_{\gamma,0}}\right)^3\sigma_T c\\
&=1.97\times 10^{-14}\text{ s}^{-1}(\Omega_B h^2)\left(\frac{T}{T_{\gamma,c}}\right)^3
\end{aligned}
$$
能量转移速率：
$$
\Gamma_{\gamma}=\frac{\Delta E}{k_B T}\Lambda_{\gamma}
$$
在散射的时候动量变化有：
$$
\Delta p =\frac{k_B T}{c}
$$
能量有：
$$
\Delta E=\frac{(k_B T)^2}{m_e c^2}
$$
宇宙膨胀速率，我们假设以辐射为主：
$$
H=\frac{\dot a}{a}=H_0\sqrt{\Omega_R(T/T_{\gamma,0})^4}=2.1\times10^{-20}\text{ s}^{-1}\left(\frac{T}{T_{\gamma,0}}\right)^2
$$
根据前面我们的理论，当 $\Gamma_{\gamma}<H$，光子与重子退耦：
$$
T_{\text{decoupling}}=1.5\times10^{-4}(\Omega_B h^2)^{-\frac{1}{2}}=10^{-5}\text{ K}=1\text{ eV}
$$
上面有些地方的假设是非常简单的，因此这个退耦温度并不准确. 











