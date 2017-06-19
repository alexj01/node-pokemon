echo "Step 1: Drop existing database."
dropdb pokemon || true && echo "db 'pokemon' not found, skipping dropdb."
echo "Step 2: Creating db 'pokemon'."
createdb pokemon
echo "Step 3: Migrating tables for db 'pokemon'."
knex --knexfile ./database/knexfile.js migrate:latest --env development
echo "Step 4: Seeding data to db 'pokemon'."
knex --knexfile ./database/knexfile.js seed:run --env development || true && echo "No data to seed for db 'pokemon'."
echo "Finished creating db pokemon"