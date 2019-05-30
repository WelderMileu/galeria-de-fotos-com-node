const express = require('express')
const app = express.Router()

app.get('/',(req ,res, next) => {
	return res.render('painel')
})

module.exports = app;