var express = require('express');
var router = express.Router();
var val=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  val=val+1;
  res.send('user access are:' +val);
});

module.exports = router;
