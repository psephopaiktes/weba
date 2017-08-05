


///////////////////////////////////////////////
// syntax highlight
///////////////////////////////////////////////
! function(){
    hljs.initHighlightingOnLoad();
}();



///////////////////////////////////////////////
// set md anchor target="brank_"
///////////////////////////////////////////////
! function(){

    var links = document.links;

    for (var i = 0; i < links.length; i++) {
       if (links[i].hostname != window.location.hostname) {
           links[i].target = '_blank';
           links[i].rel = 'noopener';
       }
    }

}();



///////////////////////////////////////////////
// Generate Content List
///////////////////////////////////////////////
! function(){

    var contentList = document.getElementById('contentList'),
        contentHeader = document.querySelectorAll('article h2');

    if( contentList ){

        [].forEach.call( contentHeader, function(elm,i){

            // h2 に遷移用のアンカーIDを設定
            elm.id = 'content-' + i;

            // 目次にh2のリストを追加
            var contentItem = document.createElement('li');
            contentItem.innerHTML = '<a href="#content-' +i+ '">' + elm.innerText + '</a>';
            contentList.querySelector('ol').appendChild( contentItem );

            // 各h2の下に「目次に戻る」アンカーを追加
            elm.insertAdjacentHTML( 'afterend', '<a class="backContentList" href="#contentList">▲ 目次へ戻る</a>' );

        });

    }

}();



///////////////////////////////////////////////
// embed card bookmarklet ( use on browser )
///////////////////////////////////////////////
/*
javascript:!function(undefined){
    var og = document.querySelector('meta[property="og:image"]');
    if( og )
        var img = og.getAttribute('content');
    else
        var img = 'images/embed-thumbnail.png';
    !function(a){
        var b = document.createElement('textarea'),
        c = document.getSelection();
        b.textContent = a, document.body.appendChild(b), c.removeAllRanges(), b.select(), document.execCommand('copy'), c.removeAllRanges(), document.body.removeChild(b);
    }('<a class="embed-card" href="'+document.location+'" target="brank_" rel="noopener"><img class="og" src="'+img+'" alt="参照記事サムネイル"><h5>'+document.title+'</h5><p></p><img class="favi" src="http://www.google.com/s2/favicons?domain='+location.host+'"><span>'+location.host+'</span><i class="material-icons">open_in_new</i></a>');
}();

javascript:!function(undefined){
    var og = document.querySelector('meta[property="og:image"]');
    if( og ) var img = og.getAttribute('content');
    else var img = '';
    !function(a){
        var b = document.createElement('textarea'),
        c = document.getSelection();
        b.textContent = a, document.body.appendChild(b), c.removeAllRanges(), b.select(), document.execCommand('copy'), c.removeAllRanges(), document.body.removeChild(b);
    }('{{< embed-card\n'+'    "'+document.location+'"\n'+'    "'+img+'"\n'+'    "'+document.title+'"\n'+'    "'+location.host+'"\n'+'>}}\n');
}();
*/
