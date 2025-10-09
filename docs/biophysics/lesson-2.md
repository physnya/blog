---
title: Lesson 2 生物系统的物理基础
permalink: /biophysics/lesson-2-physics-basis/
createTime: 2025/09/23 20:57:13
---
10.14 的课调到 10.12 晚.

## Physical Basis of Living Systems

首先我们还是来了解一些基本的前置知识，是一些量级.

以 *E.coli* (大肠杆菌) 为例，尺度大约是 $1\times2\,\mu\text{m}^2$，质量约是 $6.22\times10^{-27}\text{ kg}$，能量是
$$
1k_BT=4.1\text{ pN}\cdot\text{nm}=4.1\times10^{-21}\text{ J}=25\text{ meV}
$$
量级，受力量级在 $\text{pN}$ (也就是热效应就会造成感知系统的响应). 蛋白数量约是 $3\times10^6$ 量级，核糖体个数约是 $2\times10^4$ 个.

会用到一个浓度单位：$1\text{ M}=1\text{ mol/L}$. 有 $1\text{ molecule}/E.coli = 2\text{ nM}$. 细胞内部是非常拥挤的，大分子几乎填满了整个细胞.

真核细胞大约在 $10\,\mu\text{m}$ 量级，DNA 碱基是 $0.1\text{ nm}$，盘起来的 DNA 是 $10\text{ nm}$ 量级. 细胞之间的量级其实差异很大，比如人的坐骨神经细胞甚至长达一米.

细胞内部有很多结构，主要的结构是内质网，是很多层叠起来围在细胞核周围的一种结构. 假设内质网的两面间距是 $d$，填满的体积是 $4\pi/3 \cdot(R^3_{\text{out}}-R^3_{\text{in}})$，可以算出内质网的表面积为
$$
A=4\pi/3 \cdot(R^3_{\text{out}}-R^3_{\text{in}})/d=1.5\times10^4\mu\text{m}^2
$$
这是一个非常大的面积.

生物上遇到的时间尺度，从一个化学键的存在时间 ($\mu\text{s}$ 量级) 到红杉的年龄 (几千年) 都有，但是我们喜欢的研究范围一般是秒到天的量级，比如果蝇的变态发育周期是几个小时、大肠杆菌运动经过自己的体长用时几毫秒.

> 大肠杆菌细胞的分裂周期分为 DNA 复制和蛋白质制造过程. 这两个过程一个是用复制酶来完成、一个是核糖体的合成. DNA 复制过程如果用一个酶来完成可能需要 $80\text{ min}$，但是营养很好的时候 $20\text{ min}$ 大肠杆菌就能复制一代.
>
> 这是因为 DNA 复制可以并行复制，但是蛋白质是主要的限速步骤，核糖体的数量是有上限的.
>
> 当然这是细菌 (原核生物)，但是真核细胞有很多受控的机制来检查分裂是否出错 (不受控制的真核细胞分裂就是癌症！)，所以这样的过程是大量信号分子来相互作用的复杂过程.

生物节律行为：绝大部分高等动物和一部分细菌都有这样的生物节律，一个来源是 DNA 的表达和时间有关系，另外在时间不同的情况下不同蛋白质的表达也有差异 (这是在蓝藻中发现的).

---

### Life in water

下面是比较硬核的部分了. 生命是在水中产生的，所以我们用流体力学 (一个「场」的视角) 来思考问题.

在流体中的全微分：
$$
\frac{\text{D}f(t,x,y,z)}{\text{D}t}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x_i}\frac{\partial x_i}{\partial t}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x_i}v_i=\frac{\partial f}{\partial t}+\nabla f\cdot\vec{v}
$$
质量守恒就是将 $f=V\rho$ 代入：
$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\vec{v})=0
$$
动量守恒：
$$
\frac{\text{D}(\rho v_i)}{\text{D}t}=\rho\frac{\partial v_i}{\partial t}+\rho v_j\frac{\partial v_i}{\partial x_j}=f_i+\partial_j\sigma_{ij}
$$
(这里假设 $\rho$ 是不变的)

> RHS 代表各个方向的力，其中 $f_i$ 表示作用在体积元上的力密度，$\partial_j\sigma_{ij}$ 是作用在表面上的切向力密度 (有 3 个面，每个面上有 3 个方向的作用力，所以是 $3\times3$ 的矩阵).

上面那个方程差了一个本构方程 (描述力和体积元的形变)，所以不能解出来. 于是我们需要了解流体的黏性是怎样表达的. 对于一个层流系统，如果在垂直速度方向上没有梯度就不会有黏滞力，所以这样的力正比于速度梯度：$\sigma_{ij}\propto\partial_j u_i(x_j)$. 有
$$
\partial_xv_z(x+\Delta x)-\partial_xv_z(x)\approx\partial^2_xv_z(x)
$$
得到关于速度场的 Navier-Stokes 方程：
$$
\rho\frac{\partial v_i}{\partial t}+\rho v_j\frac{\partial v_i}{\partial x_j}=-\frac{\partial p}{\partial x_i}+\eta\frac{\partial^2 v_i}{\partial x_i^2}
$$
这是一个非线性方程 (LHS 是惯性项，其中的第二项非线性). 为了做近似，我们来估算这个非线性项的量级 ($L$ 是线度)：
$$
\rho v\partial_xv\approx\rho v\frac{v}{L}=\frac{\rho v^2}{L}\,,\quad\eta\partial^2_xv\approx\frac{\eta v}{L^2}
$$
两者的比：
$$
\frac{\rho v\partial_xv}{\eta\partial_x^2v}\approx\frac{\rho vL}{\eta}
$$
这正是 Reynolds 数 $\mathcal{Re}$，表征惯性项和黏性项哪个更重要，对于细胞尺度而言这个值只有 $10^{-5}$ 量级，所以几乎没有惯性，而且流场是非常好的层流.

::: tip

关于层流效应的好处，老师放了一个视频，在几乎全是层流的系统中倒入三种颜料并混合，反过来搅拌时出现了几乎是倒放的效果，三种颜色能够完全分离.

:::

在极低 Reynolds 数的世界里，Galileo 的说法似乎不再适用，Aristotle 的说法反而占了上风：「力是维持物体运动的原因」. 有一个所谓的「扇贝定理」，说的是一个极微小尺度的扇贝，它快速闭合自己的壳，能够往前移动一段距离；但是在张开壳的过程中就会因为黏滞和动量守恒移动回来. 所以生物的运动必须有非对易的成分产生对称性破缺，使得生物产生宏观运动，就比如精子的鞭毛是旋转运动的.

细菌鞭毛在横截面和边缘面的两个方向的摩擦系数是不同的，这就产生了细菌的宏观运动.

## Statistical Physics and Chemical Reactions in Shorts

::: danger

我们要用一种「邪修」的方法来讲本来应该要讲两个学期的统计力学.

:::

在生物中我们谈论概率主要是因为生物中的化学反应都是有概率的，这里的微观态是一个 RNA 聚合酶占据了一个 DNA 的结合位点；宏观态是有多少个 RNA 聚合酶占据了 DNA 的结合位点.

我们要找到所有可能的概率分布下，最有可能出现的概率分布. 用 Shannon 熵来描写这些概率分布出现的可能性. 因为很多信息不知道，所以我们只能「知之为知之，不知为不知」. Shannon 熵写成
$$
S=-\sum_ip_i\ln p_i
$$

> 我们现在不太想说明这个式子是怎么来的，但是想必大家都知道我们的要求是这个函数具有可加性、表征系统的概率分布等等条件，这是唯一的选择.

现在要最大化这个熵，用的是 Lagrange 乘子法：
$$
\max S'=-\sum_ip_i\ln p_i-\lambda\left(\sum_ip_i-1\right)
$$
Lagrange 乘子法要求
$$
\frac{\partial S}{\partial p_i}=-(1+\ln p_i)-\lambda\,,\quad \frac{\partial S}{\partial \lambda}=\sum_ip_i-1=0
$$
这说明 $p_i=1/N$ (等概率). 这是符合直觉的，因为一旦某个态的概率更高，就意味着我们获得了有关的信息.

如果现在我知道了更多信息：系统的平均能量 $\braket{E}=\sum_ip_iE_i$，这时候条件变了，Lagrange 函数变成
$$
S'=-\sum_ip_i\ln p_i-\lambda\left(\sum_ip_i-1\right)-\beta\left(\sum_ip_iE_i-\braket{E}\right)
$$
计算得到分布是
$$
p_i=\frac{e^{-\beta E_i}}{\sum_ie^{-\beta E_i}}
$$
当然现在我们不知道 $\beta$ 了，但是如果用一些分布代进去算，可以知道 $\beta=1/k_BT$，这就是 Boltzmann 分布. 上式的分母写成 $Z$，称为配分函数.

对于一个宏观态 $Z_I=\sum_{i\in I}e^{-\beta E_i}$，概率是 $p_I=Z_I/Z$.

不同的能量形式可以被代入上面的分布，得到不同的 Boltzmann 分布关系.

若 $Z_I=M_Ie^{-\beta E_I}$，可以写成
$$
Z_I = e^{-\beta(E_I-k_BT\ln M_I)}=e^{-\beta(E_I-TS)}\,,\quad F_I=E_I-TS_I=-k_BT\ln Z_I
$$
这是自由能. 那么 $p_I=Z_I/Z=e^{-\beta(F_I-F_0)}$，$F_0=-k_BT\ln Z$. 很容易想象，系统最终演化应该会到一个自由能最低的态，得到 $F_0$ 这个态. 最小自由能的态是平衡态.

除了自由能 (Helmholtz 自由能)，还有 Gibbs 自由焓，
$$
G=E-TS+\sum_iX_ix_i
$$

> $X_i$ 是广义力、$x_i$ 是广义位移.

一个技巧是
$$
-\frac{\partial(\ln Z)}{\partial\beta}=\braket{E_i}
$$
同样地，如果是 Gibbs 自由焓的情况，$G=-k_BT\ln Z$，$Z=\sum_i E_ie^{-\beta(E_i-fx_i)}$，那么
$$
\braket{x}=-\frac{\partial G}{\partial f}=\frac{1}{\beta}\frac{\partial(\ln Z)}{\partial f}\,,\quad\braket{f}=\frac{1}{\beta}\frac{\partial(\ln Z)}{\partial x}
$$

> 这里可以看出 $f$ 和 $x$ 是对易的，都是因为它们在指数上以乘积形式存在.