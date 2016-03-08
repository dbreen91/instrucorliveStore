angular.module('utilitiesService', [])
	.factory('Utilities', function(){

		var utilitiesFactory = {};

		utilitiesFactory.toTitleCase = function(string){
			return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		};

		utilitiesFactory.spacesHyphensToUnderscores = function(string){
			return string.split(/[\s-]+/).join('_').toLowerCase();
		};

		utilitiesFactory.getProductImageSrc = function(productSku, productName, imageNumber){
			return productSku + '/' + utilitiesFactory.spacesHyphensToUnderscores(productName) + '_' + imageNumber;
		};

		return utilitiesFactory;
	});