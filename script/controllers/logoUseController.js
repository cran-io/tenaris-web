app.controller('logoUseController', function(menuFactory, $scope){
	$scope.pageClass = 'logo-use';
	menuFactory.removeIt();
	menuFactory.makeIt();

	$(".slider-control").click(function(e) {
                e.preventDefault();

                var slideId = $(this).attr('href');
                var currentSwitch = $(this);
                var switchs = $("a.slider-control");
                var pages = $('.slider-wrapper .slide');
                var currentPage = $('.slide'+slideId);
                
                if (!currentPage.hasClass('active')){
                	pages.removeClass('active');
                	currentPage.addClass('active');
        		    switchs.removeClass('active');
        		   	currentSwitch.addClass('active');	
                }

	});
});