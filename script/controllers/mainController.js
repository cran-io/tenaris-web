app.controller('MainController', function(menuFactory, $scope){
	$scope.pageClass = 'main';
	menuFactory.removeIt();
	menuFactory.makeIt();
});

