---
title: Lesson 16 自旋 (二)
permalink: /quantum-mechanics/lesson-16-spin-2/
createTime: 2025/11/17 16:48:20
---
Pauli 矩阵：
$$
\sigma_x=\begin{pmatrix}
0&1\\1&0
\end{pmatrix},\quad\sigma_y=\begin{pmatrix}
0&-\text{i}\\\text{i}&0
\end{pmatrix},\quad\sigma_z=\begin{pmatrix}
1&0\\0&-1
\end{pmatrix}
$$
自旋是 $S_i=\frac{\hbar}{2}\sigma_i$. 它们的性质是，

* $[\sigma_j,\sigma_k]=2\text{i}\varepsilon_{jki}\sigma_i$，也就是自旋 $[S_j,S_k]=\text{i}\hbar\varepsilon_{jki}S_i$.
* $\{\sigma_j,\sigma_k\}=2\delta_{jk}I$，也就是自旋 $S_i^2+S_j^2+S_k^2=\frac{3}{4}\hbar^2I$.
* $\sigma_i^\dagger=\sigma_i$，本征值是 $1$.

$$
\Braket{S_x^2}+\Braket{S_y^2}+\Braket{S_z^2}=\frac{\hbar^2}{4}\cdot(I+I+I)=\frac{3}{4}\hbar^2I
$$

其中用到了 $\sigma_i^2=\{\sigma_i,\sigma_i\}/2=I$，这个结果符合角动量量子化：
$$
S^2=s(s+1)\hbar^2=\frac{1}{2}\left(\frac{1}{2}+1\right)\hbar^2=\frac{3}{4}\hbar^2
$$
自旋磁矩：比轨道角动量的旋磁比要大一倍，旋磁比定义为 $\vec{\mu}=\gamma\vec{B}$ 中的 $\gamma$.

Lamor 进动：在一个恒定的磁场 $\vec{B}_0$ 中的自旋进动，
$$
\Braket{\vec{S}(t)}=\frac{\hbar}{2}[\sin\alpha\cos(\gamma B_0t)\hat{x}-\sin\alpha\sin(\gamma B_0t)\hat{y}+\cos\alpha\hat{z}]
$$


