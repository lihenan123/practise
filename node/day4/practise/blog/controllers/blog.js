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
    var uid = req.session.id;
    Blog_model.show_catalogs(uid,function(err,data){
        res.render("blogCatalogs",{
            'sess':req.session,
            'catablogs':data
        });
    });
}
exports.addcatalog = function(req,res,next){
    var uid = req.session.id;
    var name = req.body.name;
    var order = req.body.sort_order;
    Blog_model.add_blog_catalog(name,uid,function(err,data){
        if (data.affectedRows == 1) {
            res.redirect("/catalog");
        }
        
    });
}
exports.catalog_modify=function(req,res,next){
    var cid = req.query.cid;
    Blog_model.search_catalog(cid,function(err,data){
        if(data.length>0){
            res.render("editCatalog",{
                'sess':req.session,
                'cata':data[0]
            });
        }
    });
}
exports.do_catalog_modify= function(req,res,next){
    var name = req.body.name;
    var cid = req.body.hcid;
    Blog_model.modify_catalog(name,cid,function(err,data){
        if(data.affectedRows==1){
            res.redirect('/catalog');
        }
    });
}