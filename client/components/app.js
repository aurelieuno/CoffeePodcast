angular.module('podcast')
  .component('app', {
    templateUrl: 'templates/app.html',
    controller($window, SavePodcast) {
      this.podcasts = $window.data;
      this.savedpodcasts = [];
      this.currentPodcast = $window.data[2];

      this.selectPodcast = (podcast) => {
        this.currentPodcast = podcast;
      };
      this.searchResults = (datas) => {
        this.podcasts = datas;
        this.currentPodcast = datas[0];
      };
      this.savePodcastList = () => {
        SavePodcast.getAllP(podcasts => this.savedpodcasts = podcasts);
      };
      this.savePodcastList();

      this.onSavePodcast = (podcast) => {
        SavePodcast.saveOneP(podcast, (data) => {
          this.savePodcastList();
        });
      };

      this.onDeletePodcast = (podcast) => {
        SavePodcast.deleteOneP(podcast, (data) => {
          this.savePodcastList();
        });
      };
    },
  });
