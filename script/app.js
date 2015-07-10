angular.module('tenarisApp.controllers',[]);
angular.module('tenarisApp.factories', []);
angular.module('tenarisApp.directives', []);
  
var app = angular.module('tenarisApp',['ngRoute', 'ngAnimate', 'tenarisApp.controllers','tenarisApp.directives', 'tenarisApp.factories'])
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
	    .when('/event',{
	      templateUrl: 'partials/event.html',
	      controller: 'eventController'
	    })
	    .when('/campaign',{
	      templateUrl: 'partials/campaign.html',
	      controller: 'campaignController'
	    })
	    .when('/news',{
	      templateUrl: 'partials/news.html',
	      controller: 'newsController'
	    })
	    .when('/smartphone',{
	      templateUrl: 'partials/smartphone.html',
	      controller: 'smartphoneController'
	    })
	    .when('/streaming',{
	      templateUrl: 'partials/streaming.html',
	      controller: 'streamingController'
	    })
	    .when('/sure',{
	      templateUrl: 'partials/sure.html',
	      controller: 'sureController'
	    })
	    .otherwise({ redirectTo: '/main' });
	}
]);