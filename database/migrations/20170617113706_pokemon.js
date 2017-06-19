exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTableIfNotExists('version_groups', version_group => {
      version_group.increments('id').primary().unsigned().index().notNullable()
      version_group.string('name')
      version_group.string('generation')
      version_group.string('pokedex')
      version_group.string('region')
      version_group.timestamps(true, true)
    }),

    knex.schema.createTableIfNotExists('versions', version => {
      version.increments('id').primary().unsigned().index().notNullable()
      version.integer('version_group_id').unsigned()
      version.foreign('version_group_id').references('version_groups.id')
      version.string('name')
      version.timestamps(true, true)
    }),

    knex.schema.createTableIfNotExists('pokemon', pokemon => {
      pokemon.increments('id').primary().unsigned().index().notNullable()
      pokemon.integer('version_id').unsigned()
      pokemon.foreign('version_id').references('versions.id')
      pokemon.integer('pokedex_entry_number')
      pokemon.string('name')
      pokemon.string('description')
      pokemon.string('type')
      pokemon.timestamps(true, true)
    }),

    knex.schema.createTableIfNotExists('abilities', abilities => {
      abilities.increments('id').primary().unsigned().index().notNullable()
      abilities.string('name')
      abilities.string('class')
      abilities.string('effect')
      abilities.integer('accuracy')
      abilities.integer('power')
      abilities.timestamps(true, true)
    }),

    knex.schema.createTableIfNotExists('abilities_pokemon', abilities_pokemon => {
      abilities_pokemon.integer('ability_id').unsigned()
      abilities_pokemon.foreign('ability_id').references('abilities.id')
      abilities_pokemon.integer('pokemon_id').unsigned()
      abilities_pokemon.foreign('pokemon_id').references('pokemon.id')
    })

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('abilities_pokemon'),
    knex.schema.dropTable('abilities'),
    knex.schema.dropTable('pokemon'),
    knex.schema.dropTable('versions'),
    knex.schema.dropTable('version_groups')
  ])
};