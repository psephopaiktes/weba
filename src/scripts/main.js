$( function(){

    console.log('© hirata 2017');

    //smooth scroll
    $('#gotop').on('click', function() {
        $('body,html').animate({scrollTop:0}, 'swing');
    });

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
