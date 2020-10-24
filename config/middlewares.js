const bodyParser = require('body-parser')
const cors = require('cors') // usado para disponibilizar as APIs para outras aplicações, ex.: frontend e backend

module.exports = app => {
    // usado limit e extended para permitir salvar imagens no corpo da requisição do front-end
    // solução encontrada na aula 561. Cadastro de Artigo #01 em um comentário da aula
    app.use(bodyParser.json({limit: '10mb', extended: true}))
    app.use(cors())
}