module.exports = (app) => {
    const users = require('../controllers/users.controller');

    console.log("users routes pass")

    app.post('/setting', users.update);

    app.get('/getdata', users.findAll);

    app.post('/delete', users.delete);

    app.post('/add', users.insert);

}