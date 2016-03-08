angular.module('app.routes', ['ngRoute'])
	.config(function($routeProvider){

		$routeProvider
			.when('/',{
				templateUrl: 'views/pages/home.html',
			})
			.when('/store', {
				templateUrl: 'views/pages/store.html',
				controller: 'storeController',
				controllerAs: 'store'
			});
	
	});