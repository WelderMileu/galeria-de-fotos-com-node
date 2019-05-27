const express = require('express')
const path = require('path')
const app = express()

const home = require('./routes/home')

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use('views', express.static(path.join(__dirname, 'views')))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', home);

app.listen(port,
	(error) => {
		if (error) {
			console.log(`Erro ao connectar ao servidor:${error}`)
		}else{
			console.log(`Servidor rodando em http://localhost:${port}`)
		}
	}
);