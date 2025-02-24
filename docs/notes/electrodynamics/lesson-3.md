---
title: Lesson 3 轴矢量 / 极矢量
createTime: 2025/02/24 17:11:12
permalink: /electrodynamics/2bc2y1f9/
---
这里是第 3 课正式上课的内容，时间是 2025-02-24 下午.

关于课程的安排，再次强调一下，每周的两次课第二小节是讨论，小组讨论十五分钟，全班讨论二十五分钟以上. 今天的第一小节是讲课，但是不完全是讲课，我们会把教案上比较核心的重点和新加入的知识 (慕课上面没有) 讲一下，应该要不了一节课. 剩下的时间我们用来把之前的问题过一过.

每节课都要计入考勤分数，看雨课堂的扫码签到.

课堂记录员的工作只用记录全班讨论的部分，可以查看历届的记录，用之前的格式. 必须要详细记录！因为考试题目会从中产生.

这一周整个都是数学准备的内容，今天讨论“极矢量 / 轴矢量的物理意义”，周三讨论“张量与并矢”. 讨论问题投票的第三名是“张量的计算”. 本来准备讨论一点场论，但是大家似乎没怎么投票给场论.

## 第一节

矢量分析大家熟悉的部分就不说了. 只说下面一点：叉乘和点乘哪个更加基本？

> 其实很容易看出来点乘更加基本，因为夹角都是用点乘来定义的.
>
> 当然，如果你要说我一开始就不用点乘定义夹角，而是用叉乘的两个性质：结果垂直于两个矢量、模等于 $|\vec{A}\vec{B}|\sin\theta$ 来导出点乘的性质，是否可以同样推出后面的结论？
>
> 那么有：
> $$
> \begin{aligned}
> &(\vec{a}\times\vec{b})\times\vec{a}=(\vec{a}\cdot\vec{a})\vec{b}-(\vec{a}\cdot\vec{b})\vec{a}\\\\
> &[(\vec{a}\times\vec{b})\times\vec{a}]\cdot[(\vec{a}\times\vec{b})\times\vec{a}]=\cdots
> \end{aligned}
> $$
> 也是能推出来的.

剩下的是场论有关的一些内容.

我们应该要注意矢量微分算符 ($\nabla$) 的意义：既具有矢量的性质，也具有微分算符的意义. 比如下面的公式：
$$
\nabla\times(\vec{f}\times\vec{g})=(\vec{g}\cdot\nabla)\vec{f}-(\vec{f}\cdot\nabla)\vec{g}+\cdots
$$
前两项实际上体现了两个性质，主要是作用对象的问题.

场论的三个概念：

* 梯度的意义：在无穷多个方向导数中，变化率最大的一个方向导数. 而其他方向的变化率是由立体角的 $\cos\theta$ 决定的，有一个投影的关系.

* 散度的意义：某一个点处的单位体积通量.

* 旋度的意义：场点处最大单位面积环量方向，模值是这个环量的值.

周三可能会讨论一些计算上的问题.

Helmholtz 定理：任一区域中的矢量场由其散度和旋度及在区域上的边界数值完全决定. 推导：
$$
\begin{aligned}
  U(\vec{r})&\equiv-\int\text{d}\tau^{\prime}\vec{F}(\vec{r}^{\prime})\cdot\nabla^{\prime}\frac{1}{4\pi|\vec{r}-\vec{r}^{\prime}|} \\
 & =\int\text{d}\tau^{\prime}\frac{\nabla^{\prime}\cdot\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|}-\int\text{d}\tau^{\prime}\nabla^{\prime}\cdot\frac{\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|} \\
 & =\int\text{d}\tau^{\prime}\frac{\nabla^{\prime}\cdot\vec{\mathrm{F}}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|}-\int\text{d}\vec{\mathrm{S}}^{\prime}\cdot\frac{\vec{\mathrm{F}}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|} \\\\
 \vec{W}(\vec{r})&\equiv\int\text{d}\tau^{\prime}\vec{\mathrm{F}}(\vec{r}^{\prime})\times\nabla^{\prime}\frac{1}{4\pi|\vec{r}-\vec{r}^{\prime}|} \\
 & =\int\text{d}\tau^{\prime}\frac{\nabla^{\prime}\times\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|}-\int\text{d}\tau^{\prime}\nabla^{\prime}\times\frac{\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|} \\
 & =\int\text{d}\tau^{\prime}\frac{\nabla^{\prime}\times\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|}-\int\text{d}\vec{\mathbf{S}}^{\prime}\times\frac{\vec{F}(\vec{r}^{\prime})}{4\pi|\vec{r}-\vec{r}^{\prime}|}\\\\
-\nabla U(\vec{r})&=\int\text{d}\tau'\cdot\vec{F}(\vec{r}')\cdot\nabla'\nabla\frac{1}{4\pi|\vec{r}-\vec{r}'|}\\
&=-\int\text{d}\tau'\vec{F}(\vec{r}')\cdot\nabla'\nabla'\frac{1}{4\pi|\vec{r}-\vec{r}'|}\\\\
\nabla\times\vec{W}(\vec{r})&=-\int\text{d}\tau'[\vec{F}(\vec{r}')\times\nabla']\times\nabla\frac{1}{4\pi|\vec{r}-\vec{r}'|}\\
&=\int\text{d}\tau'[\vec{F}(\vec{r}')\times\nabla']\times\nabla'\frac{1}{4\pi|\vec{r}-\vec{r}'|}\\
&=\int\text{d}\tau'\left[\vec{F}(\vec{r}')\cdot\nabla'\nabla'\frac{1}{4\pi|\vec{r}-\vec{r}'|}-\vec{F}(\vec{r}')\nabla'^2\frac{1}{4\pi|\vec{r}-\vec{r}'|}\right]\\
&=\int\text{d}\tau'\vec{F}(\vec{r}')\cdot\nabla'\nabla'\frac{1}{4\pi|\vec{r}-\vec{r}'|}+\vec{F}(\vec{r})\\\\
\Longrightarrow\quad&\vec{F}(\vec{r})=-\nabla U(\vec{r})+\nabla\times\vec{W}(\vec{r})
\end{aligned}
$$
这就是将一个矢量场 $\vec{F}$ 完全的分为了散度 $\nabla\cdot U$ 和旋度 $\nabla\times\vec{W}$ 两个部分.

剩下时间我们给讨论开个头吧：课堂时间非常宝贵，一次课一般只能讨论一个问题.

……讲了一堆人工智能的好处……

## 第二节

### 问题  极矢量 / 轴矢量的物理意义

1. 极矢量和轴矢量是定义的结果还是实验观测的结果？

   为何会存在两种不同的矢量？

   为何在基础物理学中不强调两种矢量的区别而在电动力学中需要强调？

   在电动力学学习中什么地方可以用到空间反射变换？

   为什么轴矢量可以称作不是真正的矢量, 极矢量和轴矢量在三维空间中的物理直观如何？

   比如为什么可以说位矢是极矢量而角动量为轴矢量？

   电磁场属于哪一种？ 

2. 电场是极矢量，磁场是轴矢量，为何互为相对论效应的两个场强矢量在数学上的行为却不同？  

3. 极矢量和轴矢量在物理上的表现以及其在物理上的“源头”？

   产生极矢量、轴矢量这样的区别的物理根源是什么？  

4. 极矢量和轴矢量是某种对称性破缺的结果吗？

5. 如何理解轴矢量在变换后要加一个负号 (乘一个转动矩阵的行列式)？

   张量分析中出现赝张量时要乘以一个行列式，但是张量的变换系数不同于矢量（一个矩阵），如何计算其行列式呢？

   怎么证明轴矢量在基变换下多出来 $\det\beta$？ 

   (高阶) 赝张量有没有什么具体的例子？感觉比起赝矢量要难理解很多……

6. 轴矢量的本质不足之处在哪里？

   为什么大家似乎都觉得它怪怪的，还给它起一个叫赝矢的名字？   

7. 宇称守恒要求：一个物理系统中发生的物理过程的镜像对称（假想），要与镜像制备该物理系统后发生的物理过程重合. 电磁相互作用是宇称守恒的，然而，单独考察磁场矢量，如果将其作为一个客观的物理实体（就像我们经常所认为的那样），那么宇称似乎就不守恒了，由此，是否可以说，电磁相互作用是宇称守恒的，而电磁场的激发过程宇称并不守恒？ 

   上述问题是有意义的，在一个验证弱相互作用宇称不守恒的 beta 衰变实验中（见下链接）， 我们之所以可以归纳出弱相互作用是宇称不守恒（对手性有偏好的），在我看来，完全基于我们认为在使用磁场以 及自旋作为轴矢量的镜像性质时不违背宇称守恒，从而把整体的对称破缺的责任完全归结于弱相互作用本身，但如 果我们认可磁场矢量的客观性（而非将其作为电磁相互作用中间量），认为电磁场激发过程宇称不守恒，那么就无 法 得 出 弱 相 互 作 用 本 身 宇 称 不 守恒的结论了. 

   宇称及上述实验简介：[知乎](https://www.zhihu.com/question/28146336/answer/624826487)

   对于“基本”的考虑：“简单是基本的”吗？ 极矢量更基本，因为从数学上来看，极矢量是先被线性空间等体系定义好的，而轴矢量是通过引入叉乘这个运算而被引入的，所以轴矢量更像是一个后来引入的量.  从物理观测上看， 有的物理量是轴矢量有的是极矢量，他们只是两种不同的观测结果，很难说哪个更基本. 如果认为物理意义上更基本的量便是更基本，那么例如粒子的内禀角动量便是一个基本的物理量，且是轴矢量，从这个角度看轴矢量更基本.

### 小组讨论

讨论的是第五个问题.

极矢量和轴矢量在旋转的时候的法则不同，而因为两次变换之后一定会得到原来的结果，所以行列式值只能是 $\pm1$. 这导致一定会出现两种不同的变换法则.

### 课堂讨论

A 组：上面的观点 $\uparrow$. 但是我们并不熟悉赝张量是一种什么样的量.

F 组：我们认为轴矢量不是真正的矢量，我们矢量的定义只能是在所有坐标变换 (反射和旋转) 下符合我们所认为的法则的才是矢量. 赝张量问题留给下一个组.

H 组：数学上来说，赝张量在空间反射下加一个负号，但是张量不加负号. 我们认为自然可以直接观测的都是张量，赝张量这些都是人类为了方便计算而定义的一些量.

> 王：照你这么说，磁感应强度和角动量这些东西都不是基本的物理量？

反驳：什么叫做直接可观测的量？能够做变换的量，比如说我能够平移能量的零点.

> 其他人：难道位置平移之后，物理定律就改变了吗？

I 组：如果人类没有左手和右手，该如何定义轴矢量？我们想象的定义方式是一个面元，带着顺时针和逆时针的“方向”，根本没有什么矢量. 然后由此我们可以继续定义一些其他的计算.

> 王：那么还有 H 组所说的“基础物理量”和“计算需要”的区分吗？

我们认为事实上我们可以用这种“面元”来构造矢量，那就无所谓哪个更基本了.

> 其他人：这其实仍然是把轴矢量开除出矢量家族的观点，和 F 组是一样的.

> 其他人：一个神奇的问题是叉乘这一计算定义在三维中，四维是没有这种计算的，因此在这里我们还是讨论不出来高维的一些性质.
