angular.module('tenarisApp.factories').factory('menuFactory', function(){
	
	return {
		removeIt: function() {
			$( ".marker-list" ).empty()
		},
		
		makeIt: function(){
			setTimeout(
				function(){
					var currentSecction = '.item-0';
					$('.section').each( function(item){
						seccion = item;
						$('.marker-list').append('<li class="marker-items goto item-'+seccion+'" data-name="'+seccion+'"></li>');	
						$(this).addClass('section-'+seccion);
					});

					$('.marker-items').each(function(){
							$(this).on('click', function(){
							$(currentSecction).removeClass('selected');
							$(this).addClass('selected');
							currentSecction = $(this);
						});
					});
					$(currentSecction).addClass('selected');

					var currentId = 0;
					var id = 0;
					$(document).on('click', '.goto', function(){
						id = $(this).data('name');
						if(currentId!=id){
							$('.page').animate({
								scrollTop: $('body').innerHeight()*id
							}, 600);
							$('.marker-items').removeClass('selected');
							$('.marker-items.item-'+id).addClass('selected')
							currentId = id;
						}
					});
			},300);
		}
	}
});