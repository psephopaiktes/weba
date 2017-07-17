$( function(){



    // for syntax highlights
    // prettyPrint();

    // content list
    if( $('#contentList').length ){
        $("article h2").each(function(i){
            $(this).attr('id','content-'+i);
            $('#contentList ol').append(
                '<li><a href="#content-' +i+ '">' +$(this).text()+ '</li>'
            );
            $(this).after(
                '<a class="backContentList" href="#contentList">▲ 目次へ戻る</a>'
            );
        });
    }

    // using bookmarklet
// javascript:!function(undefined){
//     var og = document.querySelector('meta[property="og:image"]');
//     if( og )
//         var img = og.getAttribute('content');
//     else
//         var img = 'images/embed-thumbnail.png';
//     !function(a){
//         var b = document.createElement('textarea'),
//         c = document.getSelection();
//         b.textContent = a, document.body.appendChild(b), c.removeAllRanges(), b.select(), document.execCommand('copy'), c.removeAllRanges(), document.body.removeChild(b);
//     }('<a class="embed-card" href="'+document.location+'" target="brank_" rel="noopener"><img class="og" src="'+img+'" alt="参照記事サムネイル"><h5>'+document.title+'</h5><p></p><img class="favi" src="http://www.google.com/s2/favicons?domain='+location.host+'"><span>'+location.host+'</span><i class="material-icons">open_in_new</i></a>');
// }();


});
