---
title: Riemann 几何与张量分析
draft: true
permalink: /self-learn-GR/chapter-2/
pageLayout: doc
feed: false
createTime: 2025/08/09 14:09:31
---
## 狭义相对论中的张量

狭义相对论研究四维 Minkowski 时空 (一种平直时空)，在这样的时空中，用张量的语言表示 Lorentz 变换：

$$
x'_\mu = a_{\mu\alpha}x_\alpha\,,\quad\mu,\alpha = 1,2,3,4;\quad x_4 = \text{i}ct
$$

或写成：

$$
\text{d}x'_\mu = a_{\mu\alpha}\text{d}x_\alpha
$$

「线性」体现在变换矩阵元 $a_{\mu\alpha}$ 不依赖于坐标. 上面的式子已经采用了 Einstein 求和惯例.

光速不变原理要求，时空间隔在 Lorentz 变换下保持不变：
$$
\text{d}s^2=\text{d}x'_\mu\text{d}x'_\mu=\text{d}x_\alpha\text{d}x_\alpha
$$
因此变换矩阵一定是正交矩阵，满足 $\tilde{\bold{a}}=\bold{a}^{-1}$. ($\bold{a}$ 的转置矩阵记为 $\tilde{\bold{a}}$).

张量的定义有两个要点：分量个数 & 在坐标变化下按照特定的规律变换.

狭义相对论中：

1. 零阶张量 (标量) 定义为 Lorentz 变换下的不变量，
