---
title: Collapse - 折叠面板
---
# 折叠面板

## 预览

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>


## 选项

1. 双向绑定
Collapse 组件的双向绑定与 Vue 官方的类似，支持 .sync 修饰符。

```
<g-collapse :selected.sync="selected">
```

2. 必选参数
Collapse 组件必须接受两个参数： title 用于显示折叠面板的标题。 name 用于表示选中的 item。
```
<g-collapse-item title="标题1" name="1">1</g-collapse-item>
```
3. 手风琴效果
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 single 属性来更改，默认是 false 。

<ClientOnly>
<collapse-single-demo></collapse-single-demo>
</ClientOnly>
