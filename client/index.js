const app = angular.module('podcast', ['ui.router']);

app.config(function ($stateProvider) {
  var mainState = {
    name: 'main',
    component: "app",
  }

  var loginState = {
    name: 'login',
    component: 'login'
  }
  var signupState = {
    name: 'signup',
    component: 'signup'
  }

  $stateProvider.state(mainState);
  $stateProvider.state(loginState);
  $stateProvider.state(signupState);
});

