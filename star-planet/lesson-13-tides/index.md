---
url: /star-planet/lesson-13-tides/index.md
---
沿用之前的符号命名，但是我们这节课要开始做近似. 考虑 $r\_2/d\ll 1$，同时利用下面的单位制：
$$
d=1,\quad m\_1+m\_2=1,\quad \omega=1,\quad G=1
$$
这样，有效势能变为
$$
\phi\_{\text{eff}} = -\frac{m\_1}{r\_1}-\frac{m\_2}{r\_2}-\frac{1}{2}r^2
$$
用余弦定理得到
$$
r\_1^2=1+r\_2^2+2r\_2\cos\theta,\quad r^2=m\_1^2+r\_2^2+2m\_1r\_2\cos\theta
$$
取倒数，得到
$$
\frac{1}{r\_1}=\frac{1}{\sqrt{1+x}}\approx 1-r\_2\cos\theta+\frac{3\cos^2\theta}{3}r\_2^2
$$
代入有效势能，
$$
\phi\_{\text{eff}} = -m\_1+m\_1\cos\theta\cdot r\_2-\frac{3\cos^2\theta-1}{2}m\_1r\_2^2-\frac{1}{2}m\_1^2-m\_1\cos\theta\cdot r\_2-\frac{1}{2}r\_2^2-\frac{m\_2}{r\_2}
$$
把常数项撇掉，
$$
\phi\_{\text{eff}} = -\frac{m\_2}{r\_2}-\frac{3\cos^2\theta-1}{2}m\_1r\_2^2-\frac{1}{2}r\_2^2
$$
第二个近似是考虑 $m\_2\ll m\_1\simeq 1$. 这时候，
$$
\phi\_{\text{eff},x}=0\Longrightarrow x=\left(\frac{m\_2}{3}\right)^{1/3}
$$
恢复量纲之后是 $(m\_2/3m\_1)^{1/3}d$，这被称为 Hill radius. 对于日地系统，Hill 半径大约是 $0.01$ AU，这被当作判断是归属于谁的引力范围的判据，也就是在地球附近 $0.01$ AU 的天体被视为处于地球引力范围之内，反之则属于太阳的引力范围.

如果地球太靠近太阳，那么很有可能出现 $R\_{\text{Hill}}\<R\_E$ 的情况，也就是 Hill 半径比地球半径还要小，这时候地球上的所有东西都会脱离地球的掌控，这给出的日地距离限制被称为 Roche limit. 计算可知：
$$
R\_2 = R\_{\text{Hill}}\Longrightarrow d=\left(\frac{3\rho\_1}{\rho\_2}\right)^{1/3}R\_1
$$
更精确的计算表明系数是 $2.4$ 左右.

***

回到原先的势能，计算一阶展开可以得到受力，
$$
\vec{F} = -\nabla\phi\_{\text{eff}} =
\begin{pmatrix}
2x\\-y
\end{pmatrix}\frac{Gm\_1}{d^3}
$$
这是针对微扰而言的一阶力，这个力会产生潮汐，可以计算出 $x$ 方向的潮汐高度，
$$
h\_{\text{tides}}\sim\frac{|\phi|}{g}\sim\frac{R\_2^2\cdot Gm\_1/d^3}{Gm\_2/R\_2^2}\sim\frac{m\_1}{m\_2}\frac{R\_2^4}{d^3}
$$
可以简单算一下潮汐升起来带来的那一坨质量是多少：
$$
m\_{\text{balge}}\sim \rho R\_2^2h\_{\text{tides}}\sim m\_2\left(\frac{R\_2}{d}\right)^3
$$
这造成了一个摩擦效应，也就是所谓的潮汐摩擦. 这件事情在地月系统中会拖慢地球的自转速度，同时月球会获得角动量、升到更高轨道，也就是说在遥远的未来一个月会更短、一天会更长.

> 其实应该是有某种可能，某个星系中的类似系统在达到潮汐锁定之前，卫星轨道就已经高于 Hill radius，脱离行星的掌控了... 不过地月系统显然没有这个问题.

潮汐力造成的椭球的半长轴与地月连线之间的夹角 (锐角) $\varepsilon$ 称为 lag angle. 这产生一个四极势，
$$
\phi\_{\text{quad}}\sim K\_L\frac{Gm\_s}{R}\left(\frac{R}{d}\right)^3\left(\frac{R}{r}\right)^3\frac{3\cos^2\theta-1}{2}
$$
我们称 $K\_L$ 为 love number，虽然我并不知道为什么. 力矩：
$$
\Gamma\_T = -\left.\frac{\partial\phi\_{\text{quad}}}{\partial\theta}\right|\_{r=d\\\theta=-\varepsilon}m\_sd = K\_L\frac{Gm\_s^2}{R}\left(\frac{R}{d}\right)^6\cdot 3\cos\varepsilon\sin\varepsilon=\frac{3K\_L}{2}\frac{Gm\_s^2}{R}\left(\frac{R}{d}\right)^6\frac{1}{Q}
$$
这里的 $Q \equiv 1/\sin2\varepsilon$. 角动量变化
$$
\frac{\mathrm{d}L\_s}{\mathrm{d}t} = -\Gamma\_T\Longrightarrow C\_Im\_pR^2\dot{\Omega}*p = -\Gamma\_T
$$
可以解得 $t*{\text{do-spin}}=\Omega\_p/\dot{\Omega}\_p=\cdots$.

当然也可以算能量的衰减，
$$
\frac{\mathrm{d}E}{\mathrm{d}t}=\Gamma\_T(n\_s-\Omega\_p)<0
$$
