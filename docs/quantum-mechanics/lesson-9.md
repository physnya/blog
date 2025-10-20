---
title: Lesson 9 Hilbert 空间
permalink: /quantum-mechanics/lesson-9/
createTime: 2025/10/20 19:08:36
---
这节课讲完要考期中考试了.

期中考试的主要内容都是我们布置的第二章作业.

## Hilbert 空间

我们现在学的量子力学研究的都是纯态，可以通过一个波函数来描述这个系统的物理.

我们定义：
$$
\ket{\alpha}=\begin{pmatrix}
\alpha_1\\\alpha_2\\\vdots\\\alpha_n
\end{pmatrix}\,,\quad\ket{\beta}=\begin{pmatrix}
\beta_1\\\beta_2\\\vdots\\\beta_n
\end{pmatrix}
$$
定义内积为 $\braket{\alpha|\beta} = \alpha_i\beta_i$.

平方可积的函数 (Square-Integrate) 生活于 Hilbert 空间里.

/Example/

> 对于函数 $f(x)=x^\nu$，在 $0\sim1$ 的区间上平方可积：
> $$
> \int_0^1|x^\nu|^2\text{d}x=\frac{1}{2\nu+1}
> $$
> 当然要求 $\nu>1/2$.

## Observables

什么样的量被认为是可观测的？

Hermite 算符：能够作用在两边，也就是 $\braket{f|\hat{Q}f}=\braket{\hat{Q}f|f}$. 我们说可观测量能够被 Hermite 算符所表示.

Determinant State：
$$
\sigma^2 = \braket{(\hat{Q}-\braket{\hat{Q}})^2}=\braket{\hat{Q}^2}+\braket{\hat{Q}}^2-2\braket{\hat{Q}}^2=\braket{\hat{Q}^2}-\braket{\hat{Q}}^2
$$
是被测量的可观测量的本征态，这个被测量量不存在量子涨落.

简并：多个态有同一个本征值.

