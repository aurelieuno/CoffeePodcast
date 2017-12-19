angular.module('podcast')
  .component('podcastSavedList', {
    templateUrl: 'templates/podcastSavedList.html',
    bindings: {
      podcasts: '<',
    },
    controller: function (SavePodcast) {
      this.onDelete = (podcast) => {
        SavePodcast.deleteOneP(podcast, data => console.log(data));
      };
    }

  });

