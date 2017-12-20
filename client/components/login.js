angular.module('podcast')
  .component('login', {
    templateUrl: 'templates/login.html',
    bindings: {

    },
    controller(SaveUser, $scope, $state) {

      this.submit = () => {
        const user = {
          username: this.username,
          password: this.password,
        };
        console.log(user);
        SaveUser.checkOneUser(user, (data) => {
          console.log(data);
          if (data === 'No Match') {
            this.message = `Please SIGNUP, user ${this.username} does not exists`;
          } else if (data === 'Password is not correct') {
            this.message = `Wrong Password`;
          } else {
            $state.go('main');
          }
        });
      };
    },
  });

