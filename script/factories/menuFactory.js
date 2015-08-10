angular.module('tenarisApp.factories').factory('menuFactory', function(){
	
	return {
		removeIt: function() {
			$( ".marker-list" ).empty()
		},
		
		makeIt: function($scope){
			setTimeout(
				function(){
					var currentSecction = '.item-0';
					$('body').animate({
						scrollTop:0
					}, 'fast');

					$('.section').each( function(item){
						seccion = item;
						$('.marker-list').append('<li class="marker-items goto item-'+seccion+'" data-name="'+seccion+'"></li>');	
						$(this).addClass('section-'+seccion);
					});
					$(currentSecction).addClass('selected');

					var currentId = 0;
					var id = 0;
					$(document).on('click', '.goto', function(evento){
						
						id = $(this).data('name');
						if(currentId!=id){
							$('body').animate({
								scrollTop: $('body').innerHeight()*id
							}, 'slow');
							currentId = id;
						}
					});
			},300);
		},

		anchor: function() {
			id = $(this).data('name');
			if(currentId!=id){
				$('.page').animate({
					scrollTop: $('body').innerHeight()*id
				}, 600);
				currentId = id;
			}
		}
	}
});