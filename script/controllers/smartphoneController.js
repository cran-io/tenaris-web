app.controller('smartphoneController', function(menuFactory, $scope){
	$scope.pageClass = 'smartphone';
	menuFactory.removeIt();
	menuFactory.makeIt();
});