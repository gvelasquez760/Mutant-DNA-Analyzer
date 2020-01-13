const express = require('express');
const app = express();

const MutantController = require('./routes/mutantController');
app.use('/mutant', MutantController);

const StatsController = require('./routes/statsController');
app.use('/stats', StatsController);

module.exports = app;
