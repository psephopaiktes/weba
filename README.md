# weba

https://hirata.blog/ のソースファイル。  
GitHub Pagesで公開中。

## 基本コマンド
- `hugo server -D` :記事ファイル中でdraft = trueになっている記事も表示する。  
- `hugo new post/20170717_Hello-World.md` :記事の作成
- `hugo new post/20170717_Hello-World.md --editor="code"` :記事の作成。Atomで開く
- `hugo` :deployする。docs(public)内に下書きファイルも残るので、手動でやる場合は公開前に整理すること
  - `rm -rf static`
  - `rm -rf docs`
  - `npm run build`
  - `hugo`
- `./new.sh $post-id` $post-idで記事作成の準備。$post-idは`yearmonth_word-word`。例:201710_hello-world。


## ファイル構成
ファイル・フォルダ名 | 役割
--:|:--
archetypes/ | 記事作成時のデフォルトmarkdownテンプレート置き場
content/ | 記事ファイルが保存されていく場所
docs/ | 公開ルート。**編集しない**
layouts/ | ページテンプレート置き場
src/ | ビルド前のSASSやJSや画像
static/ | NPMでビルドされたものが置かれる。HUGOコマンドでdocsへコピーされる。**編集しない**
config.toml | Hugo設定
design.ai | サイト中で使うクリエイティブ

## 例外memo

### - 記事ごとに固有のCSSやメディアファイルが欲しい時
- ファイル名は`src/images/post/{{ .Date.Format "20060102" }}_{{ .Slug }}.css`を作って記事のオプション`CSS`と`JS`をtrueかfalseで切り替える

### - デモ用の静的なHTMLがほしいとき
- src/images/postの各記事ごとのフォルダに置く
