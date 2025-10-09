---
title: Lesson 5 相干态
permalink: /quantum-mechanics/lesson-5-coherent-state/
createTime: 2025/09/29 15:07:03
---
继续来讲谐振子的求解.

湮灭算符和产生算符的乘积：
$$
\hat{a}^-\hat{a}^+=\frac{1}{2\hbar m\omega}[p^2+(m\omega x)^2-\text{i}m\omega(xp-px)]=\frac{\hat{H}}{\hbar\omega}-\frac{\text{i}}{2\hbar}[\hat{x},\hat{p}]
$$
我们知道对易子 $[\hat{x},\hat{p}]$，所以
$$
\hat{H}=\hbar\omega\left(\hat{a}^-\hat{a}^+-\frac{1}{2}\right)=\hbar\omega\left(\hat{a}^+\hat{a}^-+\frac{1}{2}\right)\,,\quad[\hat{a}^-,\hat{a}^+]=1
$$
同时，我们知道产生和湮灭算符的反对易子 $\{\hat{a}^-,\hat{a}^+\}=0$.

对于谐振子，来计算基态能量：我们知道基态再往下的一个态能量应该是零，所以
$$
\hat{a}^-\psi_0=0\Longrightarrow\left(\frac{\hbar}{\text{i}}\frac{\text{d}}{\text{d}x}+m\omega x\right)\psi_0=0
$$
解得：
$$
\psi_0(x)\propto \exp\left(-\frac{m\omega^2}{2\hbar}x^2\right)
$$
这说明基态能量有 $E_0=\frac{1}{2}\hbar\omega$. 有人想过把无穷自由度系统的这些零点能 (积分起来是无穷大) 提取出来作为功来利用，但是这是真空所带的能量，无法被利用.

激发态的波函数：
$$
\psi_n(x)=\frac{1}{\sqrt{n!}}(\hat{a}^+)^n\psi_0(x)
$$
(这是归一化的)

---

定义内积：
$$
\braket{f|g}=\int_{-\infty}^\infty f(x)g(x)\text{d}x
$$
Hermitian Conjugates：
$$
\braket{f|Ag}=\braket{f|A^\dagger g}
$$
我们研究谐振子，是因为之后量子化电磁场等等 Boson 子传递的场时，对于单个波矢的情况都可以用谐振子的波函数序列.

本征函数归一：
$$
\int_{-\infty}^\infty\psi^*_m(x)\psi_n(x)\text{d}x=\delta_{mn}
$$
当然有数学系的人要说这里该引入测度 $\omega(x)$ 放到积分号里面去，用来描述弯曲时空，实际上这些东西都是在我们的基础上再加其他复杂度罢了.

势能均值：
$$
\braket{V}=\braket{\frac{1}{2}m\omega^2x}=\frac{1}{2}m\omega^2\int_{-\infty}^\infty\psi_n^*(x)x^2\psi_n(x)\text{d}x
$$
但是用算符，可以写成
$$
\braket{V}=\frac{\hbar\omega}{4}\braket{n|(\hat{a}^+)^2+\hat{a}^+\hat{a}^-+\hat{a}^-\hat{a}^++(\hat{a}^-)^2|n}
$$
这里 $(\hat{a}^+)^2$ 和 $(\hat{a}^-)^2$ 会把后面的 $n$ 变为 $n\pm2$，与 $n$ 正交，所以这两项为零. 另外两项可以用公式算，这体现算符代数的优越性，不用计算复杂的积分.

相干态 (coherent state)：$\ket{\alpha}$，它可以被展开为本征态的叠加
$$
\ket{\alpha} = \sum_{n=0}^\infty\beta_n\ket{n}
$$
而之前说过 $a\ket{n}=\sqrt{n}\ket{n-1}$，于是
$$
\sum\beta_n\sqrt{n}\ket{n-1}=\alpha\sum\beta_n\ket{n}\Longrightarrow \beta_{n+1}\sqrt{n+1}=\alpha\beta_n
$$
相干态是湮灭算符的本征态，它在能量本征态上的展开，每个系数都和上一个能量本征态有关系.