(function  ( ) {
    'use scrict';

      
    angular.module('ShoopingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService){

        var list1 = this;
        
        list1.buyItem = function(itemIndex){
            
               ShoppingListCheckOffService.buyItem(itemIndex);
            
            
        };  
        list1.items= ShoppingListCheckOffService.getItems();

        list1.isEmpty = ShoppingListCheckOffService.isEmpty1;

           
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

        var list2 = this;
        
        list2.items = ShoppingListCheckOffService.getItems2(); 
        list2.isEmpty = ShoppingListCheckOffService.isEmpty2;
         
    }
  

    function ShoppingListCheckOffService(){
        var service = this;
        var items2 = [];
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
           
             
            
           items2.push(items[itemIndex]);
           items.splice(itemIndex, 1);
            //return boughts;
            //console.log(boughts);
        }

        service.getItems = function(){
            
            return items;
            
        }

        service.getItems2 = function(){
            
            
            return items2;
            console.log("done");
           
            
        }

        service.isEmpty1=function (){
            return items.length == 0;
        }
        service.isEmpty2=function () {  
            return items2.length == 0;
        }


         
    }

     
}) ();