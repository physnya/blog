---
url: /integral/hnasnfk8/index.md
---
# 高等微积分 Lesson 12

## 最值定理

（所有函数的）有界性定理 $\Longrightarrow$ （每个函数的）最值定理

/Proof/ （证明最值定理）

> 由有界性定理，知道$f$在$\[a,b]$上有界；再由确界定理，知道$\exist M=\sup\Im f$.
>
> 若能证明$M\in\Im f$，就能证明$M$是$\Im f$的最大值，也就证明了$f$有最大值.
>
> 反证法，假设$M\notin\Im f$，令$g(x)=1/(M-f(x))$. 用到$g$的有界性定理，知道$g$若在$\[a,b]$上连续，则其在$\[a,b]$上有界.
>
> 由$M=\sup\Im f$，==$\forall n\in\Z\_+$==，$M-\frac{1}{n}$不是$\Im f$的上界，从而==$\exist$==$f(x)>M-\frac{1}{n}$，也就是$0\<M-f(x)<\frac{1}{n}$，从而==$g(x)>n$==.
>
> 其中，上面三个高亮部分合起来就是“有界性定理不成立”之意.

证毕.

也可以直接用有限覆盖定理证明最值定理.

/Proof/ （证明最值定理）

> 令$M=\sup\Im f$，来证明$M\in\Im f$.
>
> 反证，设$M\notin\Im f$. $\forall x\_0\in\[a,b]$，$\underset{x\to x\_0}{\lim}f(x)=f(x\_0)<\frac{f(x\_0)+M}{2}$.
>
> 可知，$\exist\delta\_{x\_0}>0$使得$\forall x\in B\_{\delta}(x\_0)\cap D$有$f(x)<\frac{f(x)+M}{2}\overset{\text{marked as}}{=}M\_{x\_0}$$(\*)$.
>
> 记$U\_{x\_0}=B\_\delta(x\_0)=(x\_0-\delta\_{x\_0},x\_0+\delta\_{x\_0})$是开区间，注意$\mathscr{U}={U\_{x\_0}|x\_0\in D}$一族开区间，$\underset{x\_0\in D}{\bigcup}U\_{x\_0}\supseteq\underset{x\_0\in D}{\bigcup}{x\_0}=D$.
>
> 利用 Borel 定理，知道$\exist U\_{x\_1}\cup\cdots\cup U\_{x\_m}\supseteq D$，即$\forall x\in D$有$f(x)\leq\max{M\_{x\_1},\cdots,M\_{x\_m}}=K$，表明$K=\sup\Im f\leq M\_{x\_i}< M$，矛盾！
>
> 假设不成立，最值定理成立.

证毕.

注记：使用最值定理，一定要验证$D=\[a,b]$，除此之外最值定理均不成立.

问：经常需要建立$f\in C(\R,\R)$的最值存在性，如何做？

具体的，问题出在远处的$f$值来竞选最值，所以如果命令远处的$f$趋于正（负）无穷，那么其便失去了竞选最小（大）值的权利.

/Claim/

> 设$f\in C(\R,\R)$且$\underset{x\to\infty}{\lim}f(x)=+\infty$（即$\forall M$，$\exist K>0$使得$\forall |x|>K$有$f(x)>M$），则$f$在$\R$上有最小值.
>
> 当然还有对偶的版本，若$\underset{x\to\infty}{\lim}f(x)=-\infty$，则$f$在$\R$上有最大值$\max f$.

/Proof/

> 由极限定义，得到：$\forall M$，$\exist K>0$使得$\forall |x|>K$有$f(x)>M$，在这里把$f(0)$当作$M$，那么远处的函数值都不计入考虑.
>
> 在$\[-K,K]$上应用最值定理即可.

## 列紧性定理

字面意思上来说，这个定理指的是“数列”的“紧致性”. 当然，在引入拓扑之后，人们发现广义的紧致性要强于列紧性，所以之后大多数都在讨论紧致性.

/Definition/

> 称$X$紧致，若$X$的任何开覆盖都有有限子覆盖.
>
> 死去的回忆开始攻击我，topology.

可以发现，这个定义和 Borel 定理有很深的联系.

$\[a,b]$紧致，$\R$、$(a,b]$、$(a,b)$都不紧致.

为什么开区间不紧致？因为我们能用开区间“制备”一个开覆盖，它没有有限子覆盖.

> $X=(a,b)$，考虑开覆盖$\mathscr{U}={U\_n=(a+1/n,b-1/n)}$，显然$\underset{n\geq N\_0}{\bigcup}U\_n=(a,b)$，但是由于$U\_n\subseteq U\_{n+1}$，所以任何有限个$U\_n$之并实际上等于$U\_{\max n}$，而$\neq(a,b)$.

/Definition/

> 称$X$是列紧的，如果$X$中任何无穷点列都有一个子序列收敛（到$X$中的点）.
>
> 所谓${x\_n}$的一个子序列，指的是从这个序列中挑出一些点构成一个新的序列.

/Theorem/

> 有界闭区间$\[a,b]$是列紧的. 也即，$\[a,b]$中的任何无穷点列${x\_n}$都有一个子列收敛到$\[a,b]$中某点.
>
> 改述：任何有界序列都有收敛子列.

分析：我们应该如何证明？需要找到子列${x\_k}$，还要找到$\underset{k\to\infty}{\lim}x\_k=L$. 显然，先找$L$是更加 judicious 的选择.

怎样找$L$呢？它应该有一个特点，在$L$附近汇聚了很多点$x\_\*$.

/Definition/

> 设$X\subseteq\R$，称$a\in\R$为$X$的一个聚点，
>
> > 应该满足何种条件？若我在$a$附近的任意小邻域中都能找到$X$的点，那么$X$的点就“聚集”在$a$附近了.
>
> 如果对任何$a$的邻域$B\_\delta(a)$有$B\_\delta(a)\cap(X|a)\neq \varnothing$.
>
> 即，$a$的任何去心邻域皆有$X$中的点.
>
> > 为什么要强调去心邻域？因为$a$本身可能也是$X$的点.

/Claim/

> 设$X$是$\R$的有界无穷点集，则$X$必有聚点.

/Proof/

> 反证法. 设$X\subseteq\[a,b]$且无聚点，则$\forall x\_0\in\[a,b]$，$\exist B\_\delta(x\_0)\cap(X|x\_0)=\varnothing$. 记$U\_{x\_0}=B\_\delta(x\_0)$有$|U\_{x\_0}\cap X|\leq 1$$(\*)$.
>
> 注意到${U\_{x\_0}|x\_0\in\[a,b]}$是一族开集且覆盖$\[a,b]$.
>
> $\overset{\text{Borel}}{\Longrightarrow}$ $\exist U\_{x\_1}\cup\cdots\cup U\_{x\_m}\supseteq \[a,b]$，
>
> $\overset{(\*)}{\Longrightarrow}$ $|x|\leq\sum\_{i=1}^m|U\_{x\_i}\cap X|\leq m$，与$|X|=+\infty$矛盾！
>
> 假设不成立.

证毕.

这个时候就能来证明列紧性定理.

/Proof/ （证明列紧性定理）

> 记$X={y\in\R|\exist x\_k=y}=x\_*$步点集，若$|X|<+\infty$，则存在无穷多个$x\_*=$同一个$L$.
>
> 取这些$x\_\*$构成的常值点序列，这是收敛的.
>
> 以下设$|X|=+\infty$，$X\subseteq\[a,b]$ $\overset{\text{Claim}}{\Longrightarrow}$ $X$有聚点$L$. 之后按如下方式构造${x\_\*}$子列：
>
> 由$L$聚点的定义，取$x\_{i\_1}\in B\_1(L)\cap(X|L)$，且这个集合非空. 假设已经构造好$x\_{i\_1},\cdots,x\_{i\_k}$，来找$x\_{i\_m}$，$i\_m>i\_k$.
>
> 我们想要绕着$L$画一个开球，把之前的所有点都排除在外面，但是里面的点的指标都大于外面的点的指标. 为了实现这个目的，令$d=\min{|x\_{i}-L|,1\leq i\leq i\_k,x\_i\neq L}$，然后取$B\_{d/2}(L)$，在这个去心开球里面找到下一个$x\_{i\_{k+1}}$，以这种方法迭代这个子列，满足$0<|x\_{i\_{k+1}}-L|<\frac{1}{2}|x\_{i\_k}-L|$，显然有$\underset{k\to\infty}{\lim}x\_{i\_k}=L$.

证毕.

应用：

/Example/ （给出 Cauchy 收敛原理的一个快速证明）

> 设${x\_\*}$是 Cauchy 列，来证明收敛.
>
> Cauchy 列 $\Longrightarrow$ ${x\_\*}$有界 $\Longrightarrow$ $\exist$子序列${x\_{i\_k}}^\infty\_{k=1}$收敛（极限是$L$）.
>
> 对于$\forall\varepsilon>0$，由 Cauchy 列定义，$\exist N$使得$\forall m,n\geq N$有$|x\_m-x\_n|<\varepsilon$.
>
> 特别地，取$m=i\_k\to\infty$，得到$\underset{k\to+\infty}{\lim}|x\_{i\_k}-x\_n|=|L-x\_n|\leq\varepsilon$，这表明极限为$L$.

另外一个应用有关于一致连续性. 为了说明，我们先简介一致连续性.

\==在分析的语言中，只要提到“一致”，这个概念一般是技术上的，没有特别直观的含义.==

回忆$f\in C(D,\R)$，等价于$f$在$D$中每一点$x\_0$处连续，用$\varepsilon-\delta$语言表述就是$\forall\varepsilon>0$，$\exist\delta=\delta\_{x\_0}$（依赖于$x\_0$），使得$\forall|x-x\_0|<\delta\_{x\_0}$，有$|f(x)-f(x\_0)|<\varepsilon$.

\==在这里，每一个$x\_0$对应一个不一定相同的$\delta\_{x\_0}$.==

为了让每处的行为“一致”，我们考虑让$\delta\_{x\_0}$相同.

/Definition/

> 称$f$在$D$上一致连续，如果$\forall\varepsilon>0$，$\exist\delta>0$（不依赖于$x$），使得$\forall x,y\in D$，只要$|x-y|<\delta$，则$|f(x)-f(y)|<\varepsilon$.

显然，一致连续强于连续. 但是要注意，谈论一致连续时涉及区间$D$.

/Example/ （连续的$f$未必一致连续，也即一致连续强于连续）

> $f(x)=\frac{1}{x}$，$D=(0,1)$，$f\in C(D,\R)$. 来证明$f$在$(0,1)$上不一致连续.

/Proof/

> 反证法：设$f$在$(0,1)$上一致连续，即$\forall\varepsilon>0$，$\exist\delta>0$，$\forall|x-y|<\delta$，有$|f(x)-f(y)|<\varepsilon$.
>
> 取定$\varepsilon=1$，$\exist\delta>0$，$\forall|x-y|<\delta$（$x,y\in D$），有$|f(x)-f(y)|<1$.
>
> 取$y=x+\frac{\delta}{2}$（$0\<x<1-\frac{\delta}{2}$），有$|x-y|=\frac{\delta}{2}<\delta$. 而
> $$
> \begin{aligned}
> |\frac{1}{x}-\frac{1}{y}|&=\frac{y-x}{xy}\\\\
> 1>|f(x)-f(y)|&=\frac{\delta/2}{x(x+\delta/2)}\\\\
> 1\geq&\lim\_{x\to0+}\frac{\delta/2}{x(x+\delta/2)}=+\infty
> \end{aligned}
> $$
> 矛盾！

证毕.

/Theorem/

> 有界闭区间上的连续函数都一致连续（紧致空间上的连续函数皆一致连续）.

这个定理以后还会使用两次.

/Proof/

> 反证法，设$D=\[a,b]$，$f\in C(D,\R)$且$f$在$D$上不一致连续. 即，$\exist\varepsilon >0$，$\forall\delta>0$，$\exist x,y\in D$使得$|x-y|<\delta$，$|f(x)-f(y)|\geq \varepsilon$（包含$\infty$个结论，每一个$\delta>0$找出一对$x,y$）.
>
> 特别地，对$\delta=\frac{1}{n}$，$\exist x\_n,y\_n\in D$，$|x\_n-y\_n|<\frac{1}{n}$，$|f(x\_n)-f(y\_n)|\geq\varepsilon$.
>
> 注意到${x\_n}$有界，因为$x\_n\in\[a,b]$，由列紧性定理，知道$\exist$收敛子序列${x\_{i\_k}}\to L$，$L\in\[a,b]$.
>
> 由$|x\_{i\_k}-y\_{i\_k}|<1/i\_k$，$\forall k$，得到$x\_{i\_k}-1/i\_k\<y\_{i\_k}\<x\_{i\_k}+1/i\_k$，再使用夹逼定理，证明$\lim y\_{i\_k}=L$.
>
> 利用$f$在$L$处连续，可得$f(L)=f(\lim x\_{i\_k})=\underset{k\to\infty}{\lim}f(x\_{i\_k})$，对$y\_{i\_k}$同理，这与$|f(x\_{i\_k})-f(y\_{i\_k})|\geq\varepsilon$矛盾！

证毕.

至此，列紧性定理的有关内容就讲完了，接下来是一些比较简单的应用.

/Claim/

> 设$f$在$\[0,+\infty)$上连续，$\underset{x\to+\infty}{\lim}f(x)=L$且$\exist f(x\_0)\leq L$，则$f$在$\[0,+\infty)$上有最小值.
>
> > 实际上这也是在“剥夺$\infty$处竞选最小值的权利”，因为近处已经有一个点小于无穷远处的极限了.

这里给出两个证明.

/Proof/

> 证法1：
>
> > Situation 1：若$\exist f(x\_1)\<L$，此时$\underset{x\to+\infty}{\lim}f(x)=L>f(x\_1)$，知道$\exist M$，$\forall x\geq M$有$f(x)>f(x\_1)$（显然$0\leq x\_1\leq M$）.
> >
> > 在$\[0,M]$上用最值定理知道有最小值$f(x\_{\min})$. 从而$\forall x>M$，$f(x)>f(x\_1)\geq f(x\_{\min})$，表明$f(x\_{\min})$全局最小.
> >
> > Situation 2：若上面一种情况不发生，则$\forall x$有$f(x)\geq L$，条件$\exist f(x\_0)\leq L$ $\Longrightarrow$ $f(x\_0)=L$.
>
> 证法2：投机取巧（？）
>
> > 既然定义域是$\[0,+\infty)$，是一条射线，何不将这个定义域通过一种坐标变换编码成一种新的定义域$\[0,1)$？
> >
> > 考虑对应的坐标变换是$h(x)$，逆映射是$h^{-1}(t)$.
> >
> > 令$g(t)=f(h^{-1}(t))$，$g\in C(\[0,1))$，则$\underset{t\to1-}{\lim}g(t)=\underset{t\to1-}{\lim}f(h^{-1}(t))=\underset{x\to+\infty}{\lim}f(x)=L$.
> >
> > $\exist f(x\_0)\leq L$ $\Longleftrightarrow$ $\exist g(t\_0)\leq L$. 所有内容都可以相互翻译！
> >
> > 但是$g$有何好处？这是$1$是一个可去的间断点，可以将$g$连续地解析延拓到$\tilde{g}\in C(\[0,1])$，其中
> > $$
> > \tilde{g}(t)=\left{\begin{array}{lr}
> > g(t),,\quad0\leq t<1\\
> > \underset{t\to1-}{\lim}\tilde{g}(t)=L,,\quad t=1
> > \end{array}\right.
> > $$
> > 根据最值定理，可知$\tilde g$在$\[0,1]$上有最小值. 但是我们担心这个最小值取在$1$这个点处，这个点无法被翻译回原来的语言，因为它对应正无穷.
> >
> > 由$\exist g(t\_0)\leq L=\tilde g(1)$，可知$1$这个点一定不是$\tilde g$的唯一最小值点，所以$\tilde g$存在一个最小值点$t\_{\min}\in\[0,1)$，所以$f$在$\[0,+\infty)$上有最小值点$x\_{\min}$.

证毕.

上面第二种证明方法是相当有意义的！

/Claim/

> 设$f$在$\[0,+\infty)$上连续且$\underset{x\to+\infty}{\lim}f(x)=L\in\R$，则$f$在$\[0,+\infty)$上一致连续.

/Proof/

> 同上面的证明，定义$g(t)=f(h^{-1}(t))$，$\underset{t\to1-}{\lim}g(t)=L$.
>
> 其中，$h(x)=\frac{x}{1+x}$.
>
> 然后继续将$g$连续延拓到$\[0,1]$上为$\tilde g$，$\tilde g$一致连续，再由$h:\[0,+\infty)\to\[0,1)$知$f$一致连续.
>
> 可得$\forall\varepsilon>0$，$\exist\delta>0$，$\forall t\_1,t\_2\in\[0,1]$，若$|t\_1-t\_2|<\delta$，则$|\tilde g(t\_1)-\tilde g(t\_2)|<\varepsilon$，以此验证$f$的一致连续性.
>
> $\forall\varepsilon>0$，取上述$\delta$，若$|x\_1-x\_2|<\delta$，有
> $$
> \begin{aligned}
> |h(x\_1)-h(x\_2)|&=|\frac{x\_1}{1+x\_1}-\frac{x\_2}{1+x\_2}|=\frac{|x\_1-x\_2|}{(1+x\_1)(1+x\_2)}<\delta\\\\
> \Longrightarrow&|\tilde g(h(x\_1))-\tilde g(h(x\_2))|<\varepsilon\\\\
> &|f(x\_1)-f(x\_2)|<\varepsilon
> \end{aligned}
> $$
> 相当于使用复合极限定理. 命题得证.

证毕.
