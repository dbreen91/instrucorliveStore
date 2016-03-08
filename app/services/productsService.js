angular.module('productsService', [])
	.factory('Products', function(ProductJson, CurrencySelector, Utilities){

		var productsFactory = {}, 
		products = ProductJson.data,
		product,
		productName,
		productImgSrc;

		productsFactory.recommended = [];
		productsFactory.popular = [];
		productsFactory.untagged = [];

		for(var i = 0;i < products.length;i++){

			product = products[i];

			product.main_image_src = Utilities.getProductImageSrc(product.sku, product.name,  1);

			product.name = Utilities.toTitleCase(product.name);
			
			if(product.tags.length !== 0){
				if(product.tags.indexOf('recommended') !== - 1) {
					productsFactory.recommended.push(product);
				}
				if(product.tags.indexOf('popular') !== - 1) {
					productsFactory.popular.push(product);
				}
				
			}else{
				productsFactory.untagged.push(product);
			}

		}

		return productsFactory;

	})
	.factory('ProductJson', function(){

	var productJsonFactory = {};

	productJsonFactory.data =  
	[{
		"sku": "nikeredcool12",
		"name":"Super workout trainers that are really cool",
		"price_GBP": 50,
		"price_EUR": 63,
		"description": "The new and improved runner for men now with real comfor action and red stuff",
		"brand": "nike",
		"store": "amazon",
		"store_url": "http://www.amazon.co.uk/gp/product/B00M89W11W/ref=s9_simh_gw_p309_d1_i1?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=desktop-1&pf_rd_r=0EYXFVFV1S7GGWTA0C71&pf_rd_t=36701&pf_rd_p=577049067&pf_rd_i=desktop",
		"tags":["recommended"],
		"date_added": '31-01-20015'
	},
	{
		"sku": "shortshorts84",
		"name":"Short Shorts Pro",
		"price_GBP": 25,
		"price_EUR": 29,
		"description": "Who likes shorts? Say no more. We hear you load and clear.",
		"brand": "adidas",
		"store": "ebay",
		"store_url": "http://www.ebay.ie/itm/ADIDAS-MENS-ORIGINALS-fleece-Sweat-GYM-Shorts-Pockets-Cotton-GREY-/351666879271?var=&hash=item51e0fabb27:m:mTEJ6HekuKnC8eEy_JUBuGg",
		"tags":["recommended","popular"],
		"date_added": '26-01-20015'
	},
	{
		"sku": "tanktop34",
		"name":"Put the Tank in Tank Top",
		"price_GBP": 12,
		"price_EUR": 17,
		"description": "Want to show off your hardwork mainly to other men in your local gym? We got you",
		"brand": "musclepharm",
		"store": "anax",
		"store_url": "http://www.anaxfitness.com/muscle-pharm-logo-vest-black-green.html",
		"tags":["popular"],
		"date_added": '30-01-20015'
	},
	{
		"sku": "tanktop34",
		"name":"Put the Tank in Tank Top",
		"price_GBP": 12,
		"price_EUR": 17,
		"description": "Want to show off your hardwork mainly to other men in your local gym? We got you",
		"brand": "musclepharm",
		"store": "anax",
		"store_url": "http://www.anaxfitness.com/muscle-pharm-logo-vest-black-green.html",
		"tags":["recommended"],
		"date_added": '30-01-20015'
	},
	{
		"sku": "nikeredcool12",
		"name":"Super workout trainers that are really cool",
		"price_GBP": 50,
		"price_EUR": 63,
		"description": "The new and improved runner for men now with real comfor action and red stuff",
		"brand": "nike",
		"store": "amazon",
		"store_url": "http://www.amazon.co.uk/gp/product/B00M89W11W/ref=s9_simh_gw_p309_d1_i1?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=desktop-1&pf_rd_r=0EYXFVFV1S7GGWTA0C71&pf_rd_t=36701&pf_rd_p=577049067&pf_rd_i=desktop",
		"tags":["popular"],
		"date_added": '31-01-20015'
	},
	{
		"sku": "nikeredcool12",
		"name":"Super workout trainers that are really cool",
		"price_GBP": 50,
		"price_EUR": 63,
		"description": "The new and improved runner for men now with real comfor action and red stuff",
		"brand": "nike",
		"store": "amazon",
		"store_url": "http://www.amazon.co.uk/gp/product/B00M89W11W/ref=s9_simh_gw_p309_d1_i1?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=desktop-1&pf_rd_r=0EYXFVFV1S7GGWTA0C71&pf_rd_t=36701&pf_rd_p=577049067&pf_rd_i=desktop",
		"tags":[],
		"date_added": '31-01-20015'
	},
	{
		"sku": "shortshorts84",
		"name":"Short Shorts Pro",
		"price_GBP": 25,
		"price_EUR": 29,
		"description": "Who likes shorts? Say no more. We hear you load and clear.",
		"brand": "adidas",
		"store": "ebay",
		"store_url": "http://www.ebay.ie/itm/ADIDAS-MENS-ORIGINALS-fleece-Sweat-GYM-Shorts-Pockets-Cotton-GREY-/351666879271?var=&hash=item51e0fabb27:m:mTEJ6HekuKnC8eEy_JUBuGg",
		"tags":[],
		"date_added": '26-01-20015'
	},
	{
		"sku": "tanktop34",
		"name":"Put the Tank in Tank Top",
		"price_GBP": 12,
		"price_EUR": 17,
		"description": "Want to show off your hardwork mainly to other men in your local gym? We got you",
		"brand": "musclepharm",
		"store": "anax",
		"store_url": "http://www.anaxfitness.com/muscle-pharm-logo-vest-black-green.html",
		"tags":[],
		"date_added": '30-01-20015'
	},
	{
		"sku": "tanktop34",
		"name":"Put the Tank in Tank Top",
		"price_GBP": 12,
		"price_EUR": 17,
		"description": "Want to show off your hardwork mainly to other men in your local gym? We got you",
		"brand": "musclepharm",
		"store": "anax",
		"store_url": "http://www.anaxfitness.com/muscle-pharm-logo-vest-black-green.html",
		"tags":[],
		"date_added": '30-01-20015'
	},
	{
		"sku": "nikeredcool12",
		"name":"Super workout trainers that are really cool",
		"price_GBP": 50,
		"price_EUR": 63,
		"description": "The new and improved runner for men now with real comfor action and red stuff",
		"brand": "nike",
		"store": "amazon",
		"store_url": "http://www.amazon.co.uk/gp/product/B00M89W11W/ref=s9_simh_gw_p309_d1_i1?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=desktop-1&pf_rd_r=0EYXFVFV1S7GGWTA0C71&pf_rd_t=36701&pf_rd_p=577049067&pf_rd_i=desktop",
		"tags":[],
		"date_added": '31-01-20015'
	}
	];


	return productJsonFactory;

});
