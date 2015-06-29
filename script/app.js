angular.module('tenarisApp.controllers',[]);
angular.module('tenarisApp.factories', []);
  
var app = angular.module('tenarisApp',['ngRoute', 'tenarisApp.controllers', 'tenarisApp.factories'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
	      templateUrl: 'partials/inicio.html',
	      controller: 'inicioController'
	    });
	}
]);