const config = require('../knexfile.js')
const knex = require('knex')(config)

// início
// executa a migrations quando executa o backend
// porém não é muito recomendado em sistemas maiores, pois pode acontecer da
// aplicação ter vários nós e sempre que um nó subir, as migrations serem executadas
knex.migrate.latest([config])
// fim

module.exports = knex