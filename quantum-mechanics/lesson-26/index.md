---
url: /quantum-mechanics/lesson-26/index.md
---
变分法来源于能量是波函数的泛函：
$$
\delta\varepsilon=\langle\psi|H|\psi\rangle
$$
能量的近似值就是泛函的极值.

***

今天讲一个应用场景. 接着上面变分法的做法，我们可以对波函数在某一组基下展开，展开的系数实际上就是变分参数，展开的阶数越高，最后的结论越准确.

对于一个双电子原子，其 Hamiltonian 为
$$
H = -\frac{\hbar^2}{2m}(\nabla\_1^2+\nabla\_2^2)-\frac{2e^2}{4\pi\varepsilon\_0}\left(\frac{1}{r\_1}+\frac{1}{r\_2}\right)+\frac{e^2}{4\pi\varepsilon\_0}\frac{1}{|\vec{r}\_1-\vec{r}\_2|}
$$
考虑视为独立体系，最后一项作为微扰项引入.

> 很明显这并不是「微扰」，但是对于复杂的问题只能这样处理.

更进一步地处理是平均场近似，把另一个电子的作用平均掉. 或者用变分法，
$$
\langle V\rangle = \frac{e^2}{4\pi\varepsilon\_0}\left(\frac{8}{\pi a^3}\right)^2\int\frac{e^{-4(r\_1+r\_2)/a}}{|\vec{r}\_1-\vec{r}*2|}\text{d}^3\vec{r}*1\text{d}^3r\_2
$$
这个积分的处理是数理方法中的内容，
$$
\frac{1}{|\vec{r}*1-\vec{r}*2|}\propto\sum\_m\left(\frac{r*<}{r*>}\right)^l\cdot\frac{1}{r*>}(-1)^lY*{lm}(\hat{r}*1)Y*{lm}^\*(\hat{r}\_2)
$$

***

谐振子基态：
$$
\psi\_{00}(x,y,z)\propto\exp\left(-\frac{x^2+y^2}{4l^2I}-\frac{z^2}{4l\_z^2}\right)
$$
对于 Bose-Einstein 凝聚体，其整体波函数是 $\psi\_{00}^{(1)}\psi\_{00}^{(2)}\cdots$. 但是这是没有相互作用的结果，有相互作用时，波函数呈现 Gauss 型还是其他形状？变宽还是变窄？
