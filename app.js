const express = require('express');
const app = express();
const mongoose = require('./database/models/mongoose');
//middleware
//allow cross platform 
//http:localhost:3000
//http:localhost:4200
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    req.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
//Load in the mongoose models
const TaskList = require('./database/models/tasklist');
const Task = require('./database/models/task');
//Restful API endpoints
//Route handlers
app.get('/tasklists',(req,res)=>{
    TaskList.find({})
        .then((lists)=>res.status(200).send(lists))
        .catch((error)=>console.log(error));
        
        console.log('Tasklist Is Working');
})
//endpoint to get all task lists
app.get('/tasklists/:tasklistId',(req,res)=>{
    let tasklistId = req.params.tasklistId;
    TaskList.find({_id: tasklistId})
        .then((list)=>res.status(200).send(list))
        .catch((error)=>console.log(error));
}
)
//endpoint to update a tasklist by id
app.put('/tasklists/:tasklistId',(req,res)=>{
    TaskList.findOneAndUpdate({_id:req.params.tasklistId},{$set:req.body})
        .then((list)=>res.status(200).send(list))
        .catch((error)=>console.log(error));
})

app.patch('/tasklists/:tasklistId',(req,res)=>{
    TaskList.findOneAndUpdate({_id:req.params.tasklistId},{$set:req.body})
        .then((list)=>res.status(200).send(list))
        .catch((error)=>console.log(error));
})

//endpoint to create a tasklist
app.post('/tasklists',(req,res)=>{
    console.log(req.body);
    let tasklistobj = {'title':req.body.title};
    TaskList(tasklistobj).save()
        .then((list)=>res.status(201).send(list))
        .catch((error)=>console.log(error));
}
)

//endpoint to delete a tasklist
app.delete('/tasklists/:tasklistId',(req,res)=>{
    let deleteTaskList = req.params.tasklistId;
    TaskList.findByIdAndDelete(deleteTaskList)
        .then((list)=>res.status(201).send(list))
        .catch((error)=>console.log(error));
}
)
    

app.listen(3000,()=>{
console.log('Server is running on port 3000!');    
})
