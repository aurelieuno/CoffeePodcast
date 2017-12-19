angular.module('podcast')
  .service('SoundCloud', function ($http) {
    
    this.search = function (query, callback) {
      const TOKEN = window.token.TOKEN;
      //const TOKEN = process.env.TOKEN;
      return $http({
        method: 'GET',
        url: `https://api.soundcloud.com/tracks?client_id=${TOKEN}&q=${query}`,
      })
        .then(results => callback(results.data))
        .catch(err => console.log(err))
  }
  })  

