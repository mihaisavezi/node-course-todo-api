const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then(result => {
//     console.log(result);
// }) // remove everything

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ab3b3e0f92554fd42b1e906').then(todo => {
    console.log(todo);
})