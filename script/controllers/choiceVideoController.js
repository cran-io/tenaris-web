app.controller('choiceVideoController', function(menuFactory, $scope){
	$scope.pageClass = 'choice-video';
	menuFactory.removeIt();
	menuFactory.makeIt();
});