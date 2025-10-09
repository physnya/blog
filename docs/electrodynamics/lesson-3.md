---
title: Lesson 3 磁场的有关规律
permalink: /electrodynamics/lesson-3-megnetic-field/
createTime: 2025/09/23 11:26:39
---
上节课讲了静电场的有关方程，这节课继续讲静磁场的方程.

先回顾上节课得到的 $\nabla\cdot\vec{E}=\rho/\varepsilon_0$，这是一个「线性」的方程，所谓「线性」指的是场和源两者都是一次的. 因为方程是线性的，所以电场符合叠加原理，一个 $\rho_i$ 的分布能够产生一个 $\vec{E}_i$ 的电场，最后空间中的总电场是 $\sum_i\vec{E}_i$.

另外，静电场的旋度 $\nabla\times\vec{E}=0$，它是一个保守场.

下面来推导静磁场的有关方程. 一开始人们认为磁场的方程应该相当复杂，因为有天然磁体、铁磁体等等也能产生磁场；但是发现电流的磁效应、提出分子电流假说之后，磁场的定律变得能够理解.

> 当然分子电流假说在更深的层次上并不是正确的. 一个例子是电子自旋的经典解释，会导致电子的表面旋转速度远超光速，这是违背狭义相对论的.

电流密度：$\vec{j}=\rho\vec{v}$，这里 $\rho$ 是某种特定载流子的电荷密度、$\vec{v}$ 必须是载流子定向移动的速度. 当然这个定向漂移的速度比热运动速度要小得多，而且越是良导体、载流子浓度越高，定向漂移的速度就越慢. 这也解释为什么不良导体的 Hall 效应更加明显，因为不良导体在同样电流密度的情况下载流子定向漂移速度大，受到磁力更强.

电荷守恒：
$$
-\iint\vec{j}\cdot\text{d}\vec{\sigma}=\frac{\text{d}}{\text{d}t}\iiint\rho\text{d}\tau\Longrightarrow\nabla\cdot\vec{j}+\frac{\partial\rho}{\partial t}=0
$$
如果两项都是零，就构成稳恒电流.

Biot - Savart's law：
$$
\text{d}\vec{B}(\vec{r})=\frac{\mu_0}{4\pi}\frac{\vec{j}(\vec{r}')\times(\vec{r}-\vec{r}')}{|\vec{r}-\vec{r}'|^3}\text{d}\tau'\,,\quad\vec{B}(\vec{r})=\frac{\mu_0}{4\pi}\iiint\frac{\vec{j}(\vec{r}')\times(\vec{r}-\vec{r}')}{|\vec{r}-\vec{r}'|^3}\text{d}\tau'
$$
后者是叠加原理的结果. 如果仅仅是一个点电荷在空间中以 $\vec{v}$ 运动，那么电流元就是 $q\vec{v}$.

电流元受到磁场的力密度：$\vec{f}=\vec{j}\times\vec{B}$.

下面推导微分形式：
$$
\begin{aligned}
\vec{B}(\vec{r})&=\frac{\mu_0}{4\pi}\int_{V'}\frac{\vec{j}(\vec{r}')\times(\vec{r}-\vec{r}')}{|\vec{r}-\vec{r}'|^3}\text{d}\tau'\\\\
&=-\frac{\mu_0}{4\pi}\int_{V'}\vec{j}(\vec{r}')\times\nabla\frac{1}{|\vec{r}-\vec{r}'|}\text{d}\tau'\\\\
&=\frac{\mu_0}{4\pi}\int_{V'}\nabla\frac{1}{|\vec{r}-\vec{r}'|}\times\vec{j}(\vec{r}')\text{d}\tau'
\end{aligned}
$$
我们的目的是把 $\vec{B}$ 写成某个矢量场的旋度 (因为我们已经知道 $\vec{B}$ 没有散度)，利用 $\vec{j}$ 依赖的是源点坐标 $\vec{r}'$ 而不是场点坐标 $\vec{r}$，所以 $\nabla_{\vec{r}}\times\vec{j}(\vec{r}')=0$，最终上面的式子化为：
$$
\begin{aligned}
\nabla\varphi\times\vec{f}&=\nabla\times(\varphi\vec{f})-\varphi\nabla\times\vec{f}\\\\
\vec{B}(\vec{r})&=\frac{\mu_0}{4\pi}\int_{V'}\nabla\times\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'
\end{aligned}
$$
这时候可以定义磁矢势 $\vec{A}$ (因为积分是对源点积分，但是 $\nabla$ 是对场点求导，所以可以提到积分号外)：
$$
\vec{A}(\vec{r})=\frac{\mu_0}{4\pi}\int_{V'}\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'\,,\quad\vec{B}(\vec{r})=\nabla\times\vec{A}(\vec{r})
$$
观察发现这个磁矢势的表达式和电势几乎完全一致，从相对论的角度看，这两者能够构成一个四维的矢量，也就是四维势.

因为磁场是一个旋度场，所以一定无散度 $\nabla\cdot\vec{B}=0$.

磁场的旋度：
$$
\begin{aligned}
\nabla\times\vec{B}&=\nabla\times(\nabla\times\vec{A})=\nabla(\nabla\cdot\vec{A})-\nabla^2\vec{A}\\\\
\nabla\cdot\vec{A}&=\nabla_{\vec{r}}\cdot\frac{\mu_0}{4\pi}\int_{V'}\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'=\frac{\mu_0}{4\pi}\int_{V'}\nabla_{\vec{r}}\cdot\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'\\\\
&=\frac{\mu_0}{4\pi}\int_{V'}\left[\nabla_{\vec{r}}\frac{1}{|\vec{r}-\vec{r}'|}\cdot\vec{j}(\vec{r}')+\frac{1}{|\vec{r}-\vec{r}'|}\nabla_{\textcolor{red}{\vec{r}}}\cdot\vec{j}(\textcolor{red}{\vec{r}'})\right]\text{d}\tau'\\\\
&=\frac{\mu_0}{4\pi}\int_{V'}\nabla_{\textcolor{red}{\vec{r}}}\frac{1}{|\vec{r}-\vec{r}'|}\cdot\vec{j}(\vec{r}')\text{d}\tau'=\textcolor{red}{-}\frac{\mu_0}{4\pi}\int_{V'}\nabla_{\textcolor{red}{\vec{r}'}}\frac{1}{|\vec{r}-\vec{r}'|}\cdot\vec{j}(\vec{r}')\text{d}\tau'\\\\
&=-\frac{\mu_0}{4\pi}\int_{V'}\left[\nabla_{\vec{r}'}\cdot\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}-\frac{1}{|\vec{r}-\vec{r}'|}\nabla_{\vec{r}'}\cdot\vec{j}(\vec{r}')\right]\text{d}\tau'\\\\
&\overset{\text{constant }I}{=}-\frac{\mu_0}{4\pi}\int_{V'}\nabla_{\vec{r}'}\cdot\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'\\\\
&=\frac{\mu_0}{4\pi}\iint_S\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\cdot\text{d}\vec{S}
\end{aligned}
$$
这里，应该积分要覆盖所有有电流的区域，没有电流通往表面，上述积分是零.
$$
\begin{aligned}
\nabla^2\vec{A}(\vec{r})&=\frac{\mu_0}{4\pi}\int_{V'}\nabla^2\frac{\vec{j}(\vec{r}')}{|\vec{r}-\vec{r}'|}\text{d}\tau'=\frac{\mu_0}{4\pi}\int_{V'}\vec{j}(\vec{r}')\nabla^2\frac{1}{|\vec{r}-\vec{r}'|}\text{d}\tau\\\\
&=\frac{\mu_0}{4\pi}\int_{V'}\vec{j}(\vec{r}')[-4\pi\delta(\vec{r}-\vec{r}')]\text{d}\tau'\\\\
&=-\mu_0\int_{V'}\vec{j}(\vec{r}')\delta(\vec{r}-\vec{r}')\text{d}\tau'=-\mu_0\vec{j}(\vec{r})\\\\
\nabla\times\vec{B}(\vec{r})&=\mu_0\vec{j}(\vec{r})
\end{aligned}
$$
静磁场的定律就是：
$$
\nabla\cdot\vec{B}=0\,,\quad\nabla\times\vec{B}=\mu_0\vec{j}
$$

---

下面研究随时间变化的电磁场定律. 最早的一条应该是 Faraday 的电磁感应定律，「闭合线圈中的感应电动势和通过该线圈的磁通量变化率成正比」
$$
\oint_L\vec{E}\cdot\text{d}\vec{l}=\varepsilon=-\frac{\text{d}\varPhi_m}{\text{d}t}=-\frac{\text{d}}{\text{d}t}\iint_S\vec{B}\cdot\text{d}\vec\sigma
$$
如果把求导移到积分号之内，就得到了
$$
\oint_L\vec{E}\cdot\text{d}\vec{l}=-\iint_S\frac{\partial\vec{B}}{\partial t}\cdot\text{d}\vec{\sigma}
$$
动态磁场的散度是零吗？

> 我们上面磁通量所使用的面积的选择是自由的，两种不同面积的选择 $S_1$ 和 $S_2$ 恰好构成一个闭合曲面，只是方向相反. 要使得面积选择自由，必须有
> $$
> \iint_{S_1}\vec{B}\cdot\text{d}\vec\sigma+\iint_{S_2}\vec{B}\cdot\text{d}\vec\sigma=0
> $$
> 这正是动态磁场散度为零.

另外，要注意理解参考系的选择：到底是线圈在移动、磁场不动；还是线圈不动、磁场在移动？这会产生动生电动势和感生电动势的不同描述，但是电磁规律永远是一样的.