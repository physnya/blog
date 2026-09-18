---
url: /star-planet/lesson-12-resonance/index.md
---
## Resonance

以 $3:2$ 为例，resonance angle 是 $\phi\_{12}=3\lambda\_2-2\lambda\_1-\omega\_2$ (其中 $\omega\_2$ 是第二颗行星轨道的偏角，$\lambda$ 是两颗星的位置角度). 它们之间夹角的变化率：
$$
\langle\dot{\phi}*{12}\rangle=\langle 3n\_2-2n\_1-\dot{\omega}*2\rangle\approx 0
$$
角度还可以写成
$$
\phi*{12}=2(\lambda\_2-\lambda\_1)+(\lambda\_2-\omega\_2)
$$
如果偏心率不是很大，那么 $\lambda\_2\approx\lambda\_1$，而第二项是所谓的 conjunction $M\_2$. 这个 $\lambda$ 是以近日点作为起点计算的转角，因此当 $\phi*{12}=0$ 时 (resonance 发生)，两颗星体都在近日点，也就是轨道最靠近的位置.

上面减去的是第二颗星轨道的偏角，所以也可以说是 $\phi\_{12,2}$；下面研究 $\phi\_{12,1}$，也就是
$$
\phi\_{12,1} = 3\lambda\_2-2\lambda\_1-\omega\_1=3(\lambda\_2-\lambda\_1)+(\lambda\_1-\omega\_1)
$$
仍然是 $0+M\_1$. resonance angle 一般是不会变化的，是一个守恒量.

在 conjunction point 附近，内部的行星在向后吸引靠外的那颗行星，因此外侧的行星失去一些角动量；但是失去角动量意味着速度更快了，所以新的一次 conjunction 会延迟发生.

resonance forcing equations：(for $j+1:j$ resonance)
$$
\begin{aligned}
&\dot{a} = 2(j+\delta\_1)G\_e^jq\_1n\_1ae\sin\phi\_{\text{res}}\\\\
&\dot{e} = G\_e^jq\_1n\_1\sin\phi\_{\text{res}}\\\\
&\dot{\phi}*{\text{res}} = -\Delta n*{\text{res}}+G\_e^j\frac{q\_1n\_1\cos\phi\_{\text{res}}}{e}
\end{aligned}
$$
当然这些计算是非常 hardcore 的力学理论，现在很多人们习惯直接模拟 $N$-body 的 Newton 方程，然后强行解出这些问题.

## 3-Body Problem

我们只讨论 circular restricted 3-body problem，也就是两体相互绕转、第三体质量很小的限制性三体问题.

坐标系中心建立在两个更重的天体的质心位置，同时我们认为这两个天体的轨道偏心率是 $0$. 于是，
$$
\begin{aligned}
\frac{\mathrm{d}^2r}{\mathrm{d}t^2}&=\ddot{\vec{r}}+\vec{\omega}\times\dot{\vec{r}}+\omega\times(\dot{\vec{r}}+\vec{\omega}\times\vec{r})\\\\
\Longrightarrow \ddot{\vec{r}} &= (\underset{\text{Coriolis}}{\underline{-2\vec{\omega}\times\dot{\vec{r}}}})+(\underset{\text{centrifugal}}{\underline{-\vec{\omega}\times(\vec{\omega}\times\vec{r}})})-\nabla\phi
\end{aligned}
$$
在旋转系中，有 Coriolis 力和离心力. 现在依旧是两边同时点乘一个 $\dot{\vec{r}}$，得到
$$
\begin{aligned}
\frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}t}\left(\dot{r}^2\right) &= 0-(\vec{\omega}\times\vec{r})\cdot(\dot{\vec{r}}\times\vec{\omega})-\dot{\vec{r}}\cdot\nabla\phi
\= \frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}t}\left(\vec{\omega}\times\vec{r}\right)^2-\frac{\mathrm{d}\phi}{\mathrm{d}t}
\end{aligned}
$$
得到一个运动积分，
$$
\mathcal{J} = \frac{1}{2}r^2+\phi-\frac{1}{2}(\vec{\omega}\times\vec{r})^2
$$
这被称为 Jacobian energy. 我们可以定义有效势能为 $\displaystyle{\phi\_{\text{eff}}=\phi-\frac{1}{2}(\vec{\omega}\times\vec{r})^2}$.

定义 $r\_{12}=d$ (fixed)，$r\_{13}=r\_1$，$r\_{23}=r\_2$，第三颗天体到两颗大天体质心的距离为 $r$. 这时候我们可以写出具体的有效势能，
$$
\phi\_{\text{eff}} = -\frac{Gm\_1}{r\_1}-\frac{Gm\_2}{r\_2}-\frac{1}{2}\omega^2r^2
$$
小天体 $x$ 方向受力为
$$
\phi\_{\text{eff},x}=-\frac{Gm\_1}{r\_1^3}(x-x\_1)-\frac{Gm\_2}{r\_2^3}(x-x\_2)-\omega^2x
$$
而且我们知道 $\displaystyle{x\_1=-\frac{m\_2}{m\_1+m\_2}d}$，$\displaystyle{x\_2=\frac{m\_1}{m\_1+m\_2}d}$. 同理，$y$ 方向是
$$
\phi\_{\text{eff},y}=-\frac{Gm\_1}{r\_1^3}y-\frac{Gm\_2}{r\_2^3}y-\omega^2y
$$
先看 $y$ 方向平衡. 有两种情况：第一种是简单的 $y=0$；另一种是 $r\_1=r\_2=d$，也就是三者形成等边三角形 (这里可以直接解出来两个 Lagrange 点，$L\_4$ 和 $L\_5$).

对于 $y=0$，$x$ 方程为
$$
-\frac{Gm\_1}{|x-x\_1|^3}(x-x\_1)-\frac{Gm\_2}{|x-x\_2|^3}(x-x\_2)-\omega^2x=0
$$
有三个解.
