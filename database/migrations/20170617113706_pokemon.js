
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('versions', version => {
        version.increments('id').primary()
        version.string('name')
        version.
    })

    knex.schema.createTable('version_groups', version_group => {
      version_group.increments('id').primary()
      version_group.string('name')
      version_group.string('generation')
      version_group.string('pokedex')
      version_group.string('region')
    })

    knex.schema.createTable('pokemon', pokemon => {
      pokemon.increments('id').primary()
      pokemon.string('name')

    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('versions')
      knex.schema.dropTable('version_groups')
      knex.schema.dropTable('pokemon')
  ])
};
