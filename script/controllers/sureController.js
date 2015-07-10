app.controller('sureController', function(menuFactory, $scope){
	$scope.pageClass = 'sure';
	menuFactory.removeIt();
	menuFactory.makeIt();
});