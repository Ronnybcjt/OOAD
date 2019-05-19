const User = require('../schema/user.schema');

exports.findOne = (req, res) => {
    console.log("controller pass")
    console.log(req.params.id)
    User.findOne({ id: req.params.id }).then(doc => {
        if (doc !== null) {
            console.log("find pass")
            res.json(doc)
        } else {
            res.json({ status: false })
        }
    })
}