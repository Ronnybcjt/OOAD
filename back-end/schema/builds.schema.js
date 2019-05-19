const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    nameBuild: String,
    areaBuild: String,
    facBuild: String,
    floorBuild: String,
});
console.log("schema pass")
module.exports = mongoose.model('builds', userSchema)