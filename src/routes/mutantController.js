const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const database = require('../database');
const dnaReader = require('../utils/dnaReader');
router.use(bodyParser.json());

router.post('/', async function(req, res) {
  
});

module.exports = router;
