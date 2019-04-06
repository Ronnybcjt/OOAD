/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://admin:a12345@ds245772.mlab.com:45772/ooad'
const dbName = 'ooad'
const app = express()
const port = 4001

app.use(bodyParser.json())
app.use(cors())

app.post('/login', (req, res) => {
  mongoClient.connect(url, { useNewUrlParser: true }, (_err, client) => {
    const db = client.db(dbName)
    db.collection('users').findOne({ id: req.body.id }, (_err, result) => {
      if (result !== null) {
        res.send(result)
      } else {
        res.send(result)
        client.close()
      }
    })
  })
})

app.post('/setting', (req, res) => {
  mongoClient.connect(url, (_err, client) => {
    const type = req.body.b.type
    console.log(type)
    if (type === 'users') {
      const db = client.db(dbName)
      const dataUpdate = {
        id: req.body.id,
        password: req.body.password,
        user_type: req.body.user_type,
        sex: req.body.sex,
        name: req.body.name,
        lastname: req.body.lastname
      }

      db.collection(type).update({ id: req.body.id }, dataUpdate, function (err, result) {
        if (err) throw err
        res.json({ status: true })
        client.close()
      })
    } else if (type === 'builds') {
      const db = client.db(dbName)
      const dataUpdate = {
        id: req.body.obj.id,
        nameBuild: req.body.obj.nameBuild,
        areaBuild: req.body.obj.areaBuild,
        facBuild: req.body.obj.facBuild,
        floorBuild: req.body.obj.floorBuild
      }
      console.log(dataUpdate)
      db.collection(type).update({ id: req.body.obj.id }, dataUpdate, function (err, result) {
        if (err) throw err
        res.json({ status: true })
        client.close()
      })
    }
  })
})
app.post('/delete', (req, res) => {
  mongoClient.connect(url, (_err, client) => {
    console.log('delete')
    const db = client.db(dbName)
    const idRemove = req.body.data.id
    const type = req.body.b.type
    console.log(type)
    console.log(idRemove)
    db.collection(type).deleteOne({ id: idRemove }, (err, obj) => {
      if (err) throw err
      res.json({ data: obj })
      client.close()
    })
  })
})

app.post('/getdata', (req, res) => {
  mongoClient.connect(url, (_err, client) => {
    const db = client.db(dbName)
    var type = req.body.type
    console.log(type)
    db.collection(type).find({}).toArray(function (err, result) {
      if (err) throw err
      res.json({ data: result })
      // console.log(result)
      client.close()
    })
  })
})

app.get('/getbuild', (req, res) => {
  mongoClient.connect(url, (_err, client) => {
    const db = client.db(dbName)
    db.collection('builds').find({}).toArray(function (err, result) {
      if (err) throw err
      res.json({ data: result })
      // console.log(result)
      client.close()
    })
  })
})

app.post('/add', (req, res) => {
  mongoClient.connect(url, { useNewUrlParser: true }, (_err, client) => {
    const db = client.db(dbName)
    var type = req.body.b.type
    if (type === 'users') {
      db.collection(type).findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
          const newUser = {
            id: req.body.obj.id,
            password: req.body.obj.password,
            user_type: req.body.obj.user_type,
            sex: req.body.obj.sex,
            name: req.body.obj.name,
            lastname: req.body.obj.lastname
          }
          db.collection(type).insertOne(newUser, (err, result) => {
            if (err) throw err
            client.close()
            res.json({ status: true })
          })
        } else {
          res.json({ status: false })
          client.close()
        }
      })
    } else if (type === 'builds') {
      db.collection(type).findOne({ id: req.body.obj.id }, (_err, result) => {
        if (result === null) {
          const newUser = {
            id: req.body.obj.id,
            nameBuild: req.body.obj.nameBuild,
            areaBuild: req.body.obj.areaBuild,
            facBuild: req.body.obj.facBuild,
            floorBuild: req.body.obj.floorBuild
          }
          db.collection(type).insertOne(newUser, (err, result) => {
            if (err) throw err
            client.close()
            res.json({ status: true })
          })
        } else {
          res.json({ status: false })
          client.close()
        }
      })
    }
  })
})

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})
