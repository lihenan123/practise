var Blog_model = require("../models/blog_model.js");

exports.index = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.show_articles_by_name(uid,function(err,data){
        if(data.length>0){
            // console.log(data);
            res.render("index_logined",{
                'sess':req.session,
                'blogs':data
            });
        }
    })
}
exports.newblog = function(req,res,next){
    var uid = req.session.id;
    Blog_model.show_catalogs(uid,function(err,data){
        res.render("newBlog",{
            'sess':req.session,
            'catablogs':data
        });
    });
} 
exports.catalog = function(req,res,next){
    res.render("blogCatalogs");
}