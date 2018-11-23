const mysql = require('mysql');


const config = {
	host: 'localhost',
	user: 'apiuser',
	password: 'password',
	database: 'api',
};


const pool = mysql.createPool(config);

module.exports = pool;


