---
url: /compact-object/lesson-2-star-structure-and-evolution/index.md
---
建立恒星的方程，我们通常考虑质量守恒、静力学平衡、能量守恒和反应几个角度.

质量守恒：
$$
\frac{\mathrm{d}M}{\mathrm{d}r}=4\pi r^2\rho(r)
$$
静力学平衡：
$$
\frac{\mathrm{d}P}{\mathrm{d}r}=-\frac{GM(r)\rho(r)}{r^2}
$$
而压力来源于气体的热压力和光子的辐射压. 对于气体热压力，可以用理想气体方程来简单估计，也就是
$$
P\_{\text{gas}}=\frac{\rho k\_BT}{\mu m\_u}
$$

***

恒星结构方程 —— Lane-Emden 方程. 这里我们考虑的是密度随着半径的变化情况，
$$
\rho(r) = \rho\_c\theta^n(\xi),\quad r=a\xi
$$
这里 $\theta$ 是一个无量纲化的函数，$a$ 是某一个特征长度，$\rho\_c$ 是中心密度. 对于所有的多方模型 $P=K\rho^{1+1/n}$，特征长度满足下式：
$$
a^2=\frac{(n+1)K}{4\pi G}\rho\_c^{1/n-1}
$$
最终得到的方程是
$$
\frac{1}{\xi^2}\frac{\mathrm{d}}{\mathrm{d}\xi}\left(\xi^2\frac{\mathrm{d}\theta}{\mathrm{d}\xi}\right)=-\theta^n
$$
关于它的解法，我们早在 [恒星与行星](/star-planet/lesson-3-lane-emden-equ/) 讨论过.

如果考虑辐射压和气体压力共存的情况，我们称为 Eddington 标准模型，其假设为 $\beta=P\_{\text{gas}}/(P\_{\text{rad}}+P\_{\text{gas}})$ 在任意半径处都保持不变，由此还是会得到相似的结论，也就是质量越大半径越小. 其总压力为
$$
P\_{\text{tot}} = \left(\frac{3ck\_B^4}{4\sigma\_B\mu^4m\_u^4}\frac{1-\beta}{\beta^4}\right)^{1/3}\rho^{4/3}
$$
::: warning

这个假设真的合理吗？问了 GPT 之后想起来好像恒星与行星实际上讲过这个问题，当然那里的讲法根本没有给我们提出这个问题的机会，而是直接引入 Eddington 因子
$$
\Gamma\_r \equiv\frac{\kappa L\_r}{4\pi cGM\_r}
$$
(这里的 $\kappa$ 是 opacity.) 根据辐射压和热压力分别的方程，上式实际上就是 $\mathrm{d}P\_{\text{rad}}/\mathrm{d}P$. 只要满足 $\kappa$ 是一个常数 & $L\_r/M\_r$ 是一个常数，那么 Eddington 的假设就是正确的. 这两个条件相较于直接强硬地要求 $\beta=\text{constant}$ 显然更好满足，因为：

* 光子在恒星中的散射主要是电子散射，而电子的数密度仅仅和组分相关，$\kappa$ 近似为常数是合理的；
* $L\_r/M\_r$ 为常数实际上意味着单位恒星质量的能量产率是一个定值，在简单的恒星结构描述下，这是合理的.

因此我们更倾向于用「$\Gamma\_r$ 为定值」来描述 Eddington 模型的假设.

:::

***

关于核反应. 这个也在之前的 [恒星与行星](/star-planet/lesson-4-ignition-of-sun/) 讲过. 直接上结论 —— $0.08M\_{\odot}$ 是氢的燃烧门槛.
