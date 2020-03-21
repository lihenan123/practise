var express = require('express');
var router = express.Router();
var User = require("../controllers/user.js");
var Blog = require("../controllers/blog.js");

/* GET home page. */
function checklogin(req,res,next){
  if(req.session.name){
    next();
  }
  else{
    res.redirect("/login");
  }
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
  var arr=["sun","moon","mars"];
  res.render('aaa',{good:arr});
});
 
router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
router.get('/login',User.login);
router.post('/login',User.do_login);
router.post('/check',User.checkname);
router.get('/index',checklogin);
router.get('/index',Blog.index);
router.get('/unlogin',User.unlogin);
router.get('/newblog',Blog.newblog);
router.get('/catalog',Blog.catalog);
// router.get("/xx",User.yy);
// router.get("/zz/:xname",User.mm);
module.exports = router;
