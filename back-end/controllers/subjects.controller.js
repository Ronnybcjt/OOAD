const Subject = require('../schema/subjects.schema');

exports.findAll = (req, res) => {
    Subject.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
    Subject.findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
            console.log("check subject pass")
            const newUser = new Subject({
                id: req.body.obj.id,
                className: req.body.obj.className,
                credit: req.body.obj.credit,
                faculty: req.body.obj.faculty
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
    Subject.findOneAndUpdate({ id: req.body.obj.id }, { $set: req.body.obj }, () => {
        res.json({ status: true })
    });
}

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    Subject.deleteOne({ id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
}