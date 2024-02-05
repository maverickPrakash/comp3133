const express = require('express')
const mongoose = require('mongoose')
const res = require('./routes/resRoute')
const app = express()
app.use(express.json());
mongoose.connect('mongodb+srv://root:TOb8asod34UApwJT@cluster0.1ly2v5i.mongodb.net/restaurants?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });
  
app.use('/restaurants',res)
app.listen(3210,()=>{
    console.log("localhost:3210")
})

