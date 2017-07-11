$( function(){

    console.log('© hirata 2017');

    // go top
    // $(window).on('scroll', function() {
    //     if ($(this).scrollTop() > 200)
    //         $('#gotop').css('right','0');
    //     else
    //         $('#gotop').css('right','-8rem');
    // });
    // $('#gotop').on('click', function() {
    //     $(this).css('right','-8rem');
    //     $('body,html').animate({scrollTop:0}, 'swing');
    // });

    // sticky sidebar
    // $(window).on('scroll', function() {
    //     if ($(this).scrollTop() > 200)
    //         $('.search').addClass('sticky');
    //     else
    //         $('.search').removeClass('sticky');
    // }

    //smooth scroll
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // fix viewport more than 1920px
    if( $(window).width() > 1920 )
        $('meta[name=viewport]').attr('content','width=1920,initial-scale=1"');

});
