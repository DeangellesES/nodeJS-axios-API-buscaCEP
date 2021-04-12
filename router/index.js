const express = require('express')
const ControllerCEP = require('../controller/index')

class Rotas{
    constructor(){
        this.router = express.Router()
        this.router.get('/cep/:cepid', ControllerCEP.retornarCEP)     
    }
}

module.exports = new Rotas