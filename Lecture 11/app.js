(function  ( ) {
    'use scrict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController ($scope ){
        $scope.name = "Asangika";
        $scope.stateofBeing = "hungry";
        $scope.sayMessage = function(){
            return "Asangika likes to eat Pasta";
        };
         
        $scope.feedAsangika = function(){
            $scope.stateofBeing = "fed";
        };
        
    }
}) ();