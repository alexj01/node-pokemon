exports.seed = function(knex, Promise) {
    return knex('versions').insert([
        {
            id: 1,
            version_group_id: 1,
            name: 'red'
        },
        {
            id: 2,
            version_group_id: 1,
            name: 'blue'
        },
        {
            id: 3,
            version_group_id: 2,
            name: 'yellow'
        },
        {
            id: 4,
            version_group_id: 3,
            name: 'gold'
        },
        {
            id: 5,
            version_group_id: 3,
            name: 'silver'
        },
        {
            id: 6,
            version_group_id: 4,
            name: 'crystal'
        },
    ])
}