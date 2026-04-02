---
title: Lesson 11 配分函数
createTime: 2026/04/02 20:48:23
permalink: /statistical-mechanics/lesson-11/
---
单原子分子气体的能态密度：
$$
\frac{p_x^2+p_y^2+p_z^2}{2m}+U(x,y,z)=\varepsilon
$$
其中势能就是无限深势阱，表示容器. 在容器内做积分，得到
$$
\Omega(\varepsilon)=\int_{\leqslant\varepsilon}\text{d}\omega = \frac{4}{3}\pi(2m\varepsilon)^{3/2}V
$$
这是总态，因此态密度为
$$
g(\varepsilon) = h^{-\gamma}\frac{\text{d}\Omega(\varepsilon)}{\text{d}\varepsilon} = \frac{2\pi V}{h^3}(2m)^{3/2}\sqrt{\varepsilon}
$$
另一种计算方式是，利用能级表达式，
$$
\varepsilon_n=\frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2),\quad n\equiv n_x+n_y+n_z
$$
考虑在 $(n_x,n_y,n_z)$ 空间中的 $1/8$ 球体，体积为
$$
G(\varepsilon) = \frac{1}{8}\cdot\frac{4}{3}\pi\left(\frac{8mL^2\varepsilon}{h^2}\right)^{3/2} = \frac{4}{3}\pi(2\pi\varepsilon)^{3/2}\cdot\frac{V}{h^3}
$$
求微分仍然是 $g(\varepsilon)$. 考虑自旋简并度 $g_s=2s+1$，在非相对论情况下我们有
$$
g(\varepsilon)\text{d}\varepsilon = g_s\frac{2\pi V}{h^3}(2m)^{3/2}\sqrt{\varepsilon}\text{d}\varepsilon
$$
::: tip

不建议把这个式子背下来，因为重要的是会推导，考试可能会考不同维数的、相对论情况下的等等.

:::

理想气体满足非简并条件 $e^\alpha\gg1$，因此满足半经典分布，考虑分子的质心平动和内部运动两个独立自由度，$\varepsilon_a=\varepsilon_t+\varepsilon_i$，$\omega_a=\omega_t\omega_i$. 配分函数是两者的结合，
$$
Z(\beta,v)=\sum_a\omega_ae^{-\beta\varepsilon_a} = \sum_t\omega_te^{-\beta\varepsilon_t}\sum_i\omega_ie^{-\beta\varepsilon_i} = Z_t(\beta,v)Z_i(\beta)
$$
因此粒子数：
$$
N=e^{-\alpha}Z(\beta,V)
$$
能量：
$$
E =-N\frac{\partial\ln Z}{\partial\beta} = -N\frac{\partial\ln Z_t}{\partial\beta}-N\frac{\partial\ln Z_i}{\partial\beta}=E_t+E_i
$$
压强 (和内部自由度无关)：
$$
p = \frac{N}{\beta}\frac{\partial\ln Z}{\partial V}=\frac{N}{\beta}\frac{\partial\ln Z_t}{\partial V}
$$
熵：
$$
\begin{aligned}
S_t &= Nk_B\left(\ln Z_t-\beta\frac{\partial\ln Z_t}{\partial\beta}\right)+Nk_B(1-\ln N)\\\\
S_i &= Nk_B\left(\ln Z_i-\beta\frac{\partial\ln Z_i}{\partial\beta}\right)
\end{aligned}
$$
其中平动自由度多的一项来源于全同粒子效应.

这里可以直接计算配分函数：
$$
Z_t=\frac{1}{h^3}\int e^{-\beta\varepsilon_t}\text{d}\omega = \frac{V}{h^3}(2\pi mk_BT)^{3/2}
$$
利用 $N$ 表达式，得到
$$
e^\alpha = \frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2}
$$
这个值比较典型的在 $10^5$ 左右，远远大于 $1$，因此满足非简并条件，分布是半经典的. 用现在这个配分函数，可以写出熵的 Sackur - Tetrode 方程
$$
S_t=Nk_B\ln\left[\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2}\right]+\frac{5}{2}Nk_B
$$

> 这里没有考虑全同粒子效应，因此是一个经典的方程，只是中间考虑到了量子效应，所以可以解决 Gibbs 佯谬.
>
> 不过这个方程是 1910 年提出的，那时甚至没有全同粒子的概念，这件事确实比较神奇.

Maxwell 速度分布律：积分广义坐标，得到按动量的分布，
$$
\frac{\text{d}p_x\text{d}p_y\text{d}p_z}{h^3}\int e^{-\alpha-\beta\varepsilon_t}\text{d}x\text{d}y\text{d}z
$$
其中，
$$
e^\alpha = \frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2},\quad \int e^{-\beta U}\text{d}x\text{d}y\text{d}z =\int\text{d}x\text{d}y\text{d}z = V
$$
结果为
$$
\frac{N}{(2\pi mk_BT)^{3/2}}e^{-\beta(p_x^2+p_y^2+p_z^2)/(2m)}\text{d}p_x\text{d}p_y\text{d}p_z
$$
换成按照速度的分布律，
$$
f(\vec{v})\text{d}\vec{v} = N\left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\left(-\frac{v_x^2+v_y^2+v_z^2}{2mk_BT}\right)\text{d}v_x\text{d}v_y\text{d}v_z
$$

> 满足归一化条件
> $$
> \int f(\vec{v})\text{d}\vec{v} = n
> $$
> 换成球坐标，积分角度之后获得速率分布律，
> $$
> F(v)\text{d}v=4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}e^{-mv^2/(2k_BT)}
> $$
> 最可几、平均、方均根速率分别是
> $$
> v_m=\sqrt{\frac{2k_BT}{m}},\quad \overline{v}=\sqrt{\frac{8k_BT}{\pi m}},\quad \sqrt{\overline{v^2}}=\sqrt{\frac{3k_BT}{m}}
> $$

