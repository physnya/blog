---
url: /electrodynamics/lesson-7-uniqueness-theorem/index.md
---
上节课说到对于静电问题，电荷不移动，没有电流、没有磁场、没有磁场的变化，也就没有感生电场. 这时电场是一个无旋场，是保守的. 我们在静态的条件下得到了介质的有关边值关系，等等.

边值关系：
$$
\hat{n}\_{12}\times(\vec{E}\_2-\vec{E}*1) = 0,,\quad\hat{n}*{12}\cdot(\vec{D}\_2-\vec{D}\_1)=\sigma\_f
$$
其中 $\sigma\_f$ 是界面上的 **自由** 电荷面密度. 现在我们要将这些方程化为 $\varphi$ 的方程，以作为 Poisson 方程的边界条件. 在界面上作一个矩形环路，环路的两条长边无限接近于界面 (宽度趋于零)，积分环路上的电场可以得到电势的边值关系为
$$
\varphi\_1=\varphi\_2
$$
(电势连续) 同理可以对 $\vec{D}$ 做环路积分，得到
$$
\varepsilon\_2\frac{\partial\varphi\_2}{\partial\hat{n}}+\varepsilon\_1\frac{\partial\varphi\_1}{\partial\hat{n}}=\sigma\_f
$$
除了介质之外，静电场还涉及导体这一种特殊的物质. 导体内部不存在稳态电场，达到静电平衡的速度很快.

Poisson 方程：
$$
\nabla^2\varphi=-\frac{\rho}{\varepsilon}
$$
如果研究的区域没有自由电荷，则化为 Laplace 方程，为 $\nabla^2\varphi=0$. 对于一个有固定自由电荷分布的问题，可以通过叠加原理，先写出我们已知的电荷分布产生的电势分布，减去这一部分之后剩下的就是我们要解的方程，这可能是一个 Laplace 方程，问题被简化.

这节课要讨论的是：

* 要具备什么条件才能求解静电问题？
* 所求的解是否唯一？

## 静电问题的唯一性定理

唯一性定理的意义在于，我们在知道唯一解的条件之后，可以去「猜测」实际上的解，简化我们求解的过程.

把一个区域 $V$ 划分为很多小区域 $V\_i$，每一个小区域内介电常数为 $\varepsilon\_i$ (都是各向同性介质). 每个区域给定电荷分布 $\rho(\vec{x})$，$\vec{x}\in V$.

假设存在两个解 $\varphi^{(1)}$ 和 $\varphi^{(2)}$，定义它们的差值为 $\varPhi = \varphi^{(2)}-\varphi^{(1)}$，那么这个 $\varPhi$ 一定满足 Laplace 方程 (因为 $\varphi^{(1)}$ 和 $\varphi^{(2)}$ 满足 Poisson 方程)：
$$
\nabla^2\varPhi=0
$$
同时，因为在介质界面上电势连续，所以差值 $\varPhi$ 也在界面上连续；区域 $V$ 的边界条件分为两类：
$$
\begin{aligned}
\varPhi|*S &= 0\text{ or }\left.\frac{\partial\varPhi}{\partial\hat{n}}\right|*S = 0
\end{aligned}\tag{1}
$$
考虑引入一个 $\psi$，计算：
$$
\nabla\cdot(\psi\nabla\varPhi) = \psi\nabla^2\varPhi+\nabla\psi\cdot\nabla\varPhi
$$
对两边同时体积分：
$$
\begin{aligned}
\text{LHS}&=\iiint*{V}\nabla\cdot(\psi\nabla\varPhi)\text{d}V=\iint*{\partial V}\psi\nabla\varPhi\cdot\text{d}\vec{S}\\\\
\text{RHS}&=\sum\_i\left(\iiint\_{V\_i}\psi\nabla^2\varPhi\text{d}V\_i+\iiint\_{V\_i}\nabla\psi\cdot\nabla\varPhi\text{d}V\_i\right)\\\\
&=\sum\_i\iiint\_{V\_i}\nabla\psi\cdot\nabla\varPhi\text{d}V\_i
\end{aligned}
$$
要求 $\psi\_i=\varepsilon\_i\varPhi$，则
$$
\begin{aligned}
\text{LHS} &= \sum\_i\iint\_{\partial V\_i}\varepsilon\_i\varPhi\nabla\varPhi\cdot\text{d}\vec{S}*i=\sum\_i\varepsilon\_i\iint*{\partial V\_i}\varPhi\nabla\varPhi\cdot\text{d}\vec{S}*i
\end{aligned}
$$
注意到在每个内部的界面上，都有
$$
\varepsilon\_i\frac{\partial\varPhi\_i}{\partial\hat{n}}-\varepsilon\_j\frac{\partial\varPhi\_j}{\partial\hat{n}} = 0,,\quad\varPhi\_i=\varPhi\_j
$$
所以上述积分加起来后，界面上的积分是零；只剩下对整个区域外表面的积分：
$$
\text{LHS} = \sum*{i}\varepsilon\_i\iint\_{\partial V}\varPhi\nabla\varPhi\cdot\text{d}\vec{S}
$$
但是我们上面得到的两类边界条件 (1) (边界上 $\varPhi$ 自身或者自身的法向导数为零) 使得上面的这个积分恒为零.

对于等号右侧，有
$$
\text{RHS} = \sum\_i\varepsilon\_i\iiint\_{V\_i}|\nabla\varPhi|^2\text{d}V\_i=0
$$
一个正定的被积函数积分得零，于是 $\nabla\varPhi=0$，也就是 $\varPhi=\text{const.}$ 解唯一确定.

***

上述讨论建立在边界条件为 (1) 的基础上. 但是很多问题的讨论区域是导体外的空间 $V$，这时候边界条件是：

* 导体表面 $\varphi$ 是常数.
* 导体表面总电量固定，所以 $\partial\varphi/\partial\hat{n}$ 的面积分是常数.
* 当然，多个导体时，可以有的导体知道总电量、有的导体知道电势.

这两个条件还是能够保证
$$
\sum\_i\varepsilon\_i\iint\_{\partial V\_i}\varPhi\nabla\varPhi\cdot\text{d}\vec{S}=0
$$
(大外表面一直都是零)
