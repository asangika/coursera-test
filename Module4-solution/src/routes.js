(function() {
    'use strict';
  
  angular.module('MenuApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
  //Default route if the entered route is mispelled.
  $urlRouterProvider.otherwise('/');
  
  
  $stateProvider
  
  //Home page
  .state('home', {
      url: '/',
      templateUrl: 'src/Menu/templates/home.template.html'
  })
  
  .state ('categories', {
      url: '/categories',
      templateUrl: 'src/Menu/templates/categories.template.html',
      controller: 'CategoriesController as Catctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
      })
  
  .state ('items' , {
    url: '/item/{categoryShortName}',
    templateUrl: 'src/Menu/templates/items.template.html',
    controller: 'ItemsController as Itmctrl',
    params: {categoryShortName: null},
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  
  });
  
  }
  
  }());
  