---
title: Lesson 4 Parameter estimation
permalink: /astro-statistic/lesson-4-parameter-estimation/
createTime: 2025/10/09 21:10:46
---
::: tip

## Quizzes

1. 什么是乘法规则？
   $$
   P(AB|I) = P(B|AI)P(A|I) = P(A|BI)P(B|I)
   $$

2. 什么是加法规则？
   $$
   P(A|I)+P(\bar{A}|I)=1
   $$

3. 扩展的加法规则？
   $$
   P(A+B|I) = P(A|I)+P(B|I)-P(AB|I)
   $$

4. 什么是无差别原则？

   如果有 $n$ 个互斥、穷尽的事件，如果已知的信息无法区分它们，则它们的概率都是 $1/n$.

5. 用 $I$ 表示 information，$D$ 表示 data，$H$ 表示 hypothesis. 写出下面概念的数学表达.

   1. Prior (先验).

      $P(H|I)$，在数据之前我们假说的成立概率.

   2. Likelihood (似然).

      $P(D|HI)$，已知背景信息和假说的前提下，现有的数据与假说有多么相符.

   3. Posterior (后验).

      $P(H|DI)$，在数据的条件下，对假说的置信程度.

   4. Evidence (证据).

      $P(D|I)$，归一化系数，把所有可能假说都遍历一次，得到这样数据的概率.

   5. Bayes' Theorem.
      $$
      P(H|DI)=\frac{P(H|I)P(D|HI)}{P(D|I)}
      $$

6. $A$ 和 $B$ 统计独立的条件？

   条件之一是 $P(AB|I) = P(A|I)P(B|I)$；等价的条件是 $P(A|BI)=P(A|I)$.

7. Bernoulli 实验是什么？

   有两种可能结果的随机实验.

8. 什么是均值？
   $$
   \mu\equiv\braket{X}=\sum_ix_ip(x_i)
   $$

9. 什么是方差？
   $$
   \sigma^2 \equiv\braket{X^2}-\braket{X}^2= \sum_i(x_i-\mu)^2p(x_i)
   $$

10. 对于 $N$ 次 Bernoulli 实验，每次成功概率为 $f$，成功的均值是？
    $$
    \mu[\text{Binomal}(N,f)]=Nf
    $$

11. Poisson 分布如何由 Bernoulli 实验得到？

    当 $N\to\infty$，$f\to0$，但是 $N\cdot f$ 保持为一个常数 $\lambda$ 时，$\text{Binomal}(N,f)\to\text{Poisson}(\lambda)$.

12. 如果一个 Poisson 分布的期望是 $\phi$，它的标准差是多少？
    $$
    \sigma[\text{Poisson}](\phi)=\sqrt{\phi}
    $$

13. 给定一个服从 Poisson 分布的事件，$\text{Poisson}(\lambda)=\phi t$. 这个事件有 $\eta$ 的概率能被看到，则探测事件的分布是？

    仍然是 Poisson 分布，因为一个 Bernoulli 实验筛选 Poisson 分布时，得到的还是 Poisson 分布，最终的分布是 $\text{Poisson}(\lambda\eta)$.

14. 两个独立的 Poisson 分布，两者频率为 $\phi_1$ 和 $\phi_2$，则合成的事件分布？
    $$
    \text{Poisson}(\phi_1+\phi_2)
    $$

15. SNR = ？
    $$
    \text{SNR} = \sqrt{\phi t}
    $$

16. 二项分布和 Poisson 分布在何时近似为 Gauss 分布？

    大 $N$ 和大 $\phi$.

17. Gauss 分布？
    $$
    p(x|\mu,\sigma)=\frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
    $$

18. 中心极限定理？

    大量随机数的统计分布趋于 Gauss 分布.

19. 大量随机数，数量为 $n$，$n\to\infty$ 时，标准差按照什么方式增长？
    $$
    1/\sqrt{n}
    $$

20. 生成特定分布的随机数？

    [Random Sampling](/astro-statistic/lesson-3-probalbility-distribution-functions/#radom-sampling).

:::

## Statistical Inference

所谓「从数据到后验」.

考虑一个抛硬币的实验，$N$ 次实验，正面概率为 $f$. 得到 $n$ 次正面概率的分布：
$$
p(n|N,f) = \frac{N!}{n!(N-n)!}f^n(1-f)^{N-n}
$$
但是现在问题变成：我们已经知道数据 $D=(N,n)$，假说族 $\{H_f\}$ (代表不同的 $f$)，我们的目的是求出后验概率 $P(H|DI)$.

一个天文相关的例子是从宋朝至今的系统性的中国天文观测记录，我们在这一千多年发现了五颗超新星：1006，1054，1181，1572，1604 年.

我们需要验证这些记录是否真实，通过书中所载的方位来查找.

最经典的就是 1181 年这一颗，中国和日本都有很多记录，宋史和金史都有记载. 虽然记载非常多，但是直到 2013 年才最终确定是哪一个超新星.

这个问题和抛硬币有关系吗？

> 我们可以通过这一千年的详细记录，推测下一个百年能够观测到一颗肉眼可见的超新星的概率. 首先我们知道千年尺度对于恒星演化很短，所以可以假定超新星爆发的概率不发生变化.

概率是很小的常数、恒星数量很大，所以这是一个 Poisson 分布.

::: warning

不要因为 1006 和 1054 年这两次间隔很近就认为这个不是一个随机分布，上节课也用博客文章的例子来说了可能出现这种情况.

(话说 1054 这一年发现的是蟹状星云，也就是 M1 欸)

:::

/Quiz/11 个世纪发现了 5 个肉眼可见的超新星，所以下一个世纪发现肉眼可见的超新星的概率是？
$$
A.\frac{3}{10}\quad B.\frac{4}{10}\quad C.\frac{5}{11}\quad D.\frac{6}{12}\quad E.\frac{7}{12}
$$

> 我们知道这应该是二项分布，二项分布在 $x$ 很大时有一个长尾，所以均值应该在中间以及往右的部分，不太可能是 $A$ 和 $B$.
>
> 剩下的东西我们在继续解决抛硬币问题的过程中可以得到.

对于抛硬币来说，我们用 Bayes 定理，
$$
P(H|DI)=\frac{P(H|I)P(D|HI)}{P(D|I)}
$$
实际上我们不需要知道 $P(D|I)$，因为各种假说，如果是离散的就求和、是连续的 (就像我们现在的 $H_f$) 就积分，要得到 $1$，也就知道了 $P(D|I)$.

现在先验是
$$
P(H|I_0) = 1\,,\quad0\leq f\leq1
$$
似然是
$$
\begin{aligned}
P(D|HI_0)&\propto f^n(1-f)^{N-n}\\\\
P(D|HI_0)=p(n|N,f,I_0)&=\frac{N!}{n!(N-n)!}f^n(1-f)^{N-n}
\end{aligned}
$$
似然的自变量是 $n$；相应地，后验的自变量是 $f$，但是正比关系和似然是一样的：
$$
P(H|DI_0)\propto f^n(1-f)^{N-n}
$$
如果对 $f$ 积分归一化这个后验，得到的系数和似然并不一样，是
$$
P(H|DI_0)=\frac{(N+1)!}{n!(N-n)!}f^n(1-f)^{N-n}
$$
这是 $\beta$ 分布.

Bayes 推断的计算极为复杂，所以我们要写代码. (这也是 Bayes 统计在提出的一百多年都无人问津的原因之一)

```python title="Coin tossing: implementation"
import numpy as np

def sim_coin_toss(num, head_prob = 0.5, seed = 42):
  """Simulate coin tosses
  Args:
    num: int, number of tosses
    head_prob: float, probability of heads
    seed: int, random seed
  Return: array of int, 1 for heads and 0 for tails"""
  rng = np.random.default_rng(seed)
  toss = rng.uniform(0, 1, num) < head_prob
  return toss.astype(int)

# Generate simulated data with 128 tosses
coin_data = sim_coin_toss(128, head_prob = 0.25, seed = 12)
```

```python title="Posterior distribution: calculation"
from scipy.stats import beta

def posterior_coin_toss(data):
  """Calculate posterior distribution for coin toss data
  Args:
    data: array of int, 1 for heads and 0 for tails
  Return: tuple of f values and posterior probabilities"""
  N = len(data)                 # number of tosses
  n = data.sum()                # number of heads
  f = np.linspace(0, 1, 1000)   # sample probability values
  posterior = beta.pdf(f, n+1, N-n+1)
  return f, posterior

f, posterior = posterior_coin_toss(coin_data)
```



## Understading the Posterior

可以发现，在数据极少的时候，我们用的其实是演绎推理，来判断「这个硬币有没有正面或者有没有反面」，这说明演绎推理是统计推断的极端情况.

在数据变多时，发现后验概率分布越来越对称、越来越窄、越来越接近 Gauss 分布. 变窄的程度正比于 $\sqrt{N}$.

用两种先验来优化这个后验得到的结果：

* 取一个极端的 Gauss 分布，认为硬币是公平的；
  $$
  P(H|I_1)\propto\exp\left[-\frac{1}{2}\left(\frac{f-0.5}{0.05}\right)^2\right]
  $$
  这是近似于 $\Beta(50,50)$ 分布.

* 所谓的 Jeffreys' Prior，尽量尊重我们的无知，把 $0$ 和 $1$ 的概率调高，让这两个点附近的概率不会因为数据点变多而变化很大.

  $0$ 和 $1$ 两个点的概率趋于无穷.

模拟发现，在数据少的时候后验是由先验决定的；数据多的时候后验由数据决定.

## Parameter Estimation

我们下一步是利用后验来进行计算.

* 对 $f$ 最好的估计是多少？
* 这个估计的「可信程度」是多少？

对于 $\beta$ 分布，$m$ 阶矩是
$$
\braket{f^m}=\int_0^1f^mp(f|n,N,I_0)\text{d}f=\frac{(N+1)!(n+m)!}{n!(N+m+1)!}
$$
所以均值是
$$
\mu_f=\braket{f}=\frac{n+1}{N+2}
$$
这也给出了我们上面超新星问题的答案：$6/13$！

(1) **均值估计**：如果后验是对称分布的，那么峰值和均值是重合的，反之则不重合. 峰值是最有可能的 $f$，那么均值给出的是什么含义？

> 假设真值是 $\theta$，均值估计值是 $\hat{\theta}$，那么误差 $\varepsilon=\hat{\theta}-\theta$. 考虑误差的平方的期望：
> $$
> \braket{\varepsilon^2}=\braket{(\hat{\theta}-\theta)^2}=(\hat\theta-\braket{\theta})^2+(\braket{\theta^2}-\braket{\theta}^2)
> $$
> 所以如果取均值估计，那么可以最小化「误差平方的期望」.

当然这个估计不一定是最好的，但是取什么样的估计是决策论的问题，不再是概率论的问题.

如果考虑一个极为极端的分布，具有一个非常长的尾巴，这会使得均值严重偏离最概然的峰值，而且因为「尾巴」的方向在多次实验中并不稳定，有可能左边有尾巴有可能右边有尾巴，导致均值估计并不非常好；同时如果作变量代换，均值可能给出某一种表达方式的最小误差平方期望，但是对另一种参数化无法最小化误差平方期望.

> 对于均值估计，我们可以用 $\sigma$ 来估计置信区间.

(2) **中值估计**：面对这种状况，Laplace 提出一个新的判据，最小化 $\braket{|\varepsilon|}$，也就是用中值估计. 对于长尾很严重的数据，中值估计是好的策略，比如判断一个国家的收入水平. 同时，作任何单调的变换，「中值的变换」和「变换的中值」是一致的 (这个性质对于所有百分位数都成立).

中位数另外的优势是，对于 Lorentz 分布这样的、积分发散的分布，也存在中位数估计.

> 对于中值估计，我们可以用百分位数来估计置信区间. 利用 Gauss 分布的 $34.1\%$ 对应 $1\sigma$，可以用 $68\%$ 分位数来当做 $1\sigma$ 的区间，以此类推.
>
> 当然，因为我们画的是百分位数，所以这时候的误差棒两边不等长.

(3) **峰值估计**：它没有最小化一个目标函数，而且在计算中可能出现多峰值的分布，所以峰值估计仅仅是一个参考.

比如一个对称双峰的后验概率分布，这一般要重新做新的参数化，因为有时候这意味着这个参数是以绝对值的形式参与了我们的物理过程.

---

==当然，如果后验非常奇怪，那么就画一个图来给其他人看吧.==

## Exercise: The Lighthouse Problem

似乎是某大学的新生入学测试...？

假设灯塔在距离岸边 $\beta$ (已知) 的地方，它发出随机的 $N$ 次闪光，被岸上 ($x$ 轴) 上的 $x_k$ 位置观测站接收，得到一组数据 $\{x_k\}$. 现在要求知道灯塔的横坐标 $\alpha$.

闪光方向 $\{\theta_k\}$ 是均匀分布：
$$
p(\theta_k|\alpha,\beta,I)=\frac{1}{\pi}\,,\quad-\frac{\pi}{2}<\theta<\frac{\pi}{2}
$$
变量代换，得到著名的 Lorentz 分布：

$$
p(x_k|\alpha,\beta,I) = \frac{\beta}{\pi[\beta^2+(x_k-\alpha)^2]}
$$
尝试均值估计，结果发现，均值完全不收敛、方差也完全不收敛. —— 这是因为 Lorentz 分布的长尾太大，严重影响均值.

Bayes 统计：
$$
p(\{x_k\}|\alpha,\beta,I)=\prod^N_{k=1}\frac{\beta}{\pi[\beta^2+(x_k-\alpha)^2]}
$$
先验用一个平的概率分布 (uniform)，后验就直接正比于似然，有
$$
p(\alpha|\{x_k\},\beta,I)\propto\prod^N_{k=1}\frac{\beta}{\pi[\beta^2+(x_k-\alpha)^2]}
$$
经历复杂的计算能够得到后验函数 (常数不重要)：
$$
\ln[p(\alpha|\{x_k\},\beta,I)]=\text{const.}-\sum_{k=1}^N[\beta^2+(x_k-\alpha)^2]
$$
请大家用代码模拟闪光，进一步计算出后验.

---

课后的一些讨论：

先验是表达我们内心的认识的一种东西，我们需要对数据有一定的认知才能给出一个较为合理的 prior，就比如做普物实验的时候我们已经看到了红色的激光，那么测量得到 $550\text{ nm}$ 以下的激光波长就明显不合理，我们为它赋予的 prior 是零，这是极度自信的情况；再比如丢硬币的时候我们完全不知道硬币是否均匀，这时候其实不能用均匀的 prior，因为均匀的 prior 会造成少量数据对 $0$ 和 $1$ 这种边缘点的影响极大，对中间数据不起到什么影响，所以完全无知的一维情况该选用 Jeffreys' prior.

> 课后了解到 Jeffreys' Prior 在一维情况是能够严格拉平数据对所有位置的 $f$ 概率的影响的，但是对于高维情况并不严格，这些情况仅仅在特殊条件下有严格解，目前 DESI 的研究组遇到的就是要不要从均匀分布的 prior (目前均值与峰值差 $3\sigma$ 之大) 换成 Jeffreys' Prior 的问题.
