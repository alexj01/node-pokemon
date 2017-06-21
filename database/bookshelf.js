"use strict";
var knex = require('knex')(require('./knexfile')[process.env.ENV]);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
//# sourceMappingURL=bookshelf.js.map