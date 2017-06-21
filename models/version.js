"use strict";
var Bookshelf = require('../database/bookshelf');
require('./version-group');
var Version = Bookshelf.Model.extend({
    tableName: 'versions',
    hasTimestamps: true,
    versionGroup: function () {
        return this.belongsTo('VersionGroup', 'id');
    }
});
module.exports = Bookshelf.model('Version', Version);
//# sourceMappingURL=version.js.map