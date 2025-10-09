---
title: Lesson 54 换元公式的应用
permalink: /integral/lesson-54/
createTime: 2025/5/16 12:19:12
---
## 换元公式的应用

设 $\Phi:D'\to D$ 是 $C^1$ 的双射，则对于 $D$ 上可积的 $f$ 有：
$$
\int_Df=\int_{D'}(f\circ\Phi)|\det J_\Phi|
$$
也就是权重拉回 ($f\circ\Phi$) 乘上 $\Phi$ 引起体积微元的放大倍数.

/Example/ (极坐标计算二重积分)

> $\Phi:[0,+\infty)\times[0,2\pi]\to\R^2$，$\Phi=\Phi(r\cos\theta,r\sin\theta)$.
>
> 在这里，$\Phi$ 虽然是 $C^1$ 的，但是 $r=0$ 这一条线段被映射到一个点 (坐标原点)、$\theta=2\pi,\theta=0$ 两条射线被映射为一条射线 ($x$ 轴正方向)，所以 $\Phi$ 并非单射.
>
> 但是我们仍然可以处理这个问题：对于 $r=0$ 映射到一个点的情况，
> $$
> \left|\int_Df-\int_{D\cap(\R^2|B_{\varepsilon}(\vec{0}))}f\right|=\left|\int_{D\cap B_\varepsilon(\vec{0})}f\right|\leq M\pi^2\varepsilon\to0
> $$
> 可见
> $$
> \int_Df=\lim_{\varepsilon\to0+}\int_{D\cap(\R^2|B_\varepsilon(\vec{0}))}f
> $$
> 只需要对 $D|B_\varepsilon(\vec{0})$ (记为 $\tilde D$) 进行换元. 对于 $\theta=0,\theta=2\pi$ 重合的情况，
> $$
> \int_{\tilde D}f=\int_{\tilde D\cap\R^2_+}f+\int_{\tilde D\cap\R^2_-}f
> $$
> 也就是将 $\R^2$ 从 $+x$ 无穷远处剪开剪到原点处，分为上半和下半两个平面来换元. 这样我们得到，
> $$
> \iint_Df(x,y)\text{d}x\text{d}y=\iint_{\Phi^{-1}(D)}f(r\cos\theta,r\sin\theta)r\text{d}r\text{d}\theta
> $$
> 这是因为 $\det J_\Phi=r$.
>
> /Remark/
>
> > 在某些古老的积分教材中，可能会画一个示意图，一个曲边四边形的面积会约等于 $r\Delta\theta\cdot\Delta r$.
> >
> > 实际上我们的推导在几何意义上也是这样，解读为 $\Phi$ 把标准的矩体变为曲边体，近似为平行体，之后找到其 $\mathcal{Vol}$：
> > $$
> > \mathcal{Vol}\approx|\det J_\Phi|\left(\prod_{i=1}^n\Delta u_i\right)
> > $$

/Example/ (接着上面的例子，Gauss 积分)

> 求：
> $$
> \iint_{x^2+y^2\leq R^2}e^{-x^2-y^2}\text{d}x\text{d}y
> $$
>
> ---
>
> 因为被积函数只与 $r$ 有关，所以直接取极坐标换元：
> $$
> \begin{aligned}
> &=\iint_{r\leq R}e^{-r^2}r\text{d}r\text{d}\theta=\int_{0}^{2\pi}\text{d}\theta\int_0^Re^{-r^2}r\text{d}r\\\\
> &=2\pi\cdot\left(\frac{1}{2}-\frac{1}{2}e^{-R^2}\right)
> \end{aligned}
> $$
> 实际上可以简单地取一个 $r\to\infty$ 极限，得到 $\R^2$ 上的积分为 $\pi$.
>
> /Remark/
>
> > 二维的无穷积分可以像一维一样定义：先截断，再对截断的 scale 取极限.
> >
> > 由此引伸出二维无穷积分的 Fubini 定理，于是可以得到：
> > $$
> > \begin{aligned}
> > \pi&=\iint_{\R^2}e^{-x^2-y^2}\text{d}x\text{d}y=\int_{-\infty}^\infty\text{d}x\left(\int_{-\infty}^\infty e^{-x^2-y^2}\text{d}y\right)\\
> > &=\int_{-\infty}^\infty e^{-x^2}\text{d}x\left(\int_{-\infty}^\infty e^{-y^2}\text{d}y\right)\\
> > &=\left(\int_{-\infty}^\infty e^{-x^2}\text{d}x\right)^2
> > \end{aligned}
> > $$
> > 得到 Gauss 积分：
> > $$
> > \int_{-\infty}^\infty e^{-x^2}\text{d}x=\sqrt{\pi}
> > $$
>
> 当然，严格建立二维无穷积分、并证明对在无穷远点下降得较快的函数有 Fubini 定理，是非常复杂的，而且是另一条道路.
>
> (这个证明可以在 Stein 和另一个人写的 *Fourier analysis* 的附录中找到)

/Proof/ (Gauss 积分的另一个严格证明)

> 令：
> $$
> I_a=\int_{-a}^ae^{-x^2}\text{d}x
> $$
> 来证明 $\underset{a\to\infty}{\lim}I_a=\sqrt{\pi}$.
>
> ---
>
> 记
> $$
> F=\iint_{[-a,a]\times[-a,a]}e^{-x^2-y^2}\text{d}x\text{d}y
> $$
> 我们发现这个积分区域是一个正方形，它的面积小于外接圆、大于内切圆. 因为积分的函数是非负的，所以积分值应该和面积正相关，于是
> $$
> \begin{aligned}
> &\iint_{x^2+y^2\leq a^2}e^{-x^2-y^2}\leq F\leq\iint_{x^2+y^2\leq2a^2}e^{-x^2-y^2}\\\\
> &\sqrt{\pi(1-e^{-a^2})}\leq \sqrt{F}\leq\sqrt{\pi(1-e^{-2a^2})}
> \end{aligned}
> $$
> 因为 $F$ 还是有限的二维积分，所以可以直接用 Fubini 定理，之后再夹逼定理取极限，避免了二维无穷积分的 Fubini 定理需要额外证明的情况.

/Example/ (有限维 Gauss 积分，Toy Model)

> /Remark/
>
> > 物理学中推广至 $\infty$ 维空间，$\mathscr{P}=\{\text{path}\}$ (对所有可能路径积分)，这是在数学上没有定义的.
> >
> > ::: tip
> >
> > 物理学家们非常厉害，这个东西他们用了一百年，到现在为止数学家们还是写不出它的定义. —— 艾神
> >
> > :::
>
> 考虑计算作用量 (action)：
> $$
> \int\cdots\int_{\R^n}e^{-\frac{1}{2}\sum_{i}\sum_{j}a_{ij}x_ix_j}\text{d}x_1\cdots\text{d}x_n=\lim_{R\to\infty}\int\cdots\int_{x_1^2+\cdots+x_n^2\leq R^2}e^{-\frac{1}{2}x^TAx}
> $$
> $A=(a_{ij})$ 维正定对称方阵.
>
> /Remark/
>
> > 实际上，在物理中人们的野心更大，他们想要计算任意可观测物理量的配分函数：
> > $$
> > \braket{f}=\int_{\R^n}f(x_1,\cdots,x_n)e^{-\frac{1}{2}x^TAx}
> > $$
> > 这个要使用 Stokes 定理，所以我们到课程后面再来计算.
>
> 我们知道，实对称方阵可以正交对角化，所以 $A=S^T\Lambda S$，其中 $S$ 是正交方阵 ($S^TS=I_n$)，$\Lambda$ 是对角矩阵，$A$ 正定 $\Longleftrightarrow\lambda_i>0$ ($\forall i$).
>
> 指数可以改写：
> $$
> -\frac{1}{2}x^TAx=-\frac{1}{2}x^TS^T\Lambda Sx
> $$
> 令 $\vec{y}=S\vec{x}$，$\vec{x}=S^{-1}\vec{y}$. 所以这里的换元是 $\Phi(y)=S^{-1}\vec{y}$.
>
> 这个换元的性质很好，甚至是保距离的，换元后得到
> $$
> \iint_{|y|\leq R}e^{-\frac{1}{2}y^T\Lambda y}|\det(S^{-1})|\text{d}t_1\cdots\text{d}y_n
> $$
> 而正交阵的行列式为 $1$，所以就得到
> $$
> \iint_{|y|\leq R}e^{-\frac{1}{2}(\lambda_1y_1^2+\cdots+\lambda_ny_n^2)}\text{d}y_1\cdots\text{d}y_n
> $$
> 这里开始可以用 Fubini 定理，最终得到
> $$
> =\frac{(\sqrt{2\pi})^n}{\sqrt{\det \Lambda}}
> $$

/Example/

> 计算：
> $$
> \iint_{x^2+y^2\leq R^2}f(ax+by)\text{d}x\text{d}y
> $$
> 其中 $a,b$ 不全为零，$f$ 是连续的一元函数.
>
> ---
>
> /Method/ (1)
>
> > 不加思考的方法是剖分圆盘区域为小长条，每个长条上被积函数为 $f(c)$.
> >
> > 这种方法非常费时，而且容易出错.
>
> /Method/ (2)
>
> > 考虑进行坐标变换，$ax+by=u$，只需要找到另一个正交的坐标.
> >
> > 我们取正交变换 (因为正交变换是保距离的)：这个变换实际上是一个旋转.
> > $$
> > \begin{pmatrix}
> > u\\v
> > \end{pmatrix}=\frac{1}{\sqrt{a^2+b^2}}\begin{pmatrix}
> > a&b\\-b&a
> > \end{pmatrix}\begin{pmatrix}
> > x\\y
> > \end{pmatrix}
> > $$
> > /Draft/
> >
> > > 任何一个向量的旋转可以在复平面上考虑，逆时针旋转 $\pi/2$ 等价于乘 $e^{\text{i}\pi/2}$.
> >
> > 我们得到的正交矩阵是保距离变换，定义域的大小在换元之后没有变化，而且 $|\det J_\Phi|=1$.
> >
> > 换元：
> > $$
> > \begin{aligned}
> > &\iint_{x^2+y^2\leq R^2}f(ax+by)\text{d}x\text{d}y\\
> > &=\iint_{u^2+v^2\leq R^2}f(\sqrt{a^2+b^2}u)\text{d}u\text{d}v\\
> > &=\int_{-R}^Rf(\sqrt{a^2+b^2}u)\cdot2\sqrt{R^2-u^2}\text{d}u
> > \end{aligned}
> > $$
> > 已经化为一元积分.

/Example/ (3 维球坐标)

> 球坐标 $(r,\theta,\varphi)$，$r\geq0$，$0\leq\theta\leq\pi$，$0\leq\varphi\leq2\pi$.
> $$
> \left\{\begin{array}{ll}
> z=r\cos\theta\\
> x=r\sin\theta\cos\varphi\\
> y=r\sin\theta\sin\varphi
> \end{array}\right.
> $$
> $\Phi:\R_{\geq0}\times[0,\pi]\times[0,2\pi]\to\R^3$，$\det J_\Phi=r^2\sin\theta$. 最后的换元是
> $$
> \begin{aligned}
> &\iiint_\Omega f(x,y,z)\text{d}x\text{d}y\text{d}z\\\\
> &=\iiint_{\Phi^{-1}(\Omega)}f(r\sin\theta\cos\varphi,r\sin\theta\sin\varphi,r\cos\theta)r^2\sin\theta\text{d}r\text{d}\theta\text{d}\varphi
> \end{aligned}
> $$

接着上面的例子：

/Example/

> 积分区域为
> $$
> \Omega=\left\{\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}\leq1\right\}
> $$
> 求积分：
> $$
> \iiint_\Omega\left(1-\frac{x^2}{a^2}-\frac{y^2}{b^2}-\frac{z^2}{c^2}\right)^{3/2}\text{d}x\text{d}y\text{d}z
> $$
>
> ---
>
> 为了更好地应用球坐标的一些性质，需要先进行一次前置的换元，放缩为 $x/a=u$，$y/b=v$，$z/c=w$.
>
> 所以总的换元是
> $$
> \begin{aligned}
> I&=\iiint_{\substack{0\leq r\leq1\\0\leq\theta\leq\pi\\0\leq\varphi\leq2\pi}}(1-r^2)^{3/2}abcr^2\sin\theta\text{d}r\text{d}\theta\text{d}\varphi\\\\
> &=4\pi abc\int_0^1(1-r^2)^{3/2}r^2\text{d}r\\
> &=4\pi abc\int_{\pi/2}^0\sin^3\alpha\cos^2\alpha(-\sin\alpha)\text{d}\alpha\\
> &=4\pi abc\int_{0}^{\pi/2}\sin^4\alpha(1-\sin^2\alpha)\text{d}\alpha
> \end{aligned}
> $$
> 后面的部分：
> $$
> \begin{aligned}
> &\int_{0}^{\pi/2}\sin^4\alpha(1-\sin^2\alpha)\text{d}\alpha\\
> &=I_4-I_6=I_4-\frac{5}{6}I_4=\frac{1}{6}I_4=\frac{1}{6}\cdot\frac{3}{4}\cdot\frac{1}{2}I_0\\
> &=\frac{\pi}{24}
> \end{aligned}
> $$

换元公式还可以用来处理对称性有关的命题：

/Claim/

> 设 $\Omega$ 关于 $O-xy$ 平面的反射 (reflection) $R(x,y,z)=(x,y,-z)$ 不变，即 $R(\Omega)=\Omega$.
>
> * 若 $f$ 关于 $z$ 是奇函数，则 $\int_\Omega f=0$；
> * 若 $f$ 关于 $z$ 是偶函数，则 $\int_\Omega f=2\int_{\text{half }\Omega}f$.

/Proof/

> 约定 $\R^n_+=\{(x_1,\cdots,x_n)|x_n\geq0\}$.
>
> /Method/ (1)
>
> > 权重 $f(x,y,z)$，上下体积一致，所以直接证明.
>
> /Method/ (2)
>
> > 奇函数时：
> > $$
> > \begin{aligned}
> > \iiint_{\Omega+} f\text{d}V&=\iiint_{\Omega-} f(x,y,-z)\left|\det\begin{pmatrix}
> > 1&&\\&1&\\&&-1
> > \end{pmatrix}\right|\text{d}V\\
> > &=-\iiint_{\Omega-} f(x,y,z)\text{d}V
> > \end{aligned}
> > $$
> > 上下半相反，得证.
> >
> > 偶函数时完全类似.

更加体现换元公式作用的例子：

/Example/

> $$
> I=\int_{x^2+y^2\leq R^2}x^2\text{d}x\text{d}y
> $$
>
> ---
>
> 发现这是关于 $x,y$ 轮换的，所以再加上一个对 $y^2$ 积分，换元为 $(r,\theta)$ 求解.

/Example/

> $V=\{0\leq x_1\leq\cdots\leq x_n\leq 1\}$，求
> $$
> \mathcal{Vol}(V)=\int\cdots\int_V\text{d}x_1\cdots\text{d}x_n
> $$
> 累次积分，从 $x_{i-1}\to1$ 积分 $x_i$，最终得到
> $$
> \cdots=\int_{0\leq x_1\leq1}\frac{1}{(n-1)!}(1-x_1)^{n-1}=\frac{1}{n!}
> $$
>
> ---
>
> 但是这样积分需要逐项来做，比较麻烦，我们考虑：$I=\underset{n}{\times}[0,1]$，按照大小次序进行剖分，$\forall1,2,\cdots,n$ 的置换 $\sigma$，定义一个新的体积为
> $$
> V=\{0\leq x_{\sigma(1)}\leq\cdots\leq x_{\sigma(n)}\leq1\}
> $$
> 对于任意的换元，可以构建一个双射 $V_{1,\cdots,n}\to V_\sigma$. 换元：
> $$
> \mathcal{Vol}(V_\sigma)=\int_{V_\sigma}\text{d}y_1\cdots\text{d}y_n=\int_V1\cdot|\det T|\text{d}x_1\cdots\text{d}x_n
> $$
> 这里 $T$ 是置换矩阵，很明显其每一行、每一列均只有一个 $1$，其他值为 $0$. 最后可以证明任何顺序都是等价的.

## 第一型曲线 / 曲面积分

::: warning

先预告一下：明天的补课可能会讲五个小时，有非常多内容. —— 艾神

:::

多重积分 $\iint_Df\longleftrightarrow D$ 的带权面积，可以理解为一个具有面密度的二维物体的质量；同理也可以将曲线积分视为一个具有线密度的一维曲线的质量.

之后我们在考虑曲线积分时，几乎都会采取这样的物理观点：一个质点沿着时间的早晚，走遍 $L$ 一次. 由此，我们能够写出下述的定义：

/Definition/

> 设 $L\subseteq\R^3$ 是曲线，所谓 $L$ 的一个 $C^1$ 的参数化指一个 $C^1$ 映射 $\gamma:[a,b]\to L$，满足：
>
> 1. $\gamma'(t)\neq\vec{0}$，$\forall t$ (也就是处处的速度非零)；
> 2. $\gamma$ 至多在 $\{a,b\}$ 两点不单 (也就是最多是闭合的曲线，起点和终点重合，否则完全是单射).