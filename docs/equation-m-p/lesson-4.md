---
title: Lesson 4 分离变量法 (三)
permalink: /equation-m-p/lesson-4/
createTime: 2025/10/17 12:13:09
---
## 两端固定弦的受迫振动

/Example/

> 求解定解问题
> $$
> \begin{aligned}
> &\nabla^2u=xy\\\\
> &u|_{x=0}=u|_{x=a}=0\\\\
> &u|_{y=0}=\phi(x)\,,\quad u|_{y=b}=\psi(x)
> \end{aligned}
> $$
>
> ---
>
> 我们考虑先找一个特解 $v$，这个特解猜测满足：
> $$
> v=f(x)y\,,\quad\left\{\begin{aligned}
> &f''(x)y=xy\\\\
> &f(0)=f(a)=0
> \end{aligned}\right.
> $$
> 用多项式来估计这个结果，可以得到特解
> $$
> v=\frac{1}{6}x^3y-\frac{1}{6}a^2xy
> $$
> 之后就转变为 $w$ 的非齐次稳定方程、齐次边界条件的问题.

所谓分离变量法，只是找到了一种求特解的方式，求解过程中得到了一组分离变量形式的特解，叠加得到通解. 所以说我们本质上是寻找合适的正交完备函数组.

仍然以固定弦的受迫振动为例：
$$
\begin{aligned}
&\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=f(x,t)\\\\
&u|_{x=0}=u|_{x=l}=0\\\\
&u|_{t=0}=0\,,\quad \left.\frac{\partial u}{\partial t}\right|_{t=0}=0
\end{aligned}
$$
我们只用先解 $X(x)$ 的本征值问题，找到
$$
X_n(x)=\sin\frac{n\pi x}{l}\,,\quad n=1,2,\cdots
$$
然后把 $u(x,t)$ 和非齐次项全部按照这一组基展开：
$$
u(x,t)=\sum_{n=1}^\infty T_n(t)X_n(x)\,,\quad f(x,t)=\sum_{n=1}^\infty g_n(t)X_n(x)
$$
然后我们代到方程里，对比系数，得到

::: warning

这里要求我们的非齐次项和本征函数的性质都足够好，比如求和和积分可以交换，也就是一致收敛；当然在数理方程这门课里面这个条件一直会成立.

:::
$$
\sum T_n''(t)X_n(x)-a^2\sum T_n(t)X_n''(x)=\sum g_n(t)X_n(x)
$$
直接用本征方程换掉 $X_n''$ 项，得到
$$
\sum[T_n''(t)-a^2\lambda_nT_n(t)-g_n(t)]X_n(x)=0
$$
根据正交性，如果两边乘一个 $X_m(x)$，积分，因为正交性，得到这一项的系数应该是零；于是每一项的系数都应该是零. 得到 $T_n(t)$ 的本征方程：
$$
T_n''(t)+a^2\lambda_nT_n(t)=g_n(t)
$$
这里咱们给了齐次的边界条件，也就是 $T_n(0)=0$ 和 $T_n'(0)=0$. 所以现在我们要解一个一元的定解问题，
$$
\begin{aligned}
T''_n+a^2\lambda T_n=g_n\\\\
T_n(0)=T'_n(0)=0
\end{aligned}
$$
因为我们还没有学 Laplace 变换和 Green 函数法，所以考虑用常数变易法来做，假设
$$
T_n=C_n(t)\sin\frac{n\pi a}{l}t+D_n(t)\cos\frac{n\pi a}{l}t
$$
代入边界条件得到
$$
\begin{aligned}
&C'\sin\Box+D'\cos\Box=0\\\\
&C'\cos\Box-D'\sin\Box=\frac{l}{n\pi a}g_n
\end{aligned}
$$
解得
$$
C'=\frac{l}{n\pi a}g_n\cos\Box\,,\quad D'=-\frac{1}{n\pi a}g_n\sin\Box
$$
积分一次，
$$
T_n(t)=\frac{l}{n\pi a}\int_0^t g_n(\tau)\sin\left[\frac{n\pi a}{l}(t-\tau)\right]\text{d}\tau
$$
这正是一个标准的卷积.

---

如果 $f(x,t)=A_0\sin\omega t$ (受迫振动)，我们有
$$
A_0\sin\omega t=\frac{2A_0}{\pi}\sum_{n=1}^\infty\frac{1-(-1)^n}{n}\sin\frac{n\pi}{l}x\sin\omega t
$$

## 非齐次稳定问题

/Example/

> 定解问题
> $$
> \begin{aligned}
> &\nabla^2u=f(x,y)\\\\
> &u|_{x=0}=u|_{x=a}=0\\\\
> &u|_{y=0}=u|_{y=b}=0
> \end{aligned}
> $$
>
> ---
>
> 我们直接用两套本征函数展开，
> $$
> \begin{aligned}
> &u(x,y)=\sum_{n=1}^\infty\sum_{m=1}^\infty c_{nm}\sin\frac{n\pi}{a}x\sin\frac{m\pi}{b}y\\\\
> &f(x,y)=\sum_{n=1}^\infty\sum_{m=1}^\infty d_{nm}\sin\frac{n\pi}{a}x\sin\frac{m\pi}{b}y
> \end{aligned}
> $$
> 其中，
> $$
> d_{nm}=\frac{4}{ab}\int_0^b\int_0^af(x,y)\sin\frac{n\pi}{a}x\sin\frac{m\pi}{b}y\text{d}x\text{d}y
> $$
> 而代入方程，比较系数，得到的是
> $$
> c_{nm}=-\frac{d_{nm}}{\displaystyle{\left(\frac{n\pi}{a}\right)^2+\left(\frac{m\pi}{b}\right)^2}}
> $$
>
> ---
>
> 完全展开这种方法仅仅适用于「边界条件均齐次、方程非齐次的稳定性 (不含时) 问题」.
>
> 而且另外一个缺点是，$c_{nm}$ 的分母不能为零：这在什么情况下能够出现呢？当边界条件是第二类边界条件时，$\lambda=0$ 也是本征值，这时候就没办法用这个条件.

## 非齐次边界条件的齐次化

以波动方程的定解为例，
$$
\begin{aligned}
&\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0\\\\
&u|_{x=0}=\mu(t)\,,\quad u|_{x=l}=\nu(t)\\\\
&u|_{t=0}=0\,,\quad\left.\frac{\partial u}{\partial t}\right|_{t=0}=0
\end{aligned}
$$
考虑 $u=v+w$，其中 $v$ 只需要满足非齐次的边界条件. 之后方程变得非齐次，边界条件齐次化.

找 $v$ 时，可以插值，找很多不同的解，比如一次函数型的，
$$
v=\frac{\mu(t)}{l}(l-x)+\frac{\nu(t)}{l}x
$$
或者二次函数型的，
$$
v=\frac{\mu(t)}{l^2}(l-x)^2+\frac{\nu(t)}{l^2}x^2
$$
当然我们在做柱面的这类问题时有一些选取 $v$ 的法则，以便于我们之后能够解出非齐次的方程.

/Example/

> 定解问题
> $$
> \begin{aligned}
> &\frac{\partial u}{\partial t}-\kappa\frac{\partial^2u}{\partial x^2}=0\\\\
> &u|_{x=0}=A\sin\omega t\,,\quad u|_{x=l}=0\\\\
> &u|_{t=0}=0
> \end{aligned}
> $$
>
> ---
>
> 取
> $$
> v=A\left(1-\frac{x}{l}\right)\sin\omega t
> $$
> 剩下就是解 $w$.

一个特殊的方法是，方程和边界条件同时齐次化，我们要求 $v=f(x)\sin\omega t$，于是
$$
f''(x)+\left(\frac{\omega}{a}\right)^2f(x)=0\,,\quad f(0)=0\,,\quad f'(l)=A
$$
得到
$$
v(x,t)=\frac{Aa}{\omega}\frac{1}{\cos(\omega l/a)}\sin\frac{\omega}{a}x\sin\omega t
$$
/Example/

> 下面的三维问题，请齐次化边界条件
> $$
> \begin{aligned}
> &\frac{\partial u}{\partial t}-\kappa\left[\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}\right]=0\\\\
> &u|_{x=0}=\mu(y)\,,\quad u|_{x=a}=\nu(y)\\\\
> &\left.\frac{\partial u}{\partial y}\right|_{y=0}=\alpha(x)\,,\quad\left.\frac{\partial u}{\partial y}\right|_{y=b}=\beta(x)\\\\
> &u|_{t=0}=\phi(x,y)
> \end{aligned}
> $$
>
> ---
>
> 因为空间上的边界不含时，我们还是能够做到同时齐次化 (仅仅对空间来进行).

## 分离变量法总结

我们现在求解的问题都是矩形边界，因为我们只有在矩形边界上能够齐次化边界条件. 当然，王竹溪的《特殊函数概论》附录中总结了很多可以通过坐标变换化为矩形边界的一些边界条件.

比如等腰直角三角形区域的热传导问题，可以沿着斜边对称为一个正方形.

---

## 分离变量法 (三)

### 正交曲面坐标系下的 Laplace 算符

我们可以证明，在正交曲面坐标系下，Laplace 算符仍然不含混合导数. 如果不是正交的，那么会出现混合导数，我们的分离变量法就没办法做. 所以很多人在问能不能用椭球坐标做分离变量，这个事情其实非常非常难做.

极坐标的 Laplace 算符，
$$
\nabla^2\equiv\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2}{\partial \phi^2}
$$
这是要背下来的，不然考场上现推几乎不可能.

柱坐标的 Laplace 算符为
$$
\nabla^2=\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2}{\partial\phi^2}+\frac{\partial^2}{\partial z^2}
$$
球坐标：
$$
\nabla^2\equiv\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
$$
限制条件都是 $r\neq0$，这里会有个奇点.

---

一个更好的推导是，Lamé 系数：考虑基矢量为
$$
\hat{e}_i=\frac{1}{h_i}\left(\frac{\partial x}{\partial q^i}\hat{i}+\frac{\partial y}{\partial q^i}\hat{j}+\frac{\partial z}{\partial q^i}\hat{k}\right)
$$
相互正交，也就是满足 $\hat{e}_i\cdot\hat{e}_j=\delta_{ij}$. 其中
$$
h_i=\sqrt{\left(\frac{\partial x}{\partial q^i}\right)^2+\left(\frac{\partial y}{\partial q^i}\right)^2+\left(\frac{\partial z}{\partial q^i}\right)^2}
$$
有了这个系数之后，可以写出 nabla 算子
$$
\nabla=\sum_{i=1}^3\frac{\hat{e}_i}{h_i}\frac{\partial}{\partial q^i}
$$
