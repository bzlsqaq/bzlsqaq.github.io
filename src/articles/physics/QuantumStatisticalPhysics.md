---
title: 量子统计物理
category: 物理
tag: 量子
---
<style scoped>

.expr {
  display: inline-block;
  padding: 0;
  margin: 0;
  vertical-align: center;
  
}
.bgc-yellow{
  background-color:rgba(250, 246, 0, 0.44); ;
  
}
</style>
## 量子统计物理学基础
### 纯粹系综和混合系综
纯粹系综



## 系综配分函数
### 经典集团展开
N粒子经典系统哈密顿量：
$$H=\sum_{i=1}^{N}\frac{p_i^2}{2m}+\sum_{i<j}v_{ij}$$
配分函数$Z=\sum_{i}e^{-\beta E_{i}}$，其中：$\beta=\frac{1}{k_BT}$，代入哈密顿量：
$$Z_N(V,T)=\frac{1}{N!h^{3N}}\int{d^{3N}pd^{3N}re^{-\beta(\sum_{i=1}^{N}\frac{p_{i}^{2}}{2m}+\sum_{i<j}v_{ij})}}$$
对动量积分：
$$\int{d^{3N}pe^{-\beta\sum_{i=1}^{N}\frac{p_{i}^{2}}{2m}}}$$
$$=\int{d^{3N}pe^{-\frac{\beta}{2m}\sum_{i=1}^{N}p_{i}^2}}$$
$$=(\sqrt{\frac{2\pi m}{\beta}})^{3N}$$
这里利用高斯积分公式<span class='expr bgc-yellow' >$\int_{-\infty}^{+\infty}{e^{-\frac{1}{2}ax^2}dx}=\sqrt{\frac{2\pi}{a}}$</span>，
动量积分后，剩下的对坐标的积分用$Q_N(V,T)$表示：
$$Z_N(V,T)=\frac{1}{N!\lambda^{3N}}Q_N(V,T)$$
$$Q_N(V,T)=\int^{3N}{re^{-\beta\sum_{i<j}v_{ij}}}$$
其中$\lambda=\sqrt{\frac{2\pi\hbar^2}{mk_BT}}$，这是平均热波长，对于每一个$v_{ij}$可以写为(梅耶函数)：
$$e^{-\beta v_{ij}}=1+f_{ij}$$
则表示为,
$$Q_N(V,T)=\int{d^{3N}\prod_{i<j}(1+f_{ij})}$$
其中N粒子连乘有$\sum_{N}(N-1)$，即$\frac{1}{2}N(N-1)$项，将连乘的每一项展开：
$$Q_N(V,T)=\int{d^{3N}[1+(f_{12}+f_{13}+\cdots)+(f_{12}f_{13}+f_{12}f_{14}+\cdots)+\cdots]}$$
定义$l-$集团是$l$个粒子的相连图，对于任意一个$N$粒子图，都可以用若干个$l-$集团乘积表示，其中有$m_l个$是$l-$集团，一组合规的$\{m_l\}$满足：
$$\sum_{l=1}^{N}{lm_l}=N,m_l=0,1,2,\cdots,N$$
不同的$\{m_l\}$对应$Q_N$不同长度的项，例如$m_1=N-1$,$m_2=1$,$m_{other}=0$对应的项$S\{m\}$为$d_{r_i}d_{r_j}f_{ij}$，以$S\{m_l\}$表示与$\{m_l\}$对应的所有N粒子图之和，则$Q_N$可以表示为：
$$Q_N=\sum_{m_l}{S\{m_l\}}$$
所以$\{s_{m_l}\}$可以写作：
$$\{s_{m_l}\}=\sum_{p}[shape_1]^{m_1}[shape_2]^{m_2}[shape_3]^{m_3}\cdots$$
$[shape_n]$为n个粒子包含所有$l-$集团不同拓扑形状之和。
例如$[shape_2]$的形状数量为1，即
$$\int d^3r_1d^3r_2f_{12}$$
$[shape_3]$的形状数量为4,即
$$\int d^3r_1d^3r_2d^3r_3(f_{12}f_{23}+f_{12}f_{13}+f_{13}f_{23}+f_{12}f_{23}f_{13})$$
积分项中的数字可以是任意粒子，所以这里只表示其形状。
$p$为N粒子之间的置换，对于$\sum_{p}$，立方项中$m_l$个$l-$集团之间的交换不产生新图形，并且在$l-$集团中，$l$个粒子之间的交换也不产生新图形，所以有：
$$\sum_{p}=\frac{N!}{[(1!)^{m_1}(2!)^{m_2}\cdots][m_1!m_2!\cdots]}$$
定义集团积分$b_l(V,T)$为
$$b_l(V,T)=\frac{1}{l!\lambda^{3l-3}V}[shape_l]$$