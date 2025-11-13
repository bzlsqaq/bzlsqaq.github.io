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
过去NMRG的应用基础理论被一篇综述较完整的概括 ^[Kanegsberg,1978 https://sci-hub.se/10.1117/12.965468 ]，而Donley从当代视角对NMRG进行了新的概述 ^[Donley,2010 https://ieeexplore.ieee.org/document/5690983 ]，同一时间中国和日本也进行开展了研究。
### 使用超极化气体的NMR
#### 核磁共振场和旋转的振动
核自旋与环境之间的主要基本相互作用是磁场。在一个静止的惯性参考系中，约化核自旋角动量$\boldsymbol{K}$在磁场$\boldsymbol{B}$中的哈密顿量$H=-\hbar\gamma\boldsymbol{B}\cdot\boldsymbol{K}$，其中$\gamma$对于Xe-131是正的，对于其他同位素是负的。由Ehrenfest定理导出Bloch方程
$$
\frac{d\langle\boldsymbol{K}\rangle}{dt}=\frac{-i}{\hbar}\langle[\boldsymbol{K},H]\rangle=i\gamma\langle[\boldsymbol{K},\boldsymbol{K}\cdot\boldsymbol{B}]\rangle
$$