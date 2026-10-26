---
url: /star-planet/lesson-4-ignition-of-sun/index.md
---
我们上节课说了，在 $E\_\* \approx 50\text{ keV}$ 的能量下，$r$ - $E$ 图像上的 de Broglie 波长线与点火距离线相交. 具体的表达式是
$$
E\_\* = \frac{8\pi^2(Z\_1Z\_2e^2)^2}{h^2}m\_\mu,\quad m\_\mu = \frac{m\_1m\_2}{m\_1+m\_2}
$$
但是太阳的能量仍然比这个 $E\_*$ 要小，隧穿概率
$$
P \propto \exp\left\[-\pi\sqrt{\frac{E\_*}{E}}\right]
$$
仍然是一个很小的值. 但是我们知道粒子并不是都处在平均值附近，而是具有一个很宽的分布，因此从微观上试图解释，我们算反应率. 这需要先计算碰撞概率，假设两种粒子的碰撞截面为 $\sigma\_{12}$，得到微元的碰撞概率为
$$
P = n\_1n\_2\sigma\_{12}\Delta v
$$
其中 $\Delta v$ 为两粒子相对速度. 碰撞概率
$$
\Gamma\_{12} = n\_1n\_2\int P(E)\Delta v(E)\sigma\_{12}(E)\text{d}E
$$
这里的 $P(E)$ 是按照能量的粒子分布函数，用 Maxwell 分布律即可，$P(E)\propto e^{-E/(k\_BT)}$，相对速度写为 $\sqrt{2E/m\_\mu}$，然后用 de Broglie 波长来估算相对碰撞截面大小，
$$
\sigma\_{12}\sim \pi\lambda\_{\text{dB}}^2P\_{\text{tunnelling}} \sim\frac{\hbar^2}{2m\_\mu E}e^{-\pi\sqrt{E\_*/E}} = \frac{S(E)}{E}e^{-\pi\sqrt{E\_*/E}}
$$
最终的反应概率
$$
\Gamma\_{12} = n\_1n\_2(k\_BT)^{-3/2}\sqrt{\frac{8}{\pi m\_\mu}}\int S(E)\exp\left\[-\frac{E}{k\_BT}-\pi\sqrt{\frac{E\_\*}{E}}\right]\text{d}E
$$
因此对于点火能量来说，我们需要找到的不是最高的能量，而是一个比较中间的值，这也解释了为什么太阳能够实现聚变点火. 这个结论被称为 Gamov Peak.

***

开始讲第二次作业了，不过我还没写所以不记录了.

第一次作业讲解：平均分 92

> ？？？怎么做到的，我拼尽全力 83

好吧我翻了一下发现我所有扣分都是非学术的内容...

***

开始进入 module 3，有关星系演化的部分.

在一个电磁波场中，一个单电子的运动方程写为
$$
F = eE = E\_0\cos\omega t = m\_e\ddot{x}
$$
这样的运动会造成电磁辐射，在 cgs 制下的辐射 Larmor 公式写作
$$
P\_L = \frac{2\ddot{x}^2q^2}{3c^3}\left\[\frac{\text{E}}{\text{T}}\right]
$$
能流为
$$
S = \frac{c}{8\pi}E\_0^2\left\[\frac{\text{E}}{\text{L}^2\text{T}}\right]
$$
我们将辐射功率和能流的比例记为 $\sigma\_T$ (某种意义上来说这也是一个「截面」)，那么
$$
\sigma\_T =\frac{P\_e}{S} = \frac{2 e^2}{3c^3}\frac{\langle \ddot{x}^2\rangle}{cE\_0^0}\cdot 8\pi = \frac{8\pi}{3}\frac{e^4}{m\_e^2c^4}
$$

> 估算一个简单的二维问题，考虑校园是 $1\text{ km}$ 大的二维圆平面，碰撞「截面」大约是 $\sigma=1\text{ m}$，人的密度可以估计为 $N/\pi R^2$.
>
> 最后的结果大约是每 $30\text{ m}$ 遇到一个人，$l\_{\text{mfp}}\approx 30\text{ m}$. (mean free path)
>
> ***
>
> 如果每遇到一个人改变一次方向，随机行走运动轨迹的均值：$\langle\overline{r}\rangle = 0$，
> $$
> \left\langle\overline{r^2}\right\rangle = \left\langle\overline{r}\cdot\overline{r}\right\rangle = Nl\_{\text{mfp}}^2
> $$
> 如果要走出校园，那么必须要 $\left\langle\overline{r^2}\right\rangle = R^2$，这里需要的步骤数大约是 $10^3$，也可以计算时间，如果是正常走路速度，那么需要 $10\text{ h}$ 走出校园.

对于一个想要从太阳内部逃出来的粒子，也需要经历类似的过程，我们需要 $R\_{\odot}$ 就能计算平均逃逸时间. 有
$$
l\_{\text{mfp}} = \frac{1}{n\_e\sigma\_T} \approx 2\text{ cm},\quad t\_{\text{esc}} \approx 3000\text{ yr.}
$$
