---
title: Lesson 3 稳态 Schrödinger 方程
permalink: /quantum-mechanics/lesson-3-stationary-states/
createTime: 2025/09/22 15:33:02
---
这周开始会有作业了.

引进波动 / 波粒二象性来研究物理，实际上可以更好地处理「无穷大」的问题. 量子力学的经典极限就和经典力学一样，量子力学也有边界，那些是量子力学也无法处理的「无穷大」.

用统计力学的观点来理解波函数，波函数的概率描述的是一个系综的概率. 另外，观测到粒子的概率也和观测者的分辨率有关. 单粒子的波函数实际上是这样的叠加：
$$
\psi(x,t)=\int\psi(x',t)\delta(x-x')\text{d}x
$$
也就是按照粒子在不同空间点出现的波函数来分解. 如果可以这样分解，意味着这个单粒子系统是「相干」的.

在课堂上我们可以说我们推导出 Schrödinger 方程，或者说进行量子化. 具体而言，我们知道坐标算符和动量算符的对易是
$$
[x,p_x]=xp_x-p_xx=\text{i}\hbar
$$
在经典中这对共轭变量的 Poisson 括号是零，

> 经典中，共轭变量的定义是
> $$
> \frac{\partial\mathcal{L}}{\partial q_i}=p_i
> $$
> 这样的 $p_i,q_i$. 其中 $\mathcal{L}$ 是 Lagrange 函数.

把经典的 Poisson 括号变成不对易的就是一种量子化，用到的方法是将物理量变成算符.

> 可以看出，量子化也是满足经典极限的，这个对易子的差异只有 $\hbar$ 量级，当 $\hbar\to0$ 时就回归到经典的问题.

---

## 不含时的 Schrödinger 方程

Schrödinger 方程是偏微分方程，含时情况下其实并不好解. 因此我们先来研究不含时的 Schrödinger 方程，也就是稳态的 Schrödinger 方程.

Content：

- STATIONARY STATES
- THE INFINITE SQUARE WELL
- THE HARMONIC OSCILLATOR
- THE FREE PARTICLE
- THE DELTA-FUNCTION POTENTIAL
- THE FINITE SQUARE WELL

今天先从 stationary states 开始说起.

含时的 Schrödinger 方程是
$$
\text{i}\hbar\frac{\partial\psi(x,t)}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^2\psi(x,t)}{\partial x^2}+V(x,t)\psi(x,t)
$$

> 如果大家不理解为什么会有 $\text{i}$，可以回忆一下电子电路里的复阻抗，这是一种计算的手段，让我们可以用线性的方法来解决量子力学问题.

目前的目标是给定势能分布 $V(x,t)$ 和初始条件来求解 $\psi(x,t)$ 的分布. 如果学过数理方程，可以用 Green 函数来做，假设在 $x_0,t_0$ 这样的一个点有点分布的 $\psi=\delta(x-x_0)\delta(t-t_0)$，考虑它的时间演化，得到一个解；再利用叠加原理进行积分即可.

现在用另外的手段，也就是分离变量法，考虑 ansatz 为 $\varPsi(x,t)=\psi(x)\phi(t)$，用到的两个导数分别是
$$
\frac{\partial\varPsi}{\partial t}=\psi(x)\frac{\text{d}\phi(t)}{\text{d}t}\,,\quad\frac{\partial^2\varPsi}{\partial x^2}=\phi(t)\frac{\text{d}^2\psi(x)}{\text{d}x^2}
$$
方程变为
$$
\frac{\text{i}\hbar}{\phi(t)}\frac{\text{d}\phi}{\text{d}t}=-\frac{h^2}{2m}\frac{1}{\psi}\frac{\text{d}^2\psi}{\text{d}x^2}+V(x)
$$
现在 LHS 不含坐标、RHS 不含时间，所以这两边都应该等于一个常数，我们将这个常数确定为 $E$.

::: tip

大家现在都不肯提问，但是要记住，make a fault of youself，多年以后大家不会记得你错了什么，但是会因为你留下的一些特点而对你产生印象.

:::

解得：
$$
\phi(t)=e^{-\text{i}Et/\hbar}
$$
这里「归一化」了一下，把振幅取为 $1$，这个可以通过修改坐标函数的倍数来修正. 剩下的坐标部分继承了 Schrödinger 的名字 (因为稳态下的含时部分实在太简单). 最终的稳态波函数应当是
$$
\varPsi=\psi(x)e^{-\text{i}Et/\hbar}
$$
实践中，稳态问题只需要直接解不含时方程来求解. 如果定义 Hamiltonian，
$$
\hat{H}=-\frac{\hbar^2}{2m}\frac{\text{d}^2}{\text{d}x^2}+V(x)=\frac{\hat{p}^2}{2m}+V(x)
$$
那么不含时方程应该写成 $\hat{H}\psi=E\psi$.

::: warning

这里，因为 $\hat{p}$ 的各个分量实际上是不对易的，所以很有可能动能会出现对角项，也就是 $\hat{p}_x\hat{p}_y$ 的项，这是在考题中很有可能出现的.

还有，要严格区分「算符」和「物理量」，在函数的括号里面的是物理量，其他出现在 Schrödinger 方程里面的应该是算符. 为了避免混淆，大家要在写算符的时候在上面加一个「 $\hat{}$ 」.

:::

能量平均值：
$$
\braket{H}=\int\psi^*\hat{H}\psi\text{d}x=E
$$
非含时 Schrödinger 方程得到的解是定态解，也是能量本征态 (本征值是能量)，这样的解的能量是没有涨落的. 利用叠加原理，可以得到任意的叠加态：
$$
\varPsi(x,0)=\sum^\infty_{n=1}c_n\psi_n(x)\,,\quad\varPsi(x,t)=\sum^\infty_{n=1}c_n\psi_n(x)e^{-\text{i}E_nt/\hbar}
$$
 这构成一个波包. 如果大家学过无线电的带宽原理可能会更加了解这一个波包的含义.

/Example/ (双态)

> 一个非常经典的例子是两个态的叠加，稳态的波函数是
> $$
> \varPsi(x,t)=c_1\psi_1(x)e^{-\text{i}E_1t/\hbar}+c_2\psi_2(x)e^{-\text{i}E_2t/\hbar}
> $$
> 它代表的概率会有时间上的干涉项：
> $$
> |\varPsi|^2=c_1^2\psi_1^2+c_2^2\psi_2^2+2c_1c_2\psi_1\psi_2\cos\left(\frac{E_2-E_1}{\hbar}t\right)
> $$
> 因为只有两种可能的能量，所以
> $$
> |c_1|^2=\eta\,,\quad|c_2|^2=1-\eta
> $$
> 能量的均值是 $\braket{E}=\eta E_1+(1-\eta)E_2$. 这是在以能量为「坐标」的空间中谈论的. 但是上面的 $|\varPsi|^2$ 代表的是在时间和空间为「坐标」的空间中的某点找到这个粒子的概率.
>
> 这个二能级系统可以写成 $(c_1\ket{0}+c_2\ket{1})$，$n$ 个二能级系统可以有 $2^n$ 个状态，这意味着量子系统在未观测的状态下，能够储存巨量的信息. 大约 56 个二能级系统就能够表述整个宇宙量级的信息.
>
> 虽然不能观测，但是如果能够让这些系统产生干涉，可以让这些数据进行计算，然后使得正确答案的振幅变得非常大，最终得到量子计算的答案.
>
> 量子储存的另一个好处是优化搜索算法，就像同时拥有英汉字典和汉英字典一样，只用一个数据库可以用两种方式查询.