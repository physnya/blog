---
title: Lesson 2 Equation of State
createTime: 2026/03/05 21:48:23
permalink: /star-planet/lesson-2-equation-of-state/
---
HR 图的纵坐标是光度，横坐标是恒星的温度. 一般来说，从左上到右下的一条线上的恒星都被称为主序星 (main sequence)，右上角一般是所谓的红巨星，左下角是白矮星.

对于天文学家来说，有一个完全不同的元素周期表，在这个图中，H 和 He 占了很大比例，剩下的元素全部被称为「metal」. 在时间上，一般把恒星分为 population III、II、I 三代，III 是大爆炸之后的第一代，它们完全不含 metal，而我们的太阳属于 I 代，其中已经含有大量 metal.

## Equation of State

压力、数密度和温度的方程. 通过量纲分析的思路，$P$ 的量纲是能量密度，$n$ 的量纲正是 $\text{L}^{-3}$，$k_BT$ 合在一起的量纲也是能量，于是 E.o.S 应该是下面的某种形式：
$$
P\sim nk_BT
$$
和理想气体对比，我们可以说 $p=nk_BT$ 就是理想的 E.o.S. 现在为了计算与之抗衡的另外一个量 (简并压)，我们引入量子力学的因素，$[h]=\text{ET}$，$[m_e]=\text{ET}^2/\text{L}^2$，用这些量来构造一个方程，有
$$
P_e \sim\frac{h^2}{m_e}n_e^{5/3}
$$
这个简并压是非相对论的. 这里引入 $[hc] = \text{EL}$ 来替换掉 $h$，相对论性的方程为
$$
P_e \sim hc n_e^{4/3}
$$

---

更严格的计算：为了积分整个压强，在一个面上面考查粒子的碰撞，动量变化为
$$
\Delta p = \frac{1}{2}\cdot2p_x\cdot nv_x\Delta t\cdot A
$$
压强
$$
P_e = \frac{1}{A}\frac{\Delta p}{\Delta t} = p_xv_xn = \frac{1}{3}pvn
$$
::: tip

这里，我们认为三方向的 $p_iv_i$ 是均分的，因此最后出现了一个 $1/3$.

:::

更加笼统的一个式子是
$$
P_e = \int\frac{1}{3}f(p)pv_p\text{d}p
$$
这被称为 Pressure Integral. 对于普通的粒子，其 Boltzmann 分布是
$$
f(p) = n\cdot \frac{4\pi p^2}{(2\pi mk_BT)^{3/2}}\exp\left(-\frac{p^2}{2mk_BT}\right)
$$
但是电子的分布应该用量子力学计算，考虑一个相空间格子里面放 $2$ 个电子 (自旋简并)，则其数密度：
$$
n_e = \int\frac{2}{h^3}\text{d}^3\vec{p} = \int\frac{8\pi}{h^3}p^2\text{d}p = \int f(p)\text{d}p
$$
于是 $f(p)=8\pi p^2/h^3$. 定义 Fermi 动量 $p_F$，也就是最高的电子动量，$0\to p_F$ 积分得到
$$
n_e = \frac{8\pi}{3h^3}p_F^3\Longrightarrow p_F =\left(\frac{3n_eh^3}{8\pi}\right)^{1/3}
$$
对于非相对论情况，
$$
P^{\text{NR}}_e = \frac{1}{3}\int\frac{8\pi}{m_eh^3}p^4\text{d}p =\frac{1}{5m_e}\left(\frac{3h^3}{8\pi}\right)^{2/3}n_e^{5/3}\propto n_e^{5/3}
$$
和量纲分析的结论是相符的；相对论情况 ($v_p\to c$)，
$$
P^{\text{R}}_e = \frac{1}{3}\int\frac{8\pi c}{3h^3}p^3\text{d}p =\frac{c}{4}\left(\frac{3h^3}{8\pi}\right)^{1/3}n_e^{4/3}\propto n_e^{4/3}
$$
也和量纲分析的结果相同.

::: tip

我们做量纲分析的时候假设了温度为零，但是在现实中这个问题是 temperature - dependent，我们并不能说这个结果很好或者很符合现实.

:::

## Mean Mol Weight

如果是一个 H 原子，那么 1 个粒子对应着 1 单位原子质量；但是现在离子化了，那么 2 个粒子 (1 个质子和 1 个电子) 对应 1 单位原子质量.

现在考虑 He 原子，没有离子化的时候是 1 对 4；离子化之后是 3 对 4.

如果是一个任意的 metal $Z$，质量差不多是 $2Z$，离子化之后有 $Z+1$ 个粒子，当 $Z\gg1$ 时平均质量是 $2$.

一个平均密度的等式是，
$$
n = \sum_in_i\Longrightarrow\frac{\rho}{\mu m_u} = \sum_i\frac{\rho_i}{\mu_im_u}
$$
如果把比例记作 $w_i$，那么最终得到平均 mol 质量为 (针对 full ionized gas)
$$
\frac{1}{\mu} = \sum_i\frac{w_i}{\mu_i} = 2w_{\text{H}}+\frac{3}{4}w_{\text{He}}+\frac{1}{2}w_{\text{metal}}
$$

> 在太阳中心的完全离子化气体中，三个占比大约是 $75\%$，$23\%$，$2\%$，计算平均 mol 质量.
>
> ---
>
> 很容易算出是 $0.60\text{ g/mol}$ 左右.
>
> ::: warning
>
> 这里插一句，我们只需要几个位数就行了，不要拿出 CASIO 上的十位有效数字.
>
> :::