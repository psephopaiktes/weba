$( function(){



    console.log('© hirata 2017');



    // go top
    $(window).on('load scroll', function() {
        if ( $(this).scrollTop() > 200 ) $('#gotop').addClass('show');
        else $('#gotop').removeClass('show');
    });
    $('#gotop').on('click', function() {
        $('body,html').animate({scrollTop:0}, 'swing');
    });



    // toggle menu
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
    $(window).on('load scroll', function() {
        if( $('#mask').css('display') == 'block' )
            $('.menu,.search').slideUp(300);
        $('#menuButton,#searchButton').removeClass('on');
        $('#mask').fadeOut(200);
    });



    // sticky sidebar
    var stopPos = $('.search').offset().top - parseInt( $('header').css('padding-top') );
    $(window).on('load scroll', function() {
        if ( $(this).scrollTop() > stopPos )
            $('.search').addClass('sticky');
        else
            $('.search').removeClass('sticky');
    });



    // scroll reveal
    $('#posts li').each(function(){
        if ( $(window).scrollTop() > $(this).offset().top - $(window).height()*9/10 )
            $(this).css({ opacity:1,transform:'translateY(0)' });
    });
    $(window).on('load scroll', function() {
        $('#posts li').each(function(){
            if ( $(window).scrollTop() > $(this).offset().top - $(window).height()*9/10 )
                $(this).addClass('inview');
        });
    });



    // fix viewport more than 1920px width
    if( $(window).width() > 1920 ){
        $('meta[name=viewport]').attr('content','width=1920,initial-scale=1"');
    }



});
