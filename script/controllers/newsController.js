app.controller('newsController', function(menuFactory, $scope){
	$scope.pageClass = 'news';
	menuFactory.removeIt();
	menuFactory.makeIt();
});