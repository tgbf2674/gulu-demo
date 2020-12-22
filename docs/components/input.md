---
title: Input - 输入框
---

# 输入框

## 预览
<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

## 选项
Input 组件的选项有： disabled, readonly, error。 并且支持数据的双向绑定。

1. disabled
表示是否禁用状态，默认为 false，禁用。

2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，readonly 可以被选中，不能修改。

3. error
给 Input 添加 error 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。

4. v-model
使用该属性，用户的输入会绑定到JS变量，JS变量的改变也会改变用户的输入
