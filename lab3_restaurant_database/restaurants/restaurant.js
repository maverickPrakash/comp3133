const mongoose = require('mongoose');

const restaurants = new mongoose.Schema({
    cuisines:{
        type:String,
        require:["Please enter cuisine"],
        trim: true,
        lowercase:true
    },
    name:{
        type:String,
        require:["Please enter name of restaurant"],
        trim: true,
        lowercase:true
    },
    city:{
        type:String,
        require:["Please enter city"],
        trim: true,
        lowercase:true
    }

})
const restaurant = mongoose.model("restaurants", restaurants);
module.exports = restaurant;

