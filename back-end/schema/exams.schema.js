const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    className: String,
    classID: String,
    examiner: Array,
    room: String,
    build: String,
    group: String,
    date: String,
    type: String,
    startTime: String,
    endTime: String
});
console.log("schema pass")
module.exports = mongoose.model('exams', userSchema)