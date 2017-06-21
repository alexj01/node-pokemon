const express = require('express');
const router = express.Router();

const VERSIONGROUP = require('../../models/version-group')


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

module.exports = router;