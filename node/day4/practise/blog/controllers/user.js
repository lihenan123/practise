var User_model = require("../models/user_model.js");
exports.reg = function (req, res, next) {
    res.render('reg');
}

exports.do_reg = function (req, res, next) {
    var account = req.body.email;
    var nickname = req.body.name;
    var pass = req.body.pwd;
    User_model.insert_name_pass(account, pass,nickname, function (err, data) {
        // console.log(data);
        if (data.affectedRows == 1) {
            res.redirect("/login");
        }
    })

}
exports.login = function (req, res, next) {
    res.render('login');
}
exports.do_login = function (req, res, next) {
    // console.log(req.body);
    var account = req.body.email;
    var pass = req.body.pwd;
    User_model.check_login(account, pass, function (err, data) {
        if (data.length > 0) {
            // res.send("login success");
            req.session.id = data[0].USER_ID;
            req.session.name = data[0].ACCOUNT;
            // res.render("index",{
            //     'title':'loginnn',
            //     'sess':req.session
            // })
            res.redirect("/index");
        } 
        else {
            res.send("login error");
        }
    })
}

exports.unlogin=function(req,res,next){
    req.session=null;
    res.redirect("/index");
}
exports.checkname = function (req, res, next) {
    var account = req.body.email;
    User_model.check_name(account, function (err, data) {
        if (data.length > 0) {
            res.send("success");
        }
        else {
            res.send("error");
        }
    })
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
