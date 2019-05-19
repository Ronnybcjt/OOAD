const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    className: String,
    classID: String,
    teacher: Array,
    group: String,
    studentName: Array
});
console.log("schema pass")
module.exports = mongoose.model('classes', userSchema)