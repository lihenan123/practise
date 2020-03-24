var Blog_model = require("../models/blog_model.js");

exports.index = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.show_articles_by_name(uid, function (err, data) {
        if (data.length > 0) {
            Blog_model.search_catalog_by_users(uid, function (err, data2) {
                if (data2.length > 0) {
                    res.render("index_logined", {
                        'sess': req.session,
                        'blogs': data,
                        'catas':data2
                    });
                }
            })
        }
    })
}
exports.search = function (req, res, next) {
    var content = req.query.sc;
    var uid = req.session.id;
    Blog_model.search_blog(uid, content, function (err, data) {
        console.log(data);
        if (data.length > 0) {
            Blog_model.search_catalog_by_users(uid, function (err, data2) {
                if (data2.length > 0) {
                    res.render("index_logined", {
                        'sess': req.session,
                        'blogs': data,
                        'catas':data2
                    });
                }
            })
        }
        else {
            console.log("error");
            res.redirect('/index');
        }
    })
}
exports.showcata = function(req,res,next){
    var cid = req.query.cid;
    var uid = req.session.id;
    Blog_model.search_blog_by_catalog(cid,function(err,data){
        if(data.length>0){
            Blog_model.search_catalog_by_users(uid, function (err, data2) {
                if (data2.length > 0) {
                    res.render("index_logined", {
                        'sess': req.session,
                        'blogs': data,
                        'catas':data2
                    });
                }
                else{
                    res.redirect('/index');
                }
            })
        }
    })
}
exports.newblog = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.show_catalogs(uid, function (err, data) {
        res.render("newBlog", {
            'sess': req.session,
            'catablogs': data
        });
    });
}
exports.addnewblog = function (req, res, next) {
    var cid = req.body.catalog;
    var title = req.body.title;
    var content = req.body.newcontent;
    var uid = req.session.id;
    Blog_model.add_new_blog(cid, uid, title, content, function (err, data) {
        if (data.affectedRows == 1) {
            Blog_model.update_catas_by_cataid(cid, function (err, data) {
                if (data.affectedRows == 1) {
                    res.redirect("/index");
                }
            })
        }
    });
}
exports.catalog = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.show_catalogs(uid, function (err, data) {
        res.render("blogCatalogs", {
            'sess': req.session,
            'catablogs': data
        });
    });
}
exports.addcatalog = function (req, res, next) {
    var uid = req.session.id;
    var name = req.body.name;
    Blog_model.add_blog_catalog(name, uid, function (err, data) {
        if (data.affectedRows == 1) {
            res.redirect("/catalog");
        }

    });
}
exports.catalog_modify = function (req, res, next) {
    var cid = req.query.cid;
    Blog_model.search_catalog(cid, function (err, data) {
        if (data.length > 0) {
            res.render("editCatalog", {
                'sess': req.session,
                'cata': data[0]
            });
        }
    });
}
exports.do_catalog_modify = function (req, res, next) {
    var name = req.body.name;
    var cid = req.body.hcid;
    Blog_model.modify_catalog(name, cid, function (err, data) {
        if (data.affectedRows == 1) {
            res.redirect('/catalog');
        }
    });
}
exports.catalog_delete = function (req, res, next) {
    var cid = req.query.cid;
    Blog_model.delete_catalog(cid, function (err, data) {
        if (data.affectedRows == 1) {
            res.redirect('/catalog');
        }
    });
}