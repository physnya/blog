---
url: /quantum-mechanics/lesson-16-spin-2/index.md
---
Pauli 矩阵：
$$
\sigma\_x=\begin{pmatrix}
0&1\1&0
\end{pmatrix},\quad\sigma\_y=\begin{pmatrix}
0&-\text{i}\\\text{i}&0
\end{pmatrix},\quad\sigma\_z=\begin{pmatrix}
1&0\0&-1
\end{pmatrix}
$$
自旋是 $S\_i=\frac{\hbar}{2}\sigma\_i$. 它们的性质是，

* $\[\sigma\_j,\sigma\_k]=2\text{i}\varepsilon\_{jki}\sigma\_i$，也就是自旋 $\[S\_j,S\_k]=\text{i}\hbar\varepsilon\_{jki}S\_i$.
* ${\sigma\_j,\sigma\_k}=2\delta\_{jk}I$，也就是自旋 $S\_i^2+S\_j^2+S\_k^2=\frac{3}{4}\hbar^2I$.
* $\sigma\_i^\dagger=\sigma\_i$，本征值是 $1$.

$$
\Braket{S\_x^2}+\Braket{S\_y^2}+\Braket{S\_z^2}=\frac{\hbar^2}{4}\cdot(I+I+I)=\frac{3}{4}\hbar^2I
$$

其中用到了 $\sigma\_i^2={\sigma\_i,\sigma\_i}/2=I$，这个结果符合角动量量子化：
$$
S^2=s(s+1)\hbar^2=\frac{1}{2}\left(\frac{1}{2}+1\right)\hbar^2=\frac{3}{4}\hbar^2
$$
自旋磁矩：比轨道角动量的旋磁比要大一倍，旋磁比定义为 $\vec{\mu}=\gamma\vec{B}$ 中的 $\gamma$.

Lamor 进动：在一个恒定的磁场 $\vec{B}\_0$ 中的自旋进动，
$$
\Braket{\vec{S}(t)}=\frac{\hbar}{2}\[\sin\alpha\cos(\gamma B\_0t)\hat{x}-\sin\alpha\sin(\gamma B\_0t)\hat{y}+\cos\alpha\hat{z}]
$$
