angular.module('mainCtrl',[])
	.controller('mainController', function(CurrencySelector){

		var vm = this;

		vm.selectedCurrency = CurrencySelector.selected;

		vm.currencyOptions = CurrencySelector.options;

	});