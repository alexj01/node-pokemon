exports.seed = function (knex, Promise) {
    return knex('pokemon').insert([
        {
            id: 1,
            version_group_id: 1,
            name: 'bulbasaur',
            description: 'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
            habitat: 'grassland',
            weight: 69
        },
        {
            id: 2,
            version_group_id: 1,
            name: 'charmander',
            description: 'bviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail.',
            habitat: 'mountain',
            weight: 85
        },
        {
            id: 3,
            version_group_id: 1,
            name: 'squirtle',
            description: 'fter birth, its\nback swells and\nhardens into a\fshell. Powerfully\nsprays foam from\nits mouth.',
            habitat: 'waters-edge',
            weight: 90
        },
        {
            id: 4,
            version_group_id: 1,
            name: 'carterpie',
            description: 'Its short feet\nare tipped with\nsuction pads that\fenable it to\ntirelessly climb\nslopes and walls.',
            habitat: 'forest',
            weight: 29
        },
        {
            id: 5,
            version_group_id: 2,
            name: 'weedle',
            description: 'Often found in\nforests, eating\nleaves.\fIt has a sharp\nvenomous stinger\non its head.',
            habitat: 'forest',
            weight: 32
        },
    ])
}