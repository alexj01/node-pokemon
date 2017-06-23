"use strict";
const knex = require('knex')(require('./knexfile')[process.env.ENV || 'development']);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
