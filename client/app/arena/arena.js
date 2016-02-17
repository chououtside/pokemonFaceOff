angular.module('arena', [])
  .controller('arenaController', function($scope, Trainer, $window) {
    $scope.data = {};

    $scope.test = 'testpage';

    var getCurrentParty = function() {
      Trainer.getParty()
        .then(function(party) {
          $scope.data.party = party;
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    getCurrentParty();

  });
