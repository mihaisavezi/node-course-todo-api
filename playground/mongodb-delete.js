// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // users collection

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Mihai'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5ab352fc3766c02809a6db6b')}).then((result) => {
    //     console.log(result);
    // });



    // db.close() // close connection with mongodbserver
})