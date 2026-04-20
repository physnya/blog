---
title: Lesson 16 习题课
createTime: 2026/04/17 09:47:21
permalink: /statistical-mechanics/lesson-16/
---
## 第七次作业

### 配分函数

* 离散的能量：$Z=\displaystyle{\sum_ig_ie^{-\beta\varepsilon_i}}$ (直接相加)
* 准连续 (比如理想气体)：$Z=\displaystyle{\frac{1}{h^3}\int e^{-\beta\varepsilon(\vec{x},\vec{p})}\text{d}^3\vec{x}\text{d}^3\vec{p}}$ (相空间体积积分)

由配分函数得到物理量，
$$
\begin{aligned}
&E = \sum_i\varepsilon_ig_ie^{-\beta\varepsilon_i}=-\frac{\partial\ln Z}{\partial\beta} \\\\
&S = -k_B\sum_ip_i\ln p_i = k_B\left(\ln Z-\beta\frac{\partial\ln Z}{\partial\beta}\right),\quad p_i=\frac{e^{-\beta\varepsilon_i}}{Z}\\\\
&F = E-TS = -k_BT\ln Z
\end{aligned}
$$
一般来说，记 $F$ 和 $E$ 更方便一点. (对气体来说) 等容热容和力学量：
$$
\begin{aligned}
&C_V = \left(\frac{\partial E}{\partial T}\right)_V = k_B\beta\frac{\partial^2\ln Z}{\partial\beta^2}\\\\
&p = \frac{1}{\beta}\left(\frac{\partial\ln Z}{\partial V}\right)_T
\end{aligned}
$$
化学势为
$$
\mu = -\frac{1}{\beta}\left(\frac{\partial\ln Z}{\partial N}\right)_{T,V}
$$

### /Problem/ (7.20)

> 求 Einstein 固体熵.

需要了解的量子力学内容：

* 振子能级 $\varepsilon_n=\displaystyle{\left(n+\frac{1}{2}\right)\hbar\omega}$

* 自旋 $(j)$ 粒子的磁量子数 $m_j=-j,-j+1,\cdots,j-1,j$ (共 $2j+1$ 个)，磁矩
  $$
  \mu=g\mu_B,\quad \mu_z=m_j\mu_{z0}
  $$

对于这个题目，配分函数是
$$
Z(\beta) =\sum_{i=0}^\infty e^{-\beta(i+1/2)\hbar\omega} = \frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}}
$$
一般认为有 $3N$ 个振子自由度，所以 $Z_{\text{tot}}=Z^{3N}$，熵为
$$
S = 3Nk_B\left[-\ln(1-e^{-\beta\hbar\omega})+\frac{\beta\hbar\omega e^{-\beta\hbar\omega}}{1-e^{-\beta\hbar\omega}}\right]
$$

### /Problem/ (7.22)

> 以 $n$ 表示晶体中原子的密度，设原子的总角动量量子数为 $1$，磁矩为 $\mu$, 在外磁场 $B$ 下，原子磁矩可以有三个不同的取向，即平行、垂直、反平行于外磁场. 假设磁矩之间的相互作用可以忽略，试求在温度为 $T$ 时晶体的磁化强度 $M$，以及 $M$ 在弱场高温极限和强场低温极限下的近似值.

自旋为 $j=1$，能量是离散的，只有三个能级，得到配分函数
$$
Z = e^{-\beta\mu B}+1+e^{\beta\mu B}
$$
磁矩就是单位体积内磁矩的均值，
$$
M = \frac{n}{Z}\left[\mu e^{-\beta(-\mu B)}+0+(-\mu)e^{-\beta(\mu B)}\right]
$$
::: tip

另一种算法是，用配分函数求广义力，
$$
M = \frac{n}{\beta}\left(\frac{\partial\ln Z}{\partial B}\right)_T = \frac{2n\mu\sinh(\beta\mu B)}{1+2\cosh(\beta\mu B)}
$$
得到的结果是一样的.

:::

然后相应地做两个近似.

### /Problem/「补充」1

> 顺磁固体 $\text{Gd}_2 (\text{SO}_4)_3  (\text{H}_2\text{O})_8$ 的顺磁性来自 $\text{Gd}^{3+}$ 离子. $\text{Gd}^{3+}$ 离子基态的谱项为 $^8S_{7/2}(L=0,J=S=7/2)$，试求在高温和低温极限下 $\text{Gd}_2(\text{SO}_4)_3 (\text{H}_2\text{O})_8$ 的磁化率.

算 Lande 因子
$$
g = 1+\frac{\hat{J}^2+\hat{S}^2-\hat{L}^2}{2\hat{J}^2} = 1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)} = 2
$$
因此，磁量子数为 $-7/2,-5/2,\cdots,5/2,7/2$. 能级为 $E_m = mg\mu_B B$，配分函数：
$$
Z = \sum_me^{-\beta mg\mu_B B} = \frac{\sinh(4\beta g\mu_BB)}{\sinh(\beta g\mu_BB/2)}
$$
仍然是求磁化强度，
$$
M = \frac{N}{\beta}\left(\frac{\partial\ln Z}{\partial B}\right) = Ng\mu_B\left[4\coth(4\beta g\mu_BB)+\frac{1}{2}\coth\left(\frac{1}{2}\beta g\mu_BB\right) \right]
$$
磁化率是 $(\partial M/\partial B)$.

## 第六次作业

### Maxwell 分布律

对于理想气体，
$$
Z = \frac{1}{h^3}\int e^{-p^2/2mk_BT}\text{d}^3\vec{x}\text{d}^3\vec{p} = \frac{V}{h^3}\int_0^\infty4\pi p^2e^{-p^2/2mk_BT}\text{d}p
$$
单方向速度分布是
$$
f(v_i) = \left(\frac{m}{2\pi k_BT}\right)^{1/2}e^{-mv_i^2/2k_BT}
$$
速率分布是
$$
f(v) = 4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}e^{-mv^2/2k_BT}
$$
对于其他维度，速度分布律仍然是单方向速度分布的乘积，速率分布前面的系数是 $n-1$ 维体积.

### /Problem/ 7.11

> 表面活性物质的分子在液面上作二维自由运动，可以看作二维气体. 试写出在二维气体中分子的速度分布和速率分布，并求平均速率 $\overline{v}$、最概然速率 $v_m$ 和方均根速率 $v_s$.

对于二维分布，把速率分布的 $4\pi v^2$ 变为一维的「体积」即可，也就是 $2\pi v$.

### /Problem/ 7.17

> 气柱的高度为 $H$，处在重力场中，试证明此气柱的内能和热容量为
> $$
> U = U_0+Nk_BT-\frac{NmgH}{\exp\left(\frac{mgH}{k_BT}\right)-1},\,
> 
> C_V = C_V^0+Nk_B-\frac{N(mgH)^2\exp\left(\frac{mgH}{k_BT}\right)}{k_BT^2\left[\exp\left(\frac{mgH}{k_BT}\right)-1\right]^2}
> $$

在重力场中，$\varepsilon=mv^2/2+mgh$，分开计算势能和动能部分的配分函数积分，
$$
Z = \frac{1}{h^3}\int e^{-\beta mv^2/2}\text{d}^3p\int e^{-\beta mgh}\text{d}^3x
$$
可以得到一个重力场中理想气体的配分函数. 直接利用公式就获得答案.

## 第五次作业

相对论性和非相对论性的能动关系：
$$
E = pc,\quad E =\frac{p^2}{2m}
$$
态密度的计算方法是
$$
D(\varepsilon)\text{d}\varepsilon =\frac{V}{h^n}\underset{n-1}{\int\cdots\int}\text{d}^n\vec{p}
$$
代入不同的维度和是否相对论性即可.

## 第四次作业

> 根据粒子的自旋，对下列粒子进行分类，即判断它们是玻色子还是费米子：
>
> $^{12}\text{C}$ 原子；$^{13}\text{C}$ 原子；$\text{H}_2$ 分子；$\text{H}^-$ 离子；$^3\text{He}$ 原子；$^4\text{He}$ 原子；$\alpha$ 粒子；正电子；$^6\text{Li}^-$ 离子.

因为质子、电子和中子自旋都是 $1/2$，所以只要看这三个粒子数加起来是不是奇数即可，如果是奇数就是 fermion，反之为 boson.

## 第三次作业

### 相变

气液相变的热容存在突变，所以我们说这是一个一级相变；铁磁相变是从无磁场到有磁场的突变，为二级相变.

常用的几个偏导数关系：
$$
\left(\frac{\partial x}{\partial y}\right)_z\left(\frac{\partial z}{\partial x}\right)_y\left(\frac{\partial y}{\partial z}\right)_x =-1
$$

$$
\left(\frac{\partial x}{\partial z}\right)_y=\left(\frac{\partial x}{\partial z}\right)_w+\left(\frac{\partial x}{\partial w}\right)_z\left(\frac{\partial w}{\partial z}\right)_y
$$

