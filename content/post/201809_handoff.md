+++
title = "UIデザインのそのあと。 Zeplin, AvoCodeなど、デザイナ↔エンジニアの連携に使われる「Handoff Service」8個の比較 【2018年版】"
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
まずは各サービスのステータスを表で比べてみます。

<style>
#handoff-matrix{
    table-layout: fixed;
    display: block;
    width: 100%;
    overflow: scroll;
    position: relative;
    font-size: 1.4rem;
}
#handoff-matrix tbody{
    display: block;
    width: max-content;
}
#handoff-matrix tr{
}
#handoff-matrix th,td{
    height: 80px;
}
#handoff-matrix th:first-child{
    width: 100px;
    display: block;
    position: sticky;
    left: 0;
    padding: 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background-color: rgba(0,0,0,.7);
    color: #fff;
}
#handoff-matrix tr:first-child th:first-child{
    line-height: 80px;
}
#handoff-matrix th:first-child a{
    color: #fff !important;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 55px;
    background-image: url(/images/post/201809_handoff/splite.png);
    background-size: 200px auto;
}
#handoff-matrix .platform{
    width: 120px;
}
#handoff-matrix td.platform{
    color: transparent;
    background-image: url(/images/post/201809_handoff/splite.png);
}
#handoff-matrix td.platform.win.mac.lin{}
#handoff-matrix td.platform.win.mac{}
#handoff-matrix td.platform.mac{}
</style>

<table id="handoff-matrix">

<tr>
    <th>サービス名</th>
    <th>運営</th>
    <th>プラットフォーム</th>
    <th>対応ソフト</th>
    <th>料金</th>
    <th>アップロード</th>
    <th>確認</th>
    <th>アセットの管理<br><small>※画像の抽出しやすさ</small></th>
</tr>

<tr>
    <th>
        <a href="https://zeplin.io" style="background-position: 0 0">Zeplin</a>
    </th>
    <td>
        <a href="https://zeplin.io/about">Zeplin</a>
    </td>
    <td class="platform mac win lin">
        MacOS, Windows, Linux
    </td>
</tr>

</table>

## それぞれのサービスの概要
### Zeplin



## Handoff サービスを使わないという選択肢
この記事の主題と反するようですが、これらのようなHandoffサービスを使わないデザイン共有フローも選択肢として存在します。どういうことかというと、**デザイナが作成したカンプファイルをそのままエンジニアも確認する**というものです。これには以下のような背景があります。

### Sketchの学習コストの低さ
SketchなどのUI作成ツールは、PhotoshopやIllustratorと比べて表現力が少なくシンプルな分、利用自体の学習コストはかなり低いです。また、エンジニアが必要な、

- オブジェクトのサイズや距離の確認
- 画像アセットの抽出

程度のみであれば、デザイナに教えてもらえば1時間もかからずにできるようになるはずです。

### オリジナル情報の欠如
Handoffサービスは非常に便利な反面、もともとのデザインソフトの情報が100%残るわけではありません。とくにどのようなシンボルが使われ、コンポーネントの設計がどうなってるかを理解するためには、どのツールもまだまだ機能不足です。

### AbstractのようなVCSの流行
[Abstract](https://www.goabstract.com/)を筆頭に、[Plant](https://plantapp.io/)、[Kactus](https://kactus.io/)、[Git Sketch Plugin](https://mathieudutour.github.io/git-sketch-plugin/) など、デザインカンプもGitライクに(もしくはGitそのもので)バージョン管理できるようになっています。これらは複数のデザイナ間でのレビューや差分確認のために使われることが多いですが、「だったらエンジニアもそこ見たほうが便利だよね」という考えのもと、これら自体がデザイン共有に使われることもありえます。

### Figmaの存在
FigmaはSketchの様なUI作成ツールで、

- ブラウザで動くので複数のOSで使える
- Sketchでできる機能はほぼ網羅している
- VCSが組み込まれており、バージョン管理できる
- 複数人でひとつのカンプを同時に編集できる

などの特徴から最近人気が出てきています。エンジニアもブラウザでそのままカンプにアクセスできるため、Handoffサービスの必要性が低いです。

{{< embed-card
    "https://www.figma.com/"
    "https://images.ctfassets.net/1khq4uysbvty/1ECmDehHU4OwiSkY6CG8Gg/3c502330b41477afbcb9f89b434d6b56/og-image-2017-03-30.png"
    "Figma: the collaborative interface design tool."
    "www.figma.com"
>}}
