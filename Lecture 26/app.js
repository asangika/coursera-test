(function  ( ) {
    'use scrict';

     
    
    angular.module('ShoppingListDirectiveApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('listItemDescription', ListItemDescription);

    function ListItemDescription(){
        var ddo = {
            template : '{{item.quantity}} of {{item.name}}'
        };

        return ddo;
    }

    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function  ShoppingListController1 (ShoppingListFactory ){

          var list = this;

          var shoppingList = ShoppingListFactory();

          list.items = shoppingList.getItems();
          list.itemName = "";
          list.itemQuantity = "";

          list.addItem = function(){
              shoppingList.addItem(list.itemName, list.itemQuantity);
          }

          list.removeItem = function(){
              shoppingList.removeItem(itemIndex);
          };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function  ShoppingListController2 (ShoppingListFactory ){

          var list = this;

          var shoppingList = ShoppingListFactory(3);

          list.items = shoppingList.getItems();
          list.itemName = "";
          list.itemQuantity = "";

          list.addItem = function(){
              try{
                shoppingList.addItem(list.itemName, list.itemQuantity);
              }catch(error){
                list.errorMessage = error.message;
              }
              
          }

          list.removeItem = function(){
              shoppingList.removeItem(itemIndex);
          };
    }

     

    function ShoppingListService(maxItems){
        var service = this;
        
        var items = [];

        service.addItem = function(itemName , quantity){
            
            if(maxItems === undefined || maxItems !== undefined && (items.length < maxItems)){
            var item = {
                name : itemName,
                quantity :  quantity

            };
            items.push(item);

        }else{
            throw new Error("Max Items (" +maxItems + ") reached.");
        }
        };

        service.removeItem = function (itemIndex){
            items.splice(itemIndex, 1);
        };

        service.getItems = function(){
            return items;
        };
    }

    function ShoppingListFactory(){
        var factory = function(maxItems){
            return new ShoppingListService(maxItems);
        };

        return factory;
    }

     
}) ();