+++
title = "UIデザインのそのあと。 Zeplin, avocodeなど、デザイナ↔エンジニアの連携に使われる「Handoff Service」8個の比較 【2018年版】"
date = "2018-09-14T00:46:13+10:00"
update = ""
draft = true
categories = ["Design"]
tags = ["App・Service", "sketch", "UI"]
description = "アジャイル開発が当たり前の昨今、デザインもこまめに修正され、より効率のよいエンジニアへのカンプ共有が求められています。カンプ上に直接数値やフォント指定を書いていた時代は終焉を迎え、現在は多くのデザイン共有サービスが群雄割拠しています。"
id = "201809_handoff"
css = true
js = false
contentlist = true

+++


アジャイル開発が当たり前の昨今、UIデザインもこまめに修正され、より効率のよいエンジニアへのカンプ共有が求められています。カンプ上に直接数値やフォント指定を書いていた時代は終焉を迎え、現在は多くの「**Handoff**」と呼ばれるデザイン共有サービスが群雄割拠しています。その中からいくつかを触ってみて、特徴をまとめてみました。

ちなみに今回、画面遷移などの<b>プロトタイピング</b>(社内では紙芝居って呼んでます)や、<b>デザインシステム</b> についてはあまり触れません。非常に関連が深い話題なので、そのうち別記事で触れたいと思います。


## 比較マトリクス
とりあえず、各サービスのステータスを表にまとめてみます。

<div id="matrix">
    <img src="/images/post/201809_handoff/matrix.png" alt="ハンドオフサービスの比較テーブル">
    <img src="/images/post/201809_handoff/header.png" alt="テーブルヘッダー画像">
</div>

これだけでの判断は難しいと思います。

## avocode
{{< embed-card
    "https://avocode.com/"
    "https://avocode.com/static/og/facebook/avocode-og-homepage.png?ver=1"
    "Hand-off and Inspect Sketch, PSD, XD, AI, & Figma designs | Avocode"
    "avocode.com"
>}}
かなり昔からあるサービスです。機能はダントツに高く、PSDのガイドを保持してくれたり、画像の書き出しもかなり細かく設定可能です。

## Craft
## Gallery
## Marvel
## Extract
## Sketch Cloud
## Sympli
## Zeplin


## Handoff サービスを使わないという選択肢
この記事の主題と反するようですが、これらのようなHandoffサービスを使わないデザイン共有フローも選択肢として存在します。**デザイナが作成したカンプファイルを、そのままエンジニアも確認する**というものです。このフローの誕生には以下のような背景があります。

### Sketchの学習コストの低さ
SketchなどのUI作成ツールは、PhotoshopやIllustratorと比べて表現力が少なくシンプルな分、利用自体の学習コストはかなり低いです。また、エンジニアが主に必要な、

- オブジェクトのサイズや距離の確認
- 画像アセットの抽出

程度の機能だけであれば、デザイナに教えてもらえば1時間もかからずに習得できるはずです。

### オリジナル情報の欠如
Handoffサービスは非常に便利な反面、もともとのデザインソフトの情報が100%残るわけではありません。とくにどのようなシンボルが使われ、コンポーネントの設計がどうなってるかを理解するためには、どのツールもまだまだ機能不足です。Sketchのシンボルを直接確認すれば、デザイナがどのような思想でUIを設計しているか理解の助けになります。

### AbstractのようなVCS(VesrsionControlSystem)の流行
[Abstract](https://www.goabstract.com/)を筆頭に、[Plant](https://plantapp.io/)、[Kactus](https://kactus.io/)、[Git Sketch Plugin](https://mathieudutour.github.io/git-sketch-plugin/)、[Versions](https://versions.sympli.io/) など、デザインカンプもGitライクに(もしくはGitそのもので)バージョン管理できるようになっています。これらは複数のデザイナ間でのレビューや差分確認のために使われることが多いですが、「だったらエンジニアもそこ見たほうが便利だよね」という考えのもと、これら自体がデザイン共有に使われることもありえます。

### Figmaの存在
FigmaはSketchの様なUI作成ツールで、

- ブラウザで動くので複数のOSで使える
- Sketchでできる機能はほぼ網羅している
- VCSが組み込まれており、バージョン管理できる
- 複数人でひとつのカンプを同時に編集できる

などの特徴から人気を集めています。エンジニアもブラウザでそのままカンプにアクセスできるため、Handoffサービスの必要性が低いです。

{{< embed-card
    "https://www.figma.com/"
    "https://images.ctfassets.net/1khq4uysbvty/1ECmDehHU4OwiSkY6CG8Gg/3c502330b41477afbcb9f89b434d6b56/og-image-2017-03-30.png"
    "Figma: the collaborative interface design tool."
    "www.figma.com"
>}}
