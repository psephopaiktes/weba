#!/bin/sh

#Git用コミットメッセージを引数にとる
COMMENT=$1

#引数がなかった場合は入力を待つ
if [ -z ${COMMENT} ]; then
  echo "please enter commit message"
  read COMMENT
fi

#staticとdocsを一度消してGulpとHugoでビルド
rm -rf static
rm -rf docs
gulp copyStatic
gulp sass
gulp js
gulp img
hugo

#GitHubPagesに公開
git add -A
git commit -m "$COMMENT"
git push origin master
