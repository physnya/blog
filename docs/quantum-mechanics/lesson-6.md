---
title: Lesson 6 Nobel Prize
permalink: /quantum-mechanics/lesson-6/
---
鉴于 Nobel Prize for Physics 刚刚颁布，和我们量子力学关系很大，所以我们花点时间来说一说.

我们对于宏观和微观量子效应的区分有一个概念，叫做 catness：用来标度自由度的大小. 对于宏观的生命体，比如说「Schrödinger 的猫」，它具有非常大的自由度，这是宏观的物体.

对于自由度极多的系统，我们还是可以说：
$$
[x^{(i)}, \hat{p}_x^{(j)}] = \text{i}\hbar\delta_{ij}
$$
已经有人在 $10^{23}$ 量级的系统上实现了量子效应. 但是真的在宏观上实现量子效应还是非常困难. 事情的转机来源于一个叫做 Brian Josephson 的人，当时 P.W.Anderson (这个人是凝聚态物理至今最伟大的物理学家之一) 在 Josephson 的学校那里做访问学者，Josephson 已经知道了 Bose - Einstein 凝聚的事情，最简单的宏观量子效应就是 Boson 的 Bose - Einstein 凝聚，所有的全同 Boson 聚集在谐振子的基态上、波函数非常简单.

Bose - Einstein 凝聚的波函数怎么写呢？
$$
\psi_0(x_1)\psi_0(x_2)\cdots\psi(x_n)
$$
(所有粒子都有同样的波函数，但是自由度极高，来自于总的粒子数)

Cooper 等人做的超导 BCS 理论和上述波函数其实很相似，只是 $\psi_0$ 换成了 $\psi_{\text{pair}}^{\uparrow\downarrow}(\vec{R}_c,\vec{r})$，这里
$$
\vec{R}_c=\frac{1}{2}(\vec{r}_1+\vec{r}_2)\,,\quad\vec{r}=\vec{r}_2-\vec{r}_1
$$
分别表示质心坐标和相对位移. Cooper 对中的两个自旋相反的粒子耦合之后合成了一个类似于 Boson 的体系，产生一种凝聚，达到所谓 s 波超导；当然，我们可以预料到这样的耦合也能产生自旋 $\pm1$ 的 pair，这是之后得了 Nobel Prize 的 p 波超导.

Josephson 知道了 Cooper 他们的理论，他想到宏观量子效应应该通过类似 Bose - Einstein 凝聚的效果来实现，于是设计两个超导体 + 中间一小层绝缘体的一种电路结，来观测电流在中间的一些量子效果.

> 美国的高校会在教授每工作六年时，给教授们一个带半薪休假一年的机会，很多学者利用这个机会来到别的学校做访问.

Anderson 很欣赏 Josephson 结的思路，给了很多资源来研究这件事情.

在电路中引入 Josephson 结得到环路后，电路系统也可以被量子化，共轭变量有
$$
\left[Q,e^{-\text{i}\frac{\partial}{\partial Q}}\right]=\text{i}\hbar
$$
等等，它和原子系统的区别在于这是人工的，我们能够调整这个系统的各个参数，进行各种实验. 比如我们可以在一个环路中得到这样的叠加态：
$$
\ket{\circlearrowleft}+\ket{\circlearrowright}
$$
这意味着我们可能观测到两个方向的环流.

> 下课的时候老师说他曾经的老师得了 Nobel Prize，叫 Carl Wieman，他甚至是学而思网校聘请的高级教研员 (

这一次 Nobel Prize 利用上面的很多想法，做了一些和超导量子计算有关系的工作.

> 为什么电路体系可以用 Lagrange 和 Hamilton 的力学来描述？
>
> 这些理论是一般性的.
>
> 为什么电荷的共轭变量是相位？
>
> 现在我们已经学到的知识只能支持我们说，这样的共轭变量选择是自洽的.

## 自由粒子

对于自由粒子，不含时 Schrödinger 方程就是一个自由的行波.

问题在于，我们的波函数没办法归一化，这时候要引入波包的概念：
$$
\varPsi(x,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty\phi(t)e^{\text{i}(kx-\frac{\hbar k^2}{2m}t)}\text{d}k
$$
相当于很多不同频率的平面波叠加.

色散的波包都是会散开的，我们需要使用非线性的 Schrödinger 方程来生成孤子解 (不色散的波包).