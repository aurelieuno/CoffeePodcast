angular.module('podcast')
  .component('podcastSavedList', {
    templateUrl: 'templates/podcastSavedList.html',
    bindings: {
      podcasts: '<',
      onDeletePodcast: '<',
      onClick: '<',
    },
  });

