const app = require('./src/api');
const port = process.env.NODE_PORT || 5000;

//express server start
const server = app.listen(port, function() {
  console.log('Mutant DNA Analyzer in port: ' + port);
});
