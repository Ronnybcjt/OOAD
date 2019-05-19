module.exports = (app) => {
    const subjects = require('../controllers/subjects.controller');

    console.log("subjects routes pass")

    app.post('/settingSubjects', subjects.update);

    app.get('/getSubjects', subjects.findAll);

    app.post('/deleteSubjects', subjects.delete);

    app.post('/addSubjects', subjects.insert);

}