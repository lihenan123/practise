var express = require('express');
var router = express.Router();
var User = require("../controllers/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
  var arr=["sun","moon","mars"];
  res.render('aaa',{good:arr});
});

router.get('/reg',User.reg);
//router.post('/reg',User.do_reg);
// router.get("/xx",User.yy);
// router.get("/zz/:xname",User.mm);
module.exports = router;
