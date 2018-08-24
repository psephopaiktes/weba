+++
title = "[Chrome拡張] よく見るサイトのデザインを自由に変えよう! 自分のCSSとJSを読み込む方法 [Stylish削除記念]"
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
PCでいろいろなwebページを見るとき、YouTubeやTwitterのダークモードのように背景を暗くしてみたいと思ったことはありませんか。また、特定の要素を消したり大きくしたり、フォントを変えるなど、自分独自のCSSを自由にあてたいと思いませんか。
![例]()
これらはChromeの拡張機能を使うことで実現でき、これまではStylishという拡張機能が定番で多くの人に使われていました。しかし先日、Stylishはユーザの閲覧履歴を勝手に収集していた理由から、[ChromeのWebストアから削除](https://forest.watch.impress.co.jp/docs/news/1131353.html)されました。

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

上記のように、デメリットもありますが基本的には自由度が高く、できることが多くなります。それではさっそく手順をみていきましょう。とにかく楽にやりたい人は[めんどくさいひとむけの手順](#めんどくさいひとむけの手順)をご確認ください。(あまりオススメしませんが。)


## 基本手順
Chrome拡張機能を作るのは意外と簡単で、一つのフォルダの中にHTMLやCSS, JSファイルと、設定ファイルである`manifest.json`ファイルを置くだけでできあがります。このフォルダをzip圧縮してアップロードすることでストア公開ができますし、ローカルで個人的に使うだけならこのフォルダを`chrome://extensions/`のページで読み込むだけです。面倒な人用に[テンプレートを作っておく](#テンプレート)ので、そちらをダウンロードして改造していただくのがおすすめです。

Chrome拡張ではボタンを押したタイミングで実行できる<b>Browser Action</b>、ブラウザの新しいタブや履歴ページなどを置き換える<b>Override Pages</b>など、いろいろできる機能があります。今回は任意のURLページに対して任意のCSS,JSを読み込むことができる**Content Script**という機能を利用します。

### 1. manifest.jsonの作成
まず、好きな場所・名前でフォルダを作り、その中に`manifest.json`ファイルを作ります。`manifest.json`ファイルの中身は以下のような感じです。

#### manifest.json
```json
{
  "name": "chrome-stylize",
  "author": "Akira HIRATA",
  "description": "chrome extension for customize CSS and JS.",
  "version": "1.0.0",
  "manifest_version": 2,
  "web_accessible_resources": ["*"],
  "permissions": ["storage"],
  "content_scripts": [
    {
      "matches": ["https://www.google.co.jp/*"],
      "css": ["google/style.css"],"js": ["google/script.js"]
    },
    {
      "matches": ["http://www.nicovideo.jp/watch/*"],
      "css": ["nico/style.css"],"js": ["nico/script.js"]
    }
  ]
}
```

今回、上記の中で気にしなければいけないのは主に`content_scripts`の設定項目です。他は基本的にそのままで大丈夫です。`name`や`author`の項目は自由に変えて頂いても構いません。それぞれがどういう設定になっているのか気になる方は [Chrome 拡張機能のマニフェストファイルの書き方 - Qiita](https://qiita.com/mdstoy/items/9866544e37987337dc79) のページなどが参考になります。

### 2. 対象のページとファイルを設定
CSS, JSを読み込ませたいページを指定します。上記`manifest.json`の`content_scripts`の部分にURLのパターンを指定しましょう。今回はGoole検索とニコニコ動画の視聴ページを改造してみます。
```json
  "content_scripts": [
    {
      "matches": ["https://www.google.co.jp/*"],
      "css": ["google/style.css"],"js": ["google/script.js"]
    },
    {
      "matches": ["http://www.nicovideo.jp/watch/*"],
      "css": ["nico/style.css"],"js": ["nico/script.js"]
    }
  ]
```
`matches` が対象となるWEBページのURLパターン、`css`,`js`がそのページに読み込ませるCSS,JSファイルの指定です。

`*`はワイルドカードです。上記の例であれば、`https://www.google.co.jp/`から始まるURLすべてにマッチングします。

CSS,JSファイルを対象ページごとにフォルダ分けして作成しておきましょう。まだ中身は空白です。
![フォルダ構造]()

`css`,`js`は複数指定可能で、外部サーバのものを使うこともできます。jQueryを使いたい場合は `"js": ["https://code.jquery.com/jquery-3.3.1.min.js","google/script.js"]` などと書けばOKです。

### 3. CSS,JSを作成
上記で作成したCSS,JSを記述していきましょう。そのページのHTMLで、どの要素にどんなクラス名が使われているかはDevツールで地道に調べていくしかありません。細かいやり方は後述しますが、とりあえず以下のように`/google/style.css`と`/google/script.js`を書いてみてください。

#### /google/style.css
```css
body{
  background: #ccc !important;
}
```

#### /google/script.js
```js
console.log('Hello World');
```


### 4. Chromeに読み込ませる
Chromeの拡張機能ページを開きます。ChromeのURLフォームに `chrome://extensions/` を入力してください。

右上に「Developper mode(開発者モード)」のスイッチがあるので、ONにします。

先程まで作成していたフォルダを、この画面にドラッグ&ドロップすれば完了です。

適当にGoogle検索ページを開いてみてください。背景がグレーになり、Devツールのコンソールでメッセージが確認できるようになったかと思います。

これ以降、CSSやJSファイルをさらに変更した場合、**更新はすぐには反映されず、拡張機能ページをリロードして再読込する必要があります**。



## 効率よくCSSを書くには
上記が基本手順となりますが、やってみるとわかる通り、リアルタイムに結果を見ながらCSSを作成してくのは非常に面倒です。ここでは実際にどのようにCSSやJSファイルを書いていくのがよいか、2通りまとめてみます。

### Chrome DevToolで結果を見ながら作成する
上記までの手順を行うと、DevツールのSourceパネルで自分が作成したCSSを確認できます。ここで直接CSSをいじって、あとからファイルにコピペしてしまうのが良いでしょう。

1. 

また、基本的にカスタマイズしたCSSは[詳細度](https://developer.mozilla.org/ja/docs/Web/CSS/Specificity)の関係から優先されないことが多いです。なので、反映されてない場合は`!important`をつけて無理やり優先させてしまうのが簡単です。

### 公開されているスタイルをコピペする
こちらが圧倒的に楽ですね。ネット上には有志が作成したユーザースタイルシートがいろいろ公開されています。これをコピペしてしまうのが簡単です。もちろん、利用の際にはライセンスを確認して、著作権違反にならないようにご注意ください。(ローカルで個人的に使うだけなら大丈夫な場合がほとんどです。)

いままでStylihsを使っていた方は、公式サイトでCSSを探すのが楽かもしれません。

- [Website Themes & Skins by Stylish | Userstyles.org](https://userstyles.org/)


## めんどくさいひとむけの手順
1. [テンプレート](#テンプレート)をダウンロードして解答します。
2. manifest.jsonに対象のページと、読み込ませたいCSSを書きます。 [[詳しく]]()
3. ネットに公開されているイカすCSSをコピペするか、Devツールを使ってがんばってCSSを書きます。 [[詳しく]]()
4. Chromeの拡張機能ページで開発者モードをオンにして、フォルダをD&Dします。


## テンプレート

[テンプレート 最小構成 <i class="material-icons">cloud_download</i>](/images/post/201808_chrome-stylize/weba_chrome-stylize.zip)

最小のファイル構成で作成した例です。ダウンロードして解凍後、好きなように改造してください。

[テンプレート SCSS, BABEL有り <i class="material-icons">cloud_download</i>](/images/post/201808_chrome-stylize/weba_chrome-stylize_npm.zip)

NPMに慣れている方はこちらをおすすめします。使い方は`npm i`して`npm start`するだけです。srcフォルダ内のSCSSファイルとJSファイルが監視されてdocsフォルダにビルドされます。

## まとめ
今回触ってみた方はわかると思いますが、Chrome拡張機能はHTML,CSS,JSの知識だけあればかなり簡単に作れます。今回の例の他に、新しいタブにカスタムページを表示する系も簡単に作れて楽しいです。

拡張機能の作成に興味を持った方は以下のエントリーが参考になるかもです。良いものが作れたらぜひ[ChromeWebStore](https://chrome.google.com/webstore/category/extensions)に公開しましょう。
- [初めてでも理解できるようになる「Google Chrome機能拡張の開発」 | OXY NOTES](https://oxynotes.com/?p=8836)
  - 少し古いページですが、ChromeExtensionの情報を全体的に俯瞰して理解するにはよくまとまっているページです。
- [2016年度版 僕が考えたChrome拡張機能を作るときのデザインパターン - Qiita](https://qiita.com/yoichiro6642/items/d446256e0bd709e2d76b)
  - ある程度Extensionに慣れて、ストア公開したいときなどに
- [ブラウザー拡張機能 - Mozilla | MDN](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions)
  - 筆者はあまり明るくないのですが、WebExtension APIという機能群を使うことで、ChromeだけでなくFirefox, Edgeなどでも使える拡張機能がほぼ同じコードで作れるようです。(Firefoxがこれに対応したせいで、それまでの多くのFirefoxプラグインが使えなり話題になりましたね。)
