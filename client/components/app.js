angular.module('podcast')
  .controller('AppCtrl', function ($window, soundCloud) {
    this.provider = soundCloud;

    this.podcasts = $window.data;
    this.currentPodcast = $window.data[0];

    this.selectPodcast = (podcast) => {
      this.currentPodcast = podcast;
    };
    this.searchResults = (datas) => {
      this.podcasts = datas;
      this.currentPodcast = datas[0];
    };

    // soundCloud.search('dylan', datas => {
    //   this.podcasts = datas;
    //   this.currentPodcast = datas[0];
    // });
  })  
  .component('podcast', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html'
  });




