(function() {
    'use strict';
  
  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);
  
  CategoriesController.$inject = ['MenuDataService','categories'];
  function CategoriesController(MenuDataService,categories) {
    var Catctrl = this;
    Catctrl.categories = categories;
  }
  
  
  }());