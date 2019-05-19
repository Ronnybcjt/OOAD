module.exports = (app) => {
    const login = require('../controllers/login.controller');

    console.log("users routes pass")

    app.get('/login/:id', login.findOne);
}