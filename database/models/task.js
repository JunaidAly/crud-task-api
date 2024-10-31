const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
title:{
    type:String,
    minlength:3,
    trim:true
},
_taskListId:{
    type:mongoose.Types.ObjectId,
    required:true
},
completed:{
    type:Boolean,
    default:false,
}
});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;