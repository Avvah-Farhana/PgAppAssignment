var mongoose = require('mongoose');
var GirlsDetailsSchema = new mongoose.Schema({
    Name        : String,
    Age    : String,
    JoinedOn     :String
});

module.exports = mongoose.model ('GirlsDetails',GirlsDetailsSchema);