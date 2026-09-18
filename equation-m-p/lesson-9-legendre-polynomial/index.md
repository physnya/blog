---
url: /equation-m-p/lesson-9-legendre-polynomial/index.md
---
讲几个作业题先：

> 用 $P\_l(x)$ 展开 $f(x)=\sqrt{1-2xt+t^2}$.
>
> ***
>
> 就是做积分：
> $$
> \int\_{-1}^1\sqrt{1-2xt+t^2}P\_l(x)\text{d}x
> $$
> 分部积分一次，实际上只有 $xP\_l(x)$ 和 $P\_l(x)$ 这两种积分.
>
> ***
>
> 求积分：
> $$
> \int\_{-1}^1P'\_k(x)P\_l(x)\text{d}x
> $$
>
> ***
>
> 首先知道 $k\<l$ 时这个积分是零 (因为我们之前对 $x^kP\_l(x)$ 积分的讨论). 如果 $k>l$，分部积分：
> $$
> \=P\_kP\_l|^1\_{-1}-\int\_{-1}^1P\_k(x)P'\_l(x)\text{d}x
> $$
> 后面变成前一种情况，所以也是零，最后只用算前一项.
>
> ***
>
> 求积分：
> $$
> \int\_{-1}^1P\_l(x)\cdot\frac{P\_{l+1}(x)}{x}\text{d}x
> $$
>
> ***
>
> 只用一次递推关系，把 $P\_{l+1}(x)/x$ 变为 $P\_l(x)$ 和 $P\_{l-1}(x)/x$.
>
> 注意到 $P\_{l-1}(x)/x$ 的最高次项肯定低于 $P\_l(x)$ 的，所以为零，只用积分一个 $\[P\_l(x)]^2$.

来解匀强电场中的接地导体球体问题. 定解问题为
$$
\left{\begin{aligned}
&\nabla^2u=0,\quad r>a\\\\
\&u\_2|*{\Sigma:r=a}=E\_0a\cos\theta-u\_0\\\\
\&u\_2|*{r=\infty}=0
\end{aligned}\right.
$$
实际上在无穷远处并不能规定匀强电场的势为零，但是我们可以规定球体产生的电势 $u\_2$ 在无穷远处的电势为任意值.

按照分离变量法的标准步骤求解，$\theta$ 方向的本征函数是 $P\_l(\cos\theta)$. $r$ 方向
$$
\frac{\text{d}}{\text{d}r}\left\[r^2\frac{\text{d}R\_l(r)}{\text{d}r}\right]-l(l+1)R\_l(r)=0
$$
典型的 Euler 方程，解应该是 $r^\alpha$ 的形式，代入，
$$
\alpha(\alpha+1)-l(l+1)=0
$$
解得 $\alpha=l$ 或者 $-l-1$. 也就是
$$
R\_l(r)=A\_lr^l+B\_lr^{-(l+1)}
$$
一般解
$$
u\_2(r,\theta)=\sum\_{l=0}^\infty(A\_lr^l+B\_lr^{-(l+1)})P\_l(\cos\theta)
$$
无穷远处电势收敛，所有的 $A\_l=0$ (如果是球内部，刚好相反). 我们发现边界上等于 $E\_0a\cos\theta-u\_0$，只有 $P\_1(\cos\theta)$ 和 $P\_0(\cos\theta)$. 因此最终的解为
$$
u\_2(r,\theta)=-u\_0\frac{a}{r}+\frac{E\_0a^3}{r^2}\cos\theta
$$
这里，第一项是一个点电荷，第二项明显是一个电偶极子.

***

下一个问题是，求均匀细圆环 (半径 $a$，总电荷 $Q$) 在空间任意一点的静电势.

首先，所有有限大的带电体都不推荐柱坐标，因为这类带电体在无穷远渐进行为趋于一个点电荷，球坐标更加自然.

把圆环放在球坐标的赤道面上，中心与球心重合. 问题：
$$
\left{\begin{aligned}
&\nabla^2u=0\\\\
\&u|*{r=0}\not\to\infty,\quad u|*{r\to\infty}\to0
\end{aligned}\right.
$$
这不是一个适定的定解问题，因为并没有反映出源的任何性质. 设此时电荷密度为
$$
C\delta(r-a)\delta\left(\theta-\frac{\pi}{2}\right)
$$
把这个电荷分布代入，问题变为
$$
\left{\begin{aligned}
&\nabla^2u=-\frac{1}{\varepsilon\_0}\frac{Q}{2\pi a^2}\delta(r-a)\delta\left(\theta-\frac{\pi}{2}\right)\\\\
\&u|*{r=0}\not\to\infty,\quad u|*{r\to\infty}\to0
\end{aligned}\right.
$$

> 定出常数 $C$ 并不是显然的，要求积分：
> $$
> \iiint C\delta(r-a)\delta\left(\theta-\frac{\pi}{2}\right)\cdot r^2\sin\theta\text{d}r\text{d}\theta\text{d}\phi=Q
> $$

一般解还是
$$
u(r,\theta)=\sum\_{l=0}^\infty(A\_lr^l+Br^{-(l+1)})P\_l(\cos\theta)
$$
其中 $r\<a$ 有 $B\_l=0$；$r>a$ 有 $A\_l=0$. 此时还没用到球面 $r=a$ 上的电荷分布，这里有静电势连续和径向导数不连续：
$$
r^2\left.\frac{\partial u}{\partial r}\right|^{r=a+0}*{r=a-0}=-\frac{Q}{2\pi\varepsilon\_0}\delta\left(\theta-\frac{\pi}{2}\right)
$$
可以把 $\delta$ 函数展开
$$
\delta\left(\theta-\frac{\pi}{2}\right)=\sum*{l=0}^\infty\frac{2l+1}{2}P\_l(0)P\_l(\cos\theta)
$$
对比系数就可以确定每一项.
$$
u(r,\theta)=\left{\begin{aligned}
&\frac{Q}{4\pi\varepsilon\_0a}\sum\_{l=0}^\infty\left(\frac{r}{a}\right)^lP\_l(0)P\_l(\cos\theta),&\quad r\<a\\\\
&\frac{Q}{4\pi\varepsilon\_0a}\sum\_{l=0}^\infty\left(\frac{a}{r}\right)^{l+1}P\_l(0)P\_l(\cos\theta),&\quad r>a
\end{aligned}\right.
$$
还可以代入之前求的 $P\_{2l}(0)$ 数值.

> 另一种解是，取 $\theta$ 为某一个特殊值的时候的 $u(r,\theta)$ 值，直接用电势的叠加原理求出 $u(r,\theta=0,\pi)$.
> $$
> u(r,\theta)|\_{\theta=0,\pi}=\oint\frac{1}{4\pi\varepsilon\_0}\frac{Q}{2\pi a}\frac{\text{d}l}{\sqrt{a^2+l^2}}=\frac{Q}{4\pi\varepsilon\_0}\frac{1}{\sqrt{a^2+r^2}}
> $$
> 做 Taylor 展开定解.

下一个问题是，两种不同材质连接而成的弦的两段固定弦振动，两段分别为 $l\_1$ 和 $l\_2$.

波动方程分别是：
$$
\frac{\partial^2u}{\partial t^2}-a\_1^2\frac{\partial^2u}{\partial x^2}=0,\quad \frac{\partial^2u}{\partial t^2}-a\_2^2\frac{\partial^2u}{\partial x^2}=0
$$
边界条件是
$$
u(x,t)|*{x=0}=0,\quad u(x,t)|*{x=l\_1+l\_2}=0,\quad u(x,t)|*{t=0}=\phi(x),\quad\left.\frac{\partial u(x,t)}{\partial t}\right|*{t=0}=\psi(x)
$$
补充连接条件，
$$
u(x,t)|*{x=l\_1^-}=u(x,t)|*{x=l\_1^+},\quad \left.\frac{\partial u(x,t)}{\partial x}\right|*{x=l\_1^-}=\left.\frac{\partial u(x,t)}{\partial x}\right|*{x=l\_1^+}
$$
后面就是同样的解法，分离变量求本征函数.

> 考试并不会遇到这样复杂的问题，但是在科研实践中遇到边界很有可能就是类似的解法.

## 连带 Legendre 函数

球坐标 Laplace 方程分离变量：
$$
\begin{aligned}
&\frac{\text{d}}{\text{d}r}\left\[r^2\frac{\text{d}R(r)}{\text{d}r}\right]-\lambda R(r)=0\\\\
&\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left\[\sin\theta\frac{\partial S(\theta,\phi)}{\partial\theta}\right]+\frac{1}{\sin^2\theta}\frac{\partial^2S(\theta,\phi)}{\partial\phi^2}+\lambda S(\theta,\phi)=0
\end{aligned}
$$
再分离一次，
$$
\begin{aligned}
&\frac{1}{\sin\theta}\frac{\text{d}}{\text{d}\theta}\left\[\sin\theta\frac{\text{d}\Theta(\theta)}{\text{d}\theta}\right]+\left(\lambda-\frac{\mu}{\sin^2\theta}\right)\Theta(\theta)=0\\\\
&\Phi''+\mu\Phi=0
\end{aligned}
$$
和之前的区别在于，多了一个 $\mu$，来源于 $\phi$ 方向的对称性消失了.

变量代换，得到连带 Legendre 方程：
$$
\frac{\text{d}}{\text{d}x}\left\[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\left\[\nu(\nu+1)-\frac{m^2}{1-x^2}\right]y=0
$$
做法和 Legendre 方程的解法类似，求本征值问题. 奇点和原来一样，还是 $\pm1$ 和 $\infty$，都是正则奇点. 在 $\pm1$ 处指标方程为
$$
\rho(\rho-1)+\rho-\frac{m^2}{4}=0
$$
指标为 $\pm m/2$. 如果令解 $w(z)=(1-z^2)^{m/2}v(z)$，则 $v(z)$ 满足：
$$
(1-z^2)v''-2(m+1)zv'+\[\lambda-m(m+1)]v=0
$$
这被称为「超球微分方程」.

如果看原来的 Legendre 方程，求导 $m$ 次，也可以得到上面的方程.
