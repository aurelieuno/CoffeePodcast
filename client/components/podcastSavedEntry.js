angular.module('podcast')
  .component('podcastSavedEntry', {
    templateUrl: 'templates/podcastSavedEntry.html',
    bindings: {
      podcast: '<',
      onClick: '<',
      onDelete: '<'
    },
  });
