const express = require('express')
const path = require('path')
const app = express()
const home = require('./routes/home')

const port = process.env.PORT || 3000

app.use(express.static(path.join('public')))
app.set('view engine', 'ejs')

app.use('/', home)

app.listen(port,(error)=>{
	const open = error?`Erro ao connectar ao servidor`
	:`Servidor rodando em http://localhost:${port}`

	console.log(open)
})