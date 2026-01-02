---
title: Lesson 15 Green 函数法
permalink: /equation-m-p/lesson-15-green-function/
createTime: 2026/01/02 12:05:49
---
今天讲 Green 函数.

## Green 函数

点电荷的电荷密度分布写为 $\rho(\vec{r})=4\pi\delta(0)$. 有了点电荷的电势之后，可以利用点电荷的电势来叠加出任意带电体的电势 —— 当然仅适用于无界空间.

如果我们研究的问题是有界的，那么就要使用更加一般的 Green 函数. 对于下面一个 Poisson 方程的定解问题：
$$
\begin{aligned}
&\nabla^2u(\vec{r})=-\frac{1}{\varepsilon_0}\rho(\vec{r})\\
&u\big|_\Sigma=f(\Sigma)
\end{aligned}
$$
这里是第一类边界条件，而不是齐次边界条件. 我们考虑把 $u(\vec{r})$ 用 $f(\Sigma)$、$\rho(\vec{r})$ 和 $G(\vec{r};\vec{r}')$ 表示出来.

/Theorem/ (Green 第二公式)

> $$
> \iiint_V\left[u\nabla^2v-v\nabla^2u\right]\text{d}^3\vec{r}=\iint_\Sigma\left[u\nabla v-v\nabla u\right]\cdot\text{d}\vec{\Sigma}
> $$

另外还有 Green 第一公式
$$
\iiint_Vu\nabla^2v\text{d}^3\vec{r}=\iint_\Sigma u\nabla v\cdot\text{d}\vec{\Sigma}-\iiint_V\nabla u\cdot\nabla v\text{d}^3\vec{r}
$$
这个公式正是分部积分在三维下的推广，不过并不常用.

把 Green 函数 $G(\vec{r};\vec{r}')$ 作为 $v$ 代入 Green 第二公式，其中 Green 函数是下述问题的解：
$$
\nabla^2G(\vec{r};\vec{r}') = -\frac{1}{\varepsilon_0}\delta(\vec{r}-\vec{r}')
$$
代入得：
$$
-\frac{1}{\varepsilon_0}\left[u(\vec{r}')-\iiint_V G(\vec{r};\vec{r}')\rho(\vec{r})\text{d}^3\vec{r}\right]=\iint_\Sigma[u(\vec{r})\nabla G(\vec{r};\vec{r}')-G(\vec{r};\vec{r}')\nabla u(\vec{r})]\cdot\text{d}\vec{\Sigma}
$$
化简可以得到 $u(\vec{r}')$，如下
$$
\begin{aligned}
u(\vec{r}')&=\iiint_VG(\vec{r};\vec{r}')\rho(\vec{r})\text{d}^3\vec{r}-\varepsilon_0\iint_\Sigma[u(\vec{r})\nabla G(\vec{r};\vec{r}')-G(\vec{r};\vec{r}')\nabla u(\vec{r})]\cdot\text{d}\vec{\Sigma}
\end{aligned}
$$
为了将积分做出来，我们需要指定 Green 函数的边界条件 (之前并未指定！). 取下述边界条件：
$$
G(\vec{r};\vec{r}')\big|_{\Sigma}=0
$$
最后得到
$$
u(\vec{r}')=\iiint_VG(\vec{r};\vec{r}')\rho(\vec{r})\text{d}^3\vec{r}-\varepsilon_0\iint_\Sigma f(\Sigma)\nabla G(\vec{r};\vec{r}')\big|_\Sigma\cdot\text{d}\vec{\Sigma}
$$
交换 $\vec{r},\vec{r}'$：
$$
u(\vec{r})=\iiint_{V'}G(\vec{r}';\vec{r})\rho(\vec{r}')\text{d}^3\vec{r}'-\varepsilon_0\iint_{\Sigma'}f(\Sigma')\left.\frac{\partial G(\vec{r}';\vec{r})}{\partial n'}\right|_{\Sigma'}\text{d}\Sigma'
$$
::: tip

实际上 $G(\vec{r};\vec{r}')$ 在 $\vec{r}=\vec{r}'$ 根本不连续，所以不能用 Green 公式；但是上面得到的结果是对的. 这是我们之前说过的「在 $\delta$ 函数后取极限的意义上是严格的」.

:::

如果是第二类边界条件，那么相应地我们要取 $G(\vec{r};\vec{r}')$ 的边界条件应该是：
$$
\left.\frac{\partial G(\vec{r};\vec{r}')}{\partial n}\right|_\Sigma = 0
$$
但是如果是这样就会导致 $G(\vec{r};\vec{r}')$ 不满足自身的方程 (也就是，有电荷但是电通量为零，违反 Gauss 定理). 这时候引入广义 Green 函数：
$$
\left\{\begin{aligned}
&\nabla^2G(\vec{r};\vec{r}') = -\frac{1}{\varepsilon_0}\left[\delta(\vec{r}-\vec{r}')-cu_0(\vec{r})\right]\\
&\left.\frac{\partial G(\vec{r};\vec{r}')}{\partial\hat{n}}\right|_\Sigma = 0
\end{aligned}\right.
$$
这里有
$$
\iiint_Vu_0(\vec{r})\left[\delta(\vec{r}-\vec{r}')-cu_0(\vec{r})\right]\text{d}^3\vec{r}=0\Longrightarrow c(\vec{r}')=\frac{u_0(\vec{r}')}{\displaystyle{\iiint_Vu_0^2(\vec{r})\text{d}^3\vec{r}}}
$$
还是可以用 Green 公式算出最终解. 当然考试不考第二类边界条件的情况.

不同维度下也有 Green 函数，对于二维情况，无界区域的 Poisson 方程 Green 函数满足
$$
\left[\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right]G(x,y;x',y')=-\frac{1}{\varepsilon_0}\delta(x-x')\delta(y-y')
$$
解的形式是
$$
G(x,y;x',y')=-\frac{1}{2\pi\varepsilon_0}\ln\sqrt{(x-x')^2+(y-y')^2}+C
$$
另外，Green 函数具有对称性：$G(\vec{r};\vec{r}')=G(\vec{r}';\vec{r})$.

## 调和函数

下面讨论调和方程和调和函数. 调和方程为
$$
\nabla^2u(\vec{r})=0
$$
其解为调和函数. 我们已经知道 $\nabla^2G(\vec{r};\vec{r}')=-\delta(\vec{r}-\vec{r}')$ 的解是
$$
G(\vec{r};\vec{r}')=\frac{1}{4\pi|\vec{r}-\vec{r}'|}
$$
两个方程交叉相乘再相减，再利用 Green 公式，
$$
u(\vec{r}')=\iint_\Sigma\frac{u(\vec{r})\text{d}\Sigma_r}{4\pi|\vec{r}-\vec{r}'|^2}+\iint_\Sigma\frac{\nabla u\cdot\text{d}\vec{\Sigma}}{4\pi|\vec{r}-\vec{r}'|}
$$
取 $\Sigma$ 是以 $\vec{r}'$ 为球心、半径 $R$ 的球面，那么
$$
u(\vec{r}')=\frac{1}{4\pi R^2}\iint_\Sigma u(\vec{r})\text{d}\Sigma+\frac{1}{4\pi R}\iint\nabla u\cdot\text{d}\vec{\Sigma}
$$
后一项为零 (无通量)，得到调和函数在某一点的平均值公式：
$$
u(\vec{r}')=\frac{1}{4\pi R^2}\iint_\Sigma u(\vec{r})\text{d}\Sigma,\quad \Sigma : |\vec{r}-\vec{r}'|=R
$$

## 三维无界 Helmholtz 方程的 Green 函数

求三维无界空间 Helmholtz 方程的 Green 函数：
$$
\nabla^2G(\vec{r};\vec{r}')+k^2G(\vec{r};\vec{r}')=-\frac{1}{\varepsilon_0}\delta(\vec{r}-\vec{r}'),\quad k>0
$$
先平移原点到 $\vec{r}'$，之后定义 $G(\vec{r};\vec{r}')\equiv g(\xi,\eta,\zeta)$：
$$
\nabla^2_{\xi,\eta,\zeta}g(\xi,\eta,\zeta) + k^2g(\xi,\eta,\zeta) = -\frac{1}{\varepsilon_0}\delta(\xi)\delta(\eta)\delta(\zeta)
$$
然后将这个直角坐标的方程换成球坐标的，这里有对称性，$g(\xi,\eta,\zeta)=f(R)$. 方程变为零阶 Bessel 方程：
$$
\frac{1}{R^2}\frac{\text{d}}{\text{d}R}\left[R^2\frac{\text{d}f(R)}{\text{d}R}\right]+k^2f(R)=0
$$
通解为
$$
f(R)=A\frac{e^{\text{i}kR}}{R}+B\frac{e^{-\text{i}kR}}{R}
$$
仅考虑发散波，同时利用 $R=0$ 邻域内的小球积分，得到
$$
f(R)=\frac{1}{4\pi\varepsilon_0}\frac{e^{\text{i}kR}}{R}\Longrightarrow G(\vec{r};\vec{r}')=\frac{1}{4\pi\varepsilon_0}\frac{e^{\text{i}k|\vec{r}-\vec{r}'|}}{|\vec{r}-\vec{r}'|}
$$
::: tip

也可以用三维 Fourier 变换来做，解得
$$
G(\vec{\kappa}) = \frac{1}{\varepsilon_0(2\pi)^{3/2}(|\vec{\kappa}|^2-k^2)}
$$
:::

## 含时的 Green 函数

讲义上的做法是错的！

对于下面问题：
$$
\begin{aligned}
&\left[\frac{\partial^2}{\partial t^2}-a^2\frac{\partial^2}{\partial x^2}\right]G(x,-t;x'',-t'')=\delta(x-x'')\delta(t-t'')\\\\
&G(x,-t;x'',-t'')\big|_{x=0}=0,\quad G(x,-t;x'',-t'')\big|_{x=l}=0\\\\
&G(x,-t;x'',-t'')\big|_{-t<-t''}=0,\quad \left.\frac{\partial G(x,-t;x'',-t'')}{\partial t}\right|_{-t<-t''}=0
\end{aligned}
$$
时间的流动是有方向性的，因果关系不能倒易. 因此要重新研究 Green 函数的对称性：
$$
\begin{aligned}
&G(x',-t';x'',-t'') - G(x'',t'';x',t')\\\\
&= \int_0^l\text{d}x\int_0^\infty\Big[G(x,-t;x'',-t'')\frac{\partial^2G(x,t;x',t')}{\partial t^2}\\\\
&\quad-G(x,t;x',t')\frac{\partial^2G(x,-t;x'',-t'')}{\partial t^2}\Big]\text{d}t \\\\
&= \int_0^l\Big[G(x',-t';x'',-t'')\frac{\partial G(x,t;x',t')}{\partial t}\\\\
&\quad-G(x,t;x',t')\frac{\partial G(x,-t;x'',-t'')}{\partial t}\Big]^\infty_0\text{d}x\\\\
&\quad-a^2\int_0^\infty\Big[G(x,-t;x'',-t'')\frac{\partial G(x,t;x',t')}{\partial x}\\\\
&\quad-G(x,t;x',t')
\end{aligned}
$$

---

以热传导方程为例：
$$
\begin{aligned}
&\textcolor{red}{-}\frac{\partial G(\textcolor{red}{x',t';x,t})}{\partial t}-\kappa\frac{\partial^2G(\textcolor{red}{x',t';x,t})}{\partial x^2}=\delta(x-x')\delta(t-t')\\\\
&G\big|_{x=0}=0,\quad \left.\frac{\partial G}{\partial x}\right|_{x=l}=0\\\\
&G\big|_{t'<t}=0
\end{aligned}
$$
和普通热传导方程交叉相乘再相减，
$$
\begin{aligned}
&\int_0^l\int_0^\infty\left(G\frac{\partial u}{\partial t}\textcolor{red}{+}u\frac{\partial G}{\partial t}\right)\text{d}t\text{d}x-\kappa\int_0^l\int_0^\infty\left(G\frac{\partial^2u}{\partial x^2}-u\frac{\partial^2G}{\partial x^2}\right)\text{d}t\text{d}x \\\\
&= \int_0^l\int_0^\infty[Gf(x,t)-u\delta(x-x')\delta(t-t')]\text{d}t\text{d}x
\end{aligned}
$$
分布积分之后，时间的上限只用到 $t'$ 而不是 $\infty$.

::: warning

实际上我觉得他上课完全没讲清楚... 板书有点太混乱了，回去整理一下. 而且下面突然从热传导跳到了波动方程.

:::

---

三维无界空间波动方程的 Green 函数：
$$
\begin{aligned}
&\left[\frac{\partial^2}{\partial t^2}-a^2\nabla^2\right]G(\vec{r}',t';\vec{r},t)=\delta(\vec{r}-\vec{r}')\delta(t-t')\\\\
&G(\vec{r}',t';\vec{r},t)\big|_{t>t'}=0,\quad\left.\frac{\partial G(\vec{r}',t';\vec{r},t)}{\partial t}\right|_{t>t'}=0
\end{aligned}
$$

## 考试

* 第一题：

  (1) 给一个含时三维方程，写出分离变量的四个分量方程 (8')

  (2) 把方程对应 Green 函数满足的定解问题写出来，并用 Green 函数把 $u$  表达出来 (12')

* 第二题：

  解一个没有非齐次项的方程 (边界不齐次) (20')

* 第三题：

  可能是一维 Fourier 变换，也可能是普通的本征值问题 (可以求通解，或者是可以靠到 Bessel 或者 Legendre 上面的，要求求本征值和本征函数，讨论正交性) (20')

* 第四题：

  球函数 / 柱函数的性质 (不超过 20')

* 第五题：

  强行求解：球函数 － 方程非齐次 / 柱函数 － 边界非齐次 (30')