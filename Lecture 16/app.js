(function  ( ) {
    'use scrict';
    
    angular.module('BindingApp', [])
    .controller('BindingController', MsgController);

    BindingController.$inject = ['$scope'];
    function MsgController ($scope ){
        $scope.FirstName = "Asangika";
        //$scope.FullName= "";
         

        $scope.showNumberofWatchers = function(){
             console.log("# of Watchers :", $scope.$$watchersCount);
        };

        $scope.setFullName = function(){
           $scope.FullName = $scope.FirstName + " " + "Sandamini";
        };
         
        $scope.logFirstName = function(){
            console.log("First Name is: ", $scope.FirstName);
        };

        $scope.logFulltName = function(){
            console.log("Full Name is: ", $scope.FullName);
        };
        
    }

     
}) ();