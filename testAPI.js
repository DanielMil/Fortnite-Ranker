'use strict';

const express = require('express');
const Fortnite = require('fortnite');
const app = express();

const PORT = 3400;

const client = new Fortnite('14116965-82c4-4733-bb71-bc4f6ea9f9d1');

app.get('/', (req, res) => {
	console.log('-- Parameters --');
	console.log(req.query);
	res.status(200).send({
		randomNumber: Math.random()
	});
});

app.get('/:username', (req, res) => {
	const username = req.params.username;

	client.getInfo(username, 'psn')
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});