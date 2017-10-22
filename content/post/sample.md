+++
contentlist = true
tags = []
categories = []
slug = "sample"
title = "post parts sample"
description = "sample"
date = "2017-07-30T23:34:34+09:00"
css = false
js = false
id = ""
draft = true
update = ""

+++


## 基本要素
- *斜体*
- <b>軽い強調</b>
- **強い強調**。
- ~~否定~~
- `inline code`
- この文章に脚注をつける.[^1]
[^1]: 脚注の説明。最後にまとめられる
- [LINK](https://gohugo.io/)
- "自動でダブルクォートを整形"
- ダッシュは---長くつなげます
- URLは自動的にリンク配置
    - https://gohugo.io/
- 4/5 ←分数も勝手に変えます
- {{< embed-line
    "https://gohugo.io/"
    "引用源引用源引用源引"
>}}

> 引用 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 

{{< embed-line
    "https://gohugo.io/"
    "引用源引用源引用源引"
>}}



### embed-card

{{< embed-card
    "http://system.blog.uuum.jp/entry/2016/02/16/120000"
    ""
    "静的サイトジェネレータ「Hugo」について - UUUM攻殻機動"
    "system.blog.uuum.jp"
>}}

{{< embed-line
    "https://gohugo.io/"
    "引用源引用源引用源引"
>}}

## Definition lists
Cat
: Fluffy animal everyone likes

Internet
: Vector of transmission for pictures of cats

## 左寄せ画像
{{< img "left" "20170803_hello-world--pc.jpg" "AltString" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 右寄せ画像
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
{{< img "right" "20170803_hello-world--pc.jpg" "AltString" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 中央寄せ
{{< img "center" "20170803_hello-world--pc.jpg" "AltString" >}}

## 指定なし
![altString](/images/bg.jpg )

---

## UL
- aaaaaaaaaaaaaa
- Lorem ipsum dulor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    - ああああ
    - ああああああああああああああああああああああああああああああああああああああああああああああああああああ
    - あああ
- asf

## OL
1. aaaaaaaaaaaaaa
1. Lorem ipsum elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    1. あああ
    1. あああ
1. asf
    * あああ
    * あああ

## Table
右寄せ | 左寄せ
--:|:--
aa | aa 
aadg | aadfgb 

header | 真ん中寄せ | header 
:--|:--:|:--
aa | aa | aa 

## Checkbox
- [ ] タスク1
- [x] タスク2
- ああああ[^2]
[^2]: ああああああああああ
- あああ

## Affiliate


## CODE

#### test.js
```js
var elm = document.getElementById('gotop');

{{<em>}}window.addEventListener('scroll', function()

    if( window.pageYOffset > 200 ) elm.classList.add('show');{{{</em>}}
    else elm.classList.remove('show');

}, false);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
