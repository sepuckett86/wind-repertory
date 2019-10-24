require('dotenv').config();
const mongoose = require('mongoose');
const fetchCompositions = require('./lib/services/fetchCompositions');
const Composition = require('./lib/models/Composition');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const seedData = () => {
  return fetchCompositions()
    .then(compositions => {
      compositions.forEach(composition => {
        Composition.create(composition);
      });
    })
    .then(() => console.log('done'))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedData();
