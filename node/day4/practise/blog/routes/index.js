var express = require('express');
var router = express.Router();
var user = require("../controllers/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
  var arr=["sun","moon","mars"];
  res.render('aaa',{good:arr});
});

router.get('/reg',user.reg);

module.exports = router;
