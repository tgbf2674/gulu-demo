---
title: Toast - 弹出提示框
---

# Toast

## 预览
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

 
## 选项
想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件.

1. autoClose 
此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。

2. closeButton
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。
代码

3. enableHtml
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, enableHtml:true 。 开启后就可以在 Toast 内容区域写 HTML 语法。

4. position
可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
