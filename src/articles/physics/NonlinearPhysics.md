---
title: 非线性物理
category: 物理

tags:
  - 数学
  - python
---

<!-- more -->

```python :line-number
def multip_diff(func_f: Expr, func_g: Expr, elem_list: list[tuple[Symbol, Symbol, int]]):
    """
    Args:
        func_f: 双线性算子成积项的左边表达式
        func_g: 双线性算子成积项的右边表达式
        elem_list: 求导列表，每一项形式为(x,x0,number),对在x项中对x0求导后令x0=0,求导number次

    Returns: 计算后的函数表达式

    Notes: 注意双线性算子作用的两个部分

    """

    for i in func_f.atoms(Function):
        i_re=i
        for j in elem_list:
            i_re=i_re.replace(j[0],j[0]+j[1])
        func_f=func_f.replace(i,i_re)

    for i in func_g.atoms(Function):
        i_re=i
        for j in elem_list:
            i_re=i_re.replace(j[0],j[0]-j[1])
        func_g=func_g.replace(i,i_re)
    func = func_f * func_g


    for i in elem_list:
        func=func.diff(i[1],i[2]).subs(i[1],0).simplify()

    return func
```
::: preview 输入
display(multip_diff(f, g, [(t, t0, 1), (x, x0, 1)]))
:::
a
::: preview 输出
$\displaystyle f{\left(x,t \right)} \frac{\partial^{2}}{\partial x\partial t} g{\left(x,t \right)} + g{\left(x,t \right)} \frac{\partial^{2}}{\partial x\partial t} f{\left(x,t \right)} - \frac{\partial}{\partial t} f{\left(x,t \right)} \frac{\partial}{\partial x} g{\left(x,t \right)} - \frac{\partial}{\partial x} f{\left(x,t \right)} \frac{\partial}{\partial t} g{\left(x,t \right)}$
:::
