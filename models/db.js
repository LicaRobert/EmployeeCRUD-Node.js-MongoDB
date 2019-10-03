const mongoose = require('mongoose');

mongoose.connect
('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err) =>{
    if(!err){
        console.log('MongoDB connection worked!')
    } 
    else{
        console.log('The connection is not working.' + err);
    }
});

require('./employee.model');