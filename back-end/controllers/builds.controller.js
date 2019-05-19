const Builds = require('../schema/builds.schema');

exports.findAll = (req, res) => {
    Builds.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
    Builds.findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
            console.log("check user pass")
            const newUser = new Builds({
                id: req.body.obj.id,
                nameBuild: req.body.obj.nameBuild,
                areaBuild: req.body.obj.areaBuild,
                facBuild: req.body.obj.facBuild,
                floorBuild: req.body.obj.floorBuild
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
    Builds.findOneAndUpdate({ id: req.body.obj.id }, { $set: req.body.obj }, () => {
        res.json({ status: true })
    });
}

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    Builds.deleteOne({ id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
}