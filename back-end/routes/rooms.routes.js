module.exports = (app) => {
    const rooms = require('../controllers/rooms.controller');

    console.log("subjects routes pass")

    app.post('/settingRooms', rooms.update);

    app.get('/getRooms', rooms.findAll);

    app.post('/deleteRooms', rooms.delete);

    app.post('/addRooms', rooms.insert);

}