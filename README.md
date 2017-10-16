# weba

## Hugoメモ
- `hugo server -D` :記事ファイル中でdraft = trueになっている記事も表示する。  
- `hugo server -w` :ウォッチ  
- `hugo new post/20170717_Hello-World.md` :記事の作成  
- `hugo new post/20170717_Hello-World.md --editor="atom"` :記事の作成。Atomで開く
- `hugo` :deploy
- docs(public)内に下書きファイルも残るので、公開前に整理すること

## 構成メモ
ファイル・フォルダ名 | 役割
--:|:--
archetypes/ | 記事作成時のデフォルトmarkdownテンプレート置き場
content/ | 記事が保存されていく場所
docs/ | 公開ルート。**編集しない**
layouts/ | ページテンプレート置き場
node_modules/ | Gulp用。nodeパッケージ置き場
src/ | Gulp用。圧縮前のSASSやJS
static/ | Gulpでビルドされたものが置かれる。HUGOコマンドでdocsへコピーされる。**編集しない**
.editorconfig | 書式統一プラグイン
.gitignore | Git除外設定
config.toml | Hugo設定
design.ai | サイト中で使うクリエイティブ
gulpfile.js | Gulp設定
LICENSE | ライセンス
package.json | npmパッケージ
README.md | これ
