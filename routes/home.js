const express = require('express')
const app = express.Router()

app.get('/',(req, res, next)=>{
	res.render('home')
})

module.exports = app;