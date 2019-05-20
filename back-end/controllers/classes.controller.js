const Class = require('../schema/classes.schema');

exports.findAll = (req, res) => {
    Class.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    Class.deleteOne({ _id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
            console.log("check subject pass")
            const newUser = new Class({
                className: req.body.obj.className,
                classID: req.body.obj.classID,
                teacher: req.body.obj.teacher,
                group: req.body.obj.group,
                studentName: req.body.obj.student
            });
            newUser.save()
            res.json({ status: true })
};