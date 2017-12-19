angular.module('podcast')
  .component('podcastPlay', {
    templateUrl: 'templates/podcastPlay.html',
    bindings: {
      podcast: '<',
    },
  });
