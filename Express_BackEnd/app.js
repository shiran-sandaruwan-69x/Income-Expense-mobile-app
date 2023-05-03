var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/income';

mongo.connect(url, (err)=>{
    console.log('strating server!')
})

app.get('/data/login', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('user');
        collection.find({}).toArray((x, hasil)=>{
            res.send(hasil);
        })
    })
})

app.post('/data/login', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('user');
        var dataU = {
            nic:req.body.nic,
            uName:req.body.uName,
            uAddress:req.body.uAddress,
            uEmail:req.body.uEmail,
            uPassword:req.body.uPassword
        }
        collection.insert(dataU, (x, re)=>{
            res.send(re);
        })
    })
})


app.post('/data/login/spend', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('spend');
        var dataU = {
            email:req.body.email,
            salary:req.body.salary,
            spend:req.body.spend,
            chart:req.body.chart
        }
        collection.insert(dataU, (x, re)=>{
            res.send(re);
        })
    })
})



app.listen(3210, ()=>{
    console.log('Server @port 3210!');
})