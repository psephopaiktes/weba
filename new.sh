#!/bin/sh

#記事IDを引数にとる
#yearmonth_slugで作成 201710_hello-worldなど
ID=$1

#引数がなかった場合は入力を待つ
if [ -z ${ID} ]; then
  echo "please enter post name"
  read ID
fi

#記事ファイルを作成してatomで開く
hugo new post/$ID.md --editor="atom"

#記事IDをクリップボードにコピーしておく。
echo $ID | pbcopy

#記事用の画像フォルダを作成し、Finderで開く
mkdir src/images/post/$ID
open src/images/post/$ID

#サーバをたててChromeで開く
open -a "Google Chrome.app" http://127.0.0.1:1313/
hugo server -D
