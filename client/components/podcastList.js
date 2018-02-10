angular.module('podcast')
  .component('podcastList', {
    templateUrl: 'templates/podcastList.html',
    bindings: {
      podcasts: '<',
      onSavePodcast: '<',
    },
  });

