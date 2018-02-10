angular.module('podcast')
  .component('podcastSavedEntry', {
    templateUrl: 'templates/podcastSavedEntry.html',
    bindings: {
      podcast: '<',
      onClick: '<',
      onDeletePodcast: '<',
    },
    controller() {
      this.format = (ms) => {
        return `${Math.round(ms)} min`;
      };
    },
  });
