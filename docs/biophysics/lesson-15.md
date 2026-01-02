---
title: Lesson 15 Spatial Patterns & Self-Organization
permalink: /biophysics/lesson-15-spatial-patterns-self-organization/
createTime: 2025/12/30 20:52:20
---
这是最后一节课，我们说一些介绍性的内容.

斑图 (pattern)：有两种可能性，一种是受到外界作用，从各向同性变为具有某种空间模式的状态；另一种则是本身就具有变化为特定空间模式的性质.

果蝇的胚胎发育：有一种蛋白 Bicoid 会在整个胚胎中一维扩散.
$$
\frac{\partial[\text{Bcd}]}{\partial t} = D\frac{\partial^2[\text{Bcd}]}{\partial x^2}-\frac{1}{\tau}[\text{Bcd}]
$$
稳态解是 $[\text{Bcd}](x)=[\text{Bcd}]_0e^{-x/\lambda}$. 其中 $\lambda=\sqrt{D\tau}$ 是某一种特征长度，在果蝇的例子中 $\sim120\,\mu m$，这正好是胚胎的大小.

上面这个模型的问题在于，$\lambda$ 是固定的，所以不能自适应地随着胚胎的生长而改变 Bicoid 蛋白的传输距离. Bicoid 由外部信号引入，但是其浓度差在内部产生了一些力.

Turing 失稳：对于简单的扩散物理模型，
$$
\frac{\text{d}P}{\text{d}tt}=f(P,Q)+D_{\mu}\nabla^2P
$$
两种不同物质的方程联立，得到矩阵方程：
$$
\frac{\partial}{\partial t}\begin{pmatrix}
p\\q
\end{pmatrix} = \begin{pmatrix}
a_{11}+D_p\nabla^2&a_{12}\\
a_{21}&a_{22}+D_q\nabla^2
\end{pmatrix}\begin{pmatrix}
p\\q
\end{pmatrix}
$$
这种线性的方程可以直接 Laplace 变换，原来的 Jacobi 矩阵变为
$$
\begin{pmatrix}
a_{11}-k^2D_p&a_{12}\\
a_{21}&a_{22}-k^2D_q
\end{pmatrix}
$$
在线性代数中，对于这个方程的非稳定解有要求，得到一个数值关系.

原来没有扩散的情况下，判定式为 $\Delta_0=a_{11}a_{22}-a_{12}a_{21}$；定义 $\Delta(k)=\Delta_0-(a_{11}D_p+a_{22}D_q)k^2-+D_pD_qk^4$ 为新的判别式，那么对失稳的要求是 $\Delta(k)>0$.

在一维情况下，某种特征 $k$ 在失稳区间内，能够使得
$$
\lambda(k) = \frac{\tau(k)+\sqrt{\tau^2(k)-4\Delta(k)}}{2}
$$
的值最大，那么从 $\lambda_{\max}$ 对应的 $k$ 开始，这个模式会开始生长，产生一维的条带状斑图.

如果结合 Landau 二级相变理论，那么方程可以写为
$$
\partial_t\phi(\vec{x},t) = \mu\phi-(\nabla^2+q_c^2)\phi+\mathcal{N}(\phi)
$$
其中 RHS 第二项来源于扩散效应. 实际上这个方程绝不仅仅限于 Turing 斑图的研究，在失稳态附近，有大量的相似物理现象构成了符合上述方程的普适类，比如气象学中的 Rayleigh-Bernard 对流、力学上的球壳 wrinkling 等等.

震撼事实：实际上除了大拇指之外的四根手指是来源于 Turing 斑图 —— 如果对周期做 perturbation，可能使小鼠胚胎出现多指；这也解释了为什么多指症没有多双关节手指的，而只有三关节手指的.

