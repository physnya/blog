---
title: Lesson 5 二阶线性常微分方程的幂级数解法 (一)
permalink: /equation-m-p/lesson-5/
createTime: 2025/10/24 12:17:46
---
我们来说说作业里面的一个题：

> 求稳定解：
> $$
> \begin{aligned}
> &\frac{\partial u}{\partial t}-\kappa\frac{\partial^2u}{\partial x^2}=0\\\\
> &u|_{x=0}=A\cos\omega t\,,\quad u|_{x\to\infty}=0
> \end{aligned}
> $$

这个绝对不能分离变量，因为分离变量本质上是为本征值问题服务的，这里是无穷的边界、而且稳定解要求不能把无穷处的边界条件齐次化掉.

如果我们没有学过复变函数，可以假设：
$$
u=f(x)\cos\omega t+g(x)\sin\omega t
$$
(当然，我们推荐复变的方法，也就是 $u=f(x)e^{\text{i}\omega t}$，只是最后应该取实部)

---

继续说正交曲面坐标系. 记住球坐标的 Laplace 算子：
$$
\nabla^2=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial \theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
$$
**一定要记住这个结论！**

当然推导的最简便方法是，用 Lamé 系数，有
$$
h_1=1\,,\quad h_2=r\,,\quad h_3=r\sin\theta\,,\quad H=h_1h_2h_3=r^2\sin\theta
$$
得到
$$
\nabla^2f=\frac{1}{H}\sum_{i=1}^3\frac{\partial}{\partial q^i}\left(\frac{H}{h_i^2}\frac{\partial f}{\partial q^i}\right)
$$
如果是旋度，得到
$$
\nabla\times\vec{A}=\frac{1}{H}\begin{vmatrix}
h_1\hat{e}_1&h_2\hat{e}_2&h_2\hat{e}_3\\
\displaystyle{\frac{\partial}{\partial q^1}}&\displaystyle{\frac{\partial}{\partial q^2}}&\displaystyle{\frac{\partial}{\partial q^3}}\\
h_1A^1&h_2A^2&h_3A^3
\end{vmatrix}
$$
什么是平面波？柱面波？球面波？

> 等相位面是平面的波是平面波：
> $$
> \phi=kx-\omega t
> $$
> 等相位面是柱面的波是柱面波，等相位面是球面的波是球面波.

平面波满足一维的波动方程：
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0
$$
各向同性的球面波满足的方程是：
$$
\frac{\partial^2u}{\partial t^2}-\frac{a^2}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial u}{\partial r}\right)=0
$$
解这个方程，我们需要变换 $u\to ru$，$ru$ 的物理含义是，波的能量 $\propto u^2$ 乘上球面的面积是一个定值，等于波源的功率.

我们的解会分为发散和汇聚两个部分：
$$
u(r,t)=\frac{1}{r}[f(r-at)+g(r+at)]
$$
汇聚部分似乎不太物理，实际上是一个时间反演.

柱面波的方程是：
$$
\frac{\partial^2u}{\partial t^2}+\frac{a^2}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)=0
$$
令 $w=\sqrt{r}u$，得到
$$
\frac{\partial^2w}{\partial t^2}-a^2\frac{\partial^2w}{\partial r^2}+\frac{w}{r^2}=0
$$
在远场，忽略 $w/r^2$ 项，得到我们平常所说的柱面波解：
$$
u(r,t)=\frac{1}{\sqrt{r}}[f(r-at)+g(r+at)]
$$
精确解实际上是我们常说的 Bessel 函数.

## 圆形区域内的 Laplace 方程第一类边值问题

在极坐标系下写 Laplace 方程，
$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2u}{\partial\phi^2}=0\,,\quad u|_{r=a}=f(\phi)
$$
分离变量，$u=R(r)\Phi(\phi)$. 得到：
$$
\frac{\Phi}{r}\frac{\text{d}}{\text{d}r}\left(r\frac{\text{d}R}{\text{d}r}\right)+\frac{R^2}{r^2}\frac{\text{d}^2\Phi}{\text{d}\phi^2}=0
$$
千万不要把这里的 $R$ 项拆开，因为拆开之后会变得更加复杂. 分离变量得到
$$
\frac{r}{R}\frac{\text{d}}{\text{d}r}\left(r\frac{\text{d}R}{\text{d}r}\right)=-\frac{1}{\Phi}\frac{\text{d}^2\Phi}{\text{d}\phi^2}=\lambda
$$
分离变量可行，但是边界条件 $R(a)\Phi(\phi)=f(\phi)$ 不能分离变量！两个含有待定参数的齐次常微分方程，但是没有对应的齐次边界条件.

这个问题和原来的那个直角坐标 Laplace 方程不一样了，因为这里有了新的边界，也就是 $\phi=0,2\pi$；在边界上 $u(r,\phi)$ 的偏导数不存在了，只有单向导数；而且原始的定解问题本来就没有指定相应的边界条件...

因此要补充周期边界条件：
$$
\begin{aligned}
u|_{\phi=0}&=u|_{\phi=2\pi}\\\\
\left.\frac{\partial u}{\partial\phi}\right|_{\phi=0}&=\left.\frac{\partial u}{\partial\phi}\right|_{\phi=2\pi}
\end{aligned}
$$
有界条件：$u|_{r=0}$ 有界.

做本征值问题，当 $\lambda=0$ 的时候，
$$
\Phi_0(\phi)=A_0\phi+B_0
$$
是一个一次方程. 代入边界条件知道 $A_0=0$，$B_0$ 任意，相应本征函数就是 $\Phi_0(\phi)=1$. 如果 $\lambda\neq0$，再代入边界条件，得到
$$
\begin{aligned}
B&=A\sin\sqrt{\lambda}2\pi+B\cos\sqrt{\lambda}2\pi\\\\
A&=A\cos\sqrt{\lambda}2\pi-B\sin\sqrt{\lambda}2\pi
\end{aligned}
$$
非零解的充要条件系数行列式为零：
$$
2(\cos\sqrt{\lambda}2\pi-1)=0\Longrightarrow\lambda_m=m^2
$$
对于 $R$ 的方程，有
$$
\frac{r}{R}\frac{\text{d}}{\text{d}r}\left(r\frac{\text{d}R}{\text{d}r}\right)-m^2R=0
$$
取一个 $R=r^a$ 的试探解，代进去得到 $a^2-m^2=0$，于是 $a=\pm m$. 如果是 $\lambda=0$，则有重根，为
$$
R_0(r)=C_0+D_0\ln r
$$
于是全部特解为
$$
\begin{aligned}
u_0(r,\phi)&=C_0+D_0\ln r\\\\
u_{m1}(r,\phi)&=(C_{m1}r^m+D_{m1}r^{-m})\sin m\phi\\\\
u_{m2}(r,\phi)&=(C_{m2}r^m+D_{m2}r^{-m})\cos m\phi
\end{aligned}
$$
一般解是上述解的叠加，
$$
\begin{aligned}
u(r,\phi)&=C_0+D_0\ln r+\sum_{m=1}^\infty(C_{m1}r^m+D_{m1}r^{-m})\sin m\phi\\
&\quad+\sum_{m=1}^\infty(C_{m2}r^m+D_{m2}r^{-m})\cos m\phi
\end{aligned}
$$
如果把 $r$ 和 $\phi$ 看成复变函数的模和辐角，那么周期性边界条件实际上是在约束根式函数的多值性.

径向方向很难做本征值问题：首先，$\lambda=0$ 不是本征值；而且由边界条件 $R(a)=R(b)=0$ 能够得到本征值为
$$
\lambda_n=\left(\frac{n\pi}{\ln b-\ln a}\right)^2
$$
而且这里的正交性已经和原来我们学过的正交性不同，要加上一个权重因子 $1/r$.

## 正交曲面坐标系下 Helmholtz 方程的分离变量

考虑柱坐标，
$$
\nabla^2u+k^2u=0\Longrightarrow\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2u}{\partial\theta^2}+\frac{\partial^2u}{\partial z^2}+k^2u=0
$$
逐次分离变量，先 $u(r,\theta,z)=v(r,\theta)Z(z)$，再 $v(r,\theta)=R(r)\Theta(\theta)$. 有：
$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2v}{\partial\theta^2}+(k^2-\lambda)v=0\,,\quad\frac{\text{d}^2Z}{\text{d}z^2}+\lambda Z=0
$$
再分离一次，得到
$$
\frac{1}{r}\frac{\text{d}}{\text{d}r}\left(r\frac{\text{d}R}{\text{d}r}\right)+\left(k^2-\lambda-\frac{\mu}{r^2}\right)R=0\,,\quad\frac{\text{d}^2\Theta}{\text{d}\theta^2}+\mu\Theta=0
$$
如果令 $x=\sqrt{k^2-\lambda}r$ 以及 $\mu=\nu^2$，得到 Bessel 方程：
$$
y''+\frac{y'}{x}+\left(1-\frac{\nu^2}{x^2}\right)y=0
$$

## 球坐标系下的 Helmholtz 方程的分离变量

$$
\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial u}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial u}{\partial \theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2u}{\partial\phi^2}+k^2u=0
$$

期末考试第一题会出一个含时的球坐标方程之类，只要求分离变量，四个方程一个两分，希望大家不会错.

令 $u(r,\theta,\phi)=R(r)S(\theta,\phi)$，再 $S(\theta,\phi)=\Theta(\theta)\Phi(\phi)$. 得到
$$
\begin{aligned}
&\frac{1}{r^2}\frac{\text{d}}{\text{d}r}\left(r^2\frac{\text{d}R}{\text{d}r}\right)+\left(k^2-\frac{\lambda}{r^2}\right)R=0\\\\
&\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial S}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2S}{\partial\phi^2}+\lambda S=0
\end{aligned}
$$
之后再分离一次：
$$
\begin{aligned}
&\frac{1}{\sin\theta}\frac{\text{d}}{\text{d}\theta}\left(\sin\theta\frac{\text{d}\Theta}{\text{d}\theta}\right)+\left(\lambda-\frac{\mu}{\sin^2\theta}\right)\Theta=0\\\\
&\frac{\text{d}^2\Phi}{\text{d}\phi^2}+\mu\Phi=0
\end{aligned}
$$
对于 $\theta$ 的方程，当 $\mu=0$ 时，令 $x=\cos\theta$，$\lambda=l(l+1)$，且 $y(x)=\Theta(\theta)$，称为 Legendre 方程：
$$
\frac{\text{d}}{\text{d}x}\left[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+l(l+1)y=0
$$
如果 $\mu\neq0$ 就是连带 Legendre 方程：
$$
\frac{\text{d}}{\text{d}x}\left[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\left(\lambda-\frac{\mu}{1-x^2}\right)y=0
$$

## 二阶线性常微分方程的幂级数解法 (一)

这是预备知识.

二阶线性齐次常微分方程的标准形式是
$$
\frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0
$$
方程的 (通) 解完全由方程的系数 $p(z)$ 和 $q(z)$ 决定，解的解析性完全由方程系数的解析性决定.

/Definition/

> 如果 $p(z),q(z)$ 在 $z_0$ 解析，则 $z_0$ 是方程的常点；
>
> 如果 $p(z),q(z)$ 在 $z_0$ 至少有一个不解析，则 $z_0$ 是方程的奇点.

王竹溪的《特殊函数概论》中证明了，二阶的方程最多有 5 个奇点，但是一般我们不会遇到，Legendre 方程是 3 个奇点，Bessel 方程是 2 个.

/Example/

> 超几何方程
> $$
> z(1-z)\frac{\text{d}^2w}{\text{d}z^2}+[\gamma-(1+\alpha+\beta)z]\frac{\text{d}w}{\text{d}z}-\alpha\beta w=0
> $$
> 奇点是 $z=0,1$.

/Example/

> Legendre 方程
> $$
> (1-x^2)\frac{\text{d}^2y}{\text{d}x^2}-2x\frac{\text{d}y}{\text{d}x}+l(l+1)y=0
> $$
> 有限远处的奇点是 $x=\pm1$.

要判断无穷远点是不是方程的奇点，要做变换 $z\to1/t$，导数也要变换. 无穷远点 $z=\infty$ 是超几何方程和 Legendre 方程的奇点.

### 方程常点邻域内的解

/Theorem/

> 如果 $p(z),q(z)$ 在圆 $|z-z_0|<R$ 内单值解析，则在此圆内，常微分方程初值问题：
> $$
> \begin{aligned}
> &\frac{\text{d}^2w}{\text{d}z^2}+p(z)\frac{\text{d}w}{\text{d}z}+q(z)w=0\\\\
> &w(z_0)=c_0\,,\quad w'(z_0)=c_1
> \end{aligned}
> $$
> 有唯一的一个解 $w(z)$，并且 $w(z)$ 在这个圆内单值解析.