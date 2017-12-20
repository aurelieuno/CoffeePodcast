angular.module('podcast')
  .service('SaveUser', function ($http) {

    this.saveOneUser = function (user, callback) {
      $http.post('/user', user)
        .then(function ({ data }) {
          if (callback) {
            callback(data);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.checkOneUser = function (user, callback) {
      $http.post('/checkuser', user)
        .then(function ({ data }) {
          if (callback) {
            callback(data);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.getAllUsers = function (callback) {
      $http.get('/users')
        .then(function ({ data }) {
          if (callback) {
            callback(data);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    };

  });


////////////////////////////TUTORIAL///////////////////////////////////////////////////////////////
// app.service('MyService', function () {
//   this.sayHello = function () {
//     console.log('hello');
//   };
// });
// .service() is a method on our module that takes a name and a function
// that defines the service.Pretty straight forward.Once defined, we can inject and
// use that particular service in other components, like controllers, directives and filters, like this:

// app.controller('AppController', function (MyService) {
//   MyService.sayHello(); // logs 'hello'
// });