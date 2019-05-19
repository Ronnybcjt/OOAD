const Room = require('../schema/rooms.schema');

exports.findAll = (req, res) => {
    Room.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
    Room.findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
            console.log("check subject pass")
            const newUser = new Room({
                id: req.body.obj.id,
                build: req.body.obj.build,
                floor: req.body.obj.floor,
                faculty: req.body.obj.faculty,
                seat: req.body.obj.seat
            });
            newUser.save()
            res.json({ status: true })
        } else {
            res.json({ status: false })
            client.close()
        }
    })
};

exports.update = (req, res) => {
    console.log(req.body)
    Room.findOneAndUpdate({ id: req.body.obj.id }, { $set: req.body.obj }, () => {
        res.json({ status: true })
    });
}

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    Room.deleteOne({ id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
}