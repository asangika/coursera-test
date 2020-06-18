(function  ( ) { 
    'use scrict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController',  LunchCheckController);
    
        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController ($scope){
            $scope.list = " ";
             
             

            $scope.CheckDishes = function(nameArr){
                 
                var str = $scope.list;
                var nameArr = str.split(',');
                console.log(nameArr);
                var DishCount = nameArr.length;
                console.log(DishCount);

                return DishCount;
            };

            $scope.Count = DishCount;
                $scope.CheckTooMuch = function( Count){
                    
                    if(DishCount < '4' && DishCount > '0')
                        $scope.Ok = "Enjoy!";
                    else if (DishCount > '3')
                        $scope.NotOk = "Too Much!";
                    else
                        $scope.Error = "Please Enter";
                    console.log("Hi");
                    
                     
                };
    
        

             

           
    }   
     

     
    
}) ();