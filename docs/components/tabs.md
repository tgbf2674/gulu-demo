---
title: Tabs - 标签
---

# 标签


## 预览

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

## 选项
1. 默认高亮状态 g-tabs 需要设置 selected 属性来确定默认标签。
你可以这样：:selected.sync="selectedTab",其中 selectedTab 是你需要传递的默认值。
并且该标签的子组件应该是 g-tabs-head 和 g-tabs-body ，否则你会得到一个警告。
2. disabled 状态 disabled 属性用于 g-tabs-item 标签，可以设置该标签的不可用状态。
