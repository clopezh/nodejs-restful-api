var mongoose = require('mongoose');  
var CarSchema = new mongoose.Schema({  
  gear: String,
  model: String,
  brand: String
});
mongoose.model('Car', CarSchema);

module.exports = mongoose.model('Car');