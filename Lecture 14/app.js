(function  ( ) {
    'use scrict';
    
    angular.module('CounterApp', [])
    .controller('CounterController', CounterController)
     

    CounterController.$inject = ['$scope' ];
    function CounterController ($scope ){
        $scope.onceCounter = 0;
        $scope.ShowNumberofWatchers = function(){
             console.log("# of Watchers:",$scope.$$watchersCount);
        };

        $scope.countOnce = function(){
            $scope.onceCounter = 1;
        }; 
    }   
}) ();