var pokemonUser = require('./pokemonUserModel.js');

module.exports = {
  signUp: function(req, res, next) {
    console.log(typeof req.body);

    pokemonUser.collection.insert(req.body);
    console.log('success inserting user into mongo poke db');
    next();


  }

};
