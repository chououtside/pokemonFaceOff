var pokemonUser = require('./pokemonUserModel.js');

module.exports = {
  signUp: function(req, res, next) {
    console.log(typeof req.body);

    pokemonUser.collection.insert(req.body);
    console.log('success inserting user into mongo poke db');
  },

  savePokemon: function(req, res, next) {
  	// var query = pokemonUser.findOne({'username' : 'boyaBrave'});
  	// console.log(query);
  	console.log('in save');
  }

};
