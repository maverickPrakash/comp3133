const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required:[true, 'Please enter first name'],
    trim: true,
    lowercase:true
  },
  lastname: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:[true, 'Please enter Email name'],
    unique:true,
    trim: true,
    lowercase:true,
    validate(value) {
      if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
        throw new Error('Email is not valid.')
      }
    }
  },
  gender: {
    type: String,
    lowercase:true,
    enum: ["male","female", "other"]
  },
  city:{
    type: String
  },
  designation: {
    type: String
  },
  salary: {
    type: Number,
    validate(value){
      if(value<0){
        throw new Error ("salary must be positive")
      }
    }
  },
  created: { 
    type: Date
  },
  updatedat: { 
    type: Date
  },
  
  
});

//Declare Virtual Fields
EmployeeSchema.virtual('fullname').get(function(){
  return this.firstname+" " + this.lastname
});

EmployeeSchema.virtual('bonus').get(function(){
  return this.salary*0.1
});

//Custom Schema Methods
//1. Instance Method Declaration

EmployeeSchema.methods.getFullName = function(salutation){
  return `${salutation}. ${this.firstname} ${this.lastname}`
}
//2. Static method declararion
EmployeeSchema.statics.getByFirstName = function(name){
  return this.find()
}

//Writing Query Helpers

//middleware

EmployeeSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

EmployeeSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});



const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;