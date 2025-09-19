---
title: Lesson 1 建立模型 & 常微分
permalink: /equation-m-p/lesson-1/
createTime: 2025/09/19 09:46:10
---
可以说是本科数学里面最无聊最枯燥的一门课.

相对于数学系的偏微分方程，这门课不考虑方程是不是「有解」，而是直接上手解方程，没有什么思路.

计分：期中可能有小测 ($5\%$)，如果没有就和平时成绩算在一起为 $20\%$，最后期末考试占 $80\%$.

## 模型的建立：方程与定解条件

### 物理中的数理方程

重点在于记结论.

问题的来源：

- 静电势满足 Laplace 方程或者 Poisson 方程

  > $$
  > \nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}\,,\quad\nabla^2\varphi=-\frac{\rho}{\varepsilon_0}
  > $$

- 波动方程

- 热传导问题和扩散问题中的热传导方程

- 描写电磁场运动变化的 Maxwell 方程组

- 作为微观物质运动基本规律的 Schrödinger 方程和 Dirac 方程

- 连续介质力学中的 Navier–Stockes 方程组和 Euler 方程组

- 弹性力学中的 Saint-Venant 方程组

这些 **大多数** 是二阶线性偏微分方程 (组).

下面导出一些方程.

#### 弦的横振动方程

先假定力只能沿切线方向 (完全柔软，无剪切力)，且弦均匀，做小的横振动.

::: danger

「小振动」并不意味着振幅小，它的概念我们之后会仔细辨析.

:::

取弦的平衡位置是 $x$ 轴，两端在 $x=0$ 和 $x=l$. 偏离平衡位置的大小为 $u$.

::: tip

这个变量用 $u$，数理方程中我们所有的变量都会用 $u$，这只是一个传统.

:::

对于原长在 $x\to x+\text{d}x$ 的小线元，质量为 $\rho\text{d}x$，$x$ 和 $u$ 方向的受力方程分别是
$$
\begin{aligned}
(T\cos\theta)_{x+\text{d}x}-(T\cos\theta)_x&=0\\
(T\sin\theta)_{x+\text{d}x}-(T\sin\theta)_x&=\rho\text{d}x\cdot\frac{\partial^2u}{\partial t^2}
\end{aligned}
$$
现在要用小振动近似. 我们之前没说什么是小振动，就是因为在这里我们想让什么东西小就可以让什么东西小. 我们要求小振动的条件是：
$$
\tan\theta=\left|\frac{\partial u}{\partial x}\right|\ll1
$$
所以 $\sin\theta\approx\tan\theta$，$\cos\theta\approx1$. 第一个方程立即得到 $T(x)=T(x+\text{d}x)$，当然我们从来没有说过 $T$ 也是一个关于时间的常数. 方程化为
$$
T\left(\left.\frac{\partial u}{\partial x}\right|_{x+\text{d}x}-\left.\frac{\partial u}{\partial x}\right|_{x}\right)=\rho\text{d}x\cdot\frac{\partial^2u}{\partial t^2}
$$
也就是
$$
\rho\frac{\partial^2u}{\partial t^2}-T\frac{\partial^2u}{\partial x^2}=0\Longrightarrow\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0
$$
后面的是一个普遍的形式.

证明 $T$ 与时间无关：

> 线元的伸长为
> $$
> \text{d}s-\text{d}x=\left[\sqrt{1+\left(\frac{\partial u}{\partial x}\right)^2}-1\right]\text{d}x=O\left(\left(\frac{\partial u}{\partial x}\right)^2\right)
> $$
> 忽略二阶的话这就是零，既然弦不伸长那么也不会有张力的变化.

如果弦在横向还另外受到一个外力，则最后方程只是多一项：
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=f(x)\,,\quad f(x)=\frac{F(x)}{\rho}
$$
现在变成了一个线性非齐次的二阶方程.

> 什么是「线性」？
>
> > 把 $u$ 换成 $\lambda u$，能够在每一个未知项里面提出来一个 $\lambda$ 的就是线性的.
> >
> > 线性一定有叠加原理，可以把 $u$ 换成两个特解的线性叠加 $c_1u_1+c_2u_2$.
>
> 什么是「齐次」？
>
> > 未知项的次数都是同样次数的，每一项都有未知量的同样次数.

#### 杆的纵振动

我们做非常简化的条件，不考虑横向的应力，只考虑沿着杆的受力和伸缩. 有 Hooke 定律：
$$
P=E\cdot\frac{\Delta l}{l_0}
$$
对原长在 $x\to x+\text{d}x$ 的一段，
$$
\rho S\text{d}x\cdot\frac{\partial^2u}{\partial t^2}=[P(x+\text{d}x,t)-P(x,t)]S
$$
要弄清的问题是：什么是形变？

> 实际上 $u$ 只是一段质元移动的位移，形变来源于 $\text{d}u$，所以
> $$
> P=E\frac{\partial u}{\partial x}
> $$

得到方程是
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0\,,\quad a=\sqrt{\frac{E}{\rho}}
$$
这个方程和上面那一个一模一样，这些统称为波动方程. 一般的波动方程是
$$
\frac{\partial^2u}{\partial t^2}-a^2\nabla^2u=0
$$

#### 热传导方程

会用到两个热学的定律：

* 能量守恒

* 热传导的 Fourier 定律：

  单位时间通过垂直 $x$ 方向的单位面积的热量 $q$ 与温度的空间变化率成正比，
  $$
  q=-k\frac{\partial u}{\partial x}
  $$
  $q$ 是热流密度，$k$ 是导热率，这个负号表征热量从高温向低温传递.

我们假定 $k$ 和温度无关 (这是在温度变化范围不大的情况下合理的近似)，另外这个方程是稳态的定律，$u$ 场应该要已经建立好、不随时间变化. 三维下方程写成
$$
\vec{q}=-k\nabla u
$$
我们建立的模型是一个 $\Delta x\Delta y\Delta z$ 的物块，从六个表面导热：
$$
\begin{aligned}
x\text{ - axis}:&[(q_x)_x-(q_x)_{x+\text{d}x}]\Delta y\Delta z\Delta t\\\\
&=\left[\left(k\frac{\partial u}{\partial x}\right)_{x+\text{d}x}-\left(k\frac{\partial u}{\partial x}\right)_x\right]\Delta y\Delta z\Delta t\\\\
&=k\frac{\partial^2u}{\partial x^2}\Delta x\Delta y\Delta z\Delta t
\end{aligned}
$$
其他方向可以类比，总热量流入为
$$
(k\nabla^2u)\Delta x\Delta y\Delta z\Delta t
$$
比热容为 $c$，密度为 $\rho$，得到
$$
\frac{\partial u}{\partial t}-\kappa\nabla^2u=0\,,\quad\kappa=\frac{k}{\rho c}
$$
$\kappa$ 称为扩散率. 如果介质自己内部有热量产生，则 RHS 加一项：
$$
\frac{\partial u}{\partial t}-\kappa\nabla^2u=\frac{1}{\rho c}F(x,y,z,t)
$$
扩散方程和热传导方程是同样的形式.

::: warning

形如热传导方程的这种称为抛物型方程.

:::

### 稳定问题

比如温度稳定，
$$
\nabla u^2=-\frac{f}{\kappa}\,,\quad f=\frac{F}{\rho c}
$$
静电场是 Gauss 方程 (Poisson 方程)，
$$
\nabla^2 u=-\frac{\rho}{\varepsilon_0}
$$
对于波动方程，如果 $u$ 随时间周期变化，满足 $u=ve^{-\text{i}\omega t}$，则得到 Helmholtz 方程：
$$
\nabla^2v+k^2v=0
$$

#### 总结

我们得到了不同的三类方程：

|                      方程                      | 物理过程 (分类) | 数学分类 |
| :--------------------------------------------: | :-------------: | :------: |
|                    波动方程                    |      波动       |  双曲型  |
|                   热传导方程                   |      扩散       |  抛物型  |
| Poisson 方程<br>Laplace 方程<br>Helmholtz 方程 |      稳恒       |  椭圆型  |

### 边界条件和初始条件

偏微分方程解出的「待定系数」是一个不确定的函数，如果没有 **定解条件** 就完全没办法得到解.

为了完全描述一个具有确定解的物理问题，在数学上需要边界条件和初始条件.

::: tip

lys 在课堂上装自己的电子笔装了 5 min，原因是电池装反了. 但是问题是为什么之前是反的也能用呢？

而且他发现问题的起因是想要告诉大家 $\varphi$ 和 $\phi$ 不一样.

:::

#### 边界条件

边界条件应该完全描写边界上各点在任一时刻的状况.

即使方程和边界条件可能出现一些矛盾，还是要以边界条件为准，因为边界是非常重要的.

比如弦的横振动，两侧固定，则边界条件是两侧的 $u$ 恒为零：
$$
u|_{x=0}=u|_{x=l}=0
$$
(这是零阶的边界 - 第一类边界条件)

杆的纵振动，边界的那一小块 $\varepsilon\to0$，我们认为这一段没有长度、没有质量，所以也不能有加速度，这一端是自由的，则
$$
\left.\frac{\partial u}{\partial x}\right|_{x=l}=0
$$
(这是一阶导数形式的边界 - 第二类边界条件)

如果边界上是一个弹簧，那么边界条件是
$$
\left[\frac{\partial u}{\partial x}+\frac{k}{E}u\right]_{x=l}=\frac{k}{E}u_0
$$
(这是零阶和一阶结合的边界 - 第三类边界条件)

对于热传导，有时边界温度已知：
$$
u|_\Sigma=\phi(\Sigma,t)
$$
也有时是边界上的热流已知：
$$
\left.\frac{\partial u}{\partial n}\right|_\Sigma=\frac{1}{k}\psi(\Sigma,t)
$$
这里的对 $n$ 求偏导指的是在法线方向求导，也就是 $\hat{n}\cdot(\nabla u)$.

上面都是三类边界条件，但是我们还可能遇到无界的问题. 无界空间的边界条件给出未知函数在无穷远处的极限行为，要求很熟乃至它的导数在无穷远处有界.

边界条件和初始条件的区别：

> 初始条件都是卡在自变量的同一个位置，比如规定 $t=0$ 时刻的 $u$ 和 $\dot{u}$；或者 $x=l$ 位置的 $u$ 和 $u'$.
>
> 边界条件则是在自变量不同地方的条件，也不会给出一个 $u$ 的各阶导数.
>
> 以齐次初始条件 $y'|_{x=0}=y|_{x=0}=0$ 定解，方程只有零解；以齐次边界条件 $y|_{x=0}=y|_{x=\pi}=0$ 定解，方程有非零解 $y=C\sin x$，齐次边界条件能够给出非零解.
>
> 也就是说，只有边界条件才会出现本征值问题，产生多解.

#### 连接条件

如果问题有多种介质构成，在介质之间会产生内部的「边界」，比如电场穿过两个不同介质，这个界面上要增加连接条件.

### 定解问题的适定性

这是数学系的偏微分方程课最重视的问题.

偏微分方程 + 定解条件 = 定解问题.

适定性分为：

* 解的存在性：要有解；
* 解的唯一性：定解问题的解是唯一的；
* 解的稳定性：定解问题中的已知条件有微小改变，解也只有微小改变.

/Example/ (一个不适定的例子)

> 这个问题是测量河流中的污染物，边界是岸上没有污染，初始位置没污染.
> $$
> \left\{\begin{array}{ll}
> \frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0&0<y<l,x>0\\\\
> u|_{y=0}=u|_{y=l}=0&x\geq0\\\\
> u|_{x=0}=\frac{\partial u}{\partial x}|_{x=0}=0&0\leq y\leq l
> \end{array}\right.
> $$
> 这个解就是 $u=0$ (很好理解，上游没有污染物，下面肯定一直没有).
>
> 但是我现在做一个扰动，要求
> $$
> u|_{x=0}=\frac{l}{n\pi}\sin\left(\frac{n\pi}{l}y\right)
> $$
> 扰动后变为
> $$
> u=\frac{l}{n\pi}\sin\left(\frac{n\pi}{l}y\right)\textcolor{red}{\cosh\left(\frac{n\pi}{l}x\right)}
> $$
> 下游出现无限大的污染.
>
> 为了定解，应该要在下游测定一个污染值，这样就把初始条件变成了边界条件，这个椭圆型方程即定解.

## 线性偏微分方程的通解

### 常微分方程

至少要会解常微分方程.

* 常系数方程
  $$
  y''+by'+cy=0
  $$
  之类. 可以利用算符，定义
  $$
  D=\frac{\text{d}}{\text{d}x}
  $$
  得到关于 $D$ 的多项式乘上 $y$，比如
  $$
  (D+\alpha_1)(D+\alpha_2)y=0
  $$
  最终的解是 $y=e^{-\alpha_1},e^{-\alpha_2}$.

* Euler 方程
  $$
  x^2y''+bxy'+cy=0
  $$
  令 $x=e^{t}$，则之前的 $D$ 和 $x$ 结合，有
  $$
  D'=\frac{\text{d}}{\text{d}t}\,,\quad xD=D'\,,\quad x^2D^2=D'(D'+1)\,,\cdots
  $$

* 线性齐次方程可以用特解叠加得到通解.

* 常系数非齐次方程，可以用常数变易法找一个特解.

  比如
  $$
  y''+by'+cy=f
  $$
  通解是 $C_1y_1+C_2y_2$，求一阶导
  $$
  C_1y_1'+C_2y_2'+C_1'y_1+C_2'y_2
  $$
  因为只要找特解，所以可以强行要求后面两项和为零，有
  $$
  \begin{cases}
  C_1'y_1+C_2'y_2=0\\\\
  C_1'y_1'+C_2'y_2'=f
  \end{cases}
  $$
  定出函数系数.

