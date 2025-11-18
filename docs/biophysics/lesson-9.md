---
title: Lesson 9 Molecular Motor
permalink: /biophysics/lesson-9-molecular-motor/
createTime: 2025/11/18 21:24:27
---
在外加一个场 (比如说，电场) 的情况下，新的平衡态不再用原来的平衡量来描述，这种情况下要引入一些别的平衡量，一个例子是「电化学势」，
$$
F=q\phi+k_BT\ln c
$$
其实就是单粒子势能加上化学势，$F=0$ 被称为 Nerst 关系.

对于一个跳转的 toy model，方程为
$$
\frac{\partial p(x,t)}{\partial t}=-\frac{\partial}{\partial x}\left(vp-D\frac{\partial p}{\partial x}\right)
$$
RHS 第一项代表了输运，第二项代表了扩散. 其解为一个不断扩展、向右运动的 Gauss 波包，
$$
p(x,t)=\frac{1}{\sqrt{2\pi Dt}}e^{\displaystyle{-\frac{(x-vt)^2}{4Dt}}}
$$
这个形式和量子力学中的自由粒子很相似. 更加普遍的 Fokker - Planck 方程为
$$
\frac{\partial p(x,t)}{\partial t}=-\frac{\partial}{\partial x}\left[A(x)p-\frac{1}{2}B(x)\frac{\partial p}{\partial x}\right]
$$
这描述一个用 $A(x)$ 的力牵制住的 Brown 粒子，如果 $A(x)=-\gamma x$ (线性回复力)，$B(x)=D$，那么
$$
p(x,t)=\frac{1}{\sqrt{2\pi\sigma^2t}}e^{\displaystyle{-\frac{(x-x_0e^{-\gamma t})^2}{2\sigma^2(t)}}}
$$

---

影响扩散的因子：

* 拥挤效应：

  如果跳跃到下一格时，有 $\phi$ 的概率下一格被占据，无法跳过去，那么等效的扩散系数变为 $D_0(1-\phi)$.

* 微小分区：

  因为时间 $\sim L^2/D$，那么降低线度就会大幅提升速度，所以细胞中间会形成小的分区，把反应物等等包起来.

* Facilitated Diffusion：

  反应只能通过扩散来进行，相当于一个搜索算法，三维的搜索比一维的搜索要低效很多，所以有的假说说这个反应可能会在 DNA 链这样一个一维的结构上进行搜索.

  但是目前仍然是一个假说，实验上无法成像，难以验证；有说法说 DNA 的垃圾序列就是这个作用.

机器学习中的扩散模型：正向的一个过程是，一个图片上每个点上面加上 Gauss 噪声，最后变为一个全是噪点的图像.

我们用训练集去训练一个神经网络，让网络产生的噪声函数和之前生成的噪声函数尽可能接近，也就是让 $L=|\hat\varepsilon - \varepsilon|$ 最小，最后对于一个空白的图像，把学习到的噪声函数扣除掉，就会得到一个新的图像. 当然这个图像和原来的东西肯定不一样，这取决于生成时采取的种子.

Schnitzer Model：对于一个在一维运动的细菌而言，将向右的细菌数记为 $P_+$，反之记为 $P_-$，那么
$$
\begin{aligned}
&\partial_tP_+ = -\partial_x(vP_+)-\alpha P_++\alpha P_-\\\\
&\partial_tP_- = +\partial_x(vP_-)-\alpha P_-+\alpha P_+
\end{aligned}
$$
引入 $\rho=P_++P_-$，$m=P_+-P_-$，则
$$
\partial_t\rho=-\partial_x(mv),\quad \partial_tm=-\partial_x(\rho v)-2\alpha m
$$
在 $\alpha$ 很大时，所谓的 Polarization $m$ 显著快于 $\rho$，
$$
m\approx-\frac{1}{2\alpha}\partial_x(\rho v)
$$
如果假设速度和 $\rho$ 没有关系 (这并不是显然的！)，那么
$$
\partial_t\rho\approx-v\partial_xm\approx\frac{v^2}{2\alpha}\partial^2_x\rho\equiv D_{\text{act}}\partial^2_x\rho
$$
这就是一个扩散方程，$D_{\text{act}}$ 是一个等效扩散系数；但是如果 $v$ 和 $\rho$ 有关系，那么
$$
\partial_t\rho\approx\partial_x\left[\frac{v}{2\alpha}\partial_x(\rho v)\right]
$$
这导致一个不一定为正的等效扩散系数. 扩散系数为负时，简单理解为汇聚作用，也就是「密度越大、扩散出去的速度越慢、越慢就越聚集」.

这种效应出现的条件是：粒子要是 **活性** 的，比如细菌或者被外场驱动的胶体粒子，而不是简单的 Brown 粒子.

## Molecular Motors

平移马达 (translational motor)：需要一个轨道，分为 myosin (肌球蛋白)、kinesin (驱动蛋白) 和 dynein (动力蛋白) 等等.

![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d7w33gna5qivsh7m9gDIYxAIFxDda1DGxPDwUzAa==.png)

一个 kinesin 走一步是 $8\text{ nm}$，消耗 $\Delta G_{\text{ATP}}=20k_BT$，计算知道出力大约是 $10\text{ pN}$. 它的作用体现在细胞分裂时将染色体拉到细胞两端.

dynein 是鞭毛中的结构，鞭毛由很多根微管构成，dynein 连接在两根微管之间左右摆动，让两根管张力不同，产生鞭毛的弯曲.

myosin 是肌肉的结构，它收缩或者舒张可以实现骨骼肌的拉伸.

为了观测到分子马达，人们的做法是把很难看到的马达固定在玻璃片上，让马达的「轨道」自由运动，将马达的运动转化为「轨道」的运动，轨道可以荧光染色所以更好观察.

我们的成像技术足够好、时间分辨率足够高的话，应该能够分辨分子马达到底是像走路一样两条腿交替前进，还是迈同一条腿：

![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xyxbdj7r3ytlfDIYxAIFxDda1DGxPDwUzAa==.png)

Feynman 棘轮：如图系统，如果两边温度一开始相等，右边有分子朝着棘轮允许的方向撞击叶片，就会提升重物；反向撞则不会造成变化 (因为棘轮卡住了)，这就造成了第二类永动机.

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fwlhhmtcutixeDIYxAIFxDda1DGxPDwUzAa==.png)

bug 在于，这个棘轮也应该是分子量级的，它在区分 $k_BT$ 量级的能量的同时，自身的弹性势能也应该是这个量级，所以会受到左侧分子的碰撞而产生不完美性，棘轮会回弹.

但是这产生了分子马达的原型 —— 做功的效应是涨落而不是棘轮本身，那么 ATP 是否也不是做功的能量来源、而是阻止分子马达因为涨落而回退的「棘轮」？同时，Feynman 棘轮要想正常工作，两边温度应该要有差异，也就是存在低温热源和高温热源，这也是分子马达的作用基础.