exports.seed = function (knex, Promise) {
    return knex('abilities').insert([
        {
            id: 1,
            name: 'swords-dance',
            class: 'attack',
            type: 'normal',
            effect: 20,
            accuracy: null,
            power: null
        },
        {
            id: 2,
            name: 'fire-punch',
            class: 'physical',
            type: 'fire',
            effect: 15,
            accuracy: 100,
            power: 75
        },
        {
            id: 3,
            name: 'mega-punch',
            class: 'physical',
            type: 'normal',
            effect: 20,
            accuracy: 85,
            power: 80
        },
        {
            id: 4,
            name: 'tackle',
            class: 'physical',
            type: 'normal',
            effect: 35,
            accuracy: 100,
            power: 50
        },
        {
            id: 5,
            name: 'string-shot',
            class: 'status',
            type: 'bug',
            effect: 40,
            accuracy: 95,
            power: null
        },
        {
            id: 6,
            name: 'poison-sting',
            class: 'physical',
            type: 'poison',
            effect: 35,
            accuracy: 100,
            power: 15
        }
    ])
}