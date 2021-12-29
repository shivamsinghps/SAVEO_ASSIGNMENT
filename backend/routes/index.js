var express = require('express');
var router = express.Router();
const customLimiter = require('../middleware/customLimiter')

router.get('/', customLimiter, function (req, res, next) {
  console.log('ff');
  res.json({ title: 'Home Set' });
});

module.exports = router;
