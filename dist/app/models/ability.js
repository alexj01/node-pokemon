"use strict";
const Bookshelf = require('../database/bookshelf');
require('./pokemon');
let Ability = Bookshelf.Model.extend({
    tableName: 'abilities',
    hasTimestamps: true,
    pokemon: function () {
        return this.belongsToMany('Pokemon');
    }
});
module.exports = Bookshelf.model('Ability', Ability);
