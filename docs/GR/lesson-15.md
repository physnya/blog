---
title: Lesson 15 引力波
createTime: 2026/04/16 14:22:32
permalink: /GR/lesson-15-gravitational-wave/
---
为了计算，首先我们要对 Einstein 方程做 linear expansion. 这件事情有两个特点：简单，这是为数不多的 Einstein 能亲自解决的问题；同时这是一个 weakly interacting 的系统.

Newton 的引力方程没有对时间的导数，是静态的；但是 Einstein 方程中存在对时间的二阶导数这样的内容，我们称之为有 dynamical freedom，这表征了引力波存在的可能性.

第一步 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$. 算联络：
$$
\begin{aligned}
\Gamma^\mu{}_{\lambda\rho} &= \frac{1}{2}g^{\mu\nu}(g_{\nu\lambda,\rho}+g_{\nu\rho,\lambda}-g_{\rho\lambda,\nu})\\\\
&\approx\frac{1}{2}\eta^{\mu\nu}(h_{\nu\lambda,\rho}+h_{\nu\rho,\lambda}-h_{\rho\lambda,\nu})
\end{aligned}
$$
Riemann 张量的后面两项有 $\Gamma\times\Gamma$ 这样的内容，但是 $\Gamma$ 本来就是 $h$ 的一阶量，因此可以忽略这两项，Riemann 张量只剩下前面两项导数项. Ricci 张量因此变成
$$
\begin{aligned}
R_{\mu\nu} &= \frac{\partial\Gamma^\lambda{}_{\lambda\mu}}{\partial x^\nu} - \frac{\partial\Gamma^\lambda{}_{\mu\nu}}{\partial x^\lambda} + \mathcal{O}(h^2)\\\\
&\approx \frac{1}{2}\left(\Box h_{\mu\nu} - \frac{\partial^2}{\partial x^\lambda\partial x^\mu}h^\lambda{}_\nu - \frac{\partial^2}{\partial x^\lambda\partial x^\nu}h^\lambda{}_\mu + \frac{\partial^2}{\partial x^\mu\partial x^\nu}h^\lambda{}_\lambda\right)
\end{aligned}
$$
其中 $\Box$ 是 d'Alembert 算符. 利用 Einstein 方程的另一形式 $\displaystyle{R_{\mu\nu}=-8\pi G\left(T_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}T\right)}$ (这里已经一阶近似了)，得到所谓 linearized Einstein equation
$$
\Box h_{\mu\nu} - \frac{\partial^2}{\partial x^\lambda\partial x^\mu}h^\lambda{}_\nu - \frac{\partial^2}{\partial x^\lambda\partial x^\nu}h^\lambda{}_\mu + \frac{\partial^2}{\partial x^\mu\partial x^\nu}h^\lambda{}_\lambda = -16\pi GS_{\mu\nu}
$$

> $$
> S_{\mu\nu}^{(1)} = T_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}T
> $$

另外，可以取某一个坐标使得 $g^{\mu\nu}\Gamma^\lambda{}_{\mu\nu} = 0$. 一阶下，这里用 $\eta$，可以规定 $h$ 的坐标条件
$$
\frac{\partial}{\partial x^\mu} h^\mu{}_\nu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}_\mu
$$
在坐标变换下，
$$
h'_{\mu\nu} = h_{\mu\nu} - \varepsilon_{\nu,\mu} - \varepsilon_{\mu,\nu},\qquad x'^\mu = x^\mu+\varepsilon^\mu(x)
$$
升降指标也变为 $\eta$ 的升降，
$$
\delta^\mu{}_\rho = g^{\mu\nu}g_{\nu\rho}= (\eta^{\mu\nu}+\tilde h^{\mu\nu})(\eta_{\nu\rho}+h_{\nu\rho}) = \delta^\mu{}_\rho + \tilde h^{\mu\nu}\eta_{\nu\rho}+\eta^{\mu\nu}h_{\nu\rho}+\mathcal{O}(h^2)
$$
得到 $\tilde h^{\mu\nu} = -\eta^{\mu\nu}h_{\nu\rho}\eta^{\rho\nu} = -h^{\mu\nu}$. 对于混合指标的情况，同理计算得到
$$
\begin{aligned}
&\frac{\partial}{\partial x'^\mu}h'^\mu{}_\nu = \frac{\partial}{\partial x^\mu}h^\mu{}_\nu - \varepsilon^\mu{}_{,\mu,\nu}-\Box\varepsilon_\nu\\\\
&\frac{1}{2}\frac{\partial}{\partial x'^\nu}h'^\mu{}_\mu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}_\mu - \varepsilon^\mu{}_{,\mu,\nu}
\end{aligned}
$$
如果要使得 LHS 两者相等，那么一定可以解出一个特定的 $\varepsilon$ (坐标变换) 实现这个要求. 所以说这个坐标条件是合理的. 取定这个坐标条件之后，之前 $h$ 的方程就变为
$$
\left\{\begin{aligned}
&\Box h_{\mu\nu} = -16\pi GS_{\mu\nu}\\\\
&\frac{\partial}{\partial x^\mu} h^\mu{}_\nu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}_\mu
\end{aligned}\right.
$$
其中第一个就是简单的 d'Alembert 方程，我们早已解过无数遍. 用 Green 函数，
$$
\Box G(t-t';\vec{x}-\vec{x}') = \delta(t-t')\delta^3(\vec{x}-\vec{x}'),\qquad\Box = \nabla^2 -\frac{\partial^2}{\partial t^2}
$$
解得
$$
G(t-t';\vec{x}-\vec{x}') = -\frac{1}{4\pi|\vec{x}-\vec{x}'|}\delta^3(|\vec{x}-\vec{x}'|-(t-t'))
$$
代进去做逆 Fourier 变换，
$$
\begin{aligned}
h_{\mu\nu}(\vec{x},t) &= \int\text{d}^3\vec{x}'\text{d}t'(-16\pi GS_{\mu\nu}(\vec{x}',t'))G(t-t';\vec{x}-\vec{x}')\\\\
&= 4G\int\text{d}^3\vec{x}'\frac{S_{\mu\nu}(\vec{x}',t-|\vec{x}-\vec{x}'|)}{|\vec{x}-\vec{x}'|}
\end{aligned}
$$
平面波形式是
$$
h_{\mu\nu} = e_{\mu\nu}e^{\text{i}k^\mu x_\mu}+e^*_{\mu\nu}e^{-\text{i}k^\mu x_\mu}
$$

> 加一个共轭项是为了变为实数.

坐标条件要求
$$
k_\mu e^\mu{}_\nu =\frac{1}{2}k_\nu e^\mu{}_\mu
$$
同时在真空中传播，$\Box h_{\mu\nu}=0$，这得到 $k_\mu k^\mu = 0$.

对于一个坐标变换 $\varepsilon^\mu(x)$，其 Fourier 变换是 $\epsilon^\mu = \text{i}\varepsilon^\mu e^{\text{i}k^\mu x_\mu}-\text{i}\varepsilon^*{}^\mu e^{-\text{i}k^\mu x_\mu}$，在这个变换下
$$
\begin{aligned}
&e'_{\mu\nu} = e_{\mu\nu} +k_\mu\varepsilon_\nu+k_\nu\varepsilon_\mu\\\\
&k_\mu e'^\mu{}_\nu = k_\mu e^\mu{}_\nu + k_\nu\varepsilon_\mu k^\mu\\\\
&\frac{1}{2}k_\nu e'^\mu{}_\mu = \frac{1}{2}k_\nu e^\mu{}_\mu+k_\nu(k^\mu \varepsilon_\mu)
\end{aligned}
$$
可以通过选择 $\varepsilon^\mu$ 的方式，让 $e_{13},e_{23},e_{33},e_{00}=0$. 再加上坐标条件给出的四个方程，只剩下下面两个不为零的自由度：
$$
e_{11}=-e_{22},\qquad e_{12} = e_{21}
$$

---

引力波用 $h_{ij}^{TT}$ 描述：traceless transverse，无迹横向分量. 空间分量可以写成
$$
h_{ij}^{TT} = \begin{pmatrix}
h_+&h_\times&0\\
h_\times&-h_+&0\\
0&0&0
\end{pmatrix}
$$
也由此能够写出度规. 一般我们引入投影算符，命令单位矢量 $\hat{n}=\vec{k}/|\vec{k}|$，投影算符 $P_{ij}=\delta_{ij}-\hat{n}_i\hat{n}_j$. 这个算符的作用是投影到横向，也就是
$$
P_{ij}g_j\hat{n}_i=0
$$
向无迹方向投影的算符
$$
\Lambda_{ijkl} = P_{ik}P_{jl} - \frac{1}{2}P_{ij}P_{kl}
$$
空间旋转：
$$
h_{ij}' = R_i{}^kR_j{}^lh_{kl}
$$
展开引力波的一个旋转变换
$$
\begin{pmatrix}
e_{11}'&e_{12}'\\
e_{21}'&e_{22}'
\end{pmatrix}=\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}\begin{pmatrix}
e_{11}&e_{12}\\
e_{21}&e_{22}
\end{pmatrix}\begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta
\end{pmatrix}
$$
展开后发现 $e_{\pm}'=e^{\pm2\text{i}\theta}e_{\pm}$，这意味着空间旋转一圈，引力波旋转两圈，也就是引力子自旋为 $2$.

