(function() {
    'use strict';
  
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);
  
  //'items' ref'd from state's resolve in route.js
  ItemsController.$inject = ['$stateParams','items'];
  function ItemsController($stateParams, items) {
     var Itmctrl = this;
     Itmctrl.items = items;
  }
  
  }());
  