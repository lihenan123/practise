var User_model = require("../models/user_model.js");
exports.reg = function (req, res, next) {
    res.render('reg');
}
// <% blogs.forEach(blog,index){%>
//     <li class="Blog" id="blog_24027">
//       <h2 class="BlogAccess_true BlogTop_0"><a href="viewPost_comment.htm"><%= blog.TITLE%></a></h2>
//       <div class="outline">
//         <span class="time">发表于 <%= blog.ADD_TIME%></span>
//         <span class="catalog">分类: <a href="#">工作日志</a></span>
//         <span class="stat">统计: 1评/4阅</span>
//               <span class="blog_admin">( <a href="newBlog.htm">修改</a> | <a href="javascript:delete_blog(24027)">删除</a> )</span>	  
//             </div>
//           <div class="TextContent" id="blog_content_24027">
//               <%= blog.CONTENT%>
//           <div class="fullcontent"><a href="viewPost_comment.htm">阅读全文...</a></div>
//               </div>
//         </li>
//     <% }%>
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
