---
url: /quantum-mechanics/lesson-24/index.md
---
这时候的 Hamiltonian 是 $H(t)=H\_0+H'(t)$. 我们只做比较简单的问题，考虑一个二能级系统的含时微扰问题. 总的波函数是
$$
\Psi(t)=c\_a(t)\psi\_ae^{-\text{i}E\_at/\hbar}+c\_b(t)\psi\_be^{-\text{i}E\_bt/\hbar}
$$
(类似于常数变易法.) 代入 Schrödinger 方程，得到
$$
\begin{aligned}
&\dot{c}*a(t)=-\frac{\text{i}}{\hbar}(H'*{aa}c\_a+H'*{ab}e^{\text{i}(E\_a-E\_b)t/\hbar}c\_b)\\\\
&\dot{c}*b(t)=-\frac{\text{i}}{\hbar}(H'*{bb}c\_b+H'*{ba}e^{-\text{i}(E\_a-E\_b)t/\hbar}c\_a)
\end{aligned}
$$
令 $\omega \equiv (E\_b-E\_a)/\hbar$. 对于大多数物理上有价值的问题，对角元都是零，所以方程化为
$$
\begin{aligned}
&\dot{c}*a = -\frac{\text{i}}{\hbar}H'*{ab}e^{-\text{i}\omega t}c\_b\\\\
&\dot{c}*b = -\frac{\text{i}}{\hbar}H'*{ba}e^{\text{i}\omega t}c\_a
\end{aligned}
$$
因为是微扰，所以解法是用展开的方式：我们知道 $c\_a^{(0)}=1$，$c\_b^{(0)}=0$ (最低阶情况下就在 $a$ 能级上)，然后 $c\_b^{(1)}$ 由 $c\_a^{(0)}$ 给出、$c\_a^{(1)}$ 由 $c\_b^{(0)}$ 给出…… 由这里可以计算 $a\to b$ 跃迁的一个概率：
$$
P\_{a\to b}(t)=|c\_b^{(1)}(t)|^2 = \frac{1}{\hbar^2}\left|\int\_0^tH'*{ab}(t')e^{\text{i}\omega t'}\text{d}t'\right|^2
$$
在 $t\to\infty$ 的长时近似下，实际上是一个 Fourier 变换，不为零的条件是 $H'*{ab}$ 中含有和 $\omega$ 共振的频率成分.

***

Einstein 的辐射理论实际上基于含时微扰.

Fermi's Golden Rule：对于大量的粒子系统，
$$
\Gamma\_{t\to f}=\frac{2\pi}{\hbar}|\langle f|H'|t\rangle|^2\rho(E\_f)
$$
也就是 $t$ 这个态可以跳到任意一个 $f$ 态，$t$ 态寿命由上式决定，其中 $\rho$ 是态密度. 这里并不是二能级的系统，但是所有态之间都是没有相干性的，只有 $t$ 和它们分别构成二能级系统.

***

认为辐射是真空场的含时微扰，$H'=-q\vec{r}\cdot\vec{E}(t)$. 电磁场态密度是
$$
\rho(\omega)=\frac{\omega^2}{\pi^2c^3}
$$
