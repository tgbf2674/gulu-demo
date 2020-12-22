---
title: Grid - 栅格
---

# 栅格

## 预览
<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

## 选项
Row 选项
1. gutter
通过给 Row 设置 gutter 属性, 可以让栅格有间隔。单位为 px 。

<ClientOnly>
<row-gutter-demo></row-gutter-demo>
</ClientOnly>

2. align
通过给 Row 设置 align 属性, 可以定义其子组件在该节点里面的排版方式。

<ClientOnly>
<row-align-demo></row-align-demo>
</ClientOnly>

# Col选项
Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。

1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置 span 属性来实现。 例如：三个等宽的列可以使用<i-col span="8">列</i-col> 来创建其中一个，其余两个再复制两份。

2. offset
使用 offset 属性,可以将列向右侧偏。
例如，offset="4" 将元素向右侧偏移了 4 个列（column）的宽度。
示例：
<ClientOnly>
<col-offset-demo></col-offset-demo>
</ClientOnly>

3. 响应式
支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 Col 这四个属性，默认为 手机端响应，span值为24。
注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。
