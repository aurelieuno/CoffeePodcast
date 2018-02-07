angular.module('podcast')
  .component('app', {
    templateUrl: 'templates/app.html',
    controller: function AppCtrl($window, SavePodcast, SaveUser) {

      this.podcasts = $window.data;
      this.currentPodcast = $window.data[0];
      this.savedpodcasts = [];
      this.username = $window.user;
      this.friends = [];

      this.selectPodcast = (podcast) => {
        this.currentPodcast = podcast;
      };
      this.searchResults = (datas) => {
        this.podcasts = datas;
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

      this.getFriends = () => {
        SaveUser.getAllUsers((friends) => {
          let list = friends.map(friend => friend.username);
          this.friends = list;
        });
      };
      this.getFriends();


    },
  });




