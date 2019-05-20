module.exports = (app) => {
    const classes = require('../controllers/classes.controller');

    console.log("users routes pass")

    //app.post('/setting', users.update);

    app.get('/getClass', classes.findAll);

    app.post('/deleteClass', classes.delete);

    app.post('/addClass', classes.insert);

}