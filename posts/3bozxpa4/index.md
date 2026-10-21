---
url: /posts/3bozxpa4/index.md
---
这是我暑假给新高一的学弟学妹们上课的一些讲义，放在这里作为记录.

## 第五章 质心 刚体

### 5.1 质心

力的非线性疑难

刚体的运动，6 个自由度

质心的定义：

$$
\bold{r}\_C=\frac{\sum\_i m\_ir\_i}{m},,\quad m=\sum\_i m\_i
$$

质心运动定理：

$$
\begin{aligned}
\bold{v}\_C&=\frac{d\bold{r}\_C}{dt}=\frac{\sum\_i m\_i\bold{v}\_i}{m}\\\\
\bold{F}&=\frac{d\bold{p}}{dt}=m\bold{a}\_C
\end{aligned}
$$

**例 1** 部分和整体相似，设方程求解.

**例 2** 略.

**例 3** 刚体碰撞问题的三个方程

$$
\begin{aligned}
\bold{p}\_0&=\bold{p}\_C+\bold{p}'\\\\
p\_0d&=p'd+I\_C\omega\\\\
e\bold{v\_0}&=\bold{v}\_C-\bold{v}'
\end{aligned}
$$

**例 4** 略.

**例 5** 非惯性系中质心的受力等价于质点的受力.

**例 6** 同上.

**例 7** 略.

**例 8** 注意，简谐运动相差$\pi/2$合成得到椭圆.

### 5.2 刚体定轴转动

转动惯量的引入：

$$
\begin{aligned}
E\_k=\sum\_i\frac{1}{2}m\_iv\_i^2&=\sum\_i\frac{1}{2}m\_i(\omega R\_i)^2\\\\
&=\sum\_i\frac{1}{2}m\_iR\_i^2\cdot\omega^2\\\\
&=\frac{1}{2}I\omega^2
\end{aligned}
$$

$$
\begin{aligned}
\bold{L}&=\sum\_i\bold{r}\_i\times(m\_i\bold{v}\_i)\\\\
L\_z&=I\omega
\end{aligned}
$$

转动惯量的计算：

平行轴定理：$I\_{MN}=I\_C+md^2$

垂直轴定理：$I\_x+I\_y=I\_z$

正交轴定理：

$$
\begin{aligned}
I\_x+I\_y+I\_z&=2\sum\_im\_i(x\_i^2+y\_i^2+z\_i^2)=2\sum\_im\_ir\_i^2\\\\
&=I\_x'+I\_y'+I\_z'
\end{aligned}
$$

**例 9** 略.

**例 10** 量纲法.

**例 11** 略.

$M=I\beta$.

**例 16** 刚性模型的疑难.

### 5.3 刚体平面平行运动

瞬心：某一时刻，刚体上速度为零的点.

**例 17** *重点理解两个圆互相纯滚时的速度关联. 放一个图在这里.*

::: window
![图1](https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocyoefbi4kfy4DIYxAIFxDda1DGxPDwUzAa==.png)
:::

*注意：$\Delta\phi=\Delta\theta+\Delta\phi\_0$.*

**例 24**

$$
\begin{aligned}
&\bold{M}\_{\text{out},M}+\sum\_i\bold{r}\_i\times m\_i(-\bold{a}*M)=I\_M\vec{\beta}\\\\
&\Longrightarrow\bold{M}*{\text{out},M}-\bold{r}\_C\times\bold{a}\_Mm=I\_M\vec{\beta}\\\\
&\bold{a}\_M=\omega^2(-\bold{r}\_C)+\vec{\beta}\times(-\bold{r}\_C)+\frac{d\bold{v}\_C}{dt}\\\\
&\bold{v}\_M=\vec{\omega}\times(-\bold{r}\_C)+\bold{v}\_C=0\\\\
&\bold{v}\_C=\vec{\omega}\times\bold{r}\_C\\\\
&\frac{d\bold{v}\_C}{dt}=\frac{d\vec{\omega}}{dt}\times\bold{r}\_C+\vec{\omega}\times\frac{d\bold{r}\_C}{dt}\\\\
&=\vec{\beta}\times\bold{r}\_C+\vec{\omega}\times\frac{d\bold{r}\_C}{dt}\\\\
&\bold{a}\_M=-\omega^2\bold{r}\_C+\vec{\omega}\times\frac{d\bold{r}\_C}{dt}\\\\
\&m(\bold{r}\_C\times\bold{a}*M)=\frac{1}{2}\frac{dI\_M}{dt}\vec{\omega}\\\\
&\Longrightarrow M*{\text{out},M}=I\_M\beta+\frac{1}{2}\omega\frac{dI\_M}{dt}
\end{aligned}
$$

## 第七章 振动和波

### 7.1 简谐振动的运动学描述

$$
\begin{aligned}
x&=A\cos(\omega t+\phi)\\\\
v\_x&=-\omega A\sin(\omega t+\phi)\\\\
a\_x&=-\omega^2A\cos(\omega t +\phi)
\end{aligned}
$$

Euler 公式：$e^{i\theta}=\cos\theta+i\sin\theta$

Taylor 展开：

$$
\begin{aligned}
f(x)&=\frac{1}{0!}f(x\_0)+\frac{1}{1!}f'(x\_0)(x-x\_0)+\frac{1}{2!}f''(x\_0)(x-x\_0)^2+\cdots\\\\
&=\sum\_{m=0}^{\infty}\frac{1}{m!}[f^{(m)}(x\_0)](x-x_0)^m
\end{aligned}
$$

复数表述：$\widetilde{A}=Ae^{i(\omega t +\phi)}$

注意：一定不能做乘除法运算！$y$方向的运动是虚拟的，只可以做线性运算.

**例 2** 旋转坐标轴

$$
\left\lgroup\begin{array}{}
x'\ y'
\end{array}\right\rgroup=
\left\lgroup\begin{array}{}
\cos\theta&\sin\theta\\-\sin\theta&\cos\theta
\end{array}\right\rgroup
\left\lgroup\begin{array}{}
x\ y
\end{array}\right\rgroup
$$

### 7.2 简谐振动的动力学性质

$\ddot{x}=-\omega^2x$

猜解：

$$
\begin{aligned}
1.x&=A\cos(\omega t)+B\sin(\omega t)\\\\
2.x&=A\cos(\omega t+\phi)\\\\
3.x&=Ae^{i(\omega t+\phi)}
\end{aligned}
$$

振动能量：不能用复数表示，硬要用就是用复共轭.

总能量正比于振幅的平方.

能量导出动力学方程：

$$
\begin{aligned}
\&E=\frac{1}{2}m\dot{x}^2+\frac{1}{2}\alpha x^2+V\_0+\beta x\\\\
&=\frac{1}{2}m\dot{x}^2+\frac{1}{2}\alpha(x+\cdots)^2\\\\
&\Longrightarrow 0=m\dot{x}\ddot{x}+\alpha(x+\cdots)\dot{x}\\\\
&\Longrightarrow 0=m\ddot{x}+\alpha(x+\cdots)\\\\
\&ma=-\alpha x+\cdots
\end{aligned}
$$

### 7.3 保守系的振动

广义坐标$\xi$，（xi），大写$\Xi$.

$F\_\xi=-\frac{dE\_p}{d\xi}$，

平衡稳定性：稳定、不稳定、随遇.

$$
T=2\int\_{-A\_\text{left}}^{A\_\text{right}}\frac{d\xi}{\sqrt{2\[E-E\_p(\xi)]/\alpha}}
$$

Binet 方程：

$$
\begin{aligned}
\&m(\ddot{r}-r\dot{\theta}^2)=F(r)\\\\
\&m(2\dot{r}\dot{\theta}+r\ddot{\theta})=0\\\\
&\Longrightarrow 2r\dot{r}\dot{\theta}+r^2\ddot{\theta}=0\\\\
&\Longrightarrow\frac{d(r^2\dot{\theta})}{dt}=0\\\\
&\Longrightarrow r^2\dot{\theta}=\frac{L}{m}\\\\
&\dot{\theta}^2=(\frac{L}{mr^2})^2=\frac{L^2}{m^2r^4}\\\\
&\dot{r}=\frac{dr}{dt}=\frac{dr}{d\theta}\frac{d\theta}{dt}=\dot{\theta}\frac{dr}{d\theta}=\frac{L}{mr^2}\frac{dr}{d\theta}\\\\
&\ddot{r}=\frac{d\dot{r}}{dt}=\frac{d}{dt}(\frac{L}{mr^2}\frac{dr}{d\theta})=-\frac{2L}{mr^3}\dot{r}\frac{dr}{d\theta}+\frac{L}{mr^2}\frac{d^2r}{d\theta^2}\dot{\theta}\\\\
&=-\frac{2L^2}{m^2r^5}(\frac{dr}{d\theta})^2+\frac{L^2}{m^2r^4}\frac{d^2r}{d\theta^2}
\end{aligned}
$$

$$
-\frac{2L^2}{mr^5}(\frac{dr}{d\theta})^2+\frac{L^2}{mr^4}\frac{d^2r}{d\theta^2}-\frac{L^2}{mr^3}=F(r)
$$

引入$u=1/r$，

$$
\begin{aligned}
&\frac{dr}{d\theta}=\frac{d}{d\theta}(\frac{1}{u})=-\frac{1}{u^2}\frac{du}{d\theta}\\\\
&\frac{d^2r}{d\theta^2}=\frac{d}{d\theta}(\frac{dr}{d\theta})=\frac{d}{d\theta}(-\frac{1}{u^2}\frac{du}{d\theta})=\frac{2}{u^3}(\frac{du}{d\theta})^2-\frac{1}{u^2}\frac{d^2u}{d\theta^2}
\end{aligned}
$$

$$
\begin{aligned}
&-\frac{2L^2u}{m}(\frac{du}{d\theta})^2+\frac{2L^2u}{m}(\frac{du}{d\theta})^2-\frac{L^2u^2}{m}\frac{d^2u}{d\theta^2}-\frac{L^2u^3}{m}=F(\frac{1}{u})\\\\
&\frac{L^2u^2}{m}(\frac{d^2u}{d\theta^2}+u)=-F(\frac{1}{u})
\end{aligned}
$$

推导天体运动的轨迹方程：

$$
\begin{aligned}
&\frac{L^2u^2}{m}(\frac{d^2u}{d\theta^2}+u)=-(-GMmu^2)\\\\
&\frac{L^2}{m}(\frac{d^2u}{d\theta^2}+u)=GMm\\\\
\&u=A\cos\theta+B\sin\theta+C\\\\
&\text{special solution: }u=\frac{GMm^2}{L^2}\\\\
\&u=A\cos\theta+B\sin\theta+\frac{GMm^2}{L^2}\\\\
\&r=\frac{1}{A\cos\theta+\frac{GMm^2}{L^2}}\\\\
\&r=\frac{\frac{L^2}{GMm^2}}{1+\sqrt{1+\frac{2EL^2}{G^2M^2m^3}}\cos\theta}
\end{aligned}
$$

耦合摆：两个自由度，广义坐标取$\theta\_1$，$\theta\_2$.

动力学方程：

$$
\begin{aligned}
&\ddot{\theta\_1}=-(\frac{g}{l}+\frac{k}{m})\theta\_1+\frac{k}{m}\theta\_2\\\\
&\ddot{\theta\_2}=+\frac{k}{m}\theta\_1-(\frac{g}{l}+\frac{k}{m})\theta\_2
\end{aligned}
$$

求简正模的第一个方法：配凑简正模.

$$
\begin{aligned}
&(-\omega^2+\frac{g}{l}+\frac{k}{m})A-\frac{k}{m}B=0\\\\
&-\frac{k}{m}A+(-\omega^2+\frac{g}{l}+\frac{k}{m})B=0\\\\
&\Longrightarrow\left\lvert\begin{array}{}-\omega^2+\frac{g}{l}+\frac{k}{m}&-\frac{k}{m}\\-\frac{k}{m}&-\omega^2+\frac{g}{l}+\frac{k}{m}\end{array}\right\rvert=0
\end{aligned}
$$

算出来答案是一样的.

### 7.4 阻尼振动 受迫振动 自激振动

阻尼振动：

$$
\ddot{x}+2\beta\dot{x}+\omega^2\_0x=0
$$

猜解：$x=Ae^{rt}$.

代入方程，约去公因子得到：$r^2+2\beta r+\omega^2\_0=0$.

解得：$r=-\beta\pm\sqrt{\beta^2-\omega^2\_0}$，我们开始分类讨论：

1.过阻尼，$\beta>\omega\_0$，$r<0$，

$x=A\_1e^{(-\beta+\sqrt{\beta^2-\omega^2\_0})t}+A\_2e^{(-\beta-\sqrt{\beta^2-\omega^2\_0})t}$，一定是衰减的.

2.临界阻尼，$\beta=\omega\_0$，$r=-\beta$，

$x=A\_1e^{-\beta t}+A\_2te^{-\beta t}$，最快回到平衡位置.

3.低阻尼，$\beta<\omega\_0$，引入$\omega=\sqrt{\omega^2\_0-\beta^2}$，

$r\_{1,2}=-\beta\pm i\omega$

$x=Ae^{-\beta t}\cos(\omega t+\phi)$.

品质因数$Q=2\pi E/\Delta E$，另一个计算公式$Q=\omega\_0/2\beta$，其中$\beta\ll\omega\_0$.

受迫振动：

$$
\ddot{x}+2\beta\dot{x}+\omega\_0^2x=f\_0\cos\omega t
$$

$x=A\_1e^{-\beta t}\cos(\sqrt{\omega\_0^2-\beta^2}t+\phi\_1)+A\_2\cos(\omega t+\phi\_2)$.

稳态解与暂态解的区别.

$$
A\_2=\frac{f\_0}{\sqrt{(\omega^2\_0-\omega^2)^2+4\beta^2\omega^2}},,\quad\tan\phi\_2=-\frac{2\beta}{\omega^2\_0-\omega^2}
$$

共振位置$\omega\_r=\sqrt{\omega^2\_0-2\beta^2}$，共振峰宽度两个振幅为最大振幅的$\sqrt{2}/2$处所对应的$\omega$之间的$\Delta\omega$.

梁昆淼《理论力学》，周衍柏《理论力学教程》，刘川《理论力学》

自激振动：

恒力作用.

### 7.5 波的运动学描述

题外话：赵凯华《定性与半定量物理学》

$\xi(x,t)=A\cos(\omega t-\vec{k}\cdot\vec{r}+\phi\_0)$

没有能量损耗时，平面波振幅恒定不变，球面波振幅随$r$反比，柱面波振幅随$\sqrt{r}$反比.

干涉：两列同频率波相遇在同一点，对同一点的振动产生叠加作用.

$$
\begin{aligned}
&\xi\_1=A\_1\cos(\omega t-\frac{2\pi}{\lambda}r\_1+\phi\_1)\\\\
&\xi\_2=A\_2\cos(\omega t-\frac{2\pi}{\lambda}r\_2+\phi\_2)\\\\
&\xi\_P=\xi\_1+\xi\_2=A\_p\cos(\omega t+\phi)\\\\
\&A\_P=\sqrt{A\_1^2+A\_2^2+2A\_1A\_2\cos\Delta\phi\_P}\\\\
&\Delta\phi\_P=\phi\_1-\phi\_2+\frac{2\pi}{\lambda}(r\_2-r\_1)
\end{aligned}
$$

分析：$\Delta\phi\_P=2k\pi$时干涉相长，$\Delta\phi\_P=(2k+1)\pi$时干涉相消.

LASER: Light Amplification by Stimulated Emission of Radiation

通过辐射的受激发射而产生的光放大

驻波：“停在一个地方不动的波”

$\xi=2A\cos(\frac{2\pi}{\lambda})x'\cdot\cos\omega t'$

$\xi$ $\varepsilon$ $\epsilon$

半波损：被固定住的地方是波节，反射波产生$\pi$的相位差.

惠更斯原理：波阵面上的每一个点，都可以作为一个新的波源.

推导折射定律、反射定律.

Doppler Effect：（**例 28**）

$$
\nu=\frac{u-v\_B\cos\phi\_B}{u-v\_S\cos\phi\_S}\nu\_0
$$

### 7.6 一维线性波动方程

形式：

$$
\frac{\partial^2\xi}{\partial t^2}-u^2\frac{\partial^2\xi}{\partial x^2}=0
$$

1.弹性介质中的纵波和横波

杨氏模量（Thomas Young）：$E=\frac{F/S}{d\xi/dx}$.

$F=ES\frac{d\xi}{dx}$，$F=ES\frac{\Delta x}{L}$，这就是 Hooke 定律，其中劲度系数$k=ES/L$.

切变模量：$G=\frac{T/S}{dz/dx}$.

类比杨氏模量，也可以写出切向的应力.

推导弹性介质中的波动方程：

$k\_{dx}=ES/dx$，为第$n$个“小球”建立动力学方程，得到

$$
\begin{aligned}
&(dm)\frac{d^2\xi\_n}{dt^2}=k\_{dx}(\xi\_{n+1}-\xi\_n)-k\_{dx}(\xi\_n-\xi\_{n-1})\\\\
&\frac{\partial^2\xi}{\partial t^2}=\frac{k\_{dx}}{dm}\[(\xi(x+dx,t)-\xi(x,t))-(\xi(x,t)-\xi(x-dx,t))]\\\\
&\frac{\partial^2\xi}{\partial t^2}=\frac{k\_{dx}}{dm}(\frac{\partial \xi}{\partial x}|*xdx-\frac{\partial\xi}{\partial x}|*{x-dx}dx)\\\\
&\frac{\partial^2\xi}{\partial t^2}=\frac{k\_{dx}}{dm}\frac{\partial^2\xi}{\partial x^2}(dx)^2\\\\
&\frac{\partial^2\xi}{\partial t^2}=\frac{E}{\rho}\frac{\partial^2\xi}{\partial x^2}
\end{aligned}
$$

波速$u\_\parallel=\sqrt{E/\rho}$.

横波可以类比，波速为$u\_\perp=\sqrt{G/\rho}$.

2.弦上的横波

线密度为$\lambda$，张力$T$.

$$
\begin{aligned}
(\lambda dx)\frac{\partial^2\xi}{\partial t^2}&=T\sin(\theta+d\theta)-T\sin\theta\\\\
&=T\[\tan(\theta+d\theta)-\tan\theta]\\\\
&=T(\frac{\partial\xi}{\partial x}|\_{x+dx}-\frac{\partial\xi}{\partial x}|\_x)=T\frac{\partial^2\xi}{\partial x^2}dx\\\\
\Longrightarrow\quad&\frac{\partial^2\xi}{\partial t^2}=\frac{T}{\lambda}\frac{\partial^2\xi}{\partial x^2}
\end{aligned}
$$

波速$u=\sqrt{T/\lambda}$.

3.空气中的声波

等效杨氏模量：$E^\*=\gamma p\_0$.

4.水面波

鸟人的水波题

群速和相速的公式：

群速$v\_g=\frac{d\omega}{dk}|\_{k\_0}$，相速$v\_p=\frac{\omega}{k}$.

波的反射和透射：

界面两侧，原函数相等，一阶导函数相等.

### 7.8 真空中的电磁波

$$
\begin{aligned}
&\frac{\partial^2\xi}{\partial t^2}-u^2(\frac{\partial^2\xi}{\partial x^2}+\frac{\partial^2\xi}{\partial y^2}+\frac{\partial^2\xi}{\partial z^2})=0\\\\
&\frac{\partial^2\xi}{\partial t^2}=u^2\nabla^2\xi
\end{aligned}
$$

$$
\begin{aligned}
&\nabla\cdot\bold{E}=0\\\\
&\nabla\cdot\bold{B}=0\\\\
&\nabla\times\bold{E}=-\frac{\partial\bold{B}}{\partial t}\\\\
&\nabla\times\bold{B}=\varepsilon\_0\mu\_0\frac{\partial\bold{E}}{\partial t}
\end{aligned}
$$

$$
\begin{aligned}
&\nabla\times(\nabla\times\bold{B})=\varepsilon\_0\mu\_0\frac{\partial}{\partial t}(\nabla\times\bold{E})\\\\
&\nabla(\nabla\cdot\bold{B})-\nabla^2\bold{B}=-\varepsilon\_0\mu\_0\frac{\partial^2\bold{B}}{\partial t^2}\\\\
&\nabla^2\bold{B}=\varepsilon\_0\mu\_0\frac{\partial^2\bold{B}}{\partial t^2}
\end{aligned}
$$

所以，光速$c=\frac{1}{\sqrt{\varepsilon\_0\mu\_0}}$.

## 数学知识

### 微分方程

比较简单的，可以直接分离变量积分.

一些常用的积分方法：

1.换元积分法：

**例 1**

$$
\int\frac{d\beta}{(1-\beta)^2\sqrt{1-\beta^2}}=?
$$

必须背下来反三角函数的积分. 先处理分母的前半部分，

$$
\int\frac{1}{\sqrt{1-\beta^2}}d(\frac{1}{1-\beta})
$$

换元，$x=1/(1-\beta)$，$\beta=1-1/x$，

$$
\begin{aligned}
&\int\frac{1}{\sqrt{1-(1-\frac{1}{x})^2}}dx=\int\frac{x}{\sqrt{2x-1}}dx\\\\
&=\frac{1}{2}\int\frac{(2x-1)+1}{\sqrt{2x-1}}dx\\\\
&=\frac{1}{2}\int\sqrt{2x-1}dx+\frac{1}{2}\int\frac{1}{\sqrt{2x-1}}dx\\\\
&=\frac{1}{6}(2x-1)^{3/2}+\frac{1}{2}(2x-1)^{1/2}+C
\end{aligned}
$$

**例 2**

$$
\int\frac{d\theta}{\lambda+\cos^2\theta}=?
$$

三角函数变形：

$$
\begin{aligned}
&\cos^2\theta=\frac{1}{1+\tan^2\theta}\\\\
&1+\tan^2\theta=(\tan\theta)'
\end{aligned}
$$

所以原积分化为

$$
\int\frac{d(\tan\theta)}{\lambda\tan^2\theta+(\lambda+1)}
$$

换元$x=\tan\theta$，

$$
\begin{aligned}
&\int\frac{dx}{\lambda x^2+(\lambda+1)}\\\\
&=\frac{1}{\lambda+1}\int\frac{dx}{1+\frac{\lambda x^2}{\lambda+1}}\\\\
&=\frac{1}{\sqrt{\lambda(\lambda+1)}}\int\frac{d(\sqrt{\frac{\lambda}{\lambda+1}}x)}{1+(\sqrt{\frac{\lambda}{\lambda+1}}x)^2}\\\\
&=\frac{1}{\sqrt{\lambda(\lambda+1)}}\arctan(\sqrt{\frac{\lambda}{\lambda+1}}x)+C\\\\
&=\frac{1}{\sqrt{\lambda(\lambda+1)}}\arctan(\sqrt{\frac{\lambda}{\lambda+1}}\tan\theta)+C
\end{aligned}
$$

2.分部积分法：

原理 $d(uv)=udv+vdu\Rightarrow udv=d(uv)-vdu$

**例 3**

$$
\int\_0^\infty\frac{\ln x}{(1+x)^2}dx=?
$$

直接分部，

$$
\begin{aligned}
&\int\_0^\infty\ln x,d(-\frac{1}{1+x})\\\\
&=-\frac{\ln x}{1+x}|^\infty\_0+\int\_0^\infty\frac{1}{x+1}d(\ln x)\\\\
&=-\frac{\ln x}{1+x}+\int\frac{1}{x(x+1)}dx\\\\
&=-\frac{\ln x}{1+x}+\int\frac{1}{x}dx-\int\frac{1}{1+x}dx\\\\
&=-\frac{\ln x}{1+x}+\ln x-\ln(1+x)=0
\end{aligned}
$$

齐次方程，满足

$$
\frac{dy}{dx}=\varphi(\frac{y}{x})
$$

解法：引入新的函数$u=y/x$，就可以化为可分离变量的方程.

一阶线性微分方程：

$$
\frac{dy}{dx}+P(x)y=Q(x)
$$

通解公式

$$
y=e^{-\int P(x)dx}\[C+\int e^{\int P(x)dx}Q(x)dx]
$$

悬链线问题：

$$
\frac{d^2y}{dx^2}=\frac{1}{a}\sqrt{1+(\frac{dy}{dx})^2}
$$

设$p=dy/dx$，就化为可以分离变量的方程.

Euler 方程：

$$
x^ny^{(n)}+p\_1x^{n-1}y^{(n-1)}+\cdots+p\_{n-1}xy'+p\_ny=f(x)
$$

求导算符$D$，$\frac{dy}{dx}=Dy$，

做换元$x=e^t$，现在的求导算符$D=\frac{d}{dt}$，所以$y$的任一一阶导数可以被记作：

$$
\begin{aligned}
&\frac{dy}{dx}=\frac{dy}{dt}\frac{dt}{dx}=\frac{1}{x}\frac{dy}{dt}=\frac{1}{x}Dy\\\\
&\frac{d^2y}{dx^2}=\frac{d}{dt}(\frac{dy}{dx})\frac{dt}{dx}=\frac{d}{dt}(e^{-t}\frac{dy}{dt})\frac{1}{x}=\frac{1}{x}(-e^{-t}\frac{dy}{dt}+e^{-t}\frac{d^2y}{dt^2})\\\\
&=\frac{1}{x^2}(D-1)Dy\\\\
&\Longrightarrow\frac{d^ny}{dx^n}=\frac{1}{x^n}D(D-1)(D-2)\cdots(D-n+1)y
\end{aligned}
$$

### 偏导数

$$
\begin{aligned}
&(\frac{\partial U}{\partial V})\_T=(\frac{\partial U}{\partial V})\_S+(\frac{\partial U}{\partial S})\_V(\frac{\partial S}{\partial V})\_T\\\\
&=-p+T(\frac{\partial S}{\partial V})\_T\\\\
&=-p+T(\frac{\partial p}{\partial T})\_V
\end{aligned}
$$

$A(x,y)$，固定$y$不变，对$x$求导数，即为偏导数，记作$(\frac{\partial A}{\partial x})\_y$.

现在定义$A(x,y)$，$B(x,y)$，$C(x,y)$，来学习一些偏导数的公式.

$$
dA(x,y)=(\frac{\partial A}{\partial x})\_ydx+(\frac{\partial A}{\partial y})\_xdy
$$

$$
\begin{aligned}
&(\frac{\partial A}{\partial x})\_y(\frac{\partial x}{\partial y})\_A(\frac{\partial y}{\partial A})\_x=-1\\\\
&(\frac{\partial A}{\partial x})\_B=(\frac{\partial A}{\partial x})\_y+(\frac{\partial A}{\partial y})\_x(\frac{\partial y}{\partial x})\_B
\end{aligned}
$$
