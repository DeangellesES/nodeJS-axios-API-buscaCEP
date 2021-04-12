const axios = require('axios')

class ControllerCEP{
    async retornarCEP(req, res){
        const {cep, logradouro , complemento, bairro, localidade, uf, ibge, gia, ddd, siafi} = (await axios.get(`https://viacep.com.br/ws/${req.params.cepid}/json/`)).data
        const viacep = {"cep" : cep, "endereço" : logradouro, "complemento" : complemento, "bairro" : bairro, "localidade" : localidade, "uf" : uf, "ibge" : ibge, "gia" : gia, "ddd" : ddd, "siafi" : siafi}
        console.log(viacep)
        return res.json(viacep)    
    }
}

module.exports = new ControllerCEP;
