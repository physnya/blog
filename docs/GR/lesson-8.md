---
title: Lesson 8 Schwarzschild 黑洞
createTime: 2026/03/20 15:20:01
permalink: /GR/lesson-8-schwarzschild-black-hole/
---
接着上节课的讨论：
$$
\left(\frac{\text{d}r}{\text{d}t}\right)^2=E^2-\left(1-\frac{2GM}{r}+\frac{L^2}{r^2}-\frac{2GML^2}{r^3}\right)
$$
Newton 情况下的 trick 是令 $u=GM/r$. 在这里同样用这个技巧，
$$
\begin{aligned}
&\frac{1}{2}\left(\frac{\text{d}}{\text{d}\phi}\frac{1}{r}\right)^2=\frac{E^2-1}{2L}+\frac{GM}{L^2r} - \frac{1}{2r^2}+\frac{GM}{r^3}\\\\
&\frac{\text{d}^2}{\text{d}\phi^2}\left(\frac{1}{r}\right) = \frac{GM}{L^2}-\frac{1}{r}+\frac{3GM}{r^2}\\\\
&\frac{\text{d}^2u}{\text{d}\phi^2} + u = \frac{G^2M^2}{L^2}+3u^2
\end{aligned}
$$
可以先解 RHS 只有前一项的情况，后面作为微扰来求解，也就是分成 $u=u_0+u_1$，其中零阶项就是 Newton 理论的结果，$\displaystyle{u_0=\left(\frac{GM}{L}\right)^2(1+e\cos\phi)}$，直接代入到 RHS 的第二项，获得了一阶项满足的方程：
$$
\frac{\text{d}^2u_1}{\text{d}\phi^2}+u_1 = 3\left(\frac{GM}{L}\right)^4(1+e\cos\phi)^2\approx 6\left(\frac{GM}{L}\right)^4e\cos\phi
$$
解得一阶项是某种进动
$$
u_1 = 3\left(\frac{GM}{L}\right)^4e\textcolor{red}{\phi}\sin\phi
$$
总的轨道方程可以应用一些中学 trick 实现更加简明的物理结果：
$$
\begin{aligned}
u &= \left(\frac{GM}{L}\right)^2\left[1+e\cos\phi+3\left(\frac{GM}{L}\right)^2e\phi\sin\phi\right]\\\\
&\approx\left(\frac{GM}{L}\right)^2\left\{1+e\cos\phi\cos\left[3\left(\frac{GM}{L}\right)^2\phi\right]+\sin\left[3\left(\frac{GM}{L}\right)^2\phi\right]\sin\phi\right\}\\\\
&= \left(\frac{GM}{L}\right)^2\left\{1+e\cos\left[\phi-3\left(\frac{GM}{L}\right)^2\phi\right]\right\}
\end{aligned}
$$
因此周期进动角为
$$
\Delta\phi \approx 6\pi\left(\frac{GM}{L}\right)^2
$$
当然观测上一般算地球的百年对应的水星进动角，大约是 $43''$；而历史上考虑所有大行星影响之后的水星进动角是 $5557''$，观测值是 $5600''$，刚好相差广义相对论修正. 这也因此成为广义相对论最重要的验证之一.

---

下面说光线偏折的理论预言. 现在我们研究的是没有质量的东西，直接用的是测地线方程. 按照前面的运动方程稍作修改，就有
$$
r^2\frac{\text{d}\phi}{\text{d}\lambda}=L,\quad \left(1-\frac{2GM}{r}\right)\frac{\text{d}t}{\text{d}\lambda}=E
$$
另外有
$$
\left(\frac{\text{d}r}{\text{d}\lambda}\right)^2 = E^2-\frac{L^2}{r^2}\left(1-\frac{2GM}{r}\right)
$$
消去参数 $\lambda$，
$$
\left(\frac{1}{r^2}\frac{\text{d}r}{\text{d}\phi}\right)^2 = \left(\frac{E}{L}\right)^2-\frac{1}{r^2}\left(1-\frac{2GM}{r}\right) = \frac{1}{b^2}-\frac{1}{D(r^2)}
$$
这里定义 $L/E=b$，这个量等同于经典力学中的瞄准距离乘以速度，对于光来说是一个守恒量. 这里的轨道方程为无质量的版本，也就是
$$
\frac{\text{d}^2u}{\text{d}\phi^2}+u=3u^2
$$
零阶解是 $u=u_0\cos\phi$，代入求一阶解，最后得到
$$
u(\phi) = u_0\cos\phi+u_0^2(1+\sin^2\phi)
$$
光线偏角是 $r\to\infty$ 的两个解给出的角度之差，也就是 $u(\phi)=0$ 的两个解，解得
$$
\Delta\phi = 4u_0 = \frac{4GM}{r_0}
$$
这个偏角在 1919 年日全食时由 Edington 验证.

---

考虑一些 space time 的有关事情. 我们知道有光锥，理论上来说一个静止的观测者在时间无限长的情况下一定能够看到整个空间，但是如果取一个匀加速观测者，它的光锥应该是：

::: window img no-padding

![](https://vip.123pan.cn/1845440081/ymjew503t0l000dcki2k7suzw55grvuyDIYxAIFxDda1DGxPDwUzAa==.png)

:::

总有一块空间是看不到的. 结合量子效应，会造成很显著的影响，比如一个真空波函数分布在全空间，但是我们看不到，因此只能观测到混态，也就是存在温度这个概念.

在数学上，计算光锥满足的方程：
$$
\left(1-\frac{2GM}{r}\right)\text{d}t^2 =\left(1-\frac{2GM}{r}\right)^{-1}\text{d}r^2
$$
解得
$$
C+t = r+2GM\ln\left\vert1-\frac{r}{2GM}\right\vert,\quad C+t = r+2GM\left(-\frac{r}{2GM}\right) =0
$$
第一个解看不到 $r=2GM$ 内部的任何东西，而内部的另一个光锥 (第二个解) 看不见外面的任何东西，因此这构成了一个黑洞. 这个奇异性存在的原因是，我们的坐标在 $2GM$ 处有一个奇点，导致视界外面的静止观测者看不到内部.

如果一定要进去，那么可以尝试构建一个运动的观测者，看看它的固有时是不是无穷长.