(function() {
    'use strict';
  
  angular.module('MenuApp')
  .component('categories',  {
    templateUrl:  'src/Menu/templates/categories.component.html',
    bindings: {
      categories: '<'
    }
  });
  }());
  