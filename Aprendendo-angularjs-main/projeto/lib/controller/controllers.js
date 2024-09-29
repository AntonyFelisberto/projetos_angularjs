var myControllers = angular.module('myControllers',[])

//myControllers.controller("myController",function($scope,$http){ FUNÇÃO TRADICIONAL
myControllers.controller("SearchController",["$scope","$http",function MyController($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artistas = response.data;
        $scope.artistasOrdenacao = 'name';
    })
}])

//myControllers.controller("myController",function($scope,$http,$routeParams){ FUNÇÃO TRADICIONAL
myControllers.controller("DetailsController",["$scope","$http","$routeParams",function MyController($scope,$http,$routeParams){
    $http.get('js/data.json').then(function(response){
        $scope.artistas = response.data;
        $scope.whichItem = $routeParams.itemId; //itemId É A VARIAVEL QUE FOI PASSADA NO routeProvider DO app.js 

        if( $routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId) - 1;
        }else{
            $scope.prevItem = $scope.artistas.length - 1;
        }

        if( $routeParams.itemId < $scope.artistas.length - 1){
            $scope.nextItem = Number($routeParams.itemId) + 1;
        }else{
            $scope.nextItem = 0;
        }
    })
}])