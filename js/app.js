angular.module('BandApp', ['ngRoute', 'angular-storage', 'RouteControllers', 'UserService', 'TodoService', 'TodoDirective']);

angular.module('BandApp').config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/book/availability', {
        templateUrl: 'templates/availability.html',
        controller: 'RegisterController'
    })
    
  .when('/book/gigs', {
        templateUrl: 'templates/gigs.html',
    })
.when('/about', {
        templateUrl: 'templates/about.html'
    })
  .when('/listen', {
        templateUrl: 'templates/listen.html'
    });
});