angular.module('pokemon', [])
    .controller('pokemonController', function($scope, Pokemon, $window) {
        $scope.data = {         
        };

        var currentUser = $window.sessionStorage.user;

        var initializePokemon = function() {
            Pokemon.getAll(function(data) {
                $scope.$apply(function() {
                    $scope.data.pokemon = data.slice(0, 30);
                });
             
                for (var i = 0; i < $scope.data.pokemon.length; i++){
                    $scope.data.pokemon[i].active = false;
                    $scope.data.pokemon[i].imageUrl = 'http://pokeapi.co/media/img/' + i + 1 + '.png';
                }

                console.log('new scope data is ', $scope.data.pokemon);

            });

        };

        $scope.toggle = function(index){
            $scope.data.pokemon[index].active = !$scope.data.pokemon[index].active;
            console.log($scope.data.pokemon[index]);

        };

        $scope.save = function(userId) {
            var dataObj = {
                username : currentUser,
                insertedPokemon: []
            };

            for (var i = 0; i < $scope.data.pokemon.length; i++) {
                var currentPokemon = $scope.data.pokemon[i];
                if (currentPokemon.active === true) {
                    dataObj.insertedPokemon.push(currentPokemon);
                }
            }

            Pokemon.save(dataObj);

        };


        initializePokemon();

    });



// pokemon: [{
//     "name": "bulbasaur",
//     "url": "http://www.pokeapi.co/api/v2/pokemon/1/"
// }, {
//     "name": "ivysaur",
//     "url": "http://www.pokeapi.co/api/v2/pokemon/2/"
// }, {
//     "name": "venusaur",
//     "url": "http://www.pokeapi.co/api/v2/pokemon/3/"
// }]
