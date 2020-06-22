(function  ( ) {
    'use scrict';
    
    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);
     

    CounterController.$inject = ['$scope' ];
    function CounterController ($scope ){
        $scope.counter = 0;
        $scope.up = "Asangika";
        $scope.upCounter  = function(){
            $scope.counter++;
        }; 
    }   
}) ();