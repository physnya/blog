---
url: /electrodynamics/lesson-29-scattering/index.md
---
自由电子对电磁波的散射：
$$
\ddot{\vec{x}}-\frac{e^2}{6\pi\varepsilon\_0c^3m}\dddot{\vec{x}} = \frac{e}{m}\vec{E}\_0e^{-\text{i}\omega t}
$$
把猜测解 $\vec{x}=\vec{x}\_0e^{-\text{i}\omega t}$ 代入上式，解得：
$$
\vec{x}\_0 = \frac{e\vec{E}\_0}{\displaystyle{m\left(-\omega^2-\frac{\text{i}e^2\omega^3}{6\pi\varepsilon\_0c^3m}\right)}} = \frac{e\vec{E}\_0}{m(-\omega^2-\text{i}\omega\alpha)}
$$
这里的 $\alpha$ 可以化为
$$
\alpha = \frac{2\pi}{\lambda}\cdot\frac{e^2\omega}{6\pi\varepsilon\_0c^2m} =\frac{4\pi\omega}{3\lambda}\cdot\frac{e^2}{4\pi\varepsilon\_0c^2m} = \frac{4\pi\omega}{3\lambda}\cdot r\_e
$$
对于一般的电磁波而言，入射的波长肯定远远大于电子的经典半径，因此可以忽略阻尼项，电子运动是
$$
\vec{x} = -\frac{e\vec{E}\_0}{m\omega^2}e^{-\text{i}\omega t}
$$
根据加速度的辐射公式，散射波的辐射
$$
\vec{E} = \frac{e}{4\pi\varepsilon\_0c^2r}\cdot\hat{n}\times(\hat{n}\times\ddot{\vec{x}})
$$
定义夹角 $\beta = \langle\hat{n},\vec{E}\_0\rangle$，那么具体的辐射电场强度为 (平均)：
$$
\vec{E} = \frac{e\ddot{x}}{4\pi\varepsilon\_0c^2r}\sin\beta = \frac{e^2E\_0}{4\pi\varepsilon\_0mc^2r}\sin\beta
$$
平均辐射能流为
$$
\bar{s} =\frac{e^4E\_0^2}{32\pi^2\varepsilon\_0c^3m^2r^2}\sin^2\beta = \frac{\varepsilon\_0cE\_0r\_e^2}{2r^2}\sin^2\beta
$$
可以通过对立体角积分算出散射功率和散射截面. 微分散射截面为
$$
\frac{\text{d}\sigma}{\text{d}\Omega} = \frac{r\_e^2}{2}(1+\cos^2\theta)
$$

***

对于束缚态电子，多了阻尼项和固有频率项
$$
\ddot{\vec{x}}+\alpha\dot{\vec{x}}+\omega\_0^2\vec{x}=\frac{e}{m}\vec{E}e^{-\text{i}\omega t}
$$
解得
$$
\vec{x} = \frac{e}{m}\frac{\vec{E}e^{-\text{i}(\omega t-\delta)}}{\sqrt{(\omega\_0^2-\omega^2)^2+\omega^2\alpha^2}},\quad \tan\delta = \frac{\omega\alpha}{\omega\_0^2-\omega^2}
$$
这里的平均能流、总功率和散射截面：
$$
\begin{aligned}
&\bar{s} = \frac{e^4E\_0^2}{32\pi^2\varepsilon\_0c^3m^2r^2}\frac{\omega^4}{(\omega\_0^2-\omega^2)^2+\omega^2\alpha^2}\sin^2\beta\\\\
\&P =\oint\bar{s}r^2\text{d}\Omega = \frac{8\pi}{3}r\_e^2\cdot\frac{\omega^4}{(\omega\_0^2-\omega^2)^2+\omega^2\alpha^2}I\_0\\\\
&\sigma = \frac{P}{I\_0} = \frac{8\pi}{3}r\_e^2\cdot\frac{\omega^4}{(\omega\_0^2-\omega^2)^2+\omega^2\alpha^2}
\end{aligned}
$$
当 $\omega\ll\omega\_0$，为 Rayleigh 散射；$\omega\sim\omega\_0$ 共振；$\omega\gg\omega\_0$ 过渡到自由电子的散射.
