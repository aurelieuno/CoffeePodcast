angular.module('podcast')
  .component('podcastSavedList', {
    templateUrl: 'templates/podcastSavedList.html',
    bindings: {
      podcasts: '<',
      onDeletePodcast: '<',
      onClick: '<'
    },
    // controller: function (SavePodcast) {
    //   this.onDelete = (podcast) => {
    //     SavePodcast.deleteOneP(podcast, data => console.log(data));
    //   };
    // }

  });

