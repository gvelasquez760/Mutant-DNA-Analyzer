const dnaReader = require('../src/utils/dnaReader');

describe('input validation', () => {
  //valid input test
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.validateInput([
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG"
    ])).toBe(undefined);
  })
})

describe('multiple DNA test', () => {
  //no match (human)
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.isMutant(["TCGA", "TCCA", "CAAA", "TACC"])).toBeFalsy();
  }),
  //row match
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.isMutant([
      "CTGCGATCCG",
      "CAGTTCATTC",
      "TTATGTCCCC",
      "AGAACGCGAT",
      "TCCCTATACC",
      "TCACTGGGAT",
      "AGAACGCGAT",
      "AGAACGAACT",
      "CTGCGATTCG",
      "CAGTTCATTC"
    ])).toBeTruthy();
  }),
  //diagonal right match
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.isMutant([
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG"
    ])).toBeTruthy();
  }),
  //diagonal left match
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.isMutant([
      "CTGCGA",
      "CAGTAC",
      "TTAAGT",
      "ATACGG",
      "TCCCTA",
      "TCACTG"
    ])).toBeTruthy();
  }),
  //column match
  it('Evaluate mutant DNA', async () => {
    expect(dnaReader.isMutant([
      "CTGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "TCCCTA",
      "TCACTG"
    ])).toBeTruthy();
  })
})
