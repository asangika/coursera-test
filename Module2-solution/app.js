(function  ( ) {
    'use scrict';

    var ShoppingList = [
        {
            name: "Milk",
            Quantity:"2"
        },
        {
            name: "Donuts",
            Quantity:"20"
        },
        {
            name: "Cookies",
            Quantity:"300"
        },
        {
            name: "Chocolate",
            Quantity: "5"
        },
        {
            name: "Cake",
            Quantity: "3"
        }
    ]
    
    angular.module('ShoopingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService){

        var list1 = this;
        list1.items = ShoppingListCheckOffService.toBuyItems();

        list1.removeItem = function(itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
        };  

           
    }

    /*AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

        var showList = this;
        showList.items = ShoppingListService.getItems();

        showList.removeItem = function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        };
    }*/

    function ShoppingListCheckOffService(){
        var service = this;
        
        var items = [];

        service.toBuyItems = function( ){
            var ShoppingList = [
                {
                    name: "Milk",
                    Quantity:"2"
                },
                {
                    name: "Donuts",
                    Quantity:"20"
                },
                {
                    name: "Cookies",
                    Quantity:"300"
                },
                {
                    name: "Chocolate",
                    Quantity: "5"
                },
                {
                    name: "Cake",
                    Quantity: "3"
                }
            ]
            items.push(ShoppingList);
        };

        service.buyItem = function (itemIndex){
            items.splice(itemIndex, 1);
        };

        service.getItems = function(){
            return items;
        };
    }

     
}) ();