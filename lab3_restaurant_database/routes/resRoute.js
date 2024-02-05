const express = require('express')
const restaurantModel = require('../restaurants/restaurant')
const app = express()

/*{
    "cuisines": "Japanese",
    "name": "Midori",
    "city": "Toronto"
} */
app.post('/', async (req,res)=>{
    console.log(req.body)
    const restaurant = new restaurantModel(req.body);

    try {
        await restaurant.save();
        res.send('data added!');
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    
})



app.get('/', async (req, res) => {
    let restaurants;

    if (req.query.sortBy == null) {
        restaurants = await restaurantModel.find({});
    } else {
        
        const sortBy = req.query.sortBy;

        try {
            restaurants = await restaurantModel.find({}).sort({ _id: sortBy.toLowerCase() });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    res.send(restaurants);
});


app.get('/cuisine/:cuisine', async (req, res) => {
    const cuisineType = req.params.cuisine;
    let rest = "";

    if (cuisineType === "Delicatessen") {
        rest = await restaurantModel.find().where({'cuisines': cuisineType}).where({"city": {$ne: "brooklyn"}})
    } else {
        rest = await restaurantModel.find().where({'cuisines': cuisineType})
    }

    res.send(rest);
});

module.exports = app