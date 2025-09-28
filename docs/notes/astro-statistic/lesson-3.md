---
title: Lesson 3 Probability Distribution Functions
permalink: /astro-statistic/lesson-3-probalbility-distribution-functions/
createTime: 2025/09/28 21:03:56
---
::: tip

## Quizzes

1. 演绎逻辑的 formal language 是什么？

   Boolean algebra.

2. 逻辑积是什么？

   AND

3. 逻辑和是什么？

   OR

4. $P(A+B|CD)$ 是什么含义？

   当 $C$ 和 $D$ 都为真时，$A$ 或者 $B$ 为真的概率.

5. 概率论里的乘法规则是什么？

   ==这是上节课最核心的规则之一.==
   $$
   P(AB|I) = P(B|AI)P(A|I)=P(A|BI)P(B|I)
   $$
   逻辑上有两个不同的物理意义，就是先看 $A$ 成立的概率或者先看 $B$ 的概率.

6. 概率论里的加法规则是什么？
   $$
   P(A|I)+P(\bar{A}|I)=1
   $$

7. 拓展的加法规则是？
   $$
   P(A+B|I)=P(A|I)+P(B|I)-P(AB|I)
   $$

8. 怎么在不完全确定的情况下分配概率的数值？也就是，无差别原则是什么？

   在 $A_i$ ($i=1,\cdots,n$) 互斥且完备情况下，如果在前提 $I$ 下我们无法区分它们的概率大小，那么
   $$
   P(A_i|I)=\frac{1}{n}\,,\quad i=1,\cdots,n
   $$

9. $I\equiv (A\Rightarrow B)$ 时，下面的数学表述有何含义？

   1. $P(A\bar{B}|I)$.

      这是 $0$.

   2. $P(B|AI)$.

      这是 $1$.

   3. $P(A|\bar{B}I)$.

      这是 $0$.

   4. $P(AB|I)$ and $P(A|I)$.

      它们是一样的，因为 $A$ 真一定有 $B$ 真.

   5. $P(A|BI)$ and $P(A|I)$.

      我们只能知道 $P(A|BI)\geq P(A|I)$，因为 $B$ 真则 $A$ 更有可能为真.

   6. $P(B|\bar{A}I)$ and $P(B|I)$.

      我们知道 $P(B|\bar{A}I)\leq P(B|I)$，因为 $A$ 为假降低了 $B$ 为真的概率.

10. 用 $I$ 表示 information，$D$ 表示 data，$H$ 表示 hypothesis. 写出下面概念的数学表达.

    1. Prior (先验).

       $P(H|I)$，在数据之前我们假说的成立概率.

       ==背景信息永远都是放在后面的.==

    2. Likelihood (似然).

       $P(D|HI)$.

    3. Posterior (后验).

       $P(H|DI)$，在数据的条件下，对假说的置信程度.

    4. Evidence (证据).

       $P(D|I)$，归一化系数，把所有可能假说都遍历一次，得到这样数据的概率.

       > 这个我们会在之后重新提到的，暂且留一个伏笔.

    5. Bayes' Theorem.
       $$
       P(H|DI)=\frac{P(H|I)P(D|HI)}{P(D|I)}
       $$

11. 什么是概率论中的 marginalization (边缘化)？

    > 上节课我们只随口提了一句，所以大家不知道很正常.

    如果 $\{B_i\}^N_{i=1}$ 互斥且完备，那么
    $$
    P(A|I)=\sum_{i=1}^NP(AB_i|I)=\sum_{i=1}^NP(A|B_iI)P(B_i|I)
    $$

    > 为什么要叫「边缘化」？
    >
    > 后面我们会提到这个操作实际上是把冗余的一些信息「拍扁」，积分掉，当然这个中文翻译可能不是很好，但是也没有什么更好的翻译想法.

:::

上节课我们从几句 [符合常识的表述](/astro-statistic/lesson-2-probability-theory/#extended-logic) 开始，得到了概率论的基础理论. 这节课我们先跳出概率论的学习路径，看看很多不同的概率密度分布函数.

## Bernoulli Trials & the Binomal Distribution

我们的前置知识 $I$：

* 有很多相同的硬币，它们是无法区分的，正反概率相同.
* 抛硬币的结果存储在一个矢量中，$d=(d_1,d_2,\cdots)$.
* $d_i\in\{0,1\}$.
* 第 $n$ 次的结果是 $d^{(n)}=(d_1,d_2,\cdots)$.

因为是 fair 的硬币，所以
$$
P(d_i=0|I)=P(d_i=1|I)=\frac{1}{2}
$$
无差别原则：
$$
P(d^{(n)}|I)=2^{-n}
$$
这样，我们用乘法规则来计算「已知 $n-1$ 次抛掷结果，第 $n$ 次的正面概率」和直接计算「第 $n$ 次正面概率」得到的都是 $1/2$. 这说明前 $n-1$ 次不提供任何信息，
$$
P(A|BI)=P(A|I)
$$
这被称为 $A$ 与 $B$ 统计独立. 另一种写法是
$$
P(AB|I)=P(A|BI)P(B|I)=P(A|I)P(B|I)
$$
::: tip

Quiz：扩充到三个命题 $A,B,C$ 之间，统计独立如何表述？

> (1) $P(ABC|I)=P(A|I)P(B|I)P(C|I)$
>
> (2) $P(AB|I)=P(A|I)P(B|I)$
>
> (3) $P(BC|I)=P(B|I)P(C|I)$
>
> (4) $P(AC|I)=P(A|I)P(C|I)$

A. (1)

B. (2 - 4)

C. (1) and any one of (2 - 4)

D. (1) and any two of (2 - 4)

E. (1 - 4)

---

> 看来大家没有什么共识.

一个例子是，考虑一个八面的骰子，

* Case 1 是 $A=\{1,2,3,4\}$，$B = C=\{4,5,6,7\}$，都有 $4$ 所以显然不独立，但是 (1) 式成立；

* Case 2 

  ::: danger

  完了我没记下来，反正就是满足后三个不满足 (1).

  :::

所以这里应该选 E. (？我居然选对了？！) 这是一个很强的条件.

:::

回到我们之前的 $I$，假设所有投掷都是独立的，但是硬币可能有 bias，这样每次都统计独立的随机实验叫做 Bernoulli 实验.
$$
p(n|N,f)=P\left(\sum_{i=1}^Nd_i=n|N,f,I\right)
$$
(正面概率是 $f$) 最后得到
$$
p(n|N,f)=\frac{N!}{n!(N-n)!}f^n(1-f)^{N-n}
$$
这就是二项分布.

一般我们用 $m$ - moment ($m$ 阶矩) 来描述概率的分布，
$$
\braket{X^m}\equiv \sum_{n=0}^Nx_n^mp_n
$$
二项分布的平均值、方差我们都已经熟悉.

```python
import numpy as np
from scipy.stats import binom
import matplotlib.pyplot as plt

def binom_pdf(N, f):
  n = np. arange(N + 1)
  pdf = binom.pmf (n, N, f)
  return n, pdf

n, pdf = binom_pdf (10, 0.2)
plt.step(n, pdf, where = 'mid')
```

## Poisson Distribution

和天文关系更大的是 Poisson 分布.

考虑一个光源，每秒产生 $N$ 个光子，光子穿过探测器的事件是统计独立的. 光子通过探测器的概率符合二项分布，
$$
p = \frac{N!}{n!(N-n)!}r^n(1-r)^{N-n}
$$
但是 $r\to0$，不过我们知道 $Nr$ 应该是一个常数 $\phi$. 在 $N\to\infty$ 和 $r\to0$ 的极限下，分布变成
$$
p(n|\phi)=\frac{\phi^ne^{-\phi}}{n!}
$$
这是大量实验下稀有事件出现的概率. Poisson 分布有很多漂亮的性质，
$$
\mu=\braket{n} = \phi\,,\quad\sigma^2=\braket{n^2} = \phi
$$

```python
import numpy as np
from scipy.stats import poisson
import matplotlib. pyplot as plt

def poisson_pdf (phi):
  n_l0 = poisson.ppf(0.0001, phi)
  n_hi = poisson.ppf(0.9999, phi)
  n = np.arange(n_lo, n_hi)
  pdf = poisson.pmf(n, phi)
  return n, pdf

n, pdf = poisson_pdf(4)
plt.step(n, pdf, where = 'mid')
```

接下来是考虑探测器的效能，一个光子穿过探测器，有 $\eta$ 的概率被探测器记录，这也是一个 Bernoulli 实验，符合二项分布. 但是我们只知道光子流量和探测器效率 $\eta$，我们现在要计算有 $c$ 个计数的概率：这要用到上节课说到的 marginalization.
$$
p(c|\eta,\phi)=\sum_{n=0}^\infty p(c,n|\eta,\phi)=\sum_{n}p(c|n,\eta,\phi)p(n|\eta,\phi)
$$
我们的逻辑链是先知道流量 $\phi$，再得到光子数 $n$，有 $\eta$ 的概率得到 $c$ 个计数：
$$
\phi\to n\overset{\eta}{\to}c
$$
上面的式子被简化：
$$
=\sum_np(c|n,\eta)p(n|\phi)
$$
(已经知道 $n$ 就没有必要再知道 $\phi$；$\eta$ 和 $\phi$ 推出 $n$ 的过程没有关系)
$$
\begin{aligned}
&=\sum_{n=c}^\infty\left[\frac{n!}{c!(n-c)!}\eta^c(1-\eta)^{n-c}\right]\left[\frac{\phi^n}{n!}e^{-\phi}\right]\\\\
&=\frac{(\eta\phi)^c}{c!}e^{-\eta\phi}
\end{aligned}
$$
这仍然是 Poisson 分布，体现出 Poisson 分布的特性：

* Thinning：如果 $\phi$ 符合 Poisson 分布，那么加上一个效应 $\eta$ 之后，分成的两类 $\eta\phi$ 和 $(1-\eta)\phi$ 都符合 Poisson 分布. 同时反过来，两个独立的 Poisson 分布之和也是 Poisson 分布.

一个简单的例子是宇宙中的光源发射的光子 + 噪声符合 Poisson 分布，这个光源的光子和噪声各自也符合 Poisson 分布.

(1) 对于用光子探测的情形，我们得到的信号在每一秒是统计独立的，所以信号 $S=\phi t$，噪声是 $N=\sqrt{\phi t}$，最终得到信噪比 (Signal - to -noise ratio, SNR)：
$$
S/N = \sqrt{\phi t}
$$
所以提高信噪比的方案是：

* 增加望远镜的口径，信噪比 $\propto$ 口径；
* 增加曝光时间，信噪比 $\propto\sqrt{t}$.

(2) 如果加上一个天空的噪声 $\phi_{\text{sky}}$ ($\phi_{\text{sky}}\gg\phi$)，那么 $S=\phi t$，$N=\sqrt{\phi_{\text{sky}}t}$. 信噪比：
$$
S/N = \frac{\phi}{\sqrt{\phi_{\text{sky}}}}\sqrt{t}
$$
这里提高信噪比的方案是在没有月亮的情况下观测 (减少 $\phi_{\text{sky}}$).

## the Gaussian Distribution

如果画出大样本量下的 binomal distribution 和 Poisson distirbution，会发现它们趋向于同一个分布. 这就是 Gaussian distribution.
$$
p(x|\mu,\sigma) = \frac{1}{\sqrt{2\pi}\sigma}\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right]\equiv N(\mu,\sigma)
$$
这个分布有极其优秀的性质，没有比二阶矩更高阶的矩.

Herschel (这是个天文学家) 的推导：

* 对星体的观测误差来源于对赤经和赤纬的误差.

* 赤经误差和赤纬误差独立.
  $$
  \rho(x,y)\text{d}x\text{d}y=f(x)\text{d}x\cdot f(y)\text{d}y
  $$

* 各向同性.

这样的条件的通解是 $e^{-\alpha x^2}$，多元情况下是 $e^{-\alpha(x^2+y^2+\cdots)}$. 我们在 Maxwell 速率分布律中已经很熟悉这样的形式，那里的物理含义其实是各方向速度相互独立、速度分布各向同性.

```python
import numpy as np 
import matplotlib.pyplot as plt

def get_avg(sp, nsp, ngrp, navg):
  ntot = ngrp * navg
  idx = np.random.choice(nsp, ntot)
  res = sp[idx].reshape([ngrp, navg])
  return res.mean(axis = 1)

nsp = 1000000
sample = np.random.random(size = nsp)
m = get_avg(sample, nsp, 10000, 12)
plt.hist(m, bins = 20,
	histtype='step',
  density=True)
```

验证发现二项分布和 Poisson 分布以 $n^{-1/2}$ 的方式逼近 Gauss 分布，虽然这种收敛并不快，但是不妨碍 Gauss 分布是一个绝佳的近似. 在有限样本量的情况下，也有一些别的分布，比如说 Cauchy 分布 (天文上，一般叫 Lorentz 分布).

Gauss 分布可能会有很长的「尾巴」，这对于均值没有影响，但是会影响 $\sigma$. 我们通常用曲线下 $n\sigma$ 的面积占比来描述一个分布，对于 Gauss 分布，$1\sigma$ 是 $68\%$ 左右，$2\sigma$ 是 $94\%$ 左右.

## Radom Sampling

我们想要生成符合某种特定分布的随机变量.

首先，生成一个均匀分布的随机数 $u$，计算出 $u$ 对应的分布的值，算 $p(u)/m$ ($m$ 比最高点要高)，然后扔掉分布值比这个低的，留下分布值比这个高的.

但是这个方法非常低效，因为可能需要扔掉很多数.

---

更好的方法是均匀采样纵坐标，然后用反函数反推出横坐标.

这种方法要算累计概率
$$
F(x)=\int_{-\infty}^xp(x')\text{d}x'
$$
所以有时候效率也非常低，可能需要插值.

---

对于有限的情况，找到一个 $y=r(x)$，$y$ 的分布是 $g(y)$，$x$ 的分布是 $f(x)$.

* 如果 $r(x)$ 单调递增，
  $$
  G(y)=F(r^{-1}(y))\,,\quad g(y)=p(r^{-1}(y))\frac{\text{d} r^{-1}(y)}{\text{d}y}
  $$

* 反之，
  $$
  G(y)=1-F(r^{-1}(y))\,,\quad g(y)=-p(r^{-1}(y))\frac{\text{d}r^{-1}(y)}{\text{d}y}
  $$

于是
$$
g(y)=p(r^{-1}(y))\left|\frac{\text{d}r^{-1}(y)}{\text{d}y}\right|\,,\quad x\propto\left|\int g(y)\text{d}y\right|
$$
/Example/

> 对于 $g(y)=\mathcal{N}(0,1)\propto\exp(-y^2/2)$，我们没办法积分 $g(y)$.
>
> 但是我们可以采样一个二维的 Gauss 分布，$\exp((x^2+y^2)/2)$，变成极坐标就能积分. 所以 $x,y$ 的二维分布变为 $u,v$ 的随机分布，成为
> $$
> x = \sqrt{-2\ln u}\cos(2\pi v)\,,\quad y=\sqrt{-2\ln u}\sin(2\pi v)
> $$
> 这样用两组均匀分布的无关随机数 $u,v$ 可以构造出一对独立的 Gauss 分布.

## Exercise

光通量 $\phi=100\text{ photon/s}$，曝光 $T=60\text{ s}$，考虑 $100\%$ 探测器效率，来确定每个光子到达时间间隔的分布情况.
$$
p(n|\phi,T) = \text{Poisson}(n|\lambda=\phi T)
$$
光子到达的时间是均匀分布：

```python
def photon_arrivals(flux, duration, seed=42):
  rng = np.random.default_rng(seed)
  count = rng.poisson(flux * duration)
  arrivals = rng.uniform(0, duration, size=count)
  arrivals.sort()
  return arrivals
```

(这个函数排序到达时刻)

确定光子到达时间差的分布，代码是 (我写的)：

```python
flux = 100
duration = 60

arrival_times = photon_arrivals(flux, duration, 2024011182)

for n in range(0, (flux * duration - 1)):
    delta_times.append(arrival_times[n + 1] - arrival_times[n])

plt.hist(delta_times)
plt.yscale('log')
```

我们会发现这是一个直线型的分布.

---

下面，假定我每次曝光 $10\text{ ms}$，最后总曝光时间是 $60\text{ s}$，问每次曝光的期望光子数是多少？这是 1 个.

于是我们问，有多少个曝光时间里能够接收到大于 5 个光子？

```python
n,_ = np.histogram(arrival_times, np.arange(0, duration, 0.01))

print(np.count_nonzero(n >= 5) / len(arrival_times))

# output = 0.003109147439044346
```

有 $0.3\%$ 的可能会出现 $10\text{ ms}$ 内大量光子聚集.

这可以类比维护一个网站 / 博客，即使是一年均匀发布同样的内容，也有可能出现点击量暴增的情况.