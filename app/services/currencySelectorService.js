angular.module('currencySelectorService',[])
.factory('CurrencySelector', function(){

	var currencySelectorFactory = {};

	currencySelectorFactory.options = [{ 
		'name': 'GBP',
		'symbol': '£'
	},{ 
		'name': 'EUR',
		'symbol': '€'
	}
	];

	currencySelectorFactory.selected = currencySelectorFactory.options[0];

	return currencySelectorFactory;

});