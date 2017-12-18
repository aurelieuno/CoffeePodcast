angular.module('podcast')

  .component('search', {
    templateUrl: 'templates/search.html',
    bindings: {
      result: '<',
      provider: '<',
    },
 
    controller: function() {
    this.onClick = (query) => {
    this.provider.search(query, this.result);
  };
}






  });
