---
title: Lesson 8 Legendre 多项式
permalink: /equation-m-p/lesson-8-Legendre-polynomial/
createTime: 2025/11/14 12:15:57
---
在球坐标下，
$$
\frac{1}{\sin\theta}\frac{\text{d}}{\text{d}\theta}\left(\sin\theta\frac{\text{d}\varTheta(\theta)}{\text{d}\theta}\right)+\lambda\varTheta(\theta)=0
$$
如果换元 $x=\cos\theta$，$y=\varTheta(\theta)$，并把 $\lambda$ 写成 $\nu(\nu+1)$，本征值问题变为
$$
\frac{\text{d}}{\text{d}x}\left[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\nu(\nu+1)y=0
$$

---

下面我们说一个必须要背下来的公式 —— Rodrigues 公式 (Legendre 多项式的微分表示)：
$$
P_l(x)=\frac{1}{2^ll!}\frac{\text{d}^l}{\text{d}x^l}(x^2-1)^l
$$
/Proof/

> 强行来计算 (本来还有复变函数的做法，但是这门课很多人没学过复变)：
> $$
> (x^2-1)^l=\sum_{n=0}^l\frac{l!}{n!(l-n)!}2^{l-n}(x-1)^{l+n}
> $$
> 得到
> $$
> \begin{aligned}
> \frac{1}{2^ll!}\frac{\text{d}^l}{\text{d}x^l}(x^2-1)^l&=\frac{\text{d}^l}{\text{d}x^l}\sum_{n=0}^l\frac{1}{n!(l-n)!}2^{-n}(x-1)^{l+n}\\\\
> &=\sum_{n=0}^l\frac{1}{n!(l-n)!}\frac{(l+n)!}{n!}\left(\frac{x-1}{2}\right)^n
> \end{aligned}
> $$
> 得证.

从 Rodrigues 公式中能够看出：

* Legendre 多项式的奇偶性：$l$ 为偶数的时候 $P_l(x)$ 是偶函数，反之为奇函数.

* 结合 $P_l(1)=1$，又可以得到 $P_l(-1)=(-1)^l$.

* 多项式的零点均在 $(-1,1)$ 内.

  这是用 $l$ 次 [Rolle 定理](/integral/agjiig9l/#微分中值定理) 得到的结果.

Rodrigues 公式可以用来导出 $P_l(x)$ 的另一种展开：先展开 $(x^2-1)^l$，得到
$$
(x^2-1)^l=\sum_{r=0}^l(-1)^r\frac{l!}{r!(l-r)!}x^{2l-2r}
$$
逐项微商 $l$ 次，
$$
\begin{aligned}
\frac{\text{d}^l}{\text{d}x^l}(x^2-1)^l &= \frac{\text{d}^l}{\text{d}x^l}\sum_{r=0}^l(-1)^r\frac{l!}{r!(l-r)!}x^{2l-2r}\\\\
&=\sum_{r=0}^{\lfloor l/2\rfloor}(-1)^r\frac{l!}{r!(l-r)!}\frac{(2l-2r)!}{(l-2r)!}x^{l-2r}
\end{aligned}
$$
::: tip

可能在考试的时候无法背下来或者推出这个公式，但是我们可以利用 R 公式把要用的部分灵活地推出来：比如求 $P_l(0)$ 的数值，首先可以知道 $l=$ 奇数时就是零，另外的部分是
$$
P_{2l}(0) = 
$$


:::

## Legendre 多项式的性质

Legendre 多项式是下面本征值问题的解：
$$
\frac{\text{d}}{\text{d}x}\left[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\nu(\nu+1)y=0
$$
证明正交性，考虑把 $P_l(x)$ 和 $P_m(x)$ 代进去，然后两式交叉相乘并相减，得到
$$
\begin{aligned}
&[l(l+1)-m(m+1)]\int_{-1}^1 P_lP_m\text{d}x\\\\
&=\int_{-1}^1\left\{P_l\frac{\text{d}}{\text{d}x}[(1-x^2)P_m']-P_m\frac{\text{d}}{\text{d}x}[(1-x^2)P_l']\right\}\text{d}x\\\\
&=(1-x^2)[P_lP_m'-P_l'P_m]^{1}_{-1} = \boxed{0}
\end{aligned}
$$
得证正交性.

::: warning

这告诉我们 —— 本征值方程必须背下来，不仅仅是因为我们在分离变量之后要认出后面的方程到底是个什么东西，而且很多证明过程也需要用到本征值方程.

:::

另一种证明正交性的方法是 (讲义上的)，计算
$$
\int_{-1}^1x^kP_l(x)\text{d}x=0
$$
当 $k\pm l$ 为奇数时，从被积函数的奇偶性就可以判断上述积分的结果是零. 为偶数时，发现我们并不会算，所以直接代入 R 公式：
$$
\begin{aligned}
&\int_{-1}^1x^kP_l(x)\text{d}x = \frac{1}{2^ll!}\int_{-1}^1x^k\frac{\text{d}}{\text{d}x}(x^2-1)^l\text{d}x\\\\
&= \frac{1}{2^ll!}\left[x^k\left.\frac{\text{d}^{l-1}}{\text{d}x^{l-1}}(x^2-1)^l\right|^1_{-1}-\int_{-1}^1\frac{\text{d}x^k}{\text{d}x}\frac{\text{d}^{l-1}}{\text{d}x^{l-1}}(x^2-1)^l\text{d}x\right]
\end{aligned}
$$
每一次都用分部积分降低一个次数，最后所有的微分运算都转移到函数 $x^k$ 上 (每一次前面一项都是零)，
$$
\int_{-1}^1x^kP_l(x)\text{d}x=\frac{(-1)^l}{2^ll!}\int_{-1}^1\frac{\text{d}^lx^k}{\text{d}x^l}(x^2-1)\text{d}x
$$
只要 $k<l$，就有
$$
\int_{-1}^1x^kP_l(x)\text{d}x=0
$$
也就得到一个比正交性更强的结论：$P_l(x)$ 和任何次数小于 $l$ 的多项式都是正交的.

::: tip

这给出了一个非常重要的应用：考虑积分
$$
\int_{-1}^1f(x)\text{d}x
$$
在数值计算中可以化为一种求和
$$
\int_{-1}^1f(x)\text{d}x=\sum_n w_nf(x_n)
$$
重点是确定这里的权重和 $x_n$ 的位置. 一般选取 $P_l(x)$ 的零点 ($l$ 个) 作为 $x_n$，令积分对 $f(x)=1,x,x^2,\cdots,x^l$ 全部严格成立：
$$
w_1x^k+w_2x^k+\cdots+w_lx^k=\int_{-1}^1x^k\text{d}x=\frac{1-(-1)^{k+1}}{k+1}
$$
解得各个系数 $w_n$，就可以数值计算. 这被称为 Gauss - Legendre 方法.

:::

我们刚刚算的是 $k<l$ 的积分，现在算 $k=l+2n$ 的情况，
$$
\begin{aligned}
\int_{-1}^1x^{l+2n}P_l(x)\text{d}x &=\frac{(-1)^l}{2^ll!}\int_{-1}^1\frac{\text{d}^lx^{l+2n}}{\text{d}x^l}(x^2-1)^l\text{d}x\\\\
&=\frac{1}{2^ll!}\frac{(l+2n)!}{(2n)!}\int_{-1}^1x^{2n}(1-x^2)^l\text{d}x
\end{aligned}
$$
作变换，$x^2=t$，利用复变函数中用过的 $\Beta$ 函数可以算出积分，
$$
\begin{aligned}
\int_{-1}^1x^{l+2n}P_l(x)\text{d}x &= \frac{1}{2^ll!}\frac{(l+2n)!}{(2n)!}\int_0^1t^{n-1/2}(1-t)^l\text{d}t\\\\
&= \frac{1}{2^ll!}\frac{(l+2n)!}{(2n)!}\frac{\Gamma(n+1/2)\Gamma(l+1)}{\Gamma(n+l+3/2)}\\\\
&= 2^{l+1}\frac{(l+2n)!(l+n)!}{n!(2l+2n+1)!}
\end{aligned}
$$
这种积分的核心就是分部积分法.

::: warning

注意一下，$P_l(x)P_l(x)$ 不能写成 $P_l^2(x)$，因为这是连带 Legendre 多项式的符号. 要写平方只能打括号.

:::

最终有
$$
\int_{-1}^1P_k(x)P_l(x)\text{d}x=\int_0^\pi P_k(\cos\theta)P_l(\cos\theta)\sin\theta\text{d}\theta=\frac{2}{2l+1}\delta_{kl}
$$
任意一个在区间 $[-1,1]$ 分段连续的函数 $f(x)$ 在 **平均收敛** 的意义上可以被展开为级数
$$
f(x)=\sum_{l=0}^\infty c_lP_l(x),\quad c_l=\frac{2l+1}{2}\int_{-1}^1f(x)P_l(x)\text{d}x
$$
也可以用 $\theta$ 为变量，也就是
$$
f(\theta)=\sum_{l=0}^\infty c_lP_l(\cos\theta),\quad c_l=\frac{2l+1}{2}\int_0^\pi f(\theta)P_l(\cos\theta)\sin\theta\text{d}\theta
$$
/Definition/ (平均收敛)

> 如果
> $$
> \lim_{N\to\infty}\int_{-1}^1\left|f(x)-\sum_{l=0}^Nc_lP_l(x)\right|^2\text{d}x=0
> $$
> 则称级数 $\displaystyle{\sum_{l=0}^\infty c_lP_l(x)}$ 平均收敛到 $f(x)$.

/Example/

> 计算 $f(x)=x^3$ 的 Legendre 展开.
>
> ---
>
> 系数为
> $$
> c_l=\frac{2l+1}{2}\int_{-1}^1x^3P_l(x)\text{d}x
> $$
> 明显只有 $c_1$ 和 $c_3$ 不是零.
> $$
> c_1=\frac{3}{2}\int_{-1}^1x^3P_1(x)\text{d}x=\frac{3}{5}
> $$
> 而且我们知道，$P_l(1)=1$，且 $f(1)=1^3=1$，因此必须有 $c_1+c_3=1$，只用算第一个系数. 如果算两个系数，也可以用这个技巧检验自己算得对不对.

### Legendre 多项式的生成函数

在物理上，这叫做多极展开.

考虑 $r$ 原点处的点电荷在 $(r',\theta,\phi)$ 下展开，
$$
\frac{1}{\sqrt{r^2+r'^2-2rr'\cos\theta}}=\left\{\begin{aligned}
&\frac{1}{r}\frac{1}{\sqrt{1-2xt+t^2}},&\quad t=\frac{r'}{r}\\\\
&\frac{1}{r'}\frac{1}{\sqrt{1-2xt+t^2}},&\quad t=\frac{r}{r'}
\end{aligned}\right.
$$
其中 $x=\cos\theta$. 这里 Taylor 展开 $(1-2xt+t^2)^{-1/2}$：
$$
\frac{1}{\sqrt{1-2xt+t^2}}=\sum_{l=0}^\infty c_lt^l
$$
可以证明，展开系数 $c_l$ 就是 Legendre 多项式 $P_l(x)$.

/Proof/

> 在 $t=0$ 附近展开，
> $$
> \begin{aligned}
> \frac{1}{\sqrt{1-2xt+t^2}} &= \frac{1}{\sqrt{1-2t+t^2-2(x-1)t}}\\\\
> &=\frac{1}{1-t}\left[1-\frac{2(x-1)t}{(1-t)^2}\right]^{-1/2}\\\\
> &= \frac{1}{1-t}\sum_{k=0}^\infty\frac{1}{k!}\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\cdots\left(\frac{1}{2}-k\right)\left[-\frac{2(x-1)t}{(1-t)^2}\right]^k\\\\
> &= \sum_{k=0}^\infty\frac{(2k-1)!!}{k!}(x-1)^kt^k(1-t)^{-(2k+1)}
> \end{aligned}
> $$
> 再把里面的 $(1-t)^{-(2k+1)}$ 展开：
> $$
> \frac{(2k-1)!!}{k!}(x-1)^kt^k\sum_{n=0}^\infty\frac{(2k+n)!}{n!(2k)!}t^n = t^l\sum_{k=0}^l\frac{(l+k)!}{(k!)^2(l-k)!}\left(\frac{x-1}{2}\right)^k
> $$
> 正是 $P_l(x)$！

利用这个生成函数，可以得到
$$
P_l(-x)=(-1)^lP_l(x)
$$

### Legendre 多项式的递推关系

同时将
$$
\frac{1}{\sqrt{1-2xt+t^2}}=\sum_{l=0}^\infty P_l(x)t^l
$$
两端对 $t$ 微商，
$$
\begin{aligned}
-\frac{1}{2}\frac{-2x+2t}{(1-2xt+t^2)^{3/2}} &= \sum_{l=0}^\infty lP_l(x)t^{l-1}\\\\
\frac{x-t}{(1-2xt+t^2)^{1/2}} &= (1-2xt+t^2)\sum_{l=0}^\infty lP_l(x)t^{l-1}\\\\
(x-t)\sum_{l=0}^\infty P_l(x)t^l &= (1-2xt+t^2)\sum_{l=0}^\infty lP_l(x)t^{l-1}
\end{aligned}
$$
比较系数，得到递推关系：
$$
xP_l(x)-P_{l-1}(x)=(l+1)P_{l+1}(x)-2xlP_l(x)+(l-1)P_{l-1}(x)
$$
化简：
$$
\boxed{(2l+1)xP_l(x)=(l+1)P_{l+1}(x)+lP_{l-1}(x)}
$$
这就是 Legendre 多项式的递推关系.

/Example/ (一个应用)

> 计算积分
> $$
> \int_{-1}^1xP_k(x)P_l(x)\text{d}x
> $$
>
> ---
>
> 把其中的 $xP_l(x)$ 分成 $P_{l+1}(x)$ 和 $P_{l-1}(x)$，得到
> $$
> \int_{-1}^1xP_k(x)P_l(x)\text{d}x=\frac{l+1}{2l+1}\frac{2\delta_{l+1,k}}{2l+3}+\frac{l}{2l+1}\frac{2\delta_{l-1,k}}{2l-1}
> $$

如果在最开始微商的时候对 $x$ 做微商，那么会得到导函数的递推关系，
$$
P_l(x)=P'_{l+1}(x)-2xP'_l(x)+P'_{l-1}(x)
$$

## Legendre 多项式的应用

考虑一个均匀电场 $\vec{E}_0$ 中的接地导体球，半径为 $a$，求球外任意一点的电势.

