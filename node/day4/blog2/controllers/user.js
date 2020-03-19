//reg方法 ----把views下的reg.ejs页面加载到浏览器  exports module.exports
var User_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
	res.render('reg');
}

exports.do_reg=function(req,res,next){
	var account=req.body.email;
	var nickname=req.body.name;
	var pass=req.body.pwd;

	//验证用户名是否重名
	User_model.check_name(account,function(err,data){
		if(data.length>0){
			res.redirect('/reg');
		}else{
			User_model.insert_name_by_pass(account,pass,nickname,function(err,data){
				//console.log(data);
				if(data.affectedRows==1){
					res.redirect("/login");
				}
			})
		}
	})

	//console.log(account);
	
	 
	
}

exports.checkname=function(req,res,next){
	var account=req.body.account;
	User_model.check_name(account,function(err,data){
		if(data.length>0){
			//返回一个串
			res.send("success");
			/*
			res.json({
				'name':'success',
			})*/
		}else{
			res.send("error");
		}
	})
}

exports.login=function(req,res,next){
	//res.send("login success");
	res.render("login");
}

exports.do_login=function(req,res,next){
	var account=req.body.email;
	var pass=req.body.pwd;

	User_model.get_name_by_pass(account,pass,function(err,data){
		if(data.length>0){
			//console.log("login success");
			//console.log(data);
			//cookie session  node  cookie-session express-session
			req.session.id=data[0].USER_ID;
			req.session.nickname=data[0].NAME;

			res.redirect("/index");
			/*
			res.render("index_logined",{
				'sess':req.session,
			});*/
		}
	})
}

exports.index=function(req,res,next){
	//console.log(req.session);
	res.render("index_logined",{
		'sess':req.session,
	})
}

exports.unlogin=function(req,res,next){
	req.session=null;
	res.redirect("/index");
}

/*
exports.do_reg=function(req,res,next){

	//var name=req.body.
	//console.log(req.body);
	var name=req.body.uname;
	var pass=req.body.pass;
	var datastr=name+"||"+pass;
	res.send(datastr);
	/*
	var postData="";
	req.setEncoding("utf8");

	req.addListener("data",function(postChunkData){
		postData+=postChunkData;
	})

	req.addListener("end",function(err,data){
		var dataobj=querystring.parse(data);
	})
}

exports.yy=function(req,res,next){
	var name=req.query.name;
	var age=req.query.age;
	var namestr=name+"||"+age;
	res.send(namestr);
}

exports.mm=function(req,res,next){
	var name=req.params.xname;
	res.send(name);
}*/
