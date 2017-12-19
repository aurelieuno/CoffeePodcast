angular.module('podcast')
  .service('SoundCloud', function ($http) {
    // var id = '2f98992c40b8edf17423d93bda2e04ab';
    
    this.search = function (query, callback) {
      var id = window.token.TOKEN;
      return $http({
        method: 'GET',
        url: `https://api.soundcloud.com/tracks?client_id=${id}&q=${query}`,
      })
        .then(results => callback(results.data))
        .catch(err => console.log(err))
  }
  })  

