---
title: 线性代数复习
permalink: /numerical-analysis/lesson-2-linear-algebra/
createTime: 2026/09/18 14:51:23
---
::: danger

没讲什么比较新的内容，所以半节课都在看文章...

:::

$\R^n$ 上比较一般的范数定义是 $p$ - 范数 ($1\leqslant p<\infty$)，
$$
\Vert x\Vert_p=\left(\sum_{k=1}^n|x_k|^p\right)^{1/p}
$$
对于矩阵而言，我们一般用 Frobenius 范数：
$$
A=[a_{ij}]\in \mathbb{C}^{m\times n},\quad \Vert A\Vert_F=\sqrt{\sum_{i,j}|a_{ij}|^2}
$$
对于 $\mathbb{C}[a,b]$ 上的函数，
$$
\Vert f\Vert_\infty=\max_{x\in[a,b]}|f(x)|,\quad \Vert f\Vert_{L^p}=\left(\int_a^b|f(x)|^p\mathrm{d}x\right)^{1/p}
$$

---

/Definition/ (从属) 矩阵范数

> 设 $\Vert\cdot\Vert$ 是 $\R^n$ 上的一个范数，$A\in \R^{n\times n}$，称
> $$
> \Vert A\Vert =\max_{0\neq x\in\R^n}\frac{\Vert Ax\Vert}{\Vert x\Vert}=\max_{\Vert x\Vert=1}\Vert Ax\Vert
> $$
> 为 $\R^{n\times n}$ 上从属于向量范数 $\Vert\cdot\Vert$ 的**矩阵范数**.