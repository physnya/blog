---
url: /integral/fh39b2a4/index.md
---
# 高等微积分 Lesson 24

## Riemann 积分

来自于 Archimedes 算面积的方法.
$$
\int\_a^bf(x)\text{d}x=\lim\_{\lambda(p)\to0}\sum\_{i=1}^nf(\xi\_i)\Delta x\_i,,\quad\lambda(p)=\max\_i{|I\_i|=\Delta x\_i}
$$
几何意义是对非负的$f$，$\int\_a^bf=f$在$x$轴上方的图像及$x=a$、$x=b$、$y=0$围成的面积. 一般的$f$而言，$\int\_a^bf$是面积的代数和，即$S\_{\text{above }x}-S\_{\text{below }x}$.

如何判断$f$是否可积呢？

/Claim/ （必要性）

> 可积函数一定有界. 也就是，$f\in\mathcal{R}(\[a,b])$ $\Longrightarrow$ $f$在$\[a,b]$上有界.

以下假设$f$有界，可以对积分引入等价定义，这个定义虽然脱离了几何，但是避免了选点的麻烦.

Darboux 上和：
$$
U(P,f)=\sum\_{i=1}^n(\sup\_{x\in I\_i}f(x))\Delta x\_i
$$
Darboux 下和：
$$
L(P,f)=\sum\_{i=1}^n(\inf\_{x\in I\_i}f(x))\Delta x\_i
$$
若$P$细分成$P'$，即引入剖分点，则$U(P',f)\leq U(P,f)$，$L(P',f)\geq L(P,f)$. 由此知，$\forall$剖分$P\_1,P\_2$有
$$
L(P\_1,f)\leq L(P\_1\cup P\_2,f)\leq U(P\_1\cup P\_2,f)\leq U(P\_2,f)
$$
可知，$\underset{P}{\inf}U(P,f)$存在，记为$\text{U}$；$\underset{P}{\sup}L(P,f)$存在，记为$\text{L}$，且$\text{L}\leq\text{U}$.

/Theorem/

> 对有界的$f$，有$f$可积 $\Longleftrightarrow$ $\text{U}=\text{L}$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist$剖分$P$使得$U(P,f)-L(P,f)<\varepsilon$.
>
> 进一步有$\int\_a^bf=\text{L}=\text{U}$.

这样定义积分的好处是，不涉及“选点方案”，不需要处理极限的存在性问题，只需要对某一个$\varepsilon>0$，找一个剖分$P$使得$U(P,f)-L(P,f)<\varepsilon$.
$$
\begin{aligned}
U(P,f)-L(P,f)&=\sum\_{i=1}^n\sup\_{x\in I\_i}f(\alpha)|I\_i|-\sum\_{i=1}^n\inf\_{y\in I\_i}f(y)|I\_i|\\
&=\sum\_{i=1}^n\sup\_{x,y\in I\_i}(f(x)-f(y))|I\_i|
\end{aligned}
$$
/Definition/

> $\sum\_{i=1}^n\sup\_{x,y\in I\_i}(f(x)-f(y))|I\_i|$叫做$f$在$I\_i$上的振幅.

这些是上节课的内容，我们略去了对上面定理的证明，这些能在去年的课程回放中找到（艾神讲不完课了）

/Theorem/ （Riemann-Lebesgue）

> $f$在$\[a,b]$上可积 $\Longleftrightarrow$ $f$在$\[a,b]$上有界，且$f$在$\[a,b]$上的间断点构成的集合$D(f)$是零测集.

其中，间断点集合$D(f)={x\in\[a,b]|x$是$f$的间断点$}$.

这个定理在去年上课的时候详细讲解了证明方法，但是讲了两个多小时，今年没有时间，所以我们下面用一种简单的方法讲一讲.

/Definition/

> 称$E\subseteq\R$是零测集，如果$\forall\varepsilon>0$，$\exist$可数多个开区间$J\_1,J\_2,\cdots,J\_n$使得
> $$
> \bigcup\_{k=1}^\infty J\_k\supseteq E\text{ and }\sum\_{k=1}^\infty|J\_k|<\varepsilon
> $$
> （直观理解是用总长度$<\varepsilon$的材料可以覆盖住$E$，$\forall\varepsilon>0$ $\Longrightarrow$ $E$长度是$0$.）

Riemann-Lebesgue 定义的$f$可积 $\Longleftrightarrow$ $f$有界，且$f$的间断点集很小（零测）.

/Theorem/ （Riemann-Lebesgue 的推论）

> 连续函数皆可积.

一些零测集的例子：有限点集、可数集、$\mathbb{Q}$、零测集的子集……

/Claim/

> 可数多个零测集之并是零测的.

/Proof/

> 设$E=\underset{n=1}{\overset{\infty}{\bigcup}}E\_n$，且每个$E\_n$都是零测集，来证明$E$也是零测集.
>
> $\forall\varepsilon>0$，有$E\_n$零测的定义知道$\exist$开区间${J\_{n,i}}*{i=1}^\infty$，使得
> $$
> \bigcup*{i=1}^\infty J\_{n,i}\supseteq E\_n,,\quad\sum\_{i=1}^\infty|J\_{n,i}|<\frac{\varepsilon}{2^2}\\
> \Longrightarrow\bigcup\_{n=1}^\infty\bigcup\_{i=1}^\infty J\_{n,i}\supseteq\bigcup\_{n=1}^\infty E\_n=E\\
> \text{and }\sum\_{n=1}^\infty\sum\_{i=1}^\infty|J\_{n,i}|<\sum\_{n=1}^\infty\frac{\varepsilon}{2^n}=\varepsilon
> $$
> 验证${J\_{n,i}}*{n,i\in\mathbb{Z}*+}$是可数多个开区间，用对角线法则（和 Dedekind 分割类似）.

证毕.

现在就能尝试解释 Riemann-Lebesgue 定理.

$U(P,f)-L(P,f)=\sum\_{i=1}^n(f$在$I\_i$上的振幅$)\cdot|I\_i|$，关心$f$在$I\_i$上的振幅.

step 0：用振幅刻画连续 / 间断点，
$$
\text{osc}(f,x,r)=\sup\_{y,z\in(x-r,x+r)\cap\[a,b]}(f(y)-f(z))
$$
这就是$f$在$x$的$r$邻域中的振幅，显然$\text{osc}(f,x,r)$随着$r$的减小而减小，可知当$\text{osc}(f,x,r)$不断减小趋于极限值时，会得到
$$
\text{osc}(f,x)=\lim\_{r\to0+}\text{osc}(f,x,r)
$$
简称为$f$在$x$附近的振幅.

下面引入引理：$x$是$f$的间断点 $\Longleftrightarrow$ $\text{osc}(f,x)>0$，即$x$是连续点 $\Longleftrightarrow$ $\text{osc}(f,x)=0$.

/Proof/ （引理证明）

> “$\Longrightarrow$”证明：设$f$在$x$处连续，$\forall\varepsilon>0$，$\exist\delta>0$使得$\forall|y-x|<\delta$有$|f(y)-f(x)|<\varepsilon/2$，$\forall y,z\in(x-\delta,x+\delta)\cap\[a,b]$有$|f(y)-f(x)|<\varepsilon/2$和$|f(z)-f(x)|<\varepsilon/2$.
>
> 所以$|f(y)-f(z)|<\varepsilon$，也就是$\text{osc}(f,x,\delta)\leq\varepsilon$，进而$\forall0\<r<\delta$有
> $$
> \text{osc}(f,x,r)\leq\text{osc}(f,x,\delta)<\varepsilon
> $$
> 表明：
> $$
> \text{osc}(f,x)=\lim\_{r\to0+}\text{osc}(f,x,r)=0
> $$
> “$\Longleftarrow$”证明：设$\text{osc}(f,x)=0$，由定义知道$\forall\varepsilon>0$，$\exist\delta>0$使得$\forall0\<r<\delta$有$\text{osc}(f,x,r)<\varepsilon$，而$\text{osc}(f,x,r)=\sup|f(y)-f(z)|$.
>
> 所以$\forall y,z\in(x-r,x+r)\cap\[a,b]$，有$|f(y)-f(z)|<\varepsilon$，取$z=x$，知道$\forall y\in(x-r,x+r)\cap\[a,b]$有$|f(y)-f(x)|<\varepsilon$，表明$f$在$x$处连续.

证毕.

step 1：$f$可积 $\Longrightarrow$ $D(f)$零测.

由引理，$D(f)={x|\text{osc}(f,x)>0}=\underset{n=1}{\overset{\infty}{\bigcup}}A\_{\frac{1}{n}}$.

（定义：$A\_\varepsilon={x|\text{osc}(f,x)\geq\varepsilon}$）

只要证明，每个$A\_\frac{1}{n}$零测，就能证明$D(f)={x|\text{osc}(f,x)>0}=\underset{n=1}{\overset{\infty}{\bigcup}}A\_{\frac{1}{n}}$也零测.

由$f$可积，再使用上面已经叙述过的定理，得到$\forall\varepsilon>0$，$\exist$剖分$P$使得
$$
U(P,f)-L(P,f)<\frac{\varepsilon}{n}
$$
我们要来仔细地研究左边的估计. 取剖分$P={x\_0=a\<x\_1<\cdots\<x\_m}$，这里$I\_j$分两支，其中第 I 类是$I\_j$内部和$A\_\frac{1}{n}$有关的，第 II 类是$I\_j$内部和$A\_\frac{1}{n}$无关的. 对于每一个 I 类$I\_j$，其内部有一点$x\in A\_\frac{1}{n}$，$\text{osc}(f,x)\geq\frac{1}{n}$，也就是$\underset{r\to0+}{\lim}\text{osc}(f,x,r)\geq\frac{1}{n}$.

取$(x-r,x+r)\subseteq I\_j$，推出$f$在$I\_j$上的振幅$\geq\text{osc}(f,x,r)\geq\text{osc}(f,x)\geq\frac{1}{n}$，代回就看出：
$$
\frac{\varepsilon}{n}>U(P,f)-L(P,f)=\sum\_{i}(f\text{'s amplitude in }I\_j)|I\_j|\geq\sum\_{I\_j\text{ of I type}}\frac{1}{n}|I\_j|
$$
所以，
$$
\sum\_{I\_j\text{ of I type}}|I\_j|<\varepsilon
$$
由第 II 类$I\_j$内部没有$A\_\frac{1}{n}$点，所以
$$
A\_\frac{1}{n}\subseteq\bigcup\_{I\_j\text{ of I type}}I\_j\cup{x\_0,x\_1,\cdots,x\_m}
$$
我们适当扩大 I 类$I\_j$为开区间$x\_t$，用小的开区间盖住，就能把“坏点”$A\_\frac{1}{n}$被一族开区间覆盖，这些区间的总长度$<2\varepsilon$.

step 2：$D(f)$零测 $\Longrightarrow$ $f$可积分.

这一步骤有点 technical，这里略去（没时间了），参见 Stein 所写 Fourier 分析书的附录.

***

下面是应用环节.

/Claim/

> 设$f,g\in\mathcal{R}(\[a,b])$，则$f\pm g$，$f\cdot g\in\mathcal{R}(\[a,b])$，若$\phi$是连续函数，则$\phi(f)\in\mathcal{R}(\[a,b])$.

/Proof/

> $f,g$可积，由 Riemann-Lebesgue 定理，知道$f,g$有界且$D(f),D(g)$零测，也就是$f\pm g$和$f\cdot g$有界.
>
> 回忆：${f$的连续点$}\cap{g$的连续点$}\subseteq{fg$连续点$}$，取补集，即得到
> $$
> D(f)\cup D(g)\supseteq D(fg)
> $$
> 即$D(fg)\subseteq D(f)\cup D(g)$，而右侧两个集合都是零测集，所以$D(fg)$零测，再结合$fg$有界，使用一次定理可证明$fg$可积.
>
> 对于$\phi(f)$，${f$连续点$}\cap{x|f(x)$是$\phi$的连续点$}\subseteq{\phi(f)$连续点$}$.
>
> 所以，
> $$
> D(f)\supseteq D(\phi(f))
> $$

证毕.

大家之后就算不记得 Riemann-Lebesgue 定理的证明，也要会使用定理证明某个函数可积.

再次来证明 Cauchy-Schwarz 不等式，这里做一个转述：

/Theorem/ （Cauchy-Schwarz 不等式）

> 设$f,g\in\mathcal{R}(\[a,b])$，则
> $$
> (\int\_a^bfg)^2\leq(\int\_a^bf^2)(\int\_a^bg^2)
> $$

/Proof/

> $f,g$可积 $\Longrightarrow$ $fg$可积，$f+\lambda g$可积.
> $$
> \begin{aligned}
> h(\lambda)&=\int\_a^b(f+\lambda g)^2\text{d}x\geq0\\
> &=\int\_a^b(f^2+2\lambda fg+\lambda^2g^2)\\
> &=(\int\_a^bf^2)+2(\int\_a^bfg)\lambda+(\int\_a^bg^2)\lambda^2
> \end{aligned}
> $$
> 可知，$h(\lambda)$是（至多）二次函数，且$h(\lambda)\geq0$，$\forall\lambda$，首项系数$=\int\_a^bg^2\geq0$.
>
> 若$\int\_a^bg^2>0$，则由$h(\lambda)\geq0$，$\forall\lambda$得到
> $$
> 0\geq\Delta=4(\int\_a^bfg)^2-4\int\_a^bg^2\int\_a^bf^2
> $$
> 这就是要证明的不等式.
>
> 如果$\int\_a^bg^2=0$，那么$h(\lambda)$是一个一次函数，但是对于$\forall\lambda$它都要大于等于零，所以斜率$\int\_a^bfg=0$，不等式仍然成立.

证毕.
