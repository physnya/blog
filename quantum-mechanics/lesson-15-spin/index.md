---
url: /quantum-mechanics/lesson-15-spin/index.md
---
角动量的另一个对易关系，
$$
\[L^2,\vec{L}]=0,\quad\[L^2,L\_i]=0
$$
考虑新定义一个角动量升降算符，
$$
\hat{L}\_{\pm} = \hat{L}*x\pm \text{i}\hat{L}*y
$$
计算这个算符的本征值，得到
$$
L^2f\_t = (L*-L*+L\_z^2+\hbar L\_z)f\_t = \hbar^2l(l+1)f\_t
$$
也就是说这个本征值是 $\lambda=\hbar^2l(l+1)$. 因此角动量的模长本征值只能是 $\hbar\sqrt{l(l+1)}$，对于每一个这样的角动量，都能绕着 $z$ 轴扫出一个锥面，这就是一个相干态.

实际上我们刚刚的计算中对 $l$ 是什么样的数字并没有要求，但是 $L\_z=\hbar m$ 应该是分立的值，而同时有 $m=-l,-l+1,\cdots,0,\cdots,l$. 也就是对于一个 $l$，有 $2l+1$ 个 $m$ 值，要求 $l=$ 半整数.

这会造成特殊的性质，也就是自旋需要转 $4\pi$ 才能够回到自身.

## 自旋

自旋是固有的性质，和坐标、运动没有关系. 自旋的大小只能是半整数和整数，fermion 的自旋是半整数、boson 的自旋为整数.

在二维空间中 $z$ 方向自旋的表示为
$$
S\_z=\frac{\hbar}{2}\begin{pmatrix}
1&0\0&-1
\end{pmatrix}
$$
自旋的升降算符
$$
S\_{\pm}=\hbar\begin{pmatrix}
0&1\text{ or }0\0\text{ or }1&0
\end{pmatrix}
$$
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
