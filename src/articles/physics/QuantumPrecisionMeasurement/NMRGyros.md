---
title: Spin-Exchange-Pumped NMR Gyros
categories:
  - 物理
  - 量子精密测量
tags:
  - NMRG
---

### 引言
 核磁共振陀螺仪基于超极化惰性气体的自旋交换泵浦技术，最早由Litton(2001NGC)公司研究。He-3的SEOP最早由Bouchiat等人在1960年实现，之后Litton开始研究SEOP在陀螺应用的使用 ^[Grover,1979 https://doi.org/10.1103/PhysRevLett.40.391 ]，这项工作包括首次演示了Ne,Ke和Xe的SEOP，认识到可以达到很好的极化度，并使用原子磁强计增强信号，由于环形激光陀螺和光纤激光陀螺的发展，80年代终止。之后Happer等人发表了一系列相关研究 ^[Happer,1984 https://doi.org/10.1103/PhysRevA.29.3092 ]，这项工作随后被运用到各个方向。
早期 NMRG 的应用基础理论已在一篇综述中得到较为系统的梳理^[Kanegsberg,1978 https://sci-hub.se/10.1117/12.965468 ]，而 Donley 则从当代视角对其进行了全新概述 ^[Donley,2010 https://ieeexplore.ieee.org/document/5690983 ]，同期中国与日本也围绕该领域开展了相关研究。
### 使用超极化气体的NMR
#### 核磁共振场和旋转的振动
核自旋与环境之间的主要基本相互作用是磁场。在一个静止的惯性参考系中，约化核自旋角动量$\boldsymbol{K}$在磁场$\boldsymbol{B}$中的哈密顿量$H=-\hbar\gamma\boldsymbol{B}\cdot\boldsymbol{K}$，其中$\gamma$对于Xe-131是正的，对于其他同位素是负的。由Ehrenfest定理导出Bloch方程
$$
\begin{equation}
\frac{d\langle\boldsymbol{K}\rangle}{dt}=\frac{-i}{\hbar}\langle[\boldsymbol{K},H]\rangle=i\gamma\langle[\boldsymbol{K},\boldsymbol{K}\cdot\boldsymbol{B}]\rangle=\gamma\boldsymbol{B}\times\langle\boldsymbol{K}\rangle
\end{equation}
$$

::: details 注解
$$
\begin{equation*}
\begin{split}
\langle[\boldsymbol{K},\boldsymbol{K}\cdot\boldsymbol{B}]\rangle&=\langle[\boldsymbol{K},K_x]B_x+[\boldsymbol{K},K_y]B_y+[\boldsymbol{K},K_z]B_z\rangle\\
&=\langle i(k_z\vec{e_y}-k_y\vec{e_z})B_x+i(k_x\vec{e_z}-k_z\vec{e_x})B_y+i(k_y\vec{e_x}-k_x\vec{e_y})B_z\rangle\\
&=-i\boldsymbol{B}\times\langle\boldsymbol{K}\rangle
\end{split}
\end{equation*}
$$
:::

::: tip 
以下内容省略期望值符号
:::
约定均匀磁场$\boldsymbol{B}=B_z\vec{e_z}$,这样可以分为平行和垂直磁场的分量$\boldsymbol{K}=K_z\vec{e_z}+\boldsymbol{K}_\perp$。
定义$K_+=K_x+iK_y=K_\perp e^{-i\phi}$,布洛赫方程变为
$$\frac{dK_+}{dt}=-i\gamma B_zK_+$$
::: details 注解
$K_x=K_\perp cos\phi,k_y=K_\perp sin\phi,K_\perp=\sqrt{K_x^2+k_y^2}$
$B_z$场下，$B\times K=B_zK_x\vec{e_y}-B_zk_y\vec{e_x}$
:::
方程解为
$$K_+(t)=K_\perp e^{-i\gamma\int B_zdt}$$
其中相位$\phi=\gamma\int B_zdt$
