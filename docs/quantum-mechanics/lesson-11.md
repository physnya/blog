---
title: Lesson 11 不确定关系
permalink: /quantum-mechanics/lesson-11-uncertainty/
createTime: 2025/10/27 20:40:39
---
下周这个时候考试.

我们已经学了第二章，知道了很多具体的例子；第三章主要是形式化的理论.

## 不确定关系

我们先定义一下，什么是误差：
$$
f=(\hat{A}-\braket{A})\psi\Longrightarrow\sigma_A^2=\braket{f|f}
$$
这个量 (方差) 不管均值是多少，都是非负的. 利用 Cauchy - Schwartz 不等式，应该有
$$
|\braket{f|g}|^2\leq\braket{f|f}\braket{g|g}=\sigma_A^2\sigma_B^2
$$
考虑：
$$
\braket{f|g}-\braket{g|f} = \braket{\hat{A}\hat{B}}-\braket{\hat{B}\hat{A}}=\braket{[\hat{A},\hat{B}]}
$$
我们知道 $\braket{g|f}=\braket{f|g}^*$，因此可以将上面的不等式写成
$$
\sigma_A^2\sigma_B^2\geq\left[\frac{1}{2\text{i}}(\braket{f|g}-\braket{g|f})\right]^2=\left[\frac{1}{2\text{i}}\braket{[\hat{A},\hat{B}]}\right]^2
$$
因此最终得到了任意两个可观测量之间的不确定性关系：
$$
\sigma_A\sigma_B \geq \frac{1}{2}\braket{[\hat{A},\hat{B}]}
$$
如果我们想测量一组非对易的物理量，那么一定无法同时测准. 同样，这个推导可以推广到更多的物理量上，比如一组三个可观测量.

如果两个算符有一套共同的完备基，
$$
\hat{P}f_n = \lambda_nf_n\,,\quad\hat{Q}f_n=\mu_nf_n
$$
那么拿它们的对易子对一个波函数进行作用：
$$
[\hat{P},\hat{Q}]f = (\hat{P}\hat{Q}-\hat{Q}\hat{P})\sum_n c_nf_n=\sum_nc_n(\lambda_n\mu_n-\mu_n\lambda_n)f_n=0
$$
这说明共享一套完备基的两个算符一定是相对易的.

不确定性关系在统计力学中有很多应用，比如相空间中一个态占据的体积是 $\hbar$. 我们相空间的自由度来源于总的粒子数和共轭变量的个数，如果仅仅考虑三维动量和坐标，有 $N$ 个粒子，那么相空间的状态密度应该是 $\hbar^{-6N}$ 的量级，非常大.

虽然我们没有引入时间算符，但是时间与能量算符应该也满足共轭关系：
$$
[\hat{E},\hat{t}]=\text{i}\hbar
$$
于是，能量和时间的不确定度也存在不确定性关系：
$$
\tau\sim\frac{\hbar}{\Delta E}
$$

## Dirac Notation

认为状态对应的波函数是矢量，可以换不同的表象：
$$
\ket{S}=\sum_nc_n\ket{e_n}\,,\quad c_n=\braket{e_n|S}
$$
这时 Schrödinger 方程写为
$$
\text{i}\hbar\frac{\text{d}}{\text{d}t}\ket{S(t)}=\hat{H}\ket{S(t)}
$$
如果选坐标基，就得到坐标空间的波函数，
$$
\psi(x,t)=\braket{x|S(t)}
$$
也可以引入动量空间的波函数 $\phi(p,t)=\braket{p|S(t)}$、能量表象的波函数 $c_n(t)=\braket{n|S(t)}$ (离散的能级系统)……
$$
\ket{S(t)}=\int\ket{x}\braket{x|S(t)}\text{d}x = \int\ket{p}\braket{p|S(t)}\text{d}p = \sum_n\ket{n}\braket{n|S(t)}=\cdots
$$
