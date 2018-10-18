var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  state: String,
  country: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');