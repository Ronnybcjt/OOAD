module.exports = (app) => {
    const exams = require('../controllers/exams.controller');

    console.log("users routes pass")

    //app.post('/setting', users.update);

    app.get('/getExams', exams.findAll);

    app.post('/deleteExam', exams.delete);

    app.post('/addExam', exams.insert);

}