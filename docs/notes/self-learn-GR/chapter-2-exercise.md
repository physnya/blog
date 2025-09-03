---
title: Chapter 2 习题
permalink: /self-learn-GR/chapter-2-exercise/
pageLayout: doc
createTime: 2025/09/03 22:51:38
---

::: danger

这是上一章内容结束后的习题. 第一章的习题因为太少而且并不重要所以没有放上来.

:::

## 习题 1

> 证明 $\Gamma^{\lambda}_{[\mu\nu]}$ (即联络的反称部分) 是一个张量.

从定义出发，考虑联络的变换规则是

$$
\Gamma'^\sigma_{\alpha\beta}=\Gamma^\lambda_{\mu\nu}\frac{\partial x^\mu}{\partial x'^\alpha}\frac{\partial x^\nu}{\partial x'^\beta}\frac{\partial x'^\sigma}{\partial x^\lambda}+\frac{\partial^2x^\gamma}{\partial x'^\alpha\partial x'^\beta}\frac{\partial x'^\sigma}{\partial x^\gamma}
$$

(写到这里发现之前笔记里面的那个公式写得稍微有些问题，某几个上下标写错了，不过无伤大雅 (毕竟是可以换的))

而 $\Gamma^\lambda_{[\mu\nu]}$ 的定义是

$$
\Gamma^\lambda_{[\mu\nu]}=\frac{1}{2}(\Gamma^\lambda_{\mu\nu}-\Gamma^\lambda_{\nu\mu})
$$

这个在做坐标变换的时候，后面一项

$$
\frac{\partial^2x^\gamma}{\partial x'^\alpha\partial x'^\beta}\frac{\partial x'^\sigma}{\partial x^\gamma}
$$

刚好会被减去，所以坐标变换是

$$
\Gamma'^\sigma_{[\alpha\beta]}=\Gamma^\lambda_{[\mu\nu]}\frac{\partial x^\mu}{\partial x'^\alpha}\frac{\partial x^\nu}{\partial x'^\beta}\frac{\partial x'^\sigma}{\partial x^\lambda}
$$

这正是 $(1,2)$ 阶张量的变换公式，得证联络的反称部分是张量.

## 习题 2

> $\varPhi$ 是标量，证明：$A_{\mu}=\frac{\partial\varPhi}{\partial x^\mu}$ 是协变矢量.

判断的依据是 $A_\mu$ 是否满足协变矢量的坐标变换规律. 坐标变换后，有

$$
A'_\alpha = \frac{\partial\varPhi'}{\partial x'^\alpha}=\frac{\partial\varPhi}{\partial x^\mu}\frac{\partial x^\mu}{\partial x'^\alpha}=A_\mu\frac{\partial x^\mu}{\partial x'^\alpha}
$$

这正是协变矢量的变换规律，得证.

## 习题 3

> $T^{\mu\nu}$ 是对称张量，$A_{\mu\nu}$ 是反称张量，证明 $T^{\mu\nu}A_{\mu\nu}=0$.

换傀标名称，我们知道肯定有 $T^{\mu\nu}A_{\mu\nu}=T^{\nu\mu}A_{\nu\mu}$，但是又由条件，

$$
T^{\mu\nu}=T^{\nu\mu}\,,\quad A_{\mu\nu}=-A_{\nu\mu}
$$

所以应该是 $T^{\mu\nu}A_{\mu\nu}=-T^{\nu\mu}A_{\nu\mu}$. 这就有 $T^{\mu\nu}A_{\mu\nu}=-T^{\mu\nu}A_{\mu\nu}$，也就是

$$
T^{\mu\nu}A_{\mu\nu}=0
$$

证毕.

## 习题 4

> 用 $\Gamma^\mu_{\nu\rho}$ 在坐标变换下的变换规律直接证明：$A^\mu{}_{;\rho}=A^\mu{}_{,\rho}+\Gamma^\mu_{\nu\rho}A^\nu$ 是一个二阶混合张量.

换坐标系之后，$A'^\gamma{}_{;\sigma}=A'^\gamma{}_{,\sigma}+\Gamma'^\gamma_{\lambda\sigma}A'^\lambda$，而变换公式表明：

$$
\begin{aligned}
A'^\gamma{}_{,\sigma}&=\frac{\partial A'^\gamma}{\partial x'^\sigma}=\frac{\partial}{\partial x^\rho}\left(A^\mu\frac{\partial x'^\gamma}{\partial x^\mu}\right)\frac{\partial x^\rho}{\partial x'^\sigma}\\\\
&=A^\mu{}_{,\rho}\frac{\partial x'^\gamma}{\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}+A^\mu\frac{\partial^2x'^\gamma}{\partial x^\rho\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}\\\\
\Gamma'^\gamma_{\lambda\sigma}&=\Gamma^\mu_{\nu\rho}\frac{\partial x'^\gamma}{\partial x^\mu}\frac{\partial x^\nu}{\partial x'^\lambda}\frac{\partial x^\rho}{\partial x'^\sigma}+\frac{\partial^2x^\alpha}{\partial x'^\lambda\partial x'^\sigma}\frac{\partial x'^\gamma}{\partial x^\alpha}\\\\
A'^\lambda &= A^\nu\frac{\partial x'^\lambda}{\partial x^\nu}
\end{aligned}
$$

于是

$$
\begin{aligned}
A'^\gamma{}_{;\sigma}&=(A^\mu{}_{,\rho}+\Gamma^\mu_{\nu\rho}A^\nu)\frac{\partial x'^\gamma}{\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}+A^\mu\frac{\partial^2x'^\gamma}{\partial x^\rho\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}\\\\
&\quad+A^\nu\frac{\partial x'^\lambda}{\partial x^\nu}\frac{\partial^2x^\alpha}{\partial x'^\lambda\partial x'^\sigma}\frac{\partial x'^\gamma}{\partial x^\alpha}\\\\
&=(A^\mu{}_{,\rho}+\Gamma^\mu_{\nu\rho}A^\nu)\frac{\partial x'^\gamma}{\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}+A^\mu\frac{\partial^2x'^\gamma}{\partial x^\rho\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}\\\\
&\quad+A^\mu\frac{\partial x'^\lambda}{\partial x^\mu}\frac{\partial^2x^\alpha}{\partial x'^\lambda\partial x'^\sigma}\frac{\partial x'^\gamma}{\partial x^\alpha}
\end{aligned}
$$

现在只要证明：

$$
\frac{\partial^2x'^\gamma}{\partial x^\rho\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}+\frac{\partial x'^\lambda}{\partial x^\mu}\frac{\partial^2x^\alpha}{\partial x'^\lambda\partial x'^\sigma}\frac{\partial x'^\gamma}{\partial x^\alpha}=0
$$

对于这种两项都没有很明显的「负号」的情况，想到的方法似乎只能是凑一个全微分. 稍微化简一些因为链式法则而展开的部分：

$$
\begin{aligned}
\frac{\partial^2x'^\gamma}{\partial x'^\sigma\partial x^\mu}+\frac{\partial^2x^\alpha}{\partial x^\mu\partial x'^\sigma}\frac{\partial x'^\gamma}{\partial x^\alpha}&=0\\\\
\frac{\partial}{\partial x^\mu}\left(\frac{\partial x'^\gamma}{\partial x^\alpha}\frac{\partial x^\alpha}{\partial x'^\sigma}\right)&=0
\end{aligned}
$$

很明显，括号内的东西是 $1$，这就证明了 $A^\mu{}_{;\rho}$ 满足如下变换规律：

$$
A'^\gamma{}_{;\sigma}=A^\mu{}_{;\rho}\frac{\partial x'^\gamma}{\partial x^\mu}\frac{\partial x^\rho}{\partial x'^\sigma}
$$

是二阶混合张量.

## 习题 5

> 已知 $\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu=-\text{d}\tau^2$，从变分原理
>
> $$
> \delta\int_A^B\text{d}s=0\quad\text{or}\quad\delta\int_A^B\left(\frac{\text{d}\tau}{\text{d}\lambda}\right)^2\text{d}\lambda=0
> $$
>
> 求出短程线方程.

这个在 [Chapter 2 - 短程线](/self-learn-GR/chapter-2/#短程线) 这里讲过了罢.

## 习题 6

> 试证：
>
> $$
> \Gamma^\mu_{\alpha\mu}=\frac{1}{2}g^{\mu\nu}g_{\mu\nu,\alpha}=\frac{\partial}{\partial x^\alpha}(\ln\sqrt{-g})
> $$

在 [Chapter 2 - 三个派生的重要张量](/self-learn-GR/chapter-2/#三个派生的重要张量) 这里写过.

## 习题 7

> 设 $\{t,x\}$ 是二维 Minkowski 空间的 Lorentz 坐标系，试证由下式定义的 $\{t',x'\}$ 也是 Lorentz 系：
>
> $$
> \begin{cases}
> t'=t\cosh\lambda+x\sinh\lambda\\\\
> x'=t\sinh\lambda+x\cosh\lambda
> \end{cases}\,,\quad\lambda=\text{const.}
> $$
>
> 注：Lorentz 坐标系指二维 Minkowski 度规在其中能写成
>
> $$
> \begin{pmatrix}
> -1&0\\0&1
> \end{pmatrix}
> $$
>
> 的坐标系.

度规的变换法则：

$$
g'_{\mu\nu}=g_{\alpha\beta}\frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x^\beta}{\partial x'^\nu}
$$

因为是二维，直接计算分量好了：

$$
\begin{aligned}
g'_{11}&=g_{11}\frac{\partial t}{\partial t'}\frac{\partial t}{\partial t'}+g_{12}\frac{\partial t}{\partial t'}\frac{\partial x}{\partial t'}+g_{21}\frac{\partial x}{\partial t'}\frac{\partial t}{\partial t'}+g_{22}\frac{\partial x}{\partial t'}\frac{\partial x}{\partial t'}\\\\
&=-\cosh^2\lambda+0+0+\sinh^2\lambda=-1\\\\
g'_{12}&=g_{11}\frac{\partial t}{\partial t'}\frac{\partial t}{\partial x'}+g_{12}\frac{\partial t}{\partial t'}\frac{\partial x}{\partial x'}+g_{21}\frac{\partial x}{\partial t'}\frac{\partial t}{\partial x'}+g_{22}\frac{\partial x}{\partial t'}\frac{\partial x}{\partial x'}\\\\
&=\cosh\lambda\sinh\lambda+0+0-\cosh\lambda\sinh\lambda=0\\\\
g'_{21}&=g_{11}\frac{\partial t}{\partial x'}\frac{\partial t}{\partial t'}+g_{12}\frac{\partial t}{\partial x'}\frac{\partial x}{\partial t'}+g_{21}\frac{\partial x}{\partial x'}\frac{\partial t}{\partial t'}+g_{22}\frac{\partial x}{\partial x'}\frac{\partial x}{\partial t'}\\\\
&=\cosh\lambda\sinh\lambda+0+0-\cosh\lambda\sinh\lambda=0\\\\
g'_{22}&=g_{11}\frac{\partial t}{\partial x'}\frac{\partial t}{\partial x'}+g_{12}\frac{\partial t}{\partial x'}\frac{\partial x}{\partial x'}+g_{21}\frac{\partial x}{\partial x'}\frac{\partial t}{\partial x'}+g_{22}\frac{\partial x}{\partial x'}\frac{\partial x}{\partial x'}\\\\
&=\cosh^2\lambda+0+0-\sinh^2\lambda=1
\end{aligned}
$$

得证.

## 习题 8

> 已知 $g_{\mu\nu;\lambda}=0$，求证 $g^{\mu\nu}{}_{;\lambda}=0$.

已知恒等式 $g^{\mu\alpha}g_{\alpha\nu}=\delta^\mu{}_\nu$，对这个式子两边求协变微商：

$$
g^{\mu\alpha}{}_{;\lambda}\cdot g_{\alpha\nu}+g^{\mu\alpha}g_{\alpha\nu;\lambda}=0
$$

但是我们已经知道 $g_{\alpha\nu;\lambda}=0$，所以 $g^{\mu\alpha}{}_{;\lambda}\cdot g_{\alpha\nu}=0$. 再两边同时乘以 $g^{\nu\beta}$：

$$
g^{\mu\alpha}{}_{;\lambda}\cdot\delta^{\beta}{}_\alpha=g^{\mu\beta}{}_{;\lambda}=0
$$

证毕.

## 习题 9

> 已知 $A_{\mu;\nu}=A_{\mu,\nu}-\Gamma^\lambda_{\mu\nu}A_\lambda$，利用标量微分关系 $U_{;\mu}=U_{,\mu}$ 以及 Leibniz 法则证明：
>
> $$
> B^\mu{}_{;\nu}=B^\mu{}_{,\nu}+\Gamma^\mu_{\lambda\nu}B^\lambda
> $$

(说起来这个不是也推导过吗… 算了)

构造一个标量 $A_\mu B^\mu$，对这个标量求协变微商：

$$
\begin{aligned}
(A_\mu B^\mu)_{;\lambda} &= (A_\mu B^\mu)_{,\lambda}\\\\
A_{\mu;\lambda}B^\mu+A_\mu B^\mu{}_{;\lambda}&=A_{\mu,\lambda}B^\mu+A_\mu B^\mu{}_{,\lambda}\\\\
(A_{\mu,\lambda}-\Gamma^\nu_{\mu\lambda}A_\nu)B^\mu+A_\mu B^\mu{}_{;\lambda}&=A_{\mu,\lambda}B^\mu+A_\mu B^\mu{}_{,\lambda}\\\\
A_\mu B^\mu{}_{;\lambda}&=A_\mu B^\mu{}_{,\lambda}+\Gamma^\nu_{\mu\lambda}A_\nu B^\mu\\\\
A_\mu B^\mu{}_{;\lambda}&=A_\mu B^\mu{}_{,\lambda}+\Gamma^\mu_{\nu\lambda}A_\mu B^\nu\\\\
B^\mu{}_{;\lambda}&=B^\mu{}_{,\lambda}+\Gamma^\mu_{\nu\lambda}B^\nu
\end{aligned}
$$

证毕.

## 习题 10

> 一个嵌入三维 Euclidean 空间的普通球面空间，选用球极坐标系，则其线元为
>
> $$
> \text{d}s^2=a^2\text{d}\theta^2+a^2\sin^2\theta\text{d}\varphi^2
> $$
>
> (1) 求 $g^{\mu\nu}$.
>
> (2) 求全部的 Christoffel 联络 $\Gamma^\mu_{\alpha\beta}$.
>
> (3) 求全部 $R^\mu_{\nu\rho\sigma}$.
>
> (4) 求全部 $R_{\mu\nu}$.
>
> (5) 求 $R$.
>
> (6) 写出该度规表示的球面空间的测地线方程.

(1) 我们知道，$\text{d}s^2=g_{\mu\nu}\text{d}x^\mu\text{d}x^\nu$，完整写出就是

$$
\text{d}s^2=g_{11}\text{d}\theta\text{d}\theta+g_{12}\text{d}\theta\text{d}\varphi+g_{21}\text{d}\varphi\text{d}\theta+g_{22}\text{d}\varphi\text{d}\varphi
$$

对比 $\text{d}s^2$ 的表达式，得到：

$$
g_{11}=a^2\,,\quad g_{12}=g_{21}=0\,,\quad g_{22}=a^2\sin^2\theta
$$

逆变度规张量是协变度规张量的逆矩阵，所以

$$
(g^{\mu\nu})=\begin{pmatrix}
1/a^2&0\\
0&1/a^2\sin^2\theta
\end{pmatrix}
$$

(2) 直接用 Christoffel 联络的定义：

$$
\Gamma^{\mu}_{\alpha\beta}=\frac{1}{2}g^{\mu\lambda}(g_{\alpha\lambda,\beta}+g_{\beta\lambda,\alpha}-g_{\alpha\beta,\lambda})
$$

本来想一个一个算，后来发现，只有 $g_{22}=a^2\sin^2\theta$ 可以求微商，其他分量全部是 $0$，所以可以简化一些计算.

$$
\begin{aligned}
\boxed{\Gamma^1_{11}}&=\boxed{\Gamma^2_{11}}=\boxed{0}\\\\
\boxed{\Gamma^1_{12}}&=\boxed{\Gamma^1_{21}}=\frac{1}{2}g^{12}g_{22,1}=\boxed{0}\\\\
\boxed{\Gamma^2_{12}}&=\boxed{\Gamma^2_{21}}=\frac{1}{2}g^{22}g_{22,1}=\frac{1}{2}\cdot\frac{1}{a^2\sin^2\theta}\cdot2a^2\sin\theta\cos\theta=\boxed{\cot\theta}\\\\
\boxed{\Gamma^1_{22}}&=-\frac{1}{2}g^{11}g_{22,1}=-\frac{1}{2}\cdot\frac{1}{a^2}\cdot2a^2\sin\theta\cos\theta=\boxed{-\sin\theta\cos\theta}\\\\
\boxed{\Gamma^2_{22}}&=-\frac{1}{2}g^{21}g_{22,1}+\frac{1}{2}g^{22}g_{22,2}=\boxed{0}
\end{aligned}
$$

只有三个分量不是 $0$.

(这个答案我也没验证过，不过在试图用 Mathematica 验证时翻到了一个小玩意：[RGTC Mathematica description](https://www-thphys.physics.ox.ac.uk/people/AndreiStarinets/RGTC_mathematica_description.pdf)，看起来很有意思，先在这里留个档)

(3) 天啊他居然还要我算曲率张量… 二维空间，曲率张量只有 $16$ 个分量，至少还有手动计算的动力. 接下来尝试计算.

由定义，曲率张量

$$
R^\rho_{\lambda\mu\nu}=\Gamma^\rho_{\lambda\nu,\mu}-\Gamma^\rho_{\lambda\mu,\nu}+\Gamma^\rho_{\sigma\mu}\Gamma^\sigma_{\lambda\nu}-\Gamma^\rho_{\sigma\nu}\Gamma^\sigma_{\lambda\mu}
$$

直接开始算 (ようこそ，``\Gamma`` の世界)：

$$
\begin{aligned}
\boxed{R^1_{111}}&=\Gamma^1_{11,1}-\Gamma^1_{11,1}+(\Gamma^1_{11}\Gamma^1_{11}+\Gamma^1_{21}\Gamma^2_{11})-(\Gamma^1_{11}\Gamma^1_{11}+\Gamma^1_{21}\Gamma^2_{11})=\boxed{0}\\\\
\boxed{R^2_{111}}&=\Gamma^2_{11,1}-\Gamma^2_{11,1}+(\Gamma^2_{11}\Gamma^1_{11}+\Gamma^2_{21}\Gamma^2_{11})-(\Gamma^2_{11}\Gamma^1_{11}+\Gamma^2_{21}\Gamma^2_{11})=\boxed{0}\\\\
\boxed{R^1_{211}}&=\Gamma^1_{21,1}-\Gamma^1_{21,1}+(\Gamma^1_{11}\Gamma^1_{21}+\Gamma^1_{21}\Gamma^2_{21})-(\Gamma^1_{11}\Gamma^1_{21}+\Gamma^1_{21}\Gamma^2_{21})=\boxed{0}\\\\
\boxed{R^2_{211}}&=\Gamma^2_{21,1}-\Gamma^2_{21,1}+(\Gamma^2_{11}\Gamma^1_{21}+\Gamma^2_{21}\Gamma^2_{21})-(\Gamma^2_{11}\Gamma^1_{21}+\Gamma^2_{21}\Gamma^2_{21})=\boxed{0}\\\\
\boxed{R^1_{121}}&=\Gamma^1_{11,2}-\Gamma^1_{12,1}+(\Gamma^1_{12}\Gamma^1_{11}+\Gamma^1_{22}\Gamma^2_{11})-(\Gamma^1_{11}\Gamma^1_{12}+\Gamma^1_{21}\Gamma^2_{12})=\boxed{0}\\\\
\boxed{R^2_{121}}&=\Gamma^2_{11,2}-\underline{\Gamma^2_{12,1}}+(\Gamma^2_{12}\Gamma^1_{11}+\Gamma^2_{22}\Gamma^2_{11})-(\Gamma^2_{11}\Gamma^1_{12}+\underline{\Gamma^2_{21}\Gamma^2_{12}})=\boxed{1}\\\\
\boxed{R^1_{112}}&=\Gamma^1_{12,1}-\Gamma^1_{11,2}+(\Gamma^1_{11}\Gamma^1_{12}+\Gamma^1_{21}\Gamma^2_{12})-(\Gamma^1_{12}\Gamma^1_{11}+\Gamma^1_{22}\Gamma^2_{11})=\boxed{0}\\\\
\boxed{R^2_{112}}&=\underline{\Gamma^2_{12,1}}-\Gamma^2_{11,2}+(\Gamma^2_{11}\Gamma^1_{12}+\underline{\Gamma^2_{21}\Gamma^2_{12}})-(\Gamma^2_{12}\Gamma^1_{11}+\Gamma^2_{22}\Gamma^2_{11})=\boxed{-1}\\\\
\boxed{R^1_{221}}&=\Gamma^1_{21,2}-\underline{\Gamma^1_{22,1}}+(\Gamma^1_{12}\Gamma^1_{21}+\underline{\Gamma^1_{22}\Gamma^2_{21}})-(\Gamma^1_{11}\Gamma^1_{22}+\Gamma^1_{21}\Gamma^2_{22})=\boxed{-\sin^2\theta}\\\\
\boxed{R^2_{221}}&=\Gamma^2_{21,2}-\Gamma^2_{22,1}+(\Gamma^2_{12}\Gamma^1_{21}+\Gamma^2_{22}\Gamma^2_{21})-(\Gamma^2_{11}\Gamma^1_{22}+\Gamma^2_{21}\Gamma^2_{22})=\boxed{0}\\\\
\boxed{R^1_{122}}&=\Gamma^1_{12,2}-\Gamma^1_{12,2}+(\Gamma^1_{12}\Gamma^1_{12}+\Gamma^1_{22}\Gamma^2_{12})-(\Gamma^1_{12}\Gamma^1_{12}+\Gamma^1_{22}\Gamma^2_{12})=\boxed{0}\\\\
\boxed{R^2_{122}}&=\Gamma^2_{12,2}-\Gamma^2_{12,2}+(\Gamma^2_{12}\Gamma^1_{12}+\Gamma^2_{22}\Gamma^2_{12})-(\Gamma^2_{12}\Gamma^1_{12}+\Gamma^2_{22}\Gamma^2_{12})=\boxed{0}\\\\
\boxed{R^1_{212}}&=\underline{\Gamma^1_{22,1}}-\Gamma^1_{21,2}+(\Gamma^1_{11}\Gamma^1_{22}+\Gamma^1_{21}\Gamma^2_{22})-(\Gamma^1_{12}\Gamma^1_{21}+\underline{\Gamma^1_{22}\Gamma^2_{21}})=\boxed{\sin^2\theta}\\\\
\boxed{R^2_{212}}&=\Gamma^2_{22,1}-\Gamma^2_{21,2}+(\Gamma^2_{11}\Gamma^2_{22}+\Gamma^2_{21}\Gamma^2_{22})-(\Gamma^2_{12}\Gamma^1_{21}+\Gamma^2_{22}\Gamma^2_{21})=\boxed{0}\\\\
\boxed{R^1_{222}}&=\Gamma^1_{22,2}-\Gamma^1_{22,2}+(\Gamma^1_{12}\Gamma^1_{22}+\Gamma^1_{22}\Gamma^2_{22})-(\Gamma^1_{12}\Gamma^1_{22}+\Gamma^1_{22}\Gamma^2_{22})=\boxed{0}\\\\
\boxed{R^2_{222}}&=\Gamma^2_{22,2}-\Gamma^2_{22,2}+(\Gamma^2_{12}\Gamma^1_{22}+\Gamma^2_{22}\Gamma^2_{22})-(\Gamma^2_{12}\Gamma^1_{22}+\Gamma^2_{22}\Gamma^2_{22})=\boxed{0}
\end{aligned}
$$
::: warning

强行算完发现没必要这样… 因为我们之前引入过 $R_{\rho\lambda\mu\nu}$，并 [探究过它的性质](/self-learn-GR/chapter-2/#曲率张量的独立分量)，所以这里也是一样，根据讨论，我们知道四个指标只有两个不同值时，独立分量个数为
$$
N(n=2)=\frac{n!}{2!(n-2)!}=1
$$
也就是只有一个独立的 $R_{\rho\lambda\mu\nu}=R_{\mu\nu\mu\nu}=R_{1212}$. 有
$$
R_{1212}=-R_{2112}=-R_{1221}=R_{2121}
$$
这四个不为零的分量. 通过计算一个例子：
$$
R^1_{212}=\Gamma^1_{22,1}-\Gamma^1_{21,2}+(\Gamma^1_{11}\Gamma^1_{22}+\Gamma^1_{21}\Gamma^2_{22})-(\Gamma^1_{12}\Gamma^1_{21}+\Gamma^1_{22}\Gamma^2_{21})=\sin^2\theta
$$
降逆变指标得
$$
R_{1212}=g_{11}R^1_{212}+g_{21}R^1_{212}=a^2\sin^2\theta
$$
升指标，可以得到其他的几个非零分量：
$$
\begin{aligned}
R^2_{112}&=g^{12}R_{2112}+g^{22}R_{2112}=-1\\\\
R^1_{221}&=g^{11}R_{1221}+g^{21}R_{1221}=-\sin^2\theta\\\\
R^2_{121}&=g^{12}R_{2121}+g^{22}R_{2121}=1
\end{aligned}
$$
教训：在计算分量极多的张量时，应该通过各种手段排除掉为零的分量.

:::

(4) 计算 Ricci 张量，缩并曲率张量的逆变指标和第二协变指标即可，一共是 $4$ 个分量 (同时注意，Ricci 张量是对称张量).
$$
\begin{aligned}
R_{11}&=R^1_{111}+R^2_{121}=1\\\\
R_{12}&=R_{21}=R^1_{112}+R^2_{122}=0\\\\
R_{22}&=R^1_{212}+R^2_{222}=\sin^2\theta
\end{aligned}
$$
::: danger

我发现很多地方定义的 Ricci 张量是缩并逆变和第三个协变指标，这会差一个负号. 目前看来两者并没有什么很大的区别，又是一个小的符号法则问题.

:::

(5) 曲率标量，缩并 Ricci 张量 (升一个指标，再求和) 即可，
$$
R=g^{\mu\nu}R_{\mu\nu}=g^{11}R_{11}+g^{22}R_{22}=\frac{1}{a^2}+\frac{1}{a^2\sin^2\theta}\cdot\sin^2\theta=\frac{2}{a^2}
$$
这里也是，差一个负号.

(6) 测地线方程，定义式是
$$
\frac{\text{d}^2x^\mu}{\text{d}s^2}+\Gamma^\mu_{\alpha\beta}\frac{\text{d}x^\alpha}{\text{d}s}\frac{\text{d}x^\beta}{\text{d}s}=0
$$
(参量用的是曲线长度) 把之前算的东西放进去，
$$
\begin{aligned}
\frac{\text{d}^2\theta}{\text{d}s^2}-\sin\theta\cos\theta\left(\frac{\text{d}\varphi}{\text{d}s}\right)^2&=0\\\\
\frac{\text{d}^2\varphi}{\text{d}s^2}+2\cot\theta\cdot\frac{\text{d}\theta}{\text{d}s}\frac{\text{d}\varphi}{\text{d}s}&=0
\end{aligned}
$$

## 习题 11

> 证明 Bianchi 恒等式：
> $$
> R^\rho_{\lambda\mu\nu;\sigma}+R^\rho_{\lambda\nu\sigma;\mu}+R^\rho_{\lambda\sigma\mu;\nu}=0
> $$
> 以及
> $$
> \left(R^{\mu\nu}-\frac{1}{2}g^{\mu\nu}R\right)_{;\nu}=0
> $$

就在笔记里面写了：[Chapter 2 - Bianchi 恒等式](/self-learn-GR/chapter-2/#bianchi-恒等式).

---

在这里放一些参考文献：

- [《广义相对论基础》第二章习题 | 超理论坛](https://chaoli.club/index.php/11231) (这个楼主 triint 算是我的网友)
- [赵峥、刘文彪《广义相对论基础》第二版习题（2-4 章）| 知乎](https://zhuanlan.zhihu.com/p/1914419858516448713)