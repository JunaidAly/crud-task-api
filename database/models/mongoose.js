const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(() =>{
        console.log('MongoDB Connected')})
    .catch((error)=>{
        console.log(error)});
    mongoose.exports = mongoose;