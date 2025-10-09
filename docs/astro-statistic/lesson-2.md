---
title: Lesson 2 Probability Theory
permalink: /astro-statistic/lesson-2-probability-theory/
createTime: 2025/09/25 21:20:12
---
我们这节课将把上节课说的「合情推理」写在纸上成为严谨的数学.

::: tip

Quizzes：

1. 强三段论的两种写法：

   已知 $A\Rightarrow B$，$A$ true，则 $B$ true；已知 $A\Rightarrow B$，$B$ false，则 $A$ false.

2. 弱三段论的两种写法：

   已知 $A\Rightarrow B$，$B$ true，则 $A$ probably true；已知 $A\Rightarrow B$，$A$ false，则 $B$ probably false.

3. 两种推理的区别在于信息不完备.

4. 天文观测中可能出现 mask、可能有干扰、…… 很多信息不完备的来源.

5. 什么情况需要统计？

   a. 太阳现在在东京上空吗？

   b. 这个光度曲线的时域是多少？

   c. 这个发射源在噪声很大的图像中发现，它到底是点状的还是多点源？

   d. 这个光谱有 $\text{H}\alpha$ 谱线吗？

   我们说，只有第一个选项不需要统计.

6. Bayes 和频率学家对「概率」的解读有什么区别？

   Bayes 学派认为概率是「根据已有信息对某事有多大把握」，频率学家认为这个概率是固有的、需要长期的测量得到一个确定的值.

7. Bayes 学派对「随机」是怎样诠释的？

   Bayes 学派认为只要我们对这个事件的了解和我们所研究的事情无关或者我们根本不了解，那么这个事件就是随机的.

:::

## Overview

这一节的目的是回顾「统计，或者说概率论，应该怎样建立？」

统计是什么？

> *There are three kinds of lies: lies, damned lies, and statistics.* —— Mark Twain
>
> 人们对统计学的认识很多时候会因为一些政治家的有心操纵而产生误解；不仅如此，很多新闻中出现的常温常压超导、中微子超光速、…… 种种事件让我们对统计产生了一些偏见.
>
> > 老师说 Nature 的编辑对他讲 $3\sigma$ 的结果有一半是错的.
>
> 我们在处理自己的实验数据时也经常扔掉所谓的不合理数据，很多使用的统计方法也不求甚解；也没有一套统一的统计方法能够适配所有的问题.

所以这节课我们抛掉过去的一些成见来建立一套统一的统计学框架，我们期望：它能够给我们诚实的结论，而且有一套标准且自洽的规则来统御所有的统计问题，也不需要具体问题具体分析一整套不同的原理出来，同时能够在极端情况下应用这一套理论框架 (比如数据极少的例子中)，也能在真实世界的问题中大展拳脚.

::: warning

当然这套理论仍然在发展的路上，它是 1950s 开始发展起来的.

一个故事是，我们上节课提到的一本参考书的作者 (也是这一套理论的建立者)，在一次学术会议上指出当时的人们常用的统计方法有一些明显的谬误. 当时这些东西的争议很大，但是到了最近 20 年，这样的争议已经越来越少. 这也是用新的方法讲统计课程的重要原因.

:::

## Formal Language of Logic

用数学的方法来描述「真」和「假」. 我们从 Bool 代数开始.

| 逻辑操作 | 算符 |         写法         |             定义             |
| :------: | :--: | :------------------: | :--------------------------: |
|  逻辑积  | AND  |   $AB$ ($A\land B$)   |  如果 $A$ 和 $B$ 都真，才真  |
|  逻辑和  |  OR  |   $A+B$ ($A\lor B$)   | 如果 $A$ 真或者 $B$ 真，就真 |
|  逻辑差  | NOT  | $\bar{A}$ ($\neg A$) |     如果 $A$ 不真，则真      |

上述内容也可以用 Venn 图来形象描述.

Bool 代数有一些代数定律：幂等性 ($AA=A,A+A=A$)、结合律、交换律、分配律等 (我在网上查到有十个定律).

$A\Rightarrow B$ 仅仅意味着 $A\bar{B}$ 是假的.

| $A$  | $B$  | $A\Rightarrow B$ |
| :--: | :--: | :--------------: |
|  T   |  T   |        T         |
|  T   |  F   |        F         |
|  F   |  T   |        T         |
|  F   |  F   |        T         |

一个真命题可以 imply 一个真命题，一个假命题可以 imply 真 / 假命题.

但是 Bool 代数不能让我们了解合情推理，我们需要一个描述「合理性」的理论.

## Extended Logic

条件：

1. 我们希望用实数来表示概率；

2. 我们得到的量要定性地和我们的常识相符；

3. 一致性：

   a. 不同推理的途径应该给我们相同的结果；

   b. 利用到我们所有已知的信息；

   > 如果没有考虑到所有已知信息，有选择性，那么就掺杂了主观因素.

   c. 同样合理的事情有同样的概率.

引入记号：

* 我们知道 $B$ 真的时候，$A$ 真的合情程度：
  $$
  \mathcal{P}(A|B)
  $$

* $C$ 和 $D$ 同时为真时，$A$ 或 $B$ 为真的合情程度：
  $$
  \mathcal{P}(A+B|CD)
  $$

为了满足条件 2.，要求两个矛盾的 $B$ 和 $C$ 同时成立时我们不讨论概率 $\mathcal{P}(A|BC)$； 为了条件 1.，我们要求单调性，如果 $A$ 比 $B$ 更加可能则 $\mathcal{P}(A|I)>\mathcal{P}(B|I)$.

为了表达 $\mathcal{P}(AB|I)$，我们用到：
$$
\mathcal{P}(A|I)\,,\quad\mathcal{P}(B|I)\,,\quad\mathcal{P}(A|BI)\,,\quad\mathcal{P}(B|AI)
$$
::: warning

为什么不能出现 $\mathcal{P}(A|B)$ 或者 $\mathcal{P}(B|A)$？

因为条件 3.b，我们不能忽略已知的 $I$ 这一个信息. 所以右边一定要有 $I$. (这也是有的书里面把 $I$ 省略掉的原因)

:::

函数一定是这样的形式：
$$
\mathcal{P}(AB|I)=F[\mathcal{P}(A|I),\mathcal{P}(B|AI)]=F'[\mathcal{P}(B|I),\mathcal{P}(A|BI)]
$$
::: warning

为什么不能出现 $G[\mathcal{P}(A|I),\mathcal{P}(B|I)]$ 这样的函数形式？

因为我们这两个变量完全不能给我们任何 $A$ 和 $B$ 之间的关联.

为什么不能出现 $G'[\mathcal{P}(A|BI),\mathcal{P}(B|AI)]$ 这样的函数形式？

因为假设 $A=B$，那么这个函数就没有信息了.

为什么不多一些变量？

因为这样是冗余的.

:::

Let $x=\mathcal{P}(A|I)$，$y=\mathcal{P}(B|AI)$，$z=\mathcal{P}(C|ABI)$，有 $\mathcal{P}(AB|I)=F(x,y)$，则
$$
\begin{aligned}
\mathcal{P}(ABC|I)&=F[\mathcal{P}(AB|I),\mathcal{P}(C|ABI)]=F[F(x,y),z]\\\\
\mathcal{P}(ABC|I)&=F[\mathcal{P}(A|I),\mathcal{P}(BC|AI)]=F[x,F(y,z)]
\end{aligned}
$$
因为条件 3.a，上述两个函数必须相等. 我们不做证明，但是这个结果从数学上可以得到，函数一定符合下面的形式：
$$
w[F(x,y)]=w(x)w(y)
$$
令 $q(A|I)=w[\mathcal{P}(A|I)]$，则
$$
q(AB|I)=q(B|AI)q(A|I)=q(A|BI)q(B|I)
$$
这告诉我们，如果 $I$ 真 ($I\Rightarrow A$)，那么上述概率 $q=(AB|I)=q(B|I)$，$q(A|BI)=q(A|I)$ (我们前面说了不处理两个条件矛盾的情况，所以 $B$ 不带来新的信息. 因此，
$$
q(B|I)=q(A|I)q(B|I)\Longrightarrow q(A|I)=1
$$
这就在没有任何假设的情况下导出了「一定为真的事件，原概率是 $1$」.

如果 $I$ 真 ($I\Rightarrow\bar{A}$)，也可以合理推出 $q(A|I)=0$，这也是自然的.

---

刚刚我们推导了乘法规则，现在来思考另一条规则：$q(\bar{A}|I)=S[q(A|I)]$，来寻找这个 $S$ 的形式.

边界条件是 $S(0)=1$ 和 $S(1)=0$. 对于任意的 $A$ 和 $B$，乘法规则是
$$
\begin{aligned}
q(AB|I)&=q(A|I)q(B|AI)\\\\
q(A\bar{B}|I)&=q(A|I)q(\bar{B}|AI)
\end{aligned}
$$
得到
$$
q(AB|I)=q(A|I)S[q(\bar{B}|AI)]=q(A|I)S\left[\frac{q(A\bar{B}|I)}{q(A|I)}\right]
$$
交换律保证上式可以 $A$ 和 $B$ 交换，得到
$$
q(B|I)=S\left[\frac{B\bar{A}|I}{q(B|I)}\right]=q(A|I)S\left[\frac{q(A\bar{B}|I)}{q(A|I)}\right]
$$
取 $\bar{B}\Rightarrow A$，这造成 $A\bar{B}=\bar{B}$，$B\bar{A}=\bar{A}$，代入得到
$$
xS\left[\frac{S(y)}{x}\right]=yS\left[\frac{S(x)}{y}\right]
$$
(这里 $x=q(A|I)$，$y=q(B|I)$) 上式中，取 $y=1$，得到 $S(S(x))=x$. 这样的方程在数学上可以证明一定是下面的函数形式 ($m>0$)：
$$
S(x)=(1-x^m)^{1/m}
$$
于是
$$
q^m(A|I)+q^m(\bar{A}|I)=1
$$
现在定义 **概率**：
$$
P(x)\equiv q^m(x)\in[0,1]
$$
概率有乘法和加法规则：
$$
P(AB|I) = P(A|BI)P(A|I)\,,\quad P(A|I)+P(\bar{A}|I)=1
$$
这就得到了强三段论：
$$
\begin{aligned}
P(B|AI)=\frac{P(AB|I)}{P(A|I)}=1&\Longrightarrow (A\Rightarrow B\,,A\text{ true}\text{ implies }B\text{ true})\\\\
P(A|\bar{B}I)=\frac{P(A\bar{B}|I)}{P(B|I)}=0&\Longrightarrow(A\Rightarrow B\,,B\text{ false implies }A\text{ false})
\end{aligned}
$$
弱三段论：
$$
\begin{aligned}
P(A|BI)\geq P(A|I)&\Longrightarrow(A\Rightarrow B\,,B\text{ true}\text{ implies }A\text{ more possible})
\end{aligned}
$$
还有更弱的推理：
$$
P(A|BI)>P(A|I)
$$
就是「如果 $A$ 真，$B$ 更有可能」且「$B$ 真」，则「$A$ 更有可能」.

这里我们所有的定义和推理都是符合我们的常识的，下面我们要的是定量化.

## Quantitive Application

把加法定律和乘法定律先写在这里：
$$
P(AB|I)=P(B|AI)P(A|I)\,,\quad P(A|I)+P(\bar{A}|I)=1
$$
现在扩展一下加法定律，有
$$
\begin{aligned}
P(A+B|I)&=1-P(\bar{A}\bar{B}|I)=1-P(\bar{A}|I)P(\bar{B}|\bar{A}I)\\\\
&=1-P(\bar{A}|I)[1-P(B\bar{A}|I)]\\\\
&=P(A|I)+P(\bar{A}B|I)\\\\
&=P(A|I)+P(B|I)P(\bar{A}|BI)\\\\
&=P(A|I)+P(B|I)[1-P(A|BI)]\\\\
&=P(A|I)+P(B|I)-P(AB|I)
\end{aligned}
$$
当然还有
$$
\begin{aligned}
P(A_1+A_2+A_3|I)&=P(A_1|I)+P(A_2|I)+P(A_3|I)\\\\
&\quad-P(A_1A_2|I)-P(A_2A_3|I)-P(A_3A_1|I)\\\\
&\quad+P(A_1A_2A_3|I)
\end{aligned}
$$
如果这些命题互斥，则交叉项全部消失，
$$
P(A_1+\cdots+A_m|I)=\sum_{i=1}^mP(A_i|I)
$$
如果大家学过别的概率论课程，那么可能听过 Kolmogorov axioms：

* 归一化：$P(\Omega)=1$.
* 非负性.
* 可加性.

这是把概率映射为测度的一个公理体系，它被包含在我们用常识建立起来的体系中. 因为是测度理论，所以上面的公理体系处理不了无穷的问题，但是我们的常识理论可以.

我们面临的最大问题是要把 $I$ 转变为数能够描述的东西，这是目前还没有被解决的. 但是有一个特别常用的特例，就是上节课提到的 Laplace (当然 Bournoulli 在此之前也同样表述过) 的无差别原理，当我们可以完全自由地交换指标 $A_i$ 时，所有的事件的概率都是无差别的，
$$
P(A_i|I)=\frac{1}{n}
$$

## Statistical Inference

有了数字，我们可以开始进行统计推断.

/Theorem/ (Bayes' Theorem)

> $$
> P(H|DI)=\frac{P(D|HI)P(H|I)}{P(D|I)}
> $$
>
> - $P(H|DI)$: posterior, plausibility of H in light of data D
> - ﻿﻿$P(D|HI)$: likelihood, compatibility of D with hypothesis H (how well H explains D)
> - ﻿﻿$P(H|I)$: prior, plausibility of H before D is analyzed
> - ﻿﻿$P(D|I)$: evidence, normalization factor
>
> 归一化因子 $P(D|I)$ 要穷尽所有理论才能求出，这是困难的.

/Example/

> $N$ 门问题：玩家猜测一扇门，打开另外 $N-1$ 门中的一扇后发现没有奖品. 玩家现在是否应该换门？
>
> 现在 $I$ 是背景知识；$H_i$ 是奖品在第 $i$ 门的事件，$D_k$ 是第 $k$ 门中无奖品的观测数据.
> $$
> P(H_1|D_kI)=\frac{P(D_k|H_1I)P(H_1|I)}{P(D_k|I)}
> $$
> 因为我们不知道哪个门有奖品，所以先验 $P(H_i|I)=1/N$. 但是似然怎么写？
> $$
> P(D_k|H_iI)=\begin{cases}
> 1/(N-1)&i=1\\\\
> \delta_{ik}&i\neq1
> \end{cases}
> $$
> (主持人不能打开有奖品的门！)
>
> 现在算归一因子，
> $$
> \begin{aligned}
> P(D_k|I)&=\sum_{i=1}^NP(D_k|H_iI)P(H_i|I)\\\\
> &=P(D_k|H_kI)P(H_k|I)+\text{others}\\\\
> &=\left(\frac{1}{N-1}+1\right)\cdot\frac{1}{N}\\\\
> &=\frac{1}{N-1}
> \end{aligned}
> $$
> 最终得到不换门的中奖概率 $P(H_1|D_kI)=1/N$，换的概率是 $(N-1)/N$.

## Exercise: Weather Simulation

- *Flood risk* depends on the number of rainy days in a row (*greatly simplified*)
- The dam overflows after 7 consecutive rainy days (*regardless of rain intensity*)
- Meteorological data: half of the days are rainy (*assume stable frequency*)
- Estimate the annual frequency of dam overflow with simulations

(1) Monte-Carlo Simulation：

```python
import numpy as np

seed = 42
nsample = 3650000  # number of days: 10,000 years

# Weather simulation
rng = np.random.default_rng(seed)
weather = rng.integers(0, 2, size=nsample)  # 0: sunny, 1: rainy

# Validate the overall frequency of rainy days
print(weather.sum() / nsample)  # or weather.mean()

# Output: 0.5000449315068494
```

(2) Flood Frequency Calculation：

```python
def count_consecutive_ones(arr):
  """Count the lengths of consecutive 1s in a binary array."""
  # Identify the start and end of sequences of 1s
  changes = np.diff(arr, prepend=0, append=0)
  start_indices = np.where(changes == 1)[0]
  end_indices = np.where(changes == -1)[0]
  # Return the lengths of these sequences
  lengths = end_indices - start_indices
  return lengths

# Total number of flood events
flood_events = np.sum(count_consecutive_ones(weather) >= 7)
# Annual frequency of flood events
print(flood_events.sum() / (nsample / 365))
# Output: 1.4358
```

(3) Markov Chain：

但是我们知道前一天下雨，后一天下雨的概率就会变高；前一天天晴，后一天天晴的概率也会变高，所以这里每天的下雨概率都是条件概率，和上一天有关系. 这时我们应该用 Markov 链：

```python
def markov_chain_simulation(transition_matrix, num_steps):
  """Markov-chain Monte-Carlo simulation of weather.
  Args:
    transition_matrix: 2x2 array, transition probabilities
    num_steps: int, number of steps to simulate
  Returns: weather sequences"""
  current_state = np.random.choice([0, 1])
  states = [current_state]

  for _ in range(num_steps):
    prob = transition_matrix[current_state]
    next_state = np.random.choice([0, 1], p=prob)
    states.append(next_state)
    current_state = next_state

  return np.array(states)

transition_matrix = np.array([[0.7, 0.3],
                              [0.3, 0.7]])
seed = 42
nsample = 36500

rng = np.random.default_rng(seed)
weather = markov_chain_simulation(transition_matrix, nsample)

# Validate the overall frequency of rainy days
print(weather.mean())     # output: 0.5031916933782636

# Compute the frequency of consecutive rainy days
flood_events = count_consecutive_ones(weather) >= 7

print(flood_events.sum() / (nsample / 365))

#output: 6.13
```

