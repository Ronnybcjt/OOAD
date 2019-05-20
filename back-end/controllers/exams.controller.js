const Exam = require('../schema/exams.schema');

exports.findAll = (req, res) => {
    Exam.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
    console.log("check subject pass")
    const newUser = new Exam({
        className: req.body.obj.className,
        classID: req.body.obj.classID,
        examiner: req.body.obj.examiner,
        room: req.body.obj.room,
        build: req.body.obj.build,
        group: req.body.obj.group,
        date: req.body.obj.date,
        type: req.body.obj.type,
        startTime: req.body.obj.startTime,
        endTime: req.body.obj.endTime
    });
    newUser.save()
    res.json({ status: true })
};

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    Exam.deleteOne({ _id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
};