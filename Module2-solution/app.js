(function  ( ) {
    'use scrict';

      
    angular.module('ShoopingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService){

        var list1 = this;
        list1.items= ShoppingListCheckOffService.getItems();

        list1.buyItem = function(itemIndex){
            
               ShoppingListCheckOffService.buyItem(itemIndex);
            
            
        };  

           
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

        var list2 = this;
        
        list2.boughts = ShoppingListCheckOffService.boughtItems(); 

         
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var boughts = [];
        var items= [
            {
                name: "Milk",
                quantity:"2"
            },
            {
                name: "Donuts",
                quantity:"20"
            },
            {
                name: "Cookies",
                quantity:"300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Cake",
                quantity: "3"
            }
        ];
         

         

        service.buyItem = function (itemIndex){
           
             
            var bought = items.splice(itemIndex, 1);
            boughts.push(bought);
            //return boughts;
            //console.log(boughts);
        };

        service.getItems = function( ){
            
            return items;
            
        };

        service.boughtItems = function(){
            
            
            return boughts;
            //console.log("done");
           
            
        };


         
    }

     
}) ();