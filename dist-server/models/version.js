"use strict";
const Bookshelf = require('../database/bookshelf');
require('./version-group');
let Version = Bookshelf.Model.extend({
    tableName: 'versions',
    hasTimestamps: true,
    versionGroup: function () {
        return this.belongsTo('VersionGroup', 'id');
    }
});
module.exports = Bookshelf.model('Version', Version);
