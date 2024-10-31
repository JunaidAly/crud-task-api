const mongoose = require('mongoose');
const tasklistschema = new mongoose.Schema({
title:{
    type:String,
    minLenght:3,
    trim:true
}
});
const tasklist = mongoose.model('tasklist',tasklistschema);
module.exports = tasklist;