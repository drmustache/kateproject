var express = require('express');
var router = express.Router();

router.get('/crj305', function(req, res, next) {
  res.render('crj305', { title:'It works finally'});
});

module.exports = router;