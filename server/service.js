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
app.post('/deleteuser', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        console.log("delete")
        const db = client.db(dbName)
        const idRemove = req.body
        console.log(idRemove)
        db.collection('users').deleteOne(idRemove, (err, obj) => {
            if (err) throw err;
            res.json({ data: obj })
            client.close();
        });
    })
})

app.get('/getdata', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        const db = client.db(dbName)
        db.collection('users').find({}).toArray(function (err, result) {
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



app.listen(port, () => {
    console.log(`App listening on ${port}`)
})