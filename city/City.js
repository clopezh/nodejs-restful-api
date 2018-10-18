var mongoose = require('mongoose');  
var CitySchema = new mongoose.Schema({  
  name: String,
  state: String,
  country: String
});
mongoose.model('City', CitySchema);

module.exports = mongoose.model('City');