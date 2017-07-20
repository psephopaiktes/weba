console.log('© hirata 2017');

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

    function toggleMenu( target, hide ){
        if( !$('#'+target+'Button').hasClass('on') ){
            $('#'+target+'Button').addClass('on');
            $('#mask').fadeIn(200);
            $('.'+hide).slideUp(300);
            $('.'+target).slideDown(300);
            $('#'+hide+'Button').removeClass('on');
        }else{
            $('#'+target+'Button').removeClass('on');
            $('.'+target).slideUp(300);
            $('#mask').fadeOut(200);
        }
        return;
    }
    $('#menuButton').on('click', function(){
        toggleMenu( 'menu','search' );
    });
    $('#searchButton').on('click', function(){
        toggleMenu( 'search','menu' );
        setTimeout(function(){
            $('.search__box input').focus();
        },300);
    });
    $('#mask').on('click', function(){
        $('#menuButton,#searchButton').removeClass('on');
        $('.menu,.search').slideUp(300);
        $('#mask').fadeOut(200);
    });
    $(window).on('scroll', function() {
        if( $('#mask').css('display') == 'block' )
            $('.menu,.search').slideUp(300);
        $('#menuButton,#searchButton').removeClass('on');
        $('#mask').fadeOut(200);
    });

}();

///////////////////////////////////////////////
// scroll reveal
///////////////////////////////////////////////
! function(){

    var elm = document.querySelectorAll('#posts li');

    // すでに画面何にある要素を表示
    [].forEach.call( elm, function(elm){

        var elmTop = elm.getBoundingClientRect().top + document.body.scrollTop;

        if ( window.pageYOffset > elmTop - window.outerHeight*3/4 ){
            elm.style.opacity = 1;
            elm.style.transform = 'translateY(0)';
        }

    });

    // スクロールして画面内に入った要素を表示
    window.addEventListener('scroll', function(){

        [].forEach.call( elm, function(elm){

            var elmTop = elm.getBoundingClientRect().top + document.body.scrollTop;

            if ( window.pageYOffset > elmTop - window.outerHeight*3/4 )
                elm.classList.add('inview');

        });

    }, false);

}();



///////////////////////////////////////////////
// fix viewport more than 1920px width
///////////////////////////////////////////////
! function(){

    var elm = document.querySelector('meta[name=viewport]');

    if( window.innerWidth > 1920 )
        elm.setAttribute('content','width=1920,initial-scale=1');

}();
