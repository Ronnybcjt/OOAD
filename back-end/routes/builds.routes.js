module.exports = (app) => {
    const builds = require('../controllers/builds.controller');

    console.log("builds routes pass")

    app.post('/settingBuilds', builds.update);

    app.get('/getBuilds', builds.findAll);

    app.post('/deleteBuilds', builds.delete);

    app.post('/addBuilds', builds.insert);

}