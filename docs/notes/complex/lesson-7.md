---
title: Lesson 7 幂级数 & Taylor 展开
permalink: /complex/lesson-7/
createTime: 2025/5/13 09:54:37
---
## 幂级数

求收敛半径的方法：

1. 根据 Cauchy 判别法，当
   $$
   \overline{\lim_{n\to\infty}}|c_n(z-a)^n|^{1/n}<1
   $$
   也就是
   $$
   |z-a|<\frac{1}{\overline{\underset{n\to\infty}{\lim}}|c_n|^{1/n}}
   $$
   时收敛，取大于时发散.

   这里，收敛半径是
   $$
   R=\underset{n\to\infty}{\underline{\lim}}\left|\frac{1}{c_n}\right|^{1/n}
   $$

2. 根据 d'Alembert 判别法，当
   $$
   |z-a|<\lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|
   $$
   时级数收敛.

前者的缺点是不好计算；后者则是要求极限一定存在，这并不是时时刻刻都满足的.

幂级数 $\underset{n=0}{\overset{\infty}{\sum}}c_n(z-a)^n$ 的每一项都是 $z$ 的解析函数，Abel 定理告诉我们，幂级数在收敛圆内可以逐项求导，且得到的是一个在更小 (或者不变) 收敛圆上的幂级数.

那么收敛圆上的幂级数性质如何？

> 答案是：可能在收敛圆上处处发散，例如，
> $$
> 1+z+z^2+\cdots+z^n+\cdots
> $$
> 也可能在收敛圆上的一部分点收敛，一部分点发散，例如
> $$
> \frac{z}{1}+\frac{z^2}{2}+\frac{z^3}{3}+\cdots+\frac{z^n}{n}+\cdots
> $$
> ($z\neq1$ 时发散，除了这一点以外处处收敛)
>
> 还可能在收敛圆上处处收敛，例如
> $$
> \frac{z^2}{1\cdot2}+\frac{z^3}{2\cdot3}+\frac{z^4}{3\cdot4}+\cdots+\frac{z^n}{n(n-1)}+\cdots
> $$
> /Remark/
>
> > 能不能直接拆括号证明上述级数收敛？
> >
> > 证明收敛级数实际上不能拆括号，但是我们是在对部分和拆括号啊.
>
> 综上所述：不论哪种情况，幂级数的 ==和函数== 在收敛圆上肯定有奇点 (因为找不到一个邻域，里面的点全部收敛)，但是即使在奇点，幂级数仍然有可能收敛.
>
> 值得注意的是，“和函数”和级数不是一个东西，我们强调的是和函数在收敛圆上有奇点. 比如上面第三个例子，在 $z=1$ 的时候，和函数实际上在支点，而支点必为奇点，这一点并不解析.
>
> 可惜的是上述命题我们暂时还无法证明.

/Theorem/ (Abel 第二定理)

> 如果幂级数 $\underset{n=0}{\overset{\infty}{\sum}}c_n(z-a)^n$ 在收敛圆内收敛到 $f(z)$，并且级数在收敛圆周上某点 $z_0$ 也收敛，和为 $S$，则沿着收敛圆内的任意曲线趋向 $z_0$ 点 (要求曲线和收敛圆上过 $z_0$ 点的切线夹角大于 $0$)，$f(z)$ 都一致地趋于 $S$.

简而言之，求收敛圆上的和函数值时要先审敛.

/Proof/

> 不失一般性，可以假设 $a=0$，收敛半径 $R=1$，以及收敛圆上的收敛点为 $z=1$；另外，可以假设 $\underset{n=0}{\overset{\infty}{\sum}}c_n=0$，这个可以通过在 $c_0$ 上附加一个常数做到.
>
> 记系数的部分和为 $S_n=c_0+c_1+\cdots+c_n$，所以：$c_nz^n=(S_n-S_{n-1})z^n$，有
> $$
> S_n(z)=(1-z)(S_0+S_1z+\cdots+S_{n-1}z^{n-1})+S_nz^n
> $$
> 再由 $S_nz^n\to0$，得到：
> $$
> S(z)=(1-z)\underset{n=0}{\overset{\infty}{\sum}}S_nz^n
> $$
> 假设 $n>N-1$ 时，$|S_n|<\varepsilon$，则
> $$
> \begin{aligned}
> |S(z)|&\leq|1-z|\left|\underset{n=0}{\overset{N-1}{\sum}}S_nz^n\right|+\varepsilon|1-z|\underset{n=N}{\overset{\infty}{\sum}}|z^n|\\\\
> &=|1-z|\left|\underset{n=0}{\overset{N-1}{\sum}}S_nz^n\right|+\frac{\varepsilon|z|^N|1-z|}{1-|z|}
> \end{aligned}
> $$
> 前面一项总之是有限的，但是难点在于后面那个等比级数. 在单位圆内，有 $z=re^{\text{i}\theta}$，$r<1$. 因此：
> $$
> |1-z|=\sqrt{1+r^2-2r\cos\theta}=(1-r)\sqrt{1+\frac{4r^2\sin^2\frac{\theta}{2}}{(1-r)^2}}
> $$
> 如何估算根式部分的上界？Abel 第二定理说不能沿着切线方向，想到证明过程中应该用到角度：
>
> <CardMasonry>
>
> <img src="https://vip.123pan.cn/1845440081/yk6baz03t0n000d7w33gzunk4apm58n1DIYxAIFxDda1DGxPDwUzAa==.png" style="zoom:150%;" />
>
> </CardMasonry>
>
> 代入得到：
> $$
> \frac{r}{\sin\varphi}=\frac{1}{\sin(\theta+\varphi)}\Longrightarrow\frac{4r^2\sin^2\frac{\theta}{2}}{(1-r)^2}=\frac{\cos\theta-\cos(\theta+2\varphi)}{1+\cos(\theta+2\varphi)}
> $$
> (其中用到和差化积 & 积化和差公式)
>
> $\theta\to0$，$\varphi<\pi/2$，上式分母大于零，因此上式有界，也就是 $|1-z|<K(r-1)$，证毕.

Abel 第二定理就是要求大家在求收敛圆上的值时一定要先审敛，比如 $\underset{n=0}{\overset{\infty}{\sum}}z^n$ 在 $z=-1$ 的值？

/Theorem/

> 设：
>
> 1. $f(t,z)$ 是 $t,z$ 的连续函数，$t>a$，$z\in\overline{G}$；
> 2. 对于任何 $t\geq a$，$f(t,z)$ 是 $\overline{G}$ 上的单值解析函数；
> 3. $F(z)=\int_a^\infty f(t,z)\text{d}t$ 在 $\overline{G}$ 上一致收敛.
>
> 则 $F(z)$ 在 $G$ 内部解析，且
> $$
> F'(z)=\int_a^\infty\frac{\partial f(t,z)}{\partial z}\text{d}t
> $$

其证明就是 Weierstrass 定理.

应用这个定理时，需要判断无穷集粉 (或瑕积分) 是否一致收敛，常用的判别法就是用一个 $\phi(t)$ 来判断，要求 $\phi(t)>|f(t,z)|$.

/Example/

> 求积分：
> $$
> F(z)=\int_0^\infty e^{-t^2}\cos(2zt)\text{d}t
> $$
>
> ---
>
> 我们知道，
> $$
> \cos z=\cos(x+\text{i}y)=\cosh y\cos x-\text{i}\sinh y\sin x
> $$
> 对这个模做一个估值：
> $$
> \begin{aligned}
> |\cos z|&=\sqrt{\cosh^2y\cos^2x+\sinh^2y+\sin^2x}\\\\
> &=\sqrt{\cosh^2y-\sin^2x}\\\\
> &\leq\cosh2|yt|\leq e^{2|yt|}
> \end{aligned}
> $$
> 这个似乎是无界的. 但是我们可以给它强行加一个“界”，要求函数呆在 $z$ 平面上的任意一个闭区域上，$|\Im(z)|<y_0$. 所以
> $$
> \left|e^{-t^2}\cos(2zt)\right|<e^{-t^2+2y_0t}
> $$
> 而这个积分是收敛的，所以含参量的无穷积分一致收敛.
>
> 至于求积分：
> $$
> \begin{aligned}
> F'(z)&=-2\int_0^\infty te^{-t^2}\sin(2zt)\text{d}t\\
> &=e^{-t^2}\sin(2zt)|^\infty_0-2z\int_0^\infty e^{-t^2}\cos(2zt)\text{d}t\\
> &=-2zF(z)
> \end{aligned}
> $$
> 这是一个微分方程. 对于初始值，我们有：
> $$
> F(0)=\int_0^\infty\int_0^\infty e^{-(x^2+y^2)}\text{d}x\text{d}y
> $$
> 换成极坐标，积分得到 $\sqrt{\pi}/2$ (Gauss 积分). 最终答案：
> $$
> F(z)=\frac{\sqrt{\pi}}{2}e^{-z^2}
> $$

::: tip

讲到这里的时候突然有一阵震动.

“看来是中央空调开了，一年没开里边全是灰，结果全让咱们给吸干了. 为祖国健康吸灰…” —— 松神

:::

## 解析函数的局域性展开

/Theorem/ (Taylor 展开)

> 函数 $f(z)$ 在以 $a$ 为圆心的圆 $C$ 内部及 $C$ 上解析 (其实没必要在 $C$ 上解析)，则对于圆内部的任何 $z$ 点，$f(z)$ 可以用幂级数展开为
> $$
> f(z)=\underset{n=0}{\overset{\infty}{\sum}}a_n(z-a)^n
> $$
> 其中，
> $$
> a_n=\frac{1}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-a)^{n+1}}\text{d}\zeta=\frac{f^{(n)}(a)}{n!}
> $$
> 围道 $C$ 取逆时针方向.

/Proof/

> 现在要来凑出这个幂级数.
>
> 对于任何一点，有
> $$
> f(z)=\frac{1}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{\zeta-z}\text{d}\zeta
> $$
> 而，
> $$
> \frac{1}{\zeta-z}=\frac{1}{(\zeta-a)-(z-a)}=\frac{1}{\zeta-a}\underset{n=0}{\overset{\infty}{\sum}}\left(\frac{z-a}{\zeta-a}\right)^n
> $$
> 这个级数在 $|(z-a)/(\zeta-a)|\leq r<1$ 的区域中关于 $\zeta$ 一致收敛，因此可以逐项积分，也就是
> $$
> \begin{aligned}
> f(z)&=\frac{1}{2\pi\text{i}}\oint_C\left[\underset{n=0}{\overset{\infty}{\sum}}\frac{(z-a)^n}{(\zeta-a)^{n+1}}\right]f(\zeta)\text{d}\zeta\\
> &=\underset{n=0}{\overset{\infty}{\sum}}\left[\frac{1}{2\pi\text{i}}\oint_C\frac{f(\zeta)}{(\zeta-a)^{n+1}}\text{d}\zeta\right](z-a)^n\\
> &=\underset{n=0}{\overset{\infty}{\sum}}a_n(z-a)^n
> \end{aligned}
> $$
> 得证.
>
> 必需要注意：这里交换了积分和求导的顺序，所以中间验证了一致收敛性. 但是相对于实变函数，这里条件实际上放宽了，因为只需要解析函数，就足以保证 Taylor 级数收敛.

收敛范围：函数 $f(z)$ 的奇点 (必须是不可去的，比如 $\sin z/z$ 在 $z=0$ 是一个可去奇点) 完全决定了 Taylor 级数的收敛半径，设 $b$ 是 $f(z)$ 离 $a$ 点最近的奇点，则收敛半径一般是 $R=|b-a|$.

/Theorem/ (Taylor 展开的唯一性)

> 给定一个在圆 $C$ 内解析的函数，其 Taylor 展开是唯一的，展开系数 $a_n$ 是完全确定的.

::: tip

这时候大家对答案要是发现不一样，就要有自信：别人一定错了. Heisenberg 在美国核弹试爆之后仍然坚信是假消息，因为根据他的计算，核弹要 10 吨纯铀. 大家要像他一样自信.

:::

注意：上述定理只在同一圆内、同一函数的情况下成立.

常用：
$$
\begin{aligned}
e^z=&\sum_{n=0}^{\infty}\frac{z^n}{n!}=1+z+\frac{1}{2}z^2+\cdots\,,\quad|z|<\infty\\
\sin(z)=&\sum_{n=0}^{\infty}\frac{(-1)^nz^{2n+1}}{(2n+1)!}=z-\frac{1}{6}z^3+\cdots\,,\quad|z|<\infty\\
\cos(z)=&\sum_{n=0}^{\infty}\frac{(-1)^nz^{2n}}{(2n)!}=1-\frac{1}{2}z^2+\cdots\,,\quad|z|<\infty\\
\frac{1}{1-z}=&\sum_{n=0}^{\infty}z^n=1+z+\cdots\,,\quad|z|<1
\end{aligned}
$$
对于其他的函数，尽量通过换元的方式回到这几个公式.

/Example/

> $$
> \frac{1}{1-3z+2z^2}=\frac{1}{(1-z)(1-2z)}=\frac{A}{1-z}+\frac{B}{1-2z}
> $$
>
> 就能得到结果.
>
> /Remark/
>
> > 两个幂级数的和的收敛半径会怎么变？
> >
> > 某种程度上来说，肯定取最小的那个. 但是如果两个幂级数收敛半径一样大，没准就会出现收敛半径变大的情况：比如说 $1/(1-z)$ 和 $1/(z-1)+1/(2-z)$ …

也有可能可以通过逐项求导的方式得到新的幂级数：比如 $1/(1-z)^2$ 的展开.

更加有意思的例子是：

$\underset{n=0}{\overset{\infty}{\sum}}k^2$ 的求和，可以转化成 $\underset{n=0}{\overset{\infty}{\sum}}k^2z^{k-1}$ 的求和，它是 $\underset{n=0}{\overset{\infty}{\sum}}kz^{k}$ 的求导，而后者再乘一个 $z^{-1}$，就是 $\underset{n=0}{\overset{\infty}{\sum}}z^k$ 的求导，最终是一个等比级数. 这在数学上称为生成函数法.

$1/(1-z)^2$ 的另一个求导方法：
$$
\lim_{\varepsilon\to0}\frac{1}{(1-z)(1+\varepsilon-z)}=\lim_{\varepsilon\to0}\frac{1}{\varepsilon}\underset{n=0}{\overset{\infty}{\sum}}\left[1-\frac{1}{(1+\varepsilon)^{n+1}}\right]z^n
$$
用 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则即可.