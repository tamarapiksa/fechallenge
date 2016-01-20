var myApp = angular.module ('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider

  .when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/login', {
    templateUrl: 'pages/login.html',
    controller: 'loginController',
  })

});

myApp.controller('homeController', ['$scope', function($scope){


}]);

myApp.controller('loginController', ['$scope', function($scope){

}]);
