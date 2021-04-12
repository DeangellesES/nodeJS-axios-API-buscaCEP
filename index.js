const express = require('express')
const rota = require('./router/index')

const app = express()
app.use(rota.router)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))