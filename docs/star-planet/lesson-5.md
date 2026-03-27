---
title: Lesson 5 Diffusion
createTime: 2026/03/27 23:14:13
permalink: /star-planet/lesson-5-diffusion/
---
Thomson 散射截面 $\sigma_e=\sigma_T$，平均自由程 $l_{\text{mfp}} = (n_e\sigma_T)^{-1}$. 定义透明度
$$
\text{opacity},\kappa := \frac{\text{total }\sigma}{\text{mass}} = \frac{n_eV\cdot\sigma_T}{\rho V} = \frac{n_e\sigma_T}{\rho} = \frac{\sigma_T}{\mu_em_\mu}
$$
我们观测宇宙时，很多恒星会被其他的恒星遮住，我们并不能看到所有的星体. 这引入了一个 optical depth 的概念，
$$
\tau = L/l_{\text{mfp}} = \rho\kappa L
$$
这个值越大，就越透明，我们能够看到的东西越多.

如果认为辐射压强抵消重力，那么我们可以计算出 Eddington Luminosity
$$
L_{\text{Eddington}} = \frac{3GM\mu_em_um_e^2c^5}{2e^4}\approx 3.3\times10^4L_{\odot}\left(\frac{M}{M_{\odot}}\right)
$$
虽然我们知道太阳质量的星体并不存在用辐射压强抵消重力的机制，但是这对应 HR 图上一条直线，那么一定有那么一种恒星，其辐射压强足以撕碎整个星体.

Diffusion：仍然是随机行走，但是现在整个区域的密度有一个梯度场，因此并不能简单地说平均值是零. 对于 $z_0$ 上下各 $l_z/2$ 的区域，穿过 $z=z_0$ 平面的流为
$$
\text{Flux}^{\mp} = n\left(z_0\pm \frac{l_z}{2}\right)v_z = \left[n(z_0) \pm\frac{l_z}{2}\left(\frac{\partial n}{\partial z}\right)_0\right]v_z
$$
净流为
$$
\text{net flux} = n\left(z_0-\frac{l_z}{2}\right)v_z - n\left(z_0+\frac{l_z}{2}\right)v_z = -l_zv_z\left(\frac{\partial n}{\partial z}\right)_0
$$
如果认为三个方向 $x,y,z$ 均分，且把 $l_z$ 取作 $l_{\text{mfp}}$，那么
$$
F = -\frac{1}{3}l_{\text{mfp}}v_{\text{th}}\left(\frac{\partial n}{\partial z}\right)_0
$$
这里的 $v_{\text{th}}$ 是 thermal velocity. 定义 $D = \displaystyle{\frac{1}{3}l_{\text{mfp}}v_{\text{th}}}$，那么就得到 Fick 扩散定律，
$$
F_{\text{diff}} = -D\nabla n
$$
对于太阳中的光子，
$$
\frac{L}{4\pi r^2}=-D_{\text{ph}}\frac{\text{d}u}{\text{d}r} = -\frac{1}{3}\frac{c}{\rho\kappa_R}\frac{\text{d}T}{\text{d}r}\frac{\text{d}u}{\text{d}T}
$$

> 对于每一个频率，
> $$
> \frac{L_\nu}{4\pi r^2} =-\frac{1}{3}\frac{c}{\rho\kappa_\nu}\frac{\text{d}T}{\text{d}r}\frac{\text{d}u_\nu}{\text{d}T}
> $$
> 总的 $\kappa_R$ 和 $\kappa_\nu$ 存在关系：
> $$
> \frac{1}{\kappa_R} = \frac{\displaystyle{\int\frac{1}{\kappa_\nu}\frac{\text{d}u_\nu}{\text{d}T}\text{d}\nu}}{\displaystyle{\left(\frac{\text{d}u}{\text{d}T}\right)}}
> $$

利用上面的式子，以及 $u=4\sigma T^4/c$，我们可以算出 $T$ 和 $r$ 的关系
$$
\frac{\text{d}T}{\text{d}r} = -\frac{3\rho\kappa_RL}{64\pi\sigma T^3r^2}
$$
做恒星演化的天文学家比较喜欢下面这个量：
$$
\nabla_{\text{rad}} \equiv \frac{\text{d}\log T}{\text{d}\log P} = \frac{P}{T}\frac{\text{d}r}{\text{d}P}\frac{\text{d}T}{\text{d}r} = \frac{3\kappa_RLP}{64\pi\sigma T^4Gm_R}
$$
同样，引入
$$
\frac{\partial\log\rho}{\partial\log P}>\frac{1}{\gamma}\Longrightarrow\text{stability}
$$
这里的 $\gamma$ 是 $P=K\rho^\gamma$ 中的参数. 上面的量表征了恒星力学状态的稳定性，还可以继续引入 $\nabla_\mu = \displaystyle{\frac{\partial\log\mu}{\partial\log P}}$ 等等，利用物态方程得到它们和 $\nabla_{\text{rad}}$ 的关系，并获得一些稳定条件. 如果超过这些条件 ($\nabla_{\text{rad}}$ 太大)，星体就会发生 convection (对流)，而不在稳定状态. 当然对流的具体情况是什么样，并不在我们课程的讨论范围之内，但是我们需要知道在变化发生之后对流带走了更多的能量，而不是通过辐射.

---

## MESA tutorial

全称 **M**odules for **E**xperiments in **S**tellar **A**strophysics.

### Download

1. Get the **prerequisites**.

2. Install **MESA SDK**.

3. Install **MESA**.

   - Firstly, Download a zip file of the latest MESA release from its [website](https://docs.mesastar.org/en/25.12.1/installation.html).

   - Set the environment variables. If you use Linux (or WSL) system, you may just copy the example on the right.

   - Compile the code by running the following command:

     ```
     source ~/.bashrc cd $MESA_DIR ./install 
     ```

- A message `MESA installation was successful` is expected once it is done.

  ```
  export MESA_DIR=/Users/my_username/Software/mesa-r24.08.1 export OMP_NUM_THREADS=2 export MESASDK_ROOT=/Applications/mesasdk source $MESASDK_ROOT/bin/mesasdk_init.sh export PATH=$PATH:$MESA_DIR/scripts/shmesa 
  ```

  Please set `MESA_DIR` to be the directory to which you downloaded MESA, and set `OMP_NUM_THREADS` to be the number of cores on your machine. The third and fourth command should be already added when you set up the MESA SDK.

We are now going to simulate the evolution of a 15 mass star from a pre-main sequence model until the zero-age main sequence (ZAMS) is reached. The code has already been written in the directory `$MESA_DIR/star/work`. However, instead of running the code in that directory, it's highly recommended to store and perform the work somewhere else. Let's run the following command:

```
cp -r $MESA_DIR/star/work ~/work_dir/mesa_tutorial 
```

Please, modified the second directory according to your machine.

Next, compile and run the code by typing:

```
cd ~/work_dir/mesa_tutorial ./mk ./rn 
```

A new directory `star` is expected after the second command.

Once MESA is running, it will keep your updated through terminal output. As we promised before, MESA can automatically convert data into real-time HR diagram and internal temperature-density profile shown on the right.

The simulation should terminate after 207 steps with the following message:

```
stop because Lnuc_div_L>=Lnuc_div_L_zams_limit
```

New directory `LOGS` and `photos` are expected after the code finishes.

The `photos` files are machine readable binaries, where the models from MESA are saved. The `LOGS` include all you need for data analysis. They are text-based and can be fed into your favourite plotting program.