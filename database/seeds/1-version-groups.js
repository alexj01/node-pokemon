exports.seed = function (knex, Promise) {
    return knex('abilities_pokemon').del()
        .then(() => knex('abilities').del())
        .then(() => knex('pokemon').del())
        .then(() => knex('versions').del())
        .then(() => knex('version_groups').del())
        .then(() => {
            return knex('version_groups').insert([{
                    id: 1,
                    name: 'red-blue',
                    generation: 'i',
                    pokedex: 'kanto',
                    region: 'kanto'
                },
                {
                    id: 2,
                    name: 'yellow',
                    generation: 'i',
                    pokedex: 'kanto',
                    region: 'kanto'
                },
                {
                    id: 3,
                    name: 'gold-silver',
                    generation: 'ii',
                    pokedex: 'original-johto',
                    region: 'kanto,original-johto'
                },
                {
                    id: 4,
                    name: 'crystal',
                    generation: 'ii',
                    pokedex: 'original-johto',
                    region: 'kanto,johto'
                },
            ])
        })
}