var app = angular.module("myApp",[]);

app.controller("myController",["$scope",function($scope){

    $scope.registrarUsuario = function(usuario){
        $scope.mensagem = "Welcome "+usuario.firstname
        alert ($scope.mensagem)
    }

   
}])