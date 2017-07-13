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



    // sticky sidebar
    var stopPos = $('.search').offset().top - $('.follow').outerHeight();
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



    //smooth scroll
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });



    // fix viewport more than 1920px width
    if( $(window).width() > 1920 )
        $('meta[name=viewport]').attr('content','width=1920,initial-scale=1"');



});
