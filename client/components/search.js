angular.module('podcast')

  .component('search', {
    templateUrl: 'templates/search.html',
    bindings: {
      result: '<',
    },
 
    controller: function(SoundCloud) {
    this.onClick = (query) => {
    SoundCloud.search(query, this.result);
  };
}






  });
