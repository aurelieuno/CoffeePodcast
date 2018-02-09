angular.module('podcast')
  .component('app', {
    templateUrl: 'templates/app.html',
    controller($window, SavePodcast) {

      this.podcasts = $window.data;
      this.currentPodcast = $window.data[0];
      this.savedpodcasts = [];

      this.selectPodcast = (podcast) => {
        this.currentPodcast = podcast;
      };
      this.searchResults = (datas) => {
        this.podcasts = datas;
        this.currentPodcast = datas[0];
      };
      this.savePodcastList = () => {
        console.log('Fired');
        SavePodcast.getAllP(podcasts => this.savedpodcasts = podcasts);
      };
      this.savePodcastList();

      this.onSavePodcast = (podcast) => {
        SavePodcast.saveOneP(podcast, (data) => {
          console.log(data);
          this.savePodcastList();
        });
      };

      this.onDeletePodcast = (podcast) => {
        SavePodcast.deleteOneP(podcast, (data) => {
          console.log(data);
          this.savePodcastList();
        });
      };
    },
  });




