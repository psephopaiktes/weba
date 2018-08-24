+++
title = "[Chromeカスタマイズ] よく使うWebサイトのデザインを自由に変えよう! 自分のCSSとJSを読み込む方法 [Stylish削除記念]"
date = "2018-08-22T00:46:13+10:00"
update = ""
draft = true
categories = ["Frontend"]
tags = ["Chrome", "web-design"]
description = "最低限HTMLとCSSの基礎知識があればOKです。Google検索やGitHubなどを黒い背景に変えたりできます。ローカルで拡張機能を作る方法なので、「安心」「JSも使える」「SCSSも使える」などメリットたくさん。"
id = "201808_chrome-stylize"
css = false
js = false
contentlist = false

+++

## 概要
PCでいろいろなwebページを見るとき、YouTubeやTwitterのダークモードのように背景を暗くしてみたいと思ったことはありませんか。また、特定の要素を消したり大きくしたり、フォントを変えるなど、自分独自のCSSを自由にあてたいと思いませんか。これらはChromeの拡張機能を使うことで実現でき、これまではStylishという拡張機能が定番で多くの人に使われていました。しかし先日、Stylishはユーザの閲覧履歴を勝手に収集していた理由から、[ChromeのWebストアから削除](https://forest.watch.impress.co.jp/docs/news/1131353.html)されました。

そこでこの記事では、非公開になったStylishのかわりに、自分で好きなCSSとJSを、好きなWebページに当てる方法を紹介します。ローカル上に拡張機能を作ってしまう方法で、以下のような特徴となります。

### 🙆 GOOD
- 任意のページに、自分で書いたCSSと**Javascript**を読み込むことができる
- ローカルでCSSやJSファイルを管理するので、SASSやTypeScriptなど自分の使い慣れた環境を使い放題
- ローカルでCSSやJSファイルを管理するので、GitやDropboxなどで管理可能
- サードパーティのエクステンションに依存してないので、廃止される心配・プライバシーの心配がない。

### 🙅 BAD
- 若干導入が面倒くさい
- Chrome間でアカウント同期してくれない
- Stylishのように、他のユーザが作成・公開しているCSSをワンボタン導入はできない。

上記のように、デメリットもありますが基本的には自由度が高く、できることが多くなります。それではさっそく手順をみていきましょう。


## 基本手順
Chrome拡張機能を作るのは意外と簡単で、一つのフォルダの中にHTMLやCSS, JSファイルと、設定ファイルである`manifest.json`ファイルを置くだけでできあがります。このフォルダをzip圧縮してアップロードすることでストア公開ができますし、ローカルで個人的に使うだけならこのフォルダを`chrome://extensions/`のページで読み込むだけです。面倒な人用に[テンプレートを作っておく](#template)ので、そちらをダウンロードして頂いた上で改造してもOKです。

Chrome拡張ではボタンを押したタイミングで実行できる<b>Browser Action</b>、ブラウザの新しいタブや履歴ページなどを置き換える<b>Override Pages</b>など、いろいろできる機能があります。今回は任意のURLページに対して任意のCSS,JSを読み込むことができる**Content Script**という機能を利用します。

### 1. manifest.jsonの作成
まず、好きな場所・名前でフォルダを作り、その中に`manifest.json`ファイルを作ります。

## テンプレート

[テンプレート 最小構成 <i class="material-icons">cloud_download</i>]

最小のファイル構成で作成した例です。ダウンロードして解凍後、好きなように改造してください。

[テンプレート SCSS, BABEL有り <i class="material-icons">cloud_download</i>]

NPMに慣れている方はこちらをおすすめします。使い方は`npm i`して`npm start`するだけです。

## まとめ
今回触ってみた方はわかると思いますが、Chrome拡張機能はHTML,CSS,JSの知識だけあればかなり簡単に作れます。今回の例の他に、新しいタブにカスタムページを表示する系も簡単に作れて楽しいです。

拡張機能の作成に興味を持った方は以下のエントリーが参考になるかもです。良いものが作れたらぜひ[ChromeWebStore](https://chrome.google.com/webstore/category/extensions)に公開しましょう。
- [初めてでも理解できるようになる「Google Chrome機能拡張の開発」 | OXY NOTES](https://oxynotes.com/?p=8836)
  - 少し古いページですが、ChromeExtensionの情報を全体的に俯瞰して理解するにはよくまとまっているページです。
- [2016年度版 僕が考えたChrome拡張機能を作るときのデザインパターン - Qiita](https://qiita.com/yoichiro6642/items/d446256e0bd709e2d76b)
  - ある程度Extensionに慣れて、ストア公開したいときなどに
- [ブラウザー拡張機能 - Mozilla | MDN](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions)
  - 筆者はあまり明るくないのですが、WebExtension APIという機能群を使うことで、ChromeだけでなくFirefox, Edgeなどでも使える拡張機能がほぼ同じコードで作れるようです。(Firefoxがこれに対応したせいで、それまでの多くのFirefoxプラグインが使えなり話題になりましたね。)
