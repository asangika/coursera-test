(function(){
    'use strict';

    angular.module('ShoppingListDirectiveApp', ShoppingListDirectiveApp)
    .controller('ShoppingListController', ShoppingListController)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('shoppingList', ShoppingListDirective);

    function ShoppingListDirective(){
        var ddo ={
            templateUrl : 'shoppingList.html',
            scope : {
                items : '<',
                title : '@'
            },

            controller : ShoppingListDirectiveController,
            controllerAs : 'list',
            bindToController : true

        };

        return ddo;
    }

    function ShoppingListDirectiveController(){

        var list = this;

        list.cookiesInList = function(){
            for (var i = 0; i< list.items.length; i++){
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1){
                    return true;
                }
            }

            return false;
        };
    }



}) 