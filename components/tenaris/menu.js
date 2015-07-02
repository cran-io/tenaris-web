$(function(){
	$('.menu-open').click( function() {
		$(this).fadeOut();
		$('.menu-close').fadeIn();
		$('.menu-site').fadeIn();
		$('.menu').addClass('opened');
	});

	$('.menu-close, .menu a').click( function() {
		$('.menu-close').fadeOut();
		$('.menu-open').fadeIn();
		$('.menu').removeClass('opened');
		$('.menu-site').fadeOut();
	});
});
