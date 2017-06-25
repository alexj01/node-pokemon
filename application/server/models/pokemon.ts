const Bookshelf = require('../database/bookshelf')
require('./version-group')
require('./ability')

let Pokemon = Bookshelf.Model.extend({
    tableName: 'pokemon',
    hasTimestamps: true,
    versionGroup: function(){
        return this.belongsTo('VersionGroup', 'id')
    },
    ability: function(){
        return this.belongsToMany('Ability')
    }
})

module.exports = Bookshelf.model('Pokemon', Pokemon)