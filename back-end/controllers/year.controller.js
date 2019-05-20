
const Year = require('../schema/year.schema');

exports.findOne = (req, res) => {
    Year.find({}, function (err, obj) {
        if (!err) {
            console.log(obj)
            res.json({ data: obj })
        }
    })
};

exports.update = (req, res) => {
    console.log(req.body)
    Year.findOneAndUpdate({ _id: req.body.obj.id }, { $set: req.body.obj }, () => {
        res.json({ status: true })
    });
}
