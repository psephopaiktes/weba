+++
contentlist = false
tags = ["aaa","ccc"]
categories = ["design"]
slug = "test333333"
title = "ジュゲムジュゲム"
description = "ああああ"
date = "2017-07-30T23:34:34+09:00"
css = ""
js = ""
image = "20170717_hello-world"
draft = false
update = "2017.08.02"

+++

## ブログをつくりました
平田です。社会人になりました。仕事がはじまってから毎日が新しいことばかりで、苦労もありますがとても楽しいです。自分用の勉強メモとして、またアウトプットの場としてまたブログがほしくなったので、仕事終わりに少しずつ本ブログ「WEBA」を作成しました。昔同名のブログを一瞬やってましたが、完全にゼロベースで作り直しました。月2くらいで更新できればいいかな...くらいのぬるいブログ予定ですが、これからよろしくお願いいたします。情報配信はTwitter, Facebook, RSSなどで行いますので、よろしければ左上のメニューからフォローください。

## ブログの開発構成
このブログは[HUGO](https://gohugo.io/)と[GitHub Pages](https://pages.github.com/)という仕組みを利用して運用しています。技術ブログといえばはてブやMediumではじめるか、WordPressで作るかが定番でしたが、いま作るならStaticSiteGenerator(SSG)が良さそうだったのでこうなりました。SSGとは、要はMarkdownなどで書いたブログを静的なHTMLに変換・管理してくれるCUIツールです。Ruby製のJekyllやNode製のHexoなどたくさん種類がありますが、人気が高く性能も高いHugoを選択しました。Go言語製ってのもモダンっぽくて惹かれますね。Wordpress同様Hugoにも無料のブログテーマがたくさん公開されていますが、WEBAは完全にフルスクラッチで作成しました。ちなみにjQueryも使ってません。GitHub PagesはGitHubのレポジトリに上げたHTMLソースをWebサイトとして公開できる公式の無料機能です。なのでこのブログはドメイン代だけで運用してます。最高。

## HugoのMarkdown変換
Hugoは[Blackfriday](https://github.com/russross/blackfriday)というMarkdsown変換エンジンを内蔵しており、Markdownで書いた記事を自動的に適切にStaticなHTMLに変換してくれます。カスタマイズしたCSSをあてることで、かなり楽にリッチなドキュメントを記述できます。以下に、自分用のためにも機能を紹介しておきます。ここに書いた他にもLaTex形式で記述したりする機能もあるみたいです。

### h3h3h3h3h3h3h3
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
{{< img "left" "20170717_hello-world_pc.jpg" "AltString" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 右寄せ画像
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
{{< img "right" "20170717_hello-world_pc.jpg" "AltString" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 中央寄せ
{{< img "center" "20170717_hello-world_pc.jpg" "AltString" >}}

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

## CODE

```js
var elm = document.getElementById('gotop');

window.addEventListener('scroll', function(){
    if( window.pageYOffset > 200 ) elm.classList.add('show');
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
