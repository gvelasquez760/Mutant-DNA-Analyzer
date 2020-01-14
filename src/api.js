const express = require('express');
const app = express();

//mutant routes definition
const MutantController = require('./routes/mutantController');
app.use('/mutant', MutantController);

//stats routes definition
const StatsController = require('./routes/statsController');
app.use('/stats', StatsController);

module.exports = app;
