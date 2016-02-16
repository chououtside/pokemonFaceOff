angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here

  $scope.data = {};

  $scope.signOut = function(){
    Auth.signout();
  };

  var initializeLinks = function () {
    Links.getAll()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeLinks();
  });
