---
url: /integral/1tk0zvhi/index.md
---
# 高等微积分 Lesson 3

先回顾一下上节课讲过的确界定理.

## 确界定理

对$E\in\R$定义$\sup E=E$的最小上界.

/Claim/

> $c=\sup E$ $\Longrightarrow$ $\forall x\in E$有$x\leq c$；$\forall c'\<c$，$\exist x\in E$使$x>c'$.

/Theorem/

> 有上界的非空实数集必有上确界；
> 有下界的非空实数集必有下确界.

（实际上，如果不想考虑上面的一些知识的话，可把实数定义&确界定理当作微积分的基础）

/Proof/（用Dedekind实数定义）

> 记$E={X\_\alpha=(A\_\alpha,B\_\alpha)$是Dedekind分割$}$，$\alpha\in$指标集$I\neq\varnothing$.
>
> 已知$E$有上界$c=(A,B)$.
>
> 由$c$是$E$上界 $\Longrightarrow$ $x\_\alpha\leq c$ $\Longrightarrow$ $A\_\alpha\subseteq A$ $\Longrightarrow$ $\underset{\alpha\in I}{\bigcup}A\_\alpha\subseteq A$.
>
> 令$s=(\underset{\alpha\in I}{\bigcup}A\_\alpha,\mathbb{Q}-\underset{\alpha\in I}{\bigcup}A\_\alpha)$，易验证$s=\sup E$.

证毕.

验证$s$是Dedekind分割：$s=(A\_0,B\_0)$.

> 1. $A\_0\subseteq\mathbb{Q}$，$B\_0\subseteq\mathbb{Q}$，$A\_0\cup B\_0=\mathbb{Q}$.
> 2. $A\_0\neq\varnothing$（因为$A\_0=\underset{\alpha\in I}{\bigcup}A\_\alpha$，每个$A\_\alpha\neq\varnothing$.）（这里用到$E$非空）
> 3. 由$A\_0\subseteq A$ $\Longrightarrow$ $(A\_0)^C\supseteq A^C$ $B\_0\supseteq B\neq\varnothing$ $\Longrightarrow$ $B\_0\neq\varnothing$. （这里用到$E$有上界）
> 4. $A\_0=\underset{\alpha\in I}{\bigcup}A\_\alpha$，$B\_0=(\underset{\alpha\in I}{\bigcup}A\_\alpha)^C=\underset{\alpha\in I}{\bigcap}(A\_\alpha)^C=\underset{\alpha\in I}{\bigcap}B\_\alpha$. （这里用到“并集之补集等于补集之交集”）
>    $\forall a\in A\_\alpha$，$\forall b\in B\_\alpha$，由$a\in A\_0=\underset{\alpha\in I}{\bigcup}A\_\alpha$ $\Longrightarrow$ $a\in A\_\alpha$，同理$b\in B\_0=\underset{\alpha\in I}{\bigcap}B\_\alpha$ $\Longrightarrow$ $b\in B\_\alpha$，这就可以知道$a\<b$.
> 5. $A\_0$无最大元素：$\forall a\in A\_0$ $\Longrightarrow$ $a\in A\_\alpha$，由$A\_\alpha$无最大元$\Longrightarrow$ $\exist a'\in A\_\alpha$使$a'>a$.

验证$s=\sup E$：

> 注意任何$\tilde{c}=(\tilde{A},\tilde{B})\in\R\_D$是$E$的上界，有$\tilde{c}\geq x\_\alpha$，$\forall \alpha\in I$，即$\tilde{A}\supseteq A\_\alpha$，即$\tilde{A}\supseteq\underset{\alpha\in I}{\bigcup}A\_\alpha=A\_0$，所以$\tilde{c}\geq s$，证毕.

称确界定理描述了实数的完备性. （实际上，完备性指的是“$\R$中任何Cauchy列必有极限”，但是现在还不讲）

简单的应用是证明如下几句话：

1. $\forall x\in\R$，$\exist n\in\Z$使$n>x$.
2. 任意两个实数之间必有$\infty$个有理数.
3. 任意两个有理数之间必有$\infty$个无理数.

/Proof/ 1.

> 反证法，假设每个$n\in \Z$都有$n\leq x$，则$x$是$\Z$的上界，由确界定理知道$\Z$有上确界$M$. 进而$\forall n\in\Z$，$n+1\in\Z$，有$n+1\leq M$，也就是$n\leq M-1$，表明$M-1$也是$\Z$的上界，与$M$是上确界（最小上界）矛盾.
>
> 所以假设不成立，1.成立.

证毕.

/Proof/ 2.

> 显然只需证明$(\*)$式：$\forall$实数$a\<b$，$(a,b)$中有一个$c\in\mathbb{Q}$.
>
> 这之后就可以反复应用上面的$(\*)$式来证明$(a,b)$中存在$\infty$个有理数.
>
> 接下来来证$(\*)$. 想法是找一个“机器人”，从数轴左边往右走，只要其步长$1/n\<b-a$，就必定会掉入$(a,b)$这一“陷阱”中. 这里可以发现$n>1/(b-a)$.
>
> 用1.知$\exist n\in\Z$使$n>1/(b-a)>0$；
>
> > 草稿：起始点$s/n\<a$，即$s\<an$，$-s>-an$.
> > 终点$t/n>b$，$t>nb$.
>
> 用1.知$\exist u\in\Z$使$u>-an$，令$s=-u\in\Z$ $\Longrightarrow$ $-s>-an$ $\Longrightarrow$ $s/n\<a$.
>
> 用1.知$\exist t\in\Z$使$t>nb$ $\Longrightarrow$ $t/n>b$.
>
> 对于$s$，$s+1$，$\cdots$，$t$中的每个数$k$，标记$k/n\leq a$为❌，$k/n>a$为✔，则一定存在首个✔，记为$k\_0$.
>
> 这样$k\_0/n>a$，$(k\_0-1)/n\leq a$，且有
> $$
> \frac{k\_0}{n}=\frac{k\_0-1}{n}+\frac{1}{n}\<a+(b-a)=b
> $$
> 这就证明了$k\_0/n\in(a,b)\cap\mathbb{Q}$.

证毕.

/Proof/ 3.

> 利用2.结论，$(a-\sqrt2,b-\sqrt2)$中存在$\infty$个有理数，记为$x$. 利用$\sqrt2$是无理数，$(a,b)$中存在$y=x+\sqrt2$，是无理数且有$\infty$个.

证毕.

$\mathbb{Q}$和$\mathbb{Q}^C=\R-\mathbb{Q}$都是无限集，是否能进一步比较多少？

/Definition/

> 称集合$A$与$B$等势，当且仅当$\exist$双射$f:A\to B$.

/Definition/

> 称集合$A$是可数的，如果$A$与$\Z\_+$等势.

/Claim/

> 可数多个可数集之并仍可数.

/Proof/

> 设$A\_1$，$A\_2$，$\cdots$是可数多个可数集，由$A\_i$可数，可以设$A\_i={x\_{i,1},x\_{i,2},\cdots}$. 可以将$\underset{i=1}{\overset{\infty}{\bigcup}}A\_i$的元素分类为下标和相同的组，这种排列可数.

证毕.

/Claim/

> $\mathbb{Q}$可数.

/Proof/

> $\mathbb{Q}=\underset{i=1}{\overset{\infty}{\bigcup}}{\frac{m}{n}|m\in\Z}=\underset{i=1}{\overset{\infty}{\bigcup}}A\_i$. $A\_i$可数.

证毕.

/Theorem/ （Cantor）

> $\R$不可数（因为$\mathbb{Q}$可数，所以这实际上可以推出$\mathbb{Q}^C$不可数）.

/Proof/ （Cantor对角线法则）

> Cantor证明这个定理时还没有Dedekind分割定义，所以他使用的是无穷小数的定义. 考虑证明一个更强的结论，$\[0,1]$不可数. 把区间中的数表示为无穷小数，采用反证法：假设这些小数分别是
> $$
> x\_1=\overline{0.x\_{11}x\_{12}x\_{13}\cdots}\\
> x\_2=\overline{0.x\_{21}x\_{22}x\_{23}\cdots}\\
> x\_3=\overline{0.x\_{31}x\_{32}x\_{33}\cdots}
> $$
> 我们要求一个这样的数$x\_m$存在，满足：
> $$
> x\_{m1}\neq x\_{11},,\quad x\_{m2}\neq x\_{22},,\quad x\_{m3}\neq x\_{33},,\cdots
> $$
> 这样就保证了$x\_m$不等于上面列表中的任何一个数，从而导出了矛盾：不管数出多少个$\[0,1]$之间的数，都能找到一个数不在这个列表中，故假设不成立，不可数.

/Moreover/

> /Definition/
>
> > $X$是$\R$的稠密子集，当且仅当$\forall x\in\R$，$\forall\varepsilon\in\R\_+$使$(c-\varepsilon,c+\varepsilon)\cap\R\neq\varnothing$，其中$c\in\R$.
>
> /Claim/
>
> > $\mathbb{Q}$是$\R$的稠密子集.
