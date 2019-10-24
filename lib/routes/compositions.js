const { Router } = require('express');
const Composition = require('../models/Composition');

module.exports = Router()
  .get('/', (req, res, next) => {
    Composition
      .find()
      .then(compositions => res.send(compositions))
      .catch(next);
  });
