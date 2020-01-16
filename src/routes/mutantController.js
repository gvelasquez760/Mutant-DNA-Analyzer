const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const database = require('../database');
const dnaReader = require('../utils/dnaReader');
router.use(bodyParser.json());

router.post('/', async function(req, res) {
  try {
    //validate actual input
    dnaReader.validateInput(req.body['dna']);
  } catch (e) {
    return res.status(e.code).send(e.message);
  };
  //check if actual DNA record is already stored in database
  const result = await database.queryDNA(req.body['dna']);
  if (result != null && result.hasOwnProperty('dna_value') && result.hasOwnProperty('mutant')) {
    //DNA record found nothing more to do
    var mutantFlag = result['mutant'];
  } else {
    //store new DNA record after analysis
    var mutantFlag = dnaReader.isMutant(req.body['dna']);
    await database.insertDNA(req.body['dna'], mutantFlag);
  }
  //response with successful or failed status
  if (mutantFlag) {
    res.status(200).send(mutantFlag);
  } else {
    res.status(403).send(mutantFlag);
  }
});

module.exports = router;
