const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const database = require('../database');
router.use(bodyParser.json());

router.get('/', async function(req, res) {
  try {
    const currentRatio = await database.getMutantRatio();
    res.status(200).send(currentRatio);
  } catch (e) {
    return res.status(400).send('Invalid Response');
  };
});

module.exports = router;
