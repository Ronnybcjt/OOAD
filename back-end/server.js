const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  auth: {
    user: 'admin',
    password: 'a12345'
  }
})

mongoose.connection.on('connected', function () {
  console.log('Mongoose defualt connect open')
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose defualt connection error: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose defualt connect disconnected')
})
console.log("server pass")

require('./routes/login.routes')(app);
require('./routes/users.routes')(app);
require('./routes/builds.routes')(app);
require('./routes/subjects.routes')(app);
require('./routes/rooms.routes')(app);
require('./routes/classes.routes')(app);
require('./routes/exams.routes')(app);
require('./routes/years.routes')(app);


app.listen(4001, () => {
  console.log("Server is listening on port 4001");
});