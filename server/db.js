const Pool = require("pg").Pool;

const pool = new Pool({
  user: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: DATABASE,
});

module.exports = pool;
