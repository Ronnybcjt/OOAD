const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://admin:a12345@ds245772.mlab.com:45772/ooad'
const dbName = 'ooad';
const app = express()
const port = 4001

app.use(bodyParser.json())
app.use(cors())


app.post('/login', (req, res) => {
    mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName)
        db.collection('users').findOne({ id: req.body.id }, (err, result) => {
            if (result !== null) {
                res.send(result)
            } else {
                res.send(result)
                client.close();
            }
        });

    });
})

app.post('/settinguser', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        console.log('Connected successfully to server');
        const db = client.db(dbName)
        const dataUpdate = {
            id: req.body.id,
            password: req.body.password,
            user_type: req.body.user_type,
            sex: req.body.sex,
            name: req.body.name,
            lastname: req.body.lastname
        };

        db.collection("users").update({ id: req.body.id }, dataUpdate, function (err, result) {
            if (err) throw err;
            res.json({ status: true })
            client.close();
        });
    })
})
app.post('/delete', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        console.log("delete")
        const db = client.db(dbName)
        const idRemove = req.body.data.id
        const type = req.body.b.type
        console.log(type)
        console.log(idRemove)
        db.collection(type).deleteOne({id: idRemove}, (err, obj) => {
            if (err) throw err;
            res.json({ data: obj })
            client.close();
        });
    })
})

app.get('/getdata', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        const db = client.db(dbName)
        var type = req.body.type
        console.log(type)
        db.collection(type).find({}).toArray(function (err, result) {
            if (err) throw err;
            res.json({ data: result })
            //console.log(result)
            client.close();
        });
    })
})


app.get('/getbuild', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        const db = client.db(dbName)
        db.collection('builds').find({}).toArray(function (err, result) {
            if (err) throw err;
            res.json({ data: result })
            //console.log(result)
            client.close();
        });
    })
})

app.post('/adduser', (req, res) => {
    mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName)
        db.collection('users').findOne({ id: req.body.id }, (err, result) => {
            if (result === null) {
                const newUser = {
                    id: req.body.id,
                    password: req.body.password,
                    user_type: req.body.user_type,
                    sex: req.body.sex,
                    name: req.body.name,
                    lastname: req.body.lastname
                };
                db.collection('users').insertOne(newUser, (err, result) => {
                    if (err) throw err
                    client.close()
                    res.json({ status: true })
                })
            } else {
                res.json({ status: false })
                client.close()
            }
        });
    });
})

app.post('/addBuild', (req, res) => {
    mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName)
        db.collection('builds').findOne({ id: req.body.id }, (err, result) => {
            if (result === null) {
                const newUser = {
                    id: req.body.id,
                    nameBuild: req.body.nameBuild,
                    areaBuild: req.body.areaBuild,
                    facBuild: req.body.facBuild,
                    floorBuild: req.body.floorBuild
                };
                db.collection('builds').insertOne(newUser, (err, result) => {
                    if (err) throw err
                    client.close()
                    res.json({ status: true })
                })
            } else {
                res.json({ status: false })
                client.close()
            }
        });
    });
})

app.post('/settingBuild', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        console.log('Connected successfully to server');
        const db = client.db(dbName)
        const dataUpdate = {
            idBuild: req.body.idBuild,
            nameBuild: req.body.nameBuild,
            areaBuild: req.body.areaBuild,
            facBuild: req.body.facBuild,
            floorBuild: req.body.floorBuild
        };
        db.collection("builds").update({ idBuild: req.body.idBuild }, dataUpdate, function (err, result) {
            if (err) throw err;
            res.json({ status: true })
            client.close();
        });
    })
})

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})