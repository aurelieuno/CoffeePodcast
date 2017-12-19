const app = angular.module('podcast', ['ui.router']);

app.config(function ($stateProvider) {
  var mainState = {
    name: 'main',
    url: '/',
    templateUrl: 'templates/app.html',
    //controller: "AppCtrl"

  }

  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'templates/login.html'
  }

  $stateProvider.state(mainState);
  $stateProvider.state(loginState);
});