module.exports = {
  validateInput: function(dna) {
    //validate input and set custom errors
    if (typeof dna == 'undefined') {
      throw {
        code : 422,
        message: "DNA Parameter Missing"
      };
    } else {
      if (dna.constructor !== Array || dna.length == 0) {
        throw {
          code : 400,
          message: "DNA Parameter Type Invalid"
        };
      } else {
        if (dna.some((val) => val.length != dna.length) || dna.some((val) => val.match(/^[ATCG]*$/) == null)) {
          throw {
            code : 400,
            message: "DNA Parameter Value Invalid"
          };
        }
      }
    }
  },
  //check if current DNA is mutant or human
  isMutant: function(dna) {
    const lastPossibleMatch = dna.length - 4 + 1;
    for (var row = 0; row < dna.length; row++) {
      for (var column = 0; column < dna.length; column++) {
        var currentElement = dna[row][column];
        if (column < lastPossibleMatch) {
          if (currentElement == dna[row][column + 1] && currentElement == dna[row][column + 2] && currentElement == dna[row][column + 3]) {
            console.log('row match');
            return true;
          }
        }
        if (row < lastPossibleMatch) {
          if (currentElement == dna[row + 1][column] && currentElement == dna[row + 2][column] && currentElement == dna[row + 3][column]) {
            console.log('column match');
            return true;
          }
        }
        if (column < lastPossibleMatch && row < lastPossibleMatch) {
          if (currentElement == dna[row + 1][column + 1] && currentElement == dna[row + 2][column + 2] && currentElement == dna[row + 3][column + 3]) {
            console.log('diagonal right match');
            return true;
          }
        }
        if (column >= lastPossibleMatch && row < lastPossibleMatch) {
          if (currentElement == dna[row + 1][column - 1] && currentElement == dna[row + 2][column - 2] && currentElement == dna[row + 3][column - 3]) {
            console.log('diagonal left match');
            return true;
          }
        }
      }
    }
    return false;
  }
}
