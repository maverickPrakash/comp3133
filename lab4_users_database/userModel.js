const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  city: { 
    type: String, 
    required: true,
    validate: {
      validator: function(city) {
        return /^[a-zA-Z\s]+$/.test(city);
      },
      message: props => `${props.value} is not a valid city name!`
    }
  },
  website: { 
    type: String, 
    required: true,
    validate: {
      validator: function(website) {
        return /^(http|https):\/\/[^\s/$.?#].[^\s]*$/.test(website);
      },
      message: props => `${props.value} is not a valid website URL!`
    }
  },
  zipCode: { 
    type: String, 
    required: true,
    validate: {
      validator: function(zipCode) {
        return /^\d{5}-\d{4}$/.test(zipCode);
      },
      message: props => `${props.value} is not a valid zip code format!`
    }
  },
  phone: { 
    type: String, 
    required: true,
    validate: {
      validator: function(phone) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(phone);
      },
      message: props => `${props.value} is not a valid phone format!`
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
