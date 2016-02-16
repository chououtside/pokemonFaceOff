angular.module('pokemon', [])
    .controller('pokemonController', function($scope, Pokemon) {
        $scope.data = {         
        };

        var initializePokemon = function() {
            Pokemon.getAll(function(data) {
                $scope.$apply(function() {
                    $scope.data.pokemon = data.slice(0, 30);
                });
             
                for (var i = 0; i < $scope.data.pokemon.length; i++){
                    $scope.data.pokemon[i].active = false;
                }

                console.log('new scope data is ', $scope.data.pokemon);

            });

        };

        $scope.toggle = function(index){
            $scope.data.pokemon[index].active = !$scope.data.pokemon[index].active;

        };

        // $scope.save = function(userId) {
        //     Pokemon.save();

        // };


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
