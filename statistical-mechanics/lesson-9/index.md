---
url: /statistical-mechanics/lesson-9/index.md
---
半经典的分布：取基态能量为零，对于一个比较高的能级，$e^{\beta\varepsilon\_i}\gg1$ 且 $e^\alpha\gg1$，取极限之后得到类似 Boltzmann 分布的半经典分布，
$$
a\_i = \omega\_i e^{-\alpha-\beta\varepsilon\_i}
$$
这种近似意味着 $a\_i/\omega\_i\ll1$，也就是所谓的非简并条件，相当于波函数的作用不明显，适用于稀薄气体等体系. 半经典分布的热力学几率为
$$
\ln\Omega\_S{a\_i} = \sum\_i\ln\frac{\omega\_i^{a\_i}}{a\_i!}
$$
最可几分布方法，是在最可能出现的分布附近 Taylor 展开 $\ln\Omega$，判断偏差：
$$
\ln\frac{\Omega({a\_i})}{\Omega({a\_i}\_m)} \approx-\frac{1}{2}\sum(a\_i)\_m\left\[\frac{\delta a\_i}{(a\_i)\_m}\right]^2,\quad \delta a\_i=(a\_i)\_m-a\_i
$$
以 $1\text{ mol}$ 物质为例，这里的 RHS 大约是 $10^{15}$，而 LHS 还仅仅是对数. 所以基本上不会出现最可几分布之外的分布.

***

下面讨论 $\alpha,\beta$ 的物理意义. 考虑两个近独立粒子系统组成一个复合系统，并达到了总的平衡. 那么总的分布的热力学几率为
$$
\ln\Omega\_s{a\_i',a\_j''} = \prod\_i\frac{(\omega\_i')^{a\_i'}}{a\_i'!}\prod\_j\frac{(\omega\_j'')^{a\_j''}}{a\_j''!}
$$
同时要求无粒子交换，但是有热量交换，也就有三个约束条件：
$$
N'=\sum\_ia\_i',\quad N''=\sum\_ja\_j'',\quad E=\sum\_ia\_i'\varepsilon\_i'+\sum\_ja\_j''\varepsilon\_j''
$$
把三个条件并入 Lagrange 函数，用 Lagrange 乘子法，得到
$$
\begin{aligned}
&\frac{\partial\ln\Omega}{\partial a\_{i\_1}'}+\alpha'\frac{\partial\displaystyle{\left(N'-\sum\_ia\_i'\right)}}{\partial a\_{i\_1}'}+\alpha''\frac{\partial\displaystyle{\left(N''-\sum\_ja\_j''\right)}}{\partial a\_{i\_1}'}\\\\
&\quad +\beta\frac{\partial\displaystyle{\left(E-\sum\_ia\_i'\varepsilon\_i'-\sum\_ja\_j''\varepsilon\_j''\right)}}{\partial a'\_{i\_1}} = 0
\end{aligned}
$$
另一个系统类似，得到 $a\_i'=\omega\_i'e^{-\alpha'-\beta\varepsilon'\_i}$ 和 $a\_j''=\omega\_j''e^{-\alpha''-\beta\varepsilon\_j''}$，这两个分布中的 $\beta$ 相同，因此 $\beta$ 应该是和温度有关的一个函数，也就是 $\beta=\beta(T)$. 同理，可以令两个系统之间有粒子数交换和能量交换，得到 $\alpha = \alpha(\mu,T)$.

> 为什么不能只有粒子数交换，没有能量交换？
>
> 这是不物理的，交换粒子就必定交换能量.

***

可分辨粒子体系的 Boltzmann 分布：对于定域系统适用，这时可以对粒子做标记来区分，条件仍然是粒子数和能量守恒. 微观状态数：
$$
\Omega{a\_i} = (C\_N^{a\_1}\cdot\omega\_1^{a\_1})(C\_{N-a\_1}^{a\_2}\cdot\omega\_2^{a\_2})\cdots = \frac{N!}{\displaystyle{\prod\_ia\_i!}}\prod\_i\omega\_i^{a\_i} = N!\prod\_i\frac{\omega\_i^{a\_i}}{a\_i!}
$$
和半经典分布的微观状态数实际上就只相差一个 $N!$，宏观量会有差别，但是最可几分布不会有变化. 为了计算宏观量，先计算配分函数
$$
Z(\beta,y) \equiv \sum\_i\omega\_ie^{-\beta\varepsilon\_i}
$$
各个宏观量分别为：

* $\alpha$：粒子数
  $$
  N = \sum\_ia\_i = e^{-\alpha}\sum\omega\_ie^{-\beta\varepsilon\_i} = e^{-\alpha}Z\Longrightarrow\boxed{\alpha = \ln\frac{Z}{N}}
  $$

* 内能 $U$：
  $$
  U = \sum\_ia\_i\varepsilon\_i = -N\frac{\partial\ln Z}{\partial\beta}
  $$

  > 这里用到经典的求和技巧...

* 物态方程与熵：考虑微分上面内能的微观表达式，
  $$
  \text{d}U = \sum\_ia\_i\text{d}\varepsilon\_i+\sum\_i\varepsilon\_i\text{d}a\_i
  $$
  也就是内能的改变包含能级的改变与占据数的改变. 改变能级必须通过做功的方式，而不通过做功改变能量只能通过传热. 因此我们有做功
  $$
  \mathrm{d}\kern{-4.3pt}\bar{\small\phantom{q}}W = \sum\_kY\_k\text{d}y\_k = \sum\_ia\_i\text{d}\varepsilon\_i = \sum\_ia\_i\left(\sum\_k\frac{\partial\varepsilon\_i}{\partial y\_k}\text{d}y\_k\right)
  $$
  得到广义力的表达式
  $$
  Y\_k = -\frac{N}{\beta}\frac{\partial\ln Z}{\partial y\_k}
  $$
  以及传热
  $$
  \mathrm{d}\kern{-4.3pt}\bar{\small\phantom{q}}Q =T\text{d}S=\sum\_i\varepsilon\_i\text{d}a\_i = \text{d}U-\sum\_ia\_i\text{d}\varepsilon\_i = -N\text{d}\left(\frac{\partial\ln Z}{\partial\beta}\right)+\frac{N}{\beta}\sum\_k\frac{\partial\ln Z}{\partial y\_k}\text{d}y\_k
  $$
  利用 $\ln Z=\ln Z(\beta,y\_k)$ 的全微分得到
  $$
  \text{d}S = \frac{N}{\beta T}\text{d}\left(\ln Z-\beta\frac{\partial\ln Z}{\partial\beta}\right)
  $$
  为了能够积分出 $S$，RHS 必须是一个全微分，因此定义 $\beta=1/(k\_BT)$，得到熵
  $$
  S-S\_0 = Nk\_B\left(\ln Z-\beta\frac{\partial\ln Z}{\partial\beta}\right)
  $$

Boltzmann 关系：
$$
S = k\_B\ln\Omega({a\_i})
$$
