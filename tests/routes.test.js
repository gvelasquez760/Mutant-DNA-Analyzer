const database = require('../src/database');
const request = require('supertest');
const app = require('../src/api');

beforeAll(async () => {
  await database.checkConnection();
  await database.truncateLanding();
})

describe('POST endpoint', () => {
  it('mutant DNA API', async () => {
    const res = await request(app).post('/mutant').send({
      "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
      ]
    })
    expect(res.statusCode).toEqual(200)
  }),
  //request with empty array
  it('mutant DNA API', async () => {
    const res = await request(app).post('/mutant').send({"dna": []})
    expect(res.statusCode).toEqual(400)
  }),
  //request with wrong array values
  it('mutant DNA API', async () => {
    const res = await request(app).post('/mutant').send({
      "dna": ["FFFF", "GGGG", "HHHH", "1234"]
    })
    expect(res.statusCode).toEqual(400)
  }),
  //empty body
  it('mutant DNA API', async () => {
    const res = await request(app).post('/mutant').send({})
    expect(res.statusCode).toEqual(422)
  })
})

describe('GET stats endpoint', () => {
  it('should return stats', async () => {
    const res = await request(app).get('/stats').send({});
    expect(res.statusCode).toEqual(200);
  })
})

//retry signature
describe('POST mutant endpoint', () => {
  it('mutant DNA API', async () => {
    const res = await request(app).post('/mutant').send({
      "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
      ]
    })
    expect(res.statusCode).toEqual(200)
  })
})
