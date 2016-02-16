var mongoose = require('mongoose');

var pokemonUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: {
  	type: String,
  	required: true
  },

  lastName: {
  	type: String,
  	required: true
  },
  pokemon: []

});


module.exports = mongoose.model('pokemonUsers', pokemonUserSchema);
