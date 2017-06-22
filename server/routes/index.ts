const express = require('express');
const router = express.Router();

const VERSIONGROUP = require('../../models/version-group')
const VERSION = require('../../models/version')
const POKEMON = require('../../models/pokemon')
const ABILITY = require('../../models/ability')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: `hello pokemon!`
  });
});

router.get('/versionGroups', (req, res, next) => {
  VERSIONGROUP.fetchAll().then(function (versionGroups) {
    res.status(200).json({versionGroups})
  }).catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});

router.get('/versions', (req, res, next) => {
  VERSION.fetchAll().then(function (versions) {
    res.status(200).json({versions})
  }).catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});

router.get('/pokemon', (req, res, next) => {
  POKEMON.fetchAll().then(function (pokemon) {
    res.status(200).json({pokemon})
  }).catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});

router.get('/abilities', (req, res, next) => {
  ABILITY.fetchAll().then(function (abilities) {
    res.status(200).json({abilities})
  }).catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});

router.get('/pokemon/abilities', (req, res, next) => {
  POKEMON.fetchAll({withRelated:['ability']}).then(function (abilities) {
    res.status(200).json({abilities})
  }).catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});

module.exports = router;