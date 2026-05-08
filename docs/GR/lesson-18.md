---
title: Lesson 18 Hawking 辐射
createTime: 2026/04/26 02:11:39
permalink: /GR/lesson-18-hawking-radiation/
---
我们上节课说了引力波的探测. 在 Michaelson 干涉仪中，两个方向分别是
$$
\begin{aligned}
&E_1 = -\frac{1}{2}E_0e^{-\text{i}\omega_Lt+2\text{i}k_LL_x}\\\\
&E_2 = \frac{1}{2}E_0e^{-\text{i}\omega_Lt+2\text{i}k_LL_y}
\end{aligned}
$$
其中前面的负号来源于某面镜子上反射的半波损失. 接收端收到的场强分布是
$$
E_1+E_2 = \frac{1}{2}E_0e^{-\text{i}\omega_Lt}(e^{2\text{i}k_LL_y}-e^{2\text{i}k_LL_x})
$$
光强 $|E|^2 = E_0^2\sin^2k_L(L_y-L_x)$. 这是没有广义相对论效应的情况. 如果考虑广义相对论效应，那么
$$
\text{d}s^2 =-\text{d}t^2+(1+h_+(t,\vec{x}))\text{d}x^2+(1-h_+(t,\vec{x}))\text{d}y^2+\text{d}z^2
$$
在 $\hat{x}$ 方向，$\text{d}x=\pm\text{d}t(1-h_+(t,\vec{x}))^{1/2}$. 同时我们估算一下，LIGO 探测的引力波频率是 $100\text{ Hz}$ 级别，也就是说波长是地球半径的量级，$\lambda\gg L$ (干涉仪的尺度)，可以忽略度规对空间的依赖. 也就是，
$$
\text{d}x \approx \pm\text{d}t\left[1-\frac{1}{2}h_+(t)\right]
$$
因此在 $\hat{x}$ 光走过的两段分别有
$$
\begin{aligned}
L_x &= t_1-t_2 - \frac{1}{2}\int_{t_0}^{t_1}h_+(t')\text{d}t'\\\\
-L_x &= t_2-t_1+ \frac{1}{2}\int_{t_1}^{t_2}h_+(t')\text{d}t'
\end{aligned}
$$
上下两式相减，
$$
t_2-t_0 = 2L_x+h_0L_x\frac{\sin\omega_{GW}L_x}{\omega_{GW}L_x}\cos[\omega_{GW}(t_0+L_x)]
$$
其中，$h_+ = h_0\cos(\omega_{GW}t)$. 同理，
$$
t_2-t_0 = 2L_y-h_0L_y\frac{\sin\omega_{GW}L_y}{\omega_{GW}L_y}\cos[\omega_{GW}(t_0+L_y)]
$$
让它们的 $t_2$ 相等，分析其相位差，就可以得到引力波的频率.

---

引力波说完了，之后我们讲 Hawking radiation. 如果要发生这种 radiation，必须满足两个条件：

* 这必须是一个量子的理论；
* 体系有全局 Killing vector 时，我们可以解定态 Schrödinger 方程；但是这里进入视界之后，类时变为类空，度规显含时间 —— 因此第二个条件是我们的 Hamiltonian 需要显含时间，$H=H(t)$.

Hamiltonian $H(p,q)$，其中 $[p,q]=-\text{i}$.
$$
H = \frac{1}{2}\frac{p^2}{m}+\frac{1}{2}kq^2
$$
我们知道动量和位置算符在粒子数表象下是 $q=A(a+a^\dagger)$、$p=\text{i}B(a-a^\dagger)$. 同时，$[a,a^\dagger]=\text{i}$. 代入后得到 $B=-1/(2A)$，又因为 $H$ 和 $a^\dagger a$ 相关，因此得到 $B/A = -(m/k)^{1/2}$. 于是
$$
H = \omega\left(a^\dagger a+\frac{1}{2}\right),\quad \omega=\sqrt{\frac{k}{m}}.
$$
此时能够构造本征态，
$$
a|0\rangle=0,\quad \left(\frac{\partial}{\partial q}+m\omega q\right)\psi_0(q)=0 \Longrightarrow\psi_0(q)\sim e^{-m\omega q^2}
$$
From Schrödinger to Heisenberg：假设 Hamiltonian 和时间没关系，那么能够直接写出 $\psi(t)$. 换成 Heisenberg 表象就是
$$
\frac{\text{d}}{\text{d}t}\mathcal{O}(t) =\text{i}[H(t),\mathcal{O}(t)]
$$
以谐振子为例，这里 $H=p^2/2+\omega^2q^2/2$，求出升降算符随时间的演化
$$
\begin{aligned}
&\dot{a}(t) = \text{i}[H,a] = -\text{i}\omega a,\quad \dot{a}^\dagger = \text{i}\omega a^\dagger\\\\
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
&H = p\dot{q}-L = \frac{1}{2}p^2-\frac{1}{2}\omega^2q^2-J(t)q\\\\
&\dot{q} = \text{i}[H,q] = p\\\\
&\dot{p} = \text{i}[H,p] = -\omega^2q+J(t)
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
&a(t) = \left[a(0) + \frac{\text{i}}{\sqrt{2\omega}}\int_0^te^{\text{i}\omega t'}J(t')\text{d}t'\right]e^{-\text{i}\omega t}\\\\
&a^\dagger(t) = \left[a^\dagger(0) - \frac{\text{i}}{\sqrt{2\omega}}\int_0^te^{-\text{i}\omega t'}J(t')\text{d}t'\right]e^{\text{i}\omega t}
\end{aligned}
$$
Heisenberg 表象说，态是不变的，定义 in 和 out 的两个本征态，
$$
a_\text{in}=a(0),\quad a^\dagger_{\text{in}}=a^\dagger(0),\quad a_{\text{out}} = a(T)e^{-\text{i}\omega T},\quad a^\dagger_{\text{out}}=a^\dagger(T)e^{\text{i}\omega T}
$$
同时把上面的积分定义为 $J_0$. 于是，
$$
a_{\text{out}} = a(T)e^{-\text{i}\omega T} = (a_{\text{in}}+J_0),\quad a_{\text{out}}|0\rangle_{\text{in}} = J_0|0\rangle_{\text{in}},\quad |n\rangle_{\text{in}} = \frac{1}{\sqrt{n!}}\left(a^\dagger_{\text{out}}\right)^n|0\rangle_{\text{out}}
$$
因此，
$$
\sum_n\Lambda_n\sqrt{n}|n-1\rangle_{\text{out}} = J_0\sum_n\Lambda_n|n\rangle_{\text{out}}\Longrightarrow\Lambda_{n+1}=\frac{J_0}{\sqrt{n+1}}\Lambda_n
$$
通项为 $\Lambda_n=\displaystyle{\frac{J_0^n}{\sqrt{n!}}\Lambda_0}$. 其中，$\Lambda_0=e^{-J_0^2/2}$. 一个 in 的态写成
$$
|0\rangle_{\text{in}}=e^{-J_0^2/2}\sum_n\frac{J_0^n}{\sqrt{n!}}|n\rangle_{\text{out}}
$$
这等价于从真空 ($|0\rangle$) 中产生了粒子.

---

我们还需要简单的量子场论，考虑一个最简单的例子，
$$
\mathcal{L} = -\frac{1}{2}\partial_\mu\phi\partial^\mu\phi-\frac{1}{2}m^2\phi^2=\frac{1}{2}\dot\phi^2-\frac{1}{2}\nabla\phi\nabla\phi-\frac{1}{2}m^2\phi^2
$$
(Lagrangian density) 其中 $\phi$ 是一个标量场，可以做 Fourier 变换，
$$
\phi(x)=\int\frac{\text{d}^3k}{(2\pi)^{3/2}}\phi_k(t)e^{\text{i}\vec{k}\cdot\vec{x}}
$$
Lagrangian 是
$$
L = \int\mathcal{L}\text{d}^3x = \frac{1}{2}\int\text{d}^3k\left(\dot{\phi}_{\vec{k}}\dot{\phi}_{-\vec{k}}-\omega^2\phi_{\vec{k}}\phi_{-\vec{k}}\right) = \int\text{d}^3k\left(|\phi_{\vec{k}}|^2-\omega_{\vec{k}}^2|\phi_{-\vec{k}}|^2\right)
$$
这说明，一个标量场等价于很多谐振子的集合. 下一步仍然是量子化谐振子，以及求升降算符，略去过程，我们最终会得到
$$
a_{\vec{k}} = \sqrt{\frac{\omega_{\vec{k}}}{2}}\left(\phi_{\vec{k}}+\frac{\text{i}\pi_{\vec{k}}}{\omega_{\vec{k}}}\right),\quad a_{\vec{k}}^\dagger = \sqrt{\frac{\omega_{\vec{k}}}{2}}\left(\phi_{\vec{k}}-\frac{\text{i}\pi_{\vec{k}}}{\omega_{\vec{k}}}\right)
$$

> 这里 $\pi$ 是正则动量.

由此，
$$
\left[a_{\vec{k}},a_{\vec{k}'}^\dagger\right] = \delta^3(\vec{k}-\vec{k}')
$$
Hamiltonian 写成
$$
H = \frac{1}{2}\int\text{d}^3\vec{k}\left(\left|\pi_{\vec{k}}\right|^2+\omega_{\vec{k}}\left|\phi_{\vec{k}}\right|^2\right) = \int\text{d}^3\vec{k}\cdot\omega_{\vec{k}}\left[a_{\vec{k}}^\dagger a_{\vec{k}}+\frac{1}{2}\delta^3(0)\right]
$$
::: warning

这里的 $(2\pi)^3\delta^3(0)=V$，来源于空间无穷大造成的零点能发散.

:::
