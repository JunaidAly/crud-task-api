const express = require('express');
const app = express();
const mongoose = require('./database/models/mongoose');
app.listen(3000,()=>{
console.log('Server is running on port 3000!');    
})
