(function() {
    'use strict';
  
  angular.module('MenuApp')
  .component('items',{
    templateUrl: 'src/Menu/templates/items.component.html',
    bindings: {
      items: '<'
    }
  })
  }());
  