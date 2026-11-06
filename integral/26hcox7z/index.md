---
url: /integral/26hcox7z/index.md
---
# 高等微积分 Lesson 4

## 极限

第$n$代仪器测量$L$（未知）所得值$x\_n$（$n\in\Z\_+$），怎么说明仪器更新会让$L$的测量数据越来越精确？有以下几个思路：

1. 误差$|x\_n-L|$随$n$增大越来越小？

   但有实验误差，未必$|x\_{n+1}-L|<|x\_n-L|$. 这个思路不切实际.

2. 对任何一个精度的要求$\varepsilon>0$，都可以保证从某一代起，误差满足$|x\_n-L|<\varepsilon$. 这表明随$n$增大，$x\_n$整体而言越接近$L$.

/Definition/

> 设${x\_n}^\infty\_{n=1}$是无穷数列，称${x\_n}$以$L$为极限，当且仅当$\forall\varepsilon>0$，$\exist N\in\Z\_+$（$N$依赖于$\varepsilon$），满足$\forall n\geq N$有$|x\_n-L|<\varepsilon$.
>
> 记作：$\underset{n\to\infty}{\lim}x\_n=L$

评述：

1. 极限行为与${x\_n}$前面有限项无关，若$x\_n=y\_n$，$\forall n\geq N\_0$，则$\underset{n\to\infty}{\lim}x\_n=\underset{n\to\infty}{\lim}y\_n$.
2. 极限记号是$\underset{n\to\infty}{\lim}$，上面意思是limit，下面的意思是“随着$n$越来越大”. 但是下面$n\to\infty$不太好理解，$\lim$这个记号可能更清楚.

接下来使用上面讲过的符号语言进行翻译：

1. ${x\_n}$以$L$为极限 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N\in\Z$，$\forall n\geq N$，$|x\_n-L|<\varepsilon$.
2. ${x\_n}$不以$L$为极限 $\Longleftrightarrow$ $\exist\varepsilon>0$，$\forall N\in\Z$，$\exist n\geq N$，$|x\_n-L|\geq\varepsilon$.
3. ${x\_n}$有极限 $\Longleftrightarrow$  $\exist L\in\R$，$\forall\varepsilon>0$，$\exist N\in\Z$，$\forall n\geq N$，$|x\_n-L|<\varepsilon$.
4. ${x\_n}$无极限 $\Longleftrightarrow$ $\forall L\in\R$， $\exist\varepsilon>0$，$\forall N\in\Z$，$\exist n\geq N$，$|x\_n-L|\geq\varepsilon$.

/Example/

> 证明：$\underset{n\to\infty}\lim\frac{1}{n}=0$
>
> /Proof/
>
> > 取$N=\[1/\varepsilon]+1$即可.
>
> 证毕.

/Example/

> 证明：$\underset{n\to\infty}{\lim}\sqrt\[n]{a}=1$
>
> /Proof/
>
> > 1. 当$a>1$时，$\forall\varepsilon>0$，取$N>\frac{a-1}{\varepsilon}$，从而$\forall n\geq N$有
> >    $$
> >    \begin{aligned}
> >    &(1+\varepsilon)^n\geq1+n\varepsilon\geq1+N\varepsilon>1+a-1=a\\\\
> >    &\Longrightarrow\sqrt\[n]{a}<1+\varepsilon
> >    \end{aligned}
> >    $$
> >
> > 2. 当$0\<a<1$时，四则运算即可：
> >    $$
> >    \lim\_{n\to\infty}\sqrt\[n]{a}=\lim\frac{1}{\sqrt\[n]{\frac{1}{a\_n}}}
> >    $$
>
> 证毕.

/Example/

> 证明：$\lim\sqrt\[n]{n}=1$
>
> /Proof/
>
> > 草稿：
> > $$
> > \begin{aligned}
> > &|\sqrt\[n]{n}-1|<\varepsilon\\\\
> > &\sqrt\[n]{n}<1+\varepsilon\\\\
> > \&n<(1+\varepsilon)^n\\\\
> > \&n<1+n\varepsilon+\frac{1}{2}n(n-1)\varepsilon^2
> > \end{aligned}
> > $$
> > 由上面可以发现可以取$N>1+\frac{2}{\varepsilon^2}$.
>
> 证毕.

## 极限性质

/Claim/

> 设$\lim x\_n=L\<B$，则$\exist n\in\Z\_+$，$\forall n\geq N$有$x\_n\<B$. $L>A$同理.
>
> 可以表述为：充分大的指标保持极限不等式.

/Proof/

> 由$\lim x\_n=L$定义知，对$\varepsilon=B-L$，$\exist N\in\Z\_+$，$\forall n\geq N$，又$|x\_n-L|<\varepsilon=B-L$，所以$x\_n\<L+\varepsilon=B$.

可以得到一个推论：数列的极限至多唯一.

/Proof/

> 反证法：设${x\_n}$有两个极限$L\_1$，$L\_2$，不妨设$L\_1\<L\_2$. 取$B$是两个极限的中点，用上面命题即证矛盾.

/Claim/

> 设$\lim x\_n<\lim y\_n$，则$\exist N$使$\forall n>N$有$x\_n\<y\_n$.

/Proof/

> 设两个极限分别为$L\_1\<L\_2$，取$\varepsilon=\frac{L\_2-L\_1}{2}$，则会有$x\_n<\frac{L\_1+L\_2}{2}$，$\forall n>N\_1$，$y\_n>\frac{L\_1+L\_2}{2}$，$\forall n>N\_2$，此时取$N=\max(N\_1,N\_2)$即可证明.

/Claim/

> 设${x\_n>0}$，$\lim x\_{n+1}/x\_n=q$存在且$q<1$，则$\lim x\_n=0$.

/Proof/

> 取$q\<r<1$，由$\lim\frac{x\_{n+1}}{x\_n}=q\<r$及Claim1，知$\exist N\in\Z\_+$，$\forall n\geq N$有$x\_{n+1}/x\_n\<r$，所以$\forall n>N$有$0\<x\_n\<x\_Nr^{n-N}$，最后得到$\lim x\_n=0$.

/Claim/

> 极限不等式：设$x\_n\leq y\_n$（$\forall n\geq N\_0$），则$\lim x\_n\leq\lim y\_n$.

/Proof/

> 反证，用Claim2即可.

\==注意：若$x\_n\<y\_n$，只能得出$\lim x\_n\leq\lim y\_n$！==

为什么Claim1和Claim2是有用的？因为建立极限比建立不等式更加简单，可以忽略很多麻烦的项.

/Example/（等比数列）

> $$
> \lim q^n=\left{\begin{array}{lr}0,\quad|q|<1\1,\quad q=1\\\text{none},\quad\text{else}\end{array}\right.
> $$

/Proof/

> 1. $|q|<1$时略.
> 2. $q=1$时显然.
> 3. else情况下的证明要使用下面的Claim，证明无上界，即$\forall M$，$\exist |q^n|>M$. 这是由于$|q^n|=(1+b)^n\geq1+nb>M$，一定有$n$满足条件.

证毕.

/Claim/

> 收敛的数列一定有界.
>
> > 称收敛，当且仅当有极限
> > 称有界，当且仅当既有上界又有下界，当且仅当$\exist M$使$|x\_n|\leq M$，$\forall n$.

## 极限计算方法

1. 定义
2. 四则运算
3. 夹逼定理

### 定义

/Example/

> 多项式增长$\ll$指数增长，求证$\lim\frac{n^k}{q^n}=0$（$q>1$）.

/Proof/

> 令$x\_n=\frac{n^k}{q^n}$，
> $$
> \lim\frac{x\_{n+1}}{x\_n}=\lim\frac{1}{q}(\frac{n+1}{n})^k=\frac{1}{q}<1
> $$
> 由Claim就知道，$\lim x\_n=0$.
>
> 当然也可以用定义验证，但是会非常复杂.

### 四则运算

极限和四则运算可交换.

以乘法为例，证明：（$\lim x\_n=A$，$\lim y\_n=B$）

> $$
> \begin{aligned}
> |x\_ny\_n-AB|&=|(x\_n-A)y\_n+A(y\_n-B)|\\\\
> &\leq|x\_n-A||y\_n|+|A||y\_n-B|
> \end{aligned}
> $$
>
> 由$\lim x\_n=A$知$|x\_n-A|$可控制；
> 由$\lim y\_n=B$知$|y\_n-B|$可控制；
> 由${y\_n}$收敛知其有界，$|y\_n|$可控制.
>
> 代回原式就可知道$|x\_ny\_n-AB|<\varepsilon$.

接下来证明除法：

> $$
> \begin{aligned}
> |\frac{x\_n}{y\_n}-\frac{A}{B}|&=|\frac{x\_nB-y\_nA}{By\_n}|\\\\
> &=|\frac{(x\_n-A)B+A(B-y\_n)}{By\_n}|\\\\
> &\leq\frac{|x\_n-A||B|+|A||B-y\_n|}{|B||y\_n|}
> \end{aligned}
> $$
>
> 之后几句话是与上面一样的，特别注意分母的控制：
>
> 由$\lim y\_n=B\neq0$，有$|y\_n|$在$n$充分大时$|y\_n|>|B|/2$，分母得到控制.
>
> 之后的证明与上面一样.

推论：极限与==有限==和/积可交换.
$$
\begin{aligned}
&\lim\sum\_{i=1}^k x\_{i,n}=\sum\_{i=1}^{k}\lim x\_{i,n}\\\\
&\lim\prod\_{i=1}^{k}x\_{i,n}=\prod\_{i=1}^{k}\lim x\_{i,n}\\\\
\end{aligned}
$$
\==无限和/积不一定可交换！==

/Example/

> 证明：$\lim\frac{a\_kn^k+a\_{k-1}n^{k-1}+\cdots+a\_0}{n^k}=a\_k$

证明显然.

/Example/

> 求：$\lim\frac{a\_kn^k+a\_{k-1}n^{k-1}+\cdots+a\_0}{b\_mn^m+b\_{m-1}n^{m-1}+\cdots+b\_0}$

/Solution/

> 可以换成上面一个Example的形式：
> $$
> \begin{aligned}
> \text{LHS}&=\lim\frac{a\_kn^k+\cdots+a\_0}{n^k}\cdot\frac{n^k}{b\_mn^m+\cdots+b\_0}\\\\
> &=\frac{a\_k}{b\_m}\lim n^{k-m}\\\\
> \end{aligned}
> $$
> 就得到了结果.

引理：若$\lim x\_n=A$，$\lim y\_n=B$，但是$\lim z\_n$不存在，则$\lim x\_ny\_nz\_n$不存在.

### 夹逼定理

/Theorem/

> 设$a\_n\leq b\_n\leq c\_n$（$\forall n\geq N\_0$），设$\lim a\_n=\lim c\_n=L$，则$\lim b\_n$存在且等于$L$.

/Proof/

> $\forall \varepsilon>0$，$n$足够大时有$a\_n>L-\varepsilon$，$c\_n\<L+\varepsilon$，此时$b\_n$在两者之间.
