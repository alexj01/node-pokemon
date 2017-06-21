"use strict";
var Bookshelf = require('../database/bookshelf');
require('./version-group');
require('./ability');
var Pokemon = Bookshelf.Model.extend({
    tableName: 'pokemon',
    hasTimestamps: true,
    versionGroup: function () {
        return this.belongsTo('VersionGroup', 'id');
    },
    ability: function () {
        return this.belongsToMany('Ability');
    }
});
module.exports = Bookshelf.model('Pokemon', Pokemon);
//# sourceMappingURL=pokemon.js.map