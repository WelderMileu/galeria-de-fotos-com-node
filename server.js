const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const cadastrar = require('./routes/cadastrar')
const home = require('./routes/home')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/cadastrar', cadastrar)
app.use('/', home)

app.listen(port,(error)=>{
	const open = error?`Erro ao connectar ao servidor ${port}`
	:`Servidor rodando em http://localhost:${port}`

	console.log(open)
})