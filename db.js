const POOL = require('pg').Pool;
const pool = new POOL({
    user:'postgres',
    host:'localhost',
    password:'',
    database:'ecommerce',
    port:5432,
});

module.exports = pool;