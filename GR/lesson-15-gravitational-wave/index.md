---
url: /GR/lesson-15-gravitational-wave/index.md
---
为了计算，首先我们要对 Einstein 方程做 linear expansion. 这件事情有两个特点：简单，这是为数不多的 Einstein 能亲自解决的问题；同时这是一个 weakly interacting 的系统.

Newton 的引力方程没有对时间的导数，是静态的；但是 Einstein 方程中存在对时间的二阶导数这样的内容，我们称之为有 dynamical freedom，这表征了引力波存在的可能性.

第一步 $g\_{\mu\nu}=\eta\_{\mu\nu}+h\_{\mu\nu}$. 算联络：
$$
\begin{aligned}
\Gamma^\mu{}*{\lambda\rho} &= \frac{1}{2}g^{\mu\nu}(g*{\nu\lambda,\rho}+g\_{\nu\rho,\lambda}-g\_{\rho\lambda,\nu})\\\\
&\approx\frac{1}{2}\eta^{\mu\nu}(h\_{\nu\lambda,\rho}+h\_{\nu\rho,\lambda}-h\_{\rho\lambda,\nu})
\end{aligned}
$$
Riemann 张量的后面两项有 $\Gamma\times\Gamma$ 这样的内容，但是 $\Gamma$ 本来就是 $h$ 的一阶量，因此可以忽略这两项，Riemann 张量只剩下前面两项导数项. Ricci 张量因此变成
$$
\begin{aligned}
R\_{\mu\nu} &= \frac{\partial\Gamma^\lambda{}*{\lambda\mu}}{\partial x^\nu} - \frac{\partial\Gamma^\lambda{}*{\mu\nu}}{\partial x^\lambda} + \mathcal{O}(h^2)\\\\
&\approx \frac{1}{2}\left(\Box h\_{\mu\nu} - \frac{\partial^2}{\partial x^\lambda\partial x^\mu}h^\lambda{}*\nu - \frac{\partial^2}{\partial x^\lambda\partial x^\nu}h^\lambda{}*\mu + \frac{\partial^2}{\partial x^\mu\partial x^\nu}h^\lambda{}*\lambda\right)
\end{aligned}
$$
其中 $\Box$ 是 d'Alembert 算符. 利用 Einstein 方程的另一形式 $\displaystyle{R*{\mu\nu}=-8\pi G\left(T\_{\mu\nu}-\frac{1}{2}\eta\_{\mu\nu}T\right)}$ (这里已经一阶近似了)，得到所谓 linearized Einstein equation
$$
\Box h\_{\mu\nu} - \frac{\partial^2}{\partial x^\lambda\partial x^\mu}h^\lambda{}*\nu - \frac{\partial^2}{\partial x^\lambda\partial x^\nu}h^\lambda{}*\mu + \frac{\partial^2}{\partial x^\mu\partial x^\nu}h^\lambda{}*\lambda = -16\pi GS*{\mu\nu}
$$

> $$
> S\_{\mu\nu}^{(1)} = T\_{\mu\nu}-\frac{1}{2}\eta\_{\mu\nu}T
> $$

另外，可以取某一个坐标使得 $g^{\mu\nu}\Gamma^\lambda{}*{\mu\nu} = 0$. 一阶下，这里用 $\eta$，可以规定 $h$ 的坐标条件
$$
\frac{\partial}{\partial x^\mu} h^\mu{}*\nu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}*\mu
$$
在坐标变换下，
$$
h'*{\mu\nu} = h\_{\mu\nu} - \varepsilon\_{\nu,\mu} - \varepsilon\_{\mu,\nu},\qquad x'^\mu = x^\mu+\varepsilon^\mu(x)
$$
升降指标也变为 $\eta$ 的升降，
$$
\delta^\mu{}*\rho = g^{\mu\nu}g*{\nu\rho}= (\eta^{\mu\nu}+\tilde h^{\mu\nu})(\eta\_{\nu\rho}+h\_{\nu\rho}) = \delta^\mu{}*\rho + \tilde h^{\mu\nu}\eta*{\nu\rho}+\eta^{\mu\nu}h\_{\nu\rho}+\mathcal{O}(h^2)
$$
得到 $\tilde h^{\mu\nu} = -\eta^{\mu\nu}h\_{\nu\rho}\eta^{\rho\nu} = -h^{\mu\nu}$. 对于混合指标的情况，同理计算得到
$$
\begin{aligned}
&\frac{\partial}{\partial x'^\mu}h'^\mu{}*\nu = \frac{\partial}{\partial x^\mu}h^\mu{}*\nu - \varepsilon^\mu{}*{,\mu,\nu}-\Box\varepsilon*\nu\\\\
&\frac{1}{2}\frac{\partial}{\partial x'^\nu}h'^\mu{}*\mu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}*\mu - \varepsilon^\mu{}*{,\mu,\nu}
\end{aligned}
$$
如果要使得 LHS 两者相等，那么一定可以解出一个特定的 $\varepsilon$ (坐标变换) 实现这个要求. 所以说这个坐标条件是合理的. 取定这个坐标条件之后，之前 $h$ 的方程就变为
$$
\left{\begin{aligned}
&\Box h*{\mu\nu} = -16\pi GS\_{\mu\nu}\\\\
&\frac{\partial}{\partial x^\mu} h^\mu{}*\nu = \frac{1}{2}\frac{\partial}{\partial x^\nu}h^\mu{}*\mu
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
h\_{\mu\nu}(\vec{x},t) &= \int\text{d}^3\vec{x}'\text{d}t'(-16\pi GS\_{\mu\nu}(\vec{x}',t'))G(t-t';\vec{x}-\vec{x}')\\\\
&= 4G\int\text{d}^3\vec{x}'\frac{S\_{\mu\nu}(\vec{x}',t-|\vec{x}-\vec{x}'|)}{|\vec{x}-\vec{x}'|}
\end{aligned}
$$
平面波形式是
$$
h\_{\mu\nu} = e\_{\mu\nu}e^{\text{i}k^\mu x\_\mu}+e^\**{\mu\nu}e^{-\text{i}k^\mu x*\mu}
$$

> 加一个共轭项是为了变为实数.

坐标条件要求
$$
k\_\mu e^\mu{}*\nu =\frac{1}{2}k*\nu e^\mu{}*\mu
$$
同时在真空中传播，$\Box h*{\mu\nu}=0$，这得到 $k\_\mu k^\mu = 0$.

对于一个坐标变换 $\varepsilon^\mu(x)$，其 Fourier 变换是 $\epsilon^\mu = \text{i}\varepsilon^\mu e^{\text{i}k^\mu x\_\mu}-\text{i}\varepsilon^\*{}^\mu e^{-\text{i}k^\mu x\_\mu}$，在这个变换下
$$
\begin{aligned}
\&e'*{\mu\nu} = e*{\mu\nu} +k\_\mu\varepsilon\_\nu+k\_\nu\varepsilon\_\mu\\\\
\&k\_\mu e'^\mu{}*\nu = k*\mu e^\mu{}*\nu + k*\nu\varepsilon\_\mu k^\mu\\\\
&\frac{1}{2}k\_\nu e'^\mu{}*\mu = \frac{1}{2}k*\nu e^\mu{}*\mu+k*\nu(k^\mu \varepsilon\_\mu)
\end{aligned}
$$
可以通过选择 $\varepsilon^\mu$ 的方式，让 $e\_{13},e\_{23},e\_{33},e\_{00}=0$. 再加上坐标条件给出的四个方程，只剩下下面两个不为零的自由度：
$$
e\_{11}=-e\_{22},\qquad e\_{12} = e\_{21}
$$

***

引力波用 $h\_{ij}^{TT}$ 描述：traceless transverse，无迹横向分量. 空间分量可以写成
$$
h\_{ij}^{TT} = \begin{pmatrix}
h\_+\&h\_\times&0\\
h\_\times&-h\_+&0\\
0&0&0
\end{pmatrix}
$$
也由此能够写出度规. 一般我们引入投影算符，命令单位矢量 $\hat{n}=\vec{k}/|\vec{k}|$，投影算符 $P\_{ij}=\delta\_{ij}-\hat{n}*i\hat{n}*j$. 这个算符的作用是投影到横向，也就是
$$
P*{ij}g\_j\hat{n}*i=0
$$
向无迹方向投影的算符
$$
\Lambda*{ijkl} = P*{ik}P\_{jl} - \frac{1}{2}P\_{ij}P\_{kl}
$$
空间旋转：
$$
h\_{ij}' = R\_i{}^kR\_j{}^lh\_{kl}
$$
展开引力波的一个旋转变换
$$
\begin{pmatrix}
e\_{11}'\&e\_{12}'\\
e\_{21}'\&e\_{22}'
\end{pmatrix}=\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}\begin{pmatrix}
e\_{11}\&e\_{12}\\
e\_{21}\&e\_{22}
\end{pmatrix}\begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta
\end{pmatrix}
$$
展开后发现 $e\_{\pm}'=e^{\pm2\text{i}\theta}e\_{\pm}$，这意味着空间旋转一圈，引力波旋转两圈，也就是引力子自旋为 $2$.
