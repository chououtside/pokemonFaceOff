angular.module('pokeLogin', [])

.controller('pokeLoginController', function ($scope, $window, $location, Auth) {

  $scope.user = {};

  $scope.loggedIn = false;

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    var dataObj = {
      username: $scope.username,
      password: $scope.password,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      pokemon: []
    };
    Auth.signup(dataObj).then(function(username){
      $window.sessionStorage.user = username;
      $location.path('/profile');
    });

    
      // .then(function (token) {
      //   $window.localStorage.setItem('com.shortly', token);
      //   $location.path('/links');
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
  };
});
