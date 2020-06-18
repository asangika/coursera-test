(function  ( ) {
    'use scrict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController ($scope , $filter){
        $scope.name = "Asangika";
         
        $scope.upper = function  ( ) {
            var upCase = $filter('uppercase');
            $scope.name = upCase ($scope.name);
        };
    }
}) ();