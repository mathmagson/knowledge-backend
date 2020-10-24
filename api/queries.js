module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
                WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}

// WITH RECURSIVE subcategories (id) AS (
//     SELECT id FROM categories WHERE id = 5
//     UNION ALL
//     SELECT c.id FROM categories c 
//         INNER JOIN subcategories s
//             ON c."parentId" = s.id
// )
// SELECT id FROM subcategories;

// Exemplo:
// id = 5

// id = 7
// parentId = 5

// id = 8
// parentId = 5

// id = 9
// parentId = 8

// id = 10
// parentId = 5

// Primeira rodada a tabela temporária "subcategories" terá o id = 5 (pai)
// Segunda rodada a tabela terá id = 5 e id = 7
// Terceira id = 5, id = 7 e id = 8
// Quarta id = 5, id = 7, id = 8 e id = 9 (pois o parentId = 8 do id = 9 atendeu a clausula do JOIN uma vez que o id = 8 estava dentro de subcategories)
// Quinta id = 5, 7, 8, 9 e 10