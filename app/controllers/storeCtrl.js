angular.module('storeCtrl', ['productDirective'])
	.controller('storeController', function(Products){

		var vm = this;

		vm.recommendedProducts = Products.recommended;

		vm.popularProducts = Products.popular;

		vm.untaggedProducts = Products.untagged;

	});