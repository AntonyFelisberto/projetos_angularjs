//                               [DEPENDENCIA PARA O NG-ROUTE, ADICIONANDO UM OUTRO MODULE QUE GUARDA UM CONTROLLER QUE EXISTE NO SISTEMA]
var app = angular.module("myApp",['ngRoute','myControllers']);

app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"paginas/pesquisas.html",
            controller:"SearchController"
        })
        //pagina:valorNoLink, PARA ADICIONAR MAIS DE UM COLOCAR pagina/:valorNoLink/:outro/:outro...
        .when('/details/:itemId',{
            templateUrl:"paginas/detalhe.html",
            controller:"DetailsController"
        })
}])
