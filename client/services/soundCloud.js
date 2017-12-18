angular.module('podcast')
  .service('soundCloud', function ($http) {
    // var id = '2f98992c40b8edf17423d93bda2e04ab';
    var id = window.token.TOKEN;

    this.search = function (query, callback) {
      return $http({
        method: 'GET',
        url: `https://api.soundcloud.com/tracks?client_id=${{id}}=${query}`,
      })
        .then(results => callback(results.data))
        .catch(err => console.log(err))
  }
  })  

