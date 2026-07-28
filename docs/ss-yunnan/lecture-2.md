---
title: Lecture 2 AGB stars
createTime: 2026/07/28 11:12:34
permalink: /ss-yunnan/lecture-2-agb-stars/
---
::: right

Prof. Amanda Karakas, from Monash University

:::

::: danger

纯靠手动记录，但是鉴于对于本人这种入门者而言确实很困难，走神一下就听不懂了，因此多有缺漏. 故本篇仅供个人学习参考，最好不要外传误导他人.

:::

## Main-Sequence and the Start of AGB

一般认为铁元素是一个分界线，在铁之前的元素在恒星中可以被燃烧，更重的元素则通过中子捕获过程来合成.

Metallicity：就是所有重于 He 元素的其他元素之总和.

H 是宇宙中最 abundant 的元素. 当一颗恒星开始进行 pp-chain 反应时，它就进入了主序星序列. pp-chain 的完整反应将四个 H 原子核合成为一个 $^4\text{He}$，这个过程的能量很容易用质量变化来计算. 如果一颗恒星仅仅有 H 和 He，那么它的能量来源就只能是 pp-chain 反应；但是更重质量的恒星 (或者说更大多数的) 含有 C 或者 O 等等更重元素的气体，它们有更多的可能反应. 举个例子，在我们的太阳中 $z_{\text{CNO}}\approx 0.65z_\odot$. 这使得 CNO 循环反应可能发生.
$$
\epsilon_{pp} \approx \epsilon_0^{pp}(T/T_6)^4,\quad \epsilon_{\text{CNO}}\approx\epsilon^{\text{CNO}}_0(T/T_6)^{20}
$$
明显可以看出 CNO 循环对于温度的幂次高了很多. 在 $1.2M_\odot$ 质量左右，CNO 提供的能量开始大于 pp-chain.

主序星阶段末尾，H 被耗尽，越大的恒星这个过程进行得就越快；并且这个变化是相当显著的，$5M_\odot$ 的恒星氦闪前的时间 (主序星阶段) 仅有 $80$ Myr 左右，而太阳的时间则有 $1$ Gyr. 这表明年轻的星系可能包含更重的星，而老的星系反之.

> 完了这里全是恒星与行星讲的东西...

RGB：针对我们的太阳，在 RGB 阶段会膨胀到 $150$ 倍半径. 最终中心温度会达到能使得 He 开始燃烧，这需要 $10^8$ K. 之后进入稳定的 He 燃烧阶段，主要的反应是 triple-$\alpha$ 反应，产生 $^{12}\text{C}$；接下来有一个要求稍高一点温度和密度的反应，可以生成 $^{16}\text{O}$. 我们有
$$
\epsilon_{3\alpha}\propto T^{40}
$$
这造成一个巨大的 divergence，因此会产生很强的 convection.

first dredge up (也就是从主序星阶段到巨星分支前端的第一个 mixing event)：表面同位素比变化，$^{12}\text{C}/^{13}\text{C}\downarrow$，……

在理论的 stellar model 中，我们只预言了一个 mixing event，但是观测证据表明有某种 chemical transport 存在于低质量的巨星外层中. 对于这个额外的 mixing，一个可能解释是在最外层 envelope 中有强烈的对流，$v\sim 10^5$ cm/s；中间存在一个辐射区，完全没有对流；两者之间还有一个缓慢的对流区，$v\sim10^2$ cm/s，这导致 CNO 循环的产物被运输到恒星表面.

## AGB evolution & Nucleosynthesis

当 He 也被耗尽，恒星进入第二巨星分支，或者说 AGB. 这时候内核是 C/O 反应，一个 He 燃烧的 shell 在其周围建立；最终这个 shell 会逐渐消失. 主要结构大概是：C/O core, He burning shell, inter He shell, H burning shell.

Thermal Pulse Cycle:

- On phase $(t=0)$

  The He shell flares up....way up! 100 million solar luminosities or more!

  Drives a convective region from He shell to H shell (intershell convection)

- Power down phase

  He shell dies down

  Convective region disappears

- Dredge-up phase

  Star expands and cools

  Cooling means higher opacity and steeper $T$ gradient

  Convection develops and moves deep into the star

  Overlaps with the earlier intershell convective region

  Mixes products of He-shell burning to the surface

- Off phase ($t\sim$ few hundred years later)

  He shell is off

  H shell provides the energy

  Until the next pulse...

这产生一个在恒星内部周期性的演化，如下图：

::: window img no-padding

![](https://1845440081.cdn.123clouddisk.com/1845440081/ymjew503t0l000dehyo2fwq6wjwqdjd8DIYxAIFxDda1DGxPDwUzAa==.png)

:::

每一个周期结束之后几个区域的大小就会发生一次小的变化.

Carbon Stars：当 C/O $>1$ 时，恒星表面是 "C rich" 的，这被称为 carbon star. 它们一般很亮.

**Determining AGB masses is difficult**. 甚至在 Gaia DR3 这种数据集中都很困难，因为它们的亮度一般有很大的误差.

carbon stars 的质量下限：实际上到现在为止这个问题并没有很好的解决，在历史上我们认为对于太阳的 metallicity，大约是 $1.5\sim2 M_\odot$，但是化学演化导致这个质量下限会被改变.

Hot bottom burning：这个过程也是一个中子捕获过程，它在 envelope 的底部进行，产生 N, Na, Al 等元素. 一般而言这个过程发生在 $z=z_\odot$，$M>4M_\odot$ 的恒星中.

总结一下 AGB 的组成：

* C/O $>1$：$1.5\sim4.5M_\odot$ for [Fe/H] $\approx 0\longrightarrow$ C stars, ……

  这些 AGB 一般是 s-process rich.

* C/O $<1$：other masses compared to the former class; [Fe/H] $\approx 0$

  For $M>4.5M_\odot$，在对流 envelope (Li, $^{13}$C, $^{14}$N, Na, $^{26}$Al) 中存在一个 H-burning 区域，s-process rich (?)

  For $M<1.5M_\odot$，只有 first dredge up & extra mixing，某种意义上仅仅是 RGB 加了两个特性 (?)

> 上面两个问号是 Amanda 加在 PPT 里面的.

AGB 很多都是 dusty (灰蒙蒙的)，因为它们的星风会带出很多物质. 这会使得观测时的 flux 随时间变化比较明显，也增大了观测的难度.

::: tip

*Summary - fate of low and intermediate-mass stars*

- Stars experience core H and He fusion before ascending the giant branch for the second time.
- This is known as the asymptotic giant branch or AGB.
- Stars have C/O core that is inert, shells fusing He and then H, surrounded by a deep (H rich) envelope.
- Mixing can occur between the envelope and core $\longrightarrow$ mixes the products of partial He-fusion (i.e., $^{12}$C and He mostly but some other stuff).
- Stars can become carbon rich because of this mixing.
- Hot bottom burning occurs in the most massive AGB stars ($4$ to $8M_\odot$ or even higher for super-AGB stars) which can stop the star from become C-rich, depending on $z$, temperature etc.
- Mass loss erodes the envelope, and the star will be seen as a planetary nebulae and will end its life as a white dwarf.

:::

## S-processes & Nucleosynthesis yields

一个 lead-in 的问题是，比 Fe 重的元素来自于哪里？从昨天的 lecture 我们已经知道是中子捕获过程，而其中的慢中子捕获 (s-process) 是一个重要部分. 我们想知道什么样的恒星能够发生 s-process. 在观测上，能够发现 AGB stars 中的 [s/Fe] $\geqslant+1.0$，也就是说它们有很高的重元素含量；在 post-AGB 阶段的恒星有时也能发现大量的重元素.

中子源：第一个发现的中子提供反应是
$$
^{14}\text{N}(\alpha,\gamma)^{18}\text{F}(\beta^+\nu)^{18}\text{O}(\alpha,\gamma)^{22}\text{Ne}(\alpha,n)^{25}\text{Mg}
$$
::: warning

显然我并不是很能理解这种核反应的写法... 查了一下之后发现意思是这样，
$$
^AX(a,b)^BY\Longrightarrow {}^AX+a\longrightarrow {}^BY+b
$$
因此上面那一长串表示一串核反应的缩写.

另外，$^{18}\text{F}\to {}^{18}\text{O}$ 的那个反应，是一个 $\beta$ 衰变，右边产生一个 $\beta$ 和一个中微子，所以没打逗号.

:::

**The effect of stellar rotation?** 曾经人们认为这是其中的一个重要驱动力，但是根据对于 [Ce/Y] 的观测数据，加入旋转的模型实际上并不能拟合 [Ce/Y] - [Fe/H] 的观测数据.

Non-canonical mixing processes：很多不同的机制，比如 2025 年有人提出 GW 会对 Li 的生成造成影响；另外，磁场也是一个有力的机制.

/Definition/ (stellar yields)

> 恒星抛射出的质量 $\Delta M$；更精确地说，净 (net) 产率 (yield) 是指对于不同的物质 $k$，在恒星 lifetime 中积分出来的总抛出质量：
> $$
> M_{\text{net},k} =\int_{\text{lifetime}}[X_k(t)-X_k(0)]\frac{\mathrm{d}M}{\mathrm{d}t}\mathrm{d}t
> $$
> 而总产率则包含了上面被减去的初始星风产率 $X_k(0)$ (因为 stellar yield 的成分不只有星风)，
> $$
> M_{k} =\int_{\text{lifetime}}X_k(t)\frac{\mathrm{d}M}{\mathrm{d}t}\mathrm{d}t
> $$

::: tip

*Summary* (This is a summary for the former 3 lectures)

- AGB stars are dust and element factories in galaxies.
- They are a major source of carbon, nitrogen and elements heavier than iron.
- In these lectures I have reviewed the evolution and nucleosynthesis of AGB stars, and the origin of elements via the s-process.
- Main uncertainties are starting to be constrained by new observations.
- What we need: metallicities, abundances (elemental, isotopic) of AGB stars, and independent estimates of their masses (current or initial).
- Intermediate-mass AGB stars: we need observations to constrain models, which right now can predict wildly different things. Also, where is their dust?

:::

## Practical Exercise

Amanda 做了一个 toy AGB model 来给大家玩，能够大致算出一个 AGB 阶段中大致经历了几个 pulse 周期、最终的演化结果等等.

```python title="toyAGB.ipynb" :collapsed-lines
## Based on a synthetic AGB evolution from Amanda Karakas (Monash University)
### Author of code template: Minjih Kim (2024)
###
import pandas as pd
import numpy as np

"""
Load data, initial composition
"""
df = pd.read_csv("init_composition.dat", sep="\\s+")
n_species = df.shape[0] #number of species 

"""
Arrays
"""
size = 100
menv = np.zeros(size)
mtot = np.zeros(size)
mc = np.zeros(size)
dm_dredge = np.zeros(size)
dmc = np.zeros(size)
xenv = np.zeros((size, n_species))
L = np.zeros(size)
R = np.zeros(size)
header = ['timestep', 'M_c (Msun)', 'M_tot (Msun)', 'R (Rsun)', 
          'L (Lsun)', 'X_surf_H', 'X_surf_He', 'X_surf_12C', 'X_surf_13C',
          'X_surf_14N', 'X_surf_15N', 'X_surf_16O', 'X_surf_17O', 'X_surf_18O', 
          'X_surf_Sr', 'X_surf_Ba', 'X_surf_Pb']

"""
Helper functions
"""
def to_X(log_ratio, Asun, x): #convert abundance to X (mass fraction)
    At_x = df['At(i)'].loc[df['species'] == x].values[0] #find At(x), atomic mass of species x
    X_x_sun = 10**(Asun-12.0) * Xsun * At_x 
    return X_x_sun * 10**(log_ratio)

def to_A(row, x, i): #convert mass fraction to A (abundance)
    At_x = df['At(i)'].loc[df['species'] == x].values[0] #find At(x), atomic mass of species x
    Y_x = xenv[row,i] / At_x 
    return np.log10(Y_x/Xsun) + 12.0

def ratio(row, x1, x2, i1, i2, isotopic = True, n1 = 0, n2 = 0): #convert abundance to X (mass fraction)
    if isotopic:
        At_x1 = df['At(i)'].loc[df['species'] == x1].values[0] #find At(x1), atomic mass of species x1
        At_x2 = df['At(i)'].loc[df['species'] == x2].values[0]
        return (xenv[row,i1]/At_x1)/(xenv[row,i2]/At_x2)
    else:
        sum_x1 = 0
        sum_x2 = 0
        for j in range(n1):
            At_x = df['At(i)'].iloc[i1+j]
            sum_x1 += xenv[row,i1+j]/At_x
        for j in range(n2):
            At_x = df['At(i)'].iloc[i2+j]
            sum_x2 += xenv[row,i2+j]/At_x
        return sum_x1/sum_x2

def radiated_L(curr_mc): #calculate (radiated) luminosity of the star with current core mass
        return 238800*0.230*(np.power(curr_mc,2) - 0.0305*curr_mc - 0.23)

def AGB_radius(curr_mtot, curr_L): #calculate current AGB star radius
    return 1.125*np.power(curr_mtot,-0.33) * (np.power(curr_L,0.4) + 0.383*np.power(curr_L,0.76))

def tau_ip(curr_mtot): #calculate interpulse period, this will be the timestep
    tau_ip = 4.50*(1.689 - curr_mtot) 
    return 10**tau_ip # years

def min_core(curr_mtot): #calculate the core-mass at the first thermal pulse
    if curr_mtot < 3:
        return 0.53 - (curr_mtot-2.0)*(-0.03192) # approx for low-mass AGB stars (1-3Msun)
    elif curr_mtot >= 3:
        return 0.60 + (curr_mtot-3.0)*0.18 ##linear fit to core mass at first TP (valid to 4Msun)

def mcmin_func(curr_mtot): # calculate min core mass for dredge-up (valid to 4Msun)
    a1 = 0.732759
    a2 = -0.0202898
    a3 = -0.0385818
    a4 = 0.0115593
    m2 = np.power(curr_mtot,2)
    m3 = np.power(curr_mtot,3)
    return a1 + a2*curr_mtot + a3*m2 + a4*m3

def core_growth(i): #core mass growth
    L_H = radiated_L(mc[i]) #Lsun, radiated luminosity
    X = xenv[i,0] #current H mass fraction in envelope
    return q*(L_H/X)*dt 

def mass_loss(i): #calculate mass lost through stellar winds
    L_i = radiated_L(mc[i])
    L[i] = L_i
    R_i = AGB_radius(mtot[i], L_i)
    R[i] = R_i
    logP = -2.07 + 1.94*np.log10(R_i) - 0.9*np.log10(mtot[i])
    P = 10**(logP) #period, days
    
    if P < 500:
        return 10**(-11.4 + 0.0125*P)
    else:
        rate = L_i*Lsun/(c*v_exp) #in cgs, g/s
        return rate * year/Msun #in Msun/yr

"""
Global constants - don't change
"""
Lsun = 3.828E33 #erg/s, solar luminosity
Msun = 1.989E33 #g, solar mass
Xsun = 0.7154 #solar H mass fraction
c = 2.99792E10 #cm/s, speed of light
v_exp = 15E5 #cm/s, expansion velocity
year = 3600.0*24.0*365.25 #s
Z = 0.02 # initial metallicity
Y = 0.28 # initial helium mass fraction
X = 1-Z-Y
Xsun = X #hydrogen mass fraction in Sun, assume Z = 0.02
menv_min = 0.1 #Msun, the minimum envelope mass for TDU, i.e. termination cond
q = 9.555E-12 #Msun/Lsun/yr

"""
Initial conditions
"""
time = 0 #yr, total time taken in TP-AGB phase
mtot[0] = 3.0 #Msun, initial total stellar mass
mc[0] =  min_core(mtot[0]) #Msun, initial core mass
menv[0] = mtot[0] - mc[0] #Msun, initial envelope mass
#
# TDU parameters
#
lambda_ = 0.5 #max dredge-up parameter; default 0.5
mc_min = mcmin_func(mtot[0]) #min core mass for dredge-up; can set manually
print("lambda_max and mc min", lambda_, mc_min)
#
time = 0 #yr, total time taken in TP-AGB phase
dt = tau_ip(mc[0]) #yr, initial timestep
#
xenv[0] = df['X(i)'] #initial envelope mass fractions
#         H    He    12C   13C  14N   15N   16O   17O   18O   
xinter = [0.0, 0.75, 0.22, 0.0, 7E-7, 7E-7, 0.01, 4E-7, 4E-7, 
          to_X(2.4,2.88,'sr'), to_X(2.7,2.18,'ba'), to_X(2.2,2.04,'pb')] #intershell mass fractions
          #Sr                   Ba                      Pb

"""
Simulate TP-AGB phase
Main loop
"""
i = 0 #time step
m_dredge = 0.0 #total mass dredge-up during the simulation
n_TDU = 0 #number of TDU episodes

while menv[i] >= menv_min:
    i += 1
    dmc[i-1] = core_growth(i-1)
    
    if mc[i-1] >= mc_min:
        lambda_i = lambda_*(1.0 - np.exp(-((n_TDU+1)/3.0)))  #dredge-up, increasing until lambda_max is reached
        n_TDU += 1
    else:
        lambda_i = 0 #no dredge up
        
    dm_dredge[i-1] = lambda_i*dmc[i-1] #dredged-up mass --> move to previous loop 
    mc[i] = mc[i-1] + dmc[i-1] - dm_dredge[i-1] #new core mass
    mtot[i] = mtot[i-1] - mass_loss(i-1)*dt #mass loss through stellar wind
    menv[i] = mtot[i] - mc[i] #new envelope mass
    
    for j in range(n_species): #update envelope composition
        dx = dm_dredge[i-1]*xinter[j]
        oldx = xenv[i-1,j]*(menv[i]-dm_dredge[i-1])
        xenv[i,j] = (oldx + dx) / menv[i]
    
    time += dt
    m_dredge += dm_dredge[i-1]
    
    #update dt with new core mass
    dt = tau_ip(mc[i])
    #print('new dt =', dt)

"""
Print out key results
"""

print("Total M_dredge: ", m_dredge)

print("TP-AGB phase duration (yr): ", time-dt) #exclude last iteration, overshoot

print("Number of TDU episodes: ", n_TDU-1) #exclude last iteration, overshoot
	  
print('Final C/O: ', ratio(i-1, 'c', 'n', 2, 6, isotopic = False, n1 = 2, n2 = 3))
	  
print('Final C12/C13: ', ratio(i-1, 'c12', 'c13', 2, 3))

print('Final N14/N15: ',ratio(i-1, 'n14', 'n15', 4, 5))

print('Final A(Sr): ', to_A(i-1, 'sr', 9))

print('Final A(Ba): ', to_A(i-1, 'ba', 10))

print('Final A(Pb): ', to_A(i-1, 'pb', 11))

"""
Write output file
"""
filename = "%s.txt" % ("output_lambda_" + str(lambda_))
with open(filename, "w") as file:
    file.write("  ".join(header[:5]) + "     " + "         ".join(header[5:]) + "\n")
    for j in range(i):
        stellar_properties = np.around([j, mc[j], mtot[j], R[j], L[j]], 4)
        formatted_abundances = ["{:.5e}".format(x) for x in xenv[j,:]]
        curr_row = np.concatenate([stellar_properties, formatted_abundances])
        file.write("       ".join(map(str, curr_row)) + "\n")
```

::: tip

为方便，先写一下几个能够调整的参数：

- `lambda_`：是 third dredge-up (TDU) 的参数，
  $$
  \Delta M_{\text{dredge}} = \lambda\Delta M_c
  $$
  也就是 TDU 周期导致的质量变化与核质量变化的比例. 这个值是随着 TDU 进行到第几个周期而变化的
  $$
  \lambda = \lambda_{\max}(1-e^{-N/N_r})
  $$
  ($N_r$ 是一个参数.) 代码中的 `lambda_` 指这里的 $\lambda_{\max}$. $\lambda$ 如果大于 $1$，表明核在增长，反之在缩小.
- `mtot[0]`：初始总质量. 单位是 $M_\odot$
- `mc_min`：核质量达到多少的时候开始 TDU 的条件. 默认值是通过一个模型得到的函数，但是可以手动修改.
- `mass_loss()`：这是一个函数，表征星风造成的质量损失，可以修改它内部的参数.

:::

一些问题：

- The code is set up to run a $3M_\odot$ AGB model. Try changing the maximum $\lambda$ parameter - how do your outputted quantities change?
  
  修改 `lambda_` 这个参数的值到 `0.7`，发现 TDU 周期个数从 24 个增加到了 32 个，且同位素比变化 (比如 `C12/C13` 从 `1` 左右增加到 `3` 附近)、最终重元素产率也增加.
- What happens if you change the mass to $2M_\odot$? Does your model become carbon rich? Why or why not.
  
  这种情况 `C/O` 已经降低到小于 $1$，并不算 carbon rich.
- Real AGB stars that are enriched in s-process elements tend to be carbon rich, where C/O $>1$ and show Sr and Ba abundances that are a factor of $10$ (or more) above the solar values. Consider the $2M_\odot$ case. 
  
  What do you need to change in the code to allow the model to reproduce these observations?
  
  似乎仅仅通过调整 `lambda_` 到一个非常变态的值也无法达到 C/O $>10$，还会导致非物理的结果. 因此在调节 `lambda_` 的同时还必须调整 `mc_min`. 但是观察 `min_core()` 这个函数，它决定 `mc[0]`，因此最低不能低于这个值. 在 $M=2M_\odot$ 的情况下，Amanda 已经设定好，核的最小质量不能小于 $0.53$.

  > 我这么说是因为我踩了这个坑，然后发现更低的质量完全无法影响 `C/O` 的值，去问 Amanda 之后她说这个值被定死了... 当然这是一个开放性的问题，她也说为什么不尝试改一下这个函数呢？

  我选择设定 `mc_min` 为 $0.55$，`lambda_` 为 $0.9$，这时候 `C/O` 已经能够飙到 $13$ 以上了.
- What happens if you change the mass to $1M_\odot$ or $1.5M_\odot$? Try changing parameters to ensure your star become C-rich.
  
  $1.5M_\odot$ 的情况下还能用上一题设定的那两个参数，`C/O` 大概是 $10$；$1M_\odot$ 情况下，只有 `mc_min` 调到底才行，也就是 $0.53$，甚至 $0.54$ 都只能达到 `C/O` $\approx 4.4$.
  
  > 当然，C-rich 条件只是 C/O $>1$ 而已，所以要使得 C-rich 并没有那么严苛的条件，一般而言只用降低一些 `mc_min` 就能轻易达到.
- There are S-type AGB stars with initial masses as low as $1M_\odot$. S-type AGB stars have $0.5 \lesssim$ C/O  $\lesssim1$, with detected lines of the radioactive element technetium (Tc) which can be made by the s-process. The detection of Tc can be considered a tracer for the s-process so we would expect to find enhancements in Sr, Ba and Pb, if we could observe those elements. 
  
  What do you need to do to your $1M_\odot$ (or $1.5M_\odot$) models to match these observations?

  这个问题我和同学试了很多个 `mc_min` 和 `lambda_` 的参数都没有成功，因为总是会得到 $A$(Sr) (以及另外的重元素) 最终产率和这两个参数都不是单调关系的结论. 但是这个问题又显然不是这么复杂的那种. 因此回到酒店之后我用 codex 把这两个参数和重元素产率的三维关系图给画出来了，如下：

  ::: window img no-padding

  ![](https://1845440081.cdn.123clouddisk.com/1845440081/ymjew503t0l000dei9utekzkbzxwouoaDIYxAIFxDda1DGxPDwUzAa==.png)

  :::

  这图已经很明显了：那些凸起来的锯齿明显是因为模拟代码是一个不连续的 toy model，因此仅凭调参肯定会出现 bug；但是大体上已经能够看出趋势.
- Mass-loss is also highly uncertain. Going back to the $3M_\odot$ model, try changing the mass-loss rate by increasing it by a factor of $10$, and then reducing it by a factor of $10$. How do the surface compositions change?
  
  明显，增大 `mass_loss()` 之后 C/O 变少 (其他也相应变化)，TDU 开始的时间后移、周期数变少，另外重元素产率也相应降低. 但是每一个 TDU episode 内部的过程没有很大区别.

  减小为原来 $1/10$，TDU 周期数暴增到 $86$，和上面完全相反.
- How do you think the stellar yields would change as a result of changing i) the amount of TDU, ii) the mass-loss rate on the AGB?
  
  从之前 lecture 中讲到的定义来看就是：TDU 更多 / 更慢的 mass loss 会导致更高 stellar yield. 因为这两种情况 AGB star 都有更多时间来抛出物质，积分的区域变大了.