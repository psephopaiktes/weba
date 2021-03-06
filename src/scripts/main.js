console.log('© hirata 2018');


///////////////////////////////////////////////
// go top
///////////////////////////////////////////////
! function(){

    var elm = document.getElementById('gotop');

    window.addEventListener('scroll', function(){
        if( window.pageYOffset > 200 ) elm.classList.add('show');
        else elm.classList.remove('show');
    }, false);

    elm.addEventListener('click', function(){

        var cosParameter = window.scrollY / 2,
            scrollCount = 0,
            oldTimestamp = performance.now();

        function step (newTimestamp) {
            scrollCount += Math.PI / ( 600 / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) window.scrollTo(0, 0);
            if (window.scrollY === 0) return;
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);

    }, false);

}();



///////////////////////////////////////////////
// toggle menu
///////////////////////////////////////////////
! function(){

    var menu = {
        button : document.getElementById('menuButton'),
        box : document.getElementsByClassName('menu')[0]
    };
    var search = {
        button : document.getElementById('searchButton'),
        box : document.getElementsByClassName('search')[0]
    };
    var mask = document.getElementById('mask');
    var viewFlag = 0;

    // target を展開して、hideを隠す関数
    function toggleMenu( target, hide ){

        if( target.button.classList.contains('on') ){
            target.button.classList.remove('on');
            target.box.style.setProperty('--height',0);
            mask.style.display = 'none';
            viewFlag = 0;
        }else{
            target.button.classList.add('on');
            hide.button.classList.remove('on');
            hide.box.style.setProperty('--height',0);
            target.box.style.setProperty('--height',target.box.scrollHeight+'px');
            mask.style.display = 'block';
            viewFlag = 1;
        }

        return;

    }

    menu.button.addEventListener( 'click', function(){
        toggleMenu( menu, search );
    }, false );

    search.button.addEventListener( 'click', function(){
        toggleMenu( search, menu );
        setTimeout( function(){
            search.box.querySelector('input').focus();
        }, 300 );
    }, false );

    // 展開したメニューを全て隠す
    function hideAll() {
        if( !viewFlag ) return;
        menu.button.classList.remove('on');
        search.button.classList.remove('on');
        menu.box.style.setProperty('--height',0);
        search.box.style.setProperty('--height',0);
        mask.style.display = 'none';
        return;
    }
    mask.addEventListener('click', hideAll, false );
    window.addEventListener('scroll', hideAll, false );

    // 隠れたメニューがPC幅になったときに消えたままなのを防ぐ
    window.addEventListener('resize', function(){
        if( window.innerWidth >= 1280 ){
            menu.box.style.setProperty('--height',0);
            search.box.style.setProperty('--height',0);
        }
    }, false );

}();



///////////////////////////////////////////////
// search
///////////////////////////////////////////////
! function(){

    var elm = document.getElementById('search__box');

    elm.addEventListener('keydown', function(){
        if(window.event.keyCode==13)
            window.open('https://www.google.co.jp/search?q=site:hirata.blog+' + elm.value );
    }, false);

}();



///////////////////////////////////////////////
// pager
///////////////////////////////////////////////
! function(){

    var elm = document.getElementById('pager__select');

    if(!elm) return false;

    elm.addEventListener('change', function(){
        location.href = this.value;
    }, false);

}();



///////////////////////////////////////////////
// scroll reveal GH PAGESだと挙動が安定しないので、いったんOFF
///////////////////////////////////////////////
// ! function(){
//
//     var elm = document.querySelectorAll('#posts li');
//
//     // 画面内の要素をhide
//
//     // すでに画面内にある要素を表示
//     [].forEach.call( elm, function(elm){
//
//         var elmTop = elm.getBoundingClientRect().top + document.body.scrollTop;
//
//         if ( window.pageYOffset > elmTop - window.outerHeight*3/4 ){
//             elm.style.opacity = 1;
//             elm.style.transform = 'translateY(0)';
//         }
//
//     });
//
//     // スクロールして画面内に入った要素を表示
//     window.addEventListener('scroll', function(){
//
//         [].forEach.call( elm, function(elm){
//
//             var elmTop = elm.getBoundingClientRect().top + document.body.scrollTop;
//
//             if ( window.pageYOffset > elmTop - window.outerHeight*3/4 )
//                 elm.classList.add('inview');
//
//         });
//
//     }, false);
//
// }();



///////////////////////////////////////////////
// fix viewport more than 1920px width
///////////////////////////////////////////////
! function(){

    var elm = document.querySelector('meta[name=viewport]');

    if( window.innerWidth > 1920 )
        elm.setAttribute('content','width=1920');

}();
