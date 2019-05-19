const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    build: String,
    floor: String,
    faculty: String,
    seat: String,
});
console.log("schema pass")
module.exports = mongoose.model('rooms', userSchema)