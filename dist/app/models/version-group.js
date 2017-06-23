"use strict";
const BOOKSHELF = require('../database/bookshelf');
require('./version');
require('./pokemon');
let VersionGroup = BOOKSHELF.Model.extend({
    tableName: 'version_groups',
    hasTimestamps: true,
    version: function () {
        return this.hasMany('Version', 'version_group_id');
    },
    pokemon: function () {
        return this.hasMany('Pokemon', 'version_group_id');
    }
});
module.exports = BOOKSHELF.model('VersionGroup', VersionGroup);
