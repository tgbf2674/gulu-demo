# 一个Vue UI组件

[![Build Status](https://travis-ci.org/tgbf2674/gulu-demo.svg?branch=main)](https://travis-ci.org/tgbf2674/gulu-demo)
## 介绍
这是我在学习Vue过程中做的一个UI框架，希望对你有用
## 开始使用

1.  添加CSS样式
    使用本框架前，请在CSS中开启border-box

    ```
    *{box-sizing: border-box;}
    *::before{box-sizing: border-box;}
    *::after{box-sizing: border-box}
    ```
    IE8及以上浏览器支持以上样式
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    html {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    IE 11及以上浏览器支持以上样式
    

2. 引入gulu
    ```
   import {Button,ButtonGroup,Icon} from 'gulu'
   import 'gulu/dist/index.css'
   
   export default{
    name: 'app',
   components:{
   'g-button': Button,
   'g-icon': Icon
   }
   }
   ```

## 文档

## 提问

## 变更

## 联系方式

## 贡献代码

