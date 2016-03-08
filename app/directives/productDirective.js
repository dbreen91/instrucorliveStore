angular.module('productDirective', [])
	.directive('productBox', function(){
		return{
			restrict: 'E',
			scope: { 
				product: '=productData',
				currency:'=selectedCurrency'
			},
			templateUrl: 'app/directives/templates/product.html'
		};
	});