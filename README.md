# Mutant DNA Analyzer

## service URL: http://3.229.94.148:5000

## service example:

```bash
curl -d '{"dna":["AATA", "CTAT", "ATCT", "TTAA"]}' -H "Content-Type: application/json" -X POST http://3.229.94.148:5000/mutant
curl  -H "Content-Type: application/json" -X GET http://3.229.94.148:5000/stats
```

## Installation requirements:

```bash
NodeJS v12.14.1
```

## Install dependencies:

```bash
$ npm install
```
## How to run:

```bash
$ node app.js
```

## Tests

  To run the test suite (Jest), first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

current test coverage:

[![Jest Results](https://i.imgur.com/GaJ9ZOg.png "Jest Results")](https://i.imgur.com/GaJ9ZOg.png "Jest Results")
