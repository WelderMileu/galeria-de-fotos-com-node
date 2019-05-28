const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.get('/',(req, res) => {
	return res.send("Hello World!")
}) 

app.listen(port,(error)=>{
	const open = error?`Erro ao connectar ao servidor`
	:`Servidor rodando em http://localhost:${port}`

	console.log(open)
})