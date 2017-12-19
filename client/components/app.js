angular.module('podcast')
  .component('app', {
    templateUrl: 'templates/app.html',
    controller: function ($window, SavePodcast) {

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
      this.savePodcasts = () => {
        console.log('Fired')
        SavePodcast.getAllP(podcasts => this.savedpodcasts = podcasts)
      }
      this.savePodcasts();

 
    }
  })  




