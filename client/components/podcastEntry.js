angular.module('podcast')
  .component('podcastEntry', {
    templateUrl: 'templates/podcastEntry.html',
    bindings: {
      podcast: '<',
      onSavePodcast: '<'
    },
  });
