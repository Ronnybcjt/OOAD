const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    className: String,
    credit: String,
    faculty: String,
});
console.log("schema pass")
module.exports = mongoose.model('subjects', userSchema)