angular.module('tenarisApp.controllers',[]);
angular.module('tenarisApp.factories', []);
  
var app = angular.module('tenarisApp',['ngRoute', 'ngAnimate', 'tenarisApp.controllers', 'tenarisApp.factories'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/main',{
	      templateUrl: 'partials/main.html',
	      controller: 'MainController'
	    })
	    .when('/provider',{
	      templateUrl: 'partials/provider.html',
	      controller: 'ProviderController'
	    })
	    .when('/choiceVideo',{
	      templateUrl: 'partials/choiceVideo.html',
	      controller: 'choiceVideoController'
	    })
	    .otherwise({ redirectTo: '/main' });
	}
]);