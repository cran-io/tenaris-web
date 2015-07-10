app.controller('eventController', function(menuFactory, $scope){
	$scope.pageClass = 'event';
	menuFactory.removeIt();
	menuFactory.makeIt();
});