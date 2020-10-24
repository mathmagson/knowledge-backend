// up sempre utilizado para novas versões
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

// down sempre fazendo o contrário feito no up
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
