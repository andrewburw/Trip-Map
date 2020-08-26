const mongoose = require('mongoose');

//Users schema 

const userSchema = new mongoose.Schema({
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        name: {type: String, required: true, unique: true},
        trips: [{type: Array}]


},{collection: 'users'});



module.exports = mongoose.model('User',userSchema);
