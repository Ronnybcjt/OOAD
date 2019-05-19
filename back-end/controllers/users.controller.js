
const User = require('../schema/user.schema');

exports.findAll = (req, res) => {
    User.find({}, function (err, obj) {
        if (!err) {
            res.json({ data: obj })
        }
    })
};

exports.insert = (req, res) => {
    console.log(req.body.obj.id)
    User.findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
            console.log("check user pass")
            const newUser = new User({
                id: req.body.obj.id,
                password: req.body.obj.password,
                user_type: req.body.obj.user_type,
                sex: req.body.obj.sex,
                name: req.body.obj.name,
                lastname: req.body.obj.lastname
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
    User.findOneAndUpdate({ id: req.body.obj.id }, { $set: req.body.obj }, () => {
        res.json({ status: true })
    });
}

exports.delete = (req, res) => {
    const idRemove = req.body.obj.id
    console.log(idRemove)
    User.deleteOne({ id: idRemove }, (err, obj) => {
        res.json({ status: true })
    })
}

