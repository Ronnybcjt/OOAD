const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    password: String,
    user_type: String,
    sex: String,
    name: String,
    lastname: String
});
console.log("schema pass")
module.exports = mongoose.model('users', userSchema)