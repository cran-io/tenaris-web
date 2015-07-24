app.controller('logoUseController', function(menuFactory, $scope){
	$scope.pageClass = 'logo-use';
	menuFactory.removeIt();
	menuFactory.makeIt();
});