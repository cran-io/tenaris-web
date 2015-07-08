app.controller('ProviderController', function($scope, menuFactory){
	$scope.pageClass = 'provider';
	menuFactory.removeIt();
	menuFactory.makeIt();
});