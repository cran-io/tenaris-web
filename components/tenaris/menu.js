$(function(){
	// Open Menu

	$('.menu-open').click( function() {
		$(this).fadeOut();
		$('.menu-close').fadeIn();
		$('.menu-site').fadeIn();
		$('.menu').addClass('opened');
		$('.menu-marker').fadeOut();
	});

	$('.menu-close, .menu a').click( function() {
		$('.menu-close').fadeOut();
		$('.menu-open').fadeIn();
		$('.menu').removeClass('opened');
		$('.menu-site').fadeOut();
		$('.menu-marker').fadeIn();
	});
});
