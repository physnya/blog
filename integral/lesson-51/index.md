---
url: /integral/lesson-51/index.md
---
## 多重积分

$\Omega\subseteq\R^n$ 的带权重的 $n$ 维 volume.

/Definition/ (矩体上的积分)

> (1) 矩体上的积分：
>
> $I=\[a,b]\times\[c,d]$，剖分 $\[a,b]=\bigcup\_i S\_i$，$\[c,d]=\bigcup\_jT\_j$，$I=\bigcup\_{i,j}S\_i\times T\_j$，选取代表点 $\xi\_{ij}\in S\_i\times T\_j$.
>
> (2) Darboux 上下和：(不用选点)
> $$
> \begin{aligned}
> \iint f&=\lim\sum\_{i,j}f(\xi\_{ij})|S\_i||T\_j|\\
> &=\inf U(P,f)=\sup L(P,f)
> \end{aligned}
> $$
> 上和
> $$
> U(P,f)=\sum\_{i,j}|S\_i|\times|T\_j|\sup\_{S\_i\times T\_j}f(x,y)
> $$
> 下和
> $$
> L(P,f)=\sum\_{i,j}|S\_i|\times|T\_j|\inf\_{S\_i\times T\_j}f(x,y)
> $$

/Theorem/

> $f$ 在 $I$ 上可积
>
> $\Longleftrightarrow$ $\underset{P}{\inf}U(P,f)=\underset{P}{\sup}L(P,f)$ (此值称为积分)
>
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist$ 剖分 $P$ 使得 $U(P,f)-L(P,f)<\varepsilon$.

/Definition/ (一般有界区域 $D\subseteq\R^n$，积分有界函数 $f$)

> 取矩体 $I\supseteq D$，将 $f$ 扩充为
> $$
> \tilde f(\vec{x})=\left{\begin{array}{ll}
> f(\vec{x})&\vec{x}\in D\\
> 0&\vec{x}\notin D
> \end{array}\right.
> $$
> 定义一般的积分为
> $$
> \iint\_Df=\iint\_I\tilde f
> $$

/Theorem/ (Riemann - Lebesgue 积分)

> $f$ 在矩体 $I$ 上可积
>
> $\Longleftrightarrow$ $f$ 有界，且 $\text{disc}f$ 零测 ($n$ 维 volume 为零)

这样写完之后，我们发现复杂度比我们之前想象的要高. 现在我们要问：如何判断 $f$ 在一般区域 $D$ 上是否可积？

设 $f$ 在 $I$ 上有定义，则 $\tilde f=f\cdot\chi\_D$.

定义 $D$ 的特征函数：
$$
\chi\_D(\vec{x})=\left{\begin{array}{ll}
1&\vec{x}\in D\\
0&\vec{x}\notin D
\end{array}\right.
$$
之前的定理被转化为：$f$ 在 $D$ 上可积 $\Longleftrightarrow$ $f\cdot\chi\_D$ 在 $I$ 上可积 $\Longleftrightarrow$ $f\chi\_D$ 在 $I$ 上有界，且 $\text{disc}(f\chi\_D)$ 零测.

记 $f$ 的连续点的集为 $C(f)$，有如下命题：

/Claim/

> 若 $f,g$ 在 $x\_0$ 处连续 $\Longrightarrow$ $fg$ 在 $x\_0$ 处连续.

(证明上节课结尾说了)

为保证 $f$ 在 $D$ 上可积，只需 (充分条件)：

* $f$ 在 $D$ 上有界；
* $\text{disc}(f)$ 零测；
* $\text{disc}(\chi\_D)$ 零测；

/Remark/

> 连续函数在某些很坏的区域 $D$ 上完全有可能不可积. 这一点我们在一维情形里面很难遇到.

/Example/

> $D\subseteq\[0,1]\times\[0,1]$，$D={(x,y)|x\notin\mathbb{Q};x,y\in\[0,1]}$.
>
> $f=1$ 在 $D$ 上不可积. 为验证，我们计算间断点集的测度：
>
> * 对于 $(x,y)\in D,x\notin\mathbb{Q}$，发现周围任意近的点都有有理数，所以这个点是间断点；
> * 对于 $(z,w)\in D,z\in\mathbb{Q}$，发现周围任意近的点都有无理数，所以这个点是间断点.
>
> 因此，$\text{disc}(f\chi\_D)=\text{disc}(\chi\_D)=\[0,1]\times\[0,1]\supseteq D$，甚至比 $D$ 还要大，不是零测的.
>
> 这样我们就证明了 $f=1$ 在 $D$ 上不可积，也就是无法定义 $\text{area}(D)$ (面积).
>
> > 也可以定义高维的 $n$ 维体积：
> > $$
> > \mathcal{Vol}(\Omega)=\int\cdots\int\_\Omega1\cdot\text{d}x\_1\cdots\text{d}x\_n
> > $$
>
> (对于 $\Omega\subseteq\R^n$ 进行定义)

如何具体写出 $\text{disc}(\chi\_D)$？

${D$ 的内点$}$ 记为 $\overset{\circ}{D}$ ($D$ 的内部)，称 $x\in\overset{\circ}{D}$ $\Longleftrightarrow$ $\exist B\_r(\vec{x})\subseteq D$.

若 $x\in\overset{\circ}{D}$，则 $x$ 是 $\chi\_D$ 的连续点. 记 $D|\overset{\circ}{D}$ 为 $\partial D$ 为 $D$ 的边界，可知 $\overset{\circ}{D}\subseteq C(\chi\_D)$.

设 $D$ 是闭集 ($D$ 是 $\R^n$ 的闭集)：$\forall y\notin D$，由 $D^C$ 开知，$\exist B\_r(y)\subseteq D^C$，则 $\chi\_D$ 在 $B\_r(y)$ 上恒为零 $\Longrightarrow$ $D^C\subseteq C(\chi\_D)$.

结合上面两个结论，可知 $\text{disc}(\chi\_D)=\partial D$. 此后我们在讨论积分时，都假设 $\partial D$ 零测.

总结：对于 $\R^n$ 的有界闭集 $D$，假设 $\partial D$ 零测 (即 $\text{disc}(\chi\_D)$ 零测)，则 $f$ 在 $D$ 上可积 $\Longleftrightarrow$ $f$ 在 $D$ 上有界，且 $\text{disc}(f)$ 零测.

## 多重积分的性质

1. 关于被积函数线性
   $$
   \int\_D(\alpha f+\beta g)=\alpha\int\_Df+\beta\int\_Dg
   $$

2. 关于积分区域可加性
   $$
   \int\_{D\_1\cup D\_2}f=\int\_{D\_1}f+\int\_{D\_2}f-\int\_{D\_1\cap D\_2}f
   $$
   (与离散数学中的容斥原理相似)

3. 积分不等式

   设 $f(\vec{x})\leq g(\vec{x})$，$\forall\vec{x}\in D$，则
   $$
   \int\_Df\leq\int\_Dg
   $$
   绝对值不等式：
   $$
   \left|\int\_Df\right|\leq\int\_D|f|
   $$
   (证明可以从 $-|f|\leq f\leq|f|$ 出发)

4. 积分中值定理

   设 $D$ 是有界闭集，且道路连通，设 $f$ 在 $D$ 上连续，则 $\exist\vec{a}\in D$ 使得
   $$
   f(\vec{a})=\frac{\int\_Df}{\mathcal{Vol}(D)}
   $$
   ($f$ 在 $D$ 上积分的平均值可由 $f$ 在某点处的值取到)

/Proof/ (2)

> 取矩体 $I\supseteq D\_1\cup D\_2$. 要证明的变为：
> $$
> \int\_If\chi\_{D\_1\cup D\_2}=\int\_If(\chi\_{D\_1}+\chi\_{D\_2}-\chi\_{D\_1\cap D\_2})
> $$
> 也就是要证：
> $$
> \chi\_{D\_1\cup D\_2}=\chi\_{D\_1}+\chi\_{D\_2}-\chi\_{D\_1\cap D\_2}
> $$
> 如下表：
>
> | $x\in$ | $\chi\_{D\_1}$ | $\chi\_{D\_2}$ | $\chi\_{D\_1\cap D\_2}$ | $\chi\_{D\_1\cup D\_2}$ |
> | :----: | :----------: | :----------: | :------------------: | :------------------: |
> | 1 区域 |      1       |      0       |          0           |          1           |
> | 2 区域 |      0       |      1       |          0           |          1           |
> | 3 区域 |      1       |      1       |          1           |          1           |
> | 4 区域 |      0       |      0       |          0           |          0           |
>
> 得证.
>
> ***
>
> 特例：在 $\R^n$ 中，$D\_1$ 与 $D\_2$ 沿着公共的 $n-1$ 维超曲面粘起来，记 $D\_1\cap D\_2=C$ 是 $n-1$ 维超曲面. 由 $f$ 可积，知 $f$ 有界，$-M\leq f\leq M$ ($M$ 为正常数)
> $$
> \begin{aligned}
> \int\_{D\_1\cap D\_2}f&\leq\int\_{D\_1\cap D\_2}M=M\cdot\mathcal{Vol}*n(D\_1\cap D\_2)\\\\
> &\leq M\cdot\mathcal{Vol}*{n-1}(D\_1\cap D\_2)\cdot\varepsilon\quad(\forall\varepsilon>0)
> \end{aligned}
> $$
> 所以实际上上述积分值为零，在这种特例中 $\chi\_{D\_1\cup D\_2}=\chi\_{D\_1}+\chi\_{D\_2}$.

/Proof/ (4)

> $D$ 为有界闭集，$f$ 连续 $\Longrightarrow$ $f$ 在 $D$ 上有最大值 $f(x\_1)$ 和最小值 $f(x\_2)$.
>
> 从而，$f(x\_2)\leq f(x)\leq f(x\_1)$，$\forall x\in D$.
> $$
> f(x\_2)\mathcal{Vol}(D)=\int\_Df(x\_2)\leq\int\_Df(x)\leq\int\_Df(x\_1)=f(x\_1)\mathcal{Vol}(D)
> $$
> 所以中间的 $\int\_Df/\mathcal{Vol}(D)\in\[f(x\_2),f(x\_1)]$ 是介值，由介值定理证毕.

## 计算方法

有两种：Fubini 定理 (化为累次积分) & 换元公式

### Fubini 定理

设 $I$ 是一个矩形，$I=\[a,b]\times\[c,d]$，$f\in C(I)$. 有 Riemann 和：
$$
\begin{aligned}
\iint\_If(x,y)&=\lim\sum f(x\_i,y\_j)\Delta x\_i\Delta y\_j\\
&\approx\sum\_{i=1}^n\sum\_{j=1}^mf(x\_i,y\_j)\Delta x\_i\Delta y\_j
\end{aligned}
$$

> 数表中所有数的和 $\sum\_i\sum\_ja\_{ij}$，有两种求法：先对列求和，先对行求和. 这两者是相等的，这一结论被称为离散数学中的 Fubini 定理.

上述式子可以继续计算：
$$
\begin{aligned}
&=\sum\_{i=1}^n\Delta x\_i\underset{\text{Riemann sum of 1 dimension}}{\underline{\left(\sum\_{j=1}^mf(x\_i,y\_j)\Delta y\_j\right)}}\sim\sum\_{i=1}^n\Delta x\_i\left(\int\_c^df(x\_i,y)\text{d}y\right)\\
&=\sum\_{i=1}^n\underset{\text{Riemann sum of 1 dimension}}{\underline{\Delta x\_i\cdot F(x\_i)}}\sim\int\_a^bF(x)\text{d}x
\end{aligned}
$$
以上是一种简单的推理.

/Theorem/ (Fubini 定理)

> 设 $f$ 在 $\[a,b]\times\[c,d]$ 上可积，且对于每个 $x\in\[a,b]$，积分
> $$
> \int\_c^df(x,y)\text{d}y
> $$
> 存在，记其值为 $F(x)$，则 $F$ 在 $\[a,b]$ 上可积，且有
> $$
> \int\_{\[a,b]\times\[c,d]}f=\int\_a^bF(x)\text{d}x
> $$
