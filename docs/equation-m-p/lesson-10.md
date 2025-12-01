---
title: Lesson 10 连带 Legendre 函数
permalink: /equation-m-p/lesson-10/
createTime: 2025/11/28 12:16:35
---
## 连带 Legendre 函数

连带 Legendre 方程：
$$
\frac{1}{\sin\theta}\frac{\text{d}}{\text{d}\theta}\left[\sin\theta\cdot \frac{\text{d}\varTheta}{\text{d}\theta}\right]+\left(\lambda-\frac{m^2}{\sin^2\theta}\right)\varTheta=0
$$
我们化为标准形式
$$
\frac{\text{d}}{\text{d}z}\left[(1-z^2)\frac{\text{d}w}{\text{d}z}\right]+\left[\nu(\nu+1)-\frac{m^2}{1-z^2}\right]w=0
$$
上节课我们猜了一个解的形式 $w(z) = (1-z^2)^{m/2}v(z)$. 代入之后得到了超球微分方程
$$
(1-z^2)v''-2(m+1)zv'+[\lambda-m(m+1)]v=0
$$
Legendre 方程微商 $m$ 次也是超球微分方程，这个结论的证明如下：

> 用数学归纳法，首先可以确认 $m=0$ 时结论正确. 假设 $m=k$ 时成立，
> $$
> (1-z^2)(v^{(k)})''-2(k+1)z(v^{(k)})'+[\lambda-k(k+1)]v^{(k)}=0
> $$
> 再微商一次，就可以证明结论.

因此连带 Legendre 方程的解是
$$
\begin{aligned}
&w(z)=c_1w_1(z)+c_2w_2(z)\\\\
&\left\{\begin{aligned}
w_1(z) &= (1-z^2)^{m/2}P_\nu^{(m)}(z)\\\\
w_2(z) &= (1-z^2)^{m/2}Q_\nu^{(m)}(z)
\end{aligned}\right.
\end{aligned}
$$
注意这里要求了 $l>m$，否则求完导之后的结果是零. 现在我们得到了一个新的函数，$m$ 阶 $l$ 次连带 Legendre 函数：
$$
P_l^m(x)=(-1)^m(1-x^2)^{m/2}P_l^{(m)}(x)
$$
::: danger

这里不能再叫「多项式」了，因为在 $m$ 为奇数时这不是一个多项式，只能叫函数.

:::

下面研究连带 Legendre 函数的正交性：
$$
\int_{-1}^1P_l^m(x)P_k^m(x)\text{d}x=0,\quad k\neq l
$$
证明方法和之前对于 Legendre 函数的证明几乎一样. 模方为
$$
\int_{-1}^1P_l^m(x)P_l^m(x)\text{d}x=\frac{(l+m)!}{(l-m)!}\frac{2}{2l+1}
$$
比 Legendre 函数的模方多了一个系数.

> 理论上这个公式不要记忆，但是写在这里：
> $$
> \int_{-1}^1x^kP_l(x)\text{d}x = \left\{\begin{aligned}
> &2^{l+1}\frac{(l+2n)!(l+n)!}{n!(2l+2n+1)!},& k=l+2n, n\in\mathbb{N}\\\\
> &0,&\text{other}
> \end{aligned}\right.
> $$

连带 Legendre 方程存在另外的一个解，$P_l^{-m}(x)$，这个解并不独立，求解的关键在于确认
$$
\frac{\text{d}^{l+m}}{\text{d}x^{l+m}}(x^2-1)^l
$$
最终关系为
$$
P_l^{-m}(x)=(-1)^m\frac{(l-m)!}{(l+m)!}P_l^m(x)
$$
利用这个可以把正交关系改写为一个更加优雅的形式 (但是非常不建议使用)：
$$
\int_{-1}^1P_l^m(x)P_{l'}^{-m}(x)\text{d}x=\frac{2(-1)^m}{2l+1}\delta_{ll'}
$$
当两个连带 Legendre 方程交叉相乘再相减时，可以得到一个新的正交关系：
$$
\int_{-1}^1P_l^mP_l^{m'}\frac{\text{d}x}{1-x^2}=\frac{1}{m}\frac{(l+m)!}{(l-m)!}\delta_{mm'}
$$

---

我们引入 Legendre 函数实际上是在球坐标系下的定解问题，其中 $\theta,\phi$ 方向的二元函数解是
$$
S_{lm}(\theta,\phi)=\left\{\begin{aligned}
&P_l^m(\cos\theta)\cos m\phi\\\\
&P_l^m(\cos\theta)\sin m\phi
\end{aligned}\right.
$$
球谐函数：
$$
Y_l^m(\theta,\phi)=\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}P_l^m(\cos\theta)e^{\text{i}m\phi}
$$

## 柱函数

下面开始讲柱函数.

Helmholtz 方程在柱坐标下分离变量：
$$
\frac{1}{r}\frac{\text{d}}{\text{d}r}\left[r\frac{\text{d}R(r)}{\text{d}r}\right]+\left(k^2-\lambda-\frac{\mu}{r^2}\right)R(r)=0
$$
若 $k^2-\lambda\neq0$，可以做变换 $x=r\sqrt{k^2-\lambda}$，$y(x)=R(r)$，$\mu=\nu^2$，变为
$$
\frac{1}{x}\frac{\text{d}}{\text{d}x}\left[x\frac{\text{d}y(x)}{\text{d}x}\right]+\left(1-\frac{\nu^2}{x^2}\right)y(x)=0
$$
这是 Bessel 方程，我们在 [Lesson 7](/equation-m-p/lesson-7/#bessel-方程) 已经解过，
$$
J_\nu(z)=\sum_{k=0}^\infty\frac{(-1)^k}{k!\Gamma(k+\nu+1)}\left(\frac{z}{2}\right)^{2k+\nu},\quad N_\nu(z)=\frac{\cos\nu\pi J_\nu(z)-J_{-\nu}(z)}{\sin\nu\pi}
$$
在复变函数的意义上这个函数是多值的，上述表达式仅适用于 $|\arg z|<\pi$ 的辐角范围.

利用 Bessel 函数的级数表达式，可以做很多计算，

/Example/

> 计算积分：
> $$
> \int_0^\infty e^{-ax}J_0(bx)\text{d}x,\quad\Re( a)>0
> $$
>
> ---
>
> $$
> \begin{aligned}
> &=\int_0^\infty e^{-ax}\sum_{k=0}^\infty\frac{(-1)^k}{(k!)^2}\left(\frac{bx}{2}\right)^{2k}\text{d}x\\\\
> &=\sum_{k=0}^\infty\frac{(-1)^k}{(k!)^2}\left(\frac{b}{2}\right)^{2k}\int_0^\infty e^{-ax}x^{2k}\text{d}x\\\\
> &=\sum_{k=0}^\infty\frac{(-1)^k}{(k!)^2}\left(\frac{b}{2}\right)^{2k}\frac{(2k)!}{a^{2k+1}}
> \end{aligned}
> $$
>
> 重点其实在于怎么算这个求和，这种技巧是考试所需要的. 考虑把 $(2k)!$ 拆开，每一项提出一个 $2$，会得到
> $$
> \begin{aligned}
> &=\frac{1}{a}\sum_{k=0}^\infty\frac{1}{k!}\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\cdots\left(-\frac{2k-1}{2}\right)\left(\frac{b}{a}\right)^{2k}\\\\
> &=\frac{1}{a}\left[1+\left(\frac{b}{a}\right)\right]^{-1/2} = \boxed{\frac{1}{\sqrt{a^2+b^2}}}
> \end{aligned}
> $$
> 求和时的限制条件也要注意.

上述例题实际上是 $J_0(x)$ 的 Laplace 变换.

---

下面看 Bessel 函数的递推关系，
$$
\frac{\text{d}}{\text{d}z}[z^\nu J_\nu(z)]=z^\nu J_{\nu-1}(z),\quad\frac{\text{d}}{\text{d}z}[z^{-\nu}J_\nu(z)]=-z^{-\nu}J_{\nu+1}(z)
$$
可以改写成加减的形式
$$
\begin{aligned}
\nu z^{\nu-1}J_\nu(z)+z^\nu J_\nu'(z)&=z^\nu J_{\nu-1}(z)\\\\
-\nu z^{-\nu-1}J_\nu(z)+z^{-\nu}J_\nu'(z)&=-z^{-\nu}J_{\nu+1}(z)
\end{aligned}
$$
另一种形式是
$$
J_{\nu-1}(z)-J_{\nu+1}(z)=2J_\nu'(z),\quad J_{\nu-1}(z)+J_{\nu+1}(z)=\frac{2\nu}{z}J_\nu(z)
$$
