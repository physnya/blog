---
url: /equation-m-p/lesson-7/index.md
---
## Bessel 方程

方程形式为
$$
\frac{\text{d}^2w}{\text{d}z^2}+\frac{1}{z}\frac{\text{d}w}{\text{d}z}+\left(1-\frac{\nu^2}{z^2}\right)w=0
$$
默认 $\nu$ 是一个正实数. $z=0$ 是方程的正则奇点，$z=\infty$ 是非正则奇点.

考虑 $z=0$ 邻域的解为
$$
w(z)=z^\rho\sum\_{k=0}^\infty c\_kz^k,\quad c\_0\neq0
$$
代入，得到
$$
\begin{aligned}
&\sum\_{k=0}^\infty c\_k(k+\rho)(k+\rho-1)z^{k+\rho-2}+\sum\_{k=0}^\infty c\_k(k+\rho)z^{k+\rho-2}\\
&+\sum\_{k=0}^\infty c\_kz^{k+\rho}-\nu^2\sum\_{k=0}^\infty c\_kz^{k+\rho-2}=0
\end{aligned}
$$
约去 $z^{\rho-2}$，
$$
\sum\_{k=0}^\infty c\_k\[(k+\rho)^2-\nu^2]z^k+\sum\_{k=0}^\infty c\_kz^{k+2}=0
$$
由最低次幂的系数，且 $c\_0\neq0$，得到指标方程为
$$
\rho^2-\nu^2=0
$$
可以取 $\rho\_{1,2}=\pm\nu$. 再看 $z^1$ 项系数，为
$$
c\_1\[(\rho+1)^2-\nu^2]=c\_1(2\rho+1)=0
$$
如果 $\rho\neq-1/2$，那么 $c\_1=0$；否则是任意的. 递推关系：
$$
c\_n=-\frac{1}{n(n+2\rho)}c\_{n-2}
$$
我们最后关注的肯定是偶数项，因为 $c\_0$ 被要求了不为零，所以这一个序列更加重要；至于奇数项作用并不是特别大. 偶数项：
$$
c\_{2n}=\frac{(-1)^n}{n!}\frac{1}{(\rho+1)*n}\frac{1}{2^{2n}}c\_0=\boxed{\frac{(-1)^n\Gamma(\rho+1)c\_0}{n!\Gamma(\rho+n+1)2^{2n}}}
$$
奇数项为零 (可以要求). 取 $\rho\_1=\nu$，$c\_0=\displaystyle{\frac{1}{2^\nu\Gamma(\nu+1)}}$，得到 Bessel 函数
$$
J*\nu(z)=\sum\_{k=0}^\infty\frac{(-1)^k}{k!\Gamma(k+\nu+1)}\left(\frac{z}{2}\right)^{2k+\nu}
$$
$\rho\_2=-\nu$ 时，取 $c\_0=\displaystyle{\frac{2^\nu}{\Gamma(-\nu+1)}}$，
$$
J\_{-\nu}(z)=\sum\_{k=0}^\infty\frac{(-1)^k}{k!\Gamma(k-\nu+1)}\left(\frac{z}{2}\right)^{2k-\nu}
$$
但是我们并没有解决 $\rho=-1/2$ 时，$c\_1\neq0$ 的情形. 实际上经过计算可以证明：
$$
z^{-1/2}\sum\_{n=0}^\infty c\_{2n+1}z^{2n+1}=c\_1\sqrt{\frac{\pi}{2}}\cdot J\_{1/2}(z)
$$
也就是在 $w\_2(z)$ 上叠加一个第一解.

***

我们还是没有完成全部的求解：

* 当 $\nu\neq$ 整数，解已经完备；

* $\nu=$ 正整数，可能会出现 $\Gamma$ 函数的自变量为负整数或者 $0$，考虑
  $$
  J\_{-n}(x)=\sum\_{k=0}^\infty\frac{(-1)^k}{k!\Gamma(k-n+1)}\left(\frac{x}{2}\right)^{2k-n}
  $$
  $\Gamma$ 在分母上且是无穷，$k=0,\cdots,n-1$ 的每一项全部是 $0$，如果 $k-n=l$，那么就变为
  $$
  J\_{-n}(x)=(-1)^nJ\_n(x)
  $$
  相当于同一个解.

  ::: warning

  这是因为，我们在解第二解的时候提出的系数 $c\_0=\displaystyle{\frac{2^n}{\Gamma(-n+1)}}$ 在这些情况下已经是零了，实际上并不是合理的，当然会出现两个解线性相关的问题.

  :::

* 如果更特殊，$\nu=0$，则
  $$
  J\_0(x)=\sum\_{k=0}^\infty\frac{(-1)^k}{(k!)^2}\left(\frac{x}{2}\right)^{2k}
  $$

所以实际上 $\nu=n$ 时，第二解应该有对数项，
$$
w\_2(x)=gJ\_n(x)\ln x+\sum\_{k=0}^\infty d\_kx^{k-n}
$$
用 Wronski 行列式来做：
$$
\Delta\[J\_\nu(z),J\_{-\nu}(z)]=\begin{vmatrix}
J\_\nu(z)\&J\_{-\nu}(z)\J'*\nu(z)\&J'*{-\nu}(z)
\end{vmatrix}=A\exp\left\[-\int^z\frac{\text{d}\zeta}{\zeta}\right]=\frac{A}{z}
$$
后面的形式实际上是由 Wronski 积分给出的. 所以在计算行列式的意义上，可以只计算 $z^{-1}$ 项系数给出的值，
$$
\begin{aligned}
A&=\frac{1}{\Gamma(1+\nu)}\frac{1}{2^\nu}\frac{1}{\Gamma(1-\nu)}\frac{-\nu}{2^{-\nu}}-\frac{1}{\Gamma(1-\nu)}\frac{1}{2^{-\nu}}\frac{1}{\Gamma(1+\nu)}\frac{\nu}{2^\nu}\\\\
&= -\frac{2\nu}{\Gamma(1+\nu)\Gamma(1-\nu)}\\\\
&= -\frac{2}{\Gamma(\nu)\Gamma(1-\nu)} = \boxed{-\frac{2}{\pi}\sin\pi\nu}
\end{aligned}
$$
最后用到 $\Gamma$ 函数的宗量互余定理. 如果我们取第二解为
$$
\frac{cJ\_\nu(z)-J\_{-\nu(z)}}{\sin\pi\nu}
$$
那么 $\Delta\[J\_\nu(z),w\_2(z)]=2/(\pi z)$，也就是在 L'Hôpital 法则下得到了正常的第二解. 但是为了保证 $w\_2(z)$ 始终有意义，注意 $J\_{-n}(z)=(-1)^nJ\_n(z)$，只需要取 $c=\cos\pi\nu$ 即可. 最终得到 $\nu$ 阶 Neumann 函数，
$$
N\_\nu(z) = \frac{\cos\pi\nu J\_\nu(z)-J\_{-\nu}(z)}{\sin\pi\nu}
$$
在期末考试中，Bessel 函数是要求背下来的，其他不做要求.

***

下面我们讨论一下正常解第二解应该怎么做 (也就是不提出那一个系数). 此时方程为 ($0$ 解 Bessel 方程)
$$
\frac{\text{d}^2w}{\text{d}z^2}+\frac{1}{z}\frac{\text{d}w}{\text{d}z}+w=0
$$
第二解形式：
$$
w\_2(z)=g\ln z\cdot J\_0(z)+\sum\_{k=0}^\infty d\_kz^k
$$
代入，因为 $J\_0(z)$ 已经是方程的解，所以如果只对 $J\_0(z)$ 求导的话 (也就是 $\ln z$ 项的系数)，方程一定成立；因此想要得到另外的解，一定要对 $\ln z$ 求导，也就是最后的式子不会出现 $\ln z$ 这样的东西.

最后得到
$$
\frac{2g}{z}J\_0'(z)+\frac{d\_1}{z}+\sum\_{k=0}^\infty\[d\_{k+2}(k+2)^2+d\_k]z^k=0
$$
$d\_0$ 任意，$d\_1=0$. 得到递推关系
$$
d\_{2k+2}(2k+2)^2=\frac{(-1)^kg}{k!(k+1)!\cdot2^{2k}}-d\_{2k}
$$
这个关系没办法求通项.

## 方程正则解的根源

在正则奇点附近，将系数 $p(z)$ 和 $q(z)$ 全部 Laurent 展开，以最重要的第一项作为近似，得到：
$$
\frac{\text{d}^2w}{\text{d}z^2}+\frac{p\_0}{z-z\_0}\frac{\text{d}w}{\text{d}z}+\frac{q\_0}{(z-z\_0)^2}w=0
$$
正是 Euler 方程！这说明在正则奇点附近，方程的行为和 Euler 方程一致.

## Frobenius 方法

前面我们了解到方程的第二解很难得到，所以 Frobenius 发展了一种从第一解直接得到第二解的方法. 假设 $z=0$ 是方程
$$
w''+pw'+qw=0
$$
的正则奇点. 令算符
$$
L\[w] = z^2w'' +z(zp)w'+(z^2q)w
$$
把第一解
$$
w(z)=\sum\_{n=0}^\infty c\_nz^{n+\rho}
$$
代入，得到
$$
L\[w]=z^\rho\left{\sum\_{n=1}^\infty\left\[c\_nf\_0(\rho+n)+\sum\_{k=1}^nc\_{n-k}f\_k(\rho+n)\right]z^n+c\_0f\_0(\rho)\right}
$$
其中，
$$
f\_0(x)=x(x-1)+p\_0x+q\_0,\quad f\_k(x)=p\_k(x-k)+q\_k,\quad k =1,2,\cdots
$$
递推关系为
$$
c\_nf\_0(\rho+n)+\sum\_{k=1}^nc\_{n-k}f\_k(\rho+n)=0,\quad n=1,2,\cdots
$$
最终，
$$
L\[w]=c\_0z^\rho f\_0(\rho) =
$$

## 非正则奇点邻域内求解的思路

非正则邻域的解一般有无穷个负幂次项. 假设 $z=0$ 是非正则奇点，可以令 $w(z)=e^{S(z)}$ 得到 $S(z)$ 的方程，只保留方程中最重要的项，得到近似解 $S(z)=S\_0(z)$.

进一步，令 $S(z)=S\_0(z)+S\_1(z)$，求出 $S\_1(z)$.

不断重复，最终每个近似解都形如 $S\_i(z)=a\_iz^{\nu\_i}$，并且 $\Re(\nu\_0)<\Re(\nu\_1)<\cdots<0$.

这个过程并不会一直重复，到某一个解会得到 $\rho\ln z$. 后面的解已经不再有奇性. 因此解的形式为
$$
w(z) = Ae^{S(z)}z^\rho\sum\_{k=0}^\infty c\_kz^k,\quad c\_0=1
$$
$Ae^{S(z)}z^\rho$ 称为方程主项，这个方法称为主项平衡法.

举例：一维谐振子 Schrödinger 方程
$$
\psi''(x)+(\lambda-x^2)\psi(x)=0
$$

## 常微分方程的积分解法

引入算符
$$
L\[u] = \left\[p\_0\frac{\text{d}^2}{\text{d}z^2}+p\_1(z)\frac{\text{d}}{\text{d}z}+p\_2(z)\right]u
$$
积分解法的基本原理是引入积分变换
$$
u(z) = \int\_C K(z,t)v(t)\text{d}t
$$
于是
$$
L\[u]=\int\_CL\_z\[K(z,t)]v(t)\text{d}t
$$
如果找到一个适合的积分变换核和另一个对应 $t$ 的线性微分算子 $M\_t$，满足
$$
L\_z\[K(z,t)]=M\_t\[K(z,t)]
$$
则利用分部积分得到
$$
L\[u]=\int\_CK(z,t)\bar{M}\_t\[v(t)]\text{d}t+{Q\[K,v]}\_C
$$
找到合适的 $v(t)$ 使得
$$
\bar{M}\_t\[v(t)]=0,\quad {Q\[K,v]}\_C=0
$$
则解为
$$
u(z)=\int\_CK(z,t)v(t)\text{d}t
$$
::: danger

然后某个叫 LYS 的人把后面所有积分变换的内容全部跳过了要大家自己看.

:::

## 球函数

Helmholz 方程在球坐标系下分离变量得到连带 Legendre 方程：
$$
\frac{1}{\sin\theta}\frac{\text{d}}{\text{d}\theta}\left(\sin\theta\frac{\text{d}\Theta}{\text{d}\theta}\right)+\left\[\lambda-\frac{\mu}{\sin^2\theta}\right]\Theta=0
$$
换元 $x=\cos\theta, y(x)=\Theta(\theta)$，得到
$$
\frac{\text{d}}{\text{d}x}\left\[(1-x^2)\frac{\text{d}y}{\text{d}x}\right]+\left\[\lambda-\frac{\mu}{1-x^2}\right]y=0
$$
当 $\mu=0$ 为 Legendre 方程.

Legendre 方程有 $z=\pm1,\infty$ 三个正则奇点，其他位置全平面解析. 在 $z=1$ 邻域内，两个线性无关解：
$$
\begin{aligned}
\&P\_\nu(z)=\sum\_{n=0}^\infty\frac{1}{(n!)!}\frac{\Gamma(\nu+n+1)}{\Gamma(\nu-n+1)}\left(\frac{z-1}{2}\right)^n\\\\
\&Q\_\nu(z)=\frac{1}{2}P\_\nu(z)\left\[\ln\frac{z+1}{z-1}-2\gamma-2\psi(\nu+1)\right]\\\\
&\quad+\sum\_{n=0}^\infty\frac{1}{(n!)^2}\frac{\Gamma(\nu+n+1)}{\Gamma(\nu-n+1)}\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right)\left(\frac{z-1}{2}\right)^n
\end{aligned}
$$
本征值为 $l(l+1)$，本征函数为 $P\_l(x)$，为 Legendre 多项式，
$$
P\_l(x)=\sum\_{n=0}^\infty\frac{1}{(n!)^2}\frac{(l+n)!}{(l-n)!}\left(\frac{x-1}{2}\right)^n
$$
Legendre 多项式的一个重要性质是，在 $\[-1,1]$ 之间正交.

Rodrigues 公式
$$
P\_l(x) = \frac{1}{2^l\cdot l!}\frac{\text{d}}{\text{d}x^l}(x^2-1)^l
$$
