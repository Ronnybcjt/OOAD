const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    year: String,
});
console.log("schema pass")
module.exports = mongoose.model('years', userSchema)