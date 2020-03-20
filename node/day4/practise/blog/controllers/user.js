var User_model = require("../models/user_model.js");
exports.reg = function (req, res, next) {
    res.render('reg');
}
exports.do_reg = function (req, res, next) {
    var account = req.body.email;
    var nickname = req.body.name;
    var pass = req.body.pwd;
    User_model.insert_name_pass(account,pass,function(err,data){
        // console.log(data);
        if(data.affectedRows==1){
            res.redirect("/login");
        }
    })
    
}
exports.login=function(req,res,next){
    res.send("login success");
}
// exports.do_reg=function(req,res,next){
//     var name = req.body.uname;
//     var pass = req.body.pass;
//     var struser = name+"||"+pass;
//     res.send(struser);
// }
// exports.yy=function(req,res,next){
// 	var name=req.query.name;
// 	var age=req.query.age;
// 	var namestr=name+"||"+age;
// 	res.send(namestr);
// }

// exports.mm=function(req,res,next){
// 	var name=req.params.xname;
// 	res.send(name);
