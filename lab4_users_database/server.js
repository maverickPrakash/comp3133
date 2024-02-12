const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

mongoose.connect('mongodb+srv://root:TOb8asod34UApwJT@cluster0.1ly2v5i.mongodb.net/w2024_comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
