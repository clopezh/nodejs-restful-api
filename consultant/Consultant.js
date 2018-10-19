var mongoose = require('mongoose');
var ConsultantSchema = new mongoose.Schema({
    row: Number,
    level: String,
    name: String
});
mongoose.model('Consultant', ConsultantSchema);

module.exports = mongoose.model('Consultant');