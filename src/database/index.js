const Sequelize = require('sequelize');
const config = require(__dirname + '/config/config.js')[process.env.NODE_ENV];
const sequelize = new Sequelize(config);
const dna_landing = sequelize.import ('../models/dna_landing');
const op = Sequelize.Op;

module.exports = {
  truncateLanding: async () => {
    await dna_landing.sync({force: true});
    console.log('dna_landing truncated');
  },
  checkConnection: async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
      return err;
    }
  },
  queryDNA: async (dna) => {
    try {
      const result = await dna_landing.findOne({
        where: {
          dna_value: {
            [op.eq]: dna
          }
        }
      });
      return (
        result != null
        ? result['dataValues']
        : result);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  insertDNA: async (dnaValue, mutantFlag) => {
    try {
      await dna_landing.create({dna_value: dnaValue, mutant: mutantFlag});
      console.log('dna saved');
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  getMutantRatio: async () => {
    try {
      const result = await sequelize.query(`SELECT COUNT(*) filter (where "mutant")
       as count_mutant_dna, COUNT( *)filter(where not "mutant")as count_human_dna,
       CASE WHEN count( *)filter(where not "mutant") = 0 THEN 0 ELSE(TRUNC(COUNT( *)filter(where "mutant")::numeric / COUNT( *)filter(where not "mutant"),
        1))END as ratio from public.dna_landing;`, {type: sequelize.QueryTypes.SELECT});
      return result[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
