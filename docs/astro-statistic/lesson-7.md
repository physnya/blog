---
title: Lesson 7 Regression & Samplers
permalink: /astro-statistic/lesson-7-Regression-Samplers/
createTime: 2025/10/30 22:30:38
---
::: tip

## Quizzes

1. 给定背景信息 $I$，数据 $D$，模型 $M$ 和参数 $\theta$，则

   1. (参数的) 先验 (prior)：$P(\theta|MI)$

   2. 似然 (likelihood)：$P(D|\theta MI)$

   3. 后验 (posterior)：$P(\theta|DMI)$，我们大多数时间在找的东西.

   4. (模型的) 证据 (evidence)：$P(D|MI)$，可以给出 Bayes 因子，影响后验比.

   5. Bayes 定理：
      $$
      P(\theta|DMI)=\frac{P(\theta|MI)P(D|\theta MI)}{P(D|MI)}
      $$

2. 什么是冗余参数？

   我们不关心的某一个参数，它能够影响我们的问题，但是我们会把它积分掉.

3. 存在冗余参数 $\theta_n$ 存在的情况下写出我们关心的参数 $\theta_p$ 的联合后验分布
   $$
   P(\theta_p,\theta_n|DMI)
   $$
   则我们的 $\theta_p$ 后验可以由 marginalization 得到：
   $$
   P(\theta_p|DMI)=\int P(\theta_p,\theta_n|DMI)\text{d}\theta_n
   $$

4. 我们可以固定冗余参数来求我们关心的参数的后验，而不是积分冗余参数吗？

   不行，因为固定了一个参数，自由度变少了，我们最后得到的方差会变小，但是这相当于人为引入了一个不合理的先验，我们最后的先验会是错误的.

5. 我们如何总结性地描述一个多元的 Gauss 型后验分布？

   用 $n\sigma$ 这样的量来描述置信区间；需要协方差矩阵来描述变量之间的关联 (这已经包含了标准差)；还需要均值 / 中位数 / 峰值来固定这些量的位置 (当然 Gauss 型分布下这三者相等).

6. 怎么计算协方差矩阵？

   已知一组参数构成的向量 $\vec{\theta}$，协方差矩阵为
   $$
   C_{ij}=\braket{(\theta_i-\braket{\theta_i})(\theta_j-\braket{\theta_j})}
   $$

7. 怎么计算关联矩阵？
   $$
   \rho_{ij}=\frac{\braket{(\theta_i-\braket{\theta_i})(\theta_j-\braket{\theta_j})}}{\sigma_i\sigma_j}
   $$
   这个矩阵比协方差矩阵少了对角元的信息.

8. 判断下面的论断：

   1. 协方差矩阵是对称且半正定的. $\checkmark$
   2. 负的协方差表征负相关. $\checkmark$
   3. 协方差越大，关联越强. $\times$，因为这个量和单个变量的方差有关.
   4. ……

9. 什么是导出参数？

   不参与拟合，但是可以由拟合时用到的参数导出的参数.

10. 如果 $z=f(x,y)$，那么：

    1. $z$ 的后验可以直接由 $x,y$ 的联合分布导出. $\checkmark$
    2. $z$ 一定和 $x,y$ 相关. $\times$，因为有可能构造出 $\braket{xz}=\braket{x}\braket{z}$ 的情况.

11. 如何在同一个模型 $M$ 下合成两个不同的数据集 $D_1,D_2$？

    把似然乘在一起，因为直接乘后验的话，先验会乘两次.
    $$
    P(D_1,D_2|\theta MI)=P(D_1|\theta MI)P(D_2|\theta MI)
    $$

12. 把两个独立数据集合在一起的好处是什么？

    能够让参数变得更紧.

:::

乘法法则：
$$
\text{Likelihood}\times\text{Prior}=\text{Posterior}\times\text{Evidence}
$$
左边是输入，右边是输出.

*I do not fear computers. I fear the lack of them.*

::: right

—— Issac Asimov, 1962

:::

这句话放在今天还是适用的，我们不需要害怕 AI，而是应该害怕没有 AI.

## Monte - Carlo Integration

到极高维度的情况，最有效的数值积分方法就是 Monte-Carlo. 如果我想要求一个积分：
$$
\int_a^bf(x)\text{d}x
$$
做法应该是在 $x$ 轴上面均匀采样，得到一组函数值，把这些值取平均，得到
$$
=\sum_{n=1}^N\frac{f(x_n)}{N}\Delta x_n
$$
但是均匀撒点会导致在函数值比较低的地方也有不少的点，很多点被浪费掉了. 我们考虑的改进方法是，乘上一个分布函数之后再采样，归一化之后取平均，这是所谓的 importance sampling.

这时候，
$$
\int_a^bf(x)\text{d}x\approx\frac{1}{N}\sum_{i=1}^N\frac{f(X_i)}{q(X_i)}
$$
这个采样函数和被积分的函数相似度越高，我们的数值积分效率越高. 一般而言，我们会取 Gauss 函数作为采样函数.

这个方法的误差会是 $N^{-1/2}$ 衰减，同时很容易推广到高维.

## Markov - Chain Monte - Carlo

MCMC 算法使得我们的计算量更小、找到的先验更不容易偏离目标函数太远.

Markov-Chain 要求我们的每下一个点依赖于上一个点，所有的采样点会更趋向于概率密度高的位置.

采样时，我们按照被积分函数作为分布函数生成下一个点，其中生成在概率密度太低位置的点会被合理的舍弃掉；初始的一部分点被称为 burn-in，它们取决于初始位置，在之后的计算中可能会排除掉这些点. 计算接受比例：
$$
r=\frac{f(x')}{f(x_i)}\cdot\frac{q(x_i|x')}{q(x'|x_i)}
$$
我们只接受超过大概 $20\%\sim80\%$ 接受比的点，如果低于接受比，那么这个点就被舍弃，从上一个点重新生成.

回到上节课的那一个问题，Gaussian Spectral Line：
$$
N_i=A\exp\left[-\frac{(x-\mu_i)^2}{2\sigma_i^2}\right]
$$
MCMC 的模拟看起来很不错. 但是实际上这是今天要讲的最差的算法，缺点在于：

* 没有保证收敛

* Burn-in 不知道需要跑多久，如果不够久会导致存在 bias

* 实际上还是有很大一部分点是多余的

* 换参数之后，采样函数的形式也必须改，不是统一的

* 并行性不够好，同时采样的链太多效果不好

* 和最后取的 Gauss 函数宽度关系很大：

  如果 Gauss 函数取得太窄，采样点在很长一段时间都陷在一个「坑」里面出不来，需要很长的 burn-in；如果取得太宽，采样点一下就被拒绝了.

物理学家想出了一种改进，Hamiltonian Monte Carlo (HMC) 算法，考虑把后验分布作为一个等高线图，定义势能，Hamiltonian 为
$$
H(\theta,p)=U(\theta)+K(p)=U(\theta)+\frac{1}{2}\vec{p}^T\bold{M}^{-1}\vec{p}
$$
其中 $\bold{M}$ 是质量矩阵，是人为定义的. 每一次采样，都计算一次动力学方程，用标准的动力学模拟算法「leapfrog (蛙跳)」来算下一步应该走到哪里，
$$
\begin{aligned}
&\vec{p}\leftarrow\vec{p}-\frac{\varepsilon}{2}\nabla U(\theta)\\\\
&\vec{\theta}\leftarrow\vec{\theta}+\varepsilon\bold{M}^{-1}\vec{p}
\end{aligned}
$$
这样的算法可以实现一次「跑得很远」，避免被最开始的 Gauss 函数和分布函数的「坑」限制 (因为这样存在一种「惯性」)；同时也不会「跑偏方向」，因为由「受力」来驱动.

这种方式是目前几百维的问题最快的数值模拟方式. 但是问题在于，我们需要知道后验分布的导函数 (当然，现在我们已经学会了很多求导数的算法)，同时我们需要更多的参数 $\varepsilon$、$\bold{M}$ 等等.

这个方法在 1980s 由量子色动力学的研究者们提出，但是一直不温不火，直到 2011 年出现了 No-U-Turn Sampler (NUTS)，这种改进版的算法可以自己在行进的过程中决定参数 $\varepsilon$、$\bold{M}$ 等等应该取多少，而且在很多开源的包里面都已经内置了这些算法，比如 PyMC，Stan，NumPyro，etc.

一个例子：我们想要解我们周围的星系分布，从现在的状况反解原初的宇宙状况. 这个问题现在已经由 HMC 解决.

当然，HMC 必须要能求梯度的后验分布.

总结：MCMC 的输入是一个不归一化的 (log) 后验分布 (and gradient of HMC)，输出是一个由后验生成的采样.

## Nested Sampling

HMC 还是难以处理多峰问题，而且不能容易地计算出 evidence. 这个全新的算法 (04 年提出) 的目的就是想要计算 evidence，同时将后验作为一个合理的副产物输出.

> 天体物理学家 06 年就开始使用这个，现在为止这是天体物理领域最强大的算法之一.

这种算法的想法是：我们之前想要用采样点来表示这个分布，在参数空间的维度变大之后一定会变得更加复杂；所以我们想到采样空间中的等高线 (或者说超曲面)，而不是点，这时候我们不管多少维都变成一维的问题，同时把这些等高线 (面) 加起来就直接成为积分值.

定义 $X(\lambda)$ 是先验的分布 $\pi(\theta)$ 中大于 $\lambda$ 的部分：
$$
X(\lambda)=\int_{\mathcal{L}(\theta)>\lambda}\pi(\theta)\text{d}\theta\Longrightarrow\text{d}X=\pi(\theta)\text{d}\theta
$$
因此就得到了一个类似 Lebesgue 积分的东西 ($\tilde{\mathcal{L}}$ 是归一化的似然)，
$$
\mathcal{Z}=\int\mathcal{L}(\vec{\theta})\pi(\vec{\theta})\text{d}\vec{\theta}=\int_0^1\tilde{\mathcal{L}}(\vec{\theta})\text{d}\vec{\theta}
$$
于是我们的采样点从 $\vec{\theta}$ 变成了一维的 $X$ 点. 具体如何采样？

1. 在先验 $\pi(\theta)$ 中取 $n_{\text{live}}$ 个「活着的」点
2. 考虑这些点中具有最小似然 $\mathcal{L}^*$ 的那一个点，标记为「死掉的」点 (也就是山脚)
3. 再采样一个点，如果比山脚低就舍弃，比山脚高就留下作为一个新的「活着的」点，不断迭代，保证「活着的」点数量一直固定
4. 这时候我知道不同的山脚往上涨的期望是多少，因为我标记了每一个「死掉的」点
5. 计算出全部「死掉的」点的高度差，再加上最后「活着的」点，就计算出 evidence

在这个过程中，每死亡一个点，它周围的那一小块比它低的部分的形状就大致确定，所以得到一小块后验；死亡的点越多，我们就能得到整块的后验长成什么样子.

现在已经有了很多基于这个算法的工具：

* UltraNest：这是最准确的，但是效率不够高
* Dynsety：这个为了效率牺牲了一些准确度
* PyPolyChord / PolyChord：这是一个商业化的工具
* PyMultiNest / Multinest：这是 05 年写出的「鼻祖级」代码，效率和后辈们差不多，但是准确度已经不够高了

## Exercise

计算恒星的光变曲线. 一个恒星的真实光变曲线是
$$
m(t)=A\sin\left(\frac{2\pi}{T}t+\phi\right)+m_0\quad\text{[mag]}
$$
我们一年观察 $N=32$ 个随机的夜晚，但是每天晚上的观测条件不同. 同时，有一个 Gauss 型的噪声叠加在这个光变曲线上.

问题转化为：

* 我们已知每天的数据、观测仪器误差、观测的时间
* 未知的量是理论曲线中的参数 $A,T,\phi,m_0$ (作为 $\vec{\theta}$).

先验是 $A\in[0,3]$，$T\in[10,300]$，$\phi\in[0,2\pi]$，$m_0\in[10,20]$，$\ln\pi(\vec{\theta})=0$ (因为都是均匀分布).

似然对数：
$$
\ln\mathcal{L}(\vec{\theta})=-\frac{1}{2}\sum_{i=1}^N\frac{(m_i-m(t_i;\vec{\theta}))^2}{\sigma_i^2}+\text{const.}
$$
::: tip

实际上这就是所谓的「卡方」$\chi^2$，也就是高中数学 (和频率学家们) 经常算的东西.

:::

---
课后的一些讨论：本质上，可以把先验看作参数空间的一种度规，它能够把参数空间这种「某一处密度大、某一处密度小」的流形，变为标准的一个 $\R^n$ 空间. 所以取先验实际上是在用最好的方式「拉回」这个参数空间，得到尽量好的结果.