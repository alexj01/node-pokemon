exports.seed = function (knex, Promise) {
    return knex('abilities_pokemon').insert([
        {
            ability_id: 1,
            pokemon_id: 1
        },
        {
            ability_id: 2,
            pokemon_id: 2
        },
        {
            ability_id: 3,
            pokemon_id: 3
        },
        {
            ability_id: 4,
            pokemon_id: 4
        },
        {
            ability_id: 5,
            pokemon_id: 4
        },
        {
            ability_id: 6,
            pokemon_id: 5
        },
        {
            ability_id: 1,
            pokemon_id: 2
        }
    ])
}