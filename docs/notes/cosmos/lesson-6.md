---
title: Lesson 6 宇宙的演化
permalink: /cosmos/lesson-6/
createTime: 2025/3/24 21:51:43
---

今天我们接着上一节课，讨论一些更一般的情况.

1. For matter，能量密度为 $\rho_M\propto a^{-3}$；
2. For radiation，能量密度为 $\rho_R\propto a^{-4}$；
3. For $\Lambda$ (vacuum energy)，这是最经典的暗能量模型，能量密度为 $\rho_\Lambda\propto a^0$.

剧透一点：我们目前已经知道宇宙大部分是真空能 ($0.7$ 左右)，小部分是物质，辐射非常少. 如果做一个时间反演 (随着 $t$ 减小，$a$ 变小)，那么宇宙的主导成分将会分为三个阶段：
$$
\text{radiation}\longrightarrow\text{matter}\longrightarrow\Lambda
$$
目前的宇宙处在第三个阶段.

我们上节课已经解过 $K=0$ 时的 Friedman 方程：

> radiation - dominated：$a\propto t^{1/2}$
>
> matter - dominated：$a\propto t^{1/3}$
>
> $\Lambda$ - dominated：$a\propto e^{Ht}$，$H=H_0+at$.

## 物质主导的弯曲宇宙

现在考虑 $K\neq0$ 的情形，从物质占主导的状态入手，那么 Friedman 方程写成：
$$
\dot{a}^2+K=\frac{8}{3}\pi G\rho a^2\,,\quad\rho a^3=\rho_0a_0^3\\
\Longrightarrow\dot{a}^2+K=\frac{8}{3}\pi G\frac{\rho_0a_0^3}{a}\\
\Longrightarrow\text{d}t=\frac{\text{d}a}{\sqrt{\frac{8}{3}\pi G\frac{\rho_0a^3_0}{a}-K}}
$$
对于今天的 Hubble 常数，我们有
$$
H_0^2=\left(\frac{\dot{a}_\text{today}}{a_0}\right)^2=\frac{1}{a_0^2}\left(\frac{8}{3}\pi G\rho_0a_0^2-K\right)=\frac{8}{3}\pi G\rho_0-\frac{K}{a_0^2}
$$
所以当前的 Hubble 常数和宇宙曲率、物质能量密度满足下述关系：
$$
H_0^2+\frac{K}{a_0^2}=\frac{8}{3}\pi G\rho_0
$$
则上面的微分方程化为
$$
\int_0^t\text{d}t=\int_0^{a/a_0}\frac{\text{d}x}{H_0}\sqrt{\frac{x}{1+\frac{K}{a_0^2H_0^2}(1-x)}}\,,\quad x=\frac{a}{a_0}
$$
现在我们定义一个这样的量 (现在还不知道其数学意义，也还不知道为什么有一个负号)：
$$
\Omega_K=-\frac{K}{a_0^2H_0^2}
$$
上面的积分可以化成
$$
\frac{1}{H_0}\int_0^{a/a_0}\sqrt{\frac{x}{1-\Omega_K(1-x)}}\text{d}x
$$
仍然是在 matter - dominated 情况下考虑，这时候进行讨论：

If $K=+1$，此时 $\Omega_k<0$，
$$
t=\int_0^{a/a_0}\frac{\text{d}x}{H_0}\sqrt{\frac{x}{1+|\Omega_K|(1-x)}}
$$
时间关系，略去计算过程，但是最终结果是参数方程：
$$
\begin{aligned}
x&=\frac{a}{a_0}=\frac{1}{2}\left(\frac{1+|\Omega_K|}{|\Omega_K|}\right)(1-\cos\alpha)\\\\
t&=\frac{1}{2H_0}\frac{1+|\Omega_K|}{|\Omega_K|^{3/2}}(\alpha-\sin\alpha)
\end{aligned}
$$
这个参数方程在 $\alpha=\pi$ 时取到最大值，$\alpha=0$ or $2\pi$ 时为零，这是一个“脉动”宇宙，会膨胀也会收缩.

> 一个比较形象的类比：能量逐渐增大的抛体运动，一开始会落回地球，当能量到达某一临界值时，物体不会回到地面，更大的能量会使得物体逃逸出地球.
>
> 在这里起决定性作用的是起抛能量，而我们在宇宙学中的类似参数是曲率 $K$.

在实验上通过 $H_0$ 的大小判定 $K$ 的正负：
$$
K=a_0^2\left(\frac{8}{3}\pi G\rho_0-H_0^2\right)
$$
物质密度的临界值是 $\rho_c=\frac{3H_0^2}{8\pi G}\approx1.878\times10^{-29}\text{ h}^2\cdot\text{g}\cdot\text{cm}^{-3}$.

正曲率宇宙 ($K=+1$)，经历一个先膨胀再收缩的过程. 物质密度大于临界密度时会造成正曲率宇宙.

另外，物质密度等于临界密度时，为平直宇宙，会一直膨胀 (但是为了和暗能量主导的宇宙区分，我们要强调这是减速膨胀)；物质密度小于临界密度时为三维超球面宇宙，也是一直膨胀，但是减速膨胀.

在 1998 年以前，我们还不知道暗能量的存在，那时我们经常想要通过测量宇宙现在的几何、现在的密度来预测宇宙的未来. 但是当时我们测量到的物质密度极为接近临界密度，所以那时候人们认为宇宙的未来由我们对物质密度测量精度来决定.

## 一般情况

对于 $K\neq0$ 但是更一般的情况，Friedman 方程应该有
$$
\dot{a}^2+K=\frac{8}{3}\pi G\rho a^2\\
H^2=\frac{\dot{a}^2}{a^2}=\frac{8}{3}\pi G\rho-\frac{K}{a^2}
$$
For today，$H_0^2=\frac{8}{3}\pi G\rho_0-\frac{K}{a_0^2}$. 仍然定义 $\rho_c=\frac{3H_0^2}{8\pi G}$，是今天的平直宇宙要求的宇宙物质密度，则
$$
H^2=H_0^2\left(\frac{\rho}{\rho_c}-\frac{K}{a_0^2H_0^2}\right)
$$
和上面几乎完全一样，但是区别在于我们的密度 $\rho$ 是广义的能量密度，不再只由物质来提供，而是包含了物质、真空能和辐射的成分，这里
$$
\begin{aligned}
\rho(a)&=\rho_M(a)+\rho_R(a)+\rho_\Lambda(a)\\\\
&=\rho_{M,0}\left(\frac{a}{a_0}\right)^{-3}+\rho_{R,0}\left(\frac{a}{a_0}\right)^{-4}+\rho_{\Lambda,0}\\\\
\Longrightarrow\frac{H^2}{H_0^2}&=\frac{\rho_{M,0}}{\rho_c}\left(\frac{a}{a_0}\right)^{-3}+\frac{\rho_{R,0}}{\rho_c}\left(\frac{a}{a_0}\right)^{-4}+\frac{\rho_{\Lambda,0}}{\rho_c}-\frac{K}{a_0^2H_0^2}\left(\frac{a}{a_0}\right)^{-2}
\end{aligned}
$$
形式上，每一项都是 $a$ 的幂次. 如果我们定义几个无量纲的常数 $\Omega_M=\frac{\rho_{M,0}}{\rho_c}$，$\Omega_R=\frac{\rho_{R,0}}{\rho_c}$，$\Omega_\Lambda=\frac{\rho_{\Lambda,0}}{\rho_c}$，我们就知道“**今天的各种能量密度占平直宇宙所要求的能量密度的比例**”.

当然这肯定不是“**今天宇宙各种能量密度的百分比**”，但是由于我们今天测量到的宇宙能量密度非常接近 $\rho_c$，所以我们可以暂时忽略这两个概念之间的差异.

当然如果要使得每一项形式一致，我们还要定义一个无量纲常数来控制曲率项，这就是我们最开始讲到的 $\Omega_K$ (现在知道“负号”是怎么来的了).

> 如果要纠结量纲的问题的话，会发现曲率项少了一个 $c^2$：
> $$
> \Omega_K=-\frac{Kc^2}{a_0^2H_0^2}
> $$
> 计算数值的时候记得加上.

我们之前就讲过 $a_0$ 是不能任意取值的，应该要取共动坐标下坐标单位为 $1$ 的那一种因子，要求在 $K\neq0$ 时 $a_0=R(\text{today})$ (今天的坐标单位与共动坐标单位之比).

虽然 $K$ 是分离的值，但是 $\Omega_K$ 可连续变化，我们能通过一些其他的手段测量其可能范围.

$\Omega_K$ 被叫做“曲率密度”.

现在我们来把 Friedman 方程写成一种更加舒展的形式：
$$
\begin{aligned}
H(t)&=H_0E(t)\\\\
E(a)&=\sqrt{\Omega_M\left(\frac{a}{a_0}\right)^{-3}+\Omega_R\left(\frac{a}{a_0}\right)^{-4}+\Omega_\Lambda+\Omega_K\left(\frac{a}{a_0}\right)^{-2}}\\\\
E(z)&=\sqrt{\Omega_M(1+z)^{-3}+\Omega_R(1+z)^{-4}+\Omega_\Lambda+\Omega_K(1+z)^{-2}}
\end{aligned}
$$
其中 $a_0/a=1+z$，$z$ 为红移. 具体使用什么写法取决于哪一种更加有利.

现在我们发现了一个问题：我们有一个很神奇的恒等式，$\Omega_M+\Omega_R+\Omega_\Lambda+\Omega_K=1$. 这是为什么？是仅仅对当今成立，还是永远成立？

> 这不是一个偶然，因为我们定义 today 的时候我们并未说 today 到底是什么时候；这个等式是由 Friedman 完全确定的，事实上我们可以说，“==广义物质密度和曲率密度和为 $1$==.”
>
> 因此我们也能够测量广义物质密度来限制曲率密度 $|\Omega_K|$.

对于宇宙是平直的理解：即使目前宇宙的曲率密度很大，只要暗能量开始主导宇宙，尺度因子变大，暗能量的影响会越来越大，以指数形式暴涨，同时挤压曲率密度的贡献，把宇宙“拉平”. 因此不管一开始物质主导时期宇宙的曲率是什么样的，一旦暗能量开始 take over，宇宙就会朝着膨胀的方向加速.

对于三种不同的初始状态：

1. $\rho_0<\rho_c$：一直加速；
2. $\rho_0=\rho_c$：先减速膨胀，然后加速；
3. $\rho_0>\rho_c$：先减速后加速膨胀.

问题：如果已经到了收缩阶段，暗能量还能 take over 吗？

> 这时候尺度因子已经开始减小，暗能量如果还没有占主导的话之后也不可能 take over 了.

广义的物质密度决定着宇宙演化的命运.

问题：我们在听科普讲座的时候，常常听到说如果暗能量存在，加速膨胀很长的时间之后，银河系将会变成一个孤独的星系，也就是说我们已经无法看到来自其他星系的光了. 这个论断是可信的吗？

> ::: tip
>
> 因为上课人太少，老师开始使用一种神奇的方式抽人回答问题——在桌面上旋转矿泉水瓶，指到谁就发言.
>
> 实际上这是我们小时候玩真心话大冒险的时候使用的古早方法 (～￣▽￣)～
>
> :::
>
> 同学们的发言大多意思是我们的模型不够完善，没法预测那么长时间的事件.
>
> 其实我们预测的“加速膨胀”，也是基于现在的暗能量模型，虽然宇宙常数这一理论现在看起来还比较正确，但是目前的观测越来越表明暗能量可能是一个场，或者是什么其他的东西，有可能随着时间演化.
>
> 所有的认知都是受限于我们所处的时代的. 希望人类能见证那一天.

回到 Friedman 方程：
$$
t=\int\text{d}t=\int\frac{\text{d}a}{aH_0E(t)}
$$
因此得到 Hubble - Friedman 方程之后，我们能够推算 $t(a)$、$t(z)$ 等. 任何一个时刻，我们所见到的宇宙是光锥 (light cone) 之中的宇宙，不是现在的宇宙，而是每处都是过去某时刻的宇宙. 因此某个地方的宇宙能用距离、时间、红移……等等概念来描述，但是它们都对应着时空的差异.

接下来我们找找这其中的关系.

## 宇宙中的时间和距离

先定义：
$$
a'=\frac{a}{a_0}=\frac{1}{1+z}
$$
则有
$$
\text{d}t=\frac{\text{d}a}{aH}=\frac{\text{d}a'}{a'H(a')}=\frac{\text{d}a'}{H_0a'E(a')}
$$
宇宙年龄：
$$
\begin{aligned}
t_\text{age}&=\frac{1}{H_0}\int_0^\frac{1}{1+z}\frac{\text{d}a'}{a'E(a')}\\
&=\frac{1}{H_0}\int_0^\frac{1}{1+z}\frac{\text{d}a'}{a'\sqrt{\Omega_Ma'^{-3}+\Omega_Ra'^{-4}+\Omega_\Lambda+\Omega_Ka'^{-2}}}
\end{aligned}
$$
这个积分可以数值计算. 同时我们只要知道宇宙的模型 (也就是知道了 $\Omega_M$ 和 $\Omega_\Lambda$) 就能知道积分数值 $t(z)$，因为 $\Omega_R$ 可以方便地通过测量 CMB 得到，而剩下的 $\Omega_K$ 可以通过恒等式获得.

> 题外话：后面积分的时候一般使用红移做变量.

/Example/

> $\Omega_M=1$，剩下的全部都为零，这是物质占主导地位的情况. 这将会导致 $t_0=\frac{2}{3H_0}\approx9.37\text{ G yr}$.
>
> $\Omega_R=1$，辐射为主体，得到 $t_0=\frac{1}{2H_0}\approx6.97\text{ G yr}$.
>
> 完全空虚的宇宙，只有 $\Omega_K=1$，这时候 $t_0=\frac{1}{H_0}\approx13.98\text{ G yr}$.
>
> 我们现在使用的是 $\Lambda\text{CDM}$ 模型，如果取 $\Omega_M\approx0.3$，$\Omega_\Lambda\approx0.7$，计算出来大约是 $13.47\text{ G yr}$，当然这里用了一些近似，最精确的结果是 $137$ 亿年左右.
>
> 宇宙年龄是从第一个物体开始发光到现在为止所经过的时间.

现在定义距离 $\chi$，为光源与测量者在今天的径向距离：
$$
\begin{aligned}
\chi(z)&=\int_t^{t_0}c\text{d}t'\cdot\frac{a_0}{a(t')}=\int_{a/a_0}^1\frac{c\text{d}a'}{H_0a'^2E(a')}=\frac{c}{H_0}\int_0^z\frac{\text{d}z'}{E(z')}\\\\
\chi(z)&=D_H\int_0^z\frac{\text{d}z'}{\sqrt{\Omega_M(1+z)^{-3}+\Omega_R(1+z)^{-4}+\Omega_\Lambda+\Omega_K(1+z)^{-2}}}
\end{aligned}
$$
其中可以把距离用 $D_H=c/H_0$ 作为单位，这个数值大约是 $3000\text{ Mpc/h}$，这就是为什么人们在 Hubble 常数测不准确时，要把距离单位用 $\text{h}$ (Hubble 常数) 除掉.