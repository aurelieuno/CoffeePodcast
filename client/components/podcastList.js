angular.module('podcast')
  .component('podcastList', {
    templateUrl: 'templates/podcastList.html',
    bindings: {
      podcasts: '<',
      onClick: '<'
    },
    controller: function (SavePodcast) {
      this.onSave = (podcast) => {
        SavePodcast.saveOneP(podcast, data => console.log(data));
      };
    }

  });

