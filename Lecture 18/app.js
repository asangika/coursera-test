(function  ( ) {
    'use scrict';

    var ShoppingList = ["Milk", "Cookies", "Donuts", "Chocolate", "Peanut Butter", "Pepto Bismol", "Mountain Dew",
    "Pepto Bismol(Chocolate Flavour)", "Pepto Bismol(Vanilla Flavour)"];
    
     
    
    angular.module('ShoppingListFilterApp', [])
    .controller('ShoppingListFilterController', ShoppingListFilterController);

   ShoppingListFilterController.$inject = ['$scope'];
    function ShoppingListFilterController ($scope ){
         
        $scope.ShoppingList = ShoppingList;
         //$scope.ShoppingList2 = ShoppingList2;

          
    }

     
}) ();