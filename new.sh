#!/bin/sh

#記事IDを引数にとる
#yearmonth_slugで作成 201710_hello-worldなど
ID=$1

#引数がなかった場合は入力を待つ
if [ -z ${ID} ]; then
  echo "please enter post name ex.201710_hello-world"
  read ID
fi

#記事ファイルを作成してVS CODEで開く
hugo new post/$ID.md --editor="code"

#記事IDをクリップボードにコピーしておく。
echo $ID | pbcopy

#記事用の画像フォルダを作成し、Finderで開く
mkdir src/images/post/$ID
open src/images/post/$ID
open src/images/post.ai

#サーバをたててChromeで開く
hugo server -D
open -a "Google Chrome.app" http://127.0.0.1:1313/
