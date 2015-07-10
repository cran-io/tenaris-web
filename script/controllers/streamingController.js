app.controller('streamingController', function(menuFactory, $scope){
	$scope.pageClass = 'streaming';
	menuFactory.removeIt();
	menuFactory.makeIt();
});