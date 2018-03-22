// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ab366b9f16ea3e388300e9c')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
            console.log(result);
        })


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ab36ad4f16ea3e3883011b2')
    }, {
        $set: {
            name: 'Mihai'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
            console.log(result);
        })


    // db.close() // close connection with mongodbserver
})