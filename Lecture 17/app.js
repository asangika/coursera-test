(function  ( ) {
    'use scrict';

    var ShoppingList1 = ["Milk", "Cookies", "Donuts", "Chocolate", "Peanut Butter", "Pepto Bismol", "Mountain Dew",
                            "Sustagon(Chocolate Flavour)", "Sustagon(Vanilla Flavour)"];
    
    var ShoppingList2 = [
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
        }
    ]
    
    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

   ShoppingListController.$inject = ['$scope'];
    function ShoppingListController ($scope ){
         $scope.ShoppingList1 = ShoppingList1;
         $scope.ShoppingList2 = ShoppingList2;

         $scope.addToList = function(){
            var newitem = {
                name: $scope.NewItemName,
                Quantity: $scope.NewItemQuantity
            };

            $scope.ShoppingList2.push(newitem);
         };
    }

     
}) ();