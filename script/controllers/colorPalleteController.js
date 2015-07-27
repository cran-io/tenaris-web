app.controller('colorPalleteController', function(menuFactory, $scope){
	$scope.pageClass = 'color-pallete';
	menuFactory.removeIt();
	menuFactory.makeIt();
});