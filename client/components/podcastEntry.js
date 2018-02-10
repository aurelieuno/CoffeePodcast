angular.module('podcast')
  .component('podcastEntry', {
    templateUrl: 'templates/podcastEntry.html',
    bindings: {
      podcast: '<',
      onSavePodcast: '<',
    },
    controller() {
      this.format = ms => `${Math.round(ms)} min`;
    },
  });
