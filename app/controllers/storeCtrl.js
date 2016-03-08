angular.module('storeCtrl', ['productDirective'])
	.controller('storeController', function(Products){

		var vm = this;

		vm.defaultCurrency = 'GBP';

		vm.currencyOptions = ['EUR','GBP'];

		vm.recommendedProducts = Products.recommended;

		vm.popularProducts = Products.popular;

		vm.untaggedProducts = Products.untagged;

	});