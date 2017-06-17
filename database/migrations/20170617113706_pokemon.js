
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('versions', version => {
        version.increments('id').primary()
        version.string('name')
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
      pokemon.string('description')
      pokemon.string('type')
    })

    knex.schema.createTable('abilities', abilities => {
      abilities.increments('id').primary()
      abilities.string('name')
      abilities.string('class')
      abitities.string('effect')
      abilities.number('accuracy')
      abilities.number('power')
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('versions')
      knex.schema.dropTable('version_groups')
      knex.schema.dropTable('pokemon')
      knex.schema.dropTable('abilities')
  ])
};
