---
url: /GR/lesson-19-unruh-effect/index.md
---
ergosphere 的 $g\_{00}>0$. 同时，有一个全局的 Killing vector，$\delta^{\mu}{}*{\hat{r}}$，它在 $r\to0$ 时是 timelike，$r\to\infty$ 是 spacelike. Penrose 想到了一个过程，即一个粒子从外到内，有
$$
mU\_0 = mU*\mu\delta^\mu{}*{\hat{r}}
$$
Hawking 把 Penrose 过程推广到 Schwarzschild 黑洞，它要求 Killing vector $\delta^\mu{}*{\hat{t}}$ 在视界的内部和外部分别是类空和类时的，同时还要求量子场论存在，因为单纯的量子力学不允许出现真空中的涨落.

上节课我们说到了对一个场做 Fourier 变换，
$$
\hat\phi(\vec{x},k) = \int\frac{\text{d}^3k}{(2\pi)^{3/2}(2\omega\_k)^{1/2}}\left\[e^{-\text{i}\omega\_kt+\text{i}\vec{k}\cdot\vec{x}}a\_{\vec{k}}+e^{\text{i}\omega\_kt-\text{i}\vec{k}\cdot\vec{x}}a\_{\vec{k}}^\dagger\right],\quad \omega\_k=\sqrt{k^2+m^2}
$$

***

现在直接说 Hawking radiation 还太难，我们先说一个 Unruh Effect. Unruh 是一个加拿大物理学家，在下面研究的效应中各种事情都是确定的. 我们考虑一个人开着飞船一直匀加速运动，那么它看到的真空将是有温度的.

这个问题只需要二维的 Minkowski 时空，$\text{d}s^2 = -\text{d}t^2+\text{d}x^2$. 定义速度和加速度，
$$
U^\alpha \equiv \frac{\text{d}x^\alpha}{\text{d}\tau},\quad a^\alpha \equiv \frac{\text{d}U^\alpha}{\text{d}\tau}
$$
由度规易知 $U\_\alpha U^\alpha=-1$，$U\_\alpha a^\alpha+a\_\alpha U^\alpha=0$ (也就是加速度和速度在时空中垂直). 为了考虑驾驶员「看到」了什么，需要用这个驾驶员的随动参考系，所谓 comoving coordinate. 在这个系中，$\tilde U^\alpha = (1,0)$.

加速度是一个时空二维矢量，存在守恒量 $\eta\_{\alpha\beta}a^\alpha a^\beta=a^2$，再有垂直条件，得到随动系中 $\tilde a^\alpha=(0,a)$.

先来看飞船的运动轨迹，为此利用一个二维下的 trick，换到 lightcone (光锥) 坐标系，
$$
\left{\begin{aligned}
\&u = t-x\\\\
\&v = t+x
\end{aligned}\right.\Longrightarrow \text{d}s^2 =-\text{d}u\text{d}v
$$
因为 Lorentz 变换在二维下是一个二阶反对称矩阵，只有一个独立分量，同时还要求保线元不变，所以光锥坐标系下的 Lorentz 变换可以构造为 $u\to u\alpha$，$v\to v/\alpha$.

飞船 $x^\alpha = (u(\tau),v(\tau))$，且满足速度条件 $g\_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta=-1$，因此 $\dot{u}\dot{v}=1$，$\ddot{u}\ddot{v}=-a^2$.
$$
\Longrightarrow \dot{u}=\frac{1}{\dot{v}}\Longrightarrow\ddot{u} = -\frac{\ddot{v}}{\dot{v}^2}\Longrightarrow-\left(\frac{\ddot{v}}{\dot{v}}\right)^2 = -a^2
$$
解得，
$$
v(\tau) = \frac{A}{a}e^{a\tau}+B,\quad u(\tau) = -\frac{1}{Aa}e^{-a\tau}+C
$$
合理选择 initial condition 可以做到 $B=C=0$；另外，刚刚我们构造的 Lorentz 变换刚好可以把 $A$ 给消掉，最后就是
$$
v(\tau) = \frac{e^{a\tau}}{a},\quad u(\tau) = -\frac{e^{-a\tau}}{a}
$$
换回 $(x,t)$，有
$$
t(\tau) = \frac{\sinh(a\tau)}{a},\quad x(\tau) = \frac{\cosh(a\tau)}{a}\Longrightarrow x^2-t^2 = \frac{1}{a^2}
$$
就是一个双曲线. 双曲线的两个渐近线就定义了一个视界，加速运动的物体只能看到宇宙的某一个部分.

下一步我们需要到 comoving coordinate $(\xi^0,\xi^1)$，这里的度规是 $g\_{\mu\nu}$，有三个自由度，因为是实对称矩阵. 但是可以通过坐标变换去掉其中的两个自由度，总可以把 $g\_{\mu\nu}$ (or to say, $\text{d}s^2$) 写成
$$
\text{d}s^2 = -\Omega^2(\xi^0,\xi^1)\left\[(\text{d}\xi^0)^2-(\text{d}\xi^1)^2\right]
$$
这被称为 conformally flat coordinate. 这个系中驾驶员的轨迹是 $\xi^1(\tau)=0,\xi^0(\tau)=\tau$. 同样可以用光锥坐标系，
$$
\tilde v=\tau,\quad \tilde u=\tau
$$
需要找一个坐标变换联系之前的坐标和共动坐标，也就是联系
$$
\text{d}s^2=-\text{d}u\text{d}v \quad\text{and}\quad \text{d}s^2=-\Omega^2(\tilde u,\tilde v)\text{d}\tilde u\text{d}\tilde v
$$
直接待定系数硬解，
$$
-\left(\frac{\partial u}{\partial\tilde u}\text{d}\tilde u+\frac{\partial u}{\partial\tilde v}\text{d}\tilde v\right)\left(\frac{\partial v}{\partial\tilde u}\text{d}\tilde u+\frac{\partial v}{\partial\tilde v}\text{d}\tilde v\right) = -\Omega^2(\tilde u,\tilde v)\text{d}\tilde u\text{d}\tilde v
$$
也就是，
$$
\frac{\partial u}{\partial\tilde u}\frac{\partial v}{\partial\tilde u} = 0,\quad \frac{\partial u}{\partial\tilde v}\frac{\partial v}{\partial\tilde v}=0
$$
这和复变函数中「(反) 全纯变换」的定义非常相似，文字上的表达就是：这两个坐标之间的变换必须是全纯或反全纯的.
$$
\frac{\text{d}u}{\text{d}\tau} = \frac{\text{d}u}{\text{d}\tilde u}\frac{\text{d}\tilde u}{\text{d}\tau} = \frac{\text{d}u}{\text{d}\tilde u} = e^{-a\tau} = -au\Longrightarrow u = C\_1e^{-a\tilde u}
$$
同理可知 $v=C\_2e^{a\tilde v}$，于是
$$
\Omega^2(\tilde u=\tau,\tilde v=\tau) = \frac{\partial u}{\partial\tilde u}\frac{\partial v}{\partial\tilde v} = 1\Longrightarrow a^2C\_1C\_2 = -1
$$
可以利用坐标变换选择 $C\_1,C\_2$，取 $C\_1 = -C\_2$，解得
$$
u = -\frac{e^{-a\tilde u}}{a},\quad v = \frac{e^{a\tilde v}}{a},\quad \text{d}s^2 =-\text{d}u\text{d}v = -e^{a(\tilde v-\tilde u)}\text{d}\tilde u\text{d}\tilde v
$$
共动坐标的线元是 $\text{d}s^2 = -e^{2a\xi^1}\[(\text{d}\xi^0)^2-(\text{d}\xi^1)^2]$. 这个坐标有一块区域看不见，但是换回原先的坐标，
$$
e^{2a\xi^1} = 2ax-1
$$
RHS 可以小于零，这种时候驾驶员是看不见的. 这就导致全局的 Killing vector $\delta^\mu{}\_{\hat{t}}$ 在时空的某些区域是类时的、某些区域类空. 这使得我们有条件引入一个能量 (因为 Killing vector 在某些区域类时)，也有条件产生某种辐射 (Killing vector 在某些区域类空).

***

回到 Hawking radiation. 作用量为
$$
S\[x] = \frac{1}{2}\int\sqrt{g}\cdot\text{d}^2x(-g^{\mu\nu}\partial\_\mu\phi\partial\_\nu\phi)
$$
对于 $g\_{\mu\nu}$ 做伸缩变换，如果 $g^{\mu\nu}\to\Omega g^{\mu\nu}$，那么 $g\_{\mu\nu}\to\Omega^{-1}g\_{\mu\nu}$，
$$
\sqrt{g} = |g\_{00}g\_{11}-g\_{01}^2|^{1/2} \to \Omega\sqrt{g}
$$
也就是对度规的伸缩变换不改变作用量，这仅仅是 $1+1$ 维时空的特性. 共动坐标和原始坐标的作用量分别为
$$
\int\text{d}\xi^0\text{d}\xi^1\cdot\frac{1}{2}\left\[\left(\frac{\partial\phi}{\partial\xi^0}\right)^2-\left(\frac{\partial\phi}{\partial\xi^1}\right)^2\right],\quad \int\text{d}x\text{d}t\cdot\frac{1}{2}\left\[\left(\frac{\partial\phi}{\partial t}\right)^2-\left(\frac{\partial\phi}{\partial x}\right)^2\right]
$$
场的 Fourier 变换是
$$
\begin{aligned}
\hat{\phi} &= \int\_{-\infty}^\infty\frac{\text{d}k}{\sqrt{2\pi}\sqrt{2|k|}}\left\[e^{-\text{i}|k|t+\text{i}kx}a\_k+e^{\text{i}|k|t-\text{i}kx}a\_k^\dagger\right]\\\\
&= \int\_0^{\infty}\frac{\text{d}k}{\sqrt{2\pi}\sqrt{2k}}\left\[\left(e^{-\text{i}l(t-x)}a\_k+e^{\text{i}k(t-x)a\_k^\dagger}\right)+\left(e^{-\text{i}k(t+x)}a\_{-k}+e^{\text{i}k(t+x)}a\_{-k}^\dagger\right)\right]
\end{aligned}
$$
这种量子化是一个左行波和一个右行波的结合. 我们知道对两个坐标，作用量是不变的，因此量子化的方式也不变. 为方便计算，先换成 $(u,v)$，得到
$$
\hat{\phi}(u,v) = \int\_0^\infty\frac{\text{d}k}{\sqrt{2\pi}\sqrt{2\omega}}\left\[\left(e^{-\text{i}ku}a\_k^R+e^{\text{i}ku}a\_k^{R\dagger}\right)+\left(e^{-\text{i}kv}a\_k^L+e^{\text{i}kv}a\_k^{L\dagger}\right) \right]
$$
这里，$R, L$ 表示左行和右行，有对易关系
$$
\[a\_k^R,a\_{k'}^{R\dagger}] = \delta(k-k'),\quad \[a\_k^L,a\_{k'}^{L\dagger}] = \delta(k-k')
$$
到 comoving coordinate 里，
$$
\hat{\phi}(\tilde u,\tilde v) = \int\frac{\text{d}\Omega}{\sqrt{2\pi}\sqrt{2\Omega}}\left\[\left(e^{-\text{i}\Omega\tilde u}b\_\Omega^R+e^{\text{i}\Omega\tilde u}b\_\Omega^{R\dagger}\right)+\left(e^{-\text{i}\Omega\tilde v}b\_\Omega^L+e^{\text{i}\Omega\tilde v}b\_\Omega^{L\dagger}\right)\right]
$$
我们知道宇宙中的真空是 $|0\rangle\_M$ 态，是 $a$ 的本征态 (而不是 $b$). 但是对于驾驶员来说，它只能通过 $b$ 作为自己的产生湮灭算符 —— 不过它们的场实际上是一致的，$\phi(u,v)=\tilde\phi(\tilde u,\tilde v)$.

> 下面只看右行部分，因为左右行并不 talk，所以可以只考虑一边.

$$
\begin{aligned}
\phi\_R &= \int\_0^\infty\frac{\text{d}\Omega}{\sqrt{2\pi}\sqrt{2\Omega}}\left(e^{-\text{i}\Omega\tilde u}b\_\Omega^R+e^{\text{i}\Omega\tilde u}b\_\Omega^{R\dagger}\right)\\\\
&= \int\_0^\infty\frac{\text{d}\omega}{\sqrt{2\pi}\sqrt{2\omega}}\left(e^{-\text{i}\omega u}a\_\omega^R+e^{\text{i}\omega u}a\_\omega^{R\dagger}\right)
\end{aligned}
$$

逆变换一次算得
$$
b\_\Omega^R = \int\frac{\text{d}\tilde u}{\sqrt{2\pi}}\sqrt{2\Omega}\cdot e^{\text{i}\Omega\tilde u}\phi\_R(\tilde u)
$$
代入 $a$ 表示的量子化场，
$$
b\_\Omega^R =\int\_{-\infty}^\infty\frac{\text{d}\tilde u}{\sqrt{2\pi}}\sqrt{2\Omega}\cdot e^{\text{i}\Omega\tilde u}\int\_0^\infty\frac{\text{d}\omega}{\sqrt{2\pi}\sqrt{2\omega}}\left\[e^{-\text{i}\omega u(\tilde u)}a\_\omega^R+e^{\text{i}\omega u(\tilde u)}a\_\omega^{R\dagger}\right]
$$
Generally，可以写成
$$
b\_\Omega = \int\_0^\infty\text{d}\omega\left(\alpha\_{\Omega\omega}a\_\omega-\beta\_{\Omega\omega}a\_\omega^\dagger\right)
$$

> 其中，
> $$
> \begin{aligned}
> &\alpha\_{\Omega\omega} = \frac{1}{2\pi a}\sqrt{\frac{\Omega}{\omega}}e^{\pi\Omega/2a}\exp\left(\frac{\text{i}\Omega}{a}\ln\frac{\omega}{a}\right)\Gamma\left(-\frac{\text{i}\Omega}{a}\right)\\\\
> &\beta\_{\Omega\omega} = -\frac{1}{2\pi a}\sqrt{\frac{\Omega}{\omega}}e^{-\pi\Omega/2a}\exp\left(\frac{\text{i}\Omega}{a}\ln\frac{\omega}{a}\right)\Gamma\left(-\frac{\text{i}\Omega}{a}\right)
> \end{aligned}
> $$
> 这里的 $a$ 是之前说的那个加速度.

我们知道对易关系：
$$
\[a\_\omega,a\_{\omega'}^\dagger] = \delta(\omega-\omega'),\quad \[b\_\Omega,b\_{\Omega'}^\dagger] = \delta(\Omega-\Omega')
$$
驾驶员观测到的粒子数，要用自己的粒子数算符 $b\_\Omega^\dagger b\_\Omega$ 作用于真空的本征态，也就是
$$
*M\langle0|b*\Omega^\dagger b\_\Omega|0\rangle\_M = \int\text{d}\omega|\beta\_\omega\Omega|^2 = \frac{1}{e^{2\pi\Omega/a}-1}\delta(0)
$$
这个无穷来源于全空间积分，$2\pi\delta(0)=V$. 可见，驾驶员参考系，也就是匀加速参考系的观测者看到的真空，存在大量的粒子分布 —— 如果按照 Bose - Einstein 分布来计算，这等价于温度为
$$
T\_{\text{Unruh}} = \frac{a}{2\pi}
$$
的系统.
