exports.reg=function(req,res,next){
    res.render('reg');
}
exports.do_reg=function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    var struser = name+"||"+pass;
    res.send(struser);
}
// exports.yy=function(req,res,next){
// 	var name=req.query.name;
// 	var age=req.query.age;
// 	var namestr=name+"||"+age;
// 	res.send(namestr);
// }

// exports.mm=function(req,res,next){
// 	var name=req.params.xname;
// 	res.send(name);
}