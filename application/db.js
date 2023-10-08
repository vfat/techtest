const Pool = require('pg').Pool
const { DBHOST, DBNAME, DBPASSWORD, DBPORT, DBUSER } = require('./config.js')

const dbpool = new Pool({
    user: DBUSER,
    host: DBHOST,
    database: DBNAME,
    password: DBPASSWORD,
    port: DBPORT,
})


module.exports = {

    dbpool:dbpool

}