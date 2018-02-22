'use strict';

const express = require('express');
const Fortnite = require('fortnite');
const app = express();

const PORT = 3400;

const client = new Fortnite('14116965-82c4-4733-bb71-bc4f6ea9f9d1');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', (req, res) => {
	const username = req.query.username;
	const platform = req.query.platform; 

	client.getInfo(username, platform)
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