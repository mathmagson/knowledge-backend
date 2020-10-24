module.exports = app => {
    const Stat = app.mongoose.model('Statistics', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        // primeiro parâmetro sem filtrar nada, objeto vazio
        // segundo parâmetro sem tirar nada, por exemplo algum atributo como id
        // terceiro parâmetro pegando de forma decrescente, ou seja, a última estatística cadastrada
        Stat.findOne({}, {}, { sort: { 'createdAt' : -1 } })
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stat || defaultStat)
            })
    }

    return { Stat, get }
}