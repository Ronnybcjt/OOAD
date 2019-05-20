module.exports = (app) => {
    const year = require('../controllers/year.controller');

    console.log("users routes pass")

    app.post('/settingYear', year.update);
    
    app.get('/getYear', year.findOne);

}