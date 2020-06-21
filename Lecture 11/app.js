(function  ( ) {
    'use scrict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves',LovesFilter)
    .filter('truth',TruthFilter);

    MsgController.$inject = ['$scope' , '$filter' , 'lovesFilter'];
    function MsgController ($scope , $filter ,lovesFilter ){
        $scope.name = "Asangika";
        $scope.stateofBeing = "hungry";
        $scope.CookieCost = .45;

        $scope.sayMessage = function(){
            var msg = "Asangika likes to eat Pasta at the night";
            var output = $filter('uppercase')(msg);
            return output;
        };

        $scope.sayLovesMessage = function(){
            var msg = "Asangika likes to eat Pasta at the night";
            msg  = lovesFilter(msg)
            return msg;
        };
         
        $scope.feedAsangika = function(){
            $scope.stateofBeing = "fed";
        };
        
    }

    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes" , "loves");
            return input;
        };
    }

    function TruthFilter(){
        return function(input , target ,replace){
            input = input || "";
            input = input.replace(target , replace);
            return input;

        };
    }
}) ();