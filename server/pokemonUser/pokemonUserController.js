var pokemonUser = require('./pokemonUserModel.js');

module.exports = {
  signUp: function(req, res, next) {
    pokemonUser.collection.insert(req.body);
    console.log('success inserting user into mongo poke db');
    res.send(req.body.username);
  },

  savePokemon: function(req, res, next) {
  	console.log(req.body);
  	pokemonUser.findOne({'username' : req.body.username}, function(err, doc) {
  		for (var i = 0; i < req.body.insertedPokemon.length; i++){
  			var currentInsertedPokemon = req.body.insertedPokemon[i];
  			var newPokemon = {};
  			newPokemon.name = currentInsertedPokemon.name;
  			newPokemon.image = currentInsertedPokemon.imageUrl;
  			newPokemon.level = 1;
  			newPokemon.strength = Math.ceil(Math.random() * 10);
  			newPokemon.hp = 10 + Math.ceil(Math.random() * 7);
  			doc.pokemon.push(newPokemon);
  		}
		doc.save(function(err, post) {
		  console.log('document updated');
		});

  		console.log(doc.pokemon, 'boyas pokemon');
  	});
  }

};
