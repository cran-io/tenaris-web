app.controller('campaignController', function(menuFactory, $scope){
	$scope.pageClass = 'campaign';
	menuFactory.removeIt();
	menuFactory.makeIt();
});