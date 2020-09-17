(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  	var ToBuyList = this;
	

  ToBuyList.items =[
  				{ name: "Cookies", quantity: 10 },
  				{ name: "Chips", quantity: 2  },
  				{ name: "Bottles of orange juice", quantity: 5 },
  				{ name: "Bottles of water", quantity: 15 },
  				{ name: "Bottle of milk", quantity: 1 }					
  			];

  ToBuyList.Bought = function(itemIndex ,items){
  	 ShoppingListCheckOffService.Bought(itemIndex,ToBuyList.items);
  };

  
 };
// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBoughtList = this;

  AlreadyBoughtList.items=ShoppingListCheckOffService.items;

};



function ShoppingListCheckOffService() {
  var service = this;

  service.items =[];

  service.Bought = function(itemIndex,ToBuyListItems){
  	 var item = {
                    name: '',
                    quantity: ''
                };
                item.name = ToBuyListItems[itemIndex].name;
                item.quantity = ToBuyListItems[itemIndex].quantity;
                ToBuyListItems.splice(itemIndex, 1);
                service.items.push(item);
  	
  };

 
  
 
};

})();
