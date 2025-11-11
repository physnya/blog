---
title: Lesson 16 电磁波的反射与折射
permalink: /electrodynamics/lesson-16/
createTime: 2025/11/11 10:35:28
---
## Fresnel 公式

从 Maxwell 方程的角度来思考一下电磁波的反射和折射. 考虑电磁波从 $\varepsilon_1,\mu_1$ 入射到 $\varepsilon_2,\mu_2$，入射角为 $\theta$、折射角为 $\theta'$. 仍然是四个边值关系：
$$
\begin{aligned}
\hat{n}\times(\vec{E}_2-\vec{E}_1)=0,&\quad\hat{n}\times(\vec{H}_2-\vec{H}_1)=\vec{\alpha}_t=0\\\\
\hat{n}\cdot(\vec{D}_2-\vec{D}_1)=\sigma=0,&\quad\hat{n}\cdot(\vec{B}_2-\vec{B}_1)=0
\end{aligned}
$$
这里只需要用到前两个切向的边值关系. 假设入射波为 $\vec{E}_0e^{\text{i}(\vec{k}\cdot\vec{x}-\omega t)}$，反射波为 $\vec{E}_0'e^{\text{i}(\vec{k}'\cdot\vec{x}-\omega t)}$，折射波为 $\vec{E}_0''e^{\text{i}(\vec{k}''\cdot\vec{x}-\omega t)}$. (显然，频率应该一致，否则就不能保证每一时刻的边值关系都成立) 相位相同，得到：
$$
k_xx+k_yy-\omega t=k_x'x+k_y'y-\omega t=k_x''x+k_y''y-\omega t
$$

> 这里设定 $xy$ 平面为反射和折射的界面.

于是应该有 $x,y$ 方向的波矢相同. 但是我们知道色散关系，因此知道波矢的模长应该和 $\sqrt{\mu\varepsilon}$ 成正比，于是：

* 对于反射，两个波介质相同，$|\vec{k}|$ 相同，所以 $k_z$ 相同，
  $$
  k_x=k_x'\Longrightarrow k\sin\theta=k'\sin\theta'\Longrightarrow\frac{\sin\theta'}{\sin\theta} = \frac{k}{k'}=1
  $$
  反射角等于入射角.

* 对于折射，两个波矢满足
  $$
  \frac{k''}{k}=\frac{\sqrt{\mu_2\varepsilon_2}}{\sqrt{\mu_1\varepsilon_1}}=\frac{n_2}{n_1}
  $$
  也就有折射定律 (Snell's law)：
  $$
  \frac{\sin\theta''}{\sin\theta}=\frac{k}{k''}=\frac{n_1}{n_2}
  $$

接下来分为两种线偏振的方向来寻找折射波、反射波和入射波振幅之间的关系.

* 第一种情况是 $\vec{E}$ 垂直于 $xz$ 平面，得到 (称为 s 偏振)
  $$
  \frac{E_{0\perp}'}{E_{0\perp}} = \frac{\displaystyle{\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta-\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta'}}{\displaystyle{\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta+\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta'}},\quad\frac{E''_{0\perp}}{E_{0\perp}}=\frac{\displaystyle{2\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta}}{\displaystyle{\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta+\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta'}}
  $$

* 第二种情况是 $\vec{E}$ 平行于 $xz$ 平面，得到 (称为 p 偏振)
  $$
  \frac{E'_{0\parallel}}{E_{0\parallel}}=\frac{\displaystyle{\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta-\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta'}}{\displaystyle{\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta+\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta'}},\quad\frac{E''_{0\parallel}}{E_{0\parallel}} = \frac{\displaystyle{2\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta}}{\displaystyle{\sqrt{\frac{\varepsilon_2}{\mu_2}}\cos\theta+\sqrt{\frac{\varepsilon_1}{\mu_1}}\cos\theta'}}
  $$

讨论几个光学现象：

1. 反射波的半波损失

   平面波从光疏介质到光密介质入射时，振幅反射率很可能变成负的，相位反相，这就是所谓的半波损失.

2. 平行偏振反射波的消失

   对于某个特殊入射角度 $\theta_R$ 满足 $\theta_R+\theta''=\pi/2$，称为 Brewster 角，这样的入射角会导致 $E'_{0\parallel}=0$，也就是反射光中仅仅只有 s 光，没有 p 光.

   用这个入射角做玻璃堆，可以达到起偏的效果，透射光全部为 p 光. (当然一般不会用玻璃堆起偏的反射光做实验，因为光束很宽)

   利用 Snell's law，Brewster 角实际上满足：
   $$
   \tan\theta_R = \frac{n_1}{n_2}
   $$
   并且反射波和折射波相互垂直.

3. 全反射

   在光疏介质到光密介质入射时，当入射角大于 $\arcsin n_1/n_2$ 时，出现全反射. 这时候所有的能量也全部被反射，没有能量穿过入射面.

   当然，考虑隐失波的存在，实际上入射波在光密介质中有一段光程，而不是完全没有穿过入射面.

## 导体中的电磁波

因为导体弛豫时间非常短，不考虑导体内部存在自由电荷. 波动方程：
$$
\nabla^2\vec{E}-\mu\sigma\frac{\partial\vec{E}}{\partial t}-\mu\varepsilon\frac{\partial^2\vec{E}}{\partial t^2}=0
$$
有一个阻尼项.

这时候用复数的波矢，得到衰减因子为 $e^{-z/\tau}$，对于不良导体，
$$
\tau = \frac{1}{2}\sqrt{\frac{\mu}{\varepsilon}}\sigma\ll\sqrt{\frac{\varepsilon\mu}{\varepsilon_0\mu_0}}k
$$
深入的深度远大于波长，和普通的不导电介质类似. 如果是良导体，那么透射深度极小，出现所谓的趋肤效应. 同时，这些深度都和频率有关，频率越高，趋肤效应越明显.
