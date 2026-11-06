---
url: /GR/lesson-18-hawking-radiation/index.md
---
我们上节课说了引力波的探测. 在 Michaelson 干涉仪中，两个方向分别是
$$
\begin{aligned}
\&E\_1 = -\frac{1}{2}E\_0e^{-\text{i}\omega\_Lt+2\text{i}k\_LL\_x}\\\\
\&E\_2 = \frac{1}{2}E\_0e^{-\text{i}\omega\_Lt+2\text{i}k\_LL\_y}
\end{aligned}
$$
其中前面的负号来源于某面镜子上反射的半波损失. 接收端收到的场强分布是
$$
E\_1+E\_2 = \frac{1}{2}E\_0e^{-\text{i}\omega\_Lt}(e^{2\text{i}k\_LL\_y}-e^{2\text{i}k\_LL\_x})
$$
光强 $|E|^2 = E\_0^2\sin^2k\_L(L\_y-L\_x)$. 这是没有广义相对论效应的情况. 如果考虑广义相对论效应，那么
$$
\text{d}s^2 =-\text{d}t^2+(1+h\_+(t,\vec{x}))\text{d}x^2+(1-h\_+(t,\vec{x}))\text{d}y^2+\text{d}z^2
$$
在 $\hat{x}$ 方向，$\text{d}x=\pm\text{d}t(1-h\_+(t,\vec{x}))^{1/2}$. 同时我们估算一下，LIGO 探测的引力波频率是 $100\text{ Hz}$ 级别，也就是说波长是地球半径的量级，$\lambda\gg L$ (干涉仪的尺度)，可以忽略度规对空间的依赖. 也就是，
$$
\text{d}x \approx \pm\text{d}t\left\[1-\frac{1}{2}h\_+(t)\right]
$$
因此在 $\hat{x}$ 光走过的两段分别有
$$
\begin{aligned}
L\_x &= t\_1-t\_2 - \frac{1}{2}\int\_{t\_0}^{t\_1}h\_+(t')\text{d}t'\\\\
-L\_x &= t\_2-t\_1+ \frac{1}{2}\int\_{t\_1}^{t\_2}h\_+(t')\text{d}t'
\end{aligned}
$$
上下两式相减，
$$
t\_2-t\_0 = 2L\_x+h\_0L\_x\frac{\sin\omega\_{GW}L\_x}{\omega\_{GW}L\_x}\cos\[\omega\_{GW}(t\_0+L\_x)]
$$
其中，$h\_+ = h\_0\cos(\omega\_{GW}t)$. 同理，
$$
t\_2-t\_0 = 2L\_y-h\_0L\_y\frac{\sin\omega\_{GW}L\_y}{\omega\_{GW}L\_y}\cos\[\omega\_{GW}(t\_0+L\_y)]
$$
让它们的 $t\_2$ 相等，分析其相位差，就可以得到引力波的频率.

***

引力波说完了，之后我们讲 Hawking radiation. 如果要发生这种 radiation，必须满足两个条件：

* 这必须是一个量子的理论；
* 体系有全局 Killing vector 时，我们可以解定态 Schrödinger 方程；但是这里进入视界之后，类时变为类空，度规显含时间 —— 因此第二个条件是我们的 Hamiltonian 需要显含时间，$H=H(t)$.

Hamiltonian $H(p,q)$，其中 $\[p,q]=-\text{i}$.
$$
H = \frac{1}{2}\frac{p^2}{m}+\frac{1}{2}kq^2
$$
我们知道动量和位置算符在粒子数表象下是 $q=A(a+a^\dagger)$、$p=\text{i}B(a-a^\dagger)$. 同时，$\[a,a^\dagger]=\text{i}$. 代入后得到 $B=-1/(2A)$，又因为 $H$ 和 $a^\dagger a$ 相关，因此得到 $B/A = -(m/k)^{1/2}$. 于是
$$
H = \omega\left(a^\dagger a+\frac{1}{2}\right),\quad \omega=\sqrt{\frac{k}{m}}.
$$
此时能够构造本征态，
$$
a|0\rangle=0,\quad \left(\frac{\partial}{\partial q}+m\omega q\right)\psi\_0(q)=0 \Longrightarrow\psi\_0(q)\sim e^{-m\omega q^2}
$$
From Schrödinger to Heisenberg：假设 Hamiltonian 和时间没关系，那么能够直接写出 $\psi(t)$. 换成 Heisenberg 表象就是
$$
\frac{\text{d}}{\text{d}t}\mathcal{O}(t) =\text{i}\[H(t),\mathcal{O}(t)]
$$
以谐振子为例，这里 $H=p^2/2+\omega^2q^2/2$，求出升降算符随时间的演化
$$
\begin{aligned}
&\dot{a}(t) = \text{i}\[H,a] = -\text{i}\omega a,\quad \dot{a}^\dagger = \text{i}\omega a^\dagger\\\\
\Longrightarrow\quad & a = e^{-\text{i}\omega t}a(0),\quad a^\dagger  = e^{\text{i}\omega t}a^\dagger(0)
\end{aligned}
$$
如果在谐振子 Langrangian 中加入一项，
$$
L(t,q,\dot{q}) = \frac{1}{2}\dot{q}^2-\frac{1}{2}\omega^2q^2+J(t)q,\quad p=\frac{\delta L}{\delta\dot{q}}-\dot{q}
$$
有：
$$
\begin{aligned}
\&H = p\dot{q}-L = \frac{1}{2}p^2-\frac{1}{2}\omega^2q^2-J(t)q\\\\
&\dot{q} = \text{i}\[H,q] = p\\\\
&\dot{p} = \text{i}\[H,p] = -\omega^2q+J(t)
\end{aligned}
$$
在有驱动力的情况下，写出升降算符的变化，
$$
\begin{aligned}
&\dot{a}(t) = -\text{i}\omega a(t) + \frac{\text{i}}{\sqrt{2\omega}}J(t)\\\\
&\dot{a}^\dagger(t) = \text{i}\omega a^\dagger(t)-\frac{\text{i}}{\sqrt{2\omega}}J(t)
\end{aligned}
$$
解得，
$$
\begin{aligned}
\&a(t) = \left\[a(0) + \frac{\text{i}}{\sqrt{2\omega}}\int\_0^te^{\text{i}\omega t'}J(t')\text{d}t'\right]e^{-\text{i}\omega t}\\\\
\&a^\dagger(t) = \left\[a^\dagger(0) - \frac{\text{i}}{\sqrt{2\omega}}\int\_0^te^{-\text{i}\omega t'}J(t')\text{d}t'\right]e^{\text{i}\omega t}
\end{aligned}
$$
Heisenberg 表象说，态是不变的，定义 in 和 out 的两个本征态，
$$
a\_\text{in}=a(0),\quad a^\dagger\_{\text{in}}=a^\dagger(0),\quad a\_{\text{out}} = a(T)e^{-\text{i}\omega T},\quad a^\dagger\_{\text{out}}=a^\dagger(T)e^{\text{i}\omega T}
$$
同时把上面的积分定义为 $J\_0$. 于是，
$$
a\_{\text{out}} = a(T)e^{-\text{i}\omega T} = (a\_{\text{in}}+J\_0),\quad a\_{\text{out}}|0\rangle\_{\text{in}} = J\_0|0\rangle\_{\text{in}},\quad |n\rangle\_{\text{in}} = \frac{1}{\sqrt{n!}}\left(a^\dagger\_{\text{out}}\right)^n|0\rangle\_{\text{out}}
$$
因此，
$$
\sum\_n\Lambda\_n\sqrt{n}|n-1\rangle\_{\text{out}} = J\_0\sum\_n\Lambda\_n|n\rangle\_{\text{out}}\Longrightarrow\Lambda\_{n+1}=\frac{J\_0}{\sqrt{n+1}}\Lambda\_n
$$
通项为 $\Lambda\_n=\displaystyle{\frac{J\_0^n}{\sqrt{n!}}\Lambda\_0}$. 其中，$\Lambda\_0=e^{-J\_0^2/2}$. 一个 in 的态写成
$$
|0\rangle\_{\text{in}}=e^{-J\_0^2/2}\sum\_n\frac{J\_0^n}{\sqrt{n!}}|n\rangle\_{\text{out}}
$$
这等价于从真空 ($|0\rangle$) 中产生了粒子.

***

我们还需要简单的量子场论，考虑一个最简单的例子，
$$
\mathcal{L} = -\frac{1}{2}\partial\_\mu\phi\partial^\mu\phi-\frac{1}{2}m^2\phi^2=\frac{1}{2}\dot\phi^2-\frac{1}{2}\nabla\phi\nabla\phi-\frac{1}{2}m^2\phi^2
$$
(Lagrangian density) 其中 $\phi$ 是一个标量场，可以做 Fourier 变换，
$$
\phi(x)=\int\frac{\text{d}^3k}{(2\pi)^{3/2}}\phi\_k(t)e^{\text{i}\vec{k}\cdot\vec{x}}
$$
Lagrangian 是
$$
L = \int\mathcal{L}\text{d}^3x = \frac{1}{2}\int\text{d}^3k\left(\dot{\phi}*{\vec{k}}\dot{\phi}*{-\vec{k}}-\omega^2\phi\_{\vec{k}}\phi\_{-\vec{k}}\right) = \int\text{d}^3k\left(|\phi\_{\vec{k}}|^2-\omega\_{\vec{k}}^2|\phi\_{-\vec{k}}|^2\right)
$$
这说明，一个标量场等价于很多谐振子的集合. 下一步仍然是量子化谐振子，以及求升降算符，略去过程，我们最终会得到
$$
a\_{\vec{k}} = \sqrt{\frac{\omega\_{\vec{k}}}{2}}\left(\phi\_{\vec{k}}+\frac{\text{i}\pi\_{\vec{k}}}{\omega\_{\vec{k}}}\right),\quad a\_{\vec{k}}^\dagger = \sqrt{\frac{\omega\_{\vec{k}}}{2}}\left(\phi\_{\vec{k}}-\frac{\text{i}\pi\_{\vec{k}}}{\omega\_{\vec{k}}}\right)
$$

> 这里 $\pi$ 是正则动量.

由此，
$$
\left\[a\_{\vec{k}},a\_{\vec{k}'}^\dagger\right] = \delta^3(\vec{k}-\vec{k}')
$$
Hamiltonian 写成
$$
H = \frac{1}{2}\int\text{d}^3\vec{k}\left(\left|\pi\_{\vec{k}}\right|^2+\omega\_{\vec{k}}\left|\phi\_{\vec{k}}\right|^2\right) = \int\text{d}^3\vec{k}\cdot\omega\_{\vec{k}}\left\[a\_{\vec{k}}^\dagger a\_{\vec{k}}+\frac{1}{2}\delta^3(0)\right]
$$
::: warning

这里的 $(2\pi)^3\delta^3(0)=V$，来源于空间无穷大造成的零点能发散.

:::
