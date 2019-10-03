const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    
    fullName: 
    {
        type : String,
        required: 'This field is required.'
    },
    email: 
    {
        type: String
    },
    mobile: 
    {
        type: String
    },
    age:
    {
      type: String,
      required: 'This field is required.'
    },
    city: 
    {
        type: String,
        required: 'This field is required.'
    }
});

employeeSchema.path('email').validate((val) =>
{
     emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     return emailRegex.test(val);
}, 'Invalid email address.');

employeeSchema.path('mobile').validate((val) =>
{
    return isNumber = /^\d+$/.test(val);  
}, 'Invalid mobile number.');

employeeSchema.path('age').validate((val) =>
{
    return isNumber = /^\d+$/.test(val);  
}, 'Invalid age.');

employeeSchema.path('fullName').validate((val) =>
{
    return/[a-zA-Z]+/.test(val);
}, 'Invalid name.'),

employeeSchema.path('city').validate((val) =>
{
    return/[a-zA-Z]+/.test(val);
}, 'Invalid city.'),

mongoose.model('Employee', employeeSchema);