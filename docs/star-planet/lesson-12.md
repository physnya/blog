---
title: Lesson 12 Resonance & 3-Body
createTime: 2026/05/22 14:19:23
permalink: /star-planet/lesson-12-resonance/
---
## Resonance

以 $3:2$ 为例，resonance angle 是 $\phi_{12}=3\lambda_2-2\lambda_1-\omega_2$ (其中 $\omega_2$ 是第二颗行星轨道的偏角，$\lambda$ 是两颗星的位置角度). 它们之间夹角的变化率：
$$
\langle\dot{\phi}_{12}\rangle=\langle 3n_2-2n_1-\dot{\omega}_2\rangle\approx 0
$$
角度还可以写成
$$
\phi_{12}=2(\lambda_2-\lambda_1)+(\lambda_2-\omega_2)
$$
如果偏心率不是很大，那么 $\lambda_2\approx\lambda_1$，而第二项是所谓的 conjunction $M_2$. 这个 $\lambda$ 是以近日点作为起点计算的转角，因此当 $\phi_{12}=0$ 时 (resonance 发生)，两颗星体都在近日点，也就是轨道最靠近的位置.

上面减去的是第二颗星轨道的偏角，所以也可以说是 $\phi_{12,2}$；下面研究 $\phi_{12,1}$，也就是
$$
\phi_{12,1} = 3\lambda_2-2\lambda_1-\omega_1=3(\lambda_2-\lambda_1)+(\lambda_1-\omega_1)
$$
仍然是 $0+M_1$. resonance angle 一般是不会变化的，是一个守恒量.

在 conjunction point 附近，内部的行星在向后吸引靠外的那颗行星，因此外侧的行星失去一些角动量；但是失去角动量意味着速度更快了，所以新的一次 conjunction 会延迟发生.

resonance forcing equations：(for $j+1:j$ resonance)
$$
\begin{aligned}
&\dot{a} = 2(j+\delta_1)G_e^jq_1n_1ae\sin\phi_{\text{res}}\\\\
&\dot{e} = G_e^jq_1n_1\sin\phi_{\text{res}}\\\\
&\dot{\phi}_{\text{res}} = -\Delta n_{\text{res}}+G_e^j\frac{q_1n_1\cos\phi_{\text{res}}}{e}
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
= \frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}t}\left(\vec{\omega}\times\vec{r}\right)^2-\frac{\mathrm{d}\phi}{\mathrm{d}t}
\end{aligned}
$$
得到一个运动积分，
$$
\mathcal{J} = \frac{1}{2}r^2+\phi-\frac{1}{2}(\vec{\omega}\times\vec{r})^2
$$
这被称为 Jacobian energy. 我们可以定义有效势能为 $\displaystyle{\phi_{\text{eff}}=\phi-\frac{1}{2}(\vec{\omega}\times\vec{r})^2}$.

定义 $r_{12}=d$ (fixed)，$r_{13}=r_1$，$r_{23}=r_2$，第三颗天体到两颗大天体质心的距离为 $r$. 这时候我们可以写出具体的有效势能，
$$
\phi_{\text{eff}} = -\frac{Gm_1}{r_1}-\frac{Gm_2}{r_2}-\frac{1}{2}\omega^2r^2
$$
小天体 $x$ 方向受力为
$$
\phi_{\text{eff},x}=-\frac{Gm_1}{r_1^3}(x-x_1)-\frac{Gm_2}{r_2^3}(x-x_2)-\omega^2x
$$
而且我们知道 $\displaystyle{x_1=-\frac{m_2}{m_1+m_2}d}$，$\displaystyle{x_2=\frac{m_1}{m_1+m_2}d}$. 同理，$y$ 方向是
$$
\phi_{\text{eff},y}=-\frac{Gm_1}{r_1^3}y-\frac{Gm_2}{r_2^3}y-\omega^2y
$$
先看 $y$ 方向平衡. 有两种情况：第一种是简单的 $y=0$；另一种是 $r_1=r_2=d$，也就是三者形成等边三角形 (这里可以直接解出来两个 Lagrange 点，$L_4$ 和 $L_5$).

对于 $y=0$，$x$ 方程为
$$
-\frac{Gm_1}{|x-x_1|^3}(x-x_1)-\frac{Gm_2}{|x-x_2|^3}(x-x_2)-\omega^2x=0
$$
有三个解.