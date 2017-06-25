var knex = require('knex')(require('./knexfile')[process.env.ENV || 'development']);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
