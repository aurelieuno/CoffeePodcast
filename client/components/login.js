angular.module('podcast')
  .component('login', {
    templateUrl: 'templates/login.html',
    bindings: {

    },
    controller: function (SaveUser, $scope, $state) {

      this.submit = () => {
        let user = {
          username: this.username,
          password: this.password
        }
        console.log(user);
        SaveUser.checkOneUser(user, data => {
          if (data === "No Match") {
            this.message = `Please SIGNUP, user ${this.username} does not exists or Wrong Password`
          } else {
            if (data === true) {
              console.log(data)
          
                console.log("Fired")
                $state.go('main');
              
              //go to main page
            }
          }
        });
      }
    }
  });

