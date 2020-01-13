module.exports = {
  test: {
    username: "nziypkvl",
    password: "jJSDu6lfoLjhi7zUIWMzhxgrodR_KSD_",
    database: "nziypkvl",
    host: "rajje.db.elephantsql.com",
    dialect: 'postgres',
    logging: true
  },
  dev: {
    username: "nziypkvl",
    password: "jJSDu6lfoLjhi7zUIWMzhxgrodR_KSD_",
    database: "nziypkvl",
    host: "rajje.db.elephantsql.com",
    dialect: 'postgres',
    logging: true
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
    logging: false
  }
};
