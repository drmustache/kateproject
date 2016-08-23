var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kaitlin Griffith' });
});

router.get('/crj305', function(req, res, next) {
  res.render('crj305', { title: 'Kaitlin' });
});

router.get('/crj306', function(req, res, next) {
  res.render('crj306', { title: 'Kaitlin' });
}); 

module.exports = router;
