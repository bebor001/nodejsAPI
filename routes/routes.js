const pool = require('../data/config');
//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();

//app.use(bodyParser());
//app.use(bodyParser.urlencoded({
//        extended: true,
//}));


const router = app => {

	app.get('/users/:id', (request, response) => {
		const id = request.params.id;
		console.log(id);
		pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
			if (error) throw error;

			response.send(result);
		});
	});

	app.get('/users', (request, response) => {
		pool.query('SELECT * FROM users', (error, result) => {
			if (error) throw error;
			response.send(result);
		});
	});

	app.post('/users', (request, response) => {
		console.log(request.body);
		pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
			if (error) throw error;

			response.status(201).send(`User added with ID: ${result.insertId}`);
		});
	});


	app.delete('/users/:id', (request, response) => {
		const id = request.params.id;

		pool.query('DELETE FROM users WHERE id = ?', id, (error,result) => {
			if (error) throw error;
			response.send('User deleted.');
		});
	});



}



// Export the router
module.exports = router;
