(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
//.provider('ShoppingList', ShoppingListProvider);
 //.config(Config);

// Config.$inject = ['ShoppingListProvider'];
// function Config(ShoppingListProvider) {
//   ShoppingListProvider.defaults.maxItems = 5;
// }

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
   
  list.items = ShoppingListCheckOffService.getItems();

  list.itemName = "bllakjlkj";

  list.itemQuantity = "";

    console.log(">>>>> fired list.list.itemName "+list.itemName);
    console.log(">>>>> fired list.list.itemQuantity "+list.itemQuantity);

  list.addItem = function (myindex) {
    console.log(">>>>> myindex  " + myindex);
// var myindexname = list.items+'[' + myindex + ']'+'.'+name;
// console.log(">>>>> myindexname  " + myindexname);


    console.log(">>>>> fired list.addItem  ");
    try {
      ShoppingListCheckOffService.addItem(list.name, list.quantity);
      console.log(">>>>> fired list.quantity "+list.quantity);
    } catch (error) {
      list.errorMessage = error.message;
    }
  };

  list.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    var tempItemIndex = itemIndex;

  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

   list.itemName = "";
   list.itemQuantity = "";

   list.addItem = function () {
     try {
       ShoppingListCheckOffService.addItem(list.itemName, list.itemQuantity);
     } catch (error) {
       list.errorMessage = error.message;
     }
   };

  list.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    
  };
}

// If not specified, maxItems assumed unlimited
//function ShoppingListCheckOffService(maxItems) {
function ShoppingListCheckOffService() {
 var service = this;

  // List of shopping items
 var items = [
  {
    name: "Milk first", quantity: "quantity first 0"
  },
  {
    name: "Donuts 1",quantity: "200"
  },
  {
    name: "Cookies 2",quantity: "300"
  },
  {
    name: "cat",quantity: "5"
  },
  {
    name: "dog",quantity: "6"
  },
  {
    name: "mouse",quantity: "7"
  }
];


var boughtitems = [
  {
    name: "Milk boughtitems", quantity: "2"
  },
  {
    name: "Chocolate Milk boughtitems", quantity: "5"
  },
  {
    name: "Chocolate Milk boughtitems", quantity: "5"
  },
  {
    name: "Chocolate Milk boughtitems", quantity: "5"
  }
 ];

  var maxItems = 50;
  //service.addItem = function (itemName, quantity) {
    service.addItem = function (itemName, quantity ) {
    console.log(">>>>> fired service.addItem >>>" + boughtitems[0].name);

console.log(">>>>> fired service itemName >>>" + itemName);

    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtitems.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    
    console.log(">>>>> itemIndex >>>" + itemIndex);
   
    var itemNew = {
        name: items[itemIndex].name,
        quantity: items[itemIndex].quantity
      };
    boughtitems.push(itemNew);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    console.log("service.getItems items >>>>>>>> "+ items[0].name);
    return items;

  };
  service.getBoughtItems = function () {
    console.log("boughtitems>>>>>>>> "+ boughtitems[0].name);
    return boughtitems;
  };
}


// function ShoppingListProvider() {
// var provider = this;

// provider.defaults = {
//      maxItems: 100
//    };

//    provider.$get = function () {
//     var shoppingList = new ShoppingListService(provider.defaults.maxItems);

//     return shoppingList;
//    };
//  }

})();
