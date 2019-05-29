const express = require('express')
const app = express.Router()

app.get('/',(req, res, next) => {
	return res.render('cadastrar')
});

module.exports = app;