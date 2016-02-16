angular.module('pokemon', [])
    .controller('pokemonController', function($scope, Pokemon) {
        $scope.data = {
            test: 'test'
                // pokemon: [{
                //        "name": "bulbasaur",
                //        "url": "http://www.pokeapi.co/api/v2/pokemon/1/"
                //    }, {
                //        "name": "ivysaur",
                //        "url": "http://www.pokeapi.co/api/v2/pokemon/2/"
                //    }, {
                //        "name": "venusaur",
                //        "url": "http://www.pokeapi.co/api/v2/pokemon/3/"
                //    }]
        };

        $scope.test = Pokemon.status;


        var initializePokemon = function() {
            Pokemon.getAll(function(data) {
                $scope.$apply(function() {
                    $scope.data.pokemon = data.slice(0,30);
                });

                console.log('client data is ', data);
                console.log('scope data is ', $scope.data.pokemon);
                console.log('new scope data is ', $scope.data.pokemon);
            });

        };
        // var initializePokemon = function() {
        //     Pokemon.getAllPromise()
        //         .then(function(data) {
        //             $scope.data.pokemon = data;
        //         })
        //         .catch(function(error) {
        //             console.error(error);
        //         });
        // };

        console.log('before initalize Pokemon in model');
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
