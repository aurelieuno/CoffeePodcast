angular.module('podcast')
  .component('signup', {
    templateUrl: 'templates/signup.html',
    bindings: {

    },
    controller(SaveUser, $scope, $state) {
      this.submit = () => {
        const user = {
          username: this.username,
          password: this.password,
        };
        SaveUser.saveOneUser(user, (data) => {
          console.log(data);
          if (data === 'User Already Exists') {
            //this.message = `Please LOGIN, user ${this.username} already exists`;
            $state.go('login');
          } else {
            window.user = data;
            console.log(window.user)
            $state.go('main');
          }
        });
      };
    },
  });

