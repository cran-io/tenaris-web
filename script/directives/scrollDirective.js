angular.module('tenarisApp.directives').directive('scroll', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('scroll', function() {
            if (this.pageYOffset >= 0) {
                var countSection = $('.section').length;
                var totalHeight = $('body').outerHeight()*countSection;
                var currentPos = Math.floor((this.pageYOffset*countSection)/totalHeight); 
                var actualSection = 0;


                if(currentPos != NaN){
                    $(this).parent.actualSection = currentPos;
                    $('.marker-items').removeClass('selected');
                    $('.item-'+currentPos).addClass('selected');
                    console.log('.item-'+currentPos);
                }
            }
            scope.$apply();
        });
    };
});